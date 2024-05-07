import React from "react";
import "../../public/css/img.css";
import "../../public/css/boton.css";

export const CMasJugado = () => {
  // Función para abrir una ventana de imagen con una URL específica
  const abrirVentanaImagen = (urlImagen) => {
    window.open(urlImagen, "_blank", "width=400,height=400");
  };

  return (
    <div className="SECCION">
      <section>
        <h2>Campeon mas jugado por region</h2>
        <div className="DivSeccion">
          <div className="DivBotones">
            {/* Botón para la región EU */}
            <button
              className="boton"
              onClick={() => abrirVentanaImagen("/img/CMJEU.jpeg")}
            >
              EU
            </button>
            {/* Botón para la región NA */}
            <button
              className="boton"
              onClick={() => abrirVentanaImagen("/img/CMJNA.jpeg")}
            >
              NA
            </button>
            {/* Botón para la región KR */}
            <button
              className="boton"
              onClick={() => abrirVentanaImagen("/img/CMJKR.jpeg")}
            >
              KR
            </button>
          </div>
          {/* Contenedor de la imagen */}
          <div className="Jinx">
            <img src="./img/Jinx.png" alt="" />
          </div>
        </div>
      </section>
    </div>
  );
};
