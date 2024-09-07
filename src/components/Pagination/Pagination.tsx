import React, { useState, useEffect } from "react";
import Card from "../Card/Card";
import "./Pagination.css";
import { Drink } from "../../types";
import useDrinks from "../../globalStates/useDrinks";
import useCheckboxStore from "../../globalStates/useCheckboxStore";
import axios, { AxiosResponse } from "axios";

interface ApiResponse {
  drinks: Drink[];
}

const Pagination: React.FC = () => {
  const [currentPage, setCurrentPage] = useState(1);
  const { drinks, setDrinks } = useDrinks();
  const { inputCheckedID, inputChecked, setInputSelected } = useCheckboxStore();
  const cardsPerPage = 3;

  const totalPages = Math.ceil(drinks.length / cardsPerPage);

  const handlePageChange = (page: number) => {
    if (page > 0 && page <= totalPages) {
      setCurrentPage(page);
    }
  };

  const getCurrentPageDrinks = () => {
    const startIndex = (currentPage - 1) * cardsPerPage;
    const endIndex = startIndex + cardsPerPage;

    return drinks.slice(startIndex, endIndex);
  };

  const selectUrl = (inputCheckedID: string): string => {
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

  const getDrinks = async (url: string): Promise<void> => {
    try {
      let response: AxiosResponse<ApiResponse> = await axios.get(url);
      setDrinks(response.data.drinks);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    if (inputCheckedID !== null) {
      const url = selectUrl(inputCheckedID);
      if (url) {
        getDrinks(url);
      }
    }
  }, [inputCheckedID, inputChecked]);

  useEffect(() => {
    setCurrentPage(1);
  }, [inputChecked]);

  const getPaginationButtons = () => {
    const buttons = [];
    for (let i = -1; i <= 1; i++) {
      const page = currentPage + i;
      if (page > 0 && page <= totalPages) {
        buttons.push(
          <button
            key={page}
            onClick={() => handlePageChange(page)}
            className={page === currentPage ? "active" : ""}
          >
            {page}
          </button>
        );
      }
    }
    return buttons;
  };

  return (
    <div className="pagination-container">
      <div className="close" onClick={() => setInputSelected(null, null)}>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="1.5em"
          height="2em"
          viewBox="0 0 24 24"
        >
          <path
            fill="#514d4f"
            d="M18.3 5.71a.996.996 0 0 0-1.41 0L12 10.59L7.11 5.7A.996.996 0 1 0 5.7 7.11L10.59 12L5.7 16.89a.996.996 0 1 0 1.41 1.41L12 13.41l4.89 4.89a.996.996 0 1 0 1.41-1.41L13.41 12l4.89-4.89c.38-.38.38-1.02 0-1.4"
          />
        </svg>
      </div>
      <div className="cards-container">
        {getCurrentPageDrinks().map((drink: Drink) => (
          <Card key={drink.idDrink} drink={drink} />
        ))}
      </div>
      <div className="pagination-buttons">
        <button onClick={() => handlePageChange(currentPage - 1)}>Prev</button>
        {getPaginationButtons()}
        <button onClick={() => handlePageChange(currentPage + 1)}>Next</button>
      </div>
    </div>
  );
};

export default Pagination;
