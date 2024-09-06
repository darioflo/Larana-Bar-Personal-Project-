import "./Wallpaper.css";
import wallpaper from "../../assets/wallpaper.png";

function Wallpaper() {
  return (
    <div className="wallpaper">
      <img src={wallpaper} alt="" />
      <div className="hero">
        <h1 className="animate__animated animate__bounceInLeft">
          Descubre el Arte de las Bebidas
        </h1>
        <p className="animate__animated animate__bounceInLeft">
          Explora nuestra selección de copas y bebidas exclusivas, diseñadas
          para deleitar tus sentidos y elevar cualquier ocasión.
        </p>
        <button className="button animate__animated animate__bounceInRight">
          Ver Colección
        </button>
      </div>
    </div>
  );
}

export default Wallpaper;
