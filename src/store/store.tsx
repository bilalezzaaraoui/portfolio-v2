import { create } from 'zustand'

const store = {
  language: "fr",
  setTranslation: (set: any) => (language: string) => set({ language }),
}

export const useBoundStore = create((set) => ({
    ...store,
    setTranslation: store.setTranslation(set),
  }));