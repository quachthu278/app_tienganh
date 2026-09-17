import { LanguageCode, Unit } from "@/types/learning";

export const UNITS: Unit[] = [
  // ── Spanish Units ──
  {
    id: "unit-es-1",
    languageId: "es",
    title: "Unit 1: Essentials & Greetings",
    description: "Say hello, introduce yourself, and master basic pleasantries.",
    order: 1,
    color: "#6C4EF5", // Brand purple
    lessonIds: ["lesson-es-101", "lesson-es-102"],
  },
  {
    id: "unit-es-2",
    languageId: "es",
    title: "Unit 2: Café & Food Orders",
    description: "Order coffee, delicious tapas, and navigate restaurant menus.",
    order: 2,
    color: "#10B981", // Emerald
    lessonIds: ["lesson-es-201", "lesson-es-202"],
  },
  {
    id: "unit-es-3",
    languageId: "es",
    title: "Unit 3: Travel & City Navigation",
    description: "Ask for directions, buy tickets, and explore foreign cities with ease.",
    order: 3,
    color: "#F59E0B", // Amber
    lessonIds: ["lesson-es-301", "lesson-es-302"],
  },

  // ── English Units ──
  {
    id: "unit-en-1",
    languageId: "en",
    title: "Unit 1: First Impressions",
    description: "Introduce yourself, meet new people, and make friends confidently.",
    order: 1,
    color: "#3B82F6", // Blue
    lessonIds: ["lesson-en-101", "lesson-en-102"],
  },
  {
    id: "unit-en-2",
    languageId: "en",
    title: "Unit 2: Everyday Conversations",
    description: "Talk about hobbies, daily routines, and casual weekend plans.",
    order: 2,
    color: "#8B5CF6", // Violet
    lessonIds: ["lesson-en-201"],
  },

  // ── Japanese Units ──
  {
    id: "unit-ja-1",
    languageId: "ja",
    title: "Unit 1: Basic Greetings & Etiquette",
    description: "Learn essential bows, polite greetings, and everyday phrases.",
    order: 1,
    color: "#EF4444", // Crimson
    lessonIds: ["lesson-ja-101", "lesson-ja-102"],
  },

  // ── French Units ──
  {
    id: "unit-fr-1",
    languageId: "fr",
    title: "Unit 1: Welcome to France",
    description: "Charming greetings, café etiquette, and French fundamentals.",
    order: 1,
    color: "#06B6D4", // Cyan
    lessonIds: ["lesson-fr-101"],
  },

  // ── Vietnamese Units ──
  {
    id: "unit-vi-1",
    languageId: "vi",
    title: "Unit 1: Xin Chào & Greetings",
    description: "Master polite greetings, pronouns, and ordering street food in Hanoi.",
    order: 1,
    color: "#E11D48", // Rose
    lessonIds: ["lesson-vi-101"],
  },
];

export const getUnitsByLanguage = (languageId: LanguageCode): Unit[] => {
  return UNITS.filter((unit) => unit.languageId === languageId).sort(
    (a, b) => a.order - b.order
  );
};

export const getUnitById = (unitId: string): Unit | undefined => {
  return UNITS.find((unit) => unit.id === unitId);
};
