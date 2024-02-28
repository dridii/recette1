import React from "react";
import "./Formulaire2.css";
import Fit from "../images/Fit.png";
import Musclee from "../images/Musclee.png";
import Galbe from "../images/Galbe.png";
import { useNavigate } from "react-router-dom";
import logo from "../images/logo.png";
export default function Formulaire2() {
  const navig = useNavigate();

  return <div>
      <br /> <br />
      <img src={logo} className="lugu" />
      <h1> Choisissez le corps que vous voulez</h1>
      <img src={Fit} className="ff" />
      <button type="button" className="btn" style={{ position: "relative", top: "240px", right: "160px", width: "200px" }} onClick={() => {
          navig("/formulaire3");
        }}>
        FIT
      </button>
      <img src={Musclee} className="mm" />
      <button type="button" className="btn" style={{ position: "relative", top: "240px", right: "-40px", width: "200px" }} onClick={() => {
          navig("/formulaire3");
        }}>
        Musclé
      </button>
      <img src={Galbe} className="gg" />
      <button type="button" className="btn" style={{ position: "relative", top: "240px", right: "-238px", width: "200px" }} onClick={() => {
          navig("/formulaire3");
        }}>
        Gablé
      </button>
      <h5 className="fum">
        {" "}"Choisir le corps que je veux ? Je prends celui qui brûle les
        calories en dormant. Où est-ce que je signe pour ce forfait nocturne
        magique ?"
      </h5>
    </div>;
}
