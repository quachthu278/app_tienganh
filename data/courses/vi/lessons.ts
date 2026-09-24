import { Lesson } from "@/types/learning";
import { images } from "@/constants/images";

export const VI_LESSONS: Lesson[] = [
  {
    id: "lesson-vi-101",
    unitId: "unit-vi-1",
    title: "Xin Chào & Lời Chào Tiếng Việt",
    description: "Học các lời chào cơ bản và lịch sự trong tiếng Việt.",
    type: "standard",
    xp: 15,
    estimatedMinutes: 5,
    order: 1,
    status: "available",
    goals: [
      { id: "g1", description: "Nắm vững các từ vựng chủ đề Xin Chào & Lời Chào Tiếng Việt" },
      { id: "g2", description: "Luyện phát âm chuẩn và phản xạ câu qua các bài tập tương tác" }
    ],
    vocabulary: [
      { id: "v-vi-101-1", word: "Xin chào", translation: "Hello", phonetic: "seen chow" },
      { id: "v-vi-101-2", word: "Chào buổi sáng", translation: "Good morning", phonetic: "chow bwoy sahng" },
      { id: "v-vi-101-3", word: "Tạm biệt", translation: "Goodbye", phonetic: "tahm byet" },
      { id: "v-vi-101-4", word: "Hẹn gặp lại", translation: "See you again", phonetic: "hen gahp lye" },
      { id: "v-vi-101-5", word: "Bạn khỏe không?", translation: "How are you?", phonetic: "bahn khweh khohng" }
    ],
    phrases: [
      { id: "p-vi-101-1", text: "Xin chào! Rất vui được gặp bạn.", translation: "Hello! Very nice to meet you." },
      { id: "p-vi-101-2", text: "Tạm biệt, hẹn gặp lại ngày mai!", translation: "Goodbye, see you tomorrow!" }
    ],
    activities: [
      {
        id: "act-vi-101-1",
        type: "multiple_choice",
        skill: "reading",
        question: "'Xin chào' trong tiếng Anh nghĩa là gì?",
        options: ["Hello","Goodbye","Thank you","Sorry"],
        correctAnswer: "Hello"
      },
      {
        id: "act-vi-101-2",
        type: "fill_blank",
        skill: "writing",
        question: "Điền từ: 'Xin _____! Bạn khỏe không?'",
        prompt: "Điền từ: 'Xin _____! Bạn khỏe không?'",
        options: ["chào","tạm","hẹn","biệt"],
        correctAnswer: "chào"
      },
      {
        id: "act-vi-101-3",
        type: "multiple_choice",
        skill: "reading",
        question: "Dịch: 'Tạm biệt'",
        options: ["Goodbye","Hello","See you","Please"],
        correctAnswer: "Goodbye"
      },
      {
        id: "act-vi-101-4",
        type: "match_pairs",
        skill: "reading",
        question: "Ghép các cặp từ vựng với nghĩa tiếng Việt tương ứng",
        pairs: [{"left":"Xin chào","right":"Hello"},{"left":"Chào buổi sáng","right":"Good morning"},{"left":"Tạm biệt","right":"Goodbye"},{"left":"Hẹn gặp lại","right":"See you again"}],
        correctAnswer: "all_matched"
      },
      {
        id: "act-vi-101-5",
        type: "audio_listen",
        skill: "listening",
        question: "Lắng nghe và chọn đáp án chính xác:",
        prompt: "Xin chào",
        options: ["Hello","Goodbye","Thank you","Sorry"],
        correctAnswer: "Hello"
      }
    ]
  },
  {
    id: "lesson-vi-102",
    unitId: "unit-vi-1",
    title: "Tên Bạn Là Gì? (Giới thiệu bản thân)",
    description: "Cách giới thiệu tên và quốc tịch bằng tiếng Việt.",
    type: "standard",
    xp: 15,
    estimatedMinutes: 5,
    order: 2,
    status: "available",
    goals: [
      { id: "g1", description: "Nắm vững các từ vựng chủ đề Tên Bạn Là Gì? (Giới thiệu bản thân)" },
      { id: "g2", description: "Luyện phát âm chuẩn và phản xạ câu qua các bài tập tương tác" }
    ],
    vocabulary: [
      { id: "v-vi-102-1", word: "Tôi", translation: "I / Me", phonetic: "toy" },
      { id: "v-vi-102-2", word: "Bạn", translation: "You / Friend", phonetic: "bahn" },
      { id: "v-vi-102-3", word: "Tên là", translation: "Name is", phonetic: "ten lah" },
      { id: "v-vi-102-4", word: "Người", translation: "Person", phonetic: "ngu-oy" },
      { id: "v-vi-102-5", word: "Việt Nam", translation: "Vietnam", phonetic: "vyet nahm" }
    ],
    phrases: [
      { id: "p-vi-102-1", text: "Tôi tên là Alex.", translation: "My name is Alex." },
      { id: "p-vi-102-2", text: "Bạn tên là gì?", translation: "What is your name?" }
    ],
    activities: [
      {
        id: "act-vi-102-1",
        type: "multiple_choice",
        skill: "reading",
        question: "'Tôi tên là Alex' có nghĩa là gì?",
        options: ["My name is Alex","You are Alex","Alex is my friend","Who is Alex?"],
        correctAnswer: "My name is Alex"
      },
      {
        id: "act-vi-102-2",
        type: "fill_blank",
        skill: "writing",
        question: "Điền từ: 'Tôi _____ Alex.' (tên là)",
        prompt: "Điền từ: 'Tôi _____ Alex.' (tên là)",
        options: ["tên là","người","bạn","chào"],
        correctAnswer: "tên là"
      },
      {
        id: "act-vi-102-3",
        type: "multiple_choice",
        skill: "reading",
        question: "Dịch: 'Bạn tên là gì?'",
        options: ["What is your name?","How old are you?","Where are you from?","How are you?"],
        correctAnswer: "What is your name?"
      },
      {
        id: "act-vi-102-4",
        type: "match_pairs",
        skill: "reading",
        question: "Ghép các cặp từ vựng với nghĩa tiếng Việt tương ứng",
        pairs: [{"left":"Tôi","right":"I / Me"},{"left":"Bạn","right":"You / Friend"},{"left":"Tên là","right":"Name is"},{"left":"Người","right":"Person"}],
        correctAnswer: "all_matched"
      },
      {
        id: "act-vi-102-5",
        type: "audio_listen",
        skill: "listening",
        question: "Lắng nghe và chọn đáp án chính xác:",
        prompt: "Tôi",
        options: ["My name is Alex","You are Alex","Alex is my friend","Who is Alex?"],
        correctAnswer: "My name is Alex"
      }
    ]
  },
  {
    id: "lesson-vi-103",
    unitId: "unit-vi-1",
    title: "Cảm Ơn & Xin Lỗi",
    description: "Các câu nói lịch thiệp hàng ngày của người Việt Nam.",
    type: "standard",
    xp: 15,
    estimatedMinutes: 5,
    order: 3,
    status: "available",
    goals: [
      { id: "g1", description: "Nắm vững các từ vựng chủ đề Cảm Ơn & Xin Lỗi" },
      { id: "g2", description: "Luyện phát âm chuẩn và phản xạ câu qua các bài tập tương tác" }
    ],
    vocabulary: [
      { id: "v-vi-103-1", word: "Cảm ơn", translation: "Thank you", phonetic: "gahm uhn" },
      { id: "v-vi-103-2", word: "Cảm ơn nhiều", translation: "Thank you very much", phonetic: "gahm uhn nyew" },
      { id: "v-vi-103-3", word: "Xin lỗi", translation: "Sorry / Excuse me", phonetic: "seen loy" },
      { id: "v-vi-103-4", word: "Không có chi", translation: "You're welcome", phonetic: "khohng koh chee" },
      { id: "v-vi-103-5", word: "Dạ / Vâng", translation: "Yes (polite)", phonetic: "zah / vahng" }
    ],
    phrases: [
      { id: "p-vi-103-1", text: "Cảm ơn bạn rất nhiều vì đã giúp tôi!", translation: "Thank you very much for helping me!" },
      { id: "p-vi-103-2", text: "Xin lỗi, cho tôi hỏi đường với ạ.", translation: "Excuse me, may I ask for directions?" }
    ],
    activities: [
      {
        id: "act-vi-103-1",
        type: "multiple_choice",
        skill: "reading",
        question: "Đáp lại lời cảm ơn, người Việt nói câu gì?",
        options: ["Không có chi","Xin lỗi","Tạm biệt","Xin chào"],
        correctAnswer: "Không có chi"
      },
      {
        id: "act-vi-103-2",
        type: "fill_blank",
        skill: "writing",
        question: "Điền từ: 'Cảm _____ bạn rất nhiều!'",
        prompt: "Điền từ: 'Cảm _____ bạn rất nhiều!'",
        options: ["ơn","lỗi","chi","dạ"],
        correctAnswer: "ơn"
      },
      {
        id: "act-vi-103-3",
        type: "multiple_choice",
        skill: "reading",
        question: "Dịch: 'Cảm ơn nhiều'",
        options: ["Thank you very much","Sorry","Goodbye","Hello"],
        correctAnswer: "Thank you very much"
      },
      {
        id: "act-vi-103-4",
        type: "match_pairs",
        skill: "reading",
        question: "Ghép các cặp từ vựng với nghĩa tiếng Việt tương ứng",
        pairs: [{"left":"Cảm ơn","right":"Thank you"},{"left":"Cảm ơn nhiều","right":"Thank you very much"},{"left":"Xin lỗi","right":"Sorry / Excuse me"},{"left":"Không có chi","right":"You're welcome"}],
        correctAnswer: "all_matched"
      },
      {
        id: "act-vi-103-5",
        type: "audio_listen",
        skill: "listening",
        question: "Lắng nghe và chọn đáp án chính xác:",
        prompt: "Cảm ơn",
        options: ["Không có chi","Xin lỗi","Tạm biệt","Xin chào"],
        correctAnswer: "Không có chi"
      }
    ]
  },
  {
    id: "lesson-vi-104",
    unitId: "unit-vi-1",
    title: "Số Đếm 1 - 10 Tiếng Việt",
    description: "Học đếm từ 1 đến 10 để mua hàng và thanh toán tiền.",
    type: "standard",
    xp: 15,
    estimatedMinutes: 5,
    order: 4,
    status: "available",
    goals: [
      { id: "g1", description: "Nắm vững các từ vựng chủ đề Số Đếm 1 - 10 Tiếng Việt" },
      { id: "g2", description: "Luyện phát âm chuẩn và phản xạ câu qua các bài tập tương tác" }
    ],
    vocabulary: [
      { id: "v-vi-104-1", word: "Một / Hai", translation: "One (1) / Two (2)", phonetic: "moht / hye" },
      { id: "v-vi-104-2", word: "Ba / Bốn", translation: "Three (3) / Four (4)", phonetic: "bah / bohn" },
      { id: "v-vi-104-3", word: "Năm / Sáu", translation: "Five (5) / Six (6)", phonetic: "nahm / sow" },
      { id: "v-vi-104-4", word: "Bảy / Tám", translation: "Seven (7) / Eight (8)", phonetic: "bye / tahm" },
      { id: "v-vi-104-5", word: "Chín / Mười", translation: "Nine (9) / Ten (10)", phonetic: "cheen / mu-oy" }
    ],
    phrases: [
      { id: "p-vi-104-1", text: "Một, hai, ba, dô!", translation: "One, two, three, cheers!" },
      { id: "p-vi-104-2", text: "Cho tôi một ly cà phê nhé.", translation: "Give me one cup of coffee, please." }
    ],
    activities: [
      {
        id: "act-vi-104-1",
        type: "multiple_choice",
        skill: "reading",
        question: "Số 5 trong tiếng Việt là gì?",
        options: ["Năm","Ba","Bảy","Mười"],
        correctAnswer: "Năm"
      },
      {
        id: "act-vi-104-2",
        type: "fill_blank",
        skill: "writing",
        question: "Điền số: 'Tám, chín, _____ (10)'",
        prompt: "Điền số: 'Tám, chín, _____ (10)'",
        options: ["mười","năm","bảy","hai"],
        correctAnswer: "mười"
      },
      {
        id: "act-vi-104-3",
        type: "multiple_choice",
        skill: "reading",
        question: "Dịch: 'Mười'",
        options: ["Ten (10)","Nine (9)","Eight (8)","Seven (7)"],
        correctAnswer: "Ten (10)"
      },
      {
        id: "act-vi-104-4",
        type: "match_pairs",
        skill: "reading",
        question: "Ghép các cặp từ vựng với nghĩa tiếng Việt tương ứng",
        pairs: [{"left":"Một / Hai","right":"One (1) / Two (2)"},{"left":"Ba / Bốn","right":"Three (3) / Four (4)"},{"left":"Năm / Sáu","right":"Five (5) / Six (6)"},{"left":"Bảy / Tám","right":"Seven (7) / Eight (8)"}],
        correctAnswer: "all_matched"
      },
      {
        id: "act-vi-104-5",
        type: "audio_listen",
        skill: "listening",
        question: "Lắng nghe và chọn đáp án chính xác:",
        prompt: "Một / Hai",
        options: ["Năm","Ba","Bảy","Mười"],
        correctAnswer: "Năm"
      }
    ]
  },
  {
    id: "lesson-vi-105",
    unitId: "unit-vi-1",
    title: "AI Practice: Luyện Chào Hỏi Với Cô Mai",
    description: "Thực hành phản xạ tiếng Việt giao tiếp tự nhiên cùng cô giáo Mai tại Hà Nội.",
    type: "audio_ai",
    xp: 25,
    estimatedMinutes: 5,
    order: 5,
    heroImage: images.mascotWelcome,
    status: "available",
    goals: [
      { id: "g1", description: "Luyện phản xạ giao tiếp thực tế với AI Teacher Mai" },
      { id: "g2", description: "Vận dụng từ vựng trọng tâm vào ngữ cảnh hội thoại tự nhiên" }
    ],
    vocabulary: [
      { id: "v-ai-vi-1-1", word: "Xin chào", translation: "Hello" },
      { id: "v-ai-vi-1-2", word: "Tên là", translation: "Name is" },
      { id: "v-ai-vi-1-3", word: "Cảm ơn", translation: "Thank you" },
      { id: "v-ai-vi-1-4", word: "Bạn", translation: "You / Friend" },
      { id: "v-ai-vi-1-5", word: "Khỏe không", translation: "Khỏe không" }
    ],
    phrases: [],
    activities: [],
    aiTeacherPrompt: {
      scenario: "Phố cổ Hà Nội bên cạnh hồ Hoàn Kiếm xanh mát",
      systemPrompt: "You are Mai, a warm, human, and energetic Vietnamese teacher. Speak mostly in English for clear guidance. Introduce Vietnamese words slowly: say the word once, give the English translation, and invite the student to repeat after you. Keep every reply strictly to 1 or 2 conversational sentences with friendly contractions (I'm, let's, that's). Listen closely to the student, praise correct pronunciation, and gently model errors again: 'So close! Try saying —'. Stay strictly on lesson words: Xin chào, Tên là, Cảm ơn, Bạn, Khỏe không. Never switch topics.",
      initialGreeting: "Xin chào bạn! Rất vui được gặp bạn ở Hà Nội. Bạn tên là gì thế?",
      targetVocabulary: ["Xin chào","Tên là","Cảm ơn","Bạn","Khỏe không"],
      suggestedResponses: ["Dạ chào cô Mai! Tôi tên là Alex.","Tôi rất khỏe, cảm ơn cô!","Rất vui được gặp cô Mai!"],
      difficulty: "beginner"
    }
  },
  {
    id: "lesson-vi-201",
    unitId: "unit-vi-2",
    title: "Đại Từ & Gia Đình (Anh, Chị, Em)",
    description: "Xưng hô và tên gọi các thành viên trong gia đình Việt Nam.",
    type: "standard",
    xp: 15,
    estimatedMinutes: 5,
    order: 1,
    status: "available",
    goals: [
      { id: "g1", description: "Nắm vững các từ vựng chủ đề Đại Từ & Gia Đình (Anh, Chị, Em)" },
      { id: "g2", description: "Luyện phát âm chuẩn và phản xạ câu qua các bài tập tương tác" }
    ],
    vocabulary: [
      { id: "v-vi-201-1", word: "Gia đình", translation: "Family", phonetic: "zyah deeng" },
      { id: "v-vi-201-2", word: "Bố / Ba", translation: "Father / Dad", phonetic: "boh / bah" },
      { id: "v-vi-201-3", word: "Mẹ / Má", translation: "Mother / Mom", phonetic: "meh / mah" },
      { id: "v-vi-201-4", word: "Anh / Chị", translation: "Older brother / Older sister", phonetic: "ahnh / chee" },
      { id: "v-vi-201-5", word: "Em", translation: "Younger sibling", phonetic: "ehm" }
    ],
    phrases: [
      { id: "p-vi-201-1", text: "Đây là gia đình của tôi.", translation: "This is my family." },
      { id: "p-vi-201-2", text: "Gia đình tôi có bốn người.", translation: "My family has four people." }
    ],
    activities: [
      {
        id: "act-vi-201-1",
        type: "multiple_choice",
        skill: "reading",
        question: "Từ nào dùng để gọi chị gái?",
        options: ["Chị","Anh","Em","Bố"],
        correctAnswer: "Chị"
      },
      {
        id: "act-vi-201-2",
        type: "fill_blank",
        skill: "writing",
        question: "Điền từ: 'Đây là _____ của tôi.' (mẹ)",
        prompt: "Điền từ: 'Đây là _____ của tôi.' (mẹ)",
        options: ["mẹ","bố","anh","em"],
        correctAnswer: "mẹ"
      },
      {
        id: "act-vi-201-3",
        type: "multiple_choice",
        skill: "reading",
        question: "Dịch: 'Gia đình'",
        options: ["Family","Friend","School","Home"],
        correctAnswer: "Family"
      },
      {
        id: "act-vi-201-4",
        type: "match_pairs",
        skill: "reading",
        question: "Ghép các cặp từ vựng với nghĩa tiếng Việt tương ứng",
        pairs: [{"left":"Gia đình","right":"Family"},{"left":"Bố / Ba","right":"Father / Dad"},{"left":"Mẹ / Má","right":"Mother / Mom"},{"left":"Anh / Chị","right":"Older brother / Older sister"}],
        correctAnswer: "all_matched"
      },
      {
        id: "act-vi-201-5",
        type: "audio_listen",
        skill: "listening",
        question: "Lắng nghe và chọn đáp án chính xác:",
        prompt: "Gia đình",
        options: ["Chị","Anh","Em","Bố"],
        correctAnswer: "Chị"
      }
    ]
  },
  {
    id: "lesson-vi-202",
    unitId: "unit-vi-2",
    title: "Miêu Tả Bạn Bè (Bạn của tôi)",
    description: "Miêu tả tính cách thân thiện, hiền lành, dễ thương.",
    type: "standard",
    xp: 15,
    estimatedMinutes: 5,
    order: 2,
    status: "available",
    goals: [
      { id: "g1", description: "Nắm vững các từ vựng chủ đề Miêu Tả Bạn Bè (Bạn của tôi)" },
      { id: "g2", description: "Luyện phát âm chuẩn và phản xạ câu qua các bài tập tương tác" }
    ],
    vocabulary: [
      { id: "v-vi-202-1", word: "Bạn bè", translation: "Friend", phonetic: "bahn beh" },
      { id: "v-vi-202-2", word: "Tốt bụng", translation: "Kind / Good-hearted", phonetic: "toht boong" },
      { id: "v-vi-202-3", word: "Đẹp trai / Xinh gái", translation: "Handsome / Pretty", phonetic: "dehp try / seenh gye" },
      { id: "v-vi-202-4", word: "Vui tính", translation: "Humorous / Funny", phonetic: "vwooy teenh" },
      { id: "v-vi-202-5", word: "Dễ thương", translation: "Cute / Lovely", phonetic: "zeh tu-ohng" }
    ],
    phrases: [
      { id: "p-vi-202-1", text: "Bạn của tôi rất tốt bụng.", translation: "My friend is very kind." },
      { id: "p-vi-202-2", text: "Cô ấy rất là dễ thương!", translation: "She is very lovely!" }
    ],
    activities: [
      {
        id: "act-vi-202-1",
        type: "multiple_choice",
        skill: "reading",
        question: "'Dễ thương' nghĩa là gì?",
        options: ["Cute / Lovely","Angry","Lazy","Tall"],
        correctAnswer: "Cute / Lovely"
      },
      {
        id: "act-vi-202-2",
        type: "fill_blank",
        skill: "writing",
        question: "Điền từ: 'Nam là người rất _____.' (tốt bụng)",
        prompt: "Điền từ: 'Nam là người rất _____.' (tốt bụng)",
        options: ["tốt bụng","gia đình","màu sắc","số đếm"],
        correctAnswer: "tốt bụng"
      },
      {
        id: "act-vi-202-3",
        type: "multiple_choice",
        skill: "reading",
        question: "Dịch: 'Bạn tốt'",
        options: ["Good friend","Family","Teacher","Brother"],
        correctAnswer: "Good friend"
      },
      {
        id: "act-vi-202-4",
        type: "match_pairs",
        skill: "reading",
        question: "Ghép các cặp từ vựng với nghĩa tiếng Việt tương ứng",
        pairs: [{"left":"Bạn bè","right":"Friend"},{"left":"Tốt bụng","right":"Kind / Good-hearted"},{"left":"Đẹp trai / Xinh gái","right":"Handsome / Pretty"},{"left":"Vui tính","right":"Humorous / Funny"}],
        correctAnswer: "all_matched"
      },
      {
        id: "act-vi-202-5",
        type: "audio_listen",
        skill: "listening",
        question: "Lắng nghe và chọn đáp án chính xác:",
        prompt: "Bạn bè",
        options: ["Cute / Lovely","Angry","Lazy","Tall"],
        correctAnswer: "Cute / Lovely"
      }
    ]
  },
  {
    id: "lesson-vi-203",
    unitId: "unit-vi-2",
    title: "Màu Sắc & Áo Dài (Màu sắc & Quần áo)",
    description: "Màu sắc truyền thống và tà áo dài Việt Nam.",
    type: "standard",
    xp: 15,
    estimatedMinutes: 5,
    order: 3,
    status: "available",
    goals: [
      { id: "g1", description: "Nắm vững các từ vựng chủ đề Màu Sắc & Áo Dài (Màu sắc & Quần áo)" },
      { id: "g2", description: "Luyện phát âm chuẩn và phản xạ câu qua các bài tập tương tác" }
    ],
    vocabulary: [
      { id: "v-vi-203-1", word: "Màu trắng / Màu đen", translation: "White / Black", phonetic: "mow trahng / mow dehn" },
      { id: "v-vi-203-2", word: "Màu đỏ / Màu vàng", translation: "Red / Yellow", phonetic: "mow doh / mow vahng" },
      { id: "v-vi-203-3", word: "Màu xanh", translation: "Blue / Green", phonetic: "mow zahnh" },
      { id: "v-vi-203-4", word: "Áo dài", translation: "Ao Dai (traditional dress)", phonetic: "ow zye" },
      { id: "v-vi-203-5", word: "Đôi giày", translation: "Shoes", phonetic: "doy zyye" }
    ],
    phrases: [
      { id: "p-vi-203-1", text: "Chiếc áo dài màu trắng rất đẹp.", translation: "The white Ao Dai is very beautiful." },
      { id: "p-vi-203-2", text: "Tôi thích màu xanh dương.", translation: "I like blue color." }
    ],
    activities: [
      {
        id: "act-vi-203-1",
        type: "multiple_choice",
        skill: "reading",
        question: "Quốc kỳ Việt Nam có nền màu gì và ngôi sao màu gì?",
        options: ["Nền đỏ sao vàng","Nền xanh sao trắng","Nền vàng sao đỏ","Nền đen sao vàng"],
        correctAnswer: "Nền đỏ sao vàng"
      },
      {
        id: "act-vi-203-2",
        type: "fill_blank",
        skill: "writing",
        question: "Điền từ: 'Tà áo dài màu _____.' (trắng)",
        prompt: "Điền từ: 'Tà áo dài màu _____.' (trắng)",
        options: ["trắng","đen","đỏ","vàng"],
        correctAnswer: "trắng"
      },
      {
        id: "act-vi-203-3",
        type: "multiple_choice",
        skill: "reading",
        question: "Dịch: 'Áo dài màu đỏ'",
        options: ["Red Ao Dai","White shirt","Black shoes","Yellow hat"],
        correctAnswer: "Red Ao Dai"
      },
      {
        id: "act-vi-203-4",
        type: "match_pairs",
        skill: "reading",
        question: "Ghép các cặp từ vựng với nghĩa tiếng Việt tương ứng",
        pairs: [{"left":"Màu trắng / Màu đen","right":"White / Black"},{"left":"Màu đỏ / Màu vàng","right":"Red / Yellow"},{"left":"Màu xanh","right":"Blue / Green"},{"left":"Áo dài","right":"Ao Dai (traditional dress)"}],
        correctAnswer: "all_matched"
      },
      {
        id: "act-vi-203-5",
        type: "audio_listen",
        skill: "listening",
        question: "Lắng nghe và chọn đáp án chính xác:",
        prompt: "Màu trắng / Màu đen",
        options: ["Nền đỏ sao vàng","Nền xanh sao trắng","Nền vàng sao đỏ","Nền đen sao vàng"],
        correctAnswer: "Nền đỏ sao vàng"
      }
    ]
  },
  {
    id: "lesson-vi-204",
    unitId: "unit-vi-2",
    title: "Sở Thích Của Tôi (Tôi thích...)",
    description: "Bày tỏ điều mình yêu thích bằng cấu trúc 'Tôi thích'.",
    type: "standard",
    xp: 15,
    estimatedMinutes: 5,
    order: 4,
    status: "available",
    goals: [
      { id: "g1", description: "Nắm vững các từ vựng chủ đề Sở Thích Của Tôi (Tôi thích...)" },
      { id: "g2", description: "Luyện phát âm chuẩn và phản xạ câu qua các bài tập tương tác" }
    ],
    vocabulary: [
      { id: "v-vi-204-1", word: "Thích", translation: "Like / Enjoy", phonetic: "teek" },
      { id: "v-vi-204-2", word: "Không thích", translation: "Dislike", phonetic: "khohng teek" },
      { id: "v-vi-204-3", word: "Âm nhạc", translation: "Music", phonetic: "ahm nyahk" },
      { id: "v-vi-204-4", word: "Du lịch", translation: "Traveling", phonetic: "zoo leek" },
      { id: "v-vi-204-5", word: "Xem phim", translation: "Watching movies", phonetic: "sehm feem" }
    ],
    phrases: [
      { id: "p-vi-204-1", text: "Tôi rất thích đi du lịch Việt Nam.", translation: "I really like traveling in Vietnam." },
      { id: "p-vi-204-2", text: "Bạn thích làm gì vào thời gian rảnh?", translation: "What do you like doing in your free time?" }
    ],
    activities: [
      {
        id: "act-vi-204-1",
        type: "multiple_choice",
        skill: "reading",
        question: "Từ nào có nghĩa là 'To like'?",
        options: ["Thích","Ghét","Muốn","Đi"],
        correctAnswer: "Thích"
      },
      {
        id: "act-vi-204-2",
        type: "fill_blank",
        skill: "writing",
        question: "Điền từ: 'Tôi rất _____ du lịch.' (thích)",
        prompt: "Điền từ: 'Tôi rất _____ du lịch.' (thích)",
        options: ["thích","ghét","gia đình","màu sắc"],
        correctAnswer: "thích"
      },
      {
        id: "act-vi-204-3",
        type: "multiple_choice",
        skill: "reading",
        question: "Dịch: 'Tôi thích nghe nhạc'",
        options: ["I like listening to music","I dislike music","I play music","I am a singer"],
        correctAnswer: "I like listening to music"
      },
      {
        id: "act-vi-204-4",
        type: "match_pairs",
        skill: "reading",
        question: "Ghép các cặp từ vựng với nghĩa tiếng Việt tương ứng",
        pairs: [{"left":"Thích","right":"Like / Enjoy"},{"left":"Không thích","right":"Dislike"},{"left":"Âm nhạc","right":"Music"},{"left":"Du lịch","right":"Traveling"}],
        correctAnswer: "all_matched"
      },
      {
        id: "act-vi-204-5",
        type: "audio_listen",
        skill: "listening",
        question: "Lắng nghe và chọn đáp án chính xác:",
        prompt: "Thích",
        options: ["Thích","Ghét","Muốn","Đi"],
        correctAnswer: "Thích"
      }
    ]
  },
  {
    id: "lesson-vi-205",
    unitId: "unit-vi-2",
    title: "AI Practice: Gia Đình & Sở Thích Cùng Nam",
    description: "Trò chuyện thân mật về gia đình và các địa điểm du lịch yêu thích cùng anh bạn Nam.",
    type: "audio_ai",
    xp: 25,
    estimatedMinutes: 5,
    order: 5,
    heroImage: images.mascotWelcome,
    status: "available",
    goals: [
      { id: "g1", description: "Luyện phản xạ giao tiếp thực tế với AI Teacher Mai" },
      { id: "g2", description: "Vận dụng từ vựng trọng tâm vào ngữ cảnh hội thoại tự nhiên" }
    ],
    vocabulary: [
      { id: "v-ai-vi-2-1", word: "Gia đình", translation: "Family" },
      { id: "v-ai-vi-2-2", word: "Bạn bè", translation: "Friend" },
      { id: "v-ai-vi-2-3", word: "Thích", translation: "Like / Enjoy" },
      { id: "v-ai-vi-2-4", word: "Du lịch", translation: "Traveling" },
      { id: "v-ai-vi-2-5", word: "Cà phê", translation: "Coffee" }
    ],
    phrases: [],
    activities: [],
    aiTeacherPrompt: {
      scenario: "Quán trà đá vỉa hè ven bờ hồ Tây Hà Nội",
      systemPrompt: "You are Mai, a warm, human, and energetic Vietnamese teacher. Speak mostly in English for clear guidance. Introduce Vietnamese words slowly: say the word once, give the English translation, and invite the student to repeat after you. Keep every reply strictly to 1 or 2 conversational sentences with friendly contractions (I'm, let's, that's). Listen closely to the student, praise correct pronunciation, and gently model errors again: 'So close! Try saying —'. Stay strictly on lesson words: Gia đình, Bạn bè, Thích, Du lịch, Cà phê. Never switch topics.",
      initialGreeting: "Chào bạn! Uống trà đá nhé? Nhà bạn có mấy người và bạn thích đi đâu ở Việt Nam?",
      targetVocabulary: ["Gia đình","Bạn bè","Thích","Du lịch","Cà phê"],
      suggestedResponses: ["Dạ nhà em có 4 người.","Em rất thích du lịch Đà Nẵng và Hà Nội!","Trà đá Hà Nội ngon quá anh Nam ơi!"],
      difficulty: "beginner"
    }
  },
  {
    id: "lesson-vi-301",
    unitId: "unit-vi-3",
    title: "Mấy Giờ Rồi? (Hỏi giờ giấc)",
    description: "Cách hỏi và nói giờ trong tiếng Việt.",
    type: "standard",
    xp: 15,
    estimatedMinutes: 5,
    order: 1,
    status: "available",
    goals: [
      { id: "g1", description: "Nắm vững các từ vựng chủ đề Mấy Giờ Rồi? (Hỏi giờ giấc)" },
      { id: "g2", description: "Luyện phát âm chuẩn và phản xạ câu qua các bài tập tương tác" }
    ],
    vocabulary: [
      { id: "v-vi-301-1", word: "Bây giờ", translation: "Now", phonetic: "bye zyu-oh" },
      { id: "v-vi-301-2", word: "Giờ", translation: "Hour / O'clock", phonetic: "zyu-oh" },
      { id: "v-vi-301-3", word: "Phút", translation: "Minute", phonetic: "foot" },
      { id: "v-vi-301-4", word: "Rưỡi", translation: "Half past (30 minutes)", phonetic: "roo-oy" },
      { id: "v-vi-301-5", word: "Sáng / Tối", translation: "Morning / Evening", phonetic: "sahng / toy" }
    ],
    phrases: [
      { id: "p-vi-301-1", text: "Bây giờ là mấy giờ rồi ạ?", translation: "What time is it now, please?" },
      { id: "p-vi-301-2", text: "Bây giờ là bảy giờ rưỡi sáng.", translation: "Now it is 7:30 AM." }
    ],
    activities: [
      {
        id: "act-vi-301-1",
        type: "multiple_choice",
        skill: "reading",
        question: "'Mấy giờ rồi?' nghĩa là gì?",
        options: ["What time is it?","What day is today?","Where are you going?","How much is it?"],
        correctAnswer: "What time is it?"
      },
      {
        id: "act-vi-301-2",
        type: "fill_blank",
        skill: "writing",
        question: "Điền từ: 'Bây giờ là tám giờ _____.' (rưỡi)",
        prompt: "Điền từ: 'Bây giờ là tám giờ _____.' (rưỡi)",
        options: ["rưỡi","phút","sáng","tối"],
        correctAnswer: "rưỡi"
      },
      {
        id: "act-vi-301-3",
        type: "multiple_choice",
        skill: "reading",
        question: "Dịch: 'Bảy giờ rưỡi'",
        options: ["7:30","8:30","7:00","8:00"],
        correctAnswer: "7:30"
      },
      {
        id: "act-vi-301-4",
        type: "match_pairs",
        skill: "reading",
        question: "Ghép các cặp từ vựng với nghĩa tiếng Việt tương ứng",
        pairs: [{"left":"Bây giờ","right":"Now"},{"left":"Giờ","right":"Hour / O'clock"},{"left":"Phút","right":"Minute"},{"left":"Rưỡi","right":"Half past (30 minutes)"}],
        correctAnswer: "all_matched"
      },
      {
        id: "act-vi-301-5",
        type: "audio_listen",
        skill: "listening",
        question: "Lắng nghe và chọn đáp án chính xác:",
        prompt: "Bây giờ",
        options: ["What time is it?","What day is today?","Where are you going?","How much is it?"],
        correctAnswer: "What time is it?"
      }
    ]
  },
  {
    id: "lesson-vi-302",
    unitId: "unit-vi-3",
    title: "Thói Quen Một Ngày (Sinh hoạt thường nhật)",
    description: "Thức dậy, ăn sáng, đi làm và đi ngủ.",
    type: "standard",
    xp: 15,
    estimatedMinutes: 5,
    order: 2,
    status: "available",
    goals: [
      { id: "g1", description: "Nắm vững các từ vựng chủ đề Thói Quen Một Ngày (Sinh hoạt thường nhật)" },
      { id: "g2", description: "Luyện phát âm chuẩn và phản xạ câu qua các bài tập tương tác" }
    ],
    vocabulary: [
      { id: "v-vi-302-1", word: "Thức dậy", translation: "Wake up", phonetic: "tuck zye" },
      { id: "v-vi-302-2", word: "Đi ngủ", translation: "Go to sleep", phonetic: "dee ngoo" },
      { id: "v-vi-302-3", word: "Ăn cơm", translation: "Eat meal / Eat rice", phonetic: "ahn kuhm" },
      { id: "v-vi-302-4", word: "Uống nước", translation: "Drink water", phonetic: "wohng nu-uhk" },
      { id: "v-vi-302-5", word: "Đi làm", translation: "Go to work", phonetic: "dee lahm" }
    ],
    phrases: [
      { id: "p-vi-302-1", text: "Tôi thức dậy lúc 7 giờ sáng.", translation: "I wake up at 7 AM." },
      { id: "p-vi-302-2", text: "Sau đó tôi ăn sáng và đi làm.", translation: "After that I eat breakfast and go to work." }
    ],
    activities: [
      {
        id: "act-vi-302-1",
        type: "multiple_choice",
        skill: "reading",
        question: "'Thức dậy' nghĩa là hành động gì?",
        options: ["Wake up","Go to sleep","Eat meal","Go to work"],
        correctAnswer: "Wake up"
      },
      {
        id: "act-vi-302-2",
        type: "fill_blank",
        skill: "writing",
        question: "Điền từ: 'Tôi _____ lúc 7 giờ.' (thức dậy)",
        prompt: "Điền từ: 'Tôi _____ lúc 7 giờ.' (thức dậy)",
        options: ["thức dậy","đi ngủ","ăn cơm","đi làm"],
        correctAnswer: "thức dậy"
      },
      {
        id: "act-vi-302-3",
        type: "multiple_choice",
        skill: "reading",
        question: "Dịch: 'Ăn cơm'",
        options: ["Eat meal","Drink water","Sleep","Walk"],
        correctAnswer: "Eat meal"
      },
      {
        id: "act-vi-302-4",
        type: "match_pairs",
        skill: "reading",
        question: "Ghép các cặp từ vựng với nghĩa tiếng Việt tương ứng",
        pairs: [{"left":"Thức dậy","right":"Wake up"},{"left":"Đi ngủ","right":"Go to sleep"},{"left":"Ăn cơm","right":"Eat meal / Eat rice"},{"left":"Uống nước","right":"Drink water"}],
        correctAnswer: "all_matched"
      },
      {
        id: "act-vi-302-5",
        type: "audio_listen",
        skill: "listening",
        question: "Lắng nghe và chọn đáp án chính xác:",
        prompt: "Thức dậy",
        options: ["Wake up","Go to sleep","Eat meal","Go to work"],
        correctAnswer: "Wake up"
      }
    ]
  },
  {
    id: "lesson-vi-303",
    unitId: "unit-vi-3",
    title: "Các Ngày Trong Tuần (Thứ Hai đến Chủ Nhật)",
    description: "Nắm vững thứ Hai đến Chủ Nhật trong tuần.",
    type: "standard",
    xp: 15,
    estimatedMinutes: 5,
    order: 3,
    status: "available",
    goals: [
      { id: "g1", description: "Nắm vững các từ vựng chủ đề Các Ngày Trong Tuần (Thứ Hai đến Chủ Nhật)" },
      { id: "g2", description: "Luyện phát âm chuẩn và phản xạ câu qua các bài tập tương tác" }
    ],
    vocabulary: [
      { id: "v-vi-303-1", word: "Thứ Hai", translation: "Monday", phonetic: "too hye" },
      { id: "v-vi-303-2", word: "Thứ Sáu", translation: "Friday", phonetic: "too sow" },
      { id: "v-vi-303-3", word: "Chủ Nhật", translation: "Sunday", phonetic: "choo nyaht" },
      { id: "v-vi-303-4", word: "Hôm nay", translation: "Today", phonetic: "hohm nye" },
      { id: "v-vi-303-5", word: "Ngày mai", translation: "Tomorrow", phonetic: "ngye my" }
    ],
    phrases: [
      { id: "p-vi-303-1", text: "Hôm nay là thứ Sáu rồi!", translation: "Today is Friday already!" },
      { id: "p-vi-303-2", text: "Ngày mai là ngày nghỉ cuối tuần.", translation: "Tomorrow is the weekend." }
    ],
    activities: [
      {
        id: "act-vi-303-1",
        type: "multiple_choice",
        skill: "reading",
        question: "'Chủ Nhật' là ngày nào trong tuần?",
        options: ["Sunday","Monday","Saturday","Friday"],
        correctAnswer: "Sunday"
      },
      {
        id: "act-vi-303-2",
        type: "fill_blank",
        skill: "writing",
        question: "Điền từ: '_____ là thứ Sáu.' (hôm nay)",
        prompt: "Điền từ: '_____ là thứ Sáu.' (hôm nay)",
        options: ["Hôm nay","Ngày mai","Bây giờ","Hôm qua"],
        correctAnswer: "Hôm nay"
      },
      {
        id: "act-vi-303-3",
        type: "multiple_choice",
        skill: "reading",
        question: "Dịch: 'Hôm nay là thứ Hai'",
        options: ["Today is Monday","Today is Friday","Tomorrow is Monday","Yesterday was Monday"],
        correctAnswer: "Today is Monday"
      },
      {
        id: "act-vi-303-4",
        type: "match_pairs",
        skill: "reading",
        question: "Ghép các cặp từ vựng với nghĩa tiếng Việt tương ứng",
        pairs: [{"left":"Thứ Hai","right":"Monday"},{"left":"Thứ Sáu","right":"Friday"},{"left":"Chủ Nhật","right":"Sunday"},{"left":"Hôm nay","right":"Today"}],
        correctAnswer: "all_matched"
      },
      {
        id: "act-vi-303-5",
        type: "audio_listen",
        skill: "listening",
        question: "Lắng nghe và chọn đáp án chính xác:",
        prompt: "Thứ Hai",
        options: ["Sunday","Monday","Saturday","Friday"],
        correctAnswer: "Sunday"
      }
    ]
  },
  {
    id: "lesson-vi-304",
    unitId: "unit-vi-3",
    title: "Thời Tiết Nắng Mưa (Thời tiết)",
    description: "Nói về thời tiết nắng đẹp, mưa rào hay gió mùa.",
    type: "standard",
    xp: 15,
    estimatedMinutes: 5,
    order: 4,
    status: "available",
    goals: [
      { id: "g1", description: "Nắm vững các từ vựng chủ đề Thời Tiết Nắng Mưa (Thời tiết)" },
      { id: "g2", description: "Luyện phát âm chuẩn và phản xạ câu qua các bài tập tương tác" }
    ],
    vocabulary: [
      { id: "v-vi-304-1", word: "Thời tiết", translation: "Weather", phonetic: "toy tyet" },
      { id: "v-vi-304-2", word: "Nắng", translation: "Sunny", phonetic: "nahng" },
      { id: "v-vi-304-3", word: "Mưa", translation: "Rainy", phonetic: "mu-uh" },
      { id: "v-vi-304-4", word: "Nóng", translation: "Hot", phonetic: "nohng" },
      { id: "v-vi-304-5", word: "Lạnh", translation: "Cold", phonetic: "lahnh" }
    ],
    phrases: [
      { id: "p-vi-304-1", text: "Hôm nay thời tiết rất đẹp và nắng ấm.", translation: "Today the weather is very nice and sunny." },
      { id: "p-vi-304-2", text: "Hôm nay trời đổ mưa to.", translation: "Today it is raining heavily." }
    ],
    activities: [
      {
        id: "act-vi-304-1",
        type: "multiple_choice",
        skill: "reading",
        question: "'Mưa' nghĩa là gì?",
        options: ["Rainy","Sunny","Snowy","Windy"],
        correctAnswer: "Rainy"
      },
      {
        id: "act-vi-304-2",
        type: "fill_blank",
        skill: "writing",
        question: "Điền từ: 'Hôm nay _____ rất đẹp.' (thời tiết)",
        prompt: "Điền từ: 'Hôm nay _____ rất đẹp.' (thời tiết)",
        options: ["thời tiết","nắng","mưa","lạnh"],
        correctAnswer: "thời tiết"
      },
      {
        id: "act-vi-304-3",
        type: "multiple_choice",
        skill: "reading",
        question: "Dịch: 'Trời rất nóng'",
        options: ["It is very hot","It is very cold","It is raining","It is nice"],
        correctAnswer: "It is very hot"
      },
      {
        id: "act-vi-304-4",
        type: "match_pairs",
        skill: "reading",
        question: "Ghép các cặp từ vựng với nghĩa tiếng Việt tương ứng",
        pairs: [{"left":"Thời tiết","right":"Weather"},{"left":"Nắng","right":"Sunny"},{"left":"Mưa","right":"Rainy"},{"left":"Nóng","right":"Hot"}],
        correctAnswer: "all_matched"
      },
      {
        id: "act-vi-304-5",
        type: "audio_listen",
        skill: "listening",
        question: "Lắng nghe và chọn đáp án chính xác:",
        prompt: "Thời tiết",
        options: ["Rainy","Sunny","Snowy","Windy"],
        correctAnswer: "Rainy"
      }
    ]
  },
  {
    id: "lesson-vi-305",
    unitId: "unit-vi-3",
    title: "AI Practice: Một Ngày Của Bạn Ở Sài Gòn",
    description: "Kể cho cô bạn Lan nghe về một ngày sinh hoạt, thói quen và thời tiết ở Sài Gòn.",
    type: "audio_ai",
    xp: 25,
    estimatedMinutes: 5,
    order: 5,
    heroImage: images.mascotWelcome,
    status: "available",
    goals: [
      { id: "g1", description: "Luyện phản xạ giao tiếp thực tế với AI Teacher Mai" },
      { id: "g2", description: "Vận dụng từ vựng trọng tâm vào ngữ cảnh hội thoại tự nhiên" }
    ],
    vocabulary: [
      { id: "v-ai-vi-3-1", word: "Mấy giờ", translation: "Mấy giờ" },
      { id: "v-ai-vi-3-2", word: "Thức dậy", translation: "Wake up" },
      { id: "v-ai-vi-3-3", word: "Thời tiết", translation: "Weather" },
      { id: "v-ai-vi-3-4", word: "Bánh mì", translation: "Vietnamese baguette (Banh Mi)" },
      { id: "v-ai-vi-3-5", word: "Cà phê", translation: "Coffee" }
    ],
    phrases: [],
    activities: [],
    aiTeacherPrompt: {
      scenario: "Quán cà phê bệt công viên 30/4 Sài Gòn rợp bóng cây",
      systemPrompt: "You are Mai, a warm, human, and energetic Vietnamese teacher. Speak mostly in English for clear guidance. Introduce Vietnamese words slowly: say the word once, give the English translation, and invite the student to repeat after you. Keep every reply strictly to 1 or 2 conversational sentences with friendly contractions (I'm, let's, that's). Listen closely to the student, praise correct pronunciation, and gently model errors again: 'So close! Try saying —'. Stay strictly on lesson words: Mấy giờ, Thức dậy, Thời tiết, Bánh mì, Cà phê. Never switch topics.",
      initialGreeting: "Sài Gòn nắng đẹp quá bạn ơi! Sáng nay bạn dậy lúc mấy giờ? Ăn sáng gì chưa?",
      targetVocabulary: ["Mấy giờ","Thức dậy","Thời tiết","Bánh mì","Cà phê"],
      suggestedResponses: ["Sáng nay tôi dậy lúc 7 giờ.","Tôi vừa ăn một ổ bánh mì rất ngon!","Thời tiết Sài Gòn nhiều nắng quá!"],
      difficulty: "beginner"
    }
  },
  {
    id: "lesson-vi-401",
    unitId: "unit-vi-4",
    title: "Vào Quán Ăn & Tiệm Cà Phê",
    description: "Gọi phục vụ, lấy bàn và xin thực đơn món.",
    type: "standard",
    xp: 15,
    estimatedMinutes: 5,
    order: 1,
    status: "available",
    goals: [
      { id: "g1", description: "Nắm vững các từ vựng chủ đề Vào Quán Ăn & Tiệm Cà Phê" },
      { id: "g2", description: "Luyện phát âm chuẩn và phản xạ câu qua các bài tập tương tác" }
    ],
    vocabulary: [
      { id: "v-vi-401-1", word: "Em ơi / Anh ơi", translation: "Excuse me (calling waiter)", phonetic: "ehm oy / ahnh oy" },
      { id: "v-vi-401-2", word: "Thực đơn", translation: "Menu", phonetic: "tuck duhn" },
      { id: "v-vi-401-3", word: "Gọi món", translation: "To order food", phonetic: "goy mohn" },
      { id: "v-vi-401-4", word: "Trà đá", translation: "Iced tea", phonetic: "chah dah" },
      { id: "v-vi-401-5", word: "Cà phê", translation: "Coffee", phonetic: "kah feh" }
    ],
    phrases: [
      { id: "p-vi-401-1", text: "Em ơi, cho anh/chị xin thực đơn!", translation: "Excuse me, may I see the menu, please!" },
      { id: "p-vi-401-2", text: "Cho một ly trà đá nhé.", translation: "Give me an iced tea, please." }
    ],
    activities: [
      {
        id: "act-vi-401-1",
        type: "multiple_choice",
        skill: "reading",
        question: "Cách gọi người phục vụ lịch sự và tự nhiên nhất ở quán ăn Việt Nam là gì?",
        options: ["Em ơi / Anh ơi / Chị ơi","Bác ơi","Bạn ơi","Xin lỗi"],
        correctAnswer: "Em ơi / Anh ơi / Chị ơi"
      },
      {
        id: "act-vi-401-2",
        type: "fill_blank",
        skill: "writing",
        question: "Điền từ: 'Em ơi, cho anh _____ món.' (gọi)",
        prompt: "Điền từ: 'Em ơi, cho anh _____ món.' (gọi)",
        options: ["gọi","uống","ăn","ngủ"],
        correctAnswer: "gọi"
      },
      {
        id: "act-vi-401-3",
        type: "multiple_choice",
        skill: "reading",
        question: "Dịch: 'Cho tôi xin thực đơn'",
        options: ["Please give me the menu","Please give me iced tea","Check please","Goodbye"],
        correctAnswer: "Please give me the menu"
      },
      {
        id: "act-vi-401-4",
        type: "match_pairs",
        skill: "reading",
        question: "Ghép các cặp từ vựng với nghĩa tiếng Việt tương ứng",
        pairs: [{"left":"Em ơi / Anh ơi","right":"Excuse me (calling waiter)"},{"left":"Thực đơn","right":"Menu"},{"left":"Gọi món","right":"To order food"},{"left":"Trà đá","right":"Iced tea"}],
        correctAnswer: "all_matched"
      },
      {
        id: "act-vi-401-5",
        type: "audio_listen",
        skill: "listening",
        question: "Lắng nghe và chọn đáp án chính xác:",
        prompt: "Em ơi / Anh ơi",
        options: ["Em ơi / Anh ơi / Chị ơi","Bác ơi","Bạn ơi","Xin lỗi"],
        correctAnswer: "Em ơi / Anh ơi / Chị ơi"
      }
    ]
  },
  {
    id: "lesson-vi-402",
    unitId: "unit-vi-4",
    title: "Gọi Phở & Cà Phê Sữa Đá (Phở & Bánh Mì)",
    description: "Gọi phở bò, bánh mì kẹp thịt và cà phê sữa đá.",
    type: "standard",
    xp: 15,
    estimatedMinutes: 5,
    order: 2,
    status: "available",
    goals: [
      { id: "g1", description: "Nắm vững các từ vựng chủ đề Gọi Phở & Cà Phê Sữa Đá (Phở & Bánh Mì)" },
      { id: "g2", description: "Luyện phát âm chuẩn và phản xạ câu qua các bài tập tương tác" }
    ],
    vocabulary: [
      { id: "v-vi-402-1", word: "Phở bò", translation: "Beef noodle soup (Pho)", phonetic: "fuh boh" },
      { id: "v-vi-402-2", word: "Bánh mì", translation: "Vietnamese baguette (Banh Mi)", phonetic: "bahnh mee" },
      { id: "v-vi-402-3", word: "Cà phê sữa đá", translation: "Iced milk coffee", phonetic: "kah feh su-uh dah" },
      { id: "v-vi-402-4", word: "Ngon quá", translation: "Very delicious", phonetic: "ngohn kwah" },
      { id: "v-vi-402-5", word: "Không cay", translation: "Not spicy", phonetic: "khohng kye" }
    ],
    phrases: [
      { id: "p-vi-402-1", text: "Cho em một tô phở bò và một ly cà phê sữa đá!", translation: "Give me a bowl of beef Pho and an iced milk coffee!" },
      { id: "p-vi-402-2", text: "Phở ở đây ngon quá!", translation: "The Pho here is so delicious!" }
    ],
    activities: [
      {
        id: "act-vi-402-1",
        type: "multiple_choice",
        skill: "reading",
        question: "'Ngon quá' nghĩa là gì?",
        options: ["Very delicious","Too spicy","Too hot","Too expensive"],
        correctAnswer: "Very delicious"
      },
      {
        id: "act-vi-402-2",
        type: "fill_blank",
        skill: "writing",
        question: "Điền từ: 'Tô phở này _____ quá!' (ngon)",
        prompt: "Điền từ: 'Tô phở này _____ quá!' (ngon)",
        options: ["ngon","cay","đắt","lạnh"],
        correctAnswer: "ngon"
      },
      {
        id: "act-vi-402-3",
        type: "multiple_choice",
        skill: "reading",
        question: "Dịch: 'Cà phê sữa đá'",
        options: ["Iced milk coffee","Black coffee","Hot tea","Cold water"],
        correctAnswer: "Iced milk coffee"
      },
      {
        id: "act-vi-402-4",
        type: "match_pairs",
        skill: "reading",
        question: "Ghép các cặp từ vựng với nghĩa tiếng Việt tương ứng",
        pairs: [{"left":"Phở bò","right":"Beef noodle soup (Pho)"},{"left":"Bánh mì","right":"Vietnamese baguette (Banh Mi)"},{"left":"Cà phê sữa đá","right":"Iced milk coffee"},{"left":"Ngon quá","right":"Very delicious"}],
        correctAnswer: "all_matched"
      },
      {
        id: "act-vi-402-5",
        type: "audio_listen",
        skill: "listening",
        question: "Lắng nghe và chọn đáp án chính xác:",
        prompt: "Phở bò",
        options: ["Very delicious","Too spicy","Too hot","Too expensive"],
        correctAnswer: "Very delicious"
      }
    ]
  },
  {
    id: "lesson-vi-403",
    unitId: "unit-vi-4",
    title: "Văn Hóa Ẩm Thực Đường Phố (Một, Hai, Ba, Dô!)",
    description: "Không khí quán xá vỉa hè và văn hóa cụng ly.",
    type: "standard",
    xp: 15,
    estimatedMinutes: 5,
    order: 3,
    status: "available",
    goals: [
      { id: "g1", description: "Nắm vững các từ vựng chủ đề Văn Hóa Ẩm Thực Đường Phố (Một, Hai, Ba, Dô!)" },
      { id: "g2", description: "Luyện phát âm chuẩn và phản xạ câu qua các bài tập tương tác" }
    ],
    vocabulary: [
      { id: "v-vi-403-1", word: "Dô!", translation: "Cheers! / Drink!", phonetic: "zoh" },
      { id: "v-vi-403-2", word: "Chúc ngon miệng", translation: "Enjoy your meal", phonetic: "chook ngohn myeng" },
      { id: "v-vi-403-3", word: "Đói bụng", translation: "Hungry", phonetic: "doy boong" },
      { id: "v-vi-403-4", word: "No rồi", translation: "Full (not hungry)", phonetic: "noh roy" },
      { id: "v-vi-403-5", word: "Món ăn", translation: "Dish / Food", phonetic: "mohn ahn" }
    ],
    phrases: [
      { id: "p-vi-403-1", text: "Một, hai, ba, dô!", translation: "One, two, three, cheers!" },
      { id: "p-vi-403-2", text: "Tôi ăn no căng bụng rồi, cảm ơn bạn!", translation: "I am completely full, thank you!" }
    ],
    activities: [
      {
        id: "act-vi-403-1",
        type: "multiple_choice",
        skill: "reading",
        question: "Người Việt Nam hô to câu gì khi cùng nâng ly chúc mừng?",
        options: ["Một, hai, ba, dô!","Cảm ơn!","Xin chào!","Tạm biệt!"],
        correctAnswer: "Một, hai, ba, dô!"
      },
      {
        id: "act-vi-403-2",
        type: "fill_blank",
        skill: "writing",
        question: "Điền từ: 'Tôi ăn _____ rồi.' (no)",
        prompt: "Điền từ: 'Tôi ăn _____ rồi.' (no)",
        options: ["no","đói","ngon","cay"],
        correctAnswer: "no"
      },
      {
        id: "act-vi-403-3",
        type: "multiple_choice",
        skill: "reading",
        question: "Dịch: 'No rồi'",
        options: ["Full (eaten enough)","Hungry","Thirsty","Tired"],
        correctAnswer: "Full (eaten enough)"
      },
      {
        id: "act-vi-403-4",
        type: "match_pairs",
        skill: "reading",
        question: "Ghép các cặp từ vựng với nghĩa tiếng Việt tương ứng",
        pairs: [{"left":"Dô!","right":"Cheers! / Drink!"},{"left":"Chúc ngon miệng","right":"Enjoy your meal"},{"left":"Đói bụng","right":"Hungry"},{"left":"No rồi","right":"Full (not hungry)"}],
        correctAnswer: "all_matched"
      },
      {
        id: "act-vi-403-5",
        type: "audio_listen",
        skill: "listening",
        question: "Lắng nghe và chọn đáp án chính xác:",
        prompt: "Dô!",
        options: ["Một, hai, ba, dô!","Cảm ơn!","Xin chào!","Tạm biệt!"],
        correctAnswer: "Một, hai, ba, dô!"
      }
    ]
  },
  {
    id: "lesson-vi-404",
    unitId: "unit-vi-4",
    title: "Tính Tiền & Thanh Toán (Tính tiền em ơi!)",
    description: "Xin hóa đơn và trả tiền Việt Nam Đồng (VND).",
    type: "standard",
    xp: 15,
    estimatedMinutes: 5,
    order: 4,
    status: "available",
    goals: [
      { id: "g1", description: "Nắm vững các từ vựng chủ đề Tính Tiền & Thanh Toán (Tính tiền em ơi!)" },
      { id: "g2", description: "Luyện phát âm chuẩn và phản xạ câu qua các bài tập tương tác" }
    ],
    vocabulary: [
      { id: "v-vi-404-1", word: "Tính tiền", translation: "Check please / Settle bill", phonetic: "teenh tyen" },
      { id: "v-vi-404-2", word: "Bao nhiêu tiền?", translation: "How much is it?", phonetic: "bow nyew tyen" },
      { id: "v-vi-404-3", word: "Đồng (VND)", translation: "Vietnamese Dong", phonetic: "dohng" },
      { id: "v-vi-404-4", word: "Quẹt thẻ", translation: "Swipe bank card", phonetic: "kwet theh" },
      { id: "v-vi-404-5", word: "Tiền mặt", translation: "Cash", phonetic: "tyen maht" }
    ],
    phrases: [
      { id: "p-vi-404-1", text: "Em ơi, tính tiền giúp anh/chị!", translation: "Check please, settle the bill!" },
      { id: "p-vi-404-2", text: "Tất cả hết bao nhiêu tiền vậy em?", translation: "How much is it in total?" }
    ],
    activities: [
      {
        id: "act-vi-404-1",
        type: "multiple_choice",
        skill: "reading",
        question: "Câu nói phổ biến để gọi thanh toán tiền ở quán ăn là:",
        options: ["Em ơi, tính tiền!","Em ơi, xin chào!","Một, hai, ba, dô!","Cảm ơn em!"],
        correctAnswer: "Em ơi, tính tiền!"
      },
      {
        id: "act-vi-404-2",
        type: "fill_blank",
        skill: "writing",
        question: "Điền từ: 'Em ơi, _____ tiền giúp anh!'",
        prompt: "Điền từ: 'Em ơi, _____ tiền giúp anh!'",
        options: ["tính","trả","mua","uống"],
        correctAnswer: "tính"
      },
      {
        id: "act-vi-404-3",
        type: "multiple_choice",
        skill: "reading",
        question: "Dịch: 'Bao nhiêu tiền?'",
        options: ["How much is it?","Where is it?","Who is it?","What time is it?"],
        correctAnswer: "How much is it?"
      },
      {
        id: "act-vi-404-4",
        type: "match_pairs",
        skill: "reading",
        question: "Ghép các cặp từ vựng với nghĩa tiếng Việt tương ứng",
        pairs: [{"left":"Tính tiền","right":"Check please / Settle bill"},{"left":"Bao nhiêu tiền?","right":"How much is it?"},{"left":"Đồng (VND)","right":"Vietnamese Dong"},{"left":"Quẹt thẻ","right":"Swipe bank card"}],
        correctAnswer: "all_matched"
      },
      {
        id: "act-vi-404-5",
        type: "audio_listen",
        skill: "listening",
        question: "Lắng nghe và chọn đáp án chính xác:",
        prompt: "Tính tiền",
        options: ["Em ơi, tính tiền!","Em ơi, xin chào!","Một, hai, ba, dô!","Cảm ơn em!"],
        correctAnswer: "Em ơi, tính tiền!"
      }
    ]
  },
  {
    id: "lesson-vi-405",
    unitId: "unit-vi-4",
    title: "AI Practice: Gọi Món Quán Phở Gia Truyền",
    description: "Thực hành gọi tô phở tái nạm, quẩy giòn và tính tiền cùng bác chủ quán Ba.",
    type: "audio_ai",
    xp: 25,
    estimatedMinutes: 5,
    order: 5,
    heroImage: images.mascotWelcome,
    status: "available",
    goals: [
      { id: "g1", description: "Luyện phản xạ giao tiếp thực tế với AI Teacher Mai" },
      { id: "g2", description: "Vận dụng từ vựng trọng tâm vào ngữ cảnh hội thoại tự nhiên" }
    ],
    vocabulary: [
      { id: "v-ai-vi-4-1", word: "Phở bò", translation: "Beef noodle soup (Pho)" },
      { id: "v-ai-vi-4-2", word: "Bánh mì", translation: "Vietnamese baguette (Banh Mi)" },
      { id: "v-ai-vi-4-3", word: "Ngon quá", translation: "Very delicious" },
      { id: "v-ai-vi-4-4", word: "Tính tiền", translation: "Check please / Settle bill" },
      { id: "v-ai-vi-4-5", word: "Bao nhiêu tiền", translation: "Bao nhiêu tiền" }
    ],
    phrases: [],
    activities: [],
    aiTeacherPrompt: {
      scenario: "Quán phở gia truyền thơm lừng góc phố Hàng Trống Hà Nội",
      systemPrompt: "You are Mai, a warm, human, and energetic Vietnamese teacher. Speak mostly in English for clear guidance. Introduce Vietnamese words slowly: say the word once, give the English translation, and invite the student to repeat after you. Keep every reply strictly to 1 or 2 conversational sentences with friendly contractions (I'm, let's, that's). Listen closely to the student, praise correct pronunciation, and gently model errors again: 'So close! Try saying —'. Stay strictly on lesson words: Phở bò, Bánh mì, Ngon quá, Tính tiền, Bao nhiêu tiền. Never switch topics.",
      initialGreeting: "Dạ mời anh/chị vào ăn phở! Quán em có phở bò tái nạm đặc biệt, anh/chị dùng gì ạ?",
      targetVocabulary: ["Phở bò","Bánh mì","Ngon quá","Tính tiền","Bao nhiêu tiền"],
      suggestedResponses: ["Cho em một tô phở bò tái và hai cái quẩy!","Phở thơm và ngon quá bác Ba ơi!","Bác ơi, tính tiền giúp em!"],
      difficulty: "beginner"
    }
  },
  {
    id: "lesson-vi-501",
    unitId: "unit-vi-5",
    title: "Ở Đâu Vậy? (Hỏi đường phố)",
    description: "Hỏi đường và chỉ dẫn rẽ trái, rẽ phải, đi thẳng.",
    type: "standard",
    xp: 15,
    estimatedMinutes: 5,
    order: 1,
    status: "available",
    goals: [
      { id: "g1", description: "Nắm vững các từ vựng chủ đề Ở Đâu Vậy? (Hỏi đường phố)" },
      { id: "g2", description: "Luyện phát âm chuẩn và phản xạ câu qua các bài tập tương tác" }
    ],
    vocabulary: [
      { id: "v-vi-501-1", word: "Ở đâu?", translation: "Where is it?", phonetic: "uh dow" },
      { id: "v-vi-501-2", word: "Ở đây / Ở kia", translation: "Here / Over there", phonetic: "uh dye / uh kee-ah" },
      { id: "v-vi-501-3", word: "Bên phải", translation: "Right side", phonetic: "ben fye" },
      { id: "v-vi-501-4", word: "Bên trái", translation: "Left side", phonetic: "ben try" },
      { id: "v-vi-501-5", word: "Đi thẳng", translation: "Go straight", phonetic: "dee thahng" }
    ],
    phrases: [
      { id: "p-vi-501-1", text: "Bác ơi, chợ Bến Thành ở đâu ạ?", translation: "Excuse me, where is Ben Thanh market?" },
      { id: "p-vi-501-2", text: "Đi thẳng rồi rẽ phải là tới nhé.", translation: "Go straight and turn right, you will arrive." }
    ],
    activities: [
      {
        id: "act-vi-501-1",
        type: "multiple_choice",
        skill: "reading",
        question: "'Bên phải' tiếng Anh là gì?",
        options: ["Right side","Left side","Straight","Behind"],
        correctAnswer: "Right side"
      },
      {
        id: "act-vi-501-2",
        type: "fill_blank",
        skill: "writing",
        question: "Điền từ: 'Đi _____ rồi rẽ trái.' (thẳng)",
        prompt: "Điền từ: 'Đi _____ rồi rẽ trái.' (thẳng)",
        options: ["thẳng","phải","trái","kia"],
        correctAnswer: "thẳng"
      },
      {
        id: "act-vi-501-3",
        type: "multiple_choice",
        skill: "reading",
        question: "Dịch: 'Nhà vệ sinh ở đâu?'",
        options: ["Where is the restroom?","Where is the station?","Where is the hotel?","Where is the airport?"],
        correctAnswer: "Where is the restroom?"
      },
      {
        id: "act-vi-501-4",
        type: "match_pairs",
        skill: "reading",
        question: "Ghép các cặp từ vựng với nghĩa tiếng Việt tương ứng",
        pairs: [{"left":"Ở đâu?","right":"Where is it?"},{"left":"Ở đây / Ở kia","right":"Here / Over there"},{"left":"Bên phải","right":"Right side"},{"left":"Bên trái","right":"Left side"}],
        correctAnswer: "all_matched"
      },
      {
        id: "act-vi-501-5",
        type: "audio_listen",
        skill: "listening",
        question: "Lắng nghe và chọn đáp án chính xác:",
        prompt: "Ở đâu?",
        options: ["Right side","Left side","Straight","Behind"],
        correctAnswer: "Right side"
      }
    ]
  },
  {
    id: "lesson-vi-502",
    unitId: "unit-vi-5",
    title: "Bắt Xe Grab & Xe Máy (Xe ôm & Xe buýt)",
    description: "Đi xe ôm công nghệ, bắt taxi và xe buýt.",
    type: "standard",
    xp: 15,
    estimatedMinutes: 5,
    order: 2,
    status: "available",
    goals: [
      { id: "g1", description: "Nắm vững các từ vựng chủ đề Bắt Xe Grab & Xe Máy (Xe ôm & Xe buýt)" },
      { id: "g2", description: "Luyện phát âm chuẩn và phản xạ câu qua các bài tập tương tác" }
    ],
    vocabulary: [
      { id: "v-vi-502-1", word: "Xe máy", translation: "Motorbike", phonetic: "seh mye" },
      { id: "v-vi-502-2", word: "Xe ôm / Grab", translation: "Motorbike taxi / Grab", phonetic: "seh ohm" },
      { id: "v-vi-502-3", word: "Xe buýt", translation: "Bus", phonetic: "seh bweet" },
      { id: "v-vi-502-4", word: "Bến xe", translation: "Bus station", phonetic: "ben seh" },
      { id: "v-vi-502-5", word: "Ga tàu", translation: "Train station", phonetic: "gah tow" }
    ],
    phrases: [
      { id: "p-vi-502-1", text: "Bác chở cháu ra sân bay Tân Sơn Nhất nhé.", translation: "Please take me to Tan Son Nhat airport." },
      { id: "p-vi-502-2", text: "Đi xe máy ở Việt Nam rất thú vị!", translation: "Riding a motorbike in Vietnam is very exciting!" }
    ],
    activities: [
      {
        id: "act-vi-502-1",
        type: "multiple_choice",
        skill: "reading",
        question: "Phương tiện giao thông phổ biến nhất ở Việt Nam là gì?",
        options: ["Xe máy","Tàu điện ngầm","Máy bay","Tàu thủy"],
        correctAnswer: "Xe máy"
      },
      {
        id: "act-vi-502-2",
        type: "fill_blank",
        skill: "writing",
        question: "Điền từ: 'Chở tôi ra bến _____.' (xe)",
        prompt: "Điền từ: 'Chở tôi ra bến _____.' (xe)",
        options: ["xe","máy","tàu","bay"],
        correctAnswer: "xe"
      },
      {
        id: "act-vi-502-3",
        type: "multiple_choice",
        skill: "reading",
        question: "Dịch: 'Ga tàu hỏa'",
        options: ["Train station","Airport","Bus station","Hotel"],
        correctAnswer: "Train station"
      },
      {
        id: "act-vi-502-4",
        type: "match_pairs",
        skill: "reading",
        question: "Ghép các cặp từ vựng với nghĩa tiếng Việt tương ứng",
        pairs: [{"left":"Xe máy","right":"Motorbike"},{"left":"Xe ôm / Grab","right":"Motorbike taxi / Grab"},{"left":"Xe buýt","right":"Bus"},{"left":"Bến xe","right":"Bus station"}],
        correctAnswer: "all_matched"
      },
      {
        id: "act-vi-502-5",
        type: "audio_listen",
        skill: "listening",
        question: "Lắng nghe và chọn đáp án chính xác:",
        prompt: "Xe máy",
        options: ["Xe máy","Tàu điện ngầm","Máy bay","Tàu thủy"],
        correctAnswer: "Xe máy"
      }
    ]
  },
  {
    id: "lesson-vi-503",
    unitId: "unit-vi-5",
    title: "Nhận Phòng Khách Sạn (Check-in khách sạn)",
    description: "Đặt phòng trước và nhận chìa khóa phòng.",
    type: "standard",
    xp: 15,
    estimatedMinutes: 5,
    order: 3,
    status: "available",
    goals: [
      { id: "g1", description: "Nắm vững các từ vựng chủ đề Nhận Phòng Khách Sạn (Check-in khách sạn)" },
      { id: "g2", description: "Luyện phát âm chuẩn và phản xạ câu qua các bài tập tương tác" }
    ],
    vocabulary: [
      { id: "v-vi-503-1", word: "Khách sạn", translation: "Hotel", phonetic: "khahk sahn" },
      { id: "v-vi-503-2", word: "Đặt phòng", translation: "To book a room", phonetic: "daht fohng" },
      { id: "v-vi-503-3", word: "Phòng", translation: "Room", phonetic: "fohng" },
      { id: "v-vi-503-4", word: "Chìa khóa", translation: "Key", phonetic: "cheeah khwah" },
      { id: "v-vi-503-5", word: "Mật khẩu WiFi", translation: "WiFi password", phonetic: "maht khoh" }
    ],
    phrases: [
      { id: "p-vi-503-1", text: "Tôi đã đặt phòng trước dưới tên Alex.", translation: "I booked a room under the name Alex." },
      { id: "p-vi-503-2", text: "Cho tôi xin mật khẩu WiFi phòng này với.", translation: "May I have the WiFi password for this room?" }
    ],
    activities: [
      {
        id: "act-vi-503-1",
        type: "multiple_choice",
        skill: "reading",
        question: "'Chìa khóa phòng' nghĩa là gì?",
        options: ["Room key","Room number","Hotel card","WiFi password"],
        correctAnswer: "Room key"
      },
      {
        id: "act-vi-503-2",
        type: "fill_blank",
        skill: "writing",
        question: "Điền từ: 'Cho tôi xin _____ phòng.' (chìa khóa)",
        prompt: "Điền từ: 'Cho tôi xin _____ phòng.' (chìa khóa)",
        options: ["chìa khóa","khách sạn","wifi","tên"],
        correctAnswer: "chìa khóa"
      },
      {
        id: "act-vi-503-3",
        type: "multiple_choice",
        skill: "reading",
        question: "Dịch: 'Đặt phòng trước'",
        options: ["Book room in advance","Check out","Cancel room","Pay room"],
        correctAnswer: "Book room in advance"
      },
      {
        id: "act-vi-503-4",
        type: "match_pairs",
        skill: "reading",
        question: "Ghép các cặp từ vựng với nghĩa tiếng Việt tương ứng",
        pairs: [{"left":"Khách sạn","right":"Hotel"},{"left":"Đặt phòng","right":"To book a room"},{"left":"Phòng","right":"Room"},{"left":"Chìa khóa","right":"Key"}],
        correctAnswer: "all_matched"
      },
      {
        id: "act-vi-503-5",
        type: "audio_listen",
        skill: "listening",
        question: "Lắng nghe và chọn đáp án chính xác:",
        prompt: "Khách sạn",
        options: ["Room key","Room number","Hotel card","WiFi password"],
        correctAnswer: "Room key"
      }
    ]
  },
  {
    id: "lesson-vi-504",
    unitId: "unit-vi-5",
    title: "Sân Bay Nội Bài & Tân Sơn Nhất (Sân bay)",
    description: "Thủ tục lên máy bay, hành lý và hộ chiếu.",
    type: "standard",
    xp: 15,
    estimatedMinutes: 5,
    order: 4,
    status: "available",
    goals: [
      { id: "g1", description: "Nắm vững các từ vựng chủ đề Sân Bay Nội Bài & Tân Sơn Nhất (Sân bay)" },
      { id: "g2", description: "Luyện phát âm chuẩn và phản xạ câu qua các bài tập tương tác" }
    ],
    vocabulary: [
      { id: "v-vi-504-1", word: "Sân bay", translation: "Airport", phonetic: "shahn bye" },
      { id: "v-vi-504-2", word: "Máy bay", translation: "Airplane", phonetic: "mye bye" },
      { id: "v-vi-504-3", word: "Hành lý", translation: "Luggage", phonetic: "hahnh lee" },
      { id: "v-vi-504-4", word: "Hộ chiếu", translation: "Passport", phonetic: "hoh cheew" },
      { id: "v-vi-504-5", word: "Vé máy bay", translation: "Flight ticket", phonetic: "veh mye bye" }
    ],
    phrases: [
      { id: "p-vi-504-1", text: "Làm ơn cho tôi kiểm tra hộ chiếu của bạn.", translation: "Please let me check your passport." },
      { id: "p-vi-504-2", text: "Chở tôi đến sân bay Nội Bài nhé.", translation: "Please take me to Noi Bai airport." }
    ],
    activities: [
      {
        id: "act-vi-504-1",
        type: "multiple_choice",
        skill: "reading",
        question: "'Hộ chiếu' là giấy tờ gì?",
        options: ["Passport","Boarding pass","Luggage","Wallet"],
        correctAnswer: "Passport"
      },
      {
        id: "act-vi-504-2",
        type: "fill_blank",
        skill: "writing",
        question: "Điền từ: 'Tôi đi ra sân _____.' (bay)",
        prompt: "Điền từ: 'Tôi đi ra sân _____.' (bay)",
        options: ["bay","máy","ga","xe"],
        correctAnswer: "bay"
      },
      {
        id: "act-vi-504-3",
        type: "multiple_choice",
        skill: "reading",
        question: "Dịch: 'Hành lý của tôi'",
        options: ["My luggage","My passport","My ticket","My bag"],
        correctAnswer: "My luggage"
      },
      {
        id: "act-vi-504-4",
        type: "match_pairs",
        skill: "reading",
        question: "Ghép các cặp từ vựng với nghĩa tiếng Việt tương ứng",
        pairs: [{"left":"Sân bay","right":"Airport"},{"left":"Máy bay","right":"Airplane"},{"left":"Hành lý","right":"Luggage"},{"left":"Hộ chiếu","right":"Passport"}],
        correctAnswer: "all_matched"
      },
      {
        id: "act-vi-504-5",
        type: "audio_listen",
        skill: "listening",
        question: "Lắng nghe và chọn đáp án chính xác:",
        prompt: "Sân bay",
        options: ["Passport","Boarding pass","Luggage","Wallet"],
        correctAnswer: "Passport"
      }
    ]
  },
  {
    id: "lesson-vi-505",
    unitId: "unit-vi-5",
    title: "AI Practice: Hỏi Đường Đi Phố Cổ & Hồ Gươm",
    description: "Thực hành hỏi bác tài xế Grab Hùng cách đi đến cầu Thê Húc và chợ Đồng Xuân.",
    type: "audio_ai",
    xp: 25,
    estimatedMinutes: 5,
    order: 5,
    heroImage: images.mascotWelcome,
    status: "available",
    goals: [
      { id: "g1", description: "Luyện phản xạ giao tiếp thực tế với AI Teacher Mai" },
      { id: "g2", description: "Vận dụng từ vựng trọng tâm vào ngữ cảnh hội thoại tự nhiên" }
    ],
    vocabulary: [
      { id: "v-ai-vi-5-1", word: "Ở đâu", translation: "Ở đâu" },
      { id: "v-ai-vi-5-2", word: "Đi thẳng", translation: "Go straight" },
      { id: "v-ai-vi-5-3", word: "Bên phải", translation: "Right side" },
      { id: "v-ai-vi-5-4", word: "Bên trái", translation: "Left side" },
      { id: "v-ai-vi-5-5", word: "Chợ", translation: "Chợ" }
    ],
    phrases: [],
    activities: [],
    aiTeacherPrompt: {
      scenario: "Bên cạnh Nhà Thờ Lớn Hà Nội nhộn nhịp",
      systemPrompt: "You are Mai, a warm, human, and energetic Vietnamese teacher. Speak mostly in English for clear guidance. Introduce Vietnamese words slowly: say the word once, give the English translation, and invite the student to repeat after you. Keep every reply strictly to 1 or 2 conversational sentences with friendly contractions (I'm, let's, that's). Listen closely to the student, praise correct pronunciation, and gently model errors again: 'So close! Try saying —'. Stay strictly on lesson words: Ở đâu, Đi thẳng, Bên phải, Bên trái, Chợ. Never switch topics.",
      initialGreeting: "Chào cháu! Cháu muốn đi đâu ở Hà Nội? Bác chỉ đường cho!",
      targetVocabulary: ["Ở đâu","Đi thẳng","Bên phải","Bên trái","Chợ"],
      suggestedResponses: ["Bác ơi, hồ Hoàn Kiếm ở đâu ạ?","Đi thẳng rồi rẽ phải đúng không bác?","Cảm ơn bác Hùng nhiều nha!"],
      difficulty: "beginner"
    }
  },
  {
    id: "lesson-vi-601",
    unitId: "unit-vi-6",
    title: "Mua Sắm Chợ Bến Thành (Bao nhiêu tiền?)",
    description: "Hỏi giá và mặc cả giá vui vẻ tại chợ truyền thống.",
    type: "standard",
    xp: 15,
    estimatedMinutes: 5,
    order: 1,
    status: "available",
    goals: [
      { id: "g1", description: "Nắm vững các từ vựng chủ đề Mua Sắm Chợ Bến Thành (Bao nhiêu tiền?)" },
      { id: "g2", description: "Luyện phát âm chuẩn và phản xạ câu qua các bài tập tương tác" }
    ],
    vocabulary: [
      { id: "v-vi-601-1", word: "Mua sắm", translation: "Shopping", phonetic: "moo-ah sahmp" },
      { id: "v-vi-601-2", word: "Cái này", translation: "This one", phonetic: "kye nye" },
      { id: "v-vi-601-3", word: "Đắt quá", translation: "Too expensive", phonetic: "daht kwah" },
      { id: "v-vi-601-4", word: "Bớt giá", translation: "Give a discount", phonetic: "buht zyah" },
      { id: "v-vi-601-5", word: "Tôi lấy cái này", translation: "I take this one", phonetic: "toy lye kye nye" }
    ],
    phrases: [
      { id: "p-vi-601-1", text: "Cái này bao nhiêu tiền vậy cô?", translation: "How much is this one, auntie?" },
      { id: "p-vi-601-2", text: "Đắt quá cô ơi, bớt cho con chút nha!", translation: "Too expensive auntie, give me a discount please!" }
    ],
    activities: [
      {
        id: "act-vi-601-1",
        type: "multiple_choice",
        skill: "reading",
        question: "Câu mặc cả thân mật khi đi chợ ở Việt Nam là gì?",
        options: ["Bớt cho con một chút nha cô!","Cảm ơn cô!","Xin chào cô!","Tạm biệt cô!"],
        correctAnswer: "Bớt cho con một chút nha cô!"
      },
      {
        id: "act-vi-601-2",
        type: "fill_blank",
        skill: "writing",
        question: "Điền từ: 'Cái này bao nhiêu _____ vậy?' (tiền)",
        prompt: "Điền từ: 'Cái này bao nhiêu _____ vậy?' (tiền)",
        options: ["tiền","đồng","giá","mua"],
        correctAnswer: "tiền"
      },
      {
        id: "act-vi-601-3",
        type: "multiple_choice",
        skill: "reading",
        question: "Dịch: 'Đắt quá'",
        options: ["Too expensive","Cheap","Delicious","Pretty"],
        correctAnswer: "Too expensive"
      },
      {
        id: "act-vi-601-4",
        type: "match_pairs",
        skill: "reading",
        question: "Ghép các cặp từ vựng với nghĩa tiếng Việt tương ứng",
        pairs: [{"left":"Mua sắm","right":"Shopping"},{"left":"Cái này","right":"This one"},{"left":"Đắt quá","right":"Too expensive"},{"left":"Bớt giá","right":"Give a discount"}],
        correctAnswer: "all_matched"
      },
      {
        id: "act-vi-601-5",
        type: "audio_listen",
        skill: "listening",
        question: "Lắng nghe và chọn đáp án chính xác:",
        prompt: "Mua sắm",
        options: ["Bớt cho con một chút nha cô!","Cảm ơn cô!","Xin chào cô!","Tạm biệt cô!"],
        correctAnswer: "Bớt cho con một chút nha cô!"
      }
    ]
  },
  {
    id: "lesson-vi-602",
    unitId: "unit-vi-6",
    title: "Hẹn Hò Đi Chơi Cuối Tuần (Đi cà phê nhé!)",
    description: "Rủ bạn bè đi cà phê bệt và dạo phố.",
    type: "standard",
    xp: 15,
    estimatedMinutes: 5,
    order: 2,
    status: "available",
    goals: [
      { id: "g1", description: "Nắm vững các từ vựng chủ đề Hẹn Hò Đi Chơi Cuối Tuần (Đi cà phê nhé!)" },
      { id: "g2", description: "Luyện phát âm chuẩn và phản xạ câu qua các bài tập tương tác" }
    ],
    vocabulary: [
      { id: "v-vi-602-1", word: "Cùng nhau", translation: "Together", phonetic: "koong nyow" },
      { id: "v-vi-602-2", word: "Đi chơi", translation: "Hang out / Go out", phonetic: "dee choy" },
      { id: "v-vi-602-3", word: "Cuối tuần", translation: "Weekend", phonetic: "koo-oy toon" },
      { id: "v-vi-602-4", word: "Rảnh không?", translation: "Are you free?", phonetic: "zahnh khohng" },
      { id: "v-vi-602-5", word: "Tuyệt vời", translation: "Great / Awesome", phonetic: "tooyet voy" }
    ],
    phrases: [
      { id: "p-vi-602-1", text: "Cuối tuần này bạn có rảnh không, tụi mình đi cà phê nhé?", translation: "Are you free this weekend, let's go for coffee together?" },
      { id: "p-vi-602-2", text: "Tuyệt vời, hẹn gặp lại cuối tuần nha!", translation: "Awesome, see you on the weekend!" }
    ],
    activities: [
      {
        id: "act-vi-602-1",
        type: "multiple_choice",
        skill: "reading",
        question: "'Tuyệt vời' nghĩa là gì?",
        options: ["Great / Awesome","Bad","Sad","Tired"],
        correctAnswer: "Great / Awesome"
      },
      {
        id: "act-vi-602-2",
        type: "fill_blank",
        skill: "writing",
        question: "Điền từ: 'Tụi mình _____ cà phê nhé!' (đi)",
        prompt: "Điền từ: 'Tụi mình _____ cà phê nhé!' (đi)",
        options: ["đi","ăn","ngủ","chào"],
        correctAnswer: "đi"
      },
      {
        id: "act-vi-602-3",
        type: "multiple_choice",
        skill: "reading",
        question: "Dịch: 'Đi chơi cùng nhau'",
        options: ["Hang out together","Go home","Sleep","Study"],
        correctAnswer: "Hang out together"
      },
      {
        id: "act-vi-602-4",
        type: "match_pairs",
        skill: "reading",
        question: "Ghép các cặp từ vựng với nghĩa tiếng Việt tương ứng",
        pairs: [{"left":"Cùng nhau","right":"Together"},{"left":"Đi chơi","right":"Hang out / Go out"},{"left":"Cuối tuần","right":"Weekend"},{"left":"Rảnh không?","right":"Are you free?"}],
        correctAnswer: "all_matched"
      },
      {
        id: "act-vi-602-5",
        type: "audio_listen",
        skill: "listening",
        question: "Lắng nghe và chọn đáp án chính xác:",
        prompt: "Cùng nhau",
        options: ["Great / Awesome","Bad","Sad","Tired"],
        correctAnswer: "Great / Awesome"
      }
    ]
  },
  {
    id: "lesson-vi-603",
    unitId: "unit-vi-6",
    title: "Nói Về Công Việc & Nghề Nghiệp (Nghề nghiệp)",
    description: "Giới thiệu nghề giáo viên, sinh viên, lập trình viên.",
    type: "standard",
    xp: 15,
    estimatedMinutes: 5,
    order: 3,
    status: "available",
    goals: [
      { id: "g1", description: "Nắm vững các từ vựng chủ đề Nói Về Công Việc & Nghề Nghiệp (Nghề nghiệp)" },
      { id: "g2", description: "Luyện phát âm chuẩn và phản xạ câu qua các bài tập tương tác" }
    ],
    vocabulary: [
      { id: "v-vi-603-1", word: "Công việc", translation: "Job / Work", phonetic: "kohng vyek" },
      { id: "v-vi-603-2", word: "Giáo viên", translation: "Teacher", phonetic: "zyow vyen" },
      { id: "v-vi-603-3", word: "Sinh viên", translation: "Student", phonetic: "seenh vyen" },
      { id: "v-vi-603-4", word: "Bác sĩ", translation: "Doctor", phonetic: "bahk see" },
      { id: "v-vi-603-5", word: "Công ty", translation: "Company", phonetic: "kohng tee" }
    ],
    phrases: [
      { id: "p-vi-603-1", text: "Bạn làm nghề gì thế?", translation: "What job do you do?" },
      { id: "p-vi-603-2", text: "Tôi là sinh viên, tôi đang học tiếng Việt.", translation: "I am a student, I am learning Vietnamese." }
    ],
    activities: [
      {
        id: "act-vi-603-1",
        type: "multiple_choice",
        skill: "reading",
        question: "'Sinh viên' nghĩa là gì?",
        options: ["Student (university)","Teacher","Doctor","Engineer"],
        correctAnswer: "Student (university)"
      },
      {
        id: "act-vi-603-2",
        type: "fill_blank",
        skill: "writing",
        question: "Điền từ: 'Tôi là _____.' (sinh viên)",
        prompt: "Điền từ: 'Tôi là _____.' (sinh viên)",
        options: ["sinh viên","công việc","công ty","bạn bè"],
        correctAnswer: "sinh viên"
      },
      {
        id: "act-vi-603-3",
        type: "multiple_choice",
        skill: "reading",
        question: "Dịch: 'Tôi là giáo viên'",
        options: ["I am a teacher","I am a student","I am a doctor","I go to work"],
        correctAnswer: "I am a teacher"
      },
      {
        id: "act-vi-603-4",
        type: "match_pairs",
        skill: "reading",
        question: "Ghép các cặp từ vựng với nghĩa tiếng Việt tương ứng",
        pairs: [{"left":"Công việc","right":"Job / Work"},{"left":"Giáo viên","right":"Teacher"},{"left":"Sinh viên","right":"Student"},{"left":"Bác sĩ","right":"Doctor"}],
        correctAnswer: "all_matched"
      },
      {
        id: "act-vi-603-5",
        type: "audio_listen",
        skill: "listening",
        question: "Lắng nghe và chọn đáp án chính xác:",
        prompt: "Công việc",
        options: ["Student (university)","Teacher","Doctor","Engineer"],
        correctAnswer: "Student (university)"
      }
    ]
  },
  {
    id: "lesson-vi-604",
    unitId: "unit-vi-6",
    title: "Tình Huống Khẩn Cấp (Cứu tôi với!)",
    description: "Kêu cứu và tìm bệnh viện, công an 113.",
    type: "standard",
    xp: 15,
    estimatedMinutes: 5,
    order: 4,
    status: "available",
    goals: [
      { id: "g1", description: "Nắm vững các từ vựng chủ đề Tình Huống Khẩn Cấp (Cứu tôi với!)" },
      { id: "g2", description: "Luyện phát âm chuẩn và phản xạ câu qua các bài tập tương tác" }
    ],
    vocabulary: [
      { id: "v-vi-604-1", word: "Cứu tôi với!", translation: "Help me!", phonetic: "koo toy voy" },
      { id: "v-vi-604-2", word: "Bệnh viện", translation: "Hospital", phonetic: "benh vyen" },
      { id: "v-vi-604-3", word: "Công an / Cảnh sát", translation: "Police", phonetic: "kohng ahn" },
      { id: "v-vi-604-4", word: "Bị ốm", translation: "Sick / Ill", phonetic: "bee ohm" },
      { id: "v-vi-604-5", word: "Hiệu thuốc", translation: "Pharmacy", phonetic: "hyew thwohk" }
    ],
    phrases: [
      { id: "p-vi-604-1", text: "Cứu tôi với! Tôi thấy không khỏe trong người.", translation: "Help me! I am feeling unwell." },
      { id: "p-vi-604-2", text: "Gần đây có bệnh viện nào không ạ?", translation: "Is there any hospital nearby?" }
    ],
    activities: [
      {
        id: "act-vi-604-1",
        type: "multiple_choice",
        skill: "reading",
        question: "Số điện thoại cảnh sát khẩn cấp ở Việt Nam là gì?",
        options: ["113","114","115","911"],
        correctAnswer: "113"
      },
      {
        id: "act-vi-604-2",
        type: "fill_blank",
        skill: "writing",
        question: "Điền từ: 'Cứu tôi _____!' (với)",
        prompt: "Điền từ: 'Cứu tôi _____!' (với)",
        options: ["với","cho","đi","lại"],
        correctAnswer: "với"
      },
      {
        id: "act-vi-604-3",
        type: "multiple_choice",
        skill: "reading",
        question: "Dịch: 'Bệnh viện ở đâu?'",
        options: ["Where is the hospital?","Where is the police station?","Where is the pharmacy?","Where is the school?"],
        correctAnswer: "Where is the hospital?"
      },
      {
        id: "act-vi-604-4",
        type: "match_pairs",
        skill: "reading",
        question: "Ghép các cặp từ vựng với nghĩa tiếng Việt tương ứng",
        pairs: [{"left":"Cứu tôi với!","right":"Help me!"},{"left":"Bệnh viện","right":"Hospital"},{"left":"Công an / Cảnh sát","right":"Police"},{"left":"Bị ốm","right":"Sick / Ill"}],
        correctAnswer: "all_matched"
      },
      {
        id: "act-vi-604-5",
        type: "audio_listen",
        skill: "listening",
        question: "Lắng nghe và chọn đáp án chính xác:",
        prompt: "Cứu tôi với!",
        options: ["113","114","115","911"],
        correctAnswer: "113"
      }
    ]
  },
  {
    id: "lesson-vi-605",
    unitId: "unit-vi-6",
    title: "AI Practice: Trò Chuyện Tự Do Tốt Nghiệp Khóa Tiếng Việt",
    description: "Trò chuyện tự do cùng cô giáo Thảo ăn mừng bạn tốt nghiệp trọn vẹn 6 Unit tiếng Việt!",
    type: "audio_ai",
    xp: 25,
    estimatedMinutes: 5,
    order: 5,
    heroImage: images.mascotWelcome,
    status: "available",
    goals: [
      { id: "g1", description: "Luyện phản xạ giao tiếp thực tế với AI Teacher Mai" },
      { id: "g2", description: "Vận dụng từ vựng trọng tâm vào ngữ cảnh hội thoại tự nhiên" }
    ],
    vocabulary: [
      { id: "v-ai-vi-6-1", word: "Chúc mừng", translation: "Congratulations" },
      { id: "v-ai-vi-6-2", word: "Việt Nam", translation: "Vietnam" },
      { id: "v-ai-vi-6-3", word: "Phở", translation: "Phở" },
      { id: "v-ai-vi-6-4", word: "Cà phê", translation: "Coffee" },
      { id: "v-ai-vi-6-5", word: "Cảm ơn", translation: "Thank you" }
    ],
    phrases: [],
    activities: [],
    aiTeacherPrompt: {
      scenario: "Bên bờ sông Sài Gòn gió thổi mát rượi ngắm Landmark 81",
      systemPrompt: "You are Mai, a warm, human, and energetic Vietnamese teacher. Speak mostly in English for clear guidance. Introduce Vietnamese words slowly: say the word once, give the English translation, and invite the student to repeat after you. Keep every reply strictly to 1 or 2 conversational sentences with friendly contractions (I'm, let's, that's). Listen closely to the student, praise correct pronunciation, and gently model errors again: 'So close! Try saying —'. Stay strictly on lesson words: Chúc mừng, Việt Nam, Phở, Cà phê, Cảm ơn. Never switch topics.",
      initialGreeting: "Chúc mừng bạn! Bạn đã hoàn thành xuất sắc 6 Unit tiếng Việt rồi. Hôm nay chúng mình cùng trò chuyện tự do nhé!",
      targetVocabulary: ["Chúc mừng","Việt Nam","Phở","Cà phê","Cảm ơn"],
      suggestedResponses: ["Dạ cảm ơn cô Thảo nhiều lắm!","Tôi rất yêu đất nước và con người Việt Nam.","Tiếng Việt rất thú vị và giàu đẹp!"],
      difficulty: "beginner"
    }
  },
  {
    id: "lesson-vi-701",
    unitId: "unit-vi-7",
    title: "Hôm Qua Bạn Đã Làm Gì? (Thì quá khứ 'Đã')",
    description: "Học cách dùng phó từ 'đã' để kể lại những việc đã diễn ra trong quá khứ.",
    type: "standard",
    xp: 15,
    estimatedMinutes: 5,
    order: 1,
    status: "available",
    goals: [
      { id: "g1", description: "Nắm vững các từ vựng chủ đề Hôm Qua Bạn Đã Làm Gì? (Thì quá khứ 'Đã')" },
      { id: "g2", description: "Luyện phát âm chuẩn và phản xạ câu qua các bài tập tương tác" }
    ],
    vocabulary: [
      { id: "v-vi-701-1", word: "Hôm qua", translation: "Yesterday", phonetic: "hohm kwah" },
      { id: "v-vi-701-2", word: "Đã đi", translation: "Went / Have gone", phonetic: "dah dee" },
      { id: "v-vi-701-3", word: "Đã ăn", translation: "Ate / Have eaten", phonetic: "dah an" },
      { id: "v-vi-701-4", word: "Đã xem", translation: "Watched / Saw", phonetic: "dah sem" },
      { id: "v-vi-701-5", word: "Đã mua", translation: "Bought", phonetic: "dah moo-ah" }
    ],
    phrases: [
      { id: "p-vi-701-1", text: "Hôm qua, tôi đã đi công viên và ăn kem cùng bạn bè.", translation: "Yesterday, I went to the park and ate ice cream with friends." },
      { id: "p-vi-701-2", text: "Cuối tuần vừa rồi bạn đã làm những gì?", translation: "What did you do last weekend?" }
    ],
    activities: [
      {
        id: "act-vi-701-1",
        type: "multiple_choice",
        skill: "reading",
        question: "'Hôm qua' có nghĩa là gì?",
        options: ["Yesterday (ngày trước hôm nay)","Today","Tomorrow","Next week"],
        correctAnswer: "Yesterday (ngày trước hôm nay)"
      },
      {
        id: "act-vi-701-2",
        type: "fill_blank",
        skill: "writing",
        question: "Điền từ: 'Hôm qua tôi _____ đến thư viện.' (quá khứ)",
        prompt: "Điền từ: 'Hôm qua tôi _____ đến thư viện.' (quá khứ)",
        options: ["đã đi","sẽ đi","đang đi","không đi"],
        correctAnswer: "đã đi"
      },
      {
        id: "act-vi-701-3",
        type: "multiple_choice",
        skill: "reading",
        question: "Dịch sang tiếng Anh: 'Tôi đã xem phim'",
        options: ["I watched a movie","I go to work","I eat dinner","I sleep"],
        correctAnswer: "I watched a movie"
      },
      {
        id: "act-vi-701-4",
        type: "match_pairs",
        skill: "reading",
        question: "Ghép các cặp từ vựng với nghĩa tiếng Việt tương ứng",
        pairs: [{"left":"Hôm qua","right":"Yesterday"},{"left":"Đã đi","right":"Went / Have gone"},{"left":"Đã ăn","right":"Ate / Have eaten"},{"left":"Đã xem","right":"Watched / Saw"}],
        correctAnswer: "all_matched"
      },
      {
        id: "act-vi-701-5",
        type: "audio_listen",
        skill: "listening",
        question: "Lắng nghe và chọn đáp án chính xác:",
        prompt: "Hôm qua",
        options: ["Yesterday (ngày trước hôm nay)","Today","Tomorrow","Next week"],
        correctAnswer: "Yesterday (ngày trước hôm nay)"
      }
    ]
  },
  {
    id: "lesson-vi-702",
    unitId: "unit-vi-7",
    title: "Kỷ Niệm Tuổi Thơ & Quê Hương (Childhood)",
    description: "Kể về quê hương và những ký ức ngọt ngào thời thơ ấu.",
    type: "standard",
    xp: 15,
    estimatedMinutes: 5,
    order: 2,
    status: "available",
    goals: [
      { id: "g1", description: "Nắm vững các từ vựng chủ đề Kỷ Niệm Tuổi Thơ & Quê Hương (Childhood)" },
      { id: "g2", description: "Luyện phát âm chuẩn và phản xạ câu qua các bài tập tương tác" }
    ],
    vocabulary: [
      { id: "v-vi-702-1", word: "Tuổi thơ", translation: "Childhood", phonetic: "too-oy tuh" },
      { id: "v-vi-702-2", word: "Lớn lên", translation: "Grew up", phonetic: "luhn len" },
      { id: "v-vi-702-3", word: "Quê hương", translation: "Hometown", phonetic: "kway hew-uhng" },
      { id: "v-vi-702-4", word: "Thường hay", translation: "Often used to", phonetic: "teu-uhng hy" },
      { id: "v-vi-702-5", word: "Kỷ niệm", translation: "Memory", phonetic: "kee nyem" }
    ],
    phrases: [
      { id: "p-vi-702-1", text: "Tôi đã lớn lên ở một vùng quê yên bình bên bờ sông.", translation: "I grew up in a peaceful countryside by the river." },
      { id: "p-vi-702-2", text: "Hồi nhỏ tôi thường hay thả diều trên cánh đồng lúa.", translation: "When I was young, I often flew kites in the rice fields." }
    ],
    activities: [
      {
        id: "act-vi-702-1",
        type: "multiple_choice",
        skill: "reading",
        question: "'Kỷ niệm' có nghĩa là gì?",
        options: ["Ký ức đẹp đã qua","Công việc hiện tại","Trường học mới","Chuyến bay xa"],
        correctAnswer: "Ký ức đẹp đã qua"
      },
      {
        id: "act-vi-702-2",
        type: "fill_blank",
        skill: "writing",
        question: "Điền từ: 'Tôi sinh ra và _____ ở Hà Nội.' (trưởng thành)",
        prompt: "Điền từ: 'Tôi sinh ra và _____ ở Hà Nội.' (trưởng thành)",
        options: ["lớn lên","kỷ niệm","tuổi thơ","quê hương"],
        correctAnswer: "lớn lên"
      },
      {
        id: "act-vi-702-3",
        type: "multiple_choice",
        skill: "reading",
        question: "Dịch: 'Quê hương của tôi'",
        options: ["My hometown","My school","My house","My bicycle"],
        correctAnswer: "My hometown"
      },
      {
        id: "act-vi-702-4",
        type: "match_pairs",
        skill: "reading",
        question: "Ghép các cặp từ vựng với nghĩa tiếng Việt tương ứng",
        pairs: [{"left":"Tuổi thơ","right":"Childhood"},{"left":"Lớn lên","right":"Grew up"},{"left":"Quê hương","right":"Hometown"},{"left":"Thường hay","right":"Often used to"}],
        correctAnswer: "all_matched"
      },
      {
        id: "act-vi-702-5",
        type: "audio_listen",
        skill: "listening",
        question: "Lắng nghe và chọn đáp án chính xác:",
        prompt: "Tuổi thơ",
        options: ["Ký ức đẹp đã qua","Công việc hiện tại","Trường học mới","Chuyến bay xa"],
        correctAnswer: "Ký ức đẹp đã qua"
      }
    ]
  },
  {
    id: "lesson-vi-703",
    unitId: "unit-vi-7",
    title: "Chuyến Du Lịch Đáng Nhớ (Unforgettable Trip)",
    description: "Kể lại chuyến du lịch đáng nhớ và những trải nghiệm khó quên.",
    type: "standard",
    xp: 15,
    estimatedMinutes: 5,
    order: 3,
    status: "available",
    goals: [
      { id: "g1", description: "Nắm vững các từ vựng chủ đề Chuyến Du Lịch Đáng Nhớ (Unforgettable Trip)" },
      { id: "g2", description: "Luyện phát âm chuẩn và phản xạ câu qua các bài tập tương tác" }
    ],
    vocabulary: [
      { id: "v-vi-703-1", word: "Chuyến đi", translation: "Trip / Journey", phonetic: "chuyen dee" },
      { id: "v-vi-703-2", word: "Không thể quên", translation: "Unforgettable", phonetic: "khom tay kwen" },
      { id: "v-vi-703-3", word: "Ghé thăm", translation: "Visited", phonetic: "geh tahm" },
      { id: "v-vi-703-4", word: "Gặp gỡ", translation: "Met", phonetic: "gahp guh" },
      { id: "v-vi-703-5", word: "Ở lại", translation: "Stayed", phonetic: "uh lye" }
    ],
    phrases: [
      { id: "p-vi-703-1", text: "Năm ngoái tôi đã ghé thăm Đà Nẵng, đó là chuyến đi không thể nào quên.", translation: "Last year I visited Da Nang, it was an unforgettable trip." },
      { id: "p-vi-703-2", text: "Chúng tôi đã ở lại một khách sạn xinh xắn gần bờ biển.", translation: "We stayed at a charming hotel near the beach." }
    ],
    activities: [
      {
        id: "act-vi-703-1",
        type: "multiple_choice",
        skill: "reading",
        question: "'Không thể nào quên' nghĩa là gì?",
        options: ["Unforgettable / Khó phai mờ","Nhàm chán","Nguy hiểm","Đắt đỏ"],
        correctAnswer: "Unforgettable / Khó phai mờ"
      },
      {
        id: "act-vi-703-2",
        type: "fill_blank",
        skill: "writing",
        question: "Điền từ: 'Đó là một chuyến đi _____.' (không thể nào quên)",
        prompt: "Điền từ: 'Đó là một chuyến đi _____.' (không thể nào quên)",
        options: ["không thể quên","hôm qua","tuổi thơ","ở lại"],
        correctAnswer: "không thể quên"
      },
      {
        id: "act-vi-703-3",
        type: "multiple_choice",
        skill: "reading",
        question: "Dịch: 'Ghé thăm ông bà'",
        options: ["Visited grandparents","Go to work","Buy food","Read book"],
        correctAnswer: "Visited grandparents"
      },
      {
        id: "act-vi-703-4",
        type: "match_pairs",
        skill: "reading",
        question: "Ghép các cặp từ vựng với nghĩa tiếng Việt tương ứng",
        pairs: [{"left":"Chuyến đi","right":"Trip / Journey"},{"left":"Không thể quên","right":"Unforgettable"},{"left":"Ghé thăm","right":"Visited"},{"left":"Gặp gỡ","right":"Met"}],
        correctAnswer: "all_matched"
      },
      {
        id: "act-vi-703-5",
        type: "audio_listen",
        skill: "listening",
        question: "Lắng nghe và chọn đáp án chính xác:",
        prompt: "Chuyến đi",
        options: ["Unforgettable / Khó phai mờ","Nhàm chán","Nguy hiểm","Đắt đỏ"],
        correctAnswer: "Unforgettable / Khó phai mờ"
      }
    ]
  },
  {
    id: "lesson-vi-704",
    unitId: "unit-vi-7",
    title: "Kể Chuyện Theo Trình Tự (Đầu tiên, sau đó)",
    description: "Sử dụng các từ nối đầu tiên, sau đó, bỗng nhiên, cuối cùng.",
    type: "standard",
    xp: 15,
    estimatedMinutes: 5,
    order: 4,
    status: "available",
    goals: [
      { id: "g1", description: "Nắm vững các từ vựng chủ đề Kể Chuyện Theo Trình Tự (Đầu tiên, sau đó)" },
      { id: "g2", description: "Luyện phát âm chuẩn và phản xạ câu qua các bài tập tương tác" }
    ],
    vocabulary: [
      { id: "v-vi-704-1", word: "Đầu tiên", translation: "First of all", phonetic: "dow tyen" },
      { id: "v-vi-704-2", word: "Sau đó", translation: "After that / Then", phonetic: "sow daw" },
      { id: "v-vi-704-3", word: "Bỗng nhiên", translation: "Suddenly", phonetic: "bawng nyen" },
      { id: "v-vi-704-4", word: "Cuối cùng", translation: "Finally / In the end", phonetic: "koo-oy koom" },
      { id: "v-vi-704-5", word: "Câu chuyện", translation: "Story", phonetic: "kow choo-yen" }
    ],
    phrases: [
      { id: "p-vi-704-1", text: "Đầu tiên chúng tôi ăn phở, sau đó đi dạo quanh hồ Gươm.", translation: "First we ate pho, then strolled around Hoan Kiem Lake." },
      { id: "p-vi-704-2", text: "Bỗng nhiên trời đổ một cơn mưa rào mùa hạ!", translation: "Suddenly a summer rain shower poured down!" }
    ],
    activities: [
      {
        id: "act-vi-704-1",
        type: "multiple_choice",
        skill: "reading",
        question: "Từ nối nào mang nghĩa 'Suddenly / Bất ngờ'?",
        options: ["Bỗng nhiên","Đầu tiên","Cuối cùng","Sau đó"],
        correctAnswer: "Bỗng nhiên"
      },
      {
        id: "act-vi-704-2",
        type: "fill_blank",
        skill: "writing",
        question: "Điền từ: '_____, đội chúng tôi đã giành chiến thắng.' (rốt cuộc)",
        prompt: "Điền từ: '_____, đội chúng tôi đã giành chiến thắng.' (rốt cuộc)",
        options: ["Cuối cùng","Bỗng nhiên","Đầu tiên","Hôm qua"],
        correctAnswer: "Cuối cùng"
      },
      {
        id: "act-vi-704-3",
        type: "multiple_choice",
        skill: "reading",
        question: "Dịch: 'Đầu tiên và sau đó'",
        options: ["First and then","Yesterday and today","Fast and slow","Happy and sad"],
        correctAnswer: "First and then"
      },
      {
        id: "act-vi-704-4",
        type: "match_pairs",
        skill: "reading",
        question: "Ghép các cặp từ vựng với nghĩa tiếng Việt tương ứng",
        pairs: [{"left":"Đầu tiên","right":"First of all"},{"left":"Sau đó","right":"After that / Then"},{"left":"Bỗng nhiên","right":"Suddenly"},{"left":"Cuối cùng","right":"Finally / In the end"}],
        correctAnswer: "all_matched"
      },
      {
        id: "act-vi-704-5",
        type: "audio_listen",
        skill: "listening",
        question: "Lắng nghe và chọn đáp án chính xác:",
        prompt: "Đầu tiên",
        options: ["Bỗng nhiên","Đầu tiên","Cuối cùng","Sau đó"],
        correctAnswer: "Bỗng nhiên"
      }
    ]
  },
  {
    id: "lesson-vi-705",
    unitId: "unit-vi-7",
    title: "AI Practice: Kể Chuyện Kỷ Niệm Cùng Cô Lan",
    description: "Thực hành kể chuyện thì quá khứ và kỷ niệm thời thơ ấu cùng cô giáo Lan.",
    type: "audio_ai",
    xp: 25,
    estimatedMinutes: 5,
    order: 5,
    heroImage: images.mascotWelcome,
    status: "available",
    goals: [
      { id: "g1", description: "Luyện phản xạ giao tiếp thực tế với AI Teacher Mai" },
      { id: "g2", description: "Vận dụng từ vựng trọng tâm vào ngữ cảnh hội thoại tự nhiên" }
    ],
    vocabulary: [
      { id: "v-ai-vi-7-1", word: "Hôm qua", translation: "Yesterday" },
      { id: "v-ai-vi-7-2", word: "Đã đi", translation: "Went / Have gone" },
      { id: "v-ai-vi-7-3", word: "Kỷ niệm", translation: "Memory" },
      { id: "v-ai-vi-7-4", word: "Không thể quên", translation: "Unforgettable" },
      { id: "v-ai-vi-7-5", word: "Rất vui", translation: "Rất vui" }
    ],
    phrases: [],
    activities: [],
    aiTeacherPrompt: {
      scenario: "Quán cà phê trứng cổ kính bên phố cổ Hà Nội",
      systemPrompt: "You are Mai, a warm, human, and energetic Vietnamese teacher. Speak mostly in English for clear guidance. Introduce Vietnamese words slowly: say the word once, give the English translation, and invite the student to repeat after you. Keep every reply strictly to 1 or 2 conversational sentences with friendly contractions (I'm, let's, that's). Listen closely to the student, praise correct pronunciation, and gently model errors again: 'So close! Try saying —'. Stay strictly on lesson words: Hôm qua, Đã đi, Kỷ niệm, Không thể quên, Rất vui. Never switch topics.",
      initialGreeting: "Chào bạn! Rất vui được gặp bạn hôm nay. Hãy kể cho cô nghe: hôm qua bạn đã làm gì hay có kỷ niệm đẹp nào gần đây không?",
      targetVocabulary: ["Hôm qua","Đã đi","Kỷ niệm","Không thể quên","Rất vui"],
      suggestedResponses: ["Hôm qua em đã đi uống cà phê và đọc sách cùng bạn bè.","Năm ngoái em đã đi du lịch Đà Nẵng, cảnh biển rất đẹp!","Đó là một chuyến đi đầy ắp kỷ niệm đẹp ạ!"],
      difficulty: "intermediate"
    }
  },
  {
    id: "lesson-vi-801",
    unitId: "unit-vi-8",
    title: "Các Triệu Chứng Ốm Đau (Đau đầu, sốt)",
    description: "Miêu tả các cơn đau và triệu chứng sức khỏe thông thường bằng tiếng Việt.",
    type: "standard",
    xp: 15,
    estimatedMinutes: 5,
    order: 1,
    status: "available",
    goals: [
      { id: "g1", description: "Nắm vững các từ vựng chủ đề Các Triệu Chứng Ốm Đau (Đau đầu, sốt)" },
      { id: "g2", description: "Luyện phát âm chuẩn và phản xạ câu qua các bài tập tương tác" }
    ],
    vocabulary: [
      { id: "v-vi-801-1", word: "Sức khỏe", translation: "Health", phonetic: "seuk kweh" },
      { id: "v-vi-801-2", word: "Đau đầu", translation: "Headache", phonetic: "dow dow" },
      { id: "v-vi-801-3", word: "Bị sốt", translation: "Fever", phonetic: "bee shoht" },
      { id: "v-vi-801-4", word: "Bị ho", translation: "Cough", phonetic: "bee haw" },
      { id: "v-vi-801-5", word: "Mệt mỏi", translation: "Tired / Exhausted", phonetic: "mayt moy" }
    ],
    phrases: [
      { id: "p-vi-801-1", text: "Từ tối hôm qua tôi bắt đầu bị đau đầu và sốt cao.", translation: "Since last night I started having a headache and high fever." },
      { id: "p-vi-801-2", text: "Hôm nay trông bạn có vẻ mệt mỏi, hãy nghỉ ngơi nhé.", translation: "You look tired today, please get some rest." }
    ],
    activities: [
      {
        id: "act-vi-801-1",
        type: "multiple_choice",
        skill: "reading",
        question: "'Đau đầu' nghĩa là triệu chứng gì?",
        options: ["Headache (đau ở vùng đầu)","Stomachache","Toothache","Backache"],
        correctAnswer: "Headache (đau ở vùng đầu)"
      },
      {
        id: "act-vi-801-2",
        type: "fill_blank",
        skill: "writing",
        question: "Điền từ: 'Tôi bị _____ bụng dữ dội.' (cơn đau)",
        prompt: "Điền từ: 'Tôi bị _____ bụng dữ dội.' (cơn đau)",
        options: ["đau","sốt","sức khỏe","ho"],
        correctAnswer: "đau"
      },
      {
        id: "act-vi-801-3",
        type: "multiple_choice",
        skill: "reading",
        question: "Dịch: 'Bị sốt cao'",
        options: ["Having a high fever","Hungry","Sleepy","Thirsty"],
        correctAnswer: "Having a high fever"
      },
      {
        id: "act-vi-801-4",
        type: "match_pairs",
        skill: "reading",
        question: "Ghép các cặp từ vựng với nghĩa tiếng Việt tương ứng",
        pairs: [{"left":"Sức khỏe","right":"Health"},{"left":"Đau đầu","right":"Headache"},{"left":"Bị sốt","right":"Fever"},{"left":"Bị ho","right":"Cough"}],
        correctAnswer: "all_matched"
      },
      {
        id: "act-vi-801-5",
        type: "audio_listen",
        skill: "listening",
        question: "Lắng nghe và chọn đáp án chính xác:",
        prompt: "Sức khỏe",
        options: ["Headache (đau ở vùng đầu)","Stomachache","Toothache","Backache"],
        correctAnswer: "Headache (đau ở vùng đầu)"
      }
    ]
  },
  {
    id: "lesson-vi-802",
    unitId: "unit-vi-8",
    title: "Tại Phòng Khám Bác Sĩ (At the Clinic)",
    description: "Khám bệnh, trao đổi với bác sĩ và nghe lời dặn nghỉ ngơi dưỡng sức.",
    type: "standard",
    xp: 15,
    estimatedMinutes: 5,
    order: 2,
    status: "available",
    goals: [
      { id: "g1", description: "Nắm vững các từ vựng chủ đề Tại Phòng Khám Bác Sĩ (At the Clinic)" },
      { id: "g2", description: "Luyện phát âm chuẩn và phản xạ câu qua các bài tập tương tác" }
    ],
    vocabulary: [
      { id: "v-vi-802-1", word: "Bệnh viện", translation: "Hospital", phonetic: "benh vyen" },
      { id: "v-vi-802-2", word: "Bác sĩ", translation: "Doctor", phonetic: "bahk see" },
      { id: "v-vi-802-3", word: "Đơn thuốc", translation: "Prescription", phonetic: "duhn thook" },
      { id: "v-vi-802-4", word: "Khám bệnh", translation: "Medical examination", phonetic: "khahm benh" },
      { id: "v-vi-802-5", word: "Nghỉ ngơi", translation: "Rest", phonetic: "ngee nguh-ee" }
    ],
    phrases: [
      { id: "p-vi-802-1", text: "Sáng mai tôi có lịch hẹn đến bệnh viện để khám sức khỏe.", translation: "Tomorrow morning I have an appointment to get a health checkup." },
      { id: "p-vi-802-2", text: "Bác sĩ dặn tôi phải uống nhiều nước ấm và nghỉ ngơi.", translation: "The doctor advised me to drink plenty of warm water and rest." }
    ],
    activities: [
      {
        id: "act-vi-802-1",
        type: "multiple_choice",
        skill: "reading",
        question: "'Đơn thuốc' của bác sĩ kê dùng để làm gì?",
        options: ["Mua thuốc đúng liều lượng tại nhà thuốc","Trả tiền phòng","Đặt vé máy bay","Đổi quà"],
        correctAnswer: "Mua thuốc đúng liều lượng tại nhà thuốc"
      },
      {
        id: "act-vi-802-2",
        type: "fill_blank",
        skill: "writing",
        question: "Điền từ: 'Bác sĩ dặn bạn cần phải _____ thật nhiều.' (tĩnh dưỡng)",
        prompt: "Điền từ: 'Bác sĩ dặn bạn cần phải _____ thật nhiều.' (tĩnh dưỡng)",
        options: ["nghỉ ngơi","bệnh viện","bác sĩ","đơn thuốc"],
        correctAnswer: "nghỉ ngơi"
      },
      {
        id: "act-vi-802-3",
        type: "multiple_choice",
        skill: "reading",
        question: "Dịch: 'Nghỉ ngơi tại nhà'",
        options: ["Rest at home","Go to work","Run fast","Eat outside"],
        correctAnswer: "Rest at home"
      },
      {
        id: "act-vi-802-4",
        type: "match_pairs",
        skill: "reading",
        question: "Ghép các cặp từ vựng với nghĩa tiếng Việt tương ứng",
        pairs: [{"left":"Bệnh viện","right":"Hospital"},{"left":"Bác sĩ","right":"Doctor"},{"left":"Đơn thuốc","right":"Prescription"},{"left":"Khám bệnh","right":"Medical examination"}],
        correctAnswer: "all_matched"
      },
      {
        id: "act-vi-802-5",
        type: "audio_listen",
        skill: "listening",
        question: "Lắng nghe và chọn đáp án chính xác:",
        prompt: "Bệnh viện",
        options: ["Mua thuốc đúng liều lượng tại nhà thuốc","Trả tiền phòng","Đặt vé máy bay","Đổi quà"],
        correctAnswer: "Mua thuốc đúng liều lượng tại nhà thuốc"
      }
    ]
  },
  {
    id: "lesson-vi-803",
    unitId: "unit-vi-8",
    title: "Mua Thuốc Tại Nhà Thuốc (Pharmacy)",
    description: "Mua thuốc cảm cúm, viên uống và nghe hướng dẫn liều dùng sau ăn.",
    type: "standard",
    xp: 15,
    estimatedMinutes: 5,
    order: 3,
    status: "available",
    goals: [
      { id: "g1", description: "Nắm vững các từ vựng chủ đề Mua Thuốc Tại Nhà Thuốc (Pharmacy)" },
      { id: "g2", description: "Luyện phát âm chuẩn và phản xạ câu qua các bài tập tương tác" }
    ],
    vocabulary: [
      { id: "v-vi-803-1", word: "Nhà thuốc", translation: "Pharmacy", phonetic: "nyah thook" },
      { id: "v-vi-803-2", word: "Thuốc", translation: "Medicine", phonetic: "thook" },
      { id: "v-vi-803-3", word: "Viên thuốc", translation: "Pill / Tablet", phonetic: "vyen thook" },
      { id: "v-vi-803-4", word: "Thuốc cảm", translation: "Cold medicine", phonetic: "thook kahm" },
      { id: "v-vi-803-5", word: "Sau khi ăn", translation: "After meals", phonetic: "sow khee an" }
    ],
    phrases: [
      { id: "p-vi-803-1", text: "Thuốc này bạn uống hai viên sau khi ăn ba mươi phút nhé.", translation: "Take two tablets of this medicine thirty minutes after meals." },
      { id: "p-vi-803-2", text: "Làm ơn bán cho tôi một vỉ thuốc giảm đau và hạ sốt.", translation: "Please sell me a blister pack of painkiller and fever reducer." }
    ],
    activities: [
      {
        id: "act-vi-803-1",
        type: "multiple_choice",
        skill: "reading",
        question: "'Sau khi ăn' chỉ thời điểm uống thuốc nào?",
        options: ["After meals (khi đã ăn xong)","Before meals","While sleeping","Early morning"],
        correctAnswer: "After meals (khi đã ăn xong)"
      },
      {
        id: "act-vi-803-2",
        type: "fill_blank",
        skill: "writing",
        question: "Điền từ: 'Tôi ra _____ mua thuốc cảm.' (nơi bán thuốc)",
        prompt: "Điền từ: 'Tôi ra _____ mua thuốc cảm.' (nơi bán thuốc)",
        options: ["nhà thuốc","bệnh viện","sau khi ăn","viên thuốc"],
        correctAnswer: "nhà thuốc"
      },
      {
        id: "act-vi-803-3",
        type: "multiple_choice",
        skill: "reading",
        question: "Dịch: 'Uống thuốc'",
        options: ["Take medicine","Buy food","Drink tea","Cook dinner"],
        correctAnswer: "Take medicine"
      },
      {
        id: "act-vi-803-4",
        type: "match_pairs",
        skill: "reading",
        question: "Ghép các cặp từ vựng với nghĩa tiếng Việt tương ứng",
        pairs: [{"left":"Nhà thuốc","right":"Pharmacy"},{"left":"Thuốc","right":"Medicine"},{"left":"Viên thuốc","right":"Pill / Tablet"},{"left":"Thuốc cảm","right":"Cold medicine"}],
        correctAnswer: "all_matched"
      },
      {
        id: "act-vi-803-5",
        type: "audio_listen",
        skill: "listening",
        question: "Lắng nghe và chọn đáp án chính xác:",
        prompt: "Nhà thuốc",
        options: ["After meals (khi đã ăn xong)","Before meals","While sleeping","Early morning"],
        correctAnswer: "After meals (khi đã ăn xong)"
      }
    ]
  },
  {
    id: "lesson-vi-804",
    unitId: "unit-vi-8",
    title: "Lối Sống Lành Mạnh & Thể Dục (Healthy Lifestyle)",
    description: "Lời khuyên rèn luyện sức khỏe, dinh dưỡng cân bằng và giấc ngủ sâu.",
    type: "standard",
    xp: 15,
    estimatedMinutes: 5,
    order: 4,
    status: "available",
    goals: [
      { id: "g1", description: "Nắm vững các từ vựng chủ đề Lối Sống Lành Mạnh & Thể Dục (Healthy Lifestyle)" },
      { id: "g2", description: "Luyện phát âm chuẩn và phản xạ câu qua các bài tập tương tác" }
    ],
    vocabulary: [
      { id: "v-vi-804-1", word: "Tập thể dục", translation: "Exercise", phonetic: "tahp tay zook" },
      { id: "v-vi-804-2", word: "Ngủ đủ giấc", translation: "Get enough sleep", phonetic: "ngoo doo zahk" },
      { id: "v-vi-804-3", word: "Dinh dưỡng", translation: "Nutrition", phonetic: "zinh zeu-uhng" },
      { id: "v-vi-804-4", word: "Nên", translation: "Should (advice)", phonetic: "nen" },
      { id: "v-vi-804-5", word: "Khỏe mạnh", translation: "Healthy / Strong", phonetic: "kweh mahnh" }
    ],
    phrases: [
      { id: "p-vi-804-1", text: "Mỗi người nên ngủ đủ tám tiếng mỗi đêm để cơ thể hồi phục.", translation: "Everyone should get eight hours of sleep per night to recover." },
      { id: "p-vi-804-2", text: "Chăm chỉ tập thể dục giúp tinh thần luôn sảng khoái và khỏe mạnh.", translation: "Exercising diligently keeps the mind refreshed and body healthy." }
    ],
    activities: [
      {
        id: "act-vi-804-1",
        type: "multiple_choice",
        skill: "reading",
        question: "Từ 'Nên' được dùng để diễn đạt điều gì?",
        options: ["Lời khuyên bổ ích nên làm","Lời từ chối","Câu hỏi giá","Lời chào"],
        correctAnswer: "Lời khuyên bổ ích nên làm"
      },
      {
        id: "act-vi-804-2",
        type: "fill_blank",
        skill: "writing",
        question: "Điền từ: 'Bạn _____ uống nhiều nước lọc mỗi ngày.' (khuyên nhủ)",
        prompt: "Điền từ: 'Bạn _____ uống nhiều nước lọc mỗi ngày.' (khuyên nhủ)",
        options: ["nên","ngủ","nhà thuốc","đau"],
        correctAnswer: "nên"
      },
      {
        id: "act-vi-804-3",
        type: "multiple_choice",
        skill: "reading",
        question: "Dịch: 'Cơ thể khỏe mạnh'",
        options: ["Healthy body","Old house","Broken bicycle","Tired friend"],
        correctAnswer: "Healthy body"
      },
      {
        id: "act-vi-804-4",
        type: "match_pairs",
        skill: "reading",
        question: "Ghép các cặp từ vựng với nghĩa tiếng Việt tương ứng",
        pairs: [{"left":"Tập thể dục","right":"Exercise"},{"left":"Ngủ đủ giấc","right":"Get enough sleep"},{"left":"Dinh dưỡng","right":"Nutrition"},{"left":"Nên","right":"Should (advice)"}],
        correctAnswer: "all_matched"
      },
      {
        id: "act-vi-804-5",
        type: "audio_listen",
        skill: "listening",
        question: "Lắng nghe và chọn đáp án chính xác:",
        prompt: "Tập thể dục",
        options: ["Lời khuyên bổ ích nên làm","Lời từ chối","Câu hỏi giá","Lời chào"],
        correctAnswer: "Lời khuyên bổ ích nên làm"
      }
    ]
  },
  {
    id: "lesson-vi-805",
    unitId: "unit-vi-8",
    title: "AI Practice: Thăm Khám Sức Khỏe Cùng Bác Sĩ Tuấn",
    description: "Thực hành đối thoại bác sĩ - bệnh nhân bằng tiếng Việt cùng bác sĩ Tuấn.",
    type: "audio_ai",
    xp: 25,
    estimatedMinutes: 5,
    order: 5,
    heroImage: images.mascotWelcome,
    status: "available",
    goals: [
      { id: "g1", description: "Luyện phản xạ giao tiếp thực tế với AI Teacher Mai" },
      { id: "g2", description: "Vận dụng từ vựng trọng tâm vào ngữ cảnh hội thoại tự nhiên" }
    ],
    vocabulary: [
      { id: "v-ai-vi-8-1", word: "Đau đầu", translation: "Headache" },
      { id: "v-ai-vi-8-2", word: "Bị sốt", translation: "Fever" },
      { id: "v-ai-vi-8-3", word: "Nghỉ ngơi", translation: "Rest" },
      { id: "v-ai-vi-8-4", word: "Nhà thuốc", translation: "Pharmacy" },
      { id: "v-ai-vi-8-5", word: "Uống thuốc sau ăn", translation: "Uống thuốc sau khi ăn" }
    ],
    phrases: [],
    activities: [],
    aiTeacherPrompt: {
      scenario: "Phòng khám đa khoa hiện đại tại quận 1, TP. Hồ Chí Minh",
      systemPrompt: "You are Mai, a warm, human, and energetic Vietnamese teacher. Speak mostly in English for clear guidance. Introduce Vietnamese words slowly: say the word once, give the English translation, and invite the student to repeat after you. Keep every reply strictly to 1 or 2 conversational sentences with friendly contractions (I'm, let's, that's). Listen closely to the student, praise correct pronunciation, and gently model errors again: 'So close! Try saying —'. Stay strictly on lesson words: Đau đầu, Bị sốt, Nghỉ ngơi, Nhà thuốc, Uống thuốc sau ăn. Never switch topics.",
      initialGreeting: "Chào bạn, mời bạn ngồi! Hôm nay bạn cảm thấy không khỏe ở đâu? Bạn bị sốt hay đau họng từ khi nào?",
      targetVocabulary: ["Đau đầu","Bị sốt","Nghỉ ngơi","Nhà thuốc","Uống thuốc sau ăn"],
      suggestedResponses: ["Chào bác sĩ, từ hôm qua em bị đau đầu và sốt cao.","Cổ họng em cũng rất rát và ho nhiều.","Bác sĩ kê giúp em đơn thuốc uống sau khi ăn ạ."],
      difficulty: "intermediate"
    }
  },
  {
    id: "lesson-vi-901",
    unitId: "unit-vi-9",
    title: "Một Ngày Tại Văn Phòng (Office Life)",
    description: "Mô tả công việc công sở, đồng nghiệp thân thiện và các cuộc họp nhóm.",
    type: "standard",
    xp: 15,
    estimatedMinutes: 5,
    order: 1,
    status: "available",
    goals: [
      { id: "g1", description: "Nắm vững các từ vựng chủ đề Một Ngày Tại Văn Phòng (Office Life)" },
      { id: "g2", description: "Luyện phát âm chuẩn và phản xạ câu qua các bài tập tương tác" }
    ],
    vocabulary: [
      { id: "v-vi-901-1", word: "Công ty", translation: "Company", phonetic: "kawng tee" },
      { id: "v-vi-901-2", word: "Đồng nghiệp", translation: "Colleague", phonetic: "dawng ngeep" },
      { id: "v-vi-901-3", word: "Họp nhóm", translation: "Team meeting", phonetic: "hawp nyowm" },
      { id: "v-vi-901-4", word: "Dự án", translation: "Project", phonetic: "zeu ahn" },
      { id: "v-vi-901-5", word: "Trưởng phòng", translation: "Manager / Department head", phonetic: "cheu-uhng fawng" }
    ],
    phrases: [
      { id: "p-vi-901-1", text: "Thứ Hai hàng tuần phòng chúng tôi đều họp giao ban đầu tuần.", translation: "Every Monday our department holds a weekly briefing meeting." },
      { id: "p-vi-901-2", text: "Tôi đang cùng các đồng nghiệp hoàn thiện một dự án công nghệ.", translation: "I am working with colleagues to complete a technology project." }
    ],
    activities: [
      {
        id: "act-vi-901-1",
        type: "multiple_choice",
        skill: "reading",
        question: "'Đồng nghiệp' là ai?",
        options: ["Người làm việc cùng công ty","Thầy giáo","Hàng xóm","Khách du lịch"],
        correctAnswer: "Người làm việc cùng công ty"
      },
      {
        id: "act-vi-901-2",
        type: "fill_blank",
        skill: "writing",
        question: "Điền từ: 'Tôi thảo luận kế hoạch với _____.' (người cùng làm việc)",
        prompt: "Điền từ: 'Tôi thảo luận kế hoạch với _____.' (người cùng làm việc)",
        options: ["đồng nghiệp","dự án","họp nhóm","công ty"],
        correctAnswer: "đồng nghiệp"
      },
      {
        id: "act-vi-901-3",
        type: "multiple_choice",
        skill: "reading",
        question: "Dịch: 'Cuộc họp lúc 9 giờ'",
        options: ["Meeting at 9 o'clock","Lunch at 9","Office closes at 9","Bus arrives at 9"],
        correctAnswer: "Meeting at 9 o'clock"
      },
      {
        id: "act-vi-901-4",
        type: "match_pairs",
        skill: "reading",
        question: "Ghép các cặp từ vựng với nghĩa tiếng Việt tương ứng",
        pairs: [{"left":"Công ty","right":"Company"},{"left":"Đồng nghiệp","right":"Colleague"},{"left":"Họp nhóm","right":"Team meeting"},{"left":"Dự án","right":"Project"}],
        correctAnswer: "all_matched"
      },
      {
        id: "act-vi-901-5",
        type: "audio_listen",
        skill: "listening",
        question: "Lắng nghe và chọn đáp án chính xác:",
        prompt: "Công ty",
        options: ["Người làm việc cùng công ty","Thầy giáo","Hàng xóm","Khách du lịch"],
        correctAnswer: "Người làm việc cùng công ty"
      }
    ]
  },
  {
    id: "lesson-vi-902",
    unitId: "unit-vi-9",
    title: "Viết Email Công Việc (Work Email)",
    description: "Học cách viết thư điện tử công việc trang trọng Kính gửi, Trân trọng.",
    type: "standard",
    xp: 15,
    estimatedMinutes: 5,
    order: 2,
    status: "available",
    goals: [
      { id: "g1", description: "Nắm vững các từ vựng chủ đề Viết Email Công Việc (Work Email)" },
      { id: "g2", description: "Luyện phát âm chuẩn và phản xạ câu qua các bài tập tương tác" }
    ],
    vocabulary: [
      { id: "v-vi-902-1", word: "Thư điện tử / Email", translation: "Email", phonetic: "theu dyen teu" },
      { id: "v-vi-902-2", word: "Kính gửi", translation: "Dear (formal opening)", phonetic: "keng geu-ee" },
      { id: "v-vi-902-3", word: "Trân trọng", translation: "Sincerely / Best regards", phonetic: "chan chawng" },
      { id: "v-vi-902-4", word: "Tệp đính kèm", translation: "Attachment", phonetic: "tehp deng kem" },
      { id: "v-vi-902-5", word: "Xác nhận", translation: "Confirm", phonetic: "sahk nyuhn" }
    ],
    phrases: [
      { id: "p-vi-902-1", text: "Kính gửi anh Tuấn, em xin gửi báo cáo tuần trong tệp đính kèm.", translation: "Dear Mr. Tuan, I attach the weekly report in the attachment." },
      { id: "p-vi-902-2", text: "Xin vui lòng kiểm tra và xác nhận lại lịch họp giúp tôi.", translation: "Please check and confirm the meeting schedule with me." }
    ],
    activities: [
      {
        id: "act-vi-902-1",
        type: "multiple_choice",
        skill: "reading",
        question: "Từ kết thư trang trọng nhất trong email công việc tiếng Việt là gì?",
        options: ["Trân trọng","Tạm biệt","Hẹn gặp lại","Chào bạn"],
        correctAnswer: "Trân trọng"
      },
      {
        id: "act-vi-902-2",
        type: "fill_blank",
        skill: "writing",
        question: "Điền từ: 'Xin vui lòng _____ thông tin.' (kiểm tra duyệt)",
        prompt: "Điền từ: 'Xin vui lòng _____ thông tin.' (kiểm tra duyệt)",
        options: ["xác nhận","email","công ty","đồng nghiệp"],
        correctAnswer: "xác nhận"
      },
      {
        id: "act-vi-902-3",
        type: "multiple_choice",
        skill: "reading",
        question: "Dịch: 'Tệp đính kèm'",
        options: ["Email attachment","Signature","Subject line","Spam box"],
        correctAnswer: "Email attachment"
      },
      {
        id: "act-vi-902-4",
        type: "match_pairs",
        skill: "reading",
        question: "Ghép các cặp từ vựng với nghĩa tiếng Việt tương ứng",
        pairs: [{"left":"Thư điện tử / Email","right":"Email"},{"left":"Kính gửi","right":"Dear (formal opening)"},{"left":"Trân trọng","right":"Sincerely / Best regards"},{"left":"Tệp đính kèm","right":"Attachment"}],
        correctAnswer: "all_matched"
      },
      {
        id: "act-vi-902-5",
        type: "audio_listen",
        skill: "listening",
        question: "Lắng nghe và chọn đáp án chính xác:",
        prompt: "Thư điện tử / Email",
        options: ["Trân trọng","Tạm biệt","Hẹn gặp lại","Chào bạn"],
        correctAnswer: "Trân trọng"
      }
    ]
  },
  {
    id: "lesson-vi-903",
    unitId: "unit-vi-9",
    title: "Phỏng Vấn Xin Việc (Job Interview)",
    description: "Giới thiệu bản thân, trình bày kinh nghiệm và ưu điểm năng lực cá nhân.",
    type: "standard",
    xp: 15,
    estimatedMinutes: 5,
    order: 3,
    status: "available",
    goals: [
      { id: "g1", description: "Nắm vững các từ vựng chủ đề Phỏng Vấn Xin Việc (Job Interview)" },
      { id: "g2", description: "Luyện phát âm chuẩn và phản xạ câu qua các bài tập tương tác" }
    ],
    vocabulary: [
      { id: "v-vi-903-1", word: "Phỏng vấn", translation: "Job interview", phonetic: "fawng vuhn" },
      { id: "v-vi-903-2", word: "Hồ sơ / CV", translation: "Resume / CV", phonetic: "hoh suh" },
      { id: "v-vi-903-3", word: "Kinh nghiệm", translation: "Work experience", phonetic: "keng ngeem" },
      { id: "v-vi-903-4", word: "Ưu điểm", translation: "Strengths / Advantages", phonetic: "ew dyem" },
      { id: "v-vi-903-5", word: "Nhiệt tình", translation: "Enthusiastic", phonetic: "nyayt teng" }
    ],
    phrases: [
      { id: "p-vi-903-1", text: "Tôi đã có ba năm kinh nghiệm làm việc trong lĩnh vực này.", translation: "I have three years of work experience in this field." },
      { id: "p-vi-903-2", text: "Ưu điểm lớn nhất của tôi là làm việc có trách nhiệm và hòa đồng.", translation: "My greatest strength is being responsible and cooperative." }
    ],
    activities: [
      {
        id: "act-vi-903-1",
        type: "multiple_choice",
        skill: "reading",
        question: "'Kinh nghiệm' có nghĩa là gì?",
        options: ["Work experience / Sự tích lũy công việc","Mức lương","Địa chỉ nhà","Biển số xe"],
        correctAnswer: "Work experience / Sự tích lũy công việc"
      },
      {
        id: "act-vi-903-2",
        type: "fill_blank",
        skill: "writing",
        question: "Điền từ: 'Tôi có nhiều _____ thực tế.' (sự từng trải công việc)",
        prompt: "Điền từ: 'Tôi có nhiều _____ thực tế.' (sự từng trải công việc)",
        options: ["kinh nghiệm","hồ sơ","phỏng vấn","ưu điểm"],
        correctAnswer: "kinh nghiệm"
      },
      {
        id: "act-vi-903-3",
        type: "multiple_choice",
        skill: "reading",
        question: "Dịch: 'Tham gia phỏng vấn'",
        options: ["Attend an interview","Go to sleep","Eat breakfast","Read newspaper"],
        correctAnswer: "Attend an interview"
      },
      {
        id: "act-vi-903-4",
        type: "match_pairs",
        skill: "reading",
        question: "Ghép các cặp từ vựng với nghĩa tiếng Việt tương ứng",
        pairs: [{"left":"Phỏng vấn","right":"Job interview"},{"left":"Hồ sơ / CV","right":"Resume / CV"},{"left":"Kinh nghiệm","right":"Work experience"},{"left":"Ưu điểm","right":"Strengths / Advantages"}],
        correctAnswer: "all_matched"
      },
      {
        id: "act-vi-903-5",
        type: "audio_listen",
        skill: "listening",
        question: "Lắng nghe và chọn đáp án chính xác:",
        prompt: "Phỏng vấn",
        options: ["Work experience / Sự tích lũy công việc","Mức lương","Địa chỉ nhà","Biển số xe"],
        correctAnswer: "Work experience / Sự tích lũy công việc"
      }
    ]
  },
  {
    id: "lesson-vi-904",
    unitId: "unit-vi-9",
    title: "Hạn Chót & Chuyến Công Tác (Deadline & Business Trip)",
    description: "Bàn giao công việc đúng hạn chót và chuẩn bị chuyến công tác xa.",
    type: "standard",
    xp: 15,
    estimatedMinutes: 5,
    order: 4,
    status: "available",
    goals: [
      { id: "g1", description: "Nắm vững các từ vựng chủ đề Hạn Chót & Chuyến Công Tác (Deadline & Business Trip)" },
      { id: "g2", description: "Luyện phát âm chuẩn và phản xạ câu qua các bài tập tương tác" }
    ],
    vocabulary: [
      { id: "v-vi-904-1", word: "Hạn chót / Deadline", translation: "Deadline", phonetic: "hahn chawt" },
      { id: "v-vi-904-2", word: "Sắp xếp", translation: "Arrange / Organize", phonetic: "sahp sep" },
      { id: "v-vi-904-3", word: "Đúng giờ", translation: "Punctual / On time", phonetic: "doong zew" },
      { id: "v-vi-904-4", word: "Đi công tác", translation: "Business trip", phonetic: "dee kawng tahk" },
      { id: "v-vi-904-5", word: "Liên lạc", translation: "Contact", phonetic: "lyen lahk" }
    ],
    phrases: [
      { id: "p-vi-904-1", text: "Chúng tôi cam kết hoàn thành dự án trước hạn chót.", translation: "We commit to completing the project before the deadline." },
      { id: "p-vi-904-2", text: "Tuần tới tôi sẽ đi công tác ba ngày tại Đà Nẵng.", translation: "Next week I will go on a three-day business trip to Da Nang." }
    ],
    activities: [
      {
        id: "act-vi-904-1",
        type: "multiple_choice",
        skill: "reading",
        question: "'Đi công tác' có nghĩa là chuyến đi gì?",
        options: ["Đi làm việc xa theo yêu cầu công ty","Đi về quê ăn tết","Đi nghỉ dưỡng","Đi xem phim"],
        correctAnswer: "Đi làm việc xa theo yêu cầu công ty"
      },
      {
        id: "act-vi-904-2",
        type: "fill_blank",
        skill: "writing",
        question: "Điền từ: 'Tôi phải nộp báo cáo trước _____.' (ngày cuối)",
        prompt: "Điền từ: 'Tôi phải nộp báo cáo trước _____.' (ngày cuối)",
        options: ["hạn chót","đúng giờ","đi công tác","sắp xếp"],
        correctAnswer: "hạn chót"
      },
      {
        id: "act-vi-904-3",
        type: "multiple_choice",
        skill: "reading",
        question: "Dịch: 'Đúng giờ'",
        options: ["On time / Punctual","Late","Slow","Early morning"],
        correctAnswer: "On time / Punctual"
      },
      {
        id: "act-vi-904-4",
        type: "match_pairs",
        skill: "reading",
        question: "Ghép các cặp từ vựng với nghĩa tiếng Việt tương ứng",
        pairs: [{"left":"Hạn chót / Deadline","right":"Deadline"},{"left":"Sắp xếp","right":"Arrange / Organize"},{"left":"Đúng giờ","right":"Punctual / On time"},{"left":"Đi công tác","right":"Business trip"}],
        correctAnswer: "all_matched"
      },
      {
        id: "act-vi-904-5",
        type: "audio_listen",
        skill: "listening",
        question: "Lắng nghe và chọn đáp án chính xác:",
        prompt: "Hạn chót / Deadline",
        options: ["Đi làm việc xa theo yêu cầu công ty","Đi về quê ăn tết","Đi nghỉ dưỡng","Đi xem phim"],
        correctAnswer: "Đi làm việc xa theo yêu cầu công ty"
      }
    ]
  },
  {
    id: "lesson-vi-905",
    unitId: "unit-vi-9",
    title: "AI Practice: Phỏng Vấn Tuyển Dụng Cùng Trưởng Phòng Hải",
    description: "Thực hành trả lời các câu hỏi phỏng vấn tuyển dụng chuẩn mực tiếng Việt cùng anh Hải.",
    type: "audio_ai",
    xp: 25,
    estimatedMinutes: 5,
    order: 5,
    heroImage: images.mascotWelcome,
    status: "available",
    goals: [
      { id: "g1", description: "Luyện phản xạ giao tiếp thực tế với AI Teacher Mai" },
      { id: "g2", description: "Vận dụng từ vựng trọng tâm vào ngữ cảnh hội thoại tự nhiên" }
    ],
    vocabulary: [
      { id: "v-ai-vi-9-1", word: "Giới thiệu", translation: "Giới thiệu" },
      { id: "v-ai-vi-9-2", word: "Kinh nghiệm", translation: "Work experience" },
      { id: "v-ai-vi-9-3", word: "Ưu điểm", translation: "Strengths / Advantages" },
      { id: "v-ai-vi-9-4", word: "Nhiệt tình", translation: "Enthusiastic" },
      { id: "v-ai-vi-9-5", word: "Rất mong được hợp tác", translation: "Rất mong được hợp tác" }
    ],
    phrases: [],
    activities: [],
    aiTeacherPrompt: {
      scenario: "Văn phòng tuyển dụng tại tòa nhà Landmark 81, TP. Hồ Chí Minh",
      systemPrompt: "You are Mai, a warm, human, and energetic Vietnamese teacher. Speak mostly in English for clear guidance. Introduce Vietnamese words slowly: say the word once, give the English translation, and invite the student to repeat after you. Keep every reply strictly to 1 or 2 conversational sentences with friendly contractions (I'm, let's, that's). Listen closely to the student, praise correct pronunciation, and gently model errors again: 'So close! Try saying —'. Stay strictly on lesson words: Giới thiệu, Kinh nghiệm, Ưu điểm, Nhiệt tình, Rất mong được hợp tác. Never switch topics.",
      initialGreeting: "Chào bạn, mời bạn ngồi! Rất vui được gặp bạn trong buổi phỏng vấn hôm nay. Bạn hãy tự giới thiệu ngắn gọn về bản thân nhé!",
      targetVocabulary: ["Giới thiệu","Kinh nghiệm","Ưu điểm","Nhiệt tình","Rất mong được hợp tác"],
      suggestedResponses: ["Em chào anh Hải, em có 3 năm kinh nghiệm trong ngành và rất thích môi trường của công ty.","Ưu điểm của em là tinh thần trách nhiệm cao và ham học hỏi.","Em rất hy vọng có cơ hội được cống hiến tại công ty mình ạ!"],
      difficulty: "intermediate"
    }
  },
  {
    id: "lesson-vi-1001",
    unitId: "unit-vi-10",
    title: "Lên Kế Hoạch Nghỉ Dưỡng (Vacation Plans)",
    description: "Lựa chọn điểm đến, đặt vé tàu xe và chuẩn bị hành lý du lịch.",
    type: "standard",
    xp: 15,
    estimatedMinutes: 5,
    order: 1,
    status: "available",
    goals: [
      { id: "g1", description: "Nắm vững các từ vựng chủ đề Lên Kế Hoạch Nghỉ Dưỡng (Vacation Plans)" },
      { id: "g2", description: "Luyện phát âm chuẩn và phản xạ câu qua các bài tập tương tác" }
    ],
    vocabulary: [
      { id: "v-vi-1001-1", word: "Kỳ nghỉ", translation: "Vacation / Holiday", phonetic: "kee ngee" },
      { id: "v-vi-1001-2", word: "Vali", translation: "Suitcase", phonetic: "vah lee" },
      { id: "v-vi-1001-3", word: "Vé máy bay", translation: "Flight ticket", phonetic: "veh my bye" },
      { id: "v-vi-1001-4", word: "Điểm đến", translation: "Destination", phonetic: "dyem den" },
      { id: "v-vi-1001-5", word: "Xếp hành lý", translation: "Pack luggage", phonetic: "sep hahnh lee" }
    ],
    phrases: [
      { id: "p-vi-1001-1", text: "Kỳ nghỉ hè này gia đình tôi dự định đi Phú Quốc.", translation: "This summer vacation my family plans to go to Phu Quoc." },
      { id: "p-vi-1001-2", text: "Tôi đã mua xong vé máy bay và chuẩn bị xếp hành lý.", translation: "I have bought flight tickets and am preparing to pack luggage." }
    ],
    activities: [
      {
        id: "act-vi-1001-1",
        type: "multiple_choice",
        skill: "reading",
        question: "'Vali' là vật dụng gì?",
        options: ["Suitcase (đựng đồ hành lý)","Ví tiền","Bản đồ","Hộ chiếu"],
        correctAnswer: "Suitcase (đựng đồ hành lý)"
      },
      {
        id: "act-vi-1001-2",
        type: "fill_blank",
        skill: "writing",
        question: "Điền từ: 'Tôi đã đặt _____ khứ hồi.' (vé đi lại)",
        prompt: "Điền từ: 'Tôi đã đặt _____ khứ hồi.' (vé đi lại)",
        options: ["vé máy bay","vali","kỳ nghỉ","điểm đến"],
        correctAnswer: "vé máy bay"
      },
      {
        id: "act-vi-1001-3",
        type: "multiple_choice",
        skill: "reading",
        question: "Dịch: 'Xếp hành lý'",
        options: ["Pack luggage","Buy food","Wash clothes","Sleep"],
        correctAnswer: "Pack luggage"
      },
      {
        id: "act-vi-1001-4",
        type: "match_pairs",
        skill: "reading",
        question: "Ghép các cặp từ vựng với nghĩa tiếng Việt tương ứng",
        pairs: [{"left":"Kỳ nghỉ","right":"Vacation / Holiday"},{"left":"Vali","right":"Suitcase"},{"left":"Vé máy bay","right":"Flight ticket"},{"left":"Điểm đến","right":"Destination"}],
        correctAnswer: "all_matched"
      },
      {
        id: "act-vi-1001-5",
        type: "audio_listen",
        skill: "listening",
        question: "Lắng nghe và chọn đáp án chính xác:",
        prompt: "Kỳ nghỉ",
        options: ["Suitcase (đựng đồ hành lý)","Ví tiền","Bản đồ","Hộ chiếu"],
        correctAnswer: "Suitcase (đựng đồ hành lý)"
      }
    ]
  },
  {
    id: "lesson-vi-1002",
    unitId: "unit-vi-10",
    title: "Biển Nha Trang & Vịnh Hạ Long (Scenic Nature)",
    description: "Khám phá vẻ đẹp kỳ vĩ của thiên nhiên non nước Việt Nam.",
    type: "standard",
    xp: 15,
    estimatedMinutes: 5,
    order: 2,
    status: "available",
    goals: [
      { id: "g1", description: "Nắm vững các từ vựng chủ đề Biển Nha Trang & Vịnh Hạ Long (Scenic Nature)" },
      { id: "g2", description: "Luyện phát âm chuẩn và phản xạ câu qua các bài tập tương tác" }
    ],
    vocabulary: [
      { id: "v-vi-1002-1", word: "Bãi biển", translation: "Beach", phonetic: "bye byen" },
      { id: "v-vi-1002-2", word: "Vịnh biển", translation: "Bay", phonetic: "vinh byen" },
      { id: "v-vi-1002-3", word: "Thiên nhiên", translation: "Nature", phonetic: "thyen nyen" },
      { id: "v-vi-1002-4", word: "Phong cảnh", translation: "Scenery / Landscape", phonetic: "fawng kahnh" },
      { id: "v-vi-1002-5", word: "Mát mẻ", translation: "Cool / Pleasant", phonetic: "maht meh" }
    ],
    phrases: [
      { id: "p-vi-1002-1", text: "Vịnh Hạ Long là di sản thiên nhiên thế giới tuyệt đẹp.", translation: "Ha Long Bay is a magnificent world natural heritage." },
      { id: "p-vi-1002-2", text: "Gió biển Nha Trang thổi vào bờ rất trong lành và mát mẻ.", translation: "Nha Trang sea breeze blows to shore very fresh and cool." }
    ],
    activities: [
      {
        id: "act-vi-1002-1",
        type: "multiple_choice",
        skill: "reading",
        question: "'Phong cảnh' có nghĩa là gì?",
        options: ["Cảnh quan thiên nhiên tươi đẹp","Món ăn ngon","Ngôi nhà cổ","Chiếc xe mới"],
        correctAnswer: "Cảnh quan thiên nhiên tươi đẹp"
      },
      {
        id: "act-vi-1002-2",
        type: "fill_blank",
        skill: "writing",
        question: "Điền từ: 'Không khí ở biển rất _____.' (khoan khoái dễ chịu)",
        prompt: "Điền từ: 'Không khí ở biển rất _____.' (khoan khoái dễ chịu)",
        options: ["mát mẻ","vịnh biển","phong cảnh","thiên nhiên"],
        correctAnswer: "mát mẻ"
      },
      {
        id: "act-vi-1002-3",
        type: "multiple_choice",
        skill: "reading",
        question: "Dịch: 'Bãi biển tuyệt đẹp'",
        options: ["Magnificent beach","Long river","Big mountain","Old city"],
        correctAnswer: "Magnificent beach"
      },
      {
        id: "act-vi-1002-4",
        type: "match_pairs",
        skill: "reading",
        question: "Ghép các cặp từ vựng với nghĩa tiếng Việt tương ứng",
        pairs: [{"left":"Bãi biển","right":"Beach"},{"left":"Vịnh biển","right":"Bay"},{"left":"Thiên nhiên","right":"Nature"},{"left":"Phong cảnh","right":"Scenery / Landscape"}],
        correctAnswer: "all_matched"
      },
      {
        id: "act-vi-1002-5",
        type: "audio_listen",
        skill: "listening",
        question: "Lắng nghe và chọn đáp án chính xác:",
        prompt: "Bãi biển",
        options: ["Cảnh quan thiên nhiên tươi đẹp","Món ăn ngon","Ngôi nhà cổ","Chiếc xe mới"],
        correctAnswer: "Cảnh quan thiên nhiên tươi đẹp"
      }
    ]
  },
  {
    id: "lesson-vi-1003",
    unitId: "unit-vi-10",
    title: "Nhận Phòng Khách Sạn (Hotel Check-in)",
    description: "Đặt phòng hướng biển, dịch vụ bữa sáng miễn phí và nhận chìa khóa.",
    type: "standard",
    xp: 15,
    estimatedMinutes: 5,
    order: 3,
    status: "available",
    goals: [
      { id: "g1", description: "Nắm vững các từ vựng chủ đề Nhận Phòng Khách Sạn (Hotel Check-in)" },
      { id: "g2", description: "Luyện phát âm chuẩn và phản xạ câu qua các bài tập tương tác" }
    ],
    vocabulary: [
      { id: "v-vi-1003-1", word: "Khách sạn", translation: "Hotel", phonetic: "khahk sahn" },
      { id: "v-vi-1003-2", word: "Hướng biển", translation: "Sea view", phonetic: "heu-uhng byen" },
      { id: "v-vi-1003-3", word: "Bao gồm ăn sáng", translation: "Breakfast included", phonetic: "bow gohm an sahng" },
      { id: "v-vi-1003-4", word: "Chìa khóa / Thẻ phòng", translation: "Key / Room card", phonetic: "cheeh khwah" },
      { id: "v-vi-1003-5", word: "Nhận phòng", translation: "Check-in", phonetic: "nyuhn fawng" }
    ],
    phrases: [
      { id: "p-vi-1003-1", text: "Tôi muốn đặt một phòng đôi hướng biển đã bao gồm ăn sáng.", translation: "I would like to book a sea-view double room with breakfast included." },
      { id: "p-vi-1003-2", text: "Dạ đây là thẻ phòng của quý khách, thang máy ở bên trái ạ.", translation: "Here is your room card, the elevator is on the left." }
    ],
    activities: [
      {
        id: "act-vi-1003-1",
        type: "multiple_choice",
        skill: "reading",
        question: "'Bao gồm ăn sáng' nghĩa là gì?",
        options: ["Bữa sáng đã được tính miễn phí trong tiền phòng","Phải trả thêm tiền ăn sáng","Không có ăn sáng","Ăn tối miễn phí"],
        correctAnswer: "Bữa sáng đã được tính miễn phí trong tiền phòng"
      },
      {
        id: "act-vi-1003-2",
        type: "fill_blank",
        skill: "writing",
        question: "Điền từ: 'Tôi muốn làm thủ tục _____.' (bước vào ở khách sạn)",
        prompt: "Điền từ: 'Tôi muốn làm thủ tục _____.' (bước vào ở khách sạn)",
        options: ["nhận phòng","hướng biển","khách sạn","kỳ nghỉ"],
        correctAnswer: "nhận phòng"
      },
      {
        id: "act-vi-1003-3",
        type: "multiple_choice",
        skill: "reading",
        question: "Dịch: 'Chìa khóa phòng'",
        options: ["Room key","Room number","Invoice","Waiter"],
        correctAnswer: "Room key"
      },
      {
        id: "act-vi-1003-4",
        type: "match_pairs",
        skill: "reading",
        question: "Ghép các cặp từ vựng với nghĩa tiếng Việt tương ứng",
        pairs: [{"left":"Khách sạn","right":"Hotel"},{"left":"Hướng biển","right":"Sea view"},{"left":"Bao gồm ăn sáng","right":"Breakfast included"},{"left":"Chìa khóa / Thẻ phòng","right":"Key / Room card"}],
        correctAnswer: "all_matched"
      },
      {
        id: "act-vi-1003-5",
        type: "audio_listen",
        skill: "listening",
        question: "Lắng nghe và chọn đáp án chính xác:",
        prompt: "Khách sạn",
        options: ["Bữa sáng đã được tính miễn phí trong tiền phòng","Phải trả thêm tiền ăn sáng","Không có ăn sáng","Ăn tối miễn phí"],
        correctAnswer: "Bữa sáng đã được tính miễn phí trong tiền phòng"
      }
    ]
  },
  {
    id: "lesson-vi-1004",
    unitId: "unit-vi-10",
    title: "Tham Quan Phố Cổ & Chụp Ảnh (Sightseeing)",
    description: "Dạo bước phố cổ Hội An, thưởng thức ẩm thực và chụp ảnh kỷ niệm.",
    type: "standard",
    xp: 15,
    estimatedMinutes: 5,
    order: 4,
    status: "available",
    goals: [
      { id: "g1", description: "Nắm vững các từ vựng chủ đề Tham Quan Phố Cổ & Chụp Ảnh (Sightseeing)" },
      { id: "g2", description: "Luyện phát âm chuẩn và phản xạ câu qua các bài tập tương tác" }
    ],
    vocabulary: [
      { id: "v-vi-1004-1", word: "Phố cổ", translation: "Ancient town / Old quarter", phonetic: "fow koh" },
      { id: "v-vi-1004-2", word: "Di tích", translation: "Historical relic", phonetic: "zee teek" },
      { id: "v-vi-1004-3", word: "Chụp ảnh", translation: "Take photos", phonetic: "choop ahnh" },
      { id: "v-vi-1004-4", word: "Quà lưu niệm", translation: "Souvenir", phonetic: "kwah lew nyem" },
      { id: "v-vi-1004-5", word: "Đèn lồng", translation: "Lantern", phonetic: "den lawng" }
    ],
    phrases: [
      { id: "p-vi-1004-1", text: "Phố cổ Hội An lung linh sắc màu với hàng ngàn chiếc đèn lồng.", translation: "Hoi An ancient town is glowing with thousands of lanterns." },
      { id: "p-vi-1004-2", text: "Bạn có thể chụp giúp tôi một bức ảnh kỷ niệm ở đây được không?", translation: "Could you take a souvenir photo for me here?" }
    ],
    activities: [
      {
        id: "act-vi-1004-1",
        type: "multiple_choice",
        skill: "reading",
        question: "'Phố cổ Hội An' nổi tiếng với vật trang trí lung linh nào?",
        options: ["Đèn lồng rực rỡ sắc màu","Cây thông noel","Hoa tuyết","Đèn giao thông"],
        correctAnswer: "Đèn lồng rực rỡ sắc màu"
      },
      {
        id: "act-vi-1004-2",
        type: "fill_blank",
        skill: "writing",
        question: "Điền từ: 'Mua một món _____ tặng bạn bè.' (vật kỷ niệm)",
        prompt: "Điền từ: 'Mua một món _____ tặng bạn bè.' (vật kỷ niệm)",
        options: ["quà lưu niệm","chụp ảnh","phố cổ","di tích"],
        correctAnswer: "quà lưu niệm"
      },
      {
        id: "act-vi-1004-3",
        type: "multiple_choice",
        skill: "reading",
        question: "Dịch: 'Chụp ảnh kỷ niệm'",
        options: ["Take souvenir photos","Buy food","Walk fast","Sleep"],
        correctAnswer: "Take souvenir photos"
      },
      {
        id: "act-vi-1004-4",
        type: "match_pairs",
        skill: "reading",
        question: "Ghép các cặp từ vựng với nghĩa tiếng Việt tương ứng",
        pairs: [{"left":"Phố cổ","right":"Ancient town / Old quarter"},{"left":"Di tích","right":"Historical relic"},{"left":"Chụp ảnh","right":"Take photos"},{"left":"Quà lưu niệm","right":"Souvenir"}],
        correctAnswer: "all_matched"
      },
      {
        id: "act-vi-1004-5",
        type: "audio_listen",
        skill: "listening",
        question: "Lắng nghe và chọn đáp án chính xác:",
        prompt: "Phố cổ",
        options: ["Đèn lồng rực rỡ sắc màu","Cây thông noel","Hoa tuyết","Đèn giao thông"],
        correctAnswer: "Đèn lồng rực rỡ sắc màu"
      }
    ]
  },
  {
    id: "lesson-vi-1005",
    unitId: "unit-vi-10",
    title: "AI Practice: Khám Phá Vẻ Đẹp Việt Nam Cùng Hướng Dẫn Viên Mai",
    description: "Đàm thoại tiếng Việt về du lịch ba miền, ẩm thực phong phú cùng bạn Mai.",
    type: "audio_ai",
    xp: 25,
    estimatedMinutes: 5,
    order: 5,
    heroImage: images.mascotWelcome,
    status: "available",
    goals: [
      { id: "g1", description: "Luyện phản xạ giao tiếp thực tế với AI Teacher Mai" },
      { id: "g2", description: "Vận dụng từ vựng trọng tâm vào ngữ cảnh hội thoại tự nhiên" }
    ],
    vocabulary: [
      { id: "v-ai-vi-10-1", word: "Phố cổ", translation: "Ancient town / Old quarter" },
      { id: "v-ai-vi-10-2", word: "Đèn lồng", translation: "Lantern" },
      { id: "v-ai-vi-10-3", word: "Rất đẹp", translation: "Rất đẹp" },
      { id: "v-ai-vi-10-4", word: "Món ăn ngon", translation: "Món ăn ngon" },
      { id: "v-ai-vi-10-5", word: "Chụp ảnh", translation: "Take photos" }
    ],
    phrases: [],
    activities: [],
    aiTeacherPrompt: {
      scenario: "Bên bờ sông Hoài lung linh đèn lồng tại phố cổ Hội An",
      systemPrompt: "You are Mai, a warm, human, and energetic Vietnamese teacher. Speak mostly in English for clear guidance. Introduce Vietnamese words slowly: say the word once, give the English translation, and invite the student to repeat after you. Keep every reply strictly to 1 or 2 conversational sentences with friendly contractions (I'm, let's, that's). Listen closely to the student, praise correct pronunciation, and gently model errors again: 'So close! Try saying —'. Stay strictly on lesson words: Phố cổ, Đèn lồng, Rất đẹp, Món ăn ngon, Chụp ảnh. Never switch topics.",
      initialGreeting: "Chào mừng bạn đến với Hội An! Bạn đã ghé thăm những danh lam thắng cảnh nào của Việt Nam rồi? Bạn thấy ẩm thực ở đây thế nào?",
      targetVocabulary: ["Phố cổ","Đèn lồng","Rất đẹp","Món ăn ngon","Chụp ảnh"],
      suggestedResponses: ["Mình đã đi thăm vịnh Hạ Long và phố cổ Hội An, cảnh đẹp tuyệt vời!","Ẩm thực Việt Nam như phở và cao lầu cực kỳ ngon!","Mình đã chụp được rất nhiều bức ảnh đẹp làm kỷ niệm."],
      difficulty: "intermediate"
    }
  },
  {
    id: "lesson-vi-1101",
    unitId: "unit-vi-11",
    title: "Ước Mơ & Tương Lai (Thì tương lai 'Sẽ')",
    description: "Diễn đạt ước mơ và kế hoạch trong tương lai với phó từ 'Sẽ'.",
    type: "standard",
    xp: 15,
    estimatedMinutes: 5,
    order: 1,
    status: "available",
    goals: [
      { id: "g1", description: "Nắm vững các từ vựng chủ đề Ước Mơ & Tương Lai (Thì tương lai 'Sẽ')" },
      { id: "g2", description: "Luyện phát âm chuẩn và phản xạ câu qua các bài tập tương tác" }
    ],
    vocabulary: [
      { id: "v-vi-1101-1", word: "Tương lai", translation: "Future", phonetic: "teu-uhng lye" },
      { id: "v-vi-1101-2", word: "Sẽ làm", translation: "Will do (future)", phonetic: "seh lahm" },
      { id: "v-vi-1101-3", word: "Kế hoạch", translation: "Plan", phonetic: "kay hwahch" },
      { id: "v-vi-1101-4", word: "Du lịch thế giới", translation: "Travel the world", phonetic: "zoo leek tay zuy" },
      { id: "v-vi-1101-5", word: "Ước mơ", translation: "Dream / Aspiration", phonetic: "eu-uhk muh" }
    ],
    phrases: [
      { id: "p-vi-1101-1", text: "Trong tương lai, tôi sẽ mở một công ty khởi nghiệp công nghệ.", translation: "In the future, I will start a technology startup." },
      { id: "p-vi-1101-2", text: "Ước mơ lớn nhất của tôi là được đi du lịch vòng quanh thế giới.", translation: "My biggest dream is to travel around the world." }
    ],
    activities: [
      {
        id: "act-vi-1101-1",
        type: "multiple_choice",
        skill: "reading",
        question: "Từ 'Sẽ' dùng để chỉ hành động ở thời điểm nào?",
        options: ["Tương lai (chưa xảy ra)","Quá khứ (đã xong)","Hiện tại (đang làm)","Không bao giờ"],
        correctAnswer: "Tương lai (chưa xảy ra)"
      },
      {
        id: "act-vi-1101-2",
        type: "fill_blank",
        skill: "writing",
        question: "Điền từ: 'Năm sau tôi _____ đi du học.' (tương lai)",
        prompt: "Điền từ: 'Năm sau tôi _____ đi du học.' (tương lai)",
        options: ["sẽ","đã","đang","chưa"],
        correctAnswer: "sẽ"
      },
      {
        id: "act-vi-1101-3",
        type: "multiple_choice",
        skill: "reading",
        question: "Dịch: 'Ước mơ của tôi'",
        options: ["My dream","My school","My house","My phone"],
        correctAnswer: "My dream"
      },
      {
        id: "act-vi-1101-4",
        type: "match_pairs",
        skill: "reading",
        question: "Ghép các cặp từ vựng với nghĩa tiếng Việt tương ứng",
        pairs: [{"left":"Tương lai","right":"Future"},{"left":"Sẽ làm","right":"Will do (future)"},{"left":"Kế hoạch","right":"Plan"},{"left":"Du lịch thế giới","right":"Travel the world"}],
        correctAnswer: "all_matched"
      },
      {
        id: "act-vi-1101-5",
        type: "audio_listen",
        skill: "listening",
        question: "Lắng nghe và chọn đáp án chính xác:",
        prompt: "Tương lai",
        options: ["Tương lai (chưa xảy ra)","Quá khứ (đã xong)","Hiện tại (đang làm)","Không bao giờ"],
        correctAnswer: "Tương lai (chưa xảy ra)"
      }
    ]
  },
  {
    id: "lesson-vi-1102",
    unitId: "unit-vi-11",
    title: "Ứng Dụng Điện Thoại & Cuộc Sống Số (Smart Life)",
    description: "Từ vựng về điện thoại thông minh, ứng dụng di động và thanh toán số.",
    type: "standard",
    xp: 15,
    estimatedMinutes: 5,
    order: 2,
    status: "available",
    goals: [
      { id: "g1", description: "Nắm vững các từ vựng chủ đề Ứng Dụng Điện Thoại & Cuộc Sống Số (Smart Life)" },
      { id: "g2", description: "Luyện phát âm chuẩn và phản xạ câu qua các bài tập tương tác" }
    ],
    vocabulary: [
      { id: "v-vi-1102-1", word: "Ứng dụng / App", translation: "App / Mobile application", phonetic: "eung zoong" },
      { id: "v-vi-1102-2", word: "Điện thoại thông minh", translation: "Smartphone", phonetic: "dyen thwy tawng min" },
      { id: "v-vi-1102-3", word: "Tải về", translation: "Download", phonetic: "tye veh" },
      { id: "v-vi-1102-4", word: "Mật khẩu", translation: "Password", phonetic: "maht khow" },
      { id: "v-vi-1102-5", word: "Thanh toán trực tuyến", translation: "Online payment", phonetic: "thahn twahn cheuk tyen" }
    ],
    phrases: [
      { id: "p-vi-1102-1", text: "Tôi sử dụng ứng dụng này mỗi ngày để học tiếng Anh và tiếng Việt.", translation: "I use this app every day to learn English and Vietnamese." },
      { id: "p-vi-1102-2", text: "Hãy nhớ bảo vệ mật khẩu của bạn thật an toàn nhé.", translation: "Remember to protect your password safely." }
    ],
    activities: [
      {
        id: "act-vi-1102-1",
        type: "multiple_choice",
        skill: "reading",
        question: "'Mật khẩu' dùng để làm gì?",
        options: ["Bảo vệ an toàn tài khoản cá nhân","Gọi điện thoại","Nghe nhạc","Chụp ảnh"],
        correctAnswer: "Bảo vệ an toàn tài khoản cá nhân"
      },
      {
        id: "act-vi-1102-2",
        type: "fill_blank",
        skill: "writing",
        question: "Điền từ: 'Nhập _____ để đăng nhập.' (mã bí mật)",
        prompt: "Điền từ: 'Nhập _____ để đăng nhập.' (mã bí mật)",
        options: ["mật khẩu","ứng dụng","tải về","tương lai"],
        correctAnswer: "mật khẩu"
      },
      {
        id: "act-vi-1102-3",
        type: "multiple_choice",
        skill: "reading",
        question: "Dịch: 'Mua sắm trực tuyến'",
        options: ["Online shopping","Go to market","Sell goods","Change items"],
        correctAnswer: "Online shopping"
      },
      {
        id: "act-vi-1102-4",
        type: "match_pairs",
        skill: "reading",
        question: "Ghép các cặp từ vựng với nghĩa tiếng Việt tương ứng",
        pairs: [{"left":"Ứng dụng / App","right":"App / Mobile application"},{"left":"Điện thoại thông minh","right":"Smartphone"},{"left":"Tải về","right":"Download"},{"left":"Mật khẩu","right":"Password"}],
        correctAnswer: "all_matched"
      },
      {
        id: "act-vi-1102-5",
        type: "audio_listen",
        skill: "listening",
        question: "Lắng nghe và chọn đáp án chính xác:",
        prompt: "Ứng dụng / App",
        options: ["Bảo vệ an toàn tài khoản cá nhân","Gọi điện thoại","Nghe nhạc","Chụp ảnh"],
        correctAnswer: "Bảo vệ an toàn tài khoản cá nhân"
      }
    ]
  },
  {
    id: "lesson-vi-1103",
    unitId: "unit-vi-11",
    title: "Trí Tuệ Nhân Tạo & Robot (AI & Tech)",
    description: "Bàn luận về AI, robot thông minh và sự phát triển công nghệ trong đời sống.",
    type: "standard",
    xp: 15,
    estimatedMinutes: 5,
    order: 3,
    status: "available",
    goals: [
      { id: "g1", description: "Nắm vững các từ vựng chủ đề Trí Tuệ Nhân Tạo & Robot (AI & Tech)" },
      { id: "g2", description: "Luyện phát âm chuẩn và phản xạ câu qua các bài tập tương tác" }
    ],
    vocabulary: [
      { id: "v-vi-1103-1", word: "Trí tuệ nhân tạo (AI)", translation: "Artificial Intelligence (AI)", phonetic: "chee tway nyuhn tow" },
      { id: "v-vi-1103-2", word: "Người máy / Robot", translation: "Robot", phonetic: "ngu-oy my" },
      { id: "v-vi-1103-3", word: "Thay đổi", translation: "Change / Transformation", phonetic: "tye doy" },
      { id: "v-vi-1103-4", word: "Tiện lợi", translation: "Convenient", phonetic: "tyen loy" },
      { id: "v-vi-1103-5", word: "Công nghệ", translation: "Technology", phonetic: "kawng ngeh" }
    ],
    phrases: [
      { id: "p-vi-1103-1", text: "Trí tuệ nhân tạo đang giúp cuộc sống của chúng ta tiện lợi hơn.", translation: "Artificial intelligence is making our lives more convenient." },
      { id: "p-vi-1103-2", text: "Công nghệ số mở ra rất nhiều cơ hội việc làm mới cho giới trẻ.", translation: "Digital technology opens up many new job opportunities for youth." }
    ],
    activities: [
      {
        id: "act-vi-1103-1",
        type: "multiple_choice",
        skill: "reading",
        question: "'Tiện lợi' có nghĩa là gì?",
        options: ["Thuận tiện, dễ dàng trong sinh hoạt","Khó khăn","Nguy hiểm","Nhàm chán"],
        correctAnswer: "Thuận tiện, dễ dàng trong sinh hoạt"
      },
      {
        id: "act-vi-1103-2",
        type: "fill_blank",
        skill: "writing",
        question: "Điền từ: 'Cuộc sống ngày càng _____ hơn.' (thuận tiện)",
        prompt: "Điền từ: 'Cuộc sống ngày càng _____ hơn.' (thuận tiện)",
        options: ["tiện lợi","người máy","thay đổi","công nghệ"],
        correctAnswer: "tiện lợi"
      },
      {
        id: "act-vi-1103-3",
        type: "multiple_choice",
        skill: "reading",
        question: "Dịch: 'Công nghệ hiện đại'",
        options: ["Modern technology","Old house","Broken phone","Slow train"],
        correctAnswer: "Modern technology"
      },
      {
        id: "act-vi-1103-4",
        type: "match_pairs",
        skill: "reading",
        question: "Ghép các cặp từ vựng với nghĩa tiếng Việt tương ứng",
        pairs: [{"left":"Trí tuệ nhân tạo (AI)","right":"Artificial Intelligence (AI)"},{"left":"Người máy / Robot","right":"Robot"},{"left":"Thay đổi","right":"Change / Transformation"},{"left":"Tiện lợi","right":"Convenient"}],
        correctAnswer: "all_matched"
      },
      {
        id: "act-vi-1103-5",
        type: "audio_listen",
        skill: "listening",
        question: "Lắng nghe và chọn đáp án chính xác:",
        prompt: "Trí tuệ nhân tạo (AI)",
        options: ["Thuận tiện, dễ dàng trong sinh hoạt","Khó khăn","Nguy hiểm","Nhàm chán"],
        correctAnswer: "Thuận tiện, dễ dàng trong sinh hoạt"
      }
    ]
  },
  {
    id: "lesson-vi-1104",
    unitId: "unit-vi-11",
    title: "Mục Tiêu Năm Mới & Quyết Tâm (New Goals)",
    description: "Đặt ra mục tiêu, rèn luyện kỹ năng và quyết tâm chinh phục thành công.",
    type: "standard",
    xp: 15,
    estimatedMinutes: 5,
    order: 4,
    status: "available",
    goals: [
      { id: "g1", description: "Nắm vững các từ vựng chủ đề Mục Tiêu Năm Mới & Quyết Tâm (New Goals)" },
      { id: "g2", description: "Luyện phát âm chuẩn và phản xạ câu qua các bài tập tương tác" }
    ],
    vocabulary: [
      { id: "v-vi-1104-1", word: "Mục tiêu", translation: "Goal / Objective", phonetic: "mook tyew" },
      { id: "v-vi-1104-2", word: "Đạt được", translation: "Achieve", phonetic: "daht deu-uhk" },
      { id: "v-vi-1104-3", word: "Tiến bộ", translation: "Improve / Progress", phonetic: "tyen bow" },
      { id: "v-vi-1104-4", word: "Cố lên!", translation: "Keep it up! / Fighting!", phonetic: "koh len" },
      { id: "v-vi-1104-5", word: "Thành công", translation: "Success", phonetic: "thahnh kawng" }
    ],
    phrases: [
      { id: "p-vi-1104-1", text: "Mục tiêu lớn nhất năm nay của tôi là nói ngoại ngữ thật lưu loát.", translation: "My biggest goal this year is to speak foreign languages fluently." },
      { id: "p-vi-1104-2", text: "Chỉ cần kiên trì luyện tập mỗi ngày, bạn nhất định sẽ tiến bộ!", translation: "Just practice persistently every day, you will definitely improve!" }
    ],
    activities: [
      {
        id: "act-vi-1104-1",
        type: "multiple_choice",
        skill: "reading",
        question: "'Cố lên!' là câu nói dùng để làm gì?",
        options: ["Cổ vũ tinh thần, khích lệ nỗ lực","Nói lời từ biệt","Xin lỗi","Chúc ngủ ngon"],
        correctAnswer: "Cổ vũ tinh thần, khích lệ nỗ lực"
      },
      {
        id: "act-vi-1104-2",
        type: "fill_blank",
        skill: "writing",
        question: "Điền từ: 'Khả năng giao tiếp đã _____ rõ rệt.' (phát triển tốt hơn)",
        prompt: "Điền từ: 'Khả năng giao tiếp đã _____ rõ rệt.' (phát triển tốt hơn)",
        options: ["tiến bộ","mục tiêu","thành công","ứng dụng"],
        correctAnswer: "tiến bộ"
      },
      {
        id: "act-vi-1104-3",
        type: "multiple_choice",
        skill: "reading",
        question: "Dịch: 'Đạt được mục tiêu'",
        options: ["Achieve the goal","Forget plan","Stop running","Sleep"],
        correctAnswer: "Achieve the goal"
      },
      {
        id: "act-vi-1104-4",
        type: "match_pairs",
        skill: "reading",
        question: "Ghép các cặp từ vựng với nghĩa tiếng Việt tương ứng",
        pairs: [{"left":"Mục tiêu","right":"Goal / Objective"},{"left":"Đạt được","right":"Achieve"},{"left":"Tiến bộ","right":"Improve / Progress"},{"left":"Cố lên!","right":"Keep it up! / Fighting!"}],
        correctAnswer: "all_matched"
      },
      {
        id: "act-vi-1104-5",
        type: "audio_listen",
        skill: "listening",
        question: "Lắng nghe và chọn đáp án chính xác:",
        prompt: "Mục tiêu",
        options: ["Cổ vũ tinh thần, khích lệ nỗ lực","Nói lời từ biệt","Xin lỗi","Chúc ngủ ngon"],
        correctAnswer: "Cổ vũ tinh thần, khích lệ nỗ lực"
      }
    ]
  },
  {
    id: "lesson-vi-1105",
    unitId: "unit-vi-11",
    title: "AI Practice: Thảo Luận Ước Mơ Tương Lai Cùng Thầy Khoa",
    description: "Thực hành diễn đạt ý định tương lai 'Sẽ' và công nghệ cùng thầy Khoa.",
    type: "audio_ai",
    xp: 25,
    estimatedMinutes: 5,
    order: 5,
    heroImage: images.mascotWelcome,
    status: "available",
    goals: [
      { id: "g1", description: "Luyện phản xạ giao tiếp thực tế với AI Teacher Mai" },
      { id: "g2", description: "Vận dụng từ vựng trọng tâm vào ngữ cảnh hội thoại tự nhiên" }
    ],
    vocabulary: [
      { id: "v-ai-vi-11-1", word: "Tương lai", translation: "Future" },
      { id: "v-ai-vi-11-2", word: "Sẽ làm", translation: "Will do (future)" },
      { id: "v-ai-vi-11-3", word: "Mục tiêu", translation: "Goal / Objective" },
      { id: "v-ai-vi-11-4", word: "Tiện lợi", translation: "Convenient" },
      { id: "v-ai-vi-11-5", word: "Cố lên", translation: "Cố lên" }
    ],
    phrases: [],
    activities: [],
    aiTeacherPrompt: {
      scenario: "Không gian làm việc sáng tạo tại Khu Công nghệ cao TP. Thủ Đức",
      systemPrompt: "You are Mai, a warm, human, and energetic Vietnamese teacher. Speak mostly in English for clear guidance. Introduce Vietnamese words slowly: say the word once, give the English translation, and invite the student to repeat after you. Keep every reply strictly to 1 or 2 conversational sentences with friendly contractions (I'm, let's, that's). Listen closely to the student, praise correct pronunciation, and gently model errors again: 'So close! Try saying —'. Stay strictly on lesson words: Tương lai, Sẽ làm, Mục tiêu, Tiện lợi, Cố lên. Never switch topics.",
      initialGreeting: "Chào bạn! Hãy cùng chia sẻ về tương lai nhé: Bạn có những dự định và ước mơ lớn nào trong những năm tới?",
      targetVocabulary: ["Tương lai","Sẽ làm","Mục tiêu","Tiện lợi","Cố lên"],
      suggestedResponses: ["Trong tương lai em sẽ làm việc trong ngành công nghệ thông tin.","Em muốn nói tiếng Anh và tiếng Việt thật thành thạo.","Em tin rằng công nghệ sẽ mang lại rất nhiều cơ hội tốt!"],
      difficulty: "intermediate"
    }
  },
  {
    id: "lesson-vi-1201",
    unitId: "unit-vi-12",
    title: "Bày Tỏ Quan Điểm (Theo ý kiến của tôi...)",
    description: "Học cách nêu ý kiến cá nhân lịch sự: 'Theo tôi...', 'Tôi nghĩ rằng...'.",
    type: "standard",
    xp: 15,
    estimatedMinutes: 5,
    order: 1,
    status: "available",
    goals: [
      { id: "g1", description: "Nắm vững các từ vựng chủ đề Bày Tỏ Quan Điểm (Theo ý kiến của tôi...)" },
      { id: "g2", description: "Luyện phát âm chuẩn và phản xạ câu qua các bài tập tương tác" }
    ],
    vocabulary: [
      { id: "v-vi-1201-1", word: "Theo tôi", translation: "In my opinion", phonetic: "tay-oh toy" },
      { id: "v-vi-1201-2", word: "Tôi nghĩ rằng", translation: "I think that...", phonetic: "toy ngee zahng" },
      { id: "v-vi-1201-3", word: "Đồng ý", translation: "Agree", phonetic: "dawng ee" },
      { id: "v-vi-1201-4", word: "Phản đối", translation: "Disagree", phonetic: "fahn doy" },
      { id: "v-vi-1201-5", word: "Quan trọng", translation: "Important", phonetic: "kwahn chawng" }
    ],
    phrases: [
      { id: "p-vi-1201-1", text: "Theo tôi, việc học ngoại ngữ mở ra cánh cửa nhìn ra thế giới.", translation: "In my opinion, learning foreign languages opens doors to the world." },
      { id: "p-vi-1201-2", text: "Tôi hoàn toàn đồng ý với góc nhìn của bạn.", translation: "I completely agree with your viewpoint." }
    ],
    activities: [
      {
        id: "act-vi-1201-1",
        type: "multiple_choice",
        skill: "reading",
        question: "'Theo tôi' được dùng khi nào?",
        options: ["Mở đầu nêu quan điểm cá nhân một cách lịch sự","Chào tạm biệt","Hỏi giá tiền","Mắng mỏ người khác"],
        correctAnswer: "Mở đầu nêu quan điểm cá nhân một cách lịch sự"
      },
      {
        id: "act-vi-1201-2",
        type: "fill_blank",
        skill: "writing",
        question: "Điền từ: 'Theo _____ của tôi, cuốn sách này rất hay.' (suy nghĩ)",
        prompt: "Điền từ: 'Theo _____ của tôi, cuốn sách này rất hay.' (suy nghĩ)",
        options: ["ý kiến","đồng ý","phản đối","tương lai"],
        correctAnswer: "ý kiến"
      },
      {
        id: "act-vi-1201-3",
        type: "multiple_choice",
        skill: "reading",
        question: "Dịch: 'Tôi đồng ý'",
        options: ["I agree","I don't know","I refuse","I am busy"],
        correctAnswer: "I agree"
      },
      {
        id: "act-vi-1201-4",
        type: "match_pairs",
        skill: "reading",
        question: "Ghép các cặp từ vựng với nghĩa tiếng Việt tương ứng",
        pairs: [{"left":"Theo tôi","right":"In my opinion"},{"left":"Tôi nghĩ rằng","right":"I think that..."},{"left":"Đồng ý","right":"Agree"},{"left":"Phản đối","right":"Disagree"}],
        correctAnswer: "all_matched"
      },
      {
        id: "act-vi-1201-5",
        type: "audio_listen",
        skill: "listening",
        question: "Lắng nghe và chọn đáp án chính xác:",
        prompt: "Theo tôi",
        options: ["Mở đầu nêu quan điểm cá nhân một cách lịch sự","Chào tạm biệt","Hỏi giá tiền","Mắng mỏ người khác"],
        correctAnswer: "Mở đầu nêu quan điểm cá nhân một cách lịch sự"
      }
    ]
  },
  {
    id: "lesson-vi-1202",
    unitId: "unit-vi-12",
    title: "Nét Đẹp Văn Hóa & Phong Tục Việt Nam (Vietnamese Culture)",
    description: "Tìm hiểu văn hóa Tết cổ truyền, trang phục Áo dài và ẩm thực gia đình.",
    type: "standard",
    xp: 15,
    estimatedMinutes: 5,
    order: 2,
    status: "available",
    goals: [
      { id: "g1", description: "Nắm vững các từ vựng chủ đề Nét Đẹp Văn Hóa & Phong Tục Việt Nam (Vietnamese Culture)" },
      { id: "g2", description: "Luyện phát âm chuẩn và phản xạ câu qua các bài tập tương tác" }
    ],
    vocabulary: [
      { id: "v-vi-1202-1", word: "Văn hóa", translation: "Culture", phonetic: "vuhn hwah" },
      { id: "v-vi-1202-2", word: "Áo dài", translation: "Traditional Ao Dai", phonetic: "ow zye" },
      { id: "v-vi-1202-3", word: "Tết cổ truyền", translation: "Traditional Tet holiday", phonetic: "teht koh choo-yen" },
      { id: "v-vi-1202-4", word: "Ẩm thực", translation: "Cuisine / Culinary art", phonetic: "uhm theuk" },
      { id: "v-vi-1202-5", word: "Truyền thống", translation: "Tradition", phonetic: "choo-yen thawng" }
    ],
    phrases: [
      { id: "p-vi-1202-1", text: "Tết cổ truyền là dịp sum họp gia đình ấm cúng và thiêng liêng nhất.", translation: "Traditional Tet is the warmest and most sacred family gathering." },
      { id: "p-vi-1202-2", text: "Chiếc áo dài thướt tha tôn vinh nét đẹp dịu dàng của người phụ nữ Việt.", translation: "The graceful Ao Dai honors the gentle beauty of Vietnamese women." }
    ],
    activities: [
      {
        id: "act-vi-1202-1",
        type: "multiple_choice",
        skill: "reading",
        question: "'Tết cổ truyền' mang ý nghĩa nhân văn sâu sắc nào của người Việt?",
        options: ["Đoàn tụ gia đình và nhớ về nguồn cội","Đi săn bắn","Tập thể thao","Đi ngủ cả ngày"],
        correctAnswer: "Đoàn tụ gia đình và nhớ về nguồn cội"
      },
      {
        id: "act-vi-1202-2",
        type: "fill_blank",
        skill: "writing",
        question: "Điền từ: 'Mặc _____ đi lễ chùa đầu năm.' (trang phục truyền thống)",
        prompt: "Điền từ: 'Mặc _____ đi lễ chùa đầu năm.' (trang phục truyền thống)",
        options: ["áo dài","văn hóa","ẩm thực","truyền thống"],
        correctAnswer: "áo dài"
      },
      {
        id: "act-vi-1202-3",
        type: "multiple_choice",
        skill: "reading",
        question: "Dịch: 'Văn hóa truyền thống'",
        options: ["Traditional culture","Modern food","Western song","New car"],
        correctAnswer: "Traditional culture"
      },
      {
        id: "act-vi-1202-4",
        type: "match_pairs",
        skill: "reading",
        question: "Ghép các cặp từ vựng với nghĩa tiếng Việt tương ứng",
        pairs: [{"left":"Văn hóa","right":"Culture"},{"left":"Áo dài","right":"Traditional Ao Dai"},{"left":"Tết cổ truyền","right":"Traditional Tet holiday"},{"left":"Ẩm thực","right":"Cuisine / Culinary art"}],
        correctAnswer: "all_matched"
      },
      {
        id: "act-vi-1202-5",
        type: "audio_listen",
        skill: "listening",
        question: "Lắng nghe và chọn đáp án chính xác:",
        prompt: "Văn hóa",
        options: ["Đoàn tụ gia đình và nhớ về nguồn cội","Đi săn bắn","Tập thể thao","Đi ngủ cả ngày"],
        correctAnswer: "Đoàn tụ gia đình và nhớ về nguồn cội"
      }
    ]
  },
  {
    id: "lesson-vi-1203",
    unitId: "unit-vi-12",
    title: "Tục Ngữ & Ca Dao Việt Nam (Proverbs)",
    description: "Làm quen với các câu ca dao tục ngữ đúc kết kinh nghiệm sống quý báu.",
    type: "standard",
    xp: 15,
    estimatedMinutes: 5,
    order: 3,
    status: "available",
    goals: [
      { id: "g1", description: "Nắm vững các từ vựng chủ đề Tục Ngữ & Ca Dao Việt Nam (Proverbs)" },
      { id: "g2", description: "Luyện phát âm chuẩn và phản xạ câu qua các bài tập tương tác" }
    ],
    vocabulary: [
      { id: "v-vi-1203-1", word: "Có công mài sắt có ngày nên kim", translation: "Persistence yields success", phonetic: "kaw kawng mye saht" },
      { id: "v-vi-1203-2", word: "Ăn quả nhớ kẻ trồng cây", translation: "Gratitude to benefactors", phonetic: "an kwah nyuh keh chawng ky" },
      { id: "v-vi-1203-3", word: "Tuyệt vời!", translation: "Wonderful! / Excellent!", phonetic: "tooyet vuh-ee" },
      { id: "v-vi-1203-4", word: "Cố lên!", translation: "Keep going!", phonetic: "koh len" },
      { id: "v-vi-1203-5", word: "Tục ngữ", translation: "Proverb", phonetic: "took ngeu" }
    ],
    phrases: [
      { id: "p-vi-1203-1", text: "'Có công mài sắt có ngày nên kim', sự kiên trì đã giúp bạn chinh phục A2!", translation: "'Persistence yields success', your perseverance helped you conquer A2!" },
      { id: "p-vi-1203-2", text: "Bạn làm bài thi xuất sắc lắm, thật tuyệt vời!", translation: "You did the test excellently, absolutely wonderful!" }
    ],
    activities: [
      {
        id: "act-vi-1203-1",
        type: "multiple_choice",
        skill: "reading",
        question: "Ý nghĩa của câu 'Có công mài sắt có ngày nên kim' là gì?",
        options: ["Kiên trì nỗ lực ắt sẽ gặt hái thành công","Mua sắt về làm kim","Đi làm thợ kim hoàn","Bán kim may"],
        correctAnswer: "Kiên trì nỗ lực ắt sẽ gặt hái thành công"
      },
      {
        id: "act-vi-1203-2",
        type: "fill_blank",
        skill: "writing",
        question: "Điền từ: 'Ăn quả nhớ kẻ _____.' (nhớ ơn tiền nhân)",
        prompt: "Điền từ: 'Ăn quả nhớ kẻ _____.' (nhớ ơn tiền nhân)",
        options: ["trồng cây","mài sắt","tuyệt vời","tục ngữ"],
        correctAnswer: "trồng cây"
      },
      {
        id: "act-vi-1203-3",
        type: "multiple_choice",
        skill: "reading",
        question: "Dịch: 'Thật tuyệt vời!'",
        options: ["Wonderful! / Great!","Good morning!","Go to sleep!","Sorry!"],
        correctAnswer: "Wonderful! / Great!"
      },
      {
        id: "act-vi-1203-4",
        type: "match_pairs",
        skill: "reading",
        question: "Ghép các cặp từ vựng với nghĩa tiếng Việt tương ứng",
        pairs: [{"left":"Có công mài sắt có ngày nên kim","right":"Persistence yields success"},{"left":"Ăn quả nhớ kẻ trồng cây","right":"Gratitude to benefactors"},{"left":"Tuyệt vời!","right":"Wonderful! / Excellent!"},{"left":"Cố lên!","right":"Keep going!"}],
        correctAnswer: "all_matched"
      },
      {
        id: "act-vi-1203-5",
        type: "audio_listen",
        skill: "listening",
        question: "Lắng nghe và chọn đáp án chính xác:",
        prompt: "Có công mài sắt có ngày nên kim",
        options: ["Kiên trì nỗ lực ắt sẽ gặt hái thành công","Mua sắt về làm kim","Đi làm thợ kim hoàn","Bán kim may"],
        correctAnswer: "Kiên trì nỗ lực ắt sẽ gặt hái thành công"
      }
    ]
  },
  {
    id: "lesson-vi-1204",
    unitId: "unit-vi-12",
    title: "Tổng Ôn Toàn Diện Trình Độ A2 (A2 Capstone Review)",
    description: "Tổng ôn hệ thống từ vựng, ngữ pháp từ Unit 1 đến 12 để tốt nghiệp A2.",
    type: "standard",
    xp: 15,
    estimatedMinutes: 5,
    order: 4,
    status: "available",
    goals: [
      { id: "g1", description: "Nắm vững các từ vựng chủ đề Tổng Ôn Toàn Diện Trình Độ A2 (A2 Capstone Review)" },
      { id: "g2", description: "Luyện phát âm chuẩn và phản xạ câu qua các bài tập tương tác" }
    ],
    vocabulary: [
      { id: "v-vi-1204-1", word: "Ôn tập", translation: "Review", phonetic: "ohn tahp" },
      { id: "v-vi-1204-2", word: "Tự tin", translation: "Confident", phonetic: "teu teen" },
      { id: "v-vi-1204-3", word: "Trình độ A2", translation: "CEFR A2 Level", phonetic: "chenh doh a-hai" },
      { id: "v-vi-1204-4", word: "Chúc mừng", translation: "Congratulations", phonetic: "chook meung" },
      { id: "v-vi-1204-5", word: "Chứng chỉ", translation: "Certificate", phonetic: "cheung chee" }
    ],
    phrases: [
      { id: "p-vi-1204-1", text: "Nhiệt liệt chúc mừng bạn đã xuất sắc hoàn thành tất cả 12 Unit học!", translation: "Warmly congratulate you on completing all 12 Units excellently!" },
      { id: "p-vi-1204-2", text: "Giờ đây tôi đã hoàn toàn tự tin khi giao tiếp bằng tiếng Việt hàng ngày.", translation: "Now I am completely confident communicating in daily Vietnamese." }
    ],
    activities: [
      {
        id: "act-vi-1204-1",
        type: "multiple_choice",
        skill: "reading",
        question: "'Chúc mừng' mang ý nghĩa gì?",
        options: ["Congratulations (chia vui thành tựu)","Xin lỗi","Chào tạm biệt","Hỏi đường"],
        correctAnswer: "Congratulations (chia vui thành tựu)"
      },
      {
        id: "act-vi-1204-2",
        type: "fill_blank",
        skill: "writing",
        question: "Điền từ: 'Xin nhiệt liệt _____ bạn đã tốt nghiệp A2!' (chia vui)",
        prompt: "Điền từ: 'Xin nhiệt liệt _____ bạn đã tốt nghiệp A2!' (chia vui)",
        options: ["chúc mừng","ôn tập","tự tin","ý kiến"],
        correctAnswer: "chúc mừng"
      },
      {
        id: "act-vi-1204-3",
        type: "multiple_choice",
        skill: "reading",
        question: "Dịch: 'Rất tự tin'",
        options: ["Very confident","Very tired","Very hungry","Very worried"],
        correctAnswer: "Very confident"
      },
      {
        id: "act-vi-1204-4",
        type: "match_pairs",
        skill: "reading",
        question: "Ghép các cặp từ vựng với nghĩa tiếng Việt tương ứng",
        pairs: [{"left":"Ôn tập","right":"Review"},{"left":"Tự tin","right":"Confident"},{"left":"Trình độ A2","right":"CEFR A2 Level"},{"left":"Chúc mừng","right":"Congratulations"}],
        correctAnswer: "all_matched"
      },
      {
        id: "act-vi-1204-5",
        type: "audio_listen",
        skill: "listening",
        question: "Lắng nghe và chọn đáp án chính xác:",
        prompt: "Ôn tập",
        options: ["Congratulations (chia vui thành tựu)","Xin lỗi","Chào tạm biệt","Hỏi đường"],
        correctAnswer: "Congratulations (chia vui thành tựu)"
      }
    ]
  },
  {
    id: "lesson-vi-1205",
    unitId: "unit-vi-12",
    title: "AI Practice: Lễ Trao Chứng Chỉ Tốt Nghiệp CEFR A2 Cùng Thầy An",
    description: "Đàm thoại tự do tốt nghiệp chứng chỉ A2 tổng kết cả 12 Unit cùng thầy An.",
    type: "audio_ai",
    xp: 25,
    estimatedMinutes: 5,
    order: 5,
    heroImage: images.mascotWelcome,
    status: "available",
    goals: [
      { id: "g1", description: "Luyện phản xạ giao tiếp thực tế với AI Teacher Mai" },
      { id: "g2", description: "Vận dụng từ vựng trọng tâm vào ngữ cảnh hội thoại tự nhiên" }
    ],
    vocabulary: [
      { id: "v-ai-vi-12-1", word: "Chúc mừng", translation: "Congratulations" },
      { id: "v-ai-vi-12-2", word: "Trình độ A2", translation: "CEFR A2 Level" },
      { id: "v-ai-vi-12-3", word: "Tự tin", translation: "Confident" },
      { id: "v-ai-vi-12-4", word: "Rất vui", translation: "Rất vui" },
      { id: "v-ai-vi-12-5", word: "Cảm ơn thầy", translation: "Cảm ơn thầy" }
    ],
    phrases: [],
    activities: [],
    aiTeacherPrompt: {
      scenario: "Sân khấu lễ tốt nghiệp khóa học ngôn ngữ tại Nhà hát Lớn Hà Nội",
      systemPrompt: "You are Mai, a warm, human, and energetic Vietnamese teacher. Speak mostly in English for clear guidance. Introduce Vietnamese words slowly: say the word once, give the English translation, and invite the student to repeat after you. Keep every reply strictly to 1 or 2 conversational sentences with friendly contractions (I'm, let's, that's). Listen closely to the student, praise correct pronunciation, and gently model errors again: 'So close! Try saying —'. Stay strictly on lesson words: Chúc mừng, Trình độ A2, Tự tin, Rất vui, Cảm ơn thầy. Never switch topics.",
      initialGreeting: "Nhiệt liệt chúc mừng bạn! Bạn đã hoàn thành xuất sắc tất cả 12 Unit và chính thức đạt trình độ CEFR A2! Cảm xúc của bạn lúc này thế nào?",
      targetVocabulary: ["Chúc mừng","Trình độ A2","Tự tin","Rất vui","Cảm ơn thầy"],
      suggestedResponses: ["Em cảm thấy vô cùng tự hào và tự tin sau khi hoàn thành 12 Unit ạ!","Em thích nhất các bài học về du lịch và văn hóa truyền thống.","Em xin chân thành cảm ơn thầy An đã luôn đồng hành và khích lệ em!"],
      difficulty: "intermediate"
    }
  },
];
