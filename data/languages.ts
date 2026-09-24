import { Language, LanguageCode } from "@/types/learning";

export const SUPPORTED_LANGUAGES: Language[] = [
  {
    id: "es",
    name: "Spanish",
    nameVi: "Tiếng Tây Ban Nha",
    nativeName: "Español",
    flag: "https://flagcdn.com/w160/es.png",
    code: "es",
    countryCode: "es",
    flagUrl: "https://flagcdn.com/w160/es.png",
    flagEmoji: "🇪🇸",
    learnersCount: "28.4M learners",
    isPopular: true,
    description:
      "Learn one of the world's most spoken languages with fun, playful lessons.",
    descriptionVi:
      "Học ngôn ngữ phổ biến thứ 2 thế giới với các bài học phản xạ sinh động.",
    totalUnits: 12,
    totalLessons: 60,
  },
  {
    id: "fr",
    name: "French",
    nameVi: "Tiếng Pháp",
    nativeName: "Français",
    flag: "https://flagcdn.com/w160/fr.png",
    code: "fr",
    countryCode: "fr",
    flagUrl: "https://flagcdn.com/w160/fr.png",
    flagEmoji: "🇫🇷",
    learnersCount: "19.4M learners",
    isPopular: true,
    description:
      "Speak the language of diplomacy, romance, and cuisine with confidence.",
    descriptionVi:
      "Ngôn ngữ của tình yêu, nghệ thuật và ẩm thực quý tộc châu Âu.",
    totalUnits: 12,
    totalLessons: 60,
  },
  {
    id: "ja",
    name: "Japanese",
    nameVi: "Tiếng Nhật",
    nativeName: "日本語",
    flag: "https://flagcdn.com/w160/jp.png",
    code: "ja",
    countryCode: "jp",
    flagUrl: "https://flagcdn.com/w160/jp.png",
    flagEmoji: "🇯🇵",
    learnersCount: "12.7M learners",
    isPopular: true,
    description: "Discover Hiragana, essential phrases, and cultural nuances.",
    descriptionVi: "Chinh phục Hiragana, Kanji cơ bản và văn hóa giao tiếp xứ sở hoa anh đào.",
    totalUnits: 12,
    totalLessons: 60,
  },
  {
    id: "ko",
    name: "Korean",
    nameVi: "Tiếng Hàn",
    nativeName: "한국어",
    flag: "https://flagcdn.com/w160/kr.png",
    code: "ko",
    countryCode: "kr",
    flagUrl: "https://flagcdn.com/w160/kr.png",
    flagEmoji: "🇰🇷",
    learnersCount: "9.3M learners",
    isPopular: true,
    description:
      "Master Hangul, popular K-culture expressions, and daily conversation.",
    descriptionVi:
      "Làm chủ Hangeul, các câu thoại phim Hàn và giao tiếp đời sống Seoul.",
    totalUnits: 12,
    totalLessons: 60,
  },
  {
    id: "de",
    name: "German",
    nameVi: "Tiếng Đức",
    nativeName: "Deutsch",
    flag: "https://flagcdn.com/w160/de.png",
    code: "de",
    countryCode: "de",
    flagUrl: "https://flagcdn.com/w160/de.png",
    flagEmoji: "🇩🇪",
    learnersCount: "8.1M learners",
    isPopular: true,
    description:
      "Build strong grammatical foundations and express yourself clearly.",
    descriptionVi:
      "Nền tảng ngữ pháp vững chắc và giao tiếp chuẩn xác tại Đức, Áo, Thụy Sĩ.",
    totalUnits: 12,
    totalLessons: 60,
  },
  {
    id: "zh",
    name: "Chinese",
    nameVi: "Tiếng Trung",
    nativeName: "中文",
    flag: "https://flagcdn.com/w160/cn.png",
    code: "zh",
    countryCode: "cn",
    flagUrl: "https://flagcdn.com/w160/cn.png",
    flagEmoji: "🇨🇳",
    learnersCount: "7.4M learners",
    isPopular: true,
    description:
      "Explore Pinyin, characters, and tonal nuances for fluent chatting.",
    descriptionVi:
      "Khám phá Pinyin, chữ Hán căn bản và 4 thanh điệu chuẩn mực.",
    totalUnits: 12,
    totalLessons: 60,
  },
  {
    id: "en",
    name: "English",
    nameVi: "Tiếng Anh",
    nativeName: "English",
    flag: "https://flagcdn.com/w160/us.png",
    code: "en",
    countryCode: "us",
    flagUrl: "https://flagcdn.com/w160/us.png",
    flagEmoji: "🇺🇸",
    learnersCount: "35.2M learners",
    isPopular: true,
    description:
      "Master global communication for travel, career, and daily conversations.",
    descriptionVi:
      "Thành thạo giao tiếp toàn cầu cho công việc, du lịch và cuộc sống hiện đại.",
    totalUnits: 12,
    totalLessons: 60,
  },
  {
    id: "vi",
    name: "Vietnamese",
    nameVi: "Tiếng Việt",
    nativeName: "Tiếng Việt",
    flag: "https://flagcdn.com/w160/vn.png",
    code: "vi",
    countryCode: "vn",
    flagUrl: "https://flagcdn.com/w160/vn.png",
    flagEmoji: "🇻🇳",
    learnersCount: "4.8M learners",
    isPopular: false,
    description:
      "Explore the melodic tones and rich conversational phrases of Vietnam.",
    descriptionVi:
      "Khám phá thanh điệu du dương và nét đẹp giao tiếp truyền thống Việt Nam.",
    totalUnits: 12,
    totalLessons: 60,
  },
];

export const DEFAULT_LANGUAGE_ID: LanguageCode = "es";

export const getLanguageById = (id: string): Language | undefined => {
  return SUPPORTED_LANGUAGES.find((lang) => lang.id === id);
};

/**
 * Resolves the flag image URL from flagcdn for any language object or language/country code.
 */
export const getLanguageFlagUrl = (
  langOrCode?: string | Language | null
): string => {
  if (!langOrCode) return "https://flagcdn.com/w160/us.png";
  if (typeof langOrCode === "object") {
    if (langOrCode.flagUrl) return langOrCode.flagUrl;
    if (langOrCode.flag?.startsWith("http")) return langOrCode.flag;
    const code = (
      langOrCode.countryCode ||
      langOrCode.flag ||
      langOrCode.id ||
      "us"
    ).toLowerCase();
    const map: Record<string, string> = {
      zh: "cn",
      en: "us",
      vi: "vn",
      ja: "jp",
      ko: "kr",
      es: "es",
      fr: "fr",
      de: "de",
      it: "it",
    };
    return `https://flagcdn.com/w160/${map[code] || code}.png`;
  }
  if (langOrCode.startsWith("http")) return langOrCode;
  const code = langOrCode.toLowerCase();
  const map: Record<string, string> = {
    zh: "cn",
    en: "us",
    vi: "vn",
    ja: "jp",
    ko: "kr",
    es: "es",
    fr: "fr",
    de: "de",
    it: "it",
  };
  return `https://flagcdn.com/w160/${map[code] || code}.png`;
};
