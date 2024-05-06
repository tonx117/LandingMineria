import React from "react";
import "../../public/css/img.css";
import "../../public/css/boton.css";

export const MasDObjetivos = () => {
  return (
    <div className="SECCION">
      <section>
        <h2>Mas daño por objetivos</h2>
        <div className="DivSeccion">
          <div className="DivBotones">
            <button className="boton">EU</button>
            <button className="boton">NA</button>
            <button className="boton">KR</button>
          </div>
          <div className="Kaedetosuzu">
            <img src="./img/Nasus.png" alt="" />
          </div>
        </div>
      </section>
    </div>
  );
};
