import React from "react";
import "../../public/css/img.css";
import "../../public/css/boton.css";
import "../../public/css/promo.css";

export const Promociones = () => {
  return (
    <div className="SECCION">
      <section id="masdobjetivos">
        <div className="DivSeccionPromo">
          <div className="DivPromo">
            <h1 className="h1promo">
              ¡Celebra el Día del Padre con{" "}
              <span className="highlighth1">La Chipa de Mauricio</span>!
            </h1>
            <p>
              En la <strong>Chiperia Don Mauricio</strong>, queremos hacer del
              Día del Padre un momento inolvidable con nuestros productos más
              especiales. Este año, te invitamos a celebrar con nuestra famosa
              chipa, "<span className="highlight">La Chipa de Mauricio</span>".
            </p>
            <div className="offer">
              <h2 className="h2promo">Promoción Especial del Día del Padre</h2>
              <p>
                Disfruta de un{" "}
                <span className="highlight">descuento del 20%</span> en la
                compra de "<strong>La Chipa de Mauricio</strong>" y sorprende a
                papá con el sabor auténtico que tanto le gusta. Hecha con los
                mejores ingredientes y una receta que ha pasado de generación en
                generación, esta delicia es perfecta para compartir en familia.
              </p>
              <p>
                Además, por cada compra de "
                <strong>La Chipa de Mauricio</strong>", participa en el sorteo
                de una canasta de productos artesanales de nuestra panadería,
                para que sigas disfrutando de nuestros exquisitos panes,
                facturas y especialidades.
              </p>
              <button className="buttonpromo">PIDE AQUI</button>
            </div>
          </div>
          <div className="Kaedetosuzu">
            <img
              className="promo"
              src="./img/Proyectonuevo.jpg"
              alt="Promoción del Día del Padre"
            />
          </div>
        </div>
      </section>
    </div>
  );
};
