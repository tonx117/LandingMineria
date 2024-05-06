import React from "react";
import "../../public/css/img.css";
import "../../public/css/boton.css";

export const CMasKills = () => {
  return (
    <div className="SECCION">
      <section>
        <h2>Campeon con mas kills</h2>
        <div className="DivSeccion">
          <div className="DivBotones">
            <button className="boton">EU</button>
            <button className="boton">NA</button>
            <button className="boton">KR</button>
          </div>
          <div className="Lee">
            <img src="./img/Lee.png" alt="" />
          </div>
        </div>
      </section>
    </div>
  );
};
