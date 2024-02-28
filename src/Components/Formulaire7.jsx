import React from 'react'
import logo from '../images/logo.png'
import { useNavigate } from "react-router-dom";
import "./Formulaire2.css";

export default function Formulaire7() {
      const navig = useNavigate();
      return <div>
          <br /> <br />
          <h1> Pratiquez-vous une activité physique ?</h1>
          <p>
            Les entraînements améliorent vos résultats de perte de poids. <br />Nous pouvons vous aider à faire du sport une habitude quotidienne.
          </p>
          <img src={logo} className="lgg" />
          <div className="box-containerrr">
            <div className="box">
              <p className="bx" onClick={() => {
                  navig("/formulaire8");
                }}>
                Non
              </p>
            </div>
            <div className="box">
              <p className="bx" onClick={() => {
                  navig("/formulaire8");
                }}>
                Seulement des promenades
              </p>
            </div>
            <div className="box">
              <p className="bx" onClick={() => {
                  navig("/formulaire8");
                }}>
                1 à 2 fois par semaine
              </p>
            </div>
            <div className="box">
              <p className="bx" onClick={() => {
                  navig("/formulaire8");
                }}>
                3 à 5 fois par semaine
              </p>
            </div>
          </div>
        </div>;
}
