import React from "react";
import "../../public/css/img.css";
import "../../public/css/boton.css";

export const Sucursales = () => {
  return (
    <div className="SECCION">
      <section id="flash">
        <h2 className="h2sucursales">Sucursales</h2>
        <div className="DivSeccionSucursales">
          <div className="iconos">
            <img src="./img/mapmarker.png" alt="" />
            <img src="./img/phone.png" alt="" />
            <img src="./img/email.png" alt="" />
          </div>
          <div className="Direccion">
            <p>Av. 25 de Mayo 1148-1198, P3600AEE, P3600AEE Formosa</p>
            <p>+34 912 345 678</p>
            <p>info@chiperiadonmauricio.com</p>
          </div>
        </div>
      </section>
    </div>
  );
};
