import React, { useState } from "react";
import logo from "../images/logo.png";
import { useNavigate } from "react-router-dom";
import "./Formulaire2.css";

export default function Formulaire9() {
  const [isChecked, setIsChecked] = useState(false);
  const navig = useNavigate();

  const handleCheckboxChange = () => {
    const checkboxes = document.querySelectorAll('input[type="checkbox"]');
    const checkedBoxes = Array.from(checkboxes).filter(
      checkbox => checkbox.checked
    );
    setIsChecked(checkedBoxes.length > 0);
  };

  const handleClick = () => {
    if (isChecked) {
      navig("/formulaire10");
    }
  };

  return (
    <div>
      <br />
      <br />
      <img src={logo} className="lggg" />
      <h2 style={{ position: "relative", top: "-100px", textAlign: "center" }}>
        Vous avez tendance à :
      </h2>
      <div className="box-containeerrr">
        <div className="box">
          <p style={{ textAlign: "left" }}>
            <input
              type="checkbox"
              id="mangerTard"
              name="mangerTard"
              onChange={handleCheckboxChange}
            />{" "}
            Manger tard le soir
          </p>
        </div>
        <div className="box">
          <p style={{ textAlign: "left" }}>
            <input
              type="checkbox"
              id="alcool"
              name="alcool"
              onChange={handleCheckboxChange}
            />{" "}
            Je bois parfois des alcools forts
          </p>
        </div>
        <div className="box">
          <p style={{ textAlign: "left" }}>
            <input
              type="checkbox"
              id="bonbon"
              name="bonbon"
              onChange={handleCheckboxChange}
            />{" "}
            Je ne peux pas m’empêcher de manger des bonbons
          </p>
        </div>
        <div className="box">
          <p style={{ textAlign: "left" }}>
            <input
              type="checkbox"
              id="boissons"
              name="boissons"
              onChange={handleCheckboxChange}
            />{" "}
            J’adore les boissons gazeuses
          </p>
        </div>
        <div className="box">
          <p style={{ textAlign: "left" }}>
            <input
              type="checkbox"
              id="salé"
              name="salé"
              onChange={handleCheckboxChange}
            />{" "}
            J'aime les aliments gras ou salés
          </p>
        </div>
        <div className="box">
          <p style={{ textAlign: "left" }}>
            <input
              type="checkbox"
              id="rien"
              name="rien"
              onChange={handleCheckboxChange}
            />{" "}
            Rien de tout cela
          </p>
        </div>
        <button
          className="btn btn-success"
          type="button"
          style={{
            position: "relative",
            top: "0px",
            left: "-450px",
            width: "510px"
          }}
          onClick={handleClick}
        >
          Continuer
        </button>
      </div>
    </div>
  );
}
