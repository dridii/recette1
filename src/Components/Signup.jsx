import React, { useState } from "react";
import axios from "axios";
import Swal from "sweetalert2";
import Logo from "../images/logo.png";
import add from "../images/add.png";
import pass from "../images/pass.png";
import last from "../images/last.png";
import first from "../images/first.png";
import { useNavigate } from "react-router-dom";
import "./Signup.css";

export default function Signup() {
  const navige = useNavigate();
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");

  const [validationError, setValidationError] = useState("");
  const [isHovered, setIsHovered] = useState(true);
  const validateInputs = () => {
    if (!firstName || !lastName || !email || !password || !confirmPassword) {
      setValidationError("All fields are required.");
      return false;
    }
    setValidationError("");
    return true;
  };

  
  const register = () => {
    if (!validateInputs() ) {
      return;
    }

    const data = {
      firstName: firstName,
      lastName: lastName,
      email: email,
      password: password
    };

    axios
      .post("http://localhost:4000/authentication/signup", data)
      .then(response => {
        console.log(response.data);
        Swal.fire({
          icon: "success",
          title: "User Registered",
          text: "Congratulations! You have successfully registered."
        });
        navige("/");
      })
      .catch(error => {
        console.error(error);
      });
  };
  const cardStyles = {
    border: "2px solid green",
    borderRadius: "10px",
    boxShadow: "0px 8px 16px rgba(0, 0, 0, 0.4)",
    padding: "20px",
    backgroundColor: "#ffffff",
    maxWidth: "350px",
    height: "500px",
    position: "absolute",
    width: "350px",
    left: "550px",
    top: "100px",
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "center",
    textAlign: "center",
    color: "#000000",
    transition: "box-shadow 0.3s ease, transform 0.3s ease"
  };
  const input1 = {
    width: "75%",
    borderWidth: 0,
    color: "black",
    paddingLeft: 10,
    borderBottomWidth: 1.5,
    borderBottomColor: "green",
    fontSize: 16,
    paddingBottom: 10,
    outline: "none",
    position: "relative",
    marginBottom: 30
  };
  const toggleHover = () => {
    setIsHovered(!isHovered);
  };

  return (
    <div>
      <img src={Logo} alt="logo" className="animat-log" />
      <div
        className="card4"
        style={cardStyles}
        onMouseEnter={toggleHover}
        onMouseLeave={toggleHover}
      >
        <div className="card4-content">
          <h2 style={{ left: "120px", top: "10px" }}>
            Sign<span style={{ color: "green" }}>UP</span>
          </h2>
          <img
            alt=".."
            src={add}
            style={{ left: "30px", top: "220px" }}
            className="dheb"
          />
          <img alt=".." src={pass} style={{ left: "30px", top: "350px" }} id="gigi" />
          <img alt=".." src={pass} style={{ left: "30px", top: "285px" }} id="gigi" />
          <img
            alt=".."
            src={first}
            style={{ left: "30px", top: "87px", height: "25px", width: "25px" }}
            id="gigi"
          />
          <img src={last} alt=".." style={{ left: "25px", top: "150px" }} id="gigi" />
          <input
            style={input1}
            placeholder="firstName"
            id="firstNameId"
            type="text"
            value={firstName}
            onChange={e => setFirstName(e.target.value)}
          />
          <input
            style={input1}
            placeholder="lastName"
            id="lastNameInput"
            type="text"
            value={lastName}
            onChange={e => setLastName(e.target.value)}
          />
          <input
            style={input1}
            placeholder="Email ID"
            id="emailInput"
            type="email"
            value={email}
            onChange={e => setEmail(e.target.value)}
          />
          <div>
            <input
              style={input1}
              placeholder="Password"
              id="passwordInput"
              type="password"
              value={password}
              onChange={e => setPassword(e.target.value)}
            />
          </div>
          <input
            style={input1}
            placeholder="confirmPassword"
            id="confirmPasswordInput"
            type="password"
            value={confirmPassword}
            onChange={e => setConfirmPassword(e.target.value)}
          />
          <br />
          {validationError &&
            <div style={{ color: "red", marginLeft: 40 }}>
              {validationError}
            </div>}
          
          <button className="bata1" onClick={() => register()}>
            Sign <span>UP</span>
          </button>
        </div>
      </div>
    </div>
  );
}
