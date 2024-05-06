import React from "react";
import "../../public/css/img.css";
import "../../public/css/boton.css";

export const MuertesRol = () => {
  return (
    <div className="SECCION">
      <section>
        <h2>Mas muertes por rol</h2>
        <div className="DivSeccion">
          <div className="DivBotones">
            <button className="boton">EU</button>
            <button className="boton">NA</button>
            <button className="boton">KR</button>
          </div>
          <div className="Yasuo">
            <img src="./img/Yasuo.png" alt="" />
          </div>
        </div>
      </section>
    </div>
  );
};
