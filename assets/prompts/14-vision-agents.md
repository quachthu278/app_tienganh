Use the installed Vision Agents skill and Google GenAI SDK to create a Python service at vision-agent/ inside this repo. It is the AI language teacher, voice only, using Google Gemini (gemini-2.0-flash-exp / Gemini Live Multimodal) as the LLM and Stream Edge for transport.

Reuse STREAM_API_KEY/STREAM_API_SECRET from the parent .env and add GEMINI_API_KEY. By default the teacher always speaks English and teaches the selected language through English.

Ensure the dependencies include the official Google GenAI SDK (google-genai) and adapt the streaming audio pipeline to Gemini's bidirectional live audio protocol.

Before writing any lifecycle code, verify the join and lifecycle method shapes against the installed SDK in this repo and confirm it starts cleanly.