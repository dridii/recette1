import React, { useState } from "react";

import "./Login.css";
import Logo from "../images/logo.png";
import add from "../images/add.png";
import axios from "axios";
import Swal from "sweetalert2";
import pass from "../images/pass.png";
import { useNavigate } from "react-router-dom";

export default function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const navig = useNavigate();

  const [isHovered, setIsHovered] = useState(true);

  const validateEmail = () => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return email.match(emailRegex);
  };

  const loginFun = () => {
    console.log("loginFun called");
    if (!email || !password) {
      console.log("Missing fields");
      Swal.fire({
        icon: "error",
        title: "Empty Fields",
        text: "Please fill in all fields"
      });
      return;
    }

    if (!validateEmail()) {
      Swal.fire({
        icon: "error",
        title: "Invalid Email",
        text: "Please enter a valid email address"
      });
      return;
    }

    const data = { email: email, password: password };
    console.log(data);

    axios
      .post("http://localhost:4000/authentication/login", data)
      .then(response => {
        console.log(response.data);
        if (response.data.password === "false") {
          Swal.fire({
            icon: "error",
            title: "Invalid Password",
            text: "Please enter a valid password"
          });
        } else {
          navig("/Landing");
        }
      })
      .catch(error => {
        console.error(error);
      });
  };

  const toggleHover = () => {
    setIsHovered(!isHovered);
  };

  const inputContainer1 = {
    flexDirection: "row",
    alignItems: "center",
    marginTop: 30,
    height: 40,
    borderColor: "#2980B9",
    borderBottomWidth: 1,
    outline: "none"
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

  const textStyle = {
    fontSize: 30,
    fontWeight: "bold",
    textAlign: "center",
    marginTop: 10,
    marginLeft: -20,
    top: 0
  };

  const input = {
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
    marginBottom: 50
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
          <h2 style={{ left: "130px", top: "25px" }}>
            LOG<span style={{ color: "green" }}>IN</span>
          </h2>
          <img
            src={add}
            style={{ left: "70px", top: "165px" }}
            className="dheb"
          />
          <img src={pass} style={{ left: "70px", top: "250px" }} id="gigi" />

          <input
            style={input}
            placeholder="Email ID"
            id="emailInput"
            type="email"
            value={email}
            onChange={e => setEmail(e.target.value)}
          />
          <div>
            <input
              style={input}
              placeholder="Password"
              id="passwordInput"
              type="password"
              value={password}
              onChange={e => setPassword(e.target.value)}
            />
          </div>
          <br />

          <button className="bata" onClick={() => loginFun()}>
            Log <span>In</span>
          </button>

          <p
            style={{ cursor: "pointer", top: "415px" }}
            onClick={() => {
              navig("/bara");
            }}
          >
            New to the App? <span style={{ color: "green" }}>Register</span>
          </p>
        </div>
      </div>
    </div>
  );
}
