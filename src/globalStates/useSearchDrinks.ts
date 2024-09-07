import { create } from "zustand";

interface SearchState {
  drinkSearched: string;
  setDrinkSearched: (newDrink: string) => void;
}

const useSearchState = create<SearchState>((set) => ({
  drinkSearched: "",
  setDrinkSearched: (newDrink: string) => set({ drinkSearched: newDrink }),
}));

export default useSearchState;
