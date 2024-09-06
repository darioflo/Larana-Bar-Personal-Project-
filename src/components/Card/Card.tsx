import "./Card.css";
import { Drink } from "../../types";

interface CardProps {
  drink: Drink;
}
const Card: React.FC<CardProps> = ({ drink }) => {
  return (
    <div className="card animate__animated animate__backInRight">
      <div className="content">
        <h5>{drink.strDrink}</h5>
        <img src={drink.strDrinkThumb} alt={drink.strDrink} />
        <p>{drink.idDrink}</p>
        <div className="border"></div>
        <div className="bottom-text">BORCELLE BAR</div>
      </div>
    </div>
  );
};

export default Card;
