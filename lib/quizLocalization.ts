import { Activity } from "@/types/learning";
import { AppLanguage } from "@/constants/i18n";

/**
 * High-accuracy Vietnamese-to-English translation dictionary for quiz questions,
 * multiple-choice options, and match-pair values.
 * Strictly maps Vietnamese phrases -> English equivalents.
 */
export const VI_TO_EN_QUIZ_MAP: Record<string, string> = {
  "xin chào": "Hello",
  "xin chào!": "Hello!",
  "chào (thân mật)": "Hi",
  "chào / tạm biệt (thân mật)": "Hi / Bye",
  "chào bạn!": "Hello there!",
  "chào buổi sáng": "Good morning",
  "chào buổi chiều": "Good afternoon",
  "chào buổi tối": "Good evening",
  "chúc ngủ ngon": "Good night",
  "tạm biệt": "Goodbye",
  "hẹn gặp lại": "See you again",
  "hẹn sớm gặp lại": "See you soon",
  "hẹn gặp lại sau": "See you later",
  "hẹn gặp lại ngày mai": "See you tomorrow",
  "cảm ơn": "Thank you",
  "cảm ơn nhiều": "Thank you very much",
  "xin lỗi": "Sorry / Excuse me",
  "làm ơn": "Please",
  "xin vui lòng": "Please",
  "có": "Yes",
  "vâng": "Yes",
  "không": "No",
  "được": "OK / Fine",
  "rất vui được gặp bạn": "Nice to meet you",
  "bạn tên gì?": "What's your name?",
  "bạn khỏe không?": "How are you?",
  "tôi khỏe": "I'm fine",
  "tôi ổn": "I'm good",
  "còn bạn?": "And you?",
  "tôi là...": "I am...",
  "tên tôi là...": "My name is...",
  "bố": "Father",
  "mẹ": "Mother",
  "bố mẹ": "Parents",
  "cha mẹ": "Parents",
  "anh trai": "Older brother",
  "em trai": "Younger brother",
  "chị gái": "Older sister",
  "em gái": "Younger sister",
  "anh/em trai": "Brother",
  "chị/em gái": "Sister",
  "gia đình": "Family",
  "bạn": "Friend / You",
  "bạn bè": "Friends",
  "con trai": "Son",
  "con gái": "Daughter",
  "ông": "Grandfather",
  "bà": "Grandmother",
  "vợ": "Wife",
  "chồng": "Husband",
  "không (số 0)": "Zero",
  "một": "One",
  "hai": "Two",
  "ba": "Three",
  "bốn": "Four",
  "năm": "Five",
  "sáu": "Six",
  "bảy": "Seven",
  "tám": "Eight",
  "chín": "Nine",
  "mười": "Ten",
  "cà phê": "Coffee",
  "trà": "Tea",
  "nước": "Water",
  "nước ép": "Juice",
  "sữa": "Milk",
  "bánh mì": "Bread",
  "cơm": "Rice",
  "phở": "Pho noodle soup",
  "mì": "Noodles",
  "thịt": "Meat",
  "thịt bò": "Beef",
  "thịt gà": "Chicken",
  "cá": "Fish",
  "rau": "Vegetables",
  "trái cây": "Fruit",
  "hoa quả": "Fruit",
  "nhà hàng": "Restaurant",
  "quán ăn": "Eatery",
  "quán café": "Café",
  "thực đơn": "Menu",
  "hóa đơn": "Bill / Check",
  "tính tiền": "Pay the bill",
  "công ty": "Company",
  "văn phòng": "Office",
  "đồng nghiệp": "Colleague",
  "cuộc họp": "Meeting",
  "dự án": "Project",
  "dự án công việc": "Work project",
  "thời hạn": "Deadline",
  "thời hạn hoàn thành": "Deadline",
  "trưởng phòng": "Manager",
  "giám đốc": "Director",
  "phỏng vấn": "Interview",
  "phỏng vấn xin việc": "Job interview",
  "viết email": "Write email",
  "email công việc": "Work email",
  "hợp đồng": "Contract",
  "kinh nghiệm": "Experience",
  "kỹ năng": "Skills",
  "bác sĩ": "Doctor",
  "bệnh viện": "Hospital",
  "phòng khám": "Clinic",
  "hiệu thuốc": "Pharmacy",
  "thuốc": "Medicine",
  "đau đầu": "Headache",
  "sốt": "Fever",
  "cảm cúm": "Flu",
  "ho": "Cough",
  "đau họng": "Sore throat",
  "khỏe mạnh": "Healthy",
  "hôm nay": "Today",
  "hôm qua": "Yesterday",
  "ngày mai": "Tomorrow",
  "buổi sáng": "Morning",
  "buổi trưa": "Noon",
  "buổi chiều": "Afternoon",
  "buổi tối": "Evening",
  "đêm": "Night",
  "giờ": "Hour / Time",
  "phút": "Minute",
  "ngày": "Day",
  "tuần": "Week",
  "tháng": "Month",
  "năm (thời gian)": "Year",
  "thứ hai": "Monday",
  "thứ ba": "Tuesday",
  "thứ tư": "Wednesday",
  "thứ năm": "Thursday",
  "thứ sáu": "Friday",
  "thứ bảy": "Saturday",
  "chủ nhật": "Sunday",
  "khách sạn": "Hotel",
  "nhà ga": "Station",
  "sân bay": "Airport",
  "tàu hỏa": "Train",
  "tàu điện ngầm": "Subway",
  "xe buýt": "Bus",
  "taxi": "Taxi",
  "vé": "Ticket",
  "hỏi đường": "Ask for directions",
  "rẽ trái": "Turn left",
  "rẽ phải": "Turn right",
  "đi thẳng": "Go straight",
  "đắt": "Expensive",
  "rẻ": "Cheap",
  "đẹp": "Beautiful",
  "xấu": "Ugly / Bad",
  "tốt": "Good",
  "lớn": "Big",
  "nhỏ": "Small",
  "cao": "Tall",
  "thấp": "Short",
  "nóng": "Hot",
  "lạnh": "Cold",
  "ngon": "Delicious",
  "vui": "Happy",
  "buồn": "Sad",
  "mệt": "Tired",
  "thấp/lùn": "Short",
  "già": "Old",
  "trẻ": "Young",
  "đỏ": "Red",
  "xanh dương": "Blue",
  "áo sơ mi": "Shirt",
  "váy đầm": "Dress",
  "giày": "Shoes",
  "thích": "Like",
  "không thích": "Don't like",
  "yêu thích": "Love",
  "yêu thích nhất": "Favorite",
  "ghét": "Hate",
  "giờ đúng": "O'clock",
  "thức dậy": "Wake up",
  "ăn sáng": "Eat breakfast",
  "đi làm": "Go to work",
  "đi học": "Go to school",
  "ngủ": "Sleep",
  "tháng một": "January",
  "tháng mười hai": "December",
  "nắng": "Sunny",
  "mưa": "Rainy",
  "cơm/gạo": "Rice",
  "gọi món": "Order",
  "phục vụ": "Waiter",
  "giá": "Price",
  "túi": "Bag",
  "bao nhiêu": "How much",
  "đô la": "Dollar",
  "tiền thừa": "Change",
  "trả tiền": "Pay",
  "tổng cộng": "Total",
  "trường học": "School",
  "công viên": "Park",
  "ngân hàng": "Bank",
  "ga/trạm": "Station",
  "... ở đâu?": "Where is...?",
  "bên cạnh": "Next to",
  "bản đồ": "Map",
  "phòng": "Room",
  "chìa khóa": "Key",
  "nhận phòng": "Check in",
  "trả phòng": "Check out",
  "tầng": "Floor",
  "đọc": "Read",
  "chơi": "Play",
  "bơi": "Swim",
  "chúng ta hãy...": "Let's",
  "bạn có muốn...?": "Do you want to...?",
  "rảnh": "Free",
  "bận": "Busy",
  "chắc chắn rồi!": "Sure!",
  "công việc": "Job",
  "học sinh/sinh viên": "Student",
  "email/thư điện tử": "Email",
  "cứu!": "Help!",
  "đau": "Hurt",
  "khẩn cấp": "Emergency",
  "nào, mình nói chuyện!": "Let's talk!",
  "đã đi (quá khứ của go)": "Went",
  "đã ăn (quá khứ của eat)": "Ate",
  "đã thấy / đã xem": "Saw",
  "đã mua (quá khứ của buy)": "Bought",
  "thời thơ ấu / tuổi thơ": "Childhood",
  "đã lớn lên / trưởng thành": "Grew up",
  "quê hương": "Hometown",
  "đã từng (thói quen quá khứ)": "Used to",
  "kỷ niệm / ký ức": "Memory",
  "kỳ nghỉ": "Vacation",
  "đã ghé thăm": "Visited",
  "không thể nào quên": "Unforgettable",
  "đã gặp gỡ": "Met",
  "đã ở lại (khách sạn...)": "Stayed",
  "đầu tiên": "First",
  "sau đó": "Then / After that",
  "bỗng nhiên / đột ngột": "Suddenly",
  "cuối cùng": "Finally",
  "đã xảy ra": "Happened",
  "từ vựng trọng tâm": "Yesterday",
  "cơn sốt": "Fever",
  "đau dạ dày / đau bụng": "Stomachache",
  "cơn ho": "Cough",
  "cơn đau": "Pain",
  "đơn thuốc": "Prescription",
  "nghỉ ngơi": "Rest",
  "khám bệnh": "Examine",
  "thuốc uống": "Medicine",
  "viên thuốc": "Pill / Tablet",
  "hai lần một ngày": "Twice a day",
  "sau bữa ăn": "After meals",
  "lành mạnh / khỏe mạnh": "Healthy",
  "tập thể dục": "Exercise",
  "rau củ quả": "Vegetables",
  "ngủ ngon giấc": "Sleep well",
  "căng thẳng": "Stress",
  "văn phòng làm việc": "Office",
  "kính gửi... / thân gửi...": "Dear...",
  "được đính kèm (tệp)": "Attached",
  "xin vui lòng xem...": "Please find",
  "rất mong đợi...": "Looking forward to",
  "trân trọng kính thư": "Best regards",
  "buổi phỏng vấn": "Interview",
  "kinh nghiệm làm việc": "Experience",
  "vị trí ứng tuyển": "Position",
  "chịu trách nhiệm về...": "Responsible for",
  "tuyển dụng / thuê": "Hire",
  "điểm mạnh": "Strength",
  "người làm việc nhóm tốt": "Team player",
  "chăm chỉ": "Hardworking",
  "kỹ năng giao tiếp": "Communication",
  "người giải quyết vấn đề tốt": "Problem solver",
  "ngọn núi": "Mountain",
  "bãi biển": "Beach",
  "khu rừng": "Forest",
  "hòn đảo": "Island",
  "đẹp nghẹt thở / ngoạn mục": "Breathtaking",
  "tour có hướng dẫn viên": "Guided tour",
  "hướng dẫn viên du lịch": "Tour guide",
  "giờ khởi hành": "Departure",
  "bao gồm": "Includes",
  "điểm tham quan hấp dẫn": "Attraction",
  "bị hoãn / chậm trễ": "Delayed",
  "bị hủy bỏ": "Cancelled",
  "hành lý bị thất lạc": "Lost luggage",
  "hoàn lại tiền": "Refund",
  "dịch vụ chăm sóc khách hàng": "Customer service",
  "lễ hội truyền thống": "Festival",
  "kỷ niệm / ăn mừng": "Celebrate",
  "phong tục truyền thống": "Tradition",
  "pháo hoa": "Fireworks",
  "mùa nghỉ lễ": "Holiday season",
  "sẽ (quyết định ngay lúc nói)": "Will",
  "dự định sẽ (kế hoạch trước)": "Going to",
  "sớm thôi": "Soon",
  "năm tới": "Next year",
  "kế hoạch": "Plan",
  "ước mơ": "Dream",
  "mục tiêu": "Goal",
  "đạt được": "Achieve",
  "tốt nghiệp": "Graduate",
  "thành công": "Successful",
  "điện thoại thông minh": "Smartphone",
  "ứng dụng di động": "Application / App",
  "tải xuống": "Download",
  "mạng xã hội": "Social media",
  "học trực tuyến": "Online learning",
  "trí tuệ nhân tạo": "Artificial Intelligence (AI)",
  "người máy robot": "Robot",
  "ngôi nhà thông minh": "Smart home",
  "đổi mới sáng tạo": "Innovative",
  "tương lai": "Future",
  "theo ý kiến của tôi": "In my opinion",
  "tôi đồng ý": "I agree",
  "tôi không đồng ý": "I disagree",
  "tin rằng": "Believe",
  "góc nhìn / quan điểm": "Perspective",
  "dễ như ăn bánh / cực kỳ dễ": "Piece of cake",
  "vùi đầu vào học": "Hit the books",
  "hiếm khi / ngàn năm một thuở": "Once in a blue moon",
  "chúc may mắn nhé!": "Break a leg",
  "đắt cắt cổ": "Cost an arm and a leg",
  "văn hóa": "Culture",
  "phong tục tập quán": "Custom",
  "lịch sự / lễ phép": "Polite",
  "tôn trọng": "Respect",
  "truyền thống": "Tradition",
  "ôn tập / tổng kết": "Review",
  "ngữ pháp": "Grammar",
  "từ vựng": "Vocabulary",
  "tự tin": "Confident",
  "đã làm chủ / thành thạo": "Mastered"
};

const VI_DIACRITICS_REGEX = /[àáạảãâầấậẩẫăằắặẳẵèéẹẻẽêềếệểễìíịỉĩòóọỏõôồốộổỗơờớợởỡùúụủũưừứựửữỳýỵỷỹđ]/i;

/**
 * Translates a quiz question pattern from Vietnamese to English if user's app language is "en".
 */
export function localizeQuestion(question: string, lang: AppLanguage): string {
  if (lang !== "en" || !question) return question;

  // 'X' trong tiếng Anh nghĩa là gì?
  let m = question.match(/^'([^']+)' trong tiếng Anh nghĩa là gì\??$/i);
  if (m) return `What does '${m[1]}' mean in English?`;

  // 'X' có nghĩa là gì?
  m = question.match(/^'([^']+)' (?:có )?nghĩa là gì\??$/i);
  if (m) return `What does '${m[1]}' mean?`;

  m = question.match(/^"([^"]+)" (?:có )?nghĩa là gì\??$/i);
  if (m) return `What does '${m[1]}' mean?`;

  // 'X' nghĩa là gì?
  m = question.match(/^'([^']+)' nghĩa là gì\??$/i);
  if (m) return `What does '${m[1]}' mean?`;

  // 'X' là số mấy?
  m = question.match(/^'([^']+)' là số mấy\??$/i);
  if (m) return `What number is '${m[1]}'?`;

  // Dịch: 'X'
  m = question.match(/^Dịch(?: nghĩa)?: '([^']+)'$/i);
  if (m) return `Translate: '${m[1]}'`;

  m = question.match(/^Dịch sang tiếng Anh: '([^']+)'$/i);
  if (m) return `Translate into English: '${m[1]}'`;

  m = question.match(/^Dịch sang tiếng Việt: '([^']+)'$/i);
  if (m) return `Translate into Vietnamese: '${m[1]}'`;

  // Điền từ: 'X'
  m = question.match(/^Điền từ: '([^']+)'$/i);
  if (m) return `Fill in the blank: '${m[1]}'`;

  m = question.match(/^Điền vào chỗ trống: '([^']+)'$/i);
  if (m) return `Fill in the blank: '${m[1]}'`;

  // Ghép các cặp từ
  if (/Ghép các cặp từ vựng với nghĩa tiếng Việt tương ứng/i.test(question)) {
    return "Match each word with its corresponding English meaning:";
  }
  if (/Ghép các từ tương ứng với nghĩa đúng:/i.test(question)) {
    return "Match the words with their correct meanings:";
  }
  if (/Ghép các cặp từ tương ứng/i.test(question)) {
    return "Match the corresponding word pairs:";
  }

  // Lắng nghe
  if (/Lắng nghe và chọn đáp án chính xác:/i.test(question)) {
    return "Listen and choose the correct answer:";
  }
  if (/Nghe và chọn:/i.test(question)) {
    return "Listen and select:";
  }

  // Sắp xếp
  if (/Sắp xếp các từ thành câu đúng:/i.test(question)) {
    return "Arrange the words to form a correct sentence:";
  }
  if (/Sắp xếp thành câu/i.test(question)) {
    return "Arrange the words to form the correct sentence:";
  }

  // Chọn nghĩa đúng
  if (/Chọn nghĩa đúng cho từ:/i.test(question)) {
    return "Choose the correct meaning for the word:";
  }

  return question;
}

/**
 * Translates a single option or pair value from Vietnamese to English.
 * If text is already in English, it is left completely untouched!
 */
export function localizeOption(text: string, lang: AppLanguage): string {
  if (lang !== "en" || !text) return text;

  const trimmed = text.trim();
  const lower = trimmed.toLowerCase();

  // If text is in the dictionary, translate it
  if (VI_TO_EN_QUIZ_MAP[lower]) {
    return VI_TO_EN_QUIZ_MAP[lower];
  }

  // Clean punctuation
  const clean = lower.replace(/^[\s'"]+|[\s'"]+$/g, "");
  if (VI_TO_EN_QUIZ_MAP[clean]) {
    return VI_TO_EN_QUIZ_MAP[clean];
  }

  // If text is in the format "Meaning / Secondary", try first part
  if (clean.includes(" / ")) {
    const parts = clean.split(" / ");
    for (const p of parts) {
      if (VI_TO_EN_QUIZ_MAP[p.trim()]) {
        return VI_TO_EN_QUIZ_MAP[p.trim()];
      }
    }
  }

  // If text has NO Vietnamese diacritics, it is almost certainly already in English or the target language!
  // Leave it untouched!
  return text;
}

/**
 * Adapts an entire Activity for the user's interface language.
 * When lang is "en", transforms Vietnamese question, options, correctAnswer, and pairs into English.
 */
export function localizeActivity(activity: Activity, lang: AppLanguage): Activity {
  if (lang !== "en") return activity;

  const localizedQ = localizeQuestion(activity.question, lang);

  let localizedOptions = activity.options;
  let localizedCorrect = activity.correctAnswer;

  if (activity.options) {
    localizedOptions = activity.options.map((opt) => localizeOption(opt, lang));

    if (typeof activity.correctAnswer === "string") {
      localizedCorrect = localizeOption(activity.correctAnswer, lang);
    } else if (Array.isArray(activity.correctAnswer)) {
      localizedCorrect = activity.correctAnswer.map((ans) => localizeOption(ans, lang));
    }
  }

  let localizedPairs = activity.pairs;
  if (activity.pairs) {
    localizedPairs = activity.pairs.map((p) => ({
      left: p.left,
      right: localizeOption(p.right, lang),
    }));
  }

  return {
    ...activity,
    question: localizedQ,
    options: localizedOptions,
    correctAnswer: localizedCorrect,
    pairs: localizedPairs,
  };
}
