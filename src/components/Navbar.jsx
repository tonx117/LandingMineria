import React from "react";
import "/public/css/nav.css";

export const Navbar = () => {
  return (
    <nav>
      <div class="wrapper">
        <div class="logo">
          <a href="#">H</a>
        </div>
        <input type="radio" name="slider" id="menu-btn" />
        <input type="radio" name="slider" id="close-btn" />
        <ul class="nav-links">
          <label for="close-btn" class="btn close-btn">
            <i class="fas fa-times"></i>
          </label>
          <li>
            <a href="#">A</a>
          </li>
          <li>
            <a href="#">B</a>
          </li>
          <li>
            <a href="#">C</a>
          </li>
        </ul>
        <label for="menu-btn" class="btn menu-btn">
          <i class="fas fa-bars"></i>
        </label>
      </div>
    </nav>
  );
};
