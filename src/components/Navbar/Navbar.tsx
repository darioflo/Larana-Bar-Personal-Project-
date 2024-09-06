import "./Navbar.css";
import logo from "../../assets/logo.png";

function Navbar() {
  return (
    <nav className="navbar">
      <div className="brand">
        <img src={logo} alt="navbrand" />
      </div>
      <div className="library">
        <ul>
          <li>Inicio</li>
          <li>Información</li>
          <li>Servicios</li>
          <li>Contacto</li>
        </ul>
      </div>
      <div className="options">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="2em"
          height="2em"
          viewBox="0 0 24 24"
        >
          <g fill="none" stroke="white" strokeWidth="1.5">
            <circle cx="12" cy="6" r="4" />
            <path d="M20 17.5c0 2.485 0 4.5-8 4.5s-8-2.015-8-4.5S7.582 13 12 13s8 2.015 8 4.5Z" />
          </g>
        </svg>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="2em"
          height="2em"
          viewBox="0 0 32 32"
        >
          <path
            fill="white"
            d="M6 30h12a2 2 0 0 0 2-2v-3h-2v3H6V4h12v3h2V4a2 2 0 0 0-2-2H6a2 2 0 0 0-2 2v24a2 2 0 0 0 2 2"
          />
          <path
            fill="white"
            d="M20.586 20.586L24.172 17H10v-2h14.172l-3.586-3.586L22 10l6 6l-6 6z"
          />
        </svg>
      </div>
    </nav>
  );
}

export default Navbar;
