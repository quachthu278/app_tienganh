import { Lesson } from "@/types/learning";
import { images } from "@/constants/images";

export const DE_LESSONS: Lesson[] = [
  {
    id: "lesson-de-101",
    unitId: "unit-de-1",
    title: "Hallo & Lời Chào Nước Đức",
    description: "Lời chào cơ bản và cách tạm biệt trong tiếng Đức.",
    type: "standard",
    xp: 15,
    estimatedMinutes: 5,
    order: 1,
    status: "available",
    goals: [
      { id: "g1", description: "Nắm vững các từ vựng chủ đề Hallo & Lời Chào Nước Đức" },
      { id: "g2", description: "Luyện phát âm chuẩn và phản xạ câu qua các bài tập tương tác" }
    ],
    vocabulary: [
      { id: "v-de-101-1", word: "Hallo", translation: "Xin chào", phonetic: "hah-loh" },
      { id: "v-de-101-2", word: "Guten Morgen", translation: "Chào buổi sáng", phonetic: "goo-ten mor-gen" },
      { id: "v-de-101-3", word: "Guten Tag", translation: "Chào ban ngày / Chúc một ngày tốt lành", phonetic: "goo-ten tahk" },
      { id: "v-de-101-4", word: "Tschüss", translation: "Tạm biệt (thân mật)", phonetic: "chyoos" },
      { id: "v-de-101-5", word: "Auf Wiedersehen", translation: "Tạm biệt (trang trọng)", phonetic: "owf vee-der-zay-en" }
    ],
    phrases: [
      { id: "p-de-101-1", text: "Hallo! Wie geht es dir?", translation: "Xin chào! Bạn có khỏe không?" },
      { id: "p-de-101-2", text: "Tschüss! Bis morgen!", translation: "Tạm biệt! Hẹn gặp lại ngày mai!" }
    ],
    activities: [
      {
        id: "act-de-101-1",
        type: "multiple_choice",
        skill: "reading",
        question: "'Hallo' có nghĩa là gì?",
        options: ["Xin chào","Tạm biệt","Cảm ơn","Xin lỗi"],
        correctAnswer: "Xin chào"
      },
      {
        id: "act-de-101-2",
        type: "fill_blank",
        skill: "writing",
        question: "Điền từ: 'Guten _____!' (buổi sáng)",
        prompt: "Điền từ: 'Guten _____!' (buổi sáng)",
        options: ["Morgen","Tag","Abend","Tschüss"],
        correctAnswer: "Morgen"
      },
      {
        id: "act-de-101-3",
        type: "multiple_choice",
        skill: "reading",
        question: "Dịch: 'Tschüss!'",
        options: ["Tạm biệt!","Xin chào!","Cảm ơn!","Làm ơn!"],
        correctAnswer: "Tạm biệt!"
      },
      {
        id: "act-de-101-4",
        type: "match_pairs",
        skill: "reading",
        question: "Ghép các cặp từ vựng với nghĩa tiếng Việt tương ứng",
        pairs: [{"left":"Hallo","right":"Xin chào"},{"left":"Guten Morgen","right":"Chào buổi sáng"},{"left":"Guten Tag","right":"Chào ban ngày / Chúc một ngày tốt lành"},{"left":"Tschüss","right":"Tạm biệt (thân mật)"}],
        correctAnswer: "all_matched"
      },
      {
        id: "act-de-101-5",
        type: "audio_listen",
        skill: "listening",
        question: "Lắng nghe và chọn đáp án chính xác:",
        prompt: "Hallo",
        options: ["Xin chào","Tạm biệt","Cảm ơn","Xin lỗi"],
        correctAnswer: "Xin chào"
      }
    ]
  },
  {
    id: "lesson-de-102",
    unitId: "unit-de-1",
    title: "Tên Bạn Là Gì? (Wie heißt du?)",
    description: "Giới thiệu tên và hỏi tên người khác bằng tiếng Đức.",
    type: "standard",
    xp: 15,
    estimatedMinutes: 5,
    order: 2,
    status: "available",
    goals: [
      { id: "g1", description: "Nắm vững các từ vựng chủ đề Tên Bạn Là Gì? (Wie heißt du?)" },
      { id: "g2", description: "Luyện phát âm chuẩn và phản xạ câu qua các bài tập tương tác" }
    ],
    vocabulary: [
      { id: "v-de-102-1", word: "Ich", translation: "Tôi", phonetic: "ikh" },
      { id: "v-de-102-2", word: "Du / Sie", translation: "Bạn / Ngài (thân mật / lịch sự)", phonetic: "doo / zee" },
      { id: "v-de-102-3", word: "Heiße", translation: "Tên là / Được gọi là", phonetic: "hy-suh" },
      { id: "v-de-102-4", word: "Freund", translation: "Bạn bè", phonetic: "froynt" },
      { id: "v-de-102-5", word: "Deutsch", translation: "Tiếng Đức / Thuộc về Đức", phonetic: "doych" }
    ],
    phrases: [
      { id: "p-de-102-1", text: "Ich heiße Alex. Und du?", translation: "Tôi tên là Alex. Còn bạn thì sao?" },
      { id: "p-de-102-2", text: "Freut mich, dich kennenzulernen!", translation: "Rất vui được làm quen với bạn!" }
    ],
    activities: [
      {
        id: "act-de-102-1",
        type: "multiple_choice",
        skill: "reading",
        question: "'Ich heiße Alex' nghĩa là gì?",
        options: ["Tôi tên là Alex","Bạn là Alex","Alex là bạn tôi","Ai là Alex"],
        correctAnswer: "Tôi tên là Alex"
      },
      {
        id: "act-de-102-2",
        type: "fill_blank",
        skill: "writing",
        question: "Điền từ: 'Ich _____ Lukas.' (tên tôi là)",
        prompt: "Điền từ: 'Ich _____ Lukas.' (tên tôi là)",
        options: ["heiße","bist","freund","deutsch"],
        correctAnswer: "heiße"
      },
      {
        id: "act-de-102-3",
        type: "multiple_choice",
        skill: "reading",
        question: "Dịch: 'Wie heißt du?'",
        options: ["Bạn tên là gì?","Bạn bao nhiêu tuổi?","Bạn đi đâu?","Bạn khỏe không?"],
        correctAnswer: "Bạn tên là gì?"
      },
      {
        id: "act-de-102-4",
        type: "match_pairs",
        skill: "reading",
        question: "Ghép các cặp từ vựng với nghĩa tiếng Việt tương ứng",
        pairs: [{"left":"Ich","right":"Tôi"},{"left":"Du / Sie","right":"Bạn / Ngài (thân mật / lịch sự)"},{"left":"Heiße","right":"Tên là / Được gọi là"},{"left":"Freund","right":"Bạn bè"}],
        correctAnswer: "all_matched"
      },
      {
        id: "act-de-102-5",
        type: "audio_listen",
        skill: "listening",
        question: "Lắng nghe và chọn đáp án chính xác:",
        prompt: "Ich",
        options: ["Tôi tên là Alex","Bạn là Alex","Alex là bạn tôi","Ai là Alex"],
        correctAnswer: "Tôi tên là Alex"
      }
    ]
  },
  {
    id: "lesson-de-103",
    unitId: "unit-de-1",
    title: "Cảm Ơn & Xin Lỗi (Danke & Bitte)",
    description: "Các quy tắc giao tiếp lịch sự chuẩn mực ở Đức.",
    type: "standard",
    xp: 15,
    estimatedMinutes: 5,
    order: 3,
    status: "available",
    goals: [
      { id: "g1", description: "Nắm vững các từ vựng chủ đề Cảm Ơn & Xin Lỗi (Danke & Bitte)" },
      { id: "g2", description: "Luyện phát âm chuẩn và phản xạ câu qua các bài tập tương tác" }
    ],
    vocabulary: [
      { id: "v-de-103-1", word: "Danke", translation: "Cảm ơn", phonetic: "dahn-kuh" },
      { id: "v-de-103-2", word: "Danke schön", translation: "Cảm ơn rất nhiều", phonetic: "dahn-kuh shurn" },
      { id: "v-de-103-3", word: "Bitte", translation: "Làm ơn / Không có chi", phonetic: "bee-tuh" },
      { id: "v-de-103-4", word: "Entschuldigung", translation: "Xin lỗi / Cho tôi hỏi", phonetic: "ent-shool-dee-goong" },
      { id: "v-de-103-5", word: "Kein Problem", translation: "Không vấn đề gì", phonetic: "kine proh-blem" }
    ],
    phrases: [
      { id: "p-de-103-1", text: "Vielen Dank für deine Hilfe!", translation: "Cảm ơn bạn rất nhiều vì đã giúp đỡ!" },
      { id: "p-de-103-2", text: "Entschuldigung, wo ist das Café?", translation: "Xin lỗi cho tôi hỏi, quán cà phê ở đâu vậy?" }
    ],
    activities: [
      {
        id: "act-de-103-1",
        type: "multiple_choice",
        skill: "reading",
        question: "Người Đức nói gì khi muốn xin lỗi hoặc gọi phục vụ?",
        options: ["Entschuldigung","Danke","Tschüss","Guten Tag"],
        correctAnswer: "Entschuldigung"
      },
      {
        id: "act-de-103-2",
        type: "fill_blank",
        skill: "writing",
        question: "Điền từ: 'Danke _____!' (cảm ơn rất nhiều)",
        prompt: "Điền từ: 'Danke _____!' (cảm ơn rất nhiều)",
        options: ["schön","bitte","problem","hallo"],
        correctAnswer: "schön"
      },
      {
        id: "act-de-103-3",
        type: "multiple_choice",
        skill: "reading",
        question: "Dịch: 'Kein Problem'",
        options: ["Không vấn đề gì","Cảm ơn","Tạm biệt","Xin chào"],
        correctAnswer: "Không vấn đề gì"
      },
      {
        id: "act-de-103-4",
        type: "match_pairs",
        skill: "reading",
        question: "Ghép các cặp từ vựng với nghĩa tiếng Việt tương ứng",
        pairs: [{"left":"Danke","right":"Cảm ơn"},{"left":"Danke schön","right":"Cảm ơn rất nhiều"},{"left":"Bitte","right":"Làm ơn / Không có chi"},{"left":"Entschuldigung","right":"Xin lỗi / Cho tôi hỏi"}],
        correctAnswer: "all_matched"
      },
      {
        id: "act-de-103-5",
        type: "audio_listen",
        skill: "listening",
        question: "Lắng nghe và chọn đáp án chính xác:",
        prompt: "Danke",
        options: ["Entschuldigung","Danke","Tschüss","Guten Tag"],
        correctAnswer: "Entschuldigung"
      }
    ]
  },
  {
    id: "lesson-de-104",
    unitId: "unit-de-1",
    title: "Số Đếm 1 - 10 Tiếng Đức (Eins, Zwei, Drei)",
    description: "Học đếm số chuẩn phát âm tiếng Đức.",
    type: "standard",
    xp: 15,
    estimatedMinutes: 5,
    order: 4,
    status: "available",
    goals: [
      { id: "g1", description: "Nắm vững các từ vựng chủ đề Số Đếm 1 - 10 Tiếng Đức (Eins, Zwei, Drei)" },
      { id: "g2", description: "Luyện phát âm chuẩn và phản xạ câu qua các bài tập tương tác" }
    ],
    vocabulary: [
      { id: "v-de-104-1", word: "Eins / Zwei", translation: "Một (1) / Hai (2)", phonetic: "eyens / tsvye" },
      { id: "v-de-104-2", word: "Drei / Vier", translation: "Ba (3) / Bốn (4)", phonetic: "drye / feer" },
      { id: "v-de-104-3", word: "Fünf / Sechs", translation: "Năm (5) / Sáu (6)", phonetic: "foonf / zeks" },
      { id: "v-de-104-4", word: "Sieben / Acht", translation: "Bảy (7) / Tám (8)", phonetic: "zee-ben / ahkht" },
      { id: "v-de-104-5", word: "Neun / Zehn", translation: "Chín (9) / Mười (10)", phonetic: "noyn / tsayn" }
    ],
    phrases: [
      { id: "p-de-104-1", text: "Eins, zwei, drei, los geht's!", translation: "Một, hai, ba, bắt đầu nào!" },
      { id: "p-de-104-2", text: "Zwei Kaffee, bitte.", translation: "Cho tôi hai ly cà phê, làm ơn." }
    ],
    activities: [
      {
        id: "act-de-104-1",
        type: "multiple_choice",
        skill: "reading",
        question: "'Fünf' trong tiếng Đức là số mấy?",
        options: ["Số 5","Số 3","Số 7","Số 9"],
        correctAnswer: "Số 5"
      },
      {
        id: "act-de-104-2",
        type: "fill_blank",
        skill: "writing",
        question: "Điền số: 'Eins, zwei, _____ (ba)'",
        prompt: "Điền số: 'Eins, zwei, _____ (ba)'",
        options: ["drei","vier","fünf","zehn"],
        correctAnswer: "drei"
      },
      {
        id: "act-de-104-3",
        type: "multiple_choice",
        skill: "reading",
        question: "Số 10 trong tiếng Đức là gì?",
        options: ["Zehn","Acht","Neun","Sieben"],
        correctAnswer: "Zehn"
      },
      {
        id: "act-de-104-4",
        type: "match_pairs",
        skill: "reading",
        question: "Ghép các cặp từ vựng với nghĩa tiếng Việt tương ứng",
        pairs: [{"left":"Eins / Zwei","right":"Một (1) / Hai (2)"},{"left":"Drei / Vier","right":"Ba (3) / Bốn (4)"},{"left":"Fünf / Sechs","right":"Năm (5) / Sáu (6)"},{"left":"Sieben / Acht","right":"Bảy (7) / Tám (8)"}],
        correctAnswer: "all_matched"
      },
      {
        id: "act-de-104-5",
        type: "audio_listen",
        skill: "listening",
        question: "Lắng nghe và chọn đáp án chính xác:",
        prompt: "Eins / Zwei",
        options: ["Số 5","Số 3","Số 7","Số 9"],
        correctAnswer: "Số 5"
      }
    ]
  },
  {
    id: "lesson-de-105",
    unitId: "unit-de-1",
    title: "AI Practice: Chào Hỏi Cùng Bạn Học Berlin",
    description: "Thực hành phản xạ tiếng Đức giao tiếp thân mật cùng anh bạn Jonas tại Berlin.",
    type: "audio_ai",
    xp: 25,
    estimatedMinutes: 5,
    order: 5,
    heroImage: images.mascotWelcome,
    status: "available",
    goals: [
      { id: "g1", description: "Luyện phản xạ giao tiếp thực tế với AI Teacher Lukas" },
      { id: "g2", description: "Vận dụng từ vựng trọng tâm vào ngữ cảnh hội thoại tự nhiên" }
    ],
    vocabulary: [
      { id: "v-ai-de-1-1", word: "Hallo", translation: "Xin chào" },
      { id: "v-ai-de-1-2", word: "Ich heiße", translation: "Tôi tên là" },
      { id: "v-ai-de-1-3", word: "Danke", translation: "Cảm ơn" },
      { id: "v-ai-de-1-4", word: "Bitte", translation: "Làm ơn / Không có chi" },
      { id: "v-ai-de-1-5", word: "Tschüss", translation: "Tạm biệt (thân mật)" }
    ],
    phrases: [],
    activities: [],
    aiTeacherPrompt: {
      scenario: "Công viên Tiergarten Berlin trong buổi sáng thanh bình",
      systemPrompt: "You are Lukas, a warm, human, and energetic German teacher. Speak mostly in English for clear guidance. Introduce German words slowly: say the word once, give the English translation, and invite the student to repeat after you. Keep every reply strictly to 1 or 2 conversational sentences with friendly contractions (I'm, let's, that's). Listen closely to the student, praise correct pronunciation, and gently model errors again: 'So close! Try saying —'. Stay strictly on lesson words: Hallo, Ich heiße, Danke, Bitte, Tschüss. Never switch topics.",
      initialGreeting: "Hallo! Willkommen in Berlin! Wie heißt du? Wie geht's?",
      targetVocabulary: ["Hallo","Ich heiße","Danke","Bitte","Tschüss"],
      suggestedResponses: ["Hallo Jonas! Ich heiße Alex.","Mir geht es gut, danke!","Freut mich, dich kennenzulernen!"],
      difficulty: "beginner"
    }
  },
  {
    id: "lesson-de-201",
    unitId: "unit-de-2",
    title: "Gia Đình Tôi (Meine Familie)",
    description: "Cách gọi cha, mẹ, anh chị em bằng tiếng Đức.",
    type: "standard",
    xp: 15,
    estimatedMinutes: 5,
    order: 1,
    status: "available",
    goals: [
      { id: "g1", description: "Nắm vững các từ vựng chủ đề Gia Đình Tôi (Meine Familie)" },
      { id: "g2", description: "Luyện phát âm chuẩn và phản xạ câu qua các bài tập tương tác" }
    ],
    vocabulary: [
      { id: "v-de-201-1", word: "Familie", translation: "Gia đình", phonetic: "fah-mee-lee-uh" },
      { id: "v-de-201-2", word: "Vater / Papa", translation: "Bố / Cha", phonetic: "fah-ter / pah-pah" },
      { id: "v-de-201-3", word: "Mutter / Mama", translation: "Mẹ", phonetic: "moot-ter / mah-mah" },
      { id: "v-de-201-4", word: "Bruder", translation: "Anh em trai", phonetic: "broo-der" },
      { id: "v-de-201-5", word: "Schwester", translation: "Chị em gái", phonetic: "shves-ter" }
    ],
    phrases: [
      { id: "p-de-201-1", text: "Das ist meine Familie.", translation: "Đây là gia đình của tôi." },
      { id: "p-de-201-2", text: "Ich habe einen Bruder und eine Schwester.", translation: "Tôi có một người anh trai và một người em gái." }
    ],
    activities: [
      {
        id: "act-de-201-1",
        type: "multiple_choice",
        skill: "reading",
        question: "'Mutter' nghĩa là gì?",
        options: ["Mẹ","Bố","Anh trai","Chị gái"],
        correctAnswer: "Mẹ"
      },
      {
        id: "act-de-201-2",
        type: "fill_blank",
        skill: "writing",
        question: "Điền từ: 'Das ist mein _____.' (bố tôi)",
        prompt: "Điền từ: 'Das ist mein _____.' (bố tôi)",
        options: ["Vater","Mutter","Schwester","Familie"],
        correctAnswer: "Vater"
      },
      {
        id: "act-de-201-3",
        type: "multiple_choice",
        skill: "reading",
        question: "Dịch: 'Meine Familie'",
        options: ["Gia đình tôi","Bạn bè tôi","Nhà tôi","Trường tôi"],
        correctAnswer: "Gia đình tôi"
      },
      {
        id: "act-de-201-4",
        type: "match_pairs",
        skill: "reading",
        question: "Ghép các cặp từ vựng với nghĩa tiếng Việt tương ứng",
        pairs: [{"left":"Familie","right":"Gia đình"},{"left":"Vater / Papa","right":"Bố / Cha"},{"left":"Mutter / Mama","right":"Mẹ"},{"left":"Bruder","right":"Anh em trai"}],
        correctAnswer: "all_matched"
      },
      {
        id: "act-de-201-5",
        type: "audio_listen",
        skill: "listening",
        question: "Lắng nghe và chọn đáp án chính xác:",
        prompt: "Familie",
        options: ["Mẹ","Bố","Anh trai","Chị gái"],
        correctAnswer: "Mẹ"
      }
    ]
  },
  {
    id: "lesson-de-202",
    unitId: "unit-de-2",
    title: "Miêu Tả Bạn Bè (Mein Freund)",
    description: "Miêu tả tính cách thân thiện, tốt bụng.",
    type: "standard",
    xp: 15,
    estimatedMinutes: 5,
    order: 2,
    status: "available",
    goals: [
      { id: "g1", description: "Nắm vững các từ vựng chủ đề Miêu Tả Bạn Bè (Mein Freund)" },
      { id: "g2", description: "Luyện phát âm chuẩn và phản xạ câu qua các bài tập tương tác" }
    ],
    vocabulary: [
      { id: "v-de-202-1", word: "Freund / Freundin", translation: "Bạn bè (nam / nữ)", phonetic: "froynt / froyn-deen" },
      { id: "v-de-202-2", word: "Nett", translation: "Tốt bụng / Dễ thương", phonetic: "net" },
      { id: "v-de-202-3", word: "Lustig", translation: "Hài hước / Vui nhộn", phonetic: "loos-tikh" },
      { id: "v-de-202-4", word: "Groß", translation: "Cao lớn / To", phonetic: "grohs" },
      { id: "v-de-202-5", word: "Schön", translation: "Đẹp đẽ", phonetic: "shurn" }
    ],
    phrases: [
      { id: "p-de-202-1", text: "Das ist mein Freund Lukas, er ist sehr nett.", translation: "Đây là bạn tôi Lukas, cậu ấy rất tốt bụng." },
      { id: "p-de-202-2", text: "Sie ist sehr schön!", translation: "Cô ấy rất là xinh đẹp!" }
    ],
    activities: [
      {
        id: "act-de-202-1",
        type: "multiple_choice",
        skill: "reading",
        question: "'Nett' nghĩa là gì?",
        options: ["Tốt bụng / Thân thiện","Xấu tính","Lười biếng","Giận dữ"],
        correctAnswer: "Tốt bụng / Thân thiện"
      },
      {
        id: "act-de-202-2",
        type: "fill_blank",
        skill: "writing",
        question: "Điền từ: 'Lukas ist mein _____.' (bạn tôi)",
        prompt: "Điền từ: 'Lukas ist mein _____.' (bạn tôi)",
        options: ["Freund","Vater","Mutter","Bruder"],
        correctAnswer: "Freund"
      },
      {
        id: "act-de-202-3",
        type: "multiple_choice",
        skill: "reading",
        question: "Dịch: 'Er ist sehr lustig'",
        options: ["Anh ấy rất hài hước","Anh ấy rất cao","Anh ấy là bạn tôi","Anh ấy đi học"],
        correctAnswer: "Anh ấy rất hài hước"
      },
      {
        id: "act-de-202-4",
        type: "match_pairs",
        skill: "reading",
        question: "Ghép các cặp từ vựng với nghĩa tiếng Việt tương ứng",
        pairs: [{"left":"Freund / Freundin","right":"Bạn bè (nam / nữ)"},{"left":"Nett","right":"Tốt bụng / Dễ thương"},{"left":"Lustig","right":"Hài hước / Vui nhộn"},{"left":"Groß","right":"Cao lớn / To"}],
        correctAnswer: "all_matched"
      },
      {
        id: "act-de-202-5",
        type: "audio_listen",
        skill: "listening",
        question: "Lắng nghe và chọn đáp án chính xác:",
        prompt: "Freund / Freundin",
        options: ["Tốt bụng / Thân thiện","Xấu tính","Lười biếng","Giận dữ"],
        correctAnswer: "Tốt bụng / Thân thiện"
      }
    ]
  },
  {
    id: "lesson-de-203",
    unitId: "unit-de-2",
    title: "Màu Sắc & Trang Phục (Farben & Kleidung)",
    description: "Màu sắc và quần áo trong tiếng Đức.",
    type: "standard",
    xp: 15,
    estimatedMinutes: 5,
    order: 3,
    status: "available",
    goals: [
      { id: "g1", description: "Nắm vững các từ vựng chủ đề Màu Sắc & Trang Phục (Farben & Kleidung)" },
      { id: "g2", description: "Luyện phát âm chuẩn và phản xạ câu qua các bài tập tương tác" }
    ],
    vocabulary: [
      { id: "v-de-203-1", word: "Weiß / Schwarz", translation: "Màu trắng / Màu đen", phonetic: "vyes / shvahrts" },
      { id: "v-de-203-2", word: "Rot / Blau", translation: "Màu đỏ / Màu xanh dương", phonetic: "roht / blow" },
      { id: "v-de-203-3", word: "Gelb", translation: "Màu vàng", phonetic: "gelp" },
      { id: "v-de-203-4", word: "Hemd", translation: "Áo sơ mi", phonetic: "hemt" },
      { id: "v-de-203-5", word: "Schuhe", translation: "Đôi giày", phonetic: "shoo-uh" }
    ],
    phrases: [
      { id: "p-de-203-1", text: "Ich trage ein schwarzes Hemd.", translation: "Tôi đang mặc chiếc áo sơ mi màu đen." },
      { id: "p-de-203-2", text: "Die Schuhe sind rot.", translation: "Đôi giày này có màu đỏ." }
    ],
    activities: [
      {
        id: "act-de-203-1",
        type: "multiple_choice",
        skill: "reading",
        question: "Cờ Đức có 3 màu: Schwarz, Rot và màu gì?",
        options: ["Gold / Gelb (Vàng)","Blau (Xanh)","Weiß (Trắng)","Grün (Xanh lá)"],
        correctAnswer: "Gold / Gelb (Vàng)"
      },
      {
        id: "act-de-203-2",
        type: "fill_blank",
        skill: "writing",
        question: "Điền từ: 'Ein weißes _____.' (áo sơ mi)",
        prompt: "Điền từ: 'Ein weißes _____.' (áo sơ mi)",
        options: ["Hemd","Schuhe","Farben","Rot"],
        correctAnswer: "Hemd"
      },
      {
        id: "act-de-203-3",
        type: "multiple_choice",
        skill: "reading",
        question: "Dịch: 'Schwarze Schuhe'",
        options: ["Đôi giày đen","Đôi giày trắng","Chiếc áo đen","Màu sắc đen"],
        correctAnswer: "Đôi giày đen"
      },
      {
        id: "act-de-203-4",
        type: "match_pairs",
        skill: "reading",
        question: "Ghép các cặp từ vựng với nghĩa tiếng Việt tương ứng",
        pairs: [{"left":"Weiß / Schwarz","right":"Màu trắng / Màu đen"},{"left":"Rot / Blau","right":"Màu đỏ / Màu xanh dương"},{"left":"Gelb","right":"Màu vàng"},{"left":"Hemd","right":"Áo sơ mi"}],
        correctAnswer: "all_matched"
      },
      {
        id: "act-de-203-5",
        type: "audio_listen",
        skill: "listening",
        question: "Lắng nghe và chọn đáp án chính xác:",
        prompt: "Weiß / Schwarz",
        options: ["Gold / Gelb (Vàng)","Blau (Xanh)","Weiß (Trắng)","Grün (Xanh lá)"],
        correctAnswer: "Gold / Gelb (Vàng)"
      }
    ]
  },
  {
    id: "lesson-de-204",
    unitId: "unit-de-2",
    title: "Sở Thích Của Tôi (Meine Hobbys)",
    description: "Nói về sở thích nghe nhạc, đọc sách, thể thao.",
    type: "standard",
    xp: 15,
    estimatedMinutes: 5,
    order: 4,
    status: "available",
    goals: [
      { id: "g1", description: "Nắm vững các từ vựng chủ đề Sở Thích Của Tôi (Meine Hobbys)" },
      { id: "g2", description: "Luyện phát âm chuẩn và phản xạ câu qua các bài tập tương tác" }
    ],
    vocabulary: [
      { id: "v-de-204-1", word: "Ich mag", translation: "Tôi thích", phonetic: "ikh mahk" },
      { id: "v-de-204-2", word: "Ich mag kein", translation: "Tôi không thích", phonetic: "ikh mahk kine" },
      { id: "v-de-204-3", word: "Musik", translation: "Âm nhạc", phonetic: "moo-zeek" },
      { id: "v-de-204-4", word: "Sport", translation: "Thể thao", phonetic: "shpohrt" },
      { id: "v-de-204-5", word: "Reisen", translation: "Du lịch", phonetic: "rye-zen" }
    ],
    phrases: [
      { id: "p-de-204-1", text: "Ich mag Musik sehr.", translation: "Tôi rất thích âm nhạc." },
      { id: "p-de-204-2", text: "Was sind deine Hobbys?", translation: "Sở thích của bạn là gì?" }
    ],
    activities: [
      {
        id: "act-de-204-1",
        type: "multiple_choice",
        skill: "reading",
        question: "Cấu trúc nói 'Tôi thích...' trong tiếng Đức là gì?",
        options: ["Ich mag...","Ich mag kein...","Danke...","Tschüss..."],
        correctAnswer: "Ich mag..."
      },
      {
        id: "act-de-204-2",
        type: "fill_blank",
        skill: "writing",
        question: "Điền từ: 'Ich _____ Reisen.' (tôi thích)",
        prompt: "Điền từ: 'Ich _____ Reisen.' (tôi thích)",
        options: ["mag","nicht","bitte","danke"],
        correctAnswer: "mag"
      },
      {
        id: "act-de-204-3",
        type: "multiple_choice",
        skill: "reading",
        question: "Dịch: 'Ich mag Sport'",
        options: ["Tôi thích thể thao","Tôi ghét thể thao","Tôi chơi thể thao","Tôi là vận động viên"],
        correctAnswer: "Tôi thích thể thao"
      },
      {
        id: "act-de-204-4",
        type: "match_pairs",
        skill: "reading",
        question: "Ghép các cặp từ vựng với nghĩa tiếng Việt tương ứng",
        pairs: [{"left":"Ich mag","right":"Tôi thích"},{"left":"Ich mag kein","right":"Tôi không thích"},{"left":"Musik","right":"Âm nhạc"},{"left":"Sport","right":"Thể thao"}],
        correctAnswer: "all_matched"
      },
      {
        id: "act-de-204-5",
        type: "audio_listen",
        skill: "listening",
        question: "Lắng nghe và chọn đáp án chính xác:",
        prompt: "Ich mag",
        options: ["Ich mag...","Ich mag kein...","Danke...","Tschüss..."],
        correctAnswer: "Ich mag..."
      }
    ]
  },
  {
    id: "lesson-de-205",
    unitId: "unit-de-2",
    title: "AI Practice: Gia Đình & Sở Thích Cùng Hanna",
    description: "Trò chuyện cởi mở về gia đình, bạn bè và sở thích cùng cô bạn Hanna người Munich.",
    type: "audio_ai",
    xp: 25,
    estimatedMinutes: 5,
    order: 5,
    heroImage: images.mascotWelcome,
    status: "available",
    goals: [
      { id: "g1", description: "Luyện phản xạ giao tiếp thực tế với AI Teacher Lukas" },
      { id: "g2", description: "Vận dụng từ vựng trọng tâm vào ngữ cảnh hội thoại tự nhiên" }
    ],
    vocabulary: [
      { id: "v-ai-de-2-1", word: "Familie", translation: "Gia đình" },
      { id: "v-ai-de-2-2", word: "Freund", translation: "Bạn bè" },
      { id: "v-ai-de-2-3", word: "Ich mag", translation: "Tôi thích" },
      { id: "v-ai-de-2-4", word: "Musik", translation: "Âm nhạc" },
      { id: "v-ai-de-2-5", word: "Sport", translation: "Thể thao" }
    ],
    phrases: [],
    activities: [],
    aiTeacherPrompt: {
      scenario: "Quán cà phê bên bờ sông Isar tại Munich",
      systemPrompt: "You are Lukas, a warm, human, and energetic German teacher. Speak mostly in English for clear guidance. Introduce German words slowly: say the word once, give the English translation, and invite the student to repeat after you. Keep every reply strictly to 1 or 2 conversational sentences with friendly contractions (I'm, let's, that's). Listen closely to the student, praise correct pronunciation, and gently model errors again: 'So close! Try saying —'. Stay strictly on lesson words: Familie, Freund, Ich mag, Musik, Sport. Never switch topics.",
      initialGreeting: "Hallo! Wie geht's dir? Hast du Geschwister? Was magst du in deiner Freizeit?",
      targetVocabulary: ["Familie","Freund","Ich mag","Musik","Sport"],
      suggestedResponses: ["Ich habe einen Bruder.","Ich mag Musik und Sport!","Und du Hanna, was machst du gern?"],
      difficulty: "beginner"
    }
  },
  {
    id: "lesson-de-301",
    unitId: "unit-de-3",
    title: "Mấy Giờ Rồi? (Wie viel Uhr ist es?)",
    description: "Hỏi và trả lời giờ giấc trong tiếng Đức.",
    type: "standard",
    xp: 15,
    estimatedMinutes: 5,
    order: 1,
    status: "available",
    goals: [
      { id: "g1", description: "Nắm vững các từ vựng chủ đề Mấy Giờ Rồi? (Wie viel Uhr ist es?)" },
      { id: "g2", description: "Luyện phát âm chuẩn và phản xạ câu qua các bài tập tương tác" }
    ],
    vocabulary: [
      { id: "v-de-301-1", word: "Wie viel Uhr", translation: "Mấy giờ", phonetic: "vee feel oor" },
      { id: "v-de-301-2", word: "Uhr", translation: "Giờ", phonetic: "oor" },
      { id: "v-de-301-3", word: "Minute", translation: "Phút", phonetic: "mee-noo-tuh" },
      { id: "v-de-301-4", word: "Halb", translation: "Rưỡi / Nửa (30 phút)", phonetic: "hahlp" },
      { id: "v-de-301-5", word: "Morgen / Abend", translation: "Buổi sáng / Buổi tối", phonetic: "mor-gen / ah-bent" }
    ],
    phrases: [
      { id: "p-de-301-1", text: "Wie viel Uhr ist es, bitte?", translation: "Mấy giờ rồi, làm ơn cho hỏi?" },
      { id: "p-de-301-2", text: "Es ist halb acht.", translation: "Bây giờ là 7 giờ rưỡi." }
    ],
    activities: [
      {
        id: "act-de-301-1",
        type: "multiple_choice",
        skill: "reading",
        question: "'Wie viel Uhr ist es?' nghĩa là gì?",
        options: ["Mấy giờ rồi?","Hôm nay thứ mấy?","Đi đâu đấy?","Bao nhiêu tiền?"],
        correctAnswer: "Mấy giờ rồi?"
      },
      {
        id: "act-de-301-2",
        type: "fill_blank",
        skill: "writing",
        question: "Điền từ: 'Es ist _____ acht.' (7 giờ rưỡi)",
        prompt: "Điền từ: 'Es ist _____ acht.' (7 giờ rưỡi)",
        options: ["halb","uhr","minute","morgen"],
        correctAnswer: "halb"
      },
      {
        id: "act-de-301-3",
        type: "multiple_choice",
        skill: "reading",
        question: "Dịch: 'Acht Uhr'",
        options: ["8 giờ","7 giờ","9 giờ","10 giờ"],
        correctAnswer: "8 giờ"
      },
      {
        id: "act-de-301-4",
        type: "match_pairs",
        skill: "reading",
        question: "Ghép các cặp từ vựng với nghĩa tiếng Việt tương ứng",
        pairs: [{"left":"Wie viel Uhr","right":"Mấy giờ"},{"left":"Uhr","right":"Giờ"},{"left":"Minute","right":"Phút"},{"left":"Halb","right":"Rưỡi / Nửa (30 phút)"}],
        correctAnswer: "all_matched"
      },
      {
        id: "act-de-301-5",
        type: "audio_listen",
        skill: "listening",
        question: "Lắng nghe và chọn đáp án chính xác:",
        prompt: "Wie viel Uhr",
        options: ["Mấy giờ rồi?","Hôm nay thứ mấy?","Đi đâu đấy?","Bao nhiêu tiền?"],
        correctAnswer: "Mấy giờ rồi?"
      }
    ]
  },
  {
    id: "lesson-de-302",
    unitId: "unit-de-3",
    title: "Thói Quen Mỗi Ngày (Tagesablauf)",
    description: "Thức dậy, ăn sáng và đi làm.",
    type: "standard",
    xp: 15,
    estimatedMinutes: 5,
    order: 2,
    status: "available",
    goals: [
      { id: "g1", description: "Nắm vững các từ vựng chủ đề Thói Quen Mỗi Ngày (Tagesablauf)" },
      { id: "g2", description: "Luyện phát âm chuẩn và phản xạ câu qua các bài tập tương tác" }
    ],
    vocabulary: [
      { id: "v-de-302-1", word: "Aufstehen", translation: "Thức dậy", phonetic: "owf-shtay-en" },
      { id: "v-de-302-2", word: "Schlafen", translation: "Đi ngủ", phonetic: "shlah-fen" },
      { id: "v-de-302-3", word: "Essen", translation: "Ăn", phonetic: "es-sen" },
      { id: "v-de-302-4", word: "Trinken", translation: "Uống", phonetic: "treen-ken" },
      { id: "v-de-302-5", word: "Arbeiten", translation: "Làm việc", phonetic: "ahr-bye-ten" }
    ],
    phrases: [
      { id: "p-de-302-1", text: "Ich stehe um sieben Uhr auf.", translation: "Tôi thức dậy lúc 7 giờ." },
      { id: "p-de-302-2", text: "Ich trinke Kaffee am Morgen.", translation: "Tôi uống cà phê vào buổi sáng." }
    ],
    activities: [
      {
        id: "act-de-302-1",
        type: "multiple_choice",
        skill: "reading",
        question: "'Essen' nghĩa là hành động gì?",
        options: ["Ăn","Uống","Ngủ","Làm việc"],
        correctAnswer: "Ăn"
      },
      {
        id: "act-de-302-2",
        type: "fill_blank",
        skill: "writing",
        question: "Điền từ: 'Ich stehe um 7 Uhr _____.' (thức dậy)",
        prompt: "Điền từ: 'Ich stehe um 7 Uhr _____.' (thức dậy)",
        options: ["auf","aus","an","ab"],
        correctAnswer: "auf"
      },
      {
        id: "act-de-302-3",
        type: "multiple_choice",
        skill: "reading",
        question: "Dịch: 'Kaffee trinken'",
        options: ["Uống cà phê","Ăn bánh mì","Đi làm","Đi ngủ"],
        correctAnswer: "Uống cà phê"
      },
      {
        id: "act-de-302-4",
        type: "match_pairs",
        skill: "reading",
        question: "Ghép các cặp từ vựng với nghĩa tiếng Việt tương ứng",
        pairs: [{"left":"Aufstehen","right":"Thức dậy"},{"left":"Schlafen","right":"Đi ngủ"},{"left":"Essen","right":"Ăn"},{"left":"Trinken","right":"Uống"}],
        correctAnswer: "all_matched"
      },
      {
        id: "act-de-302-5",
        type: "audio_listen",
        skill: "listening",
        question: "Lắng nghe và chọn đáp án chính xác:",
        prompt: "Aufstehen",
        options: ["Ăn","Uống","Ngủ","Làm việc"],
        correctAnswer: "Ăn"
      }
    ]
  },
  {
    id: "lesson-de-303",
    unitId: "unit-de-3",
    title: "Các Ngày Trong Tuần (Wochentage)",
    description: "Từ thứ Hai đến Chủ Nhật tiếng Đức.",
    type: "standard",
    xp: 15,
    estimatedMinutes: 5,
    order: 3,
    status: "available",
    goals: [
      { id: "g1", description: "Nắm vững các từ vựng chủ đề Các Ngày Trong Tuần (Wochentage)" },
      { id: "g2", description: "Luyện phát âm chuẩn và phản xạ câu qua các bài tập tương tác" }
    ],
    vocabulary: [
      { id: "v-de-303-1", word: "Montag", translation: "Thứ Hai", phonetic: "mohn-tahk" },
      { id: "v-de-303-2", word: "Freitag", translation: "Thứ Sáu", phonetic: "frye-tahk" },
      { id: "v-de-303-3", word: "Sonntag", translation: "Chủ Nhật", phonetic: "zohn-tahk" },
      { id: "v-de-303-4", word: "Heute", translation: "Hôm nay", phonetic: "hoy-tuh" },
      { id: "v-de-303-5", word: "Morgen", translation: "Ngày mai", phonetic: "mor-gen" }
    ],
    phrases: [
      { id: "p-de-303-1", text: "Heute ist Freitag!", translation: "Hôm nay là thứ Sáu rồi!" },
      { id: "p-de-303-2", text: "Bis morgen!", translation: "Hẹn gặp lại vào ngày mai!" }
    ],
    activities: [
      {
        id: "act-de-303-1",
        type: "multiple_choice",
        skill: "reading",
        question: "'Sonntag' là ngày nào trong tuần?",
        options: ["Chủ Nhật","Thứ Hai","Thứ Bảy","Thứ Sáu"],
        correctAnswer: "Chủ Nhật"
      },
      {
        id: "act-de-303-2",
        type: "fill_blank",
        skill: "writing",
        question: "Điền từ: '_____ ist Freitag.' (hôm nay)",
        prompt: "Điền từ: '_____ ist Freitag.' (hôm nay)",
        options: ["Heute","Morgen","Montag","Uhr"],
        correctAnswer: "Heute"
      },
      {
        id: "act-de-303-3",
        type: "multiple_choice",
        skill: "reading",
        question: "Dịch: 'Heute ist Montag'",
        options: ["Hôm nay là thứ Hai","Hôm nay là thứ Sáu","Ngày mai là thứ Hai","Hôm qua là thứ Hai"],
        correctAnswer: "Hôm nay là thứ Hai"
      },
      {
        id: "act-de-303-4",
        type: "match_pairs",
        skill: "reading",
        question: "Ghép các cặp từ vựng với nghĩa tiếng Việt tương ứng",
        pairs: [{"left":"Montag","right":"Thứ Hai"},{"left":"Freitag","right":"Thứ Sáu"},{"left":"Sonntag","right":"Chủ Nhật"},{"left":"Heute","right":"Hôm nay"}],
        correctAnswer: "all_matched"
      },
      {
        id: "act-de-303-5",
        type: "audio_listen",
        skill: "listening",
        question: "Lắng nghe và chọn đáp án chính xác:",
        prompt: "Montag",
        options: ["Chủ Nhật","Thứ Hai","Thứ Bảy","Thứ Sáu"],
        correctAnswer: "Chủ Nhật"
      }
    ]
  },
  {
    id: "lesson-de-304",
    unitId: "unit-de-3",
    title: "Thời Tiết Nước Đức (Das Wetter)",
    description: "Nói về thời tiết nắng ấm, mưa rào hay tuyết rơi.",
    type: "standard",
    xp: 15,
    estimatedMinutes: 5,
    order: 4,
    status: "available",
    goals: [
      { id: "g1", description: "Nắm vững các từ vựng chủ đề Thời Tiết Nước Đức (Das Wetter)" },
      { id: "g2", description: "Luyện phát âm chuẩn và phản xạ câu qua các bài tập tương tác" }
    ],
    vocabulary: [
      { id: "v-de-304-1", word: "Wetter", translation: "Thời tiết", phonetic: "vet-ter" },
      { id: "v-de-304-2", word: "Sonne", translation: "Mặt trời / Nắng", phonetic: "zohn-nuh" },
      { id: "v-de-304-3", word: "Regen", translation: "Mưa", phonetic: "ray-gen" },
      { id: "v-de-304-4", word: "Warm / Heiß", translation: "Ấm áp / Nóng bức", phonetic: "varm / hyce" },
      { id: "v-de-304-5", word: "Kalt", translation: "Lạnh giá", phonetic: "kahlt" }
    ],
    phrases: [
      { id: "p-de-304-1", text: "Heute ist das Wetter sehr schön.", translation: "Hôm nay thời tiết rất đẹp." },
      { id: "p-de-304-2", text: "Es regnet in Berlin.", translation: "Trời đang mưa ở Berlin." }
    ],
    activities: [
      {
        id: "act-de-304-1",
        type: "multiple_choice",
        skill: "reading",
        question: "'Es regnet' có nghĩa là gì?",
        options: ["Trời mưa","Trời nắng","Có tuyết","Gió to"],
        correctAnswer: "Trời mưa"
      },
      {
        id: "act-de-304-2",
        type: "fill_blank",
        skill: "writing",
        question: "Điền từ: 'Das _____ ist heute schön.' (thời tiết)",
        prompt: "Điền từ: 'Das _____ ist heute schön.' (thời tiết)",
        options: ["Wetter","Regen","Kalt","Heute"],
        correctAnswer: "Wetter"
      },
      {
        id: "act-de-304-3",
        type: "multiple_choice",
        skill: "reading",
        question: "Dịch: 'Es ist sehr kalt'",
        options: ["Trời rất lạnh","Trời rất nóng","Trời đẹp","Trời mưa"],
        correctAnswer: "Trời rất lạnh"
      },
      {
        id: "act-de-304-4",
        type: "match_pairs",
        skill: "reading",
        question: "Ghép các cặp từ vựng với nghĩa tiếng Việt tương ứng",
        pairs: [{"left":"Wetter","right":"Thời tiết"},{"left":"Sonne","right":"Mặt trời / Nắng"},{"left":"Regen","right":"Mưa"},{"left":"Warm / Heiß","right":"Ấm áp / Nóng bức"}],
        correctAnswer: "all_matched"
      },
      {
        id: "act-de-304-5",
        type: "audio_listen",
        skill: "listening",
        question: "Lắng nghe và chọn đáp án chính xác:",
        prompt: "Wetter",
        options: ["Trời mưa","Trời nắng","Có tuyết","Gió to"],
        correctAnswer: "Trời mưa"
      }
    ]
  },
  {
    id: "lesson-de-305",
    unitId: "unit-de-3",
    title: "AI Practice: Một Ngày Của Bạn Tại Berlin",
    description: "Kể cho anh bạn Max nghe về lịch trình sinh hoạt và thời tiết một ngày của bạn.",
    type: "audio_ai",
    xp: 25,
    estimatedMinutes: 5,
    order: 5,
    heroImage: images.mascotWelcome,
    status: "available",
    goals: [
      { id: "g1", description: "Luyện phản xạ giao tiếp thực tế với AI Teacher Lukas" },
      { id: "g2", description: "Vận dụng từ vựng trọng tâm vào ngữ cảnh hội thoại tự nhiên" }
    ],
    vocabulary: [
      { id: "v-ai-de-3-1", word: "Uhr", translation: "Giờ" },
      { id: "v-ai-de-3-2", word: "Aufstehen", translation: "Thức dậy" },
      { id: "v-ai-de-3-3", word: "Kaffee", translation: "Cà phê" },
      { id: "v-ai-de-3-4", word: "Wetter", translation: "Thời tiết" },
      { id: "v-ai-de-3-5", word: "Heute", translation: "Hôm nay" }
    ],
    phrases: [],
    activities: [],
    aiTeacherPrompt: {
      scenario: "Bên cổng thành Brandenburg Gate tại Berlin",
      systemPrompt: "You are Lukas, a warm, human, and energetic German teacher. Speak mostly in English for clear guidance. Introduce German words slowly: say the word once, give the English translation, and invite the student to repeat after you. Keep every reply strictly to 1 or 2 conversational sentences with friendly contractions (I'm, let's, that's). Listen closely to the student, praise correct pronunciation, and gently model errors again: 'So close! Try saying —'. Stay strictly on lesson words: Uhr, Aufstehen, Kaffee, Wetter, Heute. Never switch topics.",
      initialGreeting: "Guten Tag! Schön dich zu sehen. Wie ist das Wetter heute? Um wie viel Uhr bist du aufgestanden?",
      targetVocabulary: ["Uhr","Aufstehen","Kaffee","Wetter","Heute"],
      suggestedResponses: ["Ich bin um 7 Uhr aufgestanden.","Das Wetter ist heute sehr schön!","Ich habe Kaffee getrunken."],
      difficulty: "beginner"
    }
  },
  {
    id: "lesson-de-401",
    unitId: "unit-de-4",
    title: "Tại Quán Ăn Đức (Im Restaurant)",
    description: "Vào quán, xin thực đơn và gọi phục vụ.",
    type: "standard",
    xp: 15,
    estimatedMinutes: 5,
    order: 1,
    status: "available",
    goals: [
      { id: "g1", description: "Nắm vững các từ vựng chủ đề Tại Quán Ăn Đức (Im Restaurant)" },
      { id: "g2", description: "Luyện phát âm chuẩn và phản xạ câu qua các bài tập tương tác" }
    ],
    vocabulary: [
      { id: "v-de-401-1", word: "Kellner", translation: "Người phục vụ", phonetic: "kel-ner" },
      { id: "v-de-401-2", word: "Speisekarte", translation: "Thực đơn món ăn", phonetic: "shpye-zuh-kahr-tuh" },
      { id: "v-de-401-3", word: "Bestellen", translation: "Gọi món / Đặt món", phonetic: "beh-shtel-len" },
      { id: "v-de-401-4", word: "Wasser", translation: "Nước lọc", phonetic: "vah-ser" },
      { id: "v-de-401-5", word: "Kaffee", translation: "Cà phê", phonetic: "kah-fay" }
    ],
    phrases: [
      { id: "p-de-401-1", text: "Die Speisekarte, bitte.", translation: "Cho tôi xin thực đơn, làm ơn." },
      { id: "p-de-401-2", text: "Ein Glas Wasser, bitte.", translation: "Cho tôi xin một ly nước lọc." }
    ],
    activities: [
      {
        id: "act-de-401-1",
        type: "multiple_choice",
        skill: "reading",
        question: "'Speisekarte' trong tiếng Đức là gì?",
        options: ["Thực đơn","Hóa đơn","Nhà hàng","Món ăn"],
        correctAnswer: "Thực đơn"
      },
      {
        id: "act-de-401-2",
        type: "fill_blank",
        skill: "writing",
        question: "Điền từ: 'Ich möchte _____.' (gọi món)",
        prompt: "Điền từ: 'Ich möchte _____.' (gọi món)",
        options: ["bestellen","wasser","karte","kellner"],
        correctAnswer: "bestellen"
      },
      {
        id: "act-de-401-3",
        type: "multiple_choice",
        skill: "reading",
        question: "Dịch: 'Wasser, bitte'",
        options: ["Cho tôi xin nước","Cho tôi cà phê","Tính tiền","Tạm biệt"],
        correctAnswer: "Cho tôi xin nước"
      },
      {
        id: "act-de-401-4",
        type: "match_pairs",
        skill: "reading",
        question: "Ghép các cặp từ vựng với nghĩa tiếng Việt tương ứng",
        pairs: [{"left":"Kellner","right":"Người phục vụ"},{"left":"Speisekarte","right":"Thực đơn món ăn"},{"left":"Bestellen","right":"Gọi món / Đặt món"},{"left":"Wasser","right":"Nước lọc"}],
        correctAnswer: "all_matched"
      },
      {
        id: "act-de-401-5",
        type: "audio_listen",
        skill: "listening",
        question: "Lắng nghe và chọn đáp án chính xác:",
        prompt: "Kellner",
        options: ["Thực đơn","Hóa đơn","Nhà hàng","Món ăn"],
        correctAnswer: "Thực đơn"
      }
    ]
  },
  {
    id: "lesson-de-402",
    unitId: "unit-de-4",
    title: "Gọi Bánh Pretzel & Xúc Xích (Bratwurst & Brezel)",
    description: "Thưởng thức xúc xích nướng Bratwurst và bánh mì Đức.",
    type: "standard",
    xp: 15,
    estimatedMinutes: 5,
    order: 2,
    status: "available",
    goals: [
      { id: "g1", description: "Nắm vững các từ vựng chủ đề Gọi Bánh Pretzel & Xúc Xích (Bratwurst & Brezel)" },
      { id: "g2", description: "Luyện phát âm chuẩn và phản xạ câu qua các bài tập tương tác" }
    ],
    vocabulary: [
      { id: "v-de-402-1", word: "Bratwurst", translation: "Xúc xích nướng Đức", phonetic: "braht-voorst" },
      { id: "v-de-402-2", word: "Brezel", translation: "Bánh quy xoắn Pretzel", phonetic: "bray-tsel" },
      { id: "v-de-402-3", word: "Kartoffel", translation: "Khoai tây", phonetic: "kahr-tof-fel" },
      { id: "v-de-402-4", word: "Bier", translation: "Bia Đức", phonetic: "beer" },
      { id: "v-de-402-5", word: "Lecker", translation: "Ngon miệng", phonetic: "lek-ker" }
    ],
    phrases: [
      { id: "p-de-402-1", text: "Eine Bratwurst mit Brezel, bitte.", translation: "Cho tôi một xúc xích nướng kèm bánh xoắn pretzel." },
      { id: "p-de-402-2", text: "Das Essen ist sehr lecker!", translation: "Món ăn này rất ngon miệng!" }
    ],
    activities: [
      {
        id: "act-de-402-1",
        type: "multiple_choice",
        skill: "reading",
        question: "'Lecker' nghĩa là gì?",
        options: ["Ngon miệng","Cay","Đắng","Dở"],
        correctAnswer: "Ngon miệng"
      },
      {
        id: "act-de-402-2",
        type: "fill_blank",
        skill: "writing",
        question: "Điền từ: 'Das ist sehr _____!' (ngon)",
        prompt: "Điền từ: 'Das ist sehr _____!' (ngon)",
        options: ["lecker","wasser","bier","hemd"],
        correctAnswer: "lecker"
      },
      {
        id: "act-de-402-3",
        type: "multiple_choice",
        skill: "reading",
        question: "Dịch: 'Bratwurst, bitte'",
        options: ["Cho tôi xúc xích nướng","Cho tôi ly bia","Tính tiền giúp tôi","Cho tôi khoai tây"],
        correctAnswer: "Cho tôi xúc xích nướng"
      },
      {
        id: "act-de-402-4",
        type: "match_pairs",
        skill: "reading",
        question: "Ghép các cặp từ vựng với nghĩa tiếng Việt tương ứng",
        pairs: [{"left":"Bratwurst","right":"Xúc xích nướng Đức"},{"left":"Brezel","right":"Bánh quy xoắn Pretzel"},{"left":"Kartoffel","right":"Khoai tây"},{"left":"Bier","right":"Bia Đức"}],
        correctAnswer: "all_matched"
      },
      {
        id: "act-de-402-5",
        type: "audio_listen",
        skill: "listening",
        question: "Lắng nghe và chọn đáp án chính xác:",
        prompt: "Bratwurst",
        options: ["Ngon miệng","Cay","Đắng","Dở"],
        correctAnswer: "Ngon miệng"
      }
    ]
  },
  {
    id: "lesson-de-403",
    unitId: "unit-de-4",
    title: "Văn Hóa Bia Đức (Prost & Guten Appetit)",
    description: "Nâng ly cụng bia tại Biergarten và chúc ngon miệng.",
    type: "standard",
    xp: 15,
    estimatedMinutes: 5,
    order: 3,
    status: "available",
    goals: [
      { id: "g1", description: "Nắm vững các từ vựng chủ đề Văn Hóa Bia Đức (Prost & Guten Appetit)" },
      { id: "g2", description: "Luyện phát âm chuẩn và phản xạ câu qua các bài tập tương tác" }
    ],
    vocabulary: [
      { id: "v-de-403-1", word: "Prost!", translation: "Cạn ly / Nâng ly!", phonetic: "prohst" },
      { id: "v-de-403-2", word: "Guten Appetit", translation: "Chúc ngon miệng", phonetic: "goo-ten ah-peh-teet" },
      { id: "v-de-403-3", word: "Hunger", translation: "Đói bụng", phonetic: "hoong-er" },
      { id: "v-de-403-4", word: "Durst", translation: "Khát nước", phonetic: "doorst" },
      { id: "v-de-403-5", word: "Essen", translation: "Bữa ăn / Món ăn", phonetic: "es-sen" }
    ],
    phrases: [
      { id: "p-de-403-1", text: "Guten Appetit an alle!", translation: "Chúc tất cả mọi người ngon miệng!" },
      { id: "p-de-403-2", text: "Prost! Auf unsere Freundschaft!", translation: "Cạn ly! Vì tình bạn của chúng ta!" }
    ],
    activities: [
      {
        id: "act-de-403-1",
        type: "multiple_choice",
        skill: "reading",
        question: "Người Đức hô câu gì khi nâng cốc cụng bia?",
        options: ["Prost!","Danke!","Tschüss!","Guten Tag!"],
        correctAnswer: "Prost!"
      },
      {
        id: "act-de-403-2",
        type: "fill_blank",
        skill: "writing",
        question: "Điền từ: 'Trước khi ăn nói: Guten _____!'",
        prompt: "Điền từ: 'Trước khi ăn nói: Guten _____!'",
        options: ["Appetit","Tag","Morgen","Prost"],
        correctAnswer: "Appetit"
      },
      {
        id: "act-de-403-3",
        type: "multiple_choice",
        skill: "reading",
        question: "Dịch: 'Guten Appetit!'",
        options: ["Chúc ngon miệng!","Cảm ơn bạn!","Tạm biệt nhé!","Làm ơn!"],
        correctAnswer: "Chúc ngon miệng!"
      },
      {
        id: "act-de-403-4",
        type: "match_pairs",
        skill: "reading",
        question: "Ghép các cặp từ vựng với nghĩa tiếng Việt tương ứng",
        pairs: [{"left":"Prost!","right":"Cạn ly / Nâng ly!"},{"left":"Guten Appetit","right":"Chúc ngon miệng"},{"left":"Hunger","right":"Đói bụng"},{"left":"Durst","right":"Khát nước"}],
        correctAnswer: "all_matched"
      },
      {
        id: "act-de-403-5",
        type: "audio_listen",
        skill: "listening",
        question: "Lắng nghe và chọn đáp án chính xác:",
        prompt: "Prost!",
        options: ["Prost!","Danke!","Tschüss!","Guten Tag!"],
        correctAnswer: "Prost!"
      }
    ]
  },
  {
    id: "lesson-de-404",
    unitId: "unit-de-4",
    title: "Tính Tiền & Hóa Đơn (Zahlen, bitte)",
    description: "Thanh toán bằng Euro và hỏi giá tiền.",
    type: "standard",
    xp: 15,
    estimatedMinutes: 5,
    order: 4,
    status: "available",
    goals: [
      { id: "g1", description: "Nắm vững các từ vựng chủ đề Tính Tiền & Hóa Đơn (Zahlen, bitte)" },
      { id: "g2", description: "Luyện phát âm chuẩn và phản xạ câu qua các bài tập tương tác" }
    ],
    vocabulary: [
      { id: "v-de-404-1", word: "Die Rechnung", translation: "Hóa đơn tính tiền", phonetic: "dee rekh-noong" },
      { id: "v-de-404-2", word: "Zahlen", translation: "Thanh toán / Trả tiền", phonetic: "tsah-len" },
      { id: "v-de-404-3", word: "Wie viel kostet das?", translation: "Cái này giá bao nhiêu?", phonetic: "vee feel kos-tet dahs" },
      { id: "v-de-404-4", word: "Euro", translation: "Đồng tiền Euro (€)", phonetic: "oy-roh" },
      { id: "v-de-404-5", word: "Bar / Karte", translation: "Tiền mặt / Thẻ ngân hàng", phonetic: "bahr / kahr-tuh" }
    ],
    phrases: [
      { id: "p-de-404-1", text: "Zahlen, bitte! / Die Rechnung, bitte.", translation: "Tính tiền giúp tôi, làm ơn." },
      { id: "p-de-404-2", text: "Kann ich mit Karte zahlen?", translation: "Tôi có thể thanh toán bằng thẻ được không?" }
    ],
    activities: [
      {
        id: "act-de-404-1",
        type: "multiple_choice",
        skill: "reading",
        question: "Câu chuẩn để xin tính tiền ở Đức là gì?",
        options: ["Zahlen, bitte! / Die Rechnung, bitte.","Speisekarte, bitte!","Guten Appetit!","Hallo!"],
        correctAnswer: "Zahlen, bitte! / Die Rechnung, bitte."
      },
      {
        id: "act-de-404-2",
        type: "fill_blank",
        skill: "writing",
        question: "Điền từ: 'Die _____, bitte.' (hóa đơn)",
        prompt: "Điền từ: 'Die _____, bitte.' (hóa đơn)",
        options: ["Rechnung","Karte","Euro","Wasser"],
        correctAnswer: "Rechnung"
      },
      {
        id: "act-de-404-3",
        type: "multiple_choice",
        skill: "reading",
        question: "Dịch: 'Wie viel kostet das?'",
        options: ["Cái này giá bao nhiêu?","Ở đâu vậy?","Món gì đây?","Ai thế?"],
        correctAnswer: "Cái này giá bao nhiêu?"
      },
      {
        id: "act-de-404-4",
        type: "match_pairs",
        skill: "reading",
        question: "Ghép các cặp từ vựng với nghĩa tiếng Việt tương ứng",
        pairs: [{"left":"Die Rechnung","right":"Hóa đơn tính tiền"},{"left":"Zahlen","right":"Thanh toán / Trả tiền"},{"left":"Wie viel kostet das?","right":"Cái này giá bao nhiêu?"},{"left":"Euro","right":"Đồng tiền Euro (€)"}],
        correctAnswer: "all_matched"
      },
      {
        id: "act-de-404-5",
        type: "audio_listen",
        skill: "listening",
        question: "Lắng nghe và chọn đáp án chính xác:",
        prompt: "Die Rechnung",
        options: ["Zahlen, bitte! / Die Rechnung, bitte.","Speisekarte, bitte!","Guten Appetit!","Hallo!"],
        correctAnswer: "Zahlen, bitte! / Die Rechnung, bitte."
      }
    ]
  },
  {
    id: "lesson-de-405",
    unitId: "unit-de-4",
    title: "AI Practice: Gọi Món Tại Quán Ăn Biergarten Munich",
    description: "Thực hành gọi xúc xích Bratwurst, bánh pretzel và tính tiền cùng bác chủ quán Klaus.",
    type: "audio_ai",
    xp: 25,
    estimatedMinutes: 5,
    order: 5,
    heroImage: images.mascotWelcome,
    status: "available",
    goals: [
      { id: "g1", description: "Luyện phản xạ giao tiếp thực tế với AI Teacher Lukas" },
      { id: "g2", description: "Vận dụng từ vựng trọng tâm vào ngữ cảnh hội thoại tự nhiên" }
    ],
    vocabulary: [
      { id: "v-ai-de-4-1", word: "Bratwurst", translation: "Xúc xích nướng Đức" },
      { id: "v-ai-de-4-2", word: "Brezel", translation: "Bánh quy xoắn Pretzel" },
      { id: "v-ai-de-4-3", word: "Lecker", translation: "Ngon miệng" },
      { id: "v-ai-de-4-4", word: "Zahlen", translation: "Thanh toán / Trả tiền" },
      { id: "v-ai-de-4-5", word: "Rechnung", translation: "Hóa đơn" }
    ],
    phrases: [],
    activities: [],
    aiTeacherPrompt: {
      scenario: "Khu vườn bia Biergarten truyền thống náo nhiệt tại Munich",
      systemPrompt: "You are Lukas, a warm, human, and energetic German teacher. Speak mostly in English for clear guidance. Introduce German words slowly: say the word once, give the English translation, and invite the student to repeat after you. Keep every reply strictly to 1 or 2 conversational sentences with friendly contractions (I'm, let's, that's). Listen closely to the student, praise correct pronunciation, and gently model errors again: 'So close! Try saying —'. Stay strictly on lesson words: Bratwurst, Brezel, Lecker, Zahlen, Rechnung. Never switch topics.",
      initialGreeting: "Grüß Gott! Willkommen im Biergarten! Was darf ich Ihnen bringen?",
      targetVocabulary: ["Bratwurst","Brezel","Lecker","Zahlen","Rechnung"],
      suggestedResponses: ["Eine Bratwurst und eine Brezel, bitte.","Das Essen ist sehr lecker!","Zahlen, bitte!"],
      difficulty: "beginner"
    }
  },
  {
    id: "lesson-de-501",
    unitId: "unit-de-5",
    title: "Ở Đâu Vậy? (Wo ist...?)",
    description: "Hỏi đường và chỉ hướng trong các thành phố Đức.",
    type: "standard",
    xp: 15,
    estimatedMinutes: 5,
    order: 1,
    status: "available",
    goals: [
      { id: "g1", description: "Nắm vững các từ vựng chủ đề Ở Đâu Vậy? (Wo ist...?)" },
      { id: "g2", description: "Luyện phát âm chuẩn và phản xạ câu qua các bài tập tương tác" }
    ],
    vocabulary: [
      { id: "v-de-501-1", word: "Wo ist...?", translation: "Ở đâu vậy?", phonetic: "voh eest" },
      { id: "v-de-501-2", word: "Hier / Dort", translation: "Ở đây / Ở đằng kia", phonetic: "heer / dohrt" },
      { id: "v-de-501-3", word: "Rechts", translation: "Bên phải", phonetic: "rekhts" },
      { id: "v-de-501-4", word: "Links", translation: "Bên trái", phonetic: "leengks" },
      { id: "v-de-501-5", word: "Geradeaus", translation: "Đi thẳng", phonetic: "geh-rah-duh-ows" }
    ],
    phrases: [
      { id: "p-de-501-1", text: "Entschuldigung, wo ist der Bahnhof?", translation: "Xin lỗi, ga tàu hỏa ở đâu vậy ạ?" },
      { id: "p-de-501-2", text: "Gehen Sie geradeaus und dann links.", translation: "Hãy đi thẳng rồi sau đó rẽ sang bên trái." }
    ],
    activities: [
      {
        id: "act-de-501-1",
        type: "multiple_choice",
        skill: "reading",
        question: "'Rechts' là hướng nào?",
        options: ["Bên phải","Bên trái","Đi thẳng","Đằng sau"],
        correctAnswer: "Bên phải"
      },
      {
        id: "act-de-501-2",
        type: "fill_blank",
        skill: "writing",
        question: "Điền từ: 'Gehen Sie bitte _____.' (đi thẳng)",
        prompt: "Điền từ: 'Gehen Sie bitte _____.' (đi thẳng)",
        options: ["geradeaus","rechts","links","hier"],
        correctAnswer: "geradeaus"
      },
      {
        id: "act-de-501-3",
        type: "multiple_choice",
        skill: "reading",
        question: "Dịch: 'Wo ist die Toilette?'",
        options: ["Nhà vệ sinh ở đâu?","Ga tàu ở đâu?","Sân bay ở đâu?","Khách sạn ở đâu?"],
        correctAnswer: "Nhà vệ sinh ở đâu?"
      },
      {
        id: "act-de-501-4",
        type: "match_pairs",
        skill: "reading",
        question: "Ghép các cặp từ vựng với nghĩa tiếng Việt tương ứng",
        pairs: [{"left":"Wo ist...?","right":"Ở đâu vậy?"},{"left":"Hier / Dort","right":"Ở đây / Ở đằng kia"},{"left":"Rechts","right":"Bên phải"},{"left":"Links","right":"Bên trái"}],
        correctAnswer: "all_matched"
      },
      {
        id: "act-de-501-5",
        type: "audio_listen",
        skill: "listening",
        question: "Lắng nghe và chọn đáp án chính xác:",
        prompt: "Wo ist...?",
        options: ["Bên phải","Bên trái","Đi thẳng","Đằng sau"],
        correctAnswer: "Bên phải"
      }
    ]
  },
  {
    id: "lesson-de-502",
    unitId: "unit-de-5",
    title: "Đi Tàu Điện & Tàu Hỏa (U-Bahn & ICE)",
    description: "Đi tàu điện ngầm U-Bahn và tàu hỏa tốc hành ICE.",
    type: "standard",
    xp: 15,
    estimatedMinutes: 5,
    order: 2,
    status: "available",
    goals: [
      { id: "g1", description: "Nắm vững các từ vựng chủ đề Đi Tàu Điện & Tàu Hỏa (U-Bahn & ICE)" },
      { id: "g2", description: "Luyện phát âm chuẩn và phản xạ câu qua các bài tập tương tác" }
    ],
    vocabulary: [
      { id: "v-de-502-1", word: "Hauptbahnhof", translation: "Nhà ga trung tâm", phonetic: "howpt-bahn-hohf" },
      { id: "v-de-502-2", word: "Zug", translation: "Tàu hỏa", phonetic: "tsook" },
      { id: "v-de-502-3", word: "U-Bahn / S-Bahn", translation: "Tàu điện ngầm / Tàu nội đô", phonetic: "oo-bahn" },
      { id: "v-de-502-4", word: "Fahrkarte", translation: "Vé tàu xe", phonetic: "fahr-kahr-tuh" },
      { id: "v-de-502-5", word: "Gleis", translation: "Đường ray / Ke ga", phonetic: "glyse" }
    ],
    phrases: [
      { id: "p-de-502-1", text: "Eine Fahrkarte nach Berlin, bitte.", translation: "Cho tôi một vé tàu đi Berlin, làm ơn." },
      { id: "p-de-502-2", text: "Der Zug fährt von Gleis 4 ab.", translation: "Tàu sẽ xuất phát từ đường ray số 4." }
    ],
    activities: [
      {
        id: "act-de-502-1",
        type: "multiple_choice",
        skill: "reading",
        question: "'Hauptbahnhof' nghĩa là gì?",
        options: ["Nhà ga trung tâm","Sân bay","Bến xe buýt","Bệnh viện"],
        correctAnswer: "Nhà ga trung tâm"
      },
      {
        id: "act-de-502-2",
        type: "fill_blank",
        skill: "writing",
        question: "Điền từ: 'Wo ist der _____?' (ga trung tâm)",
        prompt: "Điền từ: 'Wo ist der _____?' (ga trung tâm)",
        options: ["Hauptbahnhof","Fahrkarte","Gleis","Zug"],
        correctAnswer: "Hauptbahnhof"
      },
      {
        id: "act-de-502-3",
        type: "multiple_choice",
        skill: "reading",
        question: "Dịch: 'Eine Fahrkarte, bitte'",
        options: ["Một vé tàu xe, làm ơn","Một chuyến bay","Một nhà ga","Một chiếc xe"],
        correctAnswer: "Một vé tàu xe, làm ơn"
      },
      {
        id: "act-de-502-4",
        type: "match_pairs",
        skill: "reading",
        question: "Ghép các cặp từ vựng với nghĩa tiếng Việt tương ứng",
        pairs: [{"left":"Hauptbahnhof","right":"Nhà ga trung tâm"},{"left":"Zug","right":"Tàu hỏa"},{"left":"U-Bahn / S-Bahn","right":"Tàu điện ngầm / Tàu nội đô"},{"left":"Fahrkarte","right":"Vé tàu xe"}],
        correctAnswer: "all_matched"
      },
      {
        id: "act-de-502-5",
        type: "audio_listen",
        skill: "listening",
        question: "Lắng nghe và chọn đáp án chính xác:",
        prompt: "Hauptbahnhof",
        options: ["Nhà ga trung tâm","Sân bay","Bến xe buýt","Bệnh viện"],
        correctAnswer: "Nhà ga trung tâm"
      }
    ]
  },
  {
    id: "lesson-de-503",
    unitId: "unit-de-5",
    title: "Tại Khách Sạn (Im Hotel)",
    description: "Đặt phòng và check-in khách sạn tại Đức.",
    type: "standard",
    xp: 15,
    estimatedMinutes: 5,
    order: 3,
    status: "available",
    goals: [
      { id: "g1", description: "Nắm vững các từ vựng chủ đề Tại Khách Sạn (Im Hotel)" },
      { id: "g2", description: "Luyện phát âm chuẩn và phản xạ câu qua các bài tập tương tác" }
    ],
    vocabulary: [
      { id: "v-de-503-1", word: "Hotel", translation: "Khách sạn", phonetic: "hoh-tel" },
      { id: "v-de-503-2", word: "Reservierung", translation: "Đặt trước", phonetic: "reh-zair-vee-roong" },
      { id: "v-de-503-3", word: "Zimmer", translation: "Phòng ngủ", phonetic: "tsim-mer" },
      { id: "v-de-503-4", word: "Schlüssel", translation: "Chìa khóa", phonetic: "shloos-sel" },
      { id: "v-de-503-5", word: "WLAN", translation: "Mạng internet wifi", phonetic: "vay-lahn" }
    ],
    phrases: [
      { id: "p-de-503-1", text: "Ich habe eine Reservierung auf den Namen Alex.", translation: "Tôi có đặt phòng trước dưới tên Alex." },
      { id: "p-de-503-2", text: "Wie ist das WLAN-Passwort?", translation: "Mật khẩu mạng wifi là gì thế ạ?" }
    ],
    activities: [
      {
        id: "act-de-503-1",
        type: "multiple_choice",
        skill: "reading",
        question: "'Der Zimmerschlüssel' nghĩa là gì?",
        options: ["Chìa khóa phòng","Số phòng","Thẻ khách sạn","Mật khẩu"],
        correctAnswer: "Chìa khóa phòng"
      },
      {
        id: "act-de-503-2",
        type: "fill_blank",
        skill: "writing",
        question: "Điền từ: 'Hier ist Ihr _____.' (chìa khóa phòng)",
        prompt: "Điền từ: 'Hier ist Ihr _____.' (chìa khóa phòng)",
        options: ["Schlüssel","Zimmer","Hotel","WLAN"],
        correctAnswer: "Schlüssel"
      },
      {
        id: "act-de-503-3",
        type: "multiple_choice",
        skill: "reading",
        question: "Dịch: 'Ich habe eine Reservierung'",
        options: ["Tôi có đặt phòng trước","Tôi muốn trả phòng","Tôi muốn xem phòng","Phòng này bao nhiêu tiền"],
        correctAnswer: "Tôi có đặt phòng trước"
      },
      {
        id: "act-de-503-4",
        type: "match_pairs",
        skill: "reading",
        question: "Ghép các cặp từ vựng với nghĩa tiếng Việt tương ứng",
        pairs: [{"left":"Hotel","right":"Khách sạn"},{"left":"Reservierung","right":"Đặt trước"},{"left":"Zimmer","right":"Phòng ngủ"},{"left":"Schlüssel","right":"Chìa khóa"}],
        correctAnswer: "all_matched"
      },
      {
        id: "act-de-503-5",
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
    id: "lesson-de-504",
    unitId: "unit-de-5",
    title: "Sân Bay Frankfurt (Flughafen)",
    description: "Thủ tục lên máy bay, hành lý và hộ chiếu.",
    type: "standard",
    xp: 15,
    estimatedMinutes: 5,
    order: 4,
    status: "available",
    goals: [
      { id: "g1", description: "Nắm vững các từ vựng chủ đề Sân Bay Frankfurt (Flughafen)" },
      { id: "g2", description: "Luyện phát âm chuẩn và phản xạ câu qua các bài tập tương tác" }
    ],
    vocabulary: [
      { id: "v-de-504-1", word: "Flughafen", translation: "Sân bay", phonetic: "flook-hah-fen" },
      { id: "v-de-504-2", word: "Flugzeug", translation: "Máy bay", phonetic: "flook-tsoyk" },
      { id: "v-de-504-3", word: "Gepäck", translation: "Hành lý", phonetic: "geh-pek" },
      { id: "v-de-504-4", word: "Reisepass", translation: "Hộ chiếu", phonetic: "rye-zuh-pahs" },
      { id: "v-de-504-5", word: "Flug", translation: "Chuyến bay", phonetic: "flook" }
    ],
    phrases: [
      { id: "p-de-504-1", text: "Ihren Reisepass, bitte.", translation: "Làm ơn cho tôi xem hộ chiếu." },
      { id: "p-de-504-2", text: "Ich fahre zum Flughafen Frankfurt.", translation: "Tôi đi đến sân bay Frankfurt." }
    ],
    activities: [
      {
        id: "act-de-504-1",
        type: "multiple_choice",
        skill: "reading",
        question: "'Reisepass' là giấy tờ gì?",
        options: ["Hộ chiếu","Vé máy bay","Hành lý","Ví tiền"],
        correctAnswer: "Hộ chiếu"
      },
      {
        id: "act-de-504-2",
        type: "fill_blank",
        skill: "writing",
        question: "Điền từ: 'Zum _____ Frankfurt.' (sân bay)",
        prompt: "Điền từ: 'Zum _____ Frankfurt.' (sân bay)",
        options: ["Flughafen","Flugzeug","Gepäck","Reisepass"],
        correctAnswer: "Flughafen"
      },
      {
        id: "act-de-504-3",
        type: "multiple_choice",
        skill: "reading",
        question: "Dịch: 'Mein Gepäck'",
        options: ["Hành lý của tôi","Hộ chiếu của tôi","Vé máy bay của tôi","Túi xách của tôi"],
        correctAnswer: "Hành lý của tôi"
      },
      {
        id: "act-de-504-4",
        type: "match_pairs",
        skill: "reading",
        question: "Ghép các cặp từ vựng với nghĩa tiếng Việt tương ứng",
        pairs: [{"left":"Flughafen","right":"Sân bay"},{"left":"Flugzeug","right":"Máy bay"},{"left":"Gepäck","right":"Hành lý"},{"left":"Reisepass","right":"Hộ chiếu"}],
        correctAnswer: "all_matched"
      },
      {
        id: "act-de-504-5",
        type: "audio_listen",
        skill: "listening",
        question: "Lắng nghe và chọn đáp án chính xác:",
        prompt: "Flughafen",
        options: ["Hộ chiếu","Vé máy bay","Hành lý","Ví tiền"],
        correctAnswer: "Hộ chiếu"
      }
    ]
  },
  {
    id: "lesson-de-505",
    unitId: "unit-de-5",
    title: "AI Practice: Đi Tàu Tại Ga Trung Tâm Berlin",
    description: "Thực hành hỏi nhân viên ga tàu Stefan cách mua vé tàu ICE và tìm đường ray.",
    type: "audio_ai",
    xp: 25,
    estimatedMinutes: 5,
    order: 5,
    heroImage: images.mascotWelcome,
    status: "available",
    goals: [
      { id: "g1", description: "Luyện phản xạ giao tiếp thực tế với AI Teacher Lukas" },
      { id: "g2", description: "Vận dụng từ vựng trọng tâm vào ngữ cảnh hội thoại tự nhiên" }
    ],
    vocabulary: [
      { id: "v-ai-de-5-1", word: "Hauptbahnhof", translation: "Nhà ga trung tâm" },
      { id: "v-ai-de-5-2", word: "Zug", translation: "Tàu hỏa" },
      { id: "v-ai-de-5-3", word: "Fahrkarte", translation: "Vé tàu xe" },
      { id: "v-ai-de-5-4", word: "Gleis", translation: "Đường ray / Ke ga" },
      { id: "v-ai-de-5-5", word: "Geradeaus", translation: "Đi thẳng" }
    ],
    phrases: [],
    activities: [],
    aiTeacherPrompt: {
      scenario: "Trung tâm thông tin khách hàng tại nhà ga Berlin Hauptbahnhof",
      systemPrompt: "You are Lukas, a warm, human, and energetic German teacher. Speak mostly in English for clear guidance. Introduce German words slowly: say the word once, give the English translation, and invite the student to repeat after you. Keep every reply strictly to 1 or 2 conversational sentences with friendly contractions (I'm, let's, that's). Listen closely to the student, praise correct pronunciation, and gently model errors again: 'So close! Try saying —'. Stay strictly on lesson words: Hauptbahnhof, Zug, Fahrkarte, Gleis, Geradeaus. Never switch topics.",
      initialGreeting: "Guten Tag! Willkommen am Berliner Hauptbahnhof. Wohin möchten Sie reisen?",
      targetVocabulary: ["Hauptbahnhof","Zug","Fahrkarte","Gleis","Geradeaus"],
      suggestedResponses: ["Ich möchte nach München fahren.","Von welchem Gleis fährt der Zug?","Vielen Dank für Ihre Hilfe!"],
      difficulty: "beginner"
    }
  },
  {
    id: "lesson-de-601",
    unitId: "unit-de-6",
    title: "Mua Sắm Tại Cửa Hàng (Einkaufen)",
    description: "Hỏi giá và mua sắm tại siêu thị và cửa hàng Đức.",
    type: "standard",
    xp: 15,
    estimatedMinutes: 5,
    order: 1,
    status: "available",
    goals: [
      { id: "g1", description: "Nắm vững các từ vựng chủ đề Mua Sắm Tại Cửa Hàng (Einkaufen)" },
      { id: "g2", description: "Luyện phát âm chuẩn và phản xạ câu qua các bài tập tương tác" }
    ],
    vocabulary: [
      { id: "v-de-601-1", word: "Geschäft / Laden", translation: "Cửa hàng / Tiệm mua sắm", phonetic: "geh-sheft / lah-den" },
      { id: "v-de-601-2", word: "Wie viel kostet das?", translation: "Cái này giá bao nhiêu?", phonetic: "vee feel kos-tet dahs" },
      { id: "v-de-601-3", word: "Teuer", translation: "Đắt tiền", phonetic: "toy-er" },
      { id: "v-de-601-4", word: "Ich nehme das", translation: "Tôi lấy cái này", phonetic: "ikh nay-muh dahs" },
      { id: "v-de-601-5", word: "Größe", translation: "Kích cỡ / Size", phonetic: "grur-suh" }
    ],
    phrases: [
      { id: "p-de-601-1", text: "Wie viel kostet das, bitte?", translation: "Làm ơn cho hỏi cái này giá bao nhiêu?" },
      { id: "p-de-601-2", text: "Ich nehme das Hemd.", translation: "Tôi lấy chiếc áo sơ mi này." }
    ],
    activities: [
      {
        id: "act-de-601-1",
        type: "multiple_choice",
        skill: "reading",
        question: "'Teuer' nghĩa là gì?",
        options: ["Đắt tiền","Rẻ tiền","Đẹp đẽ","Ngon miệng"],
        correctAnswer: "Đắt tiền"
      },
      {
        id: "act-de-601-2",
        type: "fill_blank",
        skill: "writing",
        question: "Điền từ: 'Wie viel _____ das?' (giá bao nhiêu)",
        prompt: "Điền từ: 'Wie viel _____ das?' (giá bao nhiêu)",
        options: ["kostet","teuer","nehmen","größe"],
        correctAnswer: "kostet"
      },
      {
        id: "act-de-601-3",
        type: "multiple_choice",
        skill: "reading",
        question: "Dịch: 'Ich nehme das'",
        options: ["Tôi lấy cái này","Tôi không thích cái này","Cái này đắt quá","Cái kia ở đâu"],
        correctAnswer: "Tôi lấy cái này"
      },
      {
        id: "act-de-601-4",
        type: "match_pairs",
        skill: "reading",
        question: "Ghép các cặp từ vựng với nghĩa tiếng Việt tương ứng",
        pairs: [{"left":"Geschäft / Laden","right":"Cửa hàng / Tiệm mua sắm"},{"left":"Wie viel kostet das?","right":"Cái này giá bao nhiêu?"},{"left":"Teuer","right":"Đắt tiền"},{"left":"Ich nehme das","right":"Tôi lấy cái này"}],
        correctAnswer: "all_matched"
      },
      {
        id: "act-de-601-5",
        type: "audio_listen",
        skill: "listening",
        question: "Lắng nghe và chọn đáp án chính xác:",
        prompt: "Geschäft / Laden",
        options: ["Đắt tiền","Rẻ tiền","Đẹp đẽ","Ngon miệng"],
        correctAnswer: "Đắt tiền"
      }
    ]
  },
  {
    id: "lesson-de-602",
    unitId: "unit-de-6",
    title: "Hẹn Gặp Cuối Tuần (Verabredung am Wochenende)",
    description: "Lên kế hoạch gặp bạn bè vào cuối tuần.",
    type: "standard",
    xp: 15,
    estimatedMinutes: 5,
    order: 2,
    status: "available",
    goals: [
      { id: "g1", description: "Nắm vững các từ vựng chủ đề Hẹn Gặp Cuối Tuần (Verabredung am Wochenende)" },
      { id: "g2", description: "Luyện phát âm chuẩn và phản xạ câu qua các bài tập tương tác" }
    ],
    vocabulary: [
      { id: "v-de-602-1", word: "Zusammen", translation: "Cùng nhau", phonetic: "tsoo-zahm-men" },
      { id: "v-de-602-2", word: "Gehen", translation: "Đi", phonetic: "gay-en" },
      { id: "v-de-602-3", word: "Wochenende", translation: "Cuối tuần", phonetic: "vokh-en-en-duh" },
      { id: "v-de-602-4", word: "Hast du Zeit?", translation: "Bạn có thời gian rảnh không?", phonetic: "hahst doo tsyt" },
      { id: "v-de-602-5", word: "Gute Idee!", translation: "Ý kiến hay đấy!", phonetic: "goo-tuh ee-day" }
    ],
    phrases: [
      { id: "p-de-602-1", text: "Gehen wir am Wochenende zusammen ins Café?", translation: "Cuối tuần này chúng ta cùng đi cà phê nhé?" },
      { id: "p-de-602-2", text: "Ja, das ist eine super Idee!", translation: "Được chứ, đó là một ý tưởng tuyệt vời!" }
    ],
    activities: [
      {
        id: "act-de-602-1",
        type: "multiple_choice",
        skill: "reading",
        question: "'Gute Idee!' nghĩa là gì?",
        options: ["Ý kiến hay đấy!","Không được đâu","Tạm biệt nhé","Cảm ơn bạn"],
        correctAnswer: "Ý kiến hay đấy!"
      },
      {
        id: "act-de-602-2",
        type: "fill_blank",
        skill: "writing",
        question: "Điền từ: 'Gehen wir _____!' (cùng nhau)",
        prompt: "Điền từ: 'Gehen wir _____!' (cùng nhau)",
        options: ["zusammen","wochenende","zeit","idee"],
        correctAnswer: "zusammen"
      },
      {
        id: "act-de-602-3",
        type: "multiple_choice",
        skill: "reading",
        question: "Dịch: 'Zusammen gehen'",
        options: ["Cùng nhau đi","Đi một mình","Đi về nhà","Đi ngủ"],
        correctAnswer: "Cùng nhau đi"
      },
      {
        id: "act-de-602-4",
        type: "match_pairs",
        skill: "reading",
        question: "Ghép các cặp từ vựng với nghĩa tiếng Việt tương ứng",
        pairs: [{"left":"Zusammen","right":"Cùng nhau"},{"left":"Gehen","right":"Đi"},{"left":"Wochenende","right":"Cuối tuần"},{"left":"Hast du Zeit?","right":"Bạn có thời gian rảnh không?"}],
        correctAnswer: "all_matched"
      },
      {
        id: "act-de-602-5",
        type: "audio_listen",
        skill: "listening",
        question: "Lắng nghe và chọn đáp án chính xác:",
        prompt: "Zusammen",
        options: ["Ý kiến hay đấy!","Không được đâu","Tạm biệt nhé","Cảm ơn bạn"],
        correctAnswer: "Ý kiến hay đấy!"
      }
    ]
  },
  {
    id: "lesson-de-603",
    unitId: "unit-de-6",
    title: "Nghề Nghiệp & Công Việc (Beruf & Arbeit)",
    description: "Nói về nghề nghiệp của mình bằng tiếng Đức.",
    type: "standard",
    xp: 15,
    estimatedMinutes: 5,
    order: 3,
    status: "available",
    goals: [
      { id: "g1", description: "Nắm vững các từ vựng chủ đề Nghề Nghiệp & Công Việc (Beruf & Arbeit)" },
      { id: "g2", description: "Luyện phát âm chuẩn và phản xạ câu qua các bài tập tương tác" }
    ],
    vocabulary: [
      { id: "v-de-603-1", word: "Beruf / Arbeit", translation: "Nghề nghiệp / Công việc", phonetic: "beh-roof / ahr-byte" },
      { id: "v-de-603-2", word: "Lehrer", translation: "Thầy cô giáo", phonetic: "lay-rer" },
      { id: "v-de-603-3", word: "Student", translation: "Sinh viên", phonetic: "shtoo-dent" },
      { id: "v-de-603-4", word: "Arzt", translation: "Bác sĩ", phonetic: "ahrtst" },
      { id: "v-de-603-5", word: "Firma", translation: "Công ty", phonetic: "feer-mah" }
    ],
    phrases: [
      { id: "p-de-603-1", text: "Was ist dein Beruf?", translation: "Nghề nghiệp của bạn là gì?" },
      { id: "p-de-603-2", text: "Ich bin Student, ich lerne Deutsch.", translation: "Tôi là sinh viên, tôi đang học tiếng Đức." }
    ],
    activities: [
      {
        id: "act-de-603-1",
        type: "multiple_choice",
        skill: "reading",
        question: "'Student' nghĩa là gì?",
        options: ["Sinh viên","Giáo viên","Bác sĩ","Họa sĩ"],
        correctAnswer: "Sinh viên"
      },
      {
        id: "act-de-603-2",
        type: "fill_blank",
        skill: "writing",
        question: "Điền từ: 'Ich bin _____.' (sinh viên)",
        prompt: "Điền từ: 'Ich bin _____.' (sinh viên)",
        options: ["Student","Beruf","Firma","Arbeit"],
        correctAnswer: "Student"
      },
      {
        id: "act-de-603-3",
        type: "multiple_choice",
        skill: "reading",
        question: "Dịch: 'Ich bin Lehrer'",
        options: ["Tôi là giáo viên","Tôi là sinh viên","Tôi là bác sĩ","Tôi đi làm"],
        correctAnswer: "Tôi là giáo viên"
      },
      {
        id: "act-de-603-4",
        type: "match_pairs",
        skill: "reading",
        question: "Ghép các cặp từ vựng với nghĩa tiếng Việt tương ứng",
        pairs: [{"left":"Beruf / Arbeit","right":"Nghề nghiệp / Công việc"},{"left":"Lehrer","right":"Thầy cô giáo"},{"left":"Student","right":"Sinh viên"},{"left":"Arzt","right":"Bác sĩ"}],
        correctAnswer: "all_matched"
      },
      {
        id: "act-de-603-5",
        type: "audio_listen",
        skill: "listening",
        question: "Lắng nghe và chọn đáp án chính xác:",
        prompt: "Beruf / Arbeit",
        options: ["Sinh viên","Giáo viên","Bác sĩ","Họa sĩ"],
        correctAnswer: "Sinh viên"
      }
    ]
  },
  {
    id: "lesson-de-604",
    unitId: "unit-de-6",
    title: "Tình Huống Khẩn Cấp (Hilfe!)",
    description: "Kêu cứu và tìm bệnh viện, gọi cảnh sát 110.",
    type: "standard",
    xp: 15,
    estimatedMinutes: 5,
    order: 4,
    status: "available",
    goals: [
      { id: "g1", description: "Nắm vững các từ vựng chủ đề Tình Huống Khẩn Cấp (Hilfe!)" },
      { id: "g2", description: "Luyện phát âm chuẩn và phản xạ câu qua các bài tập tương tác" }
    ],
    vocabulary: [
      { id: "v-de-604-1", word: "Hilfe!", translation: "Cứu tôi với! / Giúp tôi với!", phonetic: "heel-fuh" },
      { id: "v-de-604-2", word: "Krankenhaus", translation: "Bệnh viện", phonetic: "krahn-ken-hows" },
      { id: "v-de-604-3", word: "Polizei", translation: "Cảnh sát", phonetic: "poh-lee-tsye" },
      { id: "v-de-604-4", word: "Krank", translation: "Bị ốm / Bị bệnh", phonetic: "krahnk" },
      { id: "v-de-604-5", word: "Apotheke", translation: "Hiệu thuốc tây", phonetic: "ah-poh-tay-kuh" }
    ],
    phrases: [
      { id: "p-de-604-1", text: "Hilfe! Bitte helfen Sie mir.", translation: "Cứu tôi với! Làm ơn giúp tôi." },
      { id: "p-de-604-2", text: "Wo ist die nächste Apotheke?", translation: "Hiệu thuốc gần nhất ở đâu vậy?" }
    ],
    activities: [
      {
        id: "act-de-604-1",
        type: "multiple_choice",
        skill: "reading",
        question: "Số điện thoại cảnh sát khẩn cấp ở Đức là gì?",
        options: ["110","112","911","115"],
        correctAnswer: "110"
      },
      {
        id: "act-de-604-2",
        type: "fill_blank",
        skill: "writing",
        question: "Điền từ: '_____! Bitte helfen Sie mir.' (cứu tôi)",
        prompt: "Điền từ: '_____! Bitte helfen Sie mir.' (cứu tôi)",
        options: ["Hilfe","Polizei","Apotheke","Krank"],
        correctAnswer: "Hilfe"
      },
      {
        id: "act-de-604-3",
        type: "multiple_choice",
        skill: "reading",
        question: "Dịch: 'Wo ist das Krankenhaus?'",
        options: ["Bệnh viện ở đâu?","Đồn cảnh sát ở đâu?","Hiệu thuốc ở đâu?","Trường học ở đâu?"],
        correctAnswer: "Bệnh viện ở đâu?"
      },
      {
        id: "act-de-604-4",
        type: "match_pairs",
        skill: "reading",
        question: "Ghép các cặp từ vựng với nghĩa tiếng Việt tương ứng",
        pairs: [{"left":"Hilfe!","right":"Cứu tôi với! / Giúp tôi với!"},{"left":"Krankenhaus","right":"Bệnh viện"},{"left":"Polizei","right":"Cảnh sát"},{"left":"Krank","right":"Bị ốm / Bị bệnh"}],
        correctAnswer: "all_matched"
      },
      {
        id: "act-de-604-5",
        type: "audio_listen",
        skill: "listening",
        question: "Lắng nghe và chọn đáp án chính xác:",
        prompt: "Hilfe!",
        options: ["110","112","911","115"],
        correctAnswer: "110"
      }
    ]
  },
  {
    id: "lesson-de-605",
    unitId: "unit-de-6",
    title: "AI Practice: Trò Chuyện Tự Do Tốt Nghiệp Khóa Đức",
    description: "Trò chuyện tự do cùng cô giáo Lena chúc mừng bạn hoàn thành xuất sắc 6 Unit tiếng Đức!",
    type: "audio_ai",
    xp: 25,
    estimatedMinutes: 5,
    order: 5,
    heroImage: images.mascotWelcome,
    status: "available",
    goals: [
      { id: "g1", description: "Luyện phản xạ giao tiếp thực tế với AI Teacher Lukas" },
      { id: "g2", description: "Vận dụng từ vựng trọng tâm vào ngữ cảnh hội thoại tự nhiên" }
    ],
    vocabulary: [
      { id: "v-ai-de-6-1", word: "Glückwunsch", translation: "Chúc mừng" },
      { id: "v-ai-de-6-2", word: "Deutschland", translation: "Đức" },
      { id: "v-ai-de-6-3", word: "Berlin", translation: "Berlin" },
      { id: "v-ai-de-6-4", word: "Ich mag", translation: "Tôi thích" },
      { id: "v-ai-de-6-5", word: "Danke", translation: "Cảm ơn" }
    ],
    phrases: [],
    activities: [],
    aiTeacherPrompt: {
      scenario: "Quán cà phê ngắm hồ Alster tại thành phố cảng Hamburg",
      systemPrompt: "You are Lukas, a warm, human, and energetic German teacher. Speak mostly in English for clear guidance. Introduce German words slowly: say the word once, give the English translation, and invite the student to repeat after you. Keep every reply strictly to 1 or 2 conversational sentences with friendly contractions (I'm, let's, that's). Listen closely to the student, praise correct pronunciation, and gently model errors again: 'So close! Try saying —'. Stay strictly on lesson words: Glückwunsch, Deutschland, Berlin, Ich mag, Danke. Never switch topics.",
      initialGreeting: "Herzlichen Glückwunsch! Bạn đã hoàn thành 6 Unit tiếng Đức rất tuyệt vời. Hôm nay hãy cùng trò chuyện tự do thật vui nhé!",
      targetVocabulary: ["Glückwunsch","Deutschland","Berlin","Ich mag","Danke"],
      suggestedResponses: ["Vielen Dank Lena!","Ich möchte nach Berlin und München reisen.","Deutsch macht mir viel Spaß!"],
      difficulty: "beginner"
    }
  },
  {
    id: "lesson-de-701",
    unitId: "unit-de-7",
    title: "Was hast du gestern gemacht? (Thì quá khứ Perfekt)",
    description: "Học thì quá khứ Perfekt trong tiếng Đức với haben và sein.",
    type: "standard",
    xp: 15,
    estimatedMinutes: 5,
    order: 1,
    status: "available",
    goals: [
      { id: "g1", description: "Nắm vững các từ vựng chủ đề Was hast du gestern gemacht? (Thì quá khứ Perfekt)" },
      { id: "g2", description: "Luyện phát âm chuẩn và phản xạ câu qua các bài tập tương tác" }
    ],
    vocabulary: [
      { id: "v-de-701-1", word: "Gestern", translation: "Hôm qua", phonetic: "gehs-tern" },
      { id: "v-de-701-2", word: "Ich bin gegangen", translation: "Tôi đã đi (động từ gehen)", phonetic: "ikh bin geh-gahng-en" },
      { id: "v-de-701-3", word: "Ich habe gegessen", translation: "Tôi đã ăn (động từ essen)", phonetic: "ikh hah-buh geh-gehs-sen" },
      { id: "v-de-701-4", word: "Ich habe gesehen", translation: "Tôi đã thấy / xem (sehen)", phonetic: "ikh hah-buh geh-zay-en" },
      { id: "v-de-701-5", word: "Ich habe gekauft", translation: "Tôi đã mua (kaufen)", phonetic: "ikh hah-buh geh-kowft" }
    ],
    phrases: [
      { id: "p-de-701-1", text: "Gestern bin ich in den Park gegangen und habe ein Eis gegessen.", translation: "Hôm qua tôi đã đến công viên và ăn một cây kem." },
      { id: "p-de-701-2", text: "Was hast du am Wochenende gemacht?", translation: "Bạn đã làm gì vào cuối tuần?" }
    ],
    activities: [
      {
        id: "act-de-701-1",
        type: "multiple_choice",
        skill: "reading",
        question: "'Gestern' có nghĩa là gì trong tiếng Đức?",
        options: ["Hôm qua","Hôm nay","Ngày mai","Tuần sau"],
        correctAnswer: "Hôm qua"
      },
      {
        id: "act-de-701-2",
        type: "fill_blank",
        skill: "writing",
        question: "Điền từ: 'Gestern _____ ich nach Berlin gefahren.' (đã đi)",
        prompt: "Điền từ: 'Gestern _____ ich nach Berlin gefahren.' (đã đi)",
        options: ["bin","habe","hat","ist"],
        correctAnswer: "bin"
      },
      {
        id: "act-de-701-3",
        type: "multiple_choice",
        skill: "reading",
        question: "Dịch: 'Ich habe einen Film gesehen'",
        options: ["Tôi đã xem một bộ phim","Tôi đi ăn tối","Tôi đi làm","Tôi đọc sách"],
        correctAnswer: "Tôi đã xem một bộ phim"
      },
      {
        id: "act-de-701-4",
        type: "match_pairs",
        skill: "reading",
        question: "Ghép các cặp từ vựng với nghĩa tiếng Việt tương ứng",
        pairs: [{"left":"Gestern","right":"Hôm qua"},{"left":"Ich bin gegangen","right":"Tôi đã đi (động từ gehen)"},{"left":"Ich habe gegessen","right":"Tôi đã ăn (động từ essen)"},{"left":"Ich habe gesehen","right":"Tôi đã thấy / xem (sehen)"}],
        correctAnswer: "all_matched"
      },
      {
        id: "act-de-701-5",
        type: "audio_listen",
        skill: "listening",
        question: "Lắng nghe và chọn đáp án chính xác:",
        prompt: "Gestern",
        options: ["Hôm qua","Hôm nay","Ngày mai","Tuần sau"],
        correctAnswer: "Hôm qua"
      }
    ]
  },
  {
    id: "lesson-de-702",
    unitId: "unit-de-7",
    title: "Meine Kindheit & Heimatstadt (Tuổi thơ)",
    description: "Kể về quê hương và những kỷ niệm thuở ấu thơ với động từ 'Früher'.",
    type: "standard",
    xp: 15,
    estimatedMinutes: 5,
    order: 2,
    status: "available",
    goals: [
      { id: "g1", description: "Nắm vững các từ vựng chủ đề Meine Kindheit & Heimatstadt (Tuổi thơ)" },
      { id: "g2", description: "Luyện phát âm chuẩn và phản xạ câu qua các bài tập tương tác" }
    ],
    vocabulary: [
      { id: "v-de-702-1", word: "Die Kindheit", translation: "Thời thơ ấu / Tuổi thơ", phonetic: "dee kint-hyte" },
      { id: "v-de-702-2", word: "Aufgewachsen", translation: "Đã lớn lên (quá khứ wachsen)", phonetic: "owf-geh-vahk-sen" },
      { id: "v-de-702-3", word: "Die Heimat", translation: "Quê hương", phonetic: "dee hy-maht" },
      { id: "v-de-702-4", word: "Früher", translation: "Trước đây / Ngày xưa", phonetic: "frew-er" },
      { id: "v-de-702-5", word: "Die Erinnerung", translation: "Kỷ niệm / Ký ức", phonetic: "dee ehr-in-nuh-roong" }
    ],
    phrases: [
      { id: "p-de-702-1", text: "Ich bin in einer gemütlichen kleinen Stadt aufgewachsen.", translation: "Tôi đã lớn lên ở một thành phố nhỏ ấm cúng." },
      { id: "p-de-702-2", text: "Früher habe ich jeden Tag draußen Fußball gespielt.", translation: "Ngày trước tôi thường đá bóng ngoài trời mỗi ngày." }
    ],
    activities: [
      {
        id: "act-de-702-1",
        type: "multiple_choice",
        skill: "reading",
        question: "'Die Kindheit' nghĩa là gì?",
        options: ["Thời thơ ấu / Tuổi thơ","Trường học","Công việc","Chuyến đi"],
        correctAnswer: "Thời thơ ấu / Tuổi thơ"
      },
      {
        id: "act-de-702-2",
        type: "fill_blank",
        skill: "writing",
        question: "Điền từ: 'Ich bin in München _____.' (đã lớn lên)",
        prompt: "Điền từ: 'Ich bin in München _____.' (đã lớn lên)",
        options: ["aufgewachsen","Kindheit","früher","Heimat"],
        correctAnswer: "aufgewachsen"
      },
      {
        id: "act-de-702-3",
        type: "multiple_choice",
        skill: "reading",
        question: "Dịch: 'Meine Heimat'",
        options: ["Quê hương của tôi","Trường học của tôi","Xe của tôi","Nhà của tôi"],
        correctAnswer: "Quê hương của tôi"
      },
      {
        id: "act-de-702-4",
        type: "match_pairs",
        skill: "reading",
        question: "Ghép các cặp từ vựng với nghĩa tiếng Việt tương ứng",
        pairs: [{"left":"Die Kindheit","right":"Thời thơ ấu / Tuổi thơ"},{"left":"Aufgewachsen","right":"Đã lớn lên (quá khứ wachsen)"},{"left":"Die Heimat","right":"Quê hương"},{"left":"Früher","right":"Trước đây / Ngày xưa"}],
        correctAnswer: "all_matched"
      },
      {
        id: "act-de-702-5",
        type: "audio_listen",
        skill: "listening",
        question: "Lắng nghe và chọn đáp án chính xác:",
        prompt: "Die Kindheit",
        options: ["Thời thơ ấu / Tuổi thơ","Trường học","Công việc","Chuyến đi"],
        correctAnswer: "Thời thơ ấu / Tuổi thơ"
      }
    ]
  },
  {
    id: "lesson-de-703",
    unitId: "unit-de-7",
    title: "Eine Unvergessliche Reise (Chuyến đi đáng nhớ)",
    description: "Kể lại một chuyến du lịch đặc biệt không thể nào quên.",
    type: "standard",
    xp: 15,
    estimatedMinutes: 5,
    order: 3,
    status: "available",
    goals: [
      { id: "g1", description: "Nắm vững các từ vựng chủ đề Eine Unvergessliche Reise (Chuyến đi đáng nhớ)" },
      { id: "g2", description: "Luyện phát âm chuẩn và phản xạ câu qua các bài tập tương tác" }
    ],
    vocabulary: [
      { id: "v-de-703-1", word: "Die Reise", translation: "Chuyến du lịch", phonetic: "dee ry-zuh" },
      { id: "v-de-703-2", word: "Unvergesslich", translation: "Không thể nào quên", phonetic: "oon-fehr-ges-likh" },
      { id: "v-de-703-3", word: "Besucht", translation: "Đã ghé thăm (besuchen)", phonetic: "beh-zookht" },
      { id: "v-de-703-4", word: "Getroffen", translation: "Đã gặp gỡ (treffen)", phonetic: "geh-trohf-fen" },
      { id: "v-de-703-5", word: "Übernachtet", translation: "Đã ở trọ qua đêm", phonetic: "ew-ber-nahkh-tet" }
    ],
    phrases: [
      { id: "p-de-703-1", text: "Letzten Sommer habe ich Wien besucht, es war unvergesslich.", translation: "Mùa hè năm ngoái tôi đã thăm Vienna, thật không thể nào quên." },
      { id: "p-de-703-2", text: "Wir haben in einem schönen Hotel an den Bergen übernachtet.", translation: "Chúng tôi đã nghỉ tại một khách sạn đẹp bên sườn núi." }
    ],
    activities: [
      {
        id: "act-de-703-1",
        type: "multiple_choice",
        skill: "reading",
        question: "'Unvergesslich' có nghĩa là gì?",
        options: ["Không thể nào quên","Nhàm chán","Nguy hiểm","Đắt đỏ"],
        correctAnswer: "Không thể nào quên"
      },
      {
        id: "act-de-703-2",
        type: "fill_blank",
        skill: "writing",
        question: "Điền từ: 'Es war eine _____ Reise.' (không thể nào quên)",
        prompt: "Điền từ: 'Es war eine _____ Reise.' (không thể nào quên)",
        options: ["unvergessliche","Kindheit","gestern","Reise"],
        correctAnswer: "unvergessliche"
      },
      {
        id: "act-de-703-3",
        type: "multiple_choice",
        skill: "reading",
        question: "Dịch: 'Ich habe meine Großeltern besucht'",
        options: ["Tôi đã thăm ông bà của tôi","Tôi đi làm","Tôi ăn trưa","Tôi học bài"],
        correctAnswer: "Tôi đã thăm ông bà của tôi"
      },
      {
        id: "act-de-703-4",
        type: "match_pairs",
        skill: "reading",
        question: "Ghép các cặp từ vựng với nghĩa tiếng Việt tương ứng",
        pairs: [{"left":"Die Reise","right":"Chuyến du lịch"},{"left":"Unvergesslich","right":"Không thể nào quên"},{"left":"Besucht","right":"Đã ghé thăm (besuchen)"},{"left":"Getroffen","right":"Đã gặp gỡ (treffen)"}],
        correctAnswer: "all_matched"
      },
      {
        id: "act-de-703-5",
        type: "audio_listen",
        skill: "listening",
        question: "Lắng nghe và chọn đáp án chính xác:",
        prompt: "Die Reise",
        options: ["Không thể nào quên","Nhàm chán","Nguy hiểm","Đắt đỏ"],
        correctAnswer: "Không thể nào quên"
      }
    ]
  },
  {
    id: "lesson-de-704",
    unitId: "unit-de-7",
    title: "Geschichten Erzählen (Kể chuyện vui)",
    description: "Sử dụng các từ nối thời gian: zuerst, dann, danach, schließlich.",
    type: "standard",
    xp: 15,
    estimatedMinutes: 5,
    order: 4,
    status: "available",
    goals: [
      { id: "g1", description: "Nắm vững các từ vựng chủ đề Geschichten Erzählen (Kể chuyện vui)" },
      { id: "g2", description: "Luyện phát âm chuẩn và phản xạ câu qua các bài tập tương tác" }
    ],
    vocabulary: [
      { id: "v-de-704-1", word: "Zuerst", translation: "Đầu tiên / Trước hết", phonetic: "tsoo-ehrst" },
      { id: "v-de-704-2", word: "Dann / Danach", translation: "Sau đó / Kế tiếp", phonetic: "dahn / dah-nahkh" },
      { id: "v-de-704-3", word: "Plötzlich", translation: "Bất ngờ / Đột nhiên", phonetic: "pluht-slikh" },
      { id: "v-de-704-4", word: "Schließlich", translation: "Cuối cùng", phonetic: "shleess-likh" },
      { id: "v-de-704-5", word: "Die Geschichte", translation: "Câu chuyện", phonetic: "dee geh-shikh-tuh" }
    ],
    phrases: [
      { id: "p-de-704-1", text: "Zuerst haben wir gefrühstückt, danach sind wir losgegangen.", translation: "Đầu tiên chúng tôi ăn sáng, sau đó chúng tôi khởi hành." },
      { id: "p-de-704-2", text: "Plötzlich hat es angefangen zu regnen!", translation: "Bỗng nhiên trời bắt đầu đổ mưa!" }
    ],
    activities: [
      {
        id: "act-de-704-1",
        type: "multiple_choice",
        skill: "reading",
        question: "Từ nối nào trong tiếng Đức mang nghĩa 'Đột nhiên / Bất ngờ'?",
        options: ["Plötzlich","Zuerst","Schließlich","Danach"],
        correctAnswer: "Plötzlich"
      },
      {
        id: "act-de-704-2",
        type: "fill_blank",
        skill: "writing",
        question: "Điền từ: '_____ haben wir das Spiel gewonnen.' (cuối cùng)",
        prompt: "Điền từ: '_____ haben wir das Spiel gewonnen.' (cuối cùng)",
        options: ["Schließlich","Plötzlich","Gestern","Früher"],
        correctAnswer: "Schließlich"
      },
      {
        id: "act-de-704-3",
        type: "multiple_choice",
        skill: "reading",
        question: "Dịch: 'Zuerst und danach'",
        options: ["Trước tiên và sau đó","Hôm qua và hôm nay","Nhanh và chậm","Vui và buồn"],
        correctAnswer: "Trước tiên và sau đó"
      },
      {
        id: "act-de-704-4",
        type: "match_pairs",
        skill: "reading",
        question: "Ghép các cặp từ vựng với nghĩa tiếng Việt tương ứng",
        pairs: [{"left":"Zuerst","right":"Đầu tiên / Trước hết"},{"left":"Dann / Danach","right":"Sau đó / Kế tiếp"},{"left":"Plötzlich","right":"Bất ngờ / Đột nhiên"},{"left":"Schließlich","right":"Cuối cùng"}],
        correctAnswer: "all_matched"
      },
      {
        id: "act-de-704-5",
        type: "audio_listen",
        skill: "listening",
        question: "Lắng nghe và chọn đáp án chính xác:",
        prompt: "Zuerst",
        options: ["Plötzlich","Zuerst","Schließlich","Danach"],
        correctAnswer: "Plötzlich"
      }
    ]
  },
  {
    id: "lesson-de-705",
    unitId: "unit-de-7",
    title: "AI Practice: Kể Lại Chuyện Ngày Hôm Qua Cùng Thầy Lukas",
    description: "Thực hành phản xạ thì quá khứ Perfekt và kể chuyện cùng thầy giáo Lukas.",
    type: "audio_ai",
    xp: 25,
    estimatedMinutes: 5,
    order: 5,
    heroImage: images.mascotWelcome,
    status: "available",
    goals: [
      { id: "g1", description: "Luyện phản xạ giao tiếp thực tế với AI Teacher Lukas" },
      { id: "g2", description: "Vận dụng từ vựng trọng tâm vào ngữ cảnh hội thoại tự nhiên" }
    ],
    vocabulary: [
      { id: "v-ai-de-7-1", word: "Gestern", translation: "Hôm qua" },
      { id: "v-ai-de-7-2", word: "Ich bin gegangen", translation: "Tôi đã đi (động từ gehen)" },
      { id: "v-ai-de-7-3", word: "Ich habe gemacht", translation: "Tôi đã làm" },
      { id: "v-ai-de-7-4", word: "Es war toll", translation: "Thật là tuyệt vời" },
      { id: "v-ai-de-7-5", word: "Unvergesslich", translation: "Không thể nào quên" }
    ],
    phrases: [],
    activities: [],
    aiTeacherPrompt: {
      scenario: "Một quán cà phê ấm cúng tại quảng trường Alexanderplatz ở Berlin",
      systemPrompt: "You are Lukas, a warm, human, and energetic German teacher. Speak mostly in English for clear guidance. Introduce German words slowly: say the word once, give the English translation, and invite the student to repeat after you. Keep every reply strictly to 1 or 2 conversational sentences with friendly contractions (I'm, let's, that's). Listen closely to the student, praise correct pronunciation, and gently model errors again: 'So close! Try saying —'. Stay strictly on lesson words: Gestern, Ich bin gegangen, Ich habe gemacht, Es war toll, Unvergesslich. Never switch topics.",
      initialGreeting: "Hallo! Schön dich zu sehen. Erzähl mal: Was hast du gestern oder am letzten Wochenende Schönes gemacht?",
      targetVocabulary: ["Gestern","Ich bin gegangen","Ich habe gemacht","Es war toll","Unvergesslich"],
      suggestedResponses: ["Gestern habe ich meine Freunde getroffen und Kaffee getrunken.","Ich war im Park spazieren, das Wetter war wunderbar.","Es war wirklich ein toller Tag!"],
      difficulty: "intermediate"
    }
  },
  {
    id: "lesson-de-801",
    unitId: "unit-de-8",
    title: "Was fehlt Ihnen? (Triệu chứng ốm sốt)",
    description: "Miêu tả các cơn đau và triệu chứng sức khỏe với 'Ich habe Schmerzen'.",
    type: "standard",
    xp: 15,
    estimatedMinutes: 5,
    order: 1,
    status: "available",
    goals: [
      { id: "g1", description: "Nắm vững các từ vựng chủ đề Was fehlt Ihnen? (Triệu chứng ốm sốt)" },
      { id: "g2", description: "Luyện phát âm chuẩn và phản xạ câu qua các bài tập tương tác" }
    ],
    vocabulary: [
      { id: "v-de-801-1", word: "Die Gesundheit", translation: "Sức khỏe", phonetic: "dee geh-zoont-hyte" },
      { id: "v-de-801-2", word: "Kopfschmerzen", translation: "Đau đầu", phonetic: "kopf-shmairt-sen" },
      { id: "v-de-801-3", word: "Das Fieber", translation: "Cơn sốt", phonetic: "dahs fee-ber" },
      { id: "v-de-801-4", word: "Der Husten", translation: "Cơn ho", phonetic: "dehr hoos-ten" },
      { id: "v-de-801-5", word: "Müde", translation: "Mệt mỏi / Buồn ngủ", phonetic: "mew-duh" }
    ],
    phrases: [
      { id: "p-de-801-1", text: "Ich habe starke Kopfschmerzen und seit gestern hohes Fieber.", translation: "Tôi bị đau đầu dữ dội và sốt cao từ hôm qua." },
      { id: "p-de-801-2", text: "Sie sehen heute sehr müde und blass aus.", translation: "Hôm nay trông bạn rất mệt mỏi và nhợt nhạt." }
    ],
    activities: [
      {
        id: "act-de-801-1",
        type: "multiple_choice",
        skill: "reading",
        question: "'Kopfschmerzen' là triệu chứng gì?",
        options: ["Đau đầu","Đau chân","Đau bụng","Đau lưng"],
        correctAnswer: "Đau đầu"
      },
      {
        id: "act-de-801-2",
        type: "fill_blank",
        skill: "writing",
        question: "Điền từ: 'Ich habe schreckliche _____.' (cơn đau)",
        prompt: "Điền từ: 'Ich habe schreckliche _____.' (cơn đau)",
        options: ["Schmerzen","Fieber","Gesundheit","Husten"],
        correctAnswer: "Schmerzen"
      },
      {
        id: "act-de-801-3",
        type: "multiple_choice",
        skill: "reading",
        question: "Dịch: 'Das Fieber'",
        options: ["Cơn sốt","Cơn đau","Cơn đói","Cơn ho"],
        correctAnswer: "Cơn sốt"
      },
      {
        id: "act-de-801-4",
        type: "match_pairs",
        skill: "reading",
        question: "Ghép các cặp từ vựng với nghĩa tiếng Việt tương ứng",
        pairs: [{"left":"Die Gesundheit","right":"Sức khỏe"},{"left":"Kopfschmerzen","right":"Đau đầu"},{"left":"Das Fieber","right":"Cơn sốt"},{"left":"Der Husten","right":"Cơn ho"}],
        correctAnswer: "all_matched"
      },
      {
        id: "act-de-801-5",
        type: "audio_listen",
        skill: "listening",
        question: "Lắng nghe và chọn đáp án chính xác:",
        prompt: "Die Gesundheit",
        options: ["Đau đầu","Đau chân","Đau bụng","Đau lưng"],
        correctAnswer: "Đau đầu"
      }
    ]
  },
  {
    id: "lesson-de-802",
    unitId: "unit-de-8",
    title: "Beim Arzt (Khám bệnh)",
    description: "Giao tiếp với bác sĩ tại phòng khám và nhận chẩn đoán.",
    type: "standard",
    xp: 15,
    estimatedMinutes: 5,
    order: 2,
    status: "available",
    goals: [
      { id: "g1", description: "Nắm vững các từ vựng chủ đề Beim Arzt (Khám bệnh)" },
      { id: "g2", description: "Luyện phát âm chuẩn và phản xạ câu qua các bài tập tương tác" }
    ],
    vocabulary: [
      { id: "v-de-802-1", word: "Der Arzt", translation: "Bác sĩ", phonetic: "dehr ahtst" },
      { id: "v-de-802-2", word: "Der Termin", translation: "Lịch hẹn khám", phonetic: "dehr tehr-meen" },
      { id: "v-de-802-3", word: "Das Rezept", translation: "Đơn thuốc", phonetic: "dahs reh-tsept" },
      { id: "v-de-802-4", word: "Untersuchen", translation: "Thăm khám / Kiểm tra", phonetic: "oon-tehr-zoo-khen" },
      { id: "v-de-802-5", word: "Ausruhen", translation: "Nghỉ ngơi tĩnh dưỡng", phonetic: "ows-roo-en" }
    ],
    phrases: [
      { id: "p-de-802-1", text: "Ich habe morgen um 10 Uhr einen Termin beim Arzt.", translation: "Tôi có một lịch hẹn bác sĩ vào lúc 10 giờ sáng mai." },
      { id: "p-de-802-2", text: "Sie müssen sich unbedingt ein paar Tage ausruhen.", translation: "Bạn nhất định phải nghỉ ngơi vài ngày." }
    ],
    activities: [
      {
        id: "act-de-802-1",
        type: "multiple_choice",
        skill: "reading",
        question: "'Das Rezept' của bác sĩ là gì?",
        options: ["Đơn thuốc","Hóa đơn viện phí","Thẻ bảo hiểm","Giấy hẹn khám"],
        correctAnswer: "Đơn thuốc"
      },
      {
        id: "act-de-802-2",
        type: "fill_blank",
        skill: "writing",
        question: "Điền từ: 'Sie müssen sich im Bett _____.' (nghỉ ngơi)",
        prompt: "Điền từ: 'Sie müssen sich im Bett _____.' (nghỉ ngơi)",
        options: ["ausruhen","Arzt","Rezept","Termin"],
        correctAnswer: "ausruhen"
      },
      {
        id: "act-de-802-3",
        type: "multiple_choice",
        skill: "reading",
        question: "Dịch: 'Einen Termin vereinbaren'",
        options: ["Đặt một lịch hẹn","Uống thuốc","Đi làm việc","Mua vé xe"],
        correctAnswer: "Đặt một lịch hẹn"
      },
      {
        id: "act-de-802-4",
        type: "match_pairs",
        skill: "reading",
        question: "Ghép các cặp từ vựng với nghĩa tiếng Việt tương ứng",
        pairs: [{"left":"Der Arzt","right":"Bác sĩ"},{"left":"Der Termin","right":"Lịch hẹn khám"},{"left":"Das Rezept","right":"Đơn thuốc"},{"left":"Untersuchen","right":"Thăm khám / Kiểm tra"}],
        correctAnswer: "all_matched"
      },
      {
        id: "act-de-802-5",
        type: "audio_listen",
        skill: "listening",
        question: "Lắng nghe và chọn đáp án chính xác:",
        prompt: "Der Arzt",
        options: ["Đơn thuốc","Hóa đơn viện phí","Thẻ bảo hiểm","Giấy hẹn khám"],
        correctAnswer: "Đơn thuốc"
      }
    ]
  },
  {
    id: "lesson-de-803",
    unitId: "unit-de-8",
    title: "In der Apotheke (Mua thuốc)",
    description: "Mua thuốc không kê đơn và nghe hướng dẫn liều dùng từ dược sĩ.",
    type: "standard",
    xp: 15,
    estimatedMinutes: 5,
    order: 3,
    status: "available",
    goals: [
      { id: "g1", description: "Nắm vững các từ vựng chủ đề In der Apotheke (Mua thuốc)" },
      { id: "g2", description: "Luyện phát âm chuẩn và phản xạ câu qua các bài tập tương tác" }
    ],
    vocabulary: [
      { id: "v-de-803-1", word: "Die Apotheke", translation: "Hiệu thuốc tây", phonetic: "dee ah-poh-tay-kuh" },
      { id: "v-de-803-2", word: "Das Medikament", translation: "Thuốc uống", phonetic: "dahs meh-dee-kah-ment" },
      { id: "v-de-803-3", word: "Die Tablette", translation: "Viên thuốc nén", phonetic: "dee tah-blet-tuh" },
      { id: "v-de-803-4", word: "Der Hustensaft", translation: "Siro ho", phonetic: "dehr hoos-ten-zahft" },
      { id: "v-de-803-5", word: "Dreimal täglich", translation: "Ba lần mỗi ngày", phonetic: "dry-mahl tayg-likh" }
    ],
    phrases: [
      { id: "p-de-803-1", text: "Nehmen Sie bitte eine Tablette dreimal täglich nach dem Essen.", translation: "Xin hãy uống một viên ba lần mỗi ngày sau bữa ăn." },
      { id: "p-de-803-2", text: "Haben Sie etwas Wirksames gegen Halsschmerzen?", translation: "Bạn có thuốc gì hiệu quả trị đau họng không?" }
    ],
    activities: [
      {
        id: "act-de-803-1",
        type: "multiple_choice",
        skill: "reading",
        question: "'Die Tablette' nghĩa là gì?",
        options: ["Viên thuốc nén","Chai nước","Đồ ăn nhẹ","Khẩu trang"],
        correctAnswer: "Viên thuốc nén"
      },
      {
        id: "act-de-803-2",
        type: "fill_blank",
        skill: "writing",
        question: "Điền từ: 'Ich brauche ein _____ gegen Grippe.' (thuốc uống)",
        prompt: "Điền từ: 'Ich brauche ein _____ gegen Grippe.' (thuốc uống)",
        options: ["Medikament","Apotheke","Tablette","Arzt"],
        correctAnswer: "Medikament"
      },
      {
        id: "act-de-803-3",
        type: "multiple_choice",
        skill: "reading",
        question: "Dịch: 'Zweimal täglich'",
        options: ["Hai lần mỗi ngày","Ba ngày một lần","Uống buổi tối","Mỗi tuần một lần"],
        correctAnswer: "Hai lần mỗi ngày"
      },
      {
        id: "act-de-803-4",
        type: "match_pairs",
        skill: "reading",
        question: "Ghép các cặp từ vựng với nghĩa tiếng Việt tương ứng",
        pairs: [{"left":"Die Apotheke","right":"Hiệu thuốc tây"},{"left":"Das Medikament","right":"Thuốc uống"},{"left":"Die Tablette","right":"Viên thuốc nén"},{"left":"Der Hustensaft","right":"Siro ho"}],
        correctAnswer: "all_matched"
      },
      {
        id: "act-de-803-5",
        type: "audio_listen",
        skill: "listening",
        question: "Lắng nghe và chọn đáp án chính xác:",
        prompt: "Die Apotheke",
        options: ["Viên thuốc nén","Chai nước","Đồ ăn nhẹ","Khẩu trang"],
        correctAnswer: "Viên thuốc nén"
      }
    ]
  },
  {
    id: "lesson-de-804",
    unitId: "unit-de-8",
    title: "Gesunder Lebensstil (Lối sống lành mạnh)",
    description: "Lời khuyên về tập thể dục, dinh dưỡng và chế độ nghỉ ngơi với 'Man sollte'.",
    type: "standard",
    xp: 15,
    estimatedMinutes: 5,
    order: 4,
    status: "available",
    goals: [
      { id: "g1", description: "Nắm vững các từ vựng chủ đề Gesunder Lebensstil (Lối sống lành mạnh)" },
      { id: "g2", description: "Luyện phát âm chuẩn và phản xạ câu qua các bài tập tương tác" }
    ],
    vocabulary: [
      { id: "v-de-804-1", word: "Sport treiben", translation: "Luyện tập thể thao", phonetic: "shport try-ben" },
      { id: "v-de-804-2", word: "Schlafen", translation: "Ngủ", phonetic: "shlah-fen" },
      { id: "v-de-804-3", word: "Gesunde Ernährung", translation: "Chế độ dinh dưỡng lành mạnh", phonetic: "geh-zoon-duh ehr-nehr-oong" },
      { id: "v-de-804-4", word: "Man sollte", translation: "Người ta nên...", phonetic: "mahn zohl-tuh" },
      { id: "v-de-804-5", word: "Fit bleiben", translation: "Giữ gìn vóc dáng / Thể trạng", phonetic: "fit bly-ben" }
    ],
    phrases: [
      { id: "p-de-804-1", text: "Man sollte mindestens zwei Liter Wasser pro Tag trinken.", translation: "Người ta nên uống ít nhất hai lít nước mỗi ngày." },
      { id: "p-de-804-2", text: "Um fit zu bleiben, fahre ich jeden Tag mit dem Fahrrad.", translation: "Để giữ thể trạng tốt, tôi đạp xe đạp mỗi ngày." }
    ],
    activities: [
      {
        id: "act-de-804-1",
        type: "multiple_choice",
        skill: "reading",
        question: "'Sport treiben' có nghĩa là hoạt động gì?",
        options: ["Tập luyện thể thao","Chơi game trên máy tính","Nằm ngủ trên giường","Đi mua sắm"],
        correctAnswer: "Tập luyện thể thao"
      },
      {
        id: "act-de-804-2",
        type: "fill_blank",
        skill: "writing",
        question: "Điền từ: 'Man sollte regelmäßig Sport _____.' (luyện tập)",
        prompt: "Điền từ: 'Man sollte regelmäßig Sport _____.' (luyện tập)",
        options: ["treiben","schlafen","Apotheke","Fieber"],
        correctAnswer: "treiben"
      },
      {
        id: "act-de-804-3",
        type: "multiple_choice",
        skill: "reading",
        question: "Dịch: 'Fit bleiben'",
        options: ["Giữ phong độ / Khỏe mạnh","Bị ốm nặng","Cảm thấy đói","Đang mệt mỏi"],
        correctAnswer: "Giữ phong độ / Khỏe mạnh"
      },
      {
        id: "act-de-804-4",
        type: "match_pairs",
        skill: "reading",
        question: "Ghép các cặp từ vựng với nghĩa tiếng Việt tương ứng",
        pairs: [{"left":"Sport treiben","right":"Luyện tập thể thao"},{"left":"Schlafen","right":"Ngủ"},{"left":"Gesunde Ernährung","right":"Chế độ dinh dưỡng lành mạnh"},{"left":"Man sollte","right":"Người ta nên..."}],
        correctAnswer: "all_matched"
      },
      {
        id: "act-de-804-5",
        type: "audio_listen",
        skill: "listening",
        question: "Lắng nghe và chọn đáp án chính xác:",
        prompt: "Sport treiben",
        options: ["Tập luyện thể thao","Chơi game trên máy tính","Nằm ngủ trên giường","Đi mua sắm"],
        correctAnswer: "Tập luyện thể thao"
      }
    ]
  },
  {
    id: "lesson-de-805",
    unitId: "unit-de-8",
    title: "AI Practice: Thăm Khám Sức Khỏe Cùng Bác Sĩ Weber",
    description: "Thực hành đối thoại bác sĩ - bệnh nhân bằng tiếng Đức cùng bác sĩ Weber.",
    type: "audio_ai",
    xp: 25,
    estimatedMinutes: 5,
    order: 5,
    heroImage: images.mascotWelcome,
    status: "available",
    goals: [
      { id: "g1", description: "Luyện phản xạ giao tiếp thực tế với AI Teacher Lukas" },
      { id: "g2", description: "Vận dụng từ vựng trọng tâm vào ngữ cảnh hội thoại tự nhiên" }
    ],
    vocabulary: [
      { id: "v-ai-de-8-1", word: "Ich habe Schmerzen", translation: "Tôi bị đau" },
      { id: "v-ai-de-8-2", word: "Der Kopf", translation: "Đầu" },
      { id: "v-ai-de-8-3", word: "Das Fieber", translation: "Cơn sốt" },
      { id: "v-ai-de-8-4", word: "Die Apotheke", translation: "Hiệu thuốc tây" },
      { id: "v-ai-de-8-5", word: "Ausruhen", translation: "Nghỉ ngơi tĩnh dưỡng" }
    ],
    phrases: [],
    activities: [],
    aiTeacherPrompt: {
      scenario: "Phòng khám tư Praxis Dr. Weber tại Frankfurt",
      systemPrompt: "You are Lukas, a warm, human, and energetic German teacher. Speak mostly in English for clear guidance. Introduce German words slowly: say the word once, give the English translation, and invite the student to repeat after you. Keep every reply strictly to 1 or 2 conversational sentences with friendly contractions (I'm, let's, that's). Listen closely to the student, praise correct pronunciation, and gently model errors again: 'So close! Try saying —'. Stay strictly on lesson words: Ich habe Schmerzen, Der Kopf, Das Fieber, Die Apotheke, Ausruhen. Never switch topics.",
      initialGreeting: "Guten Tag! Nehmen Sie bitte Platz. Was fehlt Ihnen denn? Wo haben Sie Schmerzen?",
      targetVocabulary: ["Ich habe Schmerzen","Der Kopf","Das Fieber","Die Apotheke","Ausruhen"],
      suggestedResponses: ["Guten Tag Herr Doktor, ich habe seit gestern starke Kopfschmerzen.","Ich fühle mich sehr schlapp und habe Fieber.","Welche Medikamente soll ich einnehmen?"],
      difficulty: "intermediate"
    }
  },
  {
    id: "lesson-de-901",
    unitId: "unit-de-9",
    title: "Mein Alltag im Büro (Công việc văn phòng)",
    description: "Nói về nhiệm vụ hàng ngày, đồng nghiệp và các cuộc họp công sở.",
    type: "standard",
    xp: 15,
    estimatedMinutes: 5,
    order: 1,
    status: "available",
    goals: [
      { id: "g1", description: "Nắm vững các từ vựng chủ đề Mein Alltag im Büro (Công việc văn phòng)" },
      { id: "g2", description: "Luyện phát âm chuẩn và phản xạ câu qua các bài tập tương tác" }
    ],
    vocabulary: [
      { id: "v-de-901-1", word: "Das Büro", translation: "Văn phòng / Bàn làm việc", phonetic: "dahs bew-roh" },
      { id: "v-de-901-2", word: "Der Kollege", translation: "Đồng nghiệp", phonetic: "dehr kohl-lay-guh" },
      { id: "v-de-901-3", word: "Das Meeting / Die Besprechung", translation: "Cuộc họp", phonetic: "dahs mee-ting" },
      { id: "v-de-901-4", word: "Das Projekt", translation: "Dự án công việc", phonetic: "dahs proh-yekt" },
      { id: "v-de-901-5", word: "Der Chef", translation: "Sếp / Trưởng phòng", phonetic: "dehr shef" }
    ],
    phrases: [
      { id: "p-de-901-1", text: "Jeden Montagmorgen haben wir eine Teambesprechung im Büro.", translation: "Mỗi sáng thứ Hai chúng tôi đều có cuộc họp nhóm tại văn phòng." },
      { id: "p-de-901-2", text: "Ich arbeite derzeit an einem sehr spannenden neuen Projekt.", translation: "Hiện tại tôi đang làm việc trong một dự án mới rất thú vị." }
    ],
    activities: [
      {
        id: "act-de-901-1",
        type: "multiple_choice",
        skill: "reading",
        question: "'Der Kollege' là ai?",
        options: ["Đồng nghiệp","Khách hàng","Thầy giáo","Hàng xóm"],
        correctAnswer: "Đồng nghiệp"
      },
      {
        id: "act-de-901-2",
        type: "fill_blank",
        skill: "writing",
        question: "Điền từ: 'Ich bespreche das mit meinem _____.' (đồng nghiệp)",
        prompt: "Điền từ: 'Ich bespreche das mit meinem _____.' (đồng nghiệp)",
        options: ["Kollegen","Büro","Projekt","Meeting"],
        correctAnswer: "Kollegen"
      },
      {
        id: "act-de-901-3",
        type: "multiple_choice",
        skill: "reading",
        question: "Dịch: 'Das Meeting beginnt um 9 Uhr'",
        options: ["Cuộc họp bắt đầu lúc 9 giờ","Văn phòng mở cửa lúc 9h","Giờ ăn trưa lúc 9h","Sếp đến lúc 9h"],
        correctAnswer: "Cuộc họp bắt đầu lúc 9 giờ"
      },
      {
        id: "act-de-901-4",
        type: "match_pairs",
        skill: "reading",
        question: "Ghép các cặp từ vựng với nghĩa tiếng Việt tương ứng",
        pairs: [{"left":"Das Büro","right":"Văn phòng / Bàn làm việc"},{"left":"Der Kollege","right":"Đồng nghiệp"},{"left":"Das Meeting / Die Besprechung","right":"Cuộc họp"},{"left":"Das Projekt","right":"Dự án công việc"}],
        correctAnswer: "all_matched"
      },
      {
        id: "act-de-901-5",
        type: "audio_listen",
        skill: "listening",
        question: "Lắng nghe và chọn đáp án chính xác:",
        prompt: "Das Büro",
        options: ["Đồng nghiệp","Khách hàng","Thầy giáo","Hàng xóm"],
        correctAnswer: "Đồng nghiệp"
      }
    ]
  },
  {
    id: "lesson-de-902",
    unitId: "unit-de-9",
    title: "Formelle E-Mails Schreiben (Viết email công sở)",
    description: "Cách xưng hô và kết thúc thư tín công việc chuẩn mực của Đức.",
    type: "standard",
    xp: 15,
    estimatedMinutes: 5,
    order: 2,
    status: "available",
    goals: [
      { id: "g1", description: "Nắm vững các từ vựng chủ đề Formelle E-Mails Schreiben (Viết email công sở)" },
      { id: "g2", description: "Luyện phát âm chuẩn và phản xạ câu qua các bài tập tương tác" }
    ],
    vocabulary: [
      { id: "v-de-902-1", word: "Die E-Mail", translation: "Thư điện tử", phonetic: "dee ee-mayl" },
      { id: "v-de-902-2", word: "Sehr geehrte Damen und Herren", translation: "Kính gửi quý ông/bà", phonetic: "zayr geh-ehr-tuh dah-men oont heh-ren" },
      { id: "v-de-902-3", word: "Mit freundlichen Grüßen", translation: "Trân trọng (cuối thư)", phonetic: "mit froynt-likh-en grew-sen" },
      { id: "v-de-902-4", word: "Im Anhang", translation: "Đính kèm theo thư", phonetic: "im ahn-hahng" },
      { id: "v-de-902-5", word: "Bestätigen", translation: "Xác nhận", phonetic: "beh-shtay-tee-gen" }
    ],
    phrases: [
      { id: "p-de-902-1", text: "Im Anhang finden Sie meinen aktuellen Bericht.", translation: "Trong tệp đính kèm, ngài sẽ tìm thấy báo cáo mới nhất của tôi." },
      { id: "p-de-902-2", text: "Vielen Dank für Ihre schnelle und freundliche Rückmeldung.", translation: "Xin cảm ơn phản hồi nhanh chóng và thân thiện của ngài." }
    ],
    activities: [
      {
        id: "act-de-902-1",
        type: "multiple_choice",
        skill: "reading",
        question: "Cách kết thúc email công sở chuẩn mực nhất trong tiếng Đức là gì?",
        options: ["Mit freundlichen Grüßen","Hallo","Tschüss","Danke schön"],
        correctAnswer: "Mit freundlichen Grüßen"
      },
      {
        id: "act-de-902-2",
        type: "fill_blank",
        skill: "writing",
        question: "Điền từ: 'Bitte _____ Sie den Termin.' (xác nhận)",
        prompt: "Điền từ: 'Bitte _____ Sie den Termin.' (xác nhận)",
        options: ["bestätigen","Anhang","Büro","Kollege"],
        correctAnswer: "bestätigen"
      },
      {
        id: "act-de-902-3",
        type: "multiple_choice",
        skill: "reading",
        question: "Dịch: 'Im Anhang'",
        options: ["Tệp đính kèm","Chữ ký","Tiêu đề","Hộp thư rác"],
        correctAnswer: "Tệp đính kèm"
      },
      {
        id: "act-de-902-4",
        type: "match_pairs",
        skill: "reading",
        question: "Ghép các cặp từ vựng với nghĩa tiếng Việt tương ứng",
        pairs: [{"left":"Die E-Mail","right":"Thư điện tử"},{"left":"Sehr geehrte Damen und Herren","right":"Kính gửi quý ông/bà"},{"left":"Mit freundlichen Grüßen","right":"Trân trọng (cuối thư)"},{"left":"Im Anhang","right":"Đính kèm theo thư"}],
        correctAnswer: "all_matched"
      },
      {
        id: "act-de-902-5",
        type: "audio_listen",
        skill: "listening",
        question: "Lắng nghe và chọn đáp án chính xác:",
        prompt: "Die E-Mail",
        options: ["Mit freundlichen Grüßen","Hallo","Tschüss","Danke schön"],
        correctAnswer: "Mit freundlichen Grüßen"
      }
    ]
  },
  {
    id: "lesson-de-903",
    unitId: "unit-de-9",
    title: "Das Vorstellungsgespräch (Phỏng vấn xin việc)",
    description: "Giới thiệu bản thân, trình bày kinh nghiệm làm việc và kỹ năng chuyên môn.",
    type: "standard",
    xp: 15,
    estimatedMinutes: 5,
    order: 3,
    status: "available",
    goals: [
      { id: "g1", description: "Nắm vững các từ vựng chủ đề Das Vorstellungsgespräch (Phỏng vấn xin việc)" },
      { id: "g2", description: "Luyện phát âm chuẩn và phản xạ câu qua các bài tập tương tác" }
    ],
    vocabulary: [
      { id: "v-de-903-1", word: "Das Vorstellungsgespräch", translation: "Buổi phỏng vấn xin việc", phonetic: "dahs for-shtel-loongs-geh-shpraysh" },
      { id: "v-de-903-2", word: "Der Lebenslauf", translation: "Sơ yếu lý lịch / CV", phonetic: "dehr lay-bens-lowf" },
      { id: "v-de-903-3", word: "Die Berufserfahrung", translation: "Kinh nghiệm làm việc", phonetic: "dee beh-roofs-ehr-fah-roong" },
      { id: "v-de-903-4", word: "Die Stärken", translation: "Điểm mạnh / Kỹ năng vượt trội", phonetic: "dee shtayr-ken" },
      { id: "v-de-903-5", word: "Motiviert", translation: "Có động lực / Nhiệt huyết", phonetic: "moh-tee-veert" }
    ],
    phrases: [
      { id: "p-de-903-1", text: "Ich habe drei Jahre Berufserfahrung im Bereich Softwareentwicklung.", translation: "Tôi có ba năm kinh nghiệm làm việc trong lĩnh vực phát triển phần mềm." },
      { id: "p-de-903-2", text: "Meine größten Stärken sind Zuverlässigkeit und Teamgeist.", translation: "Điểm mạnh lớn nhất của tôi là tính đáng tin cậy và tinh thần đồng đội." }
    ],
    activities: [
      {
        id: "act-de-903-1",
        type: "multiple_choice",
        skill: "reading",
        question: "'Die Berufserfahrung' có nghĩa là gì?",
        options: ["Kinh nghiệm làm việc","Mức lương","Bằng lái xe","Địa chỉ nhà"],
        correctAnswer: "Kinh nghiệm làm việc"
      },
      {
        id: "act-de-903-2",
        type: "fill_blank",
        skill: "writing",
        question: "Điền từ: 'Ich habe morgen ein wichtiges _____.' (buổi phỏng vấn)",
        prompt: "Điền từ: 'Ich habe morgen ein wichtiges _____.' (buổi phỏng vấn)",
        options: ["Vorstellungsgespräch","Lebenslauf","Projekt","Büro"],
        correctAnswer: "Vorstellungsgespräch"
      },
      {
        id: "act-de-903-3",
        type: "multiple_choice",
        skill: "reading",
        question: "Dịch: 'Ich bin sehr motiviert'",
        options: ["Tôi rất có động lực / nhiệt huyết","Tôi rất mệt mỏi","Tôi đến muộn","Tôi chưa sẵn sàng"],
        correctAnswer: "Tôi rất có động lực / nhiệt huyết"
      },
      {
        id: "act-de-903-4",
        type: "match_pairs",
        skill: "reading",
        question: "Ghép các cặp từ vựng với nghĩa tiếng Việt tương ứng",
        pairs: [{"left":"Das Vorstellungsgespräch","right":"Buổi phỏng vấn xin việc"},{"left":"Der Lebenslauf","right":"Sơ yếu lý lịch / CV"},{"left":"Die Berufserfahrung","right":"Kinh nghiệm làm việc"},{"left":"Die Stärken","right":"Điểm mạnh / Kỹ năng vượt trội"}],
        correctAnswer: "all_matched"
      },
      {
        id: "act-de-903-5",
        type: "audio_listen",
        skill: "listening",
        question: "Lắng nghe và chọn đáp án chính xác:",
        prompt: "Das Vorstellungsgespräch",
        options: ["Kinh nghiệm làm việc","Mức lương","Bằng lái xe","Địa chỉ nhà"],
        correctAnswer: "Kinh nghiệm làm việc"
      }
    ]
  },
  {
    id: "lesson-de-904",
    unitId: "unit-de-9",
    title: "Termine & Fristen (Lịch hẹn & Hạn chót)",
    description: "Thảo luận thời gian, dời lịch hẹn và bàn giao công việc đúng hạn.",
    type: "standard",
    xp: 15,
    estimatedMinutes: 5,
    order: 4,
    status: "available",
    goals: [
      { id: "g1", description: "Nắm vững các từ vựng chủ đề Termine & Fristen (Lịch hẹn & Hạn chót)" },
      { id: "g2", description: "Luyện phát âm chuẩn và phản xạ câu qua các bài tập tương tác" }
    ],
    vocabulary: [
      { id: "v-de-904-1", word: "Verschieben", translation: "Dời lại / Hoãn lại", phonetic: "fehr-shee-ben" },
      { id: "v-de-904-2", word: "Verfügbar", translation: "Rảnh / Sẵn sàng", phonetic: "fehr-fewg-bahr" },
      { id: "v-de-904-3", word: "Die Frist / Die Deadline", translation: "Hạn chót", phonetic: "dee frist" },
      { id: "v-de-904-4", word: "Die Aufgabe", translation: "Nhiệm vụ / Nhiệm vụ", phonetic: "dee owf-gah-buh" },
      { id: "v-de-904-5", word: "Pünktlich", translation: "Đúng giờ / Chuẩn xác", phonetic: "pewnkt-likh" }
    ],
    phrases: [
      { id: "p-de-904-1", text: "Können wir den Termin auf Donnerstag verschieben?", translation: "Chúng ta có thể dời cuộc hẹn sang thứ Năm được không?" },
      { id: "p-de-904-2", text: "Es ist sehr wichtig, dass wir die Frist pünktlich einhalten.", translation: "Rất quan trọng để chúng ta tuân thủ đúng hạn chót." }
    ],
    activities: [
      {
        id: "act-de-904-1",
        type: "multiple_choice",
        skill: "reading",
        question: "'Pünktlich' là nét văn hóa đặc trưng nào của người Đức?",
        options: ["Đúng giờ / Chuẩn giờ","Nói to","Hài hước","Thích tiệc tùng"],
        correctAnswer: "Đúng giờ / Chuẩn giờ"
      },
      {
        id: "act-de-904-2",
        type: "fill_blank",
        skill: "writing",
        question: "Điền từ: 'Ich bin am Nachmittag _____.' (rảnh / sẵn sàng)",
        prompt: "Điền từ: 'Ich bin am Nachmittag _____.' (rảnh / sẵn sàng)",
        options: ["verfügbar","Frist","Aufgabe","Termin"],
        correctAnswer: "verfügbar"
      },
      {
        id: "act-de-904-3",
        type: "multiple_choice",
        skill: "reading",
        question: "Dịch: 'Die wichtige Aufgabe'",
        options: ["Nhiệm vụ quan trọng","Cuộc họp lớn","Người lãnh đạo","Kế hoạch năm"],
        correctAnswer: "Nhiệm vụ quan trọng"
      },
      {
        id: "act-de-904-4",
        type: "match_pairs",
        skill: "reading",
        question: "Ghép các cặp từ vựng với nghĩa tiếng Việt tương ứng",
        pairs: [{"left":"Verschieben","right":"Dời lại / Hoãn lại"},{"left":"Verfügbar","right":"Rảnh / Sẵn sàng"},{"left":"Die Frist / Die Deadline","right":"Hạn chót"},{"left":"Die Aufgabe","right":"Nhiệm vụ / Nhiệm vụ"}],
        correctAnswer: "all_matched"
      },
      {
        id: "act-de-904-5",
        type: "audio_listen",
        skill: "listening",
        question: "Lắng nghe và chọn đáp án chính xác:",
        prompt: "Verschieben",
        options: ["Đúng giờ / Chuẩn giờ","Nói to","Hài hước","Thích tiệc tùng"],
        correctAnswer: "Đúng giờ / Chuẩn giờ"
      }
    ]
  },
  {
    id: "lesson-de-905",
    unitId: "unit-de-9",
    title: "AI Practice: Phỏng Vấn Xin Việc Tiếng Đức Cùng Frau Schmidt",
    description: "Thực hành trả lời các câu hỏi phỏng vấn xin việc tiêu chuẩn cùng giám đốc nhân sự Schmidt.",
    type: "audio_ai",
    xp: 25,
    estimatedMinutes: 5,
    order: 5,
    heroImage: images.mascotWelcome,
    status: "available",
    goals: [
      { id: "g1", description: "Luyện phản xạ giao tiếp thực tế với AI Teacher Lukas" },
      { id: "g2", description: "Vận dụng từ vựng trọng tâm vào ngữ cảnh hội thoại tự nhiên" }
    ],
    vocabulary: [
      { id: "v-ai-de-9-1", word: "Ich heiße", translation: "Tôi tên là" },
      { id: "v-ai-de-9-2", word: "Meine Erfahrung", translation: "Kinh nghiệm của tôi" },
      { id: "v-ai-de-9-3", word: "Meine Stärken", translation: "Điểm mạnh của tôi" },
      { id: "v-ai-de-9-4", word: "Im Team arbeiten", translation: "Làm việc nhóm" },
      { id: "v-ai-de-9-5", word: "Motiviert", translation: "Có động lực / Nhiệt huyết" }
    ],
    phrases: [],
    activities: [],
    aiTeacherPrompt: {
      scenario: "Phòng phỏng vấn tuyển dụng hiện đại tại trụ sở tập đoàn ở München",
      systemPrompt: "You are Lukas, a warm, human, and energetic German teacher. Speak mostly in English for clear guidance. Introduce German words slowly: say the word once, give the English translation, and invite the student to repeat after you. Keep every reply strictly to 1 or 2 conversational sentences with friendly contractions (I'm, let's, that's). Listen closely to the student, praise correct pronunciation, and gently model errors again: 'So close! Try saying —'. Stay strictly on lesson words: Ich heiße, Meine Erfahrung, Meine Stärken, Im Team arbeiten, Motiviert. Never switch topics.",
      initialGreeting: "Guten Tag! Willkommen bei unserem Unternehmen. Stellen Sie sich bitte kurz vor und erzählen Sie von Ihren Berufserfahrungen.",
      targetVocabulary: ["Ich heiße","Meine Erfahrung","Meine Stärken","Im Team arbeiten","Motiviert"],
      suggestedResponses: ["Guten Tag Frau Schmidt, ich habe drei Jahre Erfahrung in diesem Bereich.","Ich bin sehr zuverlässig, lerne schnell und arbeite gern im Team.","Ich freue mich sehr über die Chance, mich vorzustellen."],
      difficulty: "intermediate"
    }
  },
  {
    id: "lesson-de-1001",
    unitId: "unit-de-10",
    title: "Urlaub Planen (Lên kế hoạch du lịch)",
    description: "Tìm kiếm điểm đến, đặt vé tàu hỏa và chuẩn bị hành lý du lịch.",
    type: "standard",
    xp: 15,
    estimatedMinutes: 5,
    order: 1,
    status: "available",
    goals: [
      { id: "g1", description: "Nắm vững các từ vựng chủ đề Urlaub Planen (Lên kế hoạch du lịch)" },
      { id: "g2", description: "Luyện phát âm chuẩn và phản xạ câu qua các bài tập tương tác" }
    ],
    vocabulary: [
      { id: "v-de-1001-1", word: "Der Urlaub", translation: "Kỳ nghỉ mát", phonetic: "dehr oor-lowp" },
      { id: "v-de-1001-2", word: "Der Koffer", translation: "Vali hành lý", phonetic: "dehr kohf-fer" },
      { id: "v-de-1001-3", word: "Die Fahrkarte", translation: "Vé tàu / Vé xe", phonetic: "dee fahr-kahr-tuh" },
      { id: "v-de-1001-4", word: "Das Reiseziel", translation: "Điểm đến du lịch", phonetic: "dahs ry-zuh-tseel" },
      { id: "v-de-1001-5", word: "Den Koffer packen", translation: "Xếp đồ vào vali", phonetic: "dayn kohf-fer pahk-en" }
    ],
    phrases: [
      { id: "p-de-1001-1", text: "Wohin fährst du dieses Jahr in den Urlaub?", translation: "Năm nay bạn sẽ đi nghỉ mát ở đâu?" },
      { id: "p-de-1001-2", text: "Ich habe schon meine Fahrkarten für die Bahn gekauft.", translation: "Tôi đã mua xong vé tàu hỏa rồi." }
    ],
    activities: [
      {
        id: "act-de-1001-1",
        type: "multiple_choice",
        skill: "reading",
        question: "'Der Koffer' là vật dụng gì?",
        options: ["Vali hành lý","Ví tiền","Bản đồ","Hộ chiếu"],
        correctAnswer: "Vali hành lý"
      },
      {
        id: "act-de-1001-2",
        type: "fill_blank",
        skill: "writing",
        question: "Điền từ: 'Ich kaufe eine _____ nach Hamburg.' (vé tàu)",
        prompt: "Điền từ: 'Ich kaufe eine _____ nach Hamburg.' (vé tàu)",
        options: ["Fahrkarte","Koffer","Urlaub","Reiseziel"],
        correctAnswer: "Fahrkarte"
      },
      {
        id: "act-de-1001-3",
        type: "multiple_choice",
        skill: "reading",
        question: "Dịch: 'Den Koffer packen'",
        options: ["Xếp hành lý vào vali","Mua vé xe","Đặt khách sạn","Đi ra biển"],
        correctAnswer: "Xếp hành lý vào vali"
      },
      {
        id: "act-de-1001-4",
        type: "match_pairs",
        skill: "reading",
        question: "Ghép các cặp từ vựng với nghĩa tiếng Việt tương ứng",
        pairs: [{"left":"Der Urlaub","right":"Kỳ nghỉ mát"},{"left":"Der Koffer","right":"Vali hành lý"},{"left":"Die Fahrkarte","right":"Vé tàu / Vé xe"},{"left":"Das Reiseziel","right":"Điểm đến du lịch"}],
        correctAnswer: "all_matched"
      },
      {
        id: "act-de-1001-5",
        type: "audio_listen",
        skill: "listening",
        question: "Lắng nghe và chọn đáp án chính xác:",
        prompt: "Der Urlaub",
        options: ["Vali hành lý","Ví tiền","Bản đồ","Hộ chiếu"],
        correctAnswer: "Vali hành lý"
      }
    ]
  },
  {
    id: "lesson-de-1002",
    unitId: "unit-de-10",
    title: "In den Bergen & im Wald (Thiên nhiên tuyệt đẹp)",
    description: "Khám phá phong cảnh Rừng Đen và dãy Alps bằng tiếng Đức.",
    type: "standard",
    xp: 15,
    estimatedMinutes: 5,
    order: 2,
    status: "available",
    goals: [
      { id: "g1", description: "Nắm vững các từ vựng chủ đề In den Bergen & im Wald (Thiên nhiên tuyệt đẹp)" },
      { id: "g2", description: "Luyện phát âm chuẩn và phản xạ câu qua các bài tập tương tác" }
    ],
    vocabulary: [
      { id: "v-de-1002-1", word: "Die Berge", translation: "Dãy núi", phonetic: "dee behr-guh" },
      { id: "v-de-1002-2", word: "Der Wald", translation: "Khu rừng", phonetic: "dehr vahlt" },
      { id: "v-de-1002-3", word: "Wandern", translation: "Đi bộ đường dài dã ngoại", phonetic: "vahn-dehrn" },
      { id: "v-de-1002-4", word: "Der See", translation: "Hồ nước", phonetic: "dehr zay" },
      { id: "v-de-1002-5", word: "Die Natur", translation: "Thiên nhiên", phonetic: "dee nah-toor" }
    ],
    phrases: [
      { id: "p-de-1002-1", text: "Am Wochenende wandern wir sehr gerne in den Alpen.", translation: "Vào cuối tuần chúng tôi rất thích đi bộ dã ngoại trên dãy Alps." },
      { id: "p-de-1002-2", text: "Der Schwarzwald ist berühmt für seine dichten Wälder.", translation: "Khu Rừng Đen rất nổi tiếng với những cánh rừng bạt ngàn." }
    ],
    activities: [
      {
        id: "act-de-1002-1",
        type: "multiple_choice",
        skill: "reading",
        question: "'Wandern' là hoạt động ngoài trời ưa thích nào của người Đức?",
        options: ["Đi bộ dã ngoại / trekking","Bơi lội dưới biển","Nấu nướng","Xem tivi"],
        correctAnswer: "Đi bộ dã ngoại / trekking"
      },
      {
        id: "act-de-1002-2",
        type: "fill_blank",
        skill: "writing",
        question: "Điền từ: 'Wir gehen oft im Wald _____.' (đi bộ dã ngoại)",
        prompt: "Điền từ: 'Wir gehen oft im Wald _____.' (đi bộ dã ngoại)",
        options: ["wandern","packen","Urlaub","Koffer"],
        correctAnswer: "wandern"
      },
      {
        id: "act-de-1002-3",
        type: "multiple_choice",
        skill: "reading",
        question: "Dịch: 'Am Ufer des Sees'",
        options: ["Bên bờ hồ","Dưới chân núi","Trong khu rừng","Tại trang trại"],
        correctAnswer: "Bên bờ hồ"
      },
      {
        id: "act-de-1002-4",
        type: "match_pairs",
        skill: "reading",
        question: "Ghép các cặp từ vựng với nghĩa tiếng Việt tương ứng",
        pairs: [{"left":"Die Berge","right":"Dãy núi"},{"left":"Der Wald","right":"Khu rừng"},{"left":"Wandern","right":"Đi bộ đường dài dã ngoại"},{"left":"Der See","right":"Hồ nước"}],
        correctAnswer: "all_matched"
      },
      {
        id: "act-de-1002-5",
        type: "audio_listen",
        skill: "listening",
        question: "Lắng nghe và chọn đáp án chính xác:",
        prompt: "Die Berge",
        options: ["Đi bộ dã ngoại / trekking","Bơi lội dưới biển","Nấu nướng","Xem tivi"],
        correctAnswer: "Đi bộ dã ngoại / trekking"
      }
    ]
  },
  {
    id: "lesson-de-1003",
    unitId: "unit-de-10",
    title: "Im Hotel & Zimmerreservierung (Khách sạn)",
    description: "Nhận phòng khách sạn, yêu cầu bữa sáng và tiện ích phòng nghỉ.",
    type: "standard",
    xp: 15,
    estimatedMinutes: 5,
    order: 3,
    status: "available",
    goals: [
      { id: "g1", description: "Nắm vững các từ vựng chủ đề Im Hotel & Zimmerreservierung (Khách sạn)" },
      { id: "g2", description: "Luyện phát âm chuẩn và phản xạ câu qua các bài tập tương tác" }
    ],
    vocabulary: [
      { id: "v-de-1003-1", word: "Das Doppelzimmer", translation: "Phòng đôi", phonetic: "dahs dohp-pel-tsim-mer" },
      { id: "v-de-1003-2", word: "Blick auf die Berge", translation: "Tầm nhìn hướng núi", phonetic: "blik owf dee behr-guh" },
      { id: "v-de-1003-3", word: "Frühstück inklusive", translation: "Bao gồm bữa sáng", phonetic: "frew-shtewk in-kloo-zee-vuh" },
      { id: "v-de-1003-4", word: "Der Schlüssel", translation: "Chìa khóa phòng", phonetic: "dehr shlews-sel" },
      { id: "v-de-1003-5", word: "Die Klimaanlage", translation: "Điều hòa nhiệt độ", phonetic: "dee klee-mah-ahn-lah-guh" }
    ],
    phrases: [
      { id: "p-de-1003-1", text: "Ich hätte gerne ein ruhiges Doppelzimmer mit Bergblick.", translation: "Tôi muốn đặt một phòng đôi yên tĩnh có hướng nhìn ra núi." },
      { id: "p-de-1003-2", text: "Ist das Frühstück im Zimmerpreis inklusive?", translation: "Bữa sáng đã bao gồm trong giá phòng chưa?" }
    ],
    activities: [
      {
        id: "act-de-1003-1",
        type: "multiple_choice",
        skill: "reading",
        question: "'Frühstück inklusive' nghĩa là gì?",
        options: ["Bao gồm bữa sáng","Tính phí thêm bữa sáng","Không có ăn sáng","Ăn tối miễn phí"],
        correctAnswer: "Bao gồm bữa sáng"
      },
      {
        id: "act-de-1003-2",
        type: "fill_blank",
        skill: "writing",
        question: "Điền từ: 'Hier ist Ihr _____.' (chìa khóa)",
        prompt: "Điền từ: 'Hier ist Ihr _____.' (chìa khóa)",
        options: ["Schlüssel","Wald","Koffer","Berge"],
        correctAnswer: "Schlüssel"
      },
      {
        id: "act-de-1003-3",
        type: "multiple_choice",
        skill: "reading",
        question: "Dịch: 'Der Zimmerschlüssel'",
        options: ["Chìa khóa phòng","Số phòng","Hóa đơn phòng","Người phục vụ"],
        correctAnswer: "Chìa khóa phòng"
      },
      {
        id: "act-de-1003-4",
        type: "match_pairs",
        skill: "reading",
        question: "Ghép các cặp từ vựng với nghĩa tiếng Việt tương ứng",
        pairs: [{"left":"Das Doppelzimmer","right":"Phòng đôi"},{"left":"Blick auf die Berge","right":"Tầm nhìn hướng núi"},{"left":"Frühstück inklusive","right":"Bao gồm bữa sáng"},{"left":"Der Schlüssel","right":"Chìa khóa phòng"}],
        correctAnswer: "all_matched"
      },
      {
        id: "act-de-1003-5",
        type: "audio_listen",
        skill: "listening",
        question: "Lắng nghe và chọn đáp án chính xác:",
        prompt: "Das Doppelzimmer",
        options: ["Bao gồm bữa sáng","Tính phí thêm bữa sáng","Không có ăn sáng","Ăn tối miễn phí"],
        correctAnswer: "Bao gồm bữa sáng"
      }
    ]
  },
  {
    id: "lesson-de-1004",
    unitId: "unit-de-10",
    title: "Sehenswürdigkeiten & Stadtführung (Thăm quan di tích)",
    description: "Khám phá lâu đài, viện bảo tàng và tham gia tour đi bộ quanh thành phố.",
    type: "standard",
    xp: 15,
    estimatedMinutes: 5,
    order: 4,
    status: "available",
    goals: [
      { id: "g1", description: "Nắm vững các từ vựng chủ đề Sehenswürdigkeiten & Stadtführung (Thăm quan di tích)" },
      { id: "g2", description: "Luyện phát âm chuẩn và phản xạ câu qua các bài tập tương tác" }
    ],
    vocabulary: [
      { id: "v-de-1004-1", word: "Die Sehenswürdigkeit", translation: "Thắng cảnh / Điểm tham quan", phonetic: "dee zay-ens-vewr-dig-kayt" },
      { id: "v-de-1004-2", word: "Die Stadtführung", translation: "Tour tham quan thành phố có hướng dẫn", phonetic: "dee shtaht-few-roong" },
      { id: "v-de-1004-3", word: "Das Schloss", translation: "Lâu đài cổ", phonetic: "dahs shlohs" },
      { id: "v-de-1004-4", word: "Das Museum", translation: "Viện bảo tàng", phonetic: "dahs moo-zay-oom" },
      { id: "v-de-1004-5", word: "Fotos machen", translation: "Chụp ảnh kỷ niệm", phonetic: "foh-tohs mahkh-en" }
    ],
    phrases: [
      { id: "p-de-1004-1", text: "Das Schloss Neuschwanstein ist eine der berühmtesten Sehenswürdigkeiten.", translation: "Lâu đài Neuschwanstein là một trong những thắng cảnh nổi tiếng nhất." },
      { id: "p-de-1004-2", text: "Darf man hier drinnen Fotos machen?", translation: "Có được phép chụp ảnh ở bên trong này không?" }
    ],
    activities: [
      {
        id: "act-de-1004-1",
        type: "multiple_choice",
        skill: "reading",
        question: "'Das Schloss' nghĩa là công trình gì?",
        options: ["Lâu đài cổ kính","Nhà ga xe lửa","Sân vận động","Khách sạn lớn"],
        correctAnswer: "Lâu đài cổ kính"
      },
      {
        id: "act-de-1004-2",
        type: "fill_blank",
        skill: "writing",
        question: "Điền từ: 'Wir besuchen heute ein bekanntes _____.' (bảo tàng)",
        prompt: "Điền từ: 'Wir besuchen heute ein bekanntes _____.' (bảo tàng)",
        options: ["Museum","Schlüssel","Koffer","Wald"],
        correctAnswer: "Museum"
      },
      {
        id: "act-de-1004-3",
        type: "multiple_choice",
        skill: "reading",
        question: "Dịch: 'Fotos machen'",
        options: ["Chụp ảnh","Mua vé","Ăn trưa","Hỏi đường"],
        correctAnswer: "Chụp ảnh"
      },
      {
        id: "act-de-1004-4",
        type: "match_pairs",
        skill: "reading",
        question: "Ghép các cặp từ vựng với nghĩa tiếng Việt tương ứng",
        pairs: [{"left":"Die Sehenswürdigkeit","right":"Thắng cảnh / Điểm tham quan"},{"left":"Die Stadtführung","right":"Tour tham quan thành phố có hướng dẫn"},{"left":"Das Schloss","right":"Lâu đài cổ"},{"left":"Das Museum","right":"Viện bảo tàng"}],
        correctAnswer: "all_matched"
      },
      {
        id: "act-de-1004-5",
        type: "audio_listen",
        skill: "listening",
        question: "Lắng nghe và chọn đáp án chính xác:",
        prompt: "Die Sehenswürdigkeit",
        options: ["Lâu đài cổ kính","Nhà ga xe lửa","Sân vận động","Khách sạn lớn"],
        correctAnswer: "Lâu đài cổ kính"
      }
    ]
  },
  {
    id: "lesson-de-1005",
    unitId: "unit-de-10",
    title: "AI Practice: Du Lịch Khám Phá Nước Đức Cùng Sophie",
    description: "Thực hành đối thoại du lịch, hỏi đường và khám phá thắng cảnh cùng bạn Sophie.",
    type: "audio_ai",
    xp: 25,
    estimatedMinutes: 5,
    order: 5,
    heroImage: images.mascotWelcome,
    status: "available",
    goals: [
      { id: "g1", description: "Luyện phản xạ giao tiếp thực tế với AI Teacher Lukas" },
      { id: "g2", description: "Vận dụng từ vựng trọng tâm vào ngữ cảnh hội thoại tự nhiên" }
    ],
    vocabulary: [
      { id: "v-ai-de-10-1", word: "Die Berge", translation: "Dãy núi" },
      { id: "v-ai-de-10-2", word: "Das Schloss", translation: "Lâu đài cổ" },
      { id: "v-ai-de-10-3", word: "Wandern", translation: "Đi bộ đường dài dã ngoại" },
      { id: "v-ai-de-10-4", word: "Besuchen", translation: "Thăm" },
      { id: "v-ai-de-10-5", word: "Wunderbar", translation: "Tuyệt vời" }
    ],
    phrases: [],
    activities: [],
    aiTeacherPrompt: {
      scenario: "Quảng trường Marienplatz xinh đẹp tại trung tâm thành phố München",
      systemPrompt: "You are Lukas, a warm, human, and energetic German teacher. Speak mostly in English for clear guidance. Introduce German words slowly: say the word once, give the English translation, and invite the student to repeat after you. Keep every reply strictly to 1 or 2 conversational sentences with friendly contractions (I'm, let's, that's). Listen closely to the student, praise correct pronunciation, and gently model errors again: 'So close! Try saying —'. Stay strictly on lesson words: Die Berge, Das Schloss, Wandern, Besuchen, Wunderbar. Never switch topics.",
      initialGreeting: "Herzlich willkommen in Bayern! Was möchtest du hier am liebsten besichtigen? Wandern in den Bergen oder historische Schlösser?",
      targetVocabulary: ["Die Berge","Das Schloss","Wandern","Besuchen","Wunderbar"],
      suggestedResponses: ["Ich möchte unbedingt das Schloss Neuschwanstein besichtigen.","Wandern in den Bergen klingt auch fantastisch!","Das bayerische Essen schmeckt wirklich hervorragend."],
      difficulty: "intermediate"
    }
  },
  {
    id: "lesson-de-1101",
    unitId: "unit-de-11",
    title: "In Zehn Jahren (Thì tương lai Futur I với 'werden')",
    description: "Diễn đạt ước mơ và kế hoạch trong tương lai bằng động từ werden.",
    type: "standard",
    xp: 15,
    estimatedMinutes: 5,
    order: 1,
    status: "available",
    goals: [
      { id: "g1", description: "Nắm vững các từ vựng chủ đề In Zehn Jahren (Thì tương lai Futur I với 'werden')" },
      { id: "g2", description: "Luyện phát âm chuẩn và phản xạ câu qua các bài tập tương tác" }
    ],
    vocabulary: [
      { id: "v-de-1101-1", word: "Die Zukunft", translation: "Tương lai", phonetic: "dee tsoo-koonft" },
      { id: "v-de-1101-2", word: "Ich werde", translation: "Tôi sẽ...", phonetic: "ikh vehr-duh" },
      { id: "v-de-1101-3", word: "Der Plan", translation: "Kế hoạch", phonetic: "dehr plahn" },
      { id: "v-de-1101-4", word: "Reisen", translation: "Đi du lịch", phonetic: "ry-zen" },
      { id: "v-de-1101-5", word: "Der Traum", translation: "Ước mơ / Giấc mơ", phonetic: "dehr trowm" }
    ],
    phrases: [
      { id: "p-de-1101-1", text: "In zehn Jahren werde ich in einem schönen Haus auf dem Land leben.", translation: "Mười năm nữa tôi sẽ sống trong một ngôi nhà đẹp ở vùng ngoại ô." },
      { id: "p-de-1101-2", text: "Mein größter Traum ist es, die Welt zu bereisen.", translation: "Ước mơ lớn nhất của tôi là đi du lịch khắp thế giới." }
    ],
    activities: [
      {
        id: "act-de-1101-1",
        type: "multiple_choice",
        skill: "reading",
        question: "Động từ nào được dùng để chia thì tương lai Futur I trong tiếng Đức?",
        options: ["Werden","Sein","Haben","Können"],
        correctAnswer: "Werden"
      },
      {
        id: "act-de-1101-2",
        type: "fill_blank",
        skill: "writing",
        question: "Điền từ: 'Ich _____ nächstes Jahr nach Deutschland reisen.' (sẽ)",
        prompt: "Điền từ: 'Ich _____ nächstes Jahr nach Deutschland reisen.' (sẽ)",
        options: ["werde","bin","habe","Traum"],
        correctAnswer: "werde"
      },
      {
        id: "act-de-1101-3",
        type: "multiple_choice",
        skill: "reading",
        question: "Dịch: 'Die Zukunft'",
        options: ["Tương lai","Quá khứ","Hiện tại","Kỷ niệm"],
        correctAnswer: "Tương lai"
      },
      {
        id: "act-de-1101-4",
        type: "match_pairs",
        skill: "reading",
        question: "Ghép các cặp từ vựng với nghĩa tiếng Việt tương ứng",
        pairs: [{"left":"Die Zukunft","right":"Tương lai"},{"left":"Ich werde","right":"Tôi sẽ..."},{"left":"Der Plan","right":"Kế hoạch"},{"left":"Reisen","right":"Đi du lịch"}],
        correctAnswer: "all_matched"
      },
      {
        id: "act-de-1101-5",
        type: "audio_listen",
        skill: "listening",
        question: "Lắng nghe và chọn đáp án chính xác:",
        prompt: "Die Zukunft",
        options: ["Werden","Sein","Haben","Können"],
        correctAnswer: "Werden"
      }
    ]
  },
  {
    id: "lesson-de-1102",
    unitId: "unit-de-11",
    title: "Mein Smartphone & Das Internet (Công nghệ số)",
    description: "Từ vựng về ứng dụng điện thoại, mật khẩu và kết nối trực tuyến.",
    type: "standard",
    xp: 15,
    estimatedMinutes: 5,
    order: 2,
    status: "available",
    goals: [
      { id: "g1", description: "Nắm vững các từ vựng chủ đề Mein Smartphone & Das Internet (Công nghệ số)" },
      { id: "g2", description: "Luyện phát âm chuẩn và phản xạ câu qua các bài tập tương tác" }
    ],
    vocabulary: [
      { id: "v-de-1102-1", word: "Die App", translation: "Ứng dụng điện thoại", phonetic: "dee ehp" },
      { id: "v-de-1102-2", word: "Das Smartphone", translation: "Điện thoại thông minh", phonetic: "dahs smaht-fohn" },
      { id: "v-de-1102-3", word: "Herunterladen", translation: "Tải về (download)", phonetic: "heh-roon-tehr-lah-den" },
      { id: "v-de-1102-4", word: "Das Passwort", translation: "Mật khẩu", phonetic: "dahs pahs-vort" },
      { id: "v-de-1102-5", word: "Online", translation: "Trực tuyến", phonetic: "ohn-line" }
    ],
    phrases: [
      { id: "p-de-1102-1", text: "Ich nutze diese App jeden Tag, um Deutsch zu lernen.", translation: "Tôi dùng ứng dụng này mỗi ngày để học tiếng Đức." },
      { id: "p-de-1102-2", text: "Vergiss bitte nicht, dein Passwort sicher aufzubewahren.", translation: "Xin đừng quên bảo quản mật khẩu của bạn an toàn." }
    ],
    activities: [
      {
        id: "act-de-1102-1",
        type: "multiple_choice",
        skill: "reading",
        question: "'Herunterladen' là thao tác gì?",
        options: ["Tải xuống / Download","Xóa tệp","Gửi email","Tắt máy"],
        correctAnswer: "Tải xuống / Download"
      },
      {
        id: "act-de-1102-2",
        type: "fill_blank",
        skill: "writing",
        question: "Điền từ: 'Geben Sie bitte Ihr _____ ein.' (mật khẩu)",
        prompt: "Điền từ: 'Geben Sie bitte Ihr _____ ein.' (mật khẩu)",
        options: ["Passwort","Zukunft","Plan","App"],
        correctAnswer: "Passwort"
      },
      {
        id: "act-de-1102-3",
        type: "multiple_choice",
        skill: "reading",
        question: "Dịch: 'Online einkaufen'",
        options: ["Mua sắm trực tuyến","Đi siêu thị","Đổi hàng cũ","Rút tiền"],
        correctAnswer: "Mua sắm trực tuyến"
      },
      {
        id: "act-de-1102-4",
        type: "match_pairs",
        skill: "reading",
        question: "Ghép các cặp từ vựng với nghĩa tiếng Việt tương ứng",
        pairs: [{"left":"Die App","right":"Ứng dụng điện thoại"},{"left":"Das Smartphone","right":"Điện thoại thông minh"},{"left":"Herunterladen","right":"Tải về (download)"},{"left":"Das Passwort","right":"Mật khẩu"}],
        correctAnswer: "all_matched"
      },
      {
        id: "act-de-1102-5",
        type: "audio_listen",
        skill: "listening",
        question: "Lắng nghe và chọn đáp án chính xác:",
        prompt: "Die App",
        options: ["Tải xuống / Download","Xóa tệp","Gửi email","Tắt máy"],
        correctAnswer: "Tải xuống / Download"
      }
    ]
  },
  {
    id: "lesson-de-1103",
    unitId: "unit-de-11",
    title: "Künstliche Intelligenz & Roboter (AI & Tương lai)",
    description: "Thảo luận về trí tuệ nhân tạo, tự động hóa và xã hội hiện đại.",
    type: "standard",
    xp: 15,
    estimatedMinutes: 5,
    order: 3,
    status: "available",
    goals: [
      { id: "g1", description: "Nắm vững các từ vựng chủ đề Künstliche Intelligenz & Roboter (AI & Tương lai)" },
      { id: "g2", description: "Luyện phát âm chuẩn và phản xạ câu qua các bài tập tương tác" }
    ],
    vocabulary: [
      { id: "v-de-1103-1", word: "Künstliche Intelligenz (KI)", translation: "Trí tuệ nhân tạo (AI)", phonetic: "kewnst-likh-uh in-tel-lee-gents" },
      { id: "v-de-1103-2", word: "Der Roboter", translation: "Người máy / Robot", phonetic: "dehr roh-boh-ter" },
      { id: "v-de-1103-3", word: "Die Veränderung", translation: "Sự thay đổi", phonetic: "dee fehr-ehn-deh-roong" },
      { id: "v-de-1103-4", word: "Erleichtern", translation: "Làm cho thuận tiện / Dễ dàng", phonetic: "ehr-lykh-tern" },
      { id: "v-de-1103-5", word: "Modern", translation: "Hiện đại", phonetic: "moh-dehrn" }
    ],
    phrases: [
      { id: "p-de-1103-1", text: "Künstliche Intelligenz kann viele Aufgaben im Alltag erleichtern.", translation: "Trí tuệ nhân tạo có thể giúp nhiều nhiệm vụ hàng ngày trở nên dễ dàng hơn." },
      { id: "p-de-1103-2", text: "Werden Roboter in Zukunft mehr Menschen bei der Arbeit unterstützen?", translation: "Liệu robot trong tương lai có hỗ trợ con người nhiều hơn trong công việc không?" }
    ],
    activities: [
      {
        id: "act-de-1103-1",
        type: "multiple_choice",
        skill: "reading",
        question: "Viết tắt 'KI' trong tiếng Đức tương đương với gì?",
        options: ["Trí tuệ nhân tạo (AI)","Internet tốc độ cao","Mã code mới","Hệ điều hành"],
        correctAnswer: "Trí tuệ nhân tạo (AI)"
      },
      {
        id: "act-de-1103-2",
        type: "fill_blank",
        skill: "writing",
        question: "Điền từ: 'Technologie kann das Leben _____.' (làm dễ dàng hơn)",
        prompt: "Điền từ: 'Technologie kann das Leben _____.' (làm dễ dàng hơn)",
        options: ["erleichtern","Roboter","Zukunft","Passwort"],
        correctAnswer: "erleichtern"
      },
      {
        id: "act-de-1103-3",
        type: "multiple_choice",
        skill: "reading",
        question: "Dịch: 'Eine große Veränderung'",
        options: ["Một sự thay đổi lớn","Một căn nhà đẹp","Một tương lai u ám","Một robot cũ"],
        correctAnswer: "Một sự thay đổi lớn"
      },
      {
        id: "act-de-1103-4",
        type: "match_pairs",
        skill: "reading",
        question: "Ghép các cặp từ vựng với nghĩa tiếng Việt tương ứng",
        pairs: [{"left":"Künstliche Intelligenz (KI)","right":"Trí tuệ nhân tạo (AI)"},{"left":"Der Roboter","right":"Người máy / Robot"},{"left":"Die Veränderung","right":"Sự thay đổi"},{"left":"Erleichtern","right":"Làm cho thuận tiện / Dễ dàng"}],
        correctAnswer: "all_matched"
      },
      {
        id: "act-de-1103-5",
        type: "audio_listen",
        skill: "listening",
        question: "Lắng nghe và chọn đáp án chính xác:",
        prompt: "Künstliche Intelligenz (KI)",
        options: ["Trí tuệ nhân tạo (AI)","Internet tốc độ cao","Mã code mới","Hệ điều hành"],
        correctAnswer: "Trí tuệ nhân tạo (AI)"
      }
    ]
  },
  {
    id: "lesson-de-1104",
    unitId: "unit-de-11",
    title: "Ziele & Vorsätze (Mục tiêu cá nhân)",
    description: "Đặt ra mục tiêu học tập, thói quen tốt và quyết tâm thực hiện.",
    type: "standard",
    xp: 15,
    estimatedMinutes: 5,
    order: 4,
    status: "available",
    goals: [
      { id: "g1", description: "Nắm vững các từ vựng chủ đề Ziele & Vorsätze (Mục tiêu cá nhân)" },
      { id: "g2", description: "Luyện phát âm chuẩn và phản xạ câu qua các bài tập tương tác" }
    ],
    vocabulary: [
      { id: "v-de-1104-1", word: "Der Vorsatz", translation: "Quyết tâm / Dự định", phonetic: "dehr for-zahts" },
      { id: "v-de-1104-2", word: "Das Ziel", translation: "Mục tiêu phấn đấu", phonetic: "dahs tseel" },
      { id: "v-de-1104-3", word: "Erreichen", translation: "Đạt được / Chạm tới", phonetic: "ehr-ry-khen" },
      { id: "v-de-1104-4", word: "Verbessern", translation: "Cải thiện / Nâng cao", phonetic: "fehr-bes-sern" },
      { id: "v-de-1104-5", word: "Erfolgreich", translation: "Thành công", phonetic: "ehr-fohlk-rykh" }
    ],
    phrases: [
      { id: "p-de-1104-1", text: "Mein wichtigstes Ziel ist es, fließend Deutsch zu sprechen.", translation: "Mục tiêu quan trọng nhất của tôi là nói tiếng Đức trôi chảy." },
      { id: "p-de-1104-2", text: "Ich werde jeden Tag üben, um meine Aussprache zu verbessern.", translation: "Tôi sẽ luyện tập mỗi ngày để cải thiện phát âm của mình." }
    ],
    activities: [
      {
        id: "act-de-1104-1",
        type: "multiple_choice",
        skill: "reading",
        question: "'Verbessern' nghĩa là gì?",
        options: ["Cải thiện / Nâng cao","Từ bỏ","Trì hoãn","Quên mất"],
        correctAnswer: "Cải thiện / Nâng cao"
      },
      {
        id: "act-de-1104-2",
        type: "fill_blank",
        skill: "writing",
        question: "Điền từ: 'Ich möchte mein Deutsch _____.' (cải thiện)",
        prompt: "Điền từ: 'Ich möchte mein Deutsch _____.' (cải thiện)",
        options: ["verbessern","Vorsatz","Ziel","Traum"],
        correctAnswer: "verbessern"
      },
      {
        id: "act-de-1104-3",
        type: "multiple_choice",
        skill: "reading",
        question: "Dịch: 'Mein wichtigstes Ziel'",
        options: ["Mục tiêu quan trọng nhất của tôi","Lời hứa của bạn","Ước mơ ngày xưa","Kết quả bài thi"],
        correctAnswer: "Mục tiêu quan trọng nhất của tôi"
      },
      {
        id: "act-de-1104-4",
        type: "match_pairs",
        skill: "reading",
        question: "Ghép các cặp từ vựng với nghĩa tiếng Việt tương ứng",
        pairs: [{"left":"Der Vorsatz","right":"Quyết tâm / Dự định"},{"left":"Das Ziel","right":"Mục tiêu phấn đấu"},{"left":"Erreichen","right":"Đạt được / Chạm tới"},{"left":"Verbessern","right":"Cải thiện / Nâng cao"}],
        correctAnswer: "all_matched"
      },
      {
        id: "act-de-1104-5",
        type: "audio_listen",
        skill: "listening",
        question: "Lắng nghe và chọn đáp án chính xác:",
        prompt: "Der Vorsatz",
        options: ["Cải thiện / Nâng cao","Từ bỏ","Trì hoãn","Quên mất"],
        correctAnswer: "Cải thiện / Nâng cao"
      }
    ]
  },
  {
    id: "lesson-de-1105",
    unitId: "unit-de-11",
    title: "AI Practice: Thảo Luận Ước Mơ Tương Lai Cùng Thầy Felix",
    description: "Thực hành diễn đạt kế hoạch tương lai và công nghệ cùng thầy Felix.",
    type: "audio_ai",
    xp: 25,
    estimatedMinutes: 5,
    order: 5,
    heroImage: images.mascotWelcome,
    status: "available",
    goals: [
      { id: "g1", description: "Luyện phản xạ giao tiếp thực tế với AI Teacher Lukas" },
      { id: "g2", description: "Vận dụng từ vựng trọng tâm vào ngữ cảnh hội thoại tự nhiên" }
    ],
    vocabulary: [
      { id: "v-ai-de-11-1", word: "In der Zukunft", translation: "Trong tương lai" },
      { id: "v-ai-de-11-2", word: "Ich werde", translation: "Tôi sẽ..." },
      { id: "v-ai-de-11-3", word: "Mein Ziel", translation: "Mục tiêu của tôi" },
      { id: "v-ai-de-11-4", word: "Die Technologie", translation: "Công nghệ" },
      { id: "v-ai-de-11-5", word: "Erreichen", translation: "Đạt được / Chạm tới" }
    ],
    phrases: [],
    activities: [],
    aiTeacherPrompt: {
      scenario: "Khuôn viên trường đại học kỹ thuật Munich (TUM)",
      systemPrompt: "You are Lukas, a warm, human, and energetic German teacher. Speak mostly in English for clear guidance. Introduce German words slowly: say the word once, give the English translation, and invite the student to repeat after you. Keep every reply strictly to 1 or 2 conversational sentences with friendly contractions (I'm, let's, that's). Listen closely to the student, praise correct pronunciation, and gently model errors again: 'So close! Try saying —'. Stay strictly on lesson words: In der Zukunft, Ich werde, Mein Ziel, Die Technologie, Erreichen. Never switch topics.",
      initialGreeting: "Hallo! Lass uns über die Zukunft sprechen: Was sind deine wichtigsten Pläne und Träume für die nächsten Jahre?",
      targetVocabulary: ["In der Zukunft","Ich werde","Mein Ziel","Die Technologie","Erreichen"],
      suggestedResponses: ["In der Zukunft möchte ich international arbeiten.","Ich will jeden Tag mein Deutsch weiter verbessern.","Ich glaube, neue Technologien bringen tolle Chancen."],
      difficulty: "intermediate"
    }
  },
  {
    id: "lesson-de-1201",
    unitId: "unit-de-12",
    title: "Die Eigene Meinung Äußern (Bày tỏ quan điểm)",
    description: "Bày tỏ ý kiến cá nhân với 'Meiner Meinung nach', 'Ich denke, dass...'.",
    type: "standard",
    xp: 15,
    estimatedMinutes: 5,
    order: 1,
    status: "available",
    goals: [
      { id: "g1", description: "Nắm vững các từ vựng chủ đề Die Eigene Meinung Äußern (Bày tỏ quan điểm)" },
      { id: "g2", description: "Luyện phát âm chuẩn và phản xạ câu qua các bài tập tương tác" }
    ],
    vocabulary: [
      { id: "v-de-1201-1", word: "Meiner Meinung nach", translation: "Theo ý kiến của tôi", phonetic: "my-ner my-noong nahkh" },
      { id: "v-de-1201-2", word: "Ich denke, dass", translation: "Tôi nghĩ rằng...", phonetic: "ikh deng-kuh dahs" },
      { id: "v-de-1201-3", word: "Einverstanden", translation: "Đồng ý / Nhất trí", phonetic: "eyn-fehr-shtahn-den" },
      { id: "v-de-1201-4", word: "Nicht einverstanden", translation: "Không đồng ý", phonetic: "nikht eyn-fehr-shtahn-den" },
      { id: "v-de-1201-5", word: "Die Meinung", translation: "Ý kiến / Quan điểm", phonetic: "dee my-noong" }
    ],
    phrases: [
      { id: "p-de-1201-1", text: "Meiner Meinung nach ist Sprachenlernen die beste Investition.", translation: "Theo ý kiến của tôi, học ngoại ngữ là khoản đầu tư tốt nhất." },
      { id: "p-de-1201-2", text: "Ich bin ganz deiner Meinung und stimme dir zu.", translation: "Tôi hoàn toàn cùng quan điểm và đồng ý với bạn." }
    ],
    activities: [
      {
        id: "act-de-1201-1",
        type: "multiple_choice",
        skill: "reading",
        question: "'Meiner Meinung nach' dùng để làm gì?",
        options: ["Mở đầu nêu quan điểm cá nhân","Chào tạm biệt","Hỏi đường đi","Gọi món ăn"],
        correctAnswer: "Mở đầu nêu quan điểm cá nhân"
      },
      {
        id: "act-de-1201-2",
        type: "fill_blank",
        skill: "writing",
        question: "Điền từ: 'Meiner _____ nach ist das eine gute Idee.' (ý kiến)",
        prompt: "Điền từ: 'Meiner _____ nach ist das eine gute Idee.' (ý kiến)",
        options: ["Meinung","Ziel","Traum","Plan"],
        correctAnswer: "Meinung"
      },
      {
        id: "act-de-1201-3",
        type: "multiple_choice",
        skill: "reading",
        question: "Dịch: 'Ich bin einverstanden'",
        options: ["Tôi đồng ý","Tôi không biết","Tôi từ chối","Tôi đang bận"],
        correctAnswer: "Tôi đồng ý"
      },
      {
        id: "act-de-1201-4",
        type: "match_pairs",
        skill: "reading",
        question: "Ghép các cặp từ vựng với nghĩa tiếng Việt tương ứng",
        pairs: [{"left":"Meiner Meinung nach","right":"Theo ý kiến của tôi"},{"left":"Ich denke, dass","right":"Tôi nghĩ rằng..."},{"left":"Einverstanden","right":"Đồng ý / Nhất trí"},{"left":"Nicht einverstanden","right":"Không đồng ý"}],
        correctAnswer: "all_matched"
      },
      {
        id: "act-de-1201-5",
        type: "audio_listen",
        skill: "listening",
        question: "Lắng nghe và chọn đáp án chính xác:",
        prompt: "Meiner Meinung nach",
        options: ["Mở đầu nêu quan điểm cá nhân","Chào tạm biệt","Hỏi đường đi","Gọi món ăn"],
        correctAnswer: "Mở đầu nêu quan điểm cá nhân"
      }
    ]
  },
  {
    id: "lesson-de-1202",
    unitId: "unit-de-12",
    title: "Deutsche Traditionen & Kultur (Phong tục tập quán)",
    description: "Tìm hiểu văn hóa chợ Giáng sinh, bánh mì truyền thống và lễ hội Oktoberfest.",
    type: "standard",
    xp: 15,
    estimatedMinutes: 5,
    order: 2,
    status: "available",
    goals: [
      { id: "g1", description: "Nắm vững các từ vựng chủ đề Deutsche Traditionen & Kultur (Phong tục tập quán)" },
      { id: "g2", description: "Luyện phát âm chuẩn và phản xạ câu qua các bài tập tương tác" }
    ],
    vocabulary: [
      { id: "v-de-1202-1", word: "Die Tradition", translation: "Truyền thống", phonetic: "dee trah-dee-tsyohn" },
      { id: "v-de-1202-2", word: "Der Weihnachtsmarkt", translation: "Chợ Giáng sinh", phonetic: "dehr vy-nahkhts-mahkt" },
      { id: "v-de-1202-3", word: "Die Bäckerei", translation: "Tiệm bánh mì Đức", phonetic: "dee beh-keh-ry" },
      { id: "v-de-1202-4", word: "Das Fest", translation: "Lễ hội / Buổi tiệc", phonetic: "dahs fest" },
      { id: "v-de-1202-5", word: "Feiern", translation: "Ăn mừng / Kỷ niệm", phonetic: "fy-ern" }
    ],
    phrases: [
      { id: "p-de-1202-1", text: "Im Dezember besuchen wir sehr gerne den traditionellen Weihnachtsmarkt.", translation: "Vào tháng mười hai, chúng tôi rất thích đi chợ Giáng sinh truyền thống." },
      { id: "p-de-1202-2", text: "Deutschland ist berühmt für seine vielen verschiedenen Brotsorten.", translation: "Nước Đức rất nổi tiếng với rất nhiều loại bánh mì đa dạng." }
    ],
    activities: [
      {
        id: "act-de-1202-1",
        type: "multiple_choice",
        skill: "reading",
        question: "'Der Weihnachtsmarkt' diễn ra vào mùa nào trong năm?",
        options: ["Mùa đông / Tháng 12","Mùa hè","Mùa xuân","Mùa thu"],
        correctAnswer: "Mùa đông / Tháng 12"
      },
      {
        id: "act-de-1202-2",
        type: "fill_blank",
        skill: "writing",
        question: "Điền từ: 'Wir _____ heute meinen Geburtstag.' (ăn mừng / kỷ niệm)",
        prompt: "Điền từ: 'Wir _____ heute meinen Geburtstag.' (ăn mừng / kỷ niệm)",
        options: ["feiern","Meinung","Bäckerei","Fest"],
        correctAnswer: "feiern"
      },
      {
        id: "act-de-1202-3",
        type: "multiple_choice",
        skill: "reading",
        question: "Dịch: 'Eine schöne Tradition'",
        options: ["Một truyền thống đẹp","Một món ăn mới","Một chuyến bay dài","Một bức tranh cổ"],
        correctAnswer: "Một truyền thống đẹp"
      },
      {
        id: "act-de-1202-4",
        type: "match_pairs",
        skill: "reading",
        question: "Ghép các cặp từ vựng với nghĩa tiếng Việt tương ứng",
        pairs: [{"left":"Die Tradition","right":"Truyền thống"},{"left":"Der Weihnachtsmarkt","right":"Chợ Giáng sinh"},{"left":"Die Bäckerei","right":"Tiệm bánh mì Đức"},{"left":"Das Fest","right":"Lễ hội / Buổi tiệc"}],
        correctAnswer: "all_matched"
      },
      {
        id: "act-de-1202-5",
        type: "audio_listen",
        skill: "listening",
        question: "Lắng nghe và chọn đáp án chính xác:",
        prompt: "Die Tradition",
        options: ["Mùa đông / Tháng 12","Mùa hè","Mùa xuân","Mùa thu"],
        correctAnswer: "Mùa đông / Tháng 12"
      }
    ]
  },
  {
    id: "lesson-de-1203",
    unitId: "unit-de-12",
    title: "Typisch Deutsch: Redewendungen (Thành ngữ thú vị)",
    description: "Khám phá các câu thành ngữ hóm hỉnh thường ngày của người Đức.",
    type: "standard",
    xp: 15,
    estimatedMinutes: 5,
    order: 3,
    status: "available",
    goals: [
      { id: "g1", description: "Nắm vững các từ vựng chủ đề Typisch Deutsch: Redewendungen (Thành ngữ thú vị)" },
      { id: "g2", description: "Luyện phát âm chuẩn và phản xạ câu qua các bài tập tương tác" }
    ],
    vocabulary: [
      { id: "v-de-1203-1", word: "Alles in Butter!", translation: "Mọi việc đều ổn thỏa!", phonetic: "ahl-les in boot-ter" },
      { id: "v-de-1203-2", word: "Ich drücke dir die Daumen!", translation: "Tôi chúc bạn may mắn!", phonetic: "ikh drew-kuh deer dee dow-men" },
      { id: "v-de-1203-3", word: "Das ist nicht mein Bier!", translation: "Đó không phải việc của tôi!", phonetic: "dahs ist nikht myn beer" },
      { id: "v-de-1203-4", word: "Hut ab!", translation: "Khâm phục! / Ngả mũ thán phục!", phonetic: "hoot ahp" },
      { id: "v-de-1203-5", word: "Die Redewendung", translation: "Thành ngữ / Quán ngữ", phonetic: "dee ray-duh-vehn-doong" }
    ],
    phrases: [
      { id: "p-de-1203-1", text: "Keine Sorge, alles ist in bester Butter!", translation: "Đừng lo lắng, mọi chuyện đều đang rất ổn thỏa!" },
      { id: "p-de-1203-2", text: "Du hast die Prüfung bestanden? Hut ab!", translation: "Bạn đã thi đỗ kỳ thi rồi ư? Ngả mũ khâm phục!" }
    ],
    activities: [
      {
        id: "act-de-1203-1",
        type: "multiple_choice",
        skill: "reading",
        question: "Người Đức nói 'Ich drücke dir die Daumen' khi nào?",
        options: ["Khi chúc ai đó may mắn","Khi tức giận","Khi muốn mượn tiền","Khi chào tạm biệt"],
        correctAnswer: "Khi chúc ai đó may mắn"
      },
      {
        id: "act-de-1203-2",
        type: "fill_blank",
        skill: "writing",
        question: "Điền từ: 'Keine Sorge, alles in _____!' (ổn thỏa / thành ngữ)",
        prompt: "Điền từ: 'Keine Sorge, alles in _____!' (ổn thỏa / thành ngữ)",
        options: ["Butter","Bier","Daumen","Hut"],
        correctAnswer: "Butter"
      },
      {
        id: "act-de-1203-3",
        type: "multiple_choice",
        skill: "reading",
        question: "Dịch: 'Hut ab !'",
        options: ["Khâm phục! / Xuất sắc!","Chào buổi sáng!","Đi ngủ thôi!","Xin lỗi nhé!"],
        correctAnswer: "Khâm phục! / Xuất sắc!"
      },
      {
        id: "act-de-1203-4",
        type: "match_pairs",
        skill: "reading",
        question: "Ghép các cặp từ vựng với nghĩa tiếng Việt tương ứng",
        pairs: [{"left":"Alles in Butter!","right":"Mọi việc đều ổn thỏa!"},{"left":"Ich drücke dir die Daumen!","right":"Tôi chúc bạn may mắn!"},{"left":"Das ist nicht mein Bier!","right":"Đó không phải việc của tôi!"},{"left":"Hut ab!","right":"Khâm phục! / Ngả mũ thán phục!"}],
        correctAnswer: "all_matched"
      },
      {
        id: "act-de-1203-5",
        type: "audio_listen",
        skill: "listening",
        question: "Lắng nghe và chọn đáp án chính xác:",
        prompt: "Alles in Butter!",
        options: ["Khi chúc ai đó may mắn","Khi tức giận","Khi muốn mượn tiền","Khi chào tạm biệt"],
        correctAnswer: "Khi chúc ai đó may mắn"
      }
    ]
  },
  {
    id: "lesson-de-1204",
    unitId: "unit-de-12",
    title: "A2 Gesamtwiederholung (Tổng ôn toàn diện A2)",
    description: "Tổng ôn kiến thức từ Unit 1 đến Unit 12 để chuẩn bị tốt nghiệp chứng chỉ A2.",
    type: "standard",
    xp: 15,
    estimatedMinutes: 5,
    order: 4,
    status: "available",
    goals: [
      { id: "g1", description: "Nắm vững các từ vựng chủ đề A2 Gesamtwiederholung (Tổng ôn toàn diện A2)" },
      { id: "g2", description: "Luyện phát âm chuẩn và phản xạ câu qua các bài tập tương tác" }
    ],
    vocabulary: [
      { id: "v-de-1204-1", word: "Die Wiederholung", translation: "Sự ôn tập", phonetic: "dee vee-dehr-hoh-loong" },
      { id: "v-de-1204-2", word: "Selbstbewusst", translation: "Tự tin", phonetic: "zelpst-beh-voost" },
      { id: "v-de-1204-3", word: "Das A2-Niveau", translation: "Trình độ A2 CEFR", phonetic: "dahs ah-tsvay nee-voh" },
      { id: "v-de-1204-4", word: "Herzlichen Glückwunsch", translation: "Xin chúc mừng!", phonetic: "hehrts-likh-en glewk-voonsh" },
      { id: "v-de-1204-5", word: "Das Zertifikat", translation: "Chứng chỉ / Bằng tốt nghiệp", phonetic: "dahs tsehr-tee-fee-kaht" }
    ],
    phrases: [
      { id: "p-de-1204-1", text: "Du hast alle 12 Einheiten erfolgreich gemeistert!", translation: "Bạn đã chinh phục thành công toàn bộ 12 Unit bài học!" },
      { id: "p-de-1204-2", text: "Ich fühle mich jetzt sehr sicher im täglichen Gespräch auf Deutsch.", translation: "Giờ đây tôi cảm thấy rất vững vàng khi giao tiếp tiếng Đức hàng ngày." }
    ],
    activities: [
      {
        id: "act-de-1204-1",
        type: "multiple_choice",
        skill: "reading",
        question: "'Herzlichen Glückwunsch' có nghĩa là gì?",
        options: ["Xin chúc mừng","Xin thứ lỗi","Hẹn gặp lại","Chúc ngủ ngon"],
        correctAnswer: "Xin chúc mừng"
      },
      {
        id: "act-de-1204-2",
        type: "fill_blank",
        skill: "writing",
        question: "Điền từ: '_____ zum bestandenen A2-Kurs!' (chúc mừng)",
        prompt: "Điền từ: '_____ zum bestandenen A2-Kurs!' (chúc mừng)",
        options: ["Herzlichen Glückwunsch","Wiederholung","Zertifikat","Meinung"],
        correctAnswer: "Herzlichen Glückwunsch"
      },
      {
        id: "act-de-1204-3",
        type: "multiple_choice",
        skill: "reading",
        question: "Dịch: 'Ich bin sehr selbstbewusst'",
        options: ["Tôi rất tự tin","Tôi rất mệt","Tôi rất đói","Tôi đang lo lắng"],
        correctAnswer: "Tôi rất tự tin"
      },
      {
        id: "act-de-1204-4",
        type: "match_pairs",
        skill: "reading",
        question: "Ghép các cặp từ vựng với nghĩa tiếng Việt tương ứng",
        pairs: [{"left":"Die Wiederholung","right":"Sự ôn tập"},{"left":"Selbstbewusst","right":"Tự tin"},{"left":"Das A2-Niveau","right":"Trình độ A2 CEFR"},{"left":"Herzlichen Glückwunsch","right":"Xin chúc mừng!"}],
        correctAnswer: "all_matched"
      },
      {
        id: "act-de-1204-5",
        type: "audio_listen",
        skill: "listening",
        question: "Lắng nghe và chọn đáp án chính xác:",
        prompt: "Die Wiederholung",
        options: ["Xin chúc mừng","Xin thứ lỗi","Hẹn gặp lại","Chúc ngủ ngon"],
        correctAnswer: "Xin chúc mừng"
      }
    ]
  },
  {
    id: "lesson-de-1205",
    unitId: "unit-de-12",
    title: "AI Practice: Lễ Tốt Nghiệp CEFR A2 Cùng Cô Giáo Hanna",
    description: "Đàm thoại tự do tốt nghiệp chứng chỉ A2 tổng kết cả 12 Unit cùng cô giáo Hanna.",
    type: "audio_ai",
    xp: 25,
    estimatedMinutes: 5,
    order: 5,
    heroImage: images.mascotWelcome,
    status: "available",
    goals: [
      { id: "g1", description: "Luyện phản xạ giao tiếp thực tế với AI Teacher Lukas" },
      { id: "g2", description: "Vận dụng từ vựng trọng tâm vào ngữ cảnh hội thoại tự nhiên" }
    ],
    vocabulary: [
      { id: "v-ai-de-12-1", word: "Herzlichen Glückwunsch", translation: "Xin chúc mừng!" },
      { id: "v-ai-de-12-2", word: "A2-Niveau", translation: "Trình độ A2" },
      { id: "v-ai-de-12-3", word: "Selbstbewusst", translation: "Tự tin" },
      { id: "v-ai-de-12-4", word: "Meiner Meinung nach", translation: "Theo ý kiến của tôi" },
      { id: "v-ai-de-12-5", word: "Danke", translation: "Cảm ơn" }
    ],
    phrases: [],
    activities: [],
    aiTeacherPrompt: {
      scenario: "Sân khấu lễ trao chứng chỉ A2 tại Viện Goethe ở Berlin",
      systemPrompt: "You are Lukas, a warm, human, and energetic German teacher. Speak mostly in English for clear guidance. Introduce German words slowly: say the word once, give the English translation, and invite the student to repeat after you. Keep every reply strictly to 1 or 2 conversational sentences with friendly contractions (I'm, let's, that's). Listen closely to the student, praise correct pronunciation, and gently model errors again: 'So close! Try saying —'. Stay strictly on lesson words: Herzlichen Glückwunsch, A2-Niveau, Selbstbewusst, Meiner Meinung nach, Danke. Never switch topics.",
      initialGreeting: "Herzlichen Glückwunsch! Du hast alle 12 Einheiten geschafft und das A2-Niveau erreicht! Wie fühlst du dich jetzt?",
      targetVocabulary: ["Herzlichen Glückwunsch","A2-Niveau","Selbstbewusst","Meiner Meinung nach","Danke"],
      suggestedResponses: ["Ich fühle mich super stolz und kann jetzt selbstbewusst Deutsch sprechen!","Mein Lieblingsthema waren Reisen und über die Zukunft zu sprechen.","Vielen Dank Hanna, Deutschlernen hat mir riesigen Spaß gemacht!"],
      difficulty: "intermediate"
    }
  },
];
