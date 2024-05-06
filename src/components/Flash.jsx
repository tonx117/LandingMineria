import React from "react";
import "../../public/css/img.css";
import "../../public/css/boton.css";

export const Flash = () => {
  return (
    <div className="SECCION">
      <section>
        <h2>Tecla mas usada para el Flash</h2>
        <div className="DivSeccion">
          <div className="DivBotones">
            <button className="boton">EU</button>
            <button className="boton">NA</button>
            <button className="boton">KR</button>
          </div>
          <div className="Jhin">
            <img src="./img/Jhin.png" alt="" />
          </div>
        </div>
      </section>
    </div>
  );
};
