import { LanguageCode, Unit } from "@/types/learning";
import { db } from "./db/courseDatabase";

// All units powered by the SQL-like course database
export const UNITS: Unit[] = db.getAllUnits();

export const getUnitsByLanguage = (languageId: LanguageCode): Unit[] => {
  return db.getUnitsByLanguage(languageId);
};

export const getUnitById = (unitId: string): Unit | undefined => {
  return db.getUnitById(unitId);
};

// Re-export individual language units if directly needed
export * from "./courses";
