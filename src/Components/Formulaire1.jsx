import React from "react";
import "./Formulaire1.css";
import Dodu from "../images/Dodu.png";
import Regulier from "../images/Regulier.png";
import Extradodu from "../images/Extradodu.png";
import { useNavigate } from "react-router-dom";
import logo from "../images/logo.png"

export default function Formulaire1() {
  const navig = useNavigate();

  return <div>
      <img src={logo} className="lugu" />

      <br />
      <br />
      <h1> Choisissez votre morphologie</h1>
      <img src={Regulier} className="nrm" />
      <button type="button" className="btn" style={{ position: "relative", top: "240px", right: "170px", width: "200px" }} onClick={() => {
          navig("/formulaire2");
        }}>
        Régulier
      </button>
      <img src={Dodu} className="dd" />
      <button type="button" className="btn" style={{ position: "relative", top: "240px", right: "-40px", width: "200px" }} onClick={() => {
          navig("/formulaire2");
        }}>
        Dodu
      </button>

      <img src={Extradodu} className="bd" />
      <button type="button" className="btn" style={{ position: "relative", top: "240px", right: "-240px", width: "200px" }} onClick={() => {
          navig("/formulaire2");
        }}>
        Extra Dodu
      </button>
      <h5 className="fum">
        {" "}"Choisir ma morphologie ? C'est comme choisir le costume parfait
        pour ma symphonie corporelle. Attachez vos ceintures, on va danser
        vers une nouvelle silhouette en mode élégance et légèreté !"
      </h5>
    </div>;
}
