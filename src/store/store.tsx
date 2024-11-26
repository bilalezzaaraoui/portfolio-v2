import { create } from 'zustand'


interface Store {
    language: string // 'fr' | 'en'
    setTranslation: (language: string) => void
}

const store = {
  language: "fr",
  setTranslation: (set: any) => (language: string) => set({ language }),
}

export const useBoundStore = create<Store>((set) => ({
    ...store,
    setTranslation: store.setTranslation(set),
  }));