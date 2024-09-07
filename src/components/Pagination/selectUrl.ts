export const selectUrl = (
  inputCheckedID: string | null,
  inputChecked: string | null
): string => {
  switch (inputCheckedID) {
    case "alcoholic":
      return `https://www.thecocktaildb.com/api/json/v1/1/filter.php?a=${inputChecked}`;
    case "ingredient":
      return `https://www.thecocktaildb.com/api/json/v1/1/filter.php?i=${inputChecked}`;
    case "glass":
      return `https://www.thecocktaildb.com/api/json/v1/1/filter.php?g=${inputChecked}`;
    case "category":
      return `https://www.thecocktaildb.com/api/json/v1/1/filter.php?c=${inputChecked}`;
    default:
      return "";
  }
};
