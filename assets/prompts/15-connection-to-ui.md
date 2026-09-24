Read AGENTS.md first and follow it strictly.

Use the installed Vision Agents skill and Stream skills to connect the Audio Lesson screen to the Vision Agent so the AI teacher joins the same Stream call as the user.

Key Requirements:
1. Expo API & Network configuration:
   - Add Expo API routes to start and stop the agent that proxy to the Vision Agent server.
   - For Android Emulator support, ensure network requests to local servers use `Platform.OS === 'android' ? 'http://10.0.2.2:8000' : 'http://localhost:8000'` (or port 8081 for Expo API routes) instead of hardcoding `localhost`.
   - Pack the selected lesson, language, goals, vocabulary, phrases, and AI teacher prompt into the Stream call's custom data so the agent can read it on join.

2. Python Agent Updates:
   - Update the Python agent (`vision-agent/main.py`) to consume those fields from the call's custom data.
   - Ensure it works with our Google Gemini Live (`gemini-2.0-flash-exp`) setup.
   - Make sure the agent has permission to publish audio in audio_room (admin role + goLive).

3. Client UI & Stability (`AITeacherLessonView.tsx`):
   - Fix the render error: guard against `cannot read property 'microphone' of undefined` by rendering `<StreamCall call={call}>` and its child components ONLY when `call` is fully initialized and defined.
   - Show proper states: idle, connecting (with a loading spinner/message), connected, and failed states (with an error message and a retry/back button).
   - Clean up the agent session both when the user ends the call and when the screen unmounts.
   - Keep the existing Stream audio flow intact. Do not expose any secrets in the mobile app.

4. 6 Units & 4 Skills Curriculum Setup:
   - Update `data/lessons.ts` (and types) to structure exactly 6 progressive Units for complete beginners (Unit 1: Greetings & Basics, Unit 2: Self-Introduction, Unit 3: Daily Routine & Time, Unit 4: Food & At the Café, Unit 5: Shopping & Numbers, Unit 6: Travel & Directions).
   - Each lesson should structure 4 core skill activities: Reading (dialogue + comprehension questions), Writing (word-reordering / fill-in-blank), Listening (audio prompt with choices), and Speaking (interactive session with the AI Teacher). 