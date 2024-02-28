import React, { useState } from "react";
import logo from "../images/logo.png";
import { useNavigate } from "react-router-dom";
import "./Formulaire2.css";

export default function Formulaire12() {
  const [taille, setTaille] = useState("");
  const navig = useNavigate();

  const handleClick = () => {
    if (taille.trim() !== "") {
      navig("/formulaire13");
    }
  };

  return (
    <div>
      <br />
      <br />
      <h2>Quelle est votre taille ?</h2>
      <br />
      <br />
      <br />
      <p style={{ position: "absolute", left: "560px", top: "135px" }}>
        Taille (cm)
      </p>
      <img src={logo} alt="Logo" className="lggggll" />
      <input
        className="put"
        type="text"
        value={taille}
        onChange={e => setTaille(e.target.value)}
      />
      <button
        className="btn btn-success"
        type="button"
        style={{
          position: "relative",
          top: "260px",
          left: "-165px",
          width: "390px"
        }}
        onClick={handleClick}
      >
        Valider
      </button>
      <div className="textbox-container">
        <div className="textbox-content">
          <p>
            <h5>Calcul de votre indice de masse corporelle</h5>
            L'IMC est largement utilisé comme indicateur de risque pour le
            développement ou la prévalence de plusieurs problèmes de santé.
          </p>
        </div>
      </div>
    </div>
  );
}
