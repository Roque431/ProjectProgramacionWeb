import React, { useState } from "react";
// import '../organismes/Form-in.css'
import '../Moleculas/Form-in.css';

const FormcrX = () => {
    const [correo_electronico, setEmail] = useState("");
    const [contraseña, setcontraseña] = useState("");
    const [nombre, setNombre] = useState("");
    const [apellido, setApellido] = useState("");
  
    const handleRegister = (e) => {
      e.preventDefault();
      // Handle registration logic here
      console.log("Name:", nombre);
      console.log("Last Name:", apellido);
      console.log("Email:", correo_electronico);
      console.log("Password:", contraseña);
    };
  
    return (
      <div className="login-wrapper">
        <div className="login-box">
          <h2>Registrarse</h2>
          <form onSubmit={handleRegister}>
            <div className="input-group">
              <label htmlFor="nombre">Nombre:</label>
              <input
                type="text"
                id="nombre"
                required
                value={nombre}
                onChange={(e) => setNombre(e.target.value)}
              />
            </div>
  
            <div className="input-group">
              <label htmlFor="apellido">Apellido:</label>
              <input
                type="text"
                id="apellido"
                required
                value={apellido}
                onChange={(e) => setApellido(e.target.value)}
              />
            </div>
  
            <div className="input-group">
              <label htmlFor="email">Email:</label>
              <input
                type="email"
                id="email"
                required
                value={correo_electronico}
                onChange={(e) => setEmail(e.target.value)}
              />
            </div>
  
            <div className="input-group">
              <label htmlFor="password">Contraseña:</label>
              <input
                type="password"
                id="password"
                required
                value={contraseña}
                onChange={(e) => setcontraseña(e.target.value)}
              />
            </div>
  
            <button type="submit" className="btn">
              Crear cuenta
            </button>
          </form>
        </div>
      </div>
    );
  };

  export default FormcrX;