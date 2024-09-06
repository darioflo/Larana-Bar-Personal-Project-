import { create } from "zustand";
import { Drink } from "../types";

interface DrinkState {
  drinks: Drink[];
  setDrinks: (drinks: Drink[]) => void;
}

const useDrinks = create<DrinkState>((set) => ({
  drinks: [],
  setDrinks: (newDrinks: Drink[]) => set({ drinks: newDrinks }),
}));

export default useDrinks;
