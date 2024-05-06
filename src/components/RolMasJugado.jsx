import React from "react";
import "../../public/css/img.css";
import "../../public/css/boton.css";

export const RolMasJugado = () => {
  return (
    <div className="SECCION">
      <section>
        <h2>Rol mas jugado</h2>
        <div className="DivSeccion">
          <div className="DivBotones">
            <button className="boton">EU</button>
            <button className="boton">NA</button>
            <button className="boton">KR</button>
          </div>
          <div className="Lucian">
            <img src="./img/Lucian.png" alt="" />
          </div>
        </div>
      </section>
    </div>
  );
};
