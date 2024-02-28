import React from 'react'
import logo from "../images/logo.png";
import { useNavigate } from "react-router-dom";
import "./Formulaire2.css";
export default function Formulaire8() {
  const navig = useNavigate();
  return <div>
      <br />
      <br />
      <h2 style={{textAlign:'center'}}>
        À quel point vous sentez-vous <br />
        fatiguée pendant la journée ?
      </h2>
      <p>
        Nos programmes de perte de poids vous aident à maintenir votre<br />
        niveau d'énergie stable tout au long de la journée.
      </p>
      <img src={logo} className="lgg" />

      <div className="box-containerrr">
        <div className="box">
          <p style={{ textAlign: "left" }} className="bx" onClick={() => {
              navig("/formulaire9");
            }}>
            Je me sens fatiguée toute la journée
          </p>
        </div>
        <div className="box">
          <p style={{ textAlign: "left" }} className="bx" onClick={() => {
              navig("/formulaire9");
            }}>
            Je me sens fatiguée avant les repas
          </p>
        </div>
        <div className="box">
          <p style={{ textAlign: "left" }} className="bx" onClick={() => {
              navig("/formulaire9");
            }}>
            J'ai quelques coups de barre l'après-midi
          </p>
        </div>
        <div className="box">
          <p style={{ textAlign: "left" }} className="bx" onClick={() => {
              navig("/formulaire9");
            }}>
            Je suis une boule de feu toute la journée
          </p>
        </div>
      </div>
    </div>;
}

                
   