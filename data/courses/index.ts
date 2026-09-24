import { Unit, Lesson, LanguageCode } from "@/types/learning";
import { EN_UNITS, EN_LESSONS } from "./en";
import { ES_UNITS, ES_LESSONS } from "./es";
import { FR_UNITS, FR_LESSONS } from "./fr";
import { DE_UNITS, DE_LESSONS } from "./de";
import { JA_UNITS, JA_LESSONS } from "./ja";
import { KO_UNITS, KO_LESSONS } from "./ko";
import { ZH_UNITS, ZH_LESSONS } from "./zh";
import { VI_UNITS, VI_LESSONS } from "./vi";

export const ALL_COURSE_UNITS: Record<LanguageCode, Unit[]> = {
  en: EN_UNITS,
  es: ES_UNITS,
  fr: FR_UNITS,
  de: DE_UNITS,
  ja: JA_UNITS,
  ko: KO_UNITS,
  zh: ZH_UNITS,
  vi: VI_UNITS,
};

export const ALL_COURSE_LESSONS: Record<LanguageCode, Lesson[]> = {
  en: EN_LESSONS,
  es: ES_LESSONS,
  fr: FR_LESSONS,
  de: DE_LESSONS,
  ja: JA_LESSONS,
  ko: KO_LESSONS,
  zh: ZH_LESSONS,
  vi: VI_LESSONS,
};
