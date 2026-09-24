import { Unit, Lesson, Language } from "@/types/learning";
import { AppLanguage } from "@/constants/i18n";

/**
 * Resolves the unit title according to user's interface language setting.
 * Defaults to Vietnamese if lang is "vi", or falls back gracefully.
 */
export function getUnitDisplayTitle(
  unit: Unit | undefined | null,
  lang: AppLanguage = "vi"
): string {
  if (!unit) return "";
  if (lang === "en") {
    return unit.titleEn || unit.title;
  }
  return unit.title;
}

/**
 * Resolves the unit description according to user's interface language setting.
 */
export function getUnitDisplayDescription(
  unit: Unit | undefined | null,
  lang: AppLanguage = "vi"
): string {
  if (!unit) return "";
  if (lang === "en") {
    return unit.descriptionEn || unit.description;
  }
  return unit.description;
}

/**
 * Resolves the lesson title according to user's interface language setting.
 */
export function getLessonDisplayTitle(
  lesson: Lesson | undefined | null,
  lang: AppLanguage = "vi"
): string {
  if (!lesson) return "";
  if (lang === "en") {
    return lesson.titleEn || lesson.title;
  }
  return lesson.title;
}

/**
 * Resolves the lesson description according to user's interface language setting.
 */
export function getLessonDisplayDescription(
  lesson: Lesson | undefined | null,
  lang: AppLanguage = "vi"
): string {
  if (!lesson) return "";
  if (lang === "en") {
    return lesson.descriptionEn || lesson.description;
  }
  return lesson.description;
}

/**
 * Resolves the language name according to user's interface language setting.
 */
export function getLanguageDisplayName(
  language: Language | undefined | null,
  lang: AppLanguage = "vi"
): string {
  if (!language) return "";
  if (lang === "vi" && language.nameVi) {
    return language.nameVi;
  }
  return language.name;
}

/**
 * Resolves the language description according to user's interface language setting.
 */
export function getLanguageDisplayDescription(
  language: Language | undefined | null,
  lang: AppLanguage = "vi"
): string {
  if (!language) return "";
  if (lang === "vi" && language.descriptionVi) {
    return language.descriptionVi;
  }
  return language.description;
}
