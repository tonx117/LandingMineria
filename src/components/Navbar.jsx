// Navbar.jsx

import React from "react";
import "/public/css/nav.css";

export const Navbar = () => {
  const scrollToSection = (id) => {
    const section = document.getElementById(id);
    if (section) {
      section.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <nav>
      <div className="wrapper">
        <div className="logo">
          <a href="#">Chiperia Don Mauricio</a>
        </div>
        <input type="radio" name="slider" id="menu-btn" />
        <input type="radio" name="slider" id="close-btn" />
        <ul className="nav-links">
          <label htmlFor="close-btn" className="btn close-btn">
            <i className="fas fa-times"></i>
          </label>
          <li>
            <a onClick={() => scrollToSection("masdobjetivos")}>Promociones</a>
          </li>
          <li>
            <a onClick={() => scrollToSection("cmaskills")}>Productos</a>
          </li>
          <li>
            <a onClick={() => scrollToSection("cmasjugado")}>Nosotros</a>
          </li>
          <li>
            <a onClick={() => scrollToSection("flash")}>Sucursales</a>
          </li>

          <li>
            <a onClick={() => scrollToSection("muertesrol")}>Contacto</a>
          </li>
        </ul>
        <label htmlFor="menu-btn" className="btn menu-btn">
          <i className="fas fa-bars"></i>
        </label>
      </div>
    </nav>
  );
};
