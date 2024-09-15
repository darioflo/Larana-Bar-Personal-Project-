import { create } from "zustand";

interface MapState {
  showMap: boolean;
  setShowMap: (showMap: boolean) => void;
}

export const useShowMap = create<MapState>((set) => ({
  showMap: false,
  setShowMap: (showMap: boolean) => set({ showMap }),
}));
