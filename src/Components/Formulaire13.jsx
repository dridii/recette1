import React, { useState } from "react";
import logo from "../images/logo.png";
import { useNavigate } from "react-router-dom";
import "./Formulaire2.css";

export default function Formulaire12() {
  const [taille, setTaille] = useState("");
  const navig = useNavigate();

  const handleClick = () => {
    if (taille.trim() !== "") {
      navig("/formulaire14");
      console.log("Valider button clicked");
    }
  };

  return <div>
      <br />
      <br />
      <h2>Quel est votre poids actuel ?</h2>
      <br />
      <br />
      <br />
      <p style={{ position: "absolute", left: "545px", top: "135px" }}>
        Poids actuel (kg)
      </p>
      <img src={logo} alt="Logo" className="lggggll" />
      <input className="put" type="text" value={taille} onChange={e => setTaille(e.target.value)} />
      <button className="btn btn-success" type="button" style={{ position: "relative", top: "230px", left: "-165px", width: "390px" }} onClick={handleClick}>
        Valider
      </button>
      <div className="textbox-container">
        <div className="textbox-content">
          <h5>
            "Mon poids actuel ? On pourrait dire que je suis en train de
            négocier avec la gravité. On s'entend bien, mais on travaille sur
            une séparation temporaire."
          </h5>
        </div>
      </div>
    </div>;
}
