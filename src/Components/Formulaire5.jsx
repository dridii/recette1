import React from "react";
import { useNavigate } from "react-router-dom";
import "./Formulaire2.css";
import logo from "../images/logo.png"

export default function Formulaire5() {
  const navig = useNavigate();
  return <div>
      <br /> <br />
      <br /> <br /> <br />
      <img src={logo} className="logo" />
      <h3 style={{ position: "relative", left: "75px" }}>
        Comment passez-vous généralement votre journée ?
      </h3>
      <h5 style={{ position: "relative", left: "-70px" }}>
        Dites ce qui vous prend le plus de temps.
      </h5>
      <br />
      <div className="box-container">
        <div className="box" onClick={() => {
            navig("/formulaire6");
          }}>
          <p className="ppp">Assis toute la journée au travail</p>
        </div>
        <div className="box" onClick={() => {
            navig("/formulaire6");
          }}>
          <p className="ppp">Je suis toujours debout</p>
        </div>
        <div className="box" onClick={() => {
            navig("/formulaire6");
          }}>
          <p className="ppp">Je fais beaucoup d'activité physique</p>
        </div>
        <div className="box" onClick={() => {
            navig("/formulaire6");
          }}>
          <p className="ppp">Je reste à la maison</p>
        </div>
      </div>
    </div>;
}
