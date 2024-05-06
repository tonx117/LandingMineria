import React from "react";
import "../../public/css/img.css";
import "../../public/css/boton.css";

export const CMasJugado = () => {
  return (
    <div className="SECCION">
      <section>
        <h2>Campeon mas jugado por region</h2>
        <div className="DivSeccion">
          <div className="DivBotones">
            <button className="boton">EU</button>
            <button className="boton">NA</button>
            <button className="boton">KR</button>
          </div>
          <div className="Jinx">
            <img src="./img/Jinx.png" alt="" />
          </div>
        </div>
      </section>
    </div>
  );
};
