import React from "react";
import jambes from "../images/jambes.png";
import seins from "../images/seins.png";
import fesses from "../images/fesses.png";
import { useNavigate } from "react-router-dom";
import "./Formulaire2.css";
import logo from "../images/logo.png"
export default function Formulaire3() {
  const navig = useNavigate();
  return <div>
      <br /> <br />
      <img src={logo} className="lugu" />
      <h1>Choisissez vos zones cibles</h1>
      <img src={jambes} className="ff" />
      <button type="button" className="btn" style={{ position: "relative", top: "240px", right: "160px", width: "200px" }} onClick={() => {
          navig("/formulaire4");
        }}>
        Jambes Minces
      </button>
      <img src={fesses} className="mm" />
      <button type="button" className="btn" style={{ position: "relative", top: "240px", right: "-40px", width: "200px" }} onClick={() => {
          navig("/formulaire4");
        }}>
        Fesses tonifiées
      </button>
      <img src={seins} className="gg" />
      <button type="button" className="btn" style={{ position: "relative", top: "240px", right: "-240px", width: "200px" }} onClick={() => {
          navig("/formulaire4");
        }}>
        Seins fermes
      </button>
      <h5 className="fum">
        {" "}"Choisir mes zones cibles ? Je vais aller avec la 'Zone Ventre
        Plat' et la 'Zone Adieu Poignées d'Amour'. C'est comme choisir les
        destinations de mes vacances, mais avec plus de crunchs et moins de
        sable."
      </h5>
    </div>;
}
