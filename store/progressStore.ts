import AsyncStorage from "@react-native-async-storage/async-storage";
import { create } from "zustand";
import { createJSONStorage, persist } from "zustand/middleware";

interface ProgressState {
  xp: number;
  dailyXpGoal: number;
  streak: number;
  completedLessonIds: string[];
  hasHydrated: boolean;
  addXp: (amount: number) => void;
  completeLesson: (lessonId: string) => void;
  resetProgress: () => void;
  setHasHydrated: (state: boolean) => void;
}

const DEFAULT_STATE = {
  xp: 0,
  dailyXpGoal: 20,
  streak: 0,
  completedLessonIds: [] as string[],
  hasHydrated: false,
};

export const useProgressStore = create<ProgressState>()(
  persist(
    (set) => ({
      ...DEFAULT_STATE,
      addXp: (amount: number) => set((state) => ({ xp: state.xp + amount })),
      completeLesson: (lessonId: string) =>
        set((state) => ({
          completedLessonIds: [...state.completedLessonIds, lessonId],
        })),
      // Call before sign-out to prevent the next account from reading
      // stale XP, streak, or completedLessonIds from the previous user.
      resetProgress: () => set({ ...DEFAULT_STATE, hasHydrated: true }),
      setHasHydrated: (state: boolean) => set({ hasHydrated: state }),
    }),
    {
      name: "lingo-progress-storage",
      storage: createJSONStorage(() => AsyncStorage),
      onRehydrateStorage: () => (state) => {
        state?.setHasHydrated(true);
      },
    }
  )
);
