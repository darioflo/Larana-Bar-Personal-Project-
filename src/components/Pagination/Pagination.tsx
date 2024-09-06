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
  const { inputCheckedID, inputChecked } = useCheckboxStore();
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
    console.log(startIndex, endIndex);

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

  useEffect(() => {
    console.log(drinks, inputChecked, inputCheckedID);
  }, [drinks, inputChecked, inputCheckedID]);

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
