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
  setHasHydrated: (state: boolean) => void;
}

export const useProgressStore = create<ProgressState>()(
  persist(
    (set) => ({
      xp: 15,
      dailyXpGoal: 20,
      streak: 12,
      completedLessonIds: ["lesson-es-201"],
      hasHydrated: false,
      addXp: (amount: number) => set((state) => ({ xp: state.xp + amount })),
      completeLesson: (lessonId: string) =>
        set((state) => ({
          completedLessonIds: [...state.completedLessonIds, lessonId],
        })),
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
