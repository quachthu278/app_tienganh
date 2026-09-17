import { Lesson } from "@/types/learning";

export const LESSONS: Lesson[] = [
  // ──────────────────────────────────────────────────────────
  // SPANISH LESSONS
  // ──────────────────────────────────────────────────────────
  {
    id: "lesson-es-101",
    unitId: "unit-es-1",
    title: "Saying Hello & Introductions",
    description: "Learn the foundational greetings and how to tell someone your name.",
    type: "standard",
    xp: 15,
    estimatedMinutes: 5,
    order: 1,
    goals: [
      { id: "g1", description: "Master basic greetings (Hola, Buenos días)" },
      { id: "g2", description: "Say your name using 'Me llamo'" },
      { id: "g3", description: "Express pleasantries with 'Mucho gusto'" },
    ],
    vocabulary: [
      {
        id: "v-es-1",
        word: "Hola",
        translation: "Hello",
        phonetic: "OH-lah",
        partOfSpeech: "greeting",
        exampleSentence: "¡Hola! ¿Cómo estás?",
        exampleTranslation: "Hello! How are you?",
      },
      {
        id: "v-es-2",
        word: "Buenos días",
        translation: "Good morning",
        phonetic: "BWEH-nos DEE-as",
        partOfSpeech: "greeting",
        exampleSentence: "Buenos días, señor Carlos.",
        exampleTranslation: "Good morning, Mr. Carlos.",
      },
      {
        id: "v-es-3",
        word: "Me llamo",
        translation: "My name is",
        phonetic: "meh YAH-moh",
        partOfSpeech: "phrase",
        exampleSentence: "Hola, me llamo Sofia.",
        exampleTranslation: "Hello, my name is Sofia.",
      },
      {
        id: "v-es-4",
        word: "Mucho gusto",
        translation: "Nice to meet you",
        phonetic: "MOO-choh GOO-stoh",
        partOfSpeech: "greeting",
        exampleSentence: "Mucho gusto en conocerte.",
        exampleTranslation: "Nice to meet you.",
      },
      {
        id: "v-es-5",
        word: "Adiós",
        translation: "Goodbye",
        phonetic: "ah-dee-OHS",
        partOfSpeech: "greeting",
        exampleSentence: "Adiós, hasta mañana.",
        exampleTranslation: "Goodbye, see you tomorrow.",
      },
    ],
    phrases: [
      {
        id: "p-es-1",
        text: "¡Hola! ¿Cómo estás?",
        translation: "Hello! How are you?",
        phonetic: "OH-lah, KOH-moh es-TAHS?",
        context: "Friendly casual greeting",
      },
      {
        id: "p-es-2",
        text: "Me llamo Alex. ¿Y tú?",
        translation: "My name is Alex. And you?",
        phonetic: "meh YAH-moh Alex. ee too?",
        context: "Introducing yourself and asking back",
      },
    ],
    activities: [
      {
        id: "act-es-101-1",
        type: "multiple_choice",
        question: "How do you say 'Hello' in Spanish?",
        options: ["Adiós", "Hola", "Gracias", "Por favor"],
        correctAnswer: "Hola",
        explanation: "'Hola' is the universal greeting for 'Hello' in Spanish.",
      },
      {
        id: "act-es-101-2",
        type: "translate",
        question: "Translate this phrase into English:",
        prompt: "Mucho gusto",
        options: ["Good morning", "Nice to meet you", "See you soon", "Excuse me"],
        correctAnswer: "Nice to meet you",
      },
      {
        id: "act-es-101-3",
        type: "match_pairs",
        question: "Match the Spanish words with their English meanings:",
        pairs: [
          { left: "Hola", right: "Hello" },
          { left: "Buenos días", right: "Good morning" },
          { left: "Adiós", right: "Goodbye" },
          { left: "Me llamo", right: "My name is" },
        ],
        correctAnswer: ["Hola:Hello", "Buenos días:Good morning", "Adiós:Goodbye", "Me llamo:My name is"],
      },
      {
        id: "act-es-101-4",
        type: "fill_blank",
        question: "Complete the introduction:",
        prompt: "¡Hola! _____ llamo Carlos.",
        options: ["Me", "Te", "Se", "Mi"],
        correctAnswer: "Me",
        explanation: "'Me llamo' literally means 'I call myself'.",
      },
    ],
  },
  {
    id: "lesson-es-102",
    unitId: "unit-es-1",
    title: "AI Teacher: First Spanish Chat",
    description: "Practice your speaking & listening with Elena, your AI Spanish teacher.",
    type: "audio_ai",
    xp: 25,
    estimatedMinutes: 8,
    order: 2,
    goals: [
      { id: "g1", description: "Hold a 2-minute introductory dialogue with your AI teacher" },
      { id: "g2", description: "Respond correctly to '¿Cómo te llamas?'" },
      { id: "g3", description: "Say how you are feeling (Estoy bien)" },
    ],
    vocabulary: [
      {
        id: "v-es-6",
        word: "Estoy bien",
        translation: "I am well",
        phonetic: "es-TOY bee-EHN",
        partOfSpeech: "phrase",
      },
      {
        id: "v-es-7",
        word: "Gracias",
        translation: "Thank you",
        phonetic: "GRAH-see-ahs",
        partOfSpeech: "phrase",
      },
      {
        id: "v-es-8",
        word: "¿Y tú?",
        translation: "And you?",
        phonetic: "ee too",
        partOfSpeech: "phrase",
      },
    ],
    phrases: [
      {
        id: "p-es-3",
        text: "Estoy muy bien, gracias.",
        translation: "I am doing very well, thank you.",
        phonetic: "es-TOY MOO-ee bee-EHN, GRAH-see-ahs",
      },
    ],
    activities: [
      {
        id: "act-es-102-1",
        type: "ai_conversation",
        question: "Chat with Teacher Elena about yourself",
        prompt: "Greet Elena, tell her your name, and ask how she is doing.",
        correctAnswer: "completed_conversation",
      },
    ],
    aiTeacherPrompt: {
      scenario: "Meeting Elena in Madrid central plaza",
      systemPrompt:
        "You are Elena, a warm and encouraging native Spanish teacher from Madrid. You speak in simple, clear, beginner-friendly Spanish. Greet the user with a smile, ask their name, celebrate their correct responses, and gently correct mistakes in a playful way.",
      initialGreeting: "¡Hola! Bienvenido a tu primera lección. Me llamo Elena. ¿Cómo te llamas?",
      targetVocabulary: ["Hola", "Me llamo", "Estoy bien", "Gracias"],
      suggestedResponses: ["¡Hola Elena!", "Me llamo Alex.", "Estoy muy bien, ¿y tú?"],
      difficulty: "beginner",
    },
  },
  {
    id: "lesson-es-201",
    unitId: "unit-es-2",
    title: "At the Café: Ordering Drinks",
    description: "Learn how to order a coffee, tea, and ask for the bill politely.",
    type: "standard",
    xp: 20,
    estimatedMinutes: 6,
    order: 1,
    goals: [
      { id: "g1", description: "Order drinks with 'Quiero' and 'por favor'" },
      { id: "g2", description: "Ask for the bill using 'La cuenta, por favor'" },
    ],
    vocabulary: [
      {
        id: "v-es-9",
        word: "Un café con leche",
        translation: "A coffee with milk",
        phonetic: "oon kah-FEH kohn LEH-cheh",
        partOfSpeech: "noun",
      },
      {
        id: "v-es-10",
        word: "Por favor",
        translation: "Please",
        phonetic: "por fah-VOR",
        partOfSpeech: "phrase",
      },
      {
        id: "v-es-11",
        word: "La cuenta",
        translation: "The bill / check",
        phonetic: "lah KWEHN-tah",
        partOfSpeech: "noun",
      },
    ],
    phrases: [
      {
        id: "p-es-4",
        text: "Un café con leche, por favor.",
        translation: "A coffee with milk, please.",
        phonetic: "oon kah-FEH kohn LEH-cheh, por fah-VOR",
      },
      {
        id: "p-es-5",
        text: "La cuenta, por favor.",
        translation: "The check, please.",
        phonetic: "lah KWEHN-tah, por fah-VOR",
      },
    ],
    activities: [
      {
        id: "act-es-201-1",
        type: "multiple_choice",
        question: "How do you politely say 'Please' in Spanish?",
        options: ["De nada", "Por favor", "Perdón", "Gracias"],
        correctAnswer: "Por favor",
      },
      {
        id: "act-es-201-2",
        type: "translate",
        question: "How do you ask for the check?",
        prompt: "The bill, please.",
        options: ["El café, por favor.", "La cuenta, por favor.", "Hola, por favor."],
        correctAnswer: "La cuenta, por favor.",
      },
    ],
  },
  {
    id: "lesson-es-202",
    unitId: "unit-es-2",
    title: "AI Barista: Café Simulation",
    description: "Order coffee and snacks from Mateo, a friendly barista in Barcelona.",
    type: "audio_ai",
    xp: 30,
    estimatedMinutes: 8,
    order: 2,
    goals: [
      { id: "g1", description: "Successfully order your favorite beverage" },
      { id: "g2", description: "Ask for the price and settle the bill" },
    ],
    vocabulary: [
      {
        id: "v-es-12",
        word: "¿Cuánto cuesta?",
        translation: "How much does it cost?",
        phonetic: "KWAHN-toh KWEH-stah",
        partOfSpeech: "phrase",
      },
    ],
    phrases: [
      {
        id: "p-es-6",
        text: "¿Cuánto cuesta el café?",
        translation: "How much is the coffee?",
        phonetic: "KWAHN-toh KWEH-stah el kah-FEH?",
      },
    ],
    activities: [
      {
        id: "act-es-202-1",
        type: "ai_conversation",
        question: "Order your drink and ask for the check",
        prompt: "Tell Mateo what you would like to drink, then ask for the bill.",
        correctAnswer: "completed_conversation",
      },
    ],
    aiTeacherPrompt: {
      scenario: "Café Gran Via in Barcelona",
      systemPrompt:
        "You are Mateo, an energetic barista at Café Gran Via in Barcelona. Greet customers warmly and ask what they would like to drink or eat. Keep sentences brief and practical. When they ask for the check, give a friendly total (e.g., 'Son dos euros').",
      initialGreeting: "¡Buenas tardes! Bienvenido a Café Gran Via. ¿Qué te pongo hoy?",
      targetVocabulary: ["Un café", "Por favor", "La cuenta", "¿Cuánto cuesta?"],
      suggestedResponses: [
        "Un café con leche, por favor.",
        "¿Cuánto cuesta?",
        "La cuenta, por favor.",
      ],
      difficulty: "beginner",
    },
  },

  // ──────────────────────────────────────────────────────────
  // ENGLISH LESSONS
  // ──────────────────────────────────────────────────────────
  {
    id: "lesson-en-101",
    unitId: "unit-en-1",
    title: "Greetings & Self Introduction",
    description: "Learn how to greet someone and introduce yourself naturally in English.",
    type: "standard",
    xp: 15,
    estimatedMinutes: 5,
    order: 1,
    goals: [
      { id: "g1", description: "Use common greetings (Hi, Good morning)" },
      { id: "g2", description: "State your name and profession" },
    ],
    vocabulary: [
      {
        id: "v-en-1",
        word: "Hello",
        translation: "Xin chào",
        phonetic: "hə-LOH",
        partOfSpeech: "greeting",
      },
      {
        id: "v-en-2",
        word: "Nice to meet you",
        translation: "Rất vui được gặp bạn",
        phonetic: "nahys too meet yoo",
        partOfSpeech: "phrase",
      },
    ],
    phrases: [
      {
        id: "p-en-1",
        text: "Hi, my name is Alex. Nice to meet you!",
        translation: "Chào bạn, mình tên là Alex. Rất vui được gặp bạn!",
      },
    ],
    activities: [
      {
        id: "act-en-101-1",
        type: "multiple_choice",
        question: "What is a polite response to 'Nice to meet you'?",
        options: ["Nice to meet you too", "Goodbye", "No problem", "I am tired"],
        correctAnswer: "Nice to meet you too",
      },
    ],
  },
  {
    id: "lesson-en-102",
    unitId: "unit-en-1",
    title: "AI Teacher: Coffee Chat",
    description: "Have a friendly English conversation with Emma from New York.",
    type: "audio_ai",
    xp: 25,
    estimatedMinutes: 8,
    order: 2,
    goals: [
      { id: "g1", description: "Talk about your day in simple English" },
      { id: "g2", description: "Ask Emma about her favorite hobby" },
    ],
    vocabulary: [
      {
        id: "v-en-3",
        word: "How are you?",
        translation: "Bạn khỏe không?",
        partOfSpeech: "phrase",
      },
    ],
    phrases: [
      {
        id: "p-en-2",
        text: "I am doing great today, thanks!",
        translation: "Hôm nay mình rất khỏe, cảm ơn!",
      },
    ],
    activities: [
      {
        id: "act-en-102-1",
        type: "ai_conversation",
        question: "Converse with Emma",
        prompt: "Introduce yourself and talk about your morning.",
        correctAnswer: "completed_conversation",
      },
    ],
    aiTeacherPrompt: {
      scenario: "Central Park café in New York",
      systemPrompt:
        "You are Emma, a friendly native English teacher from New York. You speak clearly and encouragingly. Help the student practice conversational English by asking simple open questions about their interests and day.",
      initialGreeting: "Hey there! Welcome to New York! I'm Emma. What's your name?",
      targetVocabulary: ["Hello", "Nice to meet you", "How are you"],
      suggestedResponses: ["Hi Emma, I'm Alex.", "Nice to meet you too!", "I'm doing well."],
      difficulty: "beginner",
    },
  },

  // ──────────────────────────────────────────────────────────
  // JAPANESE LESSONS
  // ──────────────────────────────────────────────────────────
  {
    id: "lesson-ja-101",
    unitId: "unit-ja-1",
    title: "Konnichiwa: Essential Greetings",
    description: "Master everyday Japanese greetings and polite expressions.",
    type: "standard",
    xp: 15,
    estimatedMinutes: 5,
    order: 1,
    goals: [
      { id: "g1", description: "Recognize Konnichiwa and Arigatou" },
      { id: "g2", description: "Learn how to bow and greet politely" },
    ],
    vocabulary: [
      {
        id: "v-ja-1",
        word: "こんにちは (Konnichiwa)",
        translation: "Hello / Good afternoon",
        phonetic: "kohn-nee-chee-wah",
        partOfSpeech: "greeting",
      },
      {
        id: "v-ja-2",
        word: "ありがとう (Arigatou)",
        translation: "Thank you",
        phonetic: "ah-ree-gah-toh",
        partOfSpeech: "phrase",
      },
    ],
    phrases: [
      {
        id: "p-ja-1",
        text: "ありがとうございます (Arigatou gozaimasu)",
        translation: "Thank you very much (polite)",
      },
    ],
    activities: [
      {
        id: "act-ja-101-1",
        type: "multiple_choice",
        question: "Which word means 'Thank you' in Japanese?",
        options: ["Sayounara", "Arigatou", "Konnichiwa", "Hai"],
        correctAnswer: "Arigatou",
      },
    ],
  },
  {
    id: "lesson-ja-102",
    unitId: "unit-ja-1",
    title: "AI Teacher: Tokyo Arrival",
    description: "Meet Kenji in Shibuya and practice your first Japanese phrases.",
    type: "audio_ai",
    xp: 25,
    estimatedMinutes: 8,
    order: 2,
    goals: [
      { id: "g1", description: "Exchange greetings with Kenji" },
      { id: "g2", description: "Say 'Yoroshiku onegaishimasu'" },
    ],
    vocabulary: [
      {
        id: "v-ja-3",
        word: "よろしくおねがいします",
        translation: "Pleased to meet you",
        phonetic: "yoh-roh-shee-koo oh-neh-gah-ee-shee-mahs",
        partOfSpeech: "greeting",
      },
    ],
    phrases: [
      {
        id: "p-ja-2",
        text: "はじめまして、よろしくおねがいします。",
        translation: "Nice to meet you, please treat me kindly.",
      },
    ],
    activities: [
      {
        id: "act-ja-102-1",
        type: "ai_conversation",
        question: "Greet Kenji in Tokyo",
        prompt: "Say Konnichiwa and introduce yourself.",
        correctAnswer: "completed_conversation",
      },
    ],
    aiTeacherPrompt: {
      scenario: "Shibuya Crossing meeting spot in Tokyo",
      systemPrompt:
        "You are Kenji, a patient and friendly Japanese tutor living in Tokyo. Speak in simple, polite Japanese with English translations or romaji support when helpful. Praise the student whenever they pronounce Japanese words correctly.",
      initialGreeting: "こんにちは！はじめまして、ケンジです。(Konnichiwa! Hajimemashite, Kenji desu.)",
      targetVocabulary: ["Konnichiwa", "Arigatou", "Hajimemashite"],
      suggestedResponses: ["こんにちは！", "はじめまして！", "よろしくお願いします。"],
      difficulty: "beginner",
    },
  },

  // ──────────────────────────────────────────────────────────
  // FRENCH LESSONS
  // ──────────────────────────────────────────────────────────
  {
    id: "lesson-fr-101",
    unitId: "unit-fr-1",
    title: "Bonjour Paris: First Steps",
    description: "Essential French greetings and polite café interactions.",
    type: "standard",
    xp: 15,
    estimatedMinutes: 5,
    order: 1,
    goals: [
      { id: "g1", description: "Master 'Bonjour' and 'S'il vous plaît'" },
      { id: "g2", description: "Say 'Merci beaucoup'" },
    ],
    vocabulary: [
      {
        id: "v-fr-1",
        word: "Bonjour",
        translation: "Hello / Good morning",
        phonetic: "bohn-zhoor",
        partOfSpeech: "greeting",
      },
      {
        id: "v-fr-2",
        word: "Merci",
        translation: "Thank you",
        phonetic: "mair-see",
        partOfSpeech: "phrase",
      },
    ],
    phrases: [
      {
        id: "p-fr-1",
        text: "Bonjour! Un croissant, s'il vous plaît.",
        translation: "Hello! A croissant, please.",
      },
    ],
    activities: [
      {
        id: "act-fr-101-1",
        type: "multiple_choice",
        question: "How do you say 'Hello' in French?",
        options: ["Au revoir", "Bonjour", "Merci", "Oui"],
        correctAnswer: "Bonjour",
      },
    ],
  },

  // ──────────────────────────────────────────────────────────
  // VIETNAMESE LESSONS
  // ──────────────────────────────────────────────────────────
  {
    id: "lesson-vi-101",
    unitId: "unit-vi-1",
    title: "Xin Chào Việt Nam",
    description: "Polite greetings, basic pronouns, and daily pleasantries.",
    type: "standard",
    xp: 15,
    estimatedMinutes: 5,
    order: 1,
    goals: [
      { id: "g1", description: "Chào hỏi lịch sự với 'Xin chào'" },
      { id: "g2", description: "Nói lời cảm ơn và tạm biệt" },
    ],
    vocabulary: [
      {
        id: "v-vi-1",
        word: "Xin chào",
        translation: "Hello",
        partOfSpeech: "greeting",
      },
      {
        id: "v-vi-2",
        word: "Cảm ơn",
        translation: "Thank you",
        partOfSpeech: "phrase",
      },
      {
        id: "v-vi-3",
        word: "Tạm biệt",
        translation: "Goodbye",
        partOfSpeech: "greeting",
      },
    ],
    phrases: [
      {
        id: "p-vi-1",
        text: "Xin chào, rất vui được gặp bạn!",
        translation: "Hello, very nice to meet you!",
      },
    ],
    activities: [
      {
        id: "act-vi-101-1",
        type: "multiple_choice",
        question: "Từ nào có nghĩa là 'Xin chào' trong tiếng Việt?",
        options: ["Tạm biệt", "Xin chào", "Cảm ơn", "Không có chi"],
        correctAnswer: "Xin chào",
      },
    ],
  },
];

export const getAllLessons = (): Lesson[] => LESSONS;

export const getLessonsByUnitId = (unitId: string): Lesson[] => {
  return LESSONS.filter((lesson) => lesson.unitId === unitId).sort(
    (a, b) => a.order - b.order
  );
};

export const getLessonById = (lessonId: string): Lesson | undefined => {
  return LESSONS.find((lesson) => lesson.id === lessonId);
};
