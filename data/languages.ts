import { Language, LanguageCode } from "@/types/learning";

export const SUPPORTED_LANGUAGES: Language[] = [
  {
    id: "es",
    name: "Spanish",
    nativeName: "Español",
    flag: "🇪🇸",
    code: "es",
    learnersCount: "28.4M learners",
    isPopular: true,
    description:
      "Learn one of the world's most spoken languages with fun, playful lessons.",
    totalUnits: 3,
    totalLessons: 6,
  },
  {
    id: "fr",
    name: "French",
    nativeName: "Français",
    flag: "🇫🇷",
    code: "fr",
    learnersCount: "19.4M learners",
    isPopular: true,
    description:
      "Speak the language of diplomacy, romance, and cuisine with confidence.",
    totalUnits: 2,
    totalLessons: 4,
  },
  {
    id: "ja",
    name: "Japanese",
    nativeName: "日本語",
    flag: "🇯🇵",
    code: "ja",
    learnersCount: "12.7M learners",
    isPopular: true,
    description: "Discover Hiragana, essential phrases, and cultural nuances.",
    totalUnits: 2,
    totalLessons: 4,
  },
  {
    id: "ko",
    name: "Korean",
    nativeName: "한국어",
    flag: "🇰🇷",
    code: "ko",
    learnersCount: "9.3M learners",
    isPopular: true,
    description:
      "Master Hangul, popular K-culture expressions, and daily conversation.",
    totalUnits: 2,
    totalLessons: 4,
  },
  {
    id: "de",
    name: "German",
    nativeName: "Deutsch",
    flag: "🇩🇪",
    code: "de",
    learnersCount: "8.1M learners",
    isPopular: true,
    description:
      "Build strong grammatical foundations and express yourself clearly.",
    totalUnits: 2,
    totalLessons: 4,
  },
  {
    id: "zh",
    name: "Chinese",
    nativeName: "中文",
    flag: "🇨🇳",
    code: "zh",
    learnersCount: "7.4M learners",
    isPopular: true,
    description:
      "Explore Pinyin, characters, and tonal nuances for fluent chatting.",
    totalUnits: 2,
    totalLessons: 4,
  },
  {
    id: "en",
    name: "English",
    nativeName: "English",
    flag: "🇺🇸",
    code: "en",
    learnersCount: "35.2M learners",
    isPopular: false,
    description:
      "Master global communication for travel, career, and daily conversations.",
    totalUnits: 3,
    totalLessons: 6,
  },
  {
    id: "vi",
    name: "Vietnamese",
    nativeName: "Tiếng Việt",
    flag: "🇻🇳",
    code: "vi",
    learnersCount: "4.8M learners",
    isPopular: false,
    description:
      "Explore the melodic tones and rich conversational phrases of Vietnam.",
    totalUnits: 2,
    totalLessons: 4,
  },
];

export const DEFAULT_LANGUAGE_ID: LanguageCode = "es";

export const getLanguageById = (id: string): Language | undefined => {
  return SUPPORTED_LANGUAGES.find((lang) => lang.id === id);
};
