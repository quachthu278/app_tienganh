import AsyncStorage from "@react-native-async-storage/async-storage";
import { LanguageCode } from "@/types/learning";
import { AppLanguage } from "@/constants/i18n";
import { create } from "zustand";
import { createJSONStorage, persist } from "zustand/middleware";

interface LanguageState {
  selectedLanguageId: LanguageCode | null;
  selectedUnitId: string | null;
  appInterfaceLanguage: AppLanguage;
  hasHydrated: boolean;
  setSelectedLanguage: (languageId: LanguageCode) => void;
  setSelectedUnit: (unitId: string | null) => void;
  setAppInterfaceLanguage: (lang: AppLanguage) => void;
  clearLanguage: () => Promise<void>;
  setHasHydrated: (state: boolean) => void;
}

export const useLanguageStore = create<LanguageState>()(
  persist(
    (set) => ({
      selectedLanguageId: null,
      selectedUnitId: null,
      appInterfaceLanguage: "vi",
      hasHydrated: false,
      setSelectedLanguage: (languageId: LanguageCode) =>
        set({ selectedLanguageId: languageId, selectedUnitId: null }),
      setSelectedUnit: (unitId: string | null) =>
        set({ selectedUnitId: unitId }),
      setAppInterfaceLanguage: (lang: AppLanguage) =>
        set({ appInterfaceLanguage: lang }),
      clearLanguage: async () => {
        set({ selectedLanguageId: null, selectedUnitId: null });
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
