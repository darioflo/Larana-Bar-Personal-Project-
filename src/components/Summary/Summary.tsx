/* eslint-disable react-hooks/exhaustive-deps */
import "./Summary.css";
import useStoreFilters from "../../globalStates/useStoreFilters";
import useCheckboxStore from "../../globalStates/useCheckboxStore";
import React, { useEffect } from "react";

interface AlcoholicItem {
  strAlcoholic: string;
  strIngredient1: string;
  strGlass: string;
  strCategory: string;
}

const Summary: React.FC = () => {
  const { alcoholic, ingredient, category, glass, getFilters } =
    useStoreFilters();
  const { inputChecked, setInputSelected } = useCheckboxStore();

  const handleCheckboxChange = (name: string, id: string): void => {
    setInputSelected(name, id);
  };

  useEffect(() => {
    getFilters();
  }, [getFilters]);

  return (
    <>
      <details className="details-aside" open>
        <summary>Alcoholic</summary>
        {alcoholic.map((item: AlcoholicItem, index: number) => (
          <div key={index} className="drink-filters">
            <label htmlFor={`alcoholic-${index}`}>
              {item.strAlcoholic}
              <input
                type="checkbox"
                id={`alcoholic-${index}`}
                name={item.strAlcoholic}
                checked={inputChecked === `${item.strAlcoholic}`}
                onChange={() =>
                  handleCheckboxChange(`${item.strAlcoholic}`, "alcoholic")
                }
                className="input-check"
              />
            </label>
          </div>
        ))}
      </details>
      <details className="details-aside" open>
        <summary>Ingredientes</summary>
        {ingredient.slice(0, 6).map((item: AlcoholicItem, index: number) => (
          <div key={index} className="drink-filters">
            <label htmlFor={`ingredient-${index}`}>
              {item.strIngredient1}
              <input
                type="checkbox"
                id={`ingredient-${index}`}
                name={item.strIngredient1}
                className="input-check"
                checked={inputChecked === `${item.strIngredient1}`}
                onChange={() =>
                  handleCheckboxChange(`${item.strIngredient1}`, "ingredient")
                }
              />
            </label>
          </div>
        ))}
      </details>
      <details className="details-aside" open>
        <summary>Vasos</summary>
        {glass.slice(0, 6).map((item: AlcoholicItem, index: number) => (
          <div key={index} className="drink-filters">
            <label htmlFor={`glass-${index}`}>
              {item.strGlass}{" "}
              <input
                type="checkbox"
                id={`glass-${index}`}
                name={item.strGlass}
                className="input-check"
                checked={inputChecked === `${item.strGlass}`}
                onChange={() =>
                  handleCheckboxChange(`${item.strGlass}`, "glass")
                }
              />
            </label>
          </div>
        ))}
      </details>
      <details className="details-aside" open>
        <summary>Categorias</summary>
        {category.slice(0, 4).map((item: AlcoholicItem, index: number) => (
          <div key={index} className="drink-filters">
            <label htmlFor={`category-${index}`}>
              {item.strCategory}
              <input
                type="checkbox"
                id={`category-${index}`}
                name={item.strCategory}
                className="input-check"
                checked={inputChecked === `${item.strCategory}`}
                onChange={() =>
                  handleCheckboxChange(`${item.strCategory}`, "category")
                }
              />
            </label>
          </div>
        ))}
      </details>
    </>
  );
};

export default Summary;
