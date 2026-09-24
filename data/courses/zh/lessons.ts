import { Lesson } from "@/types/learning";
import { images } from "@/constants/images";

export const ZH_LESSONS: Lesson[] = [
  {
    id: "lesson-zh-101",
    unitId: "unit-zh-1",
    title: "Nǐ Hǎo & Lời Chào Tiếng Trung",
    description: "Lời chào cơ bản và tạm biệt trong tiếng Trung chuẩn Pinyin.",
    type: "standard",
    xp: 15,
    estimatedMinutes: 5,
    order: 1,
    status: "available",
    goals: [
      { id: "g1", description: "Nắm vững các từ vựng chủ đề Nǐ Hǎo & Lời Chào Tiếng Trung" },
      { id: "g2", description: "Luyện phát âm chuẩn và phản xạ câu qua các bài tập tương tác" }
    ],
    vocabulary: [
      { id: "v-zh-101-1", word: "Nǐ hǎo", translation: "Xin chào", phonetic: "nee how" },
      { id: "v-zh-101-2", word: "Zàijiàn", translation: "Tạm biệt", phonetic: "zahy-jyen" },
      { id: "v-zh-101-3", word: "Zǎoshang hǎo", translation: "Chào buổi sáng", phonetic: "zow-shahng how" },
      { id: "v-zh-101-4", word: "Míngtiān jiàn", translation: "Hẹn gặp lại ngày mai", phonetic: "meeng-tyen jyen" },
      { id: "v-zh-101-5", word: "Nǐ hǎo ma?", translation: "Bạn khỏe không?", phonetic: "nee how mah" }
    ],
    phrases: [
      { id: "p-zh-101-1", text: "Nǐ hǎo! Nǐ hǎo ma?", translation: "Xin chào! Bạn có khỏe không?" },
      { id: "p-zh-101-2", text: "Wǒ hěn hǎo, zàijiàn!", translation: "Tôi rất khỏe, tạm biệt nhé!" }
    ],
    activities: [
      {
        id: "act-zh-101-1",
        type: "multiple_choice",
        skill: "reading",
        question: "'Nǐ hǎo' có nghĩa là gì?",
        options: ["Xin chào","Tạm biệt","Cảm ơn","Xin lỗi"],
        correctAnswer: "Xin chào"
      },
      {
        id: "act-zh-101-2",
        type: "fill_blank",
        skill: "writing",
        question: "Điền từ: 'Nǐ hǎo _____?' (bạn khỏe không?)",
        prompt: "Điền từ: 'Nǐ hǎo _____?' (bạn khỏe không?)",
        options: ["ma","ba","ne","le"],
        correctAnswer: "ma"
      },
      {
        id: "act-zh-101-3",
        type: "multiple_choice",
        skill: "reading",
        question: "Dịch: 'Zàijiàn'",
        options: ["Tạm biệt","Xin chào","Hẹn gặp lại","Cảm ơn"],
        correctAnswer: "Tạm biệt"
      },
      {
        id: "act-zh-101-4",
        type: "match_pairs",
        skill: "reading",
        question: "Ghép các cặp từ vựng với nghĩa tiếng Việt tương ứng",
        pairs: [{"left":"Nǐ hǎo","right":"Xin chào"},{"left":"Zàijiàn","right":"Tạm biệt"},{"left":"Zǎoshang hǎo","right":"Chào buổi sáng"},{"left":"Míngtiān jiàn","right":"Hẹn gặp lại ngày mai"}],
        correctAnswer: "all_matched"
      },
      {
        id: "act-zh-101-5",
        type: "audio_listen",
        skill: "listening",
        question: "Lắng nghe và chọn đáp án chính xác:",
        prompt: "Nǐ hǎo",
        options: ["Xin chào","Tạm biệt","Cảm ơn","Xin lỗi"],
        correctAnswer: "Xin chào"
      }
    ]
  },
  {
    id: "lesson-zh-102",
    unitId: "unit-zh-1",
    title: "Tên Bạn Là Gì? (Nǐ jiào shénme?)",
    description: "Cách hỏi tên và giới thiệu bản thân bằng tiếng Hán.",
    type: "standard",
    xp: 15,
    estimatedMinutes: 5,
    order: 2,
    status: "available",
    goals: [
      { id: "g1", description: "Nắm vững các từ vựng chủ đề Tên Bạn Là Gì? (Nǐ jiào shénme?)" },
      { id: "g2", description: "Luyện phát âm chuẩn và phản xạ câu qua các bài tập tương tác" }
    ],
    vocabulary: [
      { id: "v-zh-102-1", word: "Wǒ", translation: "Tôi", phonetic: "woh" },
      { id: "v-zh-102-2", word: "Nǐ", translation: "Bạn / Anh / Chị", phonetic: "nee" },
      { id: "v-zh-102-3", word: "Jiào", translation: "Tên gọi là", phonetic: "jyow" },
      { id: "v-zh-102-4", word: "Shénme", translation: "Cái gì", phonetic: "shun-muh" },
      { id: "v-zh-102-5", word: "Míngzi", translation: "Tên", phonetic: "meeng-zee" }
    ],
    phrases: [
      { id: "p-zh-102-1", text: "Wǒ jiào Alex.", translation: "Tôi tên là Alex." },
      { id: "p-zh-102-2", text: "Nǐ jiào shénme míngzi?", translation: "Tên của bạn là gì thế?" }
    ],
    activities: [
      {
        id: "act-zh-102-1",
        type: "multiple_choice",
        skill: "reading",
        question: "'Wǒ jiào Alex' nghĩa là gì?",
        options: ["Tôi tên là Alex","Bạn là Alex","Alex là bạn tôi","Ai là Alex"],
        correctAnswer: "Tôi tên là Alex"
      },
      {
        id: "act-zh-102-2",
        type: "fill_blank",
        skill: "writing",
        question: "Điền từ: 'Wǒ _____ Li Ming.' (tôi tên là)",
        prompt: "Điền từ: 'Wǒ _____ Li Ming.' (tôi tên là)",
        options: ["jiào","shénme","nǐ","míngzi"],
        correctAnswer: "jiào"
      },
      {
        id: "act-zh-102-3",
        type: "multiple_choice",
        skill: "reading",
        question: "Dịch: 'Nǐ jiào shénme?'",
        options: ["Bạn tên gì?","Bạn đi đâu?","Bạn làm gì?","Bạn bao nhiêu tuổi?"],
        correctAnswer: "Bạn tên gì?"
      },
      {
        id: "act-zh-102-4",
        type: "match_pairs",
        skill: "reading",
        question: "Ghép các cặp từ vựng với nghĩa tiếng Việt tương ứng",
        pairs: [{"left":"Wǒ","right":"Tôi"},{"left":"Nǐ","right":"Bạn / Anh / Chị"},{"left":"Jiào","right":"Tên gọi là"},{"left":"Shénme","right":"Cái gì"}],
        correctAnswer: "all_matched"
      },
      {
        id: "act-zh-102-5",
        type: "audio_listen",
        skill: "listening",
        question: "Lắng nghe và chọn đáp án chính xác:",
        prompt: "Wǒ",
        options: ["Tôi tên là Alex","Bạn là Alex","Alex là bạn tôi","Ai là Alex"],
        correctAnswer: "Tôi tên là Alex"
      }
    ]
  },
  {
    id: "lesson-zh-103",
    unitId: "unit-zh-1",
    title: "Cảm Ơn & Xin Lỗi (Xièxie & Duìbuqǐ)",
    description: "Câu nói lịch sự hàng ngày khi giao tiếp.",
    type: "standard",
    xp: 15,
    estimatedMinutes: 5,
    order: 3,
    status: "available",
    goals: [
      { id: "g1", description: "Nắm vững các từ vựng chủ đề Cảm Ơn & Xin Lỗi (Xièxie & Duìbuqǐ)" },
      { id: "g2", description: "Luyện phát âm chuẩn và phản xạ câu qua các bài tập tương tác" }
    ],
    vocabulary: [
      { id: "v-zh-103-1", word: "Xièxie", translation: "Cảm ơn", phonetic: "shyeh-shyeh" },
      { id: "v-zh-103-2", word: "Bú kèqi", translation: "Không có chi / Đừng khách sáo", phonetic: "boo kuh-chee" },
      { id: "v-zh-103-3", word: "Duìbuqǐ", translation: "Xin lỗi", phonetic: "dway-boo-chee" },
      { id: "v-zh-103-4", word: "Méi guānxi", translation: "Không sao đâu", phonetic: "may gwan-shee" },
      { id: "v-zh-103-5", word: "Qǐng", translation: "Xin mời / Làm ơn", phonetic: "cheeng" }
    ],
    phrases: [
      { id: "p-zh-103-1", text: "Fēicháng xièxie nǐ!", translation: "Vô cùng cảm ơn bạn!" },
      { id: "p-zh-103-2", text: "Duìbuqǐ! - Méi guānxi.", translation: "Xin lỗi! - Không sao đâu mà." }
    ],
    activities: [
      {
        id: "act-zh-103-1",
        type: "multiple_choice",
        skill: "reading",
        question: "Đáp lại lời cảm ơn 'Xièxie', người Trung Quốc nói gì?",
        options: ["Bú kèqi","Duìbuqǐ","Zàijiàn","Nǐ hǎo"],
        correctAnswer: "Bú kèqi"
      },
      {
        id: "act-zh-103-2",
        type: "fill_blank",
        skill: "writing",
        question: "Điền từ: 'Duìbuqǐ! - Méi _____.' (không sao)",
        prompt: "Điền từ: 'Duìbuqǐ! - Méi _____.' (không sao)",
        options: ["guānxi","kèqi","xièxie","qǐng"],
        correctAnswer: "guānxi"
      },
      {
        id: "act-zh-103-3",
        type: "multiple_choice",
        skill: "reading",
        question: "Dịch: 'Méi guānxi'",
        options: ["Không sao đâu","Cảm ơn","Tạm biệt","Xin lỗi"],
        correctAnswer: "Không sao đâu"
      },
      {
        id: "act-zh-103-4",
        type: "match_pairs",
        skill: "reading",
        question: "Ghép các cặp từ vựng với nghĩa tiếng Việt tương ứng",
        pairs: [{"left":"Xièxie","right":"Cảm ơn"},{"left":"Bú kèqi","right":"Không có chi / Đừng khách sáo"},{"left":"Duìbuqǐ","right":"Xin lỗi"},{"left":"Méi guānxi","right":"Không sao đâu"}],
        correctAnswer: "all_matched"
      },
      {
        id: "act-zh-103-5",
        type: "audio_listen",
        skill: "listening",
        question: "Lắng nghe và chọn đáp án chính xác:",
        prompt: "Xièxie",
        options: ["Bú kèqi","Duìbuqǐ","Zàijiàn","Nǐ hǎo"],
        correctAnswer: "Bú kèqi"
      }
    ]
  },
  {
    id: "lesson-zh-104",
    unitId: "unit-zh-1",
    title: "Số Đếm 1 - 10 Tiếng Trung (Yī, Èr, Sān)",
    description: "Đếm số từ 1 đến 10 chuẩn âm Bắc Kinh.",
    type: "standard",
    xp: 15,
    estimatedMinutes: 5,
    order: 4,
    status: "available",
    goals: [
      { id: "g1", description: "Nắm vững các từ vựng chủ đề Số Đếm 1 - 10 Tiếng Trung (Yī, Èr, Sān)" },
      { id: "g2", description: "Luyện phát âm chuẩn và phản xạ câu qua các bài tập tương tác" }
    ],
    vocabulary: [
      { id: "v-zh-104-1", word: "Yī / Èr", translation: "Một (1) / Hai (2)", phonetic: "yee / er" },
      { id: "v-zh-104-2", word: "Sān / Sì", translation: "Ba (3) / Bốn (4)", phonetic: "sahn / suh" },
      { id: "v-zh-104-3", word: "Wǔ / Liù", translation: "Năm (5) / Sáu (6)", phonetic: "woo / lyoh" },
      { id: "v-zh-104-4", word: "Qī / Bā", translation: "Bảy (7) / Tám (8)", phonetic: "chee / bah" },
      { id: "v-zh-104-5", word: "Jiǔ / Shí", translation: "Chín (9) / Mười (10)", phonetic: "jyoh / shee" }
    ],
    phrases: [
      { id: "p-zh-104-1", text: "Yī, èr, sān, sì, wǔ!", translation: "Một, hai, ba, bốn, năm!" },
      { id: "p-zh-104-2", text: "Wǒ yào yī ge.", translation: "Tôi muốn một cái." }
    ],
    activities: [
      {
        id: "act-zh-104-1",
        type: "multiple_choice",
        skill: "reading",
        question: "'Shí' trong tiếng Trung là số mấy?",
        options: ["Số 10","Số 4","Số 7","Số 1"],
        correctAnswer: "Số 10"
      },
      {
        id: "act-zh-104-2",
        type: "fill_blank",
        skill: "writing",
        question: "Điền số: 'Yī, èr, _____ (ba)'",
        prompt: "Điền số: 'Yī, èr, _____ (ba)'",
        options: ["sān","sì","wǔ","shí"],
        correctAnswer: "sān"
      },
      {
        id: "act-zh-104-3",
        type: "multiple_choice",
        skill: "reading",
        question: "Số 8 trong tiếng Trung là gì?",
        options: ["Bā","Qī","Liù","Sān"],
        correctAnswer: "Bā"
      },
      {
        id: "act-zh-104-4",
        type: "match_pairs",
        skill: "reading",
        question: "Ghép các cặp từ vựng với nghĩa tiếng Việt tương ứng",
        pairs: [{"left":"Yī / Èr","right":"Một (1) / Hai (2)"},{"left":"Sān / Sì","right":"Ba (3) / Bốn (4)"},{"left":"Wǔ / Liù","right":"Năm (5) / Sáu (6)"},{"left":"Qī / Bā","right":"Bảy (7) / Tám (8)"}],
        correctAnswer: "all_matched"
      },
      {
        id: "act-zh-104-5",
        type: "audio_listen",
        skill: "listening",
        question: "Lắng nghe và chọn đáp án chính xác:",
        prompt: "Yī / Èr",
        options: ["Số 10","Số 4","Số 7","Số 1"],
        correctAnswer: "Số 10"
      }
    ]
  },
  {
    id: "lesson-zh-105",
    unitId: "unit-zh-1",
    title: "AI Practice: Luyện Chào Hỏi Cùng Meiling",
    description: "Thực hành phản xạ tiếng Trung cơ bản cùng cô bạn Meiling ở Bắc Kinh.",
    type: "audio_ai",
    xp: 25,
    estimatedMinutes: 5,
    order: 5,
    heroImage: images.mascotWelcome,
    status: "available",
    goals: [
      { id: "g1", description: "Luyện phản xạ giao tiếp thực tế với AI Teacher Li Wei" },
      { id: "g2", description: "Vận dụng từ vựng trọng tâm vào ngữ cảnh hội thoại tự nhiên" }
    ],
    vocabulary: [
      { id: "v-ai-zh-1-1", word: "Nǐ hǎo", translation: "Xin chào" },
      { id: "v-ai-zh-1-2", word: "Wǒ jiào", translation: "Tôi tên là" },
      { id: "v-ai-zh-1-3", word: "Xièxie", translation: "Cảm ơn" },
      { id: "v-ai-zh-1-4", word: "Duìbuqǐ", translation: "Xin lỗi" },
      { id: "v-ai-zh-1-5", word: "Zàijiàn", translation: "Tạm biệt" }
    ],
    phrases: [],
    activities: [],
    aiTeacherPrompt: {
      scenario: "Gặp gỡ giao lưu sinh viên tại Bắc Kinh",
      systemPrompt: "You are Li Wei, a warm, human, and energetic Chinese teacher. Speak mostly in English for clear guidance. Introduce Chinese words slowly: say the word once, give the English translation, and invite the student to repeat after you. Keep every reply strictly to 1 or 2 conversational sentences with friendly contractions (I'm, let's, that's). Listen closely to the student, praise correct pronunciation, and gently model errors again: 'So close! Try saying —'. Stay strictly on lesson words: Nǐ hǎo, Wǒ jiào, Xièxie, Duìbuqǐ, Zàijiàn. Never switch topics.",
      initialGreeting: "Nǐ hǎo! Nǐ jiào shénme míngzi? Rènshi nǐ hěn gāoxìng!",
      targetVocabulary: ["Nǐ hǎo","Wǒ jiào","Xièxie","Duìbuqǐ","Zàijiàn"],
      suggestedResponses: ["Nǐ hǎo! Wǒ jiào Alex.","Rènshi nǐ hěn gāoxìng!","Xièxie Meiling!"],
      difficulty: "beginner"
    }
  },
  {
    id: "lesson-zh-201",
    unitId: "unit-zh-2",
    title: "Gia Đình Tôi (Wǒ de jiārén)",
    description: "Cách gọi bố, mẹ, anh chị em trong tiếng Trung.",
    type: "standard",
    xp: 15,
    estimatedMinutes: 5,
    order: 1,
    status: "available",
    goals: [
      { id: "g1", description: "Nắm vững các từ vựng chủ đề Gia Đình Tôi (Wǒ de jiārén)" },
      { id: "g2", description: "Luyện phát âm chuẩn và phản xạ câu qua các bài tập tương tác" }
    ],
    vocabulary: [
      { id: "v-zh-201-1", word: "Jiā / Jiārén", translation: "Gia đình / Người nhà", phonetic: "jyah / jyah-ren" },
      { id: "v-zh-201-2", word: "Bàba", translation: "Bố / Ba", phonetic: "bah-bah" },
      { id: "v-zh-201-3", word: "Māma", translation: "Mẹ", phonetic: "mah-mah" },
      { id: "v-zh-201-4", word: "Gēge / Jiějie", translation: "Anh trai / Chị gái", phonetic: "guh-guh / jyeh-jyeh" },
      { id: "v-zh-201-5", word: "Dìdi / Mèimei", translation: "Em trai / Em gái", phonetic: "dee-dee / may-may" }
    ],
    phrases: [
      { id: "p-zh-201-1", text: "Zhè shì wǒ de jiārén.", translation: "Đây là gia đình của tôi." },
      { id: "p-zh-201-2", text: "Wǒ jiā yǒu sì kǒu rén.", translation: "Nhà tôi có 4 người." }
    ],
    activities: [
      {
        id: "act-zh-201-1",
        type: "multiple_choice",
        skill: "reading",
        question: "'Māma' nghĩa là gì?",
        options: ["Mẹ","Bố","Chị gái","Bà"],
        correctAnswer: "Mẹ"
      },
      {
        id: "act-zh-201-2",
        type: "fill_blank",
        skill: "writing",
        question: "Điền từ: 'Zhè shì wǒ de _____.' (bố tôi)",
        prompt: "Điền từ: 'Zhè shì wǒ de _____.' (bố tôi)",
        options: ["bàba","māma","dìdi","jiā"],
        correctAnswer: "bàba"
      },
      {
        id: "act-zh-201-3",
        type: "multiple_choice",
        skill: "reading",
        question: "Dịch: 'Gēge'",
        options: ["Anh trai","Em trai","Bố","Bạn bè"],
        correctAnswer: "Anh trai"
      },
      {
        id: "act-zh-201-4",
        type: "match_pairs",
        skill: "reading",
        question: "Ghép các cặp từ vựng với nghĩa tiếng Việt tương ứng",
        pairs: [{"left":"Jiā / Jiārén","right":"Gia đình / Người nhà"},{"left":"Bàba","right":"Bố / Ba"},{"left":"Māma","right":"Mẹ"},{"left":"Gēge / Jiějie","right":"Anh trai / Chị gái"}],
        correctAnswer: "all_matched"
      },
      {
        id: "act-zh-201-5",
        type: "audio_listen",
        skill: "listening",
        question: "Lắng nghe và chọn đáp án chính xác:",
        prompt: "Jiā / Jiārén",
        options: ["Mẹ","Bố","Chị gái","Bà"],
        correctAnswer: "Mẹ"
      }
    ]
  },
  {
    id: "lesson-zh-202",
    unitId: "unit-zh-2",
    title: "Miêu Tả Bạn Bè (Péngyou)",
    description: "Miêu tả bạn thân tốt bụng, xinh đẹp và hài hước.",
    type: "standard",
    xp: 15,
    estimatedMinutes: 5,
    order: 2,
    status: "available",
    goals: [
      { id: "g1", description: "Nắm vững các từ vựng chủ đề Miêu Tả Bạn Bè (Péngyou)" },
      { id: "g2", description: "Luyện phát âm chuẩn và phản xạ câu qua các bài tập tương tác" }
    ],
    vocabulary: [
      { id: "v-zh-202-1", word: "Péngyou", translation: "Bạn bè", phonetic: "pung-yoh" },
      { id: "v-zh-202-2", word: "Piàoliang", translation: "Xinh đẹp", phonetic: "pyow-lyahng" },
      { id: "v-zh-202-3", word: "Shuài", translation: "Đẹp trai / Soái ca", phonetic: "shwy" },
      { id: "v-zh-202-4", word: "Hǎo", translation: "Tốt / Khỏe", phonetic: "how" },
      { id: "v-zh-202-5", word: "Gāoxìng", translation: "Vui vẻ", phonetic: "gow-sheeng" }
    ],
    phrases: [
      { id: "p-zh-202-1", text: "Tā shì wǒ de hǎo péngyou.", translation: "Cậu ấy là bạn tốt của tôi." },
      { id: "p-zh-202-2", text: "Tā hěn piàoliang!", translation: "Cô ấy rất xinh đẹp!" }
    ],
    activities: [
      {
        id: "act-zh-202-1",
        type: "multiple_choice",
        skill: "reading",
        question: "'Piàoliang' nghĩa là gì?",
        options: ["Xinh đẹp","Đẹp trai","Tốt bụng","Thông minh"],
        correctAnswer: "Xinh đẹp"
      },
      {
        id: "act-zh-202-2",
        type: "fill_blank",
        skill: "writing",
        question: "Điền từ: 'Tā hěn _____.' (rất đẹp trai)",
        prompt: "Điền từ: 'Tā hěn _____.' (rất đẹp trai)",
        options: ["shuài","piàoliang","péngyou","jiā"],
        correctAnswer: "shuài"
      },
      {
        id: "act-zh-202-3",
        type: "multiple_choice",
        skill: "reading",
        question: "Dịch: 'Hǎo péngyou'",
        options: ["Bạn tốt","Gia đình","Thầy cô","Anh em"],
        correctAnswer: "Bạn tốt"
      },
      {
        id: "act-zh-202-4",
        type: "match_pairs",
        skill: "reading",
        question: "Ghép các cặp từ vựng với nghĩa tiếng Việt tương ứng",
        pairs: [{"left":"Péngyou","right":"Bạn bè"},{"left":"Piàoliang","right":"Xinh đẹp"},{"left":"Shuài","right":"Đẹp trai / Soái ca"},{"left":"Hǎo","right":"Tốt / Khỏe"}],
        correctAnswer: "all_matched"
      },
      {
        id: "act-zh-202-5",
        type: "audio_listen",
        skill: "listening",
        question: "Lắng nghe và chọn đáp án chính xác:",
        prompt: "Péngyou",
        options: ["Xinh đẹp","Đẹp trai","Tốt bụng","Thông minh"],
        correctAnswer: "Xinh đẹp"
      }
    ]
  },
  {
    id: "lesson-zh-203",
    unitId: "unit-zh-2",
    title: "Màu Sắc & Quần Áo (Yánsè & Yīfu)",
    description: "Màu sắc đỏ, trắng, đen và các loại trang phục.",
    type: "standard",
    xp: 15,
    estimatedMinutes: 5,
    order: 3,
    status: "available",
    goals: [
      { id: "g1", description: "Nắm vững các từ vựng chủ đề Màu Sắc & Quần Áo (Yánsè & Yīfu)" },
      { id: "g2", description: "Luyện phát âm chuẩn và phản xạ câu qua các bài tập tương tác" }
    ],
    vocabulary: [
      { id: "v-zh-203-1", word: "Hóngsè", translation: "Màu đỏ", phonetic: "hohng-suh" },
      { id: "v-zh-203-2", word: "Báisè", translation: "Màu trắng", phonetic: "bye-suh" },
      { id: "v-zh-203-3", word: "Hēisè", translation: "Màu đen", phonetic: "hay-suh" },
      { id: "v-zh-203-4", word: "Yīfu", translation: "Quần áo", phonetic: "yee-foo" },
      { id: "v-zh-203-5", word: "Xiézi", translation: "Đôi giày", phonetic: "shyeh-zee" }
    ],
    phrases: [
      { id: "p-zh-203-1", text: "Wǒ xǐhuan hóngsè de yīfu.", translation: "Tôi thích quần áo màu đỏ." },
      { id: "p-zh-203-2", text: "Zhè jiàn yīfu hěn hǎokàn.", translation: "Bộ quần áo này rất đẹp." }
    ],
    activities: [
      {
        id: "act-zh-203-1",
        type: "multiple_choice",
        skill: "reading",
        question: "Người Trung Quốc quan niệm màu may mắn nhất là màu gì?",
        options: ["Hóngsè (Màu đỏ)","Báisè (Màu trắng)","Hēisè (Màu đen)","Lánsè (Màu xanh)"],
        correctAnswer: "Hóngsè (Màu đỏ)"
      },
      {
        id: "act-zh-203-2",
        type: "fill_blank",
        skill: "writing",
        question: "Điền từ: 'Wǒ chuān hēisè de _____.' (quần áo)",
        prompt: "Điền từ: 'Wǒ chuān hēisè de _____.' (quần áo)",
        options: ["yīfu","yánsè","hóngsè","xiézi"],
        correctAnswer: "yīfu"
      },
      {
        id: "act-zh-203-3",
        type: "multiple_choice",
        skill: "reading",
        question: "Dịch: 'Báisè de xiézi'",
        options: ["Đôi giày màu trắng","Đôi giày màu đỏ","Chiếc áo màu trắng","Quần áo đen"],
        correctAnswer: "Đôi giày màu trắng"
      },
      {
        id: "act-zh-203-4",
        type: "match_pairs",
        skill: "reading",
        question: "Ghép các cặp từ vựng với nghĩa tiếng Việt tương ứng",
        pairs: [{"left":"Hóngsè","right":"Màu đỏ"},{"left":"Báisè","right":"Màu trắng"},{"left":"Hēisè","right":"Màu đen"},{"left":"Yīfu","right":"Quần áo"}],
        correctAnswer: "all_matched"
      },
      {
        id: "act-zh-203-5",
        type: "audio_listen",
        skill: "listening",
        question: "Lắng nghe và chọn đáp án chính xác:",
        prompt: "Hóngsè",
        options: ["Hóngsè (Màu đỏ)","Báisè (Màu trắng)","Hēisè (Màu đen)","Lánsè (Màu xanh)"],
        correctAnswer: "Hóngsè (Màu đỏ)"
      }
    ]
  },
  {
    id: "lesson-zh-204",
    unitId: "unit-zh-2",
    title: "Sở Thích & Tôi Thích (Xǐhuan)",
    description: "Nói về sở thích âm nhạc, xem phim và du lịch.",
    type: "standard",
    xp: 15,
    estimatedMinutes: 5,
    order: 4,
    status: "available",
    goals: [
      { id: "g1", description: "Nắm vững các từ vựng chủ đề Sở Thích & Tôi Thích (Xǐhuan)" },
      { id: "g2", description: "Luyện phát âm chuẩn và phản xạ câu qua các bài tập tương tác" }
    ],
    vocabulary: [
      { id: "v-zh-204-1", word: "Xǐhuan", translation: "Thích", phonetic: "shee-hwan" },
      { id: "v-zh-204-2", word: "Bù xǐhuan", translation: "Không thích", phonetic: "boo shee-hwan" },
      { id: "v-zh-204-3", word: "Yīnyuè", translation: "Âm nhạc", phonetic: "yeen-yweh" },
      { id: "v-zh-204-4", word: "Diànyǐng", translation: "Phim ảnh", phonetic: "dyen-yeeng" },
      { id: "v-zh-204-5", word: "Lǚyóu", translation: "Du lịch", phonetic: "lyoo-yoh" }
    ],
    phrases: [
      { id: "p-zh-204-1", text: "Wǒ xǐhuan tīng yīnyuè.", translation: "Tôi thích nghe âm nhạc." },
      { id: "p-zh-204-2", text: "Nǐ xǐhuan lǚyóu ma?", translation: "Bạn có thích đi du lịch không?" }
    ],
    activities: [
      {
        id: "act-zh-204-1",
        type: "multiple_choice",
        skill: "reading",
        question: "'Xǐhuan' nghĩa là gì?",
        options: ["Thích","Ghét","Muốn","Đi"],
        correctAnswer: "Thích"
      },
      {
        id: "act-zh-204-2",
        type: "fill_blank",
        skill: "writing",
        question: "Điền từ: 'Wǒ fēicháng _____ lǚyóu.' (rất thích)",
        prompt: "Điền từ: 'Wǒ fēicháng _____ lǚyóu.' (rất thích)",
        options: ["xǐhuan","yīfu","péngyou","jiārén"],
        correctAnswer: "xǐhuan"
      },
      {
        id: "act-zh-204-3",
        type: "multiple_choice",
        skill: "reading",
        question: "Dịch: 'Kàn diànyǐng'",
        options: ["Xem phim","Nghe nhạc","Đi du lịch","Đọc sách"],
        correctAnswer: "Xem phim"
      },
      {
        id: "act-zh-204-4",
        type: "match_pairs",
        skill: "reading",
        question: "Ghép các cặp từ vựng với nghĩa tiếng Việt tương ứng",
        pairs: [{"left":"Xǐhuan","right":"Thích"},{"left":"Bù xǐhuan","right":"Không thích"},{"left":"Yīnyuè","right":"Âm nhạc"},{"left":"Diànyǐng","right":"Phim ảnh"}],
        correctAnswer: "all_matched"
      },
      {
        id: "act-zh-204-5",
        type: "audio_listen",
        skill: "listening",
        question: "Lắng nghe và chọn đáp án chính xác:",
        prompt: "Xǐhuan",
        options: ["Thích","Ghét","Muốn","Đi"],
        correctAnswer: "Thích"
      }
    ]
  },
  {
    id: "lesson-zh-205",
    unitId: "unit-zh-2",
    title: "AI Practice: Gia Đình & Sở Thích Cùng Wang Wei",
    description: "Trò chuyện thân mật về gia đình và các sở thích thường ngày với anh bạn Wang Wei.",
    type: "audio_ai",
    xp: 25,
    estimatedMinutes: 5,
    order: 5,
    heroImage: images.mascotWelcome,
    status: "available",
    goals: [
      { id: "g1", description: "Luyện phản xạ giao tiếp thực tế với AI Teacher Li Wei" },
      { id: "g2", description: "Vận dụng từ vựng trọng tâm vào ngữ cảnh hội thoại tự nhiên" }
    ],
    vocabulary: [
      { id: "v-ai-zh-2-1", word: "Bàba", translation: "Bố / Ba" },
      { id: "v-ai-zh-2-2", word: "Māma", translation: "Mẹ" },
      { id: "v-ai-zh-2-3", word: "Jiārén", translation: "Người nhà" },
      { id: "v-ai-zh-2-4", word: "Xǐhuan", translation: "Thích" },
      { id: "v-ai-zh-2-5", word: "Péngyou", translation: "Bạn bè" }
    ],
    phrases: [],
    activities: [],
    aiTeacherPrompt: {
      scenario: "Quán trà truyền thống ở phố cổ Nam La Cổ Hạng",
      systemPrompt: "You are Li Wei, a warm, human, and energetic Chinese teacher. Speak mostly in English for clear guidance. Introduce Chinese words slowly: say the word once, give the English translation, and invite the student to repeat after you. Keep every reply strictly to 1 or 2 conversational sentences with friendly contractions (I'm, let's, that's). Listen closely to the student, praise correct pronunciation, and gently model errors again: 'So close! Try saying —'. Stay strictly on lesson words: Bàba, Māma, Jiārén, Xǐhuan, Péngyou. Never switch topics.",
      initialGreeting: "Nǐ hǎo! Nǐ jiā yǒu jǐ kǒu rén? Nǐ yǒu shénme àihào?",
      targetVocabulary: ["Bàba","Māma","Jiārén","Xǐhuan","Péngyou"],
      suggestedResponses: ["Wǒ jiā yǒu sì kǒu rén: bàba, māma hé wǒ.","Wǒ xǐhuan tīng yīnyuè!","Wang Wei, nǐ ne?"],
      difficulty: "beginner"
    }
  },
  {
    id: "lesson-zh-301",
    unitId: "unit-zh-3",
    title: "Mấy Giờ Rồi? (Jǐ diǎn le?)",
    description: "Hỏi và nói giờ giấc trong tiếng Trung.",
    type: "standard",
    xp: 15,
    estimatedMinutes: 5,
    order: 1,
    status: "available",
    goals: [
      { id: "g1", description: "Nắm vững các từ vựng chủ đề Mấy Giờ Rồi? (Jǐ diǎn le?)" },
      { id: "g2", description: "Luyện phát âm chuẩn và phản xạ câu qua các bài tập tương tác" }
    ],
    vocabulary: [
      { id: "v-zh-301-1", word: "Xiànzài", translation: "Bây giờ", phonetic: "shyen-zahy" },
      { id: "v-zh-301-2", word: "Diǎn", translation: "Giờ", phonetic: "dyen" },
      { id: "v-zh-301-3", word: "Fēn", translation: "Phút", phonetic: "fun" },
      { id: "v-zh-301-4", word: "Bàn", translation: "Rưỡi / Nửa (30 phút)", phonetic: "bahn" },
      { id: "v-zh-301-5", word: "Zǎoshang / Wǎnshang", translation: "Buổi sáng / Buổi tối", phonetic: "zow-shahng / wahn-shahng" }
    ],
    phrases: [
      { id: "p-zh-301-1", text: "Xiànzài jǐ diǎn le?", translation: "Bây giờ là mấy giờ rồi?" },
      { id: "p-zh-301-2", text: "Xiànzài qī diǎn bàn.", translation: "Bây giờ là 7 giờ rưỡi." }
    ],
    activities: [
      {
        id: "act-zh-301-1",
        type: "multiple_choice",
        skill: "reading",
        question: "'Xiànzài jǐ diǎn le?' nghĩa là gì?",
        options: ["Bây giờ mấy giờ?","Hôm nay thứ mấy?","Đi đâu đấy?","Bao nhiêu tiền?"],
        correctAnswer: "Bây giờ mấy giờ?"
      },
      {
        id: "act-zh-301-2",
        type: "fill_blank",
        skill: "writing",
        question: "Điền từ: 'Xiànzài bā _____ le.' (8 giờ)",
        prompt: "Điền từ: 'Xiànzài bā _____ le.' (8 giờ)",
        options: ["diǎn","fēn","bàn","xiànzài"],
        correctAnswer: "diǎn"
      },
      {
        id: "act-zh-301-3",
        type: "multiple_choice",
        skill: "reading",
        question: "Dịch: 'Bā diǎn bàn'",
        options: ["8 giờ rưỡi","7 giờ rưỡi","8 giờ","9 giờ"],
        correctAnswer: "8 giờ rưỡi"
      },
      {
        id: "act-zh-301-4",
        type: "match_pairs",
        skill: "reading",
        question: "Ghép các cặp từ vựng với nghĩa tiếng Việt tương ứng",
        pairs: [{"left":"Xiànzài","right":"Bây giờ"},{"left":"Diǎn","right":"Giờ"},{"left":"Fēn","right":"Phút"},{"left":"Bàn","right":"Rưỡi / Nửa (30 phút)"}],
        correctAnswer: "all_matched"
      },
      {
        id: "act-zh-301-5",
        type: "audio_listen",
        skill: "listening",
        question: "Lắng nghe và chọn đáp án chính xác:",
        prompt: "Xiànzài",
        options: ["Bây giờ mấy giờ?","Hôm nay thứ mấy?","Đi đâu đấy?","Bao nhiêu tiền?"],
        correctAnswer: "Bây giờ mấy giờ?"
      }
    ]
  },
  {
    id: "lesson-zh-302",
    unitId: "unit-zh-3",
    title: "Thói Quen Hằng Ngày (Měitiān de shēnghuó)",
    description: "Thức dậy, ăn cơm, đi làm và đi ngủ.",
    type: "standard",
    xp: 15,
    estimatedMinutes: 5,
    order: 2,
    status: "available",
    goals: [
      { id: "g1", description: "Nắm vững các từ vựng chủ đề Thói Quen Hằng Ngày (Měitiān de shēnghuó)" },
      { id: "g2", description: "Luyện phát âm chuẩn và phản xạ câu qua các bài tập tương tác" }
    ],
    vocabulary: [
      { id: "v-zh-302-1", word: "Qǐchuáng", translation: "Thức dậy", phonetic: "chee-chwahng" },
      { id: "v-zh-302-2", word: "Shuìjiào", translation: "Đi ngủ", phonetic: "shway-jyow" },
      { id: "v-zh-302-3", word: "Chīfàn", translation: "Ăn cơm / Ăn bữa", phonetic: "chur-fahn" },
      { id: "v-zh-302-4", word: "Hē", translation: "Uống", phonetic: "huh" },
      { id: "v-zh-302-5", word: "Shàngbān", translation: "Đi làm", phonetic: "shahng-bahn" }
    ],
    phrases: [
      { id: "p-zh-302-1", text: "Wǒ qī diǎn qǐchuáng.", translation: "Tôi thức dậy lúc 7 giờ." },
      { id: "p-zh-302-2", text: "Bā diǎn qù shàngbān.", translation: "8 giờ tôi đi làm." }
    ],
    activities: [
      {
        id: "act-zh-302-1",
        type: "multiple_choice",
        skill: "reading",
        question: "'Qǐchuáng' nghĩa là gì?",
        options: ["Thức dậy","Đi ngủ","Ăn cơm","Đi làm"],
        correctAnswer: "Thức dậy"
      },
      {
        id: "act-zh-302-2",
        type: "fill_blank",
        skill: "writing",
        question: "Điền từ: 'Wǒ qī diǎn _____.' (thức dậy)",
        prompt: "Điền từ: 'Wǒ qī diǎn _____.' (thức dậy)",
        options: ["qǐchuáng","shuìjiào","chīfàn","shàngbān"],
        correctAnswer: "qǐchuáng"
      },
      {
        id: "act-zh-302-3",
        type: "multiple_choice",
        skill: "reading",
        question: "Dịch: 'Chī zǎofàn'",
        options: ["Ăn sáng","Ăn trưa","Ăn tối","Đi ngủ"],
        correctAnswer: "Ăn sáng"
      },
      {
        id: "act-zh-302-4",
        type: "match_pairs",
        skill: "reading",
        question: "Ghép các cặp từ vựng với nghĩa tiếng Việt tương ứng",
        pairs: [{"left":"Qǐchuáng","right":"Thức dậy"},{"left":"Shuìjiào","right":"Đi ngủ"},{"left":"Chīfàn","right":"Ăn cơm / Ăn bữa"},{"left":"Hē","right":"Uống"}],
        correctAnswer: "all_matched"
      },
      {
        id: "act-zh-302-5",
        type: "audio_listen",
        skill: "listening",
        question: "Lắng nghe và chọn đáp án chính xác:",
        prompt: "Qǐchuáng",
        options: ["Thức dậy","Đi ngủ","Ăn cơm","Đi làm"],
        correctAnswer: "Thức dậy"
      }
    ]
  },
  {
    id: "lesson-zh-303",
    unitId: "unit-zh-3",
    title: "Các Ngày Trong Tuần (Xīngqī)",
    description: "Thứ Hai đến Chủ Nhật và các ngày hôm nay, ngày mai.",
    type: "standard",
    xp: 15,
    estimatedMinutes: 5,
    order: 3,
    status: "available",
    goals: [
      { id: "g1", description: "Nắm vững các từ vựng chủ đề Các Ngày Trong Tuần (Xīngqī)" },
      { id: "g2", description: "Luyện phát âm chuẩn và phản xạ câu qua các bài tập tương tác" }
    ],
    vocabulary: [
      { id: "v-zh-303-1", word: "Xīngqīyī", translation: "Thứ Hai", phonetic: "sheeng-chee-yee" },
      { id: "v-zh-303-2", word: "Xīngqīwǔ", translation: "Thứ Sáu", phonetic: "sheeng-chee-woo" },
      { id: "v-zh-303-3", word: "Xīngqītiān", translation: "Chủ Nhật", phonetic: "sheeng-chee-tyen" },
      { id: "v-zh-303-4", word: "Jīntiān", translation: "Hôm nay", phonetic: "jeen-tyen" },
      { id: "v-zh-303-5", word: "Míngtiān", translation: "Ngày mai", phonetic: "meeng-tyen" }
    ],
    phrases: [
      { id: "p-zh-303-1", text: "Jīntiān shì xīngqīwǔ!", translation: "Hôm nay là thứ Sáu rồi!" },
      { id: "p-zh-303-2", text: "Míngtiān wǒ xiūxi.", translation: "Ngày mai tôi được nghỉ ngơi." }
    ],
    activities: [
      {
        id: "act-zh-303-1",
        type: "multiple_choice",
        skill: "reading",
        question: "'Xīngqītiān' là ngày nào?",
        options: ["Chủ Nhật","Thứ Hai","Thứ Bảy","Thứ Sáu"],
        correctAnswer: "Chủ Nhật"
      },
      {
        id: "act-zh-303-2",
        type: "fill_blank",
        skill: "writing",
        question: "Điền từ: '_____ shì xīngqīwǔ.' (hôm nay)",
        prompt: "Điền từ: '_____ shì xīngqīwǔ.' (hôm nay)",
        options: ["Jīntiān","Míngtiān","Xiànzài","Diǎn"],
        correctAnswer: "Jīntiān"
      },
      {
        id: "act-zh-303-3",
        type: "multiple_choice",
        skill: "reading",
        question: "Dịch: 'Jīntiān shì xīngqīyī'",
        options: ["Hôm nay là thứ Hai","Hôm nay là thứ Sáu","Ngày mai là thứ Hai","Hôm qua là thứ Hai"],
        correctAnswer: "Hôm nay là thứ Hai"
      },
      {
        id: "act-zh-303-4",
        type: "match_pairs",
        skill: "reading",
        question: "Ghép các cặp từ vựng với nghĩa tiếng Việt tương ứng",
        pairs: [{"left":"Xīngqīyī","right":"Thứ Hai"},{"left":"Xīngqīwǔ","right":"Thứ Sáu"},{"left":"Xīngqītiān","right":"Chủ Nhật"},{"left":"Jīntiān","right":"Hôm nay"}],
        correctAnswer: "all_matched"
      },
      {
        id: "act-zh-303-5",
        type: "audio_listen",
        skill: "listening",
        question: "Lắng nghe và chọn đáp án chính xác:",
        prompt: "Xīngqīyī",
        options: ["Chủ Nhật","Thứ Hai","Thứ Bảy","Thứ Sáu"],
        correctAnswer: "Chủ Nhật"
      }
    ]
  },
  {
    id: "lesson-zh-304",
    unitId: "unit-zh-3",
    title: "Thời Tiết Bốn Mùa (Tiānqì)",
    description: "Nói về thời tiết nắng, mưa, nóng, lạnh.",
    type: "standard",
    xp: 15,
    estimatedMinutes: 5,
    order: 4,
    status: "available",
    goals: [
      { id: "g1", description: "Nắm vững các từ vựng chủ đề Thời Tiết Bốn Mùa (Tiānqì)" },
      { id: "g2", description: "Luyện phát âm chuẩn và phản xạ câu qua các bài tập tương tác" }
    ],
    vocabulary: [
      { id: "v-zh-304-1", word: "Tiānqì", translation: "Thời tiết", phonetic: "tyen-chee" },
      { id: "v-zh-304-2", word: "Qíngtiān", translation: "Trời nắng / Trời đẹp", phonetic: "cheeng-tyen" },
      { id: "v-zh-304-3", word: "Xiàyǔ", translation: "Trời đổ mưa", phonetic: "shyah-yoo" },
      { id: "v-zh-304-4", word: "Rè", translation: "Nóng bức", phonetic: "ruh" },
      { id: "v-zh-304-5", word: "Lěng", translation: "Lạnh giá", phonetic: "lung" }
    ],
    phrases: [
      { id: "p-zh-304-1", text: "Jīntiān tiānqì hěn hǎo.", translation: "Hôm nay thời tiết rất đẹp." },
      { id: "p-zh-304-2", text: "Běijīng de dōngtiān hěn lěng.", translation: "Mùa đông Bắc Kinh rất lạnh." }
    ],
    activities: [
      {
        id: "act-zh-304-1",
        type: "multiple_choice",
        skill: "reading",
        question: "'Xiàyǔ' có nghĩa là gì?",
        options: ["Trời mưa","Trời nắng","Có tuyết","Nhiều mây"],
        correctAnswer: "Trời mưa"
      },
      {
        id: "act-zh-304-2",
        type: "fill_blank",
        skill: "writing",
        question: "Điền từ: 'Jīntiān _____ hěn hǎo.' (thời tiết)",
        prompt: "Điền từ: 'Jīntiān _____ hěn hǎo.' (thời tiết)",
        options: ["tiānqì","xīngqī","diǎn","jīntiān"],
        correctAnswer: "tiānqì"
      },
      {
        id: "act-zh-304-3",
        type: "multiple_choice",
        skill: "reading",
        question: "Dịch: 'Hěn rè'",
        options: ["Rất nóng","Rất lạnh","Mát mẻ","Ấm áp"],
        correctAnswer: "Rất nóng"
      },
      {
        id: "act-zh-304-4",
        type: "match_pairs",
        skill: "reading",
        question: "Ghép các cặp từ vựng với nghĩa tiếng Việt tương ứng",
        pairs: [{"left":"Tiānqì","right":"Thời tiết"},{"left":"Qíngtiān","right":"Trời nắng / Trời đẹp"},{"left":"Xiàyǔ","right":"Trời đổ mưa"},{"left":"Rè","right":"Nóng bức"}],
        correctAnswer: "all_matched"
      },
      {
        id: "act-zh-304-5",
        type: "audio_listen",
        skill: "listening",
        question: "Lắng nghe và chọn đáp án chính xác:",
        prompt: "Tiānqì",
        options: ["Trời mưa","Trời nắng","Có tuyết","Nhiều mây"],
        correctAnswer: "Trời mưa"
      }
    ]
  },
  {
    id: "lesson-zh-305",
    unitId: "unit-zh-3",
    title: "AI Practice: Một Ngày Của Bạn Tại Bắc Kinh",
    description: "Kể cho đồng nghiệp Zhang Min nghe về thời gian biểu một ngày của bạn.",
    type: "audio_ai",
    xp: 25,
    estimatedMinutes: 5,
    order: 5,
    heroImage: images.mascotWelcome,
    status: "available",
    goals: [
      { id: "g1", description: "Luyện phản xạ giao tiếp thực tế với AI Teacher Li Wei" },
      { id: "g2", description: "Vận dụng từ vựng trọng tâm vào ngữ cảnh hội thoại tự nhiên" }
    ],
    vocabulary: [
      { id: "v-ai-zh-3-1", word: "Xiànzài", translation: "Bây giờ" },
      { id: "v-ai-zh-3-2", word: "Qǐchuáng", translation: "Thức dậy" },
      { id: "v-ai-zh-3-3", word: "Tiānqì", translation: "Thời tiết" },
      { id: "v-ai-zh-3-4", word: "Chīfàn", translation: "Ăn cơm / Ăn bữa" },
      { id: "v-ai-zh-3-5", word: "Jīntiān", translation: "Hôm nay" }
    ],
    phrases: [],
    activities: [],
    aiTeacherPrompt: {
      scenario: "Văn phòng làm việc buổi sáng tại khu Triều Dương Bắc Kinh",
      systemPrompt: "You are Li Wei, a warm, human, and energetic Chinese teacher. Speak mostly in English for clear guidance. Introduce Chinese words slowly: say the word once, give the English translation, and invite the student to repeat after you. Keep every reply strictly to 1 or 2 conversational sentences with friendly contractions (I'm, let's, that's). Listen closely to the student, praise correct pronunciation, and gently model errors again: 'So close! Try saying —'. Stay strictly on lesson words: Xiànzài, Qǐchuáng, Tiānqì, Chīfàn, Jīntiān. Never switch topics.",
      initialGreeting: "Zǎoshang hǎo! Jīntiān tiānqì bùcuò, nǐ jǐ diǎn qǐchuáng de?",
      targetVocabulary: ["Xiànzài","Qǐchuáng","Tiānqì","Chīfàn","Jīntiān"],
      suggestedResponses: ["Wǒ qī diǎn bàn qǐchuáng.","Jīntiān tiānqì hěn hǎo!","Wǒ chī le bāozi."],
      difficulty: "beginner"
    }
  },
  {
    id: "lesson-zh-401",
    unitId: "unit-zh-4",
    title: "Tại Nhà Hàng (Fànguǎn)",
    description: "Gọi phục vụ, lấy bàn và xin thực đơn.",
    type: "standard",
    xp: 15,
    estimatedMinutes: 5,
    order: 1,
    status: "available",
    goals: [
      { id: "g1", description: "Nắm vững các từ vựng chủ đề Tại Nhà Hàng (Fànguǎn)" },
      { id: "g2", description: "Luyện phát âm chuẩn và phản xạ câu qua các bài tập tương tác" }
    ],
    vocabulary: [
      { id: "v-zh-401-1", word: "Fúwùyuán", translation: "Người phục vụ", phonetic: "foo-woo-ywen" },
      { id: "v-zh-401-2", word: "Càidān", translation: "Thực đơn món ăn", phonetic: "tsahy-dahn" },
      { id: "v-zh-401-3", word: "Diǎncài", translation: "Gọi món", phonetic: "dyen-tsahy" },
      { id: "v-zh-401-4", word: "Shuǐ", translation: "Nước lọc", phonetic: "shway" },
      { id: "v-zh-401-5", word: "Chá", translation: "Trà", phonetic: "chah" }
    ],
    phrases: [
      { id: "p-zh-401-1", text: "Fúwùyuán, qǐng gěi wǒ càidān.", translation: "Phục vụ ơi, cho tôi xin thực đơn." },
      { id: "p-zh-401-2", text: "Qǐng gěi wǒ yī bēi chá.", translation: "Làm ơn cho tôi một tách trà." }
    ],
    activities: [
      {
        id: "act-zh-401-1",
        type: "multiple_choice",
        skill: "reading",
        question: "Gọi nhân viên phục vụ quán ăn trong tiếng Trung là gì?",
        options: ["Fúwùyuán","Lǎoshī","Péngyou","Bàba"],
        correctAnswer: "Fúwùyuán"
      },
      {
        id: "act-zh-401-2",
        type: "fill_blank",
        skill: "writing",
        question: "Điền từ: 'Fúwùyuán, wǒ yào _____.' (gọi món)",
        prompt: "Điền từ: 'Fúwùyuán, wǒ yào _____.' (gọi món)",
        options: ["diǎncài","càidān","shuǐ","chá"],
        correctAnswer: "diǎncài"
      },
      {
        id: "act-zh-401-3",
        type: "multiple_choice",
        skill: "reading",
        question: "Dịch: 'Qǐng gěi wǒ càidān'",
        options: ["Cho tôi xin thực đơn","Cho tôi nước lọc","Tính tiền","Tạm biệt"],
        correctAnswer: "Cho tôi xin thực đơn"
      },
      {
        id: "act-zh-401-4",
        type: "match_pairs",
        skill: "reading",
        question: "Ghép các cặp từ vựng với nghĩa tiếng Việt tương ứng",
        pairs: [{"left":"Fúwùyuán","right":"Người phục vụ"},{"left":"Càidān","right":"Thực đơn món ăn"},{"left":"Diǎncài","right":"Gọi món"},{"left":"Shuǐ","right":"Nước lọc"}],
        correctAnswer: "all_matched"
      },
      {
        id: "act-zh-401-5",
        type: "audio_listen",
        skill: "listening",
        question: "Lắng nghe và chọn đáp án chính xác:",
        prompt: "Fúwùyuán",
        options: ["Fúwùyuán","Lǎoshī","Péngyou","Bàba"],
        correctAnswer: "Fúwùyuán"
      }
    ]
  },
  {
    id: "lesson-zh-402",
    unitId: "unit-zh-4",
    title: "Gọi Món Ăn Trung Hoa (Baozi & Kaoya)",
    description: "Gọi bánh bao, sủi cảo dim sum, vịt quay Bắc Kinh.",
    type: "standard",
    xp: 15,
    estimatedMinutes: 5,
    order: 2,
    status: "available",
    goals: [
      { id: "g1", description: "Nắm vững các từ vựng chủ đề Gọi Món Ăn Trung Hoa (Baozi & Kaoya)" },
      { id: "g2", description: "Luyện phát âm chuẩn và phản xạ câu qua các bài tập tương tác" }
    ],
    vocabulary: [
      { id: "v-zh-402-1", word: "Bāozi / Jiǎozi", translation: "Bánh bao / Sủi cảo", phonetic: "bow-zee / jyow-zee" },
      { id: "v-zh-402-2", word: "Kǎoyā", translation: "Vịt quay Bắc Kinh", phonetic: "kow-yah" },
      { id: "v-zh-402-3", word: "Hǎochī", translation: "Ngon miệng", phonetic: "how-chur" },
      { id: "v-zh-402-4", word: "Là", translation: "Cay", phonetic: "lah" },
      { id: "v-zh-402-5", word: "Mǐfàn", translation: "Cơm trắng", phonetic: "mee-fahn" }
    ],
    phrases: [
      { id: "p-zh-402-1", text: "Wǒ yào yī fèn kǎoyā.", translation: "Cho tôi một phần vịt quay Bắc Kinh." },
      { id: "p-zh-402-2", text: "Zhè ge cài fēicháng hǎochī!", translation: "Món này ngon tuyệt vời!" }
    ],
    activities: [
      {
        id: "act-zh-402-1",
        type: "multiple_choice",
        skill: "reading",
        question: "'Hǎochī' nghĩa là gì?",
        options: ["Ngon","Cay","Đắt","Nóng"],
        correctAnswer: "Ngon"
      },
      {
        id: "act-zh-402-2",
        type: "fill_blank",
        skill: "writing",
        question: "Điền từ: 'Kǎoyā fēicháng _____!' (ngon)",
        prompt: "Điền từ: 'Kǎoyā fēicháng _____!' (ngon)",
        options: ["hǎochī","fúwùyuán","càidān","shuǐ"],
        correctAnswer: "hǎochī"
      },
      {
        id: "act-zh-402-3",
        type: "multiple_choice",
        skill: "reading",
        question: "Dịch: 'Bù tài là'",
        options: ["Không cay lắm","Rất cay","Không ngon","Rất ngon"],
        correctAnswer: "Không cay lắm"
      },
      {
        id: "act-zh-402-4",
        type: "match_pairs",
        skill: "reading",
        question: "Ghép các cặp từ vựng với nghĩa tiếng Việt tương ứng",
        pairs: [{"left":"Bāozi / Jiǎozi","right":"Bánh bao / Sủi cảo"},{"left":"Kǎoyā","right":"Vịt quay Bắc Kinh"},{"left":"Hǎochī","right":"Ngon miệng"},{"left":"Là","right":"Cay"}],
        correctAnswer: "all_matched"
      },
      {
        id: "act-zh-402-5",
        type: "audio_listen",
        skill: "listening",
        question: "Lắng nghe và chọn đáp án chính xác:",
        prompt: "Bāozi / Jiǎozi",
        options: ["Ngon","Cay","Đắt","Nóng"],
        correctAnswer: "Ngon"
      }
    ]
  },
  {
    id: "lesson-zh-403",
    unitId: "unit-zh-4",
    title: "Văn Hóa Trà Đạo & Bàn Ăn (Gānbēi)",
    description: "Cụng ly và thưởng thức trà thơm Trung Quốc.",
    type: "standard",
    xp: 15,
    estimatedMinutes: 5,
    order: 3,
    status: "available",
    goals: [
      { id: "g1", description: "Nắm vững các từ vựng chủ đề Văn Hóa Trà Đạo & Bàn Ăn (Gānbēi)" },
      { id: "g2", description: "Luyện phát âm chuẩn và phản xạ câu qua các bài tập tương tác" }
    ],
    vocabulary: [
      { id: "v-zh-403-1", word: "Gānbēi", translation: "Cạn ly / 100%!", phonetic: "gahn-bay" },
      { id: "v-zh-403-2", word: "Màn chī", translation: "Chúc ăn ngon miệng", phonetic: "mahn chur" },
      { id: "v-zh-403-3", word: "Hē chá", translation: "Uống trà", phonetic: "huh chah" },
      { id: "v-zh-403-4", word: "È le", translation: "Đói bụng rồi", phonetic: "uh luh" },
      { id: "v-zh-403-5", word: "Bǎo le", translation: "No bụng rồi", phonetic: "bow luh" }
    ],
    phrases: [
      { id: "p-zh-403-1", text: "Gānbēi! Wèi wǒmen de yǒuyì gānbēi!", translation: "Cạn ly! Vì tình bạn của chúng ta cạn ly!" },
      { id: "p-zh-403-2", text: "Wǒ chī bǎo le, xièxie!", translation: "Tôi ăn no rồi, cảm ơn bạn!" }
    ],
    activities: [
      {
        id: "act-zh-403-1",
        type: "multiple_choice",
        skill: "reading",
        question: "Khi nâng ly chúc rượu người Trung Quốc hô to câu gì?",
        options: ["Gānbēi!","Xièxie!","Zàijiàn!","Nǐ hǎo!"],
        correctAnswer: "Gānbēi!"
      },
      {
        id: "act-zh-403-2",
        type: "fill_blank",
        skill: "writing",
        question: "Điền từ: 'Wèi wǒmen de péngyou _____!' (cạn ly)",
        prompt: "Điền từ: 'Wèi wǒmen de péngyou _____!' (cạn ly)",
        options: ["gānbēi","hē chá","è le","mǐfàn"],
        correctAnswer: "gānbēi"
      },
      {
        id: "act-zh-403-3",
        type: "multiple_choice",
        skill: "reading",
        question: "Dịch: 'Wǒ chī bǎo le'",
        options: ["Tôi ăn no rồi","Tôi đói rồi","Tôi muốn ăn","Món này cay quá"],
        correctAnswer: "Tôi ăn no rồi"
      },
      {
        id: "act-zh-403-4",
        type: "match_pairs",
        skill: "reading",
        question: "Ghép các cặp từ vựng với nghĩa tiếng Việt tương ứng",
        pairs: [{"left":"Gānbēi","right":"Cạn ly / 100%!"},{"left":"Màn chī","right":"Chúc ăn ngon miệng"},{"left":"Hē chá","right":"Uống trà"},{"left":"È le","right":"Đói bụng rồi"}],
        correctAnswer: "all_matched"
      },
      {
        id: "act-zh-403-5",
        type: "audio_listen",
        skill: "listening",
        question: "Lắng nghe và chọn đáp án chính xác:",
        prompt: "Gānbēi",
        options: ["Gānbēi!","Xièxie!","Zàijiàn!","Nǐ hǎo!"],
        correctAnswer: "Gānbēi!"
      }
    ]
  },
  {
    id: "lesson-zh-404",
    unitId: "unit-zh-4",
    title: "Thanh Toán & Tính Tiền (Mǎidān)",
    description: "Tính tiền và hỏi giá tiền tệ Nhân Dân Tệ (RMB).",
    type: "standard",
    xp: 15,
    estimatedMinutes: 5,
    order: 4,
    status: "available",
    goals: [
      { id: "g1", description: "Nắm vững các từ vựng chủ đề Thanh Toán & Tính Tiền (Mǎidān)" },
      { id: "g2", description: "Luyện phát âm chuẩn và phản xạ câu qua các bài tập tương tác" }
    ],
    vocabulary: [
      { id: "v-zh-404-1", word: "Mǎidān", translation: "Tính tiền / Thanh toán", phonetic: "my-dahn" },
      { id: "v-zh-404-2", word: "Duōshao qián?", translation: "Bao nhiêu tiền?", phonetic: "dwoh-show chyen" },
      { id: "v-zh-404-3", word: "Kuài / Yuán", translation: "Đồng tệ (NDT)", phonetic: "kwye / ywen" },
      { id: "v-zh-404-4", word: "Shuākǎ", translation: "Quẹt thẻ ngân hàng", phonetic: "shwah-kah" },
      { id: "v-zh-404-5", word: "Wēixìn / Zhīfùbǎo", translation: "WeChat Pay / Alipay", phonetic: "way-sheen / jur-foo-bow" }
    ],
    phrases: [
      { id: "p-zh-404-1", text: "Fúwùyuán, mǎidān!", translation: "Phục vụ ơi, tính tiền!" },
      { id: "p-zh-404-2", text: "Yígòng duōshao qián?", translation: "Tất cả hết bao nhiêu tiền vậy?" }
    ],
    activities: [
      {
        id: "act-zh-404-1",
        type: "multiple_choice",
        skill: "reading",
        question: "Khi muốn thanh toán bữa ăn trong nhà hàng, bạn gọi câu gì?",
        options: ["Fúwùyuán, mǎidān!","Fúwùyuán, nǐ hǎo!","Gānbēi!","Duìbuqǐ!"],
        correctAnswer: "Fúwùyuán, mǎidān!"
      },
      {
        id: "act-zh-404-2",
        type: "fill_blank",
        skill: "writing",
        question: "Điền từ: 'Fúwùyuán, _____!' (tính tiền)",
        prompt: "Điền từ: 'Fúwùyuán, _____!' (tính tiền)",
        options: ["mǎidān","càidān","kǎoyā","jiǎozi"],
        correctAnswer: "mǎidān"
      },
      {
        id: "act-zh-404-3",
        type: "multiple_choice",
        skill: "reading",
        question: "Dịch: 'Duōshao qián?'",
        options: ["Bao nhiêu tiền?","Ở đâu vậy?","Món gì đây?","Ai thế?"],
        correctAnswer: "Bao nhiêu tiền?"
      },
      {
        id: "act-zh-404-4",
        type: "match_pairs",
        skill: "reading",
        question: "Ghép các cặp từ vựng với nghĩa tiếng Việt tương ứng",
        pairs: [{"left":"Mǎidān","right":"Tính tiền / Thanh toán"},{"left":"Duōshao qián?","right":"Bao nhiêu tiền?"},{"left":"Kuài / Yuán","right":"Đồng tệ (NDT)"},{"left":"Shuākǎ","right":"Quẹt thẻ ngân hàng"}],
        correctAnswer: "all_matched"
      },
      {
        id: "act-zh-404-5",
        type: "audio_listen",
        skill: "listening",
        question: "Lắng nghe và chọn đáp án chính xác:",
        prompt: "Mǎidān",
        options: ["Fúwùyuán, mǎidān!","Fúwùyuán, nǐ hǎo!","Gānbēi!","Duìbuqǐ!"],
        correctAnswer: "Fúwùyuán, mǎidān!"
      }
    ]
  },
  {
    id: "lesson-zh-405",
    unitId: "unit-zh-4",
    title: "AI Practice: Gọi Vịt Quay Quán Quanjude",
    description: "Thực hành gọi món vịt quay, sủi cảo và tính tiền cùng bác chủ quán Lao Wang.",
    type: "audio_ai",
    xp: 25,
    estimatedMinutes: 5,
    order: 5,
    heroImage: images.mascotWelcome,
    status: "available",
    goals: [
      { id: "g1", description: "Luyện phản xạ giao tiếp thực tế với AI Teacher Li Wei" },
      { id: "g2", description: "Vận dụng từ vựng trọng tâm vào ngữ cảnh hội thoại tự nhiên" }
    ],
    vocabulary: [
      { id: "v-ai-zh-4-1", word: "Kǎoyā", translation: "Vịt quay Bắc Kinh" },
      { id: "v-ai-zh-4-2", word: "Jiǎozi", translation: "Sủi cảo" },
      { id: "v-ai-zh-4-3", word: "Hǎochī", translation: "Ngon miệng" },
      { id: "v-ai-zh-4-4", word: "Mǎidān", translation: "Tính tiền / Thanh toán" },
      { id: "v-ai-zh-4-5", word: "Duōshao qián", translation: "Bao nhiêu tiền" }
    ],
    phrases: [],
    activities: [],
    aiTeacherPrompt: {
      scenario: "Nhà hàng vịt quay Bắc Kinh truyền thống",
      systemPrompt: "You are Li Wei, a warm, human, and energetic Chinese teacher. Speak mostly in English for clear guidance. Introduce Chinese words slowly: say the word once, give the English translation, and invite the student to repeat after you. Keep every reply strictly to 1 or 2 conversational sentences with friendly contractions (I'm, let's, that's). Listen closely to the student, praise correct pronunciation, and gently model errors again: 'So close! Try saying —'. Stay strictly on lesson words: Kǎoyā, Jiǎozi, Hǎochī, Mǎidān, Duōshao qián. Never switch topics.",
      initialGreeting: "Huānyíng guānglín! Wǒmen de kǎoyā shì Běijīng zuì bàng de, jīntiān xiǎng chī diǎnr shénme?",
      targetVocabulary: ["Kǎoyā","Jiǎozi","Hǎochī","Mǎidān","Duōshao qián"],
      suggestedResponses: ["Wǒ yào yī fèn kǎoyā hé jiǎozi.","Kǎoyā fēicháng hǎochī!","Fúwùyuán, mǎidān!"],
      difficulty: "beginner"
    }
  },
  {
    id: "lesson-zh-501",
    unitId: "unit-zh-5",
    title: "Ở Đâu Vậy? (Zài nǎlǐ?)",
    description: "Hỏi đường và chỉ hướng trong thành phố.",
    type: "standard",
    xp: 15,
    estimatedMinutes: 5,
    order: 1,
    status: "available",
    goals: [
      { id: "g1", description: "Nắm vững các từ vựng chủ đề Ở Đâu Vậy? (Zài nǎlǐ?)" },
      { id: "g2", description: "Luyện phát âm chuẩn và phản xạ câu qua các bài tập tương tác" }
    ],
    vocabulary: [
      { id: "v-zh-501-1", word: "Zài nǎlǐ?", translation: "Ở đâu vậy?", phonetic: "zahy nah-lee" },
      { id: "v-zh-501-2", word: "Zhèlǐ / Nàlǐ", translation: "Ở đây / Ở đó", phonetic: "juh-lee / nah-lee" },
      { id: "v-zh-501-3", word: "Yòubiān", translation: "Bên phải", phonetic: "yoh-byen" },
      { id: "v-zh-501-4", word: "Zuǒbiān", translation: "Bên trái", phonetic: "zwoh-byen" },
      { id: "v-zh-501-5", word: "Yìzhí zǒu", translation: "Đi thẳng một mạch", phonetic: "ee-jur zoh" }
    ],
    phrases: [
      { id: "p-zh-501-1", text: "Qǐngwèn, xǐshǒujiān zài nǎlǐ?", translation: "Xin hỏi, nhà vệ sinh ở đâu vậy?" },
      { id: "p-zh-501-2", text: "Yìzhí zǒu, zài yòubiān.", translation: "Đi thẳng rồi nhìn sang bên phải là thấy." }
    ],
    activities: [
      {
        id: "act-zh-501-1",
        type: "multiple_choice",
        skill: "reading",
        question: "'Xǐshǒujiān' nghĩa là gì?",
        options: ["Nhà vệ sinh","Ga tàu","Khách sạn","Sân bay"],
        correctAnswer: "Nhà vệ sinh"
      },
      {
        id: "act-zh-501-2",
        type: "fill_blank",
        skill: "writing",
        question: "Điền từ: 'Xǐshǒujiān zài _____?' (ở đâu)",
        prompt: "Điền từ: 'Xǐshǒujiān zài _____?' (ở đâu)",
        options: ["nǎlǐ","zhèlǐ","yòubiān","zuǒbiān"],
        correctAnswer: "nǎlǐ"
      },
      {
        id: "act-zh-501-3",
        type: "multiple_choice",
        skill: "reading",
        question: "Dịch: 'Yòubiān'",
        options: ["Bên phải","Bên trái","Đi thẳng","Đằng sau"],
        correctAnswer: "Bên phải"
      },
      {
        id: "act-zh-501-4",
        type: "match_pairs",
        skill: "reading",
        question: "Ghép các cặp từ vựng với nghĩa tiếng Việt tương ứng",
        pairs: [{"left":"Zài nǎlǐ?","right":"Ở đâu vậy?"},{"left":"Zhèlǐ / Nàlǐ","right":"Ở đây / Ở đó"},{"left":"Yòubiān","right":"Bên phải"},{"left":"Zuǒbiān","right":"Bên trái"}],
        correctAnswer: "all_matched"
      },
      {
        id: "act-zh-501-5",
        type: "audio_listen",
        skill: "listening",
        question: "Lắng nghe và chọn đáp án chính xác:",
        prompt: "Zài nǎlǐ?",
        options: ["Nhà vệ sinh","Ga tàu","Khách sạn","Sân bay"],
        correctAnswer: "Nhà vệ sinh"
      }
    ]
  },
  {
    id: "lesson-zh-502",
    unitId: "unit-zh-5",
    title: "Đi Tàu Điện Ngầm & Taxi (Dìtiě & Chūzūchē)",
    description: "Đi tàu điện ngầm Bắc Kinh và gọi taxi Didi.",
    type: "standard",
    xp: 15,
    estimatedMinutes: 5,
    order: 2,
    status: "available",
    goals: [
      { id: "g1", description: "Nắm vững các từ vựng chủ đề Đi Tàu Điện Ngầm & Taxi (Dìtiě & Chūzūchē)" },
      { id: "g2", description: "Luyện phát âm chuẩn và phản xạ câu qua các bài tập tương tác" }
    ],
    vocabulary: [
      { id: "v-zh-502-1", word: "Dìtiě", translation: "Tàu điện ngầm", phonetic: "dee-tyeh" },
      { id: "v-zh-502-2", word: "Dìtiězhàn", translation: "Trạm tàu điện ngầm", phonetic: "dee-tyeh-jahn" },
      { id: "v-zh-502-3", word: "Gōngjiāochē", translation: "Xe buýt", phonetic: "gohng-jow-chuh" },
      { id: "v-zh-502-4", word: "Chūzūchē", translation: "Xe taxi", phonetic: "choo-zoo-chuh" },
      { id: "v-zh-502-5", word: "Piào", translation: "Vé", phonetic: "pyow" }
    ],
    phrases: [
      { id: "p-zh-502-1", text: "Qǐngwèn, dìtiězhàn zài nǎlǐ?", translation: "Xin hỏi trạm tàu điện ngầm ở đâu ạ?" },
      { id: "p-zh-502-2", text: "Wǒ yào qù Tiān'ānmén.", translation: "Tôi muốn đi đến Quảng trường Thiên An Môn." }
    ],
    activities: [
      {
        id: "act-zh-502-1",
        type: "multiple_choice",
        skill: "reading",
        question: "'Dìtiě' là phương tiện gì?",
        options: ["Tàu điện ngầm","Xe buýt","Máy bay","Tàu thủy"],
        correctAnswer: "Tàu điện ngầm"
      },
      {
        id: "act-zh-502-2",
        type: "fill_blank",
        skill: "writing",
        question: "Điền từ: 'Qǐngwèn, _____ zài nǎlǐ?' (trạm tàu điện)",
        prompt: "Điền từ: 'Qǐngwèn, _____ zài nǎlǐ?' (trạm tàu điện)",
        options: ["dìtiězhàn","chūzūchē","piào","yīfu"],
        correctAnswer: "dìtiězhàn"
      },
      {
        id: "act-zh-502-3",
        type: "multiple_choice",
        skill: "reading",
        question: "Dịch: 'Dìtiězhàn'",
        options: ["Trạm tàu điện ngầm","Bến xe buýt","Sân bay","Khách sạn"],
        correctAnswer: "Trạm tàu điện ngầm"
      },
      {
        id: "act-zh-502-4",
        type: "match_pairs",
        skill: "reading",
        question: "Ghép các cặp từ vựng với nghĩa tiếng Việt tương ứng",
        pairs: [{"left":"Dìtiě","right":"Tàu điện ngầm"},{"left":"Dìtiězhàn","right":"Trạm tàu điện ngầm"},{"left":"Gōngjiāochē","right":"Xe buýt"},{"left":"Chūzūchē","right":"Xe taxi"}],
        correctAnswer: "all_matched"
      },
      {
        id: "act-zh-502-5",
        type: "audio_listen",
        skill: "listening",
        question: "Lắng nghe và chọn đáp án chính xác:",
        prompt: "Dìtiě",
        options: ["Tàu điện ngầm","Xe buýt","Máy bay","Tàu thủy"],
        correctAnswer: "Tàu điện ngầm"
      }
    ]
  },
  {
    id: "lesson-zh-503",
    unitId: "unit-zh-5",
    title: "Nhận Phòng Khách Sạn (Jiǔdiàn)",
    description: "Đặt phòng và check-in khách sạn.",
    type: "standard",
    xp: 15,
    estimatedMinutes: 5,
    order: 3,
    status: "available",
    goals: [
      { id: "g1", description: "Nắm vững các từ vựng chủ đề Nhận Phòng Khách Sạn (Jiǔdiàn)" },
      { id: "g2", description: "Luyện phát âm chuẩn và phản xạ câu qua các bài tập tương tác" }
    ],
    vocabulary: [
      { id: "v-zh-503-1", word: "Jiǔdiàn", translation: "Khách sạn", phonetic: "jyoh-dyen" },
      { id: "v-zh-503-2", word: "Yùdìng", translation: "Đặt trước", phonetic: "yoo-deeng" },
      { id: "v-zh-503-3", word: "Fángjiān", translation: "Phòng", phonetic: "fahng-jyen" },
      { id: "v-zh-503-4", word: "Yàoshi", translation: "Chìa khóa", phonetic: "yow-shur" },
      { id: "v-zh-503-5", word: "Wǎngluò / WiFi", translation: "Mạng internet / WiFi", phonetic: "wahng-lwoh" }
    ],
    phrases: [
      { id: "p-zh-503-1", text: "Wǒ yùdìng le yī ge fángjiān.", translation: "Tôi đã đặt trước một phòng." },
      { id: "p-zh-503-2", text: "WiFi mìmǎ shì shénme?", translation: "Mật khẩu WiFi là gì thế ạ?" }
    ],
    activities: [
      {
        id: "act-zh-503-1",
        type: "multiple_choice",
        skill: "reading",
        question: "'Yùdìng' nghĩa là gì?",
        options: ["Đặt trước","Hủy phòng","Trả phòng","Thuê xe"],
        correctAnswer: "Đặt trước"
      },
      {
        id: "act-zh-503-2",
        type: "fill_blank",
        skill: "writing",
        question: "Điền từ: 'Qǐng gěi wǒ fángjiān _____.' (chìa khóa)",
        prompt: "Điền từ: 'Qǐng gěi wǒ fángjiān _____.' (chìa khóa)",
        options: ["yàoshi","jiǔdiàn","yùdìng","wǎngluò"],
        correctAnswer: "yàoshi"
      },
      {
        id: "act-zh-503-3",
        type: "multiple_choice",
        skill: "reading",
        question: "Dịch: 'Fángjiān yàoshi'",
        options: ["Chìa khóa phòng","Số phòng","Thẻ khách sạn","Mật khẩu"],
        correctAnswer: "Chìa khóa phòng"
      },
      {
        id: "act-zh-503-4",
        type: "match_pairs",
        skill: "reading",
        question: "Ghép các cặp từ vựng với nghĩa tiếng Việt tương ứng",
        pairs: [{"left":"Jiǔdiàn","right":"Khách sạn"},{"left":"Yùdìng","right":"Đặt trước"},{"left":"Fángjiān","right":"Phòng"},{"left":"Yàoshi","right":"Chìa khóa"}],
        correctAnswer: "all_matched"
      },
      {
        id: "act-zh-503-5",
        type: "audio_listen",
        skill: "listening",
        question: "Lắng nghe và chọn đáp án chính xác:",
        prompt: "Jiǔdiàn",
        options: ["Đặt trước","Hủy phòng","Trả phòng","Thuê xe"],
        correctAnswer: "Đặt trước"
      }
    ]
  },
  {
    id: "lesson-zh-504",
    unitId: "unit-zh-5",
    title: "Sân Bay Thủ Đô (Shǒudū Jīchǎng)",
    description: "Thủ tục sân bay, vé máy bay và hành lý ký gửi.",
    type: "standard",
    xp: 15,
    estimatedMinutes: 5,
    order: 4,
    status: "available",
    goals: [
      { id: "g1", description: "Nắm vững các từ vựng chủ đề Sân Bay Thủ Đô (Shǒudū Jīchǎng)" },
      { id: "g2", description: "Luyện phát âm chuẩn và phản xạ câu qua các bài tập tương tác" }
    ],
    vocabulary: [
      { id: "v-zh-504-1", word: "Jīchǎng", translation: "Sân bay", phonetic: "jee-chahng" },
      { id: "v-zh-504-2", word: "Fēijī", translation: "Máy bay", phonetic: "fay-jee" },
      { id: "v-zh-504-3", word: "Xíngli", translation: "Hành lý", phonetic: "sheeng-lee" },
      { id: "v-zh-504-4", word: "Hùzhào", translation: "Hộ chiếu", phonetic: "hoo-jow" },
      { id: "v-zh-504-5", word: "Dēngjīpái", translation: "Thẻ lên máy bay", phonetic: "dung-jee-pye" }
    ],
    phrases: [
      { id: "p-zh-504-1", text: "Qǐng chūshì nǐ de hùzhào.", translation: "Làm ơn xuất trình hộ chiếu của bạn." },
      { id: "p-zh-504-2", text: "Qù Běijīng Shǒudū jīchǎng.", translation: "Làm ơn chở tôi đến sân bay Thủ đô Bắc Kinh." }
    ],
    activities: [
      {
        id: "act-zh-504-1",
        type: "multiple_choice",
        skill: "reading",
        question: "'Hùzhào' là giấy tờ gì?",
        options: ["Hộ chiếu","Vé máy bay","Hóa đơn","Thẻ ngân hàng"],
        correctAnswer: "Hộ chiếu"
      },
      {
        id: "act-zh-504-2",
        type: "fill_blank",
        skill: "writing",
        question: "Điền từ: 'Zhè shì wǒ de _____.' (hộ chiếu của tôi)",
        prompt: "Điền từ: 'Zhè shì wǒ de _____.' (hộ chiếu của tôi)",
        options: ["hùzhào","xíngli","fēijī","jīchǎng"],
        correctAnswer: "hùzhào"
      },
      {
        id: "act-zh-504-3",
        type: "multiple_choice",
        skill: "reading",
        question: "Dịch: 'Běijīng jīchǎng'",
        options: ["Sân bay Bắc Kinh","Ga Bắc Kinh","Khách sạn Bắc Kinh","Đường Bắc Kinh"],
        correctAnswer: "Sân bay Bắc Kinh"
      },
      {
        id: "act-zh-504-4",
        type: "match_pairs",
        skill: "reading",
        question: "Ghép các cặp từ vựng với nghĩa tiếng Việt tương ứng",
        pairs: [{"left":"Jīchǎng","right":"Sân bay"},{"left":"Fēijī","right":"Máy bay"},{"left":"Xíngli","right":"Hành lý"},{"left":"Hùzhào","right":"Hộ chiếu"}],
        correctAnswer: "all_matched"
      },
      {
        id: "act-zh-504-5",
        type: "audio_listen",
        skill: "listening",
        question: "Lắng nghe và chọn đáp án chính xác:",
        prompt: "Jīchǎng",
        options: ["Hộ chiếu","Vé máy bay","Hóa đơn","Thẻ ngân hàng"],
        correctAnswer: "Hộ chiếu"
      }
    ]
  },
  {
    id: "lesson-zh-505",
    unitId: "unit-zh-5",
    title: "AI Practice: Đi Tàu & Tham Quan Vạn Lý Trường Thành",
    description: "Hỏi hướng dẫn viên du lịch Chen cách bắt xe buýt đến Vạn Lý Trường Thành (Great Wall).",
    type: "audio_ai",
    xp: 25,
    estimatedMinutes: 5,
    order: 5,
    heroImage: images.mascotWelcome,
    status: "available",
    goals: [
      { id: "g1", description: "Luyện phản xạ giao tiếp thực tế với AI Teacher Li Wei" },
      { id: "g2", description: "Vận dụng từ vựng trọng tâm vào ngữ cảnh hội thoại tự nhiên" }
    ],
    vocabulary: [
      { id: "v-ai-zh-5-1", word: "Chángchéng", translation: "Vạn Lý Trường Thành" },
      { id: "v-ai-zh-5-2", word: "Zài nǎlǐ", translation: "Ở đâu" },
      { id: "v-ai-zh-5-3", word: "Dìtiě", translation: "Tàu điện ngầm" },
      { id: "v-ai-zh-5-4", word: "Piào", translation: "Vé" },
      { id: "v-ai-zh-5-5", word: "Yìzhí zǒu", translation: "Đi thẳng một mạch" }
    ],
    phrases: [],
    activities: [],
    aiTeacherPrompt: {
      scenario: "Trung tâm du lịch tháp Tiền Môn Bắc Kinh",
      systemPrompt: "You are Li Wei, a warm, human, and energetic Chinese teacher. Speak mostly in English for clear guidance. Introduce Chinese words slowly: say the word once, give the English translation, and invite the student to repeat after you. Keep every reply strictly to 1 or 2 conversational sentences with friendly contractions (I'm, let's, that's). Listen closely to the student, praise correct pronunciation, and gently model errors again: 'So close! Try saying —'. Stay strictly on lesson words: Chángchéng, Zài nǎlǐ, Dìtiě, Piào, Yìzhí zǒu. Never switch topics.",
      initialGreeting: "Nǐ hǎo! Xiǎng qù Chángchéng ma? Wǒ kěyǐ bāng nǐ!",
      targetVocabulary: ["Chángchéng","Zài nǎlǐ","Dìtiě","Piào","Yìzhí zǒu"],
      suggestedResponses: ["Qǐngwèn, qù Chángchéng zěnme zǒu?","Piào duōshao qián?","Dìtiězhàn zài nǎlǐ?"],
      difficulty: "beginner"
    }
  },
  {
    id: "lesson-zh-601",
    unitId: "unit-zh-6",
    title: "Mua Sắm Chợ Đêm (Yèshì Mǎidōngxi)",
    description: "Mặc cả giá và mua sắm quà lưu niệm ở chợ đêm Vương Phủ Tỉnh.",
    type: "standard",
    xp: 15,
    estimatedMinutes: 5,
    order: 1,
    status: "available",
    goals: [
      { id: "g1", description: "Nắm vững các từ vựng chủ đề Mua Sắm Chợ Đêm (Yèshì Mǎidōngxi)" },
      { id: "g2", description: "Luyện phát âm chuẩn và phản xạ câu qua các bài tập tương tác" }
    ],
    vocabulary: [
      { id: "v-zh-601-1", word: "Mǎidōngxi", translation: "Mua đồ / Mua sắm", phonetic: "my-dohng-shee" },
      { id: "v-zh-601-2", word: "Tài guì le!", translation: "Đắt quá đi mất!", phonetic: "tye gway luh" },
      { id: "v-zh-601-3", word: "Piányi diǎn", translation: "Bớt rẻ đi một chút", phonetic: "pyen-yee dyen" },
      { id: "v-zh-601-4", word: "Wǒ yào zhège", translation: "Tôi lấy cái này", phonetic: "woh yow juh-guh" },
      { id: "v-zh-601-5", word: "Kěyǐ ma?", translation: "Có được không?", phonetic: "kuh-yee mah" }
    ],
    phrases: [
      { id: "p-zh-601-1", text: "Tài guì le, piányi diǎn ba!", translation: "Đắt quá, bớt cho tôi một chút nhé!" },
      { id: "p-zh-601-2", text: "Zhège duōshao qián? Wǒ yào liǎng ge.", translation: "Cái này bao nhiêu tiền? Tôi lấy hai cái." }
    ],
    activities: [
      {
        id: "act-zh-601-1",
        type: "multiple_choice",
        skill: "reading",
        question: "Câu mặc cả kinh điển khi đi chợ mua đồ ở Trung Quốc là gì?",
        options: ["Tài guì le, piányi diǎn ba!","Xièxie nǐ!","Nǐ hǎo ma?","Zàijiàn!"],
        correctAnswer: "Tài guì le, piányi diǎn ba!"
      },
      {
        id: "act-zh-601-2",
        type: "fill_blank",
        skill: "writing",
        question: "Điền từ: 'Tài _____ le! Piányi diǎn.' (đắt quá)",
        prompt: "Điền từ: 'Tài _____ le! Piányi diǎn.' (đắt quá)",
        options: ["guì","piányi","hǎo","piàoliang"],
        correctAnswer: "guì"
      },
      {
        id: "act-zh-601-3",
        type: "multiple_choice",
        skill: "reading",
        question: "Dịch: 'Wǒ yào zhège'",
        options: ["Tôi lấy cái này","Tôi không thích cái này","Cái này đắt quá","Cái kia ở đâu"],
        correctAnswer: "Tôi lấy cái này"
      },
      {
        id: "act-zh-601-4",
        type: "match_pairs",
        skill: "reading",
        question: "Ghép các cặp từ vựng với nghĩa tiếng Việt tương ứng",
        pairs: [{"left":"Mǎidōngxi","right":"Mua đồ / Mua sắm"},{"left":"Tài guì le!","right":"Đắt quá đi mất!"},{"left":"Piányi diǎn","right":"Bớt rẻ đi một chút"},{"left":"Wǒ yào zhège","right":"Tôi lấy cái này"}],
        correctAnswer: "all_matched"
      },
      {
        id: "act-zh-601-5",
        type: "audio_listen",
        skill: "listening",
        question: "Lắng nghe và chọn đáp án chính xác:",
        prompt: "Mǎidōngxi",
        options: ["Tài guì le, piányi diǎn ba!","Xièxie nǐ!","Nǐ hǎo ma?","Zàijiàn!"],
        correctAnswer: "Tài guì le, piányi diǎn ba!"
      }
    ]
  },
  {
    id: "lesson-zh-602",
    unitId: "unit-zh-6",
    title: "Hẹn Hò Cuối Tuần (Zhōumò Yuēhuì)",
    description: "Rủ bạn bè đi cà phê, xem phim cuối tuần.",
    type: "standard",
    xp: 15,
    estimatedMinutes: 5,
    order: 2,
    status: "available",
    goals: [
      { id: "g1", description: "Nắm vững các từ vựng chủ đề Hẹn Hò Cuối Tuần (Zhōumò Yuēhuì)" },
      { id: "g2", description: "Luyện phát âm chuẩn và phản xạ câu qua các bài tập tương tác" }
    ],
    vocabulary: [
      { id: "v-zh-602-1", word: "Yìqǐ", translation: "Cùng nhau", phonetic: "ee-chee" },
      { id: "v-zh-602-2", word: "Qù", translation: "Đi", phonetic: "chyoo" },
      { id: "v-zh-602-3", word: "Zhōumò", translation: "Cuối tuần", phonetic: "joh-mwoh" },
      { id: "v-zh-602-4", word: "Yǒu kòng ma?", translation: "Có rảnh không?", phonetic: "yoh kohng mah" },
      { id: "v-zh-602-5", word: "Tài hǎo le!", translation: "Tuyệt vời quá!", phonetic: "tye how luh" }
    ],
    phrases: [
      { id: "p-zh-602-1", text: "Zhōumò nǐ yǒu kòng ma?", translation: "Cuối tuần này bạn có rảnh không?" },
      { id: "p-zh-602-2", text: "Wǒmen yìqǐ qù hē kāfēi ba!", translation: "Tụi mình cùng đi uống cà phê nhé!" }
    ],
    activities: [
      {
        id: "act-zh-602-1",
        type: "multiple_choice",
        skill: "reading",
        question: "'Yìqǐ' có nghĩa là gì?",
        options: ["Cùng nhau","Một mình","Đi về","Ngày mai"],
        correctAnswer: "Cùng nhau"
      },
      {
        id: "act-zh-602-2",
        type: "fill_blank",
        skill: "writing",
        question: "Điền từ: 'Wǒmen _____ qù ba.' (cùng nhau đi)",
        prompt: "Điền từ: 'Wǒmen _____ qù ba.' (cùng nhau đi)",
        options: ["yìqǐ","zhōumò","kòng","guì"],
        correctAnswer: "yìqǐ"
      },
      {
        id: "act-zh-602-3",
        type: "multiple_choice",
        skill: "reading",
        question: "Dịch: 'Tài hǎo le!'",
        options: ["Tuyệt vời quá!","Đắt quá!","Xấu quá!","Tạm biệt!"],
        correctAnswer: "Tuyệt vời quá!"
      },
      {
        id: "act-zh-602-4",
        type: "match_pairs",
        skill: "reading",
        question: "Ghép các cặp từ vựng với nghĩa tiếng Việt tương ứng",
        pairs: [{"left":"Yìqǐ","right":"Cùng nhau"},{"left":"Qù","right":"Đi"},{"left":"Zhōumò","right":"Cuối tuần"},{"left":"Yǒu kòng ma?","right":"Có rảnh không?"}],
        correctAnswer: "all_matched"
      },
      {
        id: "act-zh-602-5",
        type: "audio_listen",
        skill: "listening",
        question: "Lắng nghe và chọn đáp án chính xác:",
        prompt: "Yìqǐ",
        options: ["Cùng nhau","Một mình","Đi về","Ngày mai"],
        correctAnswer: "Cùng nhau"
      }
    ]
  },
  {
    id: "lesson-zh-603",
    unitId: "unit-zh-6",
    title: "Nghề Nghiệp & Công Việc (Gōngzuò)",
    description: "Giới thiệu nghề nghiệp: kỹ sư, giáo viên, học sinh.",
    type: "standard",
    xp: 15,
    estimatedMinutes: 5,
    order: 3,
    status: "available",
    goals: [
      { id: "g1", description: "Nắm vững các từ vựng chủ đề Nghề Nghiệp & Công Việc (Gōngzuò)" },
      { id: "g2", description: "Luyện phát âm chuẩn và phản xạ câu qua các bài tập tương tác" }
    ],
    vocabulary: [
      { id: "v-zh-603-1", word: "Gōngzuò", translation: "Công việc / Làm việc", phonetic: "gohng-zwoh" },
      { id: "v-zh-603-2", word: "Lǎoshī", translation: "Thầy cô giáo", phonetic: "low-shur" },
      { id: "v-zh-603-3", word: "Xuéshēng", translation: "Học sinh / Sinh viên", phonetic: "shweh-shung" },
      { id: "v-zh-603-4", word: "Yīshēng", translation: "Bác sĩ", phonetic: "yee-shung" },
      { id: "v-zh-603-5", word: "Gōngsī", translation: "Công ty", phonetic: "gohng-see" }
    ],
    phrases: [
      { id: "p-zh-603-1", text: "Nǐ zuò shénme gōngzuò?", translation: "Bạn làm nghề nghiệp gì?" },
      { id: "p-zh-603-2", text: "Wǒ shì xuéshēng, wǒ zài xuéxí Hànyǔ.", translation: "Tôi là sinh viên, tôi đang học tiếng Hán." }
    ],
    activities: [
      {
        id: "act-zh-603-1",
        type: "multiple_choice",
        skill: "reading",
        question: "'Lǎoshī' nghĩa là gì?",
        options: ["Thầy cô giáo","Học sinh","Bác sĩ","Kỹ sư"],
        correctAnswer: "Thầy cô giáo"
      },
      {
        id: "act-zh-603-2",
        type: "fill_blank",
        skill: "writing",
        question: "Điền từ: 'Tā zài _____ gōngzuò.' (công ty)",
        prompt: "Điền từ: 'Tā zài _____ gōngzuò.' (công ty)",
        options: ["gōngsī","lǎoshī","xuéshēng","yīshēng"],
        correctAnswer: "gōngsī"
      },
      {
        id: "act-zh-603-3",
        type: "multiple_choice",
        skill: "reading",
        question: "Dịch: 'Wǒ shì xuéshēng'",
        options: ["Tôi là học sinh","Tôi là giáo viên","Tôi là bác sĩ","Tôi đi làm"],
        correctAnswer: "Tôi là học sinh"
      },
      {
        id: "act-zh-603-4",
        type: "match_pairs",
        skill: "reading",
        question: "Ghép các cặp từ vựng với nghĩa tiếng Việt tương ứng",
        pairs: [{"left":"Gōngzuò","right":"Công việc / Làm việc"},{"left":"Lǎoshī","right":"Thầy cô giáo"},{"left":"Xuéshēng","right":"Học sinh / Sinh viên"},{"left":"Yīshēng","right":"Bác sĩ"}],
        correctAnswer: "all_matched"
      },
      {
        id: "act-zh-603-5",
        type: "audio_listen",
        skill: "listening",
        question: "Lắng nghe và chọn đáp án chính xác:",
        prompt: "Gōngzuò",
        options: ["Thầy cô giáo","Học sinh","Bác sĩ","Kỹ sư"],
        correctAnswer: "Thầy cô giáo"
      }
    ]
  },
  {
    id: "lesson-zh-604",
    unitId: "unit-zh-6",
    title: "Tình Huống Khẩn Cấp (Jiùmìng a!)",
    description: "Kêu cứu và tìm bệnh viện, gọi cảnh sát 110.",
    type: "standard",
    xp: 15,
    estimatedMinutes: 5,
    order: 4,
    status: "available",
    goals: [
      { id: "g1", description: "Nắm vững các từ vựng chủ đề Tình Huống Khẩn Cấp (Jiùmìng a!)" },
      { id: "g2", description: "Luyện phát âm chuẩn và phản xạ câu qua các bài tập tương tác" }
    ],
    vocabulary: [
      { id: "v-zh-604-1", word: "Jiùmìng", translation: "Cứu mạng / Cứu tôi với", phonetic: "jyoh-meeng" },
      { id: "v-zh-604-2", word: "Yīyuàn", translation: "Bệnh viện", phonetic: "yee-ywen" },
      { id: "v-zh-604-3", word: "Jǐngchá", translation: "Cảnh sát", phonetic: "jeeng-chah" },
      { id: "v-zh-604-4", word: "Bù shūfu", translation: "Thấy không khỏe trong người", phonetic: "boo shoo-foo" },
      { id: "v-zh-604-5", word: "Yàodiàn", translation: "Tiệm thuốc tây", phonetic: "yow-dyen" }
    ],
    phrases: [
      { id: "p-zh-604-1", text: "Jiùmìng a! Wǒ bù shūfu.", translation: "Cứu tôi với! Tôi thấy rất khó chịu trong người." },
      { id: "p-zh-604-2", text: "Fùjìn yǒu yīyuàn ma?", translation: "Gần đây có bệnh viện nào không ạ?" }
    ],
    activities: [
      {
        id: "act-zh-604-1",
        type: "multiple_choice",
        skill: "reading",
        question: "Số điện thoại cảnh sát khẩn cấp ở Trung Quốc là số nào?",
        options: ["110","119","120","911"],
        correctAnswer: "110"
      },
      {
        id: "act-zh-604-2",
        type: "fill_blank",
        skill: "writing",
        question: "Điền từ: 'Jiùmìng a! Wǒ shēntǐ bù _____.' (không khỏe)",
        prompt: "Điền từ: 'Jiùmìng a! Wǒ shēntǐ bù _____.' (không khỏe)",
        options: ["shūfu","yīyuàn","jǐngchá","yàodiàn"],
        correctAnswer: "shūfu"
      },
      {
        id: "act-zh-604-3",
        type: "multiple_choice",
        skill: "reading",
        question: "Dịch: 'Yīyuàn zài nǎlǐ?'",
        options: ["Bệnh viện ở đâu?","Đồn cảnh sát ở đâu?","Tiệm thuốc ở đâu?","Trường học ở đâu?"],
        correctAnswer: "Bệnh viện ở đâu?"
      },
      {
        id: "act-zh-604-4",
        type: "match_pairs",
        skill: "reading",
        question: "Ghép các cặp từ vựng với nghĩa tiếng Việt tương ứng",
        pairs: [{"left":"Jiùmìng","right":"Cứu mạng / Cứu tôi với"},{"left":"Yīyuàn","right":"Bệnh viện"},{"left":"Jǐngchá","right":"Cảnh sát"},{"left":"Bù shūfu","right":"Thấy không khỏe trong người"}],
        correctAnswer: "all_matched"
      },
      {
        id: "act-zh-604-5",
        type: "audio_listen",
        skill: "listening",
        question: "Lắng nghe và chọn đáp án chính xác:",
        prompt: "Jiùmìng",
        options: ["110","119","120","911"],
        correctAnswer: "110"
      }
    ]
  },
  {
    id: "lesson-zh-605",
    unitId: "unit-zh-6",
    title: "AI Practice: Trò Chuyện Tự Do Tốt Nghiệp",
    description: "Trò chuyện tự do cùng cô giáo Li Na chúc mừng bạn hoàn thành 6 Unit tiếng Trung!",
    type: "audio_ai",
    xp: 25,
    estimatedMinutes: 5,
    order: 5,
    heroImage: images.mascotWelcome,
    status: "available",
    goals: [
      { id: "g1", description: "Luyện phản xạ giao tiếp thực tế với AI Teacher Li Wei" },
      { id: "g2", description: "Vận dụng từ vựng trọng tâm vào ngữ cảnh hội thoại tự nhiên" }
    ],
    vocabulary: [
      { id: "v-ai-zh-6-1", word: "Gōngxǐ", translation: "Chúc mừng" },
      { id: "v-ai-zh-6-2", word: "Běijīng", translation: "Bắc Kinh" },
      { id: "v-ai-zh-6-3", word: "Hǎochī", translation: "Ngon miệng" },
      { id: "v-ai-zh-6-4", word: "Xǐhuan", translation: "Thích" },
      { id: "v-ai-zh-6-5", word: "Xièxie", translation: "Cảm ơn" }
    ],
    phrases: [],
    activities: [],
    aiTeacherPrompt: {
      scenario: "Bên hồ Hậu Hải thơ mộng tại Bắc Kinh",
      systemPrompt: "You are Li Wei, a warm, human, and energetic Chinese teacher. Speak mostly in English for clear guidance. Introduce Chinese words slowly: say the word once, give the English translation, and invite the student to repeat after you. Keep every reply strictly to 1 or 2 conversational sentences with friendly contractions (I'm, let's, that's). Listen closely to the student, praise correct pronunciation, and gently model errors again: 'So close! Try saying —'. Stay strictly on lesson words: Gōngxǐ, Běijīng, Hǎochī, Xǐhuan, Xièxie. Never switch topics.",
      initialGreeting: "Gōngxǐ gōngxǐ! Bạn đã hoàn thành 6 Unit tiếng Trung rất xuất sắc. Hôm nay chúng ta cùng trò chuyện tự do nhé!",
      targetVocabulary: ["Gōngxǐ","Běijīng","Hǎochī","Xǐhuan","Xièxie"],
      suggestedResponses: ["Xièxie Li Na lǎoshī!","Wǒ xǐhuan chī kǎoyā hé bāozi.","Hànyǔ hěn yǒuyìsi!"],
      difficulty: "beginner"
    }
  },
  {
    id: "lesson-zh-701",
    unitId: "unit-zh-7",
    title: "Hôm Qua Bạn Đã Làm Gì? (Trợ từ '了' và '过')",
    description: "Học cách dùng trợ từ '了' và '过' để diễn tả hành động đã xảy ra trong quá khứ.",
    type: "standard",
    xp: 15,
    estimatedMinutes: 5,
    order: 1,
    status: "available",
    goals: [
      { id: "g1", description: "Nắm vững các từ vựng chủ đề Hôm Qua Bạn Đã Làm Gì? (Trợ từ '了' và '过')" },
      { id: "g2", description: "Luyện phát âm chuẩn và phản xạ câu qua các bài tập tương tác" }
    ],
    vocabulary: [
      { id: "v-zh-701-1", word: "昨天 (Zuótiān)", translation: "Hôm qua", phonetic: "zuo-tian" },
      { id: "v-zh-701-2", word: "去了 (Qù le)", translation: "Đã đi (quá khứ)", phonetic: "qu le" },
      { id: "v-zh-701-3", word: "吃了 (Chī le)", translation: "Đã ăn", phonetic: "chi le" },
      { id: "v-zh-701-4", word: "看了 (Kàn le)", translation: "Đã xem / Đã thấy", phonetic: "kan le" },
      { id: "v-zh-701-5", word: "买了 (Mǎi le)", translation: "Đã mua", phonetic: "mai le" }
    ],
    phrases: [
      { id: "p-zh-701-1", text: "昨天我和朋友去了公园，吃了很多好吃的。", translation: "Hôm qua tôi và bạn bè đã đi công viên, ăn rất nhiều đồ ăn ngon." },
      { id: "p-zh-701-2", text: "上个周末你做了什么？", translation: "Cuối tuần trước bạn đã làm gì vậy?" }
    ],
    activities: [
      {
        id: "act-zh-701-1",
        type: "multiple_choice",
        skill: "reading",
        question: "'昨天' (Zuótiān) có nghĩa là gì trong tiếng Trung?",
        options: ["Hôm qua","Hôm nay","Ngày mai","Tuần sau"],
        correctAnswer: "Hôm qua"
      },
      {
        id: "act-zh-701-2",
        type: "fill_blank",
        skill: "writing",
        question: "Điền từ: '昨天我_____超市。' (đã đi)",
        prompt: "Điền từ: '昨天我_____超市。' (đã đi)",
        options: ["去了","去","要去","不去"],
        correctAnswer: "去了"
      },
      {
        id: "act-zh-701-3",
        type: "multiple_choice",
        skill: "reading",
        question: "Dịch: '我看了电影' (Wǒ kàn le diànyǐng)",
        options: ["Tôi đã xem phim","Tôi đi làm","Tôi ăn tối","Tôi đi ngủ"],
        correctAnswer: "Tôi đã xem phim"
      },
      {
        id: "act-zh-701-4",
        type: "match_pairs",
        skill: "reading",
        question: "Ghép các cặp từ vựng với nghĩa tiếng Việt tương ứng",
        pairs: [{"left":"昨天 (Zuótiān)","right":"Hôm qua"},{"left":"去了 (Qù le)","right":"Đã đi (quá khứ)"},{"left":"吃了 (Chī le)","right":"Đã ăn"},{"left":"看了 (Kàn le)","right":"Đã xem / Đã thấy"}],
        correctAnswer: "all_matched"
      },
      {
        id: "act-zh-701-5",
        type: "audio_listen",
        skill: "listening",
        question: "Lắng nghe và chọn đáp án chính xác:",
        prompt: "昨天 (Zuótiān)",
        options: ["Hôm qua","Hôm nay","Ngày mai","Tuần sau"],
        correctAnswer: "Hôm qua"
      }
    ]
  },
  {
    id: "lesson-zh-702",
    unitId: "unit-zh-7",
    title: "Kỷ Niệm Tuổi Thơ (Xiǎoshíhou)",
    description: "Kể về quê hương và những ký ức tuổi thơ tươi đẹp.",
    type: "standard",
    xp: 15,
    estimatedMinutes: 5,
    order: 2,
    status: "available",
    goals: [
      { id: "g1", description: "Nắm vững các từ vựng chủ đề Kỷ Niệm Tuổi Thơ (Xiǎoshíhou)" },
      { id: "g2", description: "Luyện phát âm chuẩn và phản xạ câu qua các bài tập tương tác" }
    ],
    vocabulary: [
      { id: "v-zh-702-1", word: "小时候 (Xiǎoshíhou)", translation: "Thuở nhỏ / Thời thơ ấu", phonetic: "xiao-shi-hou" },
      { id: "v-zh-702-2", word: "长大 (Zhǎngdà)", translation: "Lớn lên / Trưởng thành", phonetic: "zhang-da" },
      { id: "v-zh-702-3", word: "故乡 (Gùxiāng)", translation: "Quê hương", phonetic: "gu-xiang" },
      { id: "v-zh-702-4", word: "常常 (Chángcháng)", translation: "Thường xuyên / Thường hay", phonetic: "chang-chang" },
      { id: "v-zh-702-5", word: "回忆 (Huíyì)", translation: "Kỷ niệm / Ký ức", phonetic: "hui-yi" }
    ],
    phrases: [
      { id: "p-zh-702-1", text: "我是在一个美丽的小城镇长大的。", translation: "Tôi đã lớn lên ở một thị trấn nhỏ xinh đẹp." },
      { id: "p-zh-702-2", text: "小时候我常常和小伙伴去河边抓鱼。", translation: "Hồi còn nhỏ tôi thường hay cùng bạn bè ra bờ sông bắt cá." }
    ],
    activities: [
      {
        id: "act-zh-702-1",
        type: "multiple_choice",
        skill: "reading",
        question: "'回忆' (Huíyì) có nghĩa là gì?",
        options: ["Kỷ niệm / Ký ức","Công việc","Trường học","Kỳ nghỉ"],
        correctAnswer: "Kỷ niệm / Ký ức"
      },
      {
        id: "act-zh-702-2",
        type: "fill_blank",
        skill: "writing",
        question: "Điền từ: '我在北京_____。' (lớn lên)",
        prompt: "Điền từ: '我在北京_____。' (lớn lên)",
        options: ["长大","回忆","故乡","小时候"],
        correctAnswer: "长大"
      },
      {
        id: "act-zh-702-3",
        type: "multiple_choice",
        skill: "reading",
        question: "Dịch: '我的故乡' (Wǒ de gùxiāng)",
        options: ["Quê hương của tôi","Trường học của tôi","Nhà của tôi","Xe của tôi"],
        correctAnswer: "Quê hương của tôi"
      },
      {
        id: "act-zh-702-4",
        type: "match_pairs",
        skill: "reading",
        question: "Ghép các cặp từ vựng với nghĩa tiếng Việt tương ứng",
        pairs: [{"left":"小时候 (Xiǎoshíhou)","right":"Thuở nhỏ / Thời thơ ấu"},{"left":"长大 (Zhǎngdà)","right":"Lớn lên / Trưởng thành"},{"left":"故乡 (Gùxiāng)","right":"Quê hương"},{"left":"常常 (Chángcháng)","right":"Thường xuyên / Thường hay"}],
        correctAnswer: "all_matched"
      },
      {
        id: "act-zh-702-5",
        type: "audio_listen",
        skill: "listening",
        question: "Lắng nghe và chọn đáp án chính xác:",
        prompt: "小时候 (Xiǎoshíhou)",
        options: ["Kỷ niệm / Ký ức","Công việc","Trường học","Kỳ nghỉ"],
        correctAnswer: "Kỷ niệm / Ký ức"
      }
    ]
  },
  {
    id: "lesson-zh-703",
    unitId: "unit-zh-7",
    title: "Chuyến Du Lịch Đáng Nhớ (Nánwàng de Lǚxíng)",
    description: "Kể lại chuyến du lịch đáng nhớ và những trải nghiệm khó quên.",
    type: "standard",
    xp: 15,
    estimatedMinutes: 5,
    order: 3,
    status: "available",
    goals: [
      { id: "g1", description: "Nắm vững các từ vựng chủ đề Chuyến Du Lịch Đáng Nhớ (Nánwàng de Lǚxíng)" },
      { id: "g2", description: "Luyện phát âm chuẩn và phản xạ câu qua các bài tập tương tác" }
    ],
    vocabulary: [
      { id: "v-zh-703-1", word: "旅行 (Lǚxíng)", translation: "Chuyến du lịch", phonetic: "lv-xing" },
      { id: "v-zh-703-2", word: "难忘 (Nánwàng)", translation: "Khó quên / Không thể nào quên", phonetic: "nan-wang" },
      { id: "v-zh-703-3", word: "参观 (Cānguān)", translation: "Tham quan / Ghé thăm", phonetic: "can-guan" },
      { id: "v-zh-703-4", word: "遇见 (Yùjiàn)", translation: "Gặp gỡ", phonetic: "yu-jian" },
      { id: "v-zh-703-5", word: "住 (Zhù)", translation: "Ở lại / Trọ lại (khách sạn)", phonetic: "zhu" }
    ],
    phrases: [
      { id: "p-zh-703-1", text: "去年我去上海旅行，那是一次难忘的经历。", translation: "Năm ngoái tôi đi du lịch Thượng Hải, đó là một trải nghiệm khó quên." },
      { id: "p-zh-703-2", text: "我们在海边的一家高级酒店住了一个星期。", translation: "Chúng tôi đã ở một tuần tại khách sạn cao cấp bên bờ biển." }
    ],
    activities: [
      {
        id: "act-zh-703-1",
        type: "multiple_choice",
        skill: "reading",
        question: "'难忘' (Nánwàng) có nghĩa là gì?",
        options: ["Khó quên / Không thể quên","Nhàm chán","Nguy hiểm","Đắt đỏ"],
        correctAnswer: "Khó quên / Không thể quên"
      },
      {
        id: "act-zh-703-2",
        type: "fill_blank",
        skill: "writing",
        question: "Điền từ: '我们在酒店_____了三天。' (đã ở trọ lại)",
        prompt: "Điền từ: '我们在酒店_____了三天。' (đã ở trọ lại)",
        options: ["住","吃","买","旅行"],
        correctAnswer: "住"
      },
      {
        id: "act-zh-703-3",
        type: "multiple_choice",
        skill: "reading",
        question: "Dịch: '我遇见了好朋友'",
        options: ["Tôi đã gặp bạn tốt","Tôi đi làm","Tôi mua sắm","Tôi đọc sách"],
        correctAnswer: "Tôi đã gặp bạn tốt"
      },
      {
        id: "act-zh-703-4",
        type: "match_pairs",
        skill: "reading",
        question: "Ghép các cặp từ vựng với nghĩa tiếng Việt tương ứng",
        pairs: [{"left":"旅行 (Lǚxíng)","right":"Chuyến du lịch"},{"left":"难忘 (Nánwàng)","right":"Khó quên / Không thể nào quên"},{"left":"参观 (Cānguān)","right":"Tham quan / Ghé thăm"},{"left":"遇见 (Yùjiàn)","right":"Gặp gỡ"}],
        correctAnswer: "all_matched"
      },
      {
        id: "act-zh-703-5",
        type: "audio_listen",
        skill: "listening",
        question: "Lắng nghe và chọn đáp án chính xác:",
        prompt: "旅行 (Lǚxíng)",
        options: ["Khó quên / Không thể quên","Nhàm chán","Nguy hiểm","Đắt đỏ"],
        correctAnswer: "Khó quên / Không thể quên"
      }
    ]
  },
  {
    id: "lesson-zh-704",
    unitId: "unit-zh-7",
    title: "Kể Chuyện Theo Trình Tự (Xiān... Ránhòu)",
    description: "Sử dụng các từ nối xiān, ránhòu, tūrán, zuìhòu để kể chuyện mạch lạc.",
    type: "standard",
    xp: 15,
    estimatedMinutes: 5,
    order: 4,
    status: "available",
    goals: [
      { id: "g1", description: "Nắm vững các từ vựng chủ đề Kể Chuyện Theo Trình Tự (Xiān... Ránhòu)" },
      { id: "g2", description: "Luyện phát âm chuẩn và phản xạ câu qua các bài tập tương tác" }
    ],
    vocabulary: [
      { id: "v-zh-704-1", word: "先 (Xiān)", translation: "Trước tiên / Đầu tiên", phonetic: "xian" },
      { id: "v-zh-704-2", word: "然后 (Ránhòu)", translation: "Sau đó / Kế tiếp", phonetic: "ran-hou" },
      { id: "v-zh-704-3", word: "突然 (Tūrán)", translation: "Đột nhiên / Bất ngờ", phonetic: "tu-ran" },
      { id: "v-zh-704-4", word: "最后 (Zuìhòu)", translation: "Cuối cùng", phonetic: "zui-hou" },
      { id: "v-zh-704-5", word: "故事 (Gùshì)", translation: "Câu chuyện", phonetic: "gu-shi" }
    ],
    phrases: [
      { id: "p-zh-704-1", text: "我们先吃了早饭，然后坐高铁出发了。", translation: "Chúng tôi ăn sáng trước, rồi sau đó đi tàu cao tốc khởi hành." },
      { id: "p-zh-704-2", text: "突然天空下起了大雨！", translation: "Đột nhiên trời đổ cơn mưa lớn!" }
    ],
    activities: [
      {
        id: "act-zh-704-1",
        type: "multiple_choice",
        skill: "reading",
        question: "Từ nối nào mang nghĩa 'Đột nhiên / Bất ngờ' trong tiếng Trung?",
        options: ["突然 (Tūrán)","先 (Xiān)","最后 (Zuìhòu)","然后"],
        correctAnswer: "突然 (Tūrán)"
      },
      {
        id: "act-zh-704-2",
        type: "fill_blank",
        skill: "writing",
        question: "Điền từ: '_____我们赢了这场比赛。' (cuối cùng)",
        prompt: "Điền từ: '_____我们赢了这场比赛。' (cuối cùng)",
        options: ["最后","突然","先","昨天"],
        correctAnswer: "最后"
      },
      {
        id: "act-zh-704-3",
        type: "multiple_choice",
        skill: "reading",
        question: "Dịch: '先...然后...'",
        options: ["Trước tiên... sau đó...","Hôm qua và hôm nay","Nhanh và chậm","Vui và buồn"],
        correctAnswer: "Trước tiên... sau đó..."
      },
      {
        id: "act-zh-704-4",
        type: "match_pairs",
        skill: "reading",
        question: "Ghép các cặp từ vựng với nghĩa tiếng Việt tương ứng",
        pairs: [{"left":"先 (Xiān)","right":"Trước tiên / Đầu tiên"},{"left":"然后 (Ránhòu)","right":"Sau đó / Kế tiếp"},{"left":"突然 (Tūrán)","right":"Đột nhiên / Bất ngờ"},{"left":"最后 (Zuìhòu)","right":"Cuối cùng"}],
        correctAnswer: "all_matched"
      },
      {
        id: "act-zh-704-5",
        type: "audio_listen",
        skill: "listening",
        question: "Lắng nghe và chọn đáp án chính xác:",
        prompt: "先 (Xiān)",
        options: ["突然 (Tūrán)","先 (Xiān)","最后 (Zuìhòu)","然后"],
        correctAnswer: "突然 (Tūrán)"
      }
    ]
  },
  {
    id: "lesson-zh-705",
    unitId: "unit-zh-7",
    title: "AI Practice: Kể Lại Kỷ Niệm Cùng Thầy Wang",
    description: "Luyện phản xạ thì quá khứ '了'/'过' và kể kỷ niệm tuổi thơ cùng thầy giáo Wang.",
    type: "audio_ai",
    xp: 25,
    estimatedMinutes: 5,
    order: 5,
    heroImage: images.mascotWelcome,
    status: "available",
    goals: [
      { id: "g1", description: "Luyện phản xạ giao tiếp thực tế với AI Teacher Li Wei" },
      { id: "g2", description: "Vận dụng từ vựng trọng tâm vào ngữ cảnh hội thoại tự nhiên" }
    ],
    vocabulary: [
      { id: "v-ai-zh-7-1", word: "昨天", translation: "Hôm qua" },
      { id: "v-ai-zh-7-2", word: "去了", translation: "Đã đi" },
      { id: "v-ai-zh-7-3", word: "吃了", translation: "Đã ăn" },
      { id: "v-ai-zh-7-4", word: "难忘", translation: "Khó quên" },
      { id: "v-ai-zh-7-5", word: "回忆", translation: "Kỷ niệm" }
    ],
    phrases: [],
    activities: [],
    aiTeacherPrompt: {
      scenario: "Quán trà truyền thống ngắm hoa sen bên bờ Tây Hồ, Hàng Châu",
      systemPrompt: "You are Li Wei, a warm, human, and energetic Chinese teacher. Speak mostly in English for clear guidance. Introduce Chinese words slowly: say the word once, give the English translation, and invite the student to repeat after you. Keep every reply strictly to 1 or 2 conversational sentences with friendly contractions (I'm, let's, that's). Listen closely to the student, praise correct pronunciation, and gently model errors again: 'So close! Try saying —'. Stay strictly on lesson words: 昨天, 去了, 吃了, 难忘, 回忆. Never switch topics.",
      initialGreeting: "你好！很高兴见到你。告诉我，你昨天做了什么？或者有什么难忘的旅行回忆吗？",
      targetVocabulary: ["昨天","去了","吃了","难忘","回忆"],
      suggestedResponses: ["昨天我和朋友去喝奶茶，聊天很开心。","去年我去北京参观了故宫，非常壮观！","那是一次非常难忘的美好回忆。"],
      difficulty: "intermediate"
    }
  },
  {
    id: "lesson-zh-801",
    unitId: "unit-zh-8",
    title: "Triệu Chứng Ốm Sốt (Tóuténg & Fāshāo)",
    description: "Miêu tả các cơn đau và triệu chứng sức khỏe bằng tiếng Trung.",
    type: "standard",
    xp: 15,
    estimatedMinutes: 5,
    order: 1,
    status: "available",
    goals: [
      { id: "g1", description: "Nắm vững các từ vựng chủ đề Triệu Chứng Ốm Sốt (Tóuténg & Fāshāo)" },
      { id: "g2", description: "Luyện phát âm chuẩn và phản xạ câu qua các bài tập tương tác" }
    ],
    vocabulary: [
      { id: "v-zh-801-1", word: "健康 (Jiànkāng)", translation: "Sức khỏe", phonetic: "jian-kang" },
      { id: "v-zh-801-2", word: "头疼 (Tóuténg)", translation: "Đau đầu", phonetic: "tou-teng" },
      { id: "v-zh-801-3", word: "发烧 (Fāshāo)", translation: "Phát sốt", phonetic: "fa-shao" },
      { id: "v-zh-801-4", word: "咳嗽 (Késou)", translation: "Bị ho", phonetic: "ke-sou" },
      { id: "v-zh-801-5", word: "累 (Lèi)", translation: "Mệt mỏi", phonetic: "lei" }
    ],
    phrases: [
      { id: "p-zh-801-1", text: "我从昨天开始头疼，而且有点发烧。", translation: "Tôi bắt đầu bị đau đầu từ hôm qua, hơn nữa còn hơi sốt." },
      { id: "p-zh-801-2", text: "你今天看起来非常累，要注意休息。", translation: "Hôm nay trông bạn rất mệt mỏi, phải chú ý nghỉ ngơi nhé." }
    ],
    activities: [
      {
        id: "act-zh-801-1",
        type: "multiple_choice",
        skill: "reading",
        question: "'头疼' (Tóuténg) có nghĩa là gì?",
        options: ["Đau đầu","Đau chân","Đau răng","Đau bụng"],
        correctAnswer: "Đau đầu"
      },
      {
        id: "act-zh-801-2",
        type: "fill_blank",
        skill: "writing",
        question: "Điền từ: '我肚子很_____。' (đau bụng)",
        prompt: "Điền từ: '我肚子很_____。' (đau bụng)",
        options: ["疼","烧","健康","累"],
        correctAnswer: "疼"
      },
      {
        id: "act-zh-801-3",
        type: "multiple_choice",
        skill: "reading",
        question: "Dịch: '发烧了' (Fāshāo le)",
        options: ["Bị phát sốt","Bị đói bụng","Bị buồn ngủ","Bị đau mắt"],
        correctAnswer: "Bị phát sốt"
      },
      {
        id: "act-zh-801-4",
        type: "match_pairs",
        skill: "reading",
        question: "Ghép các cặp từ vựng với nghĩa tiếng Việt tương ứng",
        pairs: [{"left":"健康 (Jiànkāng)","right":"Sức khỏe"},{"left":"头疼 (Tóuténg)","right":"Đau đầu"},{"left":"发烧 (Fāshāo)","right":"Phát sốt"},{"left":"咳嗽 (Késou)","right":"Bị ho"}],
        correctAnswer: "all_matched"
      },
      {
        id: "act-zh-801-5",
        type: "audio_listen",
        skill: "listening",
        question: "Lắng nghe và chọn đáp án chính xác:",
        prompt: "健康 (Jiànkāng)",
        options: ["Đau đầu","Đau chân","Đau răng","Đau bụng"],
        correctAnswer: "Đau đầu"
      }
    ]
  },
  {
    id: "lesson-zh-802",
    unitId: "unit-zh-8",
    title: "Tại Bệnh Viện (Zài Yīyuàn)",
    description: "Đăng ký khám, giao tiếp với bác sĩ và nghe lời dặn dò.",
    type: "standard",
    xp: 15,
    estimatedMinutes: 5,
    order: 2,
    status: "available",
    goals: [
      { id: "g1", description: "Nắm vững các từ vựng chủ đề Tại Bệnh Viện (Zài Yīyuàn)" },
      { id: "g2", description: "Luyện phát âm chuẩn và phản xạ câu qua các bài tập tương tác" }
    ],
    vocabulary: [
      { id: "v-zh-802-1", word: "医院 (Yīyuàn)", translation: "Bệnh viện", phonetic: "yi-yuan" },
      { id: "v-zh-802-2", word: "医生 (Yīshēng)", translation: "Bác sĩ", phonetic: "yi-sheng" },
      { id: "v-zh-802-3", word: "处方 (Chǔfāng)", translation: "Đơn thuốc", phonetic: "chu-fang" },
      { id: "v-zh-802-4", word: "检查 (Jiǎnchá)", translation: "Khám bệnh / Kiểm tra", phonetic: "jian-cha" },
      { id: "v-zh-802-5", word: "休息 (Xiūxi)", translation: "Nghỉ ngơi", phonetic: "xiu-xi" }
    ],
    phrases: [
      { id: "p-zh-802-1", text: "我明天上午要去医院做身体检查。", translation: "Sáng mai tôi phải đến bệnh viện để khám sức khỏe." },
      { id: "p-zh-802-2", text: "医生说你需要多喝水，好好在家休息。", translation: "Bác sĩ dặn bạn cần uống nhiều nước và nghỉ ngơi thật tốt ở nhà." }
    ],
    activities: [
      {
        id: "act-zh-802-1",
        type: "multiple_choice",
        skill: "reading",
        question: "'处方' (Chǔfāng) của bác sĩ là giấy gì?",
        options: ["Đơn thuốc","Hóa đơn viện phí","Thẻ bảo hiểm","Giấy hẹn khám"],
        correctAnswer: "Đơn thuốc"
      },
      {
        id: "act-zh-802-2",
        type: "fill_blank",
        skill: "writing",
        question: "Điền từ: '今天在家里好好_____。' (nghỉ ngơi)",
        prompt: "Điền từ: '今天在家里好好_____。' (nghỉ ngơi)",
        options: ["休息","医院","医生","处方"],
        correctAnswer: "休息"
      },
      {
        id: "act-zh-802-3",
        type: "multiple_choice",
        skill: "reading",
        question: "Dịch: '好好休息' (Hǎohǎo xiūxi)",
        options: ["Hãy nghỉ ngơi thật tốt nhé","Hãy đi làm việc đi","Hãy uống nước đi","Hãy ăn cơm đi"],
        correctAnswer: "Hãy nghỉ ngơi thật tốt nhé"
      },
      {
        id: "act-zh-802-4",
        type: "match_pairs",
        skill: "reading",
        question: "Ghép các cặp từ vựng với nghĩa tiếng Việt tương ứng",
        pairs: [{"left":"医院 (Yīyuàn)","right":"Bệnh viện"},{"left":"医生 (Yīshēng)","right":"Bác sĩ"},{"left":"处方 (Chǔfāng)","right":"Đơn thuốc"},{"left":"检查 (Jiǎnchá)","right":"Khám bệnh / Kiểm tra"}],
        correctAnswer: "all_matched"
      },
      {
        id: "act-zh-802-5",
        type: "audio_listen",
        skill: "listening",
        question: "Lắng nghe và chọn đáp án chính xác:",
        prompt: "医院 (Yīyuàn)",
        options: ["Đơn thuốc","Hóa đơn viện phí","Thẻ bảo hiểm","Giấy hẹn khám"],
        correctAnswer: "Đơn thuốc"
      }
    ]
  },
  {
    id: "lesson-zh-803",
    unitId: "unit-zh-8",
    title: "Mua Thuốc Ở Hiệu Thuốc (Yàodiàn)",
    description: "Mua thuốc cảm cúm, viên uống và nghe hướng dẫn liều dùng.",
    type: "standard",
    xp: 15,
    estimatedMinutes: 5,
    order: 3,
    status: "available",
    goals: [
      { id: "g1", description: "Nắm vững các từ vựng chủ đề Mua Thuốc Ở Hiệu Thuốc (Yàodiàn)" },
      { id: "g2", description: "Luyện phát âm chuẩn và phản xạ câu qua các bài tập tương tác" }
    ],
    vocabulary: [
      { id: "v-zh-803-1", word: "药店 (Yàodiàn)", translation: "Hiệu thuốc", phonetic: "yao-dian" },
      { id: "v-zh-803-2", word: "药 (Yào)", translation: "Thuốc uống", phonetic: "yao" },
      { id: "v-zh-803-3", word: "药片 (Yàopiàn)", translation: "Viên thuốc nén", phonetic: "yao-pian" },
      { id: "v-zh-803-4", word: "感冒药 (Gǎnmàoyào)", translation: "Thuốc cảm cúm", phonetic: "gan-mao-yao" },
      { id: "v-zh-803-5", word: "饭后 (Fànhòu)", translation: "Sau bữa ăn", phonetic: "fan-hou" }
    ],
    phrases: [
      { id: "p-zh-803-1", text: "这种感冒药请在饭后服用，一次两片。", translation: "Thuốc cảm này xin uống sau bữa ăn, mỗi lần hai viên." },
      { id: "p-zh-803-2", text: "请给我一盒治咳嗽的药。", translation: "Xin bán cho tôi một hộp thuốc trị ho." }
    ],
    activities: [
      {
        id: "act-zh-803-1",
        type: "multiple_choice",
        skill: "reading",
        question: "'饭后' (Fànhòu) chỉ thời điểm nào khi uống thuốc?",
        options: ["Sau bữa ăn","Trước bữa ăn","Khi đang ngủ","Vào sáng sớm"],
        correctAnswer: "Sau bữa ăn"
      },
      {
        id: "act-zh-803-2",
        type: "fill_blank",
        skill: "writing",
        question: "Điền từ: '我去_____买感冒药。' (hiệu thuốc)",
        prompt: "Điền từ: '我去_____买感冒药。' (hiệu thuốc)",
        options: ["药店","医院","饭后","药片"],
        correctAnswer: "药店"
      },
      {
        id: "act-zh-803-3",
        type: "multiple_choice",
        skill: "reading",
        question: "Dịch: '吃药' (Chī yào)",
        options: ["Uống thuốc","Mua thuốc","Bán thuốc","Khám bệnh"],
        correctAnswer: "Uống thuốc"
      },
      {
        id: "act-zh-803-4",
        type: "match_pairs",
        skill: "reading",
        question: "Ghép các cặp từ vựng với nghĩa tiếng Việt tương ứng",
        pairs: [{"left":"药店 (Yàodiàn)","right":"Hiệu thuốc"},{"left":"药 (Yào)","right":"Thuốc uống"},{"left":"药片 (Yàopiàn)","right":"Viên thuốc nén"},{"left":"感冒药 (Gǎnmàoyào)","right":"Thuốc cảm cúm"}],
        correctAnswer: "all_matched"
      },
      {
        id: "act-zh-803-5",
        type: "audio_listen",
        skill: "listening",
        question: "Lắng nghe và chọn đáp án chính xác:",
        prompt: "药店 (Yàodiàn)",
        options: ["Sau bữa ăn","Trước bữa ăn","Khi đang ngủ","Vào sáng sớm"],
        correctAnswer: "Sau bữa ăn"
      }
    ]
  },
  {
    id: "lesson-zh-804",
    unitId: "unit-zh-8",
    title: "Thói Quen Sống Khỏe (Jiànkāng Shēnghuó)",
    description: "Lời khuyên rèn luyện sức khỏe, dinh dưỡng và giấc ngủ với 'Yīnggāi'.",
    type: "standard",
    xp: 15,
    estimatedMinutes: 5,
    order: 4,
    status: "available",
    goals: [
      { id: "g1", description: "Nắm vững các từ vựng chủ đề Thói Quen Sống Khỏe (Jiànkāng Shēnghuó)" },
      { id: "g2", description: "Luyện phát âm chuẩn và phản xạ câu qua các bài tập tương tác" }
    ],
    vocabulary: [
      { id: "v-zh-804-1", word: "运动 (Yùndòng)", translation: "Tập thể dục thể thao", phonetic: "yun-dong" },
      { id: "v-zh-804-2", word: "睡觉 (Shuìjiào)", translation: "Ngủ", phonetic: "shui-jiao" },
      { id: "v-zh-804-3", word: "营养 (Yíngyǎng)", translation: "Dinh dưỡng", phonetic: "ying-yang" },
      { id: "v-zh-804-4", word: "应该 (Yīnggāi)", translation: "Nên làm gì (lời khuyên)", phonetic: "ying-gai" },
      { id: "v-zh-804-5", word: "精神 (Jīngshén)", translation: "Tinh thần / Tràn đầy sinh lực", phonetic: "jing-shen" }
    ],
    phrases: [
      { id: "p-zh-804-1", text: "每天应该睡满八个小时，这样才健康。", translation: "Mỗi ngày nên ngủ đủ tám tiếng, như vậy mới khỏe mạnh." },
      { id: "p-zh-804-2", text: "经常坚持运动能让人保持好身材。", translation: "Thường xuyên kiên trì tập thể dục giúp giữ gìn vóc dáng đẹp." }
    ],
    activities: [
      {
        id: "act-zh-804-1",
        type: "multiple_choice",
        skill: "reading",
        question: "Từ '应该' (Yīnggāi) dùng để diễn đạt điều gì?",
        options: ["Lời khuyên nên làm điều gì","Hỏi đường đi","Chào tạm biệt","Từ chối đề nghị"],
        correctAnswer: "Lời khuyên nên làm điều gì"
      },
      {
        id: "act-zh-804-2",
        type: "fill_blank",
        skill: "writing",
        question: "Điền từ: '早点_____身体好。' (ngủ)",
        prompt: "Điền từ: '早点_____身体好。' (ngủ)",
        options: ["睡觉","运动","药店","健康"],
        correctAnswer: "睡觉"
      },
      {
        id: "act-zh-804-3",
        type: "multiple_choice",
        skill: "reading",
        question: "Dịch: '应该多运动'",
        options: ["Nên tập thể dục nhiều hơn","Không nên ăn","Đang ngủ say","Bị ốm nặng"],
        correctAnswer: "Nên tập thể dục nhiều hơn"
      },
      {
        id: "act-zh-804-4",
        type: "match_pairs",
        skill: "reading",
        question: "Ghép các cặp từ vựng với nghĩa tiếng Việt tương ứng",
        pairs: [{"left":"运动 (Yùndòng)","right":"Tập thể dục thể thao"},{"left":"睡觉 (Shuìjiào)","right":"Ngủ"},{"left":"营养 (Yíngyǎng)","right":"Dinh dưỡng"},{"left":"应该 (Yīnggāi)","right":"Nên làm gì (lời khuyên)"}],
        correctAnswer: "all_matched"
      },
      {
        id: "act-zh-804-5",
        type: "audio_listen",
        skill: "listening",
        question: "Lắng nghe và chọn đáp án chính xác:",
        prompt: "运动 (Yùndòng)",
        options: ["Lời khuyên nên làm điều gì","Hỏi đường đi","Chào tạm biệt","Từ chối đề nghị"],
        correctAnswer: "Lời khuyên nên làm điều gì"
      }
    ]
  },
  {
    id: "lesson-zh-805",
    unitId: "unit-zh-8",
    title: "AI Practice: Thăm Khám Sức Khỏe Cùng Bác Sĩ Li",
    description: "Thực hành đối thoại bác sĩ - bệnh nhân bằng tiếng Trung cùng bác sĩ Li.",
    type: "audio_ai",
    xp: 25,
    estimatedMinutes: 5,
    order: 5,
    heroImage: images.mascotWelcome,
    status: "available",
    goals: [
      { id: "g1", description: "Luyện phản xạ giao tiếp thực tế với AI Teacher Li Wei" },
      { id: "g2", description: "Vận dụng từ vựng trọng tâm vào ngữ cảnh hội thoại tự nhiên" }
    ],
    vocabulary: [
      { id: "v-ai-zh-8-1", word: "头疼", translation: "Đau đầu" },
      { id: "v-ai-zh-8-2", word: "发烧", translation: "Sốt" },
      { id: "v-ai-zh-8-3", word: "药店", translation: "Tiệm thuốc" },
      { id: "v-ai-zh-8-4", word: "好好休息", translation: "Nghỉ ngơi cho tốt" },
      { id: "v-ai-zh-8-5", word: "饭后吃药", translation: "Uống thuốc sau bữa ăn" }
    ],
    phrases: [],
    activities: [],
    aiTeacherPrompt: {
      scenario: "Phòng khám tư ấm cúng ở trung tâm quận Triều Dương, Bắc Kinh",
      systemPrompt: "You are Li Wei, a warm, human, and energetic Chinese teacher. Speak mostly in English for clear guidance. Introduce Chinese words slowly: say the word once, give the English translation, and invite the student to repeat after you. Keep every reply strictly to 1 or 2 conversational sentences with friendly contractions (I'm, let's, that's). Listen closely to the student, praise correct pronunciation, and gently model errors again: 'So close! Try saying —'. Stay strictly on lesson words: 头疼, 发烧, 药店, 好好休息, 饭后吃药. Never switch topics.",
      initialGreeting: "请坐！请问你哪里觉得不舒服？有没有发烧或者咳嗽？",
      targetVocabulary: ["头疼","发烧","药店","好好休息","饭后吃药"],
      suggestedResponses: ["李医生，我从昨天开始头很疼，而且有点发烧。","嗓子也疼，一直在咳嗽。","请给我开一些饭后吃的药。"],
      difficulty: "intermediate"
    }
  },
  {
    id: "lesson-zh-901",
    unitId: "unit-zh-9",
    title: "Một Ngày Tại Công Ty (Gōngsī de Yītiān)",
    description: "Mô tả công việc văn phòng, đồng nghiệp và sinh hoạt công sở.",
    type: "standard",
    xp: 15,
    estimatedMinutes: 5,
    order: 1,
    status: "available",
    goals: [
      { id: "g1", description: "Nắm vững các từ vựng chủ đề Một Ngày Tại Công Ty (Gōngsī de Yītiān)" },
      { id: "g2", description: "Luyện phát âm chuẩn và phản xạ câu qua các bài tập tương tác" }
    ],
    vocabulary: [
      { id: "v-zh-901-1", word: "公司 (Gōngsī)", translation: "Công ty", phonetic: "gong-si" },
      { id: "v-zh-901-2", word: "同事 (Tóngshì)", translation: "Đồng nghiệp", phonetic: "tong-shi" },
      { id: "v-zh-901-3", word: "开会 (Kāihuì)", translation: "Họp hành / Cuộc họp", phonetic: "kai-hui" },
      { id: "v-zh-901-4", word: "项目 (Xiàngmù)", translation: "Dự án công việc", phonetic: "xiang-mu" },
      { id: "v-zh-901-5", word: "经理 (Jīnglǐ)", translation: "Giám đốc / Trưởng phòng", phonetic: "jing-li" }
    ],
    phrases: [
      { id: "p-zh-901-1", text: "每周一早上我们部门都要开例会。", translation: "Sáng thứ Hai hàng tuần bộ phận chúng tôi đều họp giao ban." },
      { id: "p-zh-901-2", text: "我和同事们正在合作负责一个新项目。", translation: "Tôi và các đồng nghiệp đang hợp tác phụ trách một dự án mới." }
    ],
    activities: [
      {
        id: "act-zh-901-1",
        type: "multiple_choice",
        skill: "reading",
        question: "'同事' (Tóngshì) là ai?",
        options: ["Đồng nghiệp","Khách hàng","Thầy giáo","Hàng xóm"],
        correctAnswer: "Đồng nghiệp"
      },
      {
        id: "act-zh-901-2",
        type: "fill_blank",
        skill: "writing",
        question: "Điền từ: '我和_____商量一下。' (đồng nghiệp)",
        prompt: "Điền từ: '我和_____商量一下。' (đồng nghiệp)",
        options: ["同事","项目","开会","公司"],
        correctAnswer: "同事"
      },
      {
        id: "act-zh-901-3",
        type: "multiple_choice",
        skill: "reading",
        question: "Dịch: '九点开会' (Jiǔ diǎn kāihuì)",
        options: ["Cuộc họp lúc 9 giờ","Công ty đóng cửa lúc 9h","Giờ ăn trưa lúc 9h","Sếp đến lúc 9h"],
        correctAnswer: "Cuộc họp lúc 9 giờ"
      },
      {
        id: "act-zh-901-4",
        type: "match_pairs",
        skill: "reading",
        question: "Ghép các cặp từ vựng với nghĩa tiếng Việt tương ứng",
        pairs: [{"left":"公司 (Gōngsī)","right":"Công ty"},{"left":"同事 (Tóngshì)","right":"Đồng nghiệp"},{"left":"开会 (Kāihuì)","right":"Họp hành / Cuộc họp"},{"left":"项目 (Xiàngmù)","right":"Dự án công việc"}],
        correctAnswer: "all_matched"
      },
      {
        id: "act-zh-901-5",
        type: "audio_listen",
        skill: "listening",
        question: "Lắng nghe và chọn đáp án chính xác:",
        prompt: "公司 (Gōngsī)",
        options: ["Đồng nghiệp","Khách hàng","Thầy giáo","Hàng xóm"],
        correctAnswer: "Đồng nghiệp"
      }
    ]
  },
  {
    id: "lesson-zh-902",
    unitId: "unit-zh-9",
    title: "Viết Email Công Việc (Gōngzuò Yóujiàn)",
    description: "Mẫu câu liên lạc thư tín trang trọng Nín hǎo, Qǐng cháshōu và Zhù hǎo.",
    type: "standard",
    xp: 15,
    estimatedMinutes: 5,
    order: 2,
    status: "available",
    goals: [
      { id: "g1", description: "Nắm vững các từ vựng chủ đề Viết Email Công Việc (Gōngzuò Yóujiàn)" },
      { id: "g2", description: "Luyện phát âm chuẩn và phản xạ câu qua các bài tập tương tác" }
    ],
    vocabulary: [
      { id: "v-zh-902-1", word: "邮件 (Yóujiàn)", translation: "Thư điện tử / Email", phonetic: "you-jian" },
      { id: "v-zh-902-2", word: "请查收 (Qǐng cháshōu)", translation: "Xin vui lòng kiểm tra nhận", phonetic: "qing cha-shou" },
      { id: "v-zh-902-3", word: "祝好 (Zhù hǎo)", translation: "Chúc mọi điều tốt lành (cuối thư)", phonetic: "zhu hao" },
      { id: "v-zh-902-4", word: "附件 (Fùjiàn)", translation: "Tệp đính kèm email", phonetic: "fu-jian" },
      { id: "v-zh-902-5", word: "确认 (Quèrèn)", translation: "Xác nhận / Kiểm tra", phonetic: "que-ren" }
    ],
    phrases: [
      { id: "p-zh-902-1", text: "工作报告在附件中，请查收并确认。", translation: "Báo cáo công việc ở trong tệp đính kèm, xin kiểm tra nhận và xác nhận." },
      { id: "p-zh-902-2", text: "非常感谢您的快速回复！祝好！", translation: "Rất cảm ơn phản hồi nhanh chóng của ngài! Chúc ngài mọi điều tốt lành!" }
    ],
    activities: [
      {
        id: "act-zh-902-1",
        type: "multiple_choice",
        skill: "reading",
        question: "'请查收' (Qǐng cháshōu) thường được dùng trong ngữ cảnh nào?",
        options: ["Khi gửi tài liệu đính kèm qua email","Khi đi chợ mua đồ","Khi ăn cơm","Khi đi ngủ"],
        correctAnswer: "Khi gửi tài liệu đính kèm qua email"
      },
      {
        id: "act-zh-902-2",
        type: "fill_blank",
        skill: "writing",
        question: "Điền từ: '请您_____一下会议时间。' (xác nhận)",
        prompt: "Điền từ: '请您_____一下会议时间。' (xác nhận)",
        options: ["确认","邮件","公司","同事"],
        correctAnswer: "确认"
      },
      {
        id: "act-zh-902-3",
        type: "multiple_choice",
        skill: "reading",
        question: "Dịch: '请看附件' (Qǐng kàn fùjiàn)",
        options: ["Xin vui lòng xem tệp đính kèm","Chữ ký thư","Tiêu đề","Hộp thư rác"],
        correctAnswer: "Xin vui lòng xem tệp đính kèm"
      },
      {
        id: "act-zh-902-4",
        type: "match_pairs",
        skill: "reading",
        question: "Ghép các cặp từ vựng với nghĩa tiếng Việt tương ứng",
        pairs: [{"left":"邮件 (Yóujiàn)","right":"Thư điện tử / Email"},{"left":"请查收 (Qǐng cháshōu)","right":"Xin vui lòng kiểm tra nhận"},{"left":"祝好 (Zhù hǎo)","right":"Chúc mọi điều tốt lành (cuối thư)"},{"left":"附件 (Fùjiàn)","right":"Tệp đính kèm email"}],
        correctAnswer: "all_matched"
      },
      {
        id: "act-zh-902-5",
        type: "audio_listen",
        skill: "listening",
        question: "Lắng nghe và chọn đáp án chính xác:",
        prompt: "邮件 (Yóujiàn)",
        options: ["Khi gửi tài liệu đính kèm qua email","Khi đi chợ mua đồ","Khi ăn cơm","Khi đi ngủ"],
        correctAnswer: "Khi gửi tài liệu đính kèm qua email"
      }
    ]
  },
  {
    id: "lesson-zh-903",
    unitId: "unit-zh-9",
    title: "Phỏng Vấn Xin Việc (Miànshì)",
    description: "Giới thiệu bản thân, trình bày kinh nghiệm và ưu điểm cá nhân.",
    type: "standard",
    xp: 15,
    estimatedMinutes: 5,
    order: 3,
    status: "available",
    goals: [
      { id: "g1", description: "Nắm vững các từ vựng chủ đề Phỏng Vấn Xin Việc (Miànshì)" },
      { id: "g2", description: "Luyện phát âm chuẩn và phản xạ câu qua các bài tập tương tác" }
    ],
    vocabulary: [
      { id: "v-zh-903-1", word: "面试 (Miànshì)", translation: "Buổi phỏng vấn xin việc", phonetic: "mian-shi" },
      { id: "v-zh-903-2", word: "简历 (Jiǎnlì)", translation: "Sơ yếu lý lịch / CV", phonetic: "jian-li" },
      { id: "v-zh-903-3", word: "经验 (Jīngyàn)", translation: "Kinh nghiệm làm việc", phonetic: "jing-yan" },
      { id: "v-zh-903-4", word: "优点 (Yōudiǎn)", translation: "Điểm mạnh / Ưu điểm", phonetic: "you-dian" },
      { id: "v-zh-903-5", word: "积极 (Jījí)", translation: "Tích cực / Chủ động", phonetic: "ji-ji" }
    ],
    phrases: [
      { id: "p-zh-903-1", text: "我在这家行业有三年的相关工作经验。", translation: "Tôi có ba năm kinh nghiệm làm việc liên quan trong ngành này." },
      { id: "p-zh-903-2", text: "我的最大优点是做事认真且很有团队精神。", translation: "Ưu điểm lớn nhất của tôi là làm việc cẩn thận và rất có tinh thần đồng đội." }
    ],
    activities: [
      {
        id: "act-zh-903-1",
        type: "multiple_choice",
        skill: "reading",
        question: "'优点' (Yōudiǎn) có nghĩa là gì?",
        options: ["Điểm mạnh / Ưu điểm","Điểm yếu","Mức lương","Địa chỉ nhà"],
        correctAnswer: "Điểm mạnh / Ưu điểm"
      },
      {
        id: "act-zh-903-2",
        type: "fill_blank",
        skill: "writing",
        question: "Điền từ: '我有丰富的_____。' (kinh nghiệm)",
        prompt: "Điền từ: '我有丰富的_____。' (kinh nghiệm)",
        options: ["经验","简历","面试","优点"],
        correctAnswer: "经验"
      },
      {
        id: "act-zh-903-3",
        type: "multiple_choice",
        skill: "reading",
        question: "Dịch: '参加面试' (Cānjiā miànshì)",
        options: ["Tham gia phỏng vấn","Tôi đi làm","Tôi nghỉ phép","Tôi ăn trưa"],
        correctAnswer: "Tham gia phỏng vấn"
      },
      {
        id: "act-zh-903-4",
        type: "match_pairs",
        skill: "reading",
        question: "Ghép các cặp từ vựng với nghĩa tiếng Việt tương ứng",
        pairs: [{"left":"面试 (Miànshì)","right":"Buổi phỏng vấn xin việc"},{"left":"简历 (Jiǎnlì)","right":"Sơ yếu lý lịch / CV"},{"left":"经验 (Jīngyàn)","right":"Kinh nghiệm làm việc"},{"left":"优点 (Yōudiǎn)","right":"Điểm mạnh / Ưu điểm"}],
        correctAnswer: "all_matched"
      },
      {
        id: "act-zh-903-5",
        type: "audio_listen",
        skill: "listening",
        question: "Lắng nghe và chọn đáp án chính xác:",
        prompt: "面试 (Miànshì)",
        options: ["Điểm mạnh / Ưu điểm","Điểm yếu","Mức lương","Địa chỉ nhà"],
        correctAnswer: "Điểm mạnh / Ưu điểm"
      }
    ]
  },
  {
    id: "lesson-zh-904",
    unitId: "unit-zh-9",
    title: "Hạn Chót & Kế Hoạch (Jiézhǐ Rìqī)",
    description: "Bàn giao công việc đúng thời hạn và sắp xếp chuyến công tác.",
    type: "standard",
    xp: 15,
    estimatedMinutes: 5,
    order: 4,
    status: "available",
    goals: [
      { id: "g1", description: "Nắm vững các từ vựng chủ đề Hạn Chót & Kế Hoạch (Jiézhǐ Rìqī)" },
      { id: "g2", description: "Luyện phát âm chuẩn và phản xạ câu qua các bài tập tương tác" }
    ],
    vocabulary: [
      { id: "v-zh-904-1", word: "截止日期 (Jiézhǐ rìqī)", translation: "Hạn chót / Deadline", phonetic: "jie-zhi ri-qi" },
      { id: "v-zh-904-2", word: "安排 (Ānpái)", translation: "Sắp xếp / Kế hoạch", phonetic: "an-pai" },
      { id: "v-zh-904-3", word: "准时 (Zhǔnshí)", translation: "Đúng giờ / Chuẩn giờ", phonetic: "zhun-shi" },
      { id: "v-zh-904-4", word: "出差 (Chūchāi)", translation: "Đi công tác xa", phonetic: "chu-chai" },
      { id: "v-zh-904-5", word: "联系 (Liánxì)", translation: "Liên lạc / Báo tin", phonetic: "lian-xi" }
    ],
    phrases: [
      { id: "p-zh-904-1", text: "我们一定会在截止日期前准时提交方案。", translation: "Chúng tôi nhất định sẽ nộp phương án đúng hạn trước hạn chót." },
      { id: "p-zh-904-2", text: "下周我要去深圳出差三天。", translation: "Tuần sau tôi phải đi công tác ở Thâm Quyến ba ngày." }
    ],
    activities: [
      {
        id: "act-zh-904-1",
        type: "multiple_choice",
        skill: "reading",
        question: "'出差' (Chūchāi) nghĩa là chuyến đi gì?",
        options: ["Đi công tác xa vì công việc","Đi về quê ăn tết","Đi nghỉ tuần trăng mật","Đi xem hòa nhạc"],
        correctAnswer: "Đi công tác xa vì công việc"
      },
      {
        id: "act-zh-904-2",
        type: "fill_blank",
        skill: "writing",
        question: "Điền từ: '明天要去广州_____。' (đi công tác)",
        prompt: "Điền từ: '明天要去广州_____。' (đi công tác)",
        options: ["出差","截止日期","安排","联系"],
        correctAnswer: "出差"
      },
      {
        id: "act-zh-904-3",
        type: "multiple_choice",
        skill: "reading",
        question: "Dịch: '准时完成' (Zhǔnshí wánchéng)",
        options: ["Hoàn thành đúng giờ","Ngày bắt đầu","Ngày nghỉ lễ","Ngày sinh nhật"],
        correctAnswer: "Hoàn thành đúng giờ"
      },
      {
        id: "act-zh-904-4",
        type: "match_pairs",
        skill: "reading",
        question: "Ghép các cặp từ vựng với nghĩa tiếng Việt tương ứng",
        pairs: [{"left":"截止日期 (Jiézhǐ rìqī)","right":"Hạn chót / Deadline"},{"left":"安排 (Ānpái)","right":"Sắp xếp / Kế hoạch"},{"left":"准时 (Zhǔnshí)","right":"Đúng giờ / Chuẩn giờ"},{"left":"出差 (Chūchāi)","right":"Đi công tác xa"}],
        correctAnswer: "all_matched"
      },
      {
        id: "act-zh-904-5",
        type: "audio_listen",
        skill: "listening",
        question: "Lắng nghe và chọn đáp án chính xác:",
        prompt: "截止日期 (Jiézhǐ rìqī)",
        options: ["Đi công tác xa vì công việc","Đi về quê ăn tết","Đi nghỉ tuần trăng mật","Đi xem hòa nhạc"],
        correctAnswer: "Đi công tác xa vì công việc"
      }
    ]
  },
  {
    id: "lesson-zh-905",
    unitId: "unit-zh-9",
    title: "AI Practice: Phỏng Vấn Xin Việc Cùng Giám Đốc Zhang",
    description: "Thực hành trả lời các câu hỏi phỏng vấn tuyển dụng chuẩn mực tiếng Trung cùng giám đốc Zhang.",
    type: "audio_ai",
    xp: 25,
    estimatedMinutes: 5,
    order: 5,
    heroImage: images.mascotWelcome,
    status: "available",
    goals: [
      { id: "g1", description: "Luyện phản xạ giao tiếp thực tế với AI Teacher Li Wei" },
      { id: "g2", description: "Vận dụng từ vựng trọng tâm vào ngữ cảnh hội thoại tự nhiên" }
    ],
    vocabulary: [
      { id: "v-ai-zh-9-1", word: "自我介绍", translation: "Tự giới thiệu" },
      { id: "v-ai-zh-9-2", word: "经验", translation: "Kinh nghiệm" },
      { id: "v-ai-zh-9-3", word: "优点", translation: "Ưu điểm" },
      { id: "v-ai-zh-9-4", word: "积极", translation: "Tích cực" },
      { id: "v-ai-zh-9-5", word: "请多关照", translation: "Mong được giúp đỡ nhiều hơn" }
    ],
    phrases: [],
    activities: [],
    aiTeacherPrompt: {
      scenario: "Phòng phỏng vấn tuyển dụng tại tòa tháp tài chính Lục Gia Chủy, Thượng Hải",
      systemPrompt: "You are Li Wei, a warm, human, and energetic Chinese teacher. Speak mostly in English for clear guidance. Introduce Chinese words slowly: say the word once, give the English translation, and invite the student to repeat after you. Keep every reply strictly to 1 or 2 conversational sentences with friendly contractions (I'm, let's, that's). Listen closely to the student, praise correct pronunciation, and gently model errors again: 'So close! Try saying —'. Stay strictly on lesson words: 自我介绍, 经验, 优点, 积极, 请多关照. Never switch topics.",
      initialGreeting: "你好，请坐。我是面试官张经理。请你先做一个简短的自我介绍吧。",
      targetVocabulary: ["自我介绍","经验","优点","积极","请多关照"],
      suggestedResponses: ["您好张经理，我有三年相关工作经验，做事认真负责。","我非常希望能加入贵公司的团队，贡献自己的力量。","今天非常高兴能参加这次面试！"],
      difficulty: "intermediate"
    }
  },
  {
    id: "lesson-zh-1001",
    unitId: "unit-zh-10",
    title: "Lên Kế Hoạch Du Lịch (Lǚxíng Jìhuà)",
    description: "Chọn điểm đến, đặt vé tàu cao tốc Gaotie và chuẩn bị hành lý du lịch.",
    type: "standard",
    xp: 15,
    estimatedMinutes: 5,
    order: 1,
    status: "available",
    goals: [
      { id: "g1", description: "Nắm vững các từ vựng chủ đề Lên Kế Hoạch Du Lịch (Lǚxíng Jìhuà)" },
      { id: "g2", description: "Luyện phát âm chuẩn và phản xạ câu qua các bài tập tương tác" }
    ],
    vocabulary: [
      { id: "v-zh-1001-1", word: "度假 (Dùjià)", translation: "Kỳ nghỉ mát / Đi nghỉ dưỡng", phonetic: "du-jia" },
      { id: "v-zh-1001-2", word: "行李箱 (Xínglixiāng)", translation: "Vali hành lý", phonetic: "xing-li-xiang" },
      { id: "v-zh-1001-3", word: "车票 (Chēpiào)", translation: "Vé xe / Vé tàu", phonetic: "che-piao" },
      { id: "v-zh-1001-4", word: "高铁 (Gāotiě)", translation: "Tàu cao tốc Gaotie", phonetic: "gao-tie" },
      { id: "v-zh-1001-5", word: "收拾行李 (Shōushi xíngli)", translation: "Thu dọn hành lý", phonetic: "shou-shi xing-li" }
    ],
    phrases: [
      { id: "p-zh-1001-1", text: "今年暑假我们计划去三亚度假。", translation: "Kỳ nghỉ hè năm nay chúng tôi có kế hoạch đi nghỉ mát ở Tam Á." },
      { id: "p-zh-1001-2", text: "我已经在手机上订好了高铁车票。", translation: "Tôi đã đặt xong vé tàu cao tốc trên điện thoại rồi." }
    ],
    activities: [
      {
        id: "act-zh-1001-1",
        type: "multiple_choice",
        skill: "reading",
        question: "'高铁' (Gāotiě) là phương tiện giao thông hiện đại nổi tiếng nào của Trung Quốc?",
        options: ["Tàu cao tốc","Tàu điện ngầm","Xe buýt nhanh","Phà biển"],
        correctAnswer: "Tàu cao tốc"
      },
      {
        id: "act-zh-1001-2",
        type: "fill_blank",
        skill: "writing",
        question: "Điền từ: '坐_____去北京只要四个小时。' (tàu cao tốc)",
        prompt: "Điền từ: '坐_____去北京只要四个小时。' (tàu cao tốc)",
        options: ["高铁","行李箱","度假","车票"],
        correctAnswer: "高铁"
      },
      {
        id: "act-zh-1001-3",
        type: "multiple_choice",
        skill: "reading",
        question: "Dịch: '收拾行李' (Shōushi xíngli)",
        options: ["Thu dọn hành lý","Mua vé xe","Đặt phòng","Ăn tối"],
        correctAnswer: "Thu dọn hành lý"
      },
      {
        id: "act-zh-1001-4",
        type: "match_pairs",
        skill: "reading",
        question: "Ghép các cặp từ vựng với nghĩa tiếng Việt tương ứng",
        pairs: [{"left":"度假 (Dùjià)","right":"Kỳ nghỉ mát / Đi nghỉ dưỡng"},{"left":"行李箱 (Xínglixiāng)","right":"Vali hành lý"},{"left":"车票 (Chēpiào)","right":"Vé xe / Vé tàu"},{"left":"高铁 (Gāotiě)","right":"Tàu cao tốc Gaotie"}],
        correctAnswer: "all_matched"
      },
      {
        id: "act-zh-1001-5",
        type: "audio_listen",
        skill: "listening",
        question: "Lắng nghe và chọn đáp án chính xác:",
        prompt: "度假 (Dùjià)",
        options: ["Tàu cao tốc","Tàu điện ngầm","Xe buýt nhanh","Phà biển"],
        correctAnswer: "Tàu cao tốc"
      }
    ]
  },
  {
    id: "lesson-zh-1002",
    unitId: "unit-zh-10",
    title: "Phong Cảnh Quế Lâm & Biển Tam Á (Shānshuǐ & Hǎitān)",
    description: "Khám phá non nước Hữu tình, bãi biển nhiệt đới và không khí trong lành.",
    type: "standard",
    xp: 15,
    estimatedMinutes: 5,
    order: 2,
    status: "available",
    goals: [
      { id: "g1", description: "Nắm vững các từ vựng chủ đề Phong Cảnh Quế Lâm & Biển Tam Á (Shānshuǐ & Hǎitān)" },
      { id: "g2", description: "Luyện phát âm chuẩn và phản xạ câu qua các bài tập tương tác" }
    ],
    vocabulary: [
      { id: "v-zh-1002-1", word: "海滩 (Hǎitān)", translation: "Bãi biển", phonetic: "hai-tan" },
      { id: "v-zh-1002-2", word: "山水 (Shānshuǐ)", translation: "Non nước / Phong cảnh thiên nhiên", phonetic: "shan-shui" },
      { id: "v-zh-1002-3", word: "自然 (Zìrán)", translation: "Thiên nhiên", phonetic: "zi-ran" },
      { id: "v-zh-1002-4", word: "风景 (Fēngjǐng)", translation: "Phong cảnh / Cảnh quan", phonetic: "feng-jing" },
      { id: "v-zh-1002-5", word: "凉快 (Liángkuai)", translation: "Mát mẻ / Dễ chịu", phonetic: "liang-kuai" }
    ],
    phrases: [
      { id: "p-zh-1002-1", text: "桂林山水甲天下，那里的自然风景太美了。", translation: "Quế Lâm non nước đệ nhất thiên hạ, cảnh sắc thiên nhiên ở đó quá đẹp." },
      { id: "p-zh-1002-2", text: "海风吹过来，感觉非常凉快舒服。", translation: "Gió biển thổi tới, cảm giác vô cùng mát mẻ dễ chịu." }
    ],
    activities: [
      {
        id: "act-zh-1002-1",
        type: "multiple_choice",
        skill: "reading",
        question: "'风景' (Fēngjǐng) có nghĩa là gì?",
        options: ["Phong cảnh / Cảnh quan","Món ăn ngon","Ngôi nhà cổ","Chiếc xe mới"],
        correctAnswer: "Phong cảnh / Cảnh quan"
      },
      {
        id: "act-zh-1002-2",
        type: "fill_blank",
        skill: "writing",
        question: "Điền từ: '海边非常_____。' (mát mẻ)",
        prompt: "Điền từ: '海边非常_____。' (mát mẻ)",
        options: ["凉快","山水","自然","风景"],
        correctAnswer: "凉快"
      },
      {
        id: "act-zh-1002-3",
        type: "multiple_choice",
        skill: "reading",
        question: "Dịch: '美丽的风景'",
        options: ["Phong cảnh tươi đẹp","Dòng sông dài","Ngôi nhà to","Con đường rộng"],
        correctAnswer: "Phong cảnh tươi đẹp"
      },
      {
        id: "act-zh-1002-4",
        type: "match_pairs",
        skill: "reading",
        question: "Ghép các cặp từ vựng với nghĩa tiếng Việt tương ứng",
        pairs: [{"left":"海滩 (Hǎitān)","right":"Bãi biển"},{"left":"山水 (Shānshuǐ)","right":"Non nước / Phong cảnh thiên nhiên"},{"left":"自然 (Zìrán)","right":"Thiên nhiên"},{"left":"风景 (Fēngjǐng)","right":"Phong cảnh / Cảnh quan"}],
        correctAnswer: "all_matched"
      },
      {
        id: "act-zh-1002-5",
        type: "audio_listen",
        skill: "listening",
        question: "Lắng nghe và chọn đáp án chính xác:",
        prompt: "海滩 (Hǎitān)",
        options: ["Phong cảnh / Cảnh quan","Món ăn ngon","Ngôi nhà cổ","Chiếc xe mới"],
        correctAnswer: "Phong cảnh / Cảnh quan"
      }
    ]
  },
  {
    id: "lesson-zh-1003",
    unitId: "unit-zh-10",
    title: "Đặt Phòng Khách Sạn & Nhận Phòng (Rùzhù Jiǔdiàn)",
    description: "Đặt phòng hướng biển Seaview, bao gồm bữa sáng và nhận thẻ phòng.",
    type: "standard",
    xp: 15,
    estimatedMinutes: 5,
    order: 3,
    status: "available",
    goals: [
      { id: "g1", description: "Nắm vững các từ vựng chủ đề Đặt Phòng Khách Sạn & Nhận Phòng (Rùzhù Jiǔdiàn)" },
      { id: "g2", description: "Luyện phát âm chuẩn và phản xạ câu qua các bài tập tương tác" }
    ],
    vocabulary: [
      { id: "v-zh-1003-1", word: "酒店 (Jiǔdiàn)", translation: "Khách sạn", phonetic: "jiu-dian" },
      { id: "v-zh-1003-2", word: "海景房 (Hǎijǐng fáng)", translation: "Phòng có tầm nhìn hướng biển", phonetic: "hai-jing fang" },
      { id: "v-zh-1003-3", word: "包含早餐 (Bāohán zǎocān)", translation: "Bao gồm bữa ăn sáng", phonetic: "bao-han zao-can" },
      { id: "v-zh-1003-4", word: "房卡 (Fángkǎ)", translation: "Thẻ phòng / Khóa phòng", phonetic: "fang-ka" },
      { id: "v-zh-1003-5", word: "办理入住 (Bànlǐ rùzhù)", translation: "Làm thủ tục nhận phòng Check-in", phonetic: "ban-li ru-zhu" }
    ],
    phrases: [
      { id: "p-zh-1003-1", text: "我想预订一间包含早餐的海景双人房。", translation: "Tôi muốn đặt một phòng đôi hướng biển bao gồm bữa sáng." },
      { id: "p-zh-1003-2", text: "这是您的房卡，电梯在右边。", translation: "Đây là thẻ phòng của quý khách, thang máy ở bên phải." }
    ],
    activities: [
      {
        id: "act-zh-1003-1",
        type: "multiple_choice",
        skill: "reading",
        question: "'海景房' (Hǎijǐng fáng) nghĩa là loại phòng gì?",
        options: ["Phòng có tầm nhìn hướng biển","Phòng tầng hầm","Phòng không có cửa sổ","Phòng tập thể"],
        correctAnswer: "Phòng có tầm nhìn hướng biển"
      },
      {
        id: "act-zh-1003-2",
        type: "fill_blank",
        skill: "writing",
        question: "Điền từ: '我要_____。' (làm thủ tục nhận phòng)",
        prompt: "Điền từ: '我要_____。' (làm thủ tục nhận phòng)",
        options: ["办理入住","海景房","早餐","酒店"],
        correctAnswer: "办理入住"
      },
      {
        id: "act-zh-1003-3",
        type: "multiple_choice",
        skill: "reading",
        question: "Dịch: '拿房卡' (Ná fángkǎ)",
        options: ["Lấy thẻ phòng","Số phòng","Hóa đơn phòng","Người phục vụ"],
        correctAnswer: "Lấy thẻ phòng"
      },
      {
        id: "act-zh-1003-4",
        type: "match_pairs",
        skill: "reading",
        question: "Ghép các cặp từ vựng với nghĩa tiếng Việt tương ứng",
        pairs: [{"left":"酒店 (Jiǔdiàn)","right":"Khách sạn"},{"left":"海景房 (Hǎijǐng fáng)","right":"Phòng có tầm nhìn hướng biển"},{"left":"包含早餐 (Bāohán zǎocān)","right":"Bao gồm bữa ăn sáng"},{"left":"房卡 (Fángkǎ)","right":"Thẻ phòng / Khóa phòng"}],
        correctAnswer: "all_matched"
      },
      {
        id: "act-zh-1003-5",
        type: "audio_listen",
        skill: "listening",
        question: "Lắng nghe và chọn đáp án chính xác:",
        prompt: "酒店 (Jiǔdiàn)",
        options: ["Phòng có tầm nhìn hướng biển","Phòng tầng hầm","Phòng không có cửa sổ","Phòng tập thể"],
        correctAnswer: "Phòng có tầm nhìn hướng biển"
      }
    ]
  },
  {
    id: "lesson-zh-1004",
    unitId: "unit-zh-10",
    title: "Thăm Quan Cố Cung & Di Tích Lịch Sử (Gùgōng)",
    description: "Tham quan Tử Cấm Thành, chụp ảnh lưu niệm và mua quà đặc sản.",
    type: "standard",
    xp: 15,
    estimatedMinutes: 5,
    order: 4,
    status: "available",
    goals: [
      { id: "g1", description: "Nắm vững các từ vựng chủ đề Thăm Quan Cố Cung & Di Tích Lịch Sử (Gùgōng)" },
      { id: "g2", description: "Luyện phát âm chuẩn và phản xạ câu qua các bài tập tương tác" }
    ],
    vocabulary: [
      { id: "v-zh-1004-1", word: "故宫 (Gùgōng)", translation: "Cố Cung / Tử Cấm Thành", phonetic: "gu-gong" },
      { id: "v-zh-1004-2", word: "名胜古迹 (Míngshèng gǔjī)", translation: "Danh lam thắng cảnh di tích cổ", phonetic: "ming-sheng gu-ji" },
      { id: "v-zh-1004-3", word: "拍照 (Pāizhào)", translation: "Chụp ảnh kỷ niệm", phonetic: "pai-zhao" },
      { id: "v-zh-1004-4", word: "纪念品 (Jìniànpǐn)", translation: "Quà lưu niệm", phonetic: "ji-nian-pin" },
      { id: "v-zh-1004-5", word: "门票 (Ménpiào)", translation: "Vé vào cổng tham quan", phonetic: "men-piao" }
    ],
    phrases: [
      { id: "p-zh-1004-1", text: "我们在北京故宫拍了很多非常好看的照片。", translation: "Chúng tôi đã chụp rất nhiều ảnh đẹp tại Cố Cung Bắc Kinh." },
      { id: "p-zh-1004-2", text: "请问可以在这里拍照留念吗？", translation: "Xin hỏi có thể chụp ảnh kỷ niệm ở đây được không?" }
    ],
    activities: [
      {
        id: "act-zh-1004-1",
        type: "multiple_choice",
        skill: "reading",
        question: "'故宫' (Gùgōng) là di tích lịch sử nổi tiếng tại thành phố nào?",
        options: ["Bắc Kinh","Thượng Hải","Quảng Châu","Thâm Quyến"],
        correctAnswer: "Bắc Kinh"
      },
      {
        id: "act-zh-1004-2",
        type: "fill_blank",
        skill: "writing",
        question: "Điền từ: '我买了两张故宫_____。' (vé vào cổng)",
        prompt: "Điền từ: '我买了两张故宫_____。' (vé vào cổng)",
        options: ["门票","拍照","纪念品","风景"],
        correctAnswer: "门票"
      },
      {
        id: "act-zh-1004-3",
        type: "multiple_choice",
        skill: "reading",
        question: "Dịch: '拍照' (Pāizhào)",
        options: ["Chụp ảnh","Mua vé","Ăn trưa","Hỏi đường"],
        correctAnswer: "Chụp ảnh"
      },
      {
        id: "act-zh-1004-4",
        type: "match_pairs",
        skill: "reading",
        question: "Ghép các cặp từ vựng với nghĩa tiếng Việt tương ứng",
        pairs: [{"left":"故宫 (Gùgōng)","right":"Cố Cung / Tử Cấm Thành"},{"left":"名胜古迹 (Míngshèng gǔjī)","right":"Danh lam thắng cảnh di tích cổ"},{"left":"拍照 (Pāizhào)","right":"Chụp ảnh kỷ niệm"},{"left":"纪念品 (Jìniànpǐn)","right":"Quà lưu niệm"}],
        correctAnswer: "all_matched"
      },
      {
        id: "act-zh-1004-5",
        type: "audio_listen",
        skill: "listening",
        question: "Lắng nghe và chọn đáp án chính xác:",
        prompt: "故宫 (Gùgōng)",
        options: ["Bắc Kinh","Thượng Hải","Quảng Châu","Thâm Quyến"],
        correctAnswer: "Bắc Kinh"
      }
    ]
  },
  {
    id: "lesson-zh-1005",
    unitId: "unit-zh-10",
    title: "AI Practice: Du Lịch Thắng Cảnh Trung Hoa Cùng Hướng Dẫn Viên Lin",
    description: "Đàm thoại tiếng Trung về du lịch Tam Á, ẩm thực Trung Hoa và danh lam thắng cảnh cùng Lin.",
    type: "audio_ai",
    xp: 25,
    estimatedMinutes: 5,
    order: 5,
    heroImage: images.mascotWelcome,
    status: "available",
    goals: [
      { id: "g1", description: "Luyện phản xạ giao tiếp thực tế với AI Teacher Li Wei" },
      { id: "g2", description: "Vận dụng từ vựng trọng tâm vào ngữ cảnh hội thoại tự nhiên" }
    ],
    vocabulary: [
      { id: "v-ai-zh-10-1", word: "故宫", translation: "Tử Cấm Thành" },
      { id: "v-ai-zh-10-2", word: "海景房", translation: "Phòng view biển" },
      { id: "v-ai-zh-10-3", word: "拍照", translation: "Chụp ảnh" },
      { id: "v-ai-zh-10-4", word: "好吃", translation: "Ngon" },
      { id: "v-ai-zh-10-5", word: "祝你玩得开心", translation: "Chúc bạn chơi vui vẻ" }
    ],
    phrases: [],
    activities: [],
    aiTeacherPrompt: {
      scenario: "Cầu gác mái lầu ngắm cảnh sông Hoàng Phố thơ mộng tại Thượng Hải",
      systemPrompt: "You are Li Wei, a warm, human, and energetic Chinese teacher. Speak mostly in English for clear guidance. Introduce Chinese words slowly: say the word once, give the English translation, and invite the student to repeat after you. Keep every reply strictly to 1 or 2 conversational sentences with friendly contractions (I'm, let's, that's). Listen closely to the student, praise correct pronunciation, and gently model errors again: 'So close! Try saying —'. Stay strictly on lesson words: 故宫, 海景房, 拍照, 好吃, 祝你玩得开心. Never switch topics.",
      initialGreeting: "欢迎来到中国！你最想去哪里旅游？是看北京的故宫还是去三亚看大海？",
      targetVocabulary: ["故宫","海景房","拍照","好吃","祝你玩得开心"],
      suggestedResponses: ["我想去北京故宫拍照，感受古老的文化。","我也很喜欢中国的美食，烤鸭非常好吃！","希望这次旅行能留下美好的回忆。"],
      difficulty: "intermediate"
    }
  },
  {
    id: "lesson-zh-1101",
    unitId: "unit-zh-11",
    title: "Ước Mơ & Tương Lai ('将来' và '会')",
    description: "Diễn đạt ước mơ và kế hoạch trong tương lai với 'Jiānglái' và 'Huì'.",
    type: "standard",
    xp: 15,
    estimatedMinutes: 5,
    order: 1,
    status: "available",
    goals: [
      { id: "g1", description: "Nắm vững các từ vựng chủ đề Ước Mơ & Tương Lai ('将来' và '会')" },
      { id: "g2", description: "Luyện phát âm chuẩn và phản xạ câu qua các bài tập tương tác" }
    ],
    vocabulary: [
      { id: "v-zh-1101-1", word: "未来 / 将来 (Wèilái / Jiānglái)", translation: "Tương lai", phonetic: "wei-lai / jiang-lai" },
      { id: "v-zh-1101-2", word: "会 (Huì)", translation: "Sẽ... (thì tương lai)", phonetic: "hui" },
      { id: "v-zh-1101-3", word: "计划 (Jìhuà)", translation: "Kế hoạch", phonetic: "ji-hua" },
      { id: "v-zh-1101-4", word: "环游世界 (Huányóu shìjiè)", translation: "Đi vòng quanh thế giới", phonetic: "huan-you shi-jie" },
      { id: "v-zh-1101-5", word: "梦想 (Mèngxiǎng)", translation: "Ước mơ / Giấc mơ", phonetic: "meng-xiang" }
    ],
    phrases: [
      { id: "p-zh-1101-1", text: "我将来打算在中国的大企业工作。", translation: "Tương lai tôi dự định sẽ làm việc tại doanh nghiệp lớn ở Trung Quốc." },
      { id: "p-zh-1101-2", text: "我的最大梦想是能够环游世界。", translation: "Ước mơ lớn nhất của tôi là có thể đi du lịch vòng quanh thế giới." }
    ],
    activities: [
      {
        id: "act-zh-1101-1",
        type: "multiple_choice",
        skill: "reading",
        question: "'将来' (Jiānglái) có nghĩa là gì?",
        options: ["Tương lai / Mai sau","Quá khứ","Hiện tại","Kỷ niệm"],
        correctAnswer: "Tương lai / Mai sau"
      },
      {
        id: "act-zh-1101-2",
        type: "fill_blank",
        skill: "writing",
        question: "Điền từ: '我明年_____去留学。' (sẽ)",
        prompt: "Điền từ: '我明年_____去留学。' (sẽ)",
        options: ["会","了","过","梦"],
        correctAnswer: "会"
      },
      {
        id: "act-zh-1101-3",
        type: "multiple_choice",
        skill: "reading",
        question: "Dịch: '我的梦想' (Wǒ de mèngxiǎng)",
        options: ["Ước mơ của tôi","Kỷ niệm của tôi","Trường học của tôi","Công ty của tôi"],
        correctAnswer: "Ước mơ của tôi"
      },
      {
        id: "act-zh-1101-4",
        type: "match_pairs",
        skill: "reading",
        question: "Ghép các cặp từ vựng với nghĩa tiếng Việt tương ứng",
        pairs: [{"left":"未来 / 将来 (Wèilái / Jiānglái)","right":"Tương lai"},{"left":"会 (Huì)","right":"Sẽ... (thì tương lai)"},{"left":"计划 (Jìhuà)","right":"Kế hoạch"},{"left":"环游世界 (Huányóu shìjiè)","right":"Đi vòng quanh thế giới"}],
        correctAnswer: "all_matched"
      },
      {
        id: "act-zh-1101-5",
        type: "audio_listen",
        skill: "listening",
        question: "Lắng nghe và chọn đáp án chính xác:",
        prompt: "未来 / 将来 (Wèilái / Jiānglái)",
        options: ["Tương lai / Mai sau","Quá khứ","Hiện tại","Kỷ niệm"],
        correctAnswer: "Tương lai / Mai sau"
      }
    ]
  },
  {
    id: "lesson-zh-1102",
    unitId: "unit-zh-11",
    title: "Ứng Dụng Điện Thoại & Cuộc Sống Số (Shǒujī Rùnjiàn)",
    description: "Từ vựng về điện thoại thông minh, quét mã QR và kết nối trực tuyến.",
    type: "standard",
    xp: 15,
    estimatedMinutes: 5,
    order: 2,
    status: "available",
    goals: [
      { id: "g1", description: "Nắm vững các từ vựng chủ đề Ứng Dụng Điện Thoại & Cuộc Sống Số (Shǒujī Rùnjiàn)" },
      { id: "g2", description: "Luyện phát âm chuẩn và phản xạ câu qua các bài tập tương tác" }
    ],
    vocabulary: [
      { id: "v-zh-1102-1", word: "软件 / App (Ruǎnjiàn)", translation: "Ứng dụng điện thoại (App)", phonetic: "ruan-jian" },
      { id: "v-zh-1102-2", word: "智能手机 (Zhìnéng shǒujī)", translation: "Điện thoại thông minh (Smartphone)", phonetic: "zhi-neng shou-ji" },
      { id: "v-zh-1102-3", word: "下载 (Xiàzǎi)", translation: "Tải về (download)", phonetic: "xia-zai" },
      { id: "v-zh-1102-4", word: "密码 (Mìmǎ)", translation: "Mật khẩu", phonetic: "mi-ma" },
      { id: "v-zh-1102-5", word: "扫码支付 (Sǎomǎ zhīfù)", translation: "Quét mã QR thanh toán", phonetic: "sao-ma zhi-fu" }
    ],
    phrases: [
      { id: "p-zh-1102-1", text: "在中国，出门用手机扫码支付非常方便。", translation: "Ở Trung Quốc, ra ngoài dùng điện thoại quét mã thanh toán cực kỳ tiện lợi." },
      { id: "p-zh-1102-2", text: "请不要把个人密码告诉其他人。", translation: "Xin đừng nói mật khẩu cá nhân cho người khác biết." }
    ],
    activities: [
      {
        id: "act-zh-1102-1",
        type: "multiple_choice",
        skill: "reading",
        question: "'扫码支付' là hình thức thanh toán phổ biến nào ở Trung Quốc?",
        options: ["Quét mã QR qua điện thoại","Dùng tiền mặt","Dùng séc ngân hàng","Đổi hàng lấy hàng"],
        correctAnswer: "Quét mã QR qua điện thoại"
      },
      {
        id: "act-zh-1102-2",
        type: "fill_blank",
        skill: "writing",
        question: "Điền từ: '请输入您的账号_____。' (mật khẩu)",
        prompt: "Điền từ: '请输入您的账号_____。' (mật khẩu)",
        options: ["密码","手机","软件","未来"],
        correctAnswer: "密码"
      },
      {
        id: "act-zh-1102-3",
        type: "multiple_choice",
        skill: "reading",
        question: "Dịch: '网上购物' (Wǎngshang gòuwù)",
        options: ["Mua sắm trực tuyến","Đi chợ truyền thống","Đổi đồ cũ","Bán hàng"],
        correctAnswer: "Mua sắm trực tuyến"
      },
      {
        id: "act-zh-1102-4",
        type: "match_pairs",
        skill: "reading",
        question: "Ghép các cặp từ vựng với nghĩa tiếng Việt tương ứng",
        pairs: [{"left":"软件 / App (Ruǎnjiàn)","right":"Ứng dụng điện thoại (App)"},{"left":"智能手机 (Zhìnéng shǒujī)","right":"Điện thoại thông minh (Smartphone)"},{"left":"下载 (Xiàzǎi)","right":"Tải về (download)"},{"left":"密码 (Mìmǎ)","right":"Mật khẩu"}],
        correctAnswer: "all_matched"
      },
      {
        id: "act-zh-1102-5",
        type: "audio_listen",
        skill: "listening",
        question: "Lắng nghe và chọn đáp án chính xác:",
        prompt: "软件 / App (Ruǎnjiàn)",
        options: ["Quét mã QR qua điện thoại","Dùng tiền mặt","Dùng séc ngân hàng","Đổi hàng lấy hàng"],
        correctAnswer: "Quét mã QR qua điện thoại"
      }
    ]
  },
  {
    id: "lesson-zh-1103",
    unitId: "unit-zh-11",
    title: "Trí Tuệ Nhân Tạo & Robot (Réngōng Zhìnéng)",
    description: "Bàn luận về AI, xe tự lái và công nghệ cao phát triển mạnh mẽ.",
    type: "standard",
    xp: 15,
    estimatedMinutes: 5,
    order: 3,
    status: "available",
    goals: [
      { id: "g1", description: "Nắm vững các từ vựng chủ đề Trí Tuệ Nhân Tạo & Robot (Réngōng Zhìnéng)" },
      { id: "g2", description: "Luyện phát âm chuẩn và phản xạ câu qua các bài tập tương tác" }
    ],
    vocabulary: [
      { id: "v-zh-1103-1", word: "人工智能 (Réngōng zhìnéng / AI)", translation: "Trí tuệ nhân tạo (AI)", phonetic: "ren-gong zhi-neng" },
      { id: "v-zh-1103-2", word: "机器人 (Jīqìrén)", translation: "Người máy / Robot", phonetic: "ji-qi-ren" },
      { id: "v-zh-1103-3", word: "改变 (Gǎibiàn)", translation: "Sự thay đổi / Đổi thay", phonetic: "gai-bian" },
      { id: "v-zh-1103-4", word: "方便 (Fāngbiàn)", translation: "Tiện lợi / Thuận tiện", phonetic: "fang-bian" },
      { id: "v-zh-1103-5", word: "高科技 (Gāokējì)", translation: "Công nghệ cao", phonetic: "gao-ke-ji" }
    ],
    phrases: [
      { id: "p-zh-1103-1", text: "人工智能技术正在深刻地改变着我们的生活。", translation: "Công nghệ trí tuệ nhân tạo đang thay đổi sâu sắc cuộc sống của chúng ta." },
      { id: "p-zh-1103-2", text: "高科技让日常工作变得更加高效和方便。", translation: "Công nghệ cao giúp các công việc thường nhật trở nên hiệu quả và thuận tiện hơn." }
    ],
    activities: [
      {
        id: "act-zh-1103-1",
        type: "multiple_choice",
        skill: "reading",
        question: "'方便' (Fāngbiàn) có nghĩa là tính từ gì?",
        options: ["Tiện lợi / Thuận tiện","Bất tiện","Khó khăn","Nguy hiểm"],
        correctAnswer: "Tiện lợi / Thuận tiện"
      },
      {
        id: "act-zh-1103-2",
        type: "fill_blank",
        skill: "writing",
        question: "Điền từ: '生活越来越_____了。' (tiện lợi)",
        prompt: "Điền từ: '生活越来越_____了。' (tiện lợi)",
        options: ["方便","机器人","改变","未来"],
        correctAnswer: "方便"
      },
      {
        id: "act-zh-1103-3",
        type: "multiple_choice",
        skill: "reading",
        question: "Dịch: '高科技产品'",
        options: ["Sản phẩm công nghệ cao","Căn nhà mới","Điện thoại cũ","Bạn bè mới"],
        correctAnswer: "Sản phẩm công nghệ cao"
      },
      {
        id: "act-zh-1103-4",
        type: "match_pairs",
        skill: "reading",
        question: "Ghép các cặp từ vựng với nghĩa tiếng Việt tương ứng",
        pairs: [{"left":"人工智能 (Réngōng zhìnéng / AI)","right":"Trí tuệ nhân tạo (AI)"},{"left":"机器人 (Jīqìrén)","right":"Người máy / Robot"},{"left":"改变 (Gǎibiàn)","right":"Sự thay đổi / Đổi thay"},{"left":"方便 (Fāngbiàn)","right":"Tiện lợi / Thuận tiện"}],
        correctAnswer: "all_matched"
      },
      {
        id: "act-zh-1103-5",
        type: "audio_listen",
        skill: "listening",
        question: "Lắng nghe và chọn đáp án chính xác:",
        prompt: "人工智能 (Réngōng zhìnéng / AI)",
        options: ["Tiện lợi / Thuận tiện","Bất tiện","Khó khăn","Nguy hiểm"],
        correctAnswer: "Tiện lợi / Thuận tiện"
      }
    ]
  },
  {
    id: "lesson-zh-1104",
    unitId: "unit-zh-11",
    title: "Mục Tiêu & Quyết Tâm (Mùbiāo & Jiānchí)",
    description: "Đặt ra mục tiêu, rèn luyện kỹ năng và quyết tâm chinh phục thành công.",
    type: "standard",
    xp: 15,
    estimatedMinutes: 5,
    order: 4,
    status: "available",
    goals: [
      { id: "g1", description: "Nắm vững các từ vựng chủ đề Mục Tiêu & Quyết Tâm (Mùbiāo & Jiānchí)" },
      { id: "g2", description: "Luyện phát âm chuẩn và phản xạ câu qua các bài tập tương tác" }
    ],
    vocabulary: [
      { id: "v-zh-1104-1", word: "目标 (Mùbiāo)", translation: "Mục tiêu phấn đấu", phonetic: "mu-biao" },
      { id: "v-zh-1104-2", word: "实现 (Shíxiàn)", translation: "Đạt được / Hiện thực hóa", phonetic: "shi-xian" },
      { id: "v-zh-1104-3", word: "提高 (Tígāo)", translation: "Nâng cao / Cải thiện", phonetic: "ti-gao" },
      { id: "v-zh-1104-4", word: "加油 (Jiāyóu)", translation: "Cố lên! / Quyết tâm!", phonetic: "jia-you" },
      { id: "v-zh-1104-5", word: "成功 (Chénggōng)", translation: "Sự thành công", phonetic: "cheng-gong" }
    ],
    phrases: [
      { id: "p-zh-1104-1", text: "我今年的首要目标是通过汉语水平考试(HSK)。", translation: "Mục tiêu hàng đầu năm nay của tôi là vượt qua kỳ thi năng lực Hán ngữ (HSK)." },
      { id: "p-zh-1104-2", text: "只要每天坚持练习，汉语口语水平一定能大幅提高。加油！", translation: "Chỉ cần kiên trì luyện tập mỗi ngày, trình độ khẩu ngữ tiếng Trung nhất định sẽ nâng cao rõ rệt. Cố lên!" }
    ],
    activities: [
      {
        id: "act-zh-1104-1",
        type: "multiple_choice",
        skill: "reading",
        question: "'加油' (Jiāyóu) là khẩu hiệu cổ vũ tinh thần phổ biến nào của người Trung Quốc?",
        options: ["Cố lên! / Nỗ lực lên!","Xin lỗi nhé!","Chào buổi sáng!","Đi ngủ thôi!"],
        correctAnswer: "Cố lên! / Nỗ lực lên!"
      },
      {
        id: "act-zh-1104-2",
        type: "fill_blank",
        skill: "writing",
        question: "Điền từ: '努力_____汉语水平。' (nâng cao)",
        prompt: "Điền từ: '努力_____汉语水平。' (nâng cao)",
        options: ["提高","目标","成功","软件"],
        correctAnswer: "提高"
      },
      {
        id: "act-zh-1104-3",
        type: "multiple_choice",
        skill: "reading",
        question: "Dịch: '实现目标' (Shíxiàn mùbiāo)",
        options: ["Đạt được mục tiêu","Từ bỏ kế hoạch","Quên mất bài học","Đi làm việc"],
        correctAnswer: "Đạt được mục tiêu"
      },
      {
        id: "act-zh-1104-4",
        type: "match_pairs",
        skill: "reading",
        question: "Ghép các cặp từ vựng với nghĩa tiếng Việt tương ứng",
        pairs: [{"left":"目标 (Mùbiāo)","right":"Mục tiêu phấn đấu"},{"left":"实现 (Shíxiàn)","right":"Đạt được / Hiện thực hóa"},{"left":"提高 (Tígāo)","right":"Nâng cao / Cải thiện"},{"left":"加油 (Jiāyóu)","right":"Cố lên! / Quyết tâm!"}],
        correctAnswer: "all_matched"
      },
      {
        id: "act-zh-1104-5",
        type: "audio_listen",
        skill: "listening",
        question: "Lắng nghe và chọn đáp án chính xác:",
        prompt: "目标 (Mùbiāo)",
        options: ["Cố lên! / Nỗ lực lên!","Xin lỗi nhé!","Chào buổi sáng!","Đi ngủ thôi!"],
        correctAnswer: "Cố lên! / Nỗ lực lên!"
      }
    ]
  },
  {
    id: "lesson-zh-1105",
    unitId: "unit-zh-11",
    title: "AI Practice: Thảo Luận Ước Mơ Tương Lai Cùng Thầy Chen",
    description: "Thực hành diễn đạt ý định tương lai và công nghệ cùng thầy Chen.",
    type: "audio_ai",
    xp: 25,
    estimatedMinutes: 5,
    order: 5,
    heroImage: images.mascotWelcome,
    status: "available",
    goals: [
      { id: "g1", description: "Luyện phản xạ giao tiếp thực tế với AI Teacher Li Wei" },
      { id: "g2", description: "Vận dụng từ vựng trọng tâm vào ngữ cảnh hội thoại tự nhiên" }
    ],
    vocabulary: [
      { id: "v-ai-zh-11-1", word: "将来", translation: "Tương lai" },
      { id: "v-ai-zh-11-2", word: "会", translation: "Sẽ" },
      { id: "v-ai-zh-11-3", word: "目标", translation: "Mục tiêu" },
      { id: "v-ai-zh-11-4", word: "方便", translation: "Thuận tiện" },
      { id: "v-ai-zh-11-5", word: "加油", translation: "Cố lên" }
    ],
    phrases: [],
    activities: [],
    aiTeacherPrompt: {
      scenario: "Khu vườn công nghệ cao Zhongguancun tại Bắc Kinh",
      systemPrompt: "You are Li Wei, a warm, human, and energetic Chinese teacher. Speak mostly in English for clear guidance. Introduce Chinese words slowly: say the word once, give the English translation, and invite the student to repeat after you. Keep every reply strictly to 1 or 2 conversational sentences with friendly contractions (I'm, let's, that's). Listen closely to the student, praise correct pronunciation, and gently model errors again: 'So close! Try saying —'. Stay strictly on lesson words: 将来, 会, 目标, 方便, 加油. Never switch topics.",
      initialGreeting: "你好！我们来聊聊未来吧：你将来有什么计划和梦想？对人工智能技术感兴趣吗？",
      targetVocabulary: ["将来","会","目标","方便","加油"],
      suggestedResponses: ["我将来打算从事跨国贸易和技术合作。","我希望我的中文能说得越来越流利。","新的科技给年轻人带来了很多好机会！"],
      difficulty: "intermediate"
    }
  },
  {
    id: "lesson-zh-1201",
    unitId: "unit-zh-12",
    title: "Bày Tỏ Quan Điểm (Wǒ Juéde...)",
    description: "Học cách nêu ý kiến cá nhân lịch sự bằng cấu trúc 'Wǒ juéde...' (Tôi cảm thấy/nghĩ rằng...).",
    type: "standard",
    xp: 15,
    estimatedMinutes: 5,
    order: 1,
    status: "available",
    goals: [
      { id: "g1", description: "Nắm vững các từ vựng chủ đề Bày Tỏ Quan Điểm (Wǒ Juéde...)" },
      { id: "g2", description: "Luyện phát âm chuẩn và phản xạ câu qua các bài tập tương tác" }
    ],
    vocabulary: [
      { id: "v-zh-1201-1", word: "我觉得 (Wǒ juéde)", translation: "Tôi cảm thấy / Tôi nghĩ rằng...", phonetic: "wo jue-de" },
      { id: "v-zh-1201-2", word: "同意 / 赞成 (Tóngyì / Zànchéng)", translation: "Đồng ý / Tán thành", phonetic: "tong-yi" },
      { id: "v-zh-1201-3", word: "反对 (Fǎnduì)", translation: "Phản đối / Không đồng ý", phonetic: "fan-dui" },
      { id: "v-zh-1201-4", word: "看法 (Kànfǎ)", translation: "Ý kiến / Cách nhìn nhận", phonetic: "kan-fa" },
      { id: "v-zh-1201-5", word: "重要 (Zhòngyào)", translation: "Quan trọng", phonetic: "zhong-yao" }
    ],
    phrases: [
      { id: "p-zh-1201-1", text: "我觉得学习外语对于了解世界非常重要。", translation: "Tôi nghĩ rằng việc học ngoại ngữ vô cùng quan trọng để thấu hiểu thế giới." },
      { id: "p-zh-1201-2", text: "我完全同意你的看法，说得很有道理。", translation: "Tôi hoàn toàn đồng ý với ý kiến của bạn, nói rất có lý." }
    ],
    activities: [
      {
        id: "act-zh-1201-1",
        type: "multiple_choice",
        skill: "reading",
        question: "Cấu trúc '我觉得' (Wǒ juéde) dùng để làm gì?",
        options: ["Nêu suy nghĩ / quan điểm cá nhân một cách lịch sự","Chào tạm biệt","Hỏi giá tiền","Mắng mỏ người khác"],
        correctAnswer: "Nêu suy nghĩ / quan điểm cá nhân một cách lịch sự"
      },
      {
        id: "act-zh-1201-2",
        type: "fill_blank",
        skill: "writing",
        question: "Điền từ: '_____这个主意非常好。' (tôi nghĩ rằng)",
        prompt: "Điền từ: '_____这个主意非常好。' (tôi nghĩ rằng)",
        options: ["我觉得","赞成","看法","反对"],
        correctAnswer: "我觉得"
      },
      {
        id: "act-zh-1201-3",
        type: "multiple_choice",
        skill: "reading",
        question: "Dịch: '我同意' (Wǒ tóngyì)",
        options: ["Tôi đồng ý / tán thành","Tôi không biết","Tôi từ chối","Tôi đang bận"],
        correctAnswer: "Tôi đồng ý / tán thành"
      },
      {
        id: "act-zh-1201-4",
        type: "match_pairs",
        skill: "reading",
        question: "Ghép các cặp từ vựng với nghĩa tiếng Việt tương ứng",
        pairs: [{"left":"我觉得 (Wǒ juéde)","right":"Tôi cảm thấy / Tôi nghĩ rằng..."},{"left":"同意 / 赞成 (Tóngyì / Zànchéng)","right":"Đồng ý / Tán thành"},{"left":"反对 (Fǎnduì)","right":"Phản đối / Không đồng ý"},{"left":"看法 (Kànfǎ)","right":"Ý kiến / Cách nhìn nhận"}],
        correctAnswer: "all_matched"
      },
      {
        id: "act-zh-1201-5",
        type: "audio_listen",
        skill: "listening",
        question: "Lắng nghe và chọn đáp án chính xác:",
        prompt: "我觉得 (Wǒ juéde)",
        options: ["Nêu suy nghĩ / quan điểm cá nhân một cách lịch sự","Chào tạm biệt","Hỏi giá tiền","Mắng mỏ người khác"],
        correctAnswer: "Nêu suy nghĩ / quan điểm cá nhân một cách lịch sự"
      }
    ]
  },
  {
    id: "lesson-zh-1202",
    unitId: "unit-zh-12",
    title: "Nét Đẹp Văn Hóa Trung Hoa (Zhōnghuá Wénhuà)",
    description: "Tìm hiểu văn hóa Trà đạo, Lễ hội Tết Nguyên Đán và Thư pháp cổ truyền.",
    type: "standard",
    xp: 15,
    estimatedMinutes: 5,
    order: 2,
    status: "available",
    goals: [
      { id: "g1", description: "Nắm vững các từ vựng chủ đề Nét Đẹp Văn Hóa Trung Hoa (Zhōnghuá Wénhuà)" },
      { id: "g2", description: "Luyện phát âm chuẩn và phản xạ câu qua các bài tập tương tác" }
    ],
    vocabulary: [
      { id: "v-zh-1202-1", word: "文化 (Wénhuà)", translation: "Văn hóa", phonetic: "wen-hua" },
      { id: "v-zh-1202-2", word: "茶道 (Chádào)", translation: "Nghệ thuật Trà đạo", phonetic: "cha-dao" },
      { id: "v-zh-1202-3", word: "春节 (Chūnjié)", translation: "Tết Nguyên Đán truyền thống", phonetic: "chun-jie" },
      { id: "v-zh-1202-4", word: "书法 (Shūfǎ)", translation: "Nghệ thuật Thư pháp", phonetic: "shu-fa" },
      { id: "v-zh-1202-5", word: "传统 (Chuántǒng)", translation: "Truyền thống", phonetic: "chuan-tong" }
    ],
    phrases: [
      { id: "p-zh-1202-1", text: "春节是中国最重要、最热闹的传统节日。", translation: "Tết Nguyên Đán là ngày lễ truyền thống quan trọng và náo nhiệt nhất của Trung Quốc." },
      { id: "p-zh-1202-2", text: "中国茶文化历史悠久，品茶能让人心平气和。", translation: "Văn hóa trà Trung Hoa có lịch sử lâu đời, thưởng trà giúp tâm hồn thanh thản." }
    ],
    activities: [
      {
        id: "act-zh-1202-1",
        type: "multiple_choice",
        skill: "reading",
        question: "'春节' (Chūnjié) là ngày lễ truyền thống lớn nào?",
        options: ["Tết Nguyên Đán","Lễ Giáng sinh","Tết Đoan ngọ","Lễ Thất tịch"],
        correctAnswer: "Tết Nguyên Đán"
      },
      {
        id: "act-zh-1202-2",
        type: "fill_blank",
        skill: "writing",
        question: "Điền từ: '一家人团聚过_____。' (Tết Nguyên Đán)",
        prompt: "Điền từ: '一家人团聚过_____。' (Tết Nguyên Đán)",
        options: ["春节","书法","茶道","文化"],
        correctAnswer: "春节"
      },
      {
        id: "act-zh-1202-3",
        type: "multiple_choice",
        skill: "reading",
        question: "Dịch: '中国传统文化'",
        options: ["Văn hóa truyền thống Trung Hoa","Món ăn hiện đại","Âm nhạc phương Tây","Xe hơi mới"],
        correctAnswer: "Văn hóa truyền thống Trung Hoa"
      },
      {
        id: "act-zh-1202-4",
        type: "match_pairs",
        skill: "reading",
        question: "Ghép các cặp từ vựng với nghĩa tiếng Việt tương ứng",
        pairs: [{"left":"文化 (Wénhuà)","right":"Văn hóa"},{"left":"茶道 (Chádào)","right":"Nghệ thuật Trà đạo"},{"left":"春节 (Chūnjié)","right":"Tết Nguyên Đán truyền thống"},{"left":"书法 (Shūfǎ)","right":"Nghệ thuật Thư pháp"}],
        correctAnswer: "all_matched"
      },
      {
        id: "act-zh-1202-5",
        type: "audio_listen",
        skill: "listening",
        question: "Lắng nghe và chọn đáp án chính xác:",
        prompt: "文化 (Wénhuà)",
        options: ["Tết Nguyên Đán","Lễ Giáng sinh","Tết Đoan ngọ","Lễ Thất tịch"],
        correctAnswer: "Tết Nguyên Đán"
      }
    ]
  },
  {
    id: "lesson-zh-1203",
    unitId: "unit-zh-12",
    title: "Thành Ngữ Thường Ngày (Chéngyǔ)",
    description: "Khám phá các câu thành ngữ 4 chữ kinh điển và ý nghĩa sâu sắc.",
    type: "standard",
    xp: 15,
    estimatedMinutes: 5,
    order: 3,
    status: "available",
    goals: [
      { id: "g1", description: "Nắm vững các từ vựng chủ đề Thành Ngữ Thường Ngày (Chéngyǔ)" },
      { id: "g2", description: "Luyện phát âm chuẩn và phản xạ câu qua các bài tập tương tác" }
    ],
    vocabulary: [
      { id: "v-zh-1203-1", word: "入乡随俗 (Rù xiāng suí sú)", translation: "Nhập gia tùy tục", phonetic: "ru xiang sui su" },
      { id: "v-zh-1203-2", word: "熟能生巧 (Shú néng shēng qiǎo)", translation: "Trăm hay không bằng tay quen", phonetic: "shu neng sheng qiao" },
      { id: "v-zh-1203-3", word: "厉害！ (Lìhai!)", translation: "Lợi hại quá! / Đỉnh thật sự!", phonetic: "li-hai" },
      { id: "v-zh-1203-4", word: "加油！ (Jiāyóu!)", translation: "Cố lên!", phonetic: "jia-you" },
      { id: "v-zh-1203-5", word: "成语 (Chéngyǔ)", translation: "Thành ngữ 4 chữ", phonetic: "cheng-yu" }
    ],
    phrases: [
      { id: "p-zh-1203-1", text: "俗话说'入乡随俗'，去到一个新地方要尊重当地习惯。", translation: "Tục ngữ có câu 'nhập gia tùy tục', đến một vùng đất mới cần tôn trọng tập quán nơi đó." },
      { id: "p-zh-1203-2", text: "你竟然拿了满分，太厉害了吧！", translation: "Bạn thi đạt điểm tuyệt đối cơ á, quá là lợi hại luôn!" }
    ],
    activities: [
      {
        id: "act-zh-1203-1",
        type: "multiple_choice",
        skill: "reading",
        question: "Ý nghĩa của thành ngữ '熟能生巧' (Shú néng shēng qiǎo) là gì?",
        options: ["Trăm hay không bằng tay quen / Luyện nhiều sẽ thành thạo","Ăn nhiều sẽ béo","Đi nhanh sẽ vấp ngã","Ngủ nhiều sẽ mệt"],
        correctAnswer: "Trăm hay không bằng tay quen / Luyện nhiều sẽ thành thạo"
      },
      {
        id: "act-zh-1203-2",
        type: "fill_blank",
        skill: "writing",
        question: "Điền từ: '到了新地方要_____。' (nhập gia tùy tục)",
        prompt: "Điền từ: '到了新地方要_____。' (nhập gia tùy tục)",
        options: ["入乡随俗","熟能生巧","厉害","成语"],
        correctAnswer: "入乡随俗"
      },
      {
        id: "act-zh-1203-3",
        type: "multiple_choice",
        skill: "reading",
        question: "Dịch: '太厉害了！' (Tài lìhai le!)",
        options: ["Lợi hại quá! / Đỉnh chóp!","Chào buổi sáng!","Đi ngủ thôi!","Xin lỗi nhé!"],
        correctAnswer: "Lợi hại quá! / Đỉnh chóp!"
      },
      {
        id: "act-zh-1203-4",
        type: "match_pairs",
        skill: "reading",
        question: "Ghép các cặp từ vựng với nghĩa tiếng Việt tương ứng",
        pairs: [{"left":"入乡随俗 (Rù xiāng suí sú)","right":"Nhập gia tùy tục"},{"left":"熟能生巧 (Shú néng shēng qiǎo)","right":"Trăm hay không bằng tay quen"},{"left":"厉害！ (Lìhai!)","right":"Lợi hại quá! / Đỉnh thật sự!"},{"left":"加油！ (Jiāyóu!)","right":"Cố lên!"}],
        correctAnswer: "all_matched"
      },
      {
        id: "act-zh-1203-5",
        type: "audio_listen",
        skill: "listening",
        question: "Lắng nghe và chọn đáp án chính xác:",
        prompt: "入乡随俗 (Rù xiāng suí sú)",
        options: ["Trăm hay không bằng tay quen / Luyện nhiều sẽ thành thạo","Ăn nhiều sẽ béo","Đi nhanh sẽ vấp ngã","Ngủ nhiều sẽ mệt"],
        correctAnswer: "Trăm hay không bằng tay quen / Luyện nhiều sẽ thành thạo"
      }
    ]
  },
  {
    id: "lesson-zh-1204",
    unitId: "unit-zh-12",
    title: "Tổng Ôn Toàn Diện Trình Độ A2 (A2 Zǒng-fùxí)",
    description: "Hệ thống lại toàn bộ từ vựng và ngữ pháp từ Unit 1 đến 12 để tốt nghiệp A2.",
    type: "standard",
    xp: 15,
    estimatedMinutes: 5,
    order: 4,
    status: "available",
    goals: [
      { id: "g1", description: "Nắm vững các từ vựng chủ đề Tổng Ôn Toàn Diện Trình Độ A2 (A2 Zǒng-fùxí)" },
      { id: "g2", description: "Luyện phát âm chuẩn và phản xạ câu qua các bài tập tương tác" }
    ],
    vocabulary: [
      { id: "v-zh-1204-1", word: "复习 (Fùxí)", translation: "Sự ôn tập", phonetic: "fu-xi" },
      { id: "v-zh-1204-2", word: "自信 (Zìxìn)", translation: "Sự tự tin", phonetic: "zi-xin" },
      { id: "v-zh-1204-3", word: "A2级别 (A2 Jíbié)", translation: "Trình độ A2 CEFR", phonetic: "a-er ji-bie" },
      { id: "v-zh-1204-4", word: "祝贺 / 恭喜 (Zhùhè / Gōngxǐ)", translation: "Xin chúc mừng!", phonetic: "gong-xi" },
      { id: "v-zh-1204-5", word: "结业证书 (Jiéyè zhèngshū)", translation: "Chứng chỉ hoàn thành khóa học", phonetic: "jie-ye zheng-shu" }
    ],
    phrases: [
      { id: "p-zh-1204-1", text: "恭喜你圆满完成12个单元的学习，达到A2水平！", translation: "Xin chúc mừng bạn đã hoàn thành xuất sắc 12 Unit và đạt trình độ A2!" },
      { id: "p-zh-1204-2", text: "我现在对日常中文交流充满了自信。", translation: "Bây giờ tôi tràn đầy tự tin trong giao tiếp tiếng Trung hàng ngày." }
    ],
    activities: [
      {
        id: "act-zh-1204-1",
        type: "multiple_choice",
        skill: "reading",
        question: "'恭喜' (Gōngxǐ) có nghĩa là gì?",
        options: ["Xin chúc mừng","Xin thứ lỗi","Hẹn gặp lại","Chúc ngủ ngon"],
        correctAnswer: "Xin chúc mừng"
      },
      {
        id: "act-zh-1204-2",
        type: "fill_blank",
        skill: "writing",
        question: "Điền từ: '_____你顺利结业！' (chúc mừng)",
        prompt: "Điền từ: '_____你顺利结业！' (chúc mừng)",
        options: ["恭喜","复习","自信","看法"],
        correctAnswer: "恭喜"
      },
      {
        id: "act-zh-1204-3",
        type: "multiple_choice",
        skill: "reading",
        question: "Dịch: '充满自信' (Chōngmǎn zìxìn)",
        options: ["Tràn đầy tự tin","Tôi bị mệt mỏi","Tôi bị đói bụng","Tôi đang lo lắng"],
        correctAnswer: "Tràn đầy tự tin"
      },
      {
        id: "act-zh-1204-4",
        type: "match_pairs",
        skill: "reading",
        question: "Ghép các cặp từ vựng với nghĩa tiếng Việt tương ứng",
        pairs: [{"left":"复习 (Fùxí)","right":"Sự ôn tập"},{"left":"自信 (Zìxìn)","right":"Sự tự tin"},{"left":"A2级别 (A2 Jíbié)","right":"Trình độ A2 CEFR"},{"left":"祝贺 / 恭喜 (Zhùhè / Gōngxǐ)","right":"Xin chúc mừng!"}],
        correctAnswer: "all_matched"
      },
      {
        id: "act-zh-1204-5",
        type: "audio_listen",
        skill: "listening",
        question: "Lắng nghe và chọn đáp án chính xác:",
        prompt: "复习 (Fùxí)",
        options: ["Xin chúc mừng","Xin thứ lỗi","Hẹn gặp lại","Chúc ngủ ngon"],
        correctAnswer: "Xin chúc mừng"
      }
    ]
  },
  {
    id: "lesson-zh-1205",
    unitId: "unit-zh-12",
    title: "AI Practice: Lễ Trao Bằng Tốt Nghiệp CEFR A2 Cùng Cô Giáo Mei",
    description: "Đàm thoại tự do tốt nghiệp chứng chỉ A2 tổng kết cả 12 Unit cùng cô giáo Mei.",
    type: "audio_ai",
    xp: 25,
    estimatedMinutes: 5,
    order: 5,
    heroImage: images.mascotWelcome,
    status: "available",
    goals: [
      { id: "g1", description: "Luyện phản xạ giao tiếp thực tế với AI Teacher Li Wei" },
      { id: "g2", description: "Vận dụng từ vựng trọng tâm vào ngữ cảnh hội thoại tự nhiên" }
    ],
    vocabulary: [
      { id: "v-ai-zh-12-1", word: "恭喜", translation: "Chúc mừng" },
      { id: "v-ai-zh-12-2", word: "A2水平", translation: "Trình độ A2" },
      { id: "v-ai-zh-12-3", word: "自信", translation: "Tự tin" },
      { id: "v-ai-zh-12-4", word: "收获很多", translation: "Thu hoạch được rất nhiều" },
      { id: "v-ai-zh-12-5", word: "谢谢老师", translation: "Cảm ơn thầy cô" }
    ],
    phrases: [],
    activities: [],
    aiTeacherPrompt: {
      scenario: "Sân khấu lễ tốt nghiệp khóa học tiếng Trung tại Thượng Hải",
      systemPrompt: "You are Li Wei, a warm, human, and energetic Chinese teacher. Speak mostly in English for clear guidance. Introduce Chinese words slowly: say the word once, give the English translation, and invite the student to repeat after you. Keep every reply strictly to 1 or 2 conversational sentences with friendly contractions (I'm, let's, that's). Listen closely to the student, praise correct pronunciation, and gently model errors again: 'So close! Try saying —'. Stay strictly on lesson words: 恭喜, A2水平, 自信, 收获很多, 谢谢老师. Never switch topics.",
      initialGreeting: "热烈祝贺你！你已经学完了全部12个单元，成功达到了A2水平！现在心情怎么样？",
      targetVocabulary: ["恭喜","A2水平","自信","收获很多","谢谢老师"],
      suggestedResponses: ["学完12个单元我感到非常有成就感，自信满满！","我最喜欢关于中国传统文化和旅游的内容。","梅老师，感谢您一路以来的悉心教导！"],
      difficulty: "intermediate"
    }
  },
];
