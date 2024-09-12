import "./Flip-Section.css";
import React, { useEffect, useRef, useState } from "react";
import { Drink } from "../../types";
import axios, { AxiosResponse } from "axios";
import soda from "../../assets/soda.png";
import { createIntersectionObserver } from "./intersectionObserver";

interface ApiResponse {
  drinks: Drink[];
}

const FlipSection: React.FC = () => {
  const [randomDrink, setRandomDrink] = useState<Drink | null>(null);
  const flipCardRef = useRef<HTMLDivElement>(null);

  const getRandomDrink = async (): Promise<void> => {
    try {
      const response: AxiosResponse<ApiResponse> = await axios.get(
        "https://www.thecocktaildb.com/api/json/v1/1/random.php"
      );
      setRandomDrink(response.data.drinks[0]);
    } catch (error) {
      console.error(error);
    }
  };

  useEffect(() => {
    getRandomDrink();
    console.log(randomDrink);
  }, []);

  useEffect(() => {
    if (flipCardRef.current) {
      createIntersectionObserver(flipCardRef.current);
    }
  }, []);

  return (
    <div className="flip-card" ref={flipCardRef}>
      <div className="flip-card-inner">
        <div className="flip-card-front">
          <p className="title">Bebida Estrella </p>
          <div className="imgs">
            <img src={soda} alt="Imagen" />
          </div>
          <p>¡Prueba nuestro cóctel especial!</p>
          <p>Disfruta de un ambiente acogedor y un servicio excepcional.</p>
        </div>
        <div className="flip-card-back">
          <p className="title">{randomDrink?.strDrink}</p>
          <img
            src={randomDrink?.strDrinkThumb}
            alt={randomDrink?.strAlcoholic}
          />
          <div className="text-random-card">
            <p>
              Categoria: <i>{randomDrink?.strAlcoholic}</i>
            </p>
            <p>
              Ingredientes: <i>{randomDrink?.strIngredient1}</i>,
              <i>{randomDrink?.strIngredient2}</i>,
              <i>{randomDrink?.strIngredient3}</i>
            </p>
            <p>
              Copa: <i>{randomDrink?.strGlass}</i>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FlipSection;
