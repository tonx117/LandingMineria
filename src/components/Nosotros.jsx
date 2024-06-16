import React from "react";
import "../../public/css/img.css";
import "../../public/css/boton.css";

export const Nosotros = () => {
  // Función para abrir una ventana de imagen con una URL específica
  const abrirVentanaImagen = (urlImagen) => {
    window.open(urlImagen, "_blank", "width=400,height=400");
  };

  return (
    <div className="SECCION">
      <section id="cmasjugado">
        <h2 className="nosotrosh2">Nosotros</h2>
        <div className="DivSeccionNosotros">
          <div className="qsyrh">
            <div className="qs">
              <h3>¿Quiénes Somos?</h3>
              <p>
                En Chipería Don Mauricio, elaboramos chipas auténticas siguiendo
                la receta tradicional de nuestro fundador, Mauricio. Nos
                enorgullecemos de ofrecer una experiencia gastronómica única que
                celebra nuestras raíces culturales.
              </p>
            </div>
            <div className="rh">
              <h3>Resumen de la Historia</h3>
              <p>
                Nuestra historia comenzó con Mauricio, quien perfeccionó una
                receta de chipas que hoy es el corazón de nuestra empresa. Desde
                la apertura de nuestra primera chipería, hemos crecido
                manteniendo nuestro compromiso con la calidad y el sabor.
              </p>
            </div>
          </div>
          <div className="nvynmyp">
            <div className="nmyp">
              <h3>Nuestra Misión y Propósito</h3>
              <p>
                Nuestra misión es deleitar a nuestros clientes con productos
                excepcionales, manteniendo la tradición y utilizando
                ingredientes de alta calidad. Buscamos crear momentos de
                felicidad y conexión.
              </p>
            </div>
            <div className="valores">
              <h3>Valores</h3>

              <li>
                <strong>Calidad</strong>
              </li>
              <li>
                <strong> Autenticidad</strong>
              </li>
              <li>
                <strong>Innovación</strong>
              </li>
              <li>
                <strong>Pasión</strong>
              </li>
              <li>
                <strong> Satisfacción del Cliente</strong>
              </li>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};
