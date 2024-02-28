import React, { useState } from "react";
import logo from "../images/logo.png";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import "./Formulaire2.css";

export default function Formulaire12() {
  const navig = useNavigate();
  const [showRecette, setShowRecette] = useState(false);
  const [recetteData, setRecetteData] = useState(null);
  const [poidsCible, setPoidsCible] = useState("");

  const handleClick = async () => {
    try {
      const response = await axios.get(
        `http://localhost:4000/get/recette?weight=${poidsCible}`
      );
      setRecetteData(response.data);
      setShowRecette(true);
    } catch (error) {
      console.error("Error fetching recette:", error);
    }
  };

  const handleInputChange = event => {
    setPoidsCible(event.target.value);
  };

  return <div>
      <br />
      <br />
      {!showRecette && <div>
          <h2 style={{ position: "absolute", left: "520px" }}>
            Quel est votre poids souhaité ?
          </h2>
          <br />
          <br />
          <br />
          <br />
          <br />
          <p style={{ position: "absolute", left: "545px", top: "130px" }}>
            Poids cible (kg)
          </p>
          <img src={logo} alt="Logo" className="lggggll" />
          <input className="put" type="text" value={poidsCible} onChange={handleInputChange} />
          <button className="btn btn-success" type="button" style={{ position: "relative", top: "180px", left: "-165px", width: "390px" }} onClick={handleClick}>
            Valider
          </button>
          <div className="textbox-container">
            <div className="textbox-content">
              <h5>
                Mon poids idéal ? Celui où mes jeans me disent : "Bienvenue,
                ça faisait longtemps"
              </h5>
            </div>
          </div>
        </div>}
      {showRecette && recetteData && recetteData.length > 0 && <div className="recette-card">
          <h3>Une Recette pour votre Bonheur</h3>
          <div className="recette-details">
            <h3 className="nameR">
              {recetteData[0].name}
            </h3>
            <p className="etape1">
              {recetteData[0].etape1}
            </p>
            <p className="etape2">
              {recetteData[0].etape2}
            </p>
            <img src={recetteData[0].image} alt="Recette" className="img" />
          </div>
        </div>}
    </div>;
}
