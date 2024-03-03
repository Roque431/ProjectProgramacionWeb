// Comentarios.js
import React from 'react';
import '../styles/Coment.css'
const Comentarios = () => {
  // Datos de ejemplo (puedes reemplazarlos con datos reales)
  const comentarios = [
    {
      id: 1,
      autor: 'Usuario123',
      contenido: '¡Gran artículo!',
    },
    // ...otros comentarios
  ];

  return (
    <div className="comentarios">
      <h2>Comentarios</h2>
      {comentarios.map((comentario) => (
        <div key={comentario.id} className="comentario">
          <p>{comentario.autor} dijo:</p>
          <p>{comentario.contenido}</p>
        </div>
      ))}
    </div>
  );
};

export default Comentarios;
