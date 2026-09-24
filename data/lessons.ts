import { Lesson } from "@/types/learning";
import { db } from "./db/courseDatabase";

// All 480 lessons across 8 languages powered by the SQL-like course database
export const LESSONS: Lesson[] = db.getAllLessons();

export const getLessonsByUnitId = (unitId: string): Lesson[] => {
  return db.getLessonsByUnitId(unitId);
};

export const getLessonById = (lessonId: string): Lesson | undefined => {
  return db.getLessonById(lessonId);
};
