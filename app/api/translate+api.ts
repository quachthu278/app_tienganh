const GEMINI_API_KEY = process.env.GEMINI_API_KEY || process.env.GOOGLE_API_KEY;

const MAX_TEXT_LENGTH = 500;
const ALLOWED_LANGS = ["vi", "en", "ko", "ja", "zh", "es", "fr", "de"];

const COMMON_DICTIONARY: Record<string, Record<string, string>> = {
  vi: {
    "hello": "Xin chào",
    "my name is": "Tên tôi là",
    "nice to meet you": "Rất vui được gặp bạn",
    "how are you": "Bạn có khỏe không?",
    "good morning": "Chào buổi sáng",
    "good afternoon": "Chào buổi chiều",
    "good evening": "Chào buổi tối",
    "goodbye": "Tạm biệt",
    "thank you": "Cảm ơn bạn",
    "you're welcome": "Không có chi",
    "please": "Làm ơn",
    "see you later": "Hẹn gặp lại",
    "where are you from": "Bạn đến từ đâu?",
    "how much is this": "Cái này giá bao nhiêu?",
    "delicious": "Rất ngon",
  },
  en: {
    "xin chào": "Hello",
    "tên tôi là": "My name is",
    "rất vui được gặp bạn": "Nice to meet you",
    "bạn có khỏe không": "How are you?",
    "chào buổi sáng": "Good morning",
    "tạm biệt": "Goodbye",
    "cảm ơn": "Thank you",
    "không có chi": "You're welcome",
  },
};

export async function POST(request: Request) {
  try {
    const body = await request.json();
    const { text, targetLang = "en" } = body;

    if (!text || typeof text !== "string" || text.trim().length === 0) {
      return Response.json({ error: "Text is required" }, { status: 400 });
    }

    if (text.length > MAX_TEXT_LENGTH) {
      return Response.json({ error: `Text too long (max ${MAX_TEXT_LENGTH} chars)` }, { status: 400 });
    }

    if (!ALLOWED_LANGS.includes(targetLang)) {
      return Response.json({ error: `Unsupported language: ${targetLang}` }, { status: 400 });
    }

    const cleanInput = text.trim().toLowerCase().replace(/[.!?]+$/, "");
    if (COMMON_DICTIONARY[targetLang]?.[cleanInput]) {
      return Response.json({ translatedText: COMMON_DICTIONARY[targetLang][cleanInput] });
    }

    if (!GEMINI_API_KEY) {
      return Response.json(
        { error: "GEMINI_API_KEY is not configured on the server" },
        { status: 500 }
      );
    }

    const targetLangName =
      targetLang === "vi"
        ? "Vietnamese (tiếng Việt)"
        : targetLang === "es"
        ? "Spanish"
        : targetLang === "ko"
        ? "Korean"
        : targetLang === "ja"
        ? "Japanese"
        : targetLang === "fr"
        ? "French"
        : targetLang === "de"
        ? "German"
        : targetLang === "zh"
        ? "Chinese"
        : "English";

    const prompt = `Translate the following dialogue/phrase accurately and concisely into ${targetLangName}. Return ONLY the direct translation without quotation marks, markdown or explanations:\n\n${text}`;

    // Try fastest model first, then fallback
    const modelsToTry = ["gemini-2.0-flash", "gemini-1.5-flash", "gemini-2.0-flash-lite"];
    let lastError = null;

    for (const model of modelsToTry) {
      try {
        const response = await fetch(
          `https://generativelanguage.googleapis.com/v1beta/models/${model}:generateContent?key=${GEMINI_API_KEY}`,
          {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify({
              contents: [{ parts: [{ text: prompt }] }],
              generationConfig: {
                temperature: 0.1,
                maxOutputTokens: 300,
              },
            }),
          }
        );

        if (response.ok) {
          const data = await response.json();
          let translatedText =
            data.candidates?.[0]?.content?.parts?.[0]?.text?.trim() || text;

          // Strip any surrounding quotes or markdown
          translatedText = translatedText
            .replace(/^["'“”«»*]+|["'“”«»*]+$/g, "")
            .trim();

          return Response.json({ translatedText, model });
        } else {
          lastError = await response.text();
          console.warn(`[API /api/translate] Model ${model} failed (${response.status}): ${lastError}`);
        }
      } catch (err: any) {
        lastError = err.message;
        console.warn(`[API /api/translate] Model ${model} request error: ${err.message}`);
      }
    }

    return Response.json(
      { error: "Translation failed", detail: lastError },
      { status: 502 }
    );
  } catch (error: any) {
    console.error("[API /api/translate] Error:", error);
    return Response.json({ error: error.message || "Translation error" }, { status: 500 });
  }
}
