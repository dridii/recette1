import React from "react";
import { useNavigate } from "react-router-dom";
import "./Landing.css";
import { useState } from "react";
import "bootstrap/dist/css/bootstrap.css";
import SideBar from "./SideBar";
import logo from "../images/logo.png";
import menu from "../images/menu.png";
import tofe7a from "../images/tofe7a.png";
import bordgena from "../images/bordgena.png";
import fejla from "../images/fejla.png";
import lefta from "../images/lefta.png";

export default function Landing() {
  const navig = useNavigate();
  const [isSidebarOpen, setSidebarOpen] = useState(false);

  const toggleSidebar = () => {
    setSidebarOpen(!isSidebarOpen);
  };
  return (
    <div>
      <img src={logo} alt="logo" className="logoo" />
      <img src={menu} alt="menu" className="menu" onClick={toggleSidebar} />
      <SideBar isOpen={isSidebarOpen} toggleSidebar={toggleSidebar} />
      <h1 className="onwen">PLAN DE PERTE DE POIDS</h1>
      <div className="boxx">
        <img src={bordgena} className="bord" />

        <button
          type="button"
          class="btn btn-secondary"
          style={{
            position: "relative",
            top: "290px",
           left: "-120px",
            width: "200px"
          }}
          onClick={() => {
            navig("/formulaire");
          }}
        >
          18-30
        </button>
        <img
          src={fejla}
          style={{ position: "absolute", left: "430px", top: "200px" }}
        />
        <button
          type="button"
          class="btn btn-secondary"
          style={{
            position: "relative",
            top: "290px",
            right: "70px",
            width: "200px"
          }}
          onClick={() => {
            navig("/formulaire");
          }}
        >
          30-40
        </button>
        <img
          src={tofe7a}
          style={{ position: "absolute", left: "665px", top: "200px" }}
        />
        <button
          type="button"
          class="btn btn-secondary"
          style={{
            position: "relative",
            top: "290px",
            left: "-30px",
            width: "200px"
          }}
          onClick={() => {
            navig("/formulaire");
          }}
        >
          40-50
        </button>
        <img
          src={lefta}
          style={{ position: "absolute", left: "910px", top: "200px" }}
        />

        <button
          type="button"
          class="btn btn-secondary"
          style={{
            position: "relative",
            top: "290px",
            left: "-5px",
            width: "200px"
          }}
          onClick={() => {
            navig("/formulaire");
          }}
        >
          50++
        </button>
      </div>

      <div class="form-check">
        <input
          class="form-check-input"
          type="checkbox"
          value=""
          id="flexCheckDefault"
          style={{ position: "relative", left: "185px", top: "-30px" }}
        />
        <label
          class="form-check-label"
          for="flexCheckDefault"
          style={{ position: "relative", left: "35px", top: "-30px" }}
        >
          <p style={{ fontSize: "15px" }}>
            En continuant, vous acceptez les Conditions d’utilisation, Politique
            de Confidentialité, Politique de Remboursement, Conditions
            d'abonnement, <br />Politique en matière de cookies
          </p>
        </label>
      </div>
      <div class="form-check">
        <input
          class="form-check-input"
          type="checkbox"
          value=""
          id="flexCheckChecked"
          checked
          style={{ position: "relative", left: "185px", top: "-30px" }}
        />
        <label
          class="form-check-label"
          for="flexCheckChecked"
          style={{ position: "relative", left: "-70px", top: "-30px" }}
        >
          <p style={{ fontSize: "15px" }}>
            J'aimerais recevoir des mises à jour sur les produits, les services
            et les offres spéciales de La Forchetta par mail.
          </p>
        </label>
      </div>
    </div>
  );
}
