/**
 * Type definitions for the Language Learning Content System
 */

export type LanguageCode = "es" | "en" | "ja" | "fr" | "vi" | "ko" | "de" | "zh";

export interface Language {
  id: LanguageCode;
  name: string;
  nativeName: string;
  flag: string; // Flag URL or asset identifier
  code: string; // Language code
  countryCode: string; // ISO 3166-1 alpha-2 country code: cn, us, vn, es, fr, jp, kr, de
  flagUrl: string; // High-resolution flag image URL
  flagEmoji?: string; // Emoji flag symbol
  description: string;
  nameVi?: string;
  descriptionVi?: string;
  totalUnits: number;
  totalLessons: number;
  learnersCount?: string;
  isPopular?: boolean;
}

export interface Vocabulary {
  id: string;
  word: string;
  translation: string;
  phonetic?: string;
  partOfSpeech?: "noun" | "verb" | "adjective" | "adverb" | "phrase" | "greeting";
  exampleSentence?: string;
  exampleTranslation?: string;
  audioUrl?: string;
}

export interface Phrase {
  id: string;
  text: string;
  translation: string;
  phonetic?: string;
  context?: string;
  audioUrl?: string;
}

export type ActivityType =
  | "multiple_choice"
  | "translate"
  | "fill_blank"
  | "match_pairs"
  | "audio_listen"
  | "word_order"
  | "speak"
  | "ai_conversation";

export type SkillType = "reading" | "writing" | "listening" | "speaking";

export interface Activity {
  id: string;
  type: ActivityType;
  skill?: SkillType;
  question: string;
  prompt?: string;
  options?: string[];
  correctAnswer: string | string[];
  audioText?: string;
  readingPassage?: string;
  wordBlocks?: string[];
  pairs?: { left: string; right: string }[];
  explanation?: string;
}

export interface LessonGoal {
  id: string;
  description: string;
}

export interface AITeacherPrompt {
  scenario: string;
  systemPrompt: string;
  initialGreeting: string;
  targetVocabulary: string[];
  suggestedResponses: string[];
  difficulty: "beginner" | "intermediate" | "advanced";
}

export type LessonType = "standard" | "audio_ai" | "chat_tutor" | "review";

export interface Lesson {
  id: string;
  unitId: string;
  title: string;
  titleEn?: string;
  description: string;
  descriptionEn?: string;
  type: LessonType;
  xp: number;
  estimatedMinutes: number;
  order: number;
  goals: LessonGoal[];
  vocabulary: Vocabulary[];
  phrases: Phrase[];
  activities: Activity[];
  aiTeacherPrompt?: AITeacherPrompt;
  heroImage?: any;
  thumbnailIcon?: any;
  status?: "completed" | "in_progress" | "locked" | "available";
  subLessonsCount?: number;
  completedSubLessonsCount?: number;
}

export interface Unit {
  id: string;
  languageId: LanguageCode;
  title: string;
  titleEn?: string;
  description: string;
  descriptionEn?: string;
  order: number;
  color?: string;
  icon?: string;
  lessonIds: string[];
}
