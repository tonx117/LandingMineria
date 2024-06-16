import "./App.css";
import { Navbar } from "./components/Navbar.jsx";
import { Footer } from "./components/Footer.jsx";
import "../public/css/img.css";
import { Nosotros } from "./components/Nosotros.jsx";
import { Productos } from "./components/Productos.jsx";
import { Sucursales } from "./components/Sucursales.jsx";
import { Promociones } from "./components/Promociones.jsx";

import { Contacto } from "./components/Contacto.jsx";

function App() {
  return (
    <>
      <Navbar />
      <br />
      <br />
      <br />
      <div className="Containerimg">
        <img className="VIVSBLUE" src="./img/panaderia.png" alt="" />
      </div>
      <Promociones />
      <Productos />
      <Nosotros />
      <Sucursales />
      <Contacto />
      <br />
      <Footer />
    </>
  );
}

export default App;
