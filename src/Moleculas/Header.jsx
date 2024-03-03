import React from "react";
import "../styles/Header.css"; 

const Header = () => {
  return (
    <header className="header">
      <div className="right-content">
        <div className="left-content">
          <h1 className="logo">CampusLink &#10147;</h1>
          <input type="text" placeholder="Buscar" className="search-bar" />
          <button className="button-home">Inicio</button>
          <button className="button-group">Grupos</button>
          <button className="button-article">Artículos</button>
          <button className="button-comunit">Comunicados</button>
        </div>
        <div className="right-buttons">
          <button className="button-perfile">Mi perfil</button>
          <button className="button-confi">⚙️</button>
        </div>
      </div>
    </header> 
  );
};

export default Header;
