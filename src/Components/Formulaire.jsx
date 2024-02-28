import React, { useState } from "react";
import "./Formulaire.css";
import { useNavigate } from "react-router-dom";
import m from "../images/m.png";
import pertedepoids from "../images/pertedepoids.png";
import corpsenforme from "../images/corpsenforme.png";
import logo from "../images/logo.png";

export default function Formulaire() {
  const navig = useNavigate();
  const [progress, setProgress] = useState(0);

  const handleButtonClick = () => {
    // Déplacez vers la prochaine page ici
    navig("/formulaire1");
    // Mettez à jour la barre de progression (ajustez le pourcentage en fonction du nombre total d'étapes)
    setProgress(33.33);
  };

  return (
    <div>
      {/* Barre de progression */}
      <div className="progress-bar">
        <div className="progress" style={{ width: `${progress}%` }} />
      </div>

      <img src={logo} className="lugu" />
      <br />
      <br />
      <h1>Choisissez votre objectif</h1>
      <h5> Veuillez sélectionner votre problème principal</h5>

      <img src={corpsenforme} className="frm" />
      <button
        type="button"
        className="btn"
        style={{
          position: "relative",
          top: "210px",
          right: "180px",
          width: "200px"
        }}
        onClick={handleButtonClick}
      >
        Corps en forme
      </button>

      <img src={pertedepoids} className="prt" />
      <button
        type="button"
        className="btn"
        style={{
          position: "relative",
          top: "210px",
          right: "10px",
          width: "200px"
        }}
        onClick={handleButtonClick}
      >
        Perte de poids
      </button>

      <img src={m} className="msl" />
      <button
        type="button"
        className="btn"
        style={{
          position: "relative",
          top: "210px",
          right: "-185px",
          width: "200px"
        }}
        onClick={handleButtonClick}
      >
        Tonifier les muscles
      </button>

      <h5 className="fum">
        {" "}"Mon objectif ? Faire en sorte que mon miroir me donne des
        high-fives plutôt que des critiques. On vise l'applaudissement, pas le
        jugement !"
      </h5>
    </div>
  );
}
