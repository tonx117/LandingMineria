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
          <a href="#">League Of Graphs</a>
        </div>
        <input type="radio" name="slider" id="menu-btn" />
        <input type="radio" name="slider" id="close-btn" />
        <ul className="nav-links">
          <label htmlFor="close-btn" className="btn close-btn">
            <i className="fas fa-times"></i>
          </label>
          <p className="pseccion">Secciones</p>
          <li>
            <a onClick={() => scrollToSection("cmasjugado")}>1ra</a>
          </li>
          <li>
            <a onClick={() => scrollToSection("cmaskills")}>2da</a>
          </li>
          <li>
            <a onClick={() => scrollToSection("flash")}>3ra</a>
          </li>
          <li>
            <a onClick={() => scrollToSection("masdobjetivos")}>4ta</a>
          </li>
          <li>
            <a onClick={() => scrollToSection("muertesrol")}>5ta</a>
          </li>
          <li>
            <a onClick={() => scrollToSection("rolmasjugado")}>6ta</a>
          </li>
          <li>
            <a onClick={() => scrollToSection("cmasvictorias")}>7ma</a>
          </li>
          <li>
            <a onClick={() => scrollToSection("cmasderrotas")}>8va</a>
          </li>
        </ul>
        <label htmlFor="menu-btn" className="btn menu-btn">
          <i className="fas fa-bars"></i>
        </label>
      </div>
    </nav>
  );
};
