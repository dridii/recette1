import React from "react";
import capture from "../images/capture.png";
import { useNavigate } from "react-router-dom";
import "./Formulaire2.css";
import logo from "../images/logo.png";

export default function Formulaire6() {
  const navig = useNavigate();
  return <div>
      <br /> <br />
      <h3>
        Quand avez-vous été satisfaite de <br />votre poids pour la dernière fois ?
      </h3>
      <img src={logo} className="lg" />
      <img src={capture} className="cp" />
      <div className="box-containerr">
        <div className="box" style={{ position: "relative", width: "320px" }}>
          <p className="bx" onClick={() => {
              navig("/formulaire7");
            }}>
            Il y a moins d'un an
          </p>
        </div>
        <div className="box" style={{ position: "relative", width: "320px" }}>
          <p className="bx" onClick={() => {
              navig("/formulaire7");
            }}>
            Il y a 1 - 3 ans
          </p>
        </div>
        <div className="box" style={{ position: "relative", width: "320px" }}>
          <p className="bx" onClick={() => {
              navig("/formulaire7");
            }}>
            Il y a plus de 3 ans
          </p>
        </div>
        <div className="box" style={{ position: "relative", width: "320px" }}>
          <p className="bx" onClick={() => {
              navig("/formulaire7");
            }}>
            Jamais
          </p>
        </div>
      </div>
    </div>;
}
