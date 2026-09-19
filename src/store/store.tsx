import { create } from "zustand";
import { DEFAULT_LANGUAGE, type Language } from "@/config/language";

export type { Language };

interface Store {
  language: Language;
  setTranslation: (language: Language) => void;
}

export const useBoundStore = create<Store>((set) => ({
  language: DEFAULT_LANGUAGE,
  setTranslation: (language) => set({ language }),
}));
