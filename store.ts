import { create } from 'zustand';

type StoreState = {
  selectedKey: string;
  setSelectedKey: (key: string) => void;
};

export const useStore = create<StoreState>((set) => ({
  selectedKey: 'movies',
  setSelectedKey: (key) => set((state) => ({ selectedKey: key })),
}));