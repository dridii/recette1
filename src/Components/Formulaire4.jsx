import React from "react";
import logo from "../images/logo.png";
import phoro from "../images/phoro.png";
import "./Formulaire2.css";
import { useNavigate } from "react-router-dom";

export default function Formulaire4() {
      const navig = useNavigate();
  return <div>
      <img src={logo} alt="logo" style={{ height: "200px", position: "relative", top: "-40px" }} />
      <p style={{ position: "relative", top: "-70px" }}>
        {" "}Devenez l'un des plus de
      </p>
      <h3 style={{ position: "relative", top: "-80px" }}>
        40 millions <br />d'utilisateurs de la Forchetta
      </h3>
      <img src={phoro} className="ph" />
      <div class="d-grid gap-2 col-6 mx-auto">
        <button class="btn btn-success" type="button" style={{ position: "relative", top: "-70px" }} onClick={() => {
            navig("/formulaire5");
          }}>
          Continuer
        </button>
      </div>
    </div>;
}
