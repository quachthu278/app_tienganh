import asyncio
import logging
import os
import sys
from pathlib import Path
from typing import Any, Dict, List, Optional

from dotenv import load_dotenv

# Set up logging
logging.basicConfig(
    level=logging.INFO,
    format="%(asctime)s | %(levelname)-8s | %(name)s - %(message)s",
)
logger = logging.getLogger("vision-agent")

# 1. Load Environment Variables from parent or local .env
parent_env = Path(__file__).resolve().parent.parent / ".env"
if parent_env.exists():
    load_dotenv(parent_env)
load_dotenv()  # Fallback to local .env if available

# Ensure keys exist
stream_api_key = os.environ.get("STREAM_API_KEY")
stream_api_secret = os.environ.get("STREAM_API_SECRET")
gemini_api_key = os.environ.get("GEMINI_API_KEY") or os.environ.get("GOOGLE_API_KEY")

if not stream_api_key or not stream_api_secret:
    logger.warning("STREAM_API_KEY or STREAM_API_SECRET is missing from environment.")

if gemini_api_key:
    os.environ["GEMINI_API_KEY"] = gemini_api_key
    os.environ["GOOGLE_API_KEY"] = gemini_api_key
else:
    logger.warning("GEMINI_API_KEY is missing from environment.")

# Import Vision Agents and plugins (using official google-genai underneath)
from google import genai
import websockets
from vision_agents.core import Agent, AgentLauncher, Runner, User
from vision_agents.plugins import gemini, getstream
from getstream.models import MemberRequest

# Warm, human, energetic, and lesson-focused Teacher Prompt
BASE_TEACHER_INSTRUCTIONS = """\
You are a real, warm, energetic, and encouraging 1-on-1 language teacher having a live voice conversation with your student.

Personality & Voice:
- Sound genuinely human — enthusiastic, caring, a little playful. Never robotic, never lecture-y.
- Use natural contractions: I'm, let's, that's, you're, we're, it's.
- Sprinkle in friendly expressions: "Awesome!", "Oh nice try!", "So close!", "You've got this!", "Love it!"

How to Teach:
- Speak mostly in English so the student stays relaxed and understands you.
- Introduce each target-language word or phrase slowly and clearly, immediately followed by a short English translation.
- Keep EVERY turn to 1 or 2 short conversational sentences — never recite lists or give long explanations.
- After saying a new word, always invite the student to say it back: "Can you try that?", "Go ahead!", "Give it a go!"
- Listen carefully. If the student makes a mistake, say something warm like "Almost! Let's try that one more time —" then gently model the correct form.
- If they get it right, celebrate specifically: "Perfect pronunciation!", "Yes! That's exactly it!"

Strict Boundaries:
- Teach ONLY the vocabulary, phrases, and goals of the current lesson. Do not drift to other topics or other languages.
- Do not ask unrelated questions or share unrelated facts.
"""

def build_lesson_instructions(
    target_language: str = "Spanish",
    lesson_title: str = "",
    goals: Optional[List[Any]] = None,
    vocabulary: Optional[List[Any]] = None,
    phrases: Optional[List[Any]] = None,
    teacher_prompt: str = "",
    scenario: str = "",
) -> str:
    """Compose dynamic instructions injecting specific lesson context."""
    sections = [
        BASE_TEACHER_INSTRUCTIONS,
        f"\n--- ACTIVE LESSON DIRECTIVE ---",
        f"Target Language: {target_language}",
    ]
    if lesson_title:
        sections.append(f"Lesson Topic: {lesson_title}")
    if scenario:
        sections.append(f"Teaching Scenario: {scenario}")
    if goals:
        goal_items = "; ".join(str(g) for g in goals)
        sections.append(f"Lesson Goals: {goal_items}")
    if vocabulary:
        vocab_items = ", ".join(str(v) for v in vocabulary)
        sections.append(f"Core Target Vocabulary: {vocab_items}")
    if phrases:
        phrase_items = "; ".join(str(p) for p in phrases)
        sections.append(f"Target Phrases to Practice: {phrase_items}")
    if teacher_prompt:
        sections.append(f"Specific Guidance: {teacher_prompt}")

    sections.append(
        f"\nRemember: Stay strictly focused on teaching {target_language} for this lesson. Speak mostly in warm, encouraging English with 1-2 sentence turns, pronouncing {target_language} words slowly."
    )
    return "\n".join(sections)

def create_agent(
    target_language: str = "Spanish",
    lesson_title: str = "",
    goals: Optional[List[Any]] = None,
    vocabulary: Optional[List[Any]] = None,
    phrases: Optional[List[Any]] = None,
    teacher_prompt: str = "",
    scenario: str = "",
) -> Agent:
    """Create a new Agent instance configured with Stream Edge and Gemini Live Multimodal."""
    instructions = build_lesson_instructions(
        target_language=target_language,
        lesson_title=lesson_title,
        goals=goals,
        vocabulary=vocabulary,
        phrases=phrases,
        teacher_prompt=teacher_prompt,
        scenario=scenario,
    )

    return Agent(
        edge=getstream.Edge(),
        agent_user=User(name="AI Teacher", id="ai-teacher"),
        instructions=instructions,
        llm=gemini.Realtime(
            api_key=gemini_api_key,
        ),
    )

async def join_call(agent: Agent, call_type: str, call_id: str, **kwargs) -> None:
    """Connect to the Stream call, read lesson metadata, inject context, and begin teaching."""
    logger.info(f"Connecting to Stream Edge call: {call_id} (type: {call_type}) as ai-teacher")
    call = await agent.create_call(call_type, call_id)

    target_language = "Spanish"
    lesson_title = ""
    goals: List[Any] = []
    vocabulary: List[Any] = []
    phrases: List[Any] = []
    teacher_prompt = ""
    scenario = ""

    # Fetch custom lesson data stored in the Stream Call if available
    try:
        call_info = await call.get()
        call_data = getattr(call_info, "data", None)
        call_obj = getattr(call_data, "call", None)
        custom_data = (
            getattr(call_obj, "custom", None)
            or getattr(call_data, "custom", None)
            or getattr(call_info, "custom", {})
            or {}
        )
        if isinstance(custom_data, dict):
            target_language = (
                custom_data.get("language")
                or custom_data.get("target_language")
                or target_language
            )
            lesson_title = (
                custom_data.get("lesson")
                or custom_data.get("lesson_title")
                or lesson_title
            )
            goals = custom_data.get("goals") or []
            vocabulary = custom_data.get("vocabulary") or []
            phrases = custom_data.get("phrases") or []
            teacher_prompt = (
                custom_data.get("prompt")
                or custom_data.get("teacher_prompt")
                or teacher_prompt
            )
            scenario = (
                custom_data.get("scenario")
                or custom_data.get("systemPrompt")
                or scenario
            )
            logger.info(
                f"Loaded lesson context: language='{target_language}', title='{lesson_title}', goals={len(goals)}, vocab={len(vocabulary)} words"
            )
    except Exception as exc:
        logger.warning(f"Could not read custom call data: {exc}. Using default lesson settings.")

    # Dynamically inject custom lesson instructions into Gemini Live session
    updated_instructions = build_lesson_instructions(
        target_language=target_language,
        lesson_title=lesson_title,
        goals=goals,
        vocabulary=vocabulary,
        phrases=phrases,
        teacher_prompt=teacher_prompt,
        scenario=scenario,
    )

    if hasattr(agent.llm, "set_instructions"):
        agent.llm.set_instructions(updated_instructions)

    # Grant both ai-teacher and student user admin roles and audio permissions in audio_room
    members_to_update = [MemberRequest(user_id="ai-teacher", role="admin")]
    try:
        # 1. First check explicit student_id stored in custom data
        student_id = (
            custom_data.get("student_id")
            or custom_data.get("userId")
            or custom_data.get("user_id")
        )

        # 2. Check call members list
        call_info_data = getattr(call_info, "data", None) if "call_info" in locals() else None
        if call_info_data:
            for member in getattr(call_info_data, "members", []):
                uid = getattr(member, "user_id", None) or (
                    member.user.id if hasattr(member, "user") and member.user else None
                )
                if uid and uid != "ai-teacher" and not any(m.user_id == uid for m in members_to_update):
                    members_to_update.append(MemberRequest(user_id=uid, role="admin"))

        # 3. If student_id found in custom_data, add it
        if student_id and student_id != "ai-teacher" and not any(m.user_id == student_id for m in members_to_update):
            members_to_update.append(MemberRequest(user_id=student_id, role="admin"))

        # 4. Fallback: Parse Clerk user_ prefix from call_id
        import re
        user_match = re.search(r"(user_[A-Za-z0-9_-]+)", call_id)
        if user_match:
            clerk_uid = user_match.group(1)
            if clerk_uid and clerk_uid != "ai-teacher" and not any(m.user_id == clerk_uid for m in members_to_update):
                members_to_update.append(MemberRequest(user_id=clerk_uid, role="admin"))

        await call.update_call_members(update_members=members_to_update)
        logger.info(f"Updated call members to admin: {[m.user_id for m in members_to_update]}")
    except Exception as mem_err:
        logger.debug(f"update_call_members notice: {mem_err}")

    try:
        for m in members_to_update:
            await call.update_user_permissions(
                user_id=m.user_id,
                grant_permissions=["send-audio", "send-video"],
            )
            logger.info(f"Granted audio/video permissions to {m.user_id}")
    except Exception as perm_err:
        logger.debug(f"update_user_permissions notice: {perm_err}")

    # Ensure call is live for audio publishing in audio_room
    try:
        if hasattr(call, "go_live"):
            await call.go_live()
    except Exception as gl_err:
        logger.debug(f"call.go_live notice: {gl_err}")


    try:
        async with agent.join(call):
            logger.info("Successfully joined call session. Sending opening greeting to student...")
            lesson_context = f'\"{ lesson_title }\"' if lesson_title else "today's lesson"
            greeting = (
                f"Open the session! Greet the student warmly in English as their friendly 1-on-1 {target_language} teacher. "
                f"In one punchy, excited sentence tell them you'll be working on {lesson_context} together. "
                f"Then immediately ask them one simple opening question to get them talking — keep it fun!"
            )
            await asyncio.sleep(0.5)
            await agent.simple_response(greeting)
            logger.info("Opening greeting sent. Agent is now live — listening for student responses...")
            await agent.finish()
    except Exception as session_err:
        logger.info(f"Agent session ended: {session_err}")

def main() -> None:
    # Default to 'serve' mode on 0.0.0.0 so Android Emulator and LAN devices can connect
    if len(sys.argv) == 1:
        sys.argv.extend(["serve", "--host", "0.0.0.0"])
    elif sys.argv[1] == "serve" and "--host" not in sys.argv:
        sys.argv.extend(["--host", "0.0.0.0"])

    launcher = AgentLauncher(
        create_agent=create_agent,
        join_call=join_call,
    )
    runner = Runner(launcher)
    runner.cli()

if __name__ == "__main__":
    main()
