import React, { useState } from "react";
import Card from "react-bootstrap/Card";
import ButtoninX from '../Atomos/Button.in.jsx'
import ButtoncrX from '../Atomos/Button.cr.jsx'
import logo from "../assets/logo.png";
import '../Moleculas/Form-in.css'

const ForminX = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleEmailChange = (e) => {
    setEmail(e.target.value);
  };

  const handlePasswordChange = (e) => {
    setPassword(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Email:", email);
    console.log("Password:", password);
  };

  return (
    <div>
      <Card className="container">
        <Card className="second">
          <Card className="cdf">
            <h1 className="tittle">Iniciar sesión</h1>
            <div className="box-img">
              <img src={logo} className="logo" />
            </div>

       
              <form onSubmit={handleSubmit}>
                <label className="email">Email:</label>
                <input
                  className="in-pass"
                  type="email"
                  id="email"
                  value={email}
                  onChange={handleEmailChange}
                />
                <br />
                <label className="password">Password:</label>
                <input
                  className="c-in"
                  type="password"
                  id="password"
                  value={password}
                  onChange={handlePasswordChange}
                />
                <br />
                <ButtoncrX />
              </form>
  

            <ButtoninX />
          </Card>
        </Card>
      </Card>
    </div>
  );
};

export default ForminX;
