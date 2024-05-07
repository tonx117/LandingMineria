import "./App.css";
import { Navbar } from "./components/Navbar.jsx";
import { Footer } from "./components/Footer.jsx";
import "../public/css/img.css";
import { CMasJugado } from "./components/CMasJugado.jsx";
import { CMasKills } from "./components/CMasKills.jsx";
import { Flash } from "./components/Flash.jsx";
import { MasDObjetivos } from "./components/MasDObjetivos.jsx";
import { RolMasJugado } from "./components/RolMasJugado.jsx";
import { MuertesRol } from "./components/MuertesRol.jsx";

function App() {
  return (
    <>
      <Navbar />
      <br />
      <br />
      <br />
      <div className="Containerimg">
        <img className="VIVSBLUE2" src="./img/VIVSBLUE2.gif" alt="" />
        <img className="VIVSBLUE" src="./img/VIVSBLUE2.gif" alt="" />
        <img className="LOLLOGO" src="./img/LOLLOGO.png" alt="" />
      </div>
      <CMasJugado />
      <CMasKills />
      <Flash />
      <MasDObjetivos />
      <MuertesRol />
      <RolMasJugado />
      <br />
      <Footer />
    </>
  );
}

export default App;
