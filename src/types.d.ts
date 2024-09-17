export const urls = {
  alcoholic: "https://www.thecocktaildb.com/api/json/v1/1/list.php?a=list",
  ingredient: "https://www.thecocktaildb.com/api/json/v1/1/list.php?i=list",
  glass: "https://www.thecocktaildb.com/api/json/v1/1/list.php?g=list",
  category: "https://www.thecocktaildb.com/api/json/v1/1/list.php?c=list",
};
export interface Drink {
  strDrink: string | undefined;
  strDrinkThumb: string | undefined;
  idDrink: string | undefined;
  strAlcoholic?: string | undefined;
  strGlass?: string | undefined;
  strIngredient1?: string | undefined;
  strIngredient2?: string | undefined;
  strIngredient3?: string | undefined;
  strInstructions?: string;
}

export interface TeamUsers {
  name: {
    title: string;
    first: string;
    last: string;
  };
  cell: string;
  email: string;
  city: string;
  country: string;
  dob: {
    age: number;
  };
  picture: {
    thumbnail: string;
  };
}
