import React from "react";
import "./Information.css";

const Information: React.FC = () => {
  return (
    <div className="information-container">
      <div className="info-box">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="3.38em"
          height="3em"
          viewBox="0 0 576 512"
        >
          <path
            fill="#ff0072"
            d="M488.2 59.1C478.1 99.6 441.7 128 400 128s-78.1-28.4-88.2-68.9L303 24.2C298.8 7.1 281.4-3.3 264.2 1S236.7 22.6 241 39.8l8.7 34.9c11 44 40.2 79.6 78.3 99.6V480c0 17.7 14.3 32 32 32s32-14.3 32-32V352h16v128c0 17.7 14.3 32 32 32s32-14.3 32-32V174.3c38.1-20 67.3-55.6 78.3-99.6l8.7-34.9c4.3-17.1-6.1-34.5-23.3-38.8S501.2 7.1 497 24.2l-8.7 34.9zM400 96a48 48 0 1 0 0-96a48 48 0 1 0 0 96M80 96a48 48 0 1 0 0-96a48 48 0 1 0 0 96m-8 32c-35.3 0-64 28.7-64 64v288c0 17.7 14.3 32 32 32s32-14.3 32-32V352h16v128c0 17.7 14.3 32 32 32s32-14.3 32-32V252.7l13 20.5c5.9 9.2 16.1 14.9 27 14.9h48c17.7 0 32-14.3 32-32s-14.3-32-32-32h-30.4l-37.4-58.9C157.6 142 132.1 128 104.7 128z"
          />
        </svg>
        <h3>Ambiente</h3>
        <p>
          Disfruta de un ambiente vibrante y lleno de energía con la mejor
          música. Nuestro disco-bar está diseñado para ofrecer una experiencia
          única con iluminación de última generación y un sistema de sonido
          envolvente que te hará sentir cada beat.
        </p>
      </div>
      <div className="info-box">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="3em"
          height="3em"
          viewBox="0 0 20 20"
        >
          <path
            fill="#ff0072"
            d="M17.538 2.639C17.932 2.094 18 1 18 1H2s.068 1.094.462 1.639L9 11v6H7c-2 0-2 2-2 2h10s0-2-2-2h-2v-6zM9.4 6a1.599 1.599 0 1 1 3.2 0a1.6 1.6 0 0 1-3.2 0"
          />
        </svg>
        <h3>Bebidas</h3>
        <p>
          Ofrecemos una amplia variedad de cócteles y bebidas premium. Desde los
          clásicos como el Mojito y la Margarita, hasta nuestras creaciones
          exclusivas, cada bebida es preparada con los mejores ingredientes por
          nuestros talentosos bartenders.
        </p>
      </div>
      <div className="info-box">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="3em"
          height="3em"
          viewBox="0 0 15 15"
        >
          <path
            fill="#ff0072"
            d="M1.393 7.931L.025 7.315A14.05 14.05 0 0 1 7.764-.001l.027.07l.511 1.331l-.003.001a12.6 12.6 0 0 0-6.906 6.53m10.963 4.96L2.42 8.414a11.6 11.6 0 0 1 6.354-6.009l.003-.001l.817 2.122c-.028-.002-.052-.016-.081-.016a1.062 1.062 0 1 0 .764 1.793l2.413 6.273a.249.249 0 0 1-.334.316ZM7.426 7.52a.925.925 0 1 0-1.849 0a.925.925 0 0 0 1.849 0m3.017 2.03a.925.925 0 1 0-.07.353a.9.9 0 0 0 .07-.354Z"
          />
        </svg>
        <h3>Comida</h3>
        <p>
          Deléitate con nuestra selección de aperitivos y platos gourmet.
          Nuestro menú incluye desde tapas y bocadillos hasta platos principales
          que satisfarán todos tus antojos.
        </p>
      </div>
      <div className="info-box">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="3em"
          height="3em"
          viewBox="0 0 36 36"
        >
          <path
            fill="#514d4f"
            d="M10 10a1 1 0 0 0 1-1V3a1 1 0 0 0-2 0v6a1 1 0 0 0 1 1"
            className="clr-i-solid clr-i-solid-path-1"
          />
          <path
            fill="#514d4f"
            d="M26 10a1 1 0 0 0 1-1V3a1 1 0 0 0-2 0v6a1 1 0 0 0 1 1"
            className="clr-i-solid clr-i-solid-path-2"
          />
          <path
            fill="#514d4f"
            d="M32.25 6h-4v3a2.2 2.2 0 0 1-4.4 0V6H12.2v3a2.2 2.2 0 0 1-4.4 0V6h-4A1.78 1.78 0 0 0 2 7.81v22.38A1.78 1.78 0 0 0 3.75 32h28.5A1.78 1.78 0 0 0 34 30.19V7.81A1.78 1.78 0 0 0 32.25 6m-6.31 10.58l-9.67 9.67L11 20.94A1.36 1.36 0 0 1 12.9 19l3.38 3.38L24 14.66a1.36 1.36 0 1 1 1.93 1.93Z"
            className="clr-i-solid clr-i-solid-path-3"
          />
          <path fill="none" d="M0 0h36v36H0z" />
        </svg>
        <h3>Eventos</h3>
        <p>
          Organizamos eventos temáticos y fiestas exclusivas cada semana. Desde
          noches de karaoke y concursos de baile, hasta fiestas de disfraces y
          eventos con DJs invitados.
        </p>
      </div>
    </div>
  );
};

export default Information;
