import { Unit, Lesson, LanguageCode } from "@/types/learning";
import { ALL_COURSE_UNITS, ALL_COURSE_LESSONS } from "../courses";

export type TableName = "units" | "lessons";

export type QueryCondition<T> = Partial<T> | ((item: T) => boolean);

export class QueryBuilder<T extends Record<string, any>> {
  private data: T[];

  constructor(initialData: T[]) {
    this.data = initialData;
  }

  /**
   * Filter records matching key-value pairs or a custom predicate function (SQL WHERE)
   */
  where(condition: QueryCondition<T>): this {
    if (typeof condition === "function") {
      this.data = this.data.filter(condition);
    } else {
      const entries = Object.entries(condition);
      this.data = this.data.filter((item) =>
        entries.every(([key, value]) => item[key] === value)
      );
    }
    return this;
  }

  /**
   * Sort records by a key and direction (SQL ORDER BY)
   */
  orderBy(key: keyof T, direction: "asc" | "desc" = "asc"): this {
    this.data = [...this.data].sort((a, b) => {
      const valA = a[key];
      const valB = b[key];
      if (valA < valB) return direction === "asc" ? -1 : 1;
      if (valA > valB) return direction === "asc" ? 1 : -1;
      return 0;
    });
    return this;
  }

  /**
   * Limit number of records returned (SQL LIMIT)
   */
  limit(count: number): this {
    this.data = this.data.slice(0, count);
    return this;
  }

  /**
   * Return all matched records (SQL SELECT *)
   */
  get(): T[] {
    return this.data;
  }

  /**
   * Return first matching record or undefined (SQL LIMIT 1)
   */
  first(): T | undefined {
    return this.data[0];
  }

  /**
   * Return total number of matching records (SQL COUNT(*))
   */
  count(): number {
    return this.data.length;
  }
}

/**
 * In-Memory SQL-like Database for Language Learning Courses
 * Separates data by language while providing unified SQL querying capabilities.
 */
export class CourseDatabase {
  private allUnits: Unit[] = [];
  private allLessons: Lesson[] = [];

  // Indexed caches for fast O(1) retrieval
  private unitsByLang = new Map<LanguageCode, Unit[]>();
  private unitById = new Map<string, Unit>();
  private lessonsByUnit = new Map<string, Lesson[]>();
  private lessonById = new Map<string, Lesson>();

  constructor() {
    this.reindex();
  }

  public reindex() {
    this.allUnits = [];
    this.allLessons = [];
    this.unitsByLang.clear();
    this.unitById.clear();
    this.lessonsByUnit.clear();
    this.lessonById.clear();

    const languages: LanguageCode[] = ["en", "es", "fr", "de", "ja", "ko", "zh", "vi"];

    for (const lang of languages) {
      const units = ALL_COURSE_UNITS[lang] || [];
      const lessons = ALL_COURSE_LESSONS[lang] || [];

      this.allUnits.push(...units);
      this.allLessons.push(...lessons);
      this.unitsByLang.set(lang, [...units].sort((a, b) => a.order - b.order));

      for (const unit of units) {
        this.unitById.set(unit.id, unit);
      }

      for (const lesson of lessons) {
        this.lessonById.set(lesson.id, lesson);
        const list = this.lessonsByUnit.get(lesson.unitId) || [];
        list.push(lesson);
        this.lessonsByUnit.set(lesson.unitId, list);
      }
    }

    // Sort all lesson lists by order
    for (const [, list] of this.lessonsByUnit.entries()) {
      list.sort((a, b) => a.order - b.order);
    }
  }

  /**
   * SQL-like SELECT query builder
   *
   * @example
   * db.select('units').where({ languageId: 'en' }).orderBy('order', 'asc').get()
   * db.select('lessons').where({ unitId: 'unit-en-1' }).get()
   * db.select('lessons').where({ id: 'lesson-en-101' }).first()
   */
  public select(table: "units"): QueryBuilder<Unit>;
  public select(table: "lessons"): QueryBuilder<Lesson>;
  public select(table: TableName): QueryBuilder<any> {
    if (table === "units") {
      return new QueryBuilder<Unit>([...this.allUnits]);
    }
    if (table === "lessons") {
      return new QueryBuilder<Lesson>([...this.allLessons]);
    }
    throw new Error(`Unknown table: ${table}`);
  }

  // ── Optimized Access Helpers ───────────────────────────────

  public getAllUnits(): Unit[] {
    return this.allUnits;
  }

  public getAllLessons(): Lesson[] {
    return this.allLessons;
  }

  public getUnitsByLanguage(languageId: LanguageCode): Unit[] {
    return this.unitsByLang.get(languageId) || [];
  }

  public getUnitById(unitId: string): Unit | undefined {
    return this.unitById.get(unitId);
  }

  public getLessonsByUnitId(unitId: string): Lesson[] {
    return this.lessonsByUnit.get(unitId) || [];
  }

  public getLessonById(lessonId: string): Lesson | undefined {
    return this.lessonById.get(lessonId);
  }
}

// Global Singleton Database Instance
export const db = new CourseDatabase();
