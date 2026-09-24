import { StreamClient } from '@stream-io/node-sdk';

const apiKey = process.env.STREAM_API_KEY;
const apiSecret = process.env.STREAM_API_SECRET;
const VISION_AGENT_URL = process.env.VISION_AGENT_URL || "http://127.0.0.1:8000";

export async function POST(request: Request) {
  try {
    const body = await request.json();
    const { callId, callType = "audio_room", userId, custom } = body;

    if (!callId) {
      return Response.json({ error: "callId is required" }, { status: 400 });
    }

    // 1. Authorize student and AI Teacher with admin & audio permissions on Stream Video
    if (apiKey && apiSecret) {
      try {
        const streamClient = new StreamClient(apiKey, apiSecret);
        const serverCall = streamClient.video.call(callType, callId);

        const customPayload = {
          ...(custom || {}),
          student_id: userId || "",
        };

        const members = [{ user_id: "ai-teacher", role: "admin" }];
        if (userId) {
          members.push({ user_id: userId, role: "admin" });
        }

        await serverCall.getOrCreate({
          data: {
            created_by_id: userId || "ai-teacher",
            members,
            custom: customPayload,
          },
        });

        // Ensure both student and ai-teacher have admin role
        await serverCall.updateCallMembers({
          update_members: members,
        }).catch((e: any) => console.log("[API /api/agent/start] updateCallMembers notice:", e?.message));

        // Explicitly grant audio & video sending permissions in audio_room
        if (userId) {
          await serverCall.updateUserPermissions({
            user_id: userId,
            grant_permissions: ["send-audio", "send-video"],
          }).catch((e: any) => console.log("[API /api/agent/start] grant user audio notice:", e?.message));
        }
        await serverCall.updateUserPermissions({
          user_id: "ai-teacher",
          grant_permissions: ["send-audio", "send-video"],
        }).catch((e: any) => console.log("[API /api/agent/start] grant ai-teacher audio notice:", e?.message));

        // Ensure call is live so participants can publish audio
        await serverCall.goLive().catch((e: any) => console.log("[API /api/agent/start] goLive notice:", e?.message));

        console.log(
          `[API /api/agent/start] Created/updated call on Stream with active audio permissions for ${userId || "student"} and ai-teacher`
        );
      } catch (streamErr: any) {
        console.warn(`[API /api/agent/start] Stream call setup notice:`, streamErr?.message || streamErr);
      }
    }

    // 2. Proxy request to Python Vision Agent
    const agentUrl = `${VISION_AGENT_URL.replace(/\/$/, "")}/calls/${callId}/sessions`;
    console.log(`[API /api/agent/start] Proxying request to Vision Agent: ${agentUrl}`);

    const res = await fetch(agentUrl, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ call_type: callType }),
    });

    if (!res.ok) {
      const errText = await res.text();
      console.error(`[API /api/agent/start] Vision Agent responded with status ${res.status}: ${errText}`);
      return Response.json(
        { error: `Vision Agent error: ${res.statusText}`, detail: errText },
        { status: res.status }
      );
    }

    const data = await res.json();
    console.log("[API /api/agent/start] Started session successfully:", data);
    return Response.json(data);
  } catch (error: any) {
    console.error("[API /api/agent/start] Error connecting to Vision Agent:", error);
    return Response.json(
      { error: error.message || "Could not connect to Vision Agent server" },
      { status: 500 }
    );
  }
}

