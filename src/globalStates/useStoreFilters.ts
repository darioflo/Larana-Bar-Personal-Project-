import { create } from "zustand";
import axios from "axios";

const urls = {
  alcoholic: "https://www.thecocktaildb.com/api/json/v1/1/list.php?a=list",
  ingredient: "https://www.thecocktaildb.com/api/json/v1/1/list.php?i=list",
  glass: "https://www.thecocktaildb.com/api/json/v1/1/list.php?g=list",
  category: "https://www.thecocktaildb.com/api/json/v1/1/list.php?c=list",
};

interface DataState {
  alcoholic: [];
  ingredient: [];
  glass: [];
  category: [];
  getFilters: () => Promise<void>;
}

const useStoreFilters = create<DataState>((set) => ({
  alcoholic: [],
  ingredient: [],
  glass: [],
  category: [],
  getFilters: async () => {
    try {
      const [alcoholic, ingredient, glass, category] = await Promise.all([
        axios.get(urls.alcoholic),
        axios.get(urls.ingredient),
        axios.get(urls.glass),
        axios.get(urls.category),
      ]);
      set({
        alcoholic: alcoholic.data.drinks,
        ingredient: ingredient.data.drinks,
        glass: glass.data.drinks,
        category: category.data.drinks,
      });
    } catch (error) {
      console.log(error);
    }
  },
}));

export default useStoreFilters;
