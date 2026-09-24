import { Lesson } from "@/types/learning";
import { images } from "@/constants/images";

export const FR_LESSONS: Lesson[] = [
  {
    id: "lesson-fr-101",
    unitId: "unit-fr-1",
    title: "Bonjour & Lời Chào Nước Pháp",
    description: "Lời chào thanh lịch và tạm biệt kiểu Pháp.",
    type: "standard",
    xp: 15,
    estimatedMinutes: 5,
    order: 1,
    status: "available",
    goals: [
      { id: "g1", description: "Nắm vững các từ vựng chủ đề Bonjour & Lời Chào Nước Pháp" },
      { id: "g2", description: "Luyện phát âm chuẩn và phản xạ câu qua các bài tập tương tác" }
    ],
    vocabulary: [
      { id: "v-fr-101-1", word: "Bonjour", translation: "Xin chào / Chào buổi sáng", phonetic: "bohn-zhoor" },
      { id: "v-fr-101-2", word: "Bonsoir", translation: "Chào buổi tối", phonetic: "bohn-swahr" },
      { id: "v-fr-101-3", word: "Au revoir", translation: "Tạm biệt", phonetic: "oh ruh-vwahr" },
      { id: "v-fr-101-4", word: "Salut", translation: "Chào / Tạm biệt (thân mật)", phonetic: "sah-loo" },
      { id: "v-fr-101-5", word: "À bientôt", translation: "Hẹn sớm gặp lại", phonetic: "ah byan-toh" }
    ],
    phrases: [
      { id: "p-fr-101-1", text: "Bonjour! Comment allez-vous?", translation: "Xin chào! Bạn có khỏe không?" },
      { id: "p-fr-101-2", text: "Au revoir, à demain!", translation: "Tạm biệt, hẹn gặp lại ngày mai!" }
    ],
    activities: [
      {
        id: "act-fr-101-1",
        type: "multiple_choice",
        skill: "reading",
        question: "'Bonjour' có nghĩa là gì?",
        options: ["Xin chào","Tạm biệt","Cảm ơn","Chúc ngủ ngon"],
        correctAnswer: "Xin chào"
      },
      {
        id: "act-fr-101-2",
        type: "fill_blank",
        skill: "writing",
        question: "Điền từ: 'Bonjour! Comment allez-_____?'",
        prompt: "Điền từ: 'Bonjour! Comment allez-_____?'",
        options: ["vous","tu","moi","toi"],
        correctAnswer: "vous"
      },
      {
        id: "act-fr-101-3",
        type: "multiple_choice",
        skill: "reading",
        question: "Dịch: 'Au revoir'",
        options: ["Tạm biệt","Xin chào","Hẹn gặp lại","Cảm ơn"],
        correctAnswer: "Tạm biệt"
      },
      {
        id: "act-fr-101-4",
        type: "match_pairs",
        skill: "reading",
        question: "Ghép các cặp từ vựng với nghĩa tiếng Việt tương ứng",
        pairs: [{"left":"Bonjour","right":"Xin chào / Chào buổi sáng"},{"left":"Bonsoir","right":"Chào buổi tối"},{"left":"Au revoir","right":"Tạm biệt"},{"left":"Salut","right":"Chào / Tạm biệt (thân mật)"}],
        correctAnswer: "all_matched"
      },
      {
        id: "act-fr-101-5",
        type: "audio_listen",
        skill: "listening",
        question: "Lắng nghe và chọn đáp án chính xác:",
        prompt: "Bonjour",
        options: ["Xin chào","Tạm biệt","Cảm ơn","Chúc ngủ ngon"],
        correctAnswer: "Xin chào"
      }
    ]
  },
  {
    id: "lesson-fr-102",
    unitId: "unit-fr-1",
    title: "Tên Bạn Là Gì? (Comment vous vous appelez?)",
    description: "Giới thiệu tên và quốc tịch bằng tiếng Pháp.",
    type: "standard",
    xp: 15,
    estimatedMinutes: 5,
    order: 2,
    status: "available",
    goals: [
      { id: "g1", description: "Nắm vững các từ vựng chủ đề Tên Bạn Là Gì? (Comment vous vous appelez?)" },
      { id: "g2", description: "Luyện phát âm chuẩn và phản xạ câu qua các bài tập tương tác" }
    ],
    vocabulary: [
      { id: "v-fr-102-1", word: "Je m'appelle", translation: "Tên tôi là", phonetic: "zhuh mah-pel" },
      { id: "v-fr-102-2", word: "Comment", translation: "Như thế nào", phonetic: "koh-mahn" },
      { id: "v-fr-102-3", word: "Enchanté(e)", translation: "Rất hân hạnh được gặp", phonetic: "ahn-shahn-tay" },
      { id: "v-fr-102-4", word: "Ami / Amie", translation: "Bạn bè (nam / nữ)", phonetic: "ah-mee" },
      { id: "v-fr-102-5", word: "Français", translation: "Người Pháp / Tiếng Pháp", phonetic: "frahn-seh" }
    ],
    phrases: [
      { id: "p-fr-102-1", text: "Bonjour! Je m'appelle Sophie.", translation: "Xin chào! Tôi tên là Sophie." },
      { id: "p-fr-102-2", text: "Enchanté de faire votre connaissance.", translation: "Rất hân hạnh được làm quen với bạn." }
    ],
    activities: [
      {
        id: "act-fr-102-1",
        type: "multiple_choice",
        skill: "reading",
        question: "'Je m'appelle Pierre' nghĩa là gì?",
        options: ["Tôi tên là Pierre","Bạn là Pierre","Pierre là bạn tôi","Ai là Pierre"],
        correctAnswer: "Tôi tên là Pierre"
      },
      {
        id: "act-fr-102-2",
        type: "fill_blank",
        skill: "writing",
        question: "Điền từ: 'Je _____ Alex.' (tên tôi là)",
        prompt: "Điền từ: 'Je _____ Alex.' (tên tôi là)",
        options: ["m'appelle","suis","ami","bonjour"],
        correctAnswer: "m'appelle"
      },
      {
        id: "act-fr-102-3",
        type: "multiple_choice",
        skill: "reading",
        question: "Dịch: 'Enchanté!'",
        options: ["Rất hân hạnh!","Tạm biệt!","Cảm ơn!","Xin chào!"],
        correctAnswer: "Rất hân hạnh!"
      },
      {
        id: "act-fr-102-4",
        type: "match_pairs",
        skill: "reading",
        question: "Ghép các cặp từ vựng với nghĩa tiếng Việt tương ứng",
        pairs: [{"left":"Je m'appelle","right":"Tên tôi là"},{"left":"Comment","right":"Như thế nào"},{"left":"Enchanté(e)","right":"Rất hân hạnh được gặp"},{"left":"Ami / Amie","right":"Bạn bè (nam / nữ)"}],
        correctAnswer: "all_matched"
      },
      {
        id: "act-fr-102-5",
        type: "audio_listen",
        skill: "listening",
        question: "Lắng nghe và chọn đáp án chính xác:",
        prompt: "Je m'appelle",
        options: ["Tôi tên là Pierre","Bạn là Pierre","Pierre là bạn tôi","Ai là Pierre"],
        correctAnswer: "Tôi tên là Pierre"
      }
    ]
  },
  {
    id: "lesson-fr-103",
    unitId: "unit-fr-1",
    title: "Cảm Ơn & Xin Lỗi (Merci & S'il vous plaît)",
    description: "Quy tắc lịch thiệp tối quan trọng của văn hóa Pháp.",
    type: "standard",
    xp: 15,
    estimatedMinutes: 5,
    order: 3,
    status: "available",
    goals: [
      { id: "g1", description: "Nắm vững các từ vựng chủ đề Cảm Ơn & Xin Lỗi (Merci & S'il vous plaît)" },
      { id: "g2", description: "Luyện phát âm chuẩn và phản xạ câu qua các bài tập tương tác" }
    ],
    vocabulary: [
      { id: "v-fr-103-1", word: "Merci", translation: "Cảm ơn", phonetic: "mair-see" },
      { id: "v-fr-103-2", word: "Merci beaucoup", translation: "Cảm ơn rất nhiều", phonetic: "mair-see boh-koo" },
      { id: "v-fr-103-3", word: "S'il vous plaît", translation: "Làm ơn / Xin vui lòng", phonetic: "seel voo pleh" },
      { id: "v-fr-103-4", word: "Pardon / Excusez-moi", translation: "Xin lỗi / Xin thứ lỗi", phonetic: "pahr-dohn" },
      { id: "v-fr-103-5", word: "De rien", translation: "Không có chi", phonetic: "duh ryan" }
    ],
    phrases: [
      { id: "p-fr-103-1", text: "Merci beaucoup pour votre aide!", translation: "Cảm ơn bạn rất nhiều vì sự giúp đỡ!" },
      { id: "p-fr-103-2", text: "Pardon, où est le café?", translation: "Xin lỗi, quán cà phê ở đâu vậy?" }
    ],
    activities: [
      {
        id: "act-fr-103-1",
        type: "multiple_choice",
        skill: "reading",
        question: "Cụm từ tiếng Pháp tương đương 'Please' (Làm ơn) là gì?",
        options: ["S'il vous plaît","Merci","Pardon","De rien"],
        correctAnswer: "S'il vous plaît"
      },
      {
        id: "act-fr-103-2",
        type: "fill_blank",
        skill: "writing",
        question: "Điền từ: 'Un café, s'il vous _____.'",
        prompt: "Điền từ: 'Un café, s'il vous _____.'",
        options: ["plaît","merci","pardon","bonjour"],
        correctAnswer: "plaît"
      },
      {
        id: "act-fr-103-3",
        type: "multiple_choice",
        skill: "reading",
        question: "Dịch: 'De rien'",
        options: ["Không có chi","Cảm ơn","Tạm biệt","Xin chào"],
        correctAnswer: "Không có chi"
      },
      {
        id: "act-fr-103-4",
        type: "match_pairs",
        skill: "reading",
        question: "Ghép các cặp từ vựng với nghĩa tiếng Việt tương ứng",
        pairs: [{"left":"Merci","right":"Cảm ơn"},{"left":"Merci beaucoup","right":"Cảm ơn rất nhiều"},{"left":"S'il vous plaît","right":"Làm ơn / Xin vui lòng"},{"left":"Pardon / Excusez-moi","right":"Xin lỗi / Xin thứ lỗi"}],
        correctAnswer: "all_matched"
      },
      {
        id: "act-fr-103-5",
        type: "audio_listen",
        skill: "listening",
        question: "Lắng nghe và chọn đáp án chính xác:",
        prompt: "Merci",
        options: ["S'il vous plaît","Merci","Pardon","De rien"],
        correctAnswer: "S'il vous plaît"
      }
    ]
  },
  {
    id: "lesson-fr-104",
    unitId: "unit-fr-1",
    title: "Số Đếm 1 - 10 Tiếng Pháp (Un, Deux, Trois)",
    description: "Đếm số chuẩn ngữ điệu Pháp từ 1 đến 10.",
    type: "standard",
    xp: 15,
    estimatedMinutes: 5,
    order: 4,
    status: "available",
    goals: [
      { id: "g1", description: "Nắm vững các từ vựng chủ đề Số Đếm 1 - 10 Tiếng Pháp (Un, Deux, Trois)" },
      { id: "g2", description: "Luyện phát âm chuẩn và phản xạ câu qua các bài tập tương tác" }
    ],
    vocabulary: [
      { id: "v-fr-104-1", word: "Un / Deux", translation: "Một (1) / Hai (2)", phonetic: "uhn / duh" },
      { id: "v-fr-104-2", word: "Trois / Quatre", translation: "Ba (3) / Bốn (4)", phonetic: "twah / kahtr" },
      { id: "v-fr-104-3", word: "Cinq / Six", translation: "Năm (5) / Sáu (6)", phonetic: "sank / sees" },
      { id: "v-fr-104-4", word: "Sept / Huit", translation: "Bảy (7) / Tám (8)", phonetic: "set / weet" },
      { id: "v-fr-104-5", word: "Neuf / Dix", translation: "Chín (9) / Mười (10)", phonetic: "nuhf / dees" }
    ],
    phrases: [
      { id: "p-fr-104-1", text: "Un, deux, trois, partez!", translation: "Một, hai, ba, xuất phát!" },
      { id: "p-fr-104-2", text: "Deux cafés, s'il vous plaît.", translation: "Cho tôi hai ly cà phê, làm ơn." }
    ],
    activities: [
      {
        id: "act-fr-104-1",
        type: "multiple_choice",
        skill: "reading",
        question: "'Cinq' trong tiếng Pháp là số mấy?",
        options: ["Số 5","Số 3","Số 7","Số 9"],
        correctAnswer: "Số 5"
      },
      {
        id: "act-fr-104-2",
        type: "fill_blank",
        skill: "writing",
        question: "Điền số: 'Un, deux, _____ (ba)'",
        prompt: "Điền số: 'Un, deux, _____ (ba)'",
        options: ["trois","quatre","cinq","dix"],
        correctAnswer: "trois"
      },
      {
        id: "act-fr-104-3",
        type: "multiple_choice",
        skill: "reading",
        question: "Số 10 trong tiếng Pháp là gì?",
        options: ["Dix","Huit","Neuf","Sept"],
        correctAnswer: "Dix"
      },
      {
        id: "act-fr-104-4",
        type: "match_pairs",
        skill: "reading",
        question: "Ghép các cặp từ vựng với nghĩa tiếng Việt tương ứng",
        pairs: [{"left":"Un / Deux","right":"Một (1) / Hai (2)"},{"left":"Trois / Quatre","right":"Ba (3) / Bốn (4)"},{"left":"Cinq / Six","right":"Năm (5) / Sáu (6)"},{"left":"Sept / Huit","right":"Bảy (7) / Tám (8)"}],
        correctAnswer: "all_matched"
      },
      {
        id: "act-fr-104-5",
        type: "audio_listen",
        skill: "listening",
        question: "Lắng nghe và chọn đáp án chính xác:",
        prompt: "Un / Deux",
        options: ["Số 5","Số 3","Số 7","Số 9"],
        correctAnswer: "Số 5"
      }
    ]
  },
  {
    id: "lesson-fr-105",
    unitId: "unit-fr-1",
    title: "AI Practice: Gặp Gỡ Bạn Mới Tại Paris",
    description: "Thực hành chào hỏi và làm quen bằng tiếng Pháp cùng cô giáo Camille bên bờ sông Seine.",
    type: "audio_ai",
    xp: 25,
    estimatedMinutes: 5,
    order: 5,
    heroImage: images.mascotWelcome,
    status: "available",
    goals: [
      { id: "g1", description: "Luyện phản xạ giao tiếp thực tế với AI Teacher Camille" },
      { id: "g2", description: "Vận dụng từ vựng trọng tâm vào ngữ cảnh hội thoại tự nhiên" }
    ],
    vocabulary: [
      { id: "v-ai-fr-1-1", word: "Bonjour", translation: "Xin chào / Chào buổi sáng" },
      { id: "v-ai-fr-1-2", word: "Je m'appelle", translation: "Tôi tên là" },
      { id: "v-ai-fr-1-3", word: "Merci", translation: "Cảm ơn" },
      { id: "v-ai-fr-1-4", word: "S'il vous plaît", translation: "Làm ơn" },
      { id: "v-ai-fr-1-5", word: "Enchanté", translation: "Rất vui được gặp bạn" }
    ],
    phrases: [],
    activities: [],
    aiTeacherPrompt: {
      scenario: "Quán cà phê ngoài trời thơ mộng nhìn ra tháp Eiffel",
      systemPrompt: "You are Camille, a warm, human, and energetic French teacher. Speak mostly in English for clear guidance. Introduce French words slowly: say the word once, give the English translation, and invite the student to repeat after you. Keep every reply strictly to 1 or 2 conversational sentences with friendly contractions (I'm, let's, that's). Listen closely to the student, praise correct pronunciation, and gently model errors again: 'So close! Try saying —'. Stay strictly on lesson words: Bonjour, Je m'appelle, Merci, S'il vous plaît, Enchanté. Never switch topics.",
      initialGreeting: "Bonjour! Bienvenue à Paris. Comment vous vous appelez? Enchantée!",
      targetVocabulary: ["Bonjour","Je m'appelle","Merci","S'il vous plaît","Enchanté"],
      suggestedResponses: ["Bonjour Camille! Je m'appelle Alex.","Enchanté! Comment allez-vous?","Merci beaucoup!"],
      difficulty: "beginner"
    }
  },
  {
    id: "lesson-fr-201",
    unitId: "unit-fr-2",
    title: "Gia Đình Tôi (Ma Famille)",
    description: "Gọi tên cha, mẹ, anh chị em bằng tiếng Pháp.",
    type: "standard",
    xp: 15,
    estimatedMinutes: 5,
    order: 1,
    status: "available",
    goals: [
      { id: "g1", description: "Nắm vững các từ vựng chủ đề Gia Đình Tôi (Ma Famille)" },
      { id: "g2", description: "Luyện phát âm chuẩn và phản xạ câu qua các bài tập tương tác" }
    ],
    vocabulary: [
      { id: "v-fr-201-1", word: "Famille", translation: "Gia đình", phonetic: "fah-mee" },
      { id: "v-fr-201-2", word: "Père / Papa", translation: "Bố / Cha", phonetic: "pair / pah-pah" },
      { id: "v-fr-201-3", word: "Mère / Maman", translation: "Mẹ", phonetic: "mair / mah-mahn" },
      { id: "v-fr-201-4", word: "Frère", translation: "Anh em trai", phonetic: "frair" },
      { id: "v-fr-201-5", word: "Sœur", translation: "Chị em gái", phonetic: "suhr" }
    ],
    phrases: [
      { id: "p-fr-201-1", text: "Voici ma famille.", translation: "Đây là gia đình của tôi." },
      { id: "p-fr-201-2", text: "J'ai un frère et une sœur.", translation: "Tôi có một người anh trai và một người em gái." }
    ],
    activities: [
      {
        id: "act-fr-201-1",
        type: "multiple_choice",
        skill: "reading",
        question: "'Père' nghĩa là gì?",
        options: ["Bố","Mẹ","Anh trai","Chị gái"],
        correctAnswer: "Bố"
      },
      {
        id: "act-fr-201-2",
        type: "fill_blank",
        skill: "writing",
        question: "Điền từ: 'Voici ma _____.' (mẹ tôi)",
        prompt: "Điền từ: 'Voici ma _____.' (mẹ tôi)",
        options: ["mère","père","frère","ami"],
        correctAnswer: "mère"
      },
      {
        id: "act-fr-201-3",
        type: "multiple_choice",
        skill: "reading",
        question: "Dịch: 'Ma famille'",
        options: ["Gia đình tôi","Bạn bè tôi","Nhà tôi","Trường tôi"],
        correctAnswer: "Gia đình tôi"
      },
      {
        id: "act-fr-201-4",
        type: "match_pairs",
        skill: "reading",
        question: "Ghép các cặp từ vựng với nghĩa tiếng Việt tương ứng",
        pairs: [{"left":"Famille","right":"Gia đình"},{"left":"Père / Papa","right":"Bố / Cha"},{"left":"Mère / Maman","right":"Mẹ"},{"left":"Frère","right":"Anh em trai"}],
        correctAnswer: "all_matched"
      },
      {
        id: "act-fr-201-5",
        type: "audio_listen",
        skill: "listening",
        question: "Lắng nghe và chọn đáp án chính xác:",
        prompt: "Famille",
        options: ["Bố","Mẹ","Anh trai","Chị gái"],
        correctAnswer: "Bố"
      }
    ]
  },
  {
    id: "lesson-fr-202",
    unitId: "unit-fr-2",
    title: "Miêu Tả Bạn Thân (Mon Ami)",
    description: "Miêu tả ngoại hình và tính cách tốt bụng, duyên dáng.",
    type: "standard",
    xp: 15,
    estimatedMinutes: 5,
    order: 2,
    status: "available",
    goals: [
      { id: "g1", description: "Nắm vững các từ vựng chủ đề Miêu Tả Bạn Thân (Mon Ami)" },
      { id: "g2", description: "Luyện phát âm chuẩn và phản xạ câu qua các bài tập tương tác" }
    ],
    vocabulary: [
      { id: "v-fr-202-1", word: "Ami / Amie", translation: "Bạn thân (nam / nữ)", phonetic: "ah-mee" },
      { id: "v-fr-202-2", word: "Gentil / Gentille", translation: "Tốt bụng / Tử tế", phonetic: "zhahn-tee" },
      { id: "v-fr-202-3", word: "Beau / Belle", translation: "Đẹp trai / Xinh đẹp", phonetic: "boh / bel" },
      { id: "v-fr-202-4", word: "Drôle", translation: "Hài hước / Vui tính", phonetic: "drohl" },
      { id: "v-fr-202-5", word: "Grand / Grande", translation: "Cao lớn", phonetic: "grahn" }
    ],
    phrases: [
      { id: "p-fr-202-1", text: "Voici mon ami Pierre, il est très gentil.", translation: "Đây là bạn tôi Pierre, anh ấy rất tốt bụng." },
      { id: "p-fr-202-2", text: "Elle est très belle!", translation: "Cô ấy thật là xinh đẹp!" }
    ],
    activities: [
      {
        id: "act-fr-202-1",
        type: "multiple_choice",
        skill: "reading",
        question: "'Beau / Belle' nghĩa là gì?",
        options: ["Đẹp trai / Xinh đẹp","Xấu xí","Thông minh","Hài hước"],
        correctAnswer: "Đẹp trai / Xinh đẹp"
      },
      {
        id: "act-fr-202-2",
        type: "fill_blank",
        skill: "writing",
        question: "Điền từ: 'Pierre est mon _____.' (bạn tôi)",
        prompt: "Điền từ: 'Pierre est mon _____.' (bạn tôi)",
        options: ["ami","mère","père","sœur"],
        correctAnswer: "ami"
      },
      {
        id: "act-fr-202-3",
        type: "multiple_choice",
        skill: "reading",
        question: "Dịch: 'Il est très gentil'",
        options: ["Anh ấy rất tốt bụng","Anh ấy rất cao","Anh ấy là bạn tôi","Anh ấy đi làm"],
        correctAnswer: "Anh ấy rất tốt bụng"
      },
      {
        id: "act-fr-202-4",
        type: "match_pairs",
        skill: "reading",
        question: "Ghép các cặp từ vựng với nghĩa tiếng Việt tương ứng",
        pairs: [{"left":"Ami / Amie","right":"Bạn thân (nam / nữ)"},{"left":"Gentil / Gentille","right":"Tốt bụng / Tử tế"},{"left":"Beau / Belle","right":"Đẹp trai / Xinh đẹp"},{"left":"Drôle","right":"Hài hước / Vui tính"}],
        correctAnswer: "all_matched"
      },
      {
        id: "act-fr-202-5",
        type: "audio_listen",
        skill: "listening",
        question: "Lắng nghe và chọn đáp án chính xác:",
        prompt: "Ami / Amie",
        options: ["Đẹp trai / Xinh đẹp","Xấu xí","Thông minh","Hài hước"],
        correctAnswer: "Đẹp trai / Xinh đẹp"
      }
    ]
  },
  {
    id: "lesson-fr-203",
    unitId: "unit-fr-2",
    title: "Màu Sắc & Thời Trang Paris (Couleurs & Vêtements)",
    description: "Màu sắc phong cách và quần áo thanh lịch.",
    type: "standard",
    xp: 15,
    estimatedMinutes: 5,
    order: 3,
    status: "available",
    goals: [
      { id: "g1", description: "Nắm vững các từ vựng chủ đề Màu Sắc & Thời Trang Paris (Couleurs & Vêtements)" },
      { id: "g2", description: "Luyện phát âm chuẩn và phản xạ câu qua các bài tập tương tác" }
    ],
    vocabulary: [
      { id: "v-fr-203-1", word: "Blanc / Noir", translation: "Màu trắng / Màu đen", phonetic: "blahn / nwahr" },
      { id: "v-fr-203-2", word: "Rouge / Bleu", translation: "Màu đỏ / Màu xanh dương", phonetic: "roozh / bluh" },
      { id: "v-fr-203-3", word: "Jaune", translation: "Màu vàng", phonetic: "zhohn" },
      { id: "v-fr-203-4", word: "Chemise", translation: "Áo sơ mi", phonetic: "shuh-meez" },
      { id: "v-fr-203-5", word: "Chaussures", translation: "Đôi giày", phonetic: "shoh-soor" }
    ],
    phrases: [
      { id: "p-fr-203-1", text: "J'aime la chemise blanche.", translation: "Tôi thích chiếc áo sơ mi màu trắng." },
      { id: "p-fr-203-2", text: "Elle porte une robe rouge.", translation: "Cô ấy mặc chiếc váy màu đỏ." }
    ],
    activities: [
      {
        id: "act-fr-203-1",
        type: "multiple_choice",
        skill: "reading",
        question: "Cờ Pháp có ba màu: Bleu, Blanc và màu gì?",
        options: ["Rouge (Đỏ)","Noir (Đen)","Jaune (Vàng)","Vert (Xanh lá)"],
        correctAnswer: "Rouge (Đỏ)"
      },
      {
        id: "act-fr-203-2",
        type: "fill_blank",
        skill: "writing",
        question: "Điền từ: 'Une chemise _____.' (màu trắng)",
        prompt: "Điền từ: 'Une chemise _____.' (màu trắng)",
        options: ["blanche","rouge","noire","jaune"],
        correctAnswer: "blanche"
      },
      {
        id: "act-fr-203-3",
        type: "multiple_choice",
        skill: "reading",
        question: "Dịch: 'Chaussures noires'",
        options: ["Đôi giày đen","Đôi giày trắng","Chiếc áo đen","Cái mũ đen"],
        correctAnswer: "Đôi giày đen"
      },
      {
        id: "act-fr-203-4",
        type: "match_pairs",
        skill: "reading",
        question: "Ghép các cặp từ vựng với nghĩa tiếng Việt tương ứng",
        pairs: [{"left":"Blanc / Noir","right":"Màu trắng / Màu đen"},{"left":"Rouge / Bleu","right":"Màu đỏ / Màu xanh dương"},{"left":"Jaune","right":"Màu vàng"},{"left":"Chemise","right":"Áo sơ mi"}],
        correctAnswer: "all_matched"
      },
      {
        id: "act-fr-203-5",
        type: "audio_listen",
        skill: "listening",
        question: "Lắng nghe và chọn đáp án chính xác:",
        prompt: "Blanc / Noir",
        options: ["Rouge (Đỏ)","Noir (Đen)","Jaune (Vàng)","Vert (Xanh lá)"],
        correctAnswer: "Rouge (Đỏ)"
      }
    ]
  },
  {
    id: "lesson-fr-204",
    unitId: "unit-fr-2",
    title: "Sở Thích & Tôi Thích (J'aime)",
    description: "Bày tỏ điều mình yêu thích bằng 'J'aime'.",
    type: "standard",
    xp: 15,
    estimatedMinutes: 5,
    order: 4,
    status: "available",
    goals: [
      { id: "g1", description: "Nắm vững các từ vựng chủ đề Sở Thích & Tôi Thích (J'aime)" },
      { id: "g2", description: "Luyện phát âm chuẩn và phản xạ câu qua các bài tập tương tác" }
    ],
    vocabulary: [
      { id: "v-fr-204-1", word: "J'aime", translation: "Tôi thích / Tôi yêu", phonetic: "zhem" },
      { id: "v-fr-204-2", word: "Je n'aime pas", translation: "Tôi không thích", phonetic: "zhuh nem pah" },
      { id: "v-fr-204-3", word: "Musique", translation: "Âm nhạc", phonetic: "moo-zeek" },
      { id: "v-fr-204-4", word: "Cinéma", translation: "Điện ảnh / Phim", phonetic: "see-nay-mah" },
      { id: "v-fr-204-5", word: "Voyager", translation: "Đi du lịch", phonetic: "vwah-yah-zhay" }
    ],
    phrases: [
      { id: "p-fr-204-1", text: "J'aime beaucoup voyager en France.", translation: "Tôi rất thích đi du lịch ở Pháp." },
      { id: "p-fr-204-2", text: "Qu'est-ce que vous aimez?", translation: "Bạn thích điều gì thế?" }
    ],
    activities: [
      {
        id: "act-fr-204-1",
        type: "multiple_choice",
        skill: "reading",
        question: "Cụm từ nào dùng để nói 'Tôi thích...'?",
        options: ["J'aime...","Je n'aime pas...","Merci...","Au revoir..."],
        correctAnswer: "J'aime..."
      },
      {
        id: "act-fr-204-2",
        type: "fill_blank",
        skill: "writing",
        question: "Điền từ: '_____ voyager.' (tôi thích)",
        prompt: "Điền từ: '_____ voyager.' (tôi thích)",
        options: ["J'aime","Merci","Pardon","Famille"],
        correctAnswer: "J'aime"
      },
      {
        id: "act-fr-204-3",
        type: "multiple_choice",
        skill: "reading",
        question: "Dịch: 'J'aime la musique'",
        options: ["Tôi thích âm nhạc","Tôi ghét âm nhạc","Tôi chơi nhạc","Tôi hát hay"],
        correctAnswer: "Tôi thích âm nhạc"
      },
      {
        id: "act-fr-204-4",
        type: "match_pairs",
        skill: "reading",
        question: "Ghép các cặp từ vựng với nghĩa tiếng Việt tương ứng",
        pairs: [{"left":"J'aime","right":"Tôi thích / Tôi yêu"},{"left":"Je n'aime pas","right":"Tôi không thích"},{"left":"Musique","right":"Âm nhạc"},{"left":"Cinéma","right":"Điện ảnh / Phim"}],
        correctAnswer: "all_matched"
      },
      {
        id: "act-fr-204-5",
        type: "audio_listen",
        skill: "listening",
        question: "Lắng nghe và chọn đáp án chính xác:",
        prompt: "J'aime",
        options: ["J'aime...","Je n'aime pas...","Merci...","Au revoir..."],
        correctAnswer: "J'aime..."
      }
    ]
  },
  {
    id: "lesson-fr-205",
    unitId: "unit-fr-2",
    title: "AI Practice: Gia Đình & Sở Thích Cùng Julien",
    description: "Trò chuyện thân mật về gia đình, bạn bè và âm nhạc cùng anh bạn người Paris Julien.",
    type: "audio_ai",
    xp: 25,
    estimatedMinutes: 5,
    order: 5,
    heroImage: images.mascotWelcome,
    status: "available",
    goals: [
      { id: "g1", description: "Luyện phản xạ giao tiếp thực tế với AI Teacher Camille" },
      { id: "g2", description: "Vận dụng từ vựng trọng tâm vào ngữ cảnh hội thoại tự nhiên" }
    ],
    vocabulary: [
      { id: "v-ai-fr-2-1", word: "Famille", translation: "Gia đình" },
      { id: "v-ai-fr-2-2", word: "Ami", translation: "Bạn" },
      { id: "v-ai-fr-2-3", word: "J'aime", translation: "Tôi thích" },
      { id: "v-ai-fr-2-4", word: "Musique", translation: "Âm nhạc" },
      { id: "v-ai-fr-2-5", word: "Voyager", translation: "Đi du lịch" }
    ],
    phrases: [],
    activities: [],
    aiTeacherPrompt: {
      scenario: "Vườn hoa Luxembourg tại Paris vào chiều thu",
      systemPrompt: "You are Camille, a warm, human, and energetic French teacher. Speak mostly in English for clear guidance. Introduce French words slowly: say the word once, give the English translation, and invite the student to repeat after you. Keep every reply strictly to 1 or 2 conversational sentences with friendly contractions (I'm, let's, that's). Listen closely to the student, praise correct pronunciation, and gently model errors again: 'So close! Try saying —'. Stay strictly on lesson words: Famille, Ami, J'aime, Musique, Voyager. Never switch topics.",
      initialGreeting: "Salut! Comment vas-tu? Tu aimes la musique française ou le cinéma?",
      targetVocabulary: ["Famille","Ami","J'aime","Musique","Voyager"],
      suggestedResponses: ["J'aime beaucoup la musique!","Ma famille est au Vietnam.","Et toi Julien, qu'est-ce que tu aimes?"],
      difficulty: "beginner"
    }
  },
  {
    id: "lesson-fr-301",
    unitId: "unit-fr-3",
    title: "Mấy Giờ Rồi? (Quelle heure est-il?)",
    description: "Hỏi và nói giờ trong tiếng Pháp.",
    type: "standard",
    xp: 15,
    estimatedMinutes: 5,
    order: 1,
    status: "available",
    goals: [
      { id: "g1", description: "Nắm vững các từ vựng chủ đề Mấy Giờ Rồi? (Quelle heure est-il?)" },
      { id: "g2", description: "Luyện phát âm chuẩn và phản xạ câu qua các bài tập tương tác" }
    ],
    vocabulary: [
      { id: "v-fr-301-1", word: "Quelle heure", translation: "Mấy giờ", phonetic: "kel uhr" },
      { id: "v-fr-301-2", word: "Heure", translation: "Giờ", phonetic: "uhr" },
      { id: "v-fr-301-3", word: "Minute", translation: "Phút", phonetic: "mee-noot" },
      { id: "v-fr-301-4", word: "Et demie", translation: "Rưỡi / Nửa (30 phút)", phonetic: "ay duh-mee" },
      { id: "v-fr-301-5", word: "Matin / Soir", translation: "Buổi sáng / Buổi tối", phonetic: "mah-tan / swahr" }
    ],
    phrases: [
      { id: "p-fr-301-1", text: "Quelle heure est-il, s'il vous plaît?", translation: "Mấy giờ rồi, làm ơn cho hỏi?" },
      { id: "p-fr-301-2", text: "Il est huit heures et demie.", translation: "Bây giờ là 8 giờ rưỡi." }
    ],
    activities: [
      {
        id: "act-fr-301-1",
        type: "multiple_choice",
        skill: "reading",
        question: "'Quelle heure est-il?' nghĩa là gì?",
        options: ["Mấy giờ rồi?","Hôm nay thứ mấy?","Đi đâu đấy?","Bao nhiêu tiền?"],
        correctAnswer: "Mấy giờ rồi?"
      },
      {
        id: "act-fr-301-2",
        type: "fill_blank",
        skill: "writing",
        question: "Điền từ: 'Il est sept heures et _____.' (rưỡi)",
        prompt: "Điền từ: 'Il est sept heures et _____.' (rưỡi)",
        options: ["demie","heure","minute","matin"],
        correctAnswer: "demie"
      },
      {
        id: "act-fr-301-3",
        type: "multiple_choice",
        skill: "reading",
        question: "Dịch: 'Huit heures'",
        options: ["8 giờ","7 giờ","9 giờ","10 giờ"],
        correctAnswer: "8 giờ"
      },
      {
        id: "act-fr-301-4",
        type: "match_pairs",
        skill: "reading",
        question: "Ghép các cặp từ vựng với nghĩa tiếng Việt tương ứng",
        pairs: [{"left":"Quelle heure","right":"Mấy giờ"},{"left":"Heure","right":"Giờ"},{"left":"Minute","right":"Phút"},{"left":"Et demie","right":"Rưỡi / Nửa (30 phút)"}],
        correctAnswer: "all_matched"
      },
      {
        id: "act-fr-301-5",
        type: "audio_listen",
        skill: "listening",
        question: "Lắng nghe và chọn đáp án chính xác:",
        prompt: "Quelle heure",
        options: ["Mấy giờ rồi?","Hôm nay thứ mấy?","Đi đâu đấy?","Bao nhiêu tiền?"],
        correctAnswer: "Mấy giờ rồi?"
      }
    ]
  },
  {
    id: "lesson-fr-302",
    unitId: "unit-fr-3",
    title: "Thói Quen Buổi Sáng (La Routine Quotidienne)",
    description: "Thức dậy, uống cà phê sáng và đi làm.",
    type: "standard",
    xp: 15,
    estimatedMinutes: 5,
    order: 2,
    status: "available",
    goals: [
      { id: "g1", description: "Nắm vững các từ vựng chủ đề Thói Quen Buổi Sáng (La Routine Quotidienne)" },
      { id: "g2", description: "Luyện phát âm chuẩn và phản xạ câu qua các bài tập tương tác" }
    ],
    vocabulary: [
      { id: "v-fr-302-1", word: "Se réveiller", translation: "Thức dậy", phonetic: "suh ray-vay-yay" },
      { id: "v-fr-302-2", word: "Dormir", translation: "Đi ngủ", phonetic: "dohr-meer" },
      { id: "v-fr-302-3", word: "Manger", translation: "Ăn", phonetic: "mahn-zhay" },
      { id: "v-fr-302-4", word: "Boire", translation: "Uống", phonetic: "bwahr" },
      { id: "v-fr-302-5", word: "Travailler", translation: "Làm việc", phonetic: "trah-vah-yay" }
    ],
    phrases: [
      { id: "p-fr-302-1", text: "Je me réveille à sept heures.", translation: "Tôi thức dậy lúc 7 giờ." },
      { id: "p-fr-302-2", text: "Je prends un café le matin.", translation: "Tôi uống một tách cà phê vào buổi sáng." }
    ],
    activities: [
      {
        id: "act-fr-302-1",
        type: "multiple_choice",
        skill: "reading",
        question: "'Manger' nghĩa là hành động gì?",
        options: ["Ăn","Uống","Ngủ","Làm việc"],
        correctAnswer: "Ăn"
      },
      {
        id: "act-fr-302-2",
        type: "fill_blank",
        skill: "writing",
        question: "Điền từ: 'Je me _____ à 7h.' (thức dậy)",
        prompt: "Điền từ: 'Je me _____ à 7h.' (thức dậy)",
        options: ["réveille","dors","mange","bois"],
        correctAnswer: "réveille"
      },
      {
        id: "act-fr-302-3",
        type: "multiple_choice",
        skill: "reading",
        question: "Dịch: 'Je bois un café'",
        options: ["Tôi uống cà phê","Tôi ăn bánh mì","Tôi đi làm","Tôi đi ngủ"],
        correctAnswer: "Tôi uống cà phê"
      },
      {
        id: "act-fr-302-4",
        type: "match_pairs",
        skill: "reading",
        question: "Ghép các cặp từ vựng với nghĩa tiếng Việt tương ứng",
        pairs: [{"left":"Se réveiller","right":"Thức dậy"},{"left":"Dormir","right":"Đi ngủ"},{"left":"Manger","right":"Ăn"},{"left":"Boire","right":"Uống"}],
        correctAnswer: "all_matched"
      },
      {
        id: "act-fr-302-5",
        type: "audio_listen",
        skill: "listening",
        question: "Lắng nghe và chọn đáp án chính xác:",
        prompt: "Se réveiller",
        options: ["Ăn","Uống","Ngủ","Làm việc"],
        correctAnswer: "Ăn"
      }
    ]
  },
  {
    id: "lesson-fr-303",
    unitId: "unit-fr-3",
    title: "Các Ngày Trong Tuần (Les Jours de la Semaine)",
    description: "Từ thứ Hai đến Chủ Nhật tiếng Pháp.",
    type: "standard",
    xp: 15,
    estimatedMinutes: 5,
    order: 3,
    status: "available",
    goals: [
      { id: "g1", description: "Nắm vững các từ vựng chủ đề Các Ngày Trong Tuần (Les Jours de la Semaine)" },
      { id: "g2", description: "Luyện phát âm chuẩn và phản xạ câu qua các bài tập tương tác" }
    ],
    vocabulary: [
      { id: "v-fr-303-1", word: "Lundi", translation: "Thứ Hai", phonetic: "luhn-dee" },
      { id: "v-fr-303-2", word: "Vendredi", translation: "Thứ Sáu", phonetic: "vahn-druh-dee" },
      { id: "v-fr-303-3", word: "Dimanche", translation: "Chủ Nhật", phonetic: "dee-mahnsh" },
      { id: "v-fr-303-4", word: "Aujourd'hui", translation: "Hôm nay", phonetic: "oh-zhoor-dwee" },
      { id: "v-fr-303-5", word: "Demain", translation: "Ngày mai", phonetic: "duh-man" }
    ],
    phrases: [
      { id: "p-fr-303-1", text: "Aujourd'hui, c'est vendredi!", translation: "Hôm nay là thứ Sáu rồi!" },
      { id: "p-fr-303-2", text: "À demain matin!", translation: "Hẹn gặp lại vào sáng mai!" }
    ],
    activities: [
      {
        id: "act-fr-303-1",
        type: "multiple_choice",
        skill: "reading",
        question: "'Dimanche' là ngày nào?",
        options: ["Chủ Nhật","Thứ Hai","Thứ Bảy","Thứ Sáu"],
        correctAnswer: "Chủ Nhật"
      },
      {
        id: "act-fr-303-2",
        type: "fill_blank",
        skill: "writing",
        question: "Điền từ: '_____ c'est vendredi.' (hôm nay)",
        prompt: "Điền từ: '_____ c'est vendredi.' (hôm nay)",
        options: ["Aujourd'hui","Demain","Lundi","Heure"],
        correctAnswer: "Aujourd'hui"
      },
      {
        id: "act-fr-303-3",
        type: "multiple_choice",
        skill: "reading",
        question: "Dịch: 'C'est lundi'",
        options: ["Hôm nay là thứ Hai","Hôm nay là thứ Sáu","Ngày mai là thứ Hai","Hôm qua là thứ Hai"],
        correctAnswer: "Hôm nay là thứ Hai"
      },
      {
        id: "act-fr-303-4",
        type: "match_pairs",
        skill: "reading",
        question: "Ghép các cặp từ vựng với nghĩa tiếng Việt tương ứng",
        pairs: [{"left":"Lundi","right":"Thứ Hai"},{"left":"Vendredi","right":"Thứ Sáu"},{"left":"Dimanche","right":"Chủ Nhật"},{"left":"Aujourd'hui","right":"Hôm nay"}],
        correctAnswer: "all_matched"
      },
      {
        id: "act-fr-303-5",
        type: "audio_listen",
        skill: "listening",
        question: "Lắng nghe và chọn đáp án chính xác:",
        prompt: "Lundi",
        options: ["Chủ Nhật","Thứ Hai","Thứ Bảy","Thứ Sáu"],
        correctAnswer: "Chủ Nhật"
      }
    ]
  },
  {
    id: "lesson-fr-304",
    unitId: "unit-fr-3",
    title: "Thời Tiết Paris (La Météo)",
    description: "Nói về thời tiết nắng đẹp, mưa hay lạnh.",
    type: "standard",
    xp: 15,
    estimatedMinutes: 5,
    order: 4,
    status: "available",
    goals: [
      { id: "g1", description: "Nắm vững các từ vựng chủ đề Thời Tiết Paris (La Météo)" },
      { id: "g2", description: "Luyện phát âm chuẩn và phản xạ câu qua các bài tập tương tác" }
    ],
    vocabulary: [
      { id: "v-fr-304-1", word: "Météo / Temps", translation: "Thời tiết", phonetic: "may-tay-oh" },
      { id: "v-fr-304-2", word: "Il fait beau", translation: "Trời đẹp / Nắng ấm", phonetic: "eel fay boh" },
      { id: "v-fr-304-3", word: "Il pleut", translation: "Trời mưa", phonetic: "eel pluh" },
      { id: "v-fr-304-4", word: "Il fait chaud", translation: "Trời nóng", phonetic: "eel fay shoh" },
      { id: "v-fr-304-5", word: "Il fait froid", translation: "Trời lạnh", phonetic: "eel fay frwah" }
    ],
    phrases: [
      { id: "p-fr-304-1", text: "Aujourd'hui, il fait très beau.", translation: "Hôm nay trời rất đẹp." },
      { id: "p-fr-304-2", text: "Il pleut à Paris.", translation: "Trời đang mưa ở Paris." }
    ],
    activities: [
      {
        id: "act-fr-304-1",
        type: "multiple_choice",
        skill: "reading",
        question: "'Il pleut' có nghĩa là gì?",
        options: ["Trời mưa","Trời nắng","Có tuyết","Gió to"],
        correctAnswer: "Trời mưa"
      },
      {
        id: "act-fr-304-2",
        type: "fill_blank",
        skill: "writing",
        question: "Điền từ: 'Aujourd'hui, il fait _____.' (trời đẹp)",
        prompt: "Điền từ: 'Aujourd'hui, il fait _____.' (trời đẹp)",
        options: ["beau","pleut","froid","temps"],
        correctAnswer: "beau"
      },
      {
        id: "act-fr-304-3",
        type: "multiple_choice",
        skill: "reading",
        question: "Dịch: 'Il fait froid'",
        options: ["Trời lạnh","Trời nóng","Trời đẹp","Trời mưa"],
        correctAnswer: "Trời lạnh"
      },
      {
        id: "act-fr-304-4",
        type: "match_pairs",
        skill: "reading",
        question: "Ghép các cặp từ vựng với nghĩa tiếng Việt tương ứng",
        pairs: [{"left":"Météo / Temps","right":"Thời tiết"},{"left":"Il fait beau","right":"Trời đẹp / Nắng ấm"},{"left":"Il pleut","right":"Trời mưa"},{"left":"Il fait chaud","right":"Trời nóng"}],
        correctAnswer: "all_matched"
      },
      {
        id: "act-fr-304-5",
        type: "audio_listen",
        skill: "listening",
        question: "Lắng nghe và chọn đáp án chính xác:",
        prompt: "Météo / Temps",
        options: ["Trời mưa","Trời nắng","Có tuyết","Gió to"],
        correctAnswer: "Trời mưa"
      }
    ]
  },
  {
    id: "lesson-fr-305",
    unitId: "unit-fr-3",
    title: "AI Practice: Một Ngày Của Bạn Tại Paris",
    description: "Kể cho cô bạn người Pháp Élodie nghe về thời gian biểu và thời tiết nơi bạn đang sống.",
    type: "audio_ai",
    xp: 25,
    estimatedMinutes: 5,
    order: 5,
    heroImage: images.mascotWelcome,
    status: "available",
    goals: [
      { id: "g1", description: "Luyện phản xạ giao tiếp thực tế với AI Teacher Camille" },
      { id: "g2", description: "Vận dụng từ vựng trọng tâm vào ngữ cảnh hội thoại tự nhiên" }
    ],
    vocabulary: [
      { id: "v-ai-fr-3-1", word: "Heure", translation: "Giờ" },
      { id: "v-ai-fr-3-2", word: "Manger", translation: "Ăn" },
      { id: "v-ai-fr-3-3", word: "Café", translation: "Cà phê" },
      { id: "v-ai-fr-3-4", word: "Il fait beau", translation: "Trời đẹp / Nắng ấm" },
      { id: "v-ai-fr-3-5", word: "Aujourd'hui", translation: "Hôm nay" }
    ],
    phrases: [],
    activities: [],
    aiTeacherPrompt: {
      scenario: "Bên hiên quán cà phê nhìn ra đồi Montmartre",
      systemPrompt: "You are Camille, a warm, human, and energetic French teacher. Speak mostly in English for clear guidance. Introduce French words slowly: say the word once, give the English translation, and invite the student to repeat after you. Keep every reply strictly to 1 or 2 conversational sentences with friendly contractions (I'm, let's, that's). Listen closely to the student, praise correct pronunciation, and gently model errors again: 'So close! Try saying —'. Stay strictly on lesson words: Heure, Manger, Café, Il fait beau, Aujourd'hui. Never switch topics.",
      initialGreeting: "Bonjour! Il fait beau aujourd'hui, n'est-ce pas? À quelle heure tu t'es réveillé ce matin?",
      targetVocabulary: ["Heure","Manger","Café","Il fait beau","Aujourd'hui"],
      suggestedResponses: ["Je me suis réveillé à 7 heures.","Il fait très beau aujourd'hui!","J'ai bu un café et mangé un croissant."],
      difficulty: "beginner"
    }
  },
  {
    id: "lesson-fr-401",
    unitId: "unit-fr-4",
    title: "Tại Quán Café & Bistro Pháp",
    description: "Vào quán, gọi bàn và xin thực đơn.",
    type: "standard",
    xp: 15,
    estimatedMinutes: 5,
    order: 1,
    status: "available",
    goals: [
      { id: "g1", description: "Nắm vững các từ vựng chủ đề Tại Quán Café & Bistro Pháp" },
      { id: "g2", description: "Luyện phát âm chuẩn và phản xạ câu qua các bài tập tương tác" }
    ],
    vocabulary: [
      { id: "v-fr-401-1", word: "Serveur", translation: "Người phục vụ", phonetic: "sair-vuhr" },
      { id: "v-fr-401-2", word: "Menu / Carte", translation: "Thực đơn món ăn", phonetic: "muh-noo / kahrt" },
      { id: "v-fr-401-3", word: "Commander", translation: "Gọi món / Đặt món", phonetic: "koh-mahn-day" },
      { id: "v-fr-401-4", word: "Eau", translation: "Nước khoáng / Nước lọc", phonetic: "oh" },
      { id: "v-fr-401-5", word: "Café", translation: "Cà phê", phonetic: "kah-fay" }
    ],
    phrases: [
      { id: "p-fr-401-1", text: "La carte, s'il vous plaît.", translation: "Cho tôi xin cuốn thực đơn, làm ơn." },
      { id: "p-fr-401-2", text: "Une carafe d'eau, s'il vous plaît.", translation: "Cho tôi xin một bình nước lọc." }
    ],
    activities: [
      {
        id: "act-fr-401-1",
        type: "multiple_choice",
        skill: "reading",
        question: "Cách gọi thực đơn lịch sự ở Pháp là gì?",
        options: ["La carte, s'il vous plaît","Merci beaucoup","Au revoir","De rien"],
        correctAnswer: "La carte, s'il vous plaît"
      },
      {
        id: "act-fr-401-2",
        type: "fill_blank",
        skill: "writing",
        question: "Điền từ: 'Je voudrais _____.' (gọi món)",
        prompt: "Điền từ: 'Je voudrais _____.' (gọi món)",
        options: ["commander","eau","carte","serveur"],
        correctAnswer: "commander"
      },
      {
        id: "act-fr-401-3",
        type: "multiple_choice",
        skill: "reading",
        question: "Dịch: 'De l'eau, s'il vous plaît'",
        options: ["Cho tôi xin nước","Cho tôi cà phê","Tính tiền","Tạm biệt"],
        correctAnswer: "Cho tôi xin nước"
      },
      {
        id: "act-fr-401-4",
        type: "match_pairs",
        skill: "reading",
        question: "Ghép các cặp từ vựng với nghĩa tiếng Việt tương ứng",
        pairs: [{"left":"Serveur","right":"Người phục vụ"},{"left":"Menu / Carte","right":"Thực đơn món ăn"},{"left":"Commander","right":"Gọi món / Đặt món"},{"left":"Eau","right":"Nước khoáng / Nước lọc"}],
        correctAnswer: "all_matched"
      },
      {
        id: "act-fr-401-5",
        type: "audio_listen",
        skill: "listening",
        question: "Lắng nghe và chọn đáp án chính xác:",
        prompt: "Serveur",
        options: ["La carte, s'il vous plaît","Merci beaucoup","Au revoir","De rien"],
        correctAnswer: "La carte, s'il vous plaît"
      }
    ]
  },
  {
    id: "lesson-fr-402",
    unitId: "unit-fr-4",
    title: "Gọi Món Bánh & Rượu Vang (Croissant & Vin)",
    description: "Bánh sừng bò, bánh mì baguette và ẩm thực Pháp.",
    type: "standard",
    xp: 15,
    estimatedMinutes: 5,
    order: 2,
    status: "available",
    goals: [
      { id: "g1", description: "Nắm vững các từ vựng chủ đề Gọi Món Bánh & Rượu Vang (Croissant & Vin)" },
      { id: "g2", description: "Luyện phát âm chuẩn và phản xạ câu qua các bài tập tương tác" }
    ],
    vocabulary: [
      { id: "v-fr-402-1", word: "Croissant", translation: "Bánh sừng bò", phonetic: "krwah-sahn" },
      { id: "v-fr-402-2", word: "Baguette", translation: "Bánh mì que Pháp", phonetic: "bah-get" },
      { id: "v-fr-402-3", word: "Fromage", translation: "Phô mai Pháp", phonetic: "froh-mahzh" },
      { id: "v-fr-402-4", word: "Vin", translation: "Rượu vang", phonetic: "van" },
      { id: "v-fr-402-5", word: "Délicieux", translation: "Ngon tuyệt vời", phonetic: "day-lee-syuh" }
    ],
    phrases: [
      { id: "p-fr-402-1", text: "Un croissant et un café, s'il vous plaît.", translation: "Cho tôi một bánh sừng bò và cà phê sữa." },
      { id: "p-fr-402-2", text: "Ce fromage est délicieux!", translation: "Món phô mai này ngon tuyệt vời!" }
    ],
    activities: [
      {
        id: "act-fr-402-1",
        type: "multiple_choice",
        skill: "reading",
        question: "'Délicieux' nghĩa là gì?",
        options: ["Ngon tuyệt vời","Cay","Đắng","Dở"],
        correctAnswer: "Ngon tuyệt vời"
      },
      {
        id: "act-fr-402-2",
        type: "fill_blank",
        skill: "writing",
        question: "Điền từ: 'C'est très _____!' (ngon)",
        prompt: "Điền từ: 'C'est très _____!' (ngon)",
        options: ["délicieux","fromage","vin","eau"],
        correctAnswer: "délicieux"
      },
      {
        id: "act-fr-402-3",
        type: "multiple_choice",
        skill: "reading",
        question: "Dịch: 'Un croissant, s'il vous plaît'",
        options: ["Cho tôi một bánh sừng bò","Cho tôi ly cà phê","Tính tiền giúp tôi","Cho tôi ly rượu vang"],
        correctAnswer: "Cho tôi một bánh sừng bò"
      },
      {
        id: "act-fr-402-4",
        type: "match_pairs",
        skill: "reading",
        question: "Ghép các cặp từ vựng với nghĩa tiếng Việt tương ứng",
        pairs: [{"left":"Croissant","right":"Bánh sừng bò"},{"left":"Baguette","right":"Bánh mì que Pháp"},{"left":"Fromage","right":"Phô mai Pháp"},{"left":"Vin","right":"Rượu vang"}],
        correctAnswer: "all_matched"
      },
      {
        id: "act-fr-402-5",
        type: "audio_listen",
        skill: "listening",
        question: "Lắng nghe và chọn đáp án chính xác:",
        prompt: "Croissant",
        options: ["Ngon tuyệt vời","Cay","Đắng","Dở"],
        correctAnswer: "Ngon tuyệt vời"
      }
    ]
  },
  {
    id: "lesson-fr-403",
    unitId: "unit-fr-4",
    title: "Văn Hóa Bàn Ăn Pháp (Bon Appétit & Santé)",
    description: "Chúc ngon miệng và cụng ly rượu vang.",
    type: "standard",
    xp: 15,
    estimatedMinutes: 5,
    order: 3,
    status: "available",
    goals: [
      { id: "g1", description: "Nắm vững các từ vựng chủ đề Văn Hóa Bàn Ăn Pháp (Bon Appétit & Santé)" },
      { id: "g2", description: "Luyện phát âm chuẩn và phản xạ câu qua các bài tập tương tác" }
    ],
    vocabulary: [
      { id: "v-fr-403-1", word: "Bon appétit", translation: "Chúc ăn ngon miệng", phonetic: "bohn ah-pay-tee" },
      { id: "v-fr-403-2", word: "Santé", translation: "Cạn ly / Vì sức khỏe!", phonetic: "sahn-tay" },
      { id: "v-fr-403-3", word: "Faim", translation: "Đói bụng", phonetic: "fan" },
      { id: "v-fr-403-4", word: "Soif", translation: "Khát nước", phonetic: "swahf" },
      { id: "v-fr-403-5", word: "Repas", translation: "Bữa ăn", phonetic: "ruh-pah" }
    ],
    phrases: [
      { id: "p-fr-403-1", text: "Bon appétit à tous!", translation: "Chúc tất cả mọi người ngon miệng!" },
      { id: "p-fr-403-2", text: "Santé! À notre amitié!", translation: "Cạn ly! Vì tình bạn của chúng ta!" }
    ],
    activities: [
      {
        id: "act-fr-403-1",
        type: "multiple_choice",
        skill: "reading",
        question: "Người Pháp chúc nhau trước bữa ăn bằng câu gì?",
        options: ["Bon appétit!","Santé!","Au revoir!","Pardon!"],
        correctAnswer: "Bon appétit!"
      },
      {
        id: "act-fr-403-2",
        type: "fill_blank",
        skill: "writing",
        question: "Điền từ: 'Trước khi ăn nói: _____ appétit!'",
        prompt: "Điền từ: 'Trước khi ăn nói: _____ appétit!'",
        options: ["Bon","Santé","Merci","Pardon"],
        correctAnswer: "Bon"
      },
      {
        id: "act-fr-403-3",
        type: "multiple_choice",
        skill: "reading",
        question: "Dịch: 'Santé!'",
        options: ["Cạn ly / Nâng ly!","Cảm ơn","Tạm biệt","Ngon miệng"],
        correctAnswer: "Cạn ly / Nâng ly!"
      },
      {
        id: "act-fr-403-4",
        type: "match_pairs",
        skill: "reading",
        question: "Ghép các cặp từ vựng với nghĩa tiếng Việt tương ứng",
        pairs: [{"left":"Bon appétit","right":"Chúc ăn ngon miệng"},{"left":"Santé","right":"Cạn ly / Vì sức khỏe!"},{"left":"Faim","right":"Đói bụng"},{"left":"Soif","right":"Khát nước"}],
        correctAnswer: "all_matched"
      },
      {
        id: "act-fr-403-5",
        type: "audio_listen",
        skill: "listening",
        question: "Lắng nghe và chọn đáp án chính xác:",
        prompt: "Bon appétit",
        options: ["Bon appétit!","Santé!","Au revoir!","Pardon!"],
        correctAnswer: "Bon appétit!"
      }
    ]
  },
  {
    id: "lesson-fr-404",
    unitId: "unit-fr-4",
    title: "Tính Tiền Hóa Đơn (L'addition, s'il vous plaît)",
    description: "Thanh toán bằng Euro tại nhà hàng.",
    type: "standard",
    xp: 15,
    estimatedMinutes: 5,
    order: 4,
    status: "available",
    goals: [
      { id: "g1", description: "Nắm vững các từ vựng chủ đề Tính Tiền Hóa Đơn (L'addition, s'il vous plaît)" },
      { id: "g2", description: "Luyện phát âm chuẩn và phản xạ câu qua các bài tập tương tác" }
    ],
    vocabulary: [
      { id: "v-fr-404-1", word: "L'addition", translation: "Hóa đơn tính tiền", phonetic: "lah-dee-syohn" },
      { id: "v-fr-404-2", word: "Combien", translation: "Bao nhiêu", phonetic: "kohm-byan" },
      { id: "v-fr-404-3", word: "Euro", translation: "Đồng tiền Euro (€)", phonetic: "uh-roh" },
      { id: "v-fr-404-4", word: "Carte bancaire", translation: "Thẻ ngân hàng", phonetic: "kahrt bahn-kair" },
      { id: "v-fr-404-5", word: "Espèces", translation: "Tiền mặt", phonetic: "es-pes" }
    ],
    phrases: [
      { id: "p-fr-404-1", text: "L'addition, s'il vous plaît.", translation: "Làm ơn tính tiền giúp tôi." },
      { id: "p-fr-404-2", text: "C'est combien au total?", translation: "Tất cả hết bao nhiêu tiền vậy?" }
    ],
    activities: [
      {
        id: "act-fr-404-1",
        type: "multiple_choice",
        skill: "reading",
        question: "Câu nói chuẩn để xin hóa đơn tính tiền ở Pháp là gì?",
        options: ["L'addition, s'il vous plaît","La carte, s'il vous plaît","Santé!","Bonjour"],
        correctAnswer: "L'addition, s'il vous plaît"
      },
      {
        id: "act-fr-404-2",
        type: "fill_blank",
        skill: "writing",
        question: "Điền từ: 'L'_____, s'il vous plaît.' (hóa đơn)",
        prompt: "Điền từ: 'L'_____, s'il vous plaît.' (hóa đơn)",
        options: ["addition","euro","carte","menu"],
        correctAnswer: "addition"
      },
      {
        id: "act-fr-404-3",
        type: "multiple_choice",
        skill: "reading",
        question: "Dịch: 'Par carte bancaire'",
        options: ["Bằng thẻ ngân hàng","Bằng tiền mặt","Hết bao nhiêu tiền","Hóa đơn đây"],
        correctAnswer: "Bằng thẻ ngân hàng"
      },
      {
        id: "act-fr-404-4",
        type: "match_pairs",
        skill: "reading",
        question: "Ghép các cặp từ vựng với nghĩa tiếng Việt tương ứng",
        pairs: [{"left":"L'addition","right":"Hóa đơn tính tiền"},{"left":"Combien","right":"Bao nhiêu"},{"left":"Euro","right":"Đồng tiền Euro (€)"},{"left":"Carte bancaire","right":"Thẻ ngân hàng"}],
        correctAnswer: "all_matched"
      },
      {
        id: "act-fr-404-5",
        type: "audio_listen",
        skill: "listening",
        question: "Lắng nghe và chọn đáp án chính xác:",
        prompt: "L'addition",
        options: ["L'addition, s'il vous plaît","La carte, s'il vous plaît","Santé!","Bonjour"],
        correctAnswer: "L'addition, s'il vous plaît"
      }
    ]
  },
  {
    id: "lesson-fr-405",
    unitId: "unit-fr-4",
    title: "AI Practice: Gọi Món Tại Bistro Paris",
    description: "Thực hành gọi món bánh sừng bò, cà phê và xin hóa đơn cùng bác bồi bàn Pierre.",
    type: "audio_ai",
    xp: 25,
    estimatedMinutes: 5,
    order: 5,
    heroImage: images.mascotWelcome,
    status: "available",
    goals: [
      { id: "g1", description: "Luyện phản xạ giao tiếp thực tế với AI Teacher Camille" },
      { id: "g2", description: "Vận dụng từ vựng trọng tâm vào ngữ cảnh hội thoại tự nhiên" }
    ],
    vocabulary: [
      { id: "v-ai-fr-4-1", word: "Croissant", translation: "Bánh sừng bò" },
      { id: "v-ai-fr-4-2", word: "Café", translation: "Cà phê" },
      { id: "v-ai-fr-4-3", word: "L'addition", translation: "Tính tiền" },
      { id: "v-ai-fr-4-4", word: "Délicieux", translation: "Ngon tuyệt vời" },
      { id: "v-ai-fr-4-5", word: "S'il vous plaît", translation: "Làm ơn" }
    ],
    phrases: [],
    activities: [],
    aiTeacherPrompt: {
      scenario: "Quán ăn Bistro kiểu Pháp cổ điển tại khu Saint-Germain",
      systemPrompt: "You are Camille, a warm, human, and energetic French teacher. Speak mostly in English for clear guidance. Introduce French words slowly: say the word once, give the English translation, and invite the student to repeat after you. Keep every reply strictly to 1 or 2 conversational sentences with friendly contractions (I'm, let's, that's). Listen closely to the student, praise correct pronunciation, and gently model errors again: 'So close! Try saying —'. Stay strictly on lesson words: Croissant, Café, L'addition, Délicieux, S'il vous plaît. Never switch topics.",
      initialGreeting: "Bonjour Monsieur/Madame! Bienvenue au Bistro. Vous désirez commander?",
      targetVocabulary: ["Croissant","Café","L'addition","Délicieux","S'il vous plaît"],
      suggestedResponses: ["Un croissant et un café, s'il vous plaît.","C'est délicieux, merci!","L'addition, s'il vous plaît."],
      difficulty: "beginner"
    }
  },
  {
    id: "lesson-fr-501",
    unitId: "unit-fr-5",
    title: "Ở Đâu Vậy? (Où est...?)",
    description: "Hỏi đường và vị trí danh lam thắng cảnh ở Paris.",
    type: "standard",
    xp: 15,
    estimatedMinutes: 5,
    order: 1,
    status: "available",
    goals: [
      { id: "g1", description: "Nắm vững các từ vựng chủ đề Ở Đâu Vậy? (Où est...?)" },
      { id: "g2", description: "Luyện phát âm chuẩn và phản xạ câu qua các bài tập tương tác" }
    ],
    vocabulary: [
      { id: "v-fr-501-1", word: "Où est...?", translation: "Ở đâu vậy?", phonetic: "oo ay" },
      { id: "v-fr-501-2", word: "Ici / Là-bas", translation: "Ở đây / Ở đằng kia", phonetic: "ee-see / lah-bah" },
      { id: "v-fr-501-3", word: "À droite", translation: "Bên phải", phonetic: "ah drwaht" },
      { id: "v-fr-501-4", word: "À gauche", translation: "Bên trái", phonetic: "ah gohsh" },
      { id: "v-fr-501-5", word: "Tout droit", translation: "Đi thẳng", phonetic: "too drwah" }
    ],
    phrases: [
      { id: "p-fr-501-1", text: "Pardon, où est la Tour Eiffel?", translation: "Xin lỗi, tháp Eiffel ở đâu vậy?" },
      { id: "p-fr-501-2", text: "Allez tout droit, puis tournez à droite.", translation: "Đi thẳng, sau đó rẽ sang bên phải." }
    ],
    activities: [
      {
        id: "act-fr-501-1",
        type: "multiple_choice",
        skill: "reading",
        question: "'À droite' là hướng nào?",
        options: ["Bên phải","Bên trái","Đi thẳng","Đằng sau"],
        correctAnswer: "Bên phải"
      },
      {
        id: "act-fr-501-2",
        type: "fill_blank",
        skill: "writing",
        question: "Điền từ: 'Allez tout _____.' (đi thẳng)",
        prompt: "Điền từ: 'Allez tout _____.' (đi thẳng)",
        options: ["droit","gauche","droite","ici"],
        correctAnswer: "droit"
      },
      {
        id: "act-fr-501-3",
        type: "multiple_choice",
        skill: "reading",
        question: "Dịch: 'Où est la gare?'",
        options: ["Nhà ga ở đâu?","Sân bay ở đâu?","Bảo tàng ở đâu?","Khách sạn ở đâu?"],
        correctAnswer: "Nhà ga ở đâu?"
      },
      {
        id: "act-fr-501-4",
        type: "match_pairs",
        skill: "reading",
        question: "Ghép các cặp từ vựng với nghĩa tiếng Việt tương ứng",
        pairs: [{"left":"Où est...?","right":"Ở đâu vậy?"},{"left":"Ici / Là-bas","right":"Ở đây / Ở đằng kia"},{"left":"À droite","right":"Bên phải"},{"left":"À gauche","right":"Bên trái"}],
        correctAnswer: "all_matched"
      },
      {
        id: "act-fr-501-5",
        type: "audio_listen",
        skill: "listening",
        question: "Lắng nghe và chọn đáp án chính xác:",
        prompt: "Où est...?",
        options: ["Bên phải","Bên trái","Đi thẳng","Đằng sau"],
        correctAnswer: "Bên phải"
      }
    ]
  },
  {
    id: "lesson-fr-502",
    unitId: "unit-fr-5",
    title: "Đi Tàu Điện Ngầm Paris (Métro)",
    description: "Đi tàu điện Métro Paris, mua vé và tìm line tàu.",
    type: "standard",
    xp: 15,
    estimatedMinutes: 5,
    order: 2,
    status: "available",
    goals: [
      { id: "g1", description: "Nắm vững các từ vựng chủ đề Đi Tàu Điện Ngầm Paris (Métro)" },
      { id: "g2", description: "Luyện phát âm chuẩn và phản xạ câu qua các bài tập tương tác" }
    ],
    vocabulary: [
      { id: "v-fr-502-1", word: "Métro", translation: "Tàu điện ngầm Métro", phonetic: "may-troh" },
      { id: "v-fr-502-2", word: "Station", translation: "Trạm / Ga tàu điện", phonetic: "stah-syohn" },
      { id: "v-fr-502-3", word: "Bus", translation: "Xe buýt", phonetic: "boos" },
      { id: "v-fr-502-4", word: "Ticket", translation: "Vé tàu xe", phonetic: "tee-kay" },
      { id: "v-fr-502-5", word: "Ligne", translation: "Tuyến / Line tàu", phonetic: "leen" }
    ],
    phrases: [
      { id: "p-fr-502-1", text: "Où est la station de métro la plus proche?", translation: "Trạm tàu điện ngầm gần nhất ở đâu ạ?" },
      { id: "p-fr-502-2", text: "Deux tickets de métro, s'il vous plaît.", translation: "Cho tôi hai vé tàu điện ngầm, làm ơn." }
    ],
    activities: [
      {
        id: "act-fr-502-1",
        type: "multiple_choice",
        skill: "reading",
        question: "'Métro' nghĩa là gì?",
        options: ["Tàu điện ngầm","Xe buýt","Máy bay","Tàu hỏa"],
        correctAnswer: "Tàu điện ngầm"
      },
      {
        id: "act-fr-502-2",
        type: "fill_blank",
        skill: "writing",
        question: "Điền từ: 'Où est la _____ de métro?' (trạm tàu)",
        prompt: "Điền từ: 'Où est la _____ de métro?' (trạm tàu)",
        options: ["station","ticket","bus","ligne"],
        correctAnswer: "station"
      },
      {
        id: "act-fr-502-3",
        type: "multiple_choice",
        skill: "reading",
        question: "Dịch: 'Un ticket de métro'",
        options: ["Một vé tàu điện ngầm","Một chuyến xe buýt","Một vé máy bay","Một trạm xe"],
        correctAnswer: "Một vé tàu điện ngầm"
      },
      {
        id: "act-fr-502-4",
        type: "match_pairs",
        skill: "reading",
        question: "Ghép các cặp từ vựng với nghĩa tiếng Việt tương ứng",
        pairs: [{"left":"Métro","right":"Tàu điện ngầm Métro"},{"left":"Station","right":"Trạm / Ga tàu điện"},{"left":"Bus","right":"Xe buýt"},{"left":"Ticket","right":"Vé tàu xe"}],
        correctAnswer: "all_matched"
      },
      {
        id: "act-fr-502-5",
        type: "audio_listen",
        skill: "listening",
        question: "Lắng nghe và chọn đáp án chính xác:",
        prompt: "Métro",
        options: ["Tàu điện ngầm","Xe buýt","Máy bay","Tàu hỏa"],
        correctAnswer: "Tàu điện ngầm"
      }
    ]
  },
  {
    id: "lesson-fr-503",
    unitId: "unit-fr-5",
    title: "Tại Khách Sạn (À l'Hôtel)",
    description: "Nhận phòng, chìa khóa và mật khẩu wifi khách sạn.",
    type: "standard",
    xp: 15,
    estimatedMinutes: 5,
    order: 3,
    status: "available",
    goals: [
      { id: "g1", description: "Nắm vững các từ vựng chủ đề Tại Khách Sạn (À l'Hôtel)" },
      { id: "g2", description: "Luyện phát âm chuẩn và phản xạ câu qua các bài tập tương tác" }
    ],
    vocabulary: [
      { id: "v-fr-503-1", word: "Hôtel", translation: "Khách sạn", phonetic: "oh-tel" },
      { id: "v-fr-503-2", word: "Réservation", translation: "Đặt trước", phonetic: "ray-zair-vah-syohn" },
      { id: "v-fr-503-3", word: "Chambre", translation: "Phòng ngủ", phonetic: "shahmbr" },
      { id: "v-fr-503-4", word: "Clé", translation: "Chìa khóa", phonetic: "klay" },
      { id: "v-fr-503-5", word: "WiFi", translation: "Mạng internet wifi", phonetic: "wee-fee" }
    ],
    phrases: [
      { id: "p-fr-503-1", text: "J'ai une réservation au nom de Alex.", translation: "Tôi có đặt phòng trước dưới tên Alex." },
      { id: "p-fr-503-2", text: "Quel est le mot de passe du WiFi?", translation: "Mật khẩu WiFi là gì thế ạ?" }
    ],
    activities: [
      {
        id: "act-fr-503-1",
        type: "multiple_choice",
        skill: "reading",
        question: "'La clé de la chambre' nghĩa là gì?",
        options: ["Chìa khóa phòng","Số phòng","Thẻ khách sạn","Mật khẩu"],
        correctAnswer: "Chìa khóa phòng"
      },
      {
        id: "act-fr-503-2",
        type: "fill_blank",
        skill: "writing",
        question: "Điền từ: 'Voici la _____ de votre chambre.' (chìa khóa)",
        prompt: "Điền từ: 'Voici la _____ de votre chambre.' (chìa khóa)",
        options: ["clé","chambre","hôtel","wifi"],
        correctAnswer: "clé"
      },
      {
        id: "act-fr-503-3",
        type: "multiple_choice",
        skill: "reading",
        question: "Dịch: 'J'ai une réservation'",
        options: ["Tôi có đặt phòng trước","Tôi muốn trả phòng","Tôi muốn xem phòng","Phòng này bao nhiêu tiền"],
        correctAnswer: "Tôi có đặt phòng trước"
      },
      {
        id: "act-fr-503-4",
        type: "match_pairs",
        skill: "reading",
        question: "Ghép các cặp từ vựng với nghĩa tiếng Việt tương ứng",
        pairs: [{"left":"Hôtel","right":"Khách sạn"},{"left":"Réservation","right":"Đặt trước"},{"left":"Chambre","right":"Phòng ngủ"},{"left":"Clé","right":"Chìa khóa"}],
        correctAnswer: "all_matched"
      },
      {
        id: "act-fr-503-5",
        type: "audio_listen",
        skill: "listening",
        question: "Lắng nghe và chọn đáp án chính xác:",
        prompt: "Hôtel",
        options: ["Chìa khóa phòng","Số phòng","Thẻ khách sạn","Mật khẩu"],
        correctAnswer: "Chìa khóa phòng"
      }
    ]
  },
  {
    id: "lesson-fr-504",
    unitId: "unit-fr-5",
    title: "Sân Bay Charles de Gaulle (Aéroport)",
    description: "Thủ tục lên máy bay, hành lý và hộ chiếu.",
    type: "standard",
    xp: 15,
    estimatedMinutes: 5,
    order: 4,
    status: "available",
    goals: [
      { id: "g1", description: "Nắm vững các từ vựng chủ đề Sân Bay Charles de Gaulle (Aéroport)" },
      { id: "g2", description: "Luyện phát âm chuẩn và phản xạ câu qua các bài tập tương tác" }
    ],
    vocabulary: [
      { id: "v-fr-504-1", word: "Aéroport", translation: "Sân bay", phonetic: "ah-ay-roh-pohr" },
      { id: "v-fr-504-2", word: "Avion", translation: "Máy bay", phonetic: "ah-vyohn" },
      { id: "v-fr-504-3", word: "Bagages", translation: "Hành lý", phonetic: "bah-gahzh" },
      { id: "v-fr-504-4", word: "Passeport", translation: "Hộ chiếu", phonetic: "pahs-pohr" },
      { id: "v-fr-504-5", word: "Vol", translation: "Chuyến bay", phonetic: "vohl" }
    ],
    phrases: [
      { id: "p-fr-504-1", text: "Votre passeport, s'il vous plaît.", translation: "Làm ơn cho tôi xem hộ chiếu." },
      { id: "p-fr-504-2", text: "Je vais à l'aéroport Charles de Gaulle.", translation: "Tôi đi đến sân bay Charles de Gaulle." }
    ],
    activities: [
      {
        id: "act-fr-504-1",
        type: "multiple_choice",
        skill: "reading",
        question: "'Passeport' là giấy tờ gì?",
        options: ["Hộ chiếu","Vé máy bay","Hành lý","Ví tiền"],
        correctAnswer: "Hộ chiếu"
      },
      {
        id: "act-fr-504-2",
        type: "fill_blank",
        skill: "writing",
        question: "Điền từ: 'À l'_____ Charles de Gaulle.' (sân bay)",
        prompt: "Điền từ: 'À l'_____ Charles de Gaulle.' (sân bay)",
        options: ["aéroport","avion","bagages","passeport"],
        correctAnswer: "aéroport"
      },
      {
        id: "act-fr-504-3",
        type: "multiple_choice",
        skill: "reading",
        question: "Dịch: 'Mes bagages'",
        options: ["Hành lý của tôi","Hộ chiếu của tôi","Vé máy bay của tôi","Túi xách của tôi"],
        correctAnswer: "Hành lý của tôi"
      },
      {
        id: "act-fr-504-4",
        type: "match_pairs",
        skill: "reading",
        question: "Ghép các cặp từ vựng với nghĩa tiếng Việt tương ứng",
        pairs: [{"left":"Aéroport","right":"Sân bay"},{"left":"Avion","right":"Máy bay"},{"left":"Bagages","right":"Hành lý"},{"left":"Passeport","right":"Hộ chiếu"}],
        correctAnswer: "all_matched"
      },
      {
        id: "act-fr-504-5",
        type: "audio_listen",
        skill: "listening",
        question: "Lắng nghe và chọn đáp án chính xác:",
        prompt: "Aéroport",
        options: ["Hộ chiếu","Vé máy bay","Hành lý","Ví tiền"],
        correctAnswer: "Hộ chiếu"
      }
    ]
  },
  {
    id: "lesson-fr-505",
    unitId: "unit-fr-5",
    title: "AI Practice: Hỏi Đường Đi Tháp Eiffel & Bảo Tàng Louvre",
    description: "Thực hành hỏi nhân viên du lịch Paris Lucas cách đi tới viện bảo tàng Louvre nổi tiếng.",
    type: "audio_ai",
    xp: 25,
    estimatedMinutes: 5,
    order: 5,
    heroImage: images.mascotWelcome,
    status: "available",
    goals: [
      { id: "g1", description: "Luyện phản xạ giao tiếp thực tế với AI Teacher Camille" },
      { id: "g2", description: "Vận dụng từ vựng trọng tâm vào ngữ cảnh hội thoại tự nhiên" }
    ],
    vocabulary: [
      { id: "v-ai-fr-5-1", word: "Métro", translation: "Tàu điện ngầm Métro" },
      { id: "v-ai-fr-5-2", word: "Où est", translation: "Ở đâu" },
      { id: "v-ai-fr-5-3", word: "Tour Eiffel", translation: "Tháp Eiffel" },
      { id: "v-ai-fr-5-4", word: "Louvre", translation: "Viện bảo tàng Louvre" },
      { id: "v-ai-fr-5-5", word: "Tout droit", translation: "Đi thẳng" }
    ],
    phrases: [],
    activities: [],
    aiTeacherPrompt: {
      scenario: "Quầy hỗ trợ du lịch bên ngoài ga Châtelet - Les Halles Paris",
      systemPrompt: "You are Camille, a warm, human, and energetic French teacher. Speak mostly in English for clear guidance. Introduce French words slowly: say the word once, give the English translation, and invite the student to repeat after you. Keep every reply strictly to 1 or 2 conversational sentences with friendly contractions (I'm, let's, that's). Listen closely to the student, praise correct pronunciation, and gently model errors again: 'So close! Try saying —'. Stay strictly on lesson words: Métro, Où est, Tour Eiffel, Louvre, Tout droit. Never switch topics.",
      initialGreeting: "Bonjour! Vous cherchez votre chemin dans Paris? Je peux vous aider!",
      targetVocabulary: ["Métro","Où est","Tour Eiffel","Louvre","Tout droit"],
      suggestedResponses: ["Pardon, où est le Musée du Louvre?","Quel métro je dois prendre?","Merci beaucoup, bonne journée!"],
      difficulty: "beginner"
    }
  },
  {
    id: "lesson-fr-601",
    unitId: "unit-fr-6",
    title: "Mua Sắm Tại Boutique Paris (Faire les magasins)",
    description: "Hỏi giá và mua sắm thời trang phong cách Pháp.",
    type: "standard",
    xp: 15,
    estimatedMinutes: 5,
    order: 1,
    status: "available",
    goals: [
      { id: "g1", description: "Nắm vững các từ vựng chủ đề Mua Sắm Tại Boutique Paris (Faire les magasins)" },
      { id: "g2", description: "Luyện phát âm chuẩn và phản xạ câu qua các bài tập tương tác" }
    ],
    vocabulary: [
      { id: "v-fr-601-1", word: "Magasin", translation: "Cửa hàng / Tiệm mua sắm", phonetic: "mah-gah-zan" },
      { id: "v-fr-601-2", word: "Combien ça coûte?", translation: "Cái này giá bao nhiêu?", phonetic: "kohm-byan sah koot" },
      { id: "v-fr-601-3", word: "Cher", translation: "Đắt tiền", phonetic: "shair" },
      { id: "v-fr-601-4", word: "Je prends ceci", translation: "Tôi lấy cái này", phonetic: "zhuh prahn suh-see" },
      { id: "v-fr-601-5", word: "Taille", translation: "Kích cỡ / Size", phonetic: "tahy" }
    ],
    phrases: [
      { id: "p-fr-601-1", text: "C'est combien, s'il vous plaît?", translation: "Cái này giá bao nhiêu vậy ạ?" },
      { id: "p-fr-601-2", text: "Je peux essayer cette veste?", translation: "Tôi có thể thử chiếc áo khoác này được không?" }
    ],
    activities: [
      {
        id: "act-fr-601-1",
        type: "multiple_choice",
        skill: "reading",
        question: "'C'est combien?' nghĩa là gì?",
        options: ["Bao nhiêu tiền?","Ở đâu vậy?","Món gì đây?","Ai thế?"],
        correctAnswer: "Bao nhiêu tiền?"
      },
      {
        id: "act-fr-601-2",
        type: "fill_blank",
        skill: "writing",
        question: "Điền từ: 'Combien ça _____?' (giá bao nhiêu)",
        prompt: "Điền từ: 'Combien ça _____?' (giá bao nhiêu)",
        options: ["coûte","cher","magasin","taille"],
        correctAnswer: "coûte"
      },
      {
        id: "act-fr-601-3",
        type: "multiple_choice",
        skill: "reading",
        question: "Dịch: 'C'est trop cher'",
        options: ["Đắt tiền quá","Rẻ quá","Đẹp quá","Ngon quá"],
        correctAnswer: "Đắt tiền quá"
      },
      {
        id: "act-fr-601-4",
        type: "match_pairs",
        skill: "reading",
        question: "Ghép các cặp từ vựng với nghĩa tiếng Việt tương ứng",
        pairs: [{"left":"Magasin","right":"Cửa hàng / Tiệm mua sắm"},{"left":"Combien ça coûte?","right":"Cái này giá bao nhiêu?"},{"left":"Cher","right":"Đắt tiền"},{"left":"Je prends ceci","right":"Tôi lấy cái này"}],
        correctAnswer: "all_matched"
      },
      {
        id: "act-fr-601-5",
        type: "audio_listen",
        skill: "listening",
        question: "Lắng nghe và chọn đáp án chính xác:",
        prompt: "Magasin",
        options: ["Bao nhiêu tiền?","Ở đâu vậy?","Món gì đây?","Ai thế?"],
        correctAnswer: "Bao nhiêu tiền?"
      }
    ]
  },
  {
    id: "lesson-fr-602",
    unitId: "unit-fr-6",
    title: "Hẹn Hò Cuối Tuần (Rendez-vous le week-end)",
    description: "Lên kế hoạch gặp bạn bè dạo phố Paris.",
    type: "standard",
    xp: 15,
    estimatedMinutes: 5,
    order: 2,
    status: "available",
    goals: [
      { id: "g1", description: "Nắm vững các từ vựng chủ đề Hẹn Hò Cuối Tuần (Rendez-vous le week-end)" },
      { id: "g2", description: "Luyện phát âm chuẩn và phản xạ câu qua các bài tập tương tác" }
    ],
    vocabulary: [
      { id: "v-fr-602-1", word: "Ensemble", translation: "Cùng nhau", phonetic: "ahn-sahmbl" },
      { id: "v-fr-602-2", word: "Aller", translation: "Đi", phonetic: "ah-lay" },
      { id: "v-fr-602-3", word: "Week-end", translation: "Cuối tuần", phonetic: "week-end" },
      { id: "v-fr-602-4", word: "Tu es libre?", translation: "Bạn có rảnh không?", phonetic: "too ay leebr" },
      { id: "v-fr-602-5", word: "Bonne idée!", translation: "Ý kiến tuyệt vời!", phonetic: "bohn ee-day" }
    ],
    phrases: [
      { id: "p-fr-602-1", text: "On va au café ensemble ce week-end?", translation: "Tụi mình cùng đi cà phê cuối tuần này nhé?" },
      { id: "p-fr-602-2", text: "Oui, c'est une très bonne idée!", translation: "Được chứ, đó là một ý kiến rất hay!" }
    ],
    activities: [
      {
        id: "act-fr-602-1",
        type: "multiple_choice",
        skill: "reading",
        question: "'Bonne idée!' nghĩa là gì?",
        options: ["Ý kiến tuyệt vời!","Không được đâu","Tạm biệt nhé","Cảm ơn bạn"],
        correctAnswer: "Ý kiến tuyệt vời!"
      },
      {
        id: "act-fr-602-2",
        type: "fill_blank",
        skill: "writing",
        question: "Điền từ: 'On y va _____!' (cùng nhau)",
        prompt: "Điền từ: 'On y va _____!' (cùng nhau)",
        options: ["ensemble","week-end","libre","idée"],
        correctAnswer: "ensemble"
      },
      {
        id: "act-fr-602-3",
        type: "multiple_choice",
        skill: "reading",
        question: "Dịch: 'Aller ensemble'",
        options: ["Đi cùng nhau","Đi một mình","Đi về nhà","Đi ngủ"],
        correctAnswer: "Đi cùng nhau"
      },
      {
        id: "act-fr-602-4",
        type: "match_pairs",
        skill: "reading",
        question: "Ghép các cặp từ vựng với nghĩa tiếng Việt tương ứng",
        pairs: [{"left":"Ensemble","right":"Cùng nhau"},{"left":"Aller","right":"Đi"},{"left":"Week-end","right":"Cuối tuần"},{"left":"Tu es libre?","right":"Bạn có rảnh không?"}],
        correctAnswer: "all_matched"
      },
      {
        id: "act-fr-602-5",
        type: "audio_listen",
        skill: "listening",
        question: "Lắng nghe và chọn đáp án chính xác:",
        prompt: "Ensemble",
        options: ["Ý kiến tuyệt vời!","Không được đâu","Tạm biệt nhé","Cảm ơn bạn"],
        correctAnswer: "Ý kiến tuyệt vời!"
      }
    ]
  },
  {
    id: "lesson-fr-603",
    unitId: "unit-fr-6",
    title: "Nghề Nghiệp & Công Việc (Métier & Travail)",
    description: "Nói về nghề nghiệp của mình bằng tiếng Pháp.",
    type: "standard",
    xp: 15,
    estimatedMinutes: 5,
    order: 3,
    status: "available",
    goals: [
      { id: "g1", description: "Nắm vững các từ vựng chủ đề Nghề Nghiệp & Công Việc (Métier & Travail)" },
      { id: "g2", description: "Luyện phát âm chuẩn và phản xạ câu qua các bài tập tương tác" }
    ],
    vocabulary: [
      { id: "v-fr-603-1", word: "Travail / Métier", translation: "Công việc / Nghề nghiệp", phonetic: "trah-vahy / may-tyay" },
      { id: "v-fr-603-2", word: "Professeur", translation: "Thầy cô giáo", phonetic: "proh-feh-suhr" },
      { id: "v-fr-603-3", word: "Étudiant", translation: "Sinh viên", phonetic: "ay-too-dyahn" },
      { id: "v-fr-603-4", word: "Médecin", translation: "Bác sĩ", phonetic: "mayd-san" },
      { id: "v-fr-603-5", word: "Entreprise", translation: "Công ty", phonetic: "ahn-truh-preez" }
    ],
    phrases: [
      { id: "p-fr-603-1", text: "Quel est votre métier?", translation: "Nghề nghiệp của bạn là gì?" },
      { id: "p-fr-603-2", text: "Je suis étudiant, j'apprends le français.", translation: "Tôi là sinh viên, tôi đang học tiếng Pháp." }
    ],
    activities: [
      {
        id: "act-fr-603-1",
        type: "multiple_choice",
        skill: "reading",
        question: "'Étudiant' nghĩa là gì?",
        options: ["Sinh viên","Giáo viên","Bác sĩ","Họa sĩ"],
        correctAnswer: "Sinh viên"
      },
      {
        id: "act-fr-603-2",
        type: "fill_blank",
        skill: "writing",
        question: "Điền từ: 'Je suis _____.' (sinh viên)",
        prompt: "Điền từ: 'Je suis _____.' (sinh viên)",
        options: ["étudiant","travail","entreprise","métier"],
        correctAnswer: "étudiant"
      },
      {
        id: "act-fr-603-3",
        type: "multiple_choice",
        skill: "reading",
        question: "Dịch: 'Je suis professeur'",
        options: ["Tôi là giáo viên","Tôi là sinh viên","Tôi là bác sĩ","Tôi đi làm"],
        correctAnswer: "Tôi là giáo viên"
      },
      {
        id: "act-fr-603-4",
        type: "match_pairs",
        skill: "reading",
        question: "Ghép các cặp từ vựng với nghĩa tiếng Việt tương ứng",
        pairs: [{"left":"Travail / Métier","right":"Công việc / Nghề nghiệp"},{"left":"Professeur","right":"Thầy cô giáo"},{"left":"Étudiant","right":"Sinh viên"},{"left":"Médecin","right":"Bác sĩ"}],
        correctAnswer: "all_matched"
      },
      {
        id: "act-fr-603-5",
        type: "audio_listen",
        skill: "listening",
        question: "Lắng nghe và chọn đáp án chính xác:",
        prompt: "Travail / Métier",
        options: ["Sinh viên","Giáo viên","Bác sĩ","Họa sĩ"],
        correctAnswer: "Sinh viên"
      }
    ]
  },
  {
    id: "lesson-fr-604",
    unitId: "unit-fr-6",
    title: "Tình Huống Khẩn Cấp (Au secours!)",
    description: "Kêu cứu và tìm bệnh viện, gọi cảnh sát.",
    type: "standard",
    xp: 15,
    estimatedMinutes: 5,
    order: 4,
    status: "available",
    goals: [
      { id: "g1", description: "Nắm vững các từ vựng chủ đề Tình Huống Khẩn Cấp (Au secours!)" },
      { id: "g2", description: "Luyện phát âm chuẩn và phản xạ câu qua các bài tập tương tác" }
    ],
    vocabulary: [
      { id: "v-fr-604-1", word: "Au secours!", translation: "Cứu tôi với! / Giúp tôi với!", phonetic: "oh suh-koor" },
      { id: "v-fr-604-2", word: "Hôpital", translation: "Bệnh viện", phonetic: "oh-pee-tahl" },
      { id: "v-fr-604-3", word: "Police", translation: "Cảnh sát", phonetic: "poh-lees" },
      { id: "v-fr-604-4", word: "Malade", translation: "Bị ốm / Bị đau", phonetic: "mah-lahd" },
      { id: "v-fr-604-5", word: "Pharmacie", translation: "Hiệu thuốc tây", phonetic: "fahr-mah-see" }
    ],
    phrases: [
      { id: "p-fr-604-1", text: "Au secours! Aidez-moi, s'il vous plaît.", translation: "Cứu tôi với! Làm ơn giúp tôi." },
      { id: "p-fr-604-2", text: "Où est la pharmacie la plus proche?", translation: "Hiệu thuốc gần nhất ở đâu vậy?" }
    ],
    activities: [
      {
        id: "act-fr-604-1",
        type: "multiple_choice",
        skill: "reading",
        question: "Khi cần kêu cứu khẩn cấp trong tiếng Pháp, bạn hô to:",
        options: ["Au secours!","Merci!","Bonjour!","Bon appétit!"],
        correctAnswer: "Au secours!"
      },
      {
        id: "act-fr-604-2",
        type: "fill_blank",
        skill: "writing",
        question: "Điền từ: 'Au _____! Aidez-moi.' (cứu tôi)",
        prompt: "Điền từ: 'Au _____! Aidez-moi.' (cứu tôi)",
        options: ["secours","hôpital","police","pharmacie"],
        correctAnswer: "secours"
      },
      {
        id: "act-fr-604-3",
        type: "multiple_choice",
        skill: "reading",
        question: "Dịch: 'Où est l'hôpital?'",
        options: ["Bệnh viện ở đâu?","Đồn cảnh sát ở đâu?","Hiệu thuốc ở đâu?","Trường học ở đâu?"],
        correctAnswer: "Bệnh viện ở đâu?"
      },
      {
        id: "act-fr-604-4",
        type: "match_pairs",
        skill: "reading",
        question: "Ghép các cặp từ vựng với nghĩa tiếng Việt tương ứng",
        pairs: [{"left":"Au secours!","right":"Cứu tôi với! / Giúp tôi với!"},{"left":"Hôpital","right":"Bệnh viện"},{"left":"Police","right":"Cảnh sát"},{"left":"Malade","right":"Bị ốm / Bị đau"}],
        correctAnswer: "all_matched"
      },
      {
        id: "act-fr-604-5",
        type: "audio_listen",
        skill: "listening",
        question: "Lắng nghe và chọn đáp án chính xác:",
        prompt: "Au secours!",
        options: ["Au secours!","Merci!","Bonjour!","Bon appétit!"],
        correctAnswer: "Au secours!"
      }
    ]
  },
  {
    id: "lesson-fr-605",
    unitId: "unit-fr-6",
    title: "AI Practice: Trò Chuyện Tự Do Tốt Nghiệp Khóa Pháp",
    description: "Trò chuyện tự do cùng cô giáo Manon chúc mừng bạn tốt nghiệp trọn vẹn 6 Unit tiếng Pháp!",
    type: "audio_ai",
    xp: 25,
    estimatedMinutes: 5,
    order: 5,
    heroImage: images.mascotWelcome,
    status: "available",
    goals: [
      { id: "g1", description: "Luyện phản xạ giao tiếp thực tế với AI Teacher Camille" },
      { id: "g2", description: "Vận dụng từ vựng trọng tâm vào ngữ cảnh hội thoại tự nhiên" }
    ],
    vocabulary: [
      { id: "v-ai-fr-6-1", word: "Félicitations", translation: "Xin chúc mừng!" },
      { id: "v-ai-fr-6-2", word: "Paris", translation: "Paris" },
      { id: "v-ai-fr-6-3", word: "France", translation: "Pháp" },
      { id: "v-ai-fr-6-4", word: "J'aime", translation: "Tôi thích" },
      { id: "v-ai-fr-6-5", word: "Merci", translation: "Cảm ơn" }
    ],
    phrases: [],
    activities: [],
    aiTeacherPrompt: {
      scenario: "Dưới bóng tháp Eiffel bên dòng sông Seine lấp lánh",
      systemPrompt: "You are Camille, a warm, human, and energetic French teacher. Speak mostly in English for clear guidance. Introduce French words slowly: say the word once, give the English translation, and invite the student to repeat after you. Keep every reply strictly to 1 or 2 conversational sentences with friendly contractions (I'm, let's, that's). Listen closely to the student, praise correct pronunciation, and gently model errors again: 'So close! Try saying —'. Stay strictly on lesson words: Félicitations, Paris, France, J'aime, Merci. Never switch topics.",
      initialGreeting: "Félicitations! Bạn đã hoàn thành xuất sắc 6 Unit tiếng Pháp. Hôm nay hãy cùng trò chuyện tự do thật thoải mái nhé!",
      targetVocabulary: ["Félicitations","Paris","France","J'aime","Merci"],
      suggestedResponses: ["Merci beaucoup Manon!","J'adore Paris et la cuisine française.","Le français est une langue magnifique!"],
      difficulty: "beginner"
    }
  },
  {
    id: "lesson-fr-701",
    unitId: "unit-fr-7",
    title: "Qu'as-tu fait hier ? (Le Passé Composé)",
    description: "Học thì quá khứ kép (Passé composé) để nói về sự kiện đã diễn ra.",
    type: "standard",
    xp: 15,
    estimatedMinutes: 5,
    order: 1,
    status: "available",
    goals: [
      { id: "g1", description: "Nắm vững các từ vựng chủ đề Qu'as-tu fait hier ? (Le Passé Composé)" },
      { id: "g2", description: "Luyện phát âm chuẩn và phản xạ câu qua các bài tập tương tác" }
    ],
    vocabulary: [
      { id: "v-fr-701-1", word: "Hier", translation: "Hôm qua", phonetic: "yehr" },
      { id: "v-fr-701-2", word: "Je suis allé(e)", translation: "Tôi đã đi (động từ aller)", phonetic: "zhuh swee zah-lay" },
      { id: "v-fr-701-3", word: "J'ai mangé", translation: "Tôi đã ăn (động từ manger)", phonetic: "zhay mahn-zhay" },
      { id: "v-fr-701-4", word: "J'ai vu", translation: "Tôi đã thấy / xem (động từ voir)", phonetic: "zhay voo" },
      { id: "v-fr-701-5", word: "J'ai acheté", translation: "Tôi đã mua (động từ acheter)", phonetic: "zhay ah-shuh-tay" }
    ],
    phrases: [
      { id: "p-fr-701-1", text: "Hier, je suis allé au parc et j'ai mangé un croissant.", translation: "Hôm qua, tôi đã đến công viên và ăn một chiếc bánh sừng bò." },
      { id: "p-fr-701-2", text: "Qu'as-tu fait le week-end dernier ?", translation: "Bạn đã làm gì vào cuối tuần trước?" }
    ],
    activities: [
      {
        id: "act-fr-701-1",
        type: "multiple_choice",
        skill: "reading",
        question: "'Hier' có nghĩa là gì trong tiếng Pháp?",
        options: ["Hôm qua","Hôm nay","Ngày mai","Tuần sau"],
        correctAnswer: "Hôm qua"
      },
      {
        id: "act-fr-701-2",
        type: "fill_blank",
        skill: "writing",
        question: "Điền từ: 'Hier, je suis _____ à Paris.' (đã đi)",
        prompt: "Điền từ: 'Hier, je suis _____ à Paris.' (đã đi)",
        options: ["allé","vais","vas","aller"],
        correctAnswer: "allé"
      },
      {
        id: "act-fr-701-3",
        type: "multiple_choice",
        skill: "reading",
        question: "Dịch: 'J'ai mangé une pomme'",
        options: ["Tôi đã ăn một quả táo","Tôi đi siêu thị","Tôi uống cà phê","Tôi đang ngủ"],
        correctAnswer: "Tôi đã ăn một quả táo"
      },
      {
        id: "act-fr-701-4",
        type: "match_pairs",
        skill: "reading",
        question: "Ghép các cặp từ vựng với nghĩa tiếng Việt tương ứng",
        pairs: [{"left":"Hier","right":"Hôm qua"},{"left":"Je suis allé(e)","right":"Tôi đã đi (động từ aller)"},{"left":"J'ai mangé","right":"Tôi đã ăn (động từ manger)"},{"left":"J'ai vu","right":"Tôi đã thấy / xem (động từ voir)"}],
        correctAnswer: "all_matched"
      },
      {
        id: "act-fr-701-5",
        type: "audio_listen",
        skill: "listening",
        question: "Lắng nghe và chọn đáp án chính xác:",
        prompt: "Hier",
        options: ["Hôm qua","Hôm nay","Ngày mai","Tuần sau"],
        correctAnswer: "Hôm qua"
      }
    ]
  },
  {
    id: "lesson-fr-702",
    unitId: "unit-fr-7",
    title: "Mon Enfance & Mon Village (L'imparfait)",
    description: "Kể về thời thơ ấu và thói quen quá khứ với thì Imparfait.",
    type: "standard",
    xp: 15,
    estimatedMinutes: 5,
    order: 2,
    status: "available",
    goals: [
      { id: "g1", description: "Nắm vững các từ vựng chủ đề Mon Enfance & Mon Village (L'imparfait)" },
      { id: "g2", description: "Luyện phát âm chuẩn và phản xạ câu qua các bài tập tương tác" }
    ],
    vocabulary: [
      { id: "v-fr-702-1", word: "L'enfance", translation: "Thời thơ ấu / Tuổi thơ", phonetic: "lahn-fahns" },
      { id: "v-fr-702-2", word: "J'ai grandi", translation: "Tôi đã lớn lên", phonetic: "zhay grahn-dee" },
      { id: "v-fr-702-3", word: "Le village", translation: "Ngôi làng / Làng quê", phonetic: "luh vee-lahzh" },
      { id: "v-fr-702-4", word: "Autrefois", translation: "Ngày trước / Thuở xưa", phonetic: "oh-truh-fwah" },
      { id: "v-fr-702-5", word: "Le souvenir", translation: "Kỷ niệm / Ký ức", phonetic: "luh soov-neer" }
    ],
    phrases: [
      { id: "p-fr-702-1", text: "J'ai grandi dans un petit village tranquille en Bretagne.", translation: "Tôi đã lớn lên ở một ngôi làng nhỏ yên bình tại Bretagne." },
      { id: "p-fr-702-2", text: "Quand j'étais enfant, je faisais du vélo tous les jours.", translation: "Khi còn là một đứa trẻ, tôi đạp xe mỗi ngày." }
    ],
    activities: [
      {
        id: "act-fr-702-1",
        type: "multiple_choice",
        skill: "reading",
        question: "'L'enfance' có nghĩa là gì?",
        options: ["Thời thơ ấu / Tuổi thơ","Công việc","Trường học","Kỳ nghỉ"],
        correctAnswer: "Thời thơ ấu / Tuổi thơ"
      },
      {
        id: "act-fr-702-2",
        type: "fill_blank",
        skill: "writing",
        question: "Điền từ: 'J'ai _____ à Lyon.' (đã lớn lên)",
        prompt: "Điền từ: 'J'ai _____ à Lyon.' (đã lớn lên)",
        options: ["grandi","souvenir","village","enfance"],
        correctAnswer: "grandi"
      },
      {
        id: "act-fr-702-3",
        type: "multiple_choice",
        skill: "reading",
        question: "Dịch: 'Un doux souvenir'",
        options: ["Một kỷ niệm ngọt ngào","Một bài học khó","Một món quà đắt","Một người bạn mới"],
        correctAnswer: "Một kỷ niệm ngọt ngào"
      },
      {
        id: "act-fr-702-4",
        type: "match_pairs",
        skill: "reading",
        question: "Ghép các cặp từ vựng với nghĩa tiếng Việt tương ứng",
        pairs: [{"left":"L'enfance","right":"Thời thơ ấu / Tuổi thơ"},{"left":"J'ai grandi","right":"Tôi đã lớn lên"},{"left":"Le village","right":"Ngôi làng / Làng quê"},{"left":"Autrefois","right":"Ngày trước / Thuở xưa"}],
        correctAnswer: "all_matched"
      },
      {
        id: "act-fr-702-5",
        type: "audio_listen",
        skill: "listening",
        question: "Lắng nghe và chọn đáp án chính xác:",
        prompt: "L'enfance",
        options: ["Thời thơ ấu / Tuổi thơ","Công việc","Trường học","Kỳ nghỉ"],
        correctAnswer: "Thời thơ ấu / Tuổi thơ"
      }
    ]
  },
  {
    id: "lesson-fr-703",
    unitId: "unit-fr-7",
    title: "Un Voyage Inoubliable (Chuyến đi đáng nhớ)",
    description: "Kể lại một kỳ nghỉ hoặc chuyến du lịch không thể nào quên.",
    type: "standard",
    xp: 15,
    estimatedMinutes: 5,
    order: 3,
    status: "available",
    goals: [
      { id: "g1", description: "Nắm vững các từ vựng chủ đề Un Voyage Inoubliable (Chuyến đi đáng nhớ)" },
      { id: "g2", description: "Luyện phát âm chuẩn và phản xạ câu qua các bài tập tương tác" }
    ],
    vocabulary: [
      { id: "v-fr-703-1", word: "Le voyage", translation: "Chuyến du lịch", phonetic: "luh vwah-yahzh" },
      { id: "v-fr-703-2", word: "Inoubliable", translation: "Không thể nào quên", phonetic: "ee-noob-lee-ah-bluh" },
      { id: "v-fr-703-3", word: "J'ai visité", translation: "Tôi đã ghé thăm", phonetic: "zhay vee-zee-tay" },
      { id: "v-fr-703-4", word: "J'ai rencontré", translation: "Tôi đã gặp gỡ", phonetic: "zhay rahn-kohn-tray" },
      { id: "v-fr-703-5", word: "L'hôtel", translation: "Khách sạn", phonetic: "loh-tel" }
    ],
    phrases: [
      { id: "p-fr-703-1", text: "L'été dernier, j'ai visité Nice. C'était inoubliable !", translation: "Mùa hè năm ngoái, tôi đã thăm Nice. Thật không thể nào quên!" },
      { id: "p-fr-703-2", text: "Nous avons logé dans un hôtel au bord de la mer.", translation: "Chúng tôi đã ở một khách sạn ven bờ biển." }
    ],
    activities: [
      {
        id: "act-fr-703-1",
        type: "multiple_choice",
        skill: "reading",
        question: "'Inoubliable' có nghĩa là gì?",
        options: ["Không thể nào quên","Nhàm chán","Nguy hiểm","Đắt đỏ"],
        correctAnswer: "Không thể nào quên"
      },
      {
        id: "act-fr-703-2",
        type: "fill_blank",
        skill: "writing",
        question: "Điền từ: 'C'était un voyage _____.' (không thể nào quên)",
        prompt: "Điền từ: 'C'était un voyage _____.' (không thể nào quên)",
        options: ["inoubliable","hier","souvenir","hôtel"],
        correctAnswer: "inoubliable"
      },
      {
        id: "act-fr-703-3",
        type: "multiple_choice",
        skill: "reading",
        question: "Dịch: 'J'ai visité le musée'",
        options: ["Tôi đã thăm bảo tàng","Tôi đi mua sắm","Tôi đến trường","Tôi ăn tối"],
        correctAnswer: "Tôi đã thăm bảo tàng"
      },
      {
        id: "act-fr-703-4",
        type: "match_pairs",
        skill: "reading",
        question: "Ghép các cặp từ vựng với nghĩa tiếng Việt tương ứng",
        pairs: [{"left":"Le voyage","right":"Chuyến du lịch"},{"left":"Inoubliable","right":"Không thể nào quên"},{"left":"J'ai visité","right":"Tôi đã ghé thăm"},{"left":"J'ai rencontré","right":"Tôi đã gặp gỡ"}],
        correctAnswer: "all_matched"
      },
      {
        id: "act-fr-703-5",
        type: "audio_listen",
        skill: "listening",
        question: "Lắng nghe và chọn đáp án chính xác:",
        prompt: "Le voyage",
        options: ["Không thể nào quên","Nhàm chán","Nguy hiểm","Đắt đỏ"],
        correctAnswer: "Không thể nào quên"
      }
    ]
  },
  {
    id: "lesson-fr-704",
    unitId: "unit-fr-7",
    title: "Raconter une Anecdote (Kể chuyện vui)",
    description: "Liên kết các sự kiện trong quá khứ bằng từ nối d'abord, ensuite, enfin.",
    type: "standard",
    xp: 15,
    estimatedMinutes: 5,
    order: 4,
    status: "available",
    goals: [
      { id: "g1", description: "Nắm vững các từ vựng chủ đề Raconter une Anecdote (Kể chuyện vui)" },
      { id: "g2", description: "Luyện phát âm chuẩn và phản xạ câu qua các bài tập tương tác" }
    ],
    vocabulary: [
      { id: "v-fr-704-1", word: "D'abord", translation: "Đầu tiên / Trước hết", phonetic: "dah-bor" },
      { id: "v-fr-704-2", word: "Ensuite", translation: "Sau đó / Tiếp theo", phonetic: "ahn-sweet" },
      { id: "v-fr-704-3", word: "Soudain", translation: "Đột nhiên", phonetic: "soo-dahn" },
      { id: "v-fr-704-4", word: "Enfin", translation: "Cuối cùng", phonetic: "ahn-fahn" },
      { id: "v-fr-704-5", word: "L'histoire", translation: "Câu chuyện", phonetic: "lees-twahr" }
    ],
    phrases: [
      { id: "p-fr-704-1", text: "D'abord, nous avons pris le train, ensuite nous sommes arrivés.", translation: "Đầu tiên, chúng tôi đi tàu hỏa, sau đó chúng tôi đã đến nơi." },
      { id: "p-fr-704-2", text: "Soudain, il a commencé à pleuvoir fort !", translation: "Đột nhiên trời bắt đầu mưa to!" }
    ],
    activities: [
      {
        id: "act-fr-704-1",
        type: "multiple_choice",
        skill: "reading",
        question: "Từ nối nào mang nghĩa 'Đột nhiên'?",
        options: ["Soudain","D'abord","Enfin","Ensuite"],
        correctAnswer: "Soudain"
      },
      {
        id: "act-fr-704-2",
        type: "fill_blank",
        skill: "writing",
        question: "Điền từ: '_____, nous avons gagné le match.' (cuối cùng)",
        prompt: "Điền từ: '_____, nous avons gagné le match.' (cuối cùng)",
        options: ["Enfin","Soudain","Hier","Autrefois"],
        correctAnswer: "Enfin"
      },
      {
        id: "act-fr-704-3",
        type: "multiple_choice",
        skill: "reading",
        question: "Dịch: 'D'abord et ensuite'",
        options: ["Trước tiên và sau đó","Hôm qua và hôm nay","Nhanh và chậm","Vui và buồn"],
        correctAnswer: "Trước tiên và sau đó"
      },
      {
        id: "act-fr-704-4",
        type: "match_pairs",
        skill: "reading",
        question: "Ghép các cặp từ vựng với nghĩa tiếng Việt tương ứng",
        pairs: [{"left":"D'abord","right":"Đầu tiên / Trước hết"},{"left":"Ensuite","right":"Sau đó / Tiếp theo"},{"left":"Soudain","right":"Đột nhiên"},{"left":"Enfin","right":"Cuối cùng"}],
        correctAnswer: "all_matched"
      },
      {
        id: "act-fr-704-5",
        type: "audio_listen",
        skill: "listening",
        question: "Lắng nghe và chọn đáp án chính xác:",
        prompt: "D'abord",
        options: ["Soudain","D'abord","Enfin","Ensuite"],
        correctAnswer: "Soudain"
      }
    ]
  },
  {
    id: "lesson-fr-705",
    unitId: "unit-fr-7",
    title: "AI Practice: Kể Lại Kỷ Niệm Quá Khứ Cùng Thomas",
    description: "Luyện phản xạ thì quá khứ Passé composé và kể kỷ niệm với thầy giáo Thomas.",
    type: "audio_ai",
    xp: 25,
    estimatedMinutes: 5,
    order: 5,
    heroImage: images.mascotWelcome,
    status: "available",
    goals: [
      { id: "g1", description: "Luyện phản xạ giao tiếp thực tế với AI Teacher Camille" },
      { id: "g2", description: "Vận dụng từ vựng trọng tâm vào ngữ cảnh hội thoại tự nhiên" }
    ],
    vocabulary: [
      { id: "v-ai-fr-7-1", word: "Hier", translation: "Hôm qua" },
      { id: "v-ai-fr-7-2", word: "Je suis allé", translation: "Tôi đã đi" },
      { id: "v-ai-fr-7-3", word: "J'ai mangé", translation: "Tôi đã ăn" },
      { id: "v-ai-fr-7-4", word: "Inoubliable", translation: "Không thể nào quên" },
      { id: "v-ai-fr-7-5", word: "C'était bien", translation: "Nó rất hay" }
    ],
    phrases: [],
    activities: [],
    aiTeacherPrompt: {
      scenario: "Một buổi trò chuyện thân mật bên bờ sông Seine tại Paris",
      systemPrompt: "You are Camille, a warm, human, and energetic French teacher. Speak mostly in English for clear guidance. Introduce French words slowly: say the word once, give the English translation, and invite the student to repeat after you. Keep every reply strictly to 1 or 2 conversational sentences with friendly contractions (I'm, let's, that's). Listen closely to the student, praise correct pronunciation, and gently model errors again: 'So close! Try saying —'. Stay strictly on lesson words: Hier, Je suis allé, J'ai mangé, Inoubliable, C'était bien. Never switch topics.",
      initialGreeting: "Bonjour ! Raconte-moi : qu'as-tu fait hier ou pendant tes dernières vacances ?",
      targetVocabulary: ["Hier","Je suis allé","J'ai mangé","Inoubliable","C'était bien"],
      suggestedResponses: ["Hier, je suis allé au café avec des amis.","Pendant mes vacances, j'ai visité une très belle ville.","C'était un voyage inoubliable !"],
      difficulty: "intermediate"
    }
  },
  {
    id: "lesson-fr-801",
    unitId: "unit-fr-8",
    title: "Où avez-vous mal ? (Các triệu chứng)",
    description: "Miêu tả các cơn đau và triệu chứng sức khỏe bằng 'Avoir mal à'.",
    type: "standard",
    xp: 15,
    estimatedMinutes: 5,
    order: 1,
    status: "available",
    goals: [
      { id: "g1", description: "Nắm vững các từ vựng chủ đề Où avez-vous mal ? (Các triệu chứng)" },
      { id: "g2", description: "Luyện phát âm chuẩn và phản xạ câu qua các bài tập tương tác" }
    ],
    vocabulary: [
      { id: "v-fr-801-1", word: "La santé", translation: "Sức khỏe", phonetic: "lah sahn-tay" },
      { id: "v-fr-801-2", word: "J'ai mal à la tête", translation: "Tôi bị đau đầu", phonetic: "zhay mahl ah lah tet" },
      { id: "v-fr-801-3", word: "La fièvre", translation: "Cơn sốt", phonetic: "lah fyev-ruh" },
      { id: "v-fr-801-4", word: "La toux", translation: "Cơn ho", phonetic: "lah too" },
      { id: "v-fr-801-5", word: "Fatigué(e)", translation: "Mệt mỏi", phonetic: "fah-tee-gay" }
    ],
    phrases: [
      { id: "p-fr-801-1", text: "J'ai mal à la gorge et j'ai de la fièvre depuis hier.", translation: "Tôi bị đau họng và sốt từ ngày hôm qua." },
      { id: "p-fr-801-2", text: "Vous avez l'air très fatigué aujourd'hui.", translation: "Hôm nay trông bạn có vẻ rất mệt mỏi." }
    ],
    activities: [
      {
        id: "act-fr-801-1",
        type: "multiple_choice",
        skill: "reading",
        question: "'J'ai mal à la tête' nghĩa là gì?",
        options: ["Tôi bị đau đầu","Tôi bị đau chân","Tôi bị đau bụng","Tôi bị đau mắt"],
        correctAnswer: "Tôi bị đau đầu"
      },
      {
        id: "act-fr-801-2",
        type: "fill_blank",
        skill: "writing",
        question: "Điền từ: 'J'ai _____ à l'estomac.' (đau)",
        prompt: "Điền từ: 'J'ai _____ à l'estomac.' (đau)",
        options: ["mal","fièvre","santé","toux"],
        correctAnswer: "mal"
      },
      {
        id: "act-fr-801-3",
        type: "multiple_choice",
        skill: "reading",
        question: "Dịch: 'De la fièvre'",
        options: ["Cơn sốt","Cơn đau","Cơn đói","Cơn khát"],
        correctAnswer: "Cơn sốt"
      },
      {
        id: "act-fr-801-4",
        type: "match_pairs",
        skill: "reading",
        question: "Ghép các cặp từ vựng với nghĩa tiếng Việt tương ứng",
        pairs: [{"left":"La santé","right":"Sức khỏe"},{"left":"J'ai mal à la tête","right":"Tôi bị đau đầu"},{"left":"La fièvre","right":"Cơn sốt"},{"left":"La toux","right":"Cơn ho"}],
        correctAnswer: "all_matched"
      },
      {
        id: "act-fr-801-5",
        type: "audio_listen",
        skill: "listening",
        question: "Lắng nghe và chọn đáp án chính xác:",
        prompt: "La santé",
        options: ["Tôi bị đau đầu","Tôi bị đau chân","Tôi bị đau bụng","Tôi bị đau mắt"],
        correctAnswer: "Tôi bị đau đầu"
      }
    ]
  },
  {
    id: "lesson-fr-802",
    unitId: "unit-fr-8",
    title: "Chez le Médecin (Khám bệnh)",
    description: "Giao tiếp với bác sĩ tại phòng khám và nhận chẩn đoán.",
    type: "standard",
    xp: 15,
    estimatedMinutes: 5,
    order: 2,
    status: "available",
    goals: [
      { id: "g1", description: "Nắm vững các từ vựng chủ đề Chez le Médecin (Khám bệnh)" },
      { id: "g2", description: "Luyện phát âm chuẩn và phản xạ câu qua các bài tập tương tác" }
    ],
    vocabulary: [
      { id: "v-fr-802-1", word: "Le médecin", translation: "Bác sĩ", phonetic: "luh mayd-sahn" },
      { id: "v-fr-802-2", word: "Le rendez-vous", translation: "Cuộc hẹn", phonetic: "luh rahn-day-voo" },
      { id: "v-fr-802-3", word: "L'ordonnance", translation: "Đơn thuốc", phonetic: "lor-doh-nahns" },
      { id: "v-fr-802-4", word: "Examiner", translation: "Khám bệnh", phonetic: "eg-zah-mee-nay" },
      { id: "v-fr-802-5", word: "Se reposer", translation: "Nghỉ ngơi", phonetic: "suh ruh-poh-zay" }
    ],
    phrases: [
      { id: "p-fr-802-1", text: "J'ai un rendez-vous chez le médecin à 15 heures.", translation: "Tôi có một cuộc hẹn khám bác sĩ lúc 15 giờ." },
      { id: "p-fr-802-2", text: "Vous devez vous reposer et boire beaucoup d'eau.", translation: "Bạn cần phải nghỉ ngơi và uống nhiều nước." }
    ],
    activities: [
      {
        id: "act-fr-802-1",
        type: "multiple_choice",
        skill: "reading",
        question: "'L'ordonnance' là giấy tờ gì?",
        options: ["Đơn thuốc của bác sĩ","Hóa đơn mua hàng","Vé máy bay","Thẻ khám bệnh"],
        correctAnswer: "Đơn thuốc của bác sĩ"
      },
      {
        id: "act-fr-802-2",
        type: "fill_blank",
        skill: "writing",
        question: "Điền từ: 'Vous devez vous _____ pendant trois jours.' (nghỉ ngơi)",
        prompt: "Điền từ: 'Vous devez vous _____ pendant trois jours.' (nghỉ ngơi)",
        options: ["reposer","médecin","fièvre","ordonnance"],
        correctAnswer: "reposer"
      },
      {
        id: "act-fr-802-3",
        type: "multiple_choice",
        skill: "reading",
        question: "Dịch: 'Prendre un rendez-vous'",
        options: ["Đặt lịch hẹn","Uống thuốc","Đi làm việc","Mua vé xe"],
        correctAnswer: "Đặt lịch hẹn"
      },
      {
        id: "act-fr-802-4",
        type: "match_pairs",
        skill: "reading",
        question: "Ghép các cặp từ vựng với nghĩa tiếng Việt tương ứng",
        pairs: [{"left":"Le médecin","right":"Bác sĩ"},{"left":"Le rendez-vous","right":"Cuộc hẹn"},{"left":"L'ordonnance","right":"Đơn thuốc"},{"left":"Examiner","right":"Khám bệnh"}],
        correctAnswer: "all_matched"
      },
      {
        id: "act-fr-802-5",
        type: "audio_listen",
        skill: "listening",
        question: "Lắng nghe và chọn đáp án chính xác:",
        prompt: "Le médecin",
        options: ["Đơn thuốc của bác sĩ","Hóa đơn mua hàng","Vé máy bay","Thẻ khám bệnh"],
        correctAnswer: "Đơn thuốc của bác sĩ"
      }
    ]
  },
  {
    id: "lesson-fr-803",
    unitId: "unit-fr-8",
    title: "À la Pharmacie (Mua thuốc)",
    description: "Hỏi mua thuốc và nghe hướng dẫn liều dùng tại hiệu thuốc.",
    type: "standard",
    xp: 15,
    estimatedMinutes: 5,
    order: 3,
    status: "available",
    goals: [
      { id: "g1", description: "Nắm vững các từ vựng chủ đề À la Pharmacie (Mua thuốc)" },
      { id: "g2", description: "Luyện phát âm chuẩn và phản xạ câu qua các bài tập tương tác" }
    ],
    vocabulary: [
      { id: "v-fr-803-1", word: "La pharmacie", translation: "Hiệu thuốc", phonetic: "lah fahr-mah-see" },
      { id: "v-fr-803-2", word: "Le médicament", translation: "Thuốc uống", phonetic: "luh may-dee-kah-mahn" },
      { id: "v-fr-803-3", word: "Le comprimé", translation: "Viên thuốc nén", phonetic: "luh kohm-pree-may" },
      { id: "v-fr-803-4", word: "Le sirop", translation: "Siro ho", phonetic: "luh see-roh" },
      { id: "v-fr-803-5", word: "Chaque jour", translation: "Mỗi ngày", phonetic: "shahk zhoor" }
    ],
    phrases: [
      { id: "p-fr-803-1", text: "Prenez deux comprimés après chaque repas.", translation: "Hãy uống hai viên nén sau mỗi bữa ăn." },
      { id: "p-fr-803-2", text: "Avez-vous quelque chose contre le rhume ?", translation: "Dược sĩ có thuốc gì trị cảm lạnh không?" }
    ],
    activities: [
      {
        id: "act-fr-803-1",
        type: "multiple_choice",
        skill: "reading",
        question: "'Le médicament' nghĩa là gì?",
        options: ["Thuốc uống","Thức ăn","Nước ép","Khẩu trang"],
        correctAnswer: "Thuốc uống"
      },
      {
        id: "act-fr-803-2",
        type: "fill_blank",
        skill: "writing",
        question: "Điền từ: 'Je vais à la _____ pour acheter des pansements.' (hiệu thuốc)",
        prompt: "Điền từ: 'Je vais à la _____ pour acheter des pansements.' (hiệu thuốc)",
        options: ["pharmacie","santé","toux","médecin"],
        correctAnswer: "pharmacie"
      },
      {
        id: "act-fr-803-3",
        type: "multiple_choice",
        skill: "reading",
        question: "Dịch: 'Deux comprimés par jour'",
        options: ["Hai viên nén mỗi ngày","Ba ngày một lần","Uống trước khi ngủ","Hai chai siro"],
        correctAnswer: "Hai viên nén mỗi ngày"
      },
      {
        id: "act-fr-803-4",
        type: "match_pairs",
        skill: "reading",
        question: "Ghép các cặp từ vựng với nghĩa tiếng Việt tương ứng",
        pairs: [{"left":"La pharmacie","right":"Hiệu thuốc"},{"left":"Le médicament","right":"Thuốc uống"},{"left":"Le comprimé","right":"Viên thuốc nén"},{"left":"Le sirop","right":"Siro ho"}],
        correctAnswer: "all_matched"
      },
      {
        id: "act-fr-803-5",
        type: "audio_listen",
        skill: "listening",
        question: "Lắng nghe và chọn đáp án chính xác:",
        prompt: "La pharmacie",
        options: ["Thuốc uống","Thức ăn","Nước ép","Khẩu trang"],
        correctAnswer: "Thuốc uống"
      }
    ]
  },
  {
    id: "lesson-fr-804",
    unitId: "unit-fr-8",
    title: "Mode de Vie Sain (Lối sống lành mạnh)",
    description: "Khuyên nhủ về thể dục, ăn uống dinh dưỡng và giấc ngủ bằng 'Il faut'.",
    type: "standard",
    xp: 15,
    estimatedMinutes: 5,
    order: 4,
    status: "available",
    goals: [
      { id: "g1", description: "Nắm vững các từ vựng chủ đề Mode de Vie Sain (Lối sống lành mạnh)" },
      { id: "g2", description: "Luyện phát âm chuẩn và phản xạ câu qua các bài tập tương tác" }
    ],
    vocabulary: [
      { id: "v-fr-804-1", word: "Faire du sport", translation: "Tập luyện thể thao", phonetic: "fehr doo spor" },
      { id: "v-fr-804-2", word: "Dormir", translation: "Ngủ", phonetic: "dor-meer" },
      { id: "v-fr-804-3", word: "Équilibré", translation: "Cân bằng / Hợp lý", phonetic: "ay-kee-lee-bray" },
      { id: "v-fr-804-4", word: "Il faut", translation: "Cần phải / Nên", phonetic: "eel foh" },
      { id: "v-fr-804-5", word: "La forme", translation: "Thể trạng phong độ", phonetic: "lah form" }
    ],
    phrases: [
      { id: "p-fr-804-1", text: "Il faut dormir au moins huit heures par nuit.", translation: "Cần phải ngủ ít nhất 8 tiếng mỗi đêm." },
      { id: "p-fr-804-2", text: "Pour être en forme, mangez sainement et marchez.", translation: "Để có phong độ tốt, hãy ăn uống lành mạnh và đi bộ." }
    ],
    activities: [
      {
        id: "act-fr-804-1",
        type: "multiple_choice",
        skill: "reading",
        question: "'Il faut' diễn tả điều gì?",
        options: ["Sự cần thiết / Lời khuyên","Hành động đã qua","Sự từ chối","Tên món ăn"],
        correctAnswer: "Sự cần thiết / Lời khuyên"
      },
      {
        id: "act-fr-804-2",
        type: "fill_blank",
        skill: "writing",
        question: "Điền từ: 'Pour rester en forme, il faut _____ du sport.' (tập)",
        prompt: "Điền từ: 'Pour rester en forme, il faut _____ du sport.' (tập)",
        options: ["faire","dormir","mal","sirop"],
        correctAnswer: "faire"
      },
      {
        id: "act-fr-804-3",
        type: "multiple_choice",
        skill: "reading",
        question: "Dịch: 'Être en forme'",
        options: ["Khỏe mạnh / Phong độ tốt","Bị ốm nặng","Cảm thấy đói","Đang buồn ngủ"],
        correctAnswer: "Khỏe mạnh / Phong độ tốt"
      },
      {
        id: "act-fr-804-4",
        type: "match_pairs",
        skill: "reading",
        question: "Ghép các cặp từ vựng với nghĩa tiếng Việt tương ứng",
        pairs: [{"left":"Faire du sport","right":"Tập luyện thể thao"},{"left":"Dormir","right":"Ngủ"},{"left":"Équilibré","right":"Cân bằng / Hợp lý"},{"left":"Il faut","right":"Cần phải / Nên"}],
        correctAnswer: "all_matched"
      },
      {
        id: "act-fr-804-5",
        type: "audio_listen",
        skill: "listening",
        question: "Lắng nghe và chọn đáp án chính xác:",
        prompt: "Faire du sport",
        options: ["Sự cần thiết / Lời khuyên","Hành động đã qua","Sự từ chối","Tên món ăn"],
        correctAnswer: "Sự cần thiết / Lời khuyên"
      }
    ]
  },
  {
    id: "lesson-fr-805",
    unitId: "unit-fr-8",
    title: "AI Practice: Tư Vấn Sức Khỏe Tại Phòng Khám Cùng Bác Sĩ Laurent",
    description: "Thực hành đối thoại bác sĩ - bệnh nhân bằng tiếng Pháp cùng bác sĩ Laurent.",
    type: "audio_ai",
    xp: 25,
    estimatedMinutes: 5,
    order: 5,
    heroImage: images.mascotWelcome,
    status: "available",
    goals: [
      { id: "g1", description: "Luyện phản xạ giao tiếp thực tế với AI Teacher Camille" },
      { id: "g2", description: "Vận dụng từ vựng trọng tâm vào ngữ cảnh hội thoại tự nhiên" }
    ],
    vocabulary: [
      { id: "v-ai-fr-8-1", word: "J'ai mal", translation: "Tôi bị đau" },
      { id: "v-ai-fr-8-2", word: "La tête", translation: "Đầu" },
      { id: "v-ai-fr-8-3", word: "La gorge", translation: "Cổ họng" },
      { id: "v-ai-fr-8-4", word: "La fièvre", translation: "Cơn sốt" },
      { id: "v-ai-fr-8-5", word: "Se reposer", translation: "Nghỉ ngơi" }
    ],
    phrases: [],
    activities: [],
    aiTeacherPrompt: {
      scenario: "Phòng khám tư nhân ấm cúng ở trung tâm quận 6 Paris",
      systemPrompt: "You are Camille, a warm, human, and energetic French teacher. Speak mostly in English for clear guidance. Introduce French words slowly: say the word once, give the English translation, and invite the student to repeat after you. Keep every reply strictly to 1 or 2 conversational sentences with friendly contractions (I'm, let's, that's). Listen closely to the student, praise correct pronunciation, and gently model errors again: 'So close! Try saying —'. Stay strictly on lesson words: J'ai mal, La tête, La gorge, La fièvre, Se reposer. Never switch topics.",
      initialGreeting: "Bonjour ! Entrez et asseyez-vous. Dites-moi, qu'est-ce qui ne va pas aujourd'hui ? Où avez-vous mal ?",
      targetVocabulary: ["J'ai mal","La tête","La gorge","La fièvre","Se reposer"],
      suggestedResponses: ["Bonjour docteur, j'ai très mal à la tête et à la gorge.","J'ai aussi un peu de fièvre depuis hier soir.","Dois-je prendre des médicaments ?"],
      difficulty: "intermediate"
    }
  },
  {
    id: "lesson-fr-901",
    unitId: "unit-fr-9",
    title: "Mon Travail au Quotidien (Công việc văn phòng)",
    description: "Mô tả công việc hàng ngày, đồng nghiệp và trách nhiệm tại công sở.",
    type: "standard",
    xp: 15,
    estimatedMinutes: 5,
    order: 1,
    status: "available",
    goals: [
      { id: "g1", description: "Nắm vững các từ vựng chủ đề Mon Travail au Quotidien (Công việc văn phòng)" },
      { id: "g2", description: "Luyện phát âm chuẩn và phản xạ câu qua các bài tập tương tác" }
    ],
    vocabulary: [
      { id: "v-fr-901-1", word: "Le bureau", translation: "Văn phòng / Bàn làm việc", phonetic: "luh byoo-roh" },
      { id: "v-fr-901-2", word: "Le collègue", translation: "Đồng nghiệp", phonetic: "luh koh-leg" },
      { id: "v-fr-901-3", word: "La réunion", translation: "Cuộc họp", phonetic: "lah ray-oo-nyohn" },
      { id: "v-fr-901-4", word: "Le projet", translation: "Dự án", phonetic: "luh proh-zheh" },
      { id: "v-fr-901-5", word: "Le chef", translation: "Sếp / Trưởng phòng", phonetic: "luh shef" }
    ],
    phrases: [
      { id: "p-fr-901-1", text: "Nous avons une réunion d'équipe tous les lundis matin.", translation: "Chúng tôi có cuộc họp nhóm vào mỗi sáng thứ Hai." },
      { id: "p-fr-901-2", text: "Je travaille sur un nouveau projet passionnant.", translation: "Tôi đang làm việc trong một dự án mới rất thú vị." }
    ],
    activities: [
      {
        id: "act-fr-901-1",
        type: "multiple_choice",
        skill: "reading",
        question: "'Le collègue' là ai?",
        options: ["Đồng nghiệp","Khách hàng","Thầy giáo","Hàng xóm"],
        correctAnswer: "Đồng nghiệp"
      },
      {
        id: "act-fr-901-2",
        type: "fill_blank",
        skill: "writing",
        question: "Điền từ: 'Je parle avec mon _____.' (đồng nghiệp)",
        prompt: "Điền từ: 'Je parle avec mon _____.' (đồng nghiệp)",
        options: ["collègue","projet","bureau","réunion"],
        correctAnswer: "collègue"
      },
      {
        id: "act-fr-901-3",
        type: "multiple_choice",
        skill: "reading",
        question: "Dịch: 'La réunion commence à 10h'",
        options: ["Cuộc họp bắt đầu lúc 10 giờ","Văn phòng đóng cửa lúc 10h","Bữa trưa lúc 10h","Tôi về nhà lúc 10h"],
        correctAnswer: "Cuộc họp bắt đầu lúc 10 giờ"
      },
      {
        id: "act-fr-901-4",
        type: "match_pairs",
        skill: "reading",
        question: "Ghép các cặp từ vựng với nghĩa tiếng Việt tương ứng",
        pairs: [{"left":"Le bureau","right":"Văn phòng / Bàn làm việc"},{"left":"Le collègue","right":"Đồng nghiệp"},{"left":"La réunion","right":"Cuộc họp"},{"left":"Le projet","right":"Dự án"}],
        correctAnswer: "all_matched"
      },
      {
        id: "act-fr-901-5",
        type: "audio_listen",
        skill: "listening",
        question: "Lắng nghe và chọn đáp án chính xác:",
        prompt: "Le bureau",
        options: ["Đồng nghiệp","Khách hàng","Thầy giáo","Hàng xóm"],
        correctAnswer: "Đồng nghiệp"
      }
    ]
  },
  {
    id: "lesson-fr-902",
    unitId: "unit-fr-9",
    title: "Écrire un Courriel Professionnel (Viết email)",
    description: "Học các công thức mở đầu và kết thúc thư tín công việc trang trọng.",
    type: "standard",
    xp: 15,
    estimatedMinutes: 5,
    order: 2,
    status: "available",
    goals: [
      { id: "g1", description: "Nắm vững các từ vựng chủ đề Écrire un Courriel Professionnel (Viết email)" },
      { id: "g2", description: "Luyện phát âm chuẩn và phản xạ câu qua các bài tập tương tác" }
    ],
    vocabulary: [
      { id: "v-fr-902-1", word: "Le courriel", translation: "Thư điện tử / Email", phonetic: "luh koor-yel" },
      { id: "v-fr-902-2", word: "Madame, Monsieur", translation: "Kính gửi quý ông/bà", phonetic: "mah-dahm muh-syuh" },
      { id: "v-fr-902-3", word: "Cordialement", translation: "Trân trọng (cuối thư)", phonetic: "kor-dyahl-mahn" },
      { id: "v-fr-902-4", word: "En pièce jointe", translation: "Đính kèm theo thư", phonetic: "ahn pyes zhwant" },
      { id: "v-fr-902-5", word: "Confirmer", translation: "Xác nhận", phonetic: "kohn-feer-may" }
    ],
    phrases: [
      { id: "p-fr-902-1", text: "Veuillez trouver le rapport en pièce jointe.", translation: "Xin vui lòng xem báo cáo đính kèm." },
      { id: "p-fr-902-2", text: "Je vous remercie pour votre réponse rapide.", translation: "Tôi xin cảm ơn phản hồi nhanh chóng của bạn." }
    ],
    activities: [
      {
        id: "act-fr-902-1",
        type: "multiple_choice",
        skill: "reading",
        question: "Từ kết thư trang trọng phổ biến nhất trong tiếng Pháp là gì?",
        options: ["Cordialement","Bonjour","Merci","Salut"],
        correctAnswer: "Cordialement"
      },
      {
        id: "act-fr-902-2",
        type: "fill_blank",
        skill: "writing",
        question: "Điền từ: 'Veuillez _____ votre présence.' (xác nhận)",
        prompt: "Điền từ: 'Veuillez _____ votre présence.' (xác nhận)",
        options: ["confirmer","courriel","bureau","pièce"],
        correctAnswer: "confirmer"
      },
      {
        id: "act-fr-902-3",
        type: "multiple_choice",
        skill: "reading",
        question: "Dịch: 'En pièce jointe'",
        options: ["Tệp đính kèm","Chữ ký","Tiêu đề thư","Hộp thư rác"],
        correctAnswer: "Tệp đính kèm"
      },
      {
        id: "act-fr-902-4",
        type: "match_pairs",
        skill: "reading",
        question: "Ghép các cặp từ vựng với nghĩa tiếng Việt tương ứng",
        pairs: [{"left":"Le courriel","right":"Thư điện tử / Email"},{"left":"Madame, Monsieur","right":"Kính gửi quý ông/bà"},{"left":"Cordialement","right":"Trân trọng (cuối thư)"},{"left":"En pièce jointe","right":"Đính kèm theo thư"}],
        correctAnswer: "all_matched"
      },
      {
        id: "act-fr-902-5",
        type: "audio_listen",
        skill: "listening",
        question: "Lắng nghe và chọn đáp án chính xác:",
        prompt: "Le courriel",
        options: ["Cordialement","Bonjour","Merci","Salut"],
        correctAnswer: "Cordialement"
      }
    ]
  },
  {
    id: "lesson-fr-903",
    unitId: "unit-fr-9",
    title: "L'Entretien d'Embauche (Phỏng vấn xin việc)",
    description: "Giới thiệu điểm mạnh, kỹ năng và kinh nghiệm bản thân khi ứng tuyển.",
    type: "standard",
    xp: 15,
    estimatedMinutes: 5,
    order: 3,
    status: "available",
    goals: [
      { id: "g1", description: "Nắm vững các từ vựng chủ đề L'Entretien d'Embauche (Phỏng vấn xin việc)" },
      { id: "g2", description: "Luyện phát âm chuẩn và phản xạ câu qua các bài tập tương tác" }
    ],
    vocabulary: [
      { id: "v-fr-903-1", word: "L'entretien", translation: "Buổi phỏng vấn", phonetic: "lahn-truh-tyen" },
      { id: "v-fr-903-2", word: "Le CV", translation: "Sơ yếu lý lịch / CV", phonetic: "luh say-vay" },
      { id: "v-fr-903-3", word: "L'expérience", translation: "Kinh nghiệm làm việc", phonetic: "lek-spay-ryahns" },
      { id: "v-fr-903-4", word: "La compétence", translation: "Kỹ năng chuyên môn", phonetic: "lah kohm-pay-tahns" },
      { id: "v-fr-903-5", word: "Motivé(e)", translation: "Có động lực / Nhiệt huyết", phonetic: "moh-tee-vay" }
    ],
    phrases: [
      { id: "p-fr-903-1", text: "J'ai trois ans d'expérience dans le domaine du marketing.", translation: "Tôi có 3 năm kinh nghiệm trong lĩnh vực tiếp thị." },
      { id: "p-fr-903-2", text: "Je suis une personne dynamique et très motivée.", translation: "Tôi là một người năng động và rất nhiệt huyết." }
    ],
    activities: [
      {
        id: "act-fr-903-1",
        type: "multiple_choice",
        skill: "reading",
        question: "'L'expérience' nghĩa là gì?",
        options: ["Kinh nghiệm","Bằng cấp","Lương bổng","Nơi ở"],
        correctAnswer: "Kinh nghiệm"
      },
      {
        id: "act-fr-903-2",
        type: "fill_blank",
        skill: "writing",
        question: "Điền từ: 'J'ai un _____ d'embauche demain.' (buổi phỏng vấn)",
        prompt: "Điền từ: 'J'ai un _____ d'embauche demain.' (buổi phỏng vấn)",
        options: ["entretien","CV","projet","bureau"],
        correctAnswer: "entretien"
      },
      {
        id: "act-fr-903-3",
        type: "multiple_choice",
        skill: "reading",
        question: "Dịch: 'Je suis très motivé'",
        options: ["Tôi rất có động lực / nhiệt huyết","Tôi rất mệt mỏi","Tôi đến muộn","Tôi chưa sẵn sàng"],
        correctAnswer: "Tôi rất có động lực / nhiệt huyết"
      },
      {
        id: "act-fr-903-4",
        type: "match_pairs",
        skill: "reading",
        question: "Ghép các cặp từ vựng với nghĩa tiếng Việt tương ứng",
        pairs: [{"left":"L'entretien","right":"Buổi phỏng vấn"},{"left":"Le CV","right":"Sơ yếu lý lịch / CV"},{"left":"L'expérience","right":"Kinh nghiệm làm việc"},{"left":"La compétence","right":"Kỹ năng chuyên môn"}],
        correctAnswer: "all_matched"
      },
      {
        id: "act-fr-903-5",
        type: "audio_listen",
        skill: "listening",
        question: "Lắng nghe và chọn đáp án chính xác:",
        prompt: "L'entretien",
        options: ["Kinh nghiệm","Bằng cấp","Lương bổng","Nơi ở"],
        correctAnswer: "Kinh nghiệm"
      }
    ]
  },
  {
    id: "lesson-fr-904",
    unitId: "unit-fr-9",
    title: "Négocier & Organiser (Tổ chức & Thảo luận)",
    description: "Thảo luận thời gian, dời lịch hẹn và phân công công việc hiệu quả.",
    type: "standard",
    xp: 15,
    estimatedMinutes: 5,
    order: 4,
    status: "available",
    goals: [
      { id: "g1", description: "Nắm vững các từ vựng chủ đề Négocier & Organiser (Tổ chức & Thảo luận)" },
      { id: "g2", description: "Luyện phát âm chuẩn và phản xạ câu qua các bài tập tương tác" }
    ],
    vocabulary: [
      { id: "v-fr-904-1", word: "Reporter", translation: "Dời lại / Hoãn lại", phonetic: "ruh-por-tay" },
      { id: "v-fr-904-2", word: "Disponible", translation: "Rảnh / Có thời gian", phonetic: "dees-poh-nee-bluh" },
      { id: "v-fr-904-3", word: "L'échéance", translation: "Hạn chót / Deadline", phonetic: "lay-shay-ahns" },
      { id: "v-fr-904-4", word: "La tâche", translation: "Nhiệm vụ / Phần việc", phonetic: "lah tahsh" },
      { id: "v-fr-904-5", word: "Avancer", translation: "Tiến triển / Đẩy nhanh", phonetic: "ah-vahn-say" }
    ],
    phrases: [
      { id: "p-fr-904-1", text: "Êtes-vous disponible mardi après-midi pour faire le point ?", translation: "Bạn có rảnh chiều thứ Ba để rà soát công việc không?" },
      { id: "p-fr-904-2", text: "L'échéance du projet est fixée à vendredi prochain.", translation: "Hạn chót dự án được ấn định vào thứ Sáu tuần tới." }
    ],
    activities: [
      {
        id: "act-fr-904-1",
        type: "multiple_choice",
        skill: "reading",
        question: "'Disponible' có nghĩa là trạng thái gì?",
        options: ["Có thời gian / Sẵn sàng","Bận rộn","Đang đi vắng","Mệt mỏi"],
        correctAnswer: "Có thời gian / Sẵn sàng"
      },
      {
        id: "act-fr-904-2",
        type: "fill_blank",
        skill: "writing",
        question: "Điền từ: 'Je suis _____ à 14h.' (rảnh / sẵn sàng)",
        prompt: "Điền từ: 'Je suis _____ à 14h.' (rảnh / sẵn sàng)",
        options: ["disponible","échéance","tâche","entretien"],
        correctAnswer: "disponible"
      },
      {
        id: "act-fr-904-3",
        type: "multiple_choice",
        skill: "reading",
        question: "Dịch: 'La tâche principale'",
        options: ["Nhiệm vụ chính","Cuộc họp lớn","Người lãnh đạo","Kế hoạch năm"],
        correctAnswer: "Nhiệm vụ chính"
      },
      {
        id: "act-fr-904-4",
        type: "match_pairs",
        skill: "reading",
        question: "Ghép các cặp từ vựng với nghĩa tiếng Việt tương ứng",
        pairs: [{"left":"Reporter","right":"Dời lại / Hoãn lại"},{"left":"Disponible","right":"Rảnh / Có thời gian"},{"left":"L'échéance","right":"Hạn chót / Deadline"},{"left":"La tâche","right":"Nhiệm vụ / Phần việc"}],
        correctAnswer: "all_matched"
      },
      {
        id: "act-fr-904-5",
        type: "audio_listen",
        skill: "listening",
        question: "Lắng nghe và chọn đáp án chính xác:",
        prompt: "Reporter",
        options: ["Có thời gian / Sẵn sàng","Bận rộn","Đang đi vắng","Mệt mỏi"],
        correctAnswer: "Có thời gian / Sẵn sàng"
      }
    ]
  },
  {
    id: "lesson-fr-905",
    unitId: "unit-fr-9",
    title: "AI Practice: Phỏng Vấn Xin Việc Tiếng Pháp Cùng Mme Dupont",
    description: "Thực hành trả lời các câu hỏi phỏng vấn tuyển dụng chuẩn mực cùng giám đốc nhân sự Dupont.",
    type: "audio_ai",
    xp: 25,
    estimatedMinutes: 5,
    order: 5,
    heroImage: images.mascotWelcome,
    status: "available",
    goals: [
      { id: "g1", description: "Luyện phản xạ giao tiếp thực tế với AI Teacher Camille" },
      { id: "g2", description: "Vận dụng từ vựng trọng tâm vào ngữ cảnh hội thoại tự nhiên" }
    ],
    vocabulary: [
      { id: "v-ai-fr-9-1", word: "Je me présente", translation: "Tôi xin tự giới thiệu" },
      { id: "v-ai-fr-9-2", word: "Mon expérience", translation: "Kinh nghiệm của tôi" },
      { id: "v-ai-fr-9-3", word: "Mes compétences", translation: "Kỹ năng của tôi" },
      { id: "v-ai-fr-9-4", word: "Motivé", translation: "Có động lực" },
      { id: "v-ai-fr-9-5", word: "Travailler en équipe", translation: "Làm việc nhóm" }
    ],
    phrases: [],
    activities: [],
    aiTeacherPrompt: {
      scenario: "Phòng phỏng vấn tuyển dụng tại tòa nhà văn phòng La Défense, Paris",
      systemPrompt: "You are Camille, a warm, human, and energetic French teacher. Speak mostly in English for clear guidance. Introduce French words slowly: say the word once, give the English translation, and invite the student to repeat after you. Keep every reply strictly to 1 or 2 conversational sentences with friendly contractions (I'm, let's, that's). Listen closely to the student, praise correct pronunciation, and gently model errors again: 'So close! Try saying —'. Stay strictly on lesson words: Je me présente, Mon expérience, Mes compétences, Motivé, Travailler en équipe. Never switch topics.",
      initialGreeting: "Bonjour ! Bienvenue chez nous. Pour commencer, pouvez-vous vous présenter et me parler de votre expérience professionnelle ?",
      targetVocabulary: ["Je me présente","Mon expérience","Mes compétences","Motivé","Travailler en équipe"],
      suggestedResponses: ["Bonjour Madame, j'ai une grande passion pour ce travail et trois ans d'expérience.","Je sais bien travailler en équipe et résoudre les problèmes.","Je suis très motivé pour rejoindre votre entreprise."],
      difficulty: "intermediate"
    }
  },
  {
    id: "lesson-fr-1001",
    unitId: "unit-fr-10",
    title: "Planifier des Vacances (Lên kế hoạch nghỉ mát)",
    description: "Tìm kiếm điểm đến du lịch, đặt vé máy bay và chuẩn bị hành lý.",
    type: "standard",
    xp: 15,
    estimatedMinutes: 5,
    order: 1,
    status: "available",
    goals: [
      { id: "g1", description: "Nắm vững các từ vựng chủ đề Planifier des Vacances (Lên kế hoạch nghỉ mát)" },
      { id: "g2", description: "Luyện phát âm chuẩn và phản xạ câu qua các bài tập tương tác" }
    ],
    vocabulary: [
      { id: "v-fr-1001-1", word: "Les vacances", translation: "Kỳ nghỉ hè / Kỳ nghỉ", phonetic: "lay vah-kahns" },
      { id: "v-fr-1001-2", word: "La valise", translation: "Vali hành lý", phonetic: "lah vah-leez" },
      { id: "v-fr-1001-3", word: "Le billet", translation: "Vé (máy bay, tàu hỏa)", phonetic: "luh bee-yay" },
      { id: "v-fr-1001-4", word: "La destination", translation: "Điểm đến", phonetic: "lah des-tee-nah-syohn" },
      { id: "v-fr-1001-5", word: "Faire les valises", translation: "Xếp hành lý", phonetic: "fehr lay vah-leez" }
    ],
    phrases: [
      { id: "p-fr-1001-1", text: "Où vas-tu partir pendant les vacances d'été ?", translation: "Bạn sẽ đi đâu trong kỳ nghỉ hè này?" },
      { id: "p-fr-1001-2", text: "J'ai déjà acheté mes billets d'avion pour Marseille.", translation: "Tôi đã mua xong vé máy bay đi Marseille rồi." }
    ],
    activities: [
      {
        id: "act-fr-1001-1",
        type: "multiple_choice",
        skill: "reading",
        question: "'La valise' là vật dụng gì?",
        options: ["Vali hành lý","Ví tiền","Bản đồ","Hộ chiếu"],
        correctAnswer: "Vali hành lý"
      },
      {
        id: "act-fr-1001-2",
        type: "fill_blank",
        skill: "writing",
        question: "Điền từ: 'J'ai réservé mon _____ de train.' (vé)",
        prompt: "Điền từ: 'J'ai réservé mon _____ de train.' (vé)",
        options: ["billet","valise","plage","vacances"],
        correctAnswer: "billet"
      },
      {
        id: "act-fr-1001-3",
        type: "multiple_choice",
        skill: "reading",
        question: "Dịch: 'Faire sa valise'",
        options: ["Sắp xếp hành lý","Mua vé tàu","Đặt khách sạn","Đi ra biển"],
        correctAnswer: "Sắp xếp hành lý"
      },
      {
        id: "act-fr-1001-4",
        type: "match_pairs",
        skill: "reading",
        question: "Ghép các cặp từ vựng với nghĩa tiếng Việt tương ứng",
        pairs: [{"left":"Les vacances","right":"Kỳ nghỉ hè / Kỳ nghỉ"},{"left":"La valise","right":"Vali hành lý"},{"left":"Le billet","right":"Vé (máy bay, tàu hỏa)"},{"left":"La destination","right":"Điểm đến"}],
        correctAnswer: "all_matched"
      },
      {
        id: "act-fr-1001-5",
        type: "audio_listen",
        skill: "listening",
        question: "Lắng nghe và chọn đáp án chính xác:",
        prompt: "Les vacances",
        options: ["Vali hành lý","Ví tiền","Bản đồ","Hộ chiếu"],
        correctAnswer: "Vali hành lý"
      }
    ]
  },
  {
    id: "lesson-fr-1002",
    unitId: "unit-fr-10",
    title: "À la Campagne & en Montagne (Khám phá thiên nhiên)",
    description: "Từ vựng về phong cảnh thiên nhiên, núi đồi và những chuyến đi dạo.",
    type: "standard",
    xp: 15,
    estimatedMinutes: 5,
    order: 2,
    status: "available",
    goals: [
      { id: "g1", description: "Nắm vững các từ vựng chủ đề À la Campagne & en Montagne (Khám phá thiên nhiên)" },
      { id: "g2", description: "Luyện phát âm chuẩn và phản xạ câu qua các bài tập tương tác" }
    ],
    vocabulary: [
      { id: "v-fr-1002-1", word: "La montagne", translation: "Núi non", phonetic: "lah mohn-tahn-yuh" },
      { id: "v-fr-1002-2", word: "La campagne", translation: "Miền quê / Nông thôn", phonetic: "lah kahm-pahn-yuh" },
      { id: "v-fr-1002-3", word: "La randonnée", translation: "Chuyến đi bộ đường dài (trekking)", phonetic: "lah rahn-doh-nay" },
      { id: "v-fr-1002-4", word: "La forêt", translation: "Khu rừng", phonetic: "lah foh-reh" },
      { id: "v-fr-1002-5", word: "Le lac", translation: "Hồ nước", phonetic: "luh lahk" }
    ],
    phrases: [
      { id: "p-fr-1002-1", text: "Nous avons fait une magnifique randonnée dans les Alpes.", translation: "Chúng tôi đã có một chuyến trekking tuyệt đẹp ở dãy núi Alps." },
      { id: "p-fr-1002-2", text: "L'air frais de la campagne fait beaucoup de bien.", translation: "Không khí trong lành ở miền quê thật dễ chịu." }
    ],
    activities: [
      {
        id: "act-fr-1002-1",
        type: "multiple_choice",
        skill: "reading",
        question: "'La randonnée' là hoạt động gì?",
        options: ["Đi bộ dã ngoại / trekking","Bơi lội dưới biển","Nấu ăn","Xem phim"],
        correctAnswer: "Đi bộ dã ngoại / trekking"
      },
      {
        id: "act-fr-1002-2",
        type: "fill_blank",
        skill: "writing",
        question: "Điền từ: 'Nous aimons marcher dans la _____.' (khu rừng)",
        prompt: "Điền từ: 'Nous aimons marcher dans la _____.' (khu rừng)",
        options: ["forêt","billet","valise","bureau"],
        correctAnswer: "forêt"
      },
      {
        id: "act-fr-1002-3",
        type: "multiple_choice",
        skill: "reading",
        question: "Dịch: 'Au bord du lac'",
        options: ["Bên bờ hồ","Dưới chân núi","Trong khu rừng","Tại nông trại"],
        correctAnswer: "Bên bờ hồ"
      },
      {
        id: "act-fr-1002-4",
        type: "match_pairs",
        skill: "reading",
        question: "Ghép các cặp từ vựng với nghĩa tiếng Việt tương ứng",
        pairs: [{"left":"La montagne","right":"Núi non"},{"left":"La campagne","right":"Miền quê / Nông thôn"},{"left":"La randonnée","right":"Chuyến đi bộ đường dài (trekking)"},{"left":"La forêt","right":"Khu rừng"}],
        correctAnswer: "all_matched"
      },
      {
        id: "act-fr-1002-5",
        type: "audio_listen",
        skill: "listening",
        question: "Lắng nghe và chọn đáp án chính xác:",
        prompt: "La montagne",
        options: ["Đi bộ dã ngoại / trekking","Bơi lội dưới biển","Nấu ăn","Xem phim"],
        correctAnswer: "Đi bộ dã ngoại / trekking"
      }
    ]
  },
  {
    id: "lesson-fr-1003",
    unitId: "unit-fr-10",
    title: "À l'Hôtel & Réservation (Nhận phòng khách sạn)",
    description: "Hỏi tiện ích phòng, yêu cầu dịch vụ phòng và giải quyết phát sinh.",
    type: "standard",
    xp: 15,
    estimatedMinutes: 5,
    order: 3,
    status: "available",
    goals: [
      { id: "g1", description: "Nắm vững các từ vựng chủ đề À l'Hôtel & Réservation (Nhận phòng khách sạn)" },
      { id: "g2", description: "Luyện phát âm chuẩn và phản xạ câu qua các bài tập tương tác" }
    ],
    vocabulary: [
      { id: "v-fr-1003-1", word: "La chambre", translation: "Phòng ngủ", phonetic: "lah shahm-bruh" },
      { id: "v-fr-1003-2", word: "La vue sur mer", translation: "Hướng nhìn ra biển", phonetic: "lah vyoo soor mehr" },
      { id: "v-fr-1003-3", word: "Le petit-déjeuner inclus", translation: "Bao gồm bữa sáng", phonetic: "luh puh-tee day-zhuh-nay ahn-kloo" },
      { id: "v-fr-1003-4", word: "La clé", translation: "Chìa khóa phòng", phonetic: "lah klay" },
      { id: "v-fr-1003-5", word: "La climatisation", translation: "Điều hòa không khí", phonetic: "lah klee-mah-tee-zah-syohn" }
    ],
    phrases: [
      { id: "p-fr-1003-1", text: "Je voudrais une chambre double avec vue sur la mer.", translation: "Tôi muốn một phòng đôi có tầm nhìn hướng biển." },
      { id: "p-fr-1003-2", text: "À quelle heure est servi le petit-déjeuner ?", translation: "Bữa sáng được phục vụ vào mấy giờ?" }
    ],
    activities: [
      {
        id: "act-fr-1003-1",
        type: "multiple_choice",
        skill: "reading",
        question: "'La vue sur mer' nghĩa là gì?",
        options: ["Hướng nhìn ra biển","Phòng có ban công","Phòng có giường đôi","Phòng tầng trệt"],
        correctAnswer: "Hướng nhìn ra biển"
      },
      {
        id: "act-fr-1003-2",
        type: "fill_blank",
        skill: "writing",
        question: "Điền từ: 'Voici votre _____ de chambre.' (chìa khóa)",
        prompt: "Điền từ: 'Voici votre _____ de chambre.' (chìa khóa)",
        options: ["clé","forêt","randonnée","campagne"],
        correctAnswer: "clé"
      },
      {
        id: "act-fr-1003-3",
        type: "multiple_choice",
        skill: "reading",
        question: "Dịch: 'Petit-déjeuner inclus'",
        options: ["Bao gồm bữa sáng","Tính tiền bữa sáng","Không có ăn sáng","Ăn tối miễn phí"],
        correctAnswer: "Bao gồm bữa sáng"
      },
      {
        id: "act-fr-1003-4",
        type: "match_pairs",
        skill: "reading",
        question: "Ghép các cặp từ vựng với nghĩa tiếng Việt tương ứng",
        pairs: [{"left":"La chambre","right":"Phòng ngủ"},{"left":"La vue sur mer","right":"Hướng nhìn ra biển"},{"left":"Le petit-déjeuner inclus","right":"Bao gồm bữa sáng"},{"left":"La clé","right":"Chìa khóa phòng"}],
        correctAnswer: "all_matched"
      },
      {
        id: "act-fr-1003-5",
        type: "audio_listen",
        skill: "listening",
        question: "Lắng nghe và chọn đáp án chính xác:",
        prompt: "La chambre",
        options: ["Hướng nhìn ra biển","Phòng có ban công","Phòng có giường đôi","Phòng tầng trệt"],
        correctAnswer: "Hướng nhìn ra biển"
      }
    ]
  },
  {
    id: "lesson-fr-1004",
    unitId: "unit-fr-10",
    title: "Visites Guidées & Monuments (Thăm quan di tích)",
    description: "Mua vé tham quan di tích lịch sử, bảo tàng và nghe hướng dẫn viên.",
    type: "standard",
    xp: 15,
    estimatedMinutes: 5,
    order: 4,
    status: "available",
    goals: [
      { id: "g1", description: "Nắm vững các từ vựng chủ đề Visites Guidées & Monuments (Thăm quan di tích)" },
      { id: "g2", description: "Luyện phát âm chuẩn và phản xạ câu qua các bài tập tương tác" }
    ],
    vocabulary: [
      { id: "v-fr-1004-1", word: "Le monument", translation: "Di tích / Công trình tưởng niệm", phonetic: "luh moh-nyoo-mahn" },
      { id: "v-fr-1004-2", word: "Le guide touristique", translation: "Hướng dẫn viên du lịch", phonetic: "luh geed too-rees-teek" },
      { id: "v-fr-1004-3", word: "Le tarif réduit", translation: "Giá vé ưu đãi (sinh viên/trẻ em)", phonetic: "luh tah-reef ray-dwee" },
      { id: "v-fr-1004-4", word: "Le musée", translation: "Bảo tàng", phonetic: "luh myoo-zay" },
      { id: "v-fr-1004-5", word: "Prendre des photos", translation: "Chụp ảnh lưu niệm", phonetic: "prahn-druh day foh-toh" }
    ],
    phrases: [
      { id: "p-fr-1004-1", text: "Est-il permis de prendre des photos dans le château ?", translation: "Có được phép chụp ảnh trong lâu đài không?" },
      { id: "p-fr-1004-2", text: "Le guide nous a expliqué toute l'histoire de la cathédrale.", translation: "Người hướng dẫn viên đã giải thích toàn bộ lịch sử nhà thờ." }
    ],
    activities: [
      {
        id: "act-fr-1004-1",
        type: "multiple_choice",
        skill: "reading",
        question: "'Le guide touristique' là ai?",
        options: ["Hướng dẫn viên du lịch","Bác sĩ","Đầu bếp","Lái xe"],
        correctAnswer: "Hướng dẫn viên du lịch"
      },
      {
        id: "act-fr-1004-2",
        type: "fill_blank",
        skill: "writing",
        question: "Điền từ: 'Nous visitons un célèbre _____.' (bảo tàng)",
        prompt: "Điền từ: 'Nous visitons un célèbre _____.' (bảo tàng)",
        options: ["musée","clé","valise","forêt"],
        correctAnswer: "musée"
      },
      {
        id: "act-fr-1004-3",
        type: "multiple_choice",
        skill: "reading",
        question: "Dịch: 'Prendre des photos'",
        options: ["Chụp ảnh","Mua quà lưu niệm","Vẽ tranh","Đọc sách"],
        correctAnswer: "Chụp ảnh"
      },
      {
        id: "act-fr-1004-4",
        type: "match_pairs",
        skill: "reading",
        question: "Ghép các cặp từ vựng với nghĩa tiếng Việt tương ứng",
        pairs: [{"left":"Le monument","right":"Di tích / Công trình tưởng niệm"},{"left":"Le guide touristique","right":"Hướng dẫn viên du lịch"},{"left":"Le tarif réduit","right":"Giá vé ưu đãi (sinh viên/trẻ em)"},{"left":"Le musée","right":"Bảo tàng"}],
        correctAnswer: "all_matched"
      },
      {
        id: "act-fr-1004-5",
        type: "audio_listen",
        skill: "listening",
        question: "Lắng nghe và chọn đáp án chính xác:",
        prompt: "Le monument",
        options: ["Hướng dẫn viên du lịch","Bác sĩ","Đầu bếp","Lái xe"],
        correctAnswer: "Hướng dẫn viên du lịch"
      }
    ]
  },
  {
    id: "lesson-fr-1005",
    unitId: "unit-fr-10",
    title: "AI Practice: Khám Phá Vùng Đất Miền Nam Nước Pháp Cùng Camille",
    description: "Đàm thoại tiếng Pháp về du lịch, ẩm thực vùng miền và trải nghiệm cùng Camille.",
    type: "audio_ai",
    xp: 25,
    estimatedMinutes: 5,
    order: 5,
    heroImage: images.mascotWelcome,
    status: "available",
    goals: [
      { id: "g1", description: "Luyện phản xạ giao tiếp thực tế với AI Teacher Camille" },
      { id: "g2", description: "Vận dụng từ vựng trọng tâm vào ngữ cảnh hội thoại tự nhiên" }
    ],
    vocabulary: [
      { id: "v-ai-fr-10-1", word: "La plage", translation: "Bãi biển" },
      { id: "v-ai-fr-10-2", word: "La montagne", translation: "Núi non" },
      { id: "v-ai-fr-10-3", word: "La mer", translation: "Biển" },
      { id: "v-ai-fr-10-4", word: "Visiter", translation: "Tham quan" },
      { id: "v-ai-fr-10-5", word: "Magnifique", translation: "Tuyệt đẹp" }
    ],
    phrases: [],
    activities: [],
    aiTeacherPrompt: {
      scenario: "Quán cà phê ngoài trời tại thành phố Cannes, vùng biển Địa Trung Hải",
      systemPrompt: "You are Camille, a warm, human, and energetic French teacher. Speak mostly in English for clear guidance. Introduce French words slowly: say the word once, give the English translation, and invite the student to repeat after you. Keep every reply strictly to 1 or 2 conversational sentences with friendly contractions (I'm, let's, that's). Listen closely to the student, praise correct pronunciation, and gently model errors again: 'So close! Try saying —'. Stay strictly on lesson words: La plage, La montagne, La mer, Visiter, Magnifique. Never switch topics.",
      initialGreeting: "Bienvenue sur la Côte d'Azur ! Tu préfères la plage ou la randonnée en montagne ? Quels sont tes projets pour aujourd'hui ?",
      targetVocabulary: ["La plage","La montagne","La mer","Visiter","Magnifique"],
      suggestedResponses: ["Je préfère aller à la plage et nager dans la mer.","J'aimerais visiter les beaux villages de la région.","La nourriture locale est vraiment délicieuse !"],
      difficulty: "intermediate"
    }
  },
  {
    id: "lesson-fr-1101",
    unitId: "unit-fr-11",
    title: "Dans Dix Ans (Thì tương lai đơn - Futur Simple)",
    description: "Diễn tả những dự định dài hạn và ước mơ trong tương lai.",
    type: "standard",
    xp: 15,
    estimatedMinutes: 5,
    order: 1,
    status: "available",
    goals: [
      { id: "g1", description: "Nắm vững các từ vựng chủ đề Dans Dix Ans (Thì tương lai đơn - Futur Simple)" },
      { id: "g2", description: "Luyện phát âm chuẩn và phản xạ câu qua các bài tập tương tác" }
    ],
    vocabulary: [
      { id: "v-fr-1101-1", word: "L'avenir", translation: "Tương lai", phonetic: "lahv-neer" },
      { id: "v-fr-1101-2", word: "Je serai", translation: "Tôi sẽ là / ở (futur của être)", phonetic: "zhuh suh-ray" },
      { id: "v-fr-1101-3", word: "J'aurai", translation: "Tôi sẽ có (futur của avoir)", phonetic: "zhoh-ray" },
      { id: "v-fr-1101-4", word: "Je voyagerai", translation: "Tôi sẽ đi du lịch", phonetic: "zhuh vwah-yah-zhuh-ray" },
      { id: "v-fr-1101-5", word: "Le rêve", translation: "Ước mơ / Giấc mơ", phonetic: "luh rev" }
    ],
    phrases: [
      { id: "p-fr-1101-1", text: "Dans dix ans, j'habiterai dans une grande maison au soleil.", translation: "Trong mười năm tới, tôi sẽ sống trong một ngôi nhà lớn dưới ánh mặt trời." },
      { id: "p-fr-1101-2", text: "Mon plus grand rêve est de faire le tour du monde.", translation: "Ước mơ lớn nhất của tôi là đi vòng quanh thế giới." }
    ],
    activities: [
      {
        id: "act-fr-1101-1",
        type: "multiple_choice",
        skill: "reading",
        question: "'L'avenir' nghĩa là gì?",
        options: ["Tương lai","Quá khứ","Hiện tại","Kỷ niệm"],
        correctAnswer: "Tương lai"
      },
      {
        id: "act-fr-1101-2",
        type: "fill_blank",
        skill: "writing",
        question: "Điền từ: 'Plus tard, je _____ ingénieur.' (tôi sẽ là)",
        prompt: "Điền từ: 'Plus tard, je _____ ingénieur.' (tôi sẽ là)",
        options: ["serai","suis","étais","rêve"],
        correctAnswer: "serai"
      },
      {
        id: "act-fr-1101-3",
        type: "multiple_choice",
        skill: "reading",
        question: "Dịch: 'Je voyagerai beaucoup'",
        options: ["Tôi sẽ đi du lịch rất nhiều","Tôi từng đi du lịch","Tôi không thích du lịch","Tôi đang du lịch"],
        correctAnswer: "Tôi sẽ đi du lịch rất nhiều"
      },
      {
        id: "act-fr-1101-4",
        type: "match_pairs",
        skill: "reading",
        question: "Ghép các cặp từ vựng với nghĩa tiếng Việt tương ứng",
        pairs: [{"left":"L'avenir","right":"Tương lai"},{"left":"Je serai","right":"Tôi sẽ là / ở (futur của être)"},{"left":"J'aurai","right":"Tôi sẽ có (futur của avoir)"},{"left":"Je voyagerai","right":"Tôi sẽ đi du lịch"}],
        correctAnswer: "all_matched"
      },
      {
        id: "act-fr-1101-5",
        type: "audio_listen",
        skill: "listening",
        question: "Lắng nghe và chọn đáp án chính xác:",
        prompt: "L'avenir",
        options: ["Tương lai","Quá khứ","Hiện tại","Kỷ niệm"],
        correctAnswer: "Tương lai"
      }
    ]
  },
  {
    id: "lesson-fr-1102",
    unitId: "unit-fr-11",
    title: "Mon Smartphone & Les Réseaux Sociaux (Công nghệ)",
    description: "Từ vựng về thiết bị thông minh, mạng xã hội và kết nối Internet.",
    type: "standard",
    xp: 15,
    estimatedMinutes: 5,
    order: 2,
    status: "available",
    goals: [
      { id: "g1", description: "Nắm vững các từ vựng chủ đề Mon Smartphone & Les Réseaux Sociaux (Công nghệ)" },
      { id: "g2", description: "Luyện phát âm chuẩn và phản xạ câu qua các bài tập tương tác" }
    ],
    vocabulary: [
      { id: "v-fr-1102-1", word: "L'application", translation: "Ứng dụng điện thoại (App)", phonetic: "lah-plee-kah-syohn" },
      { id: "v-fr-1102-2", word: "Le smartphone", translation: "Điện thoại thông minh", phonetic: "luh smaht-fohn" },
      { id: "v-fr-1102-3", word: "Télécharger", translation: "Tải về (download)", phonetic: "tay-lay-shahr-zhay" },
      { id: "v-fr-1102-4", word: "Le mot de passe", translation: "Mật khẩu", phonetic: "luh moh duh pahs" },
      { id: "v-fr-1102-5", word: "En ligne", translation: "Trực tuyến (online)", phonetic: "ahn leen-yuh" }
    ],
    phrases: [
      { id: "p-fr-1102-1", text: "J'utilise cette application pour apprendre le français tous les jours.", translation: "Tôi dùng ứng dụng này để học tiếng Pháp mỗi ngày." },
      { id: "p-fr-1102-2", text: "N'oublie jamais de protéger ton mot de passe !", translation: "Đừng bao giờ quên bảo vệ mật khẩu của bạn!" }
    ],
    activities: [
      {
        id: "act-fr-1102-1",
        type: "multiple_choice",
        skill: "reading",
        question: "'Télécharger' là hành động gì?",
        options: ["Tải về máy","Xóa tệp","Gửi email","Tắt máy"],
        correctAnswer: "Tải về máy"
      },
      {
        id: "act-fr-1102-2",
        type: "fill_blank",
        skill: "writing",
        question: "Điền từ: 'Entrez votre _____ secret.' (mật khẩu)",
        prompt: "Điền từ: 'Entrez votre _____ secret.' (mật khẩu)",
        options: ["mot de passe","avenir","billet","rêve"],
        correctAnswer: "mot de passe"
      },
      {
        id: "act-fr-1102-3",
        type: "multiple_choice",
        skill: "reading",
        question: "Dịch: 'Acheter en ligne'",
        options: ["Mua sắm trực tuyến","Mua tại cửa hàng","Bán đồ cũ","Đổi hàng"],
        correctAnswer: "Mua sắm trực tuyến"
      },
      {
        id: "act-fr-1102-4",
        type: "match_pairs",
        skill: "reading",
        question: "Ghép các cặp từ vựng với nghĩa tiếng Việt tương ứng",
        pairs: [{"left":"L'application","right":"Ứng dụng điện thoại (App)"},{"left":"Le smartphone","right":"Điện thoại thông minh"},{"left":"Télécharger","right":"Tải về (download)"},{"left":"Le mot de passe","right":"Mật khẩu"}],
        correctAnswer: "all_matched"
      },
      {
        id: "act-fr-1102-5",
        type: "audio_listen",
        skill: "listening",
        question: "Lắng nghe và chọn đáp án chính xác:",
        prompt: "L'application",
        options: ["Tải về máy","Xóa tệp","Gửi email","Tắt máy"],
        correctAnswer: "Tải về máy"
      }
    ]
  },
  {
    id: "lesson-fr-1103",
    unitId: "unit-fr-11",
    title: "L'Intelligence Artificielle & Le Futur (AI & Tương lai)",
    description: "Bàn luận về robot, trí tuệ nhân tạo và sự thay đổi của xã hội.",
    type: "standard",
    xp: 15,
    estimatedMinutes: 5,
    order: 3,
    status: "available",
    goals: [
      { id: "g1", description: "Nắm vững các từ vựng chủ đề L'Intelligence Artificielle & Le Futur (AI & Tương lai)" },
      { id: "g2", description: "Luyện phát âm chuẩn và phản xạ câu qua các bài tập tương tác" }
    ],
    vocabulary: [
      { id: "v-fr-1103-1", word: "L'intelligence artificielle", translation: "Trí tuệ nhân tạo (IA)", phonetic: "lahn-tay-lee-zhahns ahr-tee-fee-syel" },
      { id: "v-fr-1103-2", word: "Le robot", translation: "Người máy / Robot", phonetic: "luh roh-boh" },
      { id: "v-fr-1103-3", word: "Le changement", translation: "Sự thay đổi", phonetic: "luh shahnzh-mahn" },
      { id: "v-fr-1103-4", word: "Faciliter", translation: "Làm cho dễ dàng / Thuận tiện", phonetic: "fah-see-lee-tay" },
      { id: "v-fr-1103-5", word: "Le futur", translation: "Thời đại tương lai", phonetic: "luh foo-tyoor" }
    ],
    phrases: [
      { id: "p-fr-1103-1", text: "L'intelligence artificielle facilite nos tâches quotidiennes.", translation: "Trí tuệ nhân tạo giúp các công việc hàng ngày của chúng ta dễ dàng hơn." },
      { id: "p-fr-1103-2", text: "Pensez-vous que les robots remplaceront certains métiers ?", translation: "Bạn có nghĩ người máy sẽ thay thế một số nghề nghiệp không?" }
    ],
    activities: [
      {
        id: "act-fr-1103-1",
        type: "multiple_choice",
        skill: "reading",
        question: "Viết tắt 'IA' trong tiếng Pháp tương đương với từ nào?",
        options: ["Trí tuệ nhân tạo (AI)","Internet nhanh","Điện thoại mới","Ứng dụng game"],
        correctAnswer: "Trí tuệ nhân tạo (AI)"
      },
      {
        id: "act-fr-1103-2",
        type: "fill_blank",
        skill: "writing",
        question: "Điền từ: 'La technologie va _____ notre vie.' (làm dễ dàng hơn)",
        prompt: "Điền từ: 'La technologie va _____ notre vie.' (làm dễ dàng hơn)",
        options: ["faciliter","robot","changement","avenir"],
        correctAnswer: "faciliter"
      },
      {
        id: "act-fr-1103-3",
        type: "multiple_choice",
        skill: "reading",
        question: "Dịch: 'Un grand changement'",
        options: ["Một sự thay đổi lớn","Một căn nhà đẹp","Một tương lai u ám","Một robot cũ"],
        correctAnswer: "Một sự thay đổi lớn"
      },
      {
        id: "act-fr-1103-4",
        type: "match_pairs",
        skill: "reading",
        question: "Ghép các cặp từ vựng với nghĩa tiếng Việt tương ứng",
        pairs: [{"left":"L'intelligence artificielle","right":"Trí tuệ nhân tạo (IA)"},{"left":"Le robot","right":"Người máy / Robot"},{"left":"Le changement","right":"Sự thay đổi"},{"left":"Faciliter","right":"Làm cho dễ dàng / Thuận tiện"}],
        correctAnswer: "all_matched"
      },
      {
        id: "act-fr-1103-5",
        type: "audio_listen",
        skill: "listening",
        question: "Lắng nghe và chọn đáp án chính xác:",
        prompt: "L'intelligence artificielle",
        options: ["Trí tuệ nhân tạo (AI)","Internet nhanh","Điện thoại mới","Ứng dụng game"],
        correctAnswer: "Trí tuệ nhân tạo (AI)"
      }
    ]
  },
  {
    id: "lesson-fr-1104",
    unitId: "unit-fr-11",
    title: "Mes Résolutions & Ambitions (Mục tiêu cá nhân)",
    description: "Đặt ra mục tiêu năm mới, thói quen tốt và quyết tâm thực hiện.",
    type: "standard",
    xp: 15,
    estimatedMinutes: 5,
    order: 4,
    status: "available",
    goals: [
      { id: "g1", description: "Nắm vững các từ vựng chủ đề Mes Résolutions & Ambitions (Mục tiêu cá nhân)" },
      { id: "g2", description: "Luyện phát âm chuẩn và phản xạ câu qua các bài tập tương tác" }
    ],
    vocabulary: [
      { id: "v-fr-1104-1", word: "La résolution", translation: "Nghị quyết / Quyết tâm", phonetic: "lah ray-zoh-lyoo-syohn" },
      { id: "v-fr-1104-2", word: "L'objectif", translation: "Mục tiêu phấn đấu", phonetic: "lohb-zhek-teef" },
      { id: "v-fr-1104-3", word: "Réussir", translation: "Thành công / Đạt được", phonetic: "ray-oo-seer" },
      { id: "v-fr-1104-4", word: "Améliorer", translation: "Cải thiện / Nâng cao", phonetic: "ah-may-lyoh-ray" },
      { id: "v-fr-1104-5", word: "La promesse", translation: "Lời hứa", phonetic: "lah proh-mes" }
    ],
    phrases: [
      { id: "p-fr-1104-1", text: "Mon objectif principal est de parler couramment français.", translation: "Mục tiêu chính của tôi là nói tiếng Pháp trôi chảy." },
      { id: "p-fr-1104-2", text: "Je ferai des efforts chaque jour pour réussir mes examens.", translation: "Tôi sẽ nỗ lực mỗi ngày để đỗ các kỳ thi của mình." }
    ],
    activities: [
      {
        id: "act-fr-1104-1",
        type: "multiple_choice",
        skill: "reading",
        question: "'Améliorer' có nghĩa là gì?",
        options: ["Cải thiện / Nâng cao","Từ bỏ","Trì hoãn","Quên mất"],
        correctAnswer: "Cải thiện / Nâng cao"
      },
      {
        id: "act-fr-1104-2",
        type: "fill_blank",
        skill: "writing",
        question: "Điền từ: 'Je veux _____ mon niveau.' (cải thiện)",
        prompt: "Điền từ: 'Je veux _____ mon niveau.' (cải thiện)",
        options: ["améliorer","promesse","résolution","futur"],
        correctAnswer: "améliorer"
      },
      {
        id: "act-fr-1104-3",
        type: "multiple_choice",
        skill: "reading",
        question: "Dịch: 'Mon objectif principal'",
        options: ["Mục tiêu chính của tôi","Lời hứa của bạn","Ước mơ ngày xưa","Kết quả bài kiểm tra"],
        correctAnswer: "Mục tiêu chính của tôi"
      },
      {
        id: "act-fr-1104-4",
        type: "match_pairs",
        skill: "reading",
        question: "Ghép các cặp từ vựng với nghĩa tiếng Việt tương ứng",
        pairs: [{"left":"La résolution","right":"Nghị quyết / Quyết tâm"},{"left":"L'objectif","right":"Mục tiêu phấn đấu"},{"left":"Réussir","right":"Thành công / Đạt được"},{"left":"Améliorer","right":"Cải thiện / Nâng cao"}],
        correctAnswer: "all_matched"
      },
      {
        id: "act-fr-1104-5",
        type: "audio_listen",
        skill: "listening",
        question: "Lắng nghe và chọn đáp án chính xác:",
        prompt: "La résolution",
        options: ["Cải thiện / Nâng cao","Từ bỏ","Trì hoãn","Quên mất"],
        correctAnswer: "Cải thiện / Nâng cao"
      }
    ]
  },
  {
    id: "lesson-fr-1105",
    unitId: "unit-fr-11",
    title: "AI Practice: Thảo Luận Kế Hoạch Tương Lai Cùng Thầy Julien",
    description: "Thực hành diễn đạt ước mơ, dự định tương lai và công nghệ cùng thầy Julien.",
    type: "audio_ai",
    xp: 25,
    estimatedMinutes: 5,
    order: 5,
    heroImage: images.mascotWelcome,
    status: "available",
    goals: [
      { id: "g1", description: "Luyện phản xạ giao tiếp thực tế với AI Teacher Camille" },
      { id: "g2", description: "Vận dụng từ vựng trọng tâm vào ngữ cảnh hội thoại tự nhiên" }
    ],
    vocabulary: [
      { id: "v-ai-fr-11-1", word: "À l'avenir", translation: "Trong tương lai" },
      { id: "v-ai-fr-11-2", word: "Je voudrais", translation: "Tôi muốn" },
      { id: "v-ai-fr-11-3", word: "Je voyagerai", translation: "Tôi sẽ đi du lịch" },
      { id: "v-ai-fr-11-4", word: "La technologie", translation: "Công nghệ" },
      { id: "v-ai-fr-11-5", word: "Réussir", translation: "Thành công / Đạt được" }
    ],
    phrases: [],
    activities: [],
    aiTeacherPrompt: {
      scenario: "Phòng hội thảo công nghệ và tương lai tại trường đại học Sorbonne",
      systemPrompt: "You are Camille, a warm, human, and energetic French teacher. Speak mostly in English for clear guidance. Introduce French words slowly: say the word once, give the English translation, and invite the student to repeat after you. Keep every reply strictly to 1 or 2 conversational sentences with friendly contractions (I'm, let's, that's). Listen closely to the student, praise correct pronunciation, and gently model errors again: 'So close! Try saying —'. Stay strictly on lesson words: À l'avenir, Je voudrais, Je voyagerai, La technologie, Réussir. Never switch topics.",
      initialGreeting: "Salut ! Parlons de l'avenir : quels sont tes plus grands projets pour les années à venir ?",
      targetVocabulary: ["À l'avenir","Je voudrais","Je voyagerai","La technologie","Réussir"],
      suggestedResponses: ["Dans le futur, j'aimerais travailler à l'international.","Je veux continuer à pratiquer le français chaque jour.","Je pense que la technologie apporte beaucoup d'opportunités."],
      difficulty: "intermediate"
    }
  },
  {
    id: "lesson-fr-1201",
    unitId: "unit-fr-12",
    title: "Exprimer son Opinion (Bày tỏ quan điểm)",
    description: "Bày tỏ ý kiến cá nhân bằng 'À mon avis', 'Je pense que', 'Je trouve que'.",
    type: "standard",
    xp: 15,
    estimatedMinutes: 5,
    order: 1,
    status: "available",
    goals: [
      { id: "g1", description: "Nắm vững các từ vựng chủ đề Exprimer son Opinion (Bày tỏ quan điểm)" },
      { id: "g2", description: "Luyện phát âm chuẩn và phản xạ câu qua các bài tập tương tác" }
    ],
    vocabulary: [
      { id: "v-fr-1201-1", word: "À mon avis", translation: "Theo ý kiến tôi", phonetic: "ah mohn ah-vee" },
      { id: "v-fr-1201-2", word: "Je pense que", translation: "Tôi nghĩ rằng", phonetic: "zhuh pahns kuh" },
      { id: "v-fr-1201-3", word: "D'accord", translation: "Đồng ý", phonetic: "dah-kor" },
      { id: "v-fr-1201-4", word: "Pas d'accord", translation: "Không đồng ý", phonetic: "pah dah-kor" },
      { id: "v-fr-1201-5", word: "L'avis", translation: "Ý kiến / Quan điểm", phonetic: "lah-vee" }
    ],
    phrases: [
      { id: "p-fr-1201-1", text: "À mon avis, voyager est la meilleure façon d'apprendre.", translation: "Theo tôi, đi du lịch là cách tốt nhất để học hỏi." },
      { id: "p-fr-1201-2", text: "Je suis tout à fait d'accord avec vous sur ce point.", translation: "Tôi hoàn toàn đồng ý với bạn về điểm này." }
    ],
    activities: [
      {
        id: "act-fr-1201-1",
        type: "multiple_choice",
        skill: "reading",
        question: "'À mon avis' dùng để làm gì?",
        options: ["Mở đầu nêu quan điểm cá nhân","Chào tạm biệt","Hỏi đường đi","Gọi món ăn"],
        correctAnswer: "Mở đầu nêu quan điểm cá nhân"
      },
      {
        id: "act-fr-1201-2",
        type: "fill_blank",
        skill: "writing",
        question: "Điền từ: 'À mon _____, ce livre est formidable.' (ý kiến)",
        prompt: "Điền từ: 'À mon _____, ce livre est formidable.' (ý kiến)",
        options: ["avis","accord","futur","rêve"],
        correctAnswer: "avis"
      },
      {
        id: "act-fr-1201-3",
        type: "multiple_choice",
        skill: "reading",
        question: "Dịch: 'Je suis d'accord'",
        options: ["Tôi đồng ý","Tôi không biết","Tôi từ chối","Tôi đang bận"],
        correctAnswer: "Tôi đồng ý"
      },
      {
        id: "act-fr-1201-4",
        type: "match_pairs",
        skill: "reading",
        question: "Ghép các cặp từ vựng với nghĩa tiếng Việt tương ứng",
        pairs: [{"left":"À mon avis","right":"Theo ý kiến tôi"},{"left":"Je pense que","right":"Tôi nghĩ rằng"},{"left":"D'accord","right":"Đồng ý"},{"left":"Pas d'accord","right":"Không đồng ý"}],
        correctAnswer: "all_matched"
      },
      {
        id: "act-fr-1201-5",
        type: "audio_listen",
        skill: "listening",
        question: "Lắng nghe và chọn đáp án chính xác:",
        prompt: "À mon avis",
        options: ["Mở đầu nêu quan điểm cá nhân","Chào tạm biệt","Hỏi đường đi","Gọi món ăn"],
        correctAnswer: "Mở đầu nêu quan điểm cá nhân"
      }
    ]
  },
  {
    id: "lesson-fr-1202",
    unitId: "unit-fr-12",
    title: "L'Art de Vivre à la Française (Phong cách sống Pháp)",
    description: "Tìm hiểu văn hóa ẩm thực, giờ uống cà phê và các ngày lễ truyền thống của Pháp.",
    type: "standard",
    xp: 15,
    estimatedMinutes: 5,
    order: 2,
    status: "available",
    goals: [
      { id: "g1", description: "Nắm vững các từ vựng chủ đề L'Art de Vivre à la Française (Phong cách sống Pháp)" },
      { id: "g2", description: "Luyện phát âm chuẩn và phản xạ câu qua các bài tập tương tác" }
    ],
    vocabulary: [
      { id: "v-fr-1202-1", word: "L'art de vivre", translation: "Nghệ thuật sống", phonetic: "lahr duh vee-vruh" },
      { id: "v-fr-1202-2", word: "La gastronomie", translation: "Nghệ thuật ẩm thực", phonetic: "lah gahs-troh-noh-mee" },
      { id: "v-fr-1202-3", word: "La terrasse", translation: "Bàn hiên cà phê ngoài trời", phonetic: "lah tay-rahs" },
      { id: "v-fr-1202-4", word: "Le musée d'art", translation: "Bảo tàng mỹ thuật", phonetic: "luh myoo-zay dahr" },
      { id: "v-fr-1202-5", word: "La tradition", translation: "Truyền thống", phonetic: "lah trah-dee-syohn" }
    ],
    phrases: [
      { id: "p-fr-1202-1", text: "Prendre un café en terrasse fait partie du quotidien français.", translation: "Ngồi uống cà phê ngoài ban công quán là một nét sống hàng ngày của người Pháp." },
      { id: "p-fr-1202-2", text: "La gastronomie française est inscrite au patrimoine mondial.", translation: "Ẩm thực Pháp đã được công nhận là di sản văn hóa thế giới." }
    ],
    activities: [
      {
        id: "act-fr-1202-1",
        type: "multiple_choice",
        skill: "reading",
        question: "'La terrasse' ở Pháp thường được dùng để làm gì?",
        options: ["Ngồi uống cà phê, ngắm phố xá","Đậu xe ô tô","Tập thể hình","Họp công ty"],
        correctAnswer: "Ngồi uống cà phê, ngắm phố xá"
      },
      {
        id: "act-fr-1202-2",
        type: "fill_blank",
        skill: "writing",
        question: "Điền từ: 'J'aime m'asseoir en _____ au soleil.' (hiên cà phê ngoài trời)",
        prompt: "Điền từ: 'J'aime m'asseoir en _____ au soleil.' (hiên cà phê ngoài trời)",
        options: ["terrasse","art","avis","musée"],
        correctAnswer: "terrasse"
      },
      {
        id: "act-fr-1202-3",
        type: "multiple_choice",
        skill: "reading",
        question: "Dịch: 'Une belle tradition'",
        options: ["Một truyền thống đẹp","Một món ăn mới","Một chuyến bay dài","Một bức tranh cổ"],
        correctAnswer: "Một truyền thống đẹp"
      },
      {
        id: "act-fr-1202-4",
        type: "match_pairs",
        skill: "reading",
        question: "Ghép các cặp từ vựng với nghĩa tiếng Việt tương ứng",
        pairs: [{"left":"L'art de vivre","right":"Nghệ thuật sống"},{"left":"La gastronomie","right":"Nghệ thuật ẩm thực"},{"left":"La terrasse","right":"Bàn hiên cà phê ngoài trời"},{"left":"Le musée d'art","right":"Bảo tàng mỹ thuật"}],
        correctAnswer: "all_matched"
      },
      {
        id: "act-fr-1202-5",
        type: "audio_listen",
        skill: "listening",
        question: "Lắng nghe và chọn đáp án chính xác:",
        prompt: "L'art de vivre",
        options: ["Ngồi uống cà phê, ngắm phố xá","Đậu xe ô tô","Tập thể hình","Họp công ty"],
        correctAnswer: "Ngồi uống cà phê, ngắm phố xá"
      }
    ]
  },
  {
    id: "lesson-fr-1203",
    unitId: "unit-fr-12",
    title: "Expressions & Proverbes Célèbres (Thành ngữ thú vị)",
    description: "Làm giàu vốn từ với các câu thành ngữ và cách nói tự nhiên của người bản xứ.",
    type: "standard",
    xp: 15,
    estimatedMinutes: 5,
    order: 3,
    status: "available",
    goals: [
      { id: "g1", description: "Nắm vững các từ vựng chủ đề Expressions & Proverbes Célèbres (Thành ngữ thú vị)" },
      { id: "g2", description: "Luyện phát âm chuẩn và phản xạ câu qua các bài tập tương tác" }
    ],
    vocabulary: [
      { id: "v-fr-1203-1", word: "C'est la vie !", translation: "Đời là thế đấy!", phonetic: "say lah vee" },
      { id: "v-fr-1203-2", word: "Avoir un coup de cœur", translation: "Cực kỳ yêu thích / 'Phải lòng'", phonetic: "ah-vwahr uhn koo duh kuhr" },
      { id: "v-fr-1203-3", word: "Poser un lapin", translation: "Cho ai đó 'leo cây' (bỏ hẹn)", phonetic: "poh-zay uhn lah-pahn" },
      { id: "v-fr-1203-4", word: "Chapeau !", translation: "Khâm phục! / Ngả mũ thán phục!", phonetic: "shah-poh" },
      { id: "v-fr-1203-5", word: "L'expression", translation: "Cách diễn đạt / Thành ngữ", phonetic: "lek-spres-yohn" }
    ],
    phrases: [
      { id: "p-fr-1203-1", text: "J'ai eu un vrai coup de cœur pour cette ville.", translation: "Tôi đã cực kỳ yêu thích thành phố này." },
      { id: "p-fr-1203-2", text: "Tu as réussi ton examen du premier coup ? Chapeau !", translation: "Bạn thi đỗ ngay lần đầu tiên à? Ngả mũ khâm phục!" }
    ],
    activities: [
      {
        id: "act-fr-1203-1",
        type: "multiple_choice",
        skill: "reading",
        question: "'C'est la vie' có nghĩa phổ biến là gì?",
        options: ["Cuộc đời là thế đấy / Đành chịu thôi","Chúc mừng sinh nhật","Hẹn gặp lại","Cảm ơn bạn"],
        correctAnswer: "Cuộc đời là thế đấy / Đành chịu thôi"
      },
      {
        id: "act-fr-1203-2",
        type: "fill_blank",
        skill: "writing",
        question: "Điền từ: 'J'ai eu un coup de _____ pour Paris.' (trái tim/yêu thích)",
        prompt: "Điền từ: 'J'ai eu un coup de _____ pour Paris.' (trái tim/yêu thích)",
        options: ["cœur","lapin","vie","chapeau"],
        correctAnswer: "cœur"
      },
      {
        id: "act-fr-1203-3",
        type: "multiple_choice",
        skill: "reading",
        question: "Dịch: 'Chapeau !'",
        options: ["Khâm phục! / Xuất sắc!","Chào buổi sáng!","Đi ngủ thôi!","Xin lỗi nhé!"],
        correctAnswer: "Khâm phục! / Xuất sắc!"
      },
      {
        id: "act-fr-1203-4",
        type: "match_pairs",
        skill: "reading",
        question: "Ghép các cặp từ vựng với nghĩa tiếng Việt tương ứng",
        pairs: [{"left":"C'est la vie !","right":"Đời là thế đấy!"},{"left":"Avoir un coup de cœur","right":"Cực kỳ yêu thích / 'Phải lòng'"},{"left":"Poser un lapin","right":"Cho ai đó 'leo cây' (bỏ hẹn)"},{"left":"Chapeau !","right":"Khâm phục! / Ngả mũ thán phục!"}],
        correctAnswer: "all_matched"
      },
      {
        id: "act-fr-1203-5",
        type: "audio_listen",
        skill: "listening",
        question: "Lắng nghe và chọn đáp án chính xác:",
        prompt: "C'est la vie !",
        options: ["Cuộc đời là thế đấy / Đành chịu thôi","Chúc mừng sinh nhật","Hẹn gặp lại","Cảm ơn bạn"],
        correctAnswer: "Cuộc đời là thế đấy / Đành chịu thôi"
      }
    ]
  },
  {
    id: "lesson-fr-1204",
    unitId: "unit-fr-12",
    title: "Récapitulatif & Bilan A2 (Ôn tập toàn diện A2)",
    description: "Tổng ôn các chủ đề từ Unit 1 đến Unit 12 để chuẩn bị tốt nghiệp chứng chỉ A2.",
    type: "standard",
    xp: 15,
    estimatedMinutes: 5,
    order: 4,
    status: "available",
    goals: [
      { id: "g1", description: "Nắm vững các từ vựng chủ đề Récapitulatif & Bilan A2 (Ôn tập toàn diện A2)" },
      { id: "g2", description: "Luyện phát âm chuẩn và phản xạ câu qua các bài tập tương tác" }
    ],
    vocabulary: [
      { id: "v-fr-1204-1", word: "La révision", translation: "Sự ôn tập", phonetic: "lah ray-vee-zyohn" },
      { id: "v-fr-1204-2", word: "Confiant(e)", translation: "Tự tin", phonetic: "kohn-fyahn" },
      { id: "v-fr-1204-3", word: "Le niveau A2", translation: "Trình độ A2 CEFR", phonetic: "luh nee-voh ah-duh" },
      { id: "v-fr-1204-4", word: "Félicitations", translation: "Xin chúc mừng!", phonetic: "fay-lee-see-tah-syohn" },
      { id: "v-fr-1204-5", word: "Le diplôme", translation: "Chứng chỉ / Bằng tốt nghiệp", phonetic: "luh deep-lohm" }
    ],
    phrases: [
      { id: "p-fr-1204-1", text: "Vous maîtrisez maintenant les bases solides du niveau A2 !", translation: "Giờ đây bạn đã làm chủ nền tảng vững chắc của trình độ A2!" },
      { id: "p-fr-1204-2", text: "Je me sens tout à fait confiant pour voyager et dialoguer.", translation: "Tôi cảm thấy hoàn toàn tự tin để du lịch và đối thoại." }
    ],
    activities: [
      {
        id: "act-fr-1204-1",
        type: "multiple_choice",
        skill: "reading",
        question: "'Félicitations' nghĩa là gì?",
        options: ["Xin chúc mừng","Xin thứ lỗi","Hẹn gặp lại","Chúc ngủ ngon"],
        correctAnswer: "Xin chúc mừng"
      },
      {
        id: "act-fr-1204-2",
        type: "fill_blank",
        skill: "writing",
        question: "Điền từ: 'Toutes mes _____ pour votre réussite !' (chúc mừng)",
        prompt: "Điền từ: 'Toutes mes _____ pour votre réussite !' (chúc mừng)",
        options: ["félicitations","révision","diplôme","niveau"],
        correctAnswer: "félicitations"
      },
      {
        id: "act-fr-1204-3",
        type: "multiple_choice",
        skill: "reading",
        question: "Dịch: 'Je suis très confiant'",
        options: ["Tôi rất tự tin","Tôi rất mệt","Tôi rất đói","Tôi đang lo lắng"],
        correctAnswer: "Tôi rất tự tin"
      },
      {
        id: "act-fr-1204-4",
        type: "match_pairs",
        skill: "reading",
        question: "Ghép các cặp từ vựng với nghĩa tiếng Việt tương ứng",
        pairs: [{"left":"La révision","right":"Sự ôn tập"},{"left":"Confiant(e)","right":"Tự tin"},{"left":"Le niveau A2","right":"Trình độ A2 CEFR"},{"left":"Félicitations","right":"Xin chúc mừng!"}],
        correctAnswer: "all_matched"
      },
      {
        id: "act-fr-1204-5",
        type: "audio_listen",
        skill: "listening",
        question: "Lắng nghe và chọn đáp án chính xác:",
        prompt: "La révision",
        options: ["Xin chúc mừng","Xin thứ lỗi","Hẹn gặp lại","Chúc ngủ ngon"],
        correctAnswer: "Xin chúc mừng"
      }
    ]
  },
  {
    id: "lesson-fr-1205",
    unitId: "unit-fr-12",
    title: "AI Practice: Lễ Trao Bằng Tốt Nghiệp CEFR A2 Cùng Thầy Pierre",
    description: "Đàm thoại tự do tốt nghiệp chứng chỉ A2 tổng kết cả 12 Unit cùng thầy Pierre.",
    type: "audio_ai",
    xp: 25,
    estimatedMinutes: 5,
    order: 5,
    heroImage: images.mascotWelcome,
    status: "available",
    goals: [
      { id: "g1", description: "Luyện phản xạ giao tiếp thực tế với AI Teacher Camille" },
      { id: "g2", description: "Vận dụng từ vựng trọng tâm vào ngữ cảnh hội thoại tự nhiên" }
    ],
    vocabulary: [
      { id: "v-ai-fr-12-1", word: "Félicitations", translation: "Xin chúc mừng!" },
      { id: "v-ai-fr-12-2", word: "Niveau A2", translation: "Trình độ A2" },
      { id: "v-ai-fr-12-3", word: "Confiant", translation: "Tự tin" },
      { id: "v-ai-fr-12-4", word: "À mon avis", translation: "Theo ý kiến tôi" },
      { id: "v-ai-fr-12-5", word: "Merci", translation: "Cảm ơn" }
    ],
    phrases: [],
    activities: [],
    aiTeacherPrompt: {
      scenario: "Sân khấu lễ trao chứng chỉ tốt nghiệp khóa học tiếng Pháp A2 tại Paris",
      systemPrompt: "You are Camille, a warm, human, and energetic French teacher. Speak mostly in English for clear guidance. Introduce French words slowly: say the word once, give the English translation, and invite the student to repeat after you. Keep every reply strictly to 1 or 2 conversational sentences with friendly contractions (I'm, let's, that's). Listen closely to the student, praise correct pronunciation, and gently model errors again: 'So close! Try saying —'. Stay strictly on lesson words: Félicitations, Niveau A2, Confiant, À mon avis, Merci. Never switch topics.",
      initialGreeting: "Toutes mes félicitations ! Tu as complété les 12 Unités et atteint le niveau CEFR A2 en français ! Comment te sens-tu aujourd'hui ?",
      targetVocabulary: ["Félicitations","Niveau A2","Confiant","À mon avis","Merci"],
      suggestedResponses: ["Je me sens tellement fier et confiant après ces 12 unités !","Mon sujet préféré était les voyages et raconter mes souvenirs.","Merci Pierre, le français est devenu un vrai plaisir pour moi !"],
      difficulty: "intermediate"
    }
  },
];
