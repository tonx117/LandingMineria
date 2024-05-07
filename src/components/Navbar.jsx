// Navbar.jsx

import React from "react";
import "/public/css/nav.css";

export const Navbar = () => {
  return (
    <nav>
      <div class="wrapper">
        <div class="logo">
          <a href="#">League Of Graphs</a>
        </div>
        <input type="radio" name="slider" id="menu-btn" />
        <input type="radio" name="slider" id="close-btn" />
        <ul class="nav-links">
          <label for="close-btn" class="btn close-btn">
            <i class="fas fa-times"></i>
          </label>
          <p className="pseccion">Secciones</p>
          <li>
            <a href="#cmasjugado">1ra</a>
          </li>
          <li>
            <a href="#cmaskills">2da</a>
          </li>
          <li>
            <a href="#flash">3ra</a>
          </li>
          <li>
            <a href="#masdobjetivos">4ta</a>
          </li>
          <li>
            <a href="#muertesrol">5ta</a>
          </li>
          <li>
            <a href="#rolmasjugado">6ta</a>
          </li>
        </ul>
        <label for="menu-btn" class="btn menu-btn">
          <i class="fas fa-bars"></i>
        </label>
      </div>
    </nav>
  );
};
