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
}
