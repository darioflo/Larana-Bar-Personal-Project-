import { useEffect, useRef } from "react";
import { useShowMap } from "../../globalStates/useShowMap";
import "./LocationInfo.css";
import { intersectionObserverLocation } from "./intersectionObserverLoc";

interface Props {}

const LocationInfo: React.FC<Props> = ({}) => {
  const { setShowMap } = useShowMap();
  const flipCardRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (flipCardRef.current) {
      intersectionObserverLocation(flipCardRef.current);
    }
  }, []);

  return (
    <div className="location-info" ref={flipCardRef}>
      <h3>Descubre Nuestra Localización</h3>
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="3em"
        height="3em"
        viewBox="0 0 24 24"
      >
        <path
          fill="#ff0072"
          d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7m0 9.5a2.5 2.5 0 0 1 0-5a2.5 2.5 0 0 1 0 5"
        />
      </svg>
      <p>
        Bienvenido a nuestro establecimiento. Nos encontramos en el corazón de
        La Habana, un lugar lleno de historia y cultura. Ven y descubre nuestra
        localización, donde podrás disfrutar de un ambiente acogedor y un
        servicio excepcional. ¡Te esperamos!
      </p>
      <button className="button-2 " onClick={() => setShowMap(true)}>
        Ver Ubicacion
      </button>
    </div>
  );
};

export default LocationInfo;
