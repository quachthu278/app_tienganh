import { Lesson } from "@/types/learning";
import { images } from "@/constants/images";

export const KO_LESSONS: Lesson[] = [
  {
    id: "lesson-ko-101",
    unitId: "unit-ko-1",
    title: "Annyeonghaseyo & Lời Chào Tiếng Hàn",
    description: "Học các lời chào cơ bản và lịch sự trong tiếng Hàn.",
    type: "standard",
    xp: 15,
    estimatedMinutes: 5,
    order: 1,
    status: "available",
    goals: [
      { id: "g1", description: "Nắm vững các từ vựng chủ đề Annyeonghaseyo & Lời Chào Tiếng Hàn" },
      { id: "g2", description: "Luyện phát âm chuẩn và phản xạ câu qua các bài tập tương tác" }
    ],
    vocabulary: [
      { id: "v-ko-101-1", word: "Annyeonghaseyo", translation: "Xin chào (lịch sự)", phonetic: "ahn-nyong-hah-seh-yoh" },
      { id: "v-ko-101-2", word: "Annyeong", translation: "Chào (thân mật)", phonetic: "ahn-nyong" },
      { id: "v-ko-101-3", word: "Annyeonghi gyeseyo", translation: "Tạm biệt (chúc ở lại bình an)", phonetic: "ahn-nyong-hee gyeh-seh-yoh" },
      { id: "v-ko-101-4", word: "Annyeonghi gaseyo", translation: "Tạm biệt (chúc đi bình an)", phonetic: "ahn-nyong-hee gah-seh-yoh" },
      { id: "v-ko-101-5", word: "Mannaseo bangawoyo", translation: "Rất vui được gặp bạn", phonetic: "mahn-nah-soh bahn-gah-woh-yoh" }
    ],
    phrases: [
      { id: "p-ko-101-1", text: "Annyeonghaseyo! Mannaseo bangawoyo.", translation: "Xin chào! Rất vui được gặp bạn." },
      { id: "p-ko-101-2", text: "Ne, annyeonghi gaseyo!", translation: "Vâng, tạm biệt bạn nhé!" }
    ],
    activities: [
      {
        id: "act-ko-101-1",
        type: "multiple_choice",
        skill: "reading",
        question: "'Annyeonghaseyo' có nghĩa là gì?",
        options: ["Xin chào","Tạm biệt","Cảm ơn","Xin lỗi"],
        correctAnswer: "Xin chào"
      },
      {
        id: "act-ko-101-2",
        type: "fill_blank",
        skill: "writing",
        question: "Điền từ: 'Annyeonghaseyo! Mannaseo _____.'",
        prompt: "Điền từ: 'Annyeonghaseyo! Mannaseo _____.'",
        options: ["bangawoyo","gaseyo","gyeseyo","annyeong"],
        correctAnswer: "bangawoyo"
      },
      {
        id: "act-ko-101-3",
        type: "multiple_choice",
        skill: "reading",
        question: "Dịch: 'Mannaseo bangawoyo'",
        options: ["Rất vui được gặp bạn","Hẹn gặp lại","Chào buổi sáng","Bạn tên là gì"],
        correctAnswer: "Rất vui được gặp bạn"
      },
      {
        id: "act-ko-101-4",
        type: "match_pairs",
        skill: "reading",
        question: "Ghép các cặp từ vựng với nghĩa tiếng Việt tương ứng",
        pairs: [{"left":"Annyeonghaseyo","right":"Xin chào (lịch sự)"},{"left":"Annyeong","right":"Chào (thân mật)"},{"left":"Annyeonghi gyeseyo","right":"Tạm biệt (chúc ở lại bình an)"},{"left":"Annyeonghi gaseyo","right":"Tạm biệt (chúc đi bình an)"}],
        correctAnswer: "all_matched"
      },
      {
        id: "act-ko-101-5",
        type: "audio_listen",
        skill: "listening",
        question: "Lắng nghe và chọn đáp án chính xác:",
        prompt: "Annyeonghaseyo",
        options: ["Xin chào","Tạm biệt","Cảm ơn","Xin lỗi"],
        correctAnswer: "Xin chào"
      }
    ]
  },
  {
    id: "lesson-ko-102",
    unitId: "unit-ko-1",
    title: "Tên Bạn Là Gì? (Ireum-i mwoyeyo?)",
    description: "Tự giới thiệu tên của bản thân và hỏi tên người đối diện.",
    type: "standard",
    xp: 15,
    estimatedMinutes: 5,
    order: 2,
    status: "available",
    goals: [
      { id: "g1", description: "Nắm vững các từ vựng chủ đề Tên Bạn Là Gì? (Ireum-i mwoyeyo?)" },
      { id: "g2", description: "Luyện phát âm chuẩn và phản xạ câu qua các bài tập tương tác" }
    ],
    vocabulary: [
      { id: "v-ko-102-1", word: "Jeo / Na", translation: "Tôi (kính ngữ / thân mật)", phonetic: "joh / nah" },
      { id: "v-ko-102-2", word: "Ireum", translation: "Tên", phonetic: "ee-reum" },
      { id: "v-ko-102-3", word: "Mwoyeyo?", translation: "Là cái gì vậy?", phonetic: "mwoh-yeh-yoh" },
      { id: "v-ko-102-4", word: "Chingu", translation: "Bạn bè", phonetic: "cheen-goo" },
      { id: "v-ko-102-5", word: "Hanguk-saram", translation: "Người Hàn Quốc", phonetic: "hahn-gook-sah-rahm" }
    ],
    phrases: [
      { id: "p-ko-102-1", text: "Je ireum-eun Minho-yeyo.", translation: "Tên của tôi là Minho." },
      { id: "p-ko-102-2", text: "Ireum-i mwoyeyo?", translation: "Tên của bạn là gì vậy?" }
    ],
    activities: [
      {
        id: "act-ko-102-1",
        type: "multiple_choice",
        skill: "reading",
        question: "Cấu trúc giới thiệu tên: 'Je ireum-eun ... -yeyo' nghĩa là gì?",
        options: ["Tên tôi là...","Tôi là người...","Bạn tên là...","Tôi đi đến..."],
        correctAnswer: "Tên tôi là..."
      },
      {
        id: "act-ko-102-2",
        type: "fill_blank",
        skill: "writing",
        question: "Điền từ: 'Je _____ Minho-yeyo.' (tên tôi)",
        prompt: "Điền từ: 'Je _____ Minho-yeyo.' (tên tôi)",
        options: ["ireum-eun","chingu","saram","hanguk"],
        correctAnswer: "ireum-eun"
      },
      {
        id: "act-ko-102-3",
        type: "multiple_choice",
        skill: "reading",
        question: "Dịch: 'Ireum-i mwoyeyo?'",
        options: ["Bạn tên là gì?","Bạn bao nhiêu tuổi?","Bạn khỏe không?","Bạn là ai?"],
        correctAnswer: "Bạn tên là gì?"
      },
      {
        id: "act-ko-102-4",
        type: "match_pairs",
        skill: "reading",
        question: "Ghép các cặp từ vựng với nghĩa tiếng Việt tương ứng",
        pairs: [{"left":"Jeo / Na","right":"Tôi (kính ngữ / thân mật)"},{"left":"Ireum","right":"Tên"},{"left":"Mwoyeyo?","right":"Là cái gì vậy?"},{"left":"Chingu","right":"Bạn bè"}],
        correctAnswer: "all_matched"
      },
      {
        id: "act-ko-102-5",
        type: "audio_listen",
        skill: "listening",
        question: "Lắng nghe và chọn đáp án chính xác:",
        prompt: "Jeo / Na",
        options: ["Tên tôi là...","Tôi là người...","Bạn tên là...","Tôi đi đến..."],
        correctAnswer: "Tên tôi là..."
      }
    ]
  },
  {
    id: "lesson-ko-103",
    unitId: "unit-ko-1",
    title: "Cảm Ơn & Xin Lỗi (Gamsahamnida)",
    description: "Học các câu cảm ơn và xin lỗi chuẩn mực trong giao tiếp Hàn.",
    type: "standard",
    xp: 15,
    estimatedMinutes: 5,
    order: 3,
    status: "available",
    goals: [
      { id: "g1", description: "Nắm vững các từ vựng chủ đề Cảm Ơn & Xin Lỗi (Gamsahamnida)" },
      { id: "g2", description: "Luyện phát âm chuẩn và phản xạ câu qua các bài tập tương tác" }
    ],
    vocabulary: [
      { id: "v-ko-103-1", word: "Gamsahamnida", translation: "Cảm ơn (trang trọng)", phonetic: "gahm-sah-hahm-nee-dah" },
      { id: "v-ko-103-2", word: "Gomawayo", translation: "Cảm ơn (thân mật)", phonetic: "goh-mah-wah-yoh" },
      { id: "v-ko-103-3", word: "Joesonghamnida", translation: "Tôi xin lỗi (lịch sự)", phonetic: "jweh-sohng-hahm-nee-dah" },
      { id: "v-ko-103-4", word: "Mianhaeyo", translation: "Xin lỗi (thân mật)", phonetic: "mee-ahn-heh-yoh" },
      { id: "v-ko-103-5", word: "Gwaenchanhayo", translation: "Không sao đâu / Ổn rồi", phonetic: "gwen-chahn-hah-yoh" }
    ],
    phrases: [
      { id: "p-ko-103-1", text: "Dowa jusyeoseo gamsahamnida!", translation: "Cảm ơn bạn đã giúp đỡ tôi!" },
      { id: "p-ko-103-2", text: "Gwaenchanhayo, geokjeong maseyo.", translation: "Không sao đâu, đừng lo lắng nhé." }
    ],
    activities: [
      {
        id: "act-ko-103-1",
        type: "multiple_choice",
        skill: "reading",
        question: "Người Hàn Quốc nói gì khi muốn cảm ơn trang trọng?",
        options: ["Gamsahamnida","Joesonghamnida","Annyeong","Gwaenchanhayo"],
        correctAnswer: "Gamsahamnida"
      },
      {
        id: "act-ko-103-2",
        type: "fill_blank",
        skill: "writing",
        question: "Điền từ: 'Jeongmal _____.' (thực sự cảm ơn)",
        prompt: "Điền từ: 'Jeongmal _____.' (thực sự cảm ơn)",
        options: ["gamsahamnida","joesonghamnida","mianhaeyo","annyeong"],
        correctAnswer: "gamsahamnida"
      },
      {
        id: "act-ko-103-3",
        type: "multiple_choice",
        skill: "reading",
        question: "Dịch: 'Gwaenchanhayo'",
        options: ["Không sao đâu","Cảm ơn nhiều","Xin lỗi bạn","Tạm biệt"],
        correctAnswer: "Không sao đâu"
      },
      {
        id: "act-ko-103-4",
        type: "match_pairs",
        skill: "reading",
        question: "Ghép các cặp từ vựng với nghĩa tiếng Việt tương ứng",
        pairs: [{"left":"Gamsahamnida","right":"Cảm ơn (trang trọng)"},{"left":"Gomawayo","right":"Cảm ơn (thân mật)"},{"left":"Joesonghamnida","right":"Tôi xin lỗi (lịch sự)"},{"left":"Mianhaeyo","right":"Xin lỗi (thân mật)"}],
        correctAnswer: "all_matched"
      },
      {
        id: "act-ko-103-5",
        type: "audio_listen",
        skill: "listening",
        question: "Lắng nghe và chọn đáp án chính xác:",
        prompt: "Gamsahamnida",
        options: ["Gamsahamnida","Joesonghamnida","Annyeong","Gwaenchanhayo"],
        correctAnswer: "Gamsahamnida"
      }
    ]
  },
  {
    id: "lesson-ko-104",
    unitId: "unit-ko-1",
    title: "Số Đếm Tiếng Hàn (Hana, Dul, Set)",
    description: "Làm quen với hệ số đếm thuần Hàn từ 1 đến 10.",
    type: "standard",
    xp: 15,
    estimatedMinutes: 5,
    order: 4,
    status: "available",
    goals: [
      { id: "g1", description: "Nắm vững các từ vựng chủ đề Số Đếm Tiếng Hàn (Hana, Dul, Set)" },
      { id: "g2", description: "Luyện phát âm chuẩn và phản xạ câu qua các bài tập tương tác" }
    ],
    vocabulary: [
      { id: "v-ko-104-1", word: "Hana / Dul", translation: "Một (1) / Hai (2)", phonetic: "hah-nah / dool" },
      { id: "v-ko-104-2", word: "Set / Net", translation: "Ba (3) / Bốn (4)", phonetic: "set / net" },
      { id: "v-ko-104-3", word: "Daseot / Yeoseot", translation: "Năm (5) / Sáu (6)", phonetic: "dah-sot / yoh-sot" },
      { id: "v-ko-104-4", word: "Ilgop / Yeodeol", translation: "Bảy (7) / Tám (8)", phonetic: "eel-gohp / yoh-dohl" },
      { id: "v-ko-104-5", word: "Ahop / Yeol", translation: "Chín (9) / Mười (10)", phonetic: "ah-hohp / yohl" }
    ],
    phrases: [
      { id: "p-ko-104-1", text: "Igeo hana juseyo.", translation: "Cho tôi một cái này nhé." },
      { id: "p-ko-104-2", text: "Hana, dul, set, kim-chi!", translation: "Một, hai, ba, cười lên nào (kim-chi)!" }
    ],
    activities: [
      {
        id: "act-ko-104-1",
        type: "multiple_choice",
        skill: "reading",
        question: "'Hana, dul, set' là các số mấy?",
        options: ["1, 2, 3","4, 5, 6","7, 8, 9","2, 4, 6"],
        correctAnswer: "1, 2, 3"
      },
      {
        id: "act-ko-104-2",
        type: "fill_blank",
        skill: "writing",
        question: "Điền số: 'Hana, dul, _____ (ba)'",
        prompt: "Điền số: 'Hana, dul, _____ (ba)'",
        options: ["set","net","yeol","ahop"],
        correctAnswer: "set"
      },
      {
        id: "act-ko-104-3",
        type: "multiple_choice",
        skill: "reading",
        question: "Số 10 thuần Hàn là gì?",
        options: ["Yeol","Ahop","Hana","Dul"],
        correctAnswer: "Yeol"
      },
      {
        id: "act-ko-104-4",
        type: "match_pairs",
        skill: "reading",
        question: "Ghép các cặp từ vựng với nghĩa tiếng Việt tương ứng",
        pairs: [{"left":"Hana / Dul","right":"Một (1) / Hai (2)"},{"left":"Set / Net","right":"Ba (3) / Bốn (4)"},{"left":"Daseot / Yeoseot","right":"Năm (5) / Sáu (6)"},{"left":"Ilgop / Yeodeol","right":"Bảy (7) / Tám (8)"}],
        correctAnswer: "all_matched"
      },
      {
        id: "act-ko-104-5",
        type: "audio_listen",
        skill: "listening",
        question: "Lắng nghe và chọn đáp án chính xác:",
        prompt: "Hana / Dul",
        options: ["1, 2, 3","4, 5, 6","7, 8, 9","2, 4, 6"],
        correctAnswer: "1, 2, 3"
      }
    ]
  },
  {
    id: "lesson-ko-105",
    unitId: "unit-ko-1",
    title: "AI Practice: Luyện Chào Hỏi Với Jiwoo",
    description: "Thực hành phản xạ giao tiếp tự nhiên cùng cô bạn Jiwoo người Seoul.",
    type: "audio_ai",
    xp: 25,
    estimatedMinutes: 5,
    order: 5,
    heroImage: images.mascotWelcome,
    status: "available",
    goals: [
      { id: "g1", description: "Luyện phản xạ giao tiếp thực tế với AI Teacher Minho" },
      { id: "g2", description: "Vận dụng từ vựng trọng tâm vào ngữ cảnh hội thoại tự nhiên" }
    ],
    vocabulary: [
      { id: "v-ai-ko-1-1", word: "Annyeonghaseyo", translation: "Xin chào (lịch sự)" },
      { id: "v-ai-ko-1-2", word: "Mannaseo bangawoyo", translation: "Rất vui được gặp bạn" },
      { id: "v-ai-ko-1-3", word: "Je ireum-eun", translation: "Tên tôi là" },
      { id: "v-ai-ko-1-4", word: "Gamsahamnida", translation: "Cảm ơn (trang trọng)" }
    ],
    phrases: [],
    activities: [],
    aiTeacherPrompt: {
      scenario: "Gặp gỡ làm quen tại trường đại học ở Seoul",
      systemPrompt: "You are Minho, a warm, human, and energetic Korean teacher. Speak mostly in English for clear guidance. Introduce Korean words slowly: say the word once, give the English translation, and invite the student to repeat after you. Keep every reply strictly to 1 or 2 conversational sentences with friendly contractions (I'm, let's, that's). Listen closely to the student, praise correct pronunciation, and gently model errors again: 'So close! Try saying —'. Stay strictly on lesson words: Annyeonghaseyo, Mannaseo bangawoyo, Je ireum-eun, Gamsahamnida. Never switch topics.",
      initialGreeting: "Annyeonghaseyo! Je ireum-eun Jiwoo-yeyo. Mannaseo bangawoyo! Tên bạn là gì thế?",
      targetVocabulary: ["Annyeonghaseyo","Mannaseo bangawoyo","Je ireum-eun","Gamsahamnida"],
      suggestedResponses: ["Annyeonghaseyo! Je ireum-eun Alex-yeyo.","Mannaseo bangawoyo, Jiwoo-ssi!","Gamsahamnida!"],
      difficulty: "beginner"
    }
  },
  {
    id: "lesson-ko-201",
    unitId: "unit-ko-2",
    title: "Gia Đình Thân Yêu (Gajok)",
    description: "Tên gọi bố, mẹ, anh, chị trong tiếng Hàn.",
    type: "standard",
    xp: 15,
    estimatedMinutes: 5,
    order: 1,
    status: "available",
    goals: [
      { id: "g1", description: "Nắm vững các từ vựng chủ đề Gia Đình Thân Yêu (Gajok)" },
      { id: "g2", description: "Luyện phát âm chuẩn và phản xạ câu qua các bài tập tương tác" }
    ],
    vocabulary: [
      { id: "v-ko-201-1", word: "Gajok", translation: "Gia đình", phonetic: "gah-johk" },
      { id: "v-ko-201-2", word: "Abeoji / Appa", translation: "Bố / Ba", phonetic: "ah-boh-jee / ahp-pah" },
      { id: "v-ko-201-3", word: "Eomeoni / Eomma", translation: "Mẹ", phonetic: "oh-moh-nee / ohm-mah" },
      { id: "v-ko-201-4", word: "Oppa / Hyeong", translation: "Anh trai (em gái gọi / em trai gọi)", phonetic: "ohp-pah / hyohng" },
      { id: "v-ko-201-5", word: "Eonni / Nuna", translation: "Chị gái (em gái gọi / em trai gọi)", phonetic: "ohn-nee / noo-nah" }
    ],
    phrases: [
      { id: "p-ko-201-1", text: "Ibun-eun je eomeoni-yeyo.", translation: "Đây là mẹ của tôi." },
      { id: "p-ko-201-2", text: "Uri gajok-eun ne myeong-ieyo.", translation: "Gia đình chúng tôi có 4 người." }
    ],
    activities: [
      {
        id: "act-ko-201-1",
        type: "multiple_choice",
        skill: "reading",
        question: "Em gái gọi anh trai là gì?",
        options: ["Oppa","Hyeong","Nuna","Eonni"],
        correctAnswer: "Oppa"
      },
      {
        id: "act-ko-201-2",
        type: "fill_blank",
        skill: "writing",
        question: "Điền từ: 'Ibun-eun je _____ (mẹ) -yeyo.'",
        prompt: "Điền từ: 'Ibun-eun je _____ (mẹ) -yeyo.'",
        options: ["eomeoni","abeoji","oppa","hyeong"],
        correctAnswer: "eomeoni"
      },
      {
        id: "act-ko-201-3",
        type: "multiple_choice",
        skill: "reading",
        question: "Dịch: 'Gajok'",
        options: ["Gia đình","Bạn bè","Trường học","Công ty"],
        correctAnswer: "Gia đình"
      },
      {
        id: "act-ko-201-4",
        type: "match_pairs",
        skill: "reading",
        question: "Ghép các cặp từ vựng với nghĩa tiếng Việt tương ứng",
        pairs: [{"left":"Gajok","right":"Gia đình"},{"left":"Abeoji / Appa","right":"Bố / Ba"},{"left":"Eomeoni / Eomma","right":"Mẹ"},{"left":"Oppa / Hyeong","right":"Anh trai (em gái gọi / em trai gọi)"}],
        correctAnswer: "all_matched"
      },
      {
        id: "act-ko-201-5",
        type: "audio_listen",
        skill: "listening",
        question: "Lắng nghe và chọn đáp án chính xác:",
        prompt: "Gajok",
        options: ["Oppa","Hyeong","Nuna","Eonni"],
        correctAnswer: "Oppa"
      }
    ]
  },
  {
    id: "lesson-ko-202",
    unitId: "unit-ko-2",
    title: "Miêu Tả Bạn Bè (Chingu)",
    description: "Từ vựng miêu tả tính cách và ngoại hình.",
    type: "standard",
    xp: 15,
    estimatedMinutes: 5,
    order: 2,
    status: "available",
    goals: [
      { id: "g1", description: "Nắm vững các từ vựng chủ đề Miêu Tả Bạn Bè (Chingu)" },
      { id: "g2", description: "Luyện phát âm chuẩn và phản xạ câu qua các bài tập tương tác" }
    ],
    vocabulary: [
      { id: "v-ko-202-1", word: "Chingu", translation: "Bạn bè", phonetic: "cheen-goo" },
      { id: "v-ko-202-2", word: "Chinjeolhaeyo", translation: "Thân thiện / Tốt bụng", phonetic: "cheen-johl-heh-yoh" },
      { id: "v-ko-202-3", word: "Meos-isseoyo", translation: "Đẹp trai / Ngầu", phonetic: "mosh-eess-oh-yoh" },
      { id: "v-ko-202-4", word: "Yeppeoyo", translation: "Xinh đẹp", phonetic: "yehp-poh-yoh" },
      { id: "v-ko-202-5", word: "Gwiyeowoyo", translation: "Đáng yêu / Dễ thương", phonetic: "gwee-yoh-woh-yoh" }
    ],
    phrases: [
      { id: "p-ko-202-1", text: "Je chingu-neun neomu yeppeoyo.", translation: "Bạn của tôi rất xinh đẹp." },
      { id: "p-ko-202-2", text: "Minho-neun jeongmal meos-isseoyo!", translation: "Minho thật sự rất ngầu và đẹp trai!" }
    ],
    activities: [
      {
        id: "act-ko-202-1",
        type: "multiple_choice",
        skill: "reading",
        question: "'Yeppeoyo' nghĩa là gì?",
        options: ["Xinh đẹp","Xấu xí","Thân thiện","Khó tính"],
        correctAnswer: "Xinh đẹp"
      },
      {
        id: "act-ko-202-2",
        type: "fill_blank",
        skill: "writing",
        question: "Điền từ: 'Minho-neun neomu _____.' (ngầu)",
        prompt: "Điền từ: 'Minho-neun neomu _____.' (ngầu)",
        options: ["meos-isseoyo","gajok","chingu","yeol"],
        correctAnswer: "meos-isseoyo"
      },
      {
        id: "act-ko-202-3",
        type: "multiple_choice",
        skill: "reading",
        question: "Dịch: 'Meos-isseoyo'",
        options: ["Ngầu / Đẹp trai","Xấu hổ","Đói bụng","Buồn ngủ"],
        correctAnswer: "Ngầu / Đẹp trai"
      },
      {
        id: "act-ko-202-4",
        type: "match_pairs",
        skill: "reading",
        question: "Ghép các cặp từ vựng với nghĩa tiếng Việt tương ứng",
        pairs: [{"left":"Chingu","right":"Bạn bè"},{"left":"Chinjeolhaeyo","right":"Thân thiện / Tốt bụng"},{"left":"Meos-isseoyo","right":"Đẹp trai / Ngầu"},{"left":"Yeppeoyo","right":"Xinh đẹp"}],
        correctAnswer: "all_matched"
      },
      {
        id: "act-ko-202-5",
        type: "audio_listen",
        skill: "listening",
        question: "Lắng nghe và chọn đáp án chính xác:",
        prompt: "Chingu",
        options: ["Xinh đẹp","Xấu xí","Thân thiện","Khó tính"],
        correctAnswer: "Xinh đẹp"
      }
    ]
  },
  {
    id: "lesson-ko-203",
    unitId: "unit-ko-2",
    title: "Màu Sắc & Thời Trang K-Style (Saek & Ot)",
    description: "Màu sắc và quần áo phong cách Hàn Quốc.",
    type: "standard",
    xp: 15,
    estimatedMinutes: 5,
    order: 3,
    status: "available",
    goals: [
      { id: "g1", description: "Nắm vững các từ vựng chủ đề Màu Sắc & Thời Trang K-Style (Saek & Ot)" },
      { id: "g2", description: "Luyện phát âm chuẩn và phản xạ câu qua các bài tập tương tác" }
    ],
    vocabulary: [
      { id: "v-ko-203-1", word: "Huinsaek", translation: "Màu trắng", phonetic: "hween-sek" },
      { id: "v-ko-203-2", word: "Geomeunsaek", translation: "Màu đen", phonetic: "goh-moon-sek" },
      { id: "v-ko-203-3", word: "Palgansaek", translation: "Màu đỏ", phonetic: "pahl-gahn-sek" },
      { id: "v-ko-203-4", word: "Ot", translation: "Quần áo", phonetic: "oht" },
      { id: "v-ko-203-5", word: "Sinbal", translation: "Đôi giày", phonetic: "sheen-bahl" }
    ],
    phrases: [
      { id: "p-ko-203-1", text: "I os neomu yeppoyo!", translation: "Bộ quần áo này đẹp quá!" },
      { id: "p-ko-203-2", text: "Geomeunsaek ot-eul ip-eoyo.", translation: "Tôi mặc quần áo màu đen." }
    ],
    activities: [
      {
        id: "act-ko-203-1",
        type: "multiple_choice",
        skill: "reading",
        question: "'Palgansaek' là màu gì?",
        options: ["Màu đỏ","Màu đen","Màu trắng","Màu xanh"],
        correctAnswer: "Màu đỏ"
      },
      {
        id: "act-ko-203-2",
        type: "fill_blank",
        skill: "writing",
        question: "Điền từ: 'I _____ neomu yeppoyo.' (bộ quần áo này)",
        prompt: "Điền từ: 'I _____ neomu yeppoyo.' (bộ quần áo này)",
        options: ["os","saek","chingu","gajok"],
        correctAnswer: "os"
      },
      {
        id: "act-ko-203-3",
        type: "multiple_choice",
        skill: "reading",
        question: "Dịch: 'I os'",
        options: ["Bộ quần áo này","Đôi giày này","Cái mũ này","Màu sắc này"],
        correctAnswer: "Bộ quần áo này"
      },
      {
        id: "act-ko-203-4",
        type: "match_pairs",
        skill: "reading",
        question: "Ghép các cặp từ vựng với nghĩa tiếng Việt tương ứng",
        pairs: [{"left":"Huinsaek","right":"Màu trắng"},{"left":"Geomeunsaek","right":"Màu đen"},{"left":"Palgansaek","right":"Màu đỏ"},{"left":"Ot","right":"Quần áo"}],
        correctAnswer: "all_matched"
      },
      {
        id: "act-ko-203-5",
        type: "audio_listen",
        skill: "listening",
        question: "Lắng nghe và chọn đáp án chính xác:",
        prompt: "Huinsaek",
        options: ["Màu đỏ","Màu đen","Màu trắng","Màu xanh"],
        correctAnswer: "Màu đỏ"
      }
    ]
  },
  {
    id: "lesson-ko-204",
    unitId: "unit-ko-2",
    title: "Sở Thích & K-Culture (Chwimi)",
    description: "Nói về sở thích K-Pop, K-Drama và thể thao.",
    type: "standard",
    xp: 15,
    estimatedMinutes: 5,
    order: 4,
    status: "available",
    goals: [
      { id: "g1", description: "Nắm vững các từ vựng chủ đề Sở Thích & K-Culture (Chwimi)" },
      { id: "g2", description: "Luyện phát âm chuẩn và phản xạ câu qua các bài tập tương tác" }
    ],
    vocabulary: [
      { id: "v-ko-204-1", word: "Chwimi", translation: "Sở thích", phonetic: "chwee-mee" },
      { id: "v-ko-204-2", word: "Johahaeyo", translation: "Thích", phonetic: "joh-hah-heh-yoh" },
      { id: "v-ko-204-3", word: "Silheohaeyo", translation: "Ghét / Không thích", phonetic: "sheel-oh-heh-yoh" },
      { id: "v-ko-204-4", word: "Eum-ak", translation: "Âm nhạc (K-pop)", phonetic: "eum-ahk" },
      { id: "v-ko-204-5", word: "Yeonghwa", translation: "Phim ảnh", phonetic: "yohng-hwah" }
    ],
    phrases: [
      { id: "p-ko-204-1", text: "K-pop eum-ak-eul johahaeyo.", translation: "Tôi rất thích âm nhạc K-Pop." },
      { id: "p-ko-204-2", text: "Chwimi-ga mwoyeyo?", translation: "Sở thích của bạn là gì thế?" }
    ],
    activities: [
      {
        id: "act-ko-204-1",
        type: "multiple_choice",
        skill: "reading",
        question: "'Johahaeyo' nghĩa là gì?",
        options: ["Thích","Ghét","Muốn","Biết"],
        correctAnswer: "Thích"
      },
      {
        id: "act-ko-204-2",
        type: "fill_blank",
        skill: "writing",
        question: "Điền từ: 'K-pop-eul neomu _____.' (rất thích)",
        prompt: "Điền từ: 'K-pop-eul neomu _____.' (rất thích)",
        options: ["johahaeyo","silheohaeyo","chwimi","gajok"],
        correctAnswer: "johahaeyo"
      },
      {
        id: "act-ko-204-3",
        type: "multiple_choice",
        skill: "reading",
        question: "Dịch: 'Eum-ak-eul johahaeyo'",
        options: ["Tôi thích âm nhạc","Tôi thích xem phim","Tôi ghét âm nhạc","Tôi là ca sĩ"],
        correctAnswer: "Tôi thích âm nhạc"
      },
      {
        id: "act-ko-204-4",
        type: "match_pairs",
        skill: "reading",
        question: "Ghép các cặp từ vựng với nghĩa tiếng Việt tương ứng",
        pairs: [{"left":"Chwimi","right":"Sở thích"},{"left":"Johahaeyo","right":"Thích"},{"left":"Silheohaeyo","right":"Ghét / Không thích"},{"left":"Eum-ak","right":"Âm nhạc (K-pop)"}],
        correctAnswer: "all_matched"
      },
      {
        id: "act-ko-204-5",
        type: "audio_listen",
        skill: "listening",
        question: "Lắng nghe và chọn đáp án chính xác:",
        prompt: "Chwimi",
        options: ["Thích","Ghét","Muốn","Biết"],
        correctAnswer: "Thích"
      }
    ]
  },
  {
    id: "lesson-ko-205",
    unitId: "unit-ko-2",
    title: "AI Practice: Trò Chuyện K-Pop & Gia Đình",
    description: "Cùng Minho nói về thần tượng K-Pop yêu thích và các thành viên gia đình.",
    type: "audio_ai",
    xp: 25,
    estimatedMinutes: 5,
    order: 5,
    heroImage: images.mascotWelcome,
    status: "available",
    goals: [
      { id: "g1", description: "Luyện phản xạ giao tiếp thực tế với AI Teacher Minho" },
      { id: "g2", description: "Vận dụng từ vựng trọng tâm vào ngữ cảnh hội thoại tự nhiên" }
    ],
    vocabulary: [
      { id: "v-ai-ko-2-1", word: "Gajok", translation: "Gia đình" },
      { id: "v-ai-ko-2-2", word: "Chingu", translation: "Bạn bè" },
      { id: "v-ai-ko-2-3", word: "Johahaeyo", translation: "Thích" },
      { id: "v-ai-ko-2-4", word: "Eum-ak", translation: "Âm nhạc (K-pop)" },
      { id: "v-ai-ko-2-5", word: "Yeppeoyo", translation: "Xinh đẹp" }
    ],
    phrases: [],
    activities: [],
    aiTeacherPrompt: {
      scenario: "Quán cà phê K-Pop tại Hongdae Seoul",
      systemPrompt: "You are Minho, a warm, human, and energetic Korean teacher. Speak mostly in English for clear guidance. Introduce Korean words slowly: say the word once, give the English translation, and invite the student to repeat after you. Keep every reply strictly to 1 or 2 conversational sentences with friendly contractions (I'm, let's, that's). Listen closely to the student, praise correct pronunciation, and gently model errors again: 'So close! Try saying —'. Stay strictly on lesson words: Gajok, Chingu, Johahaeyo, Eum-ak, Yeppeoyo. Never switch topics.",
      initialGreeting: "Annyeonghaseyo! K-pop johahaseyo? Eotteon eum-ak-eul jaju deureoyo?",
      targetVocabulary: ["Gajok","Chingu","Johahaeyo","Eum-ak","Yeppeoyo"],
      suggestedResponses: ["Ne, K-pop-eul neomu johahaeyo!","Je chingu-do K-pop johahaeyo.","Minho-ssi chwimi-ga mwoyeyo?"],
      difficulty: "beginner"
    }
  },
  {
    id: "lesson-ko-301",
    unitId: "unit-ko-3",
    title: "Mấy Giờ Rồi? (Myeot si-yeyo?)",
    description: "Hỏi và trả lời giờ giấc bằng tiếng Hàn.",
    type: "standard",
    xp: 15,
    estimatedMinutes: 5,
    order: 1,
    status: "available",
    goals: [
      { id: "g1", description: "Nắm vững các từ vựng chủ đề Mấy Giờ Rồi? (Myeot si-yeyo?)" },
      { id: "g2", description: "Luyện phát âm chuẩn và phản xạ câu qua các bài tập tương tác" }
    ],
    vocabulary: [
      { id: "v-ko-301-1", word: "Jigeum", translation: "Bây giờ", phonetic: "jee-geum" },
      { id: "v-ko-301-2", word: "Si", translation: "Giờ", phonetic: "shee" },
      { id: "v-ko-301-3", word: "Bun", translation: "Phút", phonetic: "boon" },
      { id: "v-ko-301-4", word: "Ban", translation: "Rưỡi / Nửa (30 phút)", phonetic: "bahn" },
      { id: "v-ko-301-5", word: "Achim / Jeonyeok", translation: "Buổi sáng / Buổi tối", phonetic: "ah-cheem / joh-nyohk" }
    ],
    phrases: [
      { id: "p-ko-301-1", text: "Jigeum myeot si-yeyo?", translation: "Bây giờ là mấy giờ rồi ạ?" },
      { id: "p-ko-301-2", text: "Jigeum ilgop si ban-ieyo.", translation: "Bây giờ là 7 giờ rưỡi." }
    ],
    activities: [
      {
        id: "act-ko-301-1",
        type: "multiple_choice",
        skill: "reading",
        question: "'Jigeum myeot si-yeyo?' nghĩa là gì?",
        options: ["Bây giờ là mấy giờ?","Hôm nay thứ mấy?","Đi đâu đấy?","Bao nhiêu tiền?"],
        correctAnswer: "Bây giờ là mấy giờ?"
      },
      {
        id: "act-ko-301-2",
        type: "fill_blank",
        skill: "writing",
        question: "Điền từ: 'Jigeum yeodeol si _____.' (8 giờ rưỡi)",
        prompt: "Điền từ: 'Jigeum yeodeol si _____.' (8 giờ rưỡi)",
        options: ["ban","si","bun","jigeum"],
        correctAnswer: "ban"
      },
      {
        id: "act-ko-301-3",
        type: "multiple_choice",
        skill: "reading",
        question: "Dịch: 'Ilgop si'",
        options: ["7 giờ","5 giờ","8 giờ","10 giờ"],
        correctAnswer: "7 giờ"
      },
      {
        id: "act-ko-301-4",
        type: "match_pairs",
        skill: "reading",
        question: "Ghép các cặp từ vựng với nghĩa tiếng Việt tương ứng",
        pairs: [{"left":"Jigeum","right":"Bây giờ"},{"left":"Si","right":"Giờ"},{"left":"Bun","right":"Phút"},{"left":"Ban","right":"Rưỡi / Nửa (30 phút)"}],
        correctAnswer: "all_matched"
      },
      {
        id: "act-ko-301-5",
        type: "audio_listen",
        skill: "listening",
        question: "Lắng nghe và chọn đáp án chính xác:",
        prompt: "Jigeum",
        options: ["Bây giờ là mấy giờ?","Hôm nay thứ mấy?","Đi đâu đấy?","Bao nhiêu tiền?"],
        correctAnswer: "Bây giờ là mấy giờ?"
      }
    ]
  },
  {
    id: "lesson-ko-302",
    unitId: "unit-ko-3",
    title: "Thói Quen Mỗi Ngày (Haru Ilgwa)",
    description: "Thức dậy, ăn cơm, đi học và đi ngủ.",
    type: "standard",
    xp: 15,
    estimatedMinutes: 5,
    order: 2,
    status: "available",
    goals: [
      { id: "g1", description: "Nắm vững các từ vựng chủ đề Thói Quen Mỗi Ngày (Haru Ilgwa)" },
      { id: "g2", description: "Luyện phát âm chuẩn và phản xạ câu qua các bài tập tương tác" }
    ],
    vocabulary: [
      { id: "v-ko-302-1", word: "Il-eonayo", translation: "Thức dậy", phonetic: "eel-oh-nah-yoh" },
      { id: "v-ko-302-2", word: "Jayo", translation: "Đi ngủ", phonetic: "jah-yoh" },
      { id: "v-ko-302-3", word: "Meog-eoyo", translation: "Ăn", phonetic: "moh-goh-yoh" },
      { id: "v-ko-302-4", word: "Masyeoyo", translation: "Uống", phonetic: "mah-shyoh-yoh" },
      { id: "v-ko-302-5", word: "Gayo", translation: "Đi", phonetic: "gah-yoh" }
    ],
    phrases: [
      { id: "p-ko-302-1", text: "Jeoneun 7 si-e il-eonayo.", translation: "Tôi thức dậy lúc 7 giờ." },
      { id: "p-ko-302-2", text: "Bab-eul meog-eoyo.", translation: "Tôi ăn cơm." }
    ],
    activities: [
      {
        id: "act-ko-302-1",
        type: "multiple_choice",
        skill: "reading",
        question: "'Il-eonayo' nghĩa là hành động gì?",
        options: ["Thức dậy","Đi ngủ","Ăn cơm","Đi học"],
        correctAnswer: "Thức dậy"
      },
      {
        id: "act-ko-302-2",
        type: "fill_blank",
        skill: "writing",
        question: "Điền từ: 'Achim 7 si-e _____.' (thức dậy)",
        prompt: "Điền từ: 'Achim 7 si-e _____.' (thức dậy)",
        options: ["il-eonayo","jayo","gayo","masyeoyo"],
        correctAnswer: "il-eonayo"
      },
      {
        id: "act-ko-302-3",
        type: "multiple_choice",
        skill: "reading",
        question: "Dịch: 'Bab-eul meog-eoyo'",
        options: ["Ăn cơm","Uống nước","Đi ngủ","Đi làm"],
        correctAnswer: "Ăn cơm"
      },
      {
        id: "act-ko-302-4",
        type: "match_pairs",
        skill: "reading",
        question: "Ghép các cặp từ vựng với nghĩa tiếng Việt tương ứng",
        pairs: [{"left":"Il-eonayo","right":"Thức dậy"},{"left":"Jayo","right":"Đi ngủ"},{"left":"Meog-eoyo","right":"Ăn"},{"left":"Masyeoyo","right":"Uống"}],
        correctAnswer: "all_matched"
      },
      {
        id: "act-ko-302-5",
        type: "audio_listen",
        skill: "listening",
        question: "Lắng nghe và chọn đáp án chính xác:",
        prompt: "Il-eonayo",
        options: ["Thức dậy","Đi ngủ","Ăn cơm","Đi học"],
        correctAnswer: "Thức dậy"
      }
    ]
  },
  {
    id: "lesson-ko-303",
    unitId: "unit-ko-3",
    title: "Các Ngày Trong Tuần (Yo-il)",
    description: "Từ thứ Hai đến Chủ Nhật trong tiếng Hàn.",
    type: "standard",
    xp: 15,
    estimatedMinutes: 5,
    order: 3,
    status: "available",
    goals: [
      { id: "g1", description: "Nắm vững các từ vựng chủ đề Các Ngày Trong Tuần (Yo-il)" },
      { id: "g2", description: "Luyện phát âm chuẩn và phản xạ câu qua các bài tập tương tác" }
    ],
    vocabulary: [
      { id: "v-ko-303-1", word: "Woryo-il", translation: "Thứ Hai", phonetic: "woh-ryoh-eel" },
      { id: "v-ko-303-2", word: "Geumyo-il", translation: "Thứ Sáu", phonetic: "geum-yoh-eel" },
      { id: "v-ko-303-3", word: "Iryo-il", translation: "Chủ Nhật", phonetic: "ee-ryoh-eel" },
      { id: "v-ko-303-4", word: "Oneul", translation: "Hôm nay", phonetic: "oh-neul" },
      { id: "v-ko-303-5", word: "Nae-il", translation: "Ngày mai", phonetic: "neh-eel" }
    ],
    phrases: [
      { id: "p-ko-303-1", text: "Oneul-eun geumyo-il-ieyo!", translation: "Hôm nay là thứ Sáu rồi!" },
      { id: "p-ko-303-2", text: "Nae-il mannayo.", translation: "Ngày mai gặp lại nhé." }
    ],
    activities: [
      {
        id: "act-ko-303-1",
        type: "multiple_choice",
        skill: "reading",
        question: "'Iryo-il' là ngày nào trong tuần?",
        options: ["Chủ Nhật","Thứ Hai","Thứ Bảy","Thứ Năm"],
        correctAnswer: "Chủ Nhật"
      },
      {
        id: "act-ko-303-2",
        type: "fill_blank",
        skill: "writing",
        question: "Điền từ: '_____ mannayo.' (ngày mai gặp lại)",
        prompt: "Điền từ: '_____ mannayo.' (ngày mai gặp lại)",
        options: ["Nae-il","Oneul","Jigeum","Si"],
        correctAnswer: "Nae-il"
      },
      {
        id: "act-ko-303-3",
        type: "multiple_choice",
        skill: "reading",
        question: "Dịch: 'Oneul-eun geumyo-il'",
        options: ["Hôm nay là thứ Sáu","Hôm nay là thứ Hai","Ngày mai là thứ Bảy","Hôm qua là thứ Sáu"],
        correctAnswer: "Hôm nay là thứ Sáu"
      },
      {
        id: "act-ko-303-4",
        type: "match_pairs",
        skill: "reading",
        question: "Ghép các cặp từ vựng với nghĩa tiếng Việt tương ứng",
        pairs: [{"left":"Woryo-il","right":"Thứ Hai"},{"left":"Geumyo-il","right":"Thứ Sáu"},{"left":"Iryo-il","right":"Chủ Nhật"},{"left":"Oneul","right":"Hôm nay"}],
        correctAnswer: "all_matched"
      },
      {
        id: "act-ko-303-5",
        type: "audio_listen",
        skill: "listening",
        question: "Lắng nghe và chọn đáp án chính xác:",
        prompt: "Woryo-il",
        options: ["Chủ Nhật","Thứ Hai","Thứ Bảy","Thứ Năm"],
        correctAnswer: "Chủ Nhật"
      }
    ]
  },
  {
    id: "lesson-ko-304",
    unitId: "unit-ko-3",
    title: "Thời Tiết Seoul (Nalssi)",
    description: "Nói về thời tiết 4 mùa và nhiệt độ.",
    type: "standard",
    xp: 15,
    estimatedMinutes: 5,
    order: 4,
    status: "available",
    goals: [
      { id: "g1", description: "Nắm vững các từ vựng chủ đề Thời Tiết Seoul (Nalssi)" },
      { id: "g2", description: "Luyện phát âm chuẩn và phản xạ câu qua các bài tập tương tác" }
    ],
    vocabulary: [
      { id: "v-ko-304-1", word: "Nalssi", translation: "Thời tiết", phonetic: "nahlss-ee" },
      { id: "v-ko-304-2", word: "Malkeoyo", translation: "Nắng / Trời quang đãng", phonetic: "mahl-goh-yoh" },
      { id: "v-ko-304-3", word: "Bi-ga wayo", translation: "Trời mưa", phonetic: "bee-gah wah-yoh" },
      { id: "v-ko-304-4", word: "Deowoyo", translation: "Nóng bức", phonetic: "doh-woh-yoh" },
      { id: "v-ko-304-5", word: "Chuwoyo", translation: "Lạnh giá", phonetic: "choo-woh-yoh" }
    ],
    phrases: [
      { id: "p-ko-304-1", text: "Oneul nalssi-ga neomu joh-ayo.", translation: "Hôm nay thời tiết đẹp quá." },
      { id: "p-ko-304-2", text: "Oneul-eun jinjja chuwoyo!", translation: "Hôm nay trời thực sự rất lạnh!" }
    ],
    activities: [
      {
        id: "act-ko-304-1",
        type: "multiple_choice",
        skill: "reading",
        question: "'Bi-ga wayo' có nghĩa là gì?",
        options: ["Trời mưa","Trời nắng","Có tuyết rơi","Trời nhiều mây"],
        correctAnswer: "Trời mưa"
      },
      {
        id: "act-ko-304-2",
        type: "fill_blank",
        skill: "writing",
        question: "Điền từ: 'Oneul _____ neomu chuwoyo.' (thời tiết)",
        prompt: "Điền từ: 'Oneul _____ neomu chuwoyo.' (thời tiết)",
        options: ["nalssi-ga","haru","si","oneul"],
        correctAnswer: "nalssi-ga"
      },
      {
        id: "act-ko-304-3",
        type: "multiple_choice",
        skill: "reading",
        question: "Dịch: 'Deowoyo'",
        options: ["Nóng","Lạnh","Mát mẻ","Ấm áp"],
        correctAnswer: "Nóng"
      },
      {
        id: "act-ko-304-4",
        type: "match_pairs",
        skill: "reading",
        question: "Ghép các cặp từ vựng với nghĩa tiếng Việt tương ứng",
        pairs: [{"left":"Nalssi","right":"Thời tiết"},{"left":"Malkeoyo","right":"Nắng / Trời quang đãng"},{"left":"Bi-ga wayo","right":"Trời mưa"},{"left":"Deowoyo","right":"Nóng bức"}],
        correctAnswer: "all_matched"
      },
      {
        id: "act-ko-304-5",
        type: "audio_listen",
        skill: "listening",
        question: "Lắng nghe và chọn đáp án chính xác:",
        prompt: "Nalssi",
        options: ["Trời mưa","Trời nắng","Có tuyết rơi","Trời nhiều mây"],
        correctAnswer: "Trời mưa"
      }
    ]
  },
  {
    id: "lesson-ko-305",
    unitId: "unit-ko-3",
    title: "AI Practice: Một Ngày Của Bạn Ở Seoul",
    description: "Kể cho bạn học Sujin nghe về lịch trình học tập, thời tiết và cuộc sống thường nhật.",
    type: "audio_ai",
    xp: 25,
    estimatedMinutes: 5,
    order: 5,
    heroImage: images.mascotWelcome,
    status: "available",
    goals: [
      { id: "g1", description: "Luyện phản xạ giao tiếp thực tế với AI Teacher Minho" },
      { id: "g2", description: "Vận dụng từ vựng trọng tâm vào ngữ cảnh hội thoại tự nhiên" }
    ],
    vocabulary: [
      { id: "v-ai-ko-3-1", word: "Jigeum", translation: "Bây giờ" },
      { id: "v-ai-ko-3-2", word: "Il-eonayo", translation: "Thức dậy" },
      { id: "v-ai-ko-3-3", word: "Nalssi", translation: "Thời tiết" },
      { id: "v-ai-ko-3-4", word: "Oneul", translation: "Hôm nay" },
      { id: "v-ai-ko-3-5", word: "Chuwoyo", translation: "Lạnh giá" }
    ],
    phrases: [],
    activities: [],
    aiTeacherPrompt: {
      scenario: "Sân trường đại học Yonsei vào buổi chiều nắng ấm",
      systemPrompt: "You are Minho, a warm, human, and energetic Korean teacher. Speak mostly in English for clear guidance. Introduce Korean words slowly: say the word once, give the English translation, and invite the student to repeat after you. Keep every reply strictly to 1 or 2 conversational sentences with friendly contractions (I'm, let's, that's). Listen closely to the student, praise correct pronunciation, and gently model errors again: 'So close! Try saying —'. Stay strictly on lesson words: Jigeum, Il-eonayo, Nalssi, Oneul, Chuwoyo. Never switch topics.",
      initialGreeting: "Oneul nalssi cham johjyo? Achim myeot si-e il-eonasseoyo?",
      targetVocabulary: ["Jigeum","Il-eonayo","Nalssi","Oneul","Chuwoyo"],
      suggestedResponses: ["Ilgop si-e il-eonasseoyo.","Oneul nalssi-ga joh-ayo.","Jeonyeok-e bab meog-eul geo-yeyo!"],
      difficulty: "beginner"
    }
  },
  {
    id: "lesson-ko-401",
    unitId: "unit-ko-4",
    title: "Tại Quán Ăn Hàn Quốc (Sikdang)",
    description: "Vào quán, gọi bàn và xin nước lọc.",
    type: "standard",
    xp: 15,
    estimatedMinutes: 5,
    order: 1,
    status: "available",
    goals: [
      { id: "g1", description: "Nắm vững các từ vựng chủ đề Tại Quán Ăn Hàn Quốc (Sikdang)" },
      { id: "g2", description: "Luyện phát âm chuẩn và phản xạ câu qua các bài tập tương tác" }
    ],
    vocabulary: [
      { id: "v-ko-401-1", word: "Imo-nim", translation: "Cô ơi / Dì ơi (gọi chủ quán)", phonetic: "ee-moh-neem" },
      { id: "v-ko-401-2", word: "Menupan", translation: "Thực đơn", phonetic: "meh-nyoo-pahn" },
      { id: "v-ko-401-3", word: "Juseyo", translation: "Làm ơn cho tôi...", phonetic: "joo-seh-yoh" },
      { id: "v-ko-401-4", word: "Mul", translation: "Nước lọc", phonetic: "mool" },
      { id: "v-ko-401-5", word: "Banchan", translation: "Món ăn kèm (kimchi...)", phonetic: "bahn-chahn" }
    ],
    phrases: [
      { id: "p-ko-401-1", text: "Imo-nim, mul juseyo!", translation: "Cô ơi, cho cháu xin cốc nước lọc!" },
      { id: "p-ko-401-2", text: "Menupan jom boyeo juseyo.", translation: "Cho cháu xem thực đơn với ạ." }
    ],
    activities: [
      {
        id: "act-ko-401-1",
        type: "multiple_choice",
        skill: "reading",
        question: "Cách gọi cô chủ quán ăn thân thiện ở Hàn Quốc là gì?",
        options: ["Imo-nim","Oppa","Chingu","Sonsaengnim"],
        correctAnswer: "Imo-nim"
      },
      {
        id: "act-ko-401-2",
        type: "fill_blank",
        skill: "writing",
        question: "Điền từ: 'Imo-nim, menupan _____!' (làm ơn cho cháu)",
        prompt: "Điền từ: 'Imo-nim, menupan _____!' (làm ơn cho cháu)",
        options: ["juseyo","gamsahamnida","gayo","mianhaeyo"],
        correctAnswer: "juseyo"
      },
      {
        id: "act-ko-401-3",
        type: "multiple_choice",
        skill: "reading",
        question: "Dịch: 'Mul juseyo'",
        options: ["Cho tôi nước lọc","Cho tôi thực đơn","Tính tiền","Tạm biệt"],
        correctAnswer: "Cho tôi nước lọc"
      },
      {
        id: "act-ko-401-4",
        type: "match_pairs",
        skill: "reading",
        question: "Ghép các cặp từ vựng với nghĩa tiếng Việt tương ứng",
        pairs: [{"left":"Imo-nim","right":"Cô ơi / Dì ơi (gọi chủ quán)"},{"left":"Menupan","right":"Thực đơn"},{"left":"Juseyo","right":"Làm ơn cho tôi..."},{"left":"Mul","right":"Nước lọc"}],
        correctAnswer: "all_matched"
      },
      {
        id: "act-ko-401-5",
        type: "audio_listen",
        skill: "listening",
        question: "Lắng nghe và chọn đáp án chính xác:",
        prompt: "Imo-nim",
        options: ["Imo-nim","Oppa","Chingu","Sonsaengnim"],
        correctAnswer: "Imo-nim"
      }
    ]
  },
  {
    id: "lesson-ko-402",
    unitId: "unit-ko-4",
    title: "Gọi Món K-Food (Tteokbokki & BBQ)",
    description: "Gọi tokbokki, kimbap, thịt nướng Samgyeopsal.",
    type: "standard",
    xp: 15,
    estimatedMinutes: 5,
    order: 2,
    status: "available",
    goals: [
      { id: "g1", description: "Nắm vững các từ vựng chủ đề Gọi Món K-Food (Tteokbokki & BBQ)" },
      { id: "g2", description: "Luyện phát âm chuẩn và phản xạ câu qua các bài tập tương tác" }
    ],
    vocabulary: [
      { id: "v-ko-402-1", word: "Tteokbokki", translation: "Bánh gạo cay", phonetic: "ttohk-bohkk-ee" },
      { id: "v-ko-402-2", word: "Samgyeopsal", translation: "Thịt ba chỉ nướng", phonetic: "sahm-gyohp-sahl" },
      { id: "v-ko-402-3", word: "Mas-isseoyo", translation: "Ngon tuyệt", phonetic: "mahs-eess-oh-yoh" },
      { id: "v-ko-402-4", word: "Mae-woyo", translation: "Cay", phonetic: "meh-woh-yoh" },
      { id: "v-ko-402-5", word: "Kape", translation: "Quán cà phê", phonetic: "kah-peh" }
    ],
    phrases: [
      { id: "p-ko-402-1", text: "Tteokbokki il-inbun juseyo!", translation: "Cho cháu một phần bánh gạo tokbokki!" },
      { id: "p-ko-402-2", text: "Igeo jinjja mas-isseoyo!", translation: "Món này thật sự rất ngon!" }
    ],
    activities: [
      {
        id: "act-ko-402-1",
        type: "multiple_choice",
        skill: "reading",
        question: "'Mas-isseoyo' nghĩa là gì?",
        options: ["Ngon","Cay","Đắt","Chua"],
        correctAnswer: "Ngon"
      },
      {
        id: "act-ko-402-2",
        type: "fill_blank",
        skill: "writing",
        question: "Điền từ: 'I eumsik-eun jinjja _____!' (ngon)",
        prompt: "Điền từ: 'I eumsik-eun jinjja _____!' (ngon)",
        options: ["mas-isseoyo","mul","menupan","kape"],
        correctAnswer: "mas-isseoyo"
      },
      {
        id: "act-ko-402-3",
        type: "multiple_choice",
        skill: "reading",
        question: "Dịch: 'Neomu mae-woyo!'",
        options: ["Cay quá!","Ngon quá!","Nóng quá!","Nhiều quá!"],
        correctAnswer: "Cay quá!"
      },
      {
        id: "act-ko-402-4",
        type: "match_pairs",
        skill: "reading",
        question: "Ghép các cặp từ vựng với nghĩa tiếng Việt tương ứng",
        pairs: [{"left":"Tteokbokki","right":"Bánh gạo cay"},{"left":"Samgyeopsal","right":"Thịt ba chỉ nướng"},{"left":"Mas-isseoyo","right":"Ngon tuyệt"},{"left":"Mae-woyo","right":"Cay"}],
        correctAnswer: "all_matched"
      },
      {
        id: "act-ko-402-5",
        type: "audio_listen",
        skill: "listening",
        question: "Lắng nghe và chọn đáp án chính xác:",
        prompt: "Tteokbokki",
        options: ["Ngon","Cay","Đắt","Chua"],
        correctAnswer: "Ngon"
      }
    ]
  },
  {
    id: "lesson-ko-403",
    unitId: "unit-ko-4",
    title: "Văn Hóa Ăn Uống Hàn Quốc (Jal meog-eoss-seumnida)",
    description: "Lời chào trước và sau khi ăn ngon miệng.",
    type: "standard",
    xp: 15,
    estimatedMinutes: 5,
    order: 3,
    status: "available",
    goals: [
      { id: "g1", description: "Nắm vững các từ vựng chủ đề Văn Hóa Ăn Uống Hàn Quốc (Jal meog-eoss-seumnida)" },
      { id: "g2", description: "Luyện phát âm chuẩn và phản xạ câu qua các bài tập tương tác" }
    ],
    vocabulary: [
      { id: "v-ko-403-1", word: "Jal meog-gess-seumnida", translation: "Tôi sẽ ăn thật ngon miệng", phonetic: "jahl mohg-get-seum-nee-dah" },
      { id: "v-ko-403-2", word: "Jal meog-eoss-seumnida", translation: "Cảm ơn, tôi đã ăn rất ngon", phonetic: "jahl mohg-oht-seum-nee-dah" },
      { id: "v-ko-403-3", word: "Geonbae", translation: "Cạn ly / Dô!", phonetic: "gohn-beh" },
      { id: "v-ko-403-4", word: "Bae-gopayo", translation: "Đói bụng rồi", phonetic: "beh-goh-pah-yoh" },
      { id: "v-ko-403-5", word: "Eumsik", translation: "Món ăn / Đồ ăn", phonetic: "eum-sheek" }
    ],
    phrases: [
      { id: "p-ko-403-1", text: "Jal meog-gess-seumnida! Mas-issgetda.", translation: "Tôi xin phép ăn! Trông ngon quá." },
      { id: "p-ko-403-2", text: "Geonbae! Oneul sur-hanjan haeyo.", translation: "Cạn ly! Hôm nay làm một ly nhé." }
    ],
    activities: [
      {
        id: "act-ko-403-1",
        type: "multiple_choice",
        skill: "reading",
        question: "Người Hàn nói gì trước bữa ăn?",
        options: ["Jal meog-gess-seumnida","Annyeong","Gwaenchanhayo","Joesonghamnida"],
        correctAnswer: "Jal meog-gess-seumnida"
      },
      {
        id: "act-ko-403-2",
        type: "fill_blank",
        skill: "writing",
        question: "Điền từ: 'Sau bữa ăn: _____ meog-eoss-seumnida.'",
        prompt: "Điền từ: 'Sau bữa ăn: _____ meog-eoss-seumnida.'",
        options: ["Jal","Bae","Mul","Eumsik"],
        correctAnswer: "Jal"
      },
      {
        id: "act-ko-403-3",
        type: "multiple_choice",
        skill: "reading",
        question: "Dịch: 'Geonbae!'",
        options: ["Cạn ly / Nâng ly!","Cảm ơn","Tạm biệt","Ngon miệng"],
        correctAnswer: "Cạn ly / Nâng ly!"
      },
      {
        id: "act-ko-403-4",
        type: "match_pairs",
        skill: "reading",
        question: "Ghép các cặp từ vựng với nghĩa tiếng Việt tương ứng",
        pairs: [{"left":"Jal meog-gess-seumnida","right":"Tôi sẽ ăn thật ngon miệng"},{"left":"Jal meog-eoss-seumnida","right":"Cảm ơn, tôi đã ăn rất ngon"},{"left":"Geonbae","right":"Cạn ly / Dô!"},{"left":"Bae-gopayo","right":"Đói bụng rồi"}],
        correctAnswer: "all_matched"
      },
      {
        id: "act-ko-403-5",
        type: "audio_listen",
        skill: "listening",
        question: "Lắng nghe và chọn đáp án chính xác:",
        prompt: "Jal meog-gess-seumnida",
        options: ["Jal meog-gess-seumnida","Annyeong","Gwaenchanhayo","Joesonghamnida"],
        correctAnswer: "Jal meog-gess-seumnida"
      }
    ]
  },
  {
    id: "lesson-ko-404",
    unitId: "unit-ko-4",
    title: "Thanh Toán & Tính Tiền (Gyesan-hae juseyo)",
    description: "Hỏi giá và trả tiền tại quán ăn.",
    type: "standard",
    xp: 15,
    estimatedMinutes: 5,
    order: 4,
    status: "available",
    goals: [
      { id: "g1", description: "Nắm vững các từ vựng chủ đề Thanh Toán & Tính Tiền (Gyesan-hae juseyo)" },
      { id: "g2", description: "Luyện phát âm chuẩn và phản xạ câu qua các bài tập tương tác" }
    ],
    vocabulary: [
      { id: "v-ko-404-1", word: "Gyesan", translation: "Thanh toán / Tính tiền", phonetic: "gyeh-sahn" },
      { id: "v-ko-404-2", word: "Olmayeyo?", translation: "Bao nhiêu tiền vậy?", phonetic: "ohl-mah-yeh-yoh" },
      { id: "v-ko-404-3", word: "Won", translation: "Đồng Won Hàn Quốc", phonetic: "wohn" },
      { id: "v-ko-404-4", word: "Kadeu", translation: "Thẻ ngân hàng", phonetic: "kah-deu" },
      { id: "v-ko-404-5", word: "Hyeon-geum", translation: "Tiền mặt", phonetic: "hyohn-geum" }
    ],
    phrases: [
      { id: "p-ko-404-1", text: "Gyesan-hae juseyo!", translation: "Làm ơn tính tiền giúp cháu!" },
      { id: "p-ko-404-2", text: "Igeo modu olmayeyo?", translation: "Tất cả chỗ này hết bao nhiêu tiền ạ?" }
    ],
    activities: [
      {
        id: "act-ko-404-1",
        type: "multiple_choice",
        skill: "reading",
        question: "'Olmayeyo?' có nghĩa là gì?",
        options: ["Bao nhiêu tiền?","Ở đâu vậy?","Món gì đây?","Ai đấy?"],
        correctAnswer: "Bao nhiêu tiền?"
      },
      {
        id: "act-ko-404-2",
        type: "fill_blank",
        skill: "writing",
        question: "Điền từ: 'Imo-nim, _____ hae juseyo.' (tính tiền)",
        prompt: "Điền từ: 'Imo-nim, _____ hae juseyo.' (tính tiền)",
        options: ["gyesan","mul","banchan","kape"],
        correctAnswer: "gyesan"
      },
      {
        id: "act-ko-404-3",
        type: "multiple_choice",
        skill: "reading",
        question: "Dịch: 'Kadeu dwaeyo?'",
        options: ["Có quẹt thẻ được không?","Trả tiền mặt nhé","Hết bao nhiêu tiền","Cho tôi hóa đơn"],
        correctAnswer: "Có quẹt thẻ được không?"
      },
      {
        id: "act-ko-404-4",
        type: "match_pairs",
        skill: "reading",
        question: "Ghép các cặp từ vựng với nghĩa tiếng Việt tương ứng",
        pairs: [{"left":"Gyesan","right":"Thanh toán / Tính tiền"},{"left":"Olmayeyo?","right":"Bao nhiêu tiền vậy?"},{"left":"Won","right":"Đồng Won Hàn Quốc"},{"left":"Kadeu","right":"Thẻ ngân hàng"}],
        correctAnswer: "all_matched"
      },
      {
        id: "act-ko-404-5",
        type: "audio_listen",
        skill: "listening",
        question: "Lắng nghe và chọn đáp án chính xác:",
        prompt: "Gyesan",
        options: ["Bao nhiêu tiền?","Ở đâu vậy?","Món gì đây?","Ai đấy?"],
        correctAnswer: "Bao nhiêu tiền?"
      }
    ]
  },
  {
    id: "lesson-ko-405",
    unitId: "unit-ko-4",
    title: "AI Practice: Gọi Món Quán Tokbokki Đường Phố",
    description: "Tập gọi món tokbokki cay và tính tiền cùng cô chủ quán Bunsik thân thiện.",
    type: "audio_ai",
    xp: 25,
    estimatedMinutes: 5,
    order: 5,
    heroImage: images.mascotWelcome,
    status: "available",
    goals: [
      { id: "g1", description: "Luyện phản xạ giao tiếp thực tế với AI Teacher Minho" },
      { id: "g2", description: "Vận dụng từ vựng trọng tâm vào ngữ cảnh hội thoại tự nhiên" }
    ],
    vocabulary: [
      { id: "v-ai-ko-4-1", word: "Tteokbokki", translation: "Bánh gạo cay" },
      { id: "v-ai-ko-4-2", word: "Juseyo", translation: "Làm ơn cho tôi..." },
      { id: "v-ai-ko-4-3", word: "Mas-isseoyo", translation: "Ngon tuyệt" },
      { id: "v-ai-ko-4-4", word: "Olmayeyo", translation: "Giá bao nhiêu vậy?" },
      { id: "v-ai-ko-4-5", word: "Gyesan", translation: "Thanh toán / Tính tiền" }
    ],
    phrases: [],
    activities: [],
    aiTeacherPrompt: {
      scenario: "Quầy ẩm thực đường phố Bunsik tại Myeongdong",
      systemPrompt: "You are Minho, a warm, human, and energetic Korean teacher. Speak mostly in English for clear guidance. Introduce Korean words slowly: say the word once, give the English translation, and invite the student to repeat after you. Keep every reply strictly to 1 or 2 conversational sentences with friendly contractions (I'm, let's, that's). Listen closely to the student, praise correct pronunciation, and gently model errors again: 'So close! Try saying —'. Stay strictly on lesson words: Tteokbokki, Juseyo, Mas-isseoyo, Olmayeyo, Gyesan. Never switch topics.",
      initialGreeting: "Eoseo-oseyo! Tteokbokki-rang kimbap mas-isseoyo. Mwo deurilkkayo?",
      targetVocabulary: ["Tteokbokki","Juseyo","Mas-isseoyo","Olmayeyo","Gyesan"],
      suggestedResponses: ["Tteokbokki il-inbun juseyo!","Igeo neomu mas-isseoyo!","Gyesan-hae juseyo!"],
      difficulty: "beginner"
    }
  },
  {
    id: "lesson-ko-501",
    unitId: "unit-ko-5",
    title: "Ở Đâu Vậy? (Eodieyo?)",
    description: "Hỏi đường và vị trí các địa điểm tại Hàn Quốc.",
    type: "standard",
    xp: 15,
    estimatedMinutes: 5,
    order: 1,
    status: "available",
    goals: [
      { id: "g1", description: "Nắm vững các từ vựng chủ đề Ở Đâu Vậy? (Eodieyo?)" },
      { id: "g2", description: "Luyện phát âm chuẩn và phản xạ câu qua các bài tập tương tác" }
    ],
    vocabulary: [
      { id: "v-ko-501-1", word: "Eodi", translation: "Ở đâu", phonetic: "oh-dee" },
      { id: "v-ko-501-2", word: "Yeogi / Jeogi", translation: "Ở đây / Ở đằng kia", phonetic: "yoh-gee / joh-gee" },
      { id: "v-ko-501-3", word: "Oreunjjok", translation: "Bên phải", phonetic: "oh-reun-jjohk" },
      { id: "v-ko-501-4", word: "Oenjjok", translation: "Bên trái", phonetic: "wen-jjohk" },
      { id: "v-ko-501-5", word: "Jikjin", translation: "Đi thẳng", phonetic: "jeek-jeen" }
    ],
    phrases: [
      { id: "p-ko-501-1", text: "Hwajangsil-i eodieyo?", translation: "Nhà vệ sinh ở đâu vậy ạ?" },
      { id: "p-ko-501-2", text: "Oreunjjok-euro gaseyo.", translation: "Hãy rẽ sang bên phải nhé." }
    ],
    activities: [
      {
        id: "act-ko-501-1",
        type: "multiple_choice",
        skill: "reading",
        question: "'Hwajangsil' nghĩa là gì?",
        options: ["Nhà vệ sinh","Ga tàu","Khách sạn","Sân bay"],
        correctAnswer: "Nhà vệ sinh"
      },
      {
        id: "act-ko-501-2",
        type: "fill_blank",
        skill: "writing",
        question: "Điền từ: 'Hwajangsil-i _____?' (ở đâu)",
        prompt: "Điền từ: 'Hwajangsil-i _____?' (ở đâu)",
        options: ["eodieyo","olmayeyo","mwoyeyo","juseyo"],
        correctAnswer: "eodieyo"
      },
      {
        id: "act-ko-501-3",
        type: "multiple_choice",
        skill: "reading",
        question: "Dịch: 'Oreunjjok'",
        options: ["Bên phải","Bên trái","Đi thẳng","Đằng sau"],
        correctAnswer: "Bên phải"
      },
      {
        id: "act-ko-501-4",
        type: "match_pairs",
        skill: "reading",
        question: "Ghép các cặp từ vựng với nghĩa tiếng Việt tương ứng",
        pairs: [{"left":"Eodi","right":"Ở đâu"},{"left":"Yeogi / Jeogi","right":"Ở đây / Ở đằng kia"},{"left":"Oreunjjok","right":"Bên phải"},{"left":"Oenjjok","right":"Bên trái"}],
        correctAnswer: "all_matched"
      },
      {
        id: "act-ko-501-5",
        type: "audio_listen",
        skill: "listening",
        question: "Lắng nghe và chọn đáp án chính xác:",
        prompt: "Eodi",
        options: ["Nhà vệ sinh","Ga tàu","Khách sạn","Sân bay"],
        correctAnswer: "Nhà vệ sinh"
      }
    ]
  },
  {
    id: "lesson-ko-502",
    unitId: "unit-ko-5",
    title: "Đi Tàu Điện Ngầm Seoul (Jihacheol)",
    description: "Đi tàu điện ngầm, mua thẻ T-money và tìm line tàu.",
    type: "standard",
    xp: 15,
    estimatedMinutes: 5,
    order: 2,
    status: "available",
    goals: [
      { id: "g1", description: "Nắm vững các từ vựng chủ đề Đi Tàu Điện Ngầm Seoul (Jihacheol)" },
      { id: "g2", description: "Luyện phát âm chuẩn và phản xạ câu qua các bài tập tương tác" }
    ],
    vocabulary: [
      { id: "v-ko-502-1", word: "Jihacheol", translation: "Tàu điện ngầm", phonetic: "jee-hah-chohl" },
      { id: "v-ko-502-2", word: "Yeok", translation: "Ga / Trạm tàu", phonetic: "yohk" },
      { id: "v-ko-502-3", word: "Beoseu", translation: "Xe buýt", phonetic: "boh-seu" },
      { id: "v-ko-502-4", word: "T-money", translation: "Thẻ giao thông T-money", phonetic: "tee-moh-nee" },
      { id: "v-ko-502-5", word: "Taeksi", translation: "Xe taxi", phonetic: "tek-shee" }
    ],
    phrases: [
      { id: "p-ko-502-1", text: "Hongdae-yeok-i eodi-yeyo?", translation: "Ga Hongdae nằm ở đâu vậy ạ?" },
      { id: "p-ko-502-2", text: "T-money kadeu chungjeon-hae juseyo.", translation: "Nạp tiền vào thẻ T-money giúp tôi với." }
    ],
    activities: [
      {
        id: "act-ko-502-1",
        type: "multiple_choice",
        skill: "reading",
        question: "'Jihacheol' nghĩa là phương tiện gì?",
        options: ["Tàu điện ngầm","Xe buýt","Máy bay","Tàu hỏa"],
        correctAnswer: "Tàu điện ngầm"
      },
      {
        id: "act-ko-502-2",
        type: "fill_blank",
        skill: "writing",
        question: "Điền từ: 'Seoul-_____ eodi-yeyo?' (ga Seoul)",
        prompt: "Điền từ: 'Seoul-_____ eodi-yeyo?' (ga Seoul)",
        options: ["yeok","beoseu","taeksi","jihacheol"],
        correctAnswer: "yeok"
      },
      {
        id: "act-ko-502-3",
        type: "multiple_choice",
        skill: "reading",
        question: "Dịch: 'Hongdae-yeok'",
        options: ["Ga Hongdae","Trường Hongdae","Chợ Hongdae","Đường Hongdae"],
        correctAnswer: "Ga Hongdae"
      },
      {
        id: "act-ko-502-4",
        type: "match_pairs",
        skill: "reading",
        question: "Ghép các cặp từ vựng với nghĩa tiếng Việt tương ứng",
        pairs: [{"left":"Jihacheol","right":"Tàu điện ngầm"},{"left":"Yeok","right":"Ga / Trạm tàu"},{"left":"Beoseu","right":"Xe buýt"},{"left":"T-money","right":"Thẻ giao thông T-money"}],
        correctAnswer: "all_matched"
      },
      {
        id: "act-ko-502-5",
        type: "audio_listen",
        skill: "listening",
        question: "Lắng nghe và chọn đáp án chính xác:",
        prompt: "Jihacheol",
        options: ["Tàu điện ngầm","Xe buýt","Máy bay","Tàu hỏa"],
        correctAnswer: "Tàu điện ngầm"
      }
    ]
  },
  {
    id: "lesson-ko-503",
    unitId: "unit-ko-5",
    title: "Nhận Phòng Khách Sạn (Hotel Check-in)",
    description: "Đặt phòng và check-in khách sạn tại Seoul.",
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
      { id: "v-ko-503-1", word: "Hotel", translation: "Khách sạn", phonetic: "hoh-tel" },
      { id: "v-ko-503-2", word: "Yeyak", translation: "Đặt trước", phonetic: "yeh-yahk" },
      { id: "v-ko-503-3", word: "Bang", translation: "Phòng", phonetic: "bahng" },
      { id: "v-ko-503-4", word: "Yeolsoe", translation: "Chìa khóa", phonetic: "yohl-sweh" },
      { id: "v-ko-503-5", word: "Wi-Fi", translation: "Mạng wifi", phonetic: "wah-ee-fahy" }
    ],
    phrases: [
      { id: "p-ko-503-1", text: "Yeyak-haesseoyo. Je ireum-eun Alex-yeyo.", translation: "Tôi đã đặt phòng trước, tên tôi là Alex." },
      { id: "p-ko-503-2", text: "Wi-Fi bimilbeonho-ga mwoyeyo?", translation: "Mật khẩu wifi là gì vậy ạ?" }
    ],
    activities: [
      {
        id: "act-ko-503-1",
        type: "multiple_choice",
        skill: "reading",
        question: "'Yeyak' nghĩa là gì?",
        options: ["Đặt trước","Hủy phòng","Trả phòng","Thuê xe"],
        correctAnswer: "Đặt trước"
      },
      {
        id: "act-ko-503-2",
        type: "fill_blank",
        skill: "writing",
        question: "Điền từ: 'Bang _____ juseyo.' (chìa khóa)",
        prompt: "Điền từ: 'Bang _____ juseyo.' (chìa khóa)",
        options: ["yeolsoe","hotel","yeyak","wi-fi"],
        correctAnswer: "yeolsoe"
      },
      {
        id: "act-ko-503-3",
        type: "multiple_choice",
        skill: "reading",
        question: "Dịch: 'Bang yeolsoe juseyo'",
        options: ["Cho tôi xin chìa khóa phòng","Cho tôi xem phòng","Đổi phòng giúp tôi","Tính tiền phòng"],
        correctAnswer: "Cho tôi xin chìa khóa phòng"
      },
      {
        id: "act-ko-503-4",
        type: "match_pairs",
        skill: "reading",
        question: "Ghép các cặp từ vựng với nghĩa tiếng Việt tương ứng",
        pairs: [{"left":"Hotel","right":"Khách sạn"},{"left":"Yeyak","right":"Đặt trước"},{"left":"Bang","right":"Phòng"},{"left":"Yeolsoe","right":"Chìa khóa"}],
        correctAnswer: "all_matched"
      },
      {
        id: "act-ko-503-5",
        type: "audio_listen",
        skill: "listening",
        question: "Lắng nghe và chọn đáp án chính xác:",
        prompt: "Hotel",
        options: ["Đặt trước","Hủy phòng","Trả phòng","Thuê xe"],
        correctAnswer: "Đặt trước"
      }
    ]
  },
  {
    id: "lesson-ko-504",
    unitId: "unit-ko-5",
    title: "Sân Bay Quốc Tế Incheon (Gonghang)",
    description: "Thủ tục sân bay, vé máy bay và hành lý ký gửi.",
    type: "standard",
    xp: 15,
    estimatedMinutes: 5,
    order: 4,
    status: "available",
    goals: [
      { id: "g1", description: "Nắm vững các từ vựng chủ đề Sân Bay Quốc Tế Incheon (Gonghang)" },
      { id: "g2", description: "Luyện phát âm chuẩn và phản xạ câu qua các bài tập tương tác" }
    ],
    vocabulary: [
      { id: "v-ko-504-1", word: "Gonghang", translation: "Sân bay", phonetic: "gohng-hahng" },
      { id: "v-ko-504-2", word: "Bihaenggi", translation: "Máy bay", phonetic: "bee-heng-gee" },
      { id: "v-ko-504-3", word: "Jim", translation: "Hành lý", phonetic: "jeem" },
      { id: "v-ko-504-4", word: "Yeogwon", translation: "Hộ chiếu", phonetic: "yoh-gwohn" },
      { id: "v-ko-504-5", word: "Pyopyo", translation: "Vé", phonetic: "pyoh" }
    ],
    phrases: [
      { id: "p-ko-504-1", text: "Yeogwon jom boyeo juseyo.", translation: "Làm ơn cho tôi xem hộ chiếu." },
      { id: "p-ko-504-2", text: "Incheon gonghang-euro gajuseyo.", translation: "Làm ơn đưa tôi đến sân bay Incheon." }
    ],
    activities: [
      {
        id: "act-ko-504-1",
        type: "multiple_choice",
        skill: "reading",
        question: "'Yeogwon' là gì?",
        options: ["Hộ chiếu","Vé máy bay","Hành lý","Ví tiền"],
        correctAnswer: "Hộ chiếu"
      },
      {
        id: "act-ko-504-2",
        type: "fill_blank",
        skill: "writing",
        question: "Điền từ: 'Igeo je _____ ieyo.' (hành lý của tôi)",
        prompt: "Điền từ: 'Igeo je _____ ieyo.' (hành lý của tôi)",
        options: ["jim","gonghang","yeogwon","pyo"],
        correctAnswer: "jim"
      },
      {
        id: "act-ko-504-3",
        type: "multiple_choice",
        skill: "reading",
        question: "Dịch: 'Incheon gonghang'",
        options: ["Sân bay Incheon","Ga Incheon","Khách sạn Incheon","Cảng Incheon"],
        correctAnswer: "Sân bay Incheon"
      },
      {
        id: "act-ko-504-4",
        type: "match_pairs",
        skill: "reading",
        question: "Ghép các cặp từ vựng với nghĩa tiếng Việt tương ứng",
        pairs: [{"left":"Gonghang","right":"Sân bay"},{"left":"Bihaenggi","right":"Máy bay"},{"left":"Jim","right":"Hành lý"},{"left":"Yeogwon","right":"Hộ chiếu"}],
        correctAnswer: "all_matched"
      },
      {
        id: "act-ko-504-5",
        type: "audio_listen",
        skill: "listening",
        question: "Lắng nghe và chọn đáp án chính xác:",
        prompt: "Gonghang",
        options: ["Hộ chiếu","Vé máy bay","Hành lý","Ví tiền"],
        correctAnswer: "Hộ chiếu"
      }
    ]
  },
  {
    id: "lesson-ko-505",
    unitId: "unit-ko-5",
    title: "AI Practice: Đi Tàu Điện Ngầm & Hỏi Đường",
    description: "Thực hành hỏi nhân viên trạm tàu Hyunjin cách đi tới tháp N Seoul Tower.",
    type: "audio_ai",
    xp: 25,
    estimatedMinutes: 5,
    order: 5,
    heroImage: images.mascotWelcome,
    status: "available",
    goals: [
      { id: "g1", description: "Luyện phản xạ giao tiếp thực tế với AI Teacher Minho" },
      { id: "g2", description: "Vận dụng từ vựng trọng tâm vào ngữ cảnh hội thoại tự nhiên" }
    ],
    vocabulary: [
      { id: "v-ai-ko-5-1", word: "Eodi", translation: "Ở đâu" },
      { id: "v-ai-ko-5-2", word: "Jihacheol", translation: "Tàu điện ngầm" },
      { id: "v-ai-ko-5-3", word: "Yeok", translation: "Ga / Trạm tàu" },
      { id: "v-ai-ko-5-4", word: "Oreunjjok", translation: "Bên phải" },
      { id: "v-ai-ko-5-5", word: "T-money", translation: "Thẻ giao thông T-money" }
    ],
    phrases: [],
    activities: [],
    aiTeacherPrompt: {
      scenario: "Trung tâm hỗ trợ du khách tại ga Myeongdong Seoul",
      systemPrompt: "You are Minho, a warm, human, and energetic Korean teacher. Speak mostly in English for clear guidance. Introduce Korean words slowly: say the word once, give the English translation, and invite the student to repeat after you. Keep every reply strictly to 1 or 2 conversational sentences with friendly contractions (I'm, let's, that's). Listen closely to the student, praise correct pronunciation, and gently model errors again: 'So close! Try saying —'. Stay strictly on lesson words: Eodi, Jihacheol, Yeok, Oreunjjok, T-money. Never switch topics.",
      initialGreeting: "Annyeonghaseyo! Myeongdong-e osin geol hwanyeonghamnida. Eodi-ro gaseyo?",
      targetVocabulary: ["Eodi","Jihacheol","Yeok","Oreunjjok","T-money"],
      suggestedResponses: ["N Seoul Tower eotteoke gayo?","T-money kadeu eodieyo?","Gamsahamnida!"],
      difficulty: "beginner"
    }
  },
  {
    id: "lesson-ko-601",
    unitId: "unit-ko-6",
    title: "Mua Sắm Myeongdong (Syoping & Gak)",
    description: "Hỏi giá và xin giảm giá tại phố mua sắm Myeongdong.",
    type: "standard",
    xp: 15,
    estimatedMinutes: 5,
    order: 1,
    status: "available",
    goals: [
      { id: "g1", description: "Nắm vững các từ vựng chủ đề Mua Sắm Myeongdong (Syoping & Gak)" },
      { id: "g2", description: "Luyện phát âm chuẩn và phản xạ câu qua các bài tập tương tác" }
    ],
    vocabulary: [
      { id: "v-ko-601-1", word: "Syoping", translation: "Mua sắm", phonetic: "shyoh-peeng" },
      { id: "v-ko-601-2", word: "Igeo", translation: "Cái này", phonetic: "ee-goh" },
      { id: "v-ko-601-3", word: "Bissayo", translation: "Đắt tiền quá", phonetic: "beess-sah-yoh" },
      { id: "v-ko-601-4", word: "Kkakka juseyo", translation: "Bớt giá cho tôi nhé", phonetic: "kkahk-kkah joo-seh-yoh" },
      { id: "v-ko-601-5", word: "Igeo juseyo", translation: "Cho tôi lấy cái này", phonetic: "ee-goh joo-seh-yoh" }
    ],
    phrases: [
      { id: "p-ko-601-1", text: "Neomu bissayo! Jom kkakka juseyo.", translation: "Đắt quá! Bớt cho tôi một chút đi mà." },
      { id: "p-ko-601-2", text: "Igeo hana juseyo.", translation: "Cho tôi lấy một cái này." }
    ],
    activities: [
      {
        id: "act-ko-601-1",
        type: "multiple_choice",
        skill: "reading",
        question: "Câu mặc cả nổi tiếng khi mua sắm ở Hàn Quốc là gì?",
        options: ["Kkakka juseyo","Gamsahamnida","Annyeonghaseyo","Mas-isseoyo"],
        correctAnswer: "Kkakka juseyo"
      },
      {
        id: "act-ko-601-2",
        type: "fill_blank",
        skill: "writing",
        question: "Điền từ: 'Jom _____ juseyo.' (bớt giá cho tôi)",
        prompt: "Điền từ: 'Jom _____ juseyo.' (bớt giá cho tôi)",
        options: ["kkakka","bissayo","syoping","igeo"],
        correctAnswer: "kkakka"
      },
      {
        id: "act-ko-601-3",
        type: "multiple_choice",
        skill: "reading",
        question: "Dịch: 'Bissayo'",
        options: ["Đắt quá","Rẻ quá","Đẹp quá","Ngon quá"],
        correctAnswer: "Đắt quá"
      },
      {
        id: "act-ko-601-4",
        type: "match_pairs",
        skill: "reading",
        question: "Ghép các cặp từ vựng với nghĩa tiếng Việt tương ứng",
        pairs: [{"left":"Syoping","right":"Mua sắm"},{"left":"Igeo","right":"Cái này"},{"left":"Bissayo","right":"Đắt tiền quá"},{"left":"Kkakka juseyo","right":"Bớt giá cho tôi nhé"}],
        correctAnswer: "all_matched"
      },
      {
        id: "act-ko-601-5",
        type: "audio_listen",
        skill: "listening",
        question: "Lắng nghe và chọn đáp án chính xác:",
        prompt: "Syoping",
        options: ["Kkakka juseyo","Gamsahamnida","Annyeonghaseyo","Mas-isseoyo"],
        correctAnswer: "Kkakka juseyo"
      }
    ]
  },
  {
    id: "lesson-ko-602",
    unitId: "unit-ko-6",
    title: "Hẹn Gặp Cuối Tuần (Yaksok)",
    description: "Hẹn giờ và rủ bạn bè đi cà phê dạo phố.",
    type: "standard",
    xp: 15,
    estimatedMinutes: 5,
    order: 2,
    status: "available",
    goals: [
      { id: "g1", description: "Nắm vững các từ vựng chủ đề Hẹn Gặp Cuối Tuần (Yaksok)" },
      { id: "g2", description: "Luyện phát âm chuẩn và phản xạ câu qua các bài tập tương tác" }
    ],
    vocabulary: [
      { id: "v-ko-602-1", word: "Gachi", translation: "Cùng nhau", phonetic: "gah-chee" },
      { id: "v-ko-602-2", word: "Gaja", translation: "Đi thôi nào!", phonetic: "gah-jah" },
      { id: "v-ko-602-3", word: "Jumal", translation: "Cuối tuần", phonetic: "joo-mahl" },
      { id: "v-ko-602-4", word: "Sigani isseoyo?", translation: "Bạn có rảnh không?", phonetic: "shee-gahn-ee eess-oh-yoh" },
      { id: "v-ko-602-5", word: "Joh-ayo", translation: "Được đấy / Đồng ý", phonetic: "joh-ah-yoh" }
    ],
    phrases: [
      { id: "p-ko-602-1", text: "Uri gachi kape gaja!", translation: "Tụi mình cùng đi quán cà phê đi!" },
      { id: "p-ko-602-2", text: "Jumal-e sigan isseoyo?", translation: "Cuối tuần này bạn có thời gian rảnh không?" }
    ],
    activities: [
      {
        id: "act-ko-602-1",
        type: "multiple_choice",
        skill: "reading",
        question: "'Gachi gaja!' có nghĩa là gì?",
        options: ["Cùng nhau đi thôi nào!","Đi về đi","Ăn cơm đi","Đi ngủ đi"],
        correctAnswer: "Cùng nhau đi thôi nào!"
      },
      {
        id: "act-ko-602-2",
        type: "fill_blank",
        skill: "writing",
        question: "Điền từ: 'Uri _____ kape gaja.' (cùng nhau)",
        prompt: "Điền từ: 'Uri _____ kape gaja.' (cùng nhau)",
        options: ["gachi","jumal","sigan","joh-ayo"],
        correctAnswer: "gachi"
      },
      {
        id: "act-ko-602-3",
        type: "multiple_choice",
        skill: "reading",
        question: "Dịch: 'Joh-ayo!'",
        options: ["Được đấy / Đồng ý!","Không được đâu","Tạm biệt","Cảm ơn"],
        correctAnswer: "Được đấy / Đồng ý!"
      },
      {
        id: "act-ko-602-4",
        type: "match_pairs",
        skill: "reading",
        question: "Ghép các cặp từ vựng với nghĩa tiếng Việt tương ứng",
        pairs: [{"left":"Gachi","right":"Cùng nhau"},{"left":"Gaja","right":"Đi thôi nào!"},{"left":"Jumal","right":"Cuối tuần"},{"left":"Sigani isseoyo?","right":"Bạn có rảnh không?"}],
        correctAnswer: "all_matched"
      },
      {
        id: "act-ko-602-5",
        type: "audio_listen",
        skill: "listening",
        question: "Lắng nghe và chọn đáp án chính xác:",
        prompt: "Gachi",
        options: ["Cùng nhau đi thôi nào!","Đi về đi","Ăn cơm đi","Đi ngủ đi"],
        correctAnswer: "Cùng nhau đi thôi nào!"
      }
    ]
  },
  {
    id: "lesson-ko-603",
    unitId: "unit-ko-6",
    title: "Nghề Nghiệp & Công Việc (Jigeop)",
    description: "Giới thiệu nghề nghiệp: học sinh, giáo viên, nhân viên.",
    type: "standard",
    xp: 15,
    estimatedMinutes: 5,
    order: 3,
    status: "available",
    goals: [
      { id: "g1", description: "Nắm vững các từ vựng chủ đề Nghề Nghiệp & Công Việc (Jigeop)" },
      { id: "g2", description: "Luyện phát âm chuẩn và phản xạ câu qua các bài tập tương tác" }
    ],
    vocabulary: [
      { id: "v-ko-603-1", word: "Jigeop", translation: "Nghề nghiệp", phonetic: "jee-gohp" },
      { id: "v-ko-603-2", word: "Haksaeng", translation: "Học sinh / Sinh viên", phonetic: "hahk-seng" },
      { id: "v-ko-603-3", word: "Seonsaengnim", translation: "Thầy cô giáo", phonetic: "sohn-seng-neem" },
      { id: "v-ko-603-4", word: "Hoesawon", translation: "Nhân viên công ty", phonetic: "hweh-sah-wohn" },
      { id: "v-ko-603-5", word: "Uisa", translation: "Bác sĩ", phonetic: "wee-sah" }
    ],
    phrases: [
      { id: "p-ko-603-1", text: "Jigeop-i mwoyeyo?", translation: "Nghề nghiệp của bạn là gì?" },
      { id: "p-ko-603-2", text: "Jeoneun hoesawon-ieyo.", translation: "Tôi là nhân viên công ty." }
    ],
    activities: [
      {
        id: "act-ko-603-1",
        type: "multiple_choice",
        skill: "reading",
        question: "'Haksaeng' nghĩa là gì?",
        options: ["Học sinh / Sinh viên","Giáo viên","Bác sĩ","Ca sĩ"],
        correctAnswer: "Học sinh / Sinh viên"
      },
      {
        id: "act-ko-603-2",
        type: "fill_blank",
        skill: "writing",
        question: "Điền từ: 'Jeoneun _____ ieyo.' (sinh viên)",
        prompt: "Điền từ: 'Jeoneun _____ ieyo.' (sinh viên)",
        options: ["haksaeng","jigeop","uisa","hoesawon"],
        correctAnswer: "haksaeng"
      },
      {
        id: "act-ko-603-3",
        type: "multiple_choice",
        skill: "reading",
        question: "Dịch: 'Jeoneun seonsaengnim-ieyo'",
        options: ["Tôi là giáo viên","Tôi là học sinh","Tôi là bác sĩ","Tôi là nhân viên"],
        correctAnswer: "Tôi là giáo viên"
      },
      {
        id: "act-ko-603-4",
        type: "match_pairs",
        skill: "reading",
        question: "Ghép các cặp từ vựng với nghĩa tiếng Việt tương ứng",
        pairs: [{"left":"Jigeop","right":"Nghề nghiệp"},{"left":"Haksaeng","right":"Học sinh / Sinh viên"},{"left":"Seonsaengnim","right":"Thầy cô giáo"},{"left":"Hoesawon","right":"Nhân viên công ty"}],
        correctAnswer: "all_matched"
      },
      {
        id: "act-ko-603-5",
        type: "audio_listen",
        skill: "listening",
        question: "Lắng nghe và chọn đáp án chính xác:",
        prompt: "Jigeop",
        options: ["Học sinh / Sinh viên","Giáo viên","Bác sĩ","Ca sĩ"],
        correctAnswer: "Học sinh / Sinh viên"
      }
    ]
  },
  {
    id: "lesson-ko-604",
    unitId: "unit-ko-6",
    title: "Trường Hợp Cần Giúp Đỡ (Dowa juseyo!)",
    description: "Kêu gọi giúp đỡ và tìm bệnh viện, đồn cảnh sát.",
    type: "standard",
    xp: 15,
    estimatedMinutes: 5,
    order: 4,
    status: "available",
    goals: [
      { id: "g1", description: "Nắm vững các từ vựng chủ đề Trường Hợp Cần Giúp Đỡ (Dowa juseyo!)" },
      { id: "g2", description: "Luyện phát âm chuẩn và phản xạ câu qua các bài tập tương tác" }
    ],
    vocabulary: [
      { id: "v-ko-604-1", word: "Dowa juseyo", translation: "Làm ơn giúp tôi với", phonetic: "doh-wah joo-seh-yoh" },
      { id: "v-ko-604-2", word: "Byeong-won", translation: "Bệnh viện", phonetic: "byohng-wohn" },
      { id: "v-ko-604-3", word: "Gyeongchalseo", translation: "Đồn cảnh sát", phonetic: "gyohng-chahl-soh" },
      { id: "v-ko-604-4", word: "Apado", translation: "Bị ốm / Bị đau", phonetic: "ah-pah-doh" },
      { id: "v-ko-604-5", word: "Yag-guk", translation: "Hiệu thuốc", phonetic: "yahk-gook" }
    ],
    phrases: [
      { id: "p-ko-604-1", text: "Dowa juseyo! Bae-ga neomu apayo.", translation: "Cứu tôi với! Bụng tôi đau quá." },
      { id: "p-ko-604-2", text: "Geuncheo-e byeong-won-i eodieyo?", translation: "Gần đây bệnh viện ở đâu vậy ạ?" }
    ],
    activities: [
      {
        id: "act-ko-604-1",
        type: "multiple_choice",
        skill: "reading",
        question: "Khi cần ai đó giúp đỡ, bạn nói câu gì?",
        options: ["Dowa juseyo!","Gamsahamnida!","Annyeong!","Mas-isseoyo!"],
        correctAnswer: "Dowa juseyo!"
      },
      {
        id: "act-ko-604-2",
        type: "fill_blank",
        skill: "writing",
        question: "Điền từ: 'Jeongmal _____!' (làm ơn giúp tôi)",
        prompt: "Điền từ: 'Jeongmal _____!' (làm ơn giúp tôi)",
        options: ["dowa juseyo","gamsahamnida","mianhaeyo","annyeong"],
        correctAnswer: "dowa juseyo"
      },
      {
        id: "act-ko-604-3",
        type: "multiple_choice",
        skill: "reading",
        question: "Dịch: 'Byeong-won-i eodieyo?'",
        options: ["Bệnh viện ở đâu vậy?","Đồn cảnh sát ở đâu?","Hiệu thuốc ở đâu?","Nhà vệ sinh ở đâu?"],
        correctAnswer: "Bệnh viện ở đâu vậy?"
      },
      {
        id: "act-ko-604-4",
        type: "match_pairs",
        skill: "reading",
        question: "Ghép các cặp từ vựng với nghĩa tiếng Việt tương ứng",
        pairs: [{"left":"Dowa juseyo","right":"Làm ơn giúp tôi với"},{"left":"Byeong-won","right":"Bệnh viện"},{"left":"Gyeongchalseo","right":"Đồn cảnh sát"},{"left":"Apado","right":"Bị ốm / Bị đau"}],
        correctAnswer: "all_matched"
      },
      {
        id: "act-ko-604-5",
        type: "audio_listen",
        skill: "listening",
        question: "Lắng nghe và chọn đáp án chính xác:",
        prompt: "Dowa juseyo",
        options: ["Dowa juseyo!","Gamsahamnida!","Annyeong!","Mas-isseoyo!"],
        correctAnswer: "Dowa juseyo!"
      }
    ]
  },
  {
    id: "lesson-ko-605",
    unitId: "unit-ko-6",
    title: "AI Practice: Tốt Nghiệp Khóa Học Tiếng Hàn",
    description: "Trò chuyện tự do cùng Ha-neul ăn mừng bạn đã hoàn thành trọn vẹn 6 Unit tiếng Hàn!",
    type: "audio_ai",
    xp: 25,
    estimatedMinutes: 5,
    order: 5,
    heroImage: images.mascotWelcome,
    status: "available",
    goals: [
      { id: "g1", description: "Luyện phản xạ giao tiếp thực tế với AI Teacher Minho" },
      { id: "g2", description: "Vận dụng từ vựng trọng tâm vào ngữ cảnh hội thoại tự nhiên" }
    ],
    vocabulary: [
      { id: "v-ai-ko-6-1", word: "Chukhahamnida", translation: "Chúc mừng" },
      { id: "v-ai-ko-6-2", word: "Hanguk", translation: "Hàn Quốc" },
      { id: "v-ai-ko-6-3", word: "Chingu", translation: "Bạn bè" },
      { id: "v-ai-ko-6-4", word: "Johahaeyo", translation: "Thích" },
      { id: "v-ai-ko-6-5", word: "Gamsahamnida", translation: "Cảm ơn (trang trọng)" }
    ],
    phrases: [],
    activities: [],
    aiTeacherPrompt: {
      scenario: "Buổi dã ngoại ngắm sông Hàn (Han River) thơ mộng",
      systemPrompt: "You are Minho, a warm, human, and energetic Korean teacher. Speak mostly in English for clear guidance. Introduce Korean words slowly: say the word once, give the English translation, and invite the student to repeat after you. Keep every reply strictly to 1 or 2 conversational sentences with friendly contractions (I'm, let's, that's). Listen closely to the student, praise correct pronunciation, and gently model errors again: 'So close! Try saying —'. Stay strictly on lesson words: Chukhahamnida, Hanguk, Chingu, Johahaeyo, Gamsahamnida. Never switch topics.",
      initialGreeting: "Chukhahamnida! Bạn đã hoàn thành xuất sắc 6 Unit tiếng Hàn. Hôm nay hãy cùng ngồi bên sông Hàn trò chuyện tự do nhé!",
      targetVocabulary: ["Chukhahamnida","Hanguk","Chingu","Johahaeyo","Gamsahamnida"],
      suggestedResponses: ["Gamsahamnida! Hanguk-e kkok gal geo-yeyo.","Tteokbokki-ga jinjja mas-isseoyo!","Hanguk-eo jaemi-isseoyo!"],
      difficulty: "beginner"
    }
  },
  {
    id: "lesson-ko-701",
    unitId: "unit-ko-7",
    title: "Hôm Qua Bạn Đã Làm Gì? (Quá khứ ~ass/eoss-eo-yo)",
    description: "Học cách chia động từ ở thì quá khứ thân mật lịch sự ~ass/eoss-eo-yo.",
    type: "standard",
    xp: 15,
    estimatedMinutes: 5,
    order: 1,
    status: "available",
    goals: [
      { id: "g1", description: "Nắm vững các từ vựng chủ đề Hôm Qua Bạn Đã Làm Gì? (Quá khứ ~ass/eoss-eo-yo)" },
      { id: "g2", description: "Luyện phát âm chuẩn và phản xạ câu qua các bài tập tương tác" }
    ],
    vocabulary: [
      { id: "v-ko-701-1", word: "어제 (Eoje)", translation: "Hôm qua", phonetic: "eo-je" },
      { id: "v-ko-701-2", word: "갔어요 (Gasseoyo)", translation: "Đã đi (quá khứ của gada)", phonetic: "gat-seo-yo" },
      { id: "v-ko-701-3", word: "먹었어요 (Meogeosseoyo)", translation: "Đã ăn (quá khứ của meokda)", phonetic: "meo-geot-seo-yo" },
      { id: "v-ko-701-4", word: "봤어요 (Bwasseoyo)", translation: "Đã xem / Đã thấy (boda)", phonetic: "bwat-seo-yo" },
      { id: "v-ko-701-5", word: "샀어요 (Sasseoyo)", translation: "Đã mua (sada)", phonetic: "sat-seo-yo" }
    ],
    phrases: [
      { id: "p-ko-701-1", text: "어제 친구와 함께 공원에 갔어요.", translation: "Hôm qua tôi đã đi đến công viên cùng với bạn." },
      { id: "p-ko-701-2", text: "주말에 무엇을 했어요?", translation: "Vào cuối tuần bạn đã làm gì vậy?" }
    ],
    activities: [
      {
        id: "act-ko-701-1",
        type: "multiple_choice",
        skill: "reading",
        question: "'어제' (Eoje) có nghĩa là gì trong tiếng Hàn?",
        options: ["Hôm qua","Hôm nay","Ngày mai","Tuần sau"],
        correctAnswer: "Hôm qua"
      },
      {
        id: "act-ko-701-2",
        type: "fill_blank",
        skill: "writing",
        question: "Điền từ: '어제 카페에 _____.' (đã đi)",
        prompt: "Điền từ: '어제 카페에 _____.' (đã đi)",
        options: ["갔어요","가요","갈 거예요","가세요"],
        correctAnswer: "갔어요"
      },
      {
        id: "act-ko-701-3",
        type: "multiple_choice",
        skill: "reading",
        question: "Dịch: '영화 봤어요' (Yeonghwa bwasseoyo)",
        options: ["Tôi đã xem phim","Tôi đi làm","Tôi ăn tối","Tôi đi ngủ"],
        correctAnswer: "Tôi đã xem phim"
      },
      {
        id: "act-ko-701-4",
        type: "match_pairs",
        skill: "reading",
        question: "Ghép các cặp từ vựng với nghĩa tiếng Việt tương ứng",
        pairs: [{"left":"어제 (Eoje)","right":"Hôm qua"},{"left":"갔어요 (Gasseoyo)","right":"Đã đi (quá khứ của gada)"},{"left":"먹었어요 (Meogeosseoyo)","right":"Đã ăn (quá khứ của meokda)"},{"left":"봤어요 (Bwasseoyo)","right":"Đã xem / Đã thấy (boda)"}],
        correctAnswer: "all_matched"
      },
      {
        id: "act-ko-701-5",
        type: "audio_listen",
        skill: "listening",
        question: "Lắng nghe và chọn đáp án chính xác:",
        prompt: "어제 (Eoje)",
        options: ["Hôm qua","Hôm nay","Ngày mai","Tuần sau"],
        correctAnswer: "Hôm qua"
      }
    ]
  },
  {
    id: "lesson-ko-702",
    unitId: "unit-ko-7",
    title: "Kỷ Niệm Tuổi Thơ (Eoril ttae)",
    description: "Kể về quê hương và những ký ức ngọt ngào thuở ấu thơ.",
    type: "standard",
    xp: 15,
    estimatedMinutes: 5,
    order: 2,
    status: "available",
    goals: [
      { id: "g1", description: "Nắm vững các từ vựng chủ đề Kỷ Niệm Tuổi Thơ (Eoril ttae)" },
      { id: "g2", description: "Luyện phát âm chuẩn và phản xạ câu qua các bài tập tương tác" }
    ],
    vocabulary: [
      { id: "v-ko-702-1", word: "어릴 때 (Eoril ttae)", translation: "Thuở nhỏ / Thời thơ ấu", phonetic: "eo-ril ttae" },
      { id: "v-ko-702-2", word: "자랐어요 (Jarasseoyo)", translation: "Đã lớn lên / Trưởng thành", phonetic: "ja-rat-seo-yo" },
      { id: "v-ko-702-3", word: "고향 (Gohyang)", translation: "Quê hương", phonetic: "go-hyang" },
      { id: "v-ko-702-4", word: "자주 (Jaju)", translation: "Thường xuyên / Thường hay", phonetic: "ja-ju" },
      { id: "v-ko-702-5", word: "추억 (Chueok)", translation: "Kỷ niệm / Ký ức", phonetic: "chu-eok" }
    ],
    phrases: [
      { id: "p-ko-702-1", text: "저는 조용한 시골 마을에서 자랐어요.", translation: "Tôi đã lớn lên ở một ngôi làng quê yên tĩnh." },
      { id: "p-ko-702-2", text: "어릴 때 친구들과 자주 축구를 했어요.", translation: "Hồi còn nhỏ tôi thường hay đá bóng cùng bạn bè." }
    ],
    activities: [
      {
        id: "act-ko-702-1",
        type: "multiple_choice",
        skill: "reading",
        question: "'추억' (Chueok) có nghĩa là gì?",
        options: ["Kỷ niệm / Ký ức","Công việc","Trường học","Kỳ nghỉ"],
        correctAnswer: "Kỷ niệm / Ký ức"
      },
      {
        id: "act-ko-702-2",
        type: "fill_blank",
        skill: "writing",
        question: "Điền từ: '서울에서 _____.' (đã lớn lên)",
        prompt: "Điền từ: '서울에서 _____.' (đã lớn lên)",
        options: ["자랐어요","추억","고향","어릴 때"],
        correctAnswer: "자랐어요"
      },
      {
        id: "act-ko-702-3",
        type: "multiple_choice",
        skill: "reading",
        question: "Dịch: '나의 고향' (Na-ui gohyang)",
        options: ["Quê hương của tôi","Trường học của tôi","Nhà của tôi","Xe của tôi"],
        correctAnswer: "Quê hương của tôi"
      },
      {
        id: "act-ko-702-4",
        type: "match_pairs",
        skill: "reading",
        question: "Ghép các cặp từ vựng với nghĩa tiếng Việt tương ứng",
        pairs: [{"left":"어릴 때 (Eoril ttae)","right":"Thuở nhỏ / Thời thơ ấu"},{"left":"자랐어요 (Jarasseoyo)","right":"Đã lớn lên / Trưởng thành"},{"left":"고향 (Gohyang)","right":"Quê hương"},{"left":"자주 (Jaju)","right":"Thường xuyên / Thường hay"}],
        correctAnswer: "all_matched"
      },
      {
        id: "act-ko-702-5",
        type: "audio_listen",
        skill: "listening",
        question: "Lắng nghe và chọn đáp án chính xác:",
        prompt: "어릴 때 (Eoril ttae)",
        options: ["Kỷ niệm / Ký ức","Công việc","Trường học","Kỳ nghỉ"],
        correctAnswer: "Kỷ niệm / Ký ức"
      }
    ]
  },
  {
    id: "lesson-ko-703",
    unitId: "unit-ko-7",
    title: "Chuyến Du Lịch Đáng Nhớ (Ijeul su eomneun yeohaeng)",
    description: "Kể lại chuyến du lịch đáng nhớ và những trải nghiệm khó quên.",
    type: "standard",
    xp: 15,
    estimatedMinutes: 5,
    order: 3,
    status: "available",
    goals: [
      { id: "g1", description: "Nắm vững các từ vựng chủ đề Chuyến Du Lịch Đáng Nhớ (Ijeul su eomneun yeohaeng)" },
      { id: "g2", description: "Luyện phát âm chuẩn và phản xạ câu qua các bài tập tương tác" }
    ],
    vocabulary: [
      { id: "v-ko-703-1", word: "여행 (Yeohaeng)", translation: "Chuyến du lịch", phonetic: "yeo-haeng" },
      { id: "v-ko-703-2", word: "잊을 수 없는 (Ijeul su eomneun)", translation: "Không thể nào quên", phonetic: "i-jeul su eom-neun" },
      { id: "v-ko-703-3", word: "방문했어요 (Bangmunhaesseoyo)", translation: "Đã ghé thăm", phonetic: "bang-mun-haet-seo-yo" },
      { id: "v-ko-703-4", word: "만났어요 (Mannasseoyo)", translation: "Đã gặp gỡ", phonetic: "man-nat-seo-yo" },
      { id: "v-ko-703-5", word: "묵었어요 (Mugeosseoyo)", translation: "Đã trọ lại (khách sạn)", phonetic: "mu-geot-seo-yo" }
    ],
    phrases: [
      { id: "p-ko-703-1", text: "작년에 제주도를 여행했어요. 잊을 수 없는 추억이에요.", translation: "Năm ngoái tôi đã đi du lịch đảo Jeju. Thật là kỷ niệm không thể nào quên." },
      { id: "p-ko-703-2", text: "바다가 보이는 좋은 호텔에 묵었어요.", translation: "Tôi đã trọ lại ở một khách sạn đẹp nhìn ra biển." }
    ],
    activities: [
      {
        id: "act-ko-703-1",
        type: "multiple_choice",
        skill: "reading",
        question: "'잊을 수 없는' nghĩa là gì?",
        options: ["Không thể nào quên","Nhàm chán","Nguy hiểm","Đắt đỏ"],
        correctAnswer: "Không thể nào quên"
      },
      {
        id: "act-ko-703-2",
        type: "fill_blank",
        skill: "writing",
        question: "Điền từ: '호텔에 _____.' (đã trọ lại)",
        prompt: "Điền từ: '호텔에 _____.' (đã trọ lại)",
        options: ["묵었어요","먹었어요","샀어요","여행"],
        correctAnswer: "묵었어요"
      },
      {
        id: "act-ko-703-3",
        type: "multiple_choice",
        skill: "reading",
        question: "Dịch: '친구를 만났어요'",
        options: ["Tôi đã gặp bạn bè","Tôi đi làm","Tôi mua sắm","Tôi đọc sách"],
        correctAnswer: "Tôi đã gặp bạn bè"
      },
      {
        id: "act-ko-703-4",
        type: "match_pairs",
        skill: "reading",
        question: "Ghép các cặp từ vựng với nghĩa tiếng Việt tương ứng",
        pairs: [{"left":"여행 (Yeohaeng)","right":"Chuyến du lịch"},{"left":"잊을 수 없는 (Ijeul su eomneun)","right":"Không thể nào quên"},{"left":"방문했어요 (Bangmunhaesseoyo)","right":"Đã ghé thăm"},{"left":"만났어요 (Mannasseoyo)","right":"Đã gặp gỡ"}],
        correctAnswer: "all_matched"
      },
      {
        id: "act-ko-703-5",
        type: "audio_listen",
        skill: "listening",
        question: "Lắng nghe và chọn đáp án chính xác:",
        prompt: "여행 (Yeohaeng)",
        options: ["Không thể nào quên","Nhàm chán","Nguy hiểm","Đắt đỏ"],
        correctAnswer: "Không thể nào quên"
      }
    ]
  },
  {
    id: "lesson-ko-704",
    unitId: "unit-ko-7",
    title: "Kể Chuyện Theo Thứ Tự (Geurigo & Geureogo naseo)",
    description: "Sử dụng từ nối meonjeo, geurigo, geureonikka, majimak-euro.",
    type: "standard",
    xp: 15,
    estimatedMinutes: 5,
    order: 4,
    status: "available",
    goals: [
      { id: "g1", description: "Nắm vững các từ vựng chủ đề Kể Chuyện Theo Thứ Tự (Geurigo & Geureogo naseo)" },
      { id: "g2", description: "Luyện phát âm chuẩn và phản xạ câu qua các bài tập tương tác" }
    ],
    vocabulary: [
      { id: "v-ko-704-1", word: "먼저 (Meonjeo)", translation: "Trước tiên / Đầu tiên", phonetic: "meon-jeo" },
      { id: "v-ko-704-2", word: "그리고 나서 (Geurigo naseo)", translation: "Sau đó rồi...", phonetic: "geu-ri-go na-seo" },
      { id: "v-ko-704-3", word: "갑자기 (Gapjagi)", translation: "Đột nhiên / Bất ngờ", phonetic: "gap-ja-gi" },
      { id: "v-ko-704-4", word: "마지막으로 (Majimak-euro)", translation: "Cuối cùng", phonetic: "ma-ji-mak-eu-ro" },
      { id: "v-ko-704-5", word: "이야기 (Iyagi)", translation: "Câu chuyện", phonetic: "i-ya-gi" }
    ],
    phrases: [
      { id: "p-ko-704-1", text: "먼저 아침을 먹고, 그리고 나서 출발했어요.", translation: "Đầu tiên tôi ăn sáng, rồi sau đó mới khởi hành." },
      { id: "p-ko-704-2", text: "갑자기 비가 내리기 시작했어요.", translation: "Đột nhiên trời bắt đầu đổ cơn mưa." }
    ],
    activities: [
      {
        id: "act-ko-704-1",
        type: "multiple_choice",
        skill: "reading",
        question: "Từ nối nào mang nghĩa 'Đột nhiên / Bất ngờ' trong tiếng Hàn?",
        options: ["갑자기 (Gapjagi)","먼저 (Meonjeo)","마지막으로","그리고 나서"],
        correctAnswer: "갑자기 (Gapjagi)"
      },
      {
        id: "act-ko-704-2",
        type: "fill_blank",
        skill: "writing",
        question: "Điền từ: '_____ 우리가 이겼어요.' (cuối cùng)",
        prompt: "Điền từ: '_____ 우리가 이겼어요.' (cuối cùng)",
        options: ["마지막으로","갑자기","먼저","어제"],
        correctAnswer: "마지막으로"
      },
      {
        id: "act-ko-704-3",
        type: "multiple_choice",
        skill: "reading",
        question: "Dịch: '먼저, 그리고 나서'",
        options: ["Trước tiên và sau đó","Hôm qua và hôm nay","Nhanh và chậm","Vui và buồn"],
        correctAnswer: "Trước tiên và sau đó"
      },
      {
        id: "act-ko-704-4",
        type: "match_pairs",
        skill: "reading",
        question: "Ghép các cặp từ vựng với nghĩa tiếng Việt tương ứng",
        pairs: [{"left":"먼저 (Meonjeo)","right":"Trước tiên / Đầu tiên"},{"left":"그리고 나서 (Geurigo naseo)","right":"Sau đó rồi..."},{"left":"갑자기 (Gapjagi)","right":"Đột nhiên / Bất ngờ"},{"left":"마지막으로 (Majimak-euro)","right":"Cuối cùng"}],
        correctAnswer: "all_matched"
      },
      {
        id: "act-ko-704-5",
        type: "audio_listen",
        skill: "listening",
        question: "Lắng nghe và chọn đáp án chính xác:",
        prompt: "먼저 (Meonjeo)",
        options: ["갑자기 (Gapjagi)","먼저 (Meonjeo)","마지막으로","그리고 나서"],
        correctAnswer: "갑자기 (Gapjagi)"
      }
    ]
  },
  {
    id: "lesson-ko-705",
    unitId: "unit-ko-7",
    title: "AI Practice: Kể Lại Kỷ Niệm Cùng Thầy Minho",
    description: "Luyện phản xạ thì quá khứ ~ass/eoss-eo-yo và kể kỷ niệm với thầy giáo Minho.",
    type: "audio_ai",
    xp: 25,
    estimatedMinutes: 5,
    order: 5,
    heroImage: images.mascotWelcome,
    status: "available",
    goals: [
      { id: "g1", description: "Luyện phản xạ giao tiếp thực tế với AI Teacher Minho" },
      { id: "g2", description: "Vận dụng từ vựng trọng tâm vào ngữ cảnh hội thoại tự nhiên" }
    ],
    vocabulary: [
      { id: "v-ai-ko-7-1", word: "어제", translation: "Hôm qua" },
      { id: "v-ai-ko-7-2", word: "갔어요", translation: "Đã đi" },
      { id: "v-ai-ko-7-3", word: "먹었어요", translation: "Đã ăn" },
      { id: "v-ai-ko-7-4", word: "재미있었어요", translation: "Đã rất thú vị" },
      { id: "v-ai-ko-7-5", word: "추억", translation: "Kỷ niệm" }
    ],
    phrases: [],
    activities: [],
    aiTeacherPrompt: {
      scenario: "Quán cà phê ngắm sông Hàn thơ mộng tại Seoul",
      systemPrompt: "You are Minho, a warm, human, and energetic Korean teacher. Speak mostly in English for clear guidance. Introduce Korean words slowly: say the word once, give the English translation, and invite the student to repeat after you. Keep every reply strictly to 1 or 2 conversational sentences with friendly contractions (I'm, let's, that's). Listen closely to the student, praise correct pronunciation, and gently model errors again: 'So close! Try saying —'. Stay strictly on lesson words: 어제, 갔어요, 먹었어요, 재미있었어요, 추억. Never switch topics.",
      initialGreeting: "안녕하세요! 만나서 반가워요. 어제는 무엇을 하셨어요? 재미있는 추억을 이야기해 주세요.",
      targetVocabulary: ["어제","갔어요","먹었어요","재미있었어요","추억"],
      suggestedResponses: ["어제 친구들과 맛있는 한국 음식을 먹으러 갔어요.","지난 휴가 때 부산을 여행했는데 정말 즐거웠어요.","잊을 수 없는 행복한 추억이에요!"],
      difficulty: "intermediate"
    }
  },
  {
    id: "lesson-ko-801",
    unitId: "unit-ko-8",
    title: "Triệu Chứng Ốm Sốt (~i/ga apayo)",
    description: "Miêu tả các cơn đau và triệu chứng ốm sốt với cấu trúc ~i/ga apayo.",
    type: "standard",
    xp: 15,
    estimatedMinutes: 5,
    order: 1,
    status: "available",
    goals: [
      { id: "g1", description: "Nắm vững các từ vựng chủ đề Triệu Chứng Ốm Sốt (~i/ga apayo)" },
      { id: "g2", description: "Luyện phát âm chuẩn và phản xạ câu qua các bài tập tương tác" }
    ],
    vocabulary: [
      { id: "v-ko-801-1", word: "건강 (Geongang)", translation: "Sức khỏe", phonetic: "geon-gang" },
      { id: "v-ko-801-2", word: "머리가 아파요 (Meoriga apayo)", translation: "Tôi bị đau đầu", phonetic: "meo-ri-ga a-pa-yo" },
      { id: "v-ko-801-3", word: "열이 나요 (Yeori nayo)", translation: "Bị phát sốt", phonetic: "yeo-ri na-yo" },
      { id: "v-ko-801-4", word: "기침을 해요 (Gichimeul haeyo)", translation: "Bị ho", phonetic: "gi-chi-meul hae-yo" },
      { id: "v-ko-801-5", word: "피곤해요 (Pigonhaeyo)", translation: "Mệt mỏi", phonetic: "pi-gon-hae-yo" }
    ],
    phrases: [
      { id: "p-ko-801-1", text: "어제부터 머리가 아프고 열이 나요.", translation: "Từ hôm qua tôi đã bị đau đầu và sốt." },
      { id: "p-ko-801-2", text: "오늘 많이 피곤해 보이네요.", translation: "Hôm nay trông bạn có vẻ mệt mỏi nhiều đấy." }
    ],
    activities: [
      {
        id: "act-ko-801-1",
        type: "multiple_choice",
        skill: "reading",
        question: "'머리가 아파요' (Meoriga apayo) nghĩa là gì?",
        options: ["Tôi bị đau đầu","Tôi bị đau chân","Tôi bị đau răng","Tôi bị đau bụng"],
        correctAnswer: "Tôi bị đau đầu"
      },
      {
        id: "act-ko-801-2",
        type: "fill_blank",
        skill: "writing",
        question: "Điền từ: '배가 _____.' (đau bụng)",
        prompt: "Điền từ: '배가 _____.' (đau bụng)",
        options: ["아파요","열","건강","기침"],
        correctAnswer: "아파요"
      },
      {
        id: "act-ko-801-3",
        type: "multiple_choice",
        skill: "reading",
        question: "Dịch: '열이 나요' (Yeori nayo)",
        options: ["Bị phát sốt","Bị đói bụng","Bị buồn ngủ","Bị đau mắt"],
        correctAnswer: "Bị phát sốt"
      },
      {
        id: "act-ko-801-4",
        type: "match_pairs",
        skill: "reading",
        question: "Ghép các cặp từ vựng với nghĩa tiếng Việt tương ứng",
        pairs: [{"left":"건강 (Geongang)","right":"Sức khỏe"},{"left":"머리가 아파요 (Meoriga apayo)","right":"Tôi bị đau đầu"},{"left":"열이 나요 (Yeori nayo)","right":"Bị phát sốt"},{"left":"기침을 해요 (Gichimeul haeyo)","right":"Bị ho"}],
        correctAnswer: "all_matched"
      },
      {
        id: "act-ko-801-5",
        type: "audio_listen",
        skill: "listening",
        question: "Lắng nghe và chọn đáp án chính xác:",
        prompt: "건강 (Geongang)",
        options: ["Tôi bị đau đầu","Tôi bị đau chân","Tôi bị đau răng","Tôi bị đau bụng"],
        correctAnswer: "Tôi bị đau đầu"
      }
    ]
  },
  {
    id: "lesson-ko-802",
    unitId: "unit-ko-8",
    title: "Tại Bệnh Viện (Byeongwon-eseo)",
    description: "Đăng ký khám bệnh, trao đổi với bác sĩ và nghe lời dặn nghỉ ngơi.",
    type: "standard",
    xp: 15,
    estimatedMinutes: 5,
    order: 2,
    status: "available",
    goals: [
      { id: "g1", description: "Nắm vững các từ vựng chủ đề Tại Bệnh Viện (Byeongwon-eseo)" },
      { id: "g2", description: "Luyện phát âm chuẩn và phản xạ câu qua các bài tập tương tác" }
    ],
    vocabulary: [
      { id: "v-ko-802-1", word: "병원 (Byeongwon)", translation: "Bệnh viện / Phòng khám", phonetic: "byeong-won" },
      { id: "v-ko-802-2", word: "의사 (Uisa)", translation: "Bác sĩ", phonetic: "ui-sa" },
      { id: "v-ko-802-3", word: "처방전 (Cheobangjeon)", translation: "Đơn thuốc của bác sĩ", phonetic: "cheo-bang-jeon" },
      { id: "v-ko-802-4", word: "진료 (Jinryo)", translation: "Khám chữa bệnh", phonetic: "jin-ryo" },
      { id: "v-ko-802-5", word: "쉬다 (Swida)", translation: "Nghỉ ngơi", phonetic: "swi-da" }
    ],
    phrases: [
      { id: "p-ko-802-1", text: "내일 아침에 병원에 진료 받으러 가요.", translation: "Sáng mai tôi đến bệnh viện để khám bệnh." },
      { id: "p-ko-802-2", text: "무리하지 마시고 집에서 푹 쉬세요.", translation: "Đừng quá sức, hãy nghỉ ngơi thật nhiều ở nhà nhé." }
    ],
    activities: [
      {
        id: "act-ko-802-1",
        type: "multiple_choice",
        skill: "reading",
        question: "'처방전' (Cheobangjeon) của bác sĩ là giấy gì?",
        options: ["Đơn thuốc","Hóa đơn viện phí","Thẻ bảo hiểm","Giấy hẹn khám"],
        correctAnswer: "Đơn thuốc"
      },
      {
        id: "act-ko-802-2",
        type: "fill_blank",
        skill: "writing",
        question: "Điền từ: '오늘 집에서 푹 _____.' (nghỉ ngơi)",
        prompt: "Điền từ: '오늘 집에서 푹 _____.' (nghỉ ngơi)",
        options: ["쉬세요","병원","의사","처방전"],
        correctAnswer: "쉬세요"
      },
      {
        id: "act-ko-802-3",
        type: "multiple_choice",
        skill: "reading",
        question: "Dịch: '집에서 푹 쉬세요'",
        options: ["Hãy nghỉ ngơi thật nhiều ở nhà nhé","Hãy đi làm việc đi","Hãy uống nước đi","Hãy ăn cơm đi"],
        correctAnswer: "Hãy nghỉ ngơi thật nhiều ở nhà nhé"
      },
      {
        id: "act-ko-802-4",
        type: "match_pairs",
        skill: "reading",
        question: "Ghép các cặp từ vựng với nghĩa tiếng Việt tương ứng",
        pairs: [{"left":"병원 (Byeongwon)","right":"Bệnh viện / Phòng khám"},{"left":"의사 (Uisa)","right":"Bác sĩ"},{"left":"처방전 (Cheobangjeon)","right":"Đơn thuốc của bác sĩ"},{"left":"진료 (Jinryo)","right":"Khám chữa bệnh"}],
        correctAnswer: "all_matched"
      },
      {
        id: "act-ko-802-5",
        type: "audio_listen",
        skill: "listening",
        question: "Lắng nghe và chọn đáp án chính xác:",
        prompt: "병원 (Byeongwon)",
        options: ["Đơn thuốc","Hóa đơn viện phí","Thẻ bảo hiểm","Giấy hẹn khám"],
        correctAnswer: "Đơn thuốc"
      }
    ]
  },
  {
    id: "lesson-ko-803",
    unitId: "unit-ko-8",
    title: "Mua Thuốc Tại Hiệu Thuốc (Yakkuk)",
    description: "Mua thuốc cảm cúm, viên nén và nghe hướng dẫn uống thuốc.",
    type: "standard",
    xp: 15,
    estimatedMinutes: 5,
    order: 3,
    status: "available",
    goals: [
      { id: "g1", description: "Nắm vững các từ vựng chủ đề Mua Thuốc Tại Hiệu Thuốc (Yakkuk)" },
      { id: "g2", description: "Luyện phát âm chuẩn và phản xạ câu qua các bài tập tương tác" }
    ],
    vocabulary: [
      { id: "v-ko-803-1", word: "약국 (Yakkuk)", translation: "Hiệu thuốc tây", phonetic: "yak-kuk" },
      { id: "v-ko-803-2", word: "약 (Yak)", translation: "Thuốc uống", phonetic: "yak" },
      { id: "v-ko-803-3", word: "알약 (Alyak)", translation: "Viên thuốc nén", phonetic: "al-yak" },
      { id: "v-ko-803-4", word: "감기약 (Gamgiyak)", translation: "Thuốc cảm cúm", phonetic: "gam-gi-yak" },
      { id: "v-ko-803-5", word: "식후 (Sikhu)", translation: "Sau bữa ăn", phonetic: "sik-hu" }
    ],
    phrases: [
      { id: "p-ko-803-1", text: "이 약은 식후 30분에 드세요.", translation: "Thuốc này xin hãy uống sau bữa ăn 30 phút." },
      { id: "p-ko-803-2", text: "효과 좋은 감기약 좀 주세요.", translation: "Xin vui lòng cho tôi loại thuốc cảm cúm hiệu quả tốt." }
    ],
    activities: [
      {
        id: "act-ko-803-1",
        type: "multiple_choice",
        skill: "reading",
        question: "'식후' (Sikhu) chỉ thời điểm nào khi uống thuốc?",
        options: ["Sau bữa ăn","Trước bữa ăn","Trong khi ngủ","Khi vừa thức dậy"],
        correctAnswer: "Sau bữa ăn"
      },
      {
        id: "act-ko-803-2",
        type: "fill_blank",
        skill: "writing",
        question: "Điền từ: '_____에서 약을 샀어요.' (hiệu thuốc)",
        prompt: "Điền từ: '_____에서 약을 샀어요.' (hiệu thuốc)",
        options: ["약국","병원","식후","알약"],
        correctAnswer: "약국"
      },
      {
        id: "act-ko-803-3",
        type: "multiple_choice",
        skill: "reading",
        question: "Dịch: '약을 먹어요' (Yageul meogeoyo)",
        options: ["Uống thuốc","Mua thuốc","Bán thuốc","Khám bệnh"],
        correctAnswer: "Uống thuốc"
      },
      {
        id: "act-ko-803-4",
        type: "match_pairs",
        skill: "reading",
        question: "Ghép các cặp từ vựng với nghĩa tiếng Việt tương ứng",
        pairs: [{"left":"약국 (Yakkuk)","right":"Hiệu thuốc tây"},{"left":"약 (Yak)","right":"Thuốc uống"},{"left":"알약 (Alyak)","right":"Viên thuốc nén"},{"left":"감기약 (Gamgiyak)","right":"Thuốc cảm cúm"}],
        correctAnswer: "all_matched"
      },
      {
        id: "act-ko-803-5",
        type: "audio_listen",
        skill: "listening",
        question: "Lắng nghe và chọn đáp án chính xác:",
        prompt: "약국 (Yakkuk)",
        options: ["Sau bữa ăn","Trước bữa ăn","Trong khi ngủ","Khi vừa thức dậy"],
        correctAnswer: "Sau bữa ăn"
      }
    ]
  },
  {
    id: "lesson-ko-804",
    unitId: "unit-ko-8",
    title: "Lối Sống Khỏe Mạnh (Geonganghan Saenghwal)",
    description: "Lời khuyên rèn luyện sức khỏe, dinh dưỡng và giấc ngủ với '~neun geosi joayo'.",
    type: "standard",
    xp: 15,
    estimatedMinutes: 5,
    order: 4,
    status: "available",
    goals: [
      { id: "g1", description: "Nắm vững các từ vựng chủ đề Lối Sống Khỏe Mạnh (Geonganghan Saenghwal)" },
      { id: "g2", description: "Luyện phát âm chuẩn và phản xạ câu qua các bài tập tương tác" }
    ],
    vocabulary: [
      { id: "v-ko-804-1", word: "운동하다 (Undonghada)", translation: "Tập thể dục thể thao", phonetic: "un-dong-ha-da" },
      { id: "v-ko-804-2", word: "자다 (Jada)", translation: "Ngủ", phonetic: "ja-da" },
      { id: "v-ko-804-3", word: "영양 (Yeongyang)", translation: "Dinh dưỡng", phonetic: "yeong-yang" },
      { id: "v-ko-804-4", word: "~는 것이 좋아요 (~neun geosi joayo)", translation: "Nên làm gì (lời khuyên tốt)", phonetic: "neun geo-si jo-a-yo" },
      { id: "v-ko-804-5", word: "튼튼하다 (Teunteunhada)", translation: "Khỏe khoắn / Chắc khỏe", phonetic: "teun-teun-ha-da" }
    ],
    phrases: [
      { id: "p-ko-804-1", text: "매일 물을 자주 마시는 것이 좋아요.", translation: "Mỗi ngày nên uống nước thường xuyên thì tốt hơn." },
      { id: "p-ko-804-2", text: "건강을 위해 규칙적으로 운동하세요.", translation: "Vì sức khỏe, hãy tập thể dục đều đặn nhé." }
    ],
    activities: [
      {
        id: "act-ko-804-1",
        type: "multiple_choice",
        skill: "reading",
        question: "Mẫu câu '~neun geosi joayo' dùng để diễn đạt điều gì?",
        options: ["Lời khuyên nên làm điều gì","Hỏi đường đi","Chào tạm biệt","Từ chối đề nghị"],
        correctAnswer: "Lời khuyên nên làm điều gì"
      },
      {
        id: "act-ko-804-2",
        type: "fill_blank",
        skill: "writing",
        question: "Điền từ: '일찍 _____ 것이 좋아요.' (ngủ)",
        prompt: "Điền từ: '일찍 _____ 것이 좋아요.' (ngủ)",
        options: ["자는","운동","약국","건강"],
        correctAnswer: "자는"
      },
      {
        id: "act-ko-804-3",
        type: "multiple_choice",
        skill: "reading",
        question: "Dịch: '운동하는 것이 좋아요'",
        options: ["Nên tập thể dục thì tốt","Không nên ăn","Đang ngủ say","Bị ốm nặng"],
        correctAnswer: "Nên tập thể dục thì tốt"
      },
      {
        id: "act-ko-804-4",
        type: "match_pairs",
        skill: "reading",
        question: "Ghép các cặp từ vựng với nghĩa tiếng Việt tương ứng",
        pairs: [{"left":"운동하다 (Undonghada)","right":"Tập thể dục thể thao"},{"left":"자다 (Jada)","right":"Ngủ"},{"left":"영양 (Yeongyang)","right":"Dinh dưỡng"},{"left":"~는 것이 좋아요 (~neun geosi joayo)","right":"Nên làm gì (lời khuyên tốt)"}],
        correctAnswer: "all_matched"
      },
      {
        id: "act-ko-804-5",
        type: "audio_listen",
        skill: "listening",
        question: "Lắng nghe và chọn đáp án chính xác:",
        prompt: "운동하다 (Undonghada)",
        options: ["Lời khuyên nên làm điều gì","Hỏi đường đi","Chào tạm biệt","Từ chối đề nghị"],
        correctAnswer: "Lời khuyên nên làm điều gì"
      }
    ]
  },
  {
    id: "lesson-ko-805",
    unitId: "unit-ko-8",
    title: "AI Practice: Thăm Khám Sức Khỏe Cùng Bác Sĩ Kim",
    description: "Thực hành đối thoại bác sĩ - bệnh nhân bằng tiếng Hàn cùng bác sĩ Kim.",
    type: "audio_ai",
    xp: 25,
    estimatedMinutes: 5,
    order: 5,
    heroImage: images.mascotWelcome,
    status: "available",
    goals: [
      { id: "g1", description: "Luyện phản xạ giao tiếp thực tế với AI Teacher Minho" },
      { id: "g2", description: "Vận dụng từ vựng trọng tâm vào ngữ cảnh hội thoại tự nhiên" }
    ],
    vocabulary: [
      { id: "v-ai-ko-8-1", word: "머리가 아파요", translation: "Tôi bị đau đầu" },
      { id: "v-ai-ko-8-2", word: "열이 나요", translation: "Tôi bị sốt" },
      { id: "v-ai-ko-8-3", word: "약국", translation: "Tiệm thuốc" },
      { id: "v-ai-ko-8-4", word: "쉬세요", translation: "Hãy nghỉ ngơi đi" },
      { id: "v-ai-ko-8-5", word: "식후", translation: "Sau bữa ăn" }
    ],
    phrases: [],
    activities: [],
    aiTeacherPrompt: {
      scenario: "Phòng khám tư ấm cúng ở khu Gangnam, Seoul",
      systemPrompt: "You are Minho, a warm, human, and energetic Korean teacher. Speak mostly in English for clear guidance. Introduce Korean words slowly: say the word once, give the English translation, and invite the student to repeat after you. Keep every reply strictly to 1 or 2 conversational sentences with friendly contractions (I'm, let's, that's). Listen closely to the student, praise correct pronunciation, and gently model errors again: 'So close! Try saying —'. Stay strictly on lesson words: 머리가 아파요, 열이 나요, 약국, 쉬세요, 식후. Never switch topics.",
      initialGreeting: "안녕하세요, 어서 오세요. 어디가 어떻게 불편해서 오셨나요?",
      targetVocabulary: ["머리가 아파요","열이 나요","약국","쉬세요","식후"],
      suggestedResponses: ["선생님, 어제부터 머리가 아프고 열도 많이 나요.","목도 아프고 기침이 계속 나와요.","식후에 먹는 약을 처방해 주세요."],
      difficulty: "intermediate"
    }
  },
  {
    id: "lesson-ko-901",
    unitId: "unit-ko-9",
    title: "Một Ngày Tại Công Ty (Hoesa Saenghwal)",
    description: "Mô tả công việc văn phòng, đồng nghiệp và nếp sinh hoạt công ty Hàn Quốc.",
    type: "standard",
    xp: 15,
    estimatedMinutes: 5,
    order: 1,
    status: "available",
    goals: [
      { id: "g1", description: "Nắm vững các từ vựng chủ đề Một Ngày Tại Công Ty (Hoesa Saenghwal)" },
      { id: "g2", description: "Luyện phát âm chuẩn và phản xạ câu qua các bài tập tương tác" }
    ],
    vocabulary: [
      { id: "v-ko-901-1", word: "회사 (Hoesa)", translation: "Công ty", phonetic: "hoe-sa" },
      { id: "v-ko-901-2", word: "동료 (Dongryo)", translation: "Đồng nghiệp", phonetic: "dong-ryo" },
      { id: "v-ko-901-3", word: "회의 (Hoeui)", translation: "Cuộc họp", phonetic: "hoe-ui" },
      { id: "v-ko-901-4", word: "프로젝트 (Peurojekteu)", translation: "Dự án công việc", phonetic: "peu-ro-jek-teu" },
      { id: "v-ko-901-5", word: "부장님 (Bujangnim)", translation: "Trưởng phòng (kính ngữ)", phonetic: "bu-jang-nim" }
    ],
    phrases: [
      { id: "p-ko-901-1", text: "매주 월요일 아침마다 팀 회의가 있어요.", translation: "Mỗi sáng thứ Hai đều có cuộc họp nhóm." },
      { id: "p-ko-901-2", text: "새로운 프로젝트를 동료와 함께 진행하고 있어요.", translation: "Tôi đang cùng đồng nghiệp tiến hành dự án mới." }
    ],
    activities: [
      {
        id: "act-ko-901-1",
        type: "multiple_choice",
        skill: "reading",
        question: "'동료' (Dongryo) là ai?",
        options: ["Đồng nghiệp","Khách hàng","Thầy giáo","Hàng xóm"],
        correctAnswer: "Đồng nghiệp"
      },
      {
        id: "act-ko-901-2",
        type: "fill_blank",
        skill: "writing",
        question: "Điền từ: '_____와 상의하겠습니다.' (đồng nghiệp)",
        prompt: "Điền từ: '_____와 상의하겠습니다.' (đồng nghiệp)",
        options: ["동료","회의","회사","프로젝트"],
        correctAnswer: "동료"
      },
      {
        id: "act-ko-901-3",
        type: "multiple_choice",
        skill: "reading",
        question: "Dịch: '회의는 10시에 시작해요'",
        options: ["Cuộc họp bắt đầu lúc 10 giờ","Công ty đóng cửa lúc 10h","Giờ ăn trưa lúc 10h","Sếp đến lúc 10h"],
        correctAnswer: "Cuộc họp bắt đầu lúc 10 giờ"
      },
      {
        id: "act-ko-901-4",
        type: "match_pairs",
        skill: "reading",
        question: "Ghép các cặp từ vựng với nghĩa tiếng Việt tương ứng",
        pairs: [{"left":"회사 (Hoesa)","right":"Công ty"},{"left":"동료 (Dongryo)","right":"Đồng nghiệp"},{"left":"회의 (Hoeui)","right":"Cuộc họp"},{"left":"프로젝트 (Peurojekteu)","right":"Dự án công việc"}],
        correctAnswer: "all_matched"
      },
      {
        id: "act-ko-901-5",
        type: "audio_listen",
        skill: "listening",
        question: "Lắng nghe và chọn đáp án chính xác:",
        prompt: "회사 (Hoesa)",
        options: ["Đồng nghiệp","Khách hàng","Thầy giáo","Hàng xóm"],
        correctAnswer: "Đồng nghiệp"
      }
    ]
  },
  {
    id: "lesson-ko-902",
    unitId: "unit-ko-9",
    title: "Tin Nhắn & Email Công Việc (Eommu Imeil)",
    description: "Mẫu câu liên lạc công việc trang trọng Sugohaseumnida và Gamsahamnida.",
    type: "standard",
    xp: 15,
    estimatedMinutes: 5,
    order: 2,
    status: "available",
    goals: [
      { id: "g1", description: "Nắm vững các từ vựng chủ đề Tin Nhắn & Email Công Việc (Eommu Imeil)" },
      { id: "g2", description: "Luyện phát âm chuẩn và phản xạ câu qua các bài tập tương tác" }
    ],
    vocabulary: [
      { id: "v-ko-902-1", word: "수고하십니다 (Sugohasimnida)", translation: "Chào đồng nghiệp / Bạn vất vả rồi", phonetic: "su-go-ha-sim-ni-da" },
      { id: "v-ko-902-2", word: "감사합니다 (Gamsahamnida)", translation: "Xin cảm ơn chân thành", phonetic: "gam-sa-ham-ni-da" },
      { id: "v-ko-902-3", word: "잘 부탁드립니다 (Jal butakdeurimnida)", translation: "Rất mong nhận được sự giúp đỡ", phonetic: "jal bu-tak-deu-rim-ni-da" },
      { id: "v-ko-902-4", word: "첨부 파일 (Cheombu pail)", translation: "Tệp đính kèm email", phonetic: "cheom-bu pa-il" },
      { id: "v-ko-902-5", word: "확인 (Hwagin)", translation: "Xác nhận / Kiểm tra", phonetic: "hwa-gin" }
    ],
    phrases: [
      { id: "p-ko-902-1", text: "첨부 파일을 확인해 주시기 바랍니다.", translation: "Kính mong quý vị vui lòng kiểm tra tệp đính kèm." },
      { id: "p-ko-902-2", text: "앞으로도 잘 부탁드립니다.", translation: "Từ nay về sau cũng rất mong nhận được sự giúp đỡ của quý vị." }
    ],
    activities: [
      {
        id: "act-ko-902-1",
        type: "multiple_choice",
        skill: "reading",
        question: "'잘 부탁드립니다' mang ý nghĩa lịch sự nào?",
        options: ["Rất mong nhận được sự giúp đỡ / chỉ giáo","Chào tạm biệt","Chúc ngủ ngon","Xin lỗi bạn"],
        correctAnswer: "Rất mong nhận được sự giúp đỡ / chỉ giáo"
      },
      {
        id: "act-ko-902-2",
        type: "fill_blank",
        skill: "writing",
        question: "Điền từ: '내용을 _____해 주세요.' (xác nhận / kiểm tra)",
        prompt: "Điền từ: '내용을 _____해 주세요.' (xác nhận / kiểm tra)",
        options: ["확인","회의","회사","동료"],
        correctAnswer: "확인"
      },
      {
        id: "act-ko-902-3",
        type: "multiple_choice",
        skill: "reading",
        question: "Dịch: '첨부 파일'",
        options: ["Tệp đính kèm","Chữ ký","Tiêu đề","Hộp thư rác"],
        correctAnswer: "Tệp đính kèm"
      },
      {
        id: "act-ko-902-4",
        type: "match_pairs",
        skill: "reading",
        question: "Ghép các cặp từ vựng với nghĩa tiếng Việt tương ứng",
        pairs: [{"left":"수고하십니다 (Sugohasimnida)","right":"Chào đồng nghiệp / Bạn vất vả rồi"},{"left":"감사합니다 (Gamsahamnida)","right":"Xin cảm ơn chân thành"},{"left":"잘 부탁드립니다 (Jal butakdeurimnida)","right":"Rất mong nhận được sự giúp đỡ"},{"left":"첨부 파일 (Cheombu pail)","right":"Tệp đính kèm email"}],
        correctAnswer: "all_matched"
      },
      {
        id: "act-ko-902-5",
        type: "audio_listen",
        skill: "listening",
        question: "Lắng nghe và chọn đáp án chính xác:",
        prompt: "수고하십니다 (Sugohasimnida)",
        options: ["Rất mong nhận được sự giúp đỡ / chỉ giáo","Chào tạm biệt","Chúc ngủ ngon","Xin lỗi bạn"],
        correctAnswer: "Rất mong nhận được sự giúp đỡ / chỉ giáo"
      }
    ]
  },
  {
    id: "lesson-ko-903",
    unitId: "unit-ko-9",
    title: "Phỏng Vấn Tuyển Dụng (Myeonjeop)",
    description: "Giới thiệu bản thân, trình bày kinh nghiệm và điểm mạnh cá nhân.",
    type: "standard",
    xp: 15,
    estimatedMinutes: 5,
    order: 3,
    status: "available",
    goals: [
      { id: "g1", description: "Nắm vững các từ vựng chủ đề Phỏng Vấn Tuyển Dụng (Myeonjeop)" },
      { id: "g2", description: "Luyện phát âm chuẩn và phản xạ câu qua các bài tập tương tác" }
    ],
    vocabulary: [
      { id: "v-ko-903-1", word: "면접 (Myeonjeop)", translation: "Buổi phỏng vấn xin việc", phonetic: "myeon-jeop" },
      { id: "v-ko-903-2", word: "이력서 (Iryeokseo)", translation: "Sơ yếu lý lịch / CV", phonetic: "i-ryeok-seo" },
      { id: "v-ko-903-3", word: "경력 (Gyeongryeok)", translation: "Kinh nghiệm làm việc", phonetic: "gyeong-ryeok" },
      { id: "v-ko-903-4", word: "장점 (Jangjeom)", translation: "Điểm mạnh / Ưu điểm", phonetic: "jang-jeom" },
      { id: "v-ko-903-5", word: "열정 (Yeoljeong)", translation: "Nhiệt huyết / Đam mê", phonetic: "yeol-jeong" }
    ],
    phrases: [
      { id: "p-ko-903-1", text: "저는 이 분야에서 3년 동안의 경력이 있습니다.", translation: "Tôi có 3 năm kinh nghiệm trong lĩnh vực này." },
      { id: "p-ko-903-2", text: "저의 가장 큰 장점은 성실함과 책임감입니다.", translation: "Điểm mạnh lớn nhất của tôi là sự chăm chỉ và tính trách nhiệm." }
    ],
    activities: [
      {
        id: "act-ko-903-1",
        type: "multiple_choice",
        skill: "reading",
        question: "'장점' (Jangjeom) có nghĩa là gì?",
        options: ["Điểm mạnh / Ưu điểm","Điểm yếu","Mức lương","Địa chỉ nhà"],
        correctAnswer: "Điểm mạnh / Ưu điểm"
      },
      {
        id: "act-ko-903-2",
        type: "fill_blank",
        skill: "writing",
        question: "Điền từ: '저의 _____은 팀워크입니다.' (điểm mạnh)",
        prompt: "Điền từ: '저의 _____은 팀워크입니다.' (điểm mạnh)",
        options: ["장점","이력서","면접","경력"],
        correctAnswer: "장점"
      },
      {
        id: "act-ko-903-3",
        type: "multiple_choice",
        skill: "reading",
        question: "Dịch: '면접이 있어요'",
        options: ["Tôi có buổi phỏng vấn","Tôi đi làm","Tôi nghỉ phép","Tôi ăn trưa"],
        correctAnswer: "Tôi có buổi phỏng vấn"
      },
      {
        id: "act-ko-903-4",
        type: "match_pairs",
        skill: "reading",
        question: "Ghép các cặp từ vựng với nghĩa tiếng Việt tương ứng",
        pairs: [{"left":"면접 (Myeonjeop)","right":"Buổi phỏng vấn xin việc"},{"left":"이력서 (Iryeokseo)","right":"Sơ yếu lý lịch / CV"},{"left":"경력 (Gyeongryeok)","right":"Kinh nghiệm làm việc"},{"left":"장점 (Jangjeom)","right":"Điểm mạnh / Ưu điểm"}],
        correctAnswer: "all_matched"
      },
      {
        id: "act-ko-903-5",
        type: "audio_listen",
        skill: "listening",
        question: "Lắng nghe và chọn đáp án chính xác:",
        prompt: "면접 (Myeonjeop)",
        options: ["Điểm mạnh / Ưu điểm","Điểm yếu","Mức lương","Địa chỉ nhà"],
        correctAnswer: "Điểm mạnh / Ưu điểm"
      }
    ]
  },
  {
    id: "lesson-ko-904",
    unitId: "unit-ko-9",
    title: "Hạn Chót & Lịch Trình (Magam-gwa Iljeong)",
    description: "Bàn giao công việc đúng hạn chót và sắp xếp chuyến công tác.",
    type: "standard",
    xp: 15,
    estimatedMinutes: 5,
    order: 4,
    status: "available",
    goals: [
      { id: "g1", description: "Nắm vững các từ vựng chủ đề Hạn Chót & Lịch Trình (Magam-gwa Iljeong)" },
      { id: "g2", description: "Luyện phát âm chuẩn và phản xạ câu qua các bài tập tương tác" }
    ],
    vocabulary: [
      { id: "v-ko-904-1", word: "마감일 (Magamil)", translation: "Hạn chót / Deadline", phonetic: "ma-gam-il" },
      { id: "v-ko-904-2", word: "일정 (Iljeong)", translation: "Lịch trình / Kế hoạch", phonetic: "il-jeong" },
      { id: "v-ko-904-3", word: "시간에 맞추다 (Sigane matchuda)", translation: "Kịp giờ / Đúng hạn", phonetic: "si-ga-ne mat-chu-da" },
      { id: "v-ko-904-4", word: "출장 (Chuljang)", translation: "Đi công tác xa", phonetic: "chul-jang" },
      { id: "v-ko-904-5", word: "연락 (Yeollak)", translation: "Liên lạc / Báo tin", phonetic: "yeol-lak" }
    ],
    phrases: [
      { id: "p-ko-904-1", text: "마감일까지 프로젝트를 반드시 완료하겠습니다.", translation: "Tôi nhất định sẽ hoàn thành dự án trước hạn chót." },
      { id: "p-ko-904-2", text: "다음 주에 부산으로 출장을 갈 예정입니다.", translation: "Tuần sau tôi dự định đi công tác ở Busan." }
    ],
    activities: [
      {
        id: "act-ko-904-1",
        type: "multiple_choice",
        skill: "reading",
        question: "'출장' (Chuljang) nghĩa là chuyến đi gì?",
        options: ["Đi công tác xa vì công việc","Đi về quê ăn tết","Đi nghỉ dưỡng tuần trăng mật","Đi xem hòa nhạc"],
        correctAnswer: "Đi công tác xa vì công việc"
      },
      {
        id: "act-ko-904-2",
        type: "fill_blank",
        skill: "writing",
        question: "Điền từ: '부산으로 _____을 갑니다.' (đi công tác)",
        prompt: "Điền từ: '부산으로 _____을 갑니다.' (đi công tác)",
        options: ["출장","마감일","일정","연락"],
        correctAnswer: "출장"
      },
      {
        id: "act-ko-904-3",
        type: "multiple_choice",
        skill: "reading",
        question: "Dịch: '마감일'",
        options: ["Hạn chót / Deadline","Ngày bắt đầu","Ngày nghỉ lễ","Ngày sinh nhật"],
        correctAnswer: "Hạn chót / Deadline"
      },
      {
        id: "act-ko-904-4",
        type: "match_pairs",
        skill: "reading",
        question: "Ghép các cặp từ vựng với nghĩa tiếng Việt tương ứng",
        pairs: [{"left":"마감일 (Magamil)","right":"Hạn chót / Deadline"},{"left":"일정 (Iljeong)","right":"Lịch trình / Kế hoạch"},{"left":"시간에 맞추다 (Sigane matchuda)","right":"Kịp giờ / Đúng hạn"},{"left":"출장 (Chuljang)","right":"Đi công tác xa"}],
        correctAnswer: "all_matched"
      },
      {
        id: "act-ko-904-5",
        type: "audio_listen",
        skill: "listening",
        question: "Lắng nghe và chọn đáp án chính xác:",
        prompt: "마감일 (Magamil)",
        options: ["Đi công tác xa vì công việc","Đi về quê ăn tết","Đi nghỉ dưỡng tuần trăng mật","Đi xem hòa nhạc"],
        correctAnswer: "Đi công tác xa vì công việc"
      }
    ]
  },
  {
    id: "lesson-ko-905",
    unitId: "unit-ko-9",
    title: "AI Practice: Phỏng Vấn Xin Việc Cùng Trưởng Phòng Park",
    description: "Thực hành trả lời các câu hỏi phỏng vấn tuyển dụng chuẩn mực tiếng Hàn cùng trưởng phòng Park.",
    type: "audio_ai",
    xp: 25,
    estimatedMinutes: 5,
    order: 5,
    heroImage: images.mascotWelcome,
    status: "available",
    goals: [
      { id: "g1", description: "Luyện phản xạ giao tiếp thực tế với AI Teacher Minho" },
      { id: "g2", description: "Vận dụng từ vựng trọng tâm vào ngữ cảnh hội thoại tự nhiên" }
    ],
    vocabulary: [
      { id: "v-ai-ko-9-1", word: "자기소개", translation: "Giới thiệu bản thân" },
      { id: "v-ai-ko-9-2", word: "경력", translation: "Kinh nghiệm làm việc" },
      { id: "v-ai-ko-9-3", word: "장점", translation: "Ưu điểm" },
      { id: "v-ai-ko-9-4", word: "열심히 하겠습니다", translation: "Tôi sẽ nỗ lực hết sức" },
      { id: "v-ai-ko-9-5", word: "잘 부탁드립니다", translation: "Rất mong nhận được sự giúp đỡ" }
    ],
    phrases: [],
    activities: [],
    aiTeacherPrompt: {
      scenario: "Phòng phỏng vấn tuyển dụng tại tòa nhà tập đoàn lớn ở khu Gangnam, Seoul",
      systemPrompt: "You are Minho, a warm, human, and energetic Korean teacher. Speak mostly in English for clear guidance. Introduce Korean words slowly: say the word once, give the English translation, and invite the student to repeat after you. Keep every reply strictly to 1 or 2 conversational sentences with friendly contractions (I'm, let's, that's). Listen closely to the student, praise correct pronunciation, and gently model errors again: 'So close! Try saying —'. Stay strictly on lesson words: 자기소개, 경력, 장점, 열심히 하겠습니다, 잘 부탁드립니다. Never switch topics.",
      initialGreeting: "어서 오세요. 면접관 박 부장입니다. 편안한 마음으로 먼저 간단하게 자기소개를 해 주시겠습니까?",
      targetVocabulary: ["자기소개","경력","장점","열심히 하겠습니다","잘 부탁드립니다"],
      suggestedResponses: ["안녕하십니까. 이 분야에서 3년 동안 일한 경력이 있으며, 책임감이 강한 것이 장점입니다.","귀사의 발전하는 프로젝트에 기여하고 싶습니다.","열심히 배우고 노력하겠습니다!"],
      difficulty: "intermediate"
    }
  },
  {
    id: "lesson-ko-1001",
    unitId: "unit-ko-10",
    title: "Lên Kế Hoạch Nghỉ Dưỡng (Hyuga Gyehoek)",
    description: "Chọn điểm đến, đặt vé tàu KTX và chuẩn bị hành lý du lịch.",
    type: "standard",
    xp: 15,
    estimatedMinutes: 5,
    order: 1,
    status: "available",
    goals: [
      { id: "g1", description: "Nắm vững các từ vựng chủ đề Lên Kế Hoạch Nghỉ Dưỡng (Hyuga Gyehoek)" },
      { id: "g2", description: "Luyện phát âm chuẩn và phản xạ câu qua các bài tập tương tác" }
    ],
    vocabulary: [
      { id: "v-ko-1001-1", word: "휴가 (Hyuga)", translation: "Kỳ nghỉ phép / Kỳ nghỉ mát", phonetic: "hyu-ga" },
      { id: "v-ko-1001-2", word: "캐리어 (Kaerieo)", translation: "Vali hành lý", phonetic: "kae-ri-eo" },
      { id: "v-ko-1001-3", word: "기차표 (Gichapyo)", translation: "Vé tàu hỏa", phonetic: "gi-cha-pyo" },
      { id: "v-ko-1001-4", word: "KTX", translation: "Tàu cao tốc KTX của Hàn Quốc", phonetic: "k-t-x" },
      { id: "v-ko-1001-5", word: "짐을 싸다 (Jimeul ssada)", translation: "Xếp hành lý / Đóng gói đồ", phonetic: "ji-meul ssa-da" }
    ],
    phrases: [
      { id: "p-ko-1001-1", text: "이번 여름 휴가에 제주도로 여행 갈 계획이에요.", translation: "Kỳ nghỉ hè lần này tôi có kế hoạch đi du lịch đảo Jeju." },
      { id: "p-ko-1001-2", text: "부산행 KTX 기차표를 미리 예매했어요.", translation: "Tôi đã đặt trước vé tàu cao tốc KTX đi Busan rồi." }
    ],
    activities: [
      {
        id: "act-ko-1001-1",
        type: "multiple_choice",
        skill: "reading",
        question: "'KTX' là phương tiện giao thông nổi tiếng nào của Hàn Quốc?",
        options: ["Tàu cao tốc","Tàu điện ngầm","Xe buýt nhanh","Phà biển"],
        correctAnswer: "Tàu cao tốc"
      },
      {
        id: "act-ko-1001-2",
        type: "fill_blank",
        skill: "writing",
        question: "Điền từ: '_____를 타고 부산에 가요.' (tàu cao tốc)",
        prompt: "Điền từ: '_____를 타고 부산에 가요.' (tàu cao tốc)",
        options: ["KTX","캐리어","휴가","기차표"],
        correctAnswer: "KTX"
      },
      {
        id: "act-ko-1001-3",
        type: "multiple_choice",
        skill: "reading",
        question: "Dịch: '짐을 싸요'",
        options: ["Tôi xếp hành lý","Tôi mua vé","Tôi đặt phòng","Tôi ăn tối"],
        correctAnswer: "Tôi xếp hành lý"
      },
      {
        id: "act-ko-1001-4",
        type: "match_pairs",
        skill: "reading",
        question: "Ghép các cặp từ vựng với nghĩa tiếng Việt tương ứng",
        pairs: [{"left":"휴가 (Hyuga)","right":"Kỳ nghỉ phép / Kỳ nghỉ mát"},{"left":"캐리어 (Kaerieo)","right":"Vali hành lý"},{"left":"기차표 (Gichapyo)","right":"Vé tàu hỏa"},{"left":"KTX","right":"Tàu cao tốc KTX của Hàn Quốc"}],
        correctAnswer: "all_matched"
      },
      {
        id: "act-ko-1001-5",
        type: "audio_listen",
        skill: "listening",
        question: "Lắng nghe và chọn đáp án chính xác:",
        prompt: "휴가 (Hyuga)",
        options: ["Tàu cao tốc","Tàu điện ngầm","Xe buýt nhanh","Phà biển"],
        correctAnswer: "Tàu cao tốc"
      }
    ]
  },
  {
    id: "lesson-ko-1002",
    unitId: "unit-ko-10",
    title: "Du Lịch Đảo Jeju & Biển Busan (Jeju-wa Busan)",
    description: "Khám phá bãi biển Haeundae, leo núi Hallasan và thưởng thức hải sản.",
    type: "standard",
    xp: 15,
    estimatedMinutes: 5,
    order: 2,
    status: "available",
    goals: [
      { id: "g1", description: "Nắm vững các từ vựng chủ đề Du Lịch Đảo Jeju & Biển Busan (Jeju-wa Busan)" },
      { id: "g2", description: "Luyện phát âm chuẩn và phản xạ câu qua các bài tập tương tác" }
    ],
    vocabulary: [
      { id: "v-ko-1002-1", word: "바다 (Bada)", translation: "Biển", phonetic: "ba-da" },
      { id: "v-ko-1002-2", word: "산 (San)", translation: "Núi non", phonetic: "san" },
      { id: "v-ko-1002-3", word: "자연 (Jayeon)", translation: "Thiên nhiên", phonetic: "ja-yeon" },
      { id: "v-ko-1002-4", word: "경치 (Gyeongchi)", translation: "Phong cảnh / Cảnh sắc", phonetic: "gyeong-chi" },
      { id: "v-ko-1002-5", word: "시원하다 (Siwonhada)", translation: "Mát mẻ / Khoan khoái", phonetic: "si-won-ha-da" }
    ],
    phrases: [
      { id: "p-ko-1002-1", text: "제주도의 푸른 바다와 산 경치가 정말 아름다워요.", translation: "Biển xanh và phong cảnh núi non ở đảo Jeju thực sự rất đẹp." },
      { id: "p-ko-1002-2", text: "바닷바람이 불어서 정말 시원해요.", translation: "Gió biển thổi tới nên thật là mát mẻ khoan khoái." }
    ],
    activities: [
      {
        id: "act-ko-1002-1",
        type: "multiple_choice",
        skill: "reading",
        question: "'경치' (Gyeongchi) có nghĩa là gì?",
        options: ["Phong cảnh / Cảnh sắc","Món ăn ngon","Ngôi nhà cổ","Chiếc xe mới"],
        correctAnswer: "Phong cảnh / Cảnh sắc"
      },
      {
        id: "act-ko-1002-2",
        type: "fill_blank",
        skill: "writing",
        question: "Điền từ: '바람이 불어서 아주 _____.' (mát mẻ / sảng khoái)",
        prompt: "Điền từ: '바람이 불어서 아주 _____.' (mát mẻ / sảng khoái)",
        options: ["시원해요","자연","산","경치"],
        correctAnswer: "시원해요"
      },
      {
        id: "act-ko-1002-3",
        type: "multiple_choice",
        skill: "reading",
        question: "Dịch: '아름다운 바다'",
        options: ["Bãi biển tuyệt đẹp","Dòng sông dài","Ngôi nhà to","Con đường rộng"],
        correctAnswer: "Bãi biển tuyệt đẹp"
      },
      {
        id: "act-ko-1002-4",
        type: "match_pairs",
        skill: "reading",
        question: "Ghép các cặp từ vựng với nghĩa tiếng Việt tương ứng",
        pairs: [{"left":"바다 (Bada)","right":"Biển"},{"left":"산 (San)","right":"Núi non"},{"left":"자연 (Jayeon)","right":"Thiên nhiên"},{"left":"경치 (Gyeongchi)","right":"Phong cảnh / Cảnh sắc"}],
        correctAnswer: "all_matched"
      },
      {
        id: "act-ko-1002-5",
        type: "audio_listen",
        skill: "listening",
        question: "Lắng nghe và chọn đáp án chính xác:",
        prompt: "바다 (Bada)",
        options: ["Phong cảnh / Cảnh sắc","Món ăn ngon","Ngôi nhà cổ","Chiếc xe mới"],
        correctAnswer: "Phong cảnh / Cảnh sắc"
      }
    ]
  },
  {
    id: "lesson-ko-1003",
    unitId: "unit-ko-10",
    title: "Đặt Phòng Khách Sạn & Nhận Phòng (Hotel Ye-yak)",
    description: "Đặt phòng hướng biển Ocean view, bữa sáng miễn phí và nhận chìa khóa.",
    type: "standard",
    xp: 15,
    estimatedMinutes: 5,
    order: 3,
    status: "available",
    goals: [
      { id: "g1", description: "Nắm vững các từ vựng chủ đề Đặt Phòng Khách Sạn & Nhận Phòng (Hotel Ye-yak)" },
      { id: "g2", description: "Luyện phát âm chuẩn và phản xạ câu qua các bài tập tương tác" }
    ],
    vocabulary: [
      { id: "v-ko-1003-1", word: "호텔 (Hotel)", translation: "Khách sạn", phonetic: "ho-tel" },
      { id: "v-ko-1003-2", word: "오션뷰 (Osyeonbyu)", translation: "Tầm nhìn hướng ra biển", phonetic: "o-syeon-byu" },
      { id: "v-ko-1003-3", word: "조식 포함 (Josik poham)", translation: "Bao gồm bữa ăn sáng", phonetic: "jo-sik po-ham" },
      { id: "v-ko-1003-4", word: "열쇠 / 카드키 (Yeolsoe / Kadeuki)", translation: "Chìa khóa / Thẻ phòng", phonetic: "yeol-soe" },
      { id: "v-ko-1003-5", word: "체크인 (Chekeu-in)", translation: "Làm thủ tục nhận phòng", phonetic: "che-keu-in" }
    ],
    phrases: [
      { id: "p-ko-1003-1", text: "조식이 포함된 오션뷰 방으로 예약하고 싶어요.", translation: "Tôi muốn đặt một phòng có tầm nhìn hướng biển bao gồm bữa sáng." },
      { id: "p-ko-1003-2", text: "여기 객실 카드키가 있습니다.", translation: "Đây là thẻ phòng của quý khách ạ." }
    ],
    activities: [
      {
        id: "act-ko-1003-1",
        type: "multiple_choice",
        skill: "reading",
        question: "'조식 포함' nghĩa là gì?",
        options: ["Bao gồm bữa sáng","Tính thêm tiền ăn sáng","Không phục vụ ăn sáng","Ăn tối miễn phí"],
        correctAnswer: "Bao gồm bữa sáng"
      },
      {
        id: "act-ko-1003-2",
        type: "fill_blank",
        skill: "writing",
        question: "Điền từ: '바다가 보이는 _____ 방이에요.' (hướng biển)",
        prompt: "Điền từ: '바다가 보이는 _____ 방이에요.' (hướng biển)",
        options: ["오션뷰","체크인","조식","호텔"],
        correctAnswer: "오션뷰"
      },
      {
        id: "act-ko-1003-3",
        type: "multiple_choice",
        skill: "reading",
        question: "Dịch: '방 열쇠'",
        options: ["Chìa khóa phòng","Số phòng","Hóa đơn phòng","Người phục vụ"],
        correctAnswer: "Chìa khóa phòng"
      },
      {
        id: "act-ko-1003-4",
        type: "match_pairs",
        skill: "reading",
        question: "Ghép các cặp từ vựng với nghĩa tiếng Việt tương ứng",
        pairs: [{"left":"호텔 (Hotel)","right":"Khách sạn"},{"left":"오션뷰 (Osyeonbyu)","right":"Tầm nhìn hướng ra biển"},{"left":"조식 포함 (Josik poham)","right":"Bao gồm bữa ăn sáng"},{"left":"열쇠 / 카드키 (Yeolsoe / Kadeuki)","right":"Chìa khóa / Thẻ phòng"}],
        correctAnswer: "all_matched"
      },
      {
        id: "act-ko-1003-5",
        type: "audio_listen",
        skill: "listening",
        question: "Lắng nghe và chọn đáp án chính xác:",
        prompt: "호텔 (Hotel)",
        options: ["Bao gồm bữa sáng","Tính thêm tiền ăn sáng","Không phục vụ ăn sáng","Ăn tối miễn phí"],
        correctAnswer: "Bao gồm bữa sáng"
      }
    ]
  },
  {
    id: "lesson-ko-1004",
    unitId: "unit-ko-10",
    title: "Khám Phá Cung Điện Cổ & Chụp Ảnh (Gogung-gwa Sajin)",
    description: "Mặc Hanbok tham quan Cung điện Gyeongbokgung và chụp ảnh lưu niệm.",
    type: "standard",
    xp: 15,
    estimatedMinutes: 5,
    order: 4,
    status: "available",
    goals: [
      { id: "g1", description: "Nắm vững các từ vựng chủ đề Khám Phá Cung Điện Cổ & Chụp Ảnh (Gogung-gwa Sajin)" },
      { id: "g2", description: "Luyện phát âm chuẩn và phản xạ câu qua các bài tập tương tác" }
    ],
    vocabulary: [
      { id: "v-ko-1004-1", word: "고궁 (Gogung)", translation: "Cung điện cổ xưa", phonetic: "go-gung" },
      { id: "v-ko-1004-2", word: "한복 (Hanbok)", translation: "Trang phục truyền thống Hanbok", phonetic: "han-bok" },
      { id: "v-ko-1004-3", word: "관광 (Gwangwang)", translation: "Tham quan / Du lịch thắng cảnh", phonetic: "gwan-gwang" },
      { id: "v-ko-1004-4", word: "사진을 찍다 (Sajineul jjikda)", translation: "Chụp ảnh lưu niệm", phonetic: "sa-ji-neul jjik-da" },
      { id: "v-ko-1004-5", word: "기념품 (Ginyeompum)", translation: "Quà lưu niệm", phonetic: "gi-nyeom-pum" }
    ],
    phrases: [
      { id: "p-ko-1004-1", text: "경복궁에서 한복을 입고 예쁜 사진을 많이 찍었어요.", translation: "Tôi đã mặc Hanbok ở Cung điện Gyeongbokgung và chụp rất nhiều ảnh đẹp." },
      { id: "p-ko-1004-2", text: "여기서 사진 한 장 찍어 주실 수 있나요?", translation: "Bạn có thể chụp giúp tôi một kiểu ảnh ở đây được không?" }
    ],
    activities: [
      {
        id: "act-ko-1004-1",
        type: "multiple_choice",
        skill: "reading",
        question: "'한복' (Hanbok) là nét văn hóa trang phục truyền thống của nước nào?",
        options: ["Hàn Quốc","Nhật Bản","Trung Quốc","Việt Nam"],
        correctAnswer: "Hàn Quốc"
      },
      {
        id: "act-ko-1004-2",
        type: "fill_blank",
        skill: "writing",
        question: "Điền từ: '예쁜 _____을 입었어요.' (trang phục Hanbok)",
        prompt: "Điền từ: '예쁜 _____을 입었어요.' (trang phục Hanbok)",
        options: ["한복","기념품","관광","고궁"],
        correctAnswer: "한복"
      },
      {
        id: "act-ko-1004-3",
        type: "multiple_choice",
        skill: "reading",
        question: "Dịch: '사진을 찍어요'",
        options: ["Tôi chụp ảnh","Tôi mua vé","Tôi ăn trưa","Tôi hỏi đường"],
        correctAnswer: "Tôi chụp ảnh"
      },
      {
        id: "act-ko-1004-4",
        type: "match_pairs",
        skill: "reading",
        question: "Ghép các cặp từ vựng với nghĩa tiếng Việt tương ứng",
        pairs: [{"left":"고궁 (Gogung)","right":"Cung điện cổ xưa"},{"left":"한복 (Hanbok)","right":"Trang phục truyền thống Hanbok"},{"left":"관광 (Gwangwang)","right":"Tham quan / Du lịch thắng cảnh"},{"left":"사진을 찍다 (Sajineul jjikda)","right":"Chụp ảnh lưu niệm"}],
        correctAnswer: "all_matched"
      },
      {
        id: "act-ko-1004-5",
        type: "audio_listen",
        skill: "listening",
        question: "Lắng nghe và chọn đáp án chính xác:",
        prompt: "고궁 (Gogung)",
        options: ["Hàn Quốc","Nhật Bản","Trung Quốc","Việt Nam"],
        correctAnswer: "Hàn Quốc"
      }
    ]
  },
  {
    id: "lesson-ko-1005",
    unitId: "unit-ko-10",
    title: "AI Practice: Du Lịch Khám Phá Xứ Sở Kim Chi Cùng Sohee",
    description: "Đàm thoại tiếng Hàn về du lịch đảo Jeju, ẩm thực K-food và chụp ảnh cùng bạn Sohee.",
    type: "audio_ai",
    xp: 25,
    estimatedMinutes: 5,
    order: 5,
    heroImage: images.mascotWelcome,
    status: "available",
    goals: [
      { id: "g1", description: "Luyện phản xạ giao tiếp thực tế với AI Teacher Minho" },
      { id: "g2", description: "Vận dụng từ vựng trọng tâm vào ngữ cảnh hội thoại tự nhiên" }
    ],
    vocabulary: [
      { id: "v-ai-ko-10-1", word: "한복", translation: "Hanbok" },
      { id: "v-ai-ko-10-2", word: "제주도", translation: "Đảo Jeju" },
      { id: "v-ai-ko-10-3", word: "맛있어요", translation: "Ngon quá" },
      { id: "v-ai-ko-10-4", word: "사진", translation: "Ảnh" },
      { id: "v-ai-ko-10-5", word: "즐거운 여행", translation: "Chuyến đi vui vẻ" }
    ],
    phrases: [],
    activities: [],
    aiTeacherPrompt: {
      scenario: "Con đường làng cổ Bukchon Hanok rợp bóng mái ngói truyền thống ở Seoul",
      systemPrompt: "You are Minho, a warm, human, and energetic Korean teacher. Speak mostly in English for clear guidance. Introduce Korean words slowly: say the word once, give the English translation, and invite the student to repeat after you. Keep every reply strictly to 1 or 2 conversational sentences with friendly contractions (I'm, let's, that's). Listen closely to the student, praise correct pronunciation, and gently model errors again: 'So close! Try saying —'. Stay strictly on lesson words: 한복, 제주도, 맛있어요, 사진, 즐거운 여행. Never switch topics.",
      initialGreeting: "어서 오세요! 한국 여행은 처음이신가요? 한복 입고 사진도 찍고 맛있는 음식도 많이 드셨나요?",
      targetVocabulary: ["한복","제주도","맛있어요","사진","즐거운 여행"],
      suggestedResponses: ["한복을 입고 경복궁에서 사진을 찍었는데 정말 예뻤어요!","한국의 떡볶이와 삼겹살이 정말 맛있어요.","제주도 바다에도 꼭 가보고 싶어요!"],
      difficulty: "intermediate"
    }
  },
  {
    id: "lesson-ko-1101",
    unitId: "unit-ko-11",
    title: "Ước Mơ & Tương Lai (~(eu)l geoyeyo)",
    description: "Diễn đạt ước mơ và kế hoạch trong tương lai với cấu trúc ~(eu)l geoyeyo.",
    type: "standard",
    xp: 15,
    estimatedMinutes: 5,
    order: 1,
    status: "available",
    goals: [
      { id: "g1", description: "Nắm vững các từ vựng chủ đề Ước Mơ & Tương Lai (~(eu)l geoyeyo)" },
      { id: "g2", description: "Luyện phát âm chuẩn và phản xạ câu qua các bài tập tương tác" }
    ],
    vocabulary: [
      { id: "v-ko-1101-1", word: "미래 (Mirae)", translation: "Tương lai", phonetic: "mi-rae" },
      { id: "v-ko-1101-2", word: "~(으)ㄹ 거예요 (~(eu)l geoyeyo)", translation: "Tôi sẽ... (thì tương lai)", phonetic: "eul geo-ye-yo" },
      { id: "v-ko-1101-3", word: "계획 (Gyehoek)", translation: "Kế hoạch", phonetic: "gye-hoek" },
      { id: "v-ko-1101-4", word: "세계 여행 (Segye yeohaeng)", translation: "Đi du lịch vòng quanh thế giới", phonetic: "se-gye yeo-haeng" },
      { id: "v-ko-1101-5", word: "꿈 (Kkum)", translation: "Giấc mơ / Ước mơ", phonetic: "kkum" }
    ],
    phrases: [
      { id: "p-ko-1101-1", text: "앞으로 한국에서 열심히 일할 거예요.", translation: "Sau này tôi sẽ làm việc chăm chỉ tại Hàn Quốc." },
      { id: "p-ko-1101-2", text: "저의 가장 큰 꿈은 세계 여행을 하는 거예요.", translation: "Ước mơ lớn nhất của tôi là đi du lịch vòng quanh thế giới." }
    ],
    activities: [
      {
        id: "act-ko-1101-1",
        type: "multiple_choice",
        skill: "reading",
        question: "Đuôi câu '~eul geoyeyo' dùng để biểu thị thì nào trong tiếng Hàn?",
        options: ["Thì tương lai (sẽ làm gì)","Thì quá khứ","Thì hiện tại tiếp diễn","Câu mệnh lệnh"],
        correctAnswer: "Thì tương lai (sẽ làm gì)"
      },
      {
        id: "act-ko-1101-2",
        type: "fill_blank",
        skill: "writing",
        question: "Điền từ: '내년에 한국으로 유학을 _____.' (sẽ đi)",
        prompt: "Điền từ: '내년에 한국으로 유학을 _____.' (sẽ đi)",
        options: ["갈 거예요","미래","계획","꿈"],
        correctAnswer: "갈 거예요"
      },
      {
        id: "act-ko-1101-3",
        type: "multiple_choice",
        skill: "reading",
        question: "Dịch: '나의 꿈' (Na-ui kkum)",
        options: ["Ước mơ của tôi","Kỷ niệm của tôi","Trường học của tôi","Công ty của tôi"],
        correctAnswer: "Ước mơ của tôi"
      },
      {
        id: "act-ko-1101-4",
        type: "match_pairs",
        skill: "reading",
        question: "Ghép các cặp từ vựng với nghĩa tiếng Việt tương ứng",
        pairs: [{"left":"미래 (Mirae)","right":"Tương lai"},{"left":"~(으)ㄹ 거예요 (~(eu)l geoyeyo)","right":"Tôi sẽ... (thì tương lai)"},{"left":"계획 (Gyehoek)","right":"Kế hoạch"},{"left":"세계 여행 (Segye yeohaeng)","right":"Đi du lịch vòng quanh thế giới"}],
        correctAnswer: "all_matched"
      },
      {
        id: "act-ko-1101-5",
        type: "audio_listen",
        skill: "listening",
        question: "Lắng nghe và chọn đáp án chính xác:",
        prompt: "미래 (Mirae)",
        options: ["Thì tương lai (sẽ làm gì)","Thì quá khứ","Thì hiện tại tiếp diễn","Câu mệnh lệnh"],
        correctAnswer: "Thì tương lai (sẽ làm gì)"
      }
    ]
  },
  {
    id: "lesson-ko-1102",
    unitId: "unit-ko-11",
    title: "Ứng Dụng Điện Thoại & Cuộc Sống Số (Aep)",
    description: "Từ vựng về điện thoại thông minh, tải app và kết nối trực tuyến.",
    type: "standard",
    xp: 15,
    estimatedMinutes: 5,
    order: 2,
    status: "available",
    goals: [
      { id: "g1", description: "Nắm vững các từ vựng chủ đề Ứng Dụng Điện Thoại & Cuộc Sống Số (Aep)" },
      { id: "g2", description: "Luyện phát âm chuẩn và phản xạ câu qua các bài tập tương tác" }
    ],
    vocabulary: [
      { id: "v-ko-1102-1", word: "앱 / 어플 (Aep / Eopeul)", translation: "Ứng dụng điện thoại (App)", phonetic: "aep" },
      { id: "v-ko-1102-2", word: "스마트폰 (Seumateupon)", translation: "Điện thoại thông minh (Smartphone)", phonetic: "seu-ma-teu-pon" },
      { id: "v-ko-1102-3", word: "다운로드하다 (Daunrodeuhada)", translation: "Tải về (download)", phonetic: "da-un-ro-deu-ha-da" },
      { id: "v-ko-1102-4", word: "비밀번호 (Bimilbeonho)", translation: "Mật khẩu", phonetic: "bi-mil-beon-ho" },
      { id: "v-ko-1102-5", word: "온라인 (Onrain)", translation: "Trực tuyến (online)", phonetic: "on-ra-in" }
    ],
    phrases: [
      { id: "p-ko-1102-1", text: "이 앱으로 매일 한국어를 재미있게 공부하고 있어요.", translation: "Tôi đang dùng app này để học tiếng Hàn thú vị mỗi ngày." },
      { id: "p-ko-1102-2", text: "개인 비밀번호를 안전하게 보호하세요.", translation: "Hãy bảo vệ mật khẩu cá nhân thật an toàn nhé." }
    ],
    activities: [
      {
        id: "act-ko-1102-1",
        type: "multiple_choice",
        skill: "reading",
        question: "'비밀번호' (Bimilbeonho) có nghĩa là gì?",
        options: ["Mật khẩu bảo mật","Số điện thoại","Số tài khoản ngân hàng","Địa chỉ nhà"],
        correctAnswer: "Mật khẩu bảo mật"
      },
      {
        id: "act-ko-1102-2",
        type: "fill_blank",
        skill: "writing",
        question: "Điền từ: '새로운 _____를 설정하세요.' (mật khẩu)",
        prompt: "Điền từ: '새로운 _____를 설정하세요.' (mật khẩu)",
        options: ["비밀번호","스마트폰","앱","미래"],
        correctAnswer: "비밀번호"
      },
      {
        id: "act-ko-1102-3",
        type: "multiple_choice",
        skill: "reading",
        question: "Dịch: '온라인 쇼핑'",
        options: ["Mua sắm trực tuyến","Đi chợ truyền thống","Đổi đồ cũ","Bán hàng"],
        correctAnswer: "Mua sắm trực tuyến"
      },
      {
        id: "act-ko-1102-4",
        type: "match_pairs",
        skill: "reading",
        question: "Ghép các cặp từ vựng với nghĩa tiếng Việt tương ứng",
        pairs: [{"left":"앱 / 어플 (Aep / Eopeul)","right":"Ứng dụng điện thoại (App)"},{"left":"스마트폰 (Seumateupon)","right":"Điện thoại thông minh (Smartphone)"},{"left":"다운로드하다 (Daunrodeuhada)","right":"Tải về (download)"},{"left":"비밀번호 (Bimilbeonho)","right":"Mật khẩu"}],
        correctAnswer: "all_matched"
      },
      {
        id: "act-ko-1102-5",
        type: "audio_listen",
        skill: "listening",
        question: "Lắng nghe và chọn đáp án chính xác:",
        prompt: "앱 / 어플 (Aep / Eopeul)",
        options: ["Mật khẩu bảo mật","Số điện thoại","Số tài khoản ngân hàng","Địa chỉ nhà"],
        correctAnswer: "Mật khẩu bảo mật"
      }
    ]
  },
  {
    id: "lesson-ko-1103",
    unitId: "unit-ko-11",
    title: "Trí Tuệ Nhân Tạo & Robot (AI-wa Robeot)",
    description: "Bàn luận về AI, robot thông minh và công nghệ cao của Hàn Quốc.",
    type: "standard",
    xp: 15,
    estimatedMinutes: 5,
    order: 3,
    status: "available",
    goals: [
      { id: "g1", description: "Nắm vững các từ vựng chủ đề Trí Tuệ Nhân Tạo & Robot (AI-wa Robeot)" },
      { id: "g2", description: "Luyện phát âm chuẩn và phản xạ câu qua các bài tập tương tác" }
    ],
    vocabulary: [
      { id: "v-ko-1103-1", word: "인공지능 (AI / Ingongjineung)", translation: "Trí tuệ nhân tạo (AI)", phonetic: "in-gong-ji-neung" },
      { id: "v-ko-1103-2", word: "로봇 (Robeot)", translation: "Người máy / Robot", phonetic: "ro-beot" },
      { id: "v-ko-1103-3", word: "변화 (Byeonhwa)", translation: "Sự thay đổi", phonetic: "byeon-hwa" },
      { id: "v-ko-1103-4", word: "편리하다 (Pyeonrihada)", translation: "Tiện lợi / Thuận tiện", phonetic: "pyeon-ri-ha-da" },
      { id: "v-ko-1103-5", word: "기술 (Gisul)", translation: "Kỹ thuật / Công nghệ", phonetic: "gi-sul" }
    ],
    phrases: [
      { id: "p-ko-1103-1", text: "AI 기술 덕분에 우리의 일상이 훨씬 더 편리해졌어요.", translation: "Nhờ công nghệ AI, cuộc sống hàng ngày của chúng ta đã tiện lợi hơn nhiều." },
      { id: "p-ko-1103-2", text: "한국은 IT와 로봇 기술 분야에서 세계적으로 앞서가고 있어요.", translation: "Hàn Quốc đang dẫn đầu thế giới trong lĩnh vực công nghệ IT và robot." }
    ],
    activities: [
      {
        id: "act-ko-1103-1",
        type: "multiple_choice",
        skill: "reading",
        question: "'편리하다' (Pyeonrihada) có nghĩa là gì?",
        options: ["Tiện lợi / Tiện dụng","Bất tiện","Khó khăn","Nguy hiểm"],
        correctAnswer: "Tiện lợi / Tiện dụng"
      },
      {
        id: "act-ko-1103-2",
        type: "fill_blank",
        skill: "writing",
        question: "Điền từ: '생활이 아주 _____.' (tiện lợi)",
        prompt: "Điền từ: '생활이 아주 _____.' (tiện lợi)",
        options: ["편리해요","로봇","변화","기술"],
        correctAnswer: "편리해요"
      },
      {
        id: "act-ko-1103-3",
        type: "multiple_choice",
        skill: "reading",
        question: "Dịch: '새로운 기술'",
        options: ["Công nghệ mới","Căn nhà mới","Điện thoại cũ","Bạn bè mới"],
        correctAnswer: "Công nghệ mới"
      },
      {
        id: "act-ko-1103-4",
        type: "match_pairs",
        skill: "reading",
        question: "Ghép các cặp từ vựng với nghĩa tiếng Việt tương ứng",
        pairs: [{"left":"인공지능 (AI / Ingongjineung)","right":"Trí tuệ nhân tạo (AI)"},{"left":"로봇 (Robeot)","right":"Người máy / Robot"},{"left":"변화 (Byeonhwa)","right":"Sự thay đổi"},{"left":"편리하다 (Pyeonrihada)","right":"Tiện lợi / Thuận tiện"}],
        correctAnswer: "all_matched"
      },
      {
        id: "act-ko-1103-5",
        type: "audio_listen",
        skill: "listening",
        question: "Lắng nghe và chọn đáp án chính xác:",
        prompt: "인공지능 (AI / Ingongjineung)",
        options: ["Tiện lợi / Tiện dụng","Bất tiện","Khó khăn","Nguy hiểm"],
        correctAnswer: "Tiện lợi / Tiện dụng"
      }
    ]
  },
  {
    id: "lesson-ko-1104",
    unitId: "unit-ko-11",
    title: "Mục Tiêu & Quyết Tâm (Mokpyo-wa Dajim)",
    description: "Đặt ra mục tiêu, rèn luyện kỹ năng và quyết tâm chinh phục thành công.",
    type: "standard",
    xp: 15,
    estimatedMinutes: 5,
    order: 4,
    status: "available",
    goals: [
      { id: "g1", description: "Nắm vững các từ vựng chủ đề Mục Tiêu & Quyết Tâm (Mokpyo-wa Dajim)" },
      { id: "g2", description: "Luyện phát âm chuẩn và phản xạ câu qua các bài tập tương tác" }
    ],
    vocabulary: [
      { id: "v-ko-1104-1", word: "목표 (Mokpyo)", translation: "Mục tiêu phấn đấu", phonetic: "mok-pyo" },
      { id: "v-ko-1104-2", word: "달성하다 (Dalseonghada)", translation: "Đạt được / Hoàn thành", phonetic: "dal-seong-ha-da" },
      { id: "v-ko-1104-3", word: "향상되다 (Hyangsangdoeda)", translation: "Tiến bộ / Nâng cao", phonetic: "hyang-sang-doe-da" },
      { id: "v-ko-1104-4", word: "화이팅 / 파이팅 (Hwaiting)", translation: "Cố lên! / Quyết tâm!", phonetic: "hwa-i-ting" },
      { id: "v-ko-1104-5", word: "성공 (Seonggong)", translation: "Sự thành công", phonetic: "seong-gong" }
    ],
    phrases: [
      { id: "p-ko-1104-1", text: "올해의 목표는 한국어 능력시험(TOPIK)에 합격하는 거예요.", translation: "Mục tiêu năm nay của tôi là thi đỗ kỳ thi năng lực tiếng Hàn (TOPIK)." },
      { id: "p-ko-1104-2", text: "한국어 실력이 더 향상되도록 매일 연습할 거예요. 화이팅!", translation: "Tôi sẽ luyện tập mỗi ngày để năng lực tiếng Hàn nâng cao hơn. Cố lên!" }
    ],
    activities: [
      {
        id: "act-ko-1104-1",
        type: "multiple_choice",
        skill: "reading",
        question: "'화이팅' (Hwaiting) là câu cổ vũ tinh thần quen thuộc nào của người Hàn?",
        options: ["Cố lên! / Quyết tâm!","Xin lỗi nhé!","Chào buổi sáng!","Đi ngủ thôi!"],
        correctAnswer: "Cố lên! / Quyết tâm!"
      },
      {
        id: "act-ko-1104-2",
        type: "fill_blank",
        skill: "writing",
        question: "Điền từ: '한국어 실력이 많이 _____.' (tiến bộ / nâng cao)",
        prompt: "Điền từ: '한국어 실력이 많이 _____.' (tiến bộ / nâng cao)",
        options: ["향상되었어요","목표","성공","앱"],
        correctAnswer: "향상되었어요"
      },
      {
        id: "act-ko-1104-3",
        type: "multiple_choice",
        skill: "reading",
        question: "Dịch: '목표를 달성해요'",
        options: ["Đạt được mục tiêu","Từ bỏ kế hoạch","Quên mất bài học","Đi làm việc"],
        correctAnswer: "Đạt được mục tiêu"
      },
      {
        id: "act-ko-1104-4",
        type: "match_pairs",
        skill: "reading",
        question: "Ghép các cặp từ vựng với nghĩa tiếng Việt tương ứng",
        pairs: [{"left":"목표 (Mokpyo)","right":"Mục tiêu phấn đấu"},{"left":"달성하다 (Dalseonghada)","right":"Đạt được / Hoàn thành"},{"left":"향상되다 (Hyangsangdoeda)","right":"Tiến bộ / Nâng cao"},{"left":"화이팅 / 파이팅 (Hwaiting)","right":"Cố lên! / Quyết tâm!"}],
        correctAnswer: "all_matched"
      },
      {
        id: "act-ko-1104-5",
        type: "audio_listen",
        skill: "listening",
        question: "Lắng nghe và chọn đáp án chính xác:",
        prompt: "목표 (Mokpyo)",
        options: ["Cố lên! / Quyết tâm!","Xin lỗi nhé!","Chào buổi sáng!","Đi ngủ thôi!"],
        correctAnswer: "Cố lên! / Quyết tâm!"
      }
    ]
  },
  {
    id: "lesson-ko-1105",
    unitId: "unit-ko-11",
    title: "AI Practice: Thảo Luận Kế Hoạch Tương Lai Cùng Thầy Jihoon",
    description: "Thực hành diễn đạt ý định tương lai ~(eu)l geoyeyo và công nghệ cùng thầy Jihoon.",
    type: "audio_ai",
    xp: 25,
    estimatedMinutes: 5,
    order: 5,
    heroImage: images.mascotWelcome,
    status: "available",
    goals: [
      { id: "g1", description: "Luyện phản xạ giao tiếp thực tế với AI Teacher Minho" },
      { id: "g2", description: "Vận dụng từ vựng trọng tâm vào ngữ cảnh hội thoại tự nhiên" }
    ],
    vocabulary: [
      { id: "v-ai-ko-11-1", word: "미래", translation: "Tương lai" },
      { id: "v-ai-ko-11-2", word: "~(으)ㄹ 거예요", translation: "Sẽ..." },
      { id: "v-ai-ko-11-3", word: "목표", translation: "Mục tiêu" },
      { id: "v-ai-ko-11-4", word: "기술", translation: "Kỹ thuật" },
      { id: "v-ai-ko-11-5", word: "화이팅", translation: "Cố lên" }
    ],
    phrases: [],
    activities: [],
    aiTeacherPrompt: {
      scenario: "Thung lũng công nghệ Pangyo Techno Valley tại Seoul",
      systemPrompt: "You are Minho, a warm, human, and energetic Korean teacher. Speak mostly in English for clear guidance. Introduce Korean words slowly: say the word once, give the English translation, and invite the student to repeat after you. Keep every reply strictly to 1 or 2 conversational sentences with friendly contractions (I'm, let's, that's). Listen closely to the student, praise correct pronunciation, and gently model errors again: 'So close! Try saying —'. Stay strictly on lesson words: 미래, ~(으)ㄹ 거예요, 목표, 기술, 화이팅. Never switch topics.",
      initialGreeting: "안녕하세요! 앞으로의 미래 계획이나 꿈에 대해 이야기해 주세요. 어떤 일을 하고 싶으신가요?",
      targetVocabulary: ["미래","~(으)ㄹ 거예요","목표","기술","화이팅"],
      suggestedResponses: ["앞으로 한국 기업에서 일하고 싶어요.","한국어를 유창하게 말할 수 있도록 매일 공부할 거예요.","새로운 IT 기술에 관심이 아주 많아요!"],
      difficulty: "intermediate"
    }
  },
  {
    id: "lesson-ko-1201",
    unitId: "unit-ko-12",
    title: "Bày Tỏ Quan Điểm (~kko saeng-gak-hae-yo)",
    description: "Học cách nêu ý kiến cá nhân lịch sự bằng cấu trúc ~ko saeng-gak-hae-yo.",
    type: "standard",
    xp: 15,
    estimatedMinutes: 5,
    order: 1,
    status: "available",
    goals: [
      { id: "g1", description: "Nắm vững các từ vựng chủ đề Bày Tỏ Quan Điểm (~kko saeng-gak-hae-yo)" },
      { id: "g2", description: "Luyện phát âm chuẩn và phản xạ câu qua các bài tập tương tác" }
    ],
    vocabulary: [
      { id: "v-ko-1201-1", word: "~고 생각해요 (~go saeng-gak-hae-yo)", translation: "Tôi nghĩ rằng...", phonetic: "go saeng-gak-hae-yo" },
      { id: "v-ko-1201-2", word: "동의하다 / 찬성 (Dong-uihada / Chanseong)", translation: "Đồng ý / Tán thành", phonetic: "dong-ui-ha-da" },
      { id: "v-ko-1201-3", word: "반대하다 (Bandaehada)", translation: "Phản đối / Không đồng ý", phonetic: "ban-dae-ha-da" },
      { id: "v-ko-1201-4", word: "의견 (Uigyeon)", translation: "Ý kiến / Quan điểm", phonetic: "ui-gyeon" },
      { id: "v-ko-1201-5", word: "중요하다 (Jung-yohada)", translation: "Quan trọng", phonetic: "jung-yo-ha-da" }
    ],
    phrases: [
      { id: "p-ko-1201-1", text: "외국어를 배우는 것은 아주 중요하다고 생각해요.", translation: "Tôi nghĩ rằng việc học ngoại ngữ là vô cùng quan trọng." },
      { id: "p-ko-1201-2", text: "저도 그 의견에 전적으로 동의해요.", translation: "Tôi cũng hoàn toàn đồng ý với ý kiến đó." }
    ],
    activities: [
      {
        id: "act-ko-1201-1",
        type: "multiple_choice",
        skill: "reading",
        question: "Cấu trúc '~go saeng-gak-hae-yo' dùng để làm gì?",
        options: ["Nêu suy nghĩ / quan điểm cá nhân một cách lịch sự","Chào tạm biệt","Hỏi giá tiền","Mắng mỏ người khác"],
        correctAnswer: "Nêu suy nghĩ / quan điểm cá nhân một cách lịch sự"
      },
      {
        id: "act-ko-1201-2",
        type: "fill_blank",
        skill: "writing",
        question: "Điền từ: '좋은 생각이라_____.' (tôi nghĩ rằng)",
        prompt: "Điền từ: '좋은 생각이라_____.' (tôi nghĩ rằng)",
        options: ["고 생각해요","찬성","의견","반대"],
        correctAnswer: "고 생각해요"
      },
      {
        id: "act-ko-1201-3",
        type: "multiple_choice",
        skill: "reading",
        question: "Dịch: '저는 찬성해요'",
        options: ["Tôi đồng ý / tán thành","Tôi không biết","Tôi từ chối","Tôi đang bận"],
        correctAnswer: "Tôi đồng ý / tán thành"
      },
      {
        id: "act-ko-1201-4",
        type: "match_pairs",
        skill: "reading",
        question: "Ghép các cặp từ vựng với nghĩa tiếng Việt tương ứng",
        pairs: [{"left":"~고 생각해요 (~go saeng-gak-hae-yo)","right":"Tôi nghĩ rằng..."},{"left":"동의하다 / 찬성 (Dong-uihada / Chanseong)","right":"Đồng ý / Tán thành"},{"left":"반대하다 (Bandaehada)","right":"Phản đối / Không đồng ý"},{"left":"의견 (Uigyeon)","right":"Ý kiến / Quan điểm"}],
        correctAnswer: "all_matched"
      },
      {
        id: "act-ko-1201-5",
        type: "audio_listen",
        skill: "listening",
        question: "Lắng nghe và chọn đáp án chính xác:",
        prompt: "~고 생각해요 (~go saeng-gak-hae-yo)",
        options: ["Nêu suy nghĩ / quan điểm cá nhân một cách lịch sự","Chào tạm biệt","Hỏi giá tiền","Mắng mỏ người khác"],
        correctAnswer: "Nêu suy nghĩ / quan điểm cá nhân một cách lịch sự"
      }
    ]
  },
  {
    id: "lesson-ko-1202",
    unitId: "unit-ko-12",
    title: "Nét Đẹp Văn Hóa Hàn Quốc (K-Culture)",
    description: "Tìm hiểu văn hóa K-pop, ẩm thực Kimchi và ngày lễ Chuseok đoàn viên.",
    type: "standard",
    xp: 15,
    estimatedMinutes: 5,
    order: 2,
    status: "available",
    goals: [
      { id: "g1", description: "Nắm vững các từ vựng chủ đề Nét Đẹp Văn Hóa Hàn Quốc (K-Culture)" },
      { id: "g2", description: "Luyện phát âm chuẩn và phản xạ câu qua các bài tập tương tác" }
    ],
    vocabulary: [
      { id: "v-ko-1202-1", word: "문화 (Munhwa)", translation: "Văn hóa", phonetic: "mun-hwa" },
      { id: "v-ko-1202-2", word: "한류 / K-컬처 (Hallyu / K-Culture)", translation: "Làn sóng văn hóa Hàn Quốc", phonetic: "hal-ryu" },
      { id: "v-ko-1202-3", word: "김치 (Kimchi)", translation: "Món kim chi truyền thống", phonetic: "gim-chi" },
      { id: "v-ko-1202-4", word: "추석 (Chuseok)", translation: "Tết Trung thu / Lễ tạ ơn truyền thống", phonetic: "chu-seok" },
      { id: "v-ko-1202-5", word: "전통 (Jeontong)", translation: "Truyền thống", phonetic: "jeon-tong" }
    ],
    phrases: [
      { id: "p-ko-1202-1", text: "한국의 K-pop과 드라마는 전 세계에서 큰 인기를 얻고 있어요.", translation: "K-pop và phim ảnh Hàn Quốc đang đón nhận sự yêu thích lớn trên toàn thế giới." },
      { id: "p-ko-1202-2", text: "추석에는 온 가족이 모여 송편을 만들고 전통 놀이를 해요.", translation: "Vào dịp Chuseok, cả gia đình sum vầy cùng làm bánh Songpyeon và chơi trò dân gian." }
    ],
    activities: [
      {
        id: "act-ko-1202-1",
        type: "multiple_choice",
        skill: "reading",
        question: "'추석' (Chuseok) là ngày lễ truyền thống lớn nào của người Hàn?",
        options: ["Tết Trung thu / Lễ đoàn viên lớn nhất","Lễ Giáng sinh","Ngày lễ thiếu nhi","Ngày nhà giáo"],
        correctAnswer: "Tết Trung thu / Lễ đoàn viên lớn nhất"
      },
      {
        id: "act-ko-1202-2",
        type: "fill_blank",
        skill: "writing",
        question: "Điền từ: '추석은 한국의 큰 _____ 명절이에요.' (truyền thống)",
        prompt: "Điền từ: '추석은 한국의 큰 _____ 명절이에요.' (truyền thống)",
        options: ["전통","K-컬처","김치","문화"],
        correctAnswer: "전통"
      },
      {
        id: "act-ko-1202-3",
        type: "multiple_choice",
        skill: "reading",
        question: "Dịch: '한국의 전통문화'",
        options: ["Văn hóa truyền thống Hàn Quốc","Món ăn hiện đại","Âm nhạc phương Tây","Xe hơi Hàn Quốc"],
        correctAnswer: "Văn hóa truyền thống Hàn Quốc"
      },
      {
        id: "act-ko-1202-4",
        type: "match_pairs",
        skill: "reading",
        question: "Ghép các cặp từ vựng với nghĩa tiếng Việt tương ứng",
        pairs: [{"left":"문화 (Munhwa)","right":"Văn hóa"},{"left":"한류 / K-컬처 (Hallyu / K-Culture)","right":"Làn sóng văn hóa Hàn Quốc"},{"left":"김치 (Kimchi)","right":"Món kim chi truyền thống"},{"left":"추석 (Chuseok)","right":"Tết Trung thu / Lễ tạ ơn truyền thống"}],
        correctAnswer: "all_matched"
      },
      {
        id: "act-ko-1202-5",
        type: "audio_listen",
        skill: "listening",
        question: "Lắng nghe và chọn đáp án chính xác:",
        prompt: "문화 (Munhwa)",
        options: ["Tết Trung thu / Lễ đoàn viên lớn nhất","Lễ Giáng sinh","Ngày lễ thiếu nhi","Ngày nhà giáo"],
        correctAnswer: "Tết Trung thu / Lễ đoàn viên lớn nhất"
      }
    ]
  },
  {
    id: "lesson-ko-1203",
    unitId: "unit-ko-12",
    title: "Thành Ngữ & Quán Ngữ Thú Vị (Sokdam)",
    description: "Khám phá các câu tục ngữ và cách nói tự nhiên của người Hàn.",
    type: "standard",
    xp: 15,
    estimatedMinutes: 5,
    order: 3,
    status: "available",
    goals: [
      { id: "g1", description: "Nắm vững các từ vựng chủ đề Thành Ngữ & Quán Ngữ Thú Vị (Sokdam)" },
      { id: "g2", description: "Luyện phát âm chuẩn và phản xạ câu qua các bài tập tương tác" }
    ],
    vocabulary: [
      { id: "v-ko-1203-1", word: "시작이 반이다 (Sijagi ban-ida)", translation: "Vạn sự khởi đầu nan / Bắt đầu là đã xong một nửa", phonetic: "si-ja-gi ban-i-da" },
      { id: "v-ko-1203-2", word: "고생 끝에 낙이 온다 (Gosaeng kkeute nagi onda)", translation: "Khổ tận cam lai / Hết vất vả sẽ đến ngày vui", phonetic: "go-saeng kkeu-te na-gi on-da" },
      { id: "v-ko-1203-3", word: "대박! (Daebak!)", translation: "Đỉnh quá! / Tuyệt vời ông mặt trời!", phonetic: "dae-bak" },
      { id: "v-ko-1203-4", word: "화이팅! (Hwaiting!)", translation: "Cố lên! / Tự tin lên!", phonetic: "hwa-i-ting" },
      { id: "v-ko-1203-5", word: "속담 (Sokdam)", translation: "Tục ngữ / Thành ngữ", phonetic: "sok-dam" }
    ],
    phrases: [
      { id: "p-ko-1203-1", text: "'시작이 반이다'라는 말처럼, 벌써 A2 과정을 끝마쳤네요!", translation: "Đúng như câu 'Vạn sự khởi đầu là đã xong một nửa', bạn đã hoàn thành xong khóa A2 rồi!" },
      { id: "p-ko-1203-2", text: "시험에서 만점을 받았다고요? 완전 대박!", translation: "Bạn đạt điểm tối đa trong kỳ thi á? Đỉnh chóp luôn!" }
    ],
    activities: [
      {
        id: "act-ko-1203-1",
        type: "multiple_choice",
        skill: "reading",
        question: "Người Hàn thốt lên '대박!' (Daebak!) trong tình huống nào?",
        options: ["Khi kinh ngạc trước điều gì cực kỳ tuyệt vời / xuất sắc","Khi tức giận","Khi muốn đi ngủ","Khi chào tạm biệt"],
        correctAnswer: "Khi kinh ngạc trước điều gì cực kỳ tuyệt vời / xuất sắc"
      },
      {
        id: "act-ko-1203-2",
        type: "fill_blank",
        skill: "writing",
        question: "Điền từ: '포기하지 마세요, _____!' (cố lên / quyết tâm)",
        prompt: "Điền từ: '포기하지 마세요, _____!' (cố lên / quyết tâm)",
        options: ["화이팅","대박","속담","시작"],
        correctAnswer: "화이팅"
      },
      {
        id: "act-ko-1203-3",
        type: "multiple_choice",
        skill: "reading",
        question: "Dịch: '대박 !' (Daebak!)",
        options: ["Đỉnh quá! / Tuyệt vời!","Chào buổi sáng!","Đi ngủ thôi!","Xin lỗi nhé!"],
        correctAnswer: "Đỉnh quá! / Tuyệt vời!"
      },
      {
        id: "act-ko-1203-4",
        type: "match_pairs",
        skill: "reading",
        question: "Ghép các cặp từ vựng với nghĩa tiếng Việt tương ứng",
        pairs: [{"left":"시작이 반이다 (Sijagi ban-ida)","right":"Vạn sự khởi đầu nan / Bắt đầu là đã xong một nửa"},{"left":"고생 끝에 낙이 온다 (Gosaeng kkeute nagi onda)","right":"Khổ tận cam lai / Hết vất vả sẽ đến ngày vui"},{"left":"대박! (Daebak!)","right":"Đỉnh quá! / Tuyệt vời ông mặt trời!"},{"left":"화이팅! (Hwaiting!)","right":"Cố lên! / Tự tin lên!"}],
        correctAnswer: "all_matched"
      },
      {
        id: "act-ko-1203-5",
        type: "audio_listen",
        skill: "listening",
        question: "Lắng nghe và chọn đáp án chính xác:",
        prompt: "시작이 반이다 (Sijagi ban-ida)",
        options: ["Khi kinh ngạc trước điều gì cực kỳ tuyệt vời / xuất sắc","Khi tức giận","Khi muốn đi ngủ","Khi chào tạm biệt"],
        correctAnswer: "Khi kinh ngạc trước điều gì cực kỳ tuyệt vời / xuất sắc"
      }
    ]
  },
  {
    id: "lesson-ko-1204",
    unitId: "unit-ko-12",
    title: "Tổng Ôn Toàn Diện Trình Độ A2 (A2 Chong-bokseup)",
    description: "Hệ thống lại kiến thức từ Unit 1 đến 12 để chuẩn bị tốt nghiệp khóa học.",
    type: "standard",
    xp: 15,
    estimatedMinutes: 5,
    order: 4,
    status: "available",
    goals: [
      { id: "g1", description: "Nắm vững các từ vựng chủ đề Tổng Ôn Toàn Diện Trình Độ A2 (A2 Chong-bokseup)" },
      { id: "g2", description: "Luyện phát âm chuẩn và phản xạ câu qua các bài tập tương tác" }
    ],
    vocabulary: [
      { id: "v-ko-1204-1", word: "복습 (Bokseup)", translation: "Sự ôn tập", phonetic: "bok-seup" },
      { id: "v-ko-1204-2", word: "자신감 (Jasingam)", translation: "Sự tự tin", phonetic: "ja-sin-gam" },
      { id: "v-ko-1204-3", word: "A2 레벨 (A2 Rebel)", translation: "Trình độ A2 CEFR", phonetic: "a-i-tu re-bel" },
      { id: "v-ko-1204-4", word: "축하합니다 (Chukahamnida)", translation: "Xin chúc mừng!", phonetic: "chu-ka-ham-ni-da" },
      { id: "v-ko-1204-5", word: "수료증 (Suryojeung)", translation: "Chứng chỉ hoàn thành khóa học", phonetic: "su-ryo-jeung" }
    ],
    phrases: [
      { id: "p-ko-1204-1", text: "12개 유닛을 모두 완수하고 A2 레벨에 도달했어요!", translation: "Bạn đã hoàn thành xuất sắc tất cả 12 Unit và đạt trình độ A2!" },
      { id: "p-ko-1204-2", text: "이제 일상 대화에 큰 자신감이 생겼어요.", translation: "Bây giờ tôi đã có sự tự tin lớn trong các cuộc hội thoại hàng ngày." }
    ],
    activities: [
      {
        id: "act-ko-1204-1",
        type: "multiple_choice",
        skill: "reading",
        question: "'축하합니다' (Chukahamnida) có nghĩa là gì?",
        options: ["Xin chúc mừng","Xin thứ lỗi","Hẹn gặp lại","Chúc ngủ ngon"],
        correctAnswer: "Xin chúc mừng"
      },
      {
        id: "act-ko-1204-2",
        type: "fill_blank",
        skill: "writing",
        question: "Điền từ: 'A2 과정 수료를 진심으로 _____!' (xin chúc mừng)",
        prompt: "Điền từ: 'A2 과정 수료를 진심으로 _____!' (xin chúc mừng)",
        options: ["축하합니다","복습","자신감","의견"],
        correctAnswer: "축하합니다"
      },
      {
        id: "act-ko-1204-3",
        type: "multiple_choice",
        skill: "reading",
        question: "Dịch: '자신감이 생겼어요'",
        options: ["Tôi đã có sự tự tin","Tôi bị mệt mỏi","Tôi bị đói bụng","Tôi đang lo lắng"],
        correctAnswer: "Tôi đã có sự tự tin"
      },
      {
        id: "act-ko-1204-4",
        type: "match_pairs",
        skill: "reading",
        question: "Ghép các cặp từ vựng với nghĩa tiếng Việt tương ứng",
        pairs: [{"left":"복습 (Bokseup)","right":"Sự ôn tập"},{"left":"자신감 (Jasingam)","right":"Sự tự tin"},{"left":"A2 레벨 (A2 Rebel)","right":"Trình độ A2 CEFR"},{"left":"축하합니다 (Chukahamnida)","right":"Xin chúc mừng!"}],
        correctAnswer: "all_matched"
      },
      {
        id: "act-ko-1204-5",
        type: "audio_listen",
        skill: "listening",
        question: "Lắng nghe và chọn đáp án chính xác:",
        prompt: "복습 (Bokseup)",
        options: ["Xin chúc mừng","Xin thứ lỗi","Hẹn gặp lại","Chúc ngủ ngon"],
        correctAnswer: "Xin chúc mừng"
      }
    ]
  },
  {
    id: "lesson-ko-1205",
    unitId: "unit-ko-12",
    title: "AI Practice: Lễ Trao Bằng Tốt Nghiệp CEFR A2 Cùng Cô Yuna",
    description: "Đàm thoại tự do tốt nghiệp chứng chỉ A2 tổng kết cả 12 Unit cùng cô giáo Yuna.",
    type: "audio_ai",
    xp: 25,
    estimatedMinutes: 5,
    order: 5,
    heroImage: images.mascotWelcome,
    status: "available",
    goals: [
      { id: "g1", description: "Luyện phản xạ giao tiếp thực tế với AI Teacher Minho" },
      { id: "g2", description: "Vận dụng từ vựng trọng tâm vào ngữ cảnh hội thoại tự nhiên" }
    ],
    vocabulary: [
      { id: "v-ai-ko-12-1", word: "축하합니다", translation: "Chúc mừng" },
      { id: "v-ai-ko-12-2", word: "A2 레벨", translation: "Cấp độ A2" },
      { id: "v-ai-ko-12-3", word: "자신감", translation: "Sự tự tin" },
      { id: "v-ai-ko-12-4", word: "재미있었어요", translation: "Đã rất thú vị" },
      { id: "v-ai-ko-12-5", word: "감사합니다", translation: "Cảm ơn bạn" }
    ],
    phrases: [],
    activities: [],
    aiTeacherPrompt: {
      scenario: "Sân khấu lễ tốt nghiệp khóa học tiếng Hàn tại trung tâm Seoul",
      systemPrompt: "You are Minho, a warm, human, and energetic Korean teacher. Speak mostly in English for clear guidance. Introduce Korean words slowly: say the word once, give the English translation, and invite the student to repeat after you. Keep every reply strictly to 1 or 2 conversational sentences with friendly contractions (I'm, let's, that's). Listen closely to the student, praise correct pronunciation, and gently model errors again: 'So close! Try saying —'. Stay strictly on lesson words: 축하합니다, A2 레벨, 자신감, 재미있었어요, 감사합니다. Never switch topics.",
      initialGreeting: "수료를 진심으로 축하합니다! 12개 유닛을 모두 끝내고 A2 레벨에 도달하셨어요! 지금 기분이 어떠신가요?",
      targetVocabulary: ["축하합니다","A2 레벨","자신감","재미있었어요","감사합니다"],
      suggestedResponses: ["12개 유닛을 다 끝내서 너무 뿌듯하고 한국어에 자신감이 생겼어요!","한국의 문화와 여행에 대해 배우는 것이 가장 즐거웠어요.","유나 선생님, 친절하게 가르쳐 주셔서 정말 감사드립니다!"],
      difficulty: "intermediate"
    }
  },
];
