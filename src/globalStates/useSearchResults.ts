import { create } from "zustand";
import { Drink } from "../types";

interface SearchResults {
  drinkResults: Drink[];
  setDrinksResults: (newDrinkResults: Drink[]) => void;
}

const useDrinksResults = create<SearchResults>((set) => ({
  drinkResults: [],
  setDrinksResults: (newDrinkResults: Drink[]) =>
    set({ drinkResults: newDrinkResults }),
}));

export default useDrinksResults;
