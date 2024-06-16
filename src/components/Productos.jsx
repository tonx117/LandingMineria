import React, { useState } from "react";
import "../../public/css/img.css";
import "../../public/css/boton.css";
import "../../public/css/carrousel.css";

const Carrusel = ({ images, identifier }) => {
  const [slideIndex, setSlideIndex] = useState(0);

  const plusSlides = (n) => {
    let newIndex = slideIndex + n;
    if (newIndex >= images.length) newIndex = 0;
    if (newIndex < 0) newIndex = images.length - 1;
    setSlideIndex(newIndex);
  };

  return (
    <div className={`slideshow-container slideshow-container-${identifier}`}>
      {images.map((image, index) => (
        <div
          key={index}
          className={`mySlides-${identifier} fade`}
          style={{ display: index === slideIndex ? "block" : "none" }}
        >
          <div className="numbertext">
            {index + 1} / {images.length}
          </div>
          <img
            src={image.src}
            style={{ width: "300px", height: "400px" }}
            alt={image.alt}
          />
        </div>
      ))}
      <a className="prev" onClick={() => plusSlides(-1)}>
        &#10094;
      </a>
      <a className="next" onClick={() => plusSlides(1)}>
        &#10095;
      </a>
    </div>
  );
};

export const Productos = () => {
  const images1 = [
    { src: "./img/factureria.png", alt: "Producto 1" },
    { src: "./img/facturas1.jpg", alt: "Producto 2" },
    { src: "./img/chipa.png", alt: "Producto 3" },
    { src: "./img/facturas2.jpg", alt: "Producto 4" },
  ];

  const images2 = [
    { src: "./img/cafeteria.png", alt: "Producto 1" },
    { src: "./img/cafe.png", alt: "Producto 2" },
    { src: "./img/capuccino.png", alt: "Producto 3" },
    { src: "./img/frappe.png", alt: "Producto 4" },
  ];

  const images3 = [
    { src: "./img/pastasfrescas2.png", alt: "Producto 1" },
    { src: "./img/ravioles.png", alt: "Producto 2" },
    { src: "./img/fideos.png", alt: "Producto 3" },
    { src: "./img/capeletis.jpg", alt: "Producto 4" },
  ];

  return (
    <div className="SECCION">
      <section id="cmaskills">
        <h2 className="fondoh2">Productos</h2>
        <div className="DivSeccion">
          <Carrusel images={images1} identifier="1" />
          <Carrusel images={images2} identifier="2" />
          <Carrusel images={images3} identifier="3" />
        </div>
      </section>
    </div>
  );
};
