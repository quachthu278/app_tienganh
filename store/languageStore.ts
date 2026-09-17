import AsyncStorage from "@react-native-async-storage/async-storage";
import { LanguageCode } from "@/types/learning";
import { create } from "zustand";
import { createJSONStorage, persist } from "zustand/middleware";

interface LanguageState {
  selectedLanguageId: LanguageCode | null;
  hasHydrated: boolean;
  setSelectedLanguage: (languageId: LanguageCode) => void;
  clearLanguage: () => Promise<void>;
  setHasHydrated: (state: boolean) => void;
}

export const useLanguageStore = create<LanguageState>()(
  persist(
    (set) => ({
      selectedLanguageId: null,
      hasHydrated: false,
      setSelectedLanguage: (languageId: LanguageCode) =>
        set({ selectedLanguageId: languageId }),
      clearLanguage: async () => {
        set({ selectedLanguageId: null });
        await AsyncStorage.removeItem("lingo-language-storage");
      },
      setHasHydrated: (state: boolean) => set({ hasHydrated: state }),
    }),
    {
      name: "lingo-language-storage",
      storage: createJSONStorage(() => AsyncStorage),
      onRehydrateStorage: () => (state) => {
        state?.setHasHydrated(true);
      },
    }
  )
);
