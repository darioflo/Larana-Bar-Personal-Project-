import useSearchState from "../../globalStates/useSearchDrinks";
import "./Search.css";
import useDrinksResults from "../../globalStates/useSearchResults";
import axios, { AxiosResponse } from "axios";
import { Drink } from "../../types";
import { useEffect } from "react";

interface ApiResponse {
  drinks: Drink[];
}

const Search: React.FC = () => {
  const { drinkSearched, setDrinkSearched } = useSearchState();
  const { setDrinksResults } = useDrinksResults();

  const handleChangeSearch = (event: React.ChangeEvent<HTMLInputElement>) => {
    setDrinkSearched(event.target.value);
  };

  const searchDrinks = async (): Promise<void> => {
    try {
      let response: AxiosResponse<ApiResponse> = await axios.get(
        `https://www.thecocktaildb.com/api/json/v1/1/search.php?s=${drinkSearched}`
      );
      const searchedDrinks: Drink[] = response.data.drinks.map(
        (drink: Drink) => ({
          idDrink: drink.idDrink,
          strAlcoholic: drink.strAlcoholic,
          strDrink: drink.strDrink,
          strDrinkThumb: drink.strDrinkThumb,
          strGlass: drink.strGlass,
          strIngredient1: drink.strIngredient1,
          strIngredient2: drink.strIngredient2,
          strIngredient3: drink.strIngredient3,
          strInstructions: drink.strInstructions,
        })
      );

      setDrinksResults(searchedDrinks);
      console.log(searchedDrinks);
      console.log(drinkSearched);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    if (drinkSearched.length > 1) {
      searchDrinks();
    }
  }, [drinkSearched]);

  return (
    <div className="search-box">
      <input
        type="search"
        name="drink"
        id=""
        placeholder="Buscar..."
        value={drinkSearched}
        onChange={handleChangeSearch}
      />
    </div>
  );
};

export default Search;
