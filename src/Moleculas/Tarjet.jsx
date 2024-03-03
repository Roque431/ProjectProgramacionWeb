import React from 'react';
import '../styles/Tarjet.css';

const Tarjeta = ({
  nombre,
  bio,
  seguidores,
  siguiendo,
  imagenPerfil,
  imagenFondo,
}) => (
  <div className="tarjeta">
    <div className="tarjeta__header">
      <div className="tarjeta__background" style={{backgroundImage: `url(${imagenFondo})`}} alt="imagenFondo"></div>
      <div className="tarjeta__perfil">
        <img
          className="tarjeta__perfil-img"
          src={imagenPerfil}
          alt="Perfil"
        />
      </div>
    </div>
    <div className="tarjeta__info">
      <h3 className="tarjeta__title">{nombre}</h3>
      <p className="tarjeta__bio">{bio}</p>
    </div>
    <div className="tarjeta__content">
      <div className="tarjeta__metrica">
        <span className="tarjeta__numero">{seguidores}</span> Seguidores
      </div>
      <div className="tarjeta__metrica">
        <span className="tarjeta__numero">{siguiendo}</span> Siguiendo
      </div>
    </div>
  </div>
);

export default Tarjeta;
