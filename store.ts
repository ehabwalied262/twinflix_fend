import create from 'zustand';

type StoreState = {
    sidebarSelectedKey: string;
    setSidebarSelectedKey: (key: string) => void;
    navbarSelectedKey: string;
    setNavbarSelectedKey: (key: string) => void;
};

export const useStore = create<StoreState>((set) => ({
    sidebarSelectedKey: 'movies',
    setSidebarSelectedKey: (key) => set({ sidebarSelectedKey: key }),
    navbarSelectedKey: 'feed',
    setNavbarSelectedKey: (key) => set({ navbarSelectedKey: key }),
}));