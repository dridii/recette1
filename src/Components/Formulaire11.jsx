import React from 'react'
import logo from "../images/logo.png";
import { useNavigate } from "react-router-dom";
import "./Formulaire2.css";
export default function Formulaire11() {
      const navig = useNavigate();
  return <div>
      <br /> <br />
      <h2 style={{ textAlign: "center" }}>
        Quelle quantité d'eau buvez-vous par <br />
        jour ?
      </h2>
      <p>
        Nous entendons par là de l'eau propre, à l'exclusion du café, du thé et<br /> d'autres boissons
      </p>
      <img src={logo} className="lggggl" />
      <div className="box-containerrr">
        <div className="box">
          <p className="bx" onClick={() => {
              navig("/formulaire12");
            }}>
            Uniquement café ou thé
          </p>
        </div>
        <div className="box">
          <p className="bx" onClick={() => {
              navig("/formulaire12");
            }}>
            Moins de 0,5L
          </p>
        </div>
        <div className="box">
          <p className="bx" onClick={() => {
              navig("/formulaire12");
            }}>
            0,5 - 1,5L
          </p>
        </div>
        <div className="box">
          <p className="bx" onClick={() => {
              navig("/formulaire12");
            }}>
            1,5 - 2,5L
          </p>
        </div>
        <div className="box">
          <p className="bx" onClick={() => {
              navig("/formulaire12");
            }}>
            Je ne compte pas, ça dépend
          </p>
        </div>
      </div>
    </div>;
}
