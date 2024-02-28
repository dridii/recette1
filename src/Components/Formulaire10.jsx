import React from 'react'
import logo from "../images/logo.png";
import { useNavigate } from "react-router-dom";
import "./Formulaire2.css";
export default function Formulaire10() {
      const navig = useNavigate();
  return <div>
      <br /> <br /> <br/> <br/>
      <h2>
        Combien de temps dormez-vous <br />
        habituellement ?
      </h2>
    <img src={logo} className="lgggg" />
  
      <div className="box-containerrr">
        <div className="box">
          <p className="bx" onClick={() => {
              navig("/formulaire11");
            }}>
            Moins de 5 heures
          </p>
        </div>
        <div className="box">
          <p className="bx" onClick={() => {
              navig("/formulaire11");
            }}>
            5-6 heures
          </p>
        </div>
        <div className="box">
          <p className="bx" onClick={() => {
              navig("/formulaire11");
            }}>
            7-8 heures
          </p>
        </div>
        <div className="box">
          <p className="bx" onClick={() => {
              navig("/formulaire11");
            }}>
            Plus de 8 heures
          </p>
        </div>
      </div>
    </div>;
}
