const VISION_AGENT_URL = process.env.VISION_AGENT_URL || "http://127.0.0.1:8000";

export async function POST(request: Request) {
  try {
    const body = await request.json();
    const { callId, sessionId } = body;

    if (!callId || !sessionId) {
      return Response.json(
        { error: "callId and sessionId are required" },
        { status: 400 }
      );
    }

    const closeUrl = `${VISION_AGENT_URL.replace(/\/$/, "")}/calls/${callId}/sessions/${sessionId}/close`;
    console.log(`[API /api/agent/stop] Closing session via: ${closeUrl}`);

    const res = await fetch(closeUrl, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
    });

    if (!res.ok) {
      // Also attempt DELETE /calls/{call_id}/sessions/{session_id}
      const deleteUrl = `${VISION_AGENT_URL.replace(/\/$/, "")}/calls/${callId}/sessions/${sessionId}`;
      await fetch(deleteUrl, { method: "DELETE" }).catch(() => {});
    }

    console.log("[API /api/agent/stop] Session closed successfully");
    return Response.json({ success: true });
  } catch (error: any) {
    console.warn("[API /api/agent/stop] Error stopping agent session:", error);
    return Response.json(
      { error: error.message || "Failed to stop agent session" },
      { status: 500 }
    );
  }
}
