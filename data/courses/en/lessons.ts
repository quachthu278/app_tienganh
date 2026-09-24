import { Lesson } from "@/types/learning";
import { images } from "@/constants/images";

export const EN_LESSONS: Lesson[] = [
  {
    id: "lesson-en-101",
    unitId: "unit-en-1",
    title: "Hello & Basic Greetings",
    description: "Learn essential greetings and farewells in English.",
    type: "standard",
    xp: 15,
    estimatedMinutes: 5,
    order: 1,
    status: "available",
    goals: [
      { id: "g1", description: "Nắm vững các từ vựng chủ đề Hello & Basic Greetings" },
      { id: "g2", description: "Luyện phát âm chuẩn và phản xạ câu qua các bài tập tương tác" }
    ],
    vocabulary: [
      { id: "v-en-101-1", word: "Hello", translation: "Xin chào", phonetic: "heh-loh" },
      { id: "v-en-101-2", word: "Good morning", translation: "Chào buổi sáng", phonetic: "good mor-ning" },
      { id: "v-en-101-3", word: "Good evening", translation: "Chào buổi tối", phonetic: "good eev-ning" },
      { id: "v-en-101-4", word: "Goodbye", translation: "Tạm biệt", phonetic: "good-bye" },
      { id: "v-en-101-5", word: "See you later", translation: "Hẹn gặp lại sau", phonetic: "see yoo lay-ter" }
    ],
    phrases: [
      { id: "p-en-101-1", text: "Hello! How are you today?", translation: "Xin chào! Hôm nay bạn thế nào?" },
      { id: "p-en-101-2", text: "Goodbye, have a great day!", translation: "Tạm biệt, chúc một ngày tuyệt vời!" }
    ],
    activities: [
      {
        id: "act-en-101-1",
        type: "multiple_choice",
        skill: "reading",
        question: "'Hello' có nghĩa là gì?",
        options: ["Xin chào","Tạm biệt","Cảm ơn","Xin lỗi"],
        correctAnswer: "Xin chào"
      },
      {
        id: "act-en-101-2",
        type: "fill_blank",
        skill: "writing",
        question: "Điền từ: 'Good _____!' (buổi sáng)",
        prompt: "Điền từ: 'Good _____!' (buổi sáng)",
        options: ["morning","night","hello","goodbye"],
        correctAnswer: "morning"
      },
      {
        id: "act-en-101-3",
        type: "multiple_choice",
        skill: "reading",
        question: "Dịch: 'Goodbye'",
        options: ["Tạm biệt","Xin chào","Chào buổi sáng","Cảm ơn"],
        correctAnswer: "Tạm biệt"
      },
      {
        id: "act-en-101-4",
        type: "match_pairs",
        skill: "reading",
        question: "Ghép các cặp từ vựng với nghĩa tiếng Việt tương ứng",
        pairs: [{"left":"Hello","right":"Xin chào"},{"left":"Good morning","right":"Chào buổi sáng"},{"left":"Good evening","right":"Chào buổi tối"},{"left":"Goodbye","right":"Tạm biệt"}],
        correctAnswer: "all_matched"
      },
      {
        id: "act-en-101-5",
        type: "audio_listen",
        skill: "listening",
        question: "Lắng nghe và chọn đáp án chính xác:",
        prompt: "Hello",
        options: ["Xin chào","Tạm biệt","Cảm ơn","Xin lỗi"],
        correctAnswer: "Xin chào"
      }
    ]
  },
  {
    id: "lesson-en-102",
    unitId: "unit-en-1",
    title: "What Is Your Name?",
    description: "Introduce yourself and ask for someone's name in English.",
    type: "standard",
    xp: 15,
    estimatedMinutes: 5,
    order: 2,
    status: "available",
    goals: [
      { id: "g1", description: "Nắm vững các từ vựng chủ đề What Is Your Name?" },
      { id: "g2", description: "Luyện phát âm chuẩn và phản xạ câu qua các bài tập tương tác" }
    ],
    vocabulary: [
      { id: "v-en-102-1", word: "I am", translation: "Tôi là", phonetic: "eye am" },
      { id: "v-en-102-2", word: "My name is", translation: "Tên tôi là", phonetic: "my naym iz" },
      { id: "v-en-102-3", word: "What is", translation: "Cái gì là", phonetic: "waht iz" },
      { id: "v-en-102-4", word: "Nice to meet you", translation: "Rất vui được gặp bạn", phonetic: "nys too meet yoo" },
      { id: "v-en-102-5", word: "Friend", translation: "Bạn bè", phonetic: "frend" }
    ],
    phrases: [
      { id: "p-en-102-1", text: "Hello, my name is Alex. What is your name?", translation: "Xin chào, tên tôi là Alex. Tên bạn là gì?" },
      { id: "p-en-102-2", text: "Nice to meet you, Alex!", translation: "Rất vui được gặp bạn, Alex!" }
    ],
    activities: [
      {
        id: "act-en-102-1",
        type: "multiple_choice",
        skill: "reading",
        question: "'My name is' có nghĩa là gì?",
        options: ["Tên tôi là","Tôi là bạn","Tên bạn là","Chào bạn"],
        correctAnswer: "Tên tôi là"
      },
      {
        id: "act-en-102-2",
        type: "fill_blank",
        skill: "writing",
        question: "Điền từ: 'My _____ is David.'",
        prompt: "Điền từ: 'My _____ is David.'",
        options: ["name","friend","hello","am"],
        correctAnswer: "name"
      },
      {
        id: "act-en-102-3",
        type: "multiple_choice",
        skill: "reading",
        question: "Dịch: 'Nice to meet you'",
        options: ["Rất vui được gặp bạn","Hẹn gặp lại sau","Cảm ơn rất nhiều","Tôi là Alex"],
        correctAnswer: "Rất vui được gặp bạn"
      },
      {
        id: "act-en-102-4",
        type: "match_pairs",
        skill: "reading",
        question: "Ghép các cặp từ vựng với nghĩa tiếng Việt tương ứng",
        pairs: [{"left":"I am","right":"Tôi là"},{"left":"My name is","right":"Tên tôi là"},{"left":"What is","right":"Cái gì là"},{"left":"Nice to meet you","right":"Rất vui được gặp bạn"}],
        correctAnswer: "all_matched"
      },
      {
        id: "act-en-102-5",
        type: "audio_listen",
        skill: "listening",
        question: "Lắng nghe và chọn đáp án chính xác:",
        prompt: "I am",
        options: ["Tên tôi là","Tôi là bạn","Tên bạn là","Chào bạn"],
        correctAnswer: "Tên tôi là"
      }
    ]
  },
  {
    id: "lesson-en-103",
    unitId: "unit-en-1",
    title: "Thank You & Polite Words",
    description: "Say thank you, please, and excuse me in daily life.",
    type: "standard",
    xp: 15,
    estimatedMinutes: 5,
    order: 3,
    status: "available",
    goals: [
      { id: "g1", description: "Nắm vững các từ vựng chủ đề Thank You & Polite Words" },
      { id: "g2", description: "Luyện phát âm chuẩn và phản xạ câu qua các bài tập tương tác" }
    ],
    vocabulary: [
      { id: "v-en-103-1", word: "Thank you", translation: "Cảm ơn bạn", phonetic: "thangk yoo" },
      { id: "v-en-103-2", word: "Please", translation: "Làm ơn / Xin vui lòng", phonetic: "pleez" },
      { id: "v-en-103-3", word: "You're welcome", translation: "Không có chi", phonetic: "yoor wel-kum" },
      { id: "v-en-103-4", word: "Excuse me", translation: "Xin thứ lỗi / Cho tôi hỏi", phonetic: "ik-skyooz mee" },
      { id: "v-en-103-5", word: "Sorry", translation: "Xin lỗi", phonetic: "sor-ee" }
    ],
    phrases: [
      { id: "p-en-103-1", text: "Thank you very much for your help!", translation: "Cảm ơn bạn rất nhiều vì sự giúp đỡ!" },
      { id: "p-en-103-2", text: "Excuse me, where is the train station?", translation: "Xin thứ lỗi, ga tàu ở đâu vậy?" }
    ],
    activities: [
      {
        id: "act-en-103-1",
        type: "multiple_choice",
        skill: "reading",
        question: "'Please' dùng trong ngữ cảnh nào?",
        options: ["Yêu cầu lịch sự (Làm ơn)","Tạm biệt","Xin lỗi","Cảm ơn"],
        correctAnswer: "Yêu cầu lịch sự (Làm ơn)"
      },
      {
        id: "act-en-103-2",
        type: "fill_blank",
        skill: "writing",
        question: "Điền từ: 'Can I have some water, _____?'",
        prompt: "Điền từ: 'Can I have some water, _____?'",
        options: ["please","sorry","welcome","excuse"],
        correctAnswer: "please"
      },
      {
        id: "act-en-103-3",
        type: "multiple_choice",
        skill: "reading",
        question: "Dịch: 'You're welcome'",
        options: ["Không có chi","Cảm ơn","Tạm biệt","Làm ơn"],
        correctAnswer: "Không có chi"
      },
      {
        id: "act-en-103-4",
        type: "match_pairs",
        skill: "reading",
        question: "Ghép các cặp từ vựng với nghĩa tiếng Việt tương ứng",
        pairs: [{"left":"Thank you","right":"Cảm ơn bạn"},{"left":"Please","right":"Làm ơn / Xin vui lòng"},{"left":"You're welcome","right":"Không có chi"},{"left":"Excuse me","right":"Xin thứ lỗi / Cho tôi hỏi"}],
        correctAnswer: "all_matched"
      },
      {
        id: "act-en-103-5",
        type: "audio_listen",
        skill: "listening",
        question: "Lắng nghe và chọn đáp án chính xác:",
        prompt: "Thank you",
        options: ["Yêu cầu lịch sự (Làm ơn)","Tạm biệt","Xin lỗi","Cảm ơn"],
        correctAnswer: "Yêu cầu lịch sự (Làm ơn)"
      }
    ]
  },
  {
    id: "lesson-en-104",
    unitId: "unit-en-1",
    title: "How Are You Today?",
    description: "Ask and answer how people are feeling with simple adjectives.",
    type: "standard",
    xp: 15,
    estimatedMinutes: 5,
    order: 4,
    status: "available",
    goals: [
      { id: "g1", description: "Nắm vững các từ vựng chủ đề How Are You Today?" },
      { id: "g2", description: "Luyện phát âm chuẩn và phản xạ câu qua các bài tập tương tác" }
    ],
    vocabulary: [
      { id: "v-en-104-1", word: "How are you", translation: "Bạn khỏe không", phonetic: "how ahr yoo" },
      { id: "v-en-104-2", word: "Fine / Good", translation: "Khỏe / Tốt", phonetic: "fyn / good" },
      { id: "v-en-104-3", word: "Great", translation: "Tuyệt vời", phonetic: "grayt" },
      { id: "v-en-104-4", word: "Tired", translation: "Mệt mỏi", phonetic: "ty-erd" },
      { id: "v-en-104-5", word: "And you?", translation: "Còn bạn thì sao?", phonetic: "and yoo" }
    ],
    phrases: [
      { id: "p-en-104-1", text: "How are you today? — I am doing great, and you?", translation: "Hôm nay bạn thế nào? — Tôi đang rất tuyệt, còn bạn?" },
      { id: "p-en-104-2", text: "I'm a bit tired, but happy!", translation: "Tôi hơi mệt một chút, nhưng vui!" }
    ],
    activities: [
      {
        id: "act-en-104-1",
        type: "multiple_choice",
        skill: "reading",
        question: "'I am doing great' nghĩa là gì?",
        options: ["Tôi đang rất tuyệt","Tôi đang mệt","Tôi không biết","Tôi là ai"],
        correctAnswer: "Tôi đang rất tuyệt"
      },
      {
        id: "act-en-104-2",
        type: "fill_blank",
        skill: "writing",
        question: "Điền từ: 'I am _____ today, thank you!' (tốt / khỏe)",
        prompt: "Điền từ: 'I am _____ today, thank you!' (tốt / khỏe)",
        options: ["good","and","how","what"],
        correctAnswer: "good"
      },
      {
        id: "act-en-104-3",
        type: "multiple_choice",
        skill: "reading",
        question: "Dịch: 'Tired'",
        options: ["Mệt mỏi","Vui vẻ","Hào hứng","Khỏe mạnh"],
        correctAnswer: "Mệt mỏi"
      },
      {
        id: "act-en-104-4",
        type: "match_pairs",
        skill: "reading",
        question: "Ghép các cặp từ vựng với nghĩa tiếng Việt tương ứng",
        pairs: [{"left":"How are you","right":"Bạn khỏe không"},{"left":"Fine / Good","right":"Khỏe / Tốt"},{"left":"Great","right":"Tuyệt vời"},{"left":"Tired","right":"Mệt mỏi"}],
        correctAnswer: "all_matched"
      },
      {
        id: "act-en-104-5",
        type: "audio_listen",
        skill: "listening",
        question: "Lắng nghe và chọn đáp án chính xác:",
        prompt: "How are you",
        options: ["Tôi đang rất tuyệt","Tôi đang mệt","Tôi không biết","Tôi là ai"],
        correctAnswer: "Tôi đang rất tuyệt"
      }
    ]
  },
  {
    id: "lesson-en-105",
    unitId: "unit-en-1",
    title: "AI Teacher: First Greetings in New York",
    description: "Luyện phản xạ giao tiếp tự nhiên với giáo viên tiếng Anh Emma.",
    type: "audio_ai",
    xp: 25,
    estimatedMinutes: 5,
    order: 5,
    heroImage: images.mascotWelcome,
    status: "available",
    goals: [
      { id: "g1", description: "Luyện phản xạ giao tiếp thực tế với AI Teacher Emma" },
      { id: "g2", description: "Vận dụng từ vựng trọng tâm vào ngữ cảnh hội thoại tự nhiên" }
    ],
    vocabulary: [
      { id: "v-ai-en-1-1", word: "Hello", translation: "Xin chào" },
      { id: "v-ai-en-1-2", word: "My name is", translation: "Tên tôi là" },
      { id: "v-ai-en-1-3", word: "Nice to meet you", translation: "Rất vui được gặp bạn" },
      { id: "v-ai-en-1-4", word: "How are you", translation: "Bạn khỏe không" },
      { id: "v-ai-en-1-5", word: "Good morning", translation: "Chào buổi sáng" }
    ],
    phrases: [],
    activities: [],
    aiTeacherPrompt: {
      scenario: "Cozy café in Central Park, New York",
      systemPrompt: "You are Emma, an upbeat, caring English teacher. Speak in natural conversational English with contractions (I'm, let's, you're, that's). Keep every reply strictly to 1 or 2 warm, short sentences. Introduce phrases slowly, explain clearly, listen carefully to the student, and ask them to repeat or answer. Celebrate wins: 'Love it!', 'That's perfect!'. Stay strictly on lesson words: Hello, My name is, Nice to meet you, How are you, Good morning. Do not go off-topic.",
      initialGreeting: "Hi there! Welcome to New York! I'm Emma, your English teacher today. Let's start with 'Hello' — can you say 'Hello' back to me?",
      targetVocabulary: ["Hello","My name is","Nice to meet you","How are you","Good morning"],
      suggestedResponses: ["Hello Emma!","My name is Alex.","I'm doing great, thank you!"],
      difficulty: "beginner"
    }
  },
  {
    id: "lesson-en-201",
    unitId: "unit-en-2",
    title: "My Family Members",
    description: "Identify family members: father, mother, brother, sister.",
    type: "standard",
    xp: 15,
    estimatedMinutes: 5,
    order: 1,
    status: "available",
    goals: [
      { id: "g1", description: "Nắm vững các từ vựng chủ đề My Family Members" },
      { id: "g2", description: "Luyện phát âm chuẩn và phản xạ câu qua các bài tập tương tác" }
    ],
    vocabulary: [
      { id: "v-en-201-1", word: "Father", translation: "Bố / Cha", phonetic: "fah-ther" },
      { id: "v-en-201-2", word: "Mother", translation: "Mẹ", phonetic: "muh-ther" },
      { id: "v-en-201-3", word: "Brother", translation: "Anh / Em trai", phonetic: "bruh-ther" },
      { id: "v-en-201-4", word: "Sister", translation: "Chị / Em gái", phonetic: "sis-ter" },
      { id: "v-en-201-5", word: "Parents", translation: "Bố mẹ", phonetic: "pair-ents" }
    ],
    phrases: [
      { id: "p-en-201-1", text: "This is my mother and my father.", translation: "Đây là mẹ và bố của tôi." },
      { id: "p-en-201-2", text: "I have one brother and two sisters.", translation: "Tôi có một anh trai và hai chị gái." }
    ],
    activities: [
      {
        id: "act-en-201-1",
        type: "multiple_choice",
        skill: "reading",
        question: "'Brother' có nghĩa là gì?",
        options: ["Anh / Em trai","Chị / Em gái","Bố","Mẹ"],
        correctAnswer: "Anh / Em trai"
      },
      {
        id: "act-en-201-2",
        type: "fill_blank",
        skill: "writing",
        question: "Điền từ: 'This is my _____, her name is Sarah.' (mẹ)",
        prompt: "Điền từ: 'This is my _____, her name is Sarah.' (mẹ)",
        options: ["mother","father","brother","son"],
        correctAnswer: "mother"
      },
      {
        id: "act-en-201-3",
        type: "multiple_choice",
        skill: "reading",
        question: "Dịch: 'Parents'",
        options: ["Bố mẹ / Phụ huynh","Anh chị em","Con cái","Bạn bè"],
        correctAnswer: "Bố mẹ / Phụ huynh"
      },
      {
        id: "act-en-201-4",
        type: "match_pairs",
        skill: "reading",
        question: "Ghép các cặp từ vựng với nghĩa tiếng Việt tương ứng",
        pairs: [{"left":"Father","right":"Bố / Cha"},{"left":"Mother","right":"Mẹ"},{"left":"Brother","right":"Anh / Em trai"},{"left":"Sister","right":"Chị / Em gái"}],
        correctAnswer: "all_matched"
      },
      {
        id: "act-en-201-5",
        type: "audio_listen",
        skill: "listening",
        question: "Lắng nghe và chọn đáp án chính xác:",
        prompt: "Father",
        options: ["Anh / Em trai","Chị / Em gái","Bố","Mẹ"],
        correctAnswer: "Anh / Em trai"
      }
    ]
  },
  {
    id: "lesson-en-202",
    unitId: "unit-en-2",
    title: "Describing People",
    description: "Learn adjectives to describe height, age, and appearance.",
    type: "standard",
    xp: 15,
    estimatedMinutes: 5,
    order: 2,
    status: "available",
    goals: [
      { id: "g1", description: "Nắm vững các từ vựng chủ đề Describing People" },
      { id: "g2", description: "Luyện phát âm chuẩn và phản xạ câu qua các bài tập tương tác" }
    ],
    vocabulary: [
      { id: "v-en-202-1", word: "Tall", translation: "Cao", phonetic: "tawl" },
      { id: "v-en-202-2", word: "Short", translation: "Thấp / Ngắn", phonetic: "short" },
      { id: "v-en-202-3", word: "Kind", translation: "Tốt bụng", phonetic: "kynd" },
      { id: "v-en-202-4", word: "Smart", translation: "Thông minh", phonetic: "smahrt" },
      { id: "v-en-202-5", word: "Young", translation: "Trẻ tuổi", phonetic: "yung" }
    ],
    phrases: [
      { id: "p-en-202-1", text: "My brother is very tall and kind.", translation: "Anh trai tôi rất cao và tốt bụng." },
      { id: "p-en-202-2", text: "She is a smart and hardworking student.", translation: "Cô ấy là một học sinh thông minh và chăm chỉ." }
    ],
    activities: [
      {
        id: "act-en-202-1",
        type: "multiple_choice",
        skill: "reading",
        question: "'Tall' trái nghĩa với từ nào?",
        options: ["Short","Kind","Smart","Young"],
        correctAnswer: "Short"
      },
      {
        id: "act-en-202-2",
        type: "fill_blank",
        skill: "writing",
        question: "Điền từ: 'My teacher is very _____.' (tốt bụng)",
        prompt: "Điền từ: 'My teacher is very _____.' (tốt bụng)",
        options: ["kind","short","tall","blue"],
        correctAnswer: "kind"
      },
      {
        id: "act-en-202-3",
        type: "multiple_choice",
        skill: "reading",
        question: "Dịch: 'He is very kind'",
        options: ["Anh ấy rất tốt bụng","Anh ấy rất cao","Anh ấy còn trẻ","Anh ấy thông minh"],
        correctAnswer: "Anh ấy rất tốt bụng"
      },
      {
        id: "act-en-202-4",
        type: "match_pairs",
        skill: "reading",
        question: "Ghép các cặp từ vựng với nghĩa tiếng Việt tương ứng",
        pairs: [{"left":"Tall","right":"Cao"},{"left":"Short","right":"Thấp / Ngắn"},{"left":"Kind","right":"Tốt bụng"},{"left":"Smart","right":"Thông minh"}],
        correctAnswer: "all_matched"
      },
      {
        id: "act-en-202-5",
        type: "audio_listen",
        skill: "listening",
        question: "Lắng nghe và chọn đáp án chính xác:",
        prompt: "Tall",
        options: ["Short","Kind","Smart","Young"],
        correctAnswer: "Short"
      }
    ]
  },
  {
    id: "lesson-en-203",
    unitId: "unit-en-2",
    title: "Talking About Friends",
    description: "Talk about your best friends and activities together.",
    type: "standard",
    xp: 15,
    estimatedMinutes: 5,
    order: 3,
    status: "available",
    goals: [
      { id: "g1", description: "Nắm vững các từ vựng chủ đề Talking About Friends" },
      { id: "g2", description: "Luyện phát âm chuẩn và phản xạ câu qua các bài tập tương tác" }
    ],
    vocabulary: [
      { id: "v-en-203-1", word: "Best friend", translation: "Bạn thân nhất", phonetic: "best frend" },
      { id: "v-en-203-2", word: "Meet", translation: "Gặp gỡ", phonetic: "meet" },
      { id: "v-en-203-3", word: "Together", translation: "Cùng nhau", phonetic: "tuh-geth-er" },
      { id: "v-en-203-4", word: "Talk", translation: "Trò chuyện", phonetic: "tawk" },
      { id: "v-en-203-5", word: "Fun", translation: "Niềm vui / Vui vẻ", phonetic: "fun" }
    ],
    phrases: [
      { id: "p-en-203-1", text: "Sarah is my best friend. We study together.", translation: "Sarah là bạn thân nhất của tôi. Chúng tôi học cùng nhau." },
      { id: "p-en-203-2", text: "It is always fun to meet my friends.", translation: "Gặp bạn bè lúc nào cũng rất vui." }
    ],
    activities: [
      {
        id: "act-en-203-1",
        type: "multiple_choice",
        skill: "reading",
        question: "'Best friend' là gì?",
        options: ["Bạn thân nhất","Bạn cùng lớp","Đồng nghiệp","Hàng xóm"],
        correctAnswer: "Bạn thân nhất"
      },
      {
        id: "act-en-203-2",
        type: "fill_blank",
        skill: "writing",
        question: "Điền từ: 'They play soccer _____.' (cùng nhau)",
        prompt: "Điền từ: 'They play soccer _____.' (cùng nhau)",
        options: ["together","meet","talk","friend"],
        correctAnswer: "together"
      },
      {
        id: "act-en-203-3",
        type: "multiple_choice",
        skill: "reading",
        question: "Dịch: 'We study together'",
        options: ["Chúng tôi học cùng nhau","Chúng tôi đi chơi","Chúng tôi ăn tối","Chúng tôi về nhà"],
        correctAnswer: "Chúng tôi học cùng nhau"
      },
      {
        id: "act-en-203-4",
        type: "match_pairs",
        skill: "reading",
        question: "Ghép các cặp từ vựng với nghĩa tiếng Việt tương ứng",
        pairs: [{"left":"Best friend","right":"Bạn thân nhất"},{"left":"Meet","right":"Gặp gỡ"},{"left":"Together","right":"Cùng nhau"},{"left":"Talk","right":"Trò chuyện"}],
        correctAnswer: "all_matched"
      },
      {
        id: "act-en-203-5",
        type: "audio_listen",
        skill: "listening",
        question: "Lắng nghe và chọn đáp án chính xác:",
        prompt: "Best friend",
        options: ["Bạn thân nhất","Bạn cùng lớp","Đồng nghiệp","Hàng xóm"],
        correctAnswer: "Bạn thân nhất"
      }
    ]
  },
  {
    id: "lesson-en-204",
    unitId: "unit-en-2",
    title: "Where Are You From?",
    description: "Ask and answer about hometowns and countries.",
    type: "standard",
    xp: 15,
    estimatedMinutes: 5,
    order: 4,
    status: "available",
    goals: [
      { id: "g1", description: "Nắm vững các từ vựng chủ đề Where Are You From?" },
      { id: "g2", description: "Luyện phát âm chuẩn và phản xạ câu qua các bài tập tương tác" }
    ],
    vocabulary: [
      { id: "v-en-204-1", word: "Where", translation: "Ở đâu", phonetic: "wair" },
      { id: "v-en-204-2", word: "From", translation: "Từ đâu đến", phonetic: "frum" },
      { id: "v-en-204-3", word: "Country", translation: "Đất nước / Quốc gia", phonetic: "kun-tree" },
      { id: "v-en-204-4", word: "City", translation: "Thành phố", phonetic: "sit-ee" },
      { id: "v-en-204-5", word: "Live", translation: "Sống / Sinh sống", phonetic: "liv" }
    ],
    phrases: [
      { id: "p-en-204-1", text: "Where are you from? — I am from Vietnam.", translation: "Bạn đến từ đâu? — Tôi đến từ Việt Nam." },
      { id: "p-en-204-2", text: "I live in a big and vibrant city.", translation: "Tôi sống ở một thành phố lớn và sôi động." }
    ],
    activities: [
      {
        id: "act-en-204-1",
        type: "multiple_choice",
        skill: "reading",
        question: "'Where are you from?' có nghĩa là gì?",
        options: ["Bạn đến từ đâu?","Bạn đang đi đâu?","Bạn tên là gì?","Bạn sống với ai?"],
        correctAnswer: "Bạn đến từ đâu?"
      },
      {
        id: "act-en-204-2",
        type: "fill_blank",
        skill: "writing",
        question: "Điền từ: 'Where do you _____?' (sống)",
        prompt: "Điền từ: 'Where do you _____?' (sống)",
        options: ["live","from","city","country"],
        correctAnswer: "live"
      },
      {
        id: "act-en-204-3",
        type: "multiple_choice",
        skill: "reading",
        question: "Dịch: 'I live in Hanoi'",
        options: ["Tôi sống ở Hà Nội","Tôi thăm Hà Nội","Hà Nội rất đẹp","Tôi đi Hà Nội"],
        correctAnswer: "Tôi sống ở Hà Nội"
      },
      {
        id: "act-en-204-4",
        type: "match_pairs",
        skill: "reading",
        question: "Ghép các cặp từ vựng với nghĩa tiếng Việt tương ứng",
        pairs: [{"left":"Where","right":"Ở đâu"},{"left":"From","right":"Từ đâu đến"},{"left":"Country","right":"Đất nước / Quốc gia"},{"left":"City","right":"Thành phố"}],
        correctAnswer: "all_matched"
      },
      {
        id: "act-en-204-5",
        type: "audio_listen",
        skill: "listening",
        question: "Lắng nghe và chọn đáp án chính xác:",
        prompt: "Where",
        options: ["Bạn đến từ đâu?","Bạn đang đi đâu?","Bạn tên là gì?","Bạn sống với ai?"],
        correctAnswer: "Bạn đến từ đâu?"
      }
    ]
  },
  {
    id: "lesson-en-205",
    unitId: "unit-en-2",
    title: "AI Teacher: Family & Friends",
    description: "Luyện hội thoại giới thiệu các thành viên trong gia đình.",
    type: "audio_ai",
    xp: 25,
    estimatedMinutes: 5,
    order: 5,
    heroImage: images.mascotWelcome,
    status: "available",
    goals: [
      { id: "g1", description: "Luyện phản xạ giao tiếp thực tế với AI Teacher Emma" },
      { id: "g2", description: "Vận dụng từ vựng trọng tâm vào ngữ cảnh hội thoại tự nhiên" }
    ],
    vocabulary: [
      { id: "v-ai-en-2-1", word: "Father", translation: "Bố / Cha" },
      { id: "v-ai-en-2-2", word: "Mother", translation: "Mẹ" },
      { id: "v-ai-en-2-3", word: "Brother", translation: "Anh / Em trai" },
      { id: "v-ai-en-2-4", word: "Sister", translation: "Chị / Em gái" },
      { id: "v-ai-en-2-5", word: "Best friend", translation: "Bạn thân nhất" }
    ],
    phrases: [],
    activities: [],
    aiTeacherPrompt: {
      scenario: "Park bench discussion with Emma about loved ones",
      systemPrompt: "You are Emma, an upbeat, caring English teacher. Speak in natural conversational English with contractions (I'm, let's, you're, that's). Keep every reply strictly to 1 or 2 warm, short sentences. Introduce phrases slowly, explain clearly, listen carefully to the student, and ask them to repeat or answer. Celebrate wins: 'Love it!', 'That's perfect!'. Stay strictly on lesson words: Father, Mother, Brother, Sister, Best friend. Do not go off-topic.",
      initialGreeting: "Hey! Today let's talk about the people we love! Tell me, do you have any brothers or sisters?",
      targetVocabulary: ["Father","Mother","Brother","Sister","Best friend"],
      suggestedResponses: ["I have one brother.","My mother is very kind.","My best friend is Nam."],
      difficulty: "beginner"
    }
  },
  {
    id: "lesson-en-301",
    unitId: "unit-en-3",
    title: "Morning Routine",
    description: "Learn verbs for morning habits: wake up, shower, eat breakfast.",
    type: "standard",
    xp: 15,
    estimatedMinutes: 5,
    order: 1,
    status: "available",
    goals: [
      { id: "g1", description: "Nắm vững các từ vựng chủ đề Morning Routine" },
      { id: "g2", description: "Luyện phát âm chuẩn và phản xạ câu qua các bài tập tương tác" }
    ],
    vocabulary: [
      { id: "v-en-301-1", word: "Wake up", translation: "Thức dậy", phonetic: "wayk up" },
      { id: "v-en-301-2", word: "Brush teeth", translation: "Đánh răng", phonetic: "brush teeth" },
      { id: "v-en-301-3", word: "Breakfast", translation: "Bữa sáng", phonetic: "brek-fust" },
      { id: "v-en-301-4", word: "Coffee", translation: "Cà phê", phonetic: "kaw-fee" },
      { id: "v-en-301-5", word: "Start", translation: "Bắt đầu", phonetic: "stahrt" }
    ],
    phrases: [
      { id: "p-en-301-1", text: "I wake up at six every morning and drink hot coffee.", translation: "Tôi thức dậy lúc 6 giờ mỗi sáng và uống cà phê nóng." },
      { id: "p-en-301-2", text: "I eat breakfast before heading to work.", translation: "Tôi ăn sáng trước khi đi làm." }
    ],
    activities: [
      {
        id: "act-en-301-1",
        type: "multiple_choice",
        skill: "reading",
        question: "'Breakfast' là bữa ăn nào trong ngày?",
        options: ["Bữa sáng","Bữa trưa","Bữa tối","Bữa phụ"],
        correctAnswer: "Bữa sáng"
      },
      {
        id: "act-en-301-2",
        type: "fill_blank",
        skill: "writing",
        question: "Điền từ: 'I drink _____ in the morning.' (cà phê)",
        prompt: "Điền từ: 'I drink _____ in the morning.' (cà phê)",
        options: ["coffee","start","teeth","wake"],
        correctAnswer: "coffee"
      },
      {
        id: "act-en-301-3",
        type: "multiple_choice",
        skill: "reading",
        question: "Dịch: 'I wake up early'",
        options: ["Tôi thức dậy sớm","Tôi đi ngủ sớm","Tôi ăn sáng sớm","Tôi đi làm sớm"],
        correctAnswer: "Tôi thức dậy sớm"
      },
      {
        id: "act-en-301-4",
        type: "match_pairs",
        skill: "reading",
        question: "Ghép các cặp từ vựng với nghĩa tiếng Việt tương ứng",
        pairs: [{"left":"Wake up","right":"Thức dậy"},{"left":"Brush teeth","right":"Đánh răng"},{"left":"Breakfast","right":"Bữa sáng"},{"left":"Coffee","right":"Cà phê"}],
        correctAnswer: "all_matched"
      },
      {
        id: "act-en-301-5",
        type: "audio_listen",
        skill: "listening",
        question: "Lắng nghe và chọn đáp án chính xác:",
        prompt: "Wake up",
        options: ["Bữa sáng","Bữa trưa","Bữa tối","Bữa phụ"],
        correctAnswer: "Bữa sáng"
      }
    ]
  },
  {
    id: "lesson-en-302",
    unitId: "unit-en-3",
    title: "What Time Is It?",
    description: "Tell time and express daily hours in English.",
    type: "standard",
    xp: 15,
    estimatedMinutes: 5,
    order: 2,
    status: "available",
    goals: [
      { id: "g1", description: "Nắm vững các từ vựng chủ đề What Time Is It?" },
      { id: "g2", description: "Luyện phát âm chuẩn và phản xạ câu qua các bài tập tương tác" }
    ],
    vocabulary: [
      { id: "v-en-302-1", word: "Time", translation: "Thời gian / Giờ", phonetic: "tym" },
      { id: "v-en-302-2", word: "O'clock", translation: "Đúng giờ (giờ chẵn)", phonetic: "uh-klok" },
      { id: "v-en-302-3", word: "Morning", translation: "Buổi sáng", phonetic: "mor-ning" },
      { id: "v-en-302-4", word: "Afternoon", translation: "Buổi chiều", phonetic: "af-ter-noon" },
      { id: "v-en-302-5", word: "Night", translation: "Buổi đêm", phonetic: "nyt" }
    ],
    phrases: [
      { id: "p-en-302-1", text: "What time is it now? — It is seven o'clock.", translation: "Mấy giờ rồi? — Bây giờ là 7 giờ đúng." },
      { id: "p-en-302-2", text: "I work from morning to afternoon.", translation: "Tôi làm việc từ sáng đến chiều." }
    ],
    activities: [
      {
        id: "act-en-302-1",
        type: "multiple_choice",
        skill: "reading",
        question: "'What time is it?' dùng để hỏi gì?",
        options: ["Hỏi mấy giờ rồi","Hỏi ngày tháng","Hỏi giá tiền","Hỏi địa chỉ"],
        correctAnswer: "Hỏi mấy giờ rồi"
      },
      {
        id: "act-en-302-2",
        type: "fill_blank",
        skill: "writing",
        question: "Điền từ: 'It is nine _____.' (đúng giờ)",
        prompt: "Điền từ: 'It is nine _____.' (đúng giờ)",
        options: ["o'clock","time","night","morning"],
        correctAnswer: "o'clock"
      },
      {
        id: "act-en-302-3",
        type: "multiple_choice",
        skill: "reading",
        question: "Dịch: 'It is eight o'clock'",
        options: ["Bây giờ là 8 giờ đúng","Bây giờ là 9 giờ","8 giờ tối","7 giờ sáng"],
        correctAnswer: "Bây giờ là 8 giờ đúng"
      },
      {
        id: "act-en-302-4",
        type: "match_pairs",
        skill: "reading",
        question: "Ghép các cặp từ vựng với nghĩa tiếng Việt tương ứng",
        pairs: [{"left":"Time","right":"Thời gian / Giờ"},{"left":"O'clock","right":"Đúng giờ (giờ chẵn)"},{"left":"Morning","right":"Buổi sáng"},{"left":"Afternoon","right":"Buổi chiều"}],
        correctAnswer: "all_matched"
      },
      {
        id: "act-en-302-5",
        type: "audio_listen",
        skill: "listening",
        question: "Lắng nghe và chọn đáp án chính xác:",
        prompt: "Time",
        options: ["Hỏi mấy giờ rồi","Hỏi ngày tháng","Hỏi giá tiền","Hỏi địa chỉ"],
        correctAnswer: "Hỏi mấy giờ rồi"
      }
    ]
  },
  {
    id: "lesson-en-303",
    unitId: "unit-en-3",
    title: "Days of the Week",
    description: "Name days of the week and plan your schedule.",
    type: "standard",
    xp: 15,
    estimatedMinutes: 5,
    order: 3,
    status: "available",
    goals: [
      { id: "g1", description: "Nắm vững các từ vựng chủ đề Days of the Week" },
      { id: "g2", description: "Luyện phát âm chuẩn và phản xạ câu qua các bài tập tương tác" }
    ],
    vocabulary: [
      { id: "v-en-303-1", word: "Monday", translation: "Thứ Hai", phonetic: "mun-day" },
      { id: "v-en-303-2", word: "Friday", translation: "Thứ Sáu", phonetic: "fry-day" },
      { id: "v-en-303-3", word: "Weekend", translation: "Cuối tuần", phonetic: "week-end" },
      { id: "v-en-303-4", word: "Work", translation: "Làm việc", phonetic: "wurk" },
      { id: "v-en-303-5", word: "Study", translation: "Học tập", phonetic: "stuh-dee" }
    ],
    phrases: [
      { id: "p-en-303-1", text: "On Friday, I finish work early for the weekend.", translation: "Vào thứ Sáu, tôi kết thúc công việc sớm để đón cuối tuần." },
      { id: "p-en-303-2", text: "I relax and meet friends on the weekend.", translation: "Tôi thư giãn và gặp bạn bè vào cuối tuần." }
    ],
    activities: [
      {
        id: "act-en-303-1",
        type: "multiple_choice",
        skill: "reading",
        question: "'Weekend' bao gồm những ngày nào?",
        options: ["Thứ Bảy và Chủ Nhật","Thứ Hai và Thứ Ba","Thứ Sáu","Cả tuần"],
        correctAnswer: "Thứ Bảy và Chủ Nhật"
      },
      {
        id: "act-en-303-2",
        type: "fill_blank",
        skill: "writing",
        question: "Điền từ: 'I love the _____ because I can rest.' (cuối tuần)",
        prompt: "Điền từ: 'I love the _____ because I can rest.' (cuối tuần)",
        options: ["weekend","work","study","monday"],
        correctAnswer: "weekend"
      },
      {
        id: "act-en-303-3",
        type: "multiple_choice",
        skill: "reading",
        question: "Dịch: 'See you on Monday'",
        options: ["Hẹn gặp bạn vào thứ Hai","Hẹn gặp vào thứ Sáu","Hẹn gặp cuối tuần","Tạm biệt"],
        correctAnswer: "Hẹn gặp bạn vào thứ Hai"
      },
      {
        id: "act-en-303-4",
        type: "match_pairs",
        skill: "reading",
        question: "Ghép các cặp từ vựng với nghĩa tiếng Việt tương ứng",
        pairs: [{"left":"Monday","right":"Thứ Hai"},{"left":"Friday","right":"Thứ Sáu"},{"left":"Weekend","right":"Cuối tuần"},{"left":"Work","right":"Làm việc"}],
        correctAnswer: "all_matched"
      },
      {
        id: "act-en-303-5",
        type: "audio_listen",
        skill: "listening",
        question: "Lắng nghe và chọn đáp án chính xác:",
        prompt: "Monday",
        options: ["Thứ Bảy và Chủ Nhật","Thứ Hai và Thứ Ba","Thứ Sáu","Cả tuần"],
        correctAnswer: "Thứ Bảy và Chủ Nhật"
      }
    ]
  },
  {
    id: "lesson-en-304",
    unitId: "unit-en-3",
    title: "Weather & Seasons",
    description: "Talk about sunny, rainy, cold, and warm weather.",
    type: "standard",
    xp: 15,
    estimatedMinutes: 5,
    order: 4,
    status: "available",
    goals: [
      { id: "g1", description: "Nắm vững các từ vựng chủ đề Weather & Seasons" },
      { id: "g2", description: "Luyện phát âm chuẩn và phản xạ câu qua các bài tập tương tác" }
    ],
    vocabulary: [
      { id: "v-en-304-1", word: "Weather", translation: "Thời tiết", phonetic: "weth-er" },
      { id: "v-en-304-2", word: "Sunny", translation: "Có nắng / Nắng đẹp", phonetic: "sun-ee" },
      { id: "v-en-304-3", word: "Rainy", translation: "Có mưa", phonetic: "ray-nee" },
      { id: "v-en-304-4", word: "Cold", translation: "Lạnh", phonetic: "kohld" },
      { id: "v-en-304-5", word: "Warm", translation: "Ấm áp", phonetic: "worm" }
    ],
    phrases: [
      { id: "p-en-304-1", text: "How is the weather today? — It is sunny and warm.", translation: "Thời tiết hôm nay thế nào? — Trời nắng và ấm áp." },
      { id: "p-en-304-2", text: "Don't forget your umbrella, it is rainy outside!", translation: "Đừng quên mang ô, ngoài trời đang mưa đấy!" }
    ],
    activities: [
      {
        id: "act-en-304-1",
        type: "multiple_choice",
        skill: "reading",
        question: "'Sunny' nghĩa là gì?",
        options: ["Có nắng","Có mưa","Trời lạnh","Nhiều mây"],
        correctAnswer: "Có nắng"
      },
      {
        id: "act-en-304-2",
        type: "fill_blank",
        skill: "writing",
        question: "Điền từ: 'The weather is _____ and bright.' (có nắng)",
        prompt: "Điền từ: 'The weather is _____ and bright.' (có nắng)",
        options: ["sunny","cold","rainy","umbrella"],
        correctAnswer: "sunny"
      },
      {
        id: "act-en-304-3",
        type: "multiple_choice",
        skill: "reading",
        question: "Dịch: 'It is cold today'",
        options: ["Hôm nay trời lạnh","Hôm nay trời nóng","Hôm nay có mưa","Hôm nay có nắng"],
        correctAnswer: "Hôm nay trời lạnh"
      },
      {
        id: "act-en-304-4",
        type: "match_pairs",
        skill: "reading",
        question: "Ghép các cặp từ vựng với nghĩa tiếng Việt tương ứng",
        pairs: [{"left":"Weather","right":"Thời tiết"},{"left":"Sunny","right":"Có nắng / Nắng đẹp"},{"left":"Rainy","right":"Có mưa"},{"left":"Cold","right":"Lạnh"}],
        correctAnswer: "all_matched"
      },
      {
        id: "act-en-304-5",
        type: "audio_listen",
        skill: "listening",
        question: "Lắng nghe và chọn đáp án chính xác:",
        prompt: "Weather",
        options: ["Có nắng","Có mưa","Trời lạnh","Nhiều mây"],
        correctAnswer: "Có nắng"
      }
    ]
  },
  {
    id: "lesson-en-305",
    unitId: "unit-en-3",
    title: "AI Teacher: Daily Schedule",
    description: "Luyện phản xạ nói về lịch sinh hoạt hằng ngày và thời tiết.",
    type: "audio_ai",
    xp: 25,
    estimatedMinutes: 5,
    order: 5,
    heroImage: images.mascotWelcome,
    status: "available",
    goals: [
      { id: "g1", description: "Luyện phản xạ giao tiếp thực tế với AI Teacher Emma" },
      { id: "g2", description: "Vận dụng từ vựng trọng tâm vào ngữ cảnh hội thoại tự nhiên" }
    ],
    vocabulary: [
      { id: "v-ai-en-3-1", word: "Wake up", translation: "Thức dậy" },
      { id: "v-ai-en-3-2", word: "Breakfast", translation: "Bữa sáng" },
      { id: "v-ai-en-3-3", word: "Time", translation: "Thời gian / Giờ" },
      { id: "v-ai-en-3-4", word: "Sunny", translation: "Có nắng / Nắng đẹp" },
      { id: "v-ai-en-3-5", word: "Weekend", translation: "Cuối tuần" }
    ],
    phrases: [],
    activities: [],
    aiTeacherPrompt: {
      scenario: "Casual morning check-in call with Emma",
      systemPrompt: "You are Emma, an upbeat, caring English teacher. Speak in natural conversational English with contractions (I'm, let's, you're, that's). Keep every reply strictly to 1 or 2 warm, short sentences. Introduce phrases slowly, explain clearly, listen carefully to the student, and ask them to repeat or answer. Celebrate wins: 'Love it!', 'That's perfect!'. Stay strictly on lesson words: Wake up, Breakfast, Time, Sunny, Weekend. Do not go off-topic.",
      initialGreeting: "Good morning! How is your day starting? What time did you wake up today?",
      targetVocabulary: ["Wake up","Breakfast","Time","Sunny","Weekend"],
      suggestedResponses: ["I woke up at 7 AM.","I had coffee and toast.","The weather is very sunny!"],
      difficulty: "beginner"
    }
  },
  {
    id: "lesson-en-401",
    unitId: "unit-en-4",
    title: "Coffee & Drinks",
    description: "Order coffee, tea, and drinks at a café in English.",
    type: "standard",
    xp: 15,
    estimatedMinutes: 5,
    order: 1,
    status: "available",
    goals: [
      { id: "g1", description: "Nắm vững các từ vựng chủ đề Coffee & Drinks" },
      { id: "g2", description: "Luyện phát âm chuẩn và phản xạ câu qua các bài tập tương tác" }
    ],
    vocabulary: [
      { id: "v-en-401-1", word: "Coffee", translation: "Cà phê", phonetic: "kaw-fee" },
      { id: "v-en-401-2", word: "Tea", translation: "Trà", phonetic: "tee" },
      { id: "v-en-401-3", word: "Water", translation: "Nước lọc", phonetic: "wah-ter" },
      { id: "v-en-401-4", word: "Sugar", translation: "Đường", phonetic: "shoog-er" },
      { id: "v-en-401-5", word: "Milk", translation: "Sữa", phonetic: "milk" }
    ],
    phrases: [
      { id: "p-en-401-1", text: "Can I have an iced coffee with milk, please?", translation: "Cho tôi một cà phê sữa đá được không ạ?" },
      { id: "p-en-401-2", text: "A bottle of cold water, please.", translation: "Làm ơn cho một chai nước lạnh." }
    ],
    activities: [
      {
        id: "act-en-401-1",
        type: "multiple_choice",
        skill: "reading",
        question: "'Water' có nghĩa là gì?",
        options: ["Nước lọc","Cà phê","Trà","Sữa"],
        correctAnswer: "Nước lọc"
      },
      {
        id: "act-en-401-2",
        type: "fill_blank",
        skill: "writing",
        question: "Điền từ: 'Can I have tea with no _____, please?' (đường)",
        prompt: "Điền từ: 'Can I have tea with no _____, please?' (đường)",
        options: ["sugar","coffee","water","cup"],
        correctAnswer: "sugar"
      },
      {
        id: "act-en-401-3",
        type: "multiple_choice",
        skill: "reading",
        question: "Dịch: 'Coffee with milk'",
        options: ["Cà phê sữa","Cà phê đen","Trà sữa","Nước lọc"],
        correctAnswer: "Cà phê sữa"
      },
      {
        id: "act-en-401-4",
        type: "match_pairs",
        skill: "reading",
        question: "Ghép các cặp từ vựng với nghĩa tiếng Việt tương ứng",
        pairs: [{"left":"Coffee","right":"Cà phê"},{"left":"Tea","right":"Trà"},{"left":"Water","right":"Nước lọc"},{"left":"Sugar","right":"Đường"}],
        correctAnswer: "all_matched"
      },
      {
        id: "act-en-401-5",
        type: "audio_listen",
        skill: "listening",
        question: "Lắng nghe và chọn đáp án chính xác:",
        prompt: "Coffee",
        options: ["Nước lọc","Cà phê","Trà","Sữa"],
        correctAnswer: "Nước lọc"
      }
    ]
  },
  {
    id: "lesson-en-402",
    unitId: "unit-en-4",
    title: "At the Restaurant",
    description: "Look at the menu, call the waiter, and ask for dishes.",
    type: "standard",
    xp: 15,
    estimatedMinutes: 5,
    order: 2,
    status: "available",
    goals: [
      { id: "g1", description: "Nắm vững các từ vựng chủ đề At the Restaurant" },
      { id: "g2", description: "Luyện phát âm chuẩn và phản xạ câu qua các bài tập tương tác" }
    ],
    vocabulary: [
      { id: "v-en-402-1", word: "Menu", translation: "Thực đơn", phonetic: "men-yoo" },
      { id: "v-en-402-2", word: "Order", translation: "Gọi món / Đặt món", phonetic: "or-der" },
      { id: "v-en-402-3", word: "Delicious", translation: "Ngon miệng", phonetic: "dih-lish-us" },
      { id: "v-en-402-4", word: "Table", translation: "Bàn ăn", phonetic: "tay-bul" },
      { id: "v-en-402-5", word: "Bill / Check", translation: "Hóa đơn thanh toán", phonetic: "bil / chek" }
    ],
    phrases: [
      { id: "p-en-402-1", text: "Excuse me, we are ready to order!", translation: "Xin lỗi, chúng tôi đã sẵn sàng gọi món rồi!" },
      { id: "p-en-402-2", text: "Could we have the bill, please?", translation: "Làm ơn cho chúng tôi xin hóa đơn thanh toán!" }
    ],
    activities: [
      {
        id: "act-en-402-1",
        type: "multiple_choice",
        skill: "reading",
        question: "Từ nào dùng để gọi 'hóa đơn tính tiền' ở nhà hàng?",
        options: ["Bill / Check","Menu","Table","Water"],
        correctAnswer: "Bill / Check"
      },
      {
        id: "act-en-402-2",
        type: "fill_blank",
        skill: "writing",
        question: "Điền từ: 'Could I see the _____, please?' (thực đơn)",
        prompt: "Điền từ: 'Could I see the _____, please?' (thực đơn)",
        options: ["menu","bill","table","order"],
        correctAnswer: "menu"
      },
      {
        id: "act-en-402-3",
        type: "multiple_choice",
        skill: "reading",
        question: "Dịch: 'This food is delicious'",
        options: ["Món ăn này rất ngon","Món ăn này đắt","Món ăn này nguội","Tôi muốn gọi món"],
        correctAnswer: "Món ăn này rất ngon"
      },
      {
        id: "act-en-402-4",
        type: "match_pairs",
        skill: "reading",
        question: "Ghép các cặp từ vựng với nghĩa tiếng Việt tương ứng",
        pairs: [{"left":"Menu","right":"Thực đơn"},{"left":"Order","right":"Gọi món / Đặt món"},{"left":"Delicious","right":"Ngon miệng"},{"left":"Table","right":"Bàn ăn"}],
        correctAnswer: "all_matched"
      },
      {
        id: "act-en-402-5",
        type: "audio_listen",
        skill: "listening",
        question: "Lắng nghe và chọn đáp án chính xác:",
        prompt: "Menu",
        options: ["Bill / Check","Menu","Table","Water"],
        correctAnswer: "Bill / Check"
      }
    ]
  },
  {
    id: "lesson-en-403",
    unitId: "unit-en-4",
    title: "Common Foods & Meals",
    description: "Talk about bread, rice, chicken, fish, and fruits.",
    type: "standard",
    xp: 15,
    estimatedMinutes: 5,
    order: 3,
    status: "available",
    goals: [
      { id: "g1", description: "Nắm vững các từ vựng chủ đề Common Foods & Meals" },
      { id: "g2", description: "Luyện phát âm chuẩn và phản xạ câu qua các bài tập tương tác" }
    ],
    vocabulary: [
      { id: "v-en-403-1", word: "Bread", translation: "Bánh mì", phonetic: "bred" },
      { id: "v-en-403-2", word: "Rice", translation: "Cơm / Gạo", phonetic: "rys" },
      { id: "v-en-403-3", word: "Chicken", translation: "Thịt gà", phonetic: "chik-in" },
      { id: "v-en-403-4", word: "Fish", translation: "Cá", phonetic: "fish" },
      { id: "v-en-403-5", word: "Fruit", translation: "Trái cây / Hoa quả", phonetic: "froot" }
    ],
    phrases: [
      { id: "p-en-403-1", text: "I would like chicken with rice and fresh fruit.", translation: "Tôi muốn ăn cơm gà kèm hoa quả tươi." },
      { id: "p-en-403-2", text: "Do you eat fish or meat?", translation: "Bạn ăn cá hay ăn thịt?" }
    ],
    activities: [
      {
        id: "act-en-403-1",
        type: "multiple_choice",
        skill: "reading",
        question: "'Chicken' là thịt của con vật nào?",
        options: ["Gà","Bò","Heo","Cá"],
        correctAnswer: "Gà"
      },
      {
        id: "act-en-403-2",
        type: "fill_blank",
        skill: "writing",
        question: "Điền từ: 'I love toasted _____ for breakfast.' (bánh mì)",
        prompt: "Điền từ: 'I love toasted _____ for breakfast.' (bánh mì)",
        options: ["bread","fish","chicken","water"],
        correctAnswer: "bread"
      },
      {
        id: "act-en-403-3",
        type: "multiple_choice",
        skill: "reading",
        question: "Dịch: 'Fresh fruit'",
        options: ["Hoa quả tươi","Bánh mì nóng","Cơm gà","Cá tươi"],
        correctAnswer: "Hoa quả tươi"
      },
      {
        id: "act-en-403-4",
        type: "match_pairs",
        skill: "reading",
        question: "Ghép các cặp từ vựng với nghĩa tiếng Việt tương ứng",
        pairs: [{"left":"Bread","right":"Bánh mì"},{"left":"Rice","right":"Cơm / Gạo"},{"left":"Chicken","right":"Thịt gà"},{"left":"Fish","right":"Cá"}],
        correctAnswer: "all_matched"
      },
      {
        id: "act-en-403-5",
        type: "audio_listen",
        skill: "listening",
        question: "Lắng nghe và chọn đáp án chính xác:",
        prompt: "Bread",
        options: ["Gà","Bò","Heo","Cá"],
        correctAnswer: "Gà"
      }
    ]
  },
  {
    id: "lesson-en-404",
    unitId: "unit-en-4",
    title: "How Much Does It Cost?",
    description: "Ask about food prices and pay the bill.",
    type: "standard",
    xp: 15,
    estimatedMinutes: 5,
    order: 4,
    status: "available",
    goals: [
      { id: "g1", description: "Nắm vững các từ vựng chủ đề How Much Does It Cost?" },
      { id: "g2", description: "Luyện phát âm chuẩn và phản xạ câu qua các bài tập tương tác" }
    ],
    vocabulary: [
      { id: "v-en-404-1", word: "How much", translation: "Bao nhiêu tiền", phonetic: "how much" },
      { id: "v-en-404-2", word: "Dollar", translation: "Đô la", phonetic: "dol-er" },
      { id: "v-en-404-3", word: "Pay", translation: "Thanh toán / Trả tiền", phonetic: "pay" },
      { id: "v-en-404-4", word: "Expensive", translation: "Đắt đỏ", phonetic: "ik-spen-siv" },
      { id: "v-en-404-5", word: "Cheap", translation: "Rẻ", phonetic: "cheep" }
    ],
    phrases: [
      { id: "p-en-404-1", text: "How much is this sandwich? — It is five dollars.", translation: "Bánh mì này bao nhiêu tiền? — Giá 5 đô la." },
      { id: "p-en-404-2", text: "Can I pay with credit card?", translation: "Tôi có thể thanh toán bằng thẻ tín dụng không?" }
    ],
    activities: [
      {
        id: "act-en-404-1",
        type: "multiple_choice",
        skill: "reading",
        question: "'Expensive' có nghĩa là gì?",
        options: ["Đắt đỏ","Rẻ","Ngon","Miễn phí"],
        correctAnswer: "Đắt đỏ"
      },
      {
        id: "act-en-404-2",
        type: "fill_blank",
        skill: "writing",
        question: "Điền từ: '_____ is this cup of coffee?' (bao nhiêu tiền)",
        prompt: "Điền từ: '_____ is this cup of coffee?' (bao nhiêu tiền)",
        options: ["How much","Where","When","What"],
        correctAnswer: "How much"
      },
      {
        id: "act-en-404-3",
        type: "multiple_choice",
        skill: "reading",
        question: "Dịch: 'Can I pay by card?'",
        options: ["Tôi có thể trả bằng thẻ không?","Tôi có thể xem thực đơn không?","Bao nhiêu tiền?","Cho tôi hóa đơn"],
        correctAnswer: "Tôi có thể trả bằng thẻ không?"
      },
      {
        id: "act-en-404-4",
        type: "match_pairs",
        skill: "reading",
        question: "Ghép các cặp từ vựng với nghĩa tiếng Việt tương ứng",
        pairs: [{"left":"How much","right":"Bao nhiêu tiền"},{"left":"Dollar","right":"Đô la"},{"left":"Pay","right":"Thanh toán / Trả tiền"},{"left":"Expensive","right":"Đắt đỏ"}],
        correctAnswer: "all_matched"
      },
      {
        id: "act-en-404-5",
        type: "audio_listen",
        skill: "listening",
        question: "Lắng nghe và chọn đáp án chính xác:",
        prompt: "How much",
        options: ["Đắt đỏ","Rẻ","Ngon","Miễn phí"],
        correctAnswer: "Đắt đỏ"
      }
    ]
  },
  {
    id: "lesson-en-405",
    unitId: "unit-en-4",
    title: "AI Teacher: Ordering at a Café",
    description: "Đóng vai gọi đồ uống và thanh toán tại quán cà phê.",
    type: "audio_ai",
    xp: 25,
    estimatedMinutes: 5,
    order: 5,
    heroImage: images.mascotWelcome,
    status: "available",
    goals: [
      { id: "g1", description: "Luyện phản xạ giao tiếp thực tế với AI Teacher Emma" },
      { id: "g2", description: "Vận dụng từ vựng trọng tâm vào ngữ cảnh hội thoại tự nhiên" }
    ],
    vocabulary: [
      { id: "v-ai-en-4-1", word: "Coffee", translation: "Cà phê" },
      { id: "v-ai-en-4-2", word: "Tea", translation: "Trà" },
      { id: "v-ai-en-4-3", word: "Please", translation: "Làm ơn / Xin vui lòng" },
      { id: "v-ai-en-4-4", word: "How much", translation: "Bao nhiêu tiền" },
      { id: "v-ai-en-4-5", word: "Bill", translation: "Hóa đơn" }
    ],
    phrases: [],
    activities: [],
    aiTeacherPrompt: {
      scenario: "Bustling coffee shop counter in Manhattan with Emma",
      systemPrompt: "You are Emma, an upbeat, caring English teacher. Speak in natural conversational English with contractions (I'm, let's, you're, that's). Keep every reply strictly to 1 or 2 warm, short sentences. Introduce phrases slowly, explain clearly, listen carefully to the student, and ask them to repeat or answer. Celebrate wins: 'Love it!', 'That's perfect!'. Stay strictly on lesson words: Coffee, Tea, Please, How much, Bill. Do not go off-topic.",
      initialGreeting: "Welcome in! What can I get started for you today?",
      targetVocabulary: ["Coffee","Tea","Please","How much","Bill"],
      suggestedResponses: ["A hot coffee, please.","Can I have an iced latte?","How much is that?"],
      difficulty: "beginner"
    }
  },
  {
    id: "lesson-en-501",
    unitId: "unit-en-5",
    title: "Asking for Directions",
    description: "Ask where places are: left, right, straight ahead.",
    type: "standard",
    xp: 15,
    estimatedMinutes: 5,
    order: 1,
    status: "available",
    goals: [
      { id: "g1", description: "Nắm vững các từ vựng chủ đề Asking for Directions" },
      { id: "g2", description: "Luyện phát âm chuẩn và phản xạ câu qua các bài tập tương tác" }
    ],
    vocabulary: [
      { id: "v-en-501-1", word: "Where is", translation: "Ở đâu", phonetic: "wair iz" },
      { id: "v-en-501-2", word: "Turn left", translation: "Rẽ trái", phonetic: "turn left" },
      { id: "v-en-501-3", word: "Turn right", translation: "Rẽ phải", phonetic: "turn ryt" },
      { id: "v-en-501-4", word: "Go straight", translation: "Đi thẳng", phonetic: "goh strayt" },
      { id: "v-en-501-5", word: "Near", translation: "Gần đây", phonetic: "neer" }
    ],
    phrases: [
      { id: "p-en-501-1", text: "Excuse me, where is the nearest pharmacy?", translation: "Xin thứ lỗi, hiệu thuốc gần nhất ở đâu ạ?" },
      { id: "p-en-501-2", text: "Go straight for two blocks, then turn right.", translation: "Đi thẳng qua hai dãy nhà, rồi rẽ phải." }
    ],
    activities: [
      {
        id: "act-en-501-1",
        type: "multiple_choice",
        skill: "reading",
        question: "'Turn left' là gì?",
        options: ["Rẽ trái","Rẽ phải","Đi thẳng","Quay đầu"],
        correctAnswer: "Rẽ trái"
      },
      {
        id: "act-en-501-2",
        type: "fill_blank",
        skill: "writing",
        question: "Điền từ: 'Turn _____ at the corner.' (phải)",
        prompt: "Điền từ: 'Turn _____ at the corner.' (phải)",
        options: ["right","straight","near","where"],
        correctAnswer: "right"
      },
      {
        id: "act-en-501-3",
        type: "multiple_choice",
        skill: "reading",
        question: "Dịch: 'Go straight'",
        options: ["Đi thẳng","Rẽ trái","Rẽ phải","Dừng lại"],
        correctAnswer: "Đi thẳng"
      },
      {
        id: "act-en-501-4",
        type: "match_pairs",
        skill: "reading",
        question: "Ghép các cặp từ vựng với nghĩa tiếng Việt tương ứng",
        pairs: [{"left":"Where is","right":"Ở đâu"},{"left":"Turn left","right":"Rẽ trái"},{"left":"Turn right","right":"Rẽ phải"},{"left":"Go straight","right":"Đi thẳng"}],
        correctAnswer: "all_matched"
      },
      {
        id: "act-en-501-5",
        type: "audio_listen",
        skill: "listening",
        question: "Lắng nghe và chọn đáp án chính xác:",
        prompt: "Where is",
        options: ["Rẽ trái","Rẽ phải","Đi thẳng","Quay đầu"],
        correctAnswer: "Rẽ trái"
      }
    ]
  },
  {
    id: "lesson-en-502",
    unitId: "unit-en-5",
    title: "Taking Public Transit",
    description: "Ride buses and trains, buy tickets, and find stops.",
    type: "standard",
    xp: 15,
    estimatedMinutes: 5,
    order: 2,
    status: "available",
    goals: [
      { id: "g1", description: "Nắm vững các từ vựng chủ đề Taking Public Transit" },
      { id: "g2", description: "Luyện phát âm chuẩn và phản xạ câu qua các bài tập tương tác" }
    ],
    vocabulary: [
      { id: "v-en-502-1", word: "Bus", translation: "Xe buýt", phonetic: "bus" },
      { id: "v-en-502-2", word: "Train", translation: "Tàu hỏa", phonetic: "trayn" },
      { id: "v-en-502-3", word: "Station", translation: "Nhà ga / Trạm", phonetic: "stay-shun" },
      { id: "v-en-502-4", word: "Ticket", translation: "Vé", phonetic: "tik-it" },
      { id: "v-en-502-5", word: "Subway", translation: "Tàu điện ngầm", phonetic: "sub-way" }
    ],
    phrases: [
      { id: "p-en-502-1", text: "One ticket to Central Station, please.", translation: "Làm ơn cho một vé đến Ga Trung Tâm." },
      { id: "p-en-502-2", text: "Which subway line goes to the airport?", translation: "Tuyến tàu điện ngầm nào đi đến sân bay?" }
    ],
    activities: [
      {
        id: "act-en-502-1",
        type: "multiple_choice",
        skill: "reading",
        question: "'Ticket' có nghĩa là gì?",
        options: ["Vé đi lại","Nhà ga","Bản đồ","Lịch trình"],
        correctAnswer: "Vé đi lại"
      },
      {
        id: "act-en-502-2",
        type: "fill_blank",
        skill: "writing",
        question: "Điền từ: 'I need to buy a _____.' (vé)",
        prompt: "Điền từ: 'I need to buy a _____.' (vé)",
        options: ["ticket","bus","station","subway"],
        correctAnswer: "ticket"
      },
      {
        id: "act-en-502-3",
        type: "multiple_choice",
        skill: "reading",
        question: "Dịch: 'Subway station'",
        options: ["Ga tàu điện ngầm","Trạm xe buýt","Sân bay","Khách sạn"],
        correctAnswer: "Ga tàu điện ngầm"
      },
      {
        id: "act-en-502-4",
        type: "match_pairs",
        skill: "reading",
        question: "Ghép các cặp từ vựng với nghĩa tiếng Việt tương ứng",
        pairs: [{"left":"Bus","right":"Xe buýt"},{"left":"Train","right":"Tàu hỏa"},{"left":"Station","right":"Nhà ga / Trạm"},{"left":"Ticket","right":"Vé"}],
        correctAnswer: "all_matched"
      },
      {
        id: "act-en-502-5",
        type: "audio_listen",
        skill: "listening",
        question: "Lắng nghe và chọn đáp án chính xác:",
        prompt: "Bus",
        options: ["Vé đi lại","Nhà ga","Bản đồ","Lịch trình"],
        correctAnswer: "Vé đi lại"
      }
    ]
  },
  {
    id: "lesson-en-503",
    unitId: "unit-en-5",
    title: "At the Airport",
    description: "Airport terms: flight, passport, boarding gate, luggage.",
    type: "standard",
    xp: 15,
    estimatedMinutes: 5,
    order: 3,
    status: "available",
    goals: [
      { id: "g1", description: "Nắm vững các từ vựng chủ đề At the Airport" },
      { id: "g2", description: "Luyện phát âm chuẩn và phản xạ câu qua các bài tập tương tác" }
    ],
    vocabulary: [
      { id: "v-en-503-1", word: "Airport", translation: "Sân bay", phonetic: "air-port" },
      { id: "v-en-503-2", word: "Flight", translation: "Chuyến bay", phonetic: "flyt" },
      { id: "v-en-503-3", word: "Passport", translation: "Hộ chiếu", phonetic: "pas-port" },
      { id: "v-en-503-4", word: "Gate", translation: "Cửa khởi hành", phonetic: "gayt" },
      { id: "v-en-503-5", word: "Luggage", translation: "Hành lý", phonetic: "lug-ij" }
    ],
    phrases: [
      { id: "p-en-503-1", text: "Here is my passport and boarding pass.", translation: "Đây là hộ chiếu và thẻ lên máy bay của tôi." },
      { id: "p-en-503-2", text: "Your flight departs from Gate 14.", translation: "Chuyến bay của bạn khởi hành từ Cửa số 14." }
    ],
    activities: [
      {
        id: "act-en-503-1",
        type: "multiple_choice",
        skill: "reading",
        question: "Giấy tờ tùy thân quan trọng nhất khi bay quốc tế là gì?",
        options: ["Passport (Hộ chiếu)","Luggage","Menu","Ticket"],
        correctAnswer: "Passport (Hộ chiếu)"
      },
      {
        id: "act-en-503-2",
        type: "fill_blank",
        skill: "writing",
        question: "Điền từ: 'Please show your _____ at check-in.' (hộ chiếu)",
        prompt: "Điền từ: 'Please show your _____ at check-in.' (hộ chiếu)",
        options: ["passport","flight","gate","airport"],
        correctAnswer: "passport"
      },
      {
        id: "act-en-503-3",
        type: "multiple_choice",
        skill: "reading",
        question: "Dịch: 'My luggage is heavy'",
        options: ["Hành lý của tôi rất nặng","Hành lý bị thất lạc","Chuyến bay bị hoãn","Sân bay rất lớn"],
        correctAnswer: "Hành lý của tôi rất nặng"
      },
      {
        id: "act-en-503-4",
        type: "match_pairs",
        skill: "reading",
        question: "Ghép các cặp từ vựng với nghĩa tiếng Việt tương ứng",
        pairs: [{"left":"Airport","right":"Sân bay"},{"left":"Flight","right":"Chuyến bay"},{"left":"Passport","right":"Hộ chiếu"},{"left":"Gate","right":"Cửa khởi hành"}],
        correctAnswer: "all_matched"
      },
      {
        id: "act-en-503-5",
        type: "audio_listen",
        skill: "listening",
        question: "Lắng nghe và chọn đáp án chính xác:",
        prompt: "Airport",
        options: ["Passport (Hộ chiếu)","Luggage","Menu","Ticket"],
        correctAnswer: "Passport (Hộ chiếu)"
      }
    ]
  },
  {
    id: "lesson-en-504",
    unitId: "unit-en-5",
    title: "Hotel Check-In",
    description: "Check into a hotel, ask for room key, and request wifi.",
    type: "standard",
    xp: 15,
    estimatedMinutes: 5,
    order: 4,
    status: "available",
    goals: [
      { id: "g1", description: "Nắm vững các từ vựng chủ đề Hotel Check-In" },
      { id: "g2", description: "Luyện phát âm chuẩn và phản xạ câu qua các bài tập tương tác" }
    ],
    vocabulary: [
      { id: "v-en-504-1", word: "Hotel", translation: "Khách sạn", phonetic: "hoh-tel" },
      { id: "v-en-504-2", word: "Room", translation: "Phòng", phonetic: "room" },
      { id: "v-en-504-3", word: "Key", translation: "Chìa khóa", phonetic: "kee" },
      { id: "v-en-504-4", word: "Reservation", translation: "Đặt chỗ trước", phonetic: "rez-er-vay-shun" },
      { id: "v-en-504-5", word: "Password", translation: "Mật khẩu", phonetic: "pas-wurd" }
    ],
    phrases: [
      { id: "p-en-504-1", text: "I have a reservation under the name Alex.", translation: "Tôi có đặt phòng trước dưới tên Alex." },
      { id: "p-en-504-2", text: "What is the Wi-Fi password for my room?", translation: "Mật khẩu Wi-Fi của phòng tôi là gì vậy?" }
    ],
    activities: [
      {
        id: "act-en-504-1",
        type: "multiple_choice",
        skill: "reading",
        question: "'Reservation' có nghĩa là gì?",
        options: ["Đặt chỗ trước","Hủy phòng","Trả phòng","Mật khẩu"],
        correctAnswer: "Đặt chỗ trước"
      },
      {
        id: "act-en-504-2",
        type: "fill_blank",
        skill: "writing",
        question: "Điền từ: 'I have a _____ for two nights.' (đặt phòng)",
        prompt: "Điền từ: 'I have a _____ for two nights.' (đặt phòng)",
        options: ["reservation","key","room","hotel"],
        correctAnswer: "reservation"
      },
      {
        id: "act-en-504-3",
        type: "multiple_choice",
        skill: "reading",
        question: "Dịch: 'Here is your room key'",
        options: ["Đây là chìa khóa phòng của bạn","Phòng này đã có người","Khách sạn ở đâu?","Phòng của bạn ở tầng 2"],
        correctAnswer: "Đây là chìa khóa phòng của bạn"
      },
      {
        id: "act-en-504-4",
        type: "match_pairs",
        skill: "reading",
        question: "Ghép các cặp từ vựng với nghĩa tiếng Việt tương ứng",
        pairs: [{"left":"Hotel","right":"Khách sạn"},{"left":"Room","right":"Phòng"},{"left":"Key","right":"Chìa khóa"},{"left":"Reservation","right":"Đặt chỗ trước"}],
        correctAnswer: "all_matched"
      },
      {
        id: "act-en-504-5",
        type: "audio_listen",
        skill: "listening",
        question: "Lắng nghe và chọn đáp án chính xác:",
        prompt: "Hotel",
        options: ["Đặt chỗ trước","Hủy phòng","Trả phòng","Mật khẩu"],
        correctAnswer: "Đặt chỗ trước"
      }
    ]
  },
  {
    id: "lesson-en-505",
    unitId: "unit-en-5",
    title: "AI Teacher: Asking for Directions",
    description: "Luyện phản xạ hỏi đường và tìm đường đến khách sạn.",
    type: "audio_ai",
    xp: 25,
    estimatedMinutes: 5,
    order: 5,
    heroImage: images.mascotWelcome,
    status: "available",
    goals: [
      { id: "g1", description: "Luyện phản xạ giao tiếp thực tế với AI Teacher Emma" },
      { id: "g2", description: "Vận dụng từ vựng trọng tâm vào ngữ cảnh hội thoại tự nhiên" }
    ],
    vocabulary: [
      { id: "v-ai-en-5-1", word: "Where is", translation: "Ở đâu" },
      { id: "v-ai-en-5-2", word: "Turn left", translation: "Rẽ trái" },
      { id: "v-ai-en-5-3", word: "Turn right", translation: "Rẽ phải" },
      { id: "v-ai-en-5-4", word: "Subway", translation: "Tàu điện ngầm" },
      { id: "v-ai-en-5-5", word: "Hotel", translation: "Khách sạn" }
    ],
    phrases: [],
    activities: [],
    aiTeacherPrompt: {
      scenario: "Times Square street corner with Emma helping a traveler",
      systemPrompt: "You are Emma, an upbeat, caring English teacher. Speak in natural conversational English with contractions (I'm, let's, you're, that's). Keep every reply strictly to 1 or 2 warm, short sentences. Introduce phrases slowly, explain clearly, listen carefully to the student, and ask them to repeat or answer. Celebrate wins: 'Love it!', 'That's perfect!'. Stay strictly on lesson words: Where is, Turn left, Turn right, Subway, Hotel. Do not go off-topic.",
      initialGreeting: "Hey there! You look like you're looking for something. Can I help you find your way?",
      targetVocabulary: ["Where is","Turn left","Turn right","Subway","Hotel"],
      suggestedResponses: ["Where is the nearest subway?","How do I get to Central Park?","Thank you for your help!"],
      difficulty: "beginner"
    }
  },
  {
    id: "lesson-en-601",
    unitId: "unit-en-6",
    title: "Shopping for Clothes",
    description: "Ask for shirt, shoes, size, and try on clothes.",
    type: "standard",
    xp: 15,
    estimatedMinutes: 5,
    order: 1,
    status: "available",
    goals: [
      { id: "g1", description: "Nắm vững các từ vựng chủ đề Shopping for Clothes" },
      { id: "g2", description: "Luyện phát âm chuẩn và phản xạ câu qua các bài tập tương tác" }
    ],
    vocabulary: [
      { id: "v-en-601-1", word: "Shirt", translation: "Áo sơ mi", phonetic: "shurt" },
      { id: "v-en-601-2", word: "Shoes", translation: "Giày", phonetic: "shooz" },
      { id: "v-en-601-3", word: "Size", translation: "Kích cỡ / Size", phonetic: "syz" },
      { id: "v-en-601-4", word: "Try on", translation: "Thử đồ", phonetic: "try on" },
      { id: "v-en-601-5", word: "Color", translation: "Màu sắc", phonetic: "kul-er" }
    ],
    phrases: [
      { id: "p-en-601-1", text: "Do you have this blue shirt in medium size?", translation: "Bạn có chiếc áo xanh này ở size M không?" },
      { id: "p-en-601-2", text: "Can I try these shoes on?", translation: "Tôi có thể thử đôi giày này không?" }
    ],
    activities: [
      {
        id: "act-en-601-1",
        type: "multiple_choice",
        skill: "reading",
        question: "'Try on' có nghĩa là gì?",
        options: ["Mặc thử đồ","Mua hàng","Trả hàng","Xem giá"],
        correctAnswer: "Mặc thử đồ"
      },
      {
        id: "act-en-601-2",
        type: "fill_blank",
        skill: "writing",
        question: "Điền từ: 'Do you have a larger _____?' (kích cỡ)",
        prompt: "Điền từ: 'Do you have a larger _____?' (kích cỡ)",
        options: ["size","shirt","color","shoes"],
        correctAnswer: "size"
      },
      {
        id: "act-en-601-3",
        type: "multiple_choice",
        skill: "reading",
        question: "Dịch: 'What size are you?'",
        options: ["Bạn mặc size bao nhiêu?","Bạn bao nhiêu tuổi?","Bạn thích màu gì?","Giá bao nhiêu?"],
        correctAnswer: "Bạn mặc size bao nhiêu?"
      },
      {
        id: "act-en-601-4",
        type: "match_pairs",
        skill: "reading",
        question: "Ghép các cặp từ vựng với nghĩa tiếng Việt tương ứng",
        pairs: [{"left":"Shirt","right":"Áo sơ mi"},{"left":"Shoes","right":"Giày"},{"left":"Size","right":"Kích cỡ / Size"},{"left":"Try on","right":"Thử đồ"}],
        correctAnswer: "all_matched"
      },
      {
        id: "act-en-601-5",
        type: "audio_listen",
        skill: "listening",
        question: "Lắng nghe và chọn đáp án chính xác:",
        prompt: "Shirt",
        options: ["Mặc thử đồ","Mua hàng","Trả hàng","Xem giá"],
        correctAnswer: "Mặc thử đồ"
      }
    ]
  },
  {
    id: "lesson-en-602",
    unitId: "unit-en-6",
    title: "Likes & Dislikes",
    description: "Express preferences with like, love, and prefer.",
    type: "standard",
    xp: 15,
    estimatedMinutes: 5,
    order: 2,
    status: "available",
    goals: [
      { id: "g1", description: "Nắm vững các từ vựng chủ đề Likes & Dislikes" },
      { id: "g2", description: "Luyện phát âm chuẩn và phản xạ câu qua các bài tập tương tác" }
    ],
    vocabulary: [
      { id: "v-en-602-1", word: "Like", translation: "Thích", phonetic: "lyk" },
      { id: "v-en-602-2", word: "Love", translation: "Yêu thích", phonetic: "luv" },
      { id: "v-en-602-3", word: "Prefer", translation: "Thích hơn / Ưa chuộng", phonetic: "prih-fur" },
      { id: "v-en-602-4", word: "Don't like", translation: "Không thích", phonetic: "dohnt lyk" },
      { id: "v-en-602-5", word: "Favorite", translation: "Yêu thích nhất", phonetic: "fay-ver-it" }
    ],
    phrases: [
      { id: "p-en-602-1", text: "I love listening to music while I work.", translation: "Tôi rất thích nghe nhạc trong khi làm việc." },
      { id: "p-en-602-2", text: "What is your favorite food? — I prefer Italian pizza.", translation: "Món ăn yêu thích nhất của bạn là gì? — Tôi chuộng pizza Ý hơn." }
    ],
    activities: [
      {
        id: "act-en-602-1",
        type: "multiple_choice",
        skill: "reading",
        question: "'Favorite' có nghĩa là gì?",
        options: ["Yêu thích nhất","Không thích","Bình thường","Ghét"],
        correctAnswer: "Yêu thích nhất"
      },
      {
        id: "act-en-602-2",
        type: "fill_blank",
        skill: "writing",
        question: "Điền từ: 'Blue is my _____ color.' (yêu thích nhất)",
        prompt: "Điền từ: 'Blue is my _____ color.' (yêu thích nhất)",
        options: ["favorite","like","love","prefer"],
        correctAnswer: "favorite"
      },
      {
        id: "act-en-602-3",
        type: "multiple_choice",
        skill: "reading",
        question: "Dịch: 'I prefer coffee'",
        options: ["Tôi thích cà phê hơn","Tôi không thích cà phê","Tôi ghét cà phê","Tôi uống nước"],
        correctAnswer: "Tôi thích cà phê hơn"
      },
      {
        id: "act-en-602-4",
        type: "match_pairs",
        skill: "reading",
        question: "Ghép các cặp từ vựng với nghĩa tiếng Việt tương ứng",
        pairs: [{"left":"Like","right":"Thích"},{"left":"Love","right":"Yêu thích"},{"left":"Prefer","right":"Thích hơn / Ưa chuộng"},{"left":"Don't like","right":"Không thích"}],
        correctAnswer: "all_matched"
      },
      {
        id: "act-en-602-5",
        type: "audio_listen",
        skill: "listening",
        question: "Lắng nghe và chọn đáp án chính xác:",
        prompt: "Like",
        options: ["Yêu thích nhất","Không thích","Bình thường","Ghét"],
        correctAnswer: "Yêu thích nhất"
      }
    ]
  },
  {
    id: "lesson-en-603",
    unitId: "unit-en-6",
    title: "Hobbies & Free Time",
    description: "Talk about reading, sports, music, and movies.",
    type: "standard",
    xp: 15,
    estimatedMinutes: 5,
    order: 3,
    status: "available",
    goals: [
      { id: "g1", description: "Nắm vững các từ vựng chủ đề Hobbies & Free Time" },
      { id: "g2", description: "Luyện phát âm chuẩn và phản xạ câu qua các bài tập tương tác" }
    ],
    vocabulary: [
      { id: "v-en-603-1", word: "Music", translation: "Âm nhạc", phonetic: "myoo-zik" },
      { id: "v-en-603-2", word: "Movie", translation: "Phim ảnh", phonetic: "moo-vee" },
      { id: "v-en-603-3", word: "Sport", translation: "Thể thao", phonetic: "sport" },
      { id: "v-en-603-4", word: "Reading", translation: "Đọc sách", phonetic: "reed-ing" },
      { id: "v-en-603-5", word: "Travel", translation: "Du lịch", phonetic: "trav-ul" }
    ],
    phrases: [
      { id: "p-en-603-1", text: "In my free time, I enjoy reading books and watching movies.", translation: "Vào thời gian rảnh, tôi thích đọc sách và xem phim." },
      { id: "p-en-603-2", text: "Do you play any sports on weekends?", translation: "Bạn có chơi môn thể thao nào vào cuối tuần không?" }
    ],
    activities: [
      {
        id: "act-en-603-1",
        type: "multiple_choice",
        skill: "reading",
        question: "'Reading' là hoạt động nào?",
        options: ["Đọc sách","Xem phim","Nghe nhạc","Đá bóng"],
        correctAnswer: "Đọc sách"
      },
      {
        id: "act-en-603-2",
        type: "fill_blank",
        skill: "writing",
        question: "Điền từ: 'Listening to _____ relaxes me.' (âm nhạc)",
        prompt: "Điền từ: 'Listening to _____ relaxes me.' (âm nhạc)",
        options: ["music","sport","travel","movie"],
        correctAnswer: "music"
      },
      {
        id: "act-en-603-3",
        type: "multiple_choice",
        skill: "reading",
        question: "Dịch: 'I love travel'",
        options: ["Tôi yêu thích du lịch","Tôi thích ở nhà","Tôi thích đi làm","Tôi thích nấu ăn"],
        correctAnswer: "Tôi yêu thích du lịch"
      },
      {
        id: "act-en-603-4",
        type: "match_pairs",
        skill: "reading",
        question: "Ghép các cặp từ vựng với nghĩa tiếng Việt tương ứng",
        pairs: [{"left":"Music","right":"Âm nhạc"},{"left":"Movie","right":"Phim ảnh"},{"left":"Sport","right":"Thể thao"},{"left":"Reading","right":"Đọc sách"}],
        correctAnswer: "all_matched"
      },
      {
        id: "act-en-603-5",
        type: "audio_listen",
        skill: "listening",
        question: "Lắng nghe và chọn đáp án chính xác:",
        prompt: "Music",
        options: ["Đọc sách","Xem phim","Nghe nhạc","Đá bóng"],
        correctAnswer: "Đọc sách"
      }
    ]
  },
  {
    id: "lesson-en-604",
    unitId: "unit-en-6",
    title: "Making Invitations & Plans",
    description: "Invite friends to hang out: Let's go, Tonight, Free.",
    type: "standard",
    xp: 15,
    estimatedMinutes: 5,
    order: 4,
    status: "available",
    goals: [
      { id: "g1", description: "Nắm vững các từ vựng chủ đề Making Invitations & Plans" },
      { id: "g2", description: "Luyện phát âm chuẩn và phản xạ câu qua các bài tập tương tác" }
    ],
    vocabulary: [
      { id: "v-en-604-1", word: "Let's go", translation: "Cùng đi nào", phonetic: "lets goh" },
      { id: "v-en-604-2", word: "Tonight", translation: "Tối nay", phonetic: "tuh-nyt" },
      { id: "v-en-604-3", word: "Free", translation: "Rảnh rỗi", phonetic: "free" },
      { id: "v-en-604-4", word: "Join", translation: "Tham gia cùng", phonetic: "joyn" },
      { id: "v-en-604-5", word: "See you", translation: "Hẹn gặp bạn", phonetic: "see yoo" }
    ],
    phrases: [
      { id: "p-en-604-1", text: "Are you free tonight? Let's grab dinner together!", translation: "Tối nay bạn có rảnh không? Cùng đi ăn tối nhé!" },
      { id: "p-en-604-2", text: "Would you like to join us for coffee?", translation: "Bạn có muốn tham gia uống cà phê cùng chúng tôi không?" }
    ],
    activities: [
      {
        id: "act-en-604-1",
        type: "multiple_choice",
        skill: "reading",
        question: "'Let's go!' dùng khi nào?",
        options: ["Rủ ai đó cùng đi","Chào tạm biệt","Hỏi đường","Cảm ơn"],
        correctAnswer: "Rủ ai đó cùng đi"
      },
      {
        id: "act-en-604-2",
        type: "fill_blank",
        skill: "writing",
        question: "Điền từ: '_____ to the movies tonight!' (cùng đi)",
        prompt: "Điền từ: '_____ to the movies tonight!' (cùng đi)",
        options: ["Let's go","Join","Free","See you"],
        correctAnswer: "Let's go"
      },
      {
        id: "act-en-604-3",
        type: "multiple_choice",
        skill: "reading",
        question: "Dịch: 'Are you free tonight?'",
        options: ["Tối nay bạn có rảnh không?","Tối nay bạn bận gì?","Hôm nay thứ mấy?","Bạn đi đâu đấy?"],
        correctAnswer: "Tối nay bạn có rảnh không?"
      },
      {
        id: "act-en-604-4",
        type: "match_pairs",
        skill: "reading",
        question: "Ghép các cặp từ vựng với nghĩa tiếng Việt tương ứng",
        pairs: [{"left":"Let's go","right":"Cùng đi nào"},{"left":"Tonight","right":"Tối nay"},{"left":"Free","right":"Rảnh rỗi"},{"left":"Join","right":"Tham gia cùng"}],
        correctAnswer: "all_matched"
      },
      {
        id: "act-en-604-5",
        type: "audio_listen",
        skill: "listening",
        question: "Lắng nghe và chọn đáp án chính xác:",
        prompt: "Let's go",
        options: ["Rủ ai đó cùng đi","Chào tạm biệt","Hỏi đường","Cảm ơn"],
        correctAnswer: "Rủ ai đó cùng đi"
      }
    ]
  },
  {
    id: "lesson-en-605",
    unitId: "unit-en-6",
    title: "AI Teacher: Weekend Chat",
    description: "Trò chuyện thoải mái về sở thích và kế hoạch cuối tuần.",
    type: "audio_ai",
    xp: 25,
    estimatedMinutes: 5,
    order: 5,
    heroImage: images.mascotWelcome,
    status: "available",
    goals: [
      { id: "g1", description: "Luyện phản xạ giao tiếp thực tế với AI Teacher Emma" },
      { id: "g2", description: "Vận dụng từ vựng trọng tâm vào ngữ cảnh hội thoại tự nhiên" }
    ],
    vocabulary: [
      { id: "v-ai-en-6-1", word: "Music", translation: "Âm nhạc" },
      { id: "v-ai-en-6-2", word: "Movie", translation: "Phim ảnh" },
      { id: "v-ai-en-6-3", word: "Weekend", translation: "Cuối tuần" },
      { id: "v-ai-en-6-4", word: "Free", translation: "Rảnh rỗi" },
      { id: "v-ai-en-6-5", word: "Favorite", translation: "Yêu thích nhất" }
    ],
    phrases: [],
    activities: [],
    aiTeacherPrompt: {
      scenario: "Relaxing Sunday brunch with Emma in Soho",
      systemPrompt: "You are Emma, an upbeat, caring English teacher. Speak in natural conversational English with contractions (I'm, let's, you're, that's). Keep every reply strictly to 1 or 2 warm, short sentences. Introduce phrases slowly, explain clearly, listen carefully to the student, and ask them to repeat or answer. Celebrate wins: 'Love it!', 'That's perfect!'. Stay strictly on lesson words: Music, Movie, Weekend, Free, Favorite. Do not go off-topic.",
      initialGreeting: "Happy weekend! It's so nice to relax. What do you usually like to do in your free time?",
      targetVocabulary: ["Music","Movie","Weekend","Free","Favorite"],
      suggestedResponses: ["I love watching movies.","I usually play sports with friends.","I enjoy reading books."],
      difficulty: "beginner"
    }
  },
  {
    id: "lesson-en-701",
    unitId: "unit-en-7",
    title: "What Did You Do Yesterday?",
    description: "Learn regular and irregular past tense verbs in English.",
    type: "standard",
    xp: 15,
    estimatedMinutes: 5,
    order: 1,
    status: "available",
    goals: [
      { id: "g1", description: "Nắm vững các từ vựng chủ đề What Did You Do Yesterday?" },
      { id: "g2", description: "Luyện phát âm chuẩn và phản xạ câu qua các bài tập tương tác" }
    ],
    vocabulary: [
      { id: "v-en-701-1", word: "Yesterday", translation: "Hôm qua", phonetic: "yes-ter-day" },
      { id: "v-en-701-2", word: "Went", translation: "Đã đi (quá khứ của go)", phonetic: "went" },
      { id: "v-en-701-3", word: "Ate", translation: "Đã ăn (quá khứ của eat)", phonetic: "ate" },
      { id: "v-en-701-4", word: "Saw", translation: "Đã thấy / Đã xem", phonetic: "saw" },
      { id: "v-en-701-5", word: "Bought", translation: "Đã mua (quá khứ của buy)", phonetic: "baht" }
    ],
    phrases: [
      { id: "p-en-701-1", text: "Yesterday, I went to the park and ate ice cream.", translation: "Hôm qua, tôi đã đi đến công viên và ăn kem." },
      { id: "p-en-701-2", text: "What did you do last weekend?", translation: "Bạn đã làm gì vào cuối tuần trước?" }
    ],
    activities: [
      {
        id: "act-en-701-1",
        type: "multiple_choice",
        skill: "reading",
        question: "'Went' là dạng quá khứ của động từ nào?",
        options: ["Go","Eat","See","Buy"],
        correctAnswer: "Go"
      },
      {
        id: "act-en-701-2",
        type: "fill_blank",
        skill: "writing",
        question: "Điền từ: 'Yesterday I _____ to the cinema.' (đã đi)",
        prompt: "Điền từ: 'Yesterday I _____ to the cinema.' (đã đi)",
        options: ["went","go","goes","going"],
        correctAnswer: "went"
      },
      {
        id: "act-en-701-3",
        type: "multiple_choice",
        skill: "reading",
        question: "Dịch: 'Yesterday'",
        options: ["Hôm qua","Hôm nay","Ngày mai","Tuần sau"],
        correctAnswer: "Hôm qua"
      },
      {
        id: "act-en-701-4",
        type: "match_pairs",
        skill: "reading",
        question: "Ghép các cặp từ vựng với nghĩa tiếng Việt tương ứng",
        pairs: [{"left":"Yesterday","right":"Hôm qua"},{"left":"Went","right":"Đã đi (quá khứ của go)"},{"left":"Ate","right":"Đã ăn (quá khứ của eat)"},{"left":"Saw","right":"Đã thấy / Đã xem"}],
        correctAnswer: "all_matched"
      },
      {
        id: "act-en-701-5",
        type: "audio_listen",
        skill: "listening",
        question: "Lắng nghe và chọn đáp án chính xác:",
        prompt: "Yesterday",
        options: ["Go","Eat","See","Buy"],
        correctAnswer: "Go"
      }
    ]
  },
  {
    id: "lesson-en-702",
    unitId: "unit-en-7",
    title: "Childhood & Growing Up",
    description: "Talk about where you grew up and your childhood memories.",
    type: "standard",
    xp: 15,
    estimatedMinutes: 5,
    order: 2,
    status: "available",
    goals: [
      { id: "g1", description: "Nắm vững các từ vựng chủ đề Childhood & Growing Up" },
      { id: "g2", description: "Luyện phát âm chuẩn và phản xạ câu qua các bài tập tương tác" }
    ],
    vocabulary: [
      { id: "v-en-702-1", word: "Childhood", translation: "Thời thơ ấu / Tuổi thơ", phonetic: "chyld-hood" },
      { id: "v-en-702-2", word: "Grew up", translation: "Đã lớn lên / Trưởng thành", phonetic: "groo up" },
      { id: "v-en-702-3", word: "Hometown", translation: "Quê hương", phonetic: "hohm-town" },
      { id: "v-en-702-4", word: "Used to", translation: "Đã từng (thói quen quá khứ)", phonetic: "yoost too" },
      { id: "v-en-702-5", word: "Memory", translation: "Kỷ niệm / Ký ức", phonetic: "mem-uh-ree" }
    ],
    phrases: [
      { id: "p-en-702-1", text: "I grew up in a peaceful small town.", translation: "Tôi đã lớn lên ở một thị trấn nhỏ yên bình." },
      { id: "p-en-702-2", text: "I used to ride my bike every summer.", translation: "Tôi từng đạp xe đạp vào mỗi mùa hè." }
    ],
    activities: [
      {
        id: "act-en-702-1",
        type: "multiple_choice",
        skill: "reading",
        question: "'Used to' diễn tả điều gì?",
        options: ["Thói quen trong quá khứ","Hành động ở tương lai","Sự việc đang xảy ra","Mệnh lệnh"],
        correctAnswer: "Thói quen trong quá khứ"
      },
      {
        id: "act-en-702-2",
        type: "fill_blank",
        skill: "writing",
        question: "Điền từ: 'I _____ in Hanoi.' (đã lớn lên)",
        prompt: "Điền từ: 'I _____ in Hanoi.' (đã lớn lên)",
        options: ["grew up","childhood","used to","memory"],
        correctAnswer: "grew up"
      },
      {
        id: "act-en-702-3",
        type: "multiple_choice",
        skill: "reading",
        question: "Dịch: 'My hometown'",
        options: ["Quê hương của tôi","Trường học của tôi","Bạn bè của tôi","Nhà của tôi"],
        correctAnswer: "Quê hương của tôi"
      },
      {
        id: "act-en-702-4",
        type: "match_pairs",
        skill: "reading",
        question: "Ghép các cặp từ vựng với nghĩa tiếng Việt tương ứng",
        pairs: [{"left":"Childhood","right":"Thời thơ ấu / Tuổi thơ"},{"left":"Grew up","right":"Đã lớn lên / Trưởng thành"},{"left":"Hometown","right":"Quê hương"},{"left":"Used to","right":"Đã từng (thói quen quá khứ)"}],
        correctAnswer: "all_matched"
      },
      {
        id: "act-en-702-5",
        type: "audio_listen",
        skill: "listening",
        question: "Lắng nghe và chọn đáp án chính xác:",
        prompt: "Childhood",
        options: ["Thói quen trong quá khứ","Hành động ở tương lai","Sự việc đang xảy ra","Mệnh lệnh"],
        correctAnswer: "Thói quen trong quá khứ"
      }
    ]
  },
  {
    id: "lesson-en-703",
    unitId: "unit-en-7",
    title: "A Memorable Trip",
    description: "Recount an unforgettable vacation with details.",
    type: "standard",
    xp: 15,
    estimatedMinutes: 5,
    order: 3,
    status: "available",
    goals: [
      { id: "g1", description: "Nắm vững các từ vựng chủ đề A Memorable Trip" },
      { id: "g2", description: "Luyện phát âm chuẩn và phản xạ câu qua các bài tập tương tác" }
    ],
    vocabulary: [
      { id: "v-en-703-1", word: "Vacation", translation: "Kỳ nghỉ", phonetic: "vay-kay-shun" },
      { id: "v-en-703-2", word: "Visited", translation: "Đã ghé thăm", phonetic: "viz-ih-tid" },
      { id: "v-en-703-3", word: "Unforgettable", translation: "Không thể nào quên", phonetic: "un-fer-get-uh-bul" },
      { id: "v-en-703-4", word: "Met", translation: "Đã gặp gỡ", phonetic: "met" },
      { id: "v-en-703-5", word: "Stayed", translation: "Đã ở lại (khách sạn...)", phonetic: "stayd" }
    ],
    phrases: [
      { id: "p-en-703-1", text: "Last year, I visited Da Nang and stayed near the beach.", translation: "Năm ngoái, tôi đã thăm Đà Nẵng và ở gần bờ biển." },
      { id: "p-en-703-2", text: "It was an unforgettable trip!", translation: "Đó là một chuyến đi không thể nào quên!" }
    ],
    activities: [
      {
        id: "act-en-703-1",
        type: "multiple_choice",
        skill: "reading",
        question: "'Unforgettable' nghĩa là gì?",
        options: ["Không thể nào quên","Đáng sợ","Nhàm chán","Nguy hiểm"],
        correctAnswer: "Không thể nào quên"
      },
      {
        id: "act-en-703-2",
        type: "fill_blank",
        skill: "writing",
        question: "Điền từ: 'We _____ at a nice hotel.' (đã ở lại)",
        prompt: "Điền từ: 'We _____ at a nice hotel.' (đã ở lại)",
        options: ["stayed","stay","visited","went"],
        correctAnswer: "stayed"
      },
      {
        id: "act-en-703-3",
        type: "multiple_choice",
        skill: "reading",
        question: "Dịch: 'I visited my grandparents'",
        options: ["Tôi đã thăm ông bà của tôi","Tôi đi học","Tôi ăn tối","Tôi đi làm"],
        correctAnswer: "Tôi đã thăm ông bà của tôi"
      },
      {
        id: "act-en-703-4",
        type: "match_pairs",
        skill: "reading",
        question: "Ghép các cặp từ vựng với nghĩa tiếng Việt tương ứng",
        pairs: [{"left":"Vacation","right":"Kỳ nghỉ"},{"left":"Visited","right":"Đã ghé thăm"},{"left":"Unforgettable","right":"Không thể nào quên"},{"left":"Met","right":"Đã gặp gỡ"}],
        correctAnswer: "all_matched"
      },
      {
        id: "act-en-703-5",
        type: "audio_listen",
        skill: "listening",
        question: "Lắng nghe và chọn đáp án chính xác:",
        prompt: "Vacation",
        options: ["Không thể nào quên","Đáng sợ","Nhàm chán","Nguy hiểm"],
        correctAnswer: "Không thể nào quên"
      }
    ]
  },
  {
    id: "lesson-en-704",
    unitId: "unit-en-7",
    title: "Storytelling (First, Then, Finally)",
    description: "Link past events using sequence connectors.",
    type: "standard",
    xp: 15,
    estimatedMinutes: 5,
    order: 4,
    status: "available",
    goals: [
      { id: "g1", description: "Nắm vững các từ vựng chủ đề Storytelling (First, Then, Finally)" },
      { id: "g2", description: "Luyện phát âm chuẩn và phản xạ câu qua các bài tập tương tác" }
    ],
    vocabulary: [
      { id: "v-en-704-1", word: "First", translation: "Đầu tiên", phonetic: "furst" },
      { id: "v-en-704-2", word: "Then / After that", translation: "Sau đó", phonetic: "then / af-ter that" },
      { id: "v-en-704-3", word: "Suddenly", translation: "Bỗng nhiên / Đột ngột", phonetic: "sud-un-lee" },
      { id: "v-en-704-4", word: "Finally", translation: "Cuối cùng", phonetic: "fye-nuh-lee" },
      { id: "v-en-704-5", word: "Happened", translation: "Đã xảy ra", phonetic: "hap-und" }
    ],
    phrases: [
      { id: "p-en-704-1", text: "First, we arrived at the airport. Then, we checked into the hotel.", translation: "Đầu tiên, chúng tôi đến sân bay. Sau đó, chúng tôi nhận phòng." },
      { id: "p-en-704-2", text: "Finally, we watched the fireworks together.", translation: "Cuối cùng, chúng tôi đã ngắm pháo hoa cùng nhau." }
    ],
    activities: [
      {
        id: "act-en-704-1",
        type: "multiple_choice",
        skill: "reading",
        question: "Từ nối nào dùng để kết thúc câu chuyện?",
        options: ["Finally","First","Suddenly","Yesterday"],
        correctAnswer: "Finally"
      },
      {
        id: "act-en-704-2",
        type: "fill_blank",
        skill: "writing",
        question: "Điền từ: '_____, we reached our destination.' (cuối cùng)",
        prompt: "Điền từ: '_____, we reached our destination.' (cuối cùng)",
        options: ["Finally","First","Then","After"],
        correctAnswer: "Finally"
      },
      {
        id: "act-en-704-3",
        type: "multiple_choice",
        skill: "reading",
        question: "Dịch: 'Suddenly'",
        options: ["Bỗng nhiên / Đột ngột","Cuối cùng","Đầu tiên","Sau đó"],
        correctAnswer: "Bỗng nhiên / Đột ngột"
      },
      {
        id: "act-en-704-4",
        type: "match_pairs",
        skill: "reading",
        question: "Ghép các cặp từ vựng với nghĩa tiếng Việt tương ứng",
        pairs: [{"left":"First","right":"Đầu tiên"},{"left":"Then / After that","right":"Sau đó"},{"left":"Suddenly","right":"Bỗng nhiên / Đột ngột"},{"left":"Finally","right":"Cuối cùng"}],
        correctAnswer: "all_matched"
      },
      {
        id: "act-en-704-5",
        type: "audio_listen",
        skill: "listening",
        question: "Lắng nghe và chọn đáp án chính xác:",
        prompt: "First",
        options: ["Finally","First","Suddenly","Yesterday"],
        correctAnswer: "Finally"
      }
    ]
  },
  {
    id: "lesson-en-705",
    unitId: "unit-en-7",
    title: "AI Practice: Kể Lại Kỷ Niệm Chuyến Đi Với Emma",
    description: "Luyện phản xạ thì quá khứ tiếng Anh cùng cô giáo Emma.",
    type: "audio_ai",
    xp: 25,
    estimatedMinutes: 5,
    order: 5,
    heroImage: images.mascotWelcome,
    status: "available",
    goals: [
      { id: "g1", description: "Luyện phản xạ giao tiếp thực tế với AI Teacher Emma" },
      { id: "g2", description: "Vận dụng từ vựng trọng tâm vào ngữ cảnh hội thoại tự nhiên" }
    ],
    vocabulary: [
      { id: "v-ai-en-7-1", word: "Yesterday", translation: "Hôm qua" },
      { id: "v-ai-en-7-2", word: "Went", translation: "Đã đi (quá khứ của go)" },
      { id: "v-ai-en-7-3", word: "Visited", translation: "Đã ghé thăm" },
      { id: "v-ai-en-7-4", word: "Stayed", translation: "Đã ở lại (khách sạn...)" },
      { id: "v-ai-en-7-5", word: "Unforgettable", translation: "Không thể nào quên" }
    ],
    phrases: [],
    activities: [],
    aiTeacherPrompt: {
      scenario: "Buổi trò chuyện cà phê chiều kể về kỳ nghỉ đáng nhớ",
      systemPrompt: "You are Emma, an upbeat, caring English teacher. Speak in natural conversational English with contractions (I'm, let's, you're, that's). Keep every reply strictly to 1 or 2 warm, short sentences. Introduce phrases slowly, explain clearly, listen carefully to the student, and ask them to repeat or answer. Celebrate wins: 'Love it!', 'That's perfect!'. Stay strictly on lesson words: Yesterday, Went, Visited, Stayed, Unforgettable. Do not go off-topic.",
      initialGreeting: "Hi there! Tell me about your last vacation or what you did last weekend. Where did you go?",
      targetVocabulary: ["Yesterday","Went","Visited","Stayed","Unforgettable"],
      suggestedResponses: ["Last weekend I went to the beach with my friends.","We ate delicious seafood and visited ancient pagodas.","It was an unforgettable trip!"],
      difficulty: "intermediate"
    }
  },
  {
    id: "lesson-en-801",
    unitId: "unit-en-8",
    title: "Body Parts & Common Symptoms",
    description: "Describe common aches and pains.",
    type: "standard",
    xp: 15,
    estimatedMinutes: 5,
    order: 1,
    status: "available",
    goals: [
      { id: "g1", description: "Nắm vững các từ vựng chủ đề Body Parts & Common Symptoms" },
      { id: "g2", description: "Luyện phát âm chuẩn và phản xạ câu qua các bài tập tương tác" }
    ],
    vocabulary: [
      { id: "v-en-801-1", word: "Headache", translation: "Đau đầu", phonetic: "hed-ayk" },
      { id: "v-en-801-2", word: "Fever", translation: "Cơn sốt", phonetic: "fee-ver" },
      { id: "v-en-801-3", word: "Stomachache", translation: "Đau dạ dày / Đau bụng", phonetic: "stum-uk-ayk" },
      { id: "v-en-801-4", word: "Sore throat", translation: "Đau họng", phonetic: "sor throht" },
      { id: "v-en-801-5", word: "Cough", translation: "Cơn ho", phonetic: "kawf" }
    ],
    phrases: [
      { id: "p-en-801-1", text: "I have a terrible headache and a high fever.", translation: "Tôi bị đau đầu dữ dội và sốt cao." },
      { id: "p-en-801-2", text: "My throat hurts when I swallow.", translation: "Họng của tôi bị đau khi nuốt." }
    ],
    activities: [
      {
        id: "act-en-801-1",
        type: "multiple_choice",
        skill: "reading",
        question: "'Headache' nghĩa là gì?",
        options: ["Đau đầu","Đau bụng","Đau chân","Đau mắt"],
        correctAnswer: "Đau đầu"
      },
      {
        id: "act-en-801-2",
        type: "fill_blank",
        skill: "writing",
        question: "Điền từ: 'I have a sore _____.' (họng)",
        prompt: "Điền từ: 'I have a sore _____.' (họng)",
        options: ["throat","fever","cough","headache"],
        correctAnswer: "throat"
      },
      {
        id: "act-en-801-3",
        type: "multiple_choice",
        skill: "reading",
        question: "Dịch: 'I have a fever'",
        options: ["Tôi bị sốt","Tôi bị ho","Tôi bị lạnh","Tôi đói bụng"],
        correctAnswer: "Tôi bị sốt"
      },
      {
        id: "act-en-801-4",
        type: "match_pairs",
        skill: "reading",
        question: "Ghép các cặp từ vựng với nghĩa tiếng Việt tương ứng",
        pairs: [{"left":"Headache","right":"Đau đầu"},{"left":"Fever","right":"Cơn sốt"},{"left":"Stomachache","right":"Đau dạ dày / Đau bụng"},{"left":"Sore throat","right":"Đau họng"}],
        correctAnswer: "all_matched"
      },
      {
        id: "act-en-801-5",
        type: "audio_listen",
        skill: "listening",
        question: "Lắng nghe và chọn đáp án chính xác:",
        prompt: "Headache",
        options: ["Đau đầu","Đau bụng","Đau chân","Đau mắt"],
        correctAnswer: "Đau đầu"
      }
    ]
  },
  {
    id: "lesson-en-802",
    unitId: "unit-en-8",
    title: "At the Doctor's Office",
    description: "Consult a physician and explain how you feel.",
    type: "standard",
    xp: 15,
    estimatedMinutes: 5,
    order: 2,
    status: "available",
    goals: [
      { id: "g1", description: "Nắm vững các từ vựng chủ đề At the Doctor's Office" },
      { id: "g2", description: "Luyện phát âm chuẩn và phản xạ câu qua các bài tập tương tác" }
    ],
    vocabulary: [
      { id: "v-en-802-1", word: "Doctor", translation: "Bác sĩ", phonetic: "dok-ter" },
      { id: "v-en-802-2", word: "Pain", translation: "Cơn đau", phonetic: "payn" },
      { id: "v-en-802-3", word: "Prescription", translation: "Đơn thuốc", phonetic: "pree-skrip-shun" },
      { id: "v-en-802-4", word: "Rest", translation: "Nghỉ ngơi", phonetic: "rest" },
      { id: "v-en-802-5", word: "Examine", translation: "Khám bệnh", phonetic: "eg-zam-in" }
    ],
    phrases: [
      { id: "p-en-802-1", text: "Where does it hurt? - It hurts right here.", translation: "Chỗ nào bị đau vậy? - Nó đau ngay chỗ này." },
      { id: "p-en-802-2", text: "You should drink warm water and get plenty of rest.", translation: "Bạn nên uống nước ấm và nghỉ ngơi thật nhiều." }
    ],
    activities: [
      {
        id: "act-en-802-1",
        type: "multiple_choice",
        skill: "reading",
        question: "'Prescription' nghĩa là gì?",
        options: ["Đơn thuốc","Bệnh viện","Bác sĩ","Băng dán"],
        correctAnswer: "Đơn thuốc"
      },
      {
        id: "act-en-802-2",
        type: "fill_blank",
        skill: "writing",
        question: "Điền từ: 'The doctor gave me a _____.' (đơn thuốc)",
        prompt: "Điền từ: 'The doctor gave me a _____.' (đơn thuốc)",
        options: ["prescription","headache","pain","fever"],
        correctAnswer: "prescription"
      },
      {
        id: "act-en-802-3",
        type: "multiple_choice",
        skill: "reading",
        question: "Dịch: 'Get plenty of rest'",
        options: ["Nghỉ ngơi thật nhiều","Làm việc chăm chỉ","Đi du lịch","Uống cà phê"],
        correctAnswer: "Nghỉ ngơi thật nhiều"
      },
      {
        id: "act-en-802-4",
        type: "match_pairs",
        skill: "reading",
        question: "Ghép các cặp từ vựng với nghĩa tiếng Việt tương ứng",
        pairs: [{"left":"Doctor","right":"Bác sĩ"},{"left":"Pain","right":"Cơn đau"},{"left":"Prescription","right":"Đơn thuốc"},{"left":"Rest","right":"Nghỉ ngơi"}],
        correctAnswer: "all_matched"
      },
      {
        id: "act-en-802-5",
        type: "audio_listen",
        skill: "listening",
        question: "Lắng nghe và chọn đáp án chính xác:",
        prompt: "Doctor",
        options: ["Đơn thuốc","Bệnh viện","Bác sĩ","Băng dán"],
        correctAnswer: "Đơn thuốc"
      }
    ]
  },
  {
    id: "lesson-en-803",
    unitId: "unit-en-8",
    title: "At the Pharmacy",
    description: "Buy over-the-counter medicine and ask for dosage.",
    type: "standard",
    xp: 15,
    estimatedMinutes: 5,
    order: 3,
    status: "available",
    goals: [
      { id: "g1", description: "Nắm vững các từ vựng chủ đề At the Pharmacy" },
      { id: "g2", description: "Luyện phát âm chuẩn và phản xạ câu qua các bài tập tương tác" }
    ],
    vocabulary: [
      { id: "v-en-803-1", word: "Pharmacy", translation: "Hiệu thuốc", phonetic: "fahr-muh-see" },
      { id: "v-en-803-2", word: "Medicine", translation: "Thuốc uống", phonetic: "med-ih-sin" },
      { id: "v-en-803-3", word: "Pill / Tablet", translation: "Viên thuốc", phonetic: "pil / tab-lit" },
      { id: "v-en-803-4", word: "Twice a day", translation: "Hai lần một ngày", phonetic: "twyce uh day" },
      { id: "v-en-803-5", word: "After meals", translation: "Sau bữa ăn", phonetic: "af-ter meelz" }
    ],
    phrases: [
      { id: "p-en-803-1", text: "Take one pill twice a day after meals.", translation: "Uống một viên hai lần mỗi ngày sau bữa ăn." },
      { id: "p-en-803-2", text: "Do you have anything for a cold?", translation: "Bạn có thuốc gì chữa cảm lạnh không?" }
    ],
    activities: [
      {
        id: "act-en-803-1",
        type: "multiple_choice",
        skill: "reading",
        question: "'Twice a day' nghĩa là gì?",
        options: ["Hai lần một ngày","Ba lần một ngày","Một lần một ngày","Mỗi tuần hai lần"],
        correctAnswer: "Hai lần một ngày"
      },
      {
        id: "act-en-803-2",
        type: "fill_blank",
        skill: "writing",
        question: "Điền từ: 'Take this _____ twice a day.' (thuốc)",
        prompt: "Điền từ: 'Take this _____ twice a day.' (thuốc)",
        options: ["medicine","pharmacy","doctor","fever"],
        correctAnswer: "medicine"
      },
      {
        id: "act-en-803-3",
        type: "multiple_choice",
        skill: "reading",
        question: "Dịch: 'Take after meals'",
        options: ["Uống sau bữa ăn","Uống trước bữa ăn","Uống khi đói","Uống lúc ngủ"],
        correctAnswer: "Uống sau bữa ăn"
      },
      {
        id: "act-en-803-4",
        type: "match_pairs",
        skill: "reading",
        question: "Ghép các cặp từ vựng với nghĩa tiếng Việt tương ứng",
        pairs: [{"left":"Pharmacy","right":"Hiệu thuốc"},{"left":"Medicine","right":"Thuốc uống"},{"left":"Pill / Tablet","right":"Viên thuốc"},{"left":"Twice a day","right":"Hai lần một ngày"}],
        correctAnswer: "all_matched"
      },
      {
        id: "act-en-803-5",
        type: "audio_listen",
        skill: "listening",
        question: "Lắng nghe và chọn đáp án chính xác:",
        prompt: "Pharmacy",
        options: ["Hai lần một ngày","Ba lần một ngày","Một lần một ngày","Mỗi tuần hai lần"],
        correctAnswer: "Hai lần một ngày"
      }
    ]
  },
  {
    id: "lesson-en-804",
    unitId: "unit-en-8",
    title: "Healthy Lifestyle Habits",
    description: "Talk about workouts, diet, and staying fit.",
    type: "standard",
    xp: 15,
    estimatedMinutes: 5,
    order: 4,
    status: "available",
    goals: [
      { id: "g1", description: "Nắm vững các từ vựng chủ đề Healthy Lifestyle Habits" },
      { id: "g2", description: "Luyện phát âm chuẩn và phản xạ câu qua các bài tập tương tác" }
    ],
    vocabulary: [
      { id: "v-en-804-1", word: "Healthy", translation: "Lành mạnh / Khỏe mạnh", phonetic: "hel-thee" },
      { id: "v-en-804-2", word: "Exercise", translation: "Tập thể dục", phonetic: "ek-ser-syze" },
      { id: "v-en-804-3", word: "Vegetables", translation: "Rau củ quả", phonetic: "vej-tuh-bulz" },
      { id: "v-en-804-4", word: "Sleep well", translation: "Ngủ ngon giấc", phonetic: "sleep wel" },
      { id: "v-en-804-5", word: "Stress", translation: "Căng thẳng", phonetic: "stres" }
    ],
    phrases: [
      { id: "p-en-804-1", text: "Eating fresh vegetables and exercising daily keeps you fit.", translation: "Ăn rau tươi và tập thể dục mỗi ngày giúp bạn khỏe khoắn." },
      { id: "p-en-804-2", text: "Try to get at least eight hours of sleep.", translation: "Hãy cố gắng ngủ ít nhất 8 tiếng mỗi ngày." }
    ],
    activities: [
      {
        id: "act-en-804-1",
        type: "multiple_choice",
        skill: "reading",
        question: "'Exercise' nghĩa là gì?",
        options: ["Tập thể dục","Ăn uống","Đi làm","Xem tivi"],
        correctAnswer: "Tập thể dục"
      },
      {
        id: "act-en-804-2",
        type: "fill_blank",
        skill: "writing",
        question: "Điền từ: 'I _____ every morning.' (tập thể dục)",
        prompt: "Điền từ: 'I _____ every morning.' (tập thể dục)",
        options: ["exercise","stress","fever","pill"],
        correctAnswer: "exercise"
      },
      {
        id: "act-en-804-3",
        type: "multiple_choice",
        skill: "reading",
        question: "Dịch: 'Healthy food'",
        options: ["Thức ăn lành mạnh","Thức ăn nhanh","Thức ăn cay","Thức ăn đắt tiền"],
        correctAnswer: "Thức ăn lành mạnh"
      },
      {
        id: "act-en-804-4",
        type: "match_pairs",
        skill: "reading",
        question: "Ghép các cặp từ vựng với nghĩa tiếng Việt tương ứng",
        pairs: [{"left":"Healthy","right":"Lành mạnh / Khỏe mạnh"},{"left":"Exercise","right":"Tập thể dục"},{"left":"Vegetables","right":"Rau củ quả"},{"left":"Sleep well","right":"Ngủ ngon giấc"}],
        correctAnswer: "all_matched"
      },
      {
        id: "act-en-804-5",
        type: "audio_listen",
        skill: "listening",
        question: "Lắng nghe và chọn đáp án chính xác:",
        prompt: "Healthy",
        options: ["Tập thể dục","Ăn uống","Đi làm","Xem tivi"],
        correctAnswer: "Tập thể dục"
      }
    ]
  },
  {
    id: "lesson-en-805",
    unitId: "unit-en-8",
    title: "AI Practice: Đi Khám Bệnh Với Bác Sĩ David",
    description: "Đóng vai bệnh nhân miêu tả triệu chứng và nhận lời khuyên từ bác sĩ David.",
    type: "audio_ai",
    xp: 25,
    estimatedMinutes: 5,
    order: 5,
    heroImage: images.mascotWelcome,
    status: "available",
    goals: [
      { id: "g1", description: "Luyện phản xạ giao tiếp thực tế với AI Teacher Emma" },
      { id: "g2", description: "Vận dụng từ vựng trọng tâm vào ngữ cảnh hội thoại tự nhiên" }
    ],
    vocabulary: [
      { id: "v-ai-en-8-1", word: "Headache", translation: "Đau đầu" },
      { id: "v-ai-en-8-2", word: "Fever", translation: "Cơn sốt" },
      { id: "v-ai-en-8-3", word: "Doctor", translation: "Bác sĩ" },
      { id: "v-ai-en-8-4", word: "Medicine", translation: "Thuốc uống" },
      { id: "v-ai-en-8-5", word: "Rest", translation: "Nghỉ ngơi" }
    ],
    phrases: [],
    activities: [],
    aiTeacherPrompt: {
      scenario: "Phòng khám đa khoa hiện đại tại trung tâm London",
      systemPrompt: "You are Emma, an upbeat, caring English teacher. Speak in natural conversational English with contractions (I'm, let's, you're, that's). Keep every reply strictly to 1 or 2 warm, short sentences. Introduce phrases slowly, explain clearly, listen carefully to the student, and ask them to repeat or answer. Celebrate wins: 'Love it!', 'That's perfect!'. Stay strictly on lesson words: Headache, Fever, Doctor, Medicine, Rest. Do not go off-topic.",
      initialGreeting: "Good morning! Please have a seat. What brings you to the clinic today? How are you feeling?",
      targetVocabulary: ["Headache","Fever","Doctor","Medicine","Rest"],
      suggestedResponses: ["I have a severe headache and a high fever.","It started two days ago and my throat hurts.","Thank you doctor, I will take the medicine and rest."],
      difficulty: "intermediate"
    }
  },
  {
    id: "lesson-en-901",
    unitId: "unit-en-9",
    title: "Office Life & Colleagues",
    description: "Vocabulary for office equipment and daily tasks.",
    type: "standard",
    xp: 15,
    estimatedMinutes: 5,
    order: 1,
    status: "available",
    goals: [
      { id: "g1", description: "Nắm vững các từ vựng chủ đề Office Life & Colleagues" },
      { id: "g2", description: "Luyện phát âm chuẩn và phản xạ câu qua các bài tập tương tác" }
    ],
    vocabulary: [
      { id: "v-en-901-1", word: "Office", translation: "Văn phòng làm việc", phonetic: "of-is" },
      { id: "v-en-901-2", word: "Colleague", translation: "Đồng nghiệp", phonetic: "kol-eeg" },
      { id: "v-en-901-3", word: "Meeting", translation: "Cuộc họp", phonetic: "mee-ting" },
      { id: "v-en-901-4", word: "Project", translation: "Dự án", phonetic: "proj-ekt" },
      { id: "v-en-901-5", word: "Deadline", translation: "Thời hạn hoàn thành", phonetic: "ded-lyne" }
    ],
    phrases: [
      { id: "p-en-901-1", text: "We have an important team meeting at 10 AM.", translation: "Chúng tôi có một cuộc họp nhóm quan trọng lúc 10 giờ sáng." },
      { id: "p-en-901-2", text: "I need to finish this report before the deadline.", translation: "Tôi cần hoàn thành báo cáo này trước hạn chót." }
    ],
    activities: [
      {
        id: "act-en-901-1",
        type: "multiple_choice",
        skill: "reading",
        question: "'Colleague' nghĩa là ai?",
        options: ["Đồng nghiệp","Bác sĩ","Học sinh","Khách hàng"],
        correctAnswer: "Đồng nghiệp"
      },
      {
        id: "act-en-901-2",
        type: "fill_blank",
        skill: "writing",
        question: "Điền từ: 'We have a team _____.' (cuộc họp)",
        prompt: "Điền từ: 'We have a team _____.' (cuộc họp)",
        options: ["meeting","office","colleague","headache"],
        correctAnswer: "meeting"
      },
      {
        id: "act-en-901-3",
        type: "multiple_choice",
        skill: "reading",
        question: "Dịch: 'Deadline'",
        options: ["Thời hạn hoàn thành","Cuộc họp","Văn phòng","Dự án"],
        correctAnswer: "Thời hạn hoàn thành"
      },
      {
        id: "act-en-901-4",
        type: "match_pairs",
        skill: "reading",
        question: "Ghép các cặp từ vựng với nghĩa tiếng Việt tương ứng",
        pairs: [{"left":"Office","right":"Văn phòng làm việc"},{"left":"Colleague","right":"Đồng nghiệp"},{"left":"Meeting","right":"Cuộc họp"},{"left":"Project","right":"Dự án"}],
        correctAnswer: "all_matched"
      },
      {
        id: "act-en-901-5",
        type: "audio_listen",
        skill: "listening",
        question: "Lắng nghe và chọn đáp án chính xác:",
        prompt: "Office",
        options: ["Đồng nghiệp","Bác sĩ","Học sinh","Khách hàng"],
        correctAnswer: "Đồng nghiệp"
      }
    ]
  },
  {
    id: "lesson-en-902",
    unitId: "unit-en-9",
    title: "Writing Professional Emails",
    description: "Standard greetings, sign-offs, and polite requests in emails.",
    type: "standard",
    xp: 15,
    estimatedMinutes: 5,
    order: 2,
    status: "available",
    goals: [
      { id: "g1", description: "Nắm vững các từ vựng chủ đề Writing Professional Emails" },
      { id: "g2", description: "Luyện phát âm chuẩn và phản xạ câu qua các bài tập tương tác" }
    ],
    vocabulary: [
      { id: "v-en-902-1", word: "Dear...", translation: "Kính gửi... / Thân gửi...", phonetic: "deer" },
      { id: "v-en-902-2", word: "Attached", translation: "Được đính kèm (tệp)", phonetic: "uh-tacht" },
      { id: "v-en-902-3", word: "Please find", translation: "Xin vui lòng xem...", phonetic: "pleez fynd" },
      { id: "v-en-902-4", word: "Looking forward to", translation: "Rất mong đợi...", phonetic: "look-ing for-ward too" },
      { id: "v-en-902-5", word: "Best regards", translation: "Trân trọng kính thư", phonetic: "best ree-gardz" }
    ],
    phrases: [
      { id: "p-en-902-1", text: "Dear Mr. Smith, please find the attached project proposal.", translation: "Kính gửi ông Smith, xin vui lòng xem đề xuất dự án đính kèm." },
      { id: "p-en-902-2", text: "I look forward to hearing from you soon. Best regards!", translation: "Tôi rất mong sớm nhận được phản hồi từ bạn. Trân trọng!" }
    ],
    activities: [
      {
        id: "act-en-902-1",
        type: "multiple_choice",
        skill: "reading",
        question: "Cụm từ kết thúc email lịch sự trang trọng nhất là:",
        options: ["Best regards","Bye bye","See you later","Thanks a lot"],
        correctAnswer: "Best regards"
      },
      {
        id: "act-en-902-2",
        type: "fill_blank",
        skill: "writing",
        question: "Điền từ: 'I look _____ to your reply.' (mong đợi)",
        prompt: "Điền từ: 'I look _____ to your reply.' (mong đợi)",
        options: ["forward","attached","regards","dear"],
        correctAnswer: "forward"
      },
      {
        id: "act-en-902-3",
        type: "multiple_choice",
        skill: "reading",
        question: "Dịch: 'Please find attached'",
        options: ["Xin vui lòng xem tệp đính kèm","Xin gửi lời chào","Xin mời họp","Xin đừng lo lắng"],
        correctAnswer: "Xin vui lòng xem tệp đính kèm"
      },
      {
        id: "act-en-902-4",
        type: "match_pairs",
        skill: "reading",
        question: "Ghép các cặp từ vựng với nghĩa tiếng Việt tương ứng",
        pairs: [{"left":"Dear...","right":"Kính gửi... / Thân gửi..."},{"left":"Attached","right":"Được đính kèm (tệp)"},{"left":"Please find","right":"Xin vui lòng xem..."},{"left":"Looking forward to","right":"Rất mong đợi..."}],
        correctAnswer: "all_matched"
      },
      {
        id: "act-en-902-5",
        type: "audio_listen",
        skill: "listening",
        question: "Lắng nghe và chọn đáp án chính xác:",
        prompt: "Dear...",
        options: ["Best regards","Bye bye","See you later","Thanks a lot"],
        correctAnswer: "Best regards"
      }
    ]
  },
  {
    id: "lesson-en-903",
    unitId: "unit-en-9",
    title: "Job Interview Fundamentals",
    description: "Common questions asked in job interviews.",
    type: "standard",
    xp: 15,
    estimatedMinutes: 5,
    order: 3,
    status: "available",
    goals: [
      { id: "g1", description: "Nắm vững các từ vựng chủ đề Job Interview Fundamentals" },
      { id: "g2", description: "Luyện phát âm chuẩn và phản xạ câu qua các bài tập tương tác" }
    ],
    vocabulary: [
      { id: "v-en-903-1", word: "Interview", translation: "Buổi phỏng vấn", phonetic: "in-ter-vyoo" },
      { id: "v-en-903-2", word: "Experience", translation: "Kinh nghiệm làm việc", phonetic: "ek-speer-ee-uns" },
      { id: "v-en-903-3", word: "Position", translation: "Vị trí ứng tuyển", phonetic: "puh-zish-un" },
      { id: "v-en-903-4", word: "Responsible for", translation: "Chịu trách nhiệm về...", phonetic: "ree-spon-suh-bul for" },
      { id: "v-en-903-5", word: "Hire", translation: "Tuyển dụng / Thuê", phonetic: "hyer" }
    ],
    phrases: [
      { id: "p-en-903-1", text: "Tell me about your previous work experience.", translation: "Hãy kể cho tôi nghe về kinh nghiệm làm việc trước đây của bạn." },
      { id: "p-en-903-2", text: "I was responsible for managing customer relations.", translation: "Tôi từng chịu trách nhiệm quản lý quan hệ khách hàng." }
    ],
    activities: [
      {
        id: "act-en-903-1",
        type: "multiple_choice",
        skill: "reading",
        question: "'Experience' nghĩa là gì?",
        options: ["Kinh nghiệm","Bằng cấp","Văn phòng","Lương bổng"],
        correctAnswer: "Kinh nghiệm"
      },
      {
        id: "act-en-903-2",
        type: "fill_blank",
        skill: "writing",
        question: "Điền từ: 'I have three years of _____.' (kinh nghiệm)",
        prompt: "Điền từ: 'I have three years of _____.' (kinh nghiệm)",
        options: ["experience","interview","position","deadline"],
        correctAnswer: "experience"
      },
      {
        id: "act-en-903-3",
        type: "multiple_choice",
        skill: "reading",
        question: "Dịch: 'Job interview'",
        options: ["Phỏng vấn xin việc","Công việc mới","Cuộc họp nhóm","Ký hợp đồng"],
        correctAnswer: "Phỏng vấn xin việc"
      },
      {
        id: "act-en-903-4",
        type: "match_pairs",
        skill: "reading",
        question: "Ghép các cặp từ vựng với nghĩa tiếng Việt tương ứng",
        pairs: [{"left":"Interview","right":"Buổi phỏng vấn"},{"left":"Experience","right":"Kinh nghiệm làm việc"},{"left":"Position","right":"Vị trí ứng tuyển"},{"left":"Responsible for","right":"Chịu trách nhiệm về..."}],
        correctAnswer: "all_matched"
      },
      {
        id: "act-en-903-5",
        type: "audio_listen",
        skill: "listening",
        question: "Lắng nghe và chọn đáp án chính xác:",
        prompt: "Interview",
        options: ["Kinh nghiệm","Bằng cấp","Văn phòng","Lương bổng"],
        correctAnswer: "Kinh nghiệm"
      }
    ]
  },
  {
    id: "lesson-en-904",
    unitId: "unit-en-9",
    title: "Skills & Personal Strengths",
    description: "Highlight your strengths and teamwork abilities.",
    type: "standard",
    xp: 15,
    estimatedMinutes: 5,
    order: 4,
    status: "available",
    goals: [
      { id: "g1", description: "Nắm vững các từ vựng chủ đề Skills & Personal Strengths" },
      { id: "g2", description: "Luyện phát âm chuẩn và phản xạ câu qua các bài tập tương tác" }
    ],
    vocabulary: [
      { id: "v-en-904-1", word: "Strength", translation: "Điểm mạnh", phonetic: "strength" },
      { id: "v-en-904-2", word: "Team player", translation: "Người làm việc nhóm tốt", phonetic: "teem play-er" },
      { id: "v-en-904-3", word: "Hardworking", translation: "Chăm chỉ", phonetic: "hard-wur-king" },
      { id: "v-en-904-4", word: "Communication", translation: "Kỹ năng giao tiếp", phonetic: "kuh-myoo-nih-kay-shun" },
      { id: "v-en-904-5", word: "Problem solver", translation: "Người giải quyết vấn đề tốt", phonetic: "prob-lem sol-ver" }
    ],
    phrases: [
      { id: "p-en-904-1", text: "My greatest strength is my strong communication skills.", translation: "Điểm mạnh lớn nhất của tôi là kỹ năng giao tiếp tốt." },
      { id: "p-en-904-2", text: "I am a reliable team player who works well under pressure.", translation: "Tôi là người làm việc nhóm đáng tin cậy và chịu được áp lực." }
    ],
    activities: [
      {
        id: "act-en-904-1",
        type: "multiple_choice",
        skill: "reading",
        question: "'Team player' là người như thế nào?",
        options: ["Người hợp tác nhóm tốt","Người thích làm việc một mình","Cầu thủ bóng đá","Giám đốc"],
        correctAnswer: "Người hợp tác nhóm tốt"
      },
      {
        id: "act-en-904-2",
        type: "fill_blank",
        skill: "writing",
        question: "Điền từ: 'I am a hardworking _____.' (người làm việc nhóm)",
        prompt: "Điền từ: 'I am a hardworking _____.' (người làm việc nhóm)",
        options: ["team player","office","deadline","project"],
        correctAnswer: "team player"
      },
      {
        id: "act-en-904-3",
        type: "multiple_choice",
        skill: "reading",
        question: "Dịch: 'My greatest strength'",
        options: ["Điểm mạnh lớn nhất của tôi","Kinh nghiệm của tôi","Điểm yếu của tôi","Mục tiêu của tôi"],
        correctAnswer: "Điểm mạnh lớn nhất của tôi"
      },
      {
        id: "act-en-904-4",
        type: "match_pairs",
        skill: "reading",
        question: "Ghép các cặp từ vựng với nghĩa tiếng Việt tương ứng",
        pairs: [{"left":"Strength","right":"Điểm mạnh"},{"left":"Team player","right":"Người làm việc nhóm tốt"},{"left":"Hardworking","right":"Chăm chỉ"},{"left":"Communication","right":"Kỹ năng giao tiếp"}],
        correctAnswer: "all_matched"
      },
      {
        id: "act-en-904-5",
        type: "audio_listen",
        skill: "listening",
        question: "Lắng nghe và chọn đáp án chính xác:",
        prompt: "Strength",
        options: ["Người hợp tác nhóm tốt","Người thích làm việc một mình","Cầu thủ bóng đá","Giám đốc"],
        correctAnswer: "Người hợp tác nhóm tốt"
      }
    ]
  },
  {
    id: "lesson-en-905",
    unitId: "unit-en-9",
    title: "AI Practice: Phỏng Vấn Xin Việc Thử Cùng Sarah",
    description: "Thực hành trả lời các câu hỏi phỏng vấn xin việc bằng tiếng Anh cùng nhà tuyển dụng Sarah.",
    type: "audio_ai",
    xp: 25,
    estimatedMinutes: 5,
    order: 5,
    heroImage: images.mascotWelcome,
    status: "available",
    goals: [
      { id: "g1", description: "Luyện phản xạ giao tiếp thực tế với AI Teacher Emma" },
      { id: "g2", description: "Vận dụng từ vựng trọng tâm vào ngữ cảnh hội thoại tự nhiên" }
    ],
    vocabulary: [
      { id: "v-ai-en-9-1", word: "Experience", translation: "Kinh nghiệm làm việc" },
      { id: "v-ai-en-9-2", word: "Position", translation: "Vị trí ứng tuyển" },
      { id: "v-ai-en-9-3", word: "Strength", translation: "Điểm mạnh" },
      { id: "v-ai-en-9-4", word: "Team player", translation: "Người làm việc nhóm tốt" },
      { id: "v-ai-en-9-5", word: "Responsible", translation: "Có trách nhiệm" }
    ],
    phrases: [],
    activities: [],
    aiTeacherPrompt: {
      scenario: "Phòng họp phỏng vấn tuyển dụng tại một công ty công nghệ quốc tế",
      systemPrompt: "You are Emma, an upbeat, caring English teacher. Speak in natural conversational English with contractions (I'm, let's, you're, that's). Keep every reply strictly to 1 or 2 warm, short sentences. Introduce phrases slowly, explain clearly, listen carefully to the student, and ask them to repeat or answer. Celebrate wins: 'Love it!', 'That's perfect!'. Stay strictly on lesson words: Experience, Position, Strength, Team player, Responsible. Do not go off-topic.",
      initialGreeting: "Welcome to the interview! Thank you for coming today. Could you start by telling me a little about yourself and your experience?",
      targetVocabulary: ["Experience","Position","Strength","Team player","Responsible"],
      suggestedResponses: ["I have two years of experience in marketing and customer service.","My greatest strength is that I am a dedicated team player.","I am very excited about this position because I want to grow."],
      difficulty: "intermediate"
    }
  },
  {
    id: "lesson-en-1001",
    unitId: "unit-en-10",
    title: "Natural Landscapes (Beach, Mountain, Forest)",
    description: "Describe the beauty of the outdoors.",
    type: "standard",
    xp: 15,
    estimatedMinutes: 5,
    order: 1,
    status: "available",
    goals: [
      { id: "g1", description: "Nắm vững các từ vựng chủ đề Natural Landscapes (Beach, Mountain, Forest)" },
      { id: "g2", description: "Luyện phát âm chuẩn và phản xạ câu qua các bài tập tương tác" }
    ],
    vocabulary: [
      { id: "v-en-1001-1", word: "Mountain", translation: "Ngọn núi", phonetic: "mown-tin" },
      { id: "v-en-1001-2", word: "Beach", translation: "Bãi biển", phonetic: "beech" },
      { id: "v-en-1001-3", word: "Forest", translation: "Khu rừng", phonetic: "for-ist" },
      { id: "v-en-1001-4", word: "Island", translation: "Hòn đảo", phonetic: "eye-lund" },
      { id: "v-en-1001-5", word: "Breathtaking", translation: "Đẹp nghẹt thở / Ngoạn mục", phonetic: "breth-tay-king" }
    ],
    phrases: [
      { id: "p-en-1001-1", text: "The view from the top of the mountain was breathtaking.", translation: "Khung cảnh từ đỉnh núi đẹp đến nghẹt thở." },
      { id: "p-en-1001-2", text: "We walked along the golden sandy beach.", translation: "Chúng tôi đã đi dạo dọc bờ biển cát vàng." }
    ],
    activities: [
      {
        id: "act-en-1001-1",
        type: "multiple_choice",
        skill: "reading",
        question: "'Island' nghĩa là gì?",
        options: ["Hòn đảo","Ngọn núi","Dòng sông","Bãi biển"],
        correctAnswer: "Hòn đảo"
      },
      {
        id: "act-en-1001-2",
        type: "fill_blank",
        skill: "writing",
        question: "Điền từ: 'We climbed the high _____.' (ngọn núi)",
        prompt: "Điền từ: 'We climbed the high _____.' (ngọn núi)",
        options: ["mountain","island","forest","beach"],
        correctAnswer: "mountain"
      },
      {
        id: "act-en-1001-3",
        type: "multiple_choice",
        skill: "reading",
        question: "Dịch: 'Breathtaking view'",
        options: ["Cảnh đẹp ngoạn mục","Cảnh xấu xí","Trời mưa to","Đường đi khó"],
        correctAnswer: "Cảnh đẹp ngoạn mục"
      },
      {
        id: "act-en-1001-4",
        type: "match_pairs",
        skill: "reading",
        question: "Ghép các cặp từ vựng với nghĩa tiếng Việt tương ứng",
        pairs: [{"left":"Mountain","right":"Ngọn núi"},{"left":"Beach","right":"Bãi biển"},{"left":"Forest","right":"Khu rừng"},{"left":"Island","right":"Hòn đảo"}],
        correctAnswer: "all_matched"
      },
      {
        id: "act-en-1001-5",
        type: "audio_listen",
        skill: "listening",
        question: "Lắng nghe và chọn đáp án chính xác:",
        prompt: "Mountain",
        options: ["Hòn đảo","Ngọn núi","Dòng sông","Bãi biển"],
        correctAnswer: "Hòn đảo"
      }
    ]
  },
  {
    id: "lesson-en-1002",
    unitId: "unit-en-10",
    title: "Booking Guided Tours & Activities",
    description: "Inquire about tour packages, departure times, and prices.",
    type: "standard",
    xp: 15,
    estimatedMinutes: 5,
    order: 2,
    status: "available",
    goals: [
      { id: "g1", description: "Nắm vững các từ vựng chủ đề Booking Guided Tours & Activities" },
      { id: "g2", description: "Luyện phát âm chuẩn và phản xạ câu qua các bài tập tương tác" }
    ],
    vocabulary: [
      { id: "v-en-1002-1", word: "Guided tour", translation: "Tour có hướng dẫn viên", phonetic: "gye-did toor" },
      { id: "v-en-1002-2", word: "Tour guide", translation: "Hướng dẫn viên du lịch", phonetic: "toor gyde" },
      { id: "v-en-1002-3", word: "Departure", translation: "Giờ khởi hành", phonetic: "dee-par-cher" },
      { id: "v-en-1002-4", word: "Includes", translation: "Bao gồm", phonetic: "in-kloodz" },
      { id: "v-en-1002-5", word: "Attraction", translation: "Điểm tham quan hấp dẫn", phonetic: "uh-trak-shun" }
    ],
    phrases: [
      { id: "p-en-1002-1", text: "Does this day tour include lunch and entrance tickets?", translation: "Tour một ngày này có bao gồm bữa trưa và vé vào cửa không?" },
      { id: "p-en-1002-2", text: "What time is the bus departure tomorrow?", translation: "Ngày mai xe buýt khởi hành lúc mấy giờ thế?" }
    ],
    activities: [
      {
        id: "act-en-1002-1",
        type: "multiple_choice",
        skill: "reading",
        question: "'Tour guide' là ai?",
        options: ["Hướng dẫn viên du lịch","Tài xế lái xe","Bác sĩ","Đầu bếp"],
        correctAnswer: "Hướng dẫn viên du lịch"
      },
      {
        id: "act-en-1002-2",
        type: "fill_blank",
        skill: "writing",
        question: "Điền từ: 'The price _____ hotel and breakfast.' (bao gồm)",
        prompt: "Điền từ: 'The price _____ hotel and breakfast.' (bao gồm)",
        options: ["includes","departure","guide","tour"],
        correctAnswer: "includes"
      },
      {
        id: "act-en-1002-3",
        type: "multiple_choice",
        skill: "reading",
        question: "Dịch: 'Departure time'",
        options: ["Giờ khởi hành","Giờ đến nơi","Giờ ăn tối","Giờ mở cửa"],
        correctAnswer: "Giờ khởi hành"
      },
      {
        id: "act-en-1002-4",
        type: "match_pairs",
        skill: "reading",
        question: "Ghép các cặp từ vựng với nghĩa tiếng Việt tương ứng",
        pairs: [{"left":"Guided tour","right":"Tour có hướng dẫn viên"},{"left":"Tour guide","right":"Hướng dẫn viên du lịch"},{"left":"Departure","right":"Giờ khởi hành"},{"left":"Includes","right":"Bao gồm"}],
        correctAnswer: "all_matched"
      },
      {
        id: "act-en-1002-5",
        type: "audio_listen",
        skill: "listening",
        question: "Lắng nghe và chọn đáp án chính xác:",
        prompt: "Guided tour",
        options: ["Hướng dẫn viên du lịch","Tài xế lái xe","Bác sĩ","Đầu bếp"],
        correctAnswer: "Hướng dẫn viên du lịch"
      }
    ]
  },
  {
    id: "lesson-en-1003",
    unitId: "unit-en-10",
    title: "Handling Travel Disruptions",
    description: "Deal with flight delays, lost luggage, and schedule changes.",
    type: "standard",
    xp: 15,
    estimatedMinutes: 5,
    order: 3,
    status: "available",
    goals: [
      { id: "g1", description: "Nắm vững các từ vựng chủ đề Handling Travel Disruptions" },
      { id: "g2", description: "Luyện phát âm chuẩn và phản xạ câu qua các bài tập tương tác" }
    ],
    vocabulary: [
      { id: "v-en-1003-1", word: "Delayed", translation: "Bị hoãn / Chậm trễ", phonetic: "dee-layd" },
      { id: "v-en-1003-2", word: "Cancelled", translation: "Bị hủy bỏ", phonetic: "kan-suld" },
      { id: "v-en-1003-3", word: "Lost luggage", translation: "Hành lý bị thất lạc", phonetic: "lost lug-ij" },
      { id: "v-en-1003-4", word: "Refund", translation: "Hoàn lại tiền", phonetic: "ree-fund" },
      { id: "v-en-1003-5", word: "Customer service", translation: "Dịch vụ chăm sóc khách hàng", phonetic: "kus-tuh-mer sur-vis" }
    ],
    phrases: [
      { id: "p-en-1003-1", text: "Excuse me, my flight to London has been delayed by two hours.", translation: "Xin lỗi, chuyến bay của tôi đi London đã bị hoãn 2 tiếng." },
      { id: "p-en-1003-2", text: "My luggage did not arrive at the baggage claim.", translation: "Hành lý của tôi không thấy xuất hiện ở băng chuyền." }
    ],
    activities: [
      {
        id: "act-en-1003-1",
        type: "multiple_choice",
        skill: "reading",
        question: "'Delayed' nghĩa là gì?",
        options: ["Bị hoãn / Chậm trễ","Đúng giờ","Hạ cánh","Khởi hành"],
        correctAnswer: "Bị hoãn / Chậm trễ"
      },
      {
        id: "act-en-1003-2",
        type: "fill_blank",
        skill: "writing",
        question: "Điền từ: 'Our flight was _____.' (bị hoãn)",
        prompt: "Điền từ: 'Our flight was _____.' (bị hoãn)",
        options: ["delayed","refund","luggage","service"],
        correctAnswer: "delayed"
      },
      {
        id: "act-en-1003-3",
        type: "multiple_choice",
        skill: "reading",
        question: "Dịch: 'Lost luggage'",
        options: ["Thất lạc hành lý","Mua vé mới","Hành lý xách tay","Quên hộ chiếu"],
        correctAnswer: "Thất lạc hành lý"
      },
      {
        id: "act-en-1003-4",
        type: "match_pairs",
        skill: "reading",
        question: "Ghép các cặp từ vựng với nghĩa tiếng Việt tương ứng",
        pairs: [{"left":"Delayed","right":"Bị hoãn / Chậm trễ"},{"left":"Cancelled","right":"Bị hủy bỏ"},{"left":"Lost luggage","right":"Hành lý bị thất lạc"},{"left":"Refund","right":"Hoàn lại tiền"}],
        correctAnswer: "all_matched"
      },
      {
        id: "act-en-1003-5",
        type: "audio_listen",
        skill: "listening",
        question: "Lắng nghe và chọn đáp án chính xác:",
        prompt: "Delayed",
        options: ["Bị hoãn / Chậm trễ","Đúng giờ","Hạ cánh","Khởi hành"],
        correctAnswer: "Bị hoãn / Chậm trễ"
      }
    ]
  },
  {
    id: "lesson-en-1004",
    unitId: "unit-en-10",
    title: "Traditional Festivals & Holidays",
    description: "Describe festive seasons, celebrations, and traditions.",
    type: "standard",
    xp: 15,
    estimatedMinutes: 5,
    order: 4,
    status: "available",
    goals: [
      { id: "g1", description: "Nắm vững các từ vựng chủ đề Traditional Festivals & Holidays" },
      { id: "g2", description: "Luyện phát âm chuẩn và phản xạ câu qua các bài tập tương tác" }
    ],
    vocabulary: [
      { id: "v-en-1004-1", word: "Festival", translation: "Lễ hội truyền thống", phonetic: "fes-tuh-vul" },
      { id: "v-en-1004-2", word: "Celebrate", translation: "Kỷ niệm / Ăn mừng", phonetic: "sel-uh-brayt" },
      { id: "v-en-1004-3", word: "Tradition", translation: "Phong tục truyền thống", phonetic: "truh-dish-un" },
      { id: "v-en-1004-4", word: "Fireworks", translation: "Pháo hoa", phonetic: "fyer-wurks" },
      { id: "v-en-1004-5", word: "Holiday season", translation: "Mùa nghỉ lễ", phonetic: "hol-ih-day see-zun" }
    ],
    phrases: [
      { id: "p-en-1004-1", text: "People gather in the city square to celebrate the New Year.", translation: "Mọi người tụ tập tại quảng trường thành phố để đón mừng năm mới." },
      { id: "p-en-1004-2", text: "The fireworks display over the bay was stunning.", translation: "Màn bắn pháo hoa trên vịnh thật là lộng lẫy." }
    ],
    activities: [
      {
        id: "act-en-1004-1",
        type: "multiple_choice",
        skill: "reading",
        question: "'Celebrate' nghĩa là gì?",
        options: ["Kỷ niệm / Ăn mừng","Đi ngủ","Làm việc","Đi chợ"],
        correctAnswer: "Kỷ niệm / Ăn mừng"
      },
      {
        id: "act-en-1004-2",
        type: "fill_blank",
        skill: "writing",
        question: "Điền từ: 'We _____ Christmas with our family.' (ăn mừng)",
        prompt: "Điền từ: 'We _____ Christmas with our family.' (ăn mừng)",
        options: ["celebrate","festival","tradition","fireworks"],
        correctAnswer: "celebrate"
      },
      {
        id: "act-en-1004-3",
        type: "multiple_choice",
        skill: "reading",
        question: "Dịch: 'Watch fireworks'",
        options: ["Ngắm pháo hoa","Đốt lửa trại","Xem ca nhạc","Ăn cỗ"],
        correctAnswer: "Ngắm pháo hoa"
      },
      {
        id: "act-en-1004-4",
        type: "match_pairs",
        skill: "reading",
        question: "Ghép các cặp từ vựng với nghĩa tiếng Việt tương ứng",
        pairs: [{"left":"Festival","right":"Lễ hội truyền thống"},{"left":"Celebrate","right":"Kỷ niệm / Ăn mừng"},{"left":"Tradition","right":"Phong tục truyền thống"},{"left":"Fireworks","right":"Pháo hoa"}],
        correctAnswer: "all_matched"
      },
      {
        id: "act-en-1004-5",
        type: "audio_listen",
        skill: "listening",
        question: "Lắng nghe và chọn đáp án chính xác:",
        prompt: "Festival",
        options: ["Kỷ niệm / Ăn mừng","Đi ngủ","Làm việc","Đi chợ"],
        correctAnswer: "Kỷ niệm / Ăn mừng"
      }
    ]
  },
  {
    id: "lesson-en-1005",
    unitId: "unit-en-10",
    title: "AI Practice: Lên Kế Hoạch Kỳ Nghỉ Cùng Hướng Dẫn Viên Leo",
    description: "Lên kế hoạch kỳ nghỉ khám phá thiên nhiên mơ ước cùng hướng dẫn viên du lịch Leo.",
    type: "audio_ai",
    xp: 25,
    estimatedMinutes: 5,
    order: 5,
    heroImage: images.mascotWelcome,
    status: "available",
    goals: [
      { id: "g1", description: "Luyện phản xạ giao tiếp thực tế với AI Teacher Emma" },
      { id: "g2", description: "Vận dụng từ vựng trọng tâm vào ngữ cảnh hội thoại tự nhiên" }
    ],
    vocabulary: [
      { id: "v-ai-en-10-1", word: "Beach", translation: "Bãi biển" },
      { id: "v-ai-en-10-2", word: "Mountain", translation: "Ngọn núi" },
      { id: "v-ai-en-10-3", word: "Guided tour", translation: "Tour có hướng dẫn viên" },
      { id: "v-ai-en-10-4", word: "Breathtaking", translation: "Đẹp nghẹt thở / Ngoạn mục" },
      { id: "v-ai-en-10-5", word: "Festival", translation: "Lễ hội truyền thống" }
    ],
    phrases: [],
    activities: [],
    aiTeacherPrompt: {
      scenario: "Trung tâm du lịch khám phá đảo tại Honolulu Hawaii",
      systemPrompt: "You are Emma, an upbeat, caring English teacher. Speak in natural conversational English with contractions (I'm, let's, you're, that's). Keep every reply strictly to 1 or 2 warm, short sentences. Introduce phrases slowly, explain clearly, listen carefully to the student, and ask them to repeat or answer. Celebrate wins: 'Love it!', 'That's perfect!'. Stay strictly on lesson words: Beach, Mountain, Guided tour, Breathtaking, Festival. Do not go off-topic.",
      initialGreeting: "Aloha! Welcome to our island tour agency. Are you looking for a relaxing beach escape or a mountain adventure?",
      targetVocabulary: ["Beach","Mountain","Guided tour","Breathtaking","Festival"],
      suggestedResponses: ["I want to book a day tour to the mountains and beach.","Does the tour include lunch and hotel pickup?","That sounds breathtaking, let's book it!"],
      difficulty: "intermediate"
    }
  },
  {
    id: "lesson-en-1101",
    unitId: "unit-en-11",
    title: "Talking About the Future (Will & Going to)",
    description: "Express future intentions and predictions.",
    type: "standard",
    xp: 15,
    estimatedMinutes: 5,
    order: 1,
    status: "available",
    goals: [
      { id: "g1", description: "Nắm vững các từ vựng chủ đề Talking About the Future (Will & Going to)" },
      { id: "g2", description: "Luyện phát âm chuẩn và phản xạ câu qua các bài tập tương tác" }
    ],
    vocabulary: [
      { id: "v-en-1101-1", word: "Will", translation: "Sẽ (quyết định ngay lúc nói)", phonetic: "wil" },
      { id: "v-en-1101-2", word: "Going to", translation: "Dự định sẽ (kế hoạch trước)", phonetic: "goh-ing too" },
      { id: "v-en-1101-3", word: "Soon", translation: "Sớm thôi", phonetic: "soon" },
      { id: "v-en-1101-4", word: "Next year", translation: "Năm tới", phonetic: "nekst yeer" },
      { id: "v-en-1101-5", word: "Plan", translation: "Kế hoạch", phonetic: "plan" }
    ],
    phrases: [
      { id: "p-en-1101-1", text: "I am going to study abroad in Canada next year.", translation: "Tôi dự định sẽ đi du học tại Canada vào năm tới." },
      { id: "p-en-1101-2", text: "I believe everything will turn out great!", translation: "Tôi tin rằng mọi chuyện sẽ trở nên thật tốt đẹp!" }
    ],
    activities: [
      {
        id: "act-en-1101-1",
        type: "multiple_choice",
        skill: "reading",
        question: "Cấu trúc 'be going to' dùng để diễn đạt điều gì?",
        options: ["Kế hoạch dự định trước trong tương lai","Hành động đã kết thúc","Lời xin lỗi","Thói quen quá khứ"],
        correctAnswer: "Kế hoạch dự định trước trong tương lai"
      },
      {
        id: "act-en-1101-2",
        type: "fill_blank",
        skill: "writing",
        question: "Điền từ: 'I am _____ to visit Tokyo.' (dự định sẽ)",
        prompt: "Điền từ: 'I am _____ to visit Tokyo.' (dự định sẽ)",
        options: ["going","will","soon","plan"],
        correctAnswer: "going"
      },
      {
        id: "act-en-1101-3",
        type: "multiple_choice",
        skill: "reading",
        question: "Dịch: 'Next year'",
        options: ["Năm tới","Năm ngoái","Tuần trước","Hôm qua"],
        correctAnswer: "Năm tới"
      },
      {
        id: "act-en-1101-4",
        type: "match_pairs",
        skill: "reading",
        question: "Ghép các cặp từ vựng với nghĩa tiếng Việt tương ứng",
        pairs: [{"left":"Will","right":"Sẽ (quyết định ngay lúc nói)"},{"left":"Going to","right":"Dự định sẽ (kế hoạch trước)"},{"left":"Soon","right":"Sớm thôi"},{"left":"Next year","right":"Năm tới"}],
        correctAnswer: "all_matched"
      },
      {
        id: "act-en-1101-5",
        type: "audio_listen",
        skill: "listening",
        question: "Lắng nghe và chọn đáp án chính xác:",
        prompt: "Will",
        options: ["Kế hoạch dự định trước trong tương lai","Hành động đã kết thúc","Lời xin lỗi","Thói quen quá khứ"],
        correctAnswer: "Kế hoạch dự định trước trong tương lai"
      }
    ]
  },
  {
    id: "lesson-en-1102",
    unitId: "unit-en-11",
    title: "Dreams & 5-Year Goals",
    description: "Discuss long-term ambitions, education, and career milestones.",
    type: "standard",
    xp: 15,
    estimatedMinutes: 5,
    order: 2,
    status: "available",
    goals: [
      { id: "g1", description: "Nắm vững các từ vựng chủ đề Dreams & 5-Year Goals" },
      { id: "g2", description: "Luyện phát âm chuẩn và phản xạ câu qua các bài tập tương tác" }
    ],
    vocabulary: [
      { id: "v-en-1102-1", word: "Dream", translation: "Ước mơ", phonetic: "dreem" },
      { id: "v-en-1102-2", word: "Goal", translation: "Mục tiêu", phonetic: "gohl" },
      { id: "v-en-1102-3", word: "Achieve", translation: "Đạt được", phonetic: "uh-cheev" },
      { id: "v-en-1102-4", word: "Graduate", translation: "Tốt nghiệp", phonetic: "graj-oo-ayt" },
      { id: "v-en-1102-5", word: "Successful", translation: "Thành công", phonetic: "suk-ses-ful" }
    ],
    phrases: [
      { id: "p-en-1102-1", text: "My ultimate dream is to start my own sustainable business.", translation: "Ước mơ lớn nhất của tôi là mở doanh nghiệp bền vững của riêng mình." },
      { id: "p-en-1102-2", text: "In five years, I hope to achieve all my professional goals.", translation: "Trong 5 năm tới, tôi hy vọng đạt được mọi mục tiêu nghề nghiệp." }
    ],
    activities: [
      {
        id: "act-en-1102-1",
        type: "multiple_choice",
        skill: "reading",
        question: "'Goal' nghĩa là gì?",
        options: ["Mục tiêu","Trường học","Kỷ niệm","Trò chơi"],
        correctAnswer: "Mục tiêu"
      },
      {
        id: "act-en-1102-2",
        type: "fill_blank",
        skill: "writing",
        question: "Điền từ: 'I want to _____ my dream.' (đạt được)",
        prompt: "Điền từ: 'I want to _____ my dream.' (đạt được)",
        options: ["achieve","goal","plan","will"],
        correctAnswer: "achieve"
      },
      {
        id: "act-en-1102-3",
        type: "multiple_choice",
        skill: "reading",
        question: "Dịch: 'Successful career'",
        options: ["Sự nghiệp thành công","Công việc thất bại","Kỳ nghỉ vui vẻ","Mục tiêu ngắn hạn"],
        correctAnswer: "Sự nghiệp thành công"
      },
      {
        id: "act-en-1102-4",
        type: "match_pairs",
        skill: "reading",
        question: "Ghép các cặp từ vựng với nghĩa tiếng Việt tương ứng",
        pairs: [{"left":"Dream","right":"Ước mơ"},{"left":"Goal","right":"Mục tiêu"},{"left":"Achieve","right":"Đạt được"},{"left":"Graduate","right":"Tốt nghiệp"}],
        correctAnswer: "all_matched"
      },
      {
        id: "act-en-1102-5",
        type: "audio_listen",
        skill: "listening",
        question: "Lắng nghe và chọn đáp án chính xác:",
        prompt: "Dream",
        options: ["Mục tiêu","Trường học","Kỷ niệm","Trò chơi"],
        correctAnswer: "Mục tiêu"
      }
    ]
  },
  {
    id: "lesson-en-1103",
    unitId: "unit-en-11",
    title: "Digital Life & Smartphone Apps",
    description: "Apps, messaging, online learning, and the internet.",
    type: "standard",
    xp: 15,
    estimatedMinutes: 5,
    order: 3,
    status: "available",
    goals: [
      { id: "g1", description: "Nắm vững các từ vựng chủ đề Digital Life & Smartphone Apps" },
      { id: "g2", description: "Luyện phát âm chuẩn và phản xạ câu qua các bài tập tương tác" }
    ],
    vocabulary: [
      { id: "v-en-1103-1", word: "Smartphone", translation: "Điện thoại thông minh", phonetic: "smart-fohn" },
      { id: "v-en-1103-2", word: "Application / App", translation: "Ứng dụng di động", phonetic: "ap-lih-kay-shun" },
      { id: "v-en-1103-3", word: "Download", translation: "Tải xuống", phonetic: "down-lohd" },
      { id: "v-en-1103-4", word: "Social media", translation: "Mạng xã hội", phonetic: "soh-shul mee-dee-uh" },
      { id: "v-en-1103-5", word: "Online learning", translation: "Học trực tuyến", phonetic: "on-lyne lur-ning" }
    ],
    phrases: [
      { id: "p-en-1103-1", text: "I use this language learning app every single day.", translation: "Tôi sử dụng ứng dụng học ngôn ngữ này mỗi ngày." },
      { id: "p-en-1103-2", text: "Can you send me the link on social media?", translation: "Bạn có thể gửi đường link qua mạng xã hội cho tôi không?" }
    ],
    activities: [
      {
        id: "act-en-1103-1",
        type: "multiple_choice",
        skill: "reading",
        question: "'Download' nghĩa là hành động gì?",
        options: ["Tải xuống","Tải lên","Xóa đi","Tắt máy"],
        correctAnswer: "Tải xuống"
      },
      {
        id: "act-en-1103-2",
        type: "fill_blank",
        skill: "writing",
        question: "Điền từ: 'I _____ the new app.' (đã tải xuống)",
        prompt: "Điền từ: 'I _____ the new app.' (đã tải xuống)",
        options: ["downloaded","social","phone","learning"],
        correctAnswer: "downloaded"
      },
      {
        id: "act-en-1103-3",
        type: "multiple_choice",
        skill: "reading",
        question: "Dịch: 'Social media'",
        options: ["Mạng xã hội","Kênh truyền hình","Báo chí","Thư viện"],
        correctAnswer: "Mạng xã hội"
      },
      {
        id: "act-en-1103-4",
        type: "match_pairs",
        skill: "reading",
        question: "Ghép các cặp từ vựng với nghĩa tiếng Việt tương ứng",
        pairs: [{"left":"Smartphone","right":"Điện thoại thông minh"},{"left":"Application / App","right":"Ứng dụng di động"},{"left":"Download","right":"Tải xuống"},{"left":"Social media","right":"Mạng xã hội"}],
        correctAnswer: "all_matched"
      },
      {
        id: "act-en-1103-5",
        type: "audio_listen",
        skill: "listening",
        question: "Lắng nghe và chọn đáp án chính xác:",
        prompt: "Smartphone",
        options: ["Tải xuống","Tải lên","Xóa đi","Tắt máy"],
        correctAnswer: "Tải xuống"
      }
    ]
  },
  {
    id: "lesson-en-1104",
    unitId: "unit-en-11",
    title: "Artificial Intelligence & Future Tech",
    description: "Talk about AI assistants, smart robots, and innovation.",
    type: "standard",
    xp: 15,
    estimatedMinutes: 5,
    order: 4,
    status: "available",
    goals: [
      { id: "g1", description: "Nắm vững các từ vựng chủ đề Artificial Intelligence & Future Tech" },
      { id: "g2", description: "Luyện phát âm chuẩn và phản xạ câu qua các bài tập tương tác" }
    ],
    vocabulary: [
      { id: "v-en-1104-1", word: "Artificial Intelligence (AI)", translation: "Trí tuệ nhân tạo", phonetic: "ar-tuh-fish-ul in-tel-ih-juns" },
      { id: "v-en-1104-2", word: "Robot", translation: "Người máy robot", phonetic: "roh-bot" },
      { id: "v-en-1104-3", word: "Smart home", translation: "Ngôi nhà thông minh", phonetic: "smart hohm" },
      { id: "v-en-1104-4", word: "Innovative", translation: "Đổi mới sáng tạo", phonetic: "in-uh-vay-tiv" },
      { id: "v-en-1104-5", word: "Future", translation: "Tương lai", phonetic: "fyoo-cher" }
    ],
    phrases: [
      { id: "p-en-1104-1", text: "AI tutors help students practice speaking anytime, anywhere.", translation: "Gia sư AI giúp học sinh luyện nói mọi lúc, mọi nơi." },
      { id: "p-en-1104-2", text: "Technology will change how we live in the future.", translation: "Công nghệ sẽ thay đổi cách chúng ta sống trong tương lai." }
    ],
    activities: [
      {
        id: "act-en-1104-1",
        type: "multiple_choice",
        skill: "reading",
        question: "'Artificial Intelligence' viết tắt là gì?",
        options: ["AI","IT","App","PC"],
        correctAnswer: "AI"
      },
      {
        id: "act-en-1104-2",
        type: "fill_blank",
        skill: "writing",
        question: "Điền từ: 'Technology in the _____.' (tương lai)",
        prompt: "Điền từ: 'Technology in the _____.' (tương lai)",
        options: ["future","past","yesterday","dream"],
        correctAnswer: "future"
      },
      {
        id: "act-en-1104-3",
        type: "multiple_choice",
        skill: "reading",
        question: "Dịch: 'In the future'",
        options: ["Trong tương lai","Trong quá khứ","Hiện tại","Hôm qua"],
        correctAnswer: "Trong tương lai"
      },
      {
        id: "act-en-1104-4",
        type: "match_pairs",
        skill: "reading",
        question: "Ghép các cặp từ vựng với nghĩa tiếng Việt tương ứng",
        pairs: [{"left":"Artificial Intelligence (AI)","right":"Trí tuệ nhân tạo"},{"left":"Robot","right":"Người máy robot"},{"left":"Smart home","right":"Ngôi nhà thông minh"},{"left":"Innovative","right":"Đổi mới sáng tạo"}],
        correctAnswer: "all_matched"
      },
      {
        id: "act-en-1104-5",
        type: "audio_listen",
        skill: "listening",
        question: "Lắng nghe và chọn đáp án chính xác:",
        prompt: "Artificial Intelligence (AI)",
        options: ["AI","IT","App","PC"],
        correctAnswer: "AI"
      }
    ]
  },
  {
    id: "lesson-en-1105",
    unitId: "unit-en-11",
    title: "AI Practice: Bàn Về Tương Lai & Công Nghệ Cùng Alex",
    description: "Thảo luận về ước mơ trong 5 năm tới và các công nghệ AI cùng chuyên gia Alex.",
    type: "audio_ai",
    xp: 25,
    estimatedMinutes: 5,
    order: 5,
    heroImage: images.mascotWelcome,
    status: "available",
    goals: [
      { id: "g1", description: "Luyện phản xạ giao tiếp thực tế với AI Teacher Emma" },
      { id: "g2", description: "Vận dụng từ vựng trọng tâm vào ngữ cảnh hội thoại tự nhiên" }
    ],
    vocabulary: [
      { id: "v-ai-en-11-1", word: "Going to", translation: "Dự định sẽ (kế hoạch trước)" },
      { id: "v-ai-en-11-2", word: "Future", translation: "Tương lai" },
      { id: "v-ai-en-11-3", word: "Goal", translation: "Mục tiêu" },
      { id: "v-ai-en-11-4", word: "Dream", translation: "Ước mơ" },
      { id: "v-ai-en-11-5", word: "AI", translation: "Trí tuệ nhân tạo" }
    ],
    phrases: [],
    activities: [],
    aiTeacherPrompt: {
      scenario: "Sân thượng trung tâm công nghệ Silicon Valley ngắm hoàng hôn",
      systemPrompt: "You are Emma, an upbeat, caring English teacher. Speak in natural conversational English with contractions (I'm, let's, you're, that's). Keep every reply strictly to 1 or 2 warm, short sentences. Introduce phrases slowly, explain clearly, listen carefully to the student, and ask them to repeat or answer. Celebrate wins: 'Love it!', 'That's perfect!'. Stay strictly on lesson words: Going to, Future, Goal, Dream, AI. Do not go off-topic.",
      initialGreeting: "Hello! It's so exciting to look ahead. What are your plans for the future? What goals do you want to achieve?",
      targetVocabulary: ["Going to","Future","Goal","Dream","AI"],
      suggestedResponses: ["I am going to become fluent in English next year.","In five years, I hope to work at an international company.","I love learning with AI because it gives me confidence!"],
      difficulty: "intermediate"
    }
  },
  {
    id: "lesson-en-1201",
    unitId: "unit-en-12",
    title: "Expressing Nuanced Opinions",
    description: "Share your perspective with agree, disagree, and in my opinion.",
    type: "standard",
    xp: 15,
    estimatedMinutes: 5,
    order: 1,
    status: "available",
    goals: [
      { id: "g1", description: "Nắm vững các từ vựng chủ đề Expressing Nuanced Opinions" },
      { id: "g2", description: "Luyện phát âm chuẩn và phản xạ câu qua các bài tập tương tác" }
    ],
    vocabulary: [
      { id: "v-en-1201-1", word: "In my opinion", translation: "Theo ý kiến của tôi", phonetic: "in mye uh-pin-yun" },
      { id: "v-en-1201-2", word: "I agree", translation: "Tôi đồng ý", phonetic: "eye uh-gree" },
      { id: "v-en-1201-3", word: "I disagree", translation: "Tôi không đồng ý", phonetic: "eye dis-uh-gree" },
      { id: "v-en-1201-4", word: "Believe", translation: "Tin rằng", phonetic: "buh-leev" },
      { id: "v-en-1201-5", word: "Perspective", translation: "Góc nhìn / Quan điểm", phonetic: "per-spek-tiv" }
    ],
    phrases: [
      { id: "p-en-1201-1", text: "In my opinion, traveling is the best way to broaden your mind.", translation: "Theo ý tôi, du lịch là cách tốt nhất để mở mang đầu óc." },
      { id: "p-en-1201-2", text: "I completely agree with your point of view.", translation: "Tôi hoàn toàn đồng ý với quan điểm của bạn." }
    ],
    activities: [
      {
        id: "act-en-1201-1",
        type: "multiple_choice",
        skill: "reading",
        question: "'I agree' nghĩa là gì?",
        options: ["Tôi đồng ý","Tôi phản đối","Tôi không biết","Tôi bận rồi"],
        correctAnswer: "Tôi đồng ý"
      },
      {
        id: "act-en-1201-2",
        type: "fill_blank",
        skill: "writing",
        question: "Điền từ: 'I completely _____ with you.' (đồng ý)",
        prompt: "Điền từ: 'I completely _____ with you.' (đồng ý)",
        options: ["agree","opinion","believe","disagree"],
        correctAnswer: "agree"
      },
      {
        id: "act-en-1201-3",
        type: "multiple_choice",
        skill: "reading",
        question: "Dịch: 'In my opinion'",
        options: ["Theo quan điểm của tôi","Cảm ơn bạn","Tôi xin lỗi","Tạm biệt"],
        correctAnswer: "Theo quan điểm của tôi"
      },
      {
        id: "act-en-1201-4",
        type: "match_pairs",
        skill: "reading",
        question: "Ghép các cặp từ vựng với nghĩa tiếng Việt tương ứng",
        pairs: [{"left":"In my opinion","right":"Theo ý kiến của tôi"},{"left":"I agree","right":"Tôi đồng ý"},{"left":"I disagree","right":"Tôi không đồng ý"},{"left":"Believe","right":"Tin rằng"}],
        correctAnswer: "all_matched"
      },
      {
        id: "act-en-1201-5",
        type: "audio_listen",
        skill: "listening",
        question: "Lắng nghe và chọn đáp án chính xác:",
        prompt: "In my opinion",
        options: ["Tôi đồng ý","Tôi phản đối","Tôi không biết","Tôi bận rồi"],
        correctAnswer: "Tôi đồng ý"
      }
    ]
  },
  {
    id: "lesson-en-1202",
    unitId: "unit-en-12",
    title: "Everyday English Idioms",
    description: "Learn essential idioms like piece of cake and hit the books.",
    type: "standard",
    xp: 15,
    estimatedMinutes: 5,
    order: 2,
    status: "available",
    goals: [
      { id: "g1", description: "Nắm vững các từ vựng chủ đề Everyday English Idioms" },
      { id: "g2", description: "Luyện phát âm chuẩn và phản xạ câu qua các bài tập tương tác" }
    ],
    vocabulary: [
      { id: "v-en-1202-1", word: "Piece of cake", translation: "Dễ như ăn bánh / Cực kỳ dễ", phonetic: "pees uv kayk" },
      { id: "v-en-1202-2", word: "Hit the books", translation: "Vùi đầu vào học", phonetic: "hit thuh books" },
      { id: "v-en-1202-3", word: "Once in a blue moon", translation: "Hiếm khi / Ngàn năm một thuở", phonetic: "wuns in uh bloo moon" },
      { id: "v-en-1202-4", word: "Break a leg", translation: "Chúc may mắn nhé!", phonetic: "brayk uh leg" },
      { id: "v-en-1202-5", word: "Cost an arm and a leg", translation: "Đắt cắt cổ", phonetic: "kost an arm" }
    ],
    phrases: [
      { id: "p-en-1202-1", text: "Don't worry about the quiz, it's a piece of cake!", translation: "Đừng lo về bài kiểm tra, nó dễ như ăn kẹo ấy mà!" },
      { id: "p-en-1202-2", text: "Break a leg on your final presentation today!", translation: "Chúc bài thuyết trình hôm nay may mắn và thành công rực rỡ nhé!" }
    ],
    activities: [
      {
        id: "act-en-1202-1",
        type: "multiple_choice",
        skill: "reading",
        question: "Thành ngữ 'Piece of cake' có nghĩa là gì?",
        options: ["Rất dễ dàng","Rất khó khăn","Một miếng bánh ngọt","Rất đắt tiền"],
        correctAnswer: "Rất dễ dàng"
      },
      {
        id: "act-en-1202-2",
        type: "fill_blank",
        skill: "writing",
        question: "Điền từ: 'This quiz is a _____ of cake!'",
        prompt: "Điền từ: 'This quiz is a _____ of cake!'",
        options: ["piece","arm","moon","book"],
        correctAnswer: "piece"
      },
      {
        id: "act-en-1202-3",
        type: "multiple_choice",
        skill: "reading",
        question: "Dịch: 'Break a leg!'",
        options: ["Chúc may mắn thành công!","Bị gãy chân","Cẩn thận nhé","Đừng đi"],
        correctAnswer: "Chúc may mắn thành công!"
      },
      {
        id: "act-en-1202-4",
        type: "match_pairs",
        skill: "reading",
        question: "Ghép các cặp từ vựng với nghĩa tiếng Việt tương ứng",
        pairs: [{"left":"Piece of cake","right":"Dễ như ăn bánh / Cực kỳ dễ"},{"left":"Hit the books","right":"Vùi đầu vào học"},{"left":"Once in a blue moon","right":"Hiếm khi / Ngàn năm một thuở"},{"left":"Break a leg","right":"Chúc may mắn nhé!"}],
        correctAnswer: "all_matched"
      },
      {
        id: "act-en-1202-5",
        type: "audio_listen",
        skill: "listening",
        question: "Lắng nghe và chọn đáp án chính xác:",
        prompt: "Piece of cake",
        options: ["Rất dễ dàng","Rất khó khăn","Một miếng bánh ngọt","Rất đắt tiền"],
        correctAnswer: "Rất dễ dàng"
      }
    ]
  },
  {
    id: "lesson-en-1203",
    unitId: "unit-en-12",
    title: "Cultural Etiquette & Traditions",
    description: "Discuss polite customs and global cultural differences.",
    type: "standard",
    xp: 15,
    estimatedMinutes: 5,
    order: 3,
    status: "available",
    goals: [
      { id: "g1", description: "Nắm vững các từ vựng chủ đề Cultural Etiquette & Traditions" },
      { id: "g2", description: "Luyện phát âm chuẩn và phản xạ câu qua các bài tập tương tác" }
    ],
    vocabulary: [
      { id: "v-en-1203-1", word: "Culture", translation: "Văn hóa", phonetic: "kul-cher" },
      { id: "v-en-1203-2", word: "Custom", translation: "Phong tục tập quán", phonetic: "kus-tum" },
      { id: "v-en-1203-3", word: "Polite", translation: "Lịch sự / Lễ phép", phonetic: "puh-lyte" },
      { id: "v-en-1203-4", word: "Respect", translation: "Tôn trọng", phonetic: "ree-spekt" },
      { id: "v-en-1203-5", word: "Tradition", translation: "Truyền thống", phonetic: "truh-dish-un" }
    ],
    phrases: [
      { id: "p-en-1203-1", text: "It is important to respect local customs when traveling abroad.", translation: "Điều quan trọng là phải tôn trọng phong tục địa phương khi du lịch." },
      { id: "p-en-1203-2", text: "In many cultures, shaking hands is a standard polite greeting.", translation: "Ở nhiều nền văn hóa, bắt tay là lời chào lịch sự chuẩn mực." }
    ],
    activities: [
      {
        id: "act-en-1203-1",
        type: "multiple_choice",
        skill: "reading",
        question: "'Polite' nghĩa là gì?",
        options: ["Lịch sự","Bất lịch sự","Xấu hổ","Nóng tính"],
        correctAnswer: "Lịch sự"
      },
      {
        id: "act-en-1203-2",
        type: "fill_blank",
        skill: "writing",
        question: "Điền từ: 'Always be _____ to elderly people.' (lịch sự)",
        prompt: "Điền từ: 'Always be _____ to elderly people.' (lịch sự)",
        options: ["polite","culture","tradition","custom"],
        correctAnswer: "polite"
      },
      {
        id: "act-en-1203-3",
        type: "multiple_choice",
        skill: "reading",
        question: "Dịch: 'Respect local traditions'",
        options: ["Tôn trọng truyền thống địa phương","Bỏ qua truyền thống","Đi xem lễ hội","Mua đồ lưu niệm"],
        correctAnswer: "Tôn trọng truyền thống địa phương"
      },
      {
        id: "act-en-1203-4",
        type: "match_pairs",
        skill: "reading",
        question: "Ghép các cặp từ vựng với nghĩa tiếng Việt tương ứng",
        pairs: [{"left":"Culture","right":"Văn hóa"},{"left":"Custom","right":"Phong tục tập quán"},{"left":"Polite","right":"Lịch sự / Lễ phép"},{"left":"Respect","right":"Tôn trọng"}],
        correctAnswer: "all_matched"
      },
      {
        id: "act-en-1203-5",
        type: "audio_listen",
        skill: "listening",
        question: "Lắng nghe và chọn đáp án chính xác:",
        prompt: "Culture",
        options: ["Lịch sự","Bất lịch sự","Xấu hổ","Nóng tính"],
        correctAnswer: "Lịch sự"
      }
    ]
  },
  {
    id: "lesson-en-1204",
    unitId: "unit-en-12",
    title: "Comprehensive A2 Review",
    description: "Consolidate past tense, health, workplace, future, and opinions.",
    type: "standard",
    xp: 15,
    estimatedMinutes: 5,
    order: 4,
    status: "available",
    goals: [
      { id: "g1", description: "Nắm vững các từ vựng chủ đề Comprehensive A2 Review" },
      { id: "g2", description: "Luyện phát âm chuẩn và phản xạ câu qua các bài tập tương tác" }
    ],
    vocabulary: [
      { id: "v-en-1204-1", word: "Review", translation: "Ôn tập / Tổng kết", phonetic: "ree-vyoo" },
      { id: "v-en-1204-2", word: "Grammar", translation: "Ngữ pháp", phonetic: "gram-er" },
      { id: "v-en-1204-3", word: "Vocabulary", translation: "Từ vựng", phonetic: "voh-kab-yoo-lair-ee" },
      { id: "v-en-1204-4", word: "Confident", translation: "Tự tin", phonetic: "kon-fih-dunt" },
      { id: "v-en-1204-5", word: "Mastered", translation: "Đã làm chủ / Thành thạo", phonetic: "mas-terd" }
    ],
    phrases: [
      { id: "p-en-1204-1", text: "You have mastered the foundational grammar and vocabulary of A2!", translation: "Bạn đã làm chủ toàn bộ ngữ pháp và từ vựng nền tảng của A2!" },
      { id: "p-en-1204-2", text: "I feel confident speaking English in daily conversations.", translation: "Tôi cảm thấy tự tin khi nói tiếng Anh trong các cuộc trò chuyện hàng ngày." }
    ],
    activities: [
      {
        id: "act-en-1204-1",
        type: "multiple_choice",
        skill: "reading",
        question: "'Confident' nghĩa là trạng thái gì?",
        options: ["Tự tin","Lo lắng","Sợ hãi","Buồn bã"],
        correctAnswer: "Tự tin"
      },
      {
        id: "act-en-1204-2",
        type: "fill_blank",
        skill: "writing",
        question: "Điền từ: 'I feel _____ speaking English.' (tự tin)",
        prompt: "Điền từ: 'I feel _____ speaking English.' (tự tin)",
        options: ["confident","grammar","review","custom"],
        correctAnswer: "confident"
      },
      {
        id: "act-en-1204-3",
        type: "multiple_choice",
        skill: "reading",
        question: "Dịch: 'I feel confident'",
        options: ["Tôi cảm thấy tự tin","Tôi cảm thấy mệt","Tôi đói bụng","Tôi sợ hãi"],
        correctAnswer: "Tôi cảm thấy tự tin"
      },
      {
        id: "act-en-1204-4",
        type: "match_pairs",
        skill: "reading",
        question: "Ghép các cặp từ vựng với nghĩa tiếng Việt tương ứng",
        pairs: [{"left":"Review","right":"Ôn tập / Tổng kết"},{"left":"Grammar","right":"Ngữ pháp"},{"left":"Vocabulary","right":"Từ vựng"},{"left":"Confident","right":"Tự tin"}],
        correctAnswer: "all_matched"
      },
      {
        id: "act-en-1204-5",
        type: "audio_listen",
        skill: "listening",
        question: "Lắng nghe và chọn đáp án chính xác:",
        prompt: "Review",
        options: ["Tự tin","Lo lắng","Sợ hãi","Buồn bã"],
        correctAnswer: "Tự tin"
      }
    ]
  },
  {
    id: "lesson-en-1205",
    unitId: "unit-en-12",
    title: "AI Practice: Tốt Nghiệp Khóa Học CEFR A2 Cùng Emma",
    description: "Đàm thoại tự do tốt nghiệp chứng chỉ A2 tổng kết cả 12 Unit cùng cô giáo Emma.",
    type: "audio_ai",
    xp: 25,
    estimatedMinutes: 5,
    order: 5,
    heroImage: images.mascotWelcome,
    status: "available",
    goals: [
      { id: "g1", description: "Luyện phản xạ giao tiếp thực tế với AI Teacher Emma" },
      { id: "g2", description: "Vận dụng từ vựng trọng tâm vào ngữ cảnh hội thoại tự nhiên" }
    ],
    vocabulary: [
      { id: "v-ai-en-12-1", word: "Congratulations", translation: "Chúc mừng" },
      { id: "v-ai-en-12-2", word: "A2 Level", translation: "Trình độ A2" },
      { id: "v-ai-en-12-3", word: "Confident", translation: "Tự tin" },
      { id: "v-ai-en-12-4", word: "In my opinion", translation: "Theo ý kiến của tôi" },
      { id: "v-ai-en-12-5", word: "Future", translation: "Tương lai" }
    ],
    phrases: [],
    activities: [],
    aiTeacherPrompt: {
      scenario: "Sân khấu lễ trao chứng chỉ tốt nghiệp khóa học tiếng Anh A2",
      systemPrompt: "You are Emma, an upbeat, caring English teacher. Speak in natural conversational English with contractions (I'm, let's, you're, that's). Keep every reply strictly to 1 or 2 warm, short sentences. Introduce phrases slowly, explain clearly, listen carefully to the student, and ask them to repeat or answer. Celebrate wins: 'Love it!', 'That's perfect!'. Stay strictly on lesson words: Congratulations, A2 Level, Confident, In my opinion, Future. Do not go off-topic.",
      initialGreeting: "Congratulations! You have completed all 12 Units and reached CEFR Level A2! How do you feel right now? What was your favorite topic to learn?",
      targetVocabulary: ["Congratulations","A2 Level","Confident","In my opinion","Future"],
      suggestedResponses: ["I feel so proud and confident after finishing 12 Units!","My favorite topic was learning how to talk about travel and future dreams.","Thank you Emma, English is now a piece of cake!"],
      difficulty: "intermediate"
    }
  },
];
