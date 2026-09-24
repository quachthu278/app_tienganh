import { Lesson } from "@/types/learning";
import { images } from "@/constants/images";

export const JA_LESSONS: Lesson[] = [
  {
    id: "lesson-ja-101",
    unitId: "unit-ja-1",
    title: "Konnichiwa & Lời Chào Cơ Bản",
    description: "Học các lời chào thông dụng và cách tạm biệt trong tiếng Nhật.",
    type: "standard",
    xp: 15,
    estimatedMinutes: 5,
    order: 1,
    status: "available",
    goals: [
      { id: "g1", description: "Nắm vững các từ vựng chủ đề Konnichiwa & Lời Chào Cơ Bản" },
      { id: "g2", description: "Luyện phát âm chuẩn và phản xạ câu qua các bài tập tương tác" }
    ],
    vocabulary: [
      { id: "v-ja-101-1", word: "Konnichiwa", translation: "Xin chào (ban ngày)", phonetic: "kohn-nee-chee-wah" },
      { id: "v-ja-101-2", word: "Ohayou gozaimasu", translation: "Chào buổi sáng", phonetic: "oh-hah-yoh goh-zahy-mahs" },
      { id: "v-ja-101-3", word: "Konbanwa", translation: "Chào buổi tối", phonetic: "kohn-bahn-wah" },
      { id: "v-ja-101-4", word: "Sayounara", translation: "Tạm biệt", phonetic: "sah-yoh-nah-rah" },
      { id: "v-ja-101-5", word: "Mata ne", translation: "Hẹn gặp lại sau", phonetic: "mah-tah neh" }
    ],
    phrases: [
      { id: "p-ja-101-1", text: "Konnichiwa! Ogenki desu ka?", translation: "Xin chào! Bạn khỏe không?" },
      { id: "p-ja-101-2", text: "Mata ashita aimashou!", translation: "Hẹn gặp lại bạn vào ngày mai nhé!" }
    ],
    activities: [
      {
        id: "act-ja-101-1",
        type: "multiple_choice",
        skill: "reading",
        question: "'Ohayou gozaimasu' dùng khi nào?",
        options: ["Buổi sáng","Buổi tối","Khi đi ngủ","Khi tạm biệt"],
        correctAnswer: "Buổi sáng"
      },
      {
        id: "act-ja-101-2",
        type: "fill_blank",
        skill: "writing",
        question: "Điền từ còn thiếu: 'Konnichiwa! Ogenki _____ ka?'",
        prompt: "Điền từ còn thiếu: 'Konnichiwa! Ogenki _____ ka?'",
        options: ["desu","da","arimasu","imasu"],
        correctAnswer: "desu"
      },
      {
        id: "act-ja-101-3",
        type: "multiple_choice",
        skill: "reading",
        question: "Dịch sang tiếng Việt: 'Sayounara'",
        options: ["Xin chào","Tạm biệt","Cảm ơn","Làm phiền bạn"],
        correctAnswer: "Tạm biệt"
      },
      {
        id: "act-ja-101-4",
        type: "match_pairs",
        skill: "reading",
        question: "Ghép các cặp từ vựng với nghĩa tiếng Việt tương ứng",
        pairs: [{"left":"Konnichiwa","right":"Xin chào (ban ngày)"},{"left":"Ohayou gozaimasu","right":"Chào buổi sáng"},{"left":"Konbanwa","right":"Chào buổi tối"},{"left":"Sayounara","right":"Tạm biệt"}],
        correctAnswer: "all_matched"
      },
      {
        id: "act-ja-101-5",
        type: "audio_listen",
        skill: "listening",
        question: "Lắng nghe và chọn đáp án chính xác:",
        prompt: "Konnichiwa",
        options: ["Buổi sáng","Buổi tối","Khi đi ngủ","Khi tạm biệt"],
        correctAnswer: "Buổi sáng"
      }
    ]
  },
  {
    id: "lesson-ja-102",
    unitId: "unit-ja-1",
    title: "Tên Bạn Là Gì? (Onamae wa?)",
    description: "Cách tự giới thiệu tên và hỏi tên người đối diện bằng tiếng Nhật lịch sự.",
    type: "standard",
    xp: 15,
    estimatedMinutes: 5,
    order: 2,
    status: "available",
    goals: [
      { id: "g1", description: "Nắm vững các từ vựng chủ đề Tên Bạn Là Gì? (Onamae wa?)" },
      { id: "g2", description: "Luyện phát âm chuẩn và phản xạ câu qua các bài tập tương tác" }
    ],
    vocabulary: [
      { id: "v-ja-102-1", word: "Watashi", translation: "Tôi", phonetic: "wah-tah-shee" },
      { id: "v-ja-102-2", word: "Namae", translation: "Tên", phonetic: "nah-mah-eh" },
      { id: "v-ja-102-3", word: "Anata", translation: "Bạn / Anh / Chị", phonetic: "ah-nah-tah" },
      { id: "v-ja-102-4", word: "Hajimemashite", translation: "Rất vui được gặp bạn", phonetic: "hah-jee-meh-mahsh-teh" },
      { id: "v-ja-102-5", word: "Yoroshiku", translation: "Xin được giúp đỡ / Rất vui", phonetic: "yoh-roh-shee-koo" }
    ],
    phrases: [
      { id: "p-ja-102-1", text: "Hajimemashite, watashi wa Alex desu.", translation: "Rất vui được gặp bạn, tôi là Alex." },
      { id: "p-ja-102-2", text: "Onamae wa nan desu ka?", translation: "Tên của bạn là gì vậy ạ?" }
    ],
    activities: [
      {
        id: "act-ja-102-1",
        type: "multiple_choice",
        skill: "reading",
        question: "'Watashi wa Alex desu' nghĩa là gì?",
        options: ["Tôi là Alex","Tên bạn là Alex","Alex là giáo viên","Bạn là ai"],
        correctAnswer: "Tôi là Alex"
      },
      {
        id: "act-ja-102-2",
        type: "fill_blank",
        skill: "writing",
        question: "Điền từ: 'Hajimemashite, douzo _____ onegaishimasu.'",
        prompt: "Điền từ: 'Hajimemashite, douzo _____ onegaishimasu.'",
        options: ["yoroshiku","arigatou","sayounara","sumimasen"],
        correctAnswer: "yoroshiku"
      },
      {
        id: "act-ja-102-3",
        type: "multiple_choice",
        skill: "reading",
        question: "Dịch: 'Onamae wa?'",
        options: ["Bạn tên gì?","Bạn bao nhiêu tuổi?","Bạn đi đâu?","Khỏe không?"],
        correctAnswer: "Bạn tên gì?"
      },
      {
        id: "act-ja-102-4",
        type: "match_pairs",
        skill: "reading",
        question: "Ghép các cặp từ vựng với nghĩa tiếng Việt tương ứng",
        pairs: [{"left":"Watashi","right":"Tôi"},{"left":"Namae","right":"Tên"},{"left":"Anata","right":"Bạn / Anh / Chị"},{"left":"Hajimemashite","right":"Rất vui được gặp bạn"}],
        correctAnswer: "all_matched"
      },
      {
        id: "act-ja-102-5",
        type: "audio_listen",
        skill: "listening",
        question: "Lắng nghe và chọn đáp án chính xác:",
        prompt: "Watashi",
        options: ["Tôi là Alex","Tên bạn là Alex","Alex là giáo viên","Bạn là ai"],
        correctAnswer: "Tôi là Alex"
      }
    ]
  },
  {
    id: "lesson-ja-103",
    unitId: "unit-ja-1",
    title: "Cảm Ơn & Xin Lỗi (Arigatou & Sumimasen)",
    description: "Các câu lịch thiệp tối quan trọng trong văn hóa ứng xử Nhật Bản.",
    type: "standard",
    xp: 15,
    estimatedMinutes: 5,
    order: 3,
    status: "available",
    goals: [
      { id: "g1", description: "Nắm vững các từ vựng chủ đề Cảm Ơn & Xin Lỗi (Arigatou & Sumimasen)" },
      { id: "g2", description: "Luyện phát âm chuẩn và phản xạ câu qua các bài tập tương tác" }
    ],
    vocabulary: [
      { id: "v-ja-103-1", word: "Arigatou gozaimasu", translation: "Cảm ơn rất nhiều", phonetic: "ah-ree-gah-toh goh-zahy-mahs" },
      { id: "v-ja-103-2", word: "Sumimasen", translation: "Xin lỗi / Cho tôi hỏi", phonetic: "soo-mee-mah-sehn" },
      { id: "v-ja-103-3", word: "Gomen nasai", translation: "Tôi xin lỗi (thân mật)", phonetic: "goh-men nah-sahy" },
      { id: "v-ja-103-4", word: "Douitashimashite", translation: "Không có chi", phonetic: "doh-ee-tah-shee-mahsh-teh" },
      { id: "v-ja-103-5", word: "Hai / Iie", translation: "Vâng / Không phải", phonetic: "hah-ee / ee-eh" }
    ],
    phrases: [
      { id: "p-ja-103-1", text: "Tetsudatte kurete arigatou!", translation: "Cảm ơn bạn đã giúp đỡ tôi!" },
      { id: "p-ja-103-2", text: "Sumimasen, chotto ii desu ka?", translation: "Xin lỗi, tôi có thể hỏi một chút được không?" }
    ],
    activities: [
      {
        id: "act-ja-103-1",
        type: "multiple_choice",
        skill: "reading",
        question: "Khi muốn gọi phục vụ hoặc xin lỗi làm phiền, người Nhật nói gì?",
        options: ["Sumimasen","Sayounara","Konbanwa","Iie"],
        correctAnswer: "Sumimasen"
      },
      {
        id: "act-ja-103-2",
        type: "fill_blank",
        skill: "writing",
        question: "Điền từ: 'Hontou ni _____ gozaimasu.'",
        prompt: "Điền từ: 'Hontou ni _____ gozaimasu.'",
        options: ["arigatou","sumimasen","konnichiwa","sayounara"],
        correctAnswer: "arigatou"
      },
      {
        id: "act-ja-103-3",
        type: "multiple_choice",
        skill: "reading",
        question: "Dịch: 'Douitashimashite'",
        options: ["Không có chi","Cảm ơn","Tạm biệt","Xin chào"],
        correctAnswer: "Không có chi"
      },
      {
        id: "act-ja-103-4",
        type: "match_pairs",
        skill: "reading",
        question: "Ghép các cặp từ vựng với nghĩa tiếng Việt tương ứng",
        pairs: [{"left":"Arigatou gozaimasu","right":"Cảm ơn rất nhiều"},{"left":"Sumimasen","right":"Xin lỗi / Cho tôi hỏi"},{"left":"Gomen nasai","right":"Tôi xin lỗi (thân mật)"},{"left":"Douitashimashite","right":"Không có chi"}],
        correctAnswer: "all_matched"
      },
      {
        id: "act-ja-103-5",
        type: "audio_listen",
        skill: "listening",
        question: "Lắng nghe và chọn đáp án chính xác:",
        prompt: "Arigatou gozaimasu",
        options: ["Sumimasen","Sayounara","Konbanwa","Iie"],
        correctAnswer: "Sumimasen"
      }
    ]
  },
  {
    id: "lesson-ja-104",
    unitId: "unit-ja-1",
    title: "Số Đếm 1 - 10 Trong Tiếng Nhật",
    description: "Học cách đếm từ 1 đến 10 để hỏi giá tiền và số lượng.",
    type: "standard",
    xp: 15,
    estimatedMinutes: 5,
    order: 4,
    status: "available",
    goals: [
      { id: "g1", description: "Nắm vững các từ vựng chủ đề Số Đếm 1 - 10 Trong Tiếng Nhật" },
      { id: "g2", description: "Luyện phát âm chuẩn và phản xạ câu qua các bài tập tương tác" }
    ],
    vocabulary: [
      { id: "v-ja-104-1", word: "Ichi / Ni", translation: "Một (1) / Hai (2)", phonetic: "ee-chee / nee" },
      { id: "v-ja-104-2", word: "San / Yon", translation: "Ba (3) / Bốn (4)", phonetic: "sahn / yohn" },
      { id: "v-ja-104-3", word: "Go / Roku", translation: "Năm (5) / Sáu (6)", phonetic: "goh / roh-koo" },
      { id: "v-ja-104-4", word: "Nana / Hachi", translation: "Bảy (7) / Tám (8)", phonetic: "nah-nah / hah-chee" },
      { id: "v-ja-104-5", word: "Kyuu / Juu", translation: "Chín (9) / Mười (10)", phonetic: "kyoo / joo" }
    ],
    phrases: [
      { id: "p-ja-104-1", text: "Kore wa hitotsu kudasai.", translation: "Cho tôi một cái này nhé." },
      { id: "p-ja-104-2", text: "Ichi, ni, san, hai!", translation: "Một, hai, ba, chuẩn bị!" }
    ],
    activities: [
      {
        id: "act-ja-104-1",
        type: "multiple_choice",
        skill: "reading",
        question: "'Go' trong tiếng Nhật là số mấy?",
        options: ["Số 5","Số 3","Số 7","Số 9"],
        correctAnswer: "Số 5"
      },
      {
        id: "act-ja-104-2",
        type: "fill_blank",
        skill: "writing",
        question: "Điền số tiếp theo: 'Hachi, kyuu, _____'",
        prompt: "Điền số tiếp theo: 'Hachi, kyuu, _____'",
        options: ["juu","nana","go","roku"],
        correctAnswer: "juu"
      },
      {
        id: "act-ja-104-3",
        type: "multiple_choice",
        skill: "reading",
        question: "Số 10 trong tiếng Nhật là gì?",
        options: ["Juu","Kyuu","Roku","Ichi"],
        correctAnswer: "Juu"
      },
      {
        id: "act-ja-104-4",
        type: "match_pairs",
        skill: "reading",
        question: "Ghép các cặp từ vựng với nghĩa tiếng Việt tương ứng",
        pairs: [{"left":"Ichi / Ni","right":"Một (1) / Hai (2)"},{"left":"San / Yon","right":"Ba (3) / Bốn (4)"},{"left":"Go / Roku","right":"Năm (5) / Sáu (6)"},{"left":"Nana / Hachi","right":"Bảy (7) / Tám (8)"}],
        correctAnswer: "all_matched"
      },
      {
        id: "act-ja-104-5",
        type: "audio_listen",
        skill: "listening",
        question: "Lắng nghe và chọn đáp án chính xác:",
        prompt: "Ichi / Ni",
        options: ["Số 5","Số 3","Số 7","Số 9"],
        correctAnswer: "Số 5"
      }
    ]
  },
  {
    id: "lesson-ja-105",
    unitId: "unit-ja-1",
    title: "AI Practice: Luyện Chào Hỏi Đầu Tiên",
    description: "Trò chuyện trực tiếp cùng Sakura-sensei để luyện phản xạ chào hỏi và làm quen.",
    type: "audio_ai",
    xp: 25,
    estimatedMinutes: 5,
    order: 5,
    heroImage: images.mascotWelcome,
    status: "available",
    goals: [
      { id: "g1", description: "Luyện phản xạ giao tiếp thực tế với AI Teacher Kenji" },
      { id: "g2", description: "Vận dụng từ vựng trọng tâm vào ngữ cảnh hội thoại tự nhiên" }
    ],
    vocabulary: [
      { id: "v-ai-ja-1-1", word: "Konnichiwa", translation: "Xin chào (ban ngày)" },
      { id: "v-ai-ja-1-2", word: "Hajimemashite", translation: "Rất vui được gặp bạn" },
      { id: "v-ai-ja-1-3", word: "Watashi wa", translation: "Tôi là" },
      { id: "v-ai-ja-1-4", word: "Arigatou", translation: "Cảm ơn" },
      { id: "v-ai-ja-1-5", word: "Ogenki desu ka", translation: "Bạn có khỏe không?" }
    ],
    phrases: [],
    activities: [],
    aiTeacherPrompt: {
      scenario: "Lớp học giao tiếp tiếng Nhật với Sakura-sensei",
      systemPrompt: "You are Kenji, a warm, human, and energetic Japanese teacher. Speak mostly in English for clear guidance. Introduce Japanese words slowly: say the word once, give the English translation, and invite the student to repeat after you. Keep every reply strictly to 1 or 2 conversational sentences with friendly contractions (I'm, let's, that's). Listen closely to the student, praise correct pronunciation, and gently model errors again: 'So close! Try saying —'. Stay strictly on lesson words: Konnichiwa, Hajimemashite, Watashi wa, Arigatou, Ogenki desu ka. Never switch topics.",
      initialGreeting: "Konnichiwa! Hajimemashite. Watashi wa Sakura desu. Anata no onamae wa?",
      targetVocabulary: ["Konnichiwa","Hajimemashite","Watashi wa","Arigatou","Ogenki desu ka"],
      suggestedResponses: ["Hajimemashite! Watashi wa Alex desu.","Konnichiwa, genki desu!","Douzo yoroshiku!"],
      difficulty: "beginner"
    }
  },
  {
    id: "lesson-ja-201",
    unitId: "unit-ja-2",
    title: "Thành Viên Gia Đình (Kazoku)",
    description: "Cách gọi tên người thân trong gia đình tiếng Nhật.",
    type: "standard",
    xp: 15,
    estimatedMinutes: 5,
    order: 1,
    status: "available",
    goals: [
      { id: "g1", description: "Nắm vững các từ vựng chủ đề Thành Viên Gia Đình (Kazoku)" },
      { id: "g2", description: "Luyện phát âm chuẩn và phản xạ câu qua các bài tập tương tác" }
    ],
    vocabulary: [
      { id: "v-ja-201-1", word: "Kazoku", translation: "Gia đình", phonetic: "kah-zoh-koo" },
      { id: "v-ja-201-2", word: "Chichi / Otousan", translation: "Bố (của tôi / của bạn)", phonetic: "chee-chee / oh-toh-sahn" },
      { id: "v-ja-201-3", word: "Haha / Okaasan", translation: "Mẹ (của tôi / của bạn)", phonetic: "hah-hah / oh-kah-sahn" },
      { id: "v-ja-201-4", word: "Ani / Oneesan", translation: "Anh trai / Chị gái", phonetic: "ah-nee / oh-neh-sahn" },
      { id: "v-ja-201-5", word: "Imouto / Otouto", translation: "Em gái / Em trai", phonetic: "ee-moh-toh / oh-toh-toh" }
    ],
    phrases: [
      { id: "p-ja-201-1", text: "Kore wa watashi no kazoku desu.", translation: "Đây là gia đình của tôi." },
      { id: "p-ja-201-2", text: "Kazoku wa yon-nin desu.", translation: "Gia đình tôi có 4 người." }
    ],
    activities: [
      {
        id: "act-ja-201-1",
        type: "multiple_choice",
        skill: "reading",
        question: "'Okaasan' nghĩa là gì?",
        options: ["Mẹ","Bố","Chị gái","Em trai"],
        correctAnswer: "Mẹ"
      },
      {
        id: "act-ja-201-2",
        type: "fill_blank",
        skill: "writing",
        question: "Điền từ: 'Kore wa watashi no _____ desu.' (bố tôi)",
        prompt: "Điền từ: 'Kore wa watashi no _____ desu.' (bố tôi)",
        options: ["chichi","haha","ani","tomodachi"],
        correctAnswer: "chichi"
      },
      {
        id: "act-ja-201-3",
        type: "multiple_choice",
        skill: "reading",
        question: "Dịch: 'Kazoku'",
        options: ["Gia đình","Bạn bè","Lớp học","Trường học"],
        correctAnswer: "Gia đình"
      },
      {
        id: "act-ja-201-4",
        type: "match_pairs",
        skill: "reading",
        question: "Ghép các cặp từ vựng với nghĩa tiếng Việt tương ứng",
        pairs: [{"left":"Kazoku","right":"Gia đình"},{"left":"Chichi / Otousan","right":"Bố (của tôi / của bạn)"},{"left":"Haha / Okaasan","right":"Mẹ (của tôi / của bạn)"},{"left":"Ani / Oneesan","right":"Anh trai / Chị gái"}],
        correctAnswer: "all_matched"
      },
      {
        id: "act-ja-201-5",
        type: "audio_listen",
        skill: "listening",
        question: "Lắng nghe và chọn đáp án chính xác:",
        prompt: "Kazoku",
        options: ["Mẹ","Bố","Chị gái","Em trai"],
        correctAnswer: "Mẹ"
      }
    ]
  },
  {
    id: "lesson-ja-202",
    unitId: "unit-ja-2",
    title: "Miêu Tả Người & Bạn Bè (Tomodachi)",
    description: "Miêu tả tính cách và giới thiệu bạn thân bằng tiếng Nhật.",
    type: "standard",
    xp: 15,
    estimatedMinutes: 5,
    order: 2,
    status: "available",
    goals: [
      { id: "g1", description: "Nắm vững các từ vựng chủ đề Miêu Tả Người & Bạn Bè (Tomodachi)" },
      { id: "g2", description: "Luyện phát âm chuẩn và phản xạ câu qua các bài tập tương tác" }
    ],
    vocabulary: [
      { id: "v-ja-202-1", word: "Tomodachi", translation: "Bạn bè", phonetic: "toh-moh-dah-chee" },
      { id: "v-ja-202-2", word: "Yasashii", translation: "Tốt bụng / Dịu dàng", phonetic: "yah-sah-shee" },
      { id: "v-ja-202-3", word: "Omoshiroi", translation: "Thú vị / Hài hước", phonetic: "oh-moh-shee-roh-ee" },
      { id: "v-ja-202-4", word: "Kakkoii", translation: "Đẹp trai / Ngầu", phonetic: "kahk-koh-ee" },
      { id: "v-ja-202-5", word: "Kawaii", translation: "Dễ thương", phonetic: "kah-wah-ee" }
    ],
    phrases: [
      { id: "p-ja-202-1", text: "Kare wa watashi no tomodachi desu.", translation: "Cậu ấy là bạn của tôi." },
      { id: "p-ja-202-2", text: "Kanojo wa totemo kawaii desu.", translation: "Cô ấy rất dễ thương." }
    ],
    activities: [
      {
        id: "act-ja-202-1",
        type: "multiple_choice",
        skill: "reading",
        question: "'Kawaii' nghĩa là gì?",
        options: ["Dễ thương","Đẹp trai","Tốt bụng","Thông minh"],
        correctAnswer: "Dễ thương"
      },
      {
        id: "act-ja-202-2",
        type: "fill_blank",
        skill: "writing",
        question: "Điền từ: 'Ken-san wa totemo _____ desu.' (tốt bụng)",
        prompt: "Điền từ: 'Ken-san wa totemo _____ desu.' (tốt bụng)",
        options: ["yasashii","kawaii","kazoku","tomodachi"],
        correctAnswer: "yasashii"
      },
      {
        id: "act-ja-202-3",
        type: "multiple_choice",
        skill: "reading",
        question: "Dịch: 'Tomodachi'",
        options: ["Bạn bè","Gia đình","Thầy cô","Anh em"],
        correctAnswer: "Bạn bè"
      },
      {
        id: "act-ja-202-4",
        type: "match_pairs",
        skill: "reading",
        question: "Ghép các cặp từ vựng với nghĩa tiếng Việt tương ứng",
        pairs: [{"left":"Tomodachi","right":"Bạn bè"},{"left":"Yasashii","right":"Tốt bụng / Dịu dàng"},{"left":"Omoshiroi","right":"Thú vị / Hài hước"},{"left":"Kakkoii","right":"Đẹp trai / Ngầu"}],
        correctAnswer: "all_matched"
      },
      {
        id: "act-ja-202-5",
        type: "audio_listen",
        skill: "listening",
        question: "Lắng nghe và chọn đáp án chính xác:",
        prompt: "Tomodachi",
        options: ["Dễ thương","Đẹp trai","Tốt bụng","Thông minh"],
        correctAnswer: "Dễ thương"
      }
    ]
  },
  {
    id: "lesson-ja-203",
    unitId: "unit-ja-2",
    title: "Màu Sắc & Quần Áo (Iro & Fuku)",
    description: "Gọi tên màu sắc và trang phục thường ngày.",
    type: "standard",
    xp: 15,
    estimatedMinutes: 5,
    order: 3,
    status: "available",
    goals: [
      { id: "g1", description: "Nắm vững các từ vựng chủ đề Màu Sắc & Quần Áo (Iro & Fuku)" },
      { id: "g2", description: "Luyện phát âm chuẩn và phản xạ câu qua các bài tập tương tác" }
    ],
    vocabulary: [
      { id: "v-ja-203-1", word: "Shiro / Kuro", translation: "Màu trắng / Màu đen", phonetic: "shee-roh / koo-roh" },
      { id: "v-ja-203-2", word: "Aka / Ao", translation: "Màu đỏ / Màu xanh dương", phonetic: "ah-kah / ah-oh" },
      { id: "v-ja-203-3", word: "Kiiro", translation: "Màu vàng", phonetic: "kee-ee-roh" },
      { id: "v-ja-203-4", word: "Shatsu", translation: "Áo sơ mi", phonetic: "shah-tsoo" },
      { id: "v-ja-203-5", word: "Kutsu", translation: "Đôi giày", phonetic: "koo-tsoo" }
    ],
    phrases: [
      { id: "p-ja-203-1", text: "Kuroi shatsu o kite imasu.", translation: "Tôi đang mặc chiếc áo màu đen." },
      { id: "p-ja-203-2", text: "Kono kutsu wa aka desu.", translation: "Đôi giày này có màu đỏ." }
    ],
    activities: [
      {
        id: "act-ja-203-1",
        type: "multiple_choice",
        skill: "reading",
        question: "'Aka' trong tiếng Nhật là màu gì?",
        options: ["Màu đỏ","Màu xanh","Màu vàng","Màu trắng"],
        correctAnswer: "Màu đỏ"
      },
      {
        id: "act-ja-203-2",
        type: "fill_blank",
        skill: "writing",
        question: "Điền từ: 'Kono _____ wa kuroi desu.' (đôi giày)",
        prompt: "Điền từ: 'Kono _____ wa kuroi desu.' (đôi giày)",
        options: ["kutsu","shatsu","iro","aka"],
        correctAnswer: "kutsu"
      },
      {
        id: "act-ja-203-3",
        type: "multiple_choice",
        skill: "reading",
        question: "Dịch: 'Kuroi shatsu'",
        options: ["Áo màu đen","Áo màu trắng","Áo màu đỏ","Đôi giày đen"],
        correctAnswer: "Áo màu đen"
      },
      {
        id: "act-ja-203-4",
        type: "match_pairs",
        skill: "reading",
        question: "Ghép các cặp từ vựng với nghĩa tiếng Việt tương ứng",
        pairs: [{"left":"Shiro / Kuro","right":"Màu trắng / Màu đen"},{"left":"Aka / Ao","right":"Màu đỏ / Màu xanh dương"},{"left":"Kiiro","right":"Màu vàng"},{"left":"Shatsu","right":"Áo sơ mi"}],
        correctAnswer: "all_matched"
      },
      {
        id: "act-ja-203-5",
        type: "audio_listen",
        skill: "listening",
        question: "Lắng nghe và chọn đáp án chính xác:",
        prompt: "Shiro / Kuro",
        options: ["Màu đỏ","Màu xanh","Màu vàng","Màu trắng"],
        correctAnswer: "Màu đỏ"
      }
    ]
  },
  {
    id: "lesson-ja-204",
    unitId: "unit-ja-2",
    title: "Sở Thích & Những Điều Tôi Thích (Suki)",
    description: "Nói về những thứ mình yêu thích bằng cấu trúc 'ga suki desu'.",
    type: "standard",
    xp: 15,
    estimatedMinutes: 5,
    order: 4,
    status: "available",
    goals: [
      { id: "g1", description: "Nắm vững các từ vựng chủ đề Sở Thích & Những Điều Tôi Thích (Suki)" },
      { id: "g2", description: "Luyện phát âm chuẩn và phản xạ câu qua các bài tập tương tác" }
    ],
    vocabulary: [
      { id: "v-ja-204-1", word: "Suki", translation: "Thích", phonetic: "soo-kee" },
      { id: "v-ja-204-2", word: "Kirai", translation: "Ghét / Không thích", phonetic: "kee-rah-ee" },
      { id: "v-ja-204-3", word: "Ongaku", translation: "Âm nhạc", phonetic: "ohn-gah-koo" },
      { id: "v-ja-204-4", word: "Anime", translation: "Phim hoạt hình Anime", phonetic: "ah-nee-meh" },
      { id: "v-ja-204-5", word: "Supootsu", translation: "Thể thao", phonetic: "soo-poh-tsoo" }
    ],
    phrases: [
      { id: "p-ja-204-1", text: "Watashi wa anime ga suki desu.", translation: "Tôi rất thích phim hoạt hình Anime." },
      { id: "p-ja-204-2", text: "Nani ga suki desu ka?", translation: "Bạn thích cái gì thế?" }
    ],
    activities: [
      {
        id: "act-ja-204-1",
        type: "multiple_choice",
        skill: "reading",
        question: "Cấu trúc nào dùng để nói 'Tôi thích...'?",
        options: ["... ga suki desu","... wa kirai desu","... desu ka","... arigatou"],
        correctAnswer: "... ga suki desu"
      },
      {
        id: "act-ja-204-2",
        type: "fill_blank",
        skill: "writing",
        question: "Điền từ: 'Watashi wa anime _____ suki desu.'",
        prompt: "Điền từ: 'Watashi wa anime _____ suki desu.'",
        options: ["ga","o","ni","de"],
        correctAnswer: "ga"
      },
      {
        id: "act-ja-204-3",
        type: "multiple_choice",
        skill: "reading",
        question: "Dịch: 'Ongaku ga suki desu'",
        options: ["Tôi thích âm nhạc","Tôi ghét thể thao","Tôi thích anime","Tôi là nhạc sĩ"],
        correctAnswer: "Tôi thích âm nhạc"
      },
      {
        id: "act-ja-204-4",
        type: "match_pairs",
        skill: "reading",
        question: "Ghép các cặp từ vựng với nghĩa tiếng Việt tương ứng",
        pairs: [{"left":"Suki","right":"Thích"},{"left":"Kirai","right":"Ghét / Không thích"},{"left":"Ongaku","right":"Âm nhạc"},{"left":"Anime","right":"Phim hoạt hình Anime"}],
        correctAnswer: "all_matched"
      },
      {
        id: "act-ja-204-5",
        type: "audio_listen",
        skill: "listening",
        question: "Lắng nghe và chọn đáp án chính xác:",
        prompt: "Suki",
        options: ["... ga suki desu","... wa kirai desu","... desu ka","... arigatou"],
        correctAnswer: "... ga suki desu"
      }
    ]
  },
  {
    id: "lesson-ja-205",
    unitId: "unit-ja-2",
    title: "AI Practice: Giới Thiệu Gia Đình & Sở Thích",
    description: "Cùng Kenji trò chuyện về gia đình, bạn bè và những sở thích yêu thích của bạn.",
    type: "audio_ai",
    xp: 25,
    estimatedMinutes: 5,
    order: 5,
    heroImage: images.mascotWelcome,
    status: "available",
    goals: [
      { id: "g1", description: "Luyện phản xạ giao tiếp thực tế với AI Teacher Kenji" },
      { id: "g2", description: "Vận dụng từ vựng trọng tâm vào ngữ cảnh hội thoại tự nhiên" }
    ],
    vocabulary: [
      { id: "v-ai-ja-2-1", word: "Kazoku", translation: "Gia đình" },
      { id: "v-ai-ja-2-2", word: "Tomodachi", translation: "Bạn bè" },
      { id: "v-ai-ja-2-3", word: "Anime", translation: "Phim hoạt hình Anime" },
      { id: "v-ai-ja-2-4", word: "Ongaku", translation: "Âm nhạc" },
      { id: "v-ai-ja-2-5", word: "Suki", translation: "Thích" }
    ],
    phrases: [],
    activities: [],
    aiTeacherPrompt: {
      scenario: "Quán trà chiều nói chuyện phiếm cùng Kenji",
      systemPrompt: "You are Kenji, a warm, human, and energetic Japanese teacher. Speak mostly in English for clear guidance. Introduce Japanese words slowly: say the word once, give the English translation, and invite the student to repeat after you. Keep every reply strictly to 1 or 2 conversational sentences with friendly contractions (I'm, let's, that's). Listen closely to the student, praise correct pronunciation, and gently model errors again: 'So close! Try saying —'. Stay strictly on lesson words: Kazoku, Tomodachi, Anime, Ongaku, Suki. Never switch topics.",
      initialGreeting: "Konnichiwa! Shuumatsu wa nani o shite imasu ka? Anime ya ongaku wa suki?",
      targetVocabulary: ["Kazoku","Tomodachi","Anime","Ongaku","Suki"],
      suggestedResponses: ["Watashi wa anime ga suki desu!","Kazoku wa yon-nin desu.","Kenji-san wa nani ga suki?"],
      difficulty: "beginner"
    }
  },
  {
    id: "lesson-ja-301",
    unitId: "unit-ja-3",
    title: "Mấy Giờ Rồi? (Nan-ji desu ka?)",
    description: "Cách hỏi giờ và nói thời gian trong ngày tiếng Nhật.",
    type: "standard",
    xp: 15,
    estimatedMinutes: 5,
    order: 1,
    status: "available",
    goals: [
      { id: "g1", description: "Nắm vững các từ vựng chủ đề Mấy Giờ Rồi? (Nan-ji desu ka?)" },
      { id: "g2", description: "Luyện phát âm chuẩn và phản xạ câu qua các bài tập tương tác" }
    ],
    vocabulary: [
      { id: "v-ja-301-1", word: "Ima", translation: "Bây giờ", phonetic: "ee-mah" },
      { id: "v-ja-301-2", word: "Ji", translation: "Giờ (thời gian)", phonetic: "jee" },
      { id: "v-ja-301-3", word: "Fun / Pun", translation: "Phút", phonetic: "foon / poon" },
      { id: "v-ja-301-4", word: "Han", translation: "Rưỡi / Nửa (30 phút)", phonetic: "hahn" },
      { id: "v-ja-301-5", word: "Asa / Yoru", translation: "Buổi sáng / Buổi tối", phonetic: "ah-sah / yoh-roo" }
    ],
    phrases: [
      { id: "p-ja-301-1", text: "Ima nan-ji desu ka?", translation: "Bây giờ là mấy giờ rồi ạ?" },
      { id: "p-ja-301-2", text: "Ima shichi-ji han desu.", translation: "Bây giờ là 7 giờ rưỡi." }
    ],
    activities: [
      {
        id: "act-ja-301-1",
        type: "multiple_choice",
        skill: "reading",
        question: "'Ima nan-ji desu ka?' nghĩa là gì?",
        options: ["Bây giờ là mấy giờ?","Hôm nay là thứ mấy?","Bạn đi đâu?","Bao nhiêu tiền?"],
        correctAnswer: "Bây giờ là mấy giờ?"
      },
      {
        id: "act-ja-301-2",
        type: "fill_blank",
        skill: "writing",
        question: "Điền từ: 'Ima hachi-ji _____ desu.' (8 giờ rưỡi)",
        prompt: "Điền từ: 'Ima hachi-ji _____ desu.' (8 giờ rưỡi)",
        options: ["han","ji","fun","ima"],
        correctAnswer: "han"
      },
      {
        id: "act-ja-301-3",
        type: "multiple_choice",
        skill: "reading",
        question: "Dịch: 'Shichi-ji'",
        options: ["7 giờ","5 giờ","8 giờ","10 giờ"],
        correctAnswer: "7 giờ"
      },
      {
        id: "act-ja-301-4",
        type: "match_pairs",
        skill: "reading",
        question: "Ghép các cặp từ vựng với nghĩa tiếng Việt tương ứng",
        pairs: [{"left":"Ima","right":"Bây giờ"},{"left":"Ji","right":"Giờ (thời gian)"},{"left":"Fun / Pun","right":"Phút"},{"left":"Han","right":"Rưỡi / Nửa (30 phút)"}],
        correctAnswer: "all_matched"
      },
      {
        id: "act-ja-301-5",
        type: "audio_listen",
        skill: "listening",
        question: "Lắng nghe và chọn đáp án chính xác:",
        prompt: "Ima",
        options: ["Bây giờ là mấy giờ?","Hôm nay là thứ mấy?","Bạn đi đâu?","Bao nhiêu tiền?"],
        correctAnswer: "Bây giờ là mấy giờ?"
      }
    ]
  },
  {
    id: "lesson-ja-302",
    unitId: "unit-ja-3",
    title: "Thói Quen Mỗi Ngày (Mainichi no Seikatsu)",
    description: "Miêu tả thói quen sinh hoạt: thức dậy, ăn sáng, đi làm.",
    type: "standard",
    xp: 15,
    estimatedMinutes: 5,
    order: 2,
    status: "available",
    goals: [
      { id: "g1", description: "Nắm vững các từ vựng chủ đề Thói Quen Mỗi Ngày (Mainichi no Seikatsu)" },
      { id: "g2", description: "Luyện phát âm chuẩn và phản xạ câu qua các bài tập tương tác" }
    ],
    vocabulary: [
      { id: "v-ja-302-1", word: "Okimasu", translation: "Thức dậy", phonetic: "oh-kee-mahs" },
      { id: "v-ja-302-2", word: "Nemasu", translation: "Đi ngủ", phonetic: "neh-mahs" },
      { id: "v-ja-302-3", word: "Tabemasu", translation: "Ăn", phonetic: "tah-beh-mahs" },
      { id: "v-ja-302-4", word: "Nomimasu", translation: "Uống", phonetic: "noh-mee-mahs" },
      { id: "v-ja-302-5", word: "Ikimasu", translation: "Đi (đến đâu đó)", phonetic: "ee-kee-mahs" }
    ],
    phrases: [
      { id: "p-ja-302-1", text: "Mainichi shichi-ji ni okimasu.", translation: "Hằng ngày tôi thức dậy lúc 7 giờ." },
      { id: "p-ja-302-2", text: "Kaisha ni ikimasu.", translation: "Tôi đi đến công ty làm việc." }
    ],
    activities: [
      {
        id: "act-ja-302-1",
        type: "multiple_choice",
        skill: "reading",
        question: "'Okimasu' nghĩa là hành động gì?",
        options: ["Thức dậy","Đi ngủ","Ăn cơm","Uống nước"],
        correctAnswer: "Thức dậy"
      },
      {
        id: "act-ja-302-2",
        type: "fill_blank",
        skill: "writing",
        question: "Điền từ: 'Watashi wa roku-ji ni _____.' (thức dậy)",
        prompt: "Điền từ: 'Watashi wa roku-ji ni _____.' (thức dậy)",
        options: ["okimasu","nemasu","ikimasu","nomimasu"],
        correctAnswer: "okimasu"
      },
      {
        id: "act-ja-302-3",
        type: "multiple_choice",
        skill: "reading",
        question: "Dịch: 'Gohan o tabemasu'",
        options: ["Ăn cơm","Uống nước","Đi ngủ","Đi làm"],
        correctAnswer: "Ăn cơm"
      },
      {
        id: "act-ja-302-4",
        type: "match_pairs",
        skill: "reading",
        question: "Ghép các cặp từ vựng với nghĩa tiếng Việt tương ứng",
        pairs: [{"left":"Okimasu","right":"Thức dậy"},{"left":"Nemasu","right":"Đi ngủ"},{"left":"Tabemasu","right":"Ăn"},{"left":"Nomimasu","right":"Uống"}],
        correctAnswer: "all_matched"
      },
      {
        id: "act-ja-302-5",
        type: "audio_listen",
        skill: "listening",
        question: "Lắng nghe và chọn đáp án chính xác:",
        prompt: "Okimasu",
        options: ["Thức dậy","Đi ngủ","Ăn cơm","Uống nước"],
        correctAnswer: "Thức dậy"
      }
    ]
  },
  {
    id: "lesson-ja-303",
    unitId: "unit-ja-3",
    title: "Các Ngày Trong Tuần (Youbi)",
    description: "Nắm vững thứ Hai đến Chủ Nhật và các mốc thời gian.",
    type: "standard",
    xp: 15,
    estimatedMinutes: 5,
    order: 3,
    status: "available",
    goals: [
      { id: "g1", description: "Nắm vững các từ vựng chủ đề Các Ngày Trong Tuần (Youbi)" },
      { id: "g2", description: "Luyện phát âm chuẩn và phản xạ câu qua các bài tập tương tác" }
    ],
    vocabulary: [
      { id: "v-ja-303-1", word: "Getsuyoubi", translation: "Thứ Hai", phonetic: "geh-tsoo-yoh-bee" },
      { id: "v-ja-303-2", word: "Kinyoubi", translation: "Thứ Sáu", phonetic: "keen-yoh-bee" },
      { id: "v-ja-303-3", word: "Nichiyoubi", translation: "Chủ Nhật", phonetic: "nee-chee-yoh-bee" },
      { id: "v-ja-303-4", word: "Kyou", translation: "Hôm nay", phonetic: "kyoh" },
      { id: "v-ja-303-5", word: "Ashita", translation: "Ngày mai", phonetic: "ah-shee-tah" }
    ],
    phrases: [
      { id: "p-ja-303-1", text: "Kyou wa kinyoubi desu!", translation: "Hôm nay là thứ Sáu rồi!" },
      { id: "p-ja-303-2", text: "Ashita wa yasumi desu.", translation: "Ngày mai là ngày nghỉ." }
    ],
    activities: [
      {
        id: "act-ja-303-1",
        type: "multiple_choice",
        skill: "reading",
        question: "'Nichiyoubi' là ngày nào trong tuần?",
        options: ["Chủ Nhật","Thứ Hai","Thứ Bảy","Thứ Sáu"],
        correctAnswer: "Chủ Nhật"
      },
      {
        id: "act-ja-303-2",
        type: "fill_blank",
        skill: "writing",
        question: "Điền từ: 'Kyou wa _____ desu.' (thứ Hai)",
        prompt: "Điền từ: 'Kyou wa _____ desu.' (thứ Hai)",
        options: ["getsuyoubi","kinyoubi","nichiyoubi","ashita"],
        correctAnswer: "getsuyoubi"
      },
      {
        id: "act-ja-303-3",
        type: "multiple_choice",
        skill: "reading",
        question: "Dịch: 'Kyou wa ashita'",
        options: ["Hôm nay và ngày mai","Hôm qua và hôm nay","Ngày mai","Ngày kia"],
        correctAnswer: "Hôm nay và ngày mai"
      },
      {
        id: "act-ja-303-4",
        type: "match_pairs",
        skill: "reading",
        question: "Ghép các cặp từ vựng với nghĩa tiếng Việt tương ứng",
        pairs: [{"left":"Getsuyoubi","right":"Thứ Hai"},{"left":"Kinyoubi","right":"Thứ Sáu"},{"left":"Nichiyoubi","right":"Chủ Nhật"},{"left":"Kyou","right":"Hôm nay"}],
        correctAnswer: "all_matched"
      },
      {
        id: "act-ja-303-5",
        type: "audio_listen",
        skill: "listening",
        question: "Lắng nghe và chọn đáp án chính xác:",
        prompt: "Getsuyoubi",
        options: ["Chủ Nhật","Thứ Hai","Thứ Bảy","Thứ Sáu"],
        correctAnswer: "Chủ Nhật"
      }
    ]
  },
  {
    id: "lesson-ja-304",
    unitId: "unit-ja-3",
    title: "Thời Tiết Hôm Nay (Tenki)",
    description: "Trò chuyện về thời tiết: nắng, mưa, nóng, lạnh.",
    type: "standard",
    xp: 15,
    estimatedMinutes: 5,
    order: 4,
    status: "available",
    goals: [
      { id: "g1", description: "Nắm vững các từ vựng chủ đề Thời Tiết Hôm Nay (Tenki)" },
      { id: "g2", description: "Luyện phát âm chuẩn và phản xạ câu qua các bài tập tương tác" }
    ],
    vocabulary: [
      { id: "v-ja-304-1", word: "Tenki", translation: "Thời tiết", phonetic: "tehn-kee" },
      { id: "v-ja-304-2", word: "Hare", translation: "Nắng / Trời đẹp", phonetic: "hah-reh" },
      { id: "v-ja-304-3", word: "Ame", translation: "Mưa", phonetic: "ah-meh" },
      { id: "v-ja-304-4", word: "Atsui", translation: "Nóng bức", phonetic: "ah-tsoo-ee" },
      { id: "v-ja-304-5", word: "Samui", translation: "Lạnh giá", phonetic: "sah-moo-ee" }
    ],
    phrases: [
      { id: "p-ja-304-1", text: "Kyou wa ii tenki desu ne.", translation: "Hôm nay thời tiết đẹp quá nhỉ." },
      { id: "p-ja-304-2", text: "Kyou wa totemo samui desu.", translation: "Hôm nay trời rất lạnh." }
    ],
    activities: [
      {
        id: "act-ja-304-1",
        type: "multiple_choice",
        skill: "reading",
        question: "'Ame' trong tiếng Nhật có nghĩa là gì?",
        options: ["Mưa","Nắng","Gió","Tuyết"],
        correctAnswer: "Mưa"
      },
      {
        id: "act-ja-304-2",
        type: "fill_blank",
        skill: "writing",
        question: "Điền từ: 'Kyou wa ii _____ desu ne.' (thời tiết tốt)",
        prompt: "Điền từ: 'Kyou wa ii _____ desu ne.' (thời tiết tốt)",
        options: ["tenki","ame","atsui","samui"],
        correctAnswer: "tenki"
      },
      {
        id: "act-ja-304-3",
        type: "multiple_choice",
        skill: "reading",
        question: "Dịch: 'Totemo atsui desu'",
        options: ["Trời rất nóng","Trời rất lạnh","Trời mưa to","Trời râm mát"],
        correctAnswer: "Trời rất nóng"
      },
      {
        id: "act-ja-304-4",
        type: "match_pairs",
        skill: "reading",
        question: "Ghép các cặp từ vựng với nghĩa tiếng Việt tương ứng",
        pairs: [{"left":"Tenki","right":"Thời tiết"},{"left":"Hare","right":"Nắng / Trời đẹp"},{"left":"Ame","right":"Mưa"},{"left":"Atsui","right":"Nóng bức"}],
        correctAnswer: "all_matched"
      },
      {
        id: "act-ja-304-5",
        type: "audio_listen",
        skill: "listening",
        question: "Lắng nghe và chọn đáp án chính xác:",
        prompt: "Tenki",
        options: ["Mưa","Nắng","Gió","Tuyết"],
        correctAnswer: "Mưa"
      }
    ]
  },
  {
    id: "lesson-ja-305",
    unitId: "unit-ja-3",
    title: "AI Practice: Một Ngày Của Bạn Tại Tokyo",
    description: "Kể cho Yuka nghe về lịch trình một ngày, giờ giấc và thời tiết nơi bạn đang sống.",
    type: "audio_ai",
    xp: 25,
    estimatedMinutes: 5,
    order: 5,
    heroImage: images.mascotWelcome,
    status: "available",
    goals: [
      { id: "g1", description: "Luyện phản xạ giao tiếp thực tế với AI Teacher Kenji" },
      { id: "g2", description: "Vận dụng từ vựng trọng tâm vào ngữ cảnh hội thoại tự nhiên" }
    ],
    vocabulary: [
      { id: "v-ai-ja-3-1", word: "Ima", translation: "Bây giờ" },
      { id: "v-ai-ja-3-2", word: "Nan-ji", translation: "Mấy giờ" },
      { id: "v-ai-ja-3-3", word: "Okimasu", translation: "Thức dậy" },
      { id: "v-ai-ja-3-4", word: "Tabemasu", translation: "Ăn" },
      { id: "v-ai-ja-3-5", word: "Tenki", translation: "Thời tiết" }
    ],
    phrases: [],
    activities: [],
    aiTeacherPrompt: {
      scenario: "Trò chuyện buổi sáng ở Tokyo cùng Yuka",
      systemPrompt: "You are Kenji, a warm, human, and energetic Japanese teacher. Speak mostly in English for clear guidance. Introduce Japanese words slowly: say the word once, give the English translation, and invite the student to repeat after you. Keep every reply strictly to 1 or 2 conversational sentences with friendly contractions (I'm, let's, that's). Listen closely to the student, praise correct pronunciation, and gently model errors again: 'So close! Try saying —'. Stay strictly on lesson words: Ima, Nan-ji, Okimasu, Tabemasu, Tenki. Never switch topics.",
      initialGreeting: "Ohayou gozaimasu! Kyou wa ii tenki desu ne. Asa nan-ji ni okimashita ka?",
      targetVocabulary: ["Ima","Nan-ji","Okimasu","Tabemasu","Tenki"],
      suggestedResponses: ["Shichi-ji ni okimashita.","Kyou wa hare desu!","Kouhii o nomimashita."],
      difficulty: "beginner"
    }
  },
  {
    id: "lesson-ja-401",
    unitId: "unit-ja-4",
    title: "Tại Quán Ăn Nhật (Kissaten & Izakaya)",
    description: "Vào quán ăn, gọi bàn và nhận thực đơn.",
    type: "standard",
    xp: 15,
    estimatedMinutes: 5,
    order: 1,
    status: "available",
    goals: [
      { id: "g1", description: "Nắm vững các từ vựng chủ đề Tại Quán Ăn Nhật (Kissaten & Izakaya)" },
      { id: "g2", description: "Luyện phát âm chuẩn và phản xạ câu qua các bài tập tương tác" }
    ],
    vocabulary: [
      { id: "v-ja-401-1", word: "Irasshaimase", translation: "Kính chào quý khách", phonetic: "ee-rahsh-shah-ee-mah-seh" },
      { id: "v-ja-401-2", word: "Menyuu", translation: "Thực đơn", phonetic: "meh-nyoo" },
      { id: "v-ja-401-3", word: "Kudasai", translation: "Làm ơn cho tôi...", phonetic: "koo-dah-sahy" },
      { id: "v-ja-401-4", word: "O-kaikei", translation: "Hóa đơn / Tính tiền", phonetic: "oh-kah-ee-keh" },
      { id: "v-ja-401-5", word: "Mizu", translation: "Nước lọc", phonetic: "mee-zoo" }
    ],
    phrases: [
      { id: "p-ja-401-1", text: "Menyuu o kudasai.", translation: "Làm ơn cho tôi xin cuốn thực đơn." },
      { id: "p-ja-401-2", text: "O-mizu o onegaishimasu.", translation: "Cho tôi xin một cốc nước lọc ạ." }
    ],
    activities: [
      {
        id: "act-ja-401-1",
        type: "multiple_choice",
        skill: "reading",
        question: "Nhân viên quán Nhật chào khách bước vào bằng câu gì?",
        options: ["Irasshaimase","Sayounara","Gomen nasai","Ogenki desu ka"],
        correctAnswer: "Irasshaimase"
      },
      {
        id: "act-ja-401-2",
        type: "fill_blank",
        skill: "writing",
        question: "Điền từ: 'Sumimasen, menyuu o _____.'",
        prompt: "Điền từ: 'Sumimasen, menyuu o _____.'",
        options: ["kudasai","arigatou","desu","ikimasu"],
        correctAnswer: "kudasai"
      },
      {
        id: "act-ja-401-3",
        type: "multiple_choice",
        skill: "reading",
        question: "Dịch: 'O-mizu o kudasai'",
        options: ["Cho tôi xin nước lọc","Cho tôi xin trà","Tính tiền giúp tôi","Chào tạm biệt"],
        correctAnswer: "Cho tôi xin nước lọc"
      },
      {
        id: "act-ja-401-4",
        type: "match_pairs",
        skill: "reading",
        question: "Ghép các cặp từ vựng với nghĩa tiếng Việt tương ứng",
        pairs: [{"left":"Irasshaimase","right":"Kính chào quý khách"},{"left":"Menyuu","right":"Thực đơn"},{"left":"Kudasai","right":"Làm ơn cho tôi..."},{"left":"O-kaikei","right":"Hóa đơn / Tính tiền"}],
        correctAnswer: "all_matched"
      },
      {
        id: "act-ja-401-5",
        type: "audio_listen",
        skill: "listening",
        question: "Lắng nghe và chọn đáp án chính xác:",
        prompt: "Irasshaimase",
        options: ["Irasshaimase","Sayounara","Gomen nasai","Ogenki desu ka"],
        correctAnswer: "Irasshaimase"
      }
    ]
  },
  {
    id: "lesson-ja-402",
    unitId: "unit-ja-4",
    title: "Gọi Món Ăn Nhật Bản (Ramen & Sushi)",
    description: "Tên các món ăn nổi tiếng và cách gọi phần ăn.",
    type: "standard",
    xp: 15,
    estimatedMinutes: 5,
    order: 2,
    status: "available",
    goals: [
      { id: "g1", description: "Nắm vững các từ vựng chủ đề Gọi Món Ăn Nhật Bản (Ramen & Sushi)" },
      { id: "g2", description: "Luyện phát âm chuẩn và phản xạ câu qua các bài tập tương tác" }
    ],
    vocabulary: [
      { id: "v-ja-402-1", word: "Ramen", translation: "Mì Ramen", phonetic: "rah-men" },
      { id: "v-ja-402-2", word: "Sushi", translation: "Món Sushi", phonetic: "soo-shee" },
      { id: "v-ja-402-3", word: "Oishii", translation: "Ngon miệng", phonetic: "oh-ee-shee" },
      { id: "v-ja-402-4", word: "Kouhii", translation: "Cà phê", phonetic: "koh-hee" },
      { id: "v-ja-402-5", word: "Ocha", translation: "Trà xanh Nhật", phonetic: "oh-chah" }
    ],
    phrases: [
      { id: "p-ja-402-1", text: "Sumimasen, ramen o hitotsu kudasai.", translation: "Xin lỗi, cho tôi một phần mì ramen." },
      { id: "p-ja-402-2", text: "Kore wa totemo oishii desu!", translation: "Món này ngon tuyệt vời!" }
    ],
    activities: [
      {
        id: "act-ja-402-1",
        type: "multiple_choice",
        skill: "reading",
        question: "'Oishii' nghĩa là gì?",
        options: ["Ngon","Cay","Đắt","Nóng"],
        correctAnswer: "Ngon"
      },
      {
        id: "act-ja-402-2",
        type: "fill_blank",
        skill: "writing",
        question: "Điền từ: 'Kono ramen wa totemo _____ desu!' (ngon)",
        prompt: "Điền từ: 'Kono ramen wa totemo _____ desu!' (ngon)",
        options: ["oishii","mizu","menyuu","suki"],
        correctAnswer: "oishii"
      },
      {
        id: "act-ja-402-3",
        type: "multiple_choice",
        skill: "reading",
        question: "Dịch: 'Ocha o kudasai'",
        options: ["Cho tôi trà xanh","Cho tôi cà phê","Cho tôi bia","Cho tôi cơm"],
        correctAnswer: "Cho tôi trà xanh"
      },
      {
        id: "act-ja-402-4",
        type: "match_pairs",
        skill: "reading",
        question: "Ghép các cặp từ vựng với nghĩa tiếng Việt tương ứng",
        pairs: [{"left":"Ramen","right":"Mì Ramen"},{"left":"Sushi","right":"Món Sushi"},{"left":"Oishii","right":"Ngon miệng"},{"left":"Kouhii","right":"Cà phê"}],
        correctAnswer: "all_matched"
      },
      {
        id: "act-ja-402-5",
        type: "audio_listen",
        skill: "listening",
        question: "Lắng nghe và chọn đáp án chính xác:",
        prompt: "Ramen",
        options: ["Ngon","Cay","Đắt","Nóng"],
        correctAnswer: "Ngon"
      }
    ]
  },
  {
    id: "lesson-ja-403",
    unitId: "unit-ja-4",
    title: "Văn Hóa Bàn Ăn Nhật (Itadakimasu)",
    description: "Những câu nói trước và sau bữa ăn truyền thống Nhật Bản.",
    type: "standard",
    xp: 15,
    estimatedMinutes: 5,
    order: 3,
    status: "available",
    goals: [
      { id: "g1", description: "Nắm vững các từ vựng chủ đề Văn Hóa Bàn Ăn Nhật (Itadakimasu)" },
      { id: "g2", description: "Luyện phát âm chuẩn và phản xạ câu qua các bài tập tương tác" }
    ],
    vocabulary: [
      { id: "v-ja-403-1", word: "Itadakimasu", translation: "Xin mời / Tôi xin phép ăn", phonetic: "ee-tah-dah-kee-mahs" },
      { id: "v-ja-403-2", word: "Gochisousama", translation: "Cảm ơn vì bữa ăn ngon", phonetic: "goh-chee-soh-sah-mah" },
      { id: "v-ja-403-3", word: "Onaka ga suita", translation: "Đói bụng rồi", phonetic: "oh-nah-kah gah soo-ee-tah" },
      { id: "v-ja-403-4", word: "Kanpai", translation: "Cụng ly / Dô!", phonetic: "kahn-pahy" },
      { id: "v-ja-403-5", word: "Tabemono", translation: "Đồ ăn", phonetic: "tah-beh-moh-noh" }
    ],
    phrases: [
      { id: "p-ja-403-1", text: "Itadakimasu! Oishisou desu ne.", translation: "Xin phép được ăn! Trông ngon quá." },
      { id: "p-ja-403-2", text: "Gochisousama deshita! Totemo oishikatta desu.", translation: "Cảm ơn vì bữa ăn! Rất là ngon ạ." }
    ],
    activities: [
      {
        id: "act-ja-403-1",
        type: "multiple_choice",
        skill: "reading",
        question: "Người Nhật nói gì ngay trước khi bắt đầu ăn cơm?",
        options: ["Itadakimasu","Gochisousama","Kanpai","Sayounara"],
        correctAnswer: "Itadakimasu"
      },
      {
        id: "act-ja-403-2",
        type: "fill_blank",
        skill: "writing",
        question: "Điền từ: 'Sau bữa ăn nói: _____ deshita.'",
        prompt: "Điền từ: 'Sau bữa ăn nói: _____ deshita.'",
        options: ["Gochisousama","Itadakimasu","Konnichiwa","Arigatou"],
        correctAnswer: "Gochisousama"
      },
      {
        id: "act-ja-403-3",
        type: "multiple_choice",
        skill: "reading",
        question: "Dịch: 'Kanpai!'",
        options: ["Cụng ly / Cạn chén!","Cảm ơn","Tạm biệt","Ngon quá"],
        correctAnswer: "Cụng ly / Cạn chén!"
      },
      {
        id: "act-ja-403-4",
        type: "match_pairs",
        skill: "reading",
        question: "Ghép các cặp từ vựng với nghĩa tiếng Việt tương ứng",
        pairs: [{"left":"Itadakimasu","right":"Xin mời / Tôi xin phép ăn"},{"left":"Gochisousama","right":"Cảm ơn vì bữa ăn ngon"},{"left":"Onaka ga suita","right":"Đói bụng rồi"},{"left":"Kanpai","right":"Cụng ly / Dô!"}],
        correctAnswer: "all_matched"
      },
      {
        id: "act-ja-403-5",
        type: "audio_listen",
        skill: "listening",
        question: "Lắng nghe và chọn đáp án chính xác:",
        prompt: "Itadakimasu",
        options: ["Itadakimasu","Gochisousama","Kanpai","Sayounara"],
        correctAnswer: "Itadakimasu"
      }
    ]
  },
  {
    id: "lesson-ja-404",
    unitId: "unit-ja-4",
    title: "Tính Tiền Bữa Ăn (O-kaikei onegaishimasu)",
    description: "Hỏi giá và thanh toán hóa đơn tại nhà hàng Nhật.",
    type: "standard",
    xp: 15,
    estimatedMinutes: 5,
    order: 4,
    status: "available",
    goals: [
      { id: "g1", description: "Nắm vững các từ vựng chủ đề Tính Tiền Bữa Ăn (O-kaikei onegaishimasu)" },
      { id: "g2", description: "Luyện phát âm chuẩn và phản xạ câu qua các bài tập tương tác" }
    ],
    vocabulary: [
      { id: "v-ja-404-1", word: "O-kaikei", translation: "Tính tiền / Hóa đơn", phonetic: "oh-kah-ee-keh" },
      { id: "v-ja-404-2", word: "Ikura", translation: "Bao nhiêu tiền", phonetic: "ee-koo-rah" },
      { id: "v-ja-404-3", word: "En", translation: "Đồng Yên Nhật", phonetic: "ehn" },
      { id: "v-ja-404-4", word: "Kaado", translation: "Thẻ ngân hàng", phonetic: "kah-doh" },
      { id: "v-ja-404-5", word: "Genkin", translation: "Tiền mặt", phonetic: "gehn-keen" }
    ],
    phrases: [
      { id: "p-ja-404-1", text: "O-kaikei o onegaishimasu.", translation: "Làm ơn tính tiền giúp tôi ạ." },
      { id: "p-ja-404-2", text: "Zenbu de ikura desu ka?", translation: "Tất cả hết bao nhiêu tiền vậy ạ?" }
    ],
    activities: [
      {
        id: "act-ja-404-1",
        type: "multiple_choice",
        skill: "reading",
        question: "'Ikura desu ka?' nghĩa là gì?",
        options: ["Bao nhiêu tiền?","Món này là gì?","Mấy giờ rồi?","Ở đâu vậy?"],
        correctAnswer: "Bao nhiêu tiền?"
      },
      {
        id: "act-ja-404-2",
        type: "fill_blank",
        skill: "writing",
        question: "Điền từ: 'Sumimasen, o-_____ onegaishimasu.' (tính tiền)",
        prompt: "Điền từ: 'Sumimasen, o-_____ onegaishimasu.' (tính tiền)",
        options: ["kaikei","mizu","menyuu","ramen"],
        correctAnswer: "kaikei"
      },
      {
        id: "act-ja-404-3",
        type: "multiple_choice",
        skill: "reading",
        question: "Dịch: 'Kaado de ii desu ka?'",
        options: ["Trả bằng thẻ được không?","Trả bằng tiền mặt","Hết bao nhiêu tiền","Cho tôi hóa đơn"],
        correctAnswer: "Trả bằng thẻ được không?"
      },
      {
        id: "act-ja-404-4",
        type: "match_pairs",
        skill: "reading",
        question: "Ghép các cặp từ vựng với nghĩa tiếng Việt tương ứng",
        pairs: [{"left":"O-kaikei","right":"Tính tiền / Hóa đơn"},{"left":"Ikura","right":"Bao nhiêu tiền"},{"left":"En","right":"Đồng Yên Nhật"},{"left":"Kaado","right":"Thẻ ngân hàng"}],
        correctAnswer: "all_matched"
      },
      {
        id: "act-ja-404-5",
        type: "audio_listen",
        skill: "listening",
        question: "Lắng nghe và chọn đáp án chính xác:",
        prompt: "O-kaikei",
        options: ["Bao nhiêu tiền?","Món này là gì?","Mấy giờ rồi?","Ở đâu vậy?"],
        correctAnswer: "Bao nhiêu tiền?"
      }
    ]
  },
  {
    id: "lesson-ja-405",
    unitId: "unit-ja-4",
    title: "AI Practice: Gọi Món Tại Quán Ăn Tokyo",
    description: "Tập gọi ramen, bia hoặc trà xanh và tính tiền cùng bác chủ quán Dan-san.",
    type: "audio_ai",
    xp: 25,
    estimatedMinutes: 5,
    order: 5,
    heroImage: images.mascotWelcome,
    status: "available",
    goals: [
      { id: "g1", description: "Luyện phản xạ giao tiếp thực tế với AI Teacher Kenji" },
      { id: "g2", description: "Vận dụng từ vựng trọng tâm vào ngữ cảnh hội thoại tự nhiên" }
    ],
    vocabulary: [
      { id: "v-ai-ja-4-1", word: "Ramen", translation: "Mì Ramen" },
      { id: "v-ai-ja-4-2", word: "Sushi", translation: "Món Sushi" },
      { id: "v-ai-ja-4-3", word: "Kudasai", translation: "Làm ơn cho tôi..." },
      { id: "v-ai-ja-4-4", word: "Oishii", translation: "Ngon miệng" },
      { id: "v-ai-ja-4-5", word: "O-kaikei", translation: "Hóa đơn / Tính tiền" }
    ],
    phrases: [],
    activities: [],
    aiTeacherPrompt: {
      scenario: "Quán mì ramen ấm cúng phố Shibuya Tokyo",
      systemPrompt: "You are Kenji, a warm, human, and energetic Japanese teacher. Speak mostly in English for clear guidance. Introduce Japanese words slowly: say the word once, give the English translation, and invite the student to repeat after you. Keep every reply strictly to 1 or 2 conversational sentences with friendly contractions (I'm, let's, that's). Listen closely to the student, praise correct pronunciation, and gently model errors again: 'So close! Try saying —'. Stay strictly on lesson words: Ramen, Sushi, Kudasai, Oishii, O-kaikei. Never switch topics.",
      initialGreeting: "Irasshaimase! Ramen-ya e douzo. Nani ni shimashou ka?",
      targetVocabulary: ["Ramen","Sushi","Kudasai","Oishii","O-kaikei"],
      suggestedResponses: ["Ramen o hitotsu kudasai!","O-mizu mo onegaishimasu.","O-kaikei o onegaishimasu."],
      difficulty: "beginner"
    }
  },
  {
    id: "lesson-ja-501",
    unitId: "unit-ja-5",
    title: "Ở Đâu Vậy? (Doko desu ka?)",
    description: "Hỏi đường và chỉ hướng trong thành phố Nhật.",
    type: "standard",
    xp: 15,
    estimatedMinutes: 5,
    order: 1,
    status: "available",
    goals: [
      { id: "g1", description: "Nắm vững các từ vựng chủ đề Ở Đâu Vậy? (Doko desu ka?)" },
      { id: "g2", description: "Luyện phát âm chuẩn và phản xạ câu qua các bài tập tương tác" }
    ],
    vocabulary: [
      { id: "v-ja-501-1", word: "Doko", translation: "Ở đâu", phonetic: "doh-koh" },
      { id: "v-ja-501-2", word: "Koko / Soko", translation: "Ở đây / Ở đó", phonetic: "koh-koh / soh-koh" },
      { id: "v-ja-501-3", word: "Migi", translation: "Bên phải", phonetic: "mee-gee" },
      { id: "v-ja-501-4", word: "Hidari", translation: "Bên trái", phonetic: "hee-dah-ree" },
      { id: "v-ja-501-5", word: "Massugu", translation: "Đi thẳng", phonetic: "mahs-soo-goo" }
    ],
    phrases: [
      { id: "p-ja-501-1", text: "Toire wa doko desu ka?", translation: "Nhà vệ sinh ở đâu vậy ạ?" },
      { id: "p-ja-501-2", text: "Massugu itte, migi desu.", translation: "Đi thẳng rồi rẽ phải là tới." }
    ],
    activities: [
      {
        id: "act-ja-501-1",
        type: "multiple_choice",
        skill: "reading",
        question: "'Migi' là hướng nào?",
        options: ["Bên phải","Bên trái","Đi thẳng","Đằng sau"],
        correctAnswer: "Bên phải"
      },
      {
        id: "act-ja-501-2",
        type: "fill_blank",
        skill: "writing",
        question: "Điền từ: '_____ itte kudasai.' (hãy đi thẳng)",
        prompt: "Điền từ: '_____ itte kudasai.' (hãy đi thẳng)",
        options: ["Massugu","Migi","Hidari","Doko"],
        correctAnswer: "Massugu"
      },
      {
        id: "act-ja-501-3",
        type: "multiple_choice",
        skill: "reading",
        question: "Dịch: 'Toire wa doko desu ka?'",
        options: ["Nhà vệ sinh ở đâu?","Trạm xe ở đâu?","Khách sạn ở đâu?","Lối ra ở đâu?"],
        correctAnswer: "Nhà vệ sinh ở đâu?"
      },
      {
        id: "act-ja-501-4",
        type: "match_pairs",
        skill: "reading",
        question: "Ghép các cặp từ vựng với nghĩa tiếng Việt tương ứng",
        pairs: [{"left":"Doko","right":"Ở đâu"},{"left":"Koko / Soko","right":"Ở đây / Ở đó"},{"left":"Migi","right":"Bên phải"},{"left":"Hidari","right":"Bên trái"}],
        correctAnswer: "all_matched"
      },
      {
        id: "act-ja-501-5",
        type: "audio_listen",
        skill: "listening",
        question: "Lắng nghe và chọn đáp án chính xác:",
        prompt: "Doko",
        options: ["Bên phải","Bên trái","Đi thẳng","Đằng sau"],
        correctAnswer: "Bên phải"
      }
    ]
  },
  {
    id: "lesson-ja-502",
    unitId: "unit-ja-5",
    title: "Đi Tàu Điện & Tàu Cao Tốc (Densha & Shinkansen)",
    description: "Đi tàu điện ngầm Tokyo, mua vé và tìm sân ga.",
    type: "standard",
    xp: 15,
    estimatedMinutes: 5,
    order: 2,
    status: "available",
    goals: [
      { id: "g1", description: "Nắm vững các từ vựng chủ đề Đi Tàu Điện & Tàu Cao Tốc (Densha & Shinkansen)" },
      { id: "g2", description: "Luyện phát âm chuẩn và phản xạ câu qua các bài tập tương tác" }
    ],
    vocabulary: [
      { id: "v-ja-502-1", word: "Eki", translation: "Ga tàu", phonetic: "eh-kee" },
      { id: "v-ja-502-2", word: "Densha", translation: "Tàu điện", phonetic: "dehn-shah" },
      { id: "v-ja-502-3", word: "Chikatetsu", translation: "Tàu điện ngầm", phonetic: "chee-kah-teh-tsoo" },
      { id: "v-ja-502-4", word: "Kippu", translation: "Vé tàu", phonetic: "keep-poo" },
      { id: "v-ja-502-5", word: "Shinkansen", translation: "Tàu cao tốc Shinkansen", phonetic: "sheen-kahn-sehn" }
    ],
    phrases: [
      { id: "p-ja-502-1", text: "Shinjuku eki wa doko desu ka?", translation: "Ga Shinjuku ở đâu vậy ạ?" },
      { id: "p-ja-502-2", text: "Tokyo made no kippu o kudasai.", translation: "Cho tôi một vé đi đến Tokyo." }
    ],
    activities: [
      {
        id: "act-ja-502-1",
        type: "multiple_choice",
        skill: "reading",
        question: "'Eki' trong tiếng Nhật nghĩa là gì?",
        options: ["Ga tàu","Sân bay","Khách sạn","Bệnh viện"],
        correctAnswer: "Ga tàu"
      },
      {
        id: "act-ja-502-2",
        type: "fill_blank",
        skill: "writing",
        question: "Điền từ: 'Sumimasen, Shinjuku _____ wa doko desu ka?' (ga Shinjuku)",
        prompt: "Điền từ: 'Sumimasen, Shinjuku _____ wa doko desu ka?' (ga Shinjuku)",
        options: ["eki","densha","kippu","chikatetsu"],
        correctAnswer: "eki"
      },
      {
        id: "act-ja-502-3",
        type: "multiple_choice",
        skill: "reading",
        question: "Dịch: 'Chikatetsu'",
        options: ["Tàu điện ngầm","Xe buýt","Taxi","Máy bay"],
        correctAnswer: "Tàu điện ngầm"
      },
      {
        id: "act-ja-502-4",
        type: "match_pairs",
        skill: "reading",
        question: "Ghép các cặp từ vựng với nghĩa tiếng Việt tương ứng",
        pairs: [{"left":"Eki","right":"Ga tàu"},{"left":"Densha","right":"Tàu điện"},{"left":"Chikatetsu","right":"Tàu điện ngầm"},{"left":"Kippu","right":"Vé tàu"}],
        correctAnswer: "all_matched"
      },
      {
        id: "act-ja-502-5",
        type: "audio_listen",
        skill: "listening",
        question: "Lắng nghe và chọn đáp án chính xác:",
        prompt: "Eki",
        options: ["Ga tàu","Sân bay","Khách sạn","Bệnh viện"],
        correctAnswer: "Ga tàu"
      }
    ]
  },
  {
    id: "lesson-ja-503",
    unitId: "unit-ja-5",
    title: "Tại Khách Sạn (Hoteru de Chekku-in)",
    description: "Check-in khách sạn, hỏi mật khẩu wifi và chìa khóa phòng.",
    type: "standard",
    xp: 15,
    estimatedMinutes: 5,
    order: 3,
    status: "available",
    goals: [
      { id: "g1", description: "Nắm vững các từ vựng chủ đề Tại Khách Sạn (Hoteru de Chekku-in)" },
      { id: "g2", description: "Luyện phát âm chuẩn và phản xạ câu qua các bài tập tương tác" }
    ],
    vocabulary: [
      { id: "v-ja-503-1", word: "Hoteru", translation: "Khách sạn", phonetic: "hoh-teh-roo" },
      { id: "v-ja-503-2", word: "Chekku-in", translation: "Nhận phòng (Check-in)", phonetic: "chehk-koo-een" },
      { id: "v-ja-503-3", word: "Heya", translation: "Phòng", phonetic: "heh-yah" },
      { id: "v-ja-503-4", word: "Kagi", translation: "Chìa khóa", phonetic: "kah-gee" },
      { id: "v-ja-503-5", word: "Waifai", translation: "Wifi mạng không dây", phonetic: "wah-ee-fahy" }
    ],
    phrases: [
      { id: "p-ja-503-1", text: "Yoyaku shita Alex desu.", translation: "Tôi là Alex, người đã đặt phòng trước." },
      { id: "p-ja-503-2", text: "Waifai no pasuwaado wa nan desu ka?", translation: "Mật khẩu wifi của phòng là gì ạ?" }
    ],
    activities: [
      {
        id: "act-ja-503-1",
        type: "multiple_choice",
        skill: "reading",
        question: "'Heya no kagi' nghĩa là gì?",
        options: ["Chìa khóa phòng","Số phòng","Thẻ khách sạn","Mật khẩu wifi"],
        correctAnswer: "Chìa khóa phòng"
      },
      {
        id: "act-ja-503-2",
        type: "fill_blank",
        skill: "writing",
        question: "Điền từ: 'Heya no _____ o kudasai.' (chìa khóa)",
        prompt: "Điền từ: 'Heya no _____ o kudasai.' (chìa khóa)",
        options: ["kagi","hoteru","waifai","heya"],
        correctAnswer: "kagi"
      },
      {
        id: "act-ja-503-3",
        type: "multiple_choice",
        skill: "reading",
        question: "Dịch: 'Yoyaku shite imasu'",
        options: ["Tôi đã đặt trước rồi","Tôi muốn trả phòng","Tôi muốn đổi phòng","Phòng này bao nhiêu tiền"],
        correctAnswer: "Tôi đã đặt trước rồi"
      },
      {
        id: "act-ja-503-4",
        type: "match_pairs",
        skill: "reading",
        question: "Ghép các cặp từ vựng với nghĩa tiếng Việt tương ứng",
        pairs: [{"left":"Hoteru","right":"Khách sạn"},{"left":"Chekku-in","right":"Nhận phòng (Check-in)"},{"left":"Heya","right":"Phòng"},{"left":"Kagi","right":"Chìa khóa"}],
        correctAnswer: "all_matched"
      },
      {
        id: "act-ja-503-5",
        type: "audio_listen",
        skill: "listening",
        question: "Lắng nghe và chọn đáp án chính xác:",
        prompt: "Hoteru",
        options: ["Chìa khóa phòng","Số phòng","Thẻ khách sạn","Mật khẩu wifi"],
        correctAnswer: "Chìa khóa phòng"
      }
    ]
  },
  {
    id: "lesson-ja-504",
    unitId: "unit-ja-5",
    title: "Tại Sân Bay Narita / Haneda (Kuukou)",
    description: "Thủ tục lên máy bay, hành lý và hỏi cửa ra tàu bay.",
    type: "standard",
    xp: 15,
    estimatedMinutes: 5,
    order: 4,
    status: "available",
    goals: [
      { id: "g1", description: "Nắm vững các từ vựng chủ đề Tại Sân Bay Narita / Haneda (Kuukou)" },
      { id: "g2", description: "Luyện phát âm chuẩn và phản xạ câu qua các bài tập tương tác" }
    ],
    vocabulary: [
      { id: "v-ja-504-1", word: "Kuukou", translation: "Sân bay", phonetic: "koo-koh" },
      { id: "v-ja-504-2", word: "Hikouki", translation: "Máy bay", phonetic: "hee-koh-kee" },
      { id: "v-ja-504-3", word: "Nimotsu", translation: "Hành lý", phonetic: "nee-moh-tsoo" },
      { id: "v-ja-504-4", word: "Pasupooto", translation: "Hộ chiếu", phonetic: "pah-soo-poh-toh" },
      { id: "v-ja-504-5", word: "Noriba", translation: "Điểm đón xe / Cửa khởi hành", phonetic: "noh-ree-bah" }
    ],
    phrases: [
      { id: "p-ja-504-1", text: "Pasupooto o misete kudasai.", translation: "Làm ơn cho tôi xem hộ chiếu của bạn." },
      { id: "p-ja-504-2", text: "Narita kuukou made ikitai desu.", translation: "Tôi muốn đi đến sân bay Narita." }
    ],
    activities: [
      {
        id: "act-ja-504-1",
        type: "multiple_choice",
        skill: "reading",
        question: "'Pasupooto' là vật dụng gì?",
        options: ["Hộ chiếu","Vé máy bay","Hành lý","Ví tiền"],
        correctAnswer: "Hộ chiếu"
      },
      {
        id: "act-ja-504-2",
        type: "fill_blank",
        skill: "writing",
        question: "Điền từ: 'Kore wa watashi no _____ desu.' (hành lý của tôi)",
        prompt: "Điền từ: 'Kore wa watashi no _____ desu.' (hành lý của tôi)",
        options: ["nimotsu","kuukou","hikouki","pasupooto"],
        correctAnswer: "nimotsu"
      },
      {
        id: "act-ja-504-3",
        type: "multiple_choice",
        skill: "reading",
        question: "Dịch: 'Kuukou wa doko desu ka?'",
        options: ["Sân bay ở đâu?","Ga tàu ở đâu?","Bến xe ở đâu?","Khách sạn ở đâu?"],
        correctAnswer: "Sân bay ở đâu?"
      },
      {
        id: "act-ja-504-4",
        type: "match_pairs",
        skill: "reading",
        question: "Ghép các cặp từ vựng với nghĩa tiếng Việt tương ứng",
        pairs: [{"left":"Kuukou","right":"Sân bay"},{"left":"Hikouki","right":"Máy bay"},{"left":"Nimotsu","right":"Hành lý"},{"left":"Pasupooto","right":"Hộ chiếu"}],
        correctAnswer: "all_matched"
      },
      {
        id: "act-ja-504-5",
        type: "audio_listen",
        skill: "listening",
        question: "Lắng nghe và chọn đáp án chính xác:",
        prompt: "Kuukou",
        options: ["Hộ chiếu","Vé máy bay","Hành lý","Ví tiền"],
        correctAnswer: "Hộ chiếu"
      }
    ]
  },
  {
    id: "lesson-ja-505",
    unitId: "unit-ja-5",
    title: "AI Practice: Hỏi Đường & Du Lịch Tokyo",
    description: "Đóng vai khách du lịch hỏi đường nhân viên ga tàu Kenzo tại nhà ga Shinjuku sầm uất.",
    type: "audio_ai",
    xp: 25,
    estimatedMinutes: 5,
    order: 5,
    heroImage: images.mascotWelcome,
    status: "available",
    goals: [
      { id: "g1", description: "Luyện phản xạ giao tiếp thực tế với AI Teacher Kenji" },
      { id: "g2", description: "Vận dụng từ vựng trọng tâm vào ngữ cảnh hội thoại tự nhiên" }
    ],
    vocabulary: [
      { id: "v-ai-ja-5-1", word: "Eki", translation: "Ga tàu" },
      { id: "v-ai-ja-5-2", word: "Doko", translation: "Ở đâu" },
      { id: "v-ai-ja-5-3", word: "Migi", translation: "Bên phải" },
      { id: "v-ai-ja-5-4", word: "Hidari", translation: "Bên trái" },
      { id: "v-ai-ja-5-5", word: "Densha", translation: "Tàu điện" }
    ],
    phrases: [],
    activities: [],
    aiTeacherPrompt: {
      scenario: "Quầy hỗ trợ thông tin du lịch tại ga Shinjuku Tokyo",
      systemPrompt: "You are Kenji, a warm, human, and energetic Japanese teacher. Speak mostly in English for clear guidance. Introduce Japanese words slowly: say the word once, give the English translation, and invite the student to repeat after you. Keep every reply strictly to 1 or 2 conversational sentences with friendly contractions (I'm, let's, that's). Listen closely to the student, praise correct pronunciation, and gently model errors again: 'So close! Try saying —'. Stay strictly on lesson words: Eki, Doko, Migi, Hidari, Densha. Never switch topics.",
      initialGreeting: "Sumimasen! Shinjuku eki e douzo. Doko e ikitai desu ka?",
      targetVocabulary: ["Eki","Doko","Migi","Hidari","Densha"],
      suggestedResponses: ["Tokyo eki wa doko desu ka?","Kippu wa ikura desu ka?","Massugu itte ii desu ka?"],
      difficulty: "beginner"
    }
  },
  {
    id: "lesson-ja-601",
    unitId: "unit-ja-6",
    title: "Mua Sắm Tiện Lợi (Konbini & Mura)",
    description: "Mua sắm tại cửa hàng tiện lợi 7-Eleven, Lawson và siêu thị.",
    type: "standard",
    xp: 15,
    estimatedMinutes: 5,
    order: 1,
    status: "available",
    goals: [
      { id: "g1", description: "Nắm vững các từ vựng chủ đề Mua Sắm Tiện Lợi (Konbini & Mura)" },
      { id: "g2", description: "Luyện phát âm chuẩn và phản xạ câu qua các bài tập tương tác" }
    ],
    vocabulary: [
      { id: "v-ja-601-1", word: "Kaimono", translation: "Mua sắm", phonetic: "kah-ee-moh-noh" },
      { id: "v-ja-601-2", word: "Kore", translation: "Cái này", phonetic: "koh-reh" },
      { id: "v-ja-601-3", word: "Fukuro", translation: "Túi ni-lông", phonetic: "foo-koo-roh" },
      { id: "v-ja-601-4", word: "Kore o kudasai", translation: "Cho tôi lấy cái này", phonetic: "koh-reh oh koo-dah-sahy" },
      { id: "v-ja-601-5", word: "Daijoubu", translation: "Không sao / Ổn rồi", phonetic: "dah-ee-joh-boo" }
    ],
    phrases: [
      { id: "p-ja-601-1", text: "Fukuro wa kekkou desu.", translation: "Tôi không cần lấy túi, cảm ơn." },
      { id: "p-ja-601-2", text: "Kore o kudasai.", translation: "Làm ơn cho tôi lấy món này." }
    ],
    activities: [
      {
        id: "act-ja-601-1",
        type: "multiple_choice",
        skill: "reading",
        question: "Khi nhân viên konbini hỏi có lấy túi không, nếu không lấy thì nói gì?",
        options: ["Fukuro wa daijoubu desu / kekkou desu","Hai, kudasai","Arigatou gozaimasu","Sayounara"],
        correctAnswer: "Fukuro wa daijoubu desu / kekkou desu"
      },
      {
        id: "act-ja-601-2",
        type: "fill_blank",
        skill: "writing",
        question: "Điền từ: 'Kaimono ni _____.' (đi mua sắm)",
        prompt: "Điền từ: 'Kaimono ni _____.' (đi mua sắm)",
        options: ["ikimasu","tabemasu","nemasu","nomimasu"],
        correctAnswer: "ikimasu"
      },
      {
        id: "act-ja-601-3",
        type: "multiple_choice",
        skill: "reading",
        question: "Dịch: 'Kore o kudasai'",
        options: ["Cho tôi cái này","Cái này bao nhiêu","Tôi không thích cái này","Cái đó ở đâu"],
        correctAnswer: "Cho tôi cái này"
      },
      {
        id: "act-ja-601-4",
        type: "match_pairs",
        skill: "reading",
        question: "Ghép các cặp từ vựng với nghĩa tiếng Việt tương ứng",
        pairs: [{"left":"Kaimono","right":"Mua sắm"},{"left":"Kore","right":"Cái này"},{"left":"Fukuro","right":"Túi ni-lông"},{"left":"Kore o kudasai","right":"Cho tôi lấy cái này"}],
        correctAnswer: "all_matched"
      },
      {
        id: "act-ja-601-5",
        type: "audio_listen",
        skill: "listening",
        question: "Lắng nghe và chọn đáp án chính xác:",
        prompt: "Kaimono",
        options: ["Fukuro wa daijoubu desu / kekkou desu","Hai, kudasai","Arigatou gozaimasu","Sayounara"],
        correctAnswer: "Fukuro wa daijoubu desu / kekkou desu"
      }
    ]
  },
  {
    id: "lesson-ja-602",
    unitId: "unit-ja-6",
    title: "Hẹn Gặp & Lên Kế Hoạch (Yakusoku)",
    description: "Rủ bạn bè đi chơi, hẹn giờ và chọn địa điểm.",
    type: "standard",
    xp: 15,
    estimatedMinutes: 5,
    order: 2,
    status: "available",
    goals: [
      { id: "g1", description: "Nắm vững các từ vựng chủ đề Hẹn Gặp & Lên Kế Hoạch (Yakusoku)" },
      { id: "g2", description: "Luyện phát âm chuẩn và phản xạ câu qua các bài tập tương tác" }
    ],
    vocabulary: [
      { id: "v-ja-602-1", word: "Issho ni", translation: "Cùng nhau", phonetic: "ees-shoh nee" },
      { id: "v-ja-602-2", word: "Ikimashou", translation: "Chúng ta cùng đi nhé", phonetic: "ee-kee-mah-shoh" },
      { id: "v-ja-602-3", word: "Shuumatsu", translation: "Cuối tuần", phonetic: "shoo-mah-tsoo" },
      { id: "v-ja-602-4", word: "Doko ka", translation: "Ở đâu đó", phonetic: "doh-koh kah" },
      { id: "v-ja-602-5", word: "Ii desu ne", translation: "Ý kiến hay đấy / Được đấy", phonetic: "ee deh-soo neh" }
    ],
    phrases: [
      { id: "p-ja-602-1", text: "Issho ni kouhii o nomimashou!", translation: "Chúng ta cùng đi uống cà phê nhé!" },
      { id: "p-ja-602-2", text: "Shuumatsu wa hima desu ka?", translation: "Cuối tuần này bạn có rảnh không?" }
    ],
    activities: [
      {
        id: "act-ja-602-1",
        type: "multiple_choice",
        skill: "reading",
        question: "Muốn rủ ai đó 'Cùng nhau đi nhé!', ta dùng từ gì?",
        options: ["Ikimashou","Ikimasen","Itadakimasu","Sayounara"],
        correctAnswer: "Ikimashou"
      },
      {
        id: "act-ja-602-2",
        type: "fill_blank",
        skill: "writing",
        question: "Điền từ: 'Issho ni _____ o nomimashou.' (uống cà phê)",
        prompt: "Điền từ: 'Issho ni _____ o nomimashou.' (uống cà phê)",
        options: ["kouhii","fukuro","kaimono","densha"],
        correctAnswer: "kouhii"
      },
      {
        id: "act-ja-602-3",
        type: "multiple_choice",
        skill: "reading",
        question: "Dịch: 'Ii desu ne!'",
        options: ["Hay quá / Được đấy!","Không được đâu","Tạm biệt nhé","Cảm ơn bạn"],
        correctAnswer: "Hay quá / Được đấy!"
      },
      {
        id: "act-ja-602-4",
        type: "match_pairs",
        skill: "reading",
        question: "Ghép các cặp từ vựng với nghĩa tiếng Việt tương ứng",
        pairs: [{"left":"Issho ni","right":"Cùng nhau"},{"left":"Ikimashou","right":"Chúng ta cùng đi nhé"},{"left":"Shuumatsu","right":"Cuối tuần"},{"left":"Doko ka","right":"Ở đâu đó"}],
        correctAnswer: "all_matched"
      },
      {
        id: "act-ja-602-5",
        type: "audio_listen",
        skill: "listening",
        question: "Lắng nghe và chọn đáp án chính xác:",
        prompt: "Issho ni",
        options: ["Ikimashou","Ikimasen","Itadakimasu","Sayounara"],
        correctAnswer: "Ikimashou"
      }
    ]
  },
  {
    id: "lesson-ja-603",
    unitId: "unit-ja-6",
    title: "Nói Về Công Việc & Nghề Nghiệp (Shigoto)",
    description: "Nói về nghề nghiệp của mình và công ty làm việc.",
    type: "standard",
    xp: 15,
    estimatedMinutes: 5,
    order: 3,
    status: "available",
    goals: [
      { id: "g1", description: "Nắm vững các từ vựng chủ đề Nói Về Công Việc & Nghề Nghiệp (Shigoto)" },
      { id: "g2", description: "Luyện phát âm chuẩn và phản xạ câu qua các bài tập tương tác" }
    ],
    vocabulary: [
      { id: "v-ja-603-1", word: "Shigoto", translation: "Công việc", phonetic: "shee-goh-toh" },
      { id: "v-ja-603-2", word: "Sensei", translation: "Thầy cô giáo", phonetic: "sehn-seh" },
      { id: "v-ja-603-3", word: "Gakusei", translation: "Học sinh / Sinh viên", phonetic: "gahk-seh" },
      { id: "v-ja-603-4", word: "Kaishain", translation: "Nhân viên công ty", phonetic: "kah-ee-shah-een" },
      { id: "v-ja-603-5", word: "Isha", translation: "Bác sĩ", phonetic: "ee-shah" }
    ],
    phrases: [
      { id: "p-ja-603-1", text: "O-shigoto wa nan desu ka?", translation: "Công việc hiện tại của bạn là gì?" },
      { id: "p-ja-603-2", text: "Watashi wa kaishain desu.", translation: "Tôi là nhân viên công ty." }
    ],
    activities: [
      {
        id: "act-ja-603-1",
        type: "multiple_choice",
        skill: "reading",
        question: "'Gakusei' nghĩa là gì?",
        options: ["Học sinh / Sinh viên","Giáo viên","Bác sĩ","Kỹ sư"],
        correctAnswer: "Học sinh / Sinh viên"
      },
      {
        id: "act-ja-603-2",
        type: "fill_blank",
        skill: "writing",
        question: "Điền từ: 'Anata no o-_____ wa nan desu ka?' (công việc)",
        prompt: "Điền từ: 'Anata no o-_____ wa nan desu ka?' (công việc)",
        options: ["shigoto","namae","kazoku","eki"],
        correctAnswer: "shigoto"
      },
      {
        id: "act-ja-603-3",
        type: "multiple_choice",
        skill: "reading",
        question: "Dịch: 'Watashi wa sensei desu'",
        options: ["Tôi là giáo viên","Tôi là học sinh","Tôi là bác sĩ","Tôi là nhân viên"],
        correctAnswer: "Tôi là giáo viên"
      },
      {
        id: "act-ja-603-4",
        type: "match_pairs",
        skill: "reading",
        question: "Ghép các cặp từ vựng với nghĩa tiếng Việt tương ứng",
        pairs: [{"left":"Shigoto","right":"Công việc"},{"left":"Sensei","right":"Thầy cô giáo"},{"left":"Gakusei","right":"Học sinh / Sinh viên"},{"left":"Kaishain","right":"Nhân viên công ty"}],
        correctAnswer: "all_matched"
      },
      {
        id: "act-ja-603-5",
        type: "audio_listen",
        skill: "listening",
        question: "Lắng nghe và chọn đáp án chính xác:",
        prompt: "Shigoto",
        options: ["Học sinh / Sinh viên","Giáo viên","Bác sĩ","Kỹ sư"],
        correctAnswer: "Học sinh / Sinh viên"
      }
    ]
  },
  {
    id: "lesson-ja-604",
    unitId: "unit-ja-6",
    title: "Tình Huống Khẩn Cấp & Cứu Trợ (Tasukete!)",
    description: "Hỏi xin sự giúp đỡ khi gặp khó khăn hoặc sự cố bất ngờ.",
    type: "standard",
    xp: 15,
    estimatedMinutes: 5,
    order: 4,
    status: "available",
    goals: [
      { id: "g1", description: "Nắm vững các từ vựng chủ đề Tình Huống Khẩn Cấp & Cứu Trợ (Tasukete!)" },
      { id: "g2", description: "Luyện phát âm chuẩn và phản xạ câu qua các bài tập tương tác" }
    ],
    vocabulary: [
      { id: "v-ja-604-1", word: "Tasukete", translation: "Cứu tôi với / Giúp tôi với", phonetic: "tah-soo-keh-teh" },
      { id: "v-ja-604-2", word: "Byouin", translation: "Bệnh viện", phonetic: "byoh-een" },
      { id: "v-ja-604-3", word: "Kousan", translation: "Đồn cảnh sát", phonetic: "koh-bahn" },
      { id: "v-ja-604-4", word: "Daijoubu desu ka?", translation: "Bạn có sao không?", phonetic: "dah-ee-joh-boo deh-soo kah" },
      { id: "v-ja-604-5", word: "Kusuri", translation: "Thuốc uống", phonetic: "koo-soo-ree" }
    ],
    phrases: [
      { id: "p-ja-604-1", text: "Tasukete kudasai! Guai ga warui desu.", translation: "Làm ơn giúp tôi với! Tôi thấy không khỏe trong người." },
      { id: "p-ja-604-2", text: "Chikaku ni byouin wa arimasu ka?", translation: "Gần đây có bệnh viện nào không ạ?" }
    ],
    activities: [
      {
        id: "act-ja-604-1",
        type: "multiple_choice",
        skill: "reading",
        question: "Khi cần kêu cứu khẩn cấp, bạn hét lên câu gì?",
        options: ["Tasukete!","Arigatou!","Konnichiwa!","Oishii!"],
        correctAnswer: "Tasukete!"
      },
      {
        id: "act-ja-604-2",
        type: "fill_blank",
        skill: "writing",
        question: "Điền từ: 'Tasukete _____!' (làm ơn giúp tôi)",
        prompt: "Điền từ: 'Tasukete _____!' (làm ơn giúp tôi)",
        options: ["kudasai","arigatou","desu","ikimasu"],
        correctAnswer: "kudasai"
      },
      {
        id: "act-ja-604-3",
        type: "multiple_choice",
        skill: "reading",
        question: "Dịch: 'Byouin wa doko desu ka?'",
        options: ["Bệnh viện ở đâu vậy?","Đồn cảnh sát ở đâu?","Trạm thuốc ở đâu?","Ga tàu ở đâu?"],
        correctAnswer: "Bệnh viện ở đâu vậy?"
      },
      {
        id: "act-ja-604-4",
        type: "match_pairs",
        skill: "reading",
        question: "Ghép các cặp từ vựng với nghĩa tiếng Việt tương ứng",
        pairs: [{"left":"Tasukete","right":"Cứu tôi với / Giúp tôi với"},{"left":"Byouin","right":"Bệnh viện"},{"left":"Kousan","right":"Đồn cảnh sát"},{"left":"Daijoubu desu ka?","right":"Bạn có sao không?"}],
        correctAnswer: "all_matched"
      },
      {
        id: "act-ja-604-5",
        type: "audio_listen",
        skill: "listening",
        question: "Lắng nghe và chọn đáp án chính xác:",
        prompt: "Tasukete",
        options: ["Tasukete!","Arigatou!","Konnichiwa!","Oishii!"],
        correctAnswer: "Tasukete!"
      }
    ]
  },
  {
    id: "lesson-ja-605",
    unitId: "unit-ja-6",
    title: "AI Practice: Trò Chuyện Tự Do Tốt Nghiệp",
    description: "Trò chuyện tự do cùng Aoi tổng kết lại toàn bộ 6 Unit tiếng Nhật bạn đã học!",
    type: "audio_ai",
    xp: 25,
    estimatedMinutes: 5,
    order: 5,
    heroImage: images.mascotWelcome,
    status: "available",
    goals: [
      { id: "g1", description: "Luyện phản xạ giao tiếp thực tế với AI Teacher Kenji" },
      { id: "g2", description: "Vận dụng từ vựng trọng tâm vào ngữ cảnh hội thoại tự nhiên" }
    ],
    vocabulary: [
      { id: "v-ai-ja-6-1", word: "Konnichiwa", translation: "Xin chào (ban ngày)" },
      { id: "v-ai-ja-6-2", word: "Suki", translation: "Thích" },
      { id: "v-ai-ja-6-3", word: "Tokyo", translation: "Tokyo" },
      { id: "v-ai-ja-6-4", word: "Nihon", translation: "Nhật Bản" },
      { id: "v-ai-ja-6-5", word: "Arigatou", translation: "Cảm ơn" }
    ],
    phrases: [],
    activities: [],
    aiTeacherPrompt: {
      scenario: "Quán cà phê ngắm hoa anh đào tại công viên Ueno",
      systemPrompt: "You are Kenji, a warm, human, and energetic Japanese teacher. Speak mostly in English for clear guidance. Introduce Japanese words slowly: say the word once, give the English translation, and invite the student to repeat after you. Keep every reply strictly to 1 or 2 conversational sentences with friendly contractions (I'm, let's, that's). Listen closely to the student, praise correct pronunciation, and gently model errors again: 'So close! Try saying —'. Stay strictly on lesson words: Konnichiwa, Suki, Tokyo, Nihon, Arigatou. Never switch topics.",
      initialGreeting: "Omedetou gozaimasu! Bạn đã hoàn thành các bài học tiếng Nhật. Hôm nay hãy cùng nói chuyện tự do nhé!",
      targetVocabulary: ["Konnichiwa","Suki","Tokyo","Nihon","Arigatou"],
      suggestedResponses: ["Watashi wa ramen ga suki desu.","Tokyo ni ikitai desu!","Nihongo wa omoshiroi desu!"],
      difficulty: "beginner"
    }
  },
  {
    id: "lesson-ja-701",
    unitId: "unit-ja-7",
    title: "Hôm Qua Bạn Đã Làm Gì? (Quá khứ ~mashita)",
    description: "Học cách chia động từ ở thể quá khứ lịch sự ~mashita / ~deshita.",
    type: "standard",
    xp: 15,
    estimatedMinutes: 5,
    order: 1,
    status: "available",
    goals: [
      { id: "g1", description: "Nắm vững các từ vựng chủ đề Hôm Qua Bạn Đã Làm Gì? (Quá khứ ~mashita)" },
      { id: "g2", description: "Luyện phát âm chuẩn và phản xạ câu qua các bài tập tương tác" }
    ],
    vocabulary: [
      { id: "v-ja-701-1", word: "昨日 (Kinou)", translation: "Hôm qua", phonetic: "ki-no-u" },
      { id: "v-ja-701-2", word: "行きました (Ikimashita)", translation: "Đã đi (quá khứ của ikimasu)", phonetic: "i-ki-ma-shi-ta" },
      { id: "v-ja-701-3", word: "食べました (Tabemashita)", translation: "Đã ăn", phonetic: "ta-be-ma-shi-ta" },
      { id: "v-ja-701-4", word: "見ました (Mimashita)", translation: "Đã xem / Đã thấy", phonetic: "mi-ma-shi-ta" },
      { id: "v-ja-701-5", word: "買いました (Kaimashita)", translation: "Đã mua", phonetic: "ka-i-ma-shi-ta" }
    ],
    phrases: [
      { id: "p-ja-701-1", text: "昨日は友達と公園へ行きました。", translation: "Hôm qua tôi đã đi đến công viên cùng với bạn." },
      { id: "p-ja-701-2", text: "週末は何をしましたか？", translation: "Cuối tuần bạn đã làm gì vậy?" }
    ],
    activities: [
      {
        id: "act-ja-701-1",
        type: "multiple_choice",
        skill: "reading",
        question: "'昨日' (Kinou) có nghĩa là gì?",
        options: ["Hôm qua","Hôm nay","Ngày mai","Tuần sau"],
        correctAnswer: "Hôm qua"
      },
      {
        id: "act-ja-701-2",
        type: "fill_blank",
        skill: "writing",
        question: "Điền từ: '昨日、京都へ _____。' (đã đi)",
        prompt: "Điền từ: '昨日、京都へ _____。' (đã đi)",
        options: ["行きました","行きます","行かない","行き"],
        correctAnswer: "行きました"
      },
      {
        id: "act-ja-701-3",
        type: "multiple_choice",
        skill: "reading",
        question: "Dịch: '映画を見ました' (Eiga o mimashita)",
        options: ["Tôi đã xem phim","Tôi đi làm","Tôi ăn tối","Tôi đi ngủ"],
        correctAnswer: "Tôi đã xem phim"
      },
      {
        id: "act-ja-701-4",
        type: "match_pairs",
        skill: "reading",
        question: "Ghép các cặp từ vựng với nghĩa tiếng Việt tương ứng",
        pairs: [{"left":"昨日 (Kinou)","right":"Hôm qua"},{"left":"行きました (Ikimashita)","right":"Đã đi (quá khứ của ikimasu)"},{"left":"食べました (Tabemashita)","right":"Đã ăn"},{"left":"見ました (Mimashita)","right":"Đã xem / Đã thấy"}],
        correctAnswer: "all_matched"
      },
      {
        id: "act-ja-701-5",
        type: "audio_listen",
        skill: "listening",
        question: "Lắng nghe và chọn đáp án chính xác:",
        prompt: "昨日 (Kinou)",
        options: ["Hôm qua","Hôm nay","Ngày mai","Tuần sau"],
        correctAnswer: "Hôm qua"
      }
    ]
  },
  {
    id: "lesson-ja-702",
    unitId: "unit-ja-7",
    title: "Kỷ Niệm Tuổi Thơ (Kodomo no koro)",
    description: "Kể về quê hương và những ký ức ngọt ngào thời thơ ấu.",
    type: "standard",
    xp: 15,
    estimatedMinutes: 5,
    order: 2,
    status: "available",
    goals: [
      { id: "g1", description: "Nắm vững các từ vựng chủ đề Kỷ Niệm Tuổi Thơ (Kodomo no koro)" },
      { id: "g2", description: "Luyện phát âm chuẩn và phản xạ câu qua các bài tập tương tác" }
    ],
    vocabulary: [
      { id: "v-ja-702-1", word: "子供の頃 (Kodomo no koro)", translation: "Thời thơ ấu / Thuở nhỏ", phonetic: "ko-do-mo no ko-ro" },
      { id: "v-ja-702-2", word: "育ちました (Sodachimashita)", translation: "Đã lớn lên / Trưởng thành", phonetic: "so-da-chi-ma-shi-ta" },
      { id: "v-ja-702-3", word: "故郷 (Furusato)", translation: "Quê hương", phonetic: "fu-ru-sa-to" },
      { id: "v-ja-702-4", word: "よく (Yoku)", translation: "Thường hay (làm gì)", phonetic: "yo-ku" },
      { id: "v-ja-702-5", word: "思い出 (Omoide)", translation: "Kỷ niệm / Ký ức", phonetic: "o-mo-i-de" }
    ],
    phrases: [
      { id: "p-ja-702-1", text: "私は静かな田舎の町で育ちました。", translation: "Tôi đã lớn lên ở một thị trấn làng quê yên bình." },
      { id: "p-ja-702-2", text: "子供の頃、よく川で泳ぎました。", translation: "Hồi còn nhỏ, tôi thường hay đi bơi ở dòng sông." }
    ],
    activities: [
      {
        id: "act-ja-702-1",
        type: "multiple_choice",
        skill: "reading",
        question: "'思い出' (Omoide) có nghĩa là gì?",
        options: ["Kỷ niệm / Ký ức","Công việc","Trường học","Kỳ nghỉ"],
        correctAnswer: "Kỷ niệm / Ký ức"
      },
      {
        id: "act-ja-702-2",
        type: "fill_blank",
        skill: "writing",
        question: "Điền từ: 'ベトナムで _____。' (đã lớn lên)",
        prompt: "Điền từ: 'ベトナムで _____。' (đã lớn lên)",
        options: ["育ちました","思い出","子供の頃","故郷"],
        correctAnswer: "育ちました"
      },
      {
        id: "act-ja-702-3",
        type: "multiple_choice",
        skill: "reading",
        question: "Dịch: '私の故郷' (Watashi no furusato)",
        options: ["Quê hương của tôi","Trường học của tôi","Nhà của tôi","Xe của tôi"],
        correctAnswer: "Quê hương của tôi"
      },
      {
        id: "act-ja-702-4",
        type: "match_pairs",
        skill: "reading",
        question: "Ghép các cặp từ vựng với nghĩa tiếng Việt tương ứng",
        pairs: [{"left":"子供の頃 (Kodomo no koro)","right":"Thời thơ ấu / Thuở nhỏ"},{"left":"育ちました (Sodachimashita)","right":"Đã lớn lên / Trưởng thành"},{"left":"故郷 (Furusato)","right":"Quê hương"},{"left":"よく (Yoku)","right":"Thường hay (làm gì)"}],
        correctAnswer: "all_matched"
      },
      {
        id: "act-ja-702-5",
        type: "audio_listen",
        skill: "listening",
        question: "Lắng nghe và chọn đáp án chính xác:",
        prompt: "子供の頃 (Kodomo no koro)",
        options: ["Kỷ niệm / Ký ức","Công việc","Trường học","Kỳ nghỉ"],
        correctAnswer: "Kỷ niệm / Ký ức"
      }
    ]
  },
  {
    id: "lesson-ja-703",
    unitId: "unit-ja-7",
    title: "Chuyến Du Lịch Đáng Nhớ (Wasureられない旅)",
    description: "Kể lại chuyến du lịch đáng nhớ và trải nghiệm đặc sắc.",
    type: "standard",
    xp: 15,
    estimatedMinutes: 5,
    order: 3,
    status: "available",
    goals: [
      { id: "g1", description: "Nắm vững các từ vựng chủ đề Chuyến Du Lịch Đáng Nhớ (Wasureられない旅)" },
      { id: "g2", description: "Luyện phát âm chuẩn và phản xạ câu qua các bài tập tương tác" }
    ],
    vocabulary: [
      { id: "v-ja-703-1", word: "旅行 (Ryokou)", translation: "Chuyến du lịch", phonetic: "ryo-ko-u" },
      { id: "v-ja-703-2", word: "忘れられない (Wasurerarenai)", translation: "Không thể nào quên", phonetic: "wa-su-re-ra-re-na-i" },
      { id: "v-ja-703-3", word: "訪れました (Otozuremashita)", translation: "Đã ghé thăm", phonetic: "o-to-zu-re-ma-shi-ta" },
      { id: "v-ja-703-4", word: "会いました (Aimashita)", translation: "Đã gặp gỡ", phonetic: "a-i-ma-shi-ta" },
      { id: "v-ja-703-5", word: "泊まりました (Tomarimashita)", translation: "Đã ở trọ lại (khách sạn)", phonetic: "to-ma-ri-ma-shi-ta" }
    ],
    phrases: [
      { id: "p-ja-703-1", text: "去年、北海道を旅行しました。忘れられない旅でした。", translation: "Năm ngoái tôi đã đi du lịch Hokkaido. Thật là chuyến đi không thể nào quên." },
      { id: "p-ja-703-2", text: "温泉付きの旅館に泊まりました。", translation: "Tôi đã trọ lại ở một lữ quán truyền thống có suối nước nóng." }
    ],
    activities: [
      {
        id: "act-ja-703-1",
        type: "multiple_choice",
        skill: "reading",
        question: "'忘れられない' (Wasurerarenai) mang ý nghĩa gì?",
        options: ["Không thể nào quên","Nhàm chán","Nguy hiểm","Đắt đỏ"],
        correctAnswer: "Không thể nào quên"
      },
      {
        id: "act-ja-703-2",
        type: "fill_blank",
        skill: "writing",
        question: "Điền từ: 'ホテルに _____。' (đã ở trọ lại)",
        prompt: "Điền từ: 'ホテルに _____。' (đã ở trọ lại)",
        options: ["泊まりました","食べました","買いました","旅行"],
        correctAnswer: "泊まりました"
      },
      {
        id: "act-ja-703-3",
        type: "multiple_choice",
        skill: "reading",
        question: "Dịch: '友人に会いました'",
        options: ["Tôi đã gặp người bạn","Tôi đi làm","Tôi đi mua sắm","Tôi đọc sách"],
        correctAnswer: "Tôi đã gặp người bạn"
      },
      {
        id: "act-ja-703-4",
        type: "match_pairs",
        skill: "reading",
        question: "Ghép các cặp từ vựng với nghĩa tiếng Việt tương ứng",
        pairs: [{"left":"旅行 (Ryokou)","right":"Chuyến du lịch"},{"left":"忘れられない (Wasurerarenai)","right":"Không thể nào quên"},{"left":"訪れました (Otozuremashita)","right":"Đã ghé thăm"},{"left":"会いました (Aimashita)","right":"Đã gặp gỡ"}],
        correctAnswer: "all_matched"
      },
      {
        id: "act-ja-703-5",
        type: "audio_listen",
        skill: "listening",
        question: "Lắng nghe và chọn đáp án chính xác:",
        prompt: "旅行 (Ryokou)",
        options: ["Không thể nào quên","Nhàm chán","Nguy hiểm","Đắt đỏ"],
        correctAnswer: "Không thể nào quên"
      }
    ]
  },
  {
    id: "lesson-ja-704",
    unitId: "unit-ja-7",
    title: "Kể Chuyện Theo Trình Tự (Soshite & Sorekara)",
    description: "Sử dụng các từ nối mazu, tsugi ni, sorekara, saigo ni để kể chuyện trôi chảy.",
    type: "standard",
    xp: 15,
    estimatedMinutes: 5,
    order: 4,
    status: "available",
    goals: [
      { id: "g1", description: "Nắm vững các từ vựng chủ đề Kể Chuyện Theo Trình Tự (Soshite & Sorekara)" },
      { id: "g2", description: "Luyện phát âm chuẩn và phản xạ câu qua các bài tập tương tác" }
    ],
    vocabulary: [
      { id: "v-ja-704-1", word: "まず (Mazu)", translation: "Trước tiên / Đầu tiên", phonetic: "ma-zu" },
      { id: "v-ja-704-2", word: "それから (Sorekara)", translation: "Sau đó / Kế tiếp", phonetic: "so-re-ka-ra" },
      { id: "v-ja-704-3", word: "突然 (Totsuzen)", translation: "Đột nhiên / Bất ngờ", phonetic: "to-tsu-zen" },
      { id: "v-ja-704-4", word: "最後に (Saigo ni)", translation: "Cuối cùng", phonetic: "sa-i-go ni" },
      { id: "v-ja-704-5", word: "話 (Hanashi)", translation: "Câu chuyện", phonetic: "ha-na-shi" }
    ],
    phrases: [
      { id: "p-ja-704-1", text: "まず朝ご飯を食べて、それから出かけました。", translation: "Đầu tiên tôi ăn sáng, sau đó tôi mới ra ngoài." },
      { id: "p-ja-704-2", text: "突然雨が降り始めました。", translation: "Đột nhiên trời bắt đầu đổ mưa." }
    ],
    activities: [
      {
        id: "act-ja-704-1",
        type: "multiple_choice",
        skill: "reading",
        question: "Từ nối nào mang nghĩa 'Đột nhiên / Bất ngờ' trong tiếng Nhật?",
        options: ["突然 (Totsuzen)","まず (Mazu)","最後に (Saigo ni)","それから"],
        correctAnswer: "突然 (Totsuzen)"
      },
      {
        id: "act-ja-704-2",
        type: "fill_blank",
        skill: "writing",
        question: "Điền từ: '_____、試合に勝ちました。' (cuối cùng)",
        prompt: "Điền từ: '_____、試合に勝ちました。' (cuối cùng)",
        options: ["最後に","突然","まず","昨日"],
        correctAnswer: "最後に"
      },
      {
        id: "act-ja-704-3",
        type: "multiple_choice",
        skill: "reading",
        question: "Dịch: 'まず、それから'",
        options: ["Trước tiên và sau đó","Hôm qua và hôm nay","Nhanh và chậm","Vui và buồn"],
        correctAnswer: "Trước tiên và sau đó"
      },
      {
        id: "act-ja-704-4",
        type: "match_pairs",
        skill: "reading",
        question: "Ghép các cặp từ vựng với nghĩa tiếng Việt tương ứng",
        pairs: [{"left":"まず (Mazu)","right":"Trước tiên / Đầu tiên"},{"left":"それから (Sorekara)","right":"Sau đó / Kế tiếp"},{"left":"突然 (Totsuzen)","right":"Đột nhiên / Bất ngờ"},{"left":"最後に (Saigo ni)","right":"Cuối cùng"}],
        correctAnswer: "all_matched"
      },
      {
        id: "act-ja-704-5",
        type: "audio_listen",
        skill: "listening",
        question: "Lắng nghe và chọn đáp án chính xác:",
        prompt: "まず (Mazu)",
        options: ["突然 (Totsuzen)","まず (Mazu)","最後に (Saigo ni)","それから"],
        correctAnswer: "突然 (Totsuzen)"
      }
    ]
  },
  {
    id: "lesson-ja-705",
    unitId: "unit-ja-7",
    title: "AI Practice: Kể Lại Kỷ Niệm Cùng Thầy Kenji",
    description: "Luyện phản xạ thì quá khứ ~mashita và kể kỷ niệm tuổi thơ với thầy giáo Kenji.",
    type: "audio_ai",
    xp: 25,
    estimatedMinutes: 5,
    order: 5,
    heroImage: images.mascotWelcome,
    status: "available",
    goals: [
      { id: "g1", description: "Luyện phản xạ giao tiếp thực tế với AI Teacher Kenji" },
      { id: "g2", description: "Vận dụng từ vựng trọng tâm vào ngữ cảnh hội thoại tự nhiên" }
    ],
    vocabulary: [
      { id: "v-ai-ja-7-1", word: "昨日", translation: "Hôm qua" },
      { id: "v-ai-ja-7-2", word: "行きました", translation: "Đã đi" },
      { id: "v-ai-ja-7-3", word: "食べました", translation: "Đã ăn" },
      { id: "v-ai-ja-7-4", word: "楽しかった", translation: "Đã rất vui" },
      { id: "v-ai-ja-7-5", word: "思い出", translation: "Kỷ niệm" }
    ],
    phrases: [],
    activities: [],
    aiTeacherPrompt: {
      scenario: "Phòng trà truyền thống nhìn ra vườn hoa anh đào tại Kyoto",
      systemPrompt: "You are Kenji, a warm, human, and energetic Japanese teacher. Speak mostly in English for clear guidance. Introduce Japanese words slowly: say the word once, give the English translation, and invite the student to repeat after you. Keep every reply strictly to 1 or 2 conversational sentences with friendly contractions (I'm, let's, that's). Listen closely to the student, praise correct pronunciation, and gently model errors again: 'So close! Try saying —'. Stay strictly on lesson words: 昨日, 行きました, 食べました, 楽しかった, 思い出. Never switch topics.",
      initialGreeting: "こんにちは！お元気ですか？昨日は何をしましたか？楽しかった思い出を教えてください。",
      targetVocabulary: ["昨日","行きました","食べました","楽しかった","思い出"],
      suggestedResponses: ["昨日は友達と日本料理を食べに行きました。","先月、京都を旅行してとても楽しかったです。","忘れられない素晴らしい思い出になりました！"],
      difficulty: "intermediate"
    }
  },
  {
    id: "lesson-ja-801",
    unitId: "unit-ja-8",
    title: "Triệu Chứng Ốm Sốt (~ga itai desu)",
    description: "Miêu tả các cơn đau và triệu chứng sức khỏe bằng cấu trúc ~ga itai desu.",
    type: "standard",
    xp: 15,
    estimatedMinutes: 5,
    order: 1,
    status: "available",
    goals: [
      { id: "g1", description: "Nắm vững các từ vựng chủ đề Triệu Chứng Ốm Sốt (~ga itai desu)" },
      { id: "g2", description: "Luyện phát âm chuẩn và phản xạ câu qua các bài tập tương tác" }
    ],
    vocabulary: [
      { id: "v-ja-801-1", word: "健康 (Kenkou)", translation: "Sức khỏe", phonetic: "ken-ko-u" },
      { id: "v-ja-801-2", word: "頭が痛い (Atama ga itai)", translation: "Đau đầu", phonetic: "a-ta-ma ga i-ta-i" },
      { id: "v-ja-801-3", word: "熱があります (Netsu ga arimasu)", translation: "Bị sốt", phonetic: "ne-tsu ga a-ri-ma-su" },
      { id: "v-ja-801-4", word: "咳が出ます (Seki ga demasu)", translation: "Bị ho", phonetic: "se-ki ga de-ma-su" },
      { id: "v-ja-801-5", word: "疲れています (Tsukarete imasu)", translation: "Mệt mỏi", phonetic: "tsu-ka-re-te i-ma-su" }
    ],
    phrases: [
      { id: "p-ja-801-1", text: "昨日から頭が痛くて、熱もあります。", translation: "Từ hôm qua tôi đã bị đau đầu và còn có cả sốt nữa." },
      { id: "p-ja-801-2", text: "今日はとても疲れているようですね。", translation: "Hôm nay trông bạn có vẻ rất mệt mỏi đấy." }
    ],
    activities: [
      {
        id: "act-ja-801-1",
        type: "multiple_choice",
        skill: "reading",
        question: "'頭が痛い' (Atama ga itai) nghĩa là gì?",
        options: ["Đau đầu","Đau bụng","Đau răng","Đau lưng"],
        correctAnswer: "Đau đầu"
      },
      {
        id: "act-ja-801-2",
        type: "fill_blank",
        skill: "writing",
        question: "Điền từ: 'お腹が _____。' (đau bụng)",
        prompt: "Điền từ: 'お腹が _____。' (đau bụng)",
        options: ["痛い","熱","健康","咳"],
        correctAnswer: "痛い"
      },
      {
        id: "act-ja-801-3",
        type: "multiple_choice",
        skill: "reading",
        question: "Dịch: '熱があります' (Netsu ga arimasu)",
        options: ["Tôi bị sốt","Tôi bị đói","Tôi bị mệt","Tôi bị đau mắt"],
        correctAnswer: "Tôi bị sốt"
      },
      {
        id: "act-ja-801-4",
        type: "match_pairs",
        skill: "reading",
        question: "Ghép các cặp từ vựng với nghĩa tiếng Việt tương ứng",
        pairs: [{"left":"健康 (Kenkou)","right":"Sức khỏe"},{"left":"頭が痛い (Atama ga itai)","right":"Đau đầu"},{"left":"熱があります (Netsu ga arimasu)","right":"Bị sốt"},{"left":"咳が出ます (Seki ga demasu)","right":"Bị ho"}],
        correctAnswer: "all_matched"
      },
      {
        id: "act-ja-801-5",
        type: "audio_listen",
        skill: "listening",
        question: "Lắng nghe và chọn đáp án chính xác:",
        prompt: "健康 (Kenkou)",
        options: ["Đau đầu","Đau bụng","Đau răng","Đau lưng"],
        correctAnswer: "Đau đầu"
      }
    ]
  },
  {
    id: "lesson-ja-802",
    unitId: "unit-ja-8",
    title: "Tại Bệnh Viện (Byouin de)",
    description: "Đăng ký khám, giao tiếp với bác sĩ và nghe dặn dò nghỉ ngơi.",
    type: "standard",
    xp: 15,
    estimatedMinutes: 5,
    order: 2,
    status: "available",
    goals: [
      { id: "g1", description: "Nắm vững các từ vựng chủ đề Tại Bệnh Viện (Byouin de)" },
      { id: "g2", description: "Luyện phát âm chuẩn và phản xạ câu qua các bài tập tương tác" }
    ],
    vocabulary: [
      { id: "v-ja-802-1", word: "病院 (Byouin)", translation: "Bệnh viện", phonetic: "byo-u-in" },
      { id: "v-ja-802-2", word: "医者 (Isha)", translation: "Bác sĩ", phonetic: "i-sha" },
      { id: "v-ja-802-3", word: "処方箋 (Shohousen)", translation: "Đơn thuốc", phonetic: "sho-ho-u-sen" },
      { id: "v-ja-802-4", word: "診察 (Shinsatsu)", translation: "Khám bệnh", phonetic: "shin-sa-tsu" },
      { id: "v-ja-802-5", word: "休む (Yasumu)", translation: "Nghỉ ngơi", phonetic: "ya-su-mu" }
    ],
    phrases: [
      { id: "p-ja-802-1", text: "明日、病院へ診察に行きます。", translation: "Ngày mai tôi sẽ đến bệnh viện để khám bệnh." },
      { id: "p-ja-802-2", text: "無理をしないで、家でゆっくり休んでください。", translation: "Đừng gắng sức quá, hãy nghỉ ngơi thoải mái ở nhà nhé." }
    ],
    activities: [
      {
        id: "act-ja-802-1",
        type: "multiple_choice",
        skill: "reading",
        question: "'処方箋' (Shohousen) của bác sĩ là giấy gì?",
        options: ["Đơn thuốc","Hóa đơn viện phí","Thẻ bảo hiểm","Giấy hẹn tái khám"],
        correctAnswer: "Đơn thuốc"
      },
      {
        id: "act-ja-802-2",
        type: "fill_blank",
        skill: "writing",
        question: "Điền từ: '今日は家で _____。' (nghỉ ngơi)",
        prompt: "Điền từ: '今日は家で _____。' (nghỉ ngơi)",
        options: ["休んでください","病院","医者","処方箋"],
        correctAnswer: "休んでください"
      },
      {
        id: "act-ja-802-3",
        type: "multiple_choice",
        skill: "reading",
        question: "Dịch: 'ゆっくり休んでください'",
        options: ["Hãy nghỉ ngơi thoải mái nhé","Hãy uống thuốc đi","Hãy đi làm việc đi","Hãy đi ăn cơm đi"],
        correctAnswer: "Hãy nghỉ ngơi thoải mái nhé"
      },
      {
        id: "act-ja-802-4",
        type: "match_pairs",
        skill: "reading",
        question: "Ghép các cặp từ vựng với nghĩa tiếng Việt tương ứng",
        pairs: [{"left":"病院 (Byouin)","right":"Bệnh viện"},{"left":"医者 (Isha)","right":"Bác sĩ"},{"left":"処方箋 (Shohousen)","right":"Đơn thuốc"},{"left":"診察 (Shinsatsu)","right":"Khám bệnh"}],
        correctAnswer: "all_matched"
      },
      {
        id: "act-ja-802-5",
        type: "audio_listen",
        skill: "listening",
        question: "Lắng nghe và chọn đáp án chính xác:",
        prompt: "病院 (Byouin)",
        options: ["Đơn thuốc","Hóa đơn viện phí","Thẻ bảo hiểm","Giấy hẹn tái khám"],
        correctAnswer: "Đơn thuốc"
      }
    ]
  },
  {
    id: "lesson-ja-803",
    unitId: "unit-ja-8",
    title: "Mua Thuốc Ở Hiệu Thuốc (Yakkyoku)",
    description: "Mua thuốc cảm cúm, viên uống và nghe hướng dẫn liều dùng.",
    type: "standard",
    xp: 15,
    estimatedMinutes: 5,
    order: 3,
    status: "available",
    goals: [
      { id: "g1", description: "Nắm vững các từ vựng chủ đề Mua Thuốc Ở Hiệu Thuốc (Yakkyoku)" },
      { id: "g2", description: "Luyện phát âm chuẩn và phản xạ câu qua các bài tập tương tác" }
    ],
    vocabulary: [
      { id: "v-ja-803-1", word: "薬局 (Yakkyoku)", translation: "Hiệu thuốc", phonetic: "yak-kyo-ku" },
      { id: "v-ja-803-2", word: "薬 (Kusuri)", translation: "Thuốc uống", phonetic: "ku-su-ri" },
      { id: "v-ja-803-3", word: "錠剤 (Jouzai)", translation: "Viên thuốc nén", phonetic: "jo-u-za-i" },
      { id: "v-ja-803-4", word: "風邪薬 (Kazegusuri)", translation: "Thuốc cảm cúm", phonetic: "ka-ze-gu-su-ri" },
      { id: "v-ja-803-5", word: "食後 (Shokugo)", translation: "Sau bữa ăn", phonetic: "sho-ku-go" }
    ],
    phrases: [
      { id: "p-ja-803-1", text: "この薬は食後に1錠飲んでください。", translation: "Thuốc này xin hãy uống một viên sau bữa ăn." },
      { id: "p-ja-803-2", text: "風邪薬をください。", translation: "Xin vui lòng cho tôi thuốc cảm cúm." }
    ],
    activities: [
      {
        id: "act-ja-803-1",
        type: "multiple_choice",
        skill: "reading",
        question: "'食後' (Shokugo) chỉ thời điểm nào khi uống thuốc?",
        options: ["Sau bữa ăn","Trước bữa ăn","Khi đang ngủ","Vào lúc sáng sớm"],
        correctAnswer: "Sau bữa ăn"
      },
      {
        id: "act-ja-803-2",
        type: "fill_blank",
        skill: "writing",
        question: "Điền từ: '_____で風邪薬を買いました。' (hiệu thuốc)",
        prompt: "Điền từ: '_____で風邪薬を買いました。' (hiệu thuốc)",
        options: ["薬局","病院","医者","食後"],
        correctAnswer: "薬局"
      },
      {
        id: "act-ja-803-3",
        type: "multiple_choice",
        skill: "reading",
        question: "Dịch: '薬を飲みます' (Kusuri o nomimasu)",
        options: ["Uống thuốc","Mua thuốc","Bán thuốc","Khám bệnh"],
        correctAnswer: "Uống thuốc"
      },
      {
        id: "act-ja-803-4",
        type: "match_pairs",
        skill: "reading",
        question: "Ghép các cặp từ vựng với nghĩa tiếng Việt tương ứng",
        pairs: [{"left":"薬局 (Yakkyoku)","right":"Hiệu thuốc"},{"left":"薬 (Kusuri)","right":"Thuốc uống"},{"left":"錠剤 (Jouzai)","right":"Viên thuốc nén"},{"left":"風邪薬 (Kazegusuri)","right":"Thuốc cảm cúm"}],
        correctAnswer: "all_matched"
      },
      {
        id: "act-ja-803-5",
        type: "audio_listen",
        skill: "listening",
        question: "Lắng nghe và chọn đáp án chính xác:",
        prompt: "薬局 (Yakkyoku)",
        options: ["Sau bữa ăn","Trước bữa ăn","Khi đang ngủ","Vào lúc sáng sớm"],
        correctAnswer: "Sau bữa ăn"
      }
    ]
  },
  {
    id: "lesson-ja-804",
    unitId: "unit-ja-8",
    title: "Thói Quen Sống Khỏe (Kenkou-teki na Seikatsu)",
    description: "Khuyên nhủ về thể dục, ăn uống đủ chất và giấc ngủ ngon.",
    type: "standard",
    xp: 15,
    estimatedMinutes: 5,
    order: 4,
    status: "available",
    goals: [
      { id: "g1", description: "Nắm vững các từ vựng chủ đề Thói Quen Sống Khỏe (Kenkou-teki na Seikatsu)" },
      { id: "g2", description: "Luyện phát âm chuẩn và phản xạ câu qua các bài tập tương tác" }
    ],
    vocabulary: [
      { id: "v-ja-804-1", word: "運動する (Undou suru)", translation: "Tập thể dục thể thao", phonetic: "un-do-u su-ru" },
      { id: "v-ja-804-2", word: "寝る (Neru)", translation: "Ngủ", phonetic: "ne-ru" },
      { id: "v-ja-804-3", word: "栄養 (Eiyou)", translation: "Dinh dưỡng", phonetic: "e-i-yo-u" },
      { id: "v-ja-804-4", word: "〜たほうがいい (~ta hou ga ii)", translation: "Nên làm gì (lời khuyên)", phonetic: "ta ho-u ga i-i" },
      { id: "v-ja-804-5", word: "元気 (Genki)", translation: "Khỏe khoắn / Tràn đầy năng lượng", phonetic: "gen-ki" }
    ],
    phrases: [
      { id: "p-ja-804-1", text: "毎日8時間寝たほうがいいですよ。", translation: "Mỗi ngày bạn nên ngủ đủ 8 tiếng nhé." },
      { id: "p-ja-804-2", text: "健康のために、野菜をたくさん食べましょう。", translation: "Vì sức khỏe, chúng ta hãy ăn thật nhiều rau củ nào." }
    ],
    activities: [
      {
        id: "act-ja-804-1",
        type: "multiple_choice",
        skill: "reading",
        question: "Cấu trúc '~ta hou ga ii' dùng để làm gì?",
        options: ["Đưa ra lời khuyên nên làm gì","Hỏi đường đi","Chào tạm biệt","Từ chối lời mời"],
        correctAnswer: "Đưa ra lời khuyên nên làm gì"
      },
      {
        id: "act-ja-804-2",
        type: "fill_blank",
        skill: "writing",
        question: "Điền từ: '早く _____ ほうがいいですよ。' (ngủ)",
        prompt: "Điền từ: '早く _____ ほうがいいですよ。' (ngủ)",
        options: ["寝た","運動","薬","元気"],
        correctAnswer: "寝た"
      },
      {
        id: "act-ja-804-3",
        type: "multiple_choice",
        skill: "reading",
        question: "Dịch: '運動したほうがいい'",
        options: ["Bạn nên tập thể dục","Bạn không nên ăn","Bạn đang ngủ","Bạn bị ốm"],
        correctAnswer: "Bạn nên tập thể dục"
      },
      {
        id: "act-ja-804-4",
        type: "match_pairs",
        skill: "reading",
        question: "Ghép các cặp từ vựng với nghĩa tiếng Việt tương ứng",
        pairs: [{"left":"運動する (Undou suru)","right":"Tập thể dục thể thao"},{"left":"寝る (Neru)","right":"Ngủ"},{"left":"栄養 (Eiyou)","right":"Dinh dưỡng"},{"left":"〜たほうがいい (~ta hou ga ii)","right":"Nên làm gì (lời khuyên)"}],
        correctAnswer: "all_matched"
      },
      {
        id: "act-ja-804-5",
        type: "audio_listen",
        skill: "listening",
        question: "Lắng nghe và chọn đáp án chính xác:",
        prompt: "運動する (Undou suru)",
        options: ["Đưa ra lời khuyên nên làm gì","Hỏi đường đi","Chào tạm biệt","Từ chối lời mời"],
        correctAnswer: "Đưa ra lời khuyên nên làm gì"
      }
    ]
  },
  {
    id: "lesson-ja-805",
    unitId: "unit-ja-8",
    title: "AI Practice: Thăm Khám Sức Khỏe Cùng Bác Sĩ Tanaka",
    description: "Thực hành đối thoại bác sĩ - bệnh nhân bằng tiếng Nhật cùng bác sĩ Tanaka.",
    type: "audio_ai",
    xp: 25,
    estimatedMinutes: 5,
    order: 5,
    heroImage: images.mascotWelcome,
    status: "available",
    goals: [
      { id: "g1", description: "Luyện phản xạ giao tiếp thực tế với AI Teacher Kenji" },
      { id: "g2", description: "Vận dụng từ vựng trọng tâm vào ngữ cảnh hội thoại tự nhiên" }
    ],
    vocabulary: [
      { id: "v-ai-ja-8-1", word: "頭が痛い", translation: "Đau đầu" },
      { id: "v-ai-ja-8-2", word: "熱があります", translation: "Bị sốt" },
      { id: "v-ai-ja-8-3", word: "薬局", translation: "Nhà thuốc" },
      { id: "v-ai-ja-8-4", word: "休んでください", translation: "Hãy nghỉ ngơi đi" },
      { id: "v-ai-ja-8-5", word: "お大事に", translation: "Chúc bạn mau khỏe" }
    ],
    phrases: [],
    activities: [],
    aiTeacherPrompt: {
      scenario: "Phòng khám tư ấm cúng ở khu Shibuya, Tokyo",
      systemPrompt: "You are Kenji, a warm, human, and energetic Japanese teacher. Speak mostly in English for clear guidance. Introduce Japanese words slowly: say the word once, give the English translation, and invite the student to repeat after you. Keep every reply strictly to 1 or 2 conversational sentences with friendly contractions (I'm, let's, that's). Listen closely to the student, praise correct pronunciation, and gently model errors again: 'So close! Try saying —'. Stay strictly on lesson words: 頭が痛い, 熱があります, 薬局, 休んでください, お大事に. Never switch topics.",
      initialGreeting: "こんにちは、お掛けください。今日はどうなさいましたか？どこか痛いところはありますか？",
      targetVocabulary: ["頭が痛い","熱があります","薬局","休んでください","お大事に"],
      suggestedResponses: ["先生、昨日から頭が痛くて熱もあります。","喉も痛くて咳が出ます。","食後に飲む薬をください。"],
      difficulty: "intermediate"
    }
  },
  {
    id: "lesson-ja-901",
    unitId: "unit-ja-9",
    title: "Một Ngày Tại Công Ty (Kaisha no Ichinichi)",
    description: "Mô tả công việc văn phòng, đồng nghiệp và văn hóa công sở Nhật.",
    type: "standard",
    xp: 15,
    estimatedMinutes: 5,
    order: 1,
    status: "available",
    goals: [
      { id: "g1", description: "Nắm vững các từ vựng chủ đề Một Ngày Tại Công Ty (Kaisha no Ichinichi)" },
      { id: "g2", description: "Luyện phát âm chuẩn và phản xạ câu qua các bài tập tương tác" }
    ],
    vocabulary: [
      { id: "v-ja-901-1", word: "会社 (Kaisha)", translation: "Công ty", phonetic: "ka-i-sha" },
      { id: "v-ja-901-2", word: "同僚 (Douryou)", translation: "Đồng nghiệp", phonetic: "do-u-ryo-u" },
      { id: "v-ja-901-3", word: "会議 (Kaigi)", translation: "Cuộc họp", phonetic: "ka-i-gi" },
      { id: "v-ja-901-4", word: "プロジェクト (Purojekuto)", translation: "Dự án công việc", phonetic: "pu-ro-jek-to" },
      { id: "v-ja-901-5", word: "部長 (Buchou)", translation: "Trưởng phòng", phonetic: "bu-cho-u" }
    ],
    phrases: [
      { id: "p-ja-901-1", text: "毎週月曜日の朝にチーム会議があります。", translation: "Sáng thứ Hai hàng tuần chúng tôi đều có cuộc họp nhóm." },
      { id: "p-ja-901-2", text: "新しいプロジェクトを同僚と一緒に進めています。", translation: "Tôi đang cùng đồng nghiệp tiến hành một dự án mới." }
    ],
    activities: [
      {
        id: "act-ja-901-1",
        type: "multiple_choice",
        skill: "reading",
        question: "'同僚' (Douryou) là ai?",
        options: ["Đồng nghiệp","Khách hàng","Thầy giáo","Hàng xóm"],
        correctAnswer: "Đồng nghiệp"
      },
      {
        id: "act-ja-901-2",
        type: "fill_blank",
        skill: "writing",
        question: "Điền từ: '_____と相談します。' (đồng nghiệp)",
        prompt: "Điền từ: '_____と相談します。' (đồng nghiệp)",
        options: ["同僚","プロジェクト","会議","会社"],
        correctAnswer: "同僚"
      },
      {
        id: "act-ja-901-3",
        type: "multiple_choice",
        skill: "reading",
        question: "Dịch: '会議は10時に始まります'",
        options: ["Cuộc họp bắt đầu lúc 10 giờ","Công ty đóng cửa lúc 10h","Giờ ăn trưa lúc 10h","Sếp đến lúc 10h"],
        correctAnswer: "Cuộc họp bắt đầu lúc 10 giờ"
      },
      {
        id: "act-ja-901-4",
        type: "match_pairs",
        skill: "reading",
        question: "Ghép các cặp từ vựng với nghĩa tiếng Việt tương ứng",
        pairs: [{"left":"会社 (Kaisha)","right":"Công ty"},{"left":"同僚 (Douryou)","right":"Đồng nghiệp"},{"left":"会議 (Kaigi)","right":"Cuộc họp"},{"left":"プロジェクト (Purojekuto)","right":"Dự án công việc"}],
        correctAnswer: "all_matched"
      },
      {
        id: "act-ja-901-5",
        type: "audio_listen",
        skill: "listening",
        question: "Lắng nghe và chọn đáp án chính xác:",
        prompt: "会社 (Kaisha)",
        options: ["Đồng nghiệp","Khách hàng","Thầy giáo","Hàng xóm"],
        correctAnswer: "Đồng nghiệp"
      }
    ]
  },
  {
    id: "lesson-ja-902",
    unitId: "unit-ja-9",
    title: "Viết Email Công Việc (Bijinesu Meeru)",
    description: "Mẫu câu chào hỏi kinh doanh Osewa ni natte orimasu và Otsukaresama desu.",
    type: "standard",
    xp: 15,
    estimatedMinutes: 5,
    order: 2,
    status: "available",
    goals: [
      { id: "g1", description: "Nắm vững các từ vựng chủ đề Viết Email Công Việc (Bijinesu Meeru)" },
      { id: "g2", description: "Luyện phát âm chuẩn và phản xạ câu qua các bài tập tương tác" }
    ],
    vocabulary: [
      { id: "v-ja-902-1", word: "お世話になっております (Osewa ni natte orimasu)", translation: "Cảm ơn sự hợp tác của quý vị", phonetic: "o-se-wa ni nat-te o-ri-ma-su" },
      { id: "v-ja-902-2", word: "お疲れ様です (Otsukaresama desu)", translation: "Bạn đã vất vả rồi (chào đồng nghiệp)", phonetic: "o-tsu-ka-re-sa-ma de-su" },
      { id: "v-ja-902-3", word: "よろしくお願いします (Yoroshiku onegai shimasu)", translation: "Rất mong nhận được sự giúp đỡ", phonetic: "yo-ro-shi-ku o-ne-ga-i shi-ma-su" },
      { id: "v-ja-902-4", word: "添付ファイル (Tenpu fairu)", translation: "Tệp đính kèm email", phonetic: "ten-pu fa-i-ru" },
      { id: "v-ja-902-5", word: "確認 (Kakunin)", translation: "Xác nhận / Kiểm tra", phonetic: "ka-ku-nin" }
    ],
    phrases: [
      { id: "p-ja-902-1", text: "添付ファイルをご確認いただけますでしょうか。", translation: "Kính mong quý vị xác nhận tệp đính kèm giúp tôi ạ." },
      { id: "p-ja-902-2", text: "いつも大変お世話になっております。", translation: "Luôn luôn cảm ơn sự giúp đỡ quý báu của quý công ty." }
    ],
    activities: [
      {
        id: "act-ja-902-1",
        type: "multiple_choice",
        skill: "reading",
        question: "Lời chào mở đầu email kinh doanh phổ biến nhất của người Nhật là gì?",
        options: ["お世話になっております","こんにちは","おはよう","バイバイ"],
        correctAnswer: "お世話になっております"
      },
      {
        id: "act-ja-902-2",
        type: "fill_blank",
        skill: "writing",
        question: "Điền từ: '内容をご_____ください。' (xác nhận / kiểm tra)",
        prompt: "Điền từ: '内容をご_____ください。' (xác nhận / kiểm tra)",
        options: ["確認","会議","会社","同僚"],
        correctAnswer: "確認"
      },
      {
        id: "act-ja-902-3",
        type: "multiple_choice",
        skill: "reading",
        question: "Dịch: '添付ファイル'",
        options: ["Tệp đính kèm","Chữ ký","Tiêu đề","Hộp thư rác"],
        correctAnswer: "Tệp đính kèm"
      },
      {
        id: "act-ja-902-4",
        type: "match_pairs",
        skill: "reading",
        question: "Ghép các cặp từ vựng với nghĩa tiếng Việt tương ứng",
        pairs: [{"left":"お世話になっております (Osewa ni natte orimasu)","right":"Cảm ơn sự hợp tác của quý vị"},{"left":"お疲れ様です (Otsukaresama desu)","right":"Bạn đã vất vả rồi (chào đồng nghiệp)"},{"left":"よろしくお願いします (Yoroshiku onegai shimasu)","right":"Rất mong nhận được sự giúp đỡ"},{"left":"添付ファイル (Tenpu fairu)","right":"Tệp đính kèm email"}],
        correctAnswer: "all_matched"
      },
      {
        id: "act-ja-902-5",
        type: "audio_listen",
        skill: "listening",
        question: "Lắng nghe và chọn đáp án chính xác:",
        prompt: "お世話になっております (Osewa ni natte orimasu)",
        options: ["お世話になっております","こんにちは","おはよう","バイバイ"],
        correctAnswer: "お世話になっております"
      }
    ]
  },
  {
    id: "lesson-ja-903",
    unitId: "unit-ja-9",
    title: "Phỏng Vấn Xin Việc (Mensetsu)",
    description: "Giới thiệu bản thân, kinh nghiệm làm việc và điểm mạnh bản thân.",
    type: "standard",
    xp: 15,
    estimatedMinutes: 5,
    order: 3,
    status: "available",
    goals: [
      { id: "g1", description: "Nắm vững các từ vựng chủ đề Phỏng Vấn Xin Việc (Mensetsu)" },
      { id: "g2", description: "Luyện phát âm chuẩn và phản xạ câu qua các bài tập tương tác" }
    ],
    vocabulary: [
      { id: "v-ja-903-1", word: "面接 (Mensetsu)", translation: "Buổi phỏng vấn xin việc", phonetic: "men-se-tsu" },
      { id: "v-ja-903-2", word: "履歴書 (Rirekisho)", translation: "Sơ yếu lý lịch / CV", phonetic: "ri-re-ki-sho" },
      { id: "v-ja-903-3", word: "経験 (Keiken)", translation: "Kinh nghiệm làm việc", phonetic: "ke-i-ken" },
      { id: "v-ja-903-4", word: "長所 (Chousho)", translation: "Điểm mạnh / Sở trường", phonetic: "cho-u-sho" },
      { id: "v-ja-903-5", word: "熱意 (Netsui)", translation: "Nhiệt huyết / Tinh thần hăng say", phonetic: "ne-tsu-i" }
    ],
    phrases: [
      { id: "p-ja-903-1", text: "この分野で3年間の経験があります。", translation: "Tôi có 3 năm kinh nghiệm trong lĩnh vực này." },
      { id: "p-ja-903-2", text: "私の長所は責任感が強いことです。", translation: "Điểm mạnh của tôi là tinh thần trách nhiệm cao." }
    ],
    activities: [
      {
        id: "act-ja-903-1",
        type: "multiple_choice",
        skill: "reading",
        question: "'長所' (Chousho) có nghĩa là gì?",
        options: ["Điểm mạnh / Sở trường","Điểm yếu","Mức lương","Địa chỉ nhà"],
        correctAnswer: "Điểm mạnh / Sở trường"
      },
      {
        id: "act-ja-903-2",
        type: "fill_blank",
        skill: "writing",
        question: "Điền từ: '私の_____はチームワークです。' (điểm mạnh)",
        prompt: "Điền từ: '私の_____はチームワークです。' (điểm mạnh)",
        options: ["長所","履歴書","面接","会議"],
        correctAnswer: "長所"
      },
      {
        id: "act-ja-903-3",
        type: "multiple_choice",
        skill: "reading",
        question: "Dịch: '面接があります'",
        options: ["Tôi có buổi phỏng vấn","Tôi đi làm","Tôi nghỉ phép","Tôi ăn trưa"],
        correctAnswer: "Tôi có buổi phỏng vấn"
      },
      {
        id: "act-ja-903-4",
        type: "match_pairs",
        skill: "reading",
        question: "Ghép các cặp từ vựng với nghĩa tiếng Việt tương ứng",
        pairs: [{"left":"面接 (Mensetsu)","right":"Buổi phỏng vấn xin việc"},{"left":"履歴書 (Rirekisho)","right":"Sơ yếu lý lịch / CV"},{"left":"経験 (Keiken)","right":"Kinh nghiệm làm việc"},{"left":"長所 (Chousho)","right":"Điểm mạnh / Sở trường"}],
        correctAnswer: "all_matched"
      },
      {
        id: "act-ja-903-5",
        type: "audio_listen",
        skill: "listening",
        question: "Lắng nghe và chọn đáp án chính xác:",
        prompt: "面接 (Mensetsu)",
        options: ["Điểm mạnh / Sở trường","Điểm yếu","Mức lương","Địa chỉ nhà"],
        correctAnswer: "Điểm mạnh / Sở trường"
      }
    ]
  },
  {
    id: "lesson-ja-904",
    unitId: "unit-ja-9",
    title: "Thời Hạn & Lịch Hẹn (Shimekiri to Yotei)",
    description: "Thảo luận thời hạn hoàn thành công việc và sắp xếp lịch công tác.",
    type: "standard",
    xp: 15,
    estimatedMinutes: 5,
    order: 4,
    status: "available",
    goals: [
      { id: "g1", description: "Nắm vững các từ vựng chủ đề Thời Hạn & Lịch Hẹn (Shimekiri to Yotei)" },
      { id: "g2", description: "Luyện phát âm chuẩn và phản xạ câu qua các bài tập tương tác" }
    ],
    vocabulary: [
      { id: "v-ja-904-1", word: "締め切り (Shimekiri)", translation: "Hạn chót / Deadline", phonetic: "shi-me-ki-ri" },
      { id: "v-ja-904-2", word: "予定 (Yotei)", translation: "Lịch trình / Kế hoạch", phonetic: "yo-te-i" },
      { id: "v-ja-904-3", word: "間に合います (Maniaimasu)", translation: "Kịp giờ / Kịp tiến độ", phonetic: "ma-ni-a-i-ma-su" },
      { id: "v-ja-904-4", word: "出張 (Shucchou)", translation: "Đi công tác xa", phonetic: "shuc-cho-u" },
      { id: "v-ja-904-5", word: "連絡 (Renraku)", translation: "Liên lạc / Báo tin", phonetic: "ren-ra-ku" }
    ],
    phrases: [
      { id: "p-ja-904-1", text: "締め切りまでに必ず間に合わせます。", translation: "Tôi nhất định sẽ hoàn thành kịp trước hạn chót." },
      { id: "p-ja-904-2", text: "来週、大阪へ出張する予定です。", translation: "Tuần sau, tôi có kế hoạch đi công tác đến Osaka." }
    ],
    activities: [
      {
        id: "act-ja-904-1",
        type: "multiple_choice",
        skill: "reading",
        question: "'締め切り' (Shimekiri) là gì?",
        options: ["Hạn chót / Deadline","Giờ mở cửa","Giờ ăn trưa","Lương thưởng"],
        correctAnswer: "Hạn chót / Deadline"
      },
      {
        id: "act-ja-904-2",
        type: "fill_blank",
        skill: "writing",
        question: "Điền từ: '時間が_____。' (kịp giờ)",
        prompt: "Điền từ: '時間が_____。' (kịp giờ)",
        options: ["間に合います","締め切り","出張","予定"],
        correctAnswer: "間に合います"
      },
      {
        id: "act-ja-904-3",
        type: "multiple_choice",
        skill: "reading",
        question: "Dịch: '出張に行きます'",
        options: ["Tôi đi công tác","Tôi đi về nhà","Tôi đi siêu thị","Tôi đi xem phim"],
        correctAnswer: "Tôi đi công tác"
      },
      {
        id: "act-ja-904-4",
        type: "match_pairs",
        skill: "reading",
        question: "Ghép các cặp từ vựng với nghĩa tiếng Việt tương ứng",
        pairs: [{"left":"締め切り (Shimekiri)","right":"Hạn chót / Deadline"},{"left":"予定 (Yotei)","right":"Lịch trình / Kế hoạch"},{"left":"間に合います (Maniaimasu)","right":"Kịp giờ / Kịp tiến độ"},{"left":"出張 (Shucchou)","right":"Đi công tác xa"}],
        correctAnswer: "all_matched"
      },
      {
        id: "act-ja-904-5",
        type: "audio_listen",
        skill: "listening",
        question: "Lắng nghe và chọn đáp án chính xác:",
        prompt: "締め切り (Shimekiri)",
        options: ["Hạn chót / Deadline","Giờ mở cửa","Giờ ăn trưa","Lương thưởng"],
        correctAnswer: "Hạn chót / Deadline"
      }
    ]
  },
  {
    id: "lesson-ja-905",
    unitId: "unit-ja-9",
    title: "AI Practice: Phỏng Vấn Tuyển Dụng Cùng Trưởng Phòng Sato",
    description: "Thực hành trả lời các câu hỏi phỏng vấn tuyển dụng chuẩn mực tiếng Nhật cùng trưởng phòng Sato.",
    type: "audio_ai",
    xp: 25,
    estimatedMinutes: 5,
    order: 5,
    heroImage: images.mascotWelcome,
    status: "available",
    goals: [
      { id: "g1", description: "Luyện phản xạ giao tiếp thực tế với AI Teacher Kenji" },
      { id: "g2", description: "Vận dụng từ vựng trọng tâm vào ngữ cảnh hội thoại tự nhiên" }
    ],
    vocabulary: [
      { id: "v-ai-ja-9-1", word: "自己紹介", translation: "Giới thiệu bản thân" },
      { id: "v-ai-ja-9-2", word: "経験", translation: "Kinh nghiệm" },
      { id: "v-ai-ja-9-3", word: "長所", translation: "Điểm mạnh" },
      { id: "v-ai-ja-9-4", word: "頑張ります", translation: "Tôi sẽ cố gắng" },
      { id: "v-ai-ja-9-5", word: "よろしくお願いします", translation: "Rất mong được giúp đỡ" }
    ],
    phrases: [],
    activities: [],
    aiTeacherPrompt: {
      scenario: "Phòng phỏng vấn tuyển dụng tại tòa nhà văn phòng Marunouchi, Tokyo",
      systemPrompt: "You are Kenji, a warm, human, and energetic Japanese teacher. Speak mostly in English for clear guidance. Introduce Japanese words slowly: say the word once, give the English translation, and invite the student to repeat after you. Keep every reply strictly to 1 or 2 conversational sentences with friendly contractions (I'm, let's, that's). Listen closely to the student, praise correct pronunciation, and gently model errors again: 'So close! Try saying —'. Stay strictly on lesson words: 自己紹介, 経験, 長所, 頑張ります, よろしくお願いします. Never switch topics.",
      initialGreeting: "どうぞ、お入りください。面接官の佐藤です。まず、簡単に自己紹介をお願いできますでしょうか。",
      targetVocabulary: ["自己紹介","経験","長所","頑張ります","よろしくお願いします"],
      suggestedResponses: ["はじめまして。3年間の業務経験があり、責任感が強いのが長所です。","御社のプロジェクトに貢献したいと考えております。","本日はどうぞよろしくお願いいたします。"],
      difficulty: "intermediate"
    }
  },
  {
    id: "lesson-ja-1001",
    unitId: "unit-ja-10",
    title: "Lên Kế Hoạch Đi Chơi (Ryokou no Keikaku)",
    description: "Chọn điểm đến, đặt vé tàu Shinkansen và chuẩn bị hành lý du lịch.",
    type: "standard",
    xp: 15,
    estimatedMinutes: 5,
    order: 1,
    status: "available",
    goals: [
      { id: "g1", description: "Nắm vững các từ vựng chủ đề Lên Kế Hoạch Đi Chơi (Ryokou no Keikaku)" },
      { id: "g2", description: "Luyện phát âm chuẩn và phản xạ câu qua các bài tập tương tác" }
    ],
    vocabulary: [
      { id: "v-ja-1001-1", word: "旅行 (Ryokou)", translation: "Chuyến du lịch", phonetic: "ryo-ko-u" },
      { id: "v-ja-1001-2", word: "スーツケース (Suutsukeesu)", translation: "Vali hành lý", phonetic: "su-u-tsu-ke-e-su" },
      { id: "v-ja-1001-3", word: "切符 (Kippu)", translation: "Vé (tàu, xe)", phonetic: "kip-pu" },
      { id: "v-ja-1001-4", word: "新幹線 (Shinkansen)", translation: "Tàu cao tốc Shinkansen", phonetic: "shin-kan-sen" },
      { id: "v-ja-1001-5", word: "荷物をまとめる (Nimotsu o matomeru)", translation: "Đóng gói hành lý", phonetic: "ni-mo-tsu o ma-to-me-ru" }
    ],
    phrases: [
      { id: "p-ja-1001-1", text: "新幹線の切符を予約しました。", translation: "Tôi đã đặt vé tàu cao tốc Shinkansen rồi." },
      { id: "p-ja-1001-2", text: "連休に京都へ旅行に行く予定です。", translation: "Kỳ nghỉ dài này tôi dự định đi du lịch Kyoto." }
    ],
    activities: [
      {
        id: "act-ja-1001-1",
        type: "multiple_choice",
        skill: "reading",
        question: "'新幹線' (Shinkansen) là phương tiện giao thông nổi tiếng nào?",
        options: ["Tàu cao tốc của Nhật","Tàu điện ngầm","Xe buýt liên tỉnh","Máy bay nội địa"],
        correctAnswer: "Tàu cao tốc của Nhật"
      },
      {
        id: "act-ja-1001-2",
        type: "fill_blank",
        skill: "writing",
        question: "Điền từ: '_____に乗って東京へ行きます。' (tàu cao tốc)",
        prompt: "Điền từ: '_____に乗って東京へ行きます。' (tàu cao tốc)",
        options: ["新幹線","切符","旅行","荷物"],
        correctAnswer: "新幹線"
      },
      {
        id: "act-ja-1001-3",
        type: "multiple_choice",
        skill: "reading",
        question: "Dịch: '切符を買いました'",
        options: ["Tôi đã mua vé","Tôi mua hành lý","Tôi đặt phòng","Tôi mua quà"],
        correctAnswer: "Tôi đã mua vé"
      },
      {
        id: "act-ja-1001-4",
        type: "match_pairs",
        skill: "reading",
        question: "Ghép các cặp từ vựng với nghĩa tiếng Việt tương ứng",
        pairs: [{"left":"旅行 (Ryokou)","right":"Chuyến du lịch"},{"left":"スーツケース (Suutsukeesu)","right":"Vali hành lý"},{"left":"切符 (Kippu)","right":"Vé (tàu, xe)"},{"left":"新幹線 (Shinkansen)","right":"Tàu cao tốc Shinkansen"}],
        correctAnswer: "all_matched"
      },
      {
        id: "act-ja-1001-5",
        type: "audio_listen",
        skill: "listening",
        question: "Lắng nghe và chọn đáp án chính xác:",
        prompt: "旅行 (Ryokou)",
        options: ["Tàu cao tốc của Nhật","Tàu điện ngầm","Xe buýt liên tỉnh","Máy bay nội địa"],
        correctAnswer: "Tàu cao tốc của Nhật"
      }
    ]
  },
  {
    id: "lesson-ja-1002",
    unitId: "unit-ja-10",
    title: "Tắm Suối Nước Nóng & Núi Phú Sĩ (Onsen to Fujisan)",
    description: "Trải nghiệm văn hóa tắm suối nước nóng Onsen và ngắm phong cảnh tuyệt đẹp.",
    type: "standard",
    xp: 15,
    estimatedMinutes: 5,
    order: 2,
    status: "available",
    goals: [
      { id: "g1", description: "Nắm vững các từ vựng chủ đề Tắm Suối Nước Nóng & Núi Phú Sĩ (Onsen to Fujisan)" },
      { id: "g2", description: "Luyện phát âm chuẩn và phản xạ câu qua các bài tập tương tác" }
    ],
    vocabulary: [
      { id: "v-ja-1002-1", word: "温泉 (Onsen)", translation: "Suối nước nóng", phonetic: "on-sen" },
      { id: "v-ja-1002-2", word: "富士山 (Fujisan)", translation: "Núi Phú Sĩ", phonetic: "fu-ji-san" },
      { id: "v-ja-1002-3", word: "自然 (Shizen)", translation: "Thiên nhiên", phonetic: "shi-zen" },
      { id: "v-ja-1002-4", word: "景色 (Keshiki)", translation: "Phong cảnh / Cảnh sắc", phonetic: "ke-shi-ki" },
      { id: "v-ja-1002-5", word: "気持ちいい (Kimochi ii)", translation: "Cảm giác thật sảng khoái / Dễ chịu", phonetic: "ki-mo-chi i-i" }
    ],
    phrases: [
      { id: "p-ja-1002-1", text: "富士山が見える露天風呂は最高に気持ちいいです。", translation: "Bể tắm suối nước nóng ngoài trời nhìn ra núi Phú Sĩ thật sảng khoái tuyệt vời." },
      { id: "p-ja-1002-2", text: "日本の自然の景色は四季折々で美しいです。", translation: "Cảnh sắc thiên nhiên Nhật Bản đẹp rực rỡ qua bốn mùa." }
    ],
    activities: [
      {
        id: "act-ja-1002-1",
        type: "multiple_choice",
        skill: "reading",
        question: "'温泉' (Onsen) là nét văn hóa nghỉ dưỡng đặc sắc nào của Nhật?",
        options: ["Tắm suối nước nóng tự nhiên","Đi leo núi tuyết","Tắm biển nhân tạo","Đi câu cá hồi"],
        correctAnswer: "Tắm suối nước nóng tự nhiên"
      },
      {
        id: "act-ja-1002-2",
        type: "fill_blank",
        skill: "writing",
        question: "Điền từ: '温泉に入ってとても_____です。' (sảng khoái / dễ chịu)",
        prompt: "Điền từ: '温泉に入ってとても_____です。' (sảng khoái / dễ chịu)",
        options: ["気持ちいい","富士山","自然","切符"],
        correctAnswer: "気持ちいい"
      },
      {
        id: "act-ja-1002-3",
        type: "multiple_choice",
        skill: "reading",
        question: "Dịch: '綺麗な景色' (Kirei na keshiki)",
        options: ["Phong cảnh tuyệt đẹp","Một món ăn ngon","Một ngôi nhà cổ","Một chiếc xe mới"],
        correctAnswer: "Phong cảnh tuyệt đẹp"
      },
      {
        id: "act-ja-1002-4",
        type: "match_pairs",
        skill: "reading",
        question: "Ghép các cặp từ vựng với nghĩa tiếng Việt tương ứng",
        pairs: [{"left":"温泉 (Onsen)","right":"Suối nước nóng"},{"left":"富士山 (Fujisan)","right":"Núi Phú Sĩ"},{"left":"自然 (Shizen)","right":"Thiên nhiên"},{"left":"景色 (Keshiki)","right":"Phong cảnh / Cảnh sắc"}],
        correctAnswer: "all_matched"
      },
      {
        id: "act-ja-1002-5",
        type: "audio_listen",
        skill: "listening",
        question: "Lắng nghe và chọn đáp án chính xác:",
        prompt: "温泉 (Onsen)",
        options: ["Tắm suối nước nóng tự nhiên","Đi leo núi tuyết","Tắm biển nhân tạo","Đi câu cá hồi"],
        correctAnswer: "Tắm suối nước nóng tự nhiên"
      }
    ]
  },
  {
    id: "lesson-ja-1003",
    unitId: "unit-ja-10",
    title: "Nhận Phòng Tại Lữ Quán Ryokan (Ryokan de)",
    description: "Đặt phòng kiểu Nhật Tatami, thưởng thức bữa ăn Kaiseki truyền thống.",
    type: "standard",
    xp: 15,
    estimatedMinutes: 5,
    order: 3,
    status: "available",
    goals: [
      { id: "g1", description: "Nắm vững các từ vựng chủ đề Nhận Phòng Tại Lữ Quán Ryokan (Ryokan de)" },
      { id: "g2", description: "Luyện phát âm chuẩn và phản xạ câu qua các bài tập tương tác" }
    ],
    vocabulary: [
      { id: "v-ja-1003-1", word: "旅館 (Ryokan)", translation: "Lữ quán kiểu truyền thống Nhật Bản", phonetic: "ryo-kan" },
      { id: "v-ja-1003-2", word: "和室 (Washitsu)", translation: "Phòng trải chiếu Tatami kiểu Nhật", phonetic: "wa-shi-tsu" },
      { id: "v-ja-1003-3", word: "朝食付き (Choushoku tsuki)", translation: "Kèm theo bữa sáng", phonetic: "cho-u-sho-ku tsu-ki" },
      { id: "v-ja-1003-4", word: "鍵 (Kagi)", translation: "Chìa khóa phòng", phonetic: "ka-gi" },
      { id: "v-ja-1003-5", word: "畳 (Tatami)", translation: "Chiếu cói Tatami", phonetic: "ta-ta-mi" }
    ],
    phrases: [
      { id: "p-ja-1003-1", text: "朝食付きの和室を予約したいのですが。", translation: "Tôi muốn đặt một phòng chiếu kiểu Nhật kèm theo bữa sáng." },
      { id: "p-ja-1003-2", text: "こちらがお部屋の鍵でございます。", translation: "Đây là chìa khóa phòng của quý khách ạ." }
    ],
    activities: [
      {
        id: "act-ja-1003-1",
        type: "multiple_choice",
        skill: "reading",
        question: "'旅館' (Ryokan) khác với khách sạn thông thường ở điểm nào?",
        options: ["Mang phong cách truyền thống Nhật Bản với chiếu Tatami và suối nước nóng","Là khách sạn chỉ có giường tầng","Là nhà nghỉ giá rẻ ven đường","Là homestay trên cây"],
        correctAnswer: "Mang phong cách truyền thống Nhật Bản với chiếu Tatami và suối nước nóng"
      },
      {
        id: "act-ja-1003-2",
        type: "fill_blank",
        skill: "writing",
        question: "Điền từ: '畳がある_____に泊まりたいです。' (phòng kiểu Nhật)",
        prompt: "Điền từ: '畳がある_____に泊まりたいです。' (phòng kiểu Nhật)",
        options: ["和室","鍵","新幹線","景色"],
        correctAnswer: "和室"
      },
      {
        id: "act-ja-1003-3",
        type: "multiple_choice",
        skill: "reading",
        question: "Dịch: '部屋の鍵'",
        options: ["Chìa khóa phòng","Số phòng","Hóa đơn phòng","Người phục vụ"],
        correctAnswer: "Chìa khóa phòng"
      },
      {
        id: "act-ja-1003-4",
        type: "match_pairs",
        skill: "reading",
        question: "Ghép các cặp từ vựng với nghĩa tiếng Việt tương ứng",
        pairs: [{"left":"旅館 (Ryokan)","right":"Lữ quán kiểu truyền thống Nhật Bản"},{"left":"和室 (Washitsu)","right":"Phòng trải chiếu Tatami kiểu Nhật"},{"left":"朝食付き (Choushoku tsuki)","right":"Kèm theo bữa sáng"},{"left":"鍵 (Kagi)","right":"Chìa khóa phòng"}],
        correctAnswer: "all_matched"
      },
      {
        id: "act-ja-1003-5",
        type: "audio_listen",
        skill: "listening",
        question: "Lắng nghe và chọn đáp án chính xác:",
        prompt: "旅館 (Ryokan)",
        options: ["Mang phong cách truyền thống Nhật Bản với chiếu Tatami và suối nước nóng","Là khách sạn chỉ có giường tầng","Là nhà nghỉ giá rẻ ven đường","Là homestay trên cây"],
        correctAnswer: "Mang phong cách truyền thống Nhật Bản với chiếu Tatami và suối nước nóng"
      }
    ]
  },
  {
    id: "lesson-ja-1004",
    unitId: "unit-ja-10",
    title: "Thăm Quan Đền Chùa Cổ Kính (Kankou)",
    description: "Mua vé tham quan chùa vàng, cổng Torii và chụp ảnh kỷ niệm.",
    type: "standard",
    xp: 15,
    estimatedMinutes: 5,
    order: 4,
    status: "available",
    goals: [
      { id: "g1", description: "Nắm vững các từ vựng chủ đề Thăm Quan Đền Chùa Cổ Kính (Kankou)" },
      { id: "g2", description: "Luyện phát âm chuẩn và phản xạ câu qua các bài tập tương tác" }
    ],
    vocabulary: [
      { id: "v-ja-1004-1", word: "お寺 (Otera)", translation: "Ngôi chùa Phật giáo", phonetic: "o-te-ra" },
      { id: "v-ja-1004-2", word: "神社 (Jinja)", translation: "Đền thờ Thần đạo", phonetic: "jin-ja" },
      { id: "v-ja-1004-3", word: "観光 (Kankou)", translation: "Tham quan / Du lịch thắng cảnh", phonetic: "kan-ko-u" },
      { id: "v-ja-1004-4", word: "写真を撮る (Shashin o toru)", translation: "Chụp ảnh kỷ niệm", phonetic: "sha-shin o to-ru" },
      { id: "v-ja-1004-5", word: "お土産 (Omiyage)", translation: "Quà lưu niệm đặc sản", phonetic: "o-mi-ya-ge" }
    ],
    phrases: [
      { id: "p-ja-1004-1", text: "京都の有名なお寺と神社を観光しました。", translation: "Tôi đã tham quan các ngôi đền và chùa nổi tiếng ở Kyoto." },
      { id: "p-ja-1004-2", text: "ここで写真を撮ってもいいですか？", translation: "Tôi có thể chụp ảnh ở đây được không?" }
    ],
    activities: [
      {
        id: "act-ja-1004-1",
        type: "multiple_choice",
        skill: "reading",
        question: "'お土産' (Omiyage) là phong tục văn hóa gì của người Nhật sau chuyến đi?",
        options: ["Mua quà lưu niệm đặc sản tặng bạn bè, người thân","Viết thư cảm ơn","Gửi tiền mừng","Đi ăn tiệc linh đình"],
        correctAnswer: "Mua quà lưu niệm đặc sản tặng bạn bè, người thân"
      },
      {
        id: "act-ja-1004-2",
        type: "fill_blank",
        skill: "writing",
        question: "Điền từ: '家族に_____を買いました。' (quà lưu niệm đặc sản)",
        prompt: "Điền từ: '家族に_____を買いました。' (quà lưu niệm đặc sản)",
        options: ["お土産","鍵","新幹線","和室"],
        correctAnswer: "お土産"
      },
      {
        id: "act-ja-1004-3",
        type: "multiple_choice",
        skill: "reading",
        question: "Dịch: '写真を撮ります'",
        options: ["Tôi chụp ảnh","Tôi mua vé","Tôi ăn trưa","Tôi hỏi đường"],
        correctAnswer: "Tôi chụp ảnh"
      },
      {
        id: "act-ja-1004-4",
        type: "match_pairs",
        skill: "reading",
        question: "Ghép các cặp từ vựng với nghĩa tiếng Việt tương ứng",
        pairs: [{"left":"お寺 (Otera)","right":"Ngôi chùa Phật giáo"},{"left":"神社 (Jinja)","right":"Đền thờ Thần đạo"},{"left":"観光 (Kankou)","right":"Tham quan / Du lịch thắng cảnh"},{"left":"写真を撮る (Shashin o toru)","right":"Chụp ảnh kỷ niệm"}],
        correctAnswer: "all_matched"
      },
      {
        id: "act-ja-1004-5",
        type: "audio_listen",
        skill: "listening",
        question: "Lắng nghe và chọn đáp án chính xác:",
        prompt: "お寺 (Otera)",
        options: ["Mua quà lưu niệm đặc sản tặng bạn bè, người thân","Viết thư cảm ơn","Gửi tiền mừng","Đi ăn tiệc linh đình"],
        correctAnswer: "Mua quà lưu niệm đặc sản tặng bạn bè, người thân"
      }
    ]
  },
  {
    id: "lesson-ja-1005",
    unitId: "unit-ja-10",
    title: "AI Practice: Du Lịch Khám Phá Xứ Sở Hoa Anh Đào Cùng Yui",
    description: "Đàm thoại tiếng Nhật về du lịch Onsen, ẩm thực và thắng cảnh cùng hướng dẫn viên Yui.",
    type: "audio_ai",
    xp: 25,
    estimatedMinutes: 5,
    order: 5,
    heroImage: images.mascotWelcome,
    status: "available",
    goals: [
      { id: "g1", description: "Luyện phản xạ giao tiếp thực tế với AI Teacher Kenji" },
      { id: "g2", description: "Vận dụng từ vựng trọng tâm vào ngữ cảnh hội thoại tự nhiên" }
    ],
    vocabulary: [
      { id: "v-ai-ja-10-1", word: "温泉", translation: "Suối nước nóng" },
      { id: "v-ai-ja-10-2", word: "神社", translation: "Đền thờ Shinto" },
      { id: "v-ai-ja-10-3", word: "綺麗", translation: "Đẹp" },
      { id: "v-ai-ja-10-4", word: "富士山", translation: "Núi Phú Sĩ" },
      { id: "v-ai-ja-10-5", word: "楽しんでください", translation: "Hãy tận hưởng nhé" }
    ],
    phrases: [],
    activities: [],
    aiTeacherPrompt: {
      scenario: "Con đường cổ trước cổng đền Fushimi Inari ngập tràn cổng Torii đỏ tại Kyoto",
      systemPrompt: "You are Kenji, a warm, human, and energetic Japanese teacher. Speak mostly in English for clear guidance. Introduce Japanese words slowly: say the word once, give the English translation, and invite the student to repeat after you. Keep every reply strictly to 1 or 2 conversational sentences with friendly contractions (I'm, let's, that's). Listen closely to the student, praise correct pronunciation, and gently model errors again: 'So close! Try saying —'. Stay strictly on lesson words: 温泉, 神社, 綺麗, 富士山, 楽しんでください. Never switch topics.",
      initialGreeting: "いらっしゃいませ！京都へようこそ！温泉や神社仏閣はもう行かれましたか？今日の観光のご予定を教えてください。",
      targetVocabulary: ["温泉","神社","綺麗","富士山","楽しんでください"],
      suggestedResponses: ["温泉に入って、とてもリラックスできました！","京都の神社でたくさん綺麗な写真を撮りたいです。","抹茶アイスとお団子がとても美味しかったです！"],
      difficulty: "intermediate"
    }
  },
  {
    id: "lesson-ja-1101",
    unitId: "unit-ja-11",
    title: "Ước Mơ & Tương Lai (~tsumori desu)",
    description: "Diễn đạt ước mơ và kế hoạch trong tương lai với cấu trúc ~tsumori desu.",
    type: "standard",
    xp: 15,
    estimatedMinutes: 5,
    order: 1,
    status: "available",
    goals: [
      { id: "g1", description: "Nắm vững các từ vựng chủ đề Ước Mơ & Tương Lai (~tsumori desu)" },
      { id: "g2", description: "Luyện phát âm chuẩn và phản xạ câu qua các bài tập tương tác" }
    ],
    vocabulary: [
      { id: "v-ja-1101-1", word: "未来 (Mirai)", translation: "Tương lai", phonetic: "mi-ra-i" },
      { id: "v-ja-1101-2", word: "〜つもりです (~tsumori desu)", translation: "Dự định làm gì...", phonetic: "tsu-mo-ri de-su" },
      { id: "v-ja-1101-3", word: "計画 (Keikaku)", translation: "Kế hoạch", phonetic: "ke-i-ka-ku" },
      { id: "v-ja-1101-4", word: "世界中 (Sekaijuu)", translation: "Khắp thế giới", phonetic: "se-ka-i-ju-u" },
      { id: "v-ja-1101-5", word: "夢 (Yume)", translation: "Giấc mơ / Ước mơ", phonetic: "yu-me" }
    ],
    phrases: [
      { id: "p-ja-1101-1", text: "将来、日本で働くつもりです。", translation: "Trong tương lai, tôi dự định sẽ làm việc tại Nhật Bản." },
      { id: "p-ja-1101-2", text: "私の夢は世界中を旅することです。", translation: "Ước mơ của tôi là được đi du lịch vòng quanh thế giới." }
    ],
    activities: [
      {
        id: "act-ja-1101-1",
        type: "multiple_choice",
        skill: "reading",
        question: "Cấu trúc '~tsumori desu' dùng để biểu thị điều gì?",
        options: ["Ý định / Kế hoạch trong tương lai","Hành động trong quá khứ","Sự việc đang tiếp diễn","Lời từ chối"],
        correctAnswer: "Ý định / Kế hoạch trong tương lai"
      },
      {
        id: "act-ja-1101-2",
        type: "fill_blank",
        skill: "writing",
        question: "Điền từ: '来年、留学する_____です。' (dự định)",
        prompt: "Điền từ: '来年、留学する_____です。' (dự định)",
        options: ["つもり","未来","計画","夢"],
        correctAnswer: "つもり"
      },
      {
        id: "act-ja-1101-3",
        type: "multiple_choice",
        skill: "reading",
        question: "Dịch: '私の夢' (Watashi no yume)",
        options: ["Ước mơ của tôi","Kỷ niệm của tôi","Trường học của tôi","Công ty của tôi"],
        correctAnswer: "Ước mơ của tôi"
      },
      {
        id: "act-ja-1101-4",
        type: "match_pairs",
        skill: "reading",
        question: "Ghép các cặp từ vựng với nghĩa tiếng Việt tương ứng",
        pairs: [{"left":"未来 (Mirai)","right":"Tương lai"},{"left":"〜つもりです (~tsumori desu)","right":"Dự định làm gì..."},{"left":"計画 (Keikaku)","right":"Kế hoạch"},{"left":"世界中 (Sekaijuu)","right":"Khắp thế giới"}],
        correctAnswer: "all_matched"
      },
      {
        id: "act-ja-1101-5",
        type: "audio_listen",
        skill: "listening",
        question: "Lắng nghe và chọn đáp án chính xác:",
        prompt: "未来 (Mirai)",
        options: ["Ý định / Kế hoạch trong tương lai","Hành động trong quá khứ","Sự việc đang tiếp diễn","Lời từ chối"],
        correctAnswer: "Ý định / Kế hoạch trong tương lai"
      }
    ]
  },
  {
    id: "lesson-ja-1102",
    unitId: "unit-ja-11",
    title: "Ứng Dụng Điện Thoại & Cuộc Sống Số (Apuri)",
    description: "Từ vựng về điện thoại thông minh, tải app và kết nối trực tuyến.",
    type: "standard",
    xp: 15,
    estimatedMinutes: 5,
    order: 2,
    status: "available",
    goals: [
      { id: "g1", description: "Nắm vững các từ vựng chủ đề Ứng Dụng Điện Thoại & Cuộc Sống Số (Apuri)" },
      { id: "g2", description: "Luyện phát âm chuẩn và phản xạ câu qua các bài tập tương tác" }
    ],
    vocabulary: [
      { id: "v-ja-1102-1", word: "アプリ (Apuri)", translation: "Ứng dụng điện thoại (App)", phonetic: "a-pu-ri" },
      { id: "v-ja-1102-2", word: "スマホ (Sumaho)", translation: "Điện thoại thông minh (Smartphone)", phonetic: "su-ma-ho" },
      { id: "v-ja-1102-3", word: "ダウンロードする (Daunroudo suru)", translation: "Tải về (download)", phonetic: "da-un-ro-u-do su-ru" },
      { id: "v-ja-1102-4", word: "パスワード (Pasuwaado)", translation: "Mật khẩu", phonetic: "pa-su-wa-a-do" },
      { id: "v-ja-1102-5", word: "オンライン (Onrain)", translation: "Trực tuyến (online)", phonetic: "on-ra-i-n" }
    ],
    phrases: [
      { id: "p-ja-1102-1", text: "このアプリを使って毎日日本語を勉強しています。", translation: "Tôi dùng ứng dụng này để học tiếng Nhật mỗi ngày." },
      { id: "p-ja-1102-2", text: "パスワードを安全に管理してください。", translation: "Xin hãy quản lý mật khẩu thật an toàn nhé." }
    ],
    activities: [
      {
        id: "act-ja-1102-1",
        type: "multiple_choice",
        skill: "reading",
        question: "'スマホ' (Sumaho) là từ viết tắt của từ tiếng Anh nào?",
        options: ["Smartphone (Điện thoại thông minh)","Smartwatch","Smart TV","Smart home"],
        correctAnswer: "Smartphone (Điện thoại thông minh)"
      },
      {
        id: "act-ja-1102-2",
        type: "fill_blank",
        skill: "writing",
        question: "Điền từ: '新しい_____を入力してください。' (mật khẩu)",
        prompt: "Điền từ: '新しい_____を入力してください。' (mật khẩu)",
        options: ["パスワード","スマホ","アプリ","未来"],
        correctAnswer: "パスワード"
      },
      {
        id: "act-ja-1102-3",
        type: "multiple_choice",
        skill: "reading",
        question: "Dịch: 'オンラインで買う'",
        options: ["Mua sắm trực tuyến","Mua tại siêu thị","Đổi đồ cũ","Bán hàng"],
        correctAnswer: "Mua sắm trực tuyến"
      },
      {
        id: "act-ja-1102-4",
        type: "match_pairs",
        skill: "reading",
        question: "Ghép các cặp từ vựng với nghĩa tiếng Việt tương ứng",
        pairs: [{"left":"アプリ (Apuri)","right":"Ứng dụng điện thoại (App)"},{"left":"スマホ (Sumaho)","right":"Điện thoại thông minh (Smartphone)"},{"left":"ダウンロードする (Daunroudo suru)","right":"Tải về (download)"},{"left":"パスワード (Pasuwaado)","right":"Mật khẩu"}],
        correctAnswer: "all_matched"
      },
      {
        id: "act-ja-1102-5",
        type: "audio_listen",
        skill: "listening",
        question: "Lắng nghe và chọn đáp án chính xác:",
        prompt: "アプリ (Apuri)",
        options: ["Smartphone (Điện thoại thông minh)","Smartwatch","Smart TV","Smart home"],
        correctAnswer: "Smartphone (Điện thoại thông minh)"
      }
    ]
  },
  {
    id: "lesson-ja-1103",
    unitId: "unit-ja-11",
    title: "Trí Tuệ Nhân Tạo & Robot (AI to Robotto)",
    description: "Bàn luận về AI, robot phục vụ và công nghệ hiện đại của Nhật Bản.",
    type: "standard",
    xp: 15,
    estimatedMinutes: 5,
    order: 3,
    status: "available",
    goals: [
      { id: "g1", description: "Nắm vững các từ vựng chủ đề Trí Tuệ Nhân Tạo & Robot (AI to Robotto)" },
      { id: "g2", description: "Luyện phát âm chuẩn và phản xạ câu qua các bài tập tương tác" }
    ],
    vocabulary: [
      { id: "v-ja-1103-1", word: "人工知能 (Jinkou chinou / AI)", translation: "Trí tuệ nhân tạo (AI)", phonetic: "jin-ko-u chi-no-u" },
      { id: "v-ja-1103-2", word: "ロボット (Robotto)", translation: "Người máy / Robot", phonetic: "ro-bot-to" },
      { id: "v-ja-1103-3", word: "変化 (Henka)", translation: "Sự thay đổi / Biến đổi", phonetic: "hen-ka" },
      { id: "v-ja-1103-4", word: "便利 (Benri)", translation: "Tiện lợi / Thuận tiện", phonetic: "ben-ri" },
      { id: "v-ja-1103-5", word: "技術 (Gijutsu)", translation: "Kỹ thuật / Công nghệ", phonetic: "gi-ju-tsu" }
    ],
    phrases: [
      { id: "p-ja-1103-1", text: "AI技術のおかげで、生活がとても便利になりました。", translation: "Nhờ công nghệ AI, cuộc sống đã trở nên vô cùng tiện lợi." },
      { id: "p-ja-1103-2", text: "日本のロボット技術は世界的に有名です。", translation: "Công nghệ robot của Nhật Bản nổi tiếng trên toàn thế giới." }
    ],
    activities: [
      {
        id: "act-ja-1103-1",
        type: "multiple_choice",
        skill: "reading",
        question: "'便利' (Benri) có nghĩa là tính từ gì?",
        options: ["Tiện lợi / Tiện dụng","Bất tiện","Khó khăn","Nguy hiểm"],
        correctAnswer: "Tiện lợi / Tiện dụng"
      },
      {
        id: "act-ja-1103-2",
        type: "fill_blank",
        skill: "writing",
        question: "Điền từ: 'とても_____なアプリです。' (tiện lợi)",
        prompt: "Điền từ: 'とても_____なアプリです。' (tiện lợi)",
        options: ["便利","ロボット","変化","技術"],
        correctAnswer: "便利"
      },
      {
        id: "act-ja-1103-3",
        type: "multiple_choice",
        skill: "reading",
        question: "Dịch: '新しい技術' (Atarashii gijutsu)",
        options: ["Công nghệ mới","Căn nhà mới","Điện thoại cũ","Bạn bè mới"],
        correctAnswer: "Công nghệ mới"
      },
      {
        id: "act-ja-1103-4",
        type: "match_pairs",
        skill: "reading",
        question: "Ghép các cặp từ vựng với nghĩa tiếng Việt tương ứng",
        pairs: [{"left":"人工知能 (Jinkou chinou / AI)","right":"Trí tuệ nhân tạo (AI)"},{"left":"ロボット (Robotto)","right":"Người máy / Robot"},{"left":"変化 (Henka)","right":"Sự thay đổi / Biến đổi"},{"left":"便利 (Benri)","right":"Tiện lợi / Thuận tiện"}],
        correctAnswer: "all_matched"
      },
      {
        id: "act-ja-1103-5",
        type: "audio_listen",
        skill: "listening",
        question: "Lắng nghe và chọn đáp án chính xác:",
        prompt: "人工知能 (Jinkou chinou / AI)",
        options: ["Tiện lợi / Tiện dụng","Bất tiện","Khó khăn","Nguy hiểm"],
        correctAnswer: "Tiện lợi / Tiện dụng"
      }
    ]
  },
  {
    id: "lesson-ja-1104",
    unitId: "unit-ja-11",
    title: "Mục Tiêu Năm Mới & Quyết Tâm (Mokuhyou)",
    description: "Đặt ra mục tiêu, rèn luyện kỹ năng và quyết tâm chinh phục thử thách.",
    type: "standard",
    xp: 15,
    estimatedMinutes: 5,
    order: 4,
    status: "available",
    goals: [
      { id: "g1", description: "Nắm vững các từ vựng chủ đề Mục Tiêu Năm Mới & Quyết Tâm (Mokuhyou)" },
      { id: "g2", description: "Luyện phát âm chuẩn và phản xạ câu qua các bài tập tương tác" }
    ],
    vocabulary: [
      { id: "v-ja-1104-1", word: "目標 (Mokuhyou)", translation: "Mục tiêu phấn đấu", phonetic: "mo-ku-hyo-u" },
      { id: "v-ja-1104-2", word: "達成する (Tassei suru)", translation: "Đạt được / Hoàn thành", phonetic: "tas-se-i su-ru" },
      { id: "v-ja-1104-3", word: "上達する (Joutatsu suru)", translation: "Tiến bộ / Nâng cao tay nghề", phonetic: "jo-u-ta-tsu su-ru" },
      { id: "v-ja-1104-4", word: "頑張る (Ganbaru)", translation: "Cố gắng / Nỗ lực hết mình", phonetic: "gan-ba-ru" },
      { id: "v-ja-1104-5", word: "成功 (Seikou)", translation: "Sự thành công", phonetic: "se-i-ko-u" }
    ],
    phrases: [
      { id: "p-ja-1104-1", text: "今年の目標は日本語能力試験に合格することです。", translation: "Mục tiêu năm nay của tôi là thi đỗ kỳ thi năng lực tiếng Nhật." },
      { id: "p-ja-1104-2", text: "毎日練習して、もっと日本語が上達するように頑張ります。", translation: "Tôi sẽ luyện tập mỗi ngày và nỗ lực để tiếng Nhật tiến bộ hơn nữa." }
    ],
    activities: [
      {
        id: "act-ja-1104-1",
        type: "multiple_choice",
        skill: "reading",
        question: "'頑張る' (Ganbaru) là câu khẩu hiệu tinh thần nổi tiếng nào của Nhật?",
        options: ["Cố gắng lên! / Nỗ lực hết mình!","Xin lỗi nhé!","Chào buổi sáng!","Đi ngủ thôi!"],
        correctAnswer: "Cố gắng lên! / Nỗ lực hết mình!"
      },
      {
        id: "act-ja-1104-2",
        type: "fill_blank",
        skill: "writing",
        question: "Điền từ: '日本語が_____ように練習します。' (tiến bộ)",
        prompt: "Điền từ: '日本語が_____ように練習します。' (tiến bộ)",
        options: ["上達する","目標","成功","アプリ"],
        correctAnswer: "上達する"
      },
      {
        id: "act-ja-1104-3",
        type: "multiple_choice",
        skill: "reading",
        question: "Dịch: '目標を達成する'",
        options: ["Đạt được mục tiêu","Từ bỏ kế hoạch","Quên mất bài học","Đi làm việc"],
        correctAnswer: "Đạt được mục tiêu"
      },
      {
        id: "act-ja-1104-4",
        type: "match_pairs",
        skill: "reading",
        question: "Ghép các cặp từ vựng với nghĩa tiếng Việt tương ứng",
        pairs: [{"left":"目標 (Mokuhyou)","right":"Mục tiêu phấn đấu"},{"left":"達成する (Tassei suru)","right":"Đạt được / Hoàn thành"},{"left":"上達する (Joutatsu suru)","right":"Tiến bộ / Nâng cao tay nghề"},{"left":"頑張る (Ganbaru)","right":"Cố gắng / Nỗ lực hết mình"}],
        correctAnswer: "all_matched"
      },
      {
        id: "act-ja-1104-5",
        type: "audio_listen",
        skill: "listening",
        question: "Lắng nghe và chọn đáp án chính xác:",
        prompt: "目標 (Mokuhyou)",
        options: ["Cố gắng lên! / Nỗ lực hết mình!","Xin lỗi nhé!","Chào buổi sáng!","Đi ngủ thôi!"],
        correctAnswer: "Cố gắng lên! / Nỗ lực hết mình!"
      }
    ]
  },
  {
    id: "lesson-ja-1105",
    unitId: "unit-ja-11",
    title: "AI Practice: Thảo Luận Ước Mơ Tương Lai Cùng Thầy Daiki",
    description: "Thực hành diễn đạt ý định tương lai ~tsumori desu và công nghệ số cùng thầy Daiki.",
    type: "audio_ai",
    xp: 25,
    estimatedMinutes: 5,
    order: 5,
    heroImage: images.mascotWelcome,
    status: "available",
    goals: [
      { id: "g1", description: "Luyện phản xạ giao tiếp thực tế với AI Teacher Kenji" },
      { id: "g2", description: "Vận dụng từ vựng trọng tâm vào ngữ cảnh hội thoại tự nhiên" }
    ],
    vocabulary: [
      { id: "v-ai-ja-11-1", word: "将来", translation: "Tương lai" },
      { id: "v-ai-ja-11-2", word: "〜つもりです", translation: "Dự định..." },
      { id: "v-ai-ja-11-3", word: "目標", translation: "Mục tiêu" },
      { id: "v-ai-ja-11-4", word: "AI技術", translation: "Công nghệ AI" },
      { id: "v-ai-ja-11-5", word: "頑張ってください", translation: "Hãy cố gắng lên" }
    ],
    phrases: [],
    activities: [],
    aiTeacherPrompt: {
      scenario: "Phòng nghiên cứu công nghệ hiện đại tại Đại học Tokyo (Todai)",
      systemPrompt: "You are Kenji, a warm, human, and energetic Japanese teacher. Speak mostly in English for clear guidance. Introduce Japanese words slowly: say the word once, give the English translation, and invite the student to repeat after you. Keep every reply strictly to 1 or 2 conversational sentences with friendly contractions (I'm, let's, that's). Listen closely to the student, praise correct pronunciation, and gently model errors again: 'So close! Try saying —'. Stay strictly on lesson words: 将来, 〜つもりです, 目標, AI技術, 頑張ってください. Never switch topics.",
      initialGreeting: "こんにちは！将来の夢やこれからの計画について聞かせてください。何をするつもりですか？",
      targetVocabulary: ["将来","〜つもりです","目標","AI技術","頑張ってください"],
      suggestedResponses: ["将来は日本でITの仕事をするつもりです。","日本語をもっと上手に話せるようになりたいです。","新しいテクノロジーにとても興味があります！"],
      difficulty: "intermediate"
    }
  },
  {
    id: "lesson-ja-1201",
    unitId: "unit-ja-12",
    title: "Bày Tỏ Quan Điểm (~to omoimasu)",
    description: "Học cách nêu ý kiến cá nhân lịch sự bằng cấu trúc ~to omoimasu (Tôi nghĩ rằng...).",
    type: "standard",
    xp: 15,
    estimatedMinutes: 5,
    order: 1,
    status: "available",
    goals: [
      { id: "g1", description: "Nắm vững các từ vựng chủ đề Bày Tỏ Quan Điểm (~to omoimasu)" },
      { id: "g2", description: "Luyện phát âm chuẩn và phản xạ câu qua các bài tập tương tác" }
    ],
    vocabulary: [
      { id: "v-ja-1201-1", word: "〜と思います (~to omoimasu)", translation: "Tôi nghĩ rằng...", phonetic: "to o-mo-i-ma-su" },
      { id: "v-ja-1201-2", word: "賛成 (Sansei)", translation: "Tán thành / Đồng ý", phonetic: "san-se-i" },
      { id: "v-ja-1201-3", word: "反対 (Hantai)", translation: "Phản đối / Không đồng ý", phonetic: "han-ta-i" },
      { id: "v-ja-1201-4", word: "意見 (Iken)", translation: "Ý kiến / Quan điểm", phonetic: "i-ken" },
      { id: "v-ja-1201-5", word: "大切 (Taisetsu)", translation: "Quan trọng / Quý giá", phonetic: "ta-i-se-tsu" }
    ],
    phrases: [
      { id: "p-ja-1201-1", text: "外国語を学ぶことはとても大切だと思います。", translation: "Tôi nghĩ rằng việc học ngoại ngữ là vô cùng quan trọng." },
      { id: "p-ja-1201-2", text: "私もその意見に大賛成です。", translation: "Tôi cũng hoàn toàn tán thành với ý kiến đó." }
    ],
    activities: [
      {
        id: "act-ja-1201-1",
        type: "multiple_choice",
        skill: "reading",
        question: "Cấu trúc '~to omoimasu' dùng để làm gì trong giao tiếp?",
        options: ["Nêu suy nghĩ / quan điểm cá nhân một cách lịch sự","Chào tạm biệt","Hỏi giá tiền","Mắng mỏ người khác"],
        correctAnswer: "Nêu suy nghĩ / quan điểm cá nhân một cách lịch sự"
      },
      {
        id: "act-ja-1201-2",
        type: "fill_blank",
        skill: "writing",
        question: "Điền từ: 'とてもいいアイデアだ_____。' (tôi nghĩ rằng)",
        prompt: "Điền từ: 'とてもいいアイデアだ_____。' (tôi nghĩ rằng)",
        options: ["と思います","賛成","意見","反対"],
        correctAnswer: "と思います"
      },
      {
        id: "act-ja-1201-3",
        type: "multiple_choice",
        skill: "reading",
        question: "Dịch: '私は賛成です'",
        options: ["Tôi đồng ý / tán thành","Tôi không biết","Tôi từ chối","Tôi đang bận"],
        correctAnswer: "Tôi đồng ý / tán thành"
      },
      {
        id: "act-ja-1201-4",
        type: "match_pairs",
        skill: "reading",
        question: "Ghép các cặp từ vựng với nghĩa tiếng Việt tương ứng",
        pairs: [{"left":"〜と思います (~to omoimasu)","right":"Tôi nghĩ rằng..."},{"left":"賛成 (Sansei)","right":"Tán thành / Đồng ý"},{"left":"反対 (Hantai)","right":"Phản đối / Không đồng ý"},{"left":"意見 (Iken)","right":"Ý kiến / Quan điểm"}],
        correctAnswer: "all_matched"
      },
      {
        id: "act-ja-1201-5",
        type: "audio_listen",
        skill: "listening",
        question: "Lắng nghe và chọn đáp án chính xác:",
        prompt: "〜と思います (~to omoimasu)",
        options: ["Nêu suy nghĩ / quan điểm cá nhân một cách lịch sự","Chào tạm biệt","Hỏi giá tiền","Mắng mỏ người khác"],
        correctAnswer: "Nêu suy nghĩ / quan điểm cá nhân một cách lịch sự"
      }
    ]
  },
  {
    id: "lesson-ja-1202",
    unitId: "unit-ja-12",
    title: "Nét Đẹp Văn Hóa Nhật Bản (Nihon no Bunka)",
    description: "Tìm hiểu văn hóa Trà đạo, trang phục Kimono và Lễ hội Hanami ngắm hoa.",
    type: "standard",
    xp: 15,
    estimatedMinutes: 5,
    order: 2,
    status: "available",
    goals: [
      { id: "g1", description: "Nắm vững các từ vựng chủ đề Nét Đẹp Văn Hóa Nhật Bản (Nihon no Bunka)" },
      { id: "g2", description: "Luyện phát âm chuẩn và phản xạ câu qua các bài tập tương tác" }
    ],
    vocabulary: [
      { id: "v-ja-1202-1", word: "文化 (Bunka)", translation: "Văn hóa", phonetic: "bun-ka" },
      { id: "v-ja-1202-2", word: "茶道 (Sadou)", translation: "Trà đạo", phonetic: "sa-do-u" },
      { id: "v-ja-1202-3", word: "着物 (Kimono)", translation: "Trang phục truyền thống Kimono", phonetic: "ki-mo-no" },
      { id: "v-ja-1202-4", word: "お花見 (Ohanami)", translation: "Lễ hội ngắm hoa anh đào", phonetic: "o-ha-na-mi" },
      { id: "v-ja-1202-5", word: "伝統 (Dentou)", translation: "Truyền thống", phonetic: "den-to-u" }
    ],
    phrases: [
      { id: "p-ja-1202-1", text: "春には桜の木の下でお花見を楽しみます。", translation: "Vào mùa xuân, mọi người thưởng thức ngắm hoa dưới tán cây anh đào." },
      { id: "p-ja-1202-2", text: "着物を着て京都の古い街を歩くのは素晴らしい体験です。", translation: "Mặc Kimono dạo bước trên phố cổ Kyoto là trải nghiệm tuyệt vời." }
    ],
    activities: [
      {
        id: "act-ja-1202-1",
        type: "multiple_choice",
        skill: "reading",
        question: "'お花見' (Ohanami) là hoạt động ngắm loài hoa nào vào mùa xuân?",
        options: ["Hoa anh đào (Sakura)","Hoa hồng","Hoa cúc","Hoa sen"],
        correctAnswer: "Hoa anh đào (Sakura)"
      },
      {
        id: "act-ja-1202-2",
        type: "fill_blank",
        skill: "writing",
        question: "Điền từ: '春に友達と_____に行きました。' (ngắm hoa)",
        prompt: "Điền từ: '春に友達と_____に行きました。' (ngắm hoa)",
        options: ["お花見","茶道","着物","伝統"],
        correctAnswer: "お花見"
      },
      {
        id: "act-ja-1202-3",
        type: "multiple_choice",
        skill: "reading",
        question: "Dịch: '日本の伝統文化'",
        options: ["Văn hóa truyền thống Nhật Bản","Món ăn hiện đại","Âm nhạc phương Tây","Xe hơi Nhật"],
        correctAnswer: "Văn hóa truyền thống Nhật Bản"
      },
      {
        id: "act-ja-1202-4",
        type: "match_pairs",
        skill: "reading",
        question: "Ghép các cặp từ vựng với nghĩa tiếng Việt tương ứng",
        pairs: [{"left":"文化 (Bunka)","right":"Văn hóa"},{"left":"茶道 (Sadou)","right":"Trà đạo"},{"left":"着物 (Kimono)","right":"Trang phục truyền thống Kimono"},{"left":"お花見 (Ohanami)","right":"Lễ hội ngắm hoa anh đào"}],
        correctAnswer: "all_matched"
      },
      {
        id: "act-ja-1202-5",
        type: "audio_listen",
        skill: "listening",
        question: "Lắng nghe và chọn đáp án chính xác:",
        prompt: "文化 (Bunka)",
        options: ["Hoa anh đào (Sakura)","Hoa hồng","Hoa cúc","Hoa sen"],
        correctAnswer: "Hoa anh đào (Sakura)"
      }
    ]
  },
  {
    id: "lesson-ja-1203",
    unitId: "unit-ja-12",
    title: "Thành Ngữ Thường Ngày (Kanyouku)",
    description: "Khám phá các câu thành ngữ và quán ngữ thú vị của người Nhật.",
    type: "standard",
    xp: 15,
    estimatedMinutes: 5,
    order: 3,
    status: "available",
    goals: [
      { id: "g1", description: "Nắm vững các từ vựng chủ đề Thành Ngữ Thường Ngày (Kanyouku)" },
      { id: "g2", description: "Luyện phát âm chuẩn và phản xạ câu qua các bài tập tương tác" }
    ],
    vocabulary: [
      { id: "v-ja-1203-1", word: "一期一会 (Ichigo Ichie)", translation: "Mỗi cuộc gặp gỡ đều là duy nhất đời người", phonetic: "i-chi-go i-chi-e" },
      { id: "v-ja-1203-2", word: "七転び八起き (Nanakorobi yaoki)", translation: "Bảy lần ngã, tám lần đứng dậy (kiên trì)", phonetic: "na-na-ko-ro-bi ya-o-ki" },
      { id: "v-ja-1203-3", word: "猿も木から落ちる (Saru mo ki kara ochiru)", translation: "Nhân vô thập toàn (ngay cả khỉ cũng ngã cây)", phonetic: "sa-ru mo ki ka-ra o-chi-ru" },
      { id: "v-ja-1203-4", word: "さすが！ (Sasuga!)", translation: "Quả đúng là bạn! / Thật đáng nể!", phonetic: "sa-su-ga" },
      { id: "v-ja-1203-5", word: "ことわざ (Kotowaza)", translation: "Tục ngữ / Thành ngữ", phonetic: "ko-to-wa-za" }
    ],
    phrases: [
      { id: "p-ja-1203-1", text: "この出会いはまさに『一期一会』ですね。", translation: "Cuộc hội ngộ này đúng thực là 'duyên tao ngộ một lần trong đời' nhỉ." },
      { id: "p-ja-1203-2", text: "満点を取ったの？さすがですね！", translation: "Bạn đạt điểm tối đa à? Quả đúng là bạn, xuất sắc quá!" }
    ],
    activities: [
      {
        id: "act-ja-1203-1",
        type: "multiple_choice",
        skill: "reading",
        question: "Ý nghĩa của câu thành ngữ '一期一会' (Ichigo Ichie) là gì?",
        options: ["Trân trọng từng cuộc gặp gỡ vì nó là duy nhất","Ăn nhiều quả dâu tây","Đi du lịch một mình","Làm việc chăm chỉ"],
        correctAnswer: "Trân trọng từng cuộc gặp gỡ vì nó là duy nhất"
      },
      {
        id: "act-ja-1203-2",
        type: "fill_blank",
        skill: "writing",
        question: "Điền từ: '失敗しても諦めない、_____の精神です。' (bảy lần ngã tám lần đứng dậy)",
        prompt: "Điền từ: '失敗しても諦めない、_____の精神です。' (bảy lần ngã tám lần đứng dậy)",
        options: ["七転び八起き","一期一会","さすが","ことわざ"],
        correctAnswer: "七転び八起き"
      },
      {
        id: "act-ja-1203-3",
        type: "multiple_choice",
        skill: "reading",
        question: "Dịch: 'さすが！' (Sasuga!)",
        options: ["Quả đúng như mong đợi! / Đáng nể thật!","Chúc ngủ ngon!","Cảm ơn nhiều!","Tạm biệt nhé!"],
        correctAnswer: "Quả đúng như mong đợi! / Đáng nể thật!"
      },
      {
        id: "act-ja-1203-4",
        type: "match_pairs",
        skill: "reading",
        question: "Ghép các cặp từ vựng với nghĩa tiếng Việt tương ứng",
        pairs: [{"left":"一期一会 (Ichigo Ichie)","right":"Mỗi cuộc gặp gỡ đều là duy nhất đời người"},{"left":"七転び八起き (Nanakorobi yaoki)","right":"Bảy lần ngã, tám lần đứng dậy (kiên trì)"},{"left":"猿も木から落ちる (Saru mo ki kara ochiru)","right":"Nhân vô thập toàn (ngay cả khỉ cũng ngã cây)"},{"left":"さすが！ (Sasuga!)","right":"Quả đúng là bạn! / Thật đáng nể!"}],
        correctAnswer: "all_matched"
      },
      {
        id: "act-ja-1203-5",
        type: "audio_listen",
        skill: "listening",
        question: "Lắng nghe và chọn đáp án chính xác:",
        prompt: "一期一会 (Ichigo Ichie)",
        options: ["Trân trọng từng cuộc gặp gỡ vì nó là duy nhất","Ăn nhiều quả dâu tây","Đi du lịch một mình","Làm việc chăm chỉ"],
        correctAnswer: "Trân trọng từng cuộc gặp gỡ vì nó là duy nhất"
      }
    ]
  },
  {
    id: "lesson-ja-1204",
    unitId: "unit-ja-12",
    title: "Tổng Ôn Toàn Diện Trình Độ A2 (A2 Sou-fukushuu)",
    description: "Hệ thống lại kiến thức ngữ pháp từ Unit 1 đến 12 để sẵn sàng tốt nghiệp A2.",
    type: "standard",
    xp: 15,
    estimatedMinutes: 5,
    order: 4,
    status: "available",
    goals: [
      { id: "g1", description: "Nắm vững các từ vựng chủ đề Tổng Ôn Toàn Diện Trình Độ A2 (A2 Sou-fukushuu)" },
      { id: "g2", description: "Luyện phát âm chuẩn và phản xạ câu qua các bài tập tương tác" }
    ],
    vocabulary: [
      { id: "v-ja-1204-1", word: "復習 (Fukushuu)", translation: "Sự ôn tập", phonetic: "fu-ku-shu-u" },
      { id: "v-ja-1204-2", word: "自信 (Jishin)", translation: "Sự tự tin", phonetic: "ji-shin" },
      { id: "v-ja-1204-3", word: "A2レベル (A2 Reberu)", translation: "Trình độ A2 CEFR", phonetic: "e-i-tsu-re-be-ru" },
      { id: "v-ja-1204-4", word: "おめでとうございます (Omedetou gozaimasu)", translation: "Xin chúc mừng!", phonetic: "o-me-de-to-u go-za-i-ma-su" },
      { id: "v-ja-1204-5", word: "修了証 (Shuuryoushou)", translation: "Giấy chứng nhận tốt nghiệp", phonetic: "shu-u-ryo-u-sho-u" }
    ],
    phrases: [
      { id: "p-ja-1204-1", text: "全12ユニットを修了し、A2レベルに到達しました！", translation: "Bạn đã hoàn thành toàn bộ 12 Unit và đạt trình độ A2!" },
      { id: "p-ja-1204-2", text: "日常会話にとても自信がつきました。", translation: "Tôi đã có được sự tự tin rất lớn trong hội thoại hàng ngày." }
    ],
    activities: [
      {
        id: "act-ja-1204-1",
        type: "multiple_choice",
        skill: "reading",
        question: "'おめでとうございます' dùng khi nào?",
        options: ["Khi chúc mừng ai đó đạt thành tựu","Khi nói lời xin lỗi","Khi chào buổi sáng","Khi hỏi đường đi"],
        correctAnswer: "Khi chúc mừng ai đó đạt thành tựu"
      },
      {
        id: "act-ja-1204-2",
        type: "fill_blank",
        skill: "writing",
        question: "Điền từ: 'A2コース修了、心から_____！' (xin chúc mừng)",
        prompt: "Điền từ: 'A2コース修了、心から_____！' (xin chúc mừng)",
        options: ["おめでとうございます","復習","自信","意見"],
        correctAnswer: "おめでとうございます"
      },
      {
        id: "act-ja-1204-3",
        type: "multiple_choice",
        skill: "reading",
        question: "Dịch: '自信があります' (Jishin ga arimasu)",
        options: ["Tôi có sự tự tin","Tôi bị mệt mỏi","Tôi bị ốm","Tôi cảm thấy đói"],
        correctAnswer: "Tôi có sự tự tin"
      },
      {
        id: "act-ja-1204-4",
        type: "match_pairs",
        skill: "reading",
        question: "Ghép các cặp từ vựng với nghĩa tiếng Việt tương ứng",
        pairs: [{"left":"復習 (Fukushuu)","right":"Sự ôn tập"},{"left":"自信 (Jishin)","right":"Sự tự tin"},{"left":"A2レベル (A2 Reberu)","right":"Trình độ A2 CEFR"},{"left":"おめでとうございます (Omedetou gozaimasu)","right":"Xin chúc mừng!"}],
        correctAnswer: "all_matched"
      },
      {
        id: "act-ja-1204-5",
        type: "audio_listen",
        skill: "listening",
        question: "Lắng nghe và chọn đáp án chính xác:",
        prompt: "復習 (Fukushuu)",
        options: ["Khi chúc mừng ai đó đạt thành tựu","Khi nói lời xin lỗi","Khi chào buổi sáng","Khi hỏi đường đi"],
        correctAnswer: "Khi chúc mừng ai đó đạt thành tựu"
      }
    ]
  },
  {
    id: "lesson-ja-1205",
    unitId: "unit-ja-12",
    title: "AI Practice: Lễ Trao Bằng Tốt Nghiệp CEFR A2 Cùng Cô Sakura",
    description: "Đàm thoại tự do tốt nghiệp chứng chỉ A2 tổng kết cả 12 Unit cùng cô giáo Sakura.",
    type: "audio_ai",
    xp: 25,
    estimatedMinutes: 5,
    order: 5,
    heroImage: images.mascotWelcome,
    status: "available",
    goals: [
      { id: "g1", description: "Luyện phản xạ giao tiếp thực tế với AI Teacher Kenji" },
      { id: "g2", description: "Vận dụng từ vựng trọng tâm vào ngữ cảnh hội thoại tự nhiên" }
    ],
    vocabulary: [
      { id: "v-ai-ja-12-1", word: "おめでとうございます", translation: "Chúc mừng" },
      { id: "v-ai-ja-12-2", word: "A2レベル", translation: "Trình độ A2" },
      { id: "v-ai-ja-12-3", word: "自信", translation: "Tự tin" },
      { id: "v-ai-ja-12-4", word: "楽しかった", translation: "Đã rất vui" },
      { id: "v-ai-ja-12-5", word: "これからも頑張ります", translation: "Từ nay về sau tôi cũng sẽ cố gắng" }
    ],
    phrases: [],
    activities: [],
    aiTeacherPrompt: {
      scenario: "Sân khấu lễ tốt nghiệp trang trọng ngập tràn hoa anh đào tại Tokyo",
      systemPrompt: "You are Kenji, a warm, human, and energetic Japanese teacher. Speak mostly in English for clear guidance. Introduce Japanese words slowly: say the word once, give the English translation, and invite the student to repeat after you. Keep every reply strictly to 1 or 2 conversational sentences with friendly contractions (I'm, let's, that's). Listen closely to the student, praise correct pronunciation, and gently model errors again: 'So close! Try saying —'. Stay strictly on lesson words: おめでとうございます, A2レベル, 自信, 楽しかった, これからも頑張ります. Never switch topics.",
      initialGreeting: "ご卒業おめでとうございます！全12ユニットを見事に修了され、A2レベルに到達されました！今のお気持ちはいかがですか？",
      targetVocabulary: ["おめでとうございます","A2レベル","自信","楽しかった","これからも頑張ります"],
      suggestedResponses: ["12ユニットをやり遂げて、とても達成感と自信があります！","日本の温泉や文化について学べたのが一番楽しかったです。","さくら先生、分かりやすく教えてくださり本当にありがとうございました！"],
      difficulty: "intermediate"
    }
  },
];
