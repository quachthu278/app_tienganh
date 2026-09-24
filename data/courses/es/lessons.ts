import { Lesson } from "@/types/learning";
import { images } from "@/constants/images";

export const ES_LESSONS: Lesson[] = [
  {
    id: "lesson-es-101",
    unitId: "unit-es-1",
    title: "¡Hola! & Lời Chào Tiếng Tây Ban Nha",
    description: "Lời chào cơ bản và tạm biệt trong tiếng Tây Ban Nha.",
    type: "standard",
    xp: 15,
    estimatedMinutes: 5,
    order: 1,
    status: "available",
    goals: [
      { id: "g1", description: "Nắm vững các từ vựng chủ đề ¡Hola! & Lời Chào Tiếng Tây Ban Nha" },
      { id: "g2", description: "Luyện phát âm chuẩn và phản xạ câu qua các bài tập tương tác" }
    ],
    vocabulary: [
      { id: "v-es-101-1", word: "¡Hola!", translation: "Xin chào", phonetic: "oh-lah" },
      { id: "v-es-101-2", word: "Buenos días", translation: "Chào buổi sáng", phonetic: "bweh-nohs dee-ahs" },
      { id: "v-es-101-3", word: "Buenas tardes", translation: "Chào buổi chiều", phonetic: "bweh-nahs tahr-dehs" },
      { id: "v-es-101-4", word: "Adiós", translation: "Tạm biệt", phonetic: "ah-dyohs" },
      { id: "v-es-101-5", word: "Hasta luego", translation: "Hẹn gặp lại sau", phonetic: "ahs-tah lweh-goh" }
    ],
    phrases: [
      { id: "p-es-101-1", text: "¡Hola! ¿Cómo estás?", translation: "Xin chào! Bạn có khỏe không?" },
      { id: "p-es-101-2", text: "¡Adiós, hasta mañana!", translation: "Tạm biệt, hẹn gặp lại ngày mai!" }
    ],
    activities: [
      {
        id: "act-es-101-1",
        type: "multiple_choice",
        skill: "reading",
        question: "'¡Hola!' có nghĩa là gì?",
        options: ["Xin chào","Tạm biệt","Cảm ơn","Xin lỗi"],
        correctAnswer: "Xin chào"
      },
      {
        id: "act-es-101-2",
        type: "fill_blank",
        skill: "writing",
        question: "Điền từ: 'Buenos _____!' (buổi sáng)",
        prompt: "Điền từ: 'Buenos _____!' (buổi sáng)",
        options: ["días","tardes","noches","hola"],
        correctAnswer: "días"
      },
      {
        id: "act-es-101-3",
        type: "multiple_choice",
        skill: "reading",
        question: "Dịch: 'Adiós'",
        options: ["Tạm biệt","Xin chào","Hẹn gặp lại","Cảm ơn"],
        correctAnswer: "Tạm biệt"
      },
      {
        id: "act-es-101-4",
        type: "match_pairs",
        skill: "reading",
        question: "Ghép các cặp từ vựng với nghĩa tiếng Việt tương ứng",
        pairs: [{"left":"¡Hola!","right":"Xin chào"},{"left":"Buenos días","right":"Chào buổi sáng"},{"left":"Buenas tardes","right":"Chào buổi chiều"},{"left":"Adiós","right":"Tạm biệt"}],
        correctAnswer: "all_matched"
      },
      {
        id: "act-es-101-5",
        type: "audio_listen",
        skill: "listening",
        question: "Lắng nghe và chọn đáp án chính xác:",
        prompt: "¡Hola!",
        options: ["Xin chào","Tạm biệt","Cảm ơn","Xin lỗi"],
        correctAnswer: "Xin chào"
      }
    ]
  },
  {
    id: "lesson-es-102",
    unitId: "unit-es-1",
    title: "Tên Bạn Là Gì? (¿Cómo te llamas?)",
    description: "Giới thiệu tên mình và hỏi tên người đối diện.",
    type: "standard",
    xp: 15,
    estimatedMinutes: 5,
    order: 2,
    status: "available",
    goals: [
      { id: "g1", description: "Nắm vững các từ vựng chủ đề Tên Bạn Là Gì? (¿Cómo te llamas?)" },
      { id: "g2", description: "Luyện phát âm chuẩn và phản xạ câu qua các bài tập tương tác" }
    ],
    vocabulary: [
      { id: "v-es-102-1", word: "Yo", translation: "Tôi", phonetic: "yoh" },
      { id: "v-es-102-2", word: "Tú", translation: "Bạn / Cậu", phonetic: "too" },
      { id: "v-es-102-3", word: "Me llamo", translation: "Tên tôi là", phonetic: "meh yah-moh" },
      { id: "v-es-102-4", word: "Amigo / Amiga", translation: "Bạn bè (nam / nữ)", phonetic: "ah-mee-goh" },
      { id: "v-es-102-5", word: "Mucho gusto", translation: "Rất vui được gặp bạn", phonetic: "moo-choh goos-toh" }
    ],
    phrases: [
      { id: "p-es-102-1", text: "Me llamo Alex. ¿Y tú?", translation: "Tôi tên là Alex. Còn bạn thì sao?" },
      { id: "p-es-102-2", text: "¡Mucho gusto en conocerte!", translation: "Rất vui được làm quen với bạn!" }
    ],
    activities: [
      {
        id: "act-es-102-1",
        type: "multiple_choice",
        skill: "reading",
        question: "'Me llamo Sofia' nghĩa là gì?",
        options: ["Tôi tên là Sofia","Bạn là Sofia","Sofia là bạn tôi","Ai là Sofia"],
        correctAnswer: "Tôi tên là Sofia"
      },
      {
        id: "act-es-102-2",
        type: "fill_blank",
        skill: "writing",
        question: "Điền từ: 'Yo me _____ Mateo.' (tên tôi là)",
        prompt: "Điền từ: 'Yo me _____ Mateo.' (tên tôi là)",
        options: ["llamo","tú","amigo","días"],
        correctAnswer: "llamo"
      },
      {
        id: "act-es-102-3",
        type: "multiple_choice",
        skill: "reading",
        question: "Dịch: 'Mucho gusto'",
        options: ["Rất hân hạnh / Rất vui","Tạm biệt","Cảm ơn","Xin chào"],
        correctAnswer: "Rất hân hạnh / Rất vui"
      },
      {
        id: "act-es-102-4",
        type: "match_pairs",
        skill: "reading",
        question: "Ghép các cặp từ vựng với nghĩa tiếng Việt tương ứng",
        pairs: [{"left":"Yo","right":"Tôi"},{"left":"Tú","right":"Bạn / Cậu"},{"left":"Me llamo","right":"Tên tôi là"},{"left":"Amigo / Amiga","right":"Bạn bè (nam / nữ)"}],
        correctAnswer: "all_matched"
      },
      {
        id: "act-es-102-5",
        type: "audio_listen",
        skill: "listening",
        question: "Lắng nghe và chọn đáp án chính xác:",
        prompt: "Yo",
        options: ["Tôi tên là Sofia","Bạn là Sofia","Sofia là bạn tôi","Ai là Sofia"],
        correctAnswer: "Tôi tên là Sofia"
      }
    ]
  },
  {
    id: "lesson-es-103",
    unitId: "unit-es-1",
    title: "Cảm Ơn & Xin Lỗi (Gracias & Por favor)",
    description: "Các quy tắc lịch sự hàng ngày ở Tây Ban Nha.",
    type: "standard",
    xp: 15,
    estimatedMinutes: 5,
    order: 3,
    status: "available",
    goals: [
      { id: "g1", description: "Nắm vững các từ vựng chủ đề Cảm Ơn & Xin Lỗi (Gracias & Por favor)" },
      { id: "g2", description: "Luyện phát âm chuẩn và phản xạ câu qua các bài tập tương tác" }
    ],
    vocabulary: [
      { id: "v-es-103-1", word: "Gracias", translation: "Cảm ơn", phonetic: "grah-syahs" },
      { id: "v-es-103-2", word: "Muchas gracias", translation: "Cảm ơn rất nhiều", phonetic: "moo-chahs grah-syahs" },
      { id: "v-es-103-3", word: "Por favor", translation: "Làm ơn / Xin vui lòng", phonetic: "pohr fah-vohr" },
      { id: "v-es-103-4", word: "De nada", translation: "Không có chi", phonetic: "deh nah-dah" },
      { id: "v-es-103-5", word: "Perdón / Disculpe", translation: "Xin lỗi / Xin thứ lỗi", phonetic: "pair-dohn" }
    ],
    phrases: [
      { id: "p-es-103-1", text: "¡Muchas gracias por tu ayuda!", translation: "Cảm ơn bạn rất nhiều vì sự giúp đỡ!" },
      { id: "p-es-103-2", text: "Disculpe, ¿dónde está el baño?", translation: "Xin lỗi cho tôi hỏi, nhà vệ sinh ở đâu vậy?" }
    ],
    activities: [
      {
        id: "act-es-103-1",
        type: "multiple_choice",
        skill: "reading",
        question: "'Por favor' tương đương với từ tiếng Anh nào?",
        options: ["Please (Làm ơn)","Thank you (Cảm ơn)","Sorry (Xin lỗi)","Hello (Xin chào)"],
        correctAnswer: "Please (Làm ơn)"
      },
      {
        id: "act-es-103-2",
        type: "fill_blank",
        skill: "writing",
        question: "Điền từ: 'Un café, por _____.'",
        prompt: "Điền từ: 'Un café, por _____.'",
        options: ["favor","gracias","nada","perdón"],
        correctAnswer: "favor"
      },
      {
        id: "act-es-103-3",
        type: "multiple_choice",
        skill: "reading",
        question: "Dịch: 'De nada'",
        options: ["Không có chi","Cảm ơn","Tạm biệt","Xin chào"],
        correctAnswer: "Không có chi"
      },
      {
        id: "act-es-103-4",
        type: "match_pairs",
        skill: "reading",
        question: "Ghép các cặp từ vựng với nghĩa tiếng Việt tương ứng",
        pairs: [{"left":"Gracias","right":"Cảm ơn"},{"left":"Muchas gracias","right":"Cảm ơn rất nhiều"},{"left":"Por favor","right":"Làm ơn / Xin vui lòng"},{"left":"De nada","right":"Không có chi"}],
        correctAnswer: "all_matched"
      },
      {
        id: "act-es-103-5",
        type: "audio_listen",
        skill: "listening",
        question: "Lắng nghe và chọn đáp án chính xác:",
        prompt: "Gracias",
        options: ["Please (Làm ơn)","Thank you (Cảm ơn)","Sorry (Xin lỗi)","Hello (Xin chào)"],
        correctAnswer: "Please (Làm ơn)"
      }
    ]
  },
  {
    id: "lesson-es-104",
    unitId: "unit-es-1",
    title: "Số Đếm 1 - 10 Tiếng Tây Ban Nha (Uno, Dos, Tres)",
    description: "Đếm số chuẩn tiếng Tây Ban Nha từ 1 đến 10.",
    type: "standard",
    xp: 15,
    estimatedMinutes: 5,
    order: 4,
    status: "available",
    goals: [
      { id: "g1", description: "Nắm vững các từ vựng chủ đề Số Đếm 1 - 10 Tiếng Tây Ban Nha (Uno, Dos, Tres)" },
      { id: "g2", description: "Luyện phát âm chuẩn và phản xạ câu qua các bài tập tương tác" }
    ],
    vocabulary: [
      { id: "v-es-104-1", word: "Uno / Dos", translation: "Một (1) / Hai (2)", phonetic: "oo-noh / dohs" },
      { id: "v-es-104-2", word: "Tres / Cuatro", translation: "Ba (3) / Bốn (4)", phonetic: "trehs / kwah-troh" },
      { id: "v-es-104-3", word: "Cinco / Seis", translation: "Năm (5) / Sáu (6)", phonetic: "seen-koh / sayce" },
      { id: "v-es-104-4", word: "Siete / Ocho", translation: "Bảy (7) / Tám (8)", phonetic: "syeh-teh / oh-choh" },
      { id: "v-es-104-5", word: "Nueve / Diez", translation: "Chín (9) / Mười (10)", phonetic: "nweh-veh / dyehs" }
    ],
    phrases: [
      { id: "p-es-104-1", text: "¡Uno, dos, tres, ya!", translation: "Một, hai, ba, xuất phát!" },
      { id: "p-es-104-2", text: "Dos cafés con leche, por favor.", translation: "Cho tôi hai cà phê sữa, làm ơn." }
    ],
    activities: [
      {
        id: "act-es-104-1",
        type: "multiple_choice",
        skill: "reading",
        question: "'Cinco' trong tiếng Tây Ban Nha là số mấy?",
        options: ["Số 5","Số 3","Số 7","Số 9"],
        correctAnswer: "Số 5"
      },
      {
        id: "act-es-104-2",
        type: "fill_blank",
        skill: "writing",
        question: "Điền số: 'Uno, dos, _____ (ba)'",
        prompt: "Điền số: 'Uno, dos, _____ (ba)'",
        options: ["tres","cuatro","cinco","diez"],
        correctAnswer: "tres"
      },
      {
        id: "act-es-104-3",
        type: "multiple_choice",
        skill: "reading",
        question: "Số 10 trong tiếng Tây Ban Nha là gì?",
        options: ["Diez","Ocho","Nueve","Siete"],
        correctAnswer: "Diez"
      },
      {
        id: "act-es-104-4",
        type: "match_pairs",
        skill: "reading",
        question: "Ghép các cặp từ vựng với nghĩa tiếng Việt tương ứng",
        pairs: [{"left":"Uno / Dos","right":"Một (1) / Hai (2)"},{"left":"Tres / Cuatro","right":"Ba (3) / Bốn (4)"},{"left":"Cinco / Seis","right":"Năm (5) / Sáu (6)"},{"left":"Siete / Ocho","right":"Bảy (7) / Tám (8)"}],
        correctAnswer: "all_matched"
      },
      {
        id: "act-es-104-5",
        type: "audio_listen",
        skill: "listening",
        question: "Lắng nghe và chọn đáp án chính xác:",
        prompt: "Uno / Dos",
        options: ["Số 5","Số 3","Số 7","Số 9"],
        correctAnswer: "Số 5"
      }
    ]
  },
  {
    id: "lesson-es-105",
    unitId: "unit-es-1",
    title: "AI Practice: Luyện Chào Hỏi Cùng Carmen",
    description: "Thực hành phản xạ tiếng Tây Ban Nha giao tiếp cùng cô bạn Carmen tại Madrid.",
    type: "audio_ai",
    xp: 25,
    estimatedMinutes: 5,
    order: 5,
    heroImage: images.mascotWelcome,
    status: "available",
    goals: [
      { id: "g1", description: "Luyện phản xạ giao tiếp thực tế với AI Teacher Elena" },
      { id: "g2", description: "Vận dụng từ vựng trọng tâm vào ngữ cảnh hội thoại tự nhiên" }
    ],
    vocabulary: [
      { id: "v-ai-es-1-1", word: "¡Hola!", translation: "Xin chào" },
      { id: "v-ai-es-1-2", word: "Me llamo", translation: "Tên tôi là" },
      { id: "v-ai-es-1-3", word: "Gracias", translation: "Cảm ơn" },
      { id: "v-ai-es-1-4", word: "Por favor", translation: "Làm ơn / Xin vui lòng" },
      { id: "v-ai-es-1-5", word: "Mucho gusto", translation: "Rất vui được gặp bạn" }
    ],
    phrases: [],
    activities: [],
    aiTeacherPrompt: {
      scenario: "Quảng trường Plaza Mayor Madrid rực rỡ nắng vàng",
      systemPrompt: "You are Elena, a warm, human, and energetic Spanish teacher. Speak mostly in English for clear guidance. Introduce Spanish words slowly: say the word once, give the English translation, and invite the student to repeat after you. Keep every reply strictly to 1 or 2 conversational sentences with friendly contractions (I'm, let's, that's). Listen closely to the student, praise correct pronunciation, and gently model errors again: 'So close! Try saying —'. Stay strictly on lesson words: ¡Hola!, Me llamo, Gracias, Por favor, Mucho gusto. Never switch topics.",
      initialGreeting: "¡Hola! ¡Bienvenido a Madrid! ¿Cómo te llamas? ¡Mucho gusto!",
      targetVocabulary: ["¡Hola!","Me llamo","Gracias","Por favor","Mucho gusto"],
      suggestedResponses: ["¡Hola Carmen! Me llamo Alex.","¡Mucho gusto! Estoy muy bien.","¡Muchas gracias!"],
      difficulty: "beginner"
    }
  },
  {
    id: "lesson-es-201",
    unitId: "unit-es-2",
    title: "Gia Đình Tôi (Mi Familia)",
    description: "Gọi tên bố, mẹ, anh chị em bằng tiếng Tây Ban Nha.",
    type: "standard",
    xp: 15,
    estimatedMinutes: 5,
    order: 1,
    status: "available",
    goals: [
      { id: "g1", description: "Nắm vững các từ vựng chủ đề Gia Đình Tôi (Mi Familia)" },
      { id: "g2", description: "Luyện phát âm chuẩn và phản xạ câu qua các bài tập tương tác" }
    ],
    vocabulary: [
      { id: "v-es-201-1", word: "Familia", translation: "Gia đình", phonetic: "fah-mee-lyah" },
      { id: "v-es-201-2", word: "Padre / Papá", translation: "Bố / Cha", phonetic: "pah-dreh / pah-pah" },
      { id: "v-es-201-3", word: "Madre / Mamá", translation: "Mẹ", phonetic: "mah-dreh / mah-mah" },
      { id: "v-es-201-4", word: "Hermano", translation: "Anh em trai", phonetic: "air-mah-noh" },
      { id: "v-es-201-5", word: "Hermana", translation: "Chị em gái", phonetic: "air-mah-nah" }
    ],
    phrases: [
      { id: "p-es-201-1", text: "Esta es mi familia.", translation: "Đây là gia đình của tôi." },
      { id: "p-es-201-2", text: "Tengo un hermano y una hermana.", translation: "Tôi có một người anh trai và một người chị gái." }
    ],
    activities: [
      {
        id: "act-es-201-1",
        type: "multiple_choice",
        skill: "reading",
        question: "'Madre' nghĩa là gì?",
        options: ["Mẹ","Bố","Anh trai","Chị gái"],
        correctAnswer: "Mẹ"
      },
      {
        id: "act-es-201-2",
        type: "fill_blank",
        skill: "writing",
        question: "Điền từ: 'Este es mi _____.' (bố tôi)",
        prompt: "Điền từ: 'Este es mi _____.' (bố tôi)",
        options: ["padre","madre","hermana","familia"],
        correctAnswer: "padre"
      },
      {
        id: "act-es-201-3",
        type: "multiple_choice",
        skill: "reading",
        question: "Dịch: 'Mi familia'",
        options: ["Gia đình tôi","Bạn bè tôi","Nhà tôi","Trường tôi"],
        correctAnswer: "Gia đình tôi"
      },
      {
        id: "act-es-201-4",
        type: "match_pairs",
        skill: "reading",
        question: "Ghép các cặp từ vựng với nghĩa tiếng Việt tương ứng",
        pairs: [{"left":"Familia","right":"Gia đình"},{"left":"Padre / Papá","right":"Bố / Cha"},{"left":"Madre / Mamá","right":"Mẹ"},{"left":"Hermano","right":"Anh em trai"}],
        correctAnswer: "all_matched"
      },
      {
        id: "act-es-201-5",
        type: "audio_listen",
        skill: "listening",
        question: "Lắng nghe và chọn đáp án chính xác:",
        prompt: "Familia",
        options: ["Mẹ","Bố","Anh trai","Chị gái"],
        correctAnswer: "Mẹ"
      }
    ]
  },
  {
    id: "lesson-es-202",
    unitId: "unit-es-2",
    title: "Miêu Tả Bạn Thân (Mi Amigo)",
    description: "Miêu tả tính cách thân thiện, tốt bụng, vui vẻ.",
    type: "standard",
    xp: 15,
    estimatedMinutes: 5,
    order: 2,
    status: "available",
    goals: [
      { id: "g1", description: "Nắm vững các từ vựng chủ đề Miêu Tả Bạn Thân (Mi Amigo)" },
      { id: "g2", description: "Luyện phát âm chuẩn và phản xạ câu qua các bài tập tương tác" }
    ],
    vocabulary: [
      { id: "v-es-202-1", word: "Amigo / Amiga", translation: "Bạn bè (nam / nữ)", phonetic: "ah-mee-goh" },
      { id: "v-es-202-2", word: "Simpático / Simpática", translation: "Dễ mến / Thân thiện", phonetic: "seem-pah-tee-koh" },
      { id: "v-es-202-3", word: "Guapo / Guapa", translation: "Đẹp trai / Xinh đẹp", phonetic: "gwah-poh" },
      { id: "v-es-202-4", word: "Alto / Alta", translation: "Cao lớn", phonetic: "ahl-toh" },
      { id: "v-es-202-5", word: "Divertido", translation: "Hài hước / Thú vị", phonetic: "dee-vair-tee-doh" }
    ],
    phrases: [
      { id: "p-es-202-1", text: "Este es mi amigo Diego, es muy simpático.", translation: "Đây là bạn tôi Diego, cậu ấy rất dễ mến." },
      { id: "p-es-202-2", text: "Ella es muy guapa y divertida.", translation: "Cô ấy rất xinh đẹp và vui tính." }
    ],
    activities: [
      {
        id: "act-es-202-1",
        type: "multiple_choice",
        skill: "reading",
        question: "'Simpático' nghĩa là gì?",
        options: ["Dễ mến / Thân thiện","Xấu tính","Lười biếng","Giận dữ"],
        correctAnswer: "Dễ mến / Thân thiện"
      },
      {
        id: "act-es-202-2",
        type: "fill_blank",
        skill: "writing",
        question: "Điền từ: 'Diego es mi _____.' (bạn tôi)",
        prompt: "Điền từ: 'Diego es mi _____.' (bạn tôi)",
        options: ["amigo","padre","madre","hermana"],
        correctAnswer: "amigo"
      },
      {
        id: "act-es-202-3",
        type: "multiple_choice",
        skill: "reading",
        question: "Dịch: 'Es muy guapo'",
        options: ["Anh ấy rất đẹp trai","Anh ấy rất cao","Anh ấy là bạn tôi","Anh ấy đi học"],
        correctAnswer: "Anh ấy rất đẹp trai"
      },
      {
        id: "act-es-202-4",
        type: "match_pairs",
        skill: "reading",
        question: "Ghép các cặp từ vựng với nghĩa tiếng Việt tương ứng",
        pairs: [{"left":"Amigo / Amiga","right":"Bạn bè (nam / nữ)"},{"left":"Simpático / Simpática","right":"Dễ mến / Thân thiện"},{"left":"Guapo / Guapa","right":"Đẹp trai / Xinh đẹp"},{"left":"Alto / Alta","right":"Cao lớn"}],
        correctAnswer: "all_matched"
      },
      {
        id: "act-es-202-5",
        type: "audio_listen",
        skill: "listening",
        question: "Lắng nghe và chọn đáp án chính xác:",
        prompt: "Amigo / Amiga",
        options: ["Dễ mến / Thân thiện","Xấu tính","Lười biếng","Giận dữ"],
        correctAnswer: "Dễ mến / Thân thiện"
      }
    ]
  },
  {
    id: "lesson-es-203",
    unitId: "unit-es-2",
    title: "Màu Sắc & Trang Phục (Colores y Ropa)",
    description: "Màu sắc và quần áo trong tiếng Tây Ban Nha.",
    type: "standard",
    xp: 15,
    estimatedMinutes: 5,
    order: 3,
    status: "available",
    goals: [
      { id: "g1", description: "Nắm vững các từ vựng chủ đề Màu Sắc & Trang Phục (Colores y Ropa)" },
      { id: "g2", description: "Luyện phát âm chuẩn và phản xạ câu qua các bài tập tương tác" }
    ],
    vocabulary: [
      { id: "v-es-203-1", word: "Blanco / Negro", translation: "Màu trắng / Màu đen", phonetic: "blahn-koh / neh-groh" },
      { id: "v-es-203-2", word: "Rojo / Azul", translation: "Màu đỏ / Màu xanh dương", phonetic: "roh-hoh / ah-zool" },
      { id: "v-es-203-3", word: "Amarillo", translation: "Màu vàng", phonetic: "ah-mah-ree-yoh" },
      { id: "v-es-203-4", word: "Camisa", translation: "Áo sơ mi", phonetic: "kah-mee-sah" },
      { id: "v-es-203-5", word: "Zapatos", translation: "Đôi giày", phonetic: "thah-pah-tohs" }
    ],
    phrases: [
      { id: "p-es-203-1", text: "Llevo una camisa roja.", translation: "Tôi đang mặc một chiếc áo sơ mi màu đỏ." },
      { id: "p-es-203-2", text: "Los zapatos son negros.", translation: "Đôi giày có màu đen." }
    ],
    activities: [
      {
        id: "act-es-203-1",
        type: "multiple_choice",
        skill: "reading",
        question: "Cờ Tây Ban Nha gồm hai màu chính nào?",
        options: ["Rojo y Amarillo (Đỏ và Vàng)","Azul y Blanco (Xanh và Trắng)","Negro y Rojo (Đen và Đỏ)","Verde y Blanco (Xanh và Trắng)"],
        correctAnswer: "Rojo y Amarillo (Đỏ và Vàng)"
      },
      {
        id: "act-es-203-2",
        type: "fill_blank",
        skill: "writing",
        question: "Điền từ: 'Una camisa _____.' (màu đỏ)",
        prompt: "Điền từ: 'Una camisa _____.' (màu đỏ)",
        options: ["roja","negro","amarillo","blanco"],
        correctAnswer: "roja"
      },
      {
        id: "act-es-203-3",
        type: "multiple_choice",
        skill: "reading",
        question: "Dịch: 'Zapatos negros'",
        options: ["Đôi giày đen","Đôi giày trắng","Chiếc áo đen","Màu sắc đen"],
        correctAnswer: "Đôi giày đen"
      },
      {
        id: "act-es-203-4",
        type: "match_pairs",
        skill: "reading",
        question: "Ghép các cặp từ vựng với nghĩa tiếng Việt tương ứng",
        pairs: [{"left":"Blanco / Negro","right":"Màu trắng / Màu đen"},{"left":"Rojo / Azul","right":"Màu đỏ / Màu xanh dương"},{"left":"Amarillo","right":"Màu vàng"},{"left":"Camisa","right":"Áo sơ mi"}],
        correctAnswer: "all_matched"
      },
      {
        id: "act-es-203-5",
        type: "audio_listen",
        skill: "listening",
        question: "Lắng nghe và chọn đáp án chính xác:",
        prompt: "Blanco / Negro",
        options: ["Rojo y Amarillo (Đỏ và Vàng)","Azul y Blanco (Xanh và Trắng)","Negro y Rojo (Đen và Đỏ)","Verde y Blanco (Xanh và Trắng)"],
        correctAnswer: "Rojo y Amarillo (Đỏ và Vàng)"
      }
    ]
  },
  {
    id: "lesson-es-204",
    unitId: "unit-es-2",
    title: "Sở Thích Của Tôi (Me gusta)",
    description: "Bày tỏ điều mình yêu thích bằng cấu trúc 'Me gusta'.",
    type: "standard",
    xp: 15,
    estimatedMinutes: 5,
    order: 4,
    status: "available",
    goals: [
      { id: "g1", description: "Nắm vững các từ vựng chủ đề Sở Thích Của Tôi (Me gusta)" },
      { id: "g2", description: "Luyện phát âm chuẩn và phản xạ câu qua các bài tập tương tác" }
    ],
    vocabulary: [
      { id: "v-es-204-1", word: "Me gusta", translation: "Tôi thích", phonetic: "meh goos-tah" },
      { id: "v-es-204-2", word: "No me gusta", translation: "Tôi không thích", phonetic: "noh meh goos-tah" },
      { id: "v-es-204-3", word: "Música", translation: "Âm nhạc", phonetic: "moo-see-kah" },
      { id: "v-es-204-4", word: "Fútbol", translation: "Bóng đá", phonetic: "foot-bohl" },
      { id: "v-es-204-5", word: "Viajar", translation: "Đi du lịch", phonetic: "vyah-hahr" }
    ],
    phrases: [
      { id: "p-es-204-1", text: "Me gusta mucho la música latina.", translation: "Tôi rất thích âm nhạc Latin." },
      { id: "p-es-204-2", text: "¿Qué te gusta hacer?", translation: "Bạn thích làm gì thế?" }
    ],
    activities: [
      {
        id: "act-es-204-1",
        type: "multiple_choice",
        skill: "reading",
        question: "Cấu trúc nói 'Tôi thích...' trong tiếng Tây Ban Nha là gì?",
        options: ["Me gusta...","No me gusta...","Gracias...","Adiós..."],
        correctAnswer: "Me gusta..."
      },
      {
        id: "act-es-204-2",
        type: "fill_blank",
        skill: "writing",
        question: "Điền từ: '_____ mucho viajar.' (tôi thích)",
        prompt: "Điền từ: '_____ mucho viajar.' (tôi thích)",
        options: ["Me gusta","No me","Gracias","Por favor"],
        correctAnswer: "Me gusta"
      },
      {
        id: "act-es-204-3",
        type: "multiple_choice",
        skill: "reading",
        question: "Dịch: 'Me gusta el fútbol'",
        options: ["Tôi thích bóng đá","Tôi ghét bóng đá","Tôi đá bóng","Tôi là cầu thủ"],
        correctAnswer: "Tôi thích bóng đá"
      },
      {
        id: "act-es-204-4",
        type: "match_pairs",
        skill: "reading",
        question: "Ghép các cặp từ vựng với nghĩa tiếng Việt tương ứng",
        pairs: [{"left":"Me gusta","right":"Tôi thích"},{"left":"No me gusta","right":"Tôi không thích"},{"left":"Música","right":"Âm nhạc"},{"left":"Fútbol","right":"Bóng đá"}],
        correctAnswer: "all_matched"
      },
      {
        id: "act-es-204-5",
        type: "audio_listen",
        skill: "listening",
        question: "Lắng nghe và chọn đáp án chính xác:",
        prompt: "Me gusta",
        options: ["Me gusta...","No me gusta...","Gracias...","Adiós..."],
        correctAnswer: "Me gusta..."
      }
    ]
  },
  {
    id: "lesson-es-205",
    unitId: "unit-es-2",
    title: "AI Practice: Gia Đình & Bóng Đá Cùng Mateo",
    description: "Trò chuyện hào hứng về gia đình và tình yêu bóng đá cùng anh bạn Mateo ở Barcelona.",
    type: "audio_ai",
    xp: 25,
    estimatedMinutes: 5,
    order: 5,
    heroImage: images.mascotWelcome,
    status: "available",
    goals: [
      { id: "g1", description: "Luyện phản xạ giao tiếp thực tế với AI Teacher Elena" },
      { id: "g2", description: "Vận dụng từ vựng trọng tâm vào ngữ cảnh hội thoại tự nhiên" }
    ],
    vocabulary: [
      { id: "v-ai-es-2-1", word: "Familia", translation: "Gia đình" },
      { id: "v-ai-es-2-2", word: "Amigo", translation: "Bạn bè" },
      { id: "v-ai-es-2-3", word: "Me gusta", translation: "Tôi thích" },
      { id: "v-ai-es-2-4", word: "Fútbol", translation: "Bóng đá" },
      { id: "v-ai-es-2-5", word: "Música", translation: "Âm nhạc" }
    ],
    phrases: [],
    activities: [],
    aiTeacherPrompt: {
      scenario: "Quán cà phê gần sân vận động Camp Nou Barcelona",
      systemPrompt: "You are Elena, a warm, human, and energetic Spanish teacher. Speak mostly in English for clear guidance. Introduce Spanish words slowly: say the word once, give the English translation, and invite the student to repeat after you. Keep every reply strictly to 1 or 2 conversational sentences with friendly contractions (I'm, let's, that's). Listen closely to the student, praise correct pronunciation, and gently model errors again: 'So close! Try saying —'. Stay strictly on lesson words: Familia, Amigo, Me gusta, Fútbol, Música. Never switch topics.",
      initialGreeting: "¡Hola amigo! ¿Cómo estás? ¿Te gusta el fútbol o la música? Cuéntame de tu familia.",
      targetVocabulary: ["Familia","Amigo","Me gusta","Fútbol","Música"],
      suggestedResponses: ["¡Me gusta mucho el fútbol!","Mi familia vive en Vietnam.","¿Y a ti Mateo, qué te gusta?"],
      difficulty: "beginner"
    }
  },
  {
    id: "lesson-es-301",
    unitId: "unit-es-3",
    title: "Mấy Giờ Rồi? (¿Qué hora es?)",
    description: "Hỏi và nói giờ giấc trong tiếng Tây Ban Nha.",
    type: "standard",
    xp: 15,
    estimatedMinutes: 5,
    order: 1,
    status: "available",
    goals: [
      { id: "g1", description: "Nắm vững các từ vựng chủ đề Mấy Giờ Rồi? (¿Qué hora es?)" },
      { id: "g2", description: "Luyện phát âm chuẩn và phản xạ câu qua các bài tập tương tác" }
    ],
    vocabulary: [
      { id: "v-es-301-1", word: "¿Qué hora es?", translation: "Mấy giờ rồi?", phonetic: "keh oh-rah ehs" },
      { id: "v-es-301-2", word: "Hora", translation: "Giờ", phonetic: "oh-rah" },
      { id: "v-es-301-3", word: "Minuto", translation: "Phút", phonetic: "mee-noo-toh" },
      { id: "v-es-301-4", word: "Y media", translation: "Rưỡi / Nửa (30 phút)", phonetic: "ee meh-dyah" },
      { id: "v-es-301-5", word: "Mañana / Noche", translation: "Buổi sáng / Buổi tối", phonetic: "mah-nyah-nah / noh-cheh" }
    ],
    phrases: [
      { id: "p-es-301-1", text: "¿Qué hora es, por favor?", translation: "Mấy giờ rồi, làm ơn cho hỏi?" },
      { id: "p-es-301-2", text: "Son las ocho y media de la mañana.", translation: "Bây giờ là 8 giờ rưỡi sáng." }
    ],
    activities: [
      {
        id: "act-es-301-1",
        type: "multiple_choice",
        skill: "reading",
        question: "'¿Qué hora es?' nghĩa là gì?",
        options: ["Mấy giờ rồi?","Hôm nay thứ mấy?","Đi đâu đấy?","Bao nhiêu tiền?"],
        correctAnswer: "Mấy giờ rồi?"
      },
      {
        id: "act-es-301-2",
        type: "fill_blank",
        skill: "writing",
        question: "Điền từ: 'Son las siete y _____.' (rưỡi)",
        prompt: "Điền từ: 'Son las siete y _____.' (rưỡi)",
        options: ["media","hora","minuto","mañana"],
        correctAnswer: "media"
      },
      {
        id: "act-es-301-3",
        type: "multiple_choice",
        skill: "reading",
        question: "Dịch: 'Las ocho y media'",
        options: ["8 giờ rưỡi","7 giờ rưỡi","8 giờ","9 giờ"],
        correctAnswer: "8 giờ rưỡi"
      },
      {
        id: "act-es-301-4",
        type: "match_pairs",
        skill: "reading",
        question: "Ghép các cặp từ vựng với nghĩa tiếng Việt tương ứng",
        pairs: [{"left":"¿Qué hora es?","right":"Mấy giờ rồi?"},{"left":"Hora","right":"Giờ"},{"left":"Minuto","right":"Phút"},{"left":"Y media","right":"Rưỡi / Nửa (30 phút)"}],
        correctAnswer: "all_matched"
      },
      {
        id: "act-es-301-5",
        type: "audio_listen",
        skill: "listening",
        question: "Lắng nghe và chọn đáp án chính xác:",
        prompt: "¿Qué hora es?",
        options: ["Mấy giờ rồi?","Hôm nay thứ mấy?","Đi đâu đấy?","Bao nhiêu tiền?"],
        correctAnswer: "Mấy giờ rồi?"
      }
    ]
  },
  {
    id: "lesson-es-302",
    unitId: "unit-es-3",
    title: "Thói Quen Buổi Sáng (La Rutina Diaria)",
    description: "Thức dậy, ăn sáng và đi làm.",
    type: "standard",
    xp: 15,
    estimatedMinutes: 5,
    order: 2,
    status: "available",
    goals: [
      { id: "g1", description: "Nắm vững các từ vựng chủ đề Thói Quen Buổi Sáng (La Rutina Diaria)" },
      { id: "g2", description: "Luyện phát âm chuẩn và phản xạ câu qua các bài tập tương tác" }
    ],
    vocabulary: [
      { id: "v-es-302-1", word: "Despertarse", translation: "Thức dậy", phonetic: "dehs-pair-tahr-seh" },
      { id: "v-es-302-2", word: "Dormir", translation: "Đi ngủ", phonetic: "dohr-meer" },
      { id: "v-es-302-3", word: "Comer", translation: "Ăn", phonetic: "koh-mair" },
      { id: "v-es-302-4", word: "Beber / Tomar", translation: "Uống", phonetic: "beh-bair / toh-mahr" },
      { id: "v-es-302-5", word: "Trabajar", translation: "Làm việc", phonetic: "trah-bah-hahr" }
    ],
    phrases: [
      { id: "p-es-302-1", text: "Me despierto a las siete de la mañana.", translation: "Tôi thức dậy lúc 7 giờ sáng." },
      { id: "p-es-302-2", text: "Tomo un café por la mañana.", translation: "Tôi uống một ly cà phê vào buổi sáng." }
    ],
    activities: [
      {
        id: "act-es-302-1",
        type: "multiple_choice",
        skill: "reading",
        question: "'Comer' nghĩa là hành động gì?",
        options: ["Ăn","Uống","Ngủ","Làm việc"],
        correctAnswer: "Ăn"
      },
      {
        id: "act-es-302-2",
        type: "fill_blank",
        skill: "writing",
        question: "Điền từ: 'Me despierto a las 7 de la _____.' (buổi sáng)",
        prompt: "Điền từ: 'Me despierto a las 7 de la _____.' (buổi sáng)",
        options: ["mañana","noche","tarde","hora"],
        correctAnswer: "mañana"
      },
      {
        id: "act-es-302-3",
        type: "multiple_choice",
        skill: "reading",
        question: "Dịch: 'Tomar un café'",
        options: ["Uống cà phê","Ăn bánh mì","Đi làm","Đi ngủ"],
        correctAnswer: "Uống cà phê"
      },
      {
        id: "act-es-302-4",
        type: "match_pairs",
        skill: "reading",
        question: "Ghép các cặp từ vựng với nghĩa tiếng Việt tương ứng",
        pairs: [{"left":"Despertarse","right":"Thức dậy"},{"left":"Dormir","right":"Đi ngủ"},{"left":"Comer","right":"Ăn"},{"left":"Beber / Tomar","right":"Uống"}],
        correctAnswer: "all_matched"
      },
      {
        id: "act-es-302-5",
        type: "audio_listen",
        skill: "listening",
        question: "Lắng nghe và chọn đáp án chính xác:",
        prompt: "Despertarse",
        options: ["Ăn","Uống","Ngủ","Làm việc"],
        correctAnswer: "Ăn"
      }
    ]
  },
  {
    id: "lesson-es-303",
    unitId: "unit-es-3",
    title: "Các Ngày Trong Tuần (Los Días de la Semana)",
    description: "Từ thứ Hai đến Chủ Nhật tiếng Tây Ban Nha.",
    type: "standard",
    xp: 15,
    estimatedMinutes: 5,
    order: 3,
    status: "available",
    goals: [
      { id: "g1", description: "Nắm vững các từ vựng chủ đề Các Ngày Trong Tuần (Los Días de la Semana)" },
      { id: "g2", description: "Luyện phát âm chuẩn và phản xạ câu qua các bài tập tương tác" }
    ],
    vocabulary: [
      { id: "v-es-303-1", word: "Lunes", translation: "Thứ Hai", phonetic: "loo-nehs" },
      { id: "v-es-303-2", word: "Viernes", translation: "Thứ Sáu", phonetic: "vyehr-nehs" },
      { id: "v-es-303-3", word: "Domingo", translation: "Chủ Nhật", phonetic: "doh-meen-goh" },
      { id: "v-es-303-4", word: "Hoy", translation: "Hôm nay", phonetic: "oy" },
      { id: "v-es-303-5", word: "Mañana", translation: "Ngày mai", phonetic: "mah-nyah-nah" }
    ],
    phrases: [
      { id: "p-es-303-1", text: "¡Hoy es viernes!", translation: "Hôm nay là thứ Sáu rồi!" },
      { id: "p-es-303-2", text: "¡Hasta mañana!", translation: "Hẹn gặp lại vào ngày mai!" }
    ],
    activities: [
      {
        id: "act-es-303-1",
        type: "multiple_choice",
        skill: "reading",
        question: "'Domingo' là ngày nào trong tuần?",
        options: ["Chủ Nhật","Thứ Hai","Thứ Bảy","Thứ Sáu"],
        correctAnswer: "Chủ Nhật"
      },
      {
        id: "act-es-303-2",
        type: "fill_blank",
        skill: "writing",
        question: "Điền từ: '_____ es viernes.' (hôm nay)",
        prompt: "Điền từ: '_____ es viernes.' (hôm nay)",
        options: ["Hoy","Mañana","Lunes","Hora"],
        correctAnswer: "Hoy"
      },
      {
        id: "act-es-303-3",
        type: "multiple_choice",
        skill: "reading",
        question: "Dịch: 'Hoy es lunes'",
        options: ["Hôm nay là thứ Hai","Hôm nay là thứ Sáu","Ngày mai là thứ Hai","Hôm qua là thứ Hai"],
        correctAnswer: "Hôm nay là thứ Hai"
      },
      {
        id: "act-es-303-4",
        type: "match_pairs",
        skill: "reading",
        question: "Ghép các cặp từ vựng với nghĩa tiếng Việt tương ứng",
        pairs: [{"left":"Lunes","right":"Thứ Hai"},{"left":"Viernes","right":"Thứ Sáu"},{"left":"Domingo","right":"Chủ Nhật"},{"left":"Hoy","right":"Hôm nay"}],
        correctAnswer: "all_matched"
      },
      {
        id: "act-es-303-5",
        type: "audio_listen",
        skill: "listening",
        question: "Lắng nghe và chọn đáp án chính xác:",
        prompt: "Lunes",
        options: ["Chủ Nhật","Thứ Hai","Thứ Bảy","Thứ Sáu"],
        correctAnswer: "Chủ Nhật"
      }
    ]
  },
  {
    id: "lesson-es-304",
    unitId: "unit-es-3",
    title: "Thời Tiết Nắng Gắt (El Tiempo)",
    description: "Nói về thời tiết nắng đẹp, mưa hay lạnh.",
    type: "standard",
    xp: 15,
    estimatedMinutes: 5,
    order: 4,
    status: "available",
    goals: [
      { id: "g1", description: "Nắm vững các từ vựng chủ đề Thời Tiết Nắng Gắt (El Tiempo)" },
      { id: "g2", description: "Luyện phát âm chuẩn và phản xạ câu qua các bài tập tương tác" }
    ],
    vocabulary: [
      { id: "v-es-304-1", word: "El tiempo", translation: "Thời tiết", phonetic: "el tyem-poh" },
      { id: "v-es-304-2", word: "Hace sol", translation: "Trời nắng / Nắng đẹp", phonetic: "ah-seh sohl" },
      { id: "v-es-304-3", word: "Llueve", translation: "Trời mưa", phonetic: "yweh-veh" },
      { id: "v-es-304-4", word: "Hace calor", translation: "Trời nóng", phonetic: "ah-seh kah-lohr" },
      { id: "v-es-304-5", word: "Hace frío", translation: "Trời lạnh", phonetic: "ah-seh free-oh" }
    ],
    phrases: [
      { id: "p-es-304-1", text: "Hoy hace muy buen tiempo y hace sol.", translation: "Hôm nay thời tiết rất đẹp và trời có nắng." },
      { id: "p-es-304-2", text: "Llueve en Madrid hoy.", translation: "Hôm nay trời đang mưa ở Madrid." }
    ],
    activities: [
      {
        id: "act-es-304-1",
        type: "multiple_choice",
        skill: "reading",
        question: "'Llueve' có nghĩa là gì?",
        options: ["Trời mưa","Trời nắng","Có tuyết","Gió to"],
        correctAnswer: "Trời mưa"
      },
      {
        id: "act-es-304-2",
        type: "fill_blank",
        skill: "writing",
        question: "Điền từ: 'Hoy hace _____ tiempo.' (thời tiết tốt)",
        prompt: "Điền từ: 'Hoy hace _____ tiempo.' (thời tiết tốt)",
        options: ["buen","llueve","frío","hora"],
        correctAnswer: "buen"
      },
      {
        id: "act-es-304-3",
        type: "multiple_choice",
        skill: "reading",
        question: "Dịch: 'Hace calor'",
        options: ["Trời nóng","Trời lạnh","Trời đẹp","Trời mưa"],
        correctAnswer: "Trời nóng"
      },
      {
        id: "act-es-304-4",
        type: "match_pairs",
        skill: "reading",
        question: "Ghép các cặp từ vựng với nghĩa tiếng Việt tương ứng",
        pairs: [{"left":"El tiempo","right":"Thời tiết"},{"left":"Hace sol","right":"Trời nắng / Nắng đẹp"},{"left":"Llueve","right":"Trời mưa"},{"left":"Hace calor","right":"Trời nóng"}],
        correctAnswer: "all_matched"
      },
      {
        id: "act-es-304-5",
        type: "audio_listen",
        skill: "listening",
        question: "Lắng nghe và chọn đáp án chính xác:",
        prompt: "El tiempo",
        options: ["Trời mưa","Trời nắng","Có tuyết","Gió to"],
        correctAnswer: "Trời mưa"
      }
    ]
  },
  {
    id: "lesson-es-305",
    unitId: "unit-es-3",
    title: "AI Practice: Một Ngày Của Bạn Tại Tây Ban Nha",
    description: "Kể cho cô bạn Lucia nghe về lịch trình sinh hoạt và thời tiết một ngày của bạn.",
    type: "audio_ai",
    xp: 25,
    estimatedMinutes: 5,
    order: 5,
    heroImage: images.mascotWelcome,
    status: "available",
    goals: [
      { id: "g1", description: "Luyện phản xạ giao tiếp thực tế với AI Teacher Elena" },
      { id: "g2", description: "Vận dụng từ vựng trọng tâm vào ngữ cảnh hội thoại tự nhiên" }
    ],
    vocabulary: [
      { id: "v-ai-es-3-1", word: "Hora", translation: "Giờ" },
      { id: "v-ai-es-3-2", word: "Despertarse", translation: "Thức dậy" },
      { id: "v-ai-es-3-3", word: "Café", translation: "Cà phê" },
      { id: "v-ai-es-3-4", word: "Hace sol", translation: "Trời nắng / Nắng đẹp" },
      { id: "v-ai-es-3-5", word: "Hoy", translation: "Hôm nay" }
    ],
    phrases: [],
    activities: [],
    aiTeacherPrompt: {
      scenario: "Quán cà phê ngoài trời tại Seville trong buổi sáng rực rỡ",
      systemPrompt: "You are Elena, a warm, human, and energetic Spanish teacher. Speak mostly in English for clear guidance. Introduce Spanish words slowly: say the word once, give the English translation, and invite the student to repeat after you. Keep every reply strictly to 1 or 2 conversational sentences with friendly contractions (I'm, let's, that's). Listen closely to the student, praise correct pronunciation, and gently model errors again: 'So close! Try saying —'. Stay strictly on lesson words: Hora, Despertarse, Café, Hace sol, Hoy. Never switch topics.",
      initialGreeting: "¡Buenos días! Hace un día precioso. ¿A qué hora te has levantado hoy?",
      targetVocabulary: ["Hora","Despertarse","Café","Hace sol","Hoy"],
      suggestedResponses: ["Me he levantado a las siete.","¡Hoy hace mucho sol!","He tomado un café con leche."],
      difficulty: "beginner"
    }
  },
  {
    id: "lesson-es-401",
    unitId: "unit-es-4",
    title: "Tại Quán Ăn Tapas (En el Restaurante)",
    description: "Vào quán ăn, gọi phục vụ và xin thực đơn.",
    type: "standard",
    xp: 15,
    estimatedMinutes: 5,
    order: 1,
    status: "available",
    goals: [
      { id: "g1", description: "Nắm vững các từ vựng chủ đề Tại Quán Ăn Tapas (En el Restaurante)" },
      { id: "g2", description: "Luyện phát âm chuẩn và phản xạ câu qua các bài tập tương tác" }
    ],
    vocabulary: [
      { id: "v-es-401-1", word: "Camarero / Camarera", translation: "Người phục vụ", phonetic: "kah-mah-reh-roh" },
      { id: "v-es-401-2", word: "Menú / Carta", translation: "Thực đơn món ăn", phonetic: "meh-noo / kahr-tah" },
      { id: "v-es-401-3", word: "Pedir", translation: "Gọi món / Đặt món", phonetic: "peh-deer" },
      { id: "v-es-401-4", word: "Agua", translation: "Nước lọc", phonetic: "ah-gwah" },
      { id: "v-es-401-5", word: "Café con leche", translation: "Cà phê sữa", phonetic: "kah-fay kohn leh-cheh" }
    ],
    phrases: [
      { id: "p-es-401-1", text: "La carta, por favor.", translation: "Cho tôi xin cuốn thực đơn, làm ơn." },
      { id: "p-es-401-2", text: "Un vaso de agua, por favor.", translation: "Cho tôi xin một ly nước lọc." }
    ],
    activities: [
      {
        id: "act-es-401-1",
        type: "multiple_choice",
        skill: "reading",
        question: "'Camarero' nghĩa là gì?",
        options: ["Người phục vụ","Bác sĩ","Giáo viên","Bạn bè"],
        correctAnswer: "Người phục vụ"
      },
      {
        id: "act-es-401-2",
        type: "fill_blank",
        skill: "writing",
        question: "Điền từ: 'Quisiera _____.' (gọi món)",
        prompt: "Điền từ: 'Quisiera _____.' (gọi món)",
        options: ["pedir","agua","carta","camarero"],
        correctAnswer: "pedir"
      },
      {
        id: "act-es-401-3",
        type: "multiple_choice",
        skill: "reading",
        question: "Dịch: 'Agua, por favor'",
        options: ["Cho tôi xin nước lọc","Cho tôi cà phê","Tính tiền","Tạm biệt"],
        correctAnswer: "Cho tôi xin nước lọc"
      },
      {
        id: "act-es-401-4",
        type: "match_pairs",
        skill: "reading",
        question: "Ghép các cặp từ vựng với nghĩa tiếng Việt tương ứng",
        pairs: [{"left":"Camarero / Camarera","right":"Người phục vụ"},{"left":"Menú / Carta","right":"Thực đơn món ăn"},{"left":"Pedir","right":"Gọi món / Đặt món"},{"left":"Agua","right":"Nước lọc"}],
        correctAnswer: "all_matched"
      },
      {
        id: "act-es-401-5",
        type: "audio_listen",
        skill: "listening",
        question: "Lắng nghe và chọn đáp án chính xác:",
        prompt: "Camarero / Camarera",
        options: ["Người phục vụ","Bác sĩ","Giáo viên","Bạn bè"],
        correctAnswer: "Người phục vụ"
      }
    ]
  },
  {
    id: "lesson-es-402",
    unitId: "unit-es-4",
    title: "Gọi Món Tapas & Paella (Tapas Españolas)",
    description: "Món khai vị tapas, cơm rang hải sản Paella thơm ngon.",
    type: "standard",
    xp: 15,
    estimatedMinutes: 5,
    order: 2,
    status: "available",
    goals: [
      { id: "g1", description: "Nắm vững các từ vựng chủ đề Gọi Món Tapas & Paella (Tapas Españolas)" },
      { id: "g2", description: "Luyện phát âm chuẩn và phản xạ câu qua các bài tập tương tác" }
    ],
    vocabulary: [
      { id: "v-es-402-1", word: "Tapas", translation: "Món khai vị Tapas", phonetic: "tah-pahs" },
      { id: "v-es-402-2", word: "Paella", translation: "Cơm chiên hải sản Paella", phonetic: "pah-eh-yah" },
      { id: "v-es-402-3", word: "Jamón", translation: "Thịt đùi heo muối Jamón", phonetic: "hah-mohn" },
      { id: "v-es-402-4", word: "Cerveza / Vino", translation: "Bia / Rượu vang", phonetic: "sair-veh-thah / vee-noh" },
      { id: "v-es-402-5", word: "Delicioso / Rico", translation: "Ngon tuyệt vời", phonetic: "deh-lee-syoh-soh / ree-koh" }
    ],
    phrases: [
      { id: "p-es-402-1", text: "Una ración de paella y jamón, por favor.", translation: "Cho tôi một phần cơm Paella và thịt muối Jamón." },
      { id: "p-es-402-2", text: "¡Esta paella está deliciosa!", translation: "Món cơm Paella này ngon tuyệt cú mèo!" }
    ],
    activities: [
      {
        id: "act-es-402-1",
        type: "multiple_choice",
        skill: "reading",
        question: "Món cơm chiên hải sản nổi tiếng nhất Tây Ban Nha là gì?",
        options: ["Paella","Tapas","Jamón","Tortilla"],
        correctAnswer: "Paella"
      },
      {
        id: "act-es-402-2",
        type: "fill_blank",
        skill: "writing",
        question: "Điền từ: 'La paella está _____.' (ngon)",
        prompt: "Điền từ: 'La paella está _____.' (ngon)",
        options: ["deliciosa","agua","carta","cerveza"],
        correctAnswer: "deliciosa"
      },
      {
        id: "act-es-402-3",
        type: "multiple_choice",
        skill: "reading",
        question: "Dịch: 'Está muy rico'",
        options: ["Ngon tuyệt vời","Cay quá","Đắt quá","Nóng quá"],
        correctAnswer: "Ngon tuyệt vời"
      },
      {
        id: "act-es-402-4",
        type: "match_pairs",
        skill: "reading",
        question: "Ghép các cặp từ vựng với nghĩa tiếng Việt tương ứng",
        pairs: [{"left":"Tapas","right":"Món khai vị Tapas"},{"left":"Paella","right":"Cơm chiên hải sản Paella"},{"left":"Jamón","right":"Thịt đùi heo muối Jamón"},{"left":"Cerveza / Vino","right":"Bia / Rượu vang"}],
        correctAnswer: "all_matched"
      },
      {
        id: "act-es-402-5",
        type: "audio_listen",
        skill: "listening",
        question: "Lắng nghe và chọn đáp án chính xác:",
        prompt: "Tapas",
        options: ["Paella","Tapas","Jamón","Tortilla"],
        correctAnswer: "Paella"
      }
    ]
  },
  {
    id: "lesson-es-403",
    unitId: "unit-es-4",
    title: "Văn Hóa Bàn Ăn (¡Salud! & Buen Provecho)",
    description: "Cụng ly rượu vang và chúc ngon miệng.",
    type: "standard",
    xp: 15,
    estimatedMinutes: 5,
    order: 3,
    status: "available",
    goals: [
      { id: "g1", description: "Nắm vững các từ vựng chủ đề Văn Hóa Bàn Ăn (¡Salud! & Buen Provecho)" },
      { id: "g2", description: "Luyện phát âm chuẩn và phản xạ câu qua các bài tập tương tác" }
    ],
    vocabulary: [
      { id: "v-es-403-1", word: "¡Salud!", translation: "Cạn ly! / Vì sức khỏe!", phonetic: "sah-lood" },
      { id: "v-es-403-2", word: "Buen provecho", translation: "Chúc ngon miệng", phonetic: "bwen proh-veh-choh" },
      { id: "v-es-403-3", word: "Hambre", translation: "Đói bụng", phonetic: "ahm-breh" },
      { id: "v-es-403-4", word: "Sed", translation: "Khát nước", phonetic: "sehd" },
      { id: "v-es-403-5", word: "Comida", translation: "Bữa ăn / Món ăn", phonetic: "koh-mee-dah" }
    ],
    phrases: [
      { id: "p-es-403-1", text: "¡Buen provecho a todos!", translation: "Chúc tất cả mọi người ngon miệng!" },
      { id: "p-es-403-2", text: "¡Salud! ¡Por nuestra amistad!", translation: "Cạn ly! Vì tình bạn của chúng ta!" }
    ],
    activities: [
      {
        id: "act-es-403-1",
        type: "multiple_choice",
        skill: "reading",
        question: "Người Tây Ban Nha chúc ngon miệng bằng câu gì?",
        options: ["¡Buen provecho!","¡Salud!","¡Adiós!","¡Perdón!"],
        correctAnswer: "¡Buen provecho!"
      },
      {
        id: "act-es-403-2",
        type: "fill_blank",
        skill: "writing",
        question: "Điền từ: 'Trước khi ăn nói: Buen _____!'",
        prompt: "Điền từ: 'Trước khi ăn nói: Buen _____!'",
        options: ["provecho","días","salud","tardes"],
        correctAnswer: "provecho"
      },
      {
        id: "act-es-403-3",
        type: "multiple_choice",
        skill: "reading",
        question: "Dịch: '¡Salud!'",
        options: ["Cạn ly / Nâng ly!","Cảm ơn","Tạm biệt","Ngon miệng"],
        correctAnswer: "Cạn ly / Nâng ly!"
      },
      {
        id: "act-es-403-4",
        type: "match_pairs",
        skill: "reading",
        question: "Ghép các cặp từ vựng với nghĩa tiếng Việt tương ứng",
        pairs: [{"left":"¡Salud!","right":"Cạn ly! / Vì sức khỏe!"},{"left":"Buen provecho","right":"Chúc ngon miệng"},{"left":"Hambre","right":"Đói bụng"},{"left":"Sed","right":"Khát nước"}],
        correctAnswer: "all_matched"
      },
      {
        id: "act-es-403-5",
        type: "audio_listen",
        skill: "listening",
        question: "Lắng nghe và chọn đáp án chính xác:",
        prompt: "¡Salud!",
        options: ["¡Buen provecho!","¡Salud!","¡Adiós!","¡Perdón!"],
        correctAnswer: "¡Buen provecho!"
      }
    ]
  },
  {
    id: "lesson-es-404",
    unitId: "unit-es-4",
    title: "Tính Tiền Hóa Đơn (La cuenta, por favor)",
    description: "Xin hóa đơn và thanh toán bằng Euro.",
    type: "standard",
    xp: 15,
    estimatedMinutes: 5,
    order: 4,
    status: "available",
    goals: [
      { id: "g1", description: "Nắm vững các từ vựng chủ đề Tính Tiền Hóa Đơn (La cuenta, por favor)" },
      { id: "g2", description: "Luyện phát âm chuẩn và phản xạ câu qua các bài tập tương tác" }
    ],
    vocabulary: [
      { id: "v-es-404-1", word: "La cuenta", translation: "Hóa đơn tính tiền", phonetic: "lah kwen-tah" },
      { id: "v-es-404-2", word: "¿Cuánto cuesta?", translation: "Cái này giá bao nhiêu?", phonetic: "kwahn-toh kwes-tah" },
      { id: "v-es-404-3", word: "Euro", translation: "Đồng tiền Euro (€)", phonetic: "eh-oo-roh" },
      { id: "v-es-404-4", word: "Tarjeta", translation: "Thẻ ngân hàng", phonetic: "tahr-heh-tah" },
      { id: "v-es-404-5", word: "Efectivo", translation: "Tiền mặt", phonetic: "eh-fehk-tee-voh" }
    ],
    phrases: [
      { id: "p-es-404-1", text: "La cuenta, por favor.", translation: "Làm ơn tính tiền giúp tôi." },
      { id: "p-es-404-2", text: "¿Puedo pagar con tarjeta?", translation: "Tôi có thể thanh toán bằng thẻ được không?" }
    ],
    activities: [
      {
        id: "act-es-404-1",
        type: "multiple_choice",
        skill: "reading",
        question: "Câu chuẩn để xin hóa đơn tính tiền ở Tây Ban Nha là:",
        options: ["La cuenta, por favor.","La carta, por favor.","¡Salud!","¡Hola!"],
        correctAnswer: "La cuenta, por favor."
      },
      {
        id: "act-es-404-2",
        type: "fill_blank",
        skill: "writing",
        question: "Điền từ: 'La _____, por favor.' (hóa đơn)",
        prompt: "Điền từ: 'La _____, por favor.' (hóa đơn)",
        options: ["cuenta","tarjeta","carta","agua"],
        correctAnswer: "cuenta"
      },
      {
        id: "act-es-404-3",
        type: "multiple_choice",
        skill: "reading",
        question: "Dịch: '¿Cuánto cuesta?'",
        options: ["Bao nhiêu tiền?","Ở đâu vậy?","Món gì đây?","Ai thế?"],
        correctAnswer: "Bao nhiêu tiền?"
      },
      {
        id: "act-es-404-4",
        type: "match_pairs",
        skill: "reading",
        question: "Ghép các cặp từ vựng với nghĩa tiếng Việt tương ứng",
        pairs: [{"left":"La cuenta","right":"Hóa đơn tính tiền"},{"left":"¿Cuánto cuesta?","right":"Cái này giá bao nhiêu?"},{"left":"Euro","right":"Đồng tiền Euro (€)"},{"left":"Tarjeta","right":"Thẻ ngân hàng"}],
        correctAnswer: "all_matched"
      },
      {
        id: "act-es-404-5",
        type: "audio_listen",
        skill: "listening",
        question: "Lắng nghe và chọn đáp án chính xác:",
        prompt: "La cuenta",
        options: ["La cuenta, por favor.","La carta, por favor.","¡Salud!","¡Hola!"],
        correctAnswer: "La cuenta, por favor."
      }
    ]
  },
  {
    id: "lesson-es-405",
    unitId: "unit-es-4",
    title: "AI Practice: Gọi Món Tại Quán Tapas Madrid",
    description: "Thực hành gọi món Paella, Jamón và tính tiền cùng bác chủ quán Pablo.",
    type: "audio_ai",
    xp: 25,
    estimatedMinutes: 5,
    order: 5,
    heroImage: images.mascotWelcome,
    status: "available",
    goals: [
      { id: "g1", description: "Luyện phản xạ giao tiếp thực tế với AI Teacher Elena" },
      { id: "g2", description: "Vận dụng từ vựng trọng tâm vào ngữ cảnh hội thoại tự nhiên" }
    ],
    vocabulary: [
      { id: "v-ai-es-4-1", word: "Tapas", translation: "Món khai vị Tapas" },
      { id: "v-ai-es-4-2", word: "Paella", translation: "Cơm chiên hải sản Paella" },
      { id: "v-ai-es-4-3", word: "Delicioso", translation: "Ngon" },
      { id: "v-ai-es-4-4", word: "La cuenta", translation: "Hóa đơn tính tiền" },
      { id: "v-ai-es-4-5", word: "Por favor", translation: "Làm ơn / Xin vui lòng" }
    ],
    phrases: [],
    activities: [],
    aiTeacherPrompt: {
      scenario: "Quán bar Tapas truyền thống náo nhiệt tại khu La Latina Madrid",
      systemPrompt: "You are Elena, a warm, human, and energetic Spanish teacher. Speak mostly in English for clear guidance. Introduce Spanish words slowly: say the word once, give the English translation, and invite the student to repeat after you. Keep every reply strictly to 1 or 2 conversational sentences with friendly contractions (I'm, let's, that's). Listen closely to the student, praise correct pronunciation, and gently model errors again: 'So close! Try saying —'. Stay strictly on lesson words: Tapas, Paella, Delicioso, La cuenta, Por favor. Never switch topics.",
      initialGreeting: "¡Buenas tardes! Bienvenidos al Mesón de Pablo. ¿Qué les pongo de beber y comer hoy?",
      targetVocabulary: ["Tapas","Paella","Delicioso","La cuenta","Por favor"],
      suggestedResponses: ["Una paella y una ración de jamón, por favor.","¡Está todo riquísimo!","La cuenta, por favor."],
      difficulty: "beginner"
    }
  },
  {
    id: "lesson-es-501",
    unitId: "unit-es-5",
    title: "Ở Đâu Vậy? (¿Dónde está...?)",
    description: "Hỏi đường và chỉ hướng trong các thành phố.",
    type: "standard",
    xp: 15,
    estimatedMinutes: 5,
    order: 1,
    status: "available",
    goals: [
      { id: "g1", description: "Nắm vững các từ vựng chủ đề Ở Đâu Vậy? (¿Dónde está...?)" },
      { id: "g2", description: "Luyện phát âm chuẩn và phản xạ câu qua các bài tập tương tác" }
    ],
    vocabulary: [
      { id: "v-es-501-1", word: "¿Dónde está...?", translation: "Ở đâu vậy?", phonetic: "dohn-deh ehs-tah" },
      { id: "v-es-501-2", word: "Aquí / Allí", translation: "Ở đây / Ở đằng kia", phonetic: "ah-kee / ah-yee" },
      { id: "v-es-501-3", word: "A la derecha", translation: "Bên phải", phonetic: "ah lah deh-reh-chah" },
      { id: "v-es-501-4", word: "A la izquierda", translation: "Bên trái", phonetic: "ah lah eeth-kyehr-dah" },
      { id: "v-es-501-5", word: "Todo recto", translation: "Đi thẳng", phonetic: "toh-doh rehk-toh" }
    ],
    phrases: [
      { id: "p-es-501-1", text: "Disculpe, ¿dónde está la estación de tren?", translation: "Xin lỗi, ga xe lửa ở đâu vậy ạ?" },
      { id: "p-es-501-2", text: "Vaya todo recto y gire a la derecha.", translation: "Hãy đi thẳng rồi sau đó rẽ sang bên phải." }
    ],
    activities: [
      {
        id: "act-es-501-1",
        type: "multiple_choice",
        skill: "reading",
        question: "'A la derecha' là hướng nào?",
        options: ["Bên phải","Bên trái","Đi thẳng","Đằng sau"],
        correctAnswer: "Bên phải"
      },
      {
        id: "act-es-501-2",
        type: "fill_blank",
        skill: "writing",
        question: "Điền từ: 'Vaya todo _____.' (đi thẳng)",
        prompt: "Điền từ: 'Vaya todo _____.' (đi thẳng)",
        options: ["recto","derecha","izquierda","aquí"],
        correctAnswer: "recto"
      },
      {
        id: "act-es-501-3",
        type: "multiple_choice",
        skill: "reading",
        question: "Dịch: '¿Dónde está el baño?'",
        options: ["Nhà vệ sinh ở đâu?","Ga tàu ở đâu?","Sân bay ở đâu?","Khách sạn ở đâu?"],
        correctAnswer: "Nhà vệ sinh ở đâu?"
      },
      {
        id: "act-es-501-4",
        type: "match_pairs",
        skill: "reading",
        question: "Ghép các cặp từ vựng với nghĩa tiếng Việt tương ứng",
        pairs: [{"left":"¿Dónde está...?","right":"Ở đâu vậy?"},{"left":"Aquí / Allí","right":"Ở đây / Ở đằng kia"},{"left":"A la derecha","right":"Bên phải"},{"left":"A la izquierda","right":"Bên trái"}],
        correctAnswer: "all_matched"
      },
      {
        id: "act-es-501-5",
        type: "audio_listen",
        skill: "listening",
        question: "Lắng nghe và chọn đáp án chính xác:",
        prompt: "¿Dónde está...?",
        options: ["Bên phải","Bên trái","Đi thẳng","Đằng sau"],
        correctAnswer: "Bên phải"
      }
    ]
  },
  {
    id: "lesson-es-502",
    unitId: "unit-es-5",
    title: "Đi Tàu Điện & Xe Buýt (Metro y Autobús)",
    description: "Đi tàu điện ngầm Metro và xe buýt.",
    type: "standard",
    xp: 15,
    estimatedMinutes: 5,
    order: 2,
    status: "available",
    goals: [
      { id: "g1", description: "Nắm vững các từ vựng chủ đề Đi Tàu Điện & Xe Buýt (Metro y Autobús)" },
      { id: "g2", description: "Luyện phát âm chuẩn và phản xạ câu qua các bài tập tương tác" }
    ],
    vocabulary: [
      { id: "v-es-502-1", word: "Metro", translation: "Tàu điện ngầm Metro", phonetic: "meh-troh" },
      { id: "v-es-502-2", word: "Estación", translation: "Nhà ga / Trạm xe", phonetic: "ehs-tah-syohn" },
      { id: "v-es-502-3", word: "Autobús", translation: "Xe buýt", phonetic: "ow-toh-boos" },
      { id: "v-es-502-4", word: "Billete", translation: "Vé tàu xe", phonetic: "bee-yeh-teh" },
      { id: "v-es-502-5", word: "Línea", translation: "Tuyến / Line tàu", phonetic: "lee-neh-ah" }
    ],
    phrases: [
      { id: "p-es-502-1", text: "Un billete de metro, por favor.", translation: "Cho tôi một vé tàu điện ngầm, làm ơn." },
      { id: "p-es-502-2", text: "¿Dónde está la estación de metro más cercana?", translation: "Trạm tàu điện ngầm gần nhất ở đâu vậy?" }
    ],
    activities: [
      {
        id: "act-es-502-1",
        type: "multiple_choice",
        skill: "reading",
        question: "'Metro' nghĩa là gì?",
        options: ["Tàu điện ngầm","Xe buýt","Máy bay","Tàu hỏa"],
        correctAnswer: "Tàu điện ngầm"
      },
      {
        id: "act-es-502-2",
        type: "fill_blank",
        skill: "writing",
        question: "Điền từ: 'La _____ de metro.' (trạm tàu)",
        prompt: "Điền từ: 'La _____ de metro.' (trạm tàu)",
        options: ["estación","billete","línea","autobús"],
        correctAnswer: "estación"
      },
      {
        id: "act-es-502-3",
        type: "multiple_choice",
        skill: "reading",
        question: "Dịch: 'Un billete, por favor'",
        options: ["Một vé tàu xe, làm ơn","Một chuyến bay","Một nhà ga","Một chiếc xe"],
        correctAnswer: "Một vé tàu xe, làm ơn"
      },
      {
        id: "act-es-502-4",
        type: "match_pairs",
        skill: "reading",
        question: "Ghép các cặp từ vựng với nghĩa tiếng Việt tương ứng",
        pairs: [{"left":"Metro","right":"Tàu điện ngầm Metro"},{"left":"Estación","right":"Nhà ga / Trạm xe"},{"left":"Autobús","right":"Xe buýt"},{"left":"Billete","right":"Vé tàu xe"}],
        correctAnswer: "all_matched"
      },
      {
        id: "act-es-502-5",
        type: "audio_listen",
        skill: "listening",
        question: "Lắng nghe và chọn đáp án chính xác:",
        prompt: "Metro",
        options: ["Tàu điện ngầm","Xe buýt","Máy bay","Tàu hỏa"],
        correctAnswer: "Tàu điện ngầm"
      }
    ]
  },
  {
    id: "lesson-es-503",
    unitId: "unit-es-5",
    title: "Tại Khách Sạn (En el Hotel)",
    description: "Đặt phòng và check-in khách sạn tại Tây Ban Nha.",
    type: "standard",
    xp: 15,
    estimatedMinutes: 5,
    order: 3,
    status: "available",
    goals: [
      { id: "g1", description: "Nắm vững các từ vựng chủ đề Tại Khách Sạn (En el Hotel)" },
      { id: "g2", description: "Luyện phát âm chuẩn và phản xạ câu qua các bài tập tương tác" }
    ],
    vocabulary: [
      { id: "v-es-503-1", word: "Hotel", translation: "Khách sạn", phonetic: "oh-tel" },
      { id: "v-es-503-2", word: "Reserva", translation: "Đặt trước", phonetic: "reh-sair-vah" },
      { id: "v-es-503-3", word: "Habitación", translation: "Phòng ngủ", phonetic: "ah-bee-tah-syohn" },
      { id: "v-es-503-4", word: "Llave", translation: "Chìa khóa", phonetic: "yah-veh" },
      { id: "v-es-503-5", word: "WiFi", translation: "Mạng internet wifi", phonetic: "wee-fee" }
    ],
    phrases: [
      { id: "p-es-503-1", text: "Tengo una reserva a nombre de Alex.", translation: "Tôi có đặt phòng trước dưới tên Alex." },
      { id: "p-es-503-2", text: "¿Cuál es la contraseña del WiFi?", translation: "Mật khẩu mạng wifi là gì thế ạ?" }
    ],
    activities: [
      {
        id: "act-es-503-1",
        type: "multiple_choice",
        skill: "reading",
        question: "'La llave de la habitación' nghĩa là gì?",
        options: ["Chìa khóa phòng","Số phòng","Thẻ khách sạn","Mật khẩu"],
        correctAnswer: "Chìa khóa phòng"
      },
      {
        id: "act-es-503-2",
        type: "fill_blank",
        skill: "writing",
        question: "Điền từ: 'Aquí tiene la _____ de su habitación.' (chìa khóa)",
        prompt: "Điền từ: 'Aquí tiene la _____ de su habitación.' (chìa khóa)",
        options: ["llave","habitación","hotel","wifi"],
        correctAnswer: "llave"
      },
      {
        id: "act-es-503-3",
        type: "multiple_choice",
        skill: "reading",
        question: "Dịch: 'Tengo una reserva'",
        options: ["Tôi có đặt phòng trước","Tôi muốn trả phòng","Tôi muốn xem phòng","Phòng này bao nhiêu tiền"],
        correctAnswer: "Tôi có đặt phòng trước"
      },
      {
        id: "act-es-503-4",
        type: "match_pairs",
        skill: "reading",
        question: "Ghép các cặp từ vựng với nghĩa tiếng Việt tương ứng",
        pairs: [{"left":"Hotel","right":"Khách sạn"},{"left":"Reserva","right":"Đặt trước"},{"left":"Habitación","right":"Phòng ngủ"},{"left":"Llave","right":"Chìa khóa"}],
        correctAnswer: "all_matched"
      },
      {
        id: "act-es-503-5",
        type: "audio_listen",
        skill: "listening",
        question: "Lắng nghe và chọn đáp án chính xác:",
        prompt: "Hotel",
        options: ["Chìa khóa phòng","Số phòng","Thẻ khách sạn","Mật khẩu"],
        correctAnswer: "Chìa khóa phòng"
      }
    ]
  },
  {
    id: "lesson-es-504",
    unitId: "unit-es-5",
    title: "Sân Bay Barajas Madrid (Aeropuerto)",
    description: "Thủ tục lên máy bay, hành lý và hộ chiếu.",
    type: "standard",
    xp: 15,
    estimatedMinutes: 5,
    order: 4,
    status: "available",
    goals: [
      { id: "g1", description: "Nắm vững các từ vựng chủ đề Sân Bay Barajas Madrid (Aeropuerto)" },
      { id: "g2", description: "Luyện phát âm chuẩn và phản xạ câu qua các bài tập tương tác" }
    ],
    vocabulary: [
      { id: "v-es-504-1", word: "Aeropuerto", translation: "Sân bay", phonetic: "ah-eh-roh-pwehr-toh" },
      { id: "v-es-504-2", word: "Avión", translation: "Máy bay", phonetic: "ah-vyohn" },
      { id: "v-es-504-3", word: "Equipaje / Maleta", translation: "Hành lý / Vali", phonetic: "eh-kee-pah-heh" },
      { id: "v-es-504-4", word: "Pasaporte", translation: "Hộ chiếu", phonetic: "pah-sah-pohr-teh" },
      { id: "v-es-504-5", word: "Vuelo", translation: "Chuyến bay", phonetic: "vweh-loh" }
    ],
    phrases: [
      { id: "p-es-504-1", text: "Su pasaporte, por favor.", translation: "Làm ơn cho tôi xem hộ chiếu." },
      { id: "p-es-504-2", text: "Voy al aeropuerto de Madrid-Barajas.", translation: "Tôi đi đến sân bay Madrid-Barajas." }
    ],
    activities: [
      {
        id: "act-es-504-1",
        type: "multiple_choice",
        skill: "reading",
        question: "'Pasaporte' là giấy tờ gì?",
        options: ["Hộ chiếu","Vé máy bay","Hành lý","Ví tiền"],
        correctAnswer: "Hộ chiếu"
      },
      {
        id: "act-es-504-2",
        type: "fill_blank",
        skill: "writing",
        question: "Điền từ: 'Al _____ de Madrid.' (sân bay)",
        prompt: "Điền từ: 'Al _____ de Madrid.' (sân bay)",
        options: ["aeropuerto","avión","equipaje","vuelo"],
        correctAnswer: "aeropuerto"
      },
      {
        id: "act-es-504-3",
        type: "multiple_choice",
        skill: "reading",
        question: "Dịch: 'Mi equipaje'",
        options: ["Hành lý của tôi","Hộ chiếu của tôi","Vé máy bay của tôi","Túi xách của tôi"],
        correctAnswer: "Hành lý của tôi"
      },
      {
        id: "act-es-504-4",
        type: "match_pairs",
        skill: "reading",
        question: "Ghép các cặp từ vựng với nghĩa tiếng Việt tương ứng",
        pairs: [{"left":"Aeropuerto","right":"Sân bay"},{"left":"Avión","right":"Máy bay"},{"left":"Equipaje / Maleta","right":"Hành lý / Vali"},{"left":"Pasaporte","right":"Hộ chiếu"}],
        correctAnswer: "all_matched"
      },
      {
        id: "act-es-504-5",
        type: "audio_listen",
        skill: "listening",
        question: "Lắng nghe và chọn đáp án chính xác:",
        prompt: "Aeropuerto",
        options: ["Hộ chiếu","Vé máy bay","Hành lý","Ví tiền"],
        correctAnswer: "Hộ chiếu"
      }
    ]
  },
  {
    id: "lesson-es-505",
    unitId: "unit-es-5",
    title: "AI Practice: Đi Thăm Nhà Thờ Sagrada Família",
    description: "Thực hành hỏi nhân viên du lịch Javier đường đến kiệt tác Sagrada Família ở Barcelona.",
    type: "audio_ai",
    xp: 25,
    estimatedMinutes: 5,
    order: 5,
    heroImage: images.mascotWelcome,
    status: "available",
    goals: [
      { id: "g1", description: "Luyện phản xạ giao tiếp thực tế với AI Teacher Elena" },
      { id: "g2", description: "Vận dụng từ vựng trọng tâm vào ngữ cảnh hội thoại tự nhiên" }
    ],
    vocabulary: [
      { id: "v-ai-es-5-1", word: "Metro", translation: "Tàu điện ngầm Metro" },
      { id: "v-ai-es-5-2", word: "¿Dónde está?", translation: "Ở đâu vậy?" },
      { id: "v-ai-es-5-3", word: "Sagrada Família", translation: "Thánh gia" },
      { id: "v-ai-es-5-4", word: "Billete", translation: "Vé tàu xe" },
      { id: "v-ai-es-5-5", word: "Todo recto", translation: "Đi thẳng" }
    ],
    phrases: [],
    activities: [],
    aiTeacherPrompt: {
      scenario: "Trung tâm hỗ trợ du khách tại quảng trường Plaça de Catalunya",
      systemPrompt: "You are Elena, a warm, human, and energetic Spanish teacher. Speak mostly in English for clear guidance. Introduce Spanish words slowly: say the word once, give the English translation, and invite the student to repeat after you. Keep every reply strictly to 1 or 2 conversational sentences with friendly contractions (I'm, let's, that's). Listen closely to the student, praise correct pronunciation, and gently model errors again: 'So close! Try saying —'. Stay strictly on lesson words: Metro, ¿Dónde está?, Sagrada Família, Billete, Todo recto. Never switch topics.",
      initialGreeting: "¡Hola! Bienvenido a Barcelona. ¿Quieres visitar la Sagrada Família? ¡Te ayudo con mucho gusto!",
      targetVocabulary: ["Metro","¿Dónde está?","Sagrada Família","Billete","Todo recto"],
      suggestedResponses: ["¿Dónde está la Sagrada Família?","¿Qué línea de metro debo tomar?","¡Muchas gracias Javier!"],
      difficulty: "beginner"
    }
  },
  {
    id: "lesson-es-601",
    unitId: "unit-es-6",
    title: "Mua Sắm Tại Chợ & Cửa Hàng (De Compras)",
    description: "Hỏi giá và mua sắm quần áo, quà lưu niệm.",
    type: "standard",
    xp: 15,
    estimatedMinutes: 5,
    order: 1,
    status: "available",
    goals: [
      { id: "g1", description: "Nắm vững các từ vựng chủ đề Mua Sắm Tại Chợ & Cửa Hàng (De Compras)" },
      { id: "g2", description: "Luyện phát âm chuẩn và phản xạ câu qua các bài tập tương tác" }
    ],
    vocabulary: [
      { id: "v-es-601-1", word: "Tienda", translation: "Cửa hàng / Tiệm mua sắm", phonetic: "tyen-dah" },
      { id: "v-es-601-2", word: "¿Cuánto cuesta?", translation: "Cái này giá bao nhiêu?", phonetic: "kwahn-toh kwes-tah" },
      { id: "v-es-601-3", word: "Caro", translation: "Đắt tiền", phonetic: "kah-roh" },
      { id: "v-es-601-4", word: "Me llevo esto", translation: "Tôi lấy cái này", phonetic: "meh yeh-voh ehs-toh" },
      { id: "v-es-601-5", word: "Talla", translation: "Kích cỡ / Size", phonetic: "tah-yah" }
    ],
    phrases: [
      { id: "p-es-601-1", text: "¿Cuánto cuesta esta camisa, por favor?", translation: "Chiếc áo sơ mi này giá bao nhiêu vậy ạ?" },
      { id: "p-es-601-2", text: "Me llevo este suvenir.", translation: "Tôi lấy món đồ lưu niệm này." }
    ],
    activities: [
      {
        id: "act-es-601-1",
        type: "multiple_choice",
        skill: "reading",
        question: "'Caro' nghĩa là gì?",
        options: ["Đắt tiền","Rẻ tiền","Đẹp đẽ","Ngon miệng"],
        correctAnswer: "Đắt tiền"
      },
      {
        id: "act-es-601-2",
        type: "fill_blank",
        skill: "writing",
        question: "Điền từ: '¿Cuánto _____ esto?' (giá bao nhiêu)",
        prompt: "Điền từ: '¿Cuánto _____ esto?' (giá bao nhiêu)",
        options: ["cuesta","caro","tienda","talla"],
        correctAnswer: "cuesta"
      },
      {
        id: "act-es-601-3",
        type: "multiple_choice",
        skill: "reading",
        question: "Dịch: 'Me llevo esto'",
        options: ["Tôi lấy cái này","Tôi không thích cái này","Cái này đắt quá","Cái kia ở đâu"],
        correctAnswer: "Tôi lấy cái này"
      },
      {
        id: "act-es-601-4",
        type: "match_pairs",
        skill: "reading",
        question: "Ghép các cặp từ vựng với nghĩa tiếng Việt tương ứng",
        pairs: [{"left":"Tienda","right":"Cửa hàng / Tiệm mua sắm"},{"left":"¿Cuánto cuesta?","right":"Cái này giá bao nhiêu?"},{"left":"Caro","right":"Đắt tiền"},{"left":"Me llevo esto","right":"Tôi lấy cái này"}],
        correctAnswer: "all_matched"
      },
      {
        id: "act-es-601-5",
        type: "audio_listen",
        skill: "listening",
        question: "Lắng nghe và chọn đáp án chính xác:",
        prompt: "Tienda",
        options: ["Đắt tiền","Rẻ tiền","Đẹp đẽ","Ngon miệng"],
        correctAnswer: "Đắt tiền"
      }
    ]
  },
  {
    id: "lesson-es-602",
    unitId: "unit-es-6",
    title: "Hẹn Gặp Cuối Tuần (Quedar el fin de semana)",
    description: "Lên kế hoạch gặp bạn bè vào cuối tuần.",
    type: "standard",
    xp: 15,
    estimatedMinutes: 5,
    order: 2,
    status: "available",
    goals: [
      { id: "g1", description: "Nắm vững các từ vựng chủ đề Hẹn Gặp Cuối Tuần (Quedar el fin de semana)" },
      { id: "g2", description: "Luyện phát âm chuẩn và phản xạ câu qua các bài tập tương tác" }
    ],
    vocabulary: [
      { id: "v-es-602-1", word: "Juntos", translation: "Cùng nhau", phonetic: "hoon-tohs" },
      { id: "v-es-602-2", word: "Ir", translation: "Đi", phonetic: "eer" },
      { id: "v-es-602-3", word: "Fin de semana", translation: "Cuối tuần", phonetic: "feen deh seh-mah-nah" },
      { id: "v-es-602-4", word: "¿Estás libre?", translation: "Bạn có rảnh không?", phonetic: "ehs-tahs lee-breh" },
      { id: "v-es-602-5", word: "¡Buena idea!", translation: "Ý kiến hay đấy!", phonetic: "bweh-nah ee-deh-ah" }
    ],
    phrases: [
      { id: "p-es-602-1", text: "¿Vamos juntos a tomar un café este fin de semana?", translation: "Cuối tuần này chúng ta cùng đi cà phê nhé?" },
      { id: "p-es-602-2", text: "¡Sí, es una muy buena idea!", translation: "Được chứ, đó là một ý tưởng rất hay!" }
    ],
    activities: [
      {
        id: "act-es-602-1",
        type: "multiple_choice",
        skill: "reading",
        question: "'¡Buena idea!' nghĩa là gì?",
        options: ["Ý kiến hay đấy!","Không được đâu","Tạm biệt nhé","Cảm ơn bạn"],
        correctAnswer: "Ý kiến hay đấy!"
      },
      {
        id: "act-es-602-2",
        type: "fill_blank",
        skill: "writing",
        question: "Điền từ: 'Vamos _____!' (cùng nhau)",
        prompt: "Điền từ: 'Vamos _____!' (cùng nhau)",
        options: ["juntos","libre","idea","tienda"],
        correctAnswer: "juntos"
      },
      {
        id: "act-es-602-3",
        type: "multiple_choice",
        skill: "reading",
        question: "Dịch: 'Ir juntos'",
        options: ["Cùng nhau đi","Đi một mình","Đi về nhà","Đi ngủ"],
        correctAnswer: "Cùng nhau đi"
      },
      {
        id: "act-es-602-4",
        type: "match_pairs",
        skill: "reading",
        question: "Ghép các cặp từ vựng với nghĩa tiếng Việt tương ứng",
        pairs: [{"left":"Juntos","right":"Cùng nhau"},{"left":"Ir","right":"Đi"},{"left":"Fin de semana","right":"Cuối tuần"},{"left":"¿Estás libre?","right":"Bạn có rảnh không?"}],
        correctAnswer: "all_matched"
      },
      {
        id: "act-es-602-5",
        type: "audio_listen",
        skill: "listening",
        question: "Lắng nghe và chọn đáp án chính xác:",
        prompt: "Juntos",
        options: ["Ý kiến hay đấy!","Không được đâu","Tạm biệt nhé","Cảm ơn bạn"],
        correctAnswer: "Ý kiến hay đấy!"
      }
    ]
  },
  {
    id: "lesson-es-603",
    unitId: "unit-es-6",
    title: "Nghề Nghiệp & Công Việc (Profesión y Trabajo)",
    description: "Nói về nghề nghiệp của mình bằng tiếng Tây Ban Nha.",
    type: "standard",
    xp: 15,
    estimatedMinutes: 5,
    order: 3,
    status: "available",
    goals: [
      { id: "g1", description: "Nắm vững các từ vựng chủ đề Nghề Nghiệp & Công Việc (Profesión y Trabajo)" },
      { id: "g2", description: "Luyện phát âm chuẩn và phản xạ câu qua các bài tập tương tác" }
    ],
    vocabulary: [
      { id: "v-es-603-1", word: "Trabajo / Profesión", translation: "Công việc / Nghề nghiệp", phonetic: "trah-bah-hoh" },
      { id: "v-es-603-2", word: "Profesor / Profesora", translation: "Thầy cô giáo", phonetic: "proh-feh-sohr" },
      { id: "v-es-603-3", word: "Estudiante", translation: "Sinh viên", phonetic: "ehs-too-dyahn-teh" },
      { id: "v-es-603-4", word: "Médico", translation: "Bác sĩ", phonetic: "meh-dee-koh" },
      { id: "v-es-603-5", word: "Empresa", translation: "Công ty", phonetic: "ehm-preh-sah" }
    ],
    phrases: [
      { id: "p-es-603-1", text: "¿Cuál es tu profesión?", translation: "Nghề nghiệp của bạn là gì?" },
      { id: "p-es-603-2", text: "Soy estudiante, estudio español.", translation: "Tôi là sinh viên, tôi đang học tiếng Tây Ban Nha." }
    ],
    activities: [
      {
        id: "act-es-603-1",
        type: "multiple_choice",
        skill: "reading",
        question: "'Estudiante' nghĩa là gì?",
        options: ["Sinh viên","Giáo viên","Bác sĩ","Họa sĩ"],
        correctAnswer: "Sinh viên"
      },
      {
        id: "act-es-603-2",
        type: "fill_blank",
        skill: "writing",
        question: "Điền từ: 'Soy _____.' (sinh viên)",
        prompt: "Điền từ: 'Soy _____.' (sinh viên)",
        options: ["estudiante","trabajo","empresa","profesión"],
        correctAnswer: "estudiante"
      },
      {
        id: "act-es-603-3",
        type: "multiple_choice",
        skill: "reading",
        question: "Dịch: 'Soy profesor'",
        options: ["Tôi là giáo viên","Tôi là sinh viên","Tôi là bác sĩ","Tôi đi làm"],
        correctAnswer: "Tôi là giáo viên"
      },
      {
        id: "act-es-603-4",
        type: "match_pairs",
        skill: "reading",
        question: "Ghép các cặp từ vựng với nghĩa tiếng Việt tương ứng",
        pairs: [{"left":"Trabajo / Profesión","right":"Công việc / Nghề nghiệp"},{"left":"Profesor / Profesora","right":"Thầy cô giáo"},{"left":"Estudiante","right":"Sinh viên"},{"left":"Médico","right":"Bác sĩ"}],
        correctAnswer: "all_matched"
      },
      {
        id: "act-es-603-5",
        type: "audio_listen",
        skill: "listening",
        question: "Lắng nghe và chọn đáp án chính xác:",
        prompt: "Trabajo / Profesión",
        options: ["Sinh viên","Giáo viên","Bác sĩ","Họa sĩ"],
        correctAnswer: "Sinh viên"
      }
    ]
  },
  {
    id: "lesson-es-604",
    unitId: "unit-es-6",
    title: "Tình Huống Khẩn Cấp (¡Ayuda!)",
    description: "Kêu cứu và tìm bệnh viện, gọi cảnh sát 112.",
    type: "standard",
    xp: 15,
    estimatedMinutes: 5,
    order: 4,
    status: "available",
    goals: [
      { id: "g1", description: "Nắm vững các từ vựng chủ đề Tình Huống Khẩn Cấp (¡Ayuda!)" },
      { id: "g2", description: "Luyện phát âm chuẩn và phản xạ câu qua các bài tập tương tác" }
    ],
    vocabulary: [
      { id: "v-es-604-1", word: "¡Ayuda!", translation: "Cứu tôi với! / Giúp tôi với!", phonetic: "ah-yoo-dah" },
      { id: "v-es-604-2", word: "Hospital", translation: "Bệnh viện", phonetic: "ohs-pee-tahl" },
      { id: "v-es-604-3", word: "Policía", translation: "Cảnh sát", phonetic: "poh-lee-see-ah" },
      { id: "v-es-604-4", word: "Enfermo", translation: "Bị ốm / Bị bệnh", phonetic: "ehn-fair-moh" },
      { id: "v-es-604-5", word: "Farmacia", translation: "Hiệu thuốc tây", phonetic: "fahr-mah-syah" }
    ],
    phrases: [
      { id: "p-es-604-1", text: "¡Ayuda, por favor! No me encuentro bien.", translation: "Cứu tôi với! Tôi thấy không khỏe trong người." },
      { id: "p-es-604-2", text: "¿Dónde está la farmacia más cercana?", translation: "Hiệu thuốc gần nhất ở đâu vậy?" }
    ],
    activities: [
      {
        id: "act-es-604-1",
        type: "multiple_choice",
        skill: "reading",
        question: "Số điện thoại khẩn cấp chung ở châu Âu / Tây Ban Nha là:",
        options: ["112","911","110","113"],
        correctAnswer: "112"
      },
      {
        id: "act-es-604-2",
        type: "fill_blank",
        skill: "writing",
        question: "Điền từ: '¡_____! Por favor.' (cứu tôi)",
        prompt: "Điền từ: '¡_____! Por favor.' (cứu tôi)",
        options: ["Ayuda","Hospital","Policía","Farmacia"],
        correctAnswer: "Ayuda"
      },
      {
        id: "act-es-604-3",
        type: "multiple_choice",
        skill: "reading",
        question: "Dịch: '¿Dónde está el hospital?'",
        options: ["Bệnh viện ở đâu?","Đồn cảnh sát ở đâu?","Hiệu thuốc ở đâu?","Trường học ở đâu?"],
        correctAnswer: "Bệnh viện ở đâu?"
      },
      {
        id: "act-es-604-4",
        type: "match_pairs",
        skill: "reading",
        question: "Ghép các cặp từ vựng với nghĩa tiếng Việt tương ứng",
        pairs: [{"left":"¡Ayuda!","right":"Cứu tôi với! / Giúp tôi với!"},{"left":"Hospital","right":"Bệnh viện"},{"left":"Policía","right":"Cảnh sát"},{"left":"Enfermo","right":"Bị ốm / Bị bệnh"}],
        correctAnswer: "all_matched"
      },
      {
        id: "act-es-604-5",
        type: "audio_listen",
        skill: "listening",
        question: "Lắng nghe và chọn đáp án chính xác:",
        prompt: "¡Ayuda!",
        options: ["112","911","110","113"],
        correctAnswer: "112"
      }
    ]
  },
  {
    id: "lesson-es-605",
    unitId: "unit-es-6",
    title: "AI Practice: Trò Chuyện Tự Do Tốt Nghiệp Khóa Tây Ban Nha",
    description: "Trò chuyện tự do cùng cô giáo Elena chúc mừng bạn hoàn thành xuất sắc 6 Unit tiếng Tây Ban Nha!",
    type: "audio_ai",
    xp: 25,
    estimatedMinutes: 5,
    order: 5,
    heroImage: images.mascotWelcome,
    status: "available",
    goals: [
      { id: "g1", description: "Luyện phản xạ giao tiếp thực tế với AI Teacher Elena" },
      { id: "g2", description: "Vận dụng từ vựng trọng tâm vào ngữ cảnh hội thoại tự nhiên" }
    ],
    vocabulary: [
      { id: "v-ai-es-6-1", word: "¡Felicitaciones!", translation: "Chúc mừng!" },
      { id: "v-ai-es-6-2", word: "España", translation: "Tây Ban Nha" },
      { id: "v-ai-es-6-3", word: "Paella", translation: "Cơm chiên hải sản Paella" },
      { id: "v-ai-es-6-4", word: "Me gusta", translation: "Tôi thích" },
      { id: "v-ai-es-6-5", word: "Gracias", translation: "Cảm ơn" }
    ],
    phrases: [],
    activities: [],
    aiTeacherPrompt: {
      scenario: "Bên bờ biển đầy nắng tại bán đảo Iberia xinh đẹp",
      systemPrompt: "You are Elena, a warm, human, and energetic Spanish teacher. Speak mostly in English for clear guidance. Introduce Spanish words slowly: say the word once, give the English translation, and invite the student to repeat after you. Keep every reply strictly to 1 or 2 conversational sentences with friendly contractions (I'm, let's, that's). Listen closely to the student, praise correct pronunciation, and gently model errors again: 'So close! Try saying —'. Stay strictly on lesson words: ¡Felicitaciones!, España, Paella, Me gusta, Gracias. Never switch topics.",
      initialGreeting: "¡Felicitaciones! Bạn đã hoàn thành xuất sắc 6 Unit tiếng Tây Ban Nha. Hôm nay chúng mình cùng trò chuyện tự do thật vui nhé!",
      targetVocabulary: ["¡Felicitaciones!","España","Paella","Me gusta","Gracias"],
      suggestedResponses: ["¡Muchas gracias Elena!","Me encanta España y la comida española.","¡El español es un idioma maravilloso!"],
      difficulty: "beginner"
    }
  },
  {
    id: "lesson-es-701",
    unitId: "unit-es-7",
    title: "¿Qué hiciste ayer? (Thì quá khứ đơn)",
    description: "Học thì quá khứ đơn (pretérito indefinido) trong tiếng Tây Ban Nha.",
    type: "standard",
    xp: 15,
    estimatedMinutes: 5,
    order: 1,
    status: "available",
    goals: [
      { id: "g1", description: "Nắm vững các từ vựng chủ đề ¿Qué hiciste ayer? (Thì quá khứ đơn)" },
      { id: "g2", description: "Luyện phát âm chuẩn và phản xạ câu qua các bài tập tương tác" }
    ],
    vocabulary: [
      { id: "v-es-701-1", word: "Ayer", translation: "Hôm qua", phonetic: "ah-yehr" },
      { id: "v-es-701-2", word: "Fui", translation: "Tôi đã đi (quá khứ của ir)", phonetic: "fwee" },
      { id: "v-es-701-3", word: "Comí", translation: "Tôi đã ăn (quá khứ của comer)", phonetic: "koh-mee" },
      { id: "v-es-701-4", word: "Vi", translation: "Tôi đã thấy / xem", phonetic: "vee" },
      { id: "v-es-701-5", word: "Compré", translation: "Tôi đã mua", phonetic: "kohm-pray" }
    ],
    phrases: [
      { id: "p-es-701-1", text: "Ayer fui al parque y comí helado.", translation: "Hôm qua tôi đã đi công viên và ăn kem." },
      { id: "p-es-701-2", text: "¿Qué hiciste el fin de semana pasado?", translation: "Bạn đã làm gì vào cuối tuần trước?" }
    ],
    activities: [
      {
        id: "act-es-701-1",
        type: "multiple_choice",
        skill: "reading",
        question: "'Fui' là dạng quá khứ của động từ nào?",
        options: ["Ir (Đi)","Comer (Ăn)","Ver (Xem)","Comprar (Mua)"],
        correctAnswer: "Ir (Đi)"
      },
      {
        id: "act-es-701-2",
        type: "fill_blank",
        skill: "writing",
        question: "Điền từ: 'Ayer _____ al cine.' (tôi đã đi)",
        prompt: "Điền từ: 'Ayer _____ al cine.' (tôi đã đi)",
        options: ["fui","voy","va","ir"],
        correctAnswer: "fui"
      },
      {
        id: "act-es-701-3",
        type: "multiple_choice",
        skill: "reading",
        question: "Dịch: 'Ayer'",
        options: ["Hôm qua","Hôm nay","Ngày mai","Tuần sau"],
        correctAnswer: "Hôm qua"
      },
      {
        id: "act-es-701-4",
        type: "match_pairs",
        skill: "reading",
        question: "Ghép các cặp từ vựng với nghĩa tiếng Việt tương ứng",
        pairs: [{"left":"Ayer","right":"Hôm qua"},{"left":"Fui","right":"Tôi đã đi (quá khứ của ir)"},{"left":"Comí","right":"Tôi đã ăn (quá khứ của comer)"},{"left":"Vi","right":"Tôi đã thấy / xem"}],
        correctAnswer: "all_matched"
      },
      {
        id: "act-es-701-5",
        type: "audio_listen",
        skill: "listening",
        question: "Lắng nghe và chọn đáp án chính xác:",
        prompt: "Ayer",
        options: ["Ir (Đi)","Comer (Ăn)","Ver (Xem)","Comprar (Mua)"],
        correctAnswer: "Ir (Đi)"
      }
    ]
  },
  {
    id: "lesson-es-702",
    unitId: "unit-es-7",
    title: "La Infancia y Mi Pueblo (Tuổi thơ)",
    description: "Kể về quê hương và những kỷ niệm thời thơ ấu bằng 'Solía'.",
    type: "standard",
    xp: 15,
    estimatedMinutes: 5,
    order: 2,
    status: "available",
    goals: [
      { id: "g1", description: "Nắm vững các từ vựng chủ đề La Infancia y Mi Pueblo (Tuổi thơ)" },
      { id: "g2", description: "Luyện phát âm chuẩn và phản xạ câu qua các bài tập tương tác" }
    ],
    vocabulary: [
      { id: "v-es-702-1", word: "Infancia", translation: "Thời thơ ấu / Tuổi thơ", phonetic: "een-fahn-syah" },
      { id: "v-es-702-2", word: "Crecí", translation: "Tôi đã lớn lên", phonetic: "kreh-see" },
      { id: "v-es-702-3", word: "Pueblo", translation: "Làng quê / Quê hương", phonetic: "pweh-bloh" },
      { id: "v-es-702-4", word: "Solía", translation: "Từng thường làm gì (quá khứ)", phonetic: "soh-lee-ah" },
      { id: "v-es-702-5", word: "Recuerdo", translation: "Kỷ niệm / Ký ức", phonetic: "reh-kwehr-doh" }
    ],
    phrases: [
      { id: "p-es-702-1", text: "Crecí en un hermoso pueblo cerca del mar.", translation: "Tôi đã lớn lên tại một ngôi làng xinh đẹp gần biển." },
      { id: "p-es-702-2", text: "Solía jugar al fútbol todos los días.", translation: "Tôi từng đá bóng mỗi ngày khi còn nhỏ." }
    ],
    activities: [
      {
        id: "act-es-702-1",
        type: "multiple_choice",
        skill: "reading",
        question: "'Infancia' nghĩa là gì?",
        options: ["Thời thơ ấu / Tuổi thơ","Trường học","Gia đình","Công việc"],
        correctAnswer: "Thời thơ ấu / Tuổi thơ"
      },
      {
        id: "act-es-702-2",
        type: "fill_blank",
        skill: "writing",
        question: "Điền từ: 'Yo _____ en Madrid.' (tôi đã lớn lên)",
        prompt: "Điền từ: 'Yo _____ en Madrid.' (tôi đã lớn lên)",
        options: ["crecí","infancia","recuerdo","pueblo"],
        correctAnswer: "crecí"
      },
      {
        id: "act-es-702-3",
        type: "multiple_choice",
        skill: "reading",
        question: "Dịch: 'Mi pueblo natal'",
        options: ["Quê hương của tôi","Trường tôi","Nhà tôi","Xe của tôi"],
        correctAnswer: "Quê hương của tôi"
      },
      {
        id: "act-es-702-4",
        type: "match_pairs",
        skill: "reading",
        question: "Ghép các cặp từ vựng với nghĩa tiếng Việt tương ứng",
        pairs: [{"left":"Infancia","right":"Thời thơ ấu / Tuổi thơ"},{"left":"Crecí","right":"Tôi đã lớn lên"},{"left":"Pueblo","right":"Làng quê / Quê hương"},{"left":"Solía","right":"Từng thường làm gì (quá khứ)"}],
        correctAnswer: "all_matched"
      },
      {
        id: "act-es-702-5",
        type: "audio_listen",
        skill: "listening",
        question: "Lắng nghe và chọn đáp án chính xác:",
        prompt: "Infancia",
        options: ["Thời thơ ấu / Tuổi thơ","Trường học","Gia đình","Công việc"],
        correctAnswer: "Thời thơ ấu / Tuổi thơ"
      }
    ]
  },
  {
    id: "lesson-es-703",
    unitId: "unit-es-7",
    title: "Un Viaje Inolvidable (Chuyến đi đáng nhớ)",
    description: "Kể lại chuyến du lịch đáng nhớ trong quá khứ.",
    type: "standard",
    xp: 15,
    estimatedMinutes: 5,
    order: 3,
    status: "available",
    goals: [
      { id: "g1", description: "Nắm vững các từ vựng chủ đề Un Viaje Inolvidable (Chuyến đi đáng nhớ)" },
      { id: "g2", description: "Luyện phát âm chuẩn và phản xạ câu qua các bài tập tương tác" }
    ],
    vocabulary: [
      { id: "v-es-703-1", word: "Viaje", translation: "Chuyến đi", phonetic: "vyah-heh" },
      { id: "v-es-703-2", word: "Visité", translation: "Tôi đã ghé thăm", phonetic: "vee-see-tay" },
      { id: "v-es-703-3", word: "Inolvidable", translation: "Không thể nào quên", phonetic: "ee-nohl-vee-dah-bleh" },
      { id: "v-es-703-4", word: "Conocí", translation: "Tôi đã gặp gỡ / làm quen", phonetic: "koh-noh-see" },
      { id: "v-es-703-5", word: "Me alojé", translation: "Tôi đã ở lại (khách sạn)", phonetic: "meh ah-loh-hay" }
    ],
    phrases: [
      { id: "p-es-703-1", text: "El año pasado visité Barcelona, fue inolvidable.", translation: "Năm ngoái tôi đã thăm Barcelona, thật không thể nào quên." },
      { id: "p-es-703-2", text: "Me alojé en un hotel frente a la playa.", translation: "Tôi đã ở tại một khách sạn ngay trước bãi biển." }
    ],
    activities: [
      {
        id: "act-es-703-1",
        type: "multiple_choice",
        skill: "reading",
        question: "'Inolvidable' nghĩa là gì?",
        options: ["Không thể nào quên","Đáng sợ","Nhàm chán","Nguy hiểm"],
        correctAnswer: "Không thể nào quên"
      },
      {
        id: "act-es-703-2",
        type: "fill_blank",
        skill: "writing",
        question: "Điền từ: 'Un viaje _____.' (không thể nào quên)",
        prompt: "Điền từ: 'Un viaje _____.' (không thể nào quên)",
        options: ["inolvidable","viaje","ayer","fui"],
        correctAnswer: "inolvidable"
      },
      {
        id: "act-es-703-3",
        type: "multiple_choice",
        skill: "reading",
        question: "Dịch: 'Visité a mis abuelos'",
        options: ["Tôi đã thăm ông bà tôi","Tôi đi làm","Tôi ăn tối","Tôi đi học"],
        correctAnswer: "Tôi đã thăm ông bà tôi"
      },
      {
        id: "act-es-703-4",
        type: "match_pairs",
        skill: "reading",
        question: "Ghép các cặp từ vựng với nghĩa tiếng Việt tương ứng",
        pairs: [{"left":"Viaje","right":"Chuyến đi"},{"left":"Visité","right":"Tôi đã ghé thăm"},{"left":"Inolvidable","right":"Không thể nào quên"},{"left":"Conocí","right":"Tôi đã gặp gỡ / làm quen"}],
        correctAnswer: "all_matched"
      },
      {
        id: "act-es-703-5",
        type: "audio_listen",
        skill: "listening",
        question: "Lắng nghe và chọn đáp án chính xác:",
        prompt: "Viaje",
        options: ["Không thể nào quên","Đáng sợ","Nhàm chán","Nguy hiểm"],
        correctAnswer: "Không thể nào quên"
      }
    ]
  },
  {
    id: "lesson-es-704",
    unitId: "unit-es-7",
    title: "Contar una Historia (Primero, Luego, Al final)",
    description: "Liên kết chuỗi hành động trong quá khứ.",
    type: "standard",
    xp: 15,
    estimatedMinutes: 5,
    order: 4,
    status: "available",
    goals: [
      { id: "g1", description: "Nắm vững các từ vựng chủ đề Contar una Historia (Primero, Luego, Al final)" },
      { id: "g2", description: "Luyện phát âm chuẩn và phản xạ câu qua các bài tập tương tác" }
    ],
    vocabulary: [
      { id: "v-es-704-1", word: "Primero", translation: "Đầu tiên", phonetic: "pree-meh-roh" },
      { id: "v-es-704-2", word: "Luego / Después", translation: "Sau đó", phonetic: "lweh-goh / dehs-pwehs" },
      { id: "v-es-704-3", word: "De repente", translation: "Bỗng nhiên / Đột ngột", phonetic: "deh reh-pen-teh" },
      { id: "v-es-704-4", word: "Al final", translation: "Cuối cùng", phonetic: "ahl fee-nahl" },
      { id: "v-es-704-5", word: "Ocurrió", translation: "Đã xảy ra", phonetic: "oh-koo-rryoh" }
    ],
    phrases: [
      { id: "p-es-704-1", text: "Primero llegamos al aeropuerto, luego fuimos al hotel.", translation: "Đầu tiên chúng tôi đến sân bay, sau đó chúng tôi về khách sạn." },
      { id: "p-es-704-2", text: "Al final, vimos el atardecer juntos.", translation: "Cuối cùng, chúng tôi đã cùng ngắm hoàng hôn bên nhau." }
    ],
    activities: [
      {
        id: "act-es-704-1",
        type: "multiple_choice",
        skill: "reading",
        question: "Từ nối kết thúc câu chuyện trong tiếng Tây Ban Nha là:",
        options: ["Al final","Primero","De repente","Luego"],
        correctAnswer: "Al final"
      },
      {
        id: "act-es-704-2",
        type: "fill_blank",
        skill: "writing",
        question: "Điền từ: '_____, llegamos a casa.' (cuối cùng)",
        prompt: "Điền từ: '_____, llegamos a casa.' (cuối cùng)",
        options: ["Al final","Primero","Luego","Después"],
        correctAnswer: "Al final"
      },
      {
        id: "act-es-704-3",
        type: "multiple_choice",
        skill: "reading",
        question: "Dịch: 'De repente'",
        options: ["Bỗng nhiên / Đột ngột","Cuối cùng","Đầu tiên","Sau đó"],
        correctAnswer: "Bỗng nhiên / Đột ngột"
      },
      {
        id: "act-es-704-4",
        type: "match_pairs",
        skill: "reading",
        question: "Ghép các cặp từ vựng với nghĩa tiếng Việt tương ứng",
        pairs: [{"left":"Primero","right":"Đầu tiên"},{"left":"Luego / Después","right":"Sau đó"},{"left":"De repente","right":"Bỗng nhiên / Đột ngột"},{"left":"Al final","right":"Cuối cùng"}],
        correctAnswer: "all_matched"
      },
      {
        id: "act-es-704-5",
        type: "audio_listen",
        skill: "listening",
        question: "Lắng nghe và chọn đáp án chính xác:",
        prompt: "Primero",
        options: ["Al final","Primero","De repente","Luego"],
        correctAnswer: "Al final"
      }
    ]
  },
  {
    id: "lesson-es-705",
    unitId: "unit-es-7",
    title: "AI Practice: Kể Chuyện Kỳ Nghỉ Cùng Carmen",
    description: "Thực hành kể về chuyến đi trong quá khứ cùng cô giáo Carmen.",
    type: "audio_ai",
    xp: 25,
    estimatedMinutes: 5,
    order: 5,
    heroImage: images.mascotWelcome,
    status: "available",
    goals: [
      { id: "g1", description: "Luyện phản xạ giao tiếp thực tế với AI Teacher Elena" },
      { id: "g2", description: "Vận dụng từ vựng trọng tâm vào ngữ cảnh hội thoại tự nhiên" }
    ],
    vocabulary: [
      { id: "v-ai-es-7-1", word: "Ayer", translation: "Hôm qua" },
      { id: "v-ai-es-7-2", word: "Fui", translation: "Tôi đã đi (quá khứ của ir)" },
      { id: "v-ai-es-7-3", word: "Visité", translation: "Tôi đã ghé thăm" },
      { id: "v-ai-es-7-4", word: "Inolvidable", translation: "Không thể nào quên" },
      { id: "v-ai-es-7-5", word: "Al final", translation: "Cuối cùng" }
    ],
    phrases: [],
    activities: [],
    aiTeacherPrompt: {
      scenario: "Buổi chiều ngắm hoàng hôn tại quảng trường Madrid",
      systemPrompt: "You are Elena, a warm, human, and energetic Spanish teacher. Speak mostly in English for clear guidance. Introduce Spanish words slowly: say the word once, give the English translation, and invite the student to repeat after you. Keep every reply strictly to 1 or 2 conversational sentences with friendly contractions (I'm, let's, that's). Listen closely to the student, praise correct pronunciation, and gently model errors again: 'So close! Try saying —'. Stay strictly on lesson words: Ayer, Fui, Visité, Inolvidable, Al final. Never switch topics.",
      initialGreeting: "¡Hola! Cuéntame, ¿adónde fuiste en tus últimas vacaciones? ¿Qué hiciste el fin de semana pasado?",
      targetVocabulary: ["Ayer","Fui","Visité","Inolvidable","Al final"],
      suggestedResponses: ["El fin de semana pasado fui a la playa con mis amigos.","Comí paella deliciosa y visité monumentos antiguos.","¡Fue un viaje inolvidable!"],
      difficulty: "intermediate"
    }
  },
  {
    id: "lesson-es-801",
    unitId: "unit-es-8",
    title: "Partes del Cuerpo y Síntomas (Sức khỏe)",
    description: "Miêu tả các cơn đau và triệu chứng thường gặp.",
    type: "standard",
    xp: 15,
    estimatedMinutes: 5,
    order: 1,
    status: "available",
    goals: [
      { id: "g1", description: "Nắm vững các từ vựng chủ đề Partes del Cuerpo y Síntomas (Sức khỏe)" },
      { id: "g2", description: "Luyện phát âm chuẩn và phản xạ câu qua các bài tập tương tác" }
    ],
    vocabulary: [
      { id: "v-es-801-1", word: "Dolor de cabeza", translation: "Đau đầu", phonetic: "doh-lohr deh kah-beh-thah" },
      { id: "v-es-801-2", word: "Fiebre", translation: "Cơn sốt", phonetic: "fyeh-breh" },
      { id: "v-es-801-3", word: "Dolor de estómago", translation: "Đau bụng / Đau dạ dày", phonetic: "doh-lohr deh ehs-toh-mah-goh" },
      { id: "v-es-801-4", word: "Dolor de garganta", translation: "Đau cổ họng", phonetic: "doh-lohr deh gahr-gahn-tah" },
      { id: "v-es-801-5", word: "Tos", translation: "Cơn ho", phonetic: "tohs" }
    ],
    phrases: [
      { id: "p-es-801-1", text: "Tengo un fuerte dolor de cabeza y fiebre.", translation: "Tôi bị đau đầu dữ dội và sốt cao." },
      { id: "p-es-801-2", text: "Me duele la garganta al tragar.", translation: "Cổ họng của tôi bị đau khi nuốt." }
    ],
    activities: [
      {
        id: "act-es-801-1",
        type: "multiple_choice",
        skill: "reading",
        question: "'Fiebre' trong tiếng Tây Ban Nha nghĩa là gì?",
        options: ["Cơn sốt","Cơn ho","Đau răng","Cảm cúm"],
        correctAnswer: "Cơn sốt"
      },
      {
        id: "act-es-801-2",
        type: "fill_blank",
        skill: "writing",
        question: "Điền từ: 'Tengo dolor de _____.' (cổ họng)",
        prompt: "Điền từ: 'Tengo dolor de _____.' (cổ họng)",
        options: ["garganta","fiebre","tos","cabeza"],
        correctAnswer: "garganta"
      },
      {
        id: "act-es-801-3",
        type: "multiple_choice",
        skill: "reading",
        question: "Dịch: 'Tengo dolor de cabeza'",
        options: ["Tôi bị đau đầu","Tôi bị đau bụng","Tôi bị sốt","Tôi đói bụng"],
        correctAnswer: "Tôi bị đau đầu"
      },
      {
        id: "act-es-801-4",
        type: "match_pairs",
        skill: "reading",
        question: "Ghép các cặp từ vựng với nghĩa tiếng Việt tương ứng",
        pairs: [{"left":"Dolor de cabeza","right":"Đau đầu"},{"left":"Fiebre","right":"Cơn sốt"},{"left":"Dolor de estómago","right":"Đau bụng / Đau dạ dày"},{"left":"Dolor de garganta","right":"Đau cổ họng"}],
        correctAnswer: "all_matched"
      },
      {
        id: "act-es-801-5",
        type: "audio_listen",
        skill: "listening",
        question: "Lắng nghe và chọn đáp án chính xác:",
        prompt: "Dolor de cabeza",
        options: ["Cơn sốt","Cơn ho","Đau răng","Cảm cúm"],
        correctAnswer: "Cơn sốt"
      }
    ]
  },
  {
    id: "lesson-es-802",
    unitId: "unit-es-8",
    title: "En la Consulta del Médico (Khám bệnh)",
    description: "Đi khám tại phòng khám bác sĩ.",
    type: "standard",
    xp: 15,
    estimatedMinutes: 5,
    order: 2,
    status: "available",
    goals: [
      { id: "g1", description: "Nắm vững các từ vựng chủ đề En la Consulta del Médico (Khám bệnh)" },
      { id: "g2", description: "Luyện phát âm chuẩn và phản xạ câu qua các bài tập tương tác" }
    ],
    vocabulary: [
      { id: "v-es-802-1", word: "Médico / Doctor", translation: "Bác sĩ", phonetic: "meh-dee-koh" },
      { id: "v-es-802-2", word: "Dolor", translation: "Cơn đau", phonetic: "doh-lohr" },
      { id: "v-es-802-3", word: "Receta", translation: "Đơn thuốc", phonetic: "reh-theh-tah" },
      { id: "v-es-802-4", word: "Descansar", translation: "Nghỉ ngơi", phonetic: "dehs-kahn-sahr" },
      { id: "v-es-802-5", word: "Examinar", translation: "Khám bệnh", phonetic: "ehk-sah-mee-nahr" }
    ],
    phrases: [
      { id: "p-es-802-1", text: "¿Dónde le duele? - Me duele aquí.", translation: "Bị đau ở đâu thế ạ? - Tôi đau ở chỗ này." },
      { id: "p-es-802-2", text: "Debe descansar y beber mucha agua.", translation: "Bạn phải nghỉ ngơi và uống nhiều nước." }
    ],
    activities: [
      {
        id: "act-es-802-1",
        type: "multiple_choice",
        skill: "reading",
        question: "'Receta médica' nghĩa là gì?",
        options: ["Đơn thuốc của bác sĩ","Hóa đơn viện phí","Bệnh viện","Thuốc bổ"],
        correctAnswer: "Đơn thuốc của bác sĩ"
      },
      {
        id: "act-es-802-2",
        type: "fill_blank",
        skill: "writing",
        question: "Điền từ: 'El médico me dio una _____.' (đơn thuốc)",
        prompt: "Điền từ: 'El médico me dio una _____.' (đơn thuốc)",
        options: ["receta","fiebre","dolor","tos"],
        correctAnswer: "receta"
      },
      {
        id: "act-es-802-3",
        type: "multiple_choice",
        skill: "reading",
        question: "Dịch: 'Descansar mucho'",
        options: ["Nghỉ ngơi nhiều","Làm việc nhiều","Đi bộ nhiều","Uống thuốc"],
        correctAnswer: "Nghỉ ngơi nhiều"
      },
      {
        id: "act-es-802-4",
        type: "match_pairs",
        skill: "reading",
        question: "Ghép các cặp từ vựng với nghĩa tiếng Việt tương ứng",
        pairs: [{"left":"Médico / Doctor","right":"Bác sĩ"},{"left":"Dolor","right":"Cơn đau"},{"left":"Receta","right":"Đơn thuốc"},{"left":"Descansar","right":"Nghỉ ngơi"}],
        correctAnswer: "all_matched"
      },
      {
        id: "act-es-802-5",
        type: "audio_listen",
        skill: "listening",
        question: "Lắng nghe và chọn đáp án chính xác:",
        prompt: "Médico / Doctor",
        options: ["Đơn thuốc của bác sĩ","Hóa đơn viện phí","Bệnh viện","Thuốc bổ"],
        correctAnswer: "Đơn thuốc của bác sĩ"
      }
    ]
  },
  {
    id: "lesson-es-803",
    unitId: "unit-es-8",
    title: "En la Farmacia (Mua thuốc)",
    description: "Mua thuốc theo liều lượng tại hiệu thuốc.",
    type: "standard",
    xp: 15,
    estimatedMinutes: 5,
    order: 3,
    status: "available",
    goals: [
      { id: "g1", description: "Nắm vững các từ vựng chủ đề En la Farmacia (Mua thuốc)" },
      { id: "g2", description: "Luyện phát âm chuẩn và phản xạ câu qua các bài tập tương tác" }
    ],
    vocabulary: [
      { id: "v-es-803-1", word: "Farmacia", translation: "Hiệu thuốc", phonetic: "fahr-mah-syah" },
      { id: "v-es-803-2", word: "Medicina / Pastilla", translation: "Thuốc / Viên thuốc", phonetic: "meh-dee-see-nah / pahs-tee-yah" },
      { id: "v-es-803-3", word: "Jarabe", translation: "Thuốc siro ho", phonetic: "hah-rah-beh" },
      { id: "v-es-803-4", word: "Dos veces al día", translation: "Hai lần một ngày", phonetic: "dohs veh-thehs ahl dee-ah" },
      { id: "v-es-803-5", word: "Después de comer", translation: "Sau khi ăn", phonetic: "dehs-pwehs deh koh-mair" }
    ],
    phrases: [
      { id: "p-es-803-1", text: "Tome una pastilla dos veces al día después de comer.", translation: "Uống một viên thuốc hai lần mỗi ngày sau bữa ăn." },
      { id: "p-es-803-2", text: "¿Tiene algo para el resfriado?", translation: "Bạn có thuốc gì trị cảm lạnh không?" }
    ],
    activities: [
      {
        id: "act-es-803-1",
        type: "multiple_choice",
        skill: "reading",
        question: "'Dos veces al día' nghĩa là gì?",
        options: ["Hai lần một ngày","Ba lần một ngày","Mỗi tuần một lần","Một lần duy nhất"],
        correctAnswer: "Hai lần một ngày"
      },
      {
        id: "act-es-803-2",
        type: "fill_blank",
        skill: "writing",
        question: "Điền từ: 'Una _____ cada 8 horas.' (viên thuốc)",
        prompt: "Điền từ: 'Una _____ cada 8 horas.' (viên thuốc)",
        options: ["pastilla","farmacia","receta","fiebre"],
        correctAnswer: "pastilla"
      },
      {
        id: "act-es-803-3",
        type: "multiple_choice",
        skill: "reading",
        question: "Dịch: 'Después de comer'",
        options: ["Sau khi ăn","Trước khi ăn","Khi đói","Lúc ngủ"],
        correctAnswer: "Sau khi ăn"
      },
      {
        id: "act-es-803-4",
        type: "match_pairs",
        skill: "reading",
        question: "Ghép các cặp từ vựng với nghĩa tiếng Việt tương ứng",
        pairs: [{"left":"Farmacia","right":"Hiệu thuốc"},{"left":"Medicina / Pastilla","right":"Thuốc / Viên thuốc"},{"left":"Jarabe","right":"Thuốc siro ho"},{"left":"Dos veces al día","right":"Hai lần một ngày"}],
        correctAnswer: "all_matched"
      },
      {
        id: "act-es-803-5",
        type: "audio_listen",
        skill: "listening",
        question: "Lắng nghe và chọn đáp án chính xác:",
        prompt: "Farmacia",
        options: ["Hai lần một ngày","Ba lần một ngày","Mỗi tuần một lần","Một lần duy nhất"],
        correctAnswer: "Hai lần một ngày"
      }
    ]
  },
  {
    id: "lesson-es-804",
    unitId: "unit-es-8",
    title: "Vida Saludable (Lối sống lành mạnh)",
    description: "Nói về ăn uống lành mạnh và tập thể dục thể thao.",
    type: "standard",
    xp: 15,
    estimatedMinutes: 5,
    order: 4,
    status: "available",
    goals: [
      { id: "g1", description: "Nắm vững các từ vựng chủ đề Vida Saludable (Lối sống lành mạnh)" },
      { id: "g2", description: "Luyện phát âm chuẩn và phản xạ câu qua các bài tập tương tác" }
    ],
    vocabulary: [
      { id: "v-es-804-1", word: "Saludable", translation: "Lành mạnh / Khỏe khoắn", phonetic: "sah-loo-dah-bleh" },
      { id: "v-es-804-2", word: "Hacer ejercicio", translation: "Tập thể dục", phonetic: "ah-thair eh-hair-thee-syoh" },
      { id: "v-es-804-3", word: "Verduras", translation: "Rau củ quả", phonetic: "bair-doo-rahs" },
      { id: "v-es-804-4", word: "Dormir bien", translation: "Ngủ ngon giấc", phonetic: "dohr-meer byen" },
      { id: "v-es-804-5", word: "Estrés", translation: "Căng thẳng", phonetic: "ehs-trehs" }
    ],
    phrases: [
      { id: "p-es-804-1", text: "Comer verduras y hacer ejercicio diario es muy saludable.", translation: "Ăn rau xanh và tập thể dục hàng ngày rất lành mạnh." },
      { id: "p-es-804-2", text: "Es importante dormir al menos ocho horas.", translation: "Điều quan trọng là phải ngủ ít nhất 8 tiếng." }
    ],
    activities: [
      {
        id: "act-es-804-1",
        type: "multiple_choice",
        skill: "reading",
        question: "'Hacer ejercicio' nghĩa là gì?",
        options: ["Tập thể dục","Ăn uống","Đi làm","Xem phim"],
        correctAnswer: "Tập thể dục"
      },
      {
        id: "act-es-804-2",
        type: "fill_blank",
        skill: "writing",
        question: "Điền từ: 'Me gusta hacer _____.' (thể dục)",
        prompt: "Điền từ: 'Me gusta hacer _____.' (thể dục)",
        options: ["ejercicio","estrés","fiebre","tos"],
        correctAnswer: "ejercicio"
      },
      {
        id: "act-es-804-3",
        type: "multiple_choice",
        skill: "reading",
        question: "Dịch: 'Comida saludable'",
        options: ["Thức ăn lành mạnh","Thức ăn nhanh","Món ăn cay","Món ăn đắt tiền"],
        correctAnswer: "Thức ăn lành mạnh"
      },
      {
        id: "act-es-804-4",
        type: "match_pairs",
        skill: "reading",
        question: "Ghép các cặp từ vựng với nghĩa tiếng Việt tương ứng",
        pairs: [{"left":"Saludable","right":"Lành mạnh / Khỏe khoắn"},{"left":"Hacer ejercicio","right":"Tập thể dục"},{"left":"Verduras","right":"Rau củ quả"},{"left":"Dormir bien","right":"Ngủ ngon giấc"}],
        correctAnswer: "all_matched"
      },
      {
        id: "act-es-804-5",
        type: "audio_listen",
        skill: "listening",
        question: "Lắng nghe và chọn đáp án chính xác:",
        prompt: "Saludable",
        options: ["Tập thể dục","Ăn uống","Đi làm","Xem phim"],
        correctAnswer: "Tập thể dục"
      }
    ]
  },
  {
    id: "lesson-es-805",
    unitId: "unit-es-8",
    title: "AI Practice: Đi Khám Bệnh Cùng Bác Sĩ Sánchez",
    description: "Đóng vai bệnh nhân miêu tả các triệu chứng cùng bác sĩ Sánchez tại Madrid.",
    type: "audio_ai",
    xp: 25,
    estimatedMinutes: 5,
    order: 5,
    heroImage: images.mascotWelcome,
    status: "available",
    goals: [
      { id: "g1", description: "Luyện phản xạ giao tiếp thực tế với AI Teacher Elena" },
      { id: "g2", description: "Vận dụng từ vựng trọng tâm vào ngữ cảnh hội thoại tự nhiên" }
    ],
    vocabulary: [
      { id: "v-ai-es-8-1", word: "Dolor de cabeza", translation: "Đau đầu" },
      { id: "v-ai-es-8-2", word: "Fiebre", translation: "Cơn sốt" },
      { id: "v-ai-es-8-3", word: "Médico", translation: "Bác sĩ" },
      { id: "v-ai-es-8-4", word: "Pastilla", translation: "Viên thuốc" },
      { id: "v-ai-es-8-5", word: "Descansar", translation: "Nghỉ ngơi" }
    ],
    phrases: [],
    activities: [],
    aiTeacherPrompt: {
      scenario: "Phòng khám tư thục trung tâm thành phố Madrid",
      systemPrompt: "You are Elena, a warm, human, and energetic Spanish teacher. Speak mostly in English for clear guidance. Introduce Spanish words slowly: say the word once, give the English translation, and invite the student to repeat after you. Keep every reply strictly to 1 or 2 conversational sentences with friendly contractions (I'm, let's, that's). Listen closely to the student, praise correct pronunciation, and gently model errors again: 'So close! Try saying —'. Stay strictly on lesson words: Dolor de cabeza, Fiebre, Médico, Pastilla, Descansar. Never switch topics.",
      initialGreeting: "¡Buenos días! Siéntese, por favor. ¿Qué le pasa? ¿Qué síntomas tiene?",
      targetVocabulary: ["Dolor de cabeza","Fiebre","Médico","Pastilla","Descansar"],
      suggestedResponses: ["Tengo mucho dolor de cabeza y fiebre desde ayer.","También me duele la garganta.","Muchas gracias doctor, descansaré y tomaré las pastillas."],
      difficulty: "intermediate"
    }
  },
  {
    id: "lesson-es-901",
    unitId: "unit-es-9",
    title: "Vida de Oficina y Compañeros",
    description: "Từ vựng công sở, cuộc họp và thời hạn hoàn thành.",
    type: "standard",
    xp: 15,
    estimatedMinutes: 5,
    order: 1,
    status: "available",
    goals: [
      { id: "g1", description: "Nắm vững các từ vựng chủ đề Vida de Oficina y Compañeros" },
      { id: "g2", description: "Luyện phát âm chuẩn và phản xạ câu qua các bài tập tương tác" }
    ],
    vocabulary: [
      { id: "v-es-901-1", word: "Oficina", translation: "Văn phòng", phonetic: "oh-fee-see-nah" },
      { id: "v-es-901-2", word: "Compañero / Compañera", translation: "Đồng nghiệp", phonetic: "kohm-pah-nyeh-roh" },
      { id: "v-es-901-3", word: "Reunión", translation: "Cuộc họp", phonetic: "reh-oo-nyohn" },
      { id: "v-es-901-4", word: "Proyecto", translation: "Dự án", phonetic: "proh-yek-toh" },
      { id: "v-es-901-5", word: "Plazo", translation: "Hạn chót hoàn thành", phonetic: "plah-thoh" }
    ],
    phrases: [
      { id: "p-es-901-1", text: "Tenemos una reunión de equipo a las diez.", translation: "Chúng tôi có một cuộc họp nhóm lúc 10 giờ." },
      { id: "p-es-901-2", text: "Debo terminar el proyecto antes del plazo.", translation: "Tôi phải hoàn thành dự án trước thời hạn." }
    ],
    activities: [
      {
        id: "act-es-901-1",
        type: "multiple_choice",
        skill: "reading",
        question: "'Compañero de trabajo' nghĩa là ai?",
        options: ["Đồng nghiệp","Bác sĩ","Học sinh","Khách hàng"],
        correctAnswer: "Đồng nghiệp"
      },
      {
        id: "act-es-901-2",
        type: "fill_blank",
        skill: "writing",
        question: "Điền từ: 'Tenemos una _____ a las 10.' (cuộc họp)",
        prompt: "Điền từ: 'Tenemos una _____ a las 10.' (cuộc họp)",
        options: ["reunión","oficina","plazo","fiebre"],
        correctAnswer: "reunión"
      },
      {
        id: "act-es-901-3",
        type: "multiple_choice",
        skill: "reading",
        question: "Dịch: 'Reunión importante'",
        options: ["Cuộc họp quan trọng","Dự án mới","Văn phòng đẹp","Hạn chót"],
        correctAnswer: "Cuộc họp quan trọng"
      },
      {
        id: "act-es-901-4",
        type: "match_pairs",
        skill: "reading",
        question: "Ghép các cặp từ vựng với nghĩa tiếng Việt tương ứng",
        pairs: [{"left":"Oficina","right":"Văn phòng"},{"left":"Compañero / Compañera","right":"Đồng nghiệp"},{"left":"Reunión","right":"Cuộc họp"},{"left":"Proyecto","right":"Dự án"}],
        correctAnswer: "all_matched"
      },
      {
        id: "act-es-901-5",
        type: "audio_listen",
        skill: "listening",
        question: "Lắng nghe và chọn đáp án chính xác:",
        prompt: "Oficina",
        options: ["Đồng nghiệp","Bác sĩ","Học sinh","Khách hàng"],
        correctAnswer: "Đồng nghiệp"
      }
    ]
  },
  {
    id: "lesson-es-902",
    unitId: "unit-es-9",
    title: "Escribir Correos Profesionales",
    description: "Viết email công việc trang trọng trong tiếng Tây Ban Nha.",
    type: "standard",
    xp: 15,
    estimatedMinutes: 5,
    order: 2,
    status: "available",
    goals: [
      { id: "g1", description: "Nắm vững các từ vựng chủ đề Escribir Correos Profesionales" },
      { id: "g2", description: "Luyện phát âm chuẩn và phản xạ câu qua các bài tập tương tác" }
    ],
    vocabulary: [
      { id: "v-es-902-1", word: "Estimado / Estimada", translation: "Kính gửi... / Thân gửi...", phonetic: "ehs-tee-mah-doh" },
      { id: "v-es-902-2", word: "Adjunto", translation: "Đính kèm (tệp)", phonetic: "ahd-hoon-toh" },
      { id: "v-es-902-3", word: "Le informo que", translation: "Tôi xin thông báo rằng", phonetic: "leh een-for-moh keh" },
      { id: "v-es-902-4", word: "Atentamente", translation: "Trân trọng kính thư", phonetic: "ah-ten-tah-men-teh" },
      { id: "v-es-902-5", word: "Quedo a su disposición", translation: "Tôi luôn sẵn sàng hỗ trợ", phonetic: "keh-doh ah soo" }
    ],
    phrases: [
      { id: "p-es-902-1", text: "Estimado Sr. Gómez, le adjunto el informe solicitado.", translation: "Kính gửi ông Gómez, tôi xin đính kèm báo cáo được yêu cầu." },
      { id: "p-es-902-2", text: "Atentamente, Alex.", translation: "Trân trọng, Alex." }
    ],
    activities: [
      {
        id: "act-es-902-1",
        type: "multiple_choice",
        skill: "reading",
        question: "Lời kết thư trang trọng nhất trong email tiếng Tây Ban Nha là:",
        options: ["Atentamente","Adiós","Hasta luego","Hola"],
        correctAnswer: "Atentamente"
      },
      {
        id: "act-es-902-2",
        type: "fill_blank",
        skill: "writing",
        question: "Điền từ: '_____ Sr. López,' (kính gửi)",
        prompt: "Điền từ: '_____ Sr. López,' (kính gửi)",
        options: ["Estimado","Adjunto","Atentamente","Reunión"],
        correctAnswer: "Estimado"
      },
      {
        id: "act-es-902-3",
        type: "multiple_choice",
        skill: "reading",
        question: "Dịch: 'Archivo adjunto'",
        options: ["Tệp đính kèm","Báo cáo mới","Cuộc họp","Thư mời"],
        correctAnswer: "Tệp đính kèm"
      },
      {
        id: "act-es-902-4",
        type: "match_pairs",
        skill: "reading",
        question: "Ghép các cặp từ vựng với nghĩa tiếng Việt tương ứng",
        pairs: [{"left":"Estimado / Estimada","right":"Kính gửi... / Thân gửi..."},{"left":"Adjunto","right":"Đính kèm (tệp)"},{"left":"Le informo que","right":"Tôi xin thông báo rằng"},{"left":"Atentamente","right":"Trân trọng kính thư"}],
        correctAnswer: "all_matched"
      },
      {
        id: "act-es-902-5",
        type: "audio_listen",
        skill: "listening",
        question: "Lắng nghe và chọn đáp án chính xác:",
        prompt: "Estimado / Estimada",
        options: ["Atentamente","Adiós","Hasta luego","Hola"],
        correctAnswer: "Atentamente"
      }
    ]
  },
  {
    id: "lesson-es-903",
    unitId: "unit-es-9",
    title: "Entrevista de Trabajo (Phỏng vấn xin việc)",
    description: "Câu hỏi phỏng vấn xin việc phổ biến.",
    type: "standard",
    xp: 15,
    estimatedMinutes: 5,
    order: 3,
    status: "available",
    goals: [
      { id: "g1", description: "Nắm vững các từ vựng chủ đề Entrevista de Trabajo (Phỏng vấn xin việc)" },
      { id: "g2", description: "Luyện phát âm chuẩn và phản xạ câu qua các bài tập tương tác" }
    ],
    vocabulary: [
      { id: "v-es-903-1", word: "Entrevista", translation: "Buổi phỏng vấn", phonetic: "en-treh-bees-tah" },
      { id: "v-es-903-2", word: "Experiencia", translation: "Kinh nghiệm làm việc", phonetic: "ehks-peh-ryen-syah" },
      { id: "v-es-903-3", word: "Puesto", translation: "Vị trí công việc", phonetic: "pwes-toh" },
      { id: "v-es-903-4", word: "Responsable de", translation: "Chịu trách nhiệm về...", phonetic: "rrehs-pohn-sah-bleh deh" },
      { id: "v-es-903-5", word: "Contratar", translation: "Tuyển dụng / Thuê", phonetic: "kohn-trah-tahr" }
    ],
    phrases: [
      { id: "p-es-903-1", text: "Hábleme de su experiencia laboral previa.", translation: "Hãy nói cho tôi biết về kinh nghiệm làm việc trước đây của bạn." },
      { id: "p-es-903-2", text: "Era responsable de la atención al cliente.", translation: "Tôi từng chịu trách nhiệm chăm sóc khách hàng." }
    ],
    activities: [
      {
        id: "act-es-903-1",
        type: "multiple_choice",
        skill: "reading",
        question: "'Experiencia laboral' nghĩa là gì?",
        options: ["Kinh nghiệm làm việc","Bằng tốt nghiệp","Mức lương","Giờ làm"],
        correctAnswer: "Kinh nghiệm làm việc"
      },
      {
        id: "act-es-903-2",
        type: "fill_blank",
        skill: "writing",
        question: "Điền từ: 'Tengo tres años de _____.' (kinh nghiệm)",
        prompt: "Điền từ: 'Tengo tres años de _____.' (kinh nghiệm)",
        options: ["experiencia","puesto","entrevista","plazo"],
        correctAnswer: "experiencia"
      },
      {
        id: "act-es-903-3",
        type: "multiple_choice",
        skill: "reading",
        question: "Dịch: 'Entrevista de trabajo'",
        options: ["Phỏng vấn xin việc","Công việc mới","Cuộc họp","Ký hợp đồng"],
        correctAnswer: "Phỏng vấn xin việc"
      },
      {
        id: "act-es-903-4",
        type: "match_pairs",
        skill: "reading",
        question: "Ghép các cặp từ vựng với nghĩa tiếng Việt tương ứng",
        pairs: [{"left":"Entrevista","right":"Buổi phỏng vấn"},{"left":"Experiencia","right":"Kinh nghiệm làm việc"},{"left":"Puesto","right":"Vị trí công việc"},{"left":"Responsable de","right":"Chịu trách nhiệm về..."}],
        correctAnswer: "all_matched"
      },
      {
        id: "act-es-903-5",
        type: "audio_listen",
        skill: "listening",
        question: "Lắng nghe và chọn đáp án chính xác:",
        prompt: "Entrevista",
        options: ["Kinh nghiệm làm việc","Bằng tốt nghiệp","Mức lương","Giờ làm"],
        correctAnswer: "Kinh nghiệm làm việc"
      }
    ]
  },
  {
    id: "lesson-es-904",
    unitId: "unit-es-9",
    title: "Fortalezas y Trabajo en Equipo",
    description: "Nêu bật thế mạnh cá nhân và khả năng làm việc nhóm.",
    type: "standard",
    xp: 15,
    estimatedMinutes: 5,
    order: 4,
    status: "available",
    goals: [
      { id: "g1", description: "Nắm vững các từ vựng chủ đề Fortalezas y Trabajo en Equipo" },
      { id: "g2", description: "Luyện phát âm chuẩn và phản xạ câu qua các bài tập tương tác" }
    ],
    vocabulary: [
      { id: "v-es-904-1", word: "Fortaleza", translation: "Điểm mạnh / Thế mạnh", phonetic: "for-tah-leh-thah" },
      { id: "v-es-904-2", word: "Trabajo en equipo", translation: "Làm việc nhóm", phonetic: "trah-bah-hoh en eh-kee-poh" },
      { id: "v-es-904-3", word: "Trabajador", translation: "Chăm chỉ", phonetic: "trah-bah-hah-dohr" },
      { id: "v-es-904-4", word: "Comunicación", translation: "Giao tiếp", phonetic: "koh-moo-nee-kah-syohn" },
      { id: "v-es-904-5", word: "Motivado", translation: "Có động lực / Nhiệt huyết", phonetic: "moh-tee-vah-doh" }
    ],
    phrases: [
      { id: "p-es-904-1", text: "Mi mayor fortaleza es mi habilidad para trabajar en equipo.", translation: "Thế mạnh lớn nhất của tôi là khả năng làm việc nhóm." },
      { id: "p-es-904-2", text: "Soy una persona muy motivada y trabajadora.", translation: "Tôi là người rất chăm chỉ và giàu nhiệt huyết." }
    ],
    activities: [
      {
        id: "act-es-904-1",
        type: "multiple_choice",
        skill: "reading",
        question: "'Trabajo en equipo' nghĩa là gì?",
        options: ["Làm việc nhóm","Làm việc một mình","Chơi thể thao","Nghỉ ngơi"],
        correctAnswer: "Làm việc nhóm"
      },
      {
        id: "act-es-904-2",
        type: "fill_blank",
        skill: "writing",
        question: "Điền từ: 'Sé trabajar muy bien en _____.' (nhóm)",
        prompt: "Điền từ: 'Sé trabajar muy bien en _____.' (nhóm)",
        options: ["equipo","oficina","plazo","reunión"],
        correctAnswer: "equipo"
      },
      {
        id: "act-es-904-3",
        type: "multiple_choice",
        skill: "reading",
        question: "Dịch: 'Mi mayor fortaleza'",
        options: ["Thế mạnh lớn nhất của tôi","Kinh nghiệm của tôi","Điểm yếu của tôi","Mục tiêu"],
        correctAnswer: "Thế mạnh lớn nhất của tôi"
      },
      {
        id: "act-es-904-4",
        type: "match_pairs",
        skill: "reading",
        question: "Ghép các cặp từ vựng với nghĩa tiếng Việt tương ứng",
        pairs: [{"left":"Fortaleza","right":"Điểm mạnh / Thế mạnh"},{"left":"Trabajo en equipo","right":"Làm việc nhóm"},{"left":"Trabajador","right":"Chăm chỉ"},{"left":"Comunicación","right":"Giao tiếp"}],
        correctAnswer: "all_matched"
      },
      {
        id: "act-es-904-5",
        type: "audio_listen",
        skill: "listening",
        question: "Lắng nghe và chọn đáp án chính xác:",
        prompt: "Fortaleza",
        options: ["Làm việc nhóm","Làm việc một mình","Chơi thể thao","Nghỉ ngơi"],
        correctAnswer: "Làm việc nhóm"
      }
    ]
  },
  {
    id: "lesson-es-905",
    unitId: "unit-es-9",
    title: "AI Practice: Phỏng Vấn Xin Việc Thử Với Sofia",
    description: "Luyện phỏng vấn xin việc bằng tiếng Tây Ban Nha cùng giám đốc tuyển dụng Sofia.",
    type: "audio_ai",
    xp: 25,
    estimatedMinutes: 5,
    order: 5,
    heroImage: images.mascotWelcome,
    status: "available",
    goals: [
      { id: "g1", description: "Luyện phản xạ giao tiếp thực tế với AI Teacher Elena" },
      { id: "g2", description: "Vận dụng từ vựng trọng tâm vào ngữ cảnh hội thoại tự nhiên" }
    ],
    vocabulary: [
      { id: "v-ai-es-9-1", word: "Experiencia", translation: "Kinh nghiệm làm việc" },
      { id: "v-ai-es-9-2", word: "Puesto", translation: "Vị trí công việc" },
      { id: "v-ai-es-9-3", word: "Fortaleza", translation: "Điểm mạnh / Thế mạnh" },
      { id: "v-ai-es-9-4", word: "Trabajo en equipo", translation: "Làm việc nhóm" },
      { id: "v-ai-es-9-5", word: "Motivado", translation: "Có động lực / Nhiệt huyết" }
    ],
    phrases: [],
    activities: [],
    aiTeacherPrompt: {
      scenario: "Phòng họp công ty truyền thông đa quốc gia tại Barcelona",
      systemPrompt: "You are Elena, a warm, human, and energetic Spanish teacher. Speak mostly in English for clear guidance. Introduce Spanish words slowly: say the word once, give the English translation, and invite the student to repeat after you. Keep every reply strictly to 1 or 2 conversational sentences with friendly contractions (I'm, let's, that's). Listen closely to the student, praise correct pronunciation, and gently model errors again: 'So close! Try saying —'. Stay strictly on lesson words: Experiencia, Puesto, Fortaleza, Trabajo en equipo, Motivado. Never switch topics.",
      initialGreeting: "¡Hola! Bienvenido a la entrevista de trabajo. Cuéntame sobre tu experiencia y tus mayores fortalezas.",
      targetVocabulary: ["Experiencia","Puesto","Fortaleza","Trabajo en equipo","Motivado"],
      suggestedResponses: ["Tengo dos años de experiencia en servicio al cliente.","Mi mayor fortaleza es el trabajo en equipo y la comunicación.","Estoy muy motivado para asumir este puesto."],
      difficulty: "intermediate"
    }
  },
  {
    id: "lesson-es-1001",
    unitId: "unit-es-10",
    title: "Paisajes Naturales (Playa, Montaña y Bosque)",
    description: "Miêu tả cảnh quan thiên nhiên tráng lệ.",
    type: "standard",
    xp: 15,
    estimatedMinutes: 5,
    order: 1,
    status: "available",
    goals: [
      { id: "g1", description: "Nắm vững các từ vựng chủ đề Paisajes Naturales (Playa, Montaña y Bosque)" },
      { id: "g2", description: "Luyện phát âm chuẩn và phản xạ câu qua các bài tập tương tác" }
    ],
    vocabulary: [
      { id: "v-es-1001-1", word: "Montaña", translation: "Ngọn núi", phonetic: "mohn-tah-nyah" },
      { id: "v-es-1001-2", word: "Playa", translation: "Bãi biển", phonetic: "plah-yah" },
      { id: "v-es-1001-3", word: "Bosque", translation: "Khu rừng", phonetic: "bohs-keh" },
      { id: "v-es-1001-4", word: "Isla", translation: "Hòn đảo", phonetic: "ees-lah" },
      { id: "v-es-1001-5", word: "Impresionante", translation: "Ấn tượng / Ngoạn mục", phonetic: "eem-preh-syoh-nahn-teh" }
    ],
    phrases: [
      { id: "p-es-1001-1", text: "La vista desde la montaña es impresionante.", translation: "Khung cảnh từ trên đỉnh núi thật ngoạn mục." },
      { id: "p-es-1001-2", text: "Caminamos por la playa de arena blanca.", translation: "Chúng tôi đã đi dạo trên bãi biển cát trắng." }
    ],
    activities: [
      {
        id: "act-es-1001-1",
        type: "multiple_choice",
        skill: "reading",
        question: "'Isla' nghĩa là gì?",
        options: ["Hòn đảo","Ngọn núi","Bãi biển","Dòng sông"],
        correctAnswer: "Hòn đảo"
      },
      {
        id: "act-es-1001-2",
        type: "fill_blank",
        skill: "writing",
        question: "Điền từ: 'Subimos a la _____.' (ngọn núi)",
        prompt: "Điền từ: 'Subimos a la _____.' (ngọn núi)",
        options: ["montaña","playa","isla","bosque"],
        correctAnswer: "montaña"
      },
      {
        id: "act-es-1001-3",
        type: "multiple_choice",
        skill: "reading",
        question: "Dịch: 'Paisaje impresionante'",
        options: ["Phong cảnh ngoạn mục","Cảnh xấu xí","Trời mưa to","Đường khó đi"],
        correctAnswer: "Phong cảnh ngoạn mục"
      },
      {
        id: "act-es-1001-4",
        type: "match_pairs",
        skill: "reading",
        question: "Ghép các cặp từ vựng với nghĩa tiếng Việt tương ứng",
        pairs: [{"left":"Montaña","right":"Ngọn núi"},{"left":"Playa","right":"Bãi biển"},{"left":"Bosque","right":"Khu rừng"},{"left":"Isla","right":"Hòn đảo"}],
        correctAnswer: "all_matched"
      },
      {
        id: "act-es-1001-5",
        type: "audio_listen",
        skill: "listening",
        question: "Lắng nghe và chọn đáp án chính xác:",
        prompt: "Montaña",
        options: ["Hòn đảo","Ngọn núi","Bãi biển","Dòng sông"],
        correctAnswer: "Hòn đảo"
      }
    ]
  },
  {
    id: "lesson-es-1002",
    unitId: "unit-es-10",
    title: "Reservar Excursiones Guiadas",
    description: "Hỏi về các tour du lịch khám phá và giá vé.",
    type: "standard",
    xp: 15,
    estimatedMinutes: 5,
    order: 2,
    status: "available",
    goals: [
      { id: "g1", description: "Nắm vững các từ vựng chủ đề Reservar Excursiones Guiadas" },
      { id: "g2", description: "Luyện phát âm chuẩn và phản xạ câu qua các bài tập tương tác" }
    ],
    vocabulary: [
      { id: "v-es-1002-1", word: "Excursión", translation: "Chuyến du ngoạn / Tour", phonetic: "ehks-koor-syohn" },
      { id: "v-es-1002-2", word: "Guía turístico", translation: "Hướng dẫn viên du lịch", phonetic: "gee-ah too-rees-tee-koh" },
      { id: "v-es-1002-3", word: "Salida", translation: "Giờ xuất phát / Khởi hành", phonetic: "sah-lee-dah" },
      { id: "v-es-1002-4", word: "Incluye", translation: "Bao gồm", phonetic: "een-kloo-yeh" },
      { id: "v-es-1002-5", word: "Monumento", translation: "Di tích lịch sử", phonetic: "moh-noo-men-toh" }
    ],
    phrases: [
      { id: "p-es-1002-1", text: "¿La excursión incluye comida y entradas?", translation: "Tour này có bao gồm bữa ăn và vé vào cổng không?" },
      { id: "p-es-1002-2", text: "¿A qué hora es la salida del autobús?", translation: "Xe buýt khởi hành lúc mấy giờ thế?" }
    ],
    activities: [
      {
        id: "act-es-1002-1",
        type: "multiple_choice",
        skill: "reading",
        question: "'Guía turístico' là ai?",
        options: ["Hướng dẫn viên du lịch","Tài xế","Đầu bếp","Bác sĩ"],
        correctAnswer: "Hướng dẫn viên du lịch"
      },
      {
        id: "act-es-1002-2",
        type: "fill_blank",
        skill: "writing",
        question: "Điền từ: 'El precio _____ la entrada.' (bao gồm)",
        prompt: "Điền từ: 'El precio _____ la entrada.' (bao gồm)",
        options: ["incluye","salida","guía","excursión"],
        correctAnswer: "incluye"
      },
      {
        id: "act-es-1002-3",
        type: "multiple_choice",
        skill: "reading",
        question: "Dịch: 'Hora de salida'",
        options: ["Giờ xuất phát","Giờ đến","Giờ ăn","Giờ ngủ"],
        correctAnswer: "Giờ xuất phát"
      },
      {
        id: "act-es-1002-4",
        type: "match_pairs",
        skill: "reading",
        question: "Ghép các cặp từ vựng với nghĩa tiếng Việt tương ứng",
        pairs: [{"left":"Excursión","right":"Chuyến du ngoạn / Tour"},{"left":"Guía turístico","right":"Hướng dẫn viên du lịch"},{"left":"Salida","right":"Giờ xuất phát / Khởi hành"},{"left":"Incluye","right":"Bao gồm"}],
        correctAnswer: "all_matched"
      },
      {
        id: "act-es-1002-5",
        type: "audio_listen",
        skill: "listening",
        question: "Lắng nghe và chọn đáp án chính xác:",
        prompt: "Excursión",
        options: ["Hướng dẫn viên du lịch","Tài xế","Đầu bếp","Bác sĩ"],
        correctAnswer: "Hướng dẫn viên du lịch"
      }
    ]
  },
  {
    id: "lesson-es-1003",
    unitId: "unit-es-10",
    title: "Problemas en el Viaje (Sự cố du lịch)",
    description: "Xử lý hoãn chuyến bay, thất lạc hành lý.",
    type: "standard",
    xp: 15,
    estimatedMinutes: 5,
    order: 3,
    status: "available",
    goals: [
      { id: "g1", description: "Nắm vững các từ vựng chủ đề Problemas en el Viaje (Sự cố du lịch)" },
      { id: "g2", description: "Luyện phát âm chuẩn và phản xạ câu qua các bài tập tương tác" }
    ],
    vocabulary: [
      { id: "v-es-1003-1", word: "Retrasado", translation: "Bị hoãn / Bị trễ", phonetic: "reh-trah-sah-doh" },
      { id: "v-es-1003-2", word: "Cancelado", translation: "Bị hủy bỏ", phonetic: "kahn-theh-lah-doh" },
      { id: "v-es-1003-3", word: "Equipaje perdido", translation: "Hành lý bị thất lạc", phonetic: "eh-kee-pah-heh pair-dee-doh" },
      { id: "v-es-1003-4", word: "Reembolso", translation: "Hoàn lại tiền", phonetic: "reh-em-bohl-soh" },
      { id: "v-es-1003-5", word: "Atención al cliente", translation: "Chăm sóc khách hàng", phonetic: "ah-ten-syohn ahl klyen-teh" }
    ],
    phrases: [
      { id: "p-es-1003-1", text: "Mi vuelo está retrasado dos horas.", translation: "Chuyến bay của tôi bị trễ hai tiếng." },
      { id: "p-es-1003-2", text: "Mi equipaje no ha llegado a la cinta.", translation: "Hành lý của tôi chưa xuất hiện ở băng chuyền." }
    ],
    activities: [
      {
        id: "act-es-1003-1",
        type: "multiple_choice",
        skill: "reading",
        question: "'Vuelo retrasado' nghĩa là gì?",
        options: ["Chuyến bay bị trễ","Chuyến bay đúng giờ","Chuyến bay cất cánh","Mua vé máy bay"],
        correctAnswer: "Chuyến bay bị trễ"
      },
      {
        id: "act-es-1003-2",
        type: "fill_blank",
        skill: "writing",
        question: "Điền từ: 'El vuelo fue _____.' (bị hủy)",
        prompt: "Điền từ: 'El vuelo fue _____.' (bị hủy)",
        options: ["cancelado","retrasado","reembolso","equipaje"],
        correctAnswer: "cancelado"
      },
      {
        id: "act-es-1003-3",
        type: "multiple_choice",
        skill: "reading",
        question: "Dịch: 'Equipaje perdido'",
        options: ["Thất lạc hành lý","Hành lý xách tay","Quên hộ chiếu","Mua vé mới"],
        correctAnswer: "Thất lạc hành lý"
      },
      {
        id: "act-es-1003-4",
        type: "match_pairs",
        skill: "reading",
        question: "Ghép các cặp từ vựng với nghĩa tiếng Việt tương ứng",
        pairs: [{"left":"Retrasado","right":"Bị hoãn / Bị trễ"},{"left":"Cancelado","right":"Bị hủy bỏ"},{"left":"Equipaje perdido","right":"Hành lý bị thất lạc"},{"left":"Reembolso","right":"Hoàn lại tiền"}],
        correctAnswer: "all_matched"
      },
      {
        id: "act-es-1003-5",
        type: "audio_listen",
        skill: "listening",
        question: "Lắng nghe và chọn đáp án chính xác:",
        prompt: "Retrasado",
        options: ["Chuyến bay bị trễ","Chuyến bay đúng giờ","Chuyến bay cất cánh","Mua vé máy bay"],
        correctAnswer: "Chuyến bay bị trễ"
      }
    ]
  },
  {
    id: "lesson-es-1004",
    unitId: "unit-es-10",
    title: "Fiestas Tradicionales (Lễ hội Tây Ban Nha)",
    description: "Các lễ hội nổi tiếng như La Tomatina, Feria de Abril.",
    type: "standard",
    xp: 15,
    estimatedMinutes: 5,
    order: 4,
    status: "available",
    goals: [
      { id: "g1", description: "Nắm vững các từ vựng chủ đề Fiestas Tradicionales (Lễ hội Tây Ban Nha)" },
      { id: "g2", description: "Luyện phát âm chuẩn và phản xạ câu qua các bài tập tương tác" }
    ],
    vocabulary: [
      { id: "v-es-1004-1", word: "Fiesta", translation: "Lễ hội / Bữa tiệc", phonetic: "fyehs-tah" },
      { id: "v-es-1004-2", word: "Celebrar", translation: "Ăn mừng / Kỷ niệm", phonetic: "theh-leh-brahr" },
      { id: "v-es-1004-3", word: "Tradición", translation: "Truyền thống", phonetic: "trah-dee-syohn" },
      { id: "v-es-1004-4", word: "Fuegos artificiales", translation: "Pháo hoa", phonetic: "fweh-gohs ahr-tee-fee-syah-lehs" },
      { id: "v-es-1004-5", word: "Vacaciones", translation: "Kỳ nghỉ", phonetic: "vah-kah-syoh-nehs" }
    ],
    phrases: [
      { id: "p-es-1004-1", text: "En España se celebran muchas fiestas populares.", translation: "Ở Tây Ban Nha có rất nhiều lễ hội dân gian được tổ chức." },
      { id: "p-es-1004-2", text: "Los fuegos artificiales en la noche fueron mágicos.", translation: "Pháo hoa trong đêm thật là huyền ảo." }
    ],
    activities: [
      {
        id: "act-es-1004-1",
        type: "multiple_choice",
        skill: "reading",
        question: "'Celebrar' nghĩa là gì?",
        options: ["Ăn mừng / Kỷ niệm","Làm việc","Đi ngủ","Đi chợ"],
        correctAnswer: "Ăn mừng / Kỷ niệm"
      },
      {
        id: "act-es-1004-2",
        type: "fill_blank",
        skill: "writing",
        question: "Điền từ: 'Vamos a _____ la fiesta.' (ăn mừng)",
        prompt: "Điền từ: 'Vamos a _____ la fiesta.' (ăn mừng)",
        options: ["celebrar","fiesta","tradición","playa"],
        correctAnswer: "celebrar"
      },
      {
        id: "act-es-1004-3",
        type: "multiple_choice",
        skill: "reading",
        question: "Dịch: 'Fuegos artificiales'",
        options: ["Pháo hoa","Đốt lửa","Ca hát","Nhảy múa"],
        correctAnswer: "Pháo hoa"
      },
      {
        id: "act-es-1004-4",
        type: "match_pairs",
        skill: "reading",
        question: "Ghép các cặp từ vựng với nghĩa tiếng Việt tương ứng",
        pairs: [{"left":"Fiesta","right":"Lễ hội / Bữa tiệc"},{"left":"Celebrar","right":"Ăn mừng / Kỷ niệm"},{"left":"Tradición","right":"Truyền thống"},{"left":"Fuegos artificiales","right":"Pháo hoa"}],
        correctAnswer: "all_matched"
      },
      {
        id: "act-es-1004-5",
        type: "audio_listen",
        skill: "listening",
        question: "Lắng nghe và chọn đáp án chính xác:",
        prompt: "Fiesta",
        options: ["Ăn mừng / Kỷ niệm","Làm việc","Đi ngủ","Đi chợ"],
        correctAnswer: "Ăn mừng / Kỷ niệm"
      }
    ]
  },
  {
    id: "lesson-es-1005",
    unitId: "unit-es-10",
    title: "AI Practice: Lên Kế Hoạch Tour Cùng Hướng Dẫn Viên Javier",
    description: "Lên kế hoạch tour khám phá vùng biển Costa del Sol cùng hướng dẫn viên Javier.",
    type: "audio_ai",
    xp: 25,
    estimatedMinutes: 5,
    order: 5,
    heroImage: images.mascotWelcome,
    status: "available",
    goals: [
      { id: "g1", description: "Luyện phản xạ giao tiếp thực tế với AI Teacher Elena" },
      { id: "g2", description: "Vận dụng từ vựng trọng tâm vào ngữ cảnh hội thoại tự nhiên" }
    ],
    vocabulary: [
      { id: "v-ai-es-10-1", word: "Playa", translation: "Bãi biển" },
      { id: "v-ai-es-10-2", word: "Montaña", translation: "Ngọn núi" },
      { id: "v-ai-es-10-3", word: "Excursión", translation: "Chuyến du ngoạn / Tour" },
      { id: "v-ai-es-10-4", word: "Impresionante", translation: "Ấn tượng / Ngoạn mục" },
      { id: "v-ai-es-10-5", word: "Fiesta", translation: "Lễ hội / Bữa tiệc" }
    ],
    phrases: [],
    activities: [],
    aiTeacherPrompt: {
      scenario: "Trung tâm thông tin du lịch bờ biển Costa del Sol rực rỡ nắng",
      systemPrompt: "You are Elena, a warm, human, and energetic Spanish teacher. Speak mostly in English for clear guidance. Introduce Spanish words slowly: say the word once, give the English translation, and invite the student to repeat after you. Keep every reply strictly to 1 or 2 conversational sentences with friendly contractions (I'm, let's, that's). Listen closely to the student, praise correct pronunciation, and gently model errors again: 'So close! Try saying —'. Stay strictly on lesson words: Playa, Montaña, Excursión, Impresionante, Fiesta. Never switch topics.",
      initialGreeting: "¡Hola amigo! ¿Quieres ir a las playas de Costa del Sol o prefieres hacer senderismo en la montaña?",
      targetVocabulary: ["Playa","Montaña","Excursión","Impresionante","Fiesta"],
      suggestedResponses: ["Quiero reservar una excursión a la montaña y la playa.","¿La excursión incluye comida y transporte?","¡Perfecto, suena impresionante!"],
      difficulty: "intermediate"
    }
  },
  {
    id: "lesson-es-1101",
    unitId: "unit-es-11",
    title: "Hablar del Futuro (Voy a... / Ir a)",
    description: "Diễn đạt kế hoạch dự định trong tương lai bằng cấu trúc 'Ir a + động từ'.",
    type: "standard",
    xp: 15,
    estimatedMinutes: 5,
    order: 1,
    status: "available",
    goals: [
      { id: "g1", description: "Nắm vững các từ vựng chủ đề Hablar del Futuro (Voy a... / Ir a)" },
      { id: "g2", description: "Luyện phát âm chuẩn và phản xạ câu qua các bài tập tương tác" }
    ],
    vocabulary: [
      { id: "v-es-1101-1", word: "Voy a", translation: "Tôi dự định sẽ...", phonetic: "boy ah" },
      { id: "v-es-1101-2", word: "Pronto", translation: "Sớm thôi", phonetic: "prohn-toh" },
      { id: "v-es-1101-3", word: "El próximo año", translation: "Năm tới", phonetic: "el prohk-see-moh ah-nyoh" },
      { id: "v-es-1101-4", word: "Plan", translation: "Kế hoạch", phonetic: "plahn" },
      { id: "v-es-1101-5", word: "Estudiar", translation: "Học tập", phonetic: "ehs-too-dyahr" }
    ],
    phrases: [
      { id: "p-es-1101-1", text: "El próximo año voy a estudiar en España.", translation: "Năm tới tôi dự định sẽ đi du học ở Tây Ban Nha." },
      { id: "p-es-1101-2", text: "¡Todo va a salir muy bien!", translation: "Mọi chuyện chắc chắn sẽ diễn ra thật tốt đẹp!" }
    ],
    activities: [
      {
        id: "act-es-1101-1",
        type: "multiple_choice",
        skill: "reading",
        question: "Cấu trúc nào diễn tả kế hoạch tương lai trong tiếng Tây Ban Nha?",
        options: ["Voy a + infinitivo","Fui a","Ayer","Solía"],
        correctAnswer: "Voy a + infinitivo"
      },
      {
        id: "act-es-1101-2",
        type: "fill_blank",
        skill: "writing",
        question: "Điền từ: '_____ viajar a Madrid.' (tôi dự định sẽ)",
        prompt: "Điền từ: '_____ viajar a Madrid.' (tôi dự định sẽ)",
        options: ["Voy a","Fui","Ayer","Plan"],
        correctAnswer: "Voy a"
      },
      {
        id: "act-es-1101-3",
        type: "multiple_choice",
        skill: "reading",
        question: "Dịch: 'El próximo año'",
        options: ["Năm tới","Năm ngoái","Tuần trước","Hôm qua"],
        correctAnswer: "Năm tới"
      },
      {
        id: "act-es-1101-4",
        type: "match_pairs",
        skill: "reading",
        question: "Ghép các cặp từ vựng với nghĩa tiếng Việt tương ứng",
        pairs: [{"left":"Voy a","right":"Tôi dự định sẽ..."},{"left":"Pronto","right":"Sớm thôi"},{"left":"El próximo año","right":"Năm tới"},{"left":"Plan","right":"Kế hoạch"}],
        correctAnswer: "all_matched"
      },
      {
        id: "act-es-1101-5",
        type: "audio_listen",
        skill: "listening",
        question: "Lắng nghe và chọn đáp án chính xác:",
        prompt: "Voy a",
        options: ["Voy a + infinitivo","Fui a","Ayer","Solía"],
        correctAnswer: "Voy a + infinitivo"
      }
    ]
  },
  {
    id: "lesson-es-1102",
    unitId: "unit-es-11",
    title: "Sueños y Metas (Ước mơ & Mục tiêu)",
    description: "Bàn về ước mơ tương lai và mục tiêu trong 5 năm tới.",
    type: "standard",
    xp: 15,
    estimatedMinutes: 5,
    order: 2,
    status: "available",
    goals: [
      { id: "g1", description: "Nắm vững các từ vựng chủ đề Sueños y Metas (Ước mơ & Mục tiêu)" },
      { id: "g2", description: "Luyện phát âm chuẩn và phản xạ câu qua các bài tập tương tác" }
    ],
    vocabulary: [
      { id: "v-es-1102-1", word: "Sueño", translation: "Ước mơ", phonetic: "sweh-nyoh" },
      { id: "v-es-1102-2", word: "Meta", translation: "Mục tiêu", phonetic: "meh-tah" },
      { id: "v-es-1102-3", word: "Lograr", translation: "Đạt được", phonetic: "loh-grahr" },
      { id: "v-es-1102-4", word: "Graduarse", translation: "Tốt nghiệp", phonetic: "grah-dwahr-seh" },
      { id: "v-es-1102-5", word: "Éxito", translation: "Thành công", phonetic: "ehk-see-toh" }
    ],
    phrases: [
      { id: "p-es-1102-1", text: "Mi sueño es fundar mi propia empresa sostenible.", translation: "Ước mơ của tôi là thành lập công ty bền vững của riêng mình." },
      { id: "p-es-1102-2", text: "En cinco años espero lograr todas mis metas.", translation: "Trong 5 năm tới tôi hy vọng đạt được mọi mục tiêu." }
    ],
    activities: [
      {
        id: "act-es-1102-1",
        type: "multiple_choice",
        skill: "reading",
        question: "'Éxito' trong tiếng Tây Ban Nha nghĩa là gì?",
        options: ["Thành công","Thất bại","Lối ra","Cửa vào"],
        correctAnswer: "Thành công"
      },
      {
        id: "act-es-1102-2",
        type: "fill_blank",
        skill: "writing",
        question: "Điền từ: 'Quiero _____ mi sueño.' (đạt được)",
        prompt: "Điền từ: 'Quiero _____ mi sueño.' (đạt được)",
        options: ["lograr","éxito","meta","sueño"],
        correctAnswer: "lograr"
      },
      {
        id: "act-es-1102-3",
        type: "multiple_choice",
        skill: "reading",
        question: "Dịch: 'Mis metas'",
        options: ["Mục tiêu của tôi","Kỷ niệm của tôi","Bạn bè của tôi","Gia đình tôi"],
        correctAnswer: "Mục tiêu của tôi"
      },
      {
        id: "act-es-1102-4",
        type: "match_pairs",
        skill: "reading",
        question: "Ghép các cặp từ vựng với nghĩa tiếng Việt tương ứng",
        pairs: [{"left":"Sueño","right":"Ước mơ"},{"left":"Meta","right":"Mục tiêu"},{"left":"Lograr","right":"Đạt được"},{"left":"Graduarse","right":"Tốt nghiệp"}],
        correctAnswer: "all_matched"
      },
      {
        id: "act-es-1102-5",
        type: "audio_listen",
        skill: "listening",
        question: "Lắng nghe và chọn đáp án chính xác:",
        prompt: "Sueño",
        options: ["Thành công","Thất bại","Lối ra","Cửa vào"],
        correctAnswer: "Thành công"
      }
    ]
  },
  {
    id: "lesson-es-1103",
    unitId: "unit-es-11",
    title: "Vida Digital y Aplicaciones Móviles",
    description: "Smartphone, ứng dụng học tập và mạng xã hội.",
    type: "standard",
    xp: 15,
    estimatedMinutes: 5,
    order: 3,
    status: "available",
    goals: [
      { id: "g1", description: "Nắm vững các từ vựng chủ đề Vida Digital y Aplicaciones Móviles" },
      { id: "g2", description: "Luyện phát âm chuẩn và phản xạ câu qua các bài tập tương tác" }
    ],
    vocabulary: [
      { id: "v-es-1103-1", word: "Teléfono móvil", translation: "Điện thoại di động", phonetic: "teh-leh-foh-noh moh-beel" },
      { id: "v-es-1103-2", word: "Aplicación / App", translation: "Ứng dụng di động", phonetic: "ah-plee-kah-syohn" },
      { id: "v-es-1103-3", word: "Descargar", translation: "Tải xuống", phonetic: "dehs-kahr-gahr" },
      { id: "v-es-1103-4", word: "Redes sociales", translation: "Mạng xã hội", phonetic: "rreh-dehs soh-syah-lehs" },
      { id: "v-es-1103-5", word: "Aprender en línea", translation: "Học trực tuyến", phonetic: "ah-pren-dair en lee-neh-ah" }
    ],
    phrases: [
      { id: "p-es-1103-1", text: "Uso esta aplicación de idiomas todos los días.", translation: "Tôi sử dụng ứng dụng học ngôn ngữ này mỗi ngày." },
      { id: "p-es-1103-2", text: "¿Me sigues en las redes sociales?", translation: "Bạn có theo dõi tôi trên mạng xã hội không?" }
    ],
    activities: [
      {
        id: "act-es-1103-1",
        type: "multiple_choice",
        skill: "reading",
        question: "'Descargar' nghĩa là gì?",
        options: ["Tải xuống","Xóa đi","Tắt máy","Nạp pin"],
        correctAnswer: "Tải xuống"
      },
      {
        id: "act-es-1103-2",
        type: "fill_blank",
        skill: "writing",
        question: "Điền từ: 'Quiero _____ esta app.' (tải xuống)",
        prompt: "Điền từ: 'Quiero _____ esta app.' (tải xuống)",
        options: ["descargar","móvil","redes","social"],
        correctAnswer: "descargar"
      },
      {
        id: "act-es-1103-3",
        type: "multiple_choice",
        skill: "reading",
        question: "Dịch: 'Redes sociales'",
        options: ["Mạng xã hội","Báo chí","Truyền hình","Điện thoại"],
        correctAnswer: "Mạng xã hội"
      },
      {
        id: "act-es-1103-4",
        type: "match_pairs",
        skill: "reading",
        question: "Ghép các cặp từ vựng với nghĩa tiếng Việt tương ứng",
        pairs: [{"left":"Teléfono móvil","right":"Điện thoại di động"},{"left":"Aplicación / App","right":"Ứng dụng di động"},{"left":"Descargar","right":"Tải xuống"},{"left":"Redes sociales","right":"Mạng xã hội"}],
        correctAnswer: "all_matched"
      },
      {
        id: "act-es-1103-5",
        type: "audio_listen",
        skill: "listening",
        question: "Lắng nghe và chọn đáp án chính xác:",
        prompt: "Teléfono móvil",
        options: ["Tải xuống","Xóa đi","Tắt máy","Nạp pin"],
        correctAnswer: "Tải xuống"
      }
    ]
  },
  {
    id: "lesson-es-1104",
    unitId: "unit-es-11",
    title: "Inteligencia Artificial y Futuro",
    description: "Trí tuệ nhân tạo (IA) và công nghệ hiện đại.",
    type: "standard",
    xp: 15,
    estimatedMinutes: 5,
    order: 4,
    status: "available",
    goals: [
      { id: "g1", description: "Nắm vững các từ vựng chủ đề Inteligencia Artificial y Futuro" },
      { id: "g2", description: "Luyện phát âm chuẩn và phản xạ câu qua các bài tập tương tác" }
    ],
    vocabulary: [
      { id: "v-es-1104-1", word: "Inteligencia Artificial (IA)", translation: "Trí tuệ nhân tạo (AI)", phonetic: "een-teh-lee-hen-syah ahr-tee-fee-syahl" },
      { id: "v-es-1104-2", word: "Robot", translation: "Người máy robot", phonetic: "rroh-boht" },
      { id: "v-es-1104-3", word: "Tecnología", translation: "Công nghệ", phonetic: "tehk-noh-loh-hee-ah" },
      { id: "v-es-1104-4", word: "Innovador", translation: "Đổi mới sáng tạo", phonetic: "een-noh-vah-dohr" },
      { id: "v-es-1104-5", word: "Futuro", translation: "Tương lai", phonetic: "foo-too-roh" }
    ],
    phrases: [
      { id: "p-es-1104-1", text: "Los tutores de IA nos ayudan a hablar con confianza.", translation: "Các gia sư AI giúp chúng ta nói chuyện với sự tự tin." },
      { id: "p-es-1104-2", text: "La tecnología transformará el futuro.", translation: "Công nghệ sẽ biến đổi tương lai." }
    ],
    activities: [
      {
        id: "act-es-1104-1",
        type: "multiple_choice",
        skill: "reading",
        question: "Trí tuệ nhân tạo viết tắt trong tiếng Tây Ban Nha là:",
        options: ["IA","AI","TI","PC"],
        correctAnswer: "IA"
      },
      {
        id: "act-es-1104-2",
        type: "fill_blank",
        skill: "writing",
        question: "Điền từ: 'La _____ avanza rápido.' (công nghệ)",
        prompt: "Điền từ: 'La _____ avanza rápido.' (công nghệ)",
        options: ["tecnología","futuro","robot","sueño"],
        correctAnswer: "tecnología"
      },
      {
        id: "act-es-1104-3",
        type: "multiple_choice",
        skill: "reading",
        question: "Dịch: 'En el futuro'",
        options: ["Trong tương lai","Trong quá khứ","Hôm nay","Hôm qua"],
        correctAnswer: "Trong tương lai"
      },
      {
        id: "act-es-1104-4",
        type: "match_pairs",
        skill: "reading",
        question: "Ghép các cặp từ vựng với nghĩa tiếng Việt tương ứng",
        pairs: [{"left":"Inteligencia Artificial (IA)","right":"Trí tuệ nhân tạo (AI)"},{"left":"Robot","right":"Người máy robot"},{"left":"Tecnología","right":"Công nghệ"},{"left":"Innovador","right":"Đổi mới sáng tạo"}],
        correctAnswer: "all_matched"
      },
      {
        id: "act-es-1104-5",
        type: "audio_listen",
        skill: "listening",
        question: "Lắng nghe và chọn đáp án chính xác:",
        prompt: "Inteligencia Artificial (IA)",
        options: ["IA","AI","TI","PC"],
        correctAnswer: "IA"
      }
    ]
  },
  {
    id: "lesson-es-1105",
    unitId: "unit-es-11",
    title: "AI Practice: Bàn Về Tương Lai & Công Nghệ Với Elena",
    description: "Thảo luận về ước mơ tương lai và trải nghiệm học tập với gia sư AI Elena.",
    type: "audio_ai",
    xp: 25,
    estimatedMinutes: 5,
    order: 5,
    heroImage: images.mascotWelcome,
    status: "available",
    goals: [
      { id: "g1", description: "Luyện phản xạ giao tiếp thực tế với AI Teacher Elena" },
      { id: "g2", description: "Vận dụng từ vựng trọng tâm vào ngữ cảnh hội thoại tự nhiên" }
    ],
    vocabulary: [
      { id: "v-ai-es-11-1", word: "Voy a", translation: "Tôi dự định sẽ..." },
      { id: "v-ai-es-11-2", word: "Futuro", translation: "Tương lai" },
      { id: "v-ai-es-11-3", word: "Meta", translation: "Mục tiêu" },
      { id: "v-ai-es-11-4", word: "Sueño", translation: "Ước mơ" },
      { id: "v-ai-es-11-5", word: "IA", translation: "Trí tuệ nhân tạo" }
    ],
    phrases: [],
    activities: [],
    aiTeacherPrompt: {
      scenario: "Quán cà phê công nghệ tại Barcelona",
      systemPrompt: "You are Elena, a warm, human, and energetic Spanish teacher. Speak mostly in English for clear guidance. Introduce Spanish words slowly: say the word once, give the English translation, and invite the student to repeat after you. Keep every reply strictly to 1 or 2 conversational sentences with friendly contractions (I'm, let's, that's). Listen closely to the student, praise correct pronunciation, and gently model errors again: 'So close! Try saying —'. Stay strictly on lesson words: Voy a, Futuro, Meta, Sueño, IA. Never switch topics.",
      initialGreeting: "¡Hola! Mirar al futuro es emocionante. ¿Cuáles son tus planes para el próximo año?",
      targetVocabulary: ["Voy a","Futuro","Meta","Sueño","IA"],
      suggestedResponses: ["El próximo año voy a viajar a España.","Quiero hablar español con fluidez en el futuro.","¡Me encanta aprender con un tutor de IA!"],
      difficulty: "intermediate"
    }
  },
  {
    id: "lesson-es-1201",
    unitId: "unit-es-12",
    title: "Expresar Opiniones (Theo ý tôi...)",
    description: "Bày tỏ quan điểm cá nhân với 'En mi opinión', 'Estoy de acuerdo'.",
    type: "standard",
    xp: 15,
    estimatedMinutes: 5,
    order: 1,
    status: "available",
    goals: [
      { id: "g1", description: "Nắm vững các từ vựng chủ đề Expresar Opiniones (Theo ý tôi...)" },
      { id: "g2", description: "Luyện phát âm chuẩn và phản xạ câu qua các bài tập tương tác" }
    ],
    vocabulary: [
      { id: "v-es-1201-1", word: "En mi opinión", translation: "Theo ý kiến của tôi", phonetic: "en mee oh-pee-nyohn" },
      { id: "v-es-1201-2", word: "Estoy de acuerdo", translation: "Tôi đồng ý", phonetic: "ehs-toy deh ah-kwehr-doh" },
      { id: "v-es-1201-3", word: "No estoy de acuerdo", translation: "Tôi không đồng ý", phonetic: "noh ehs-toy" },
      { id: "v-es-1201-4", word: "Creo que", translation: "Tôi tin rằng / nghĩ rằng", phonetic: "kreh-oh keh" },
      { id: "v-es-1201-5", word: "Punto de vista", translation: "Góc nhìn / Quan điểm", phonetic: "poon-toh deh bees-tah" }
    ],
    phrases: [
      { id: "p-es-1201-1", text: "En mi opinión, viajar es la mejor forma de aprender.", translation: "Theo ý tôi, du lịch là cách học hỏi tốt nhất." },
      { id: "p-es-1201-2", text: "Estoy totalmente de acuerdo contigo.", translation: "Tôi hoàn toàn đồng ý với bạn." }
    ],
    activities: [
      {
        id: "act-es-1201-1",
        type: "multiple_choice",
        skill: "reading",
        question: "'Estoy de acuerdo' nghĩa là gì?",
        options: ["Tôi đồng ý","Tôi phản đối","Tôi không biết","Tôi bận"],
        correctAnswer: "Tôi đồng ý"
      },
      {
        id: "act-es-1201-2",
        type: "fill_blank",
        skill: "writing",
        question: "Điền từ: 'Estoy de _____ con tu opinión.' (đồng ý)",
        prompt: "Điền từ: 'Estoy de _____ con tu opinión.' (đồng ý)",
        options: ["acuerdo","opinión","punto","creo"],
        correctAnswer: "acuerdo"
      },
      {
        id: "act-es-1201-3",
        type: "multiple_choice",
        skill: "reading",
        question: "Dịch: 'En mi opinión'",
        options: ["Theo quan điểm của tôi","Cảm ơn bạn","Tôi xin lỗi","Tạm biệt"],
        correctAnswer: "Theo quan điểm của tôi"
      },
      {
        id: "act-es-1201-4",
        type: "match_pairs",
        skill: "reading",
        question: "Ghép các cặp từ vựng với nghĩa tiếng Việt tương ứng",
        pairs: [{"left":"En mi opinión","right":"Theo ý kiến của tôi"},{"left":"Estoy de acuerdo","right":"Tôi đồng ý"},{"left":"No estoy de acuerdo","right":"Tôi không đồng ý"},{"left":"Creo que","right":"Tôi tin rằng / nghĩ rằng"}],
        correctAnswer: "all_matched"
      },
      {
        id: "act-es-1201-5",
        type: "audio_listen",
        skill: "listening",
        question: "Lắng nghe và chọn đáp án chính xác:",
        prompt: "En mi opinión",
        options: ["Tôi đồng ý","Tôi phản đối","Tôi không biết","Tôi bận"],
        correctAnswer: "Tôi đồng ý"
      }
    ]
  },
  {
    id: "lesson-es-1202",
    unitId: "unit-es-12",
    title: "Modismos Españoles (Thành ngữ thú vị)",
    description: "Các thành ngữ phổ biến như 'Pan comido' và 'Estar en las nubes'.",
    type: "standard",
    xp: 15,
    estimatedMinutes: 5,
    order: 2,
    status: "available",
    goals: [
      { id: "g1", description: "Nắm vững các từ vựng chủ đề Modismos Españoles (Thành ngữ thú vị)" },
      { id: "g2", description: "Luyện phát âm chuẩn và phản xạ câu qua các bài tập tương tác" }
    ],
    vocabulary: [
      { id: "v-es-1202-1", word: "Pan comido", translation: "Dễ như ăn bánh", phonetic: "pahn koh-mee-doh" },
      { id: "v-es-1202-2", word: "Estar en las nubes", translation: "Đầu óc lơ lửng trên mây", phonetic: "ehs-tahr en lahs noo-behs" },
      { id: "v-es-1202-3", word: "Tomar el pelo", translation: "Trêu đùa / Chọc ghẹo", phonetic: "toh-mahr el peh-loh" },
      { id: "v-es-1202-4", word: "Costar un ojo de la cara", translation: "Đắt cắt cổ", phonetic: "kohs-tahr oon oh-hoh" },
      { id: "v-es-1202-5", word: "¡Mucha mierda!", translation: "Chúc may mắn nhé (nghệ thuật)!", phonetic: "moo-chah myair-dah" }
    ],
    phrases: [
      { id: "p-es-1202-1", text: "El examen fue pan comido.", translation: "Bài kiểm tra dễ như ăn bánh ấy mà." },
      { id: "p-es-1202-2", text: "¡No te preocupes, esto es pan comido!", translation: "Đừng lo lắng, cái này cực kỳ dễ dàng!" }
    ],
    activities: [
      {
        id: "act-es-1202-1",
        type: "multiple_choice",
        skill: "reading",
        question: "Thành ngữ 'Pan comido' trong tiếng Tây Ban Nha nghĩa là gì?",
        options: ["Rất dễ dàng","Rất khó khăn","Ăn bánh mì","Rất đắt tiền"],
        correctAnswer: "Rất dễ dàng"
      },
      {
        id: "act-es-1202-2",
        type: "fill_blank",
        skill: "writing",
        question: "Điền từ: 'Este examen es pan _____.' (dễ ợt)",
        prompt: "Điền từ: 'Este examen es pan _____.' (dễ ợt)",
        options: ["comido","pan","pelo","nubes"],
        correctAnswer: "comido"
      },
      {
        id: "act-es-1202-3",
        type: "multiple_choice",
        skill: "reading",
        question: "Dịch: 'Pan comido'",
        options: ["Dễ như ăn kẹo / Rất dễ","Bánh mì ngon","Ăn trưa","Đắt tiền"],
        correctAnswer: "Dễ như ăn kẹo / Rất dễ"
      },
      {
        id: "act-es-1202-4",
        type: "match_pairs",
        skill: "reading",
        question: "Ghép các cặp từ vựng với nghĩa tiếng Việt tương ứng",
        pairs: [{"left":"Pan comido","right":"Dễ như ăn bánh"},{"left":"Estar en las nubes","right":"Đầu óc lơ lửng trên mây"},{"left":"Tomar el pelo","right":"Trêu đùa / Chọc ghẹo"},{"left":"Costar un ojo de la cara","right":"Đắt cắt cổ"}],
        correctAnswer: "all_matched"
      },
      {
        id: "act-es-1202-5",
        type: "audio_listen",
        skill: "listening",
        question: "Lắng nghe và chọn đáp án chính xác:",
        prompt: "Pan comido",
        options: ["Rất dễ dàng","Rất khó khăn","Ăn bánh mì","Rất đắt tiền"],
        correctAnswer: "Rất dễ dàng"
      }
    ]
  },
  {
    id: "lesson-es-1203",
    unitId: "unit-es-12",
    title: "Tradiciones y Cultura Hispana",
    description: "Tìm hiểu các phong tục chào hỏi và nếp sống người bản xứ.",
    type: "standard",
    xp: 15,
    estimatedMinutes: 5,
    order: 3,
    status: "available",
    goals: [
      { id: "g1", description: "Nắm vững các từ vựng chủ đề Tradiciones y Cultura Hispana" },
      { id: "g2", description: "Luyện phát âm chuẩn và phản xạ câu qua các bài tập tương tác" }
    ],
    vocabulary: [
      { id: "v-es-1203-1", word: "Cultura", translation: "Văn hóa", phonetic: "kool-too-rah" },
      { id: "v-es-1203-2", word: "Costumbre", translation: "Phong tục tập quán", phonetic: "kohs-toom-breh" },
      { id: "v-es-1203-3", word: "Educado", translation: "Lịch sự / Có giáo dục", phonetic: "eh-doo-kah-doh" },
      { id: "v-es-1203-4", word: "Respeto", translation: "Sự tôn trọng", phonetic: "rrehs-peh-toh" },
      { id: "v-es-1203-5", word: "Tradición", translation: "Truyền thống", phonetic: "trah-dee-syohn" }
    ],
    phrases: [
      { id: "p-es-1203-1", text: "Es esencial respetar las costumbres locales.", translation: "Điều cốt yếu là phải tôn trọng phong tục địa phương." },
      { id: "p-es-1203-2", text: "En España es común saludarse con dos besos.", translation: "Ở Tây Ban Nha, hôn má hai bên là cách chào thân thiện phổ biến." }
    ],
    activities: [
      {
        id: "act-es-1203-1",
        type: "multiple_choice",
        skill: "reading",
        question: "Cách chào thân mật phổ biến giữa bạn bè ở Tây Ban Nha là gì?",
        options: ["Hôn nhẹ hai má (dos besos)","Cúi gập người","Khoanh tay","Không nói gì"],
        correctAnswer: "Hôn nhẹ hai má (dos besos)"
      },
      {
        id: "act-es-1203-2",
        type: "fill_blank",
        skill: "writing",
        question: "Điền từ: 'Hay que tener _____.' (sự tôn trọng)",
        prompt: "Điền từ: 'Hay que tener _____.' (sự tôn trọng)",
        options: ["respeto","cultura","costumbre","educado"],
        correctAnswer: "respeto"
      },
      {
        id: "act-es-1203-3",
        type: "multiple_choice",
        skill: "reading",
        question: "Dịch: 'Respetar la cultura'",
        options: ["Tôn trọng văn hóa","Học văn hóa","Bỏ qua văn hóa","Xem văn hóa"],
        correctAnswer: "Tôn trọng văn hóa"
      },
      {
        id: "act-es-1203-4",
        type: "match_pairs",
        skill: "reading",
        question: "Ghép các cặp từ vựng với nghĩa tiếng Việt tương ứng",
        pairs: [{"left":"Cultura","right":"Văn hóa"},{"left":"Costumbre","right":"Phong tục tập quán"},{"left":"Educado","right":"Lịch sự / Có giáo dục"},{"left":"Respeto","right":"Sự tôn trọng"}],
        correctAnswer: "all_matched"
      },
      {
        id: "act-es-1203-5",
        type: "audio_listen",
        skill: "listening",
        question: "Lắng nghe và chọn đáp án chính xác:",
        prompt: "Cultura",
        options: ["Hôn nhẹ hai má (dos besos)","Cúi gập người","Khoanh tay","Không nói gì"],
        correctAnswer: "Hôn nhẹ hai má (dos besos)"
      }
    ]
  },
  {
    id: "lesson-es-1204",
    unitId: "unit-es-12",
    title: "Repaso General del Nivel A2",
    description: "Tổng ôn toàn diện quá khứ, sức khỏe, công việc và quan điểm.",
    type: "standard",
    xp: 15,
    estimatedMinutes: 5,
    order: 4,
    status: "available",
    goals: [
      { id: "g1", description: "Nắm vững các từ vựng chủ đề Repaso General del Nivel A2" },
      { id: "g2", description: "Luyện phát âm chuẩn và phản xạ câu qua các bài tập tương tác" }
    ],
    vocabulary: [
      { id: "v-es-1204-1", word: "Repaso", translation: "Ôn tập tổng kết", phonetic: "rreh-pah-soh" },
      { id: "v-es-1204-2", word: "Gramática", translation: "Ngữ pháp", phonetic: "grah-mah-tee-kah" },
      { id: "v-es-1204-3", word: "Vocabulario", translation: "Từ vựng", phonetic: "boh-kah-boo-lah-ryoh" },
      { id: "v-es-1204-4", word: "Seguro / Confiado", translation: "Tự tin / Chắc chắn", phonetic: "seh-goo-roh" },
      { id: "v-es-1204-5", word: "Dominar", translation: "Làm chủ / Thành thạo", phonetic: "doh-mee-nahr" }
    ],
    phrases: [
      { id: "p-es-1204-1", text: "¡Has completado con éxito todo el nivel A2 de español!", translation: "Bạn đã hoàn thành xuất sắc toàn bộ trình độ A2 tiếng Tây Ban Nha!" },
      { id: "p-es-1204-2", text: "Ahora me siento seguro hablando español.", translation: "Bây giờ tôi cảm thấy tự tin khi giao tiếp tiếng Tây Ban Nha." }
    ],
    activities: [
      {
        id: "act-es-1204-1",
        type: "multiple_choice",
        skill: "reading",
        question: "'Seguro de sí mismo' nghĩa là gì?",
        options: ["Tự tin vào bản thân","Lo lắng","Sợ hãi","Buồn bã"],
        correctAnswer: "Tự tin vào bản thân"
      },
      {
        id: "act-es-1204-2",
        type: "fill_blank",
        skill: "writing",
        question: "Điền từ: 'Me siento _____ al hablar.' (tự tin)",
        prompt: "Điền từ: 'Me siento _____ al hablar.' (tự tin)",
        options: ["seguro","repaso","gramática","pan"],
        correctAnswer: "seguro"
      },
      {
        id: "act-es-1204-3",
        type: "multiple_choice",
        skill: "reading",
        question: "Dịch: 'Repaso general'",
        options: ["Ôn tập tổng kết","Bài kiểm tra mới","Bài học số 1","Tạm biệt"],
        correctAnswer: "Ôn tập tổng kết"
      },
      {
        id: "act-es-1204-4",
        type: "match_pairs",
        skill: "reading",
        question: "Ghép các cặp từ vựng với nghĩa tiếng Việt tương ứng",
        pairs: [{"left":"Repaso","right":"Ôn tập tổng kết"},{"left":"Gramática","right":"Ngữ pháp"},{"left":"Vocabulario","right":"Từ vựng"},{"left":"Seguro / Confiado","right":"Tự tin / Chắc chắn"}],
        correctAnswer: "all_matched"
      },
      {
        id: "act-es-1204-5",
        type: "audio_listen",
        skill: "listening",
        question: "Lắng nghe và chọn đáp án chính xác:",
        prompt: "Repaso",
        options: ["Tự tin vào bản thân","Lo lắng","Sợ hãi","Buồn bã"],
        correctAnswer: "Tự tin vào bản thân"
      }
    ]
  },
  {
    id: "lesson-es-1205",
    unitId: "unit-es-12",
    title: "AI Practice: Tốt Nghiệp Khóa Học CEFR A2 Cùng Carmen",
    description: "Đàm thoại tự do tổng kết tốt nghiệp chứng chỉ A2 cùng cô giáo Carmen.",
    type: "audio_ai",
    xp: 25,
    estimatedMinutes: 5,
    order: 5,
    heroImage: images.mascotWelcome,
    status: "available",
    goals: [
      { id: "g1", description: "Luyện phản xạ giao tiếp thực tế với AI Teacher Elena" },
      { id: "g2", description: "Vận dụng từ vựng trọng tâm vào ngữ cảnh hội thoại tự nhiên" }
    ],
    vocabulary: [
      { id: "v-ai-es-12-1", word: "¡Felicitaciones!", translation: "Chúc mừng!" },
      { id: "v-ai-es-12-2", word: "Nivel A2", translation: "Trình độ A2" },
      { id: "v-ai-es-12-3", word: "Seguro", translation: "Chắc chắn" },
      { id: "v-ai-es-12-4", word: "En mi opinión", translation: "Theo ý kiến của tôi" },
      { id: "v-ai-es-12-5", word: "Pan comido", translation: "Dễ như ăn bánh" }
    ],
    phrases: [],
    activities: [],
    aiTeacherPrompt: {
      scenario: "Sân thượng lâu đài Alhambra Granada trong ánh hoàng hôn rực rỡ",
      systemPrompt: "You are Elena, a warm, human, and energetic Spanish teacher. Speak mostly in English for clear guidance. Introduce Spanish words slowly: say the word once, give the English translation, and invite the student to repeat after you. Keep every reply strictly to 1 or 2 conversational sentences with friendly contractions (I'm, let's, that's). Listen closely to the student, praise correct pronunciation, and gently model errors again: 'So close! Try saying —'. Stay strictly on lesson words: ¡Felicitaciones!, Nivel A2, Seguro, En mi opinión, Pan comido. Never switch topics.",
      initialGreeting: "¡Felicitaciones! ¡Has completado las 12 unidades y alcanzado el nivel A2 de español! ¿Cómo te sientes ahora mismo?",
      targetVocabulary: ["¡Felicitaciones!","Nivel A2","Seguro","En mi opinión","Pan comido"],
      suggestedResponses: ["¡Me siento muy feliz y orgulloso de terminar las 12 unidades!","Mi tema favorito fue aprender sobre viajes y planes futuros.","¡Muchas gracias Carmen, hablar español ahora es pan comido!"],
      difficulty: "intermediate"
    }
  },
];
