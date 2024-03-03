import React from 'react';
import '../styles/ArticulosR.css';

const ArticulosRecientes = () => {
  const articulos = [
    {
      id: 1,
      autor: 'Cary Johns',
      imagen: 'https://th.bing.com/th?q=Imagen+De+Perro&w=120&h=120&c=1&rs=1&qlt=90&cb=1&pid=InlineBlock&mkt=es-MX&cc=MX&setlang=es&adlt=moderate&t=1&mw=247',
      detalles: 'Figma ipsum component variant main layer Boolean team scale horizontal vertical',
    },
    // ...other articles
  ];

  return (
    <div className="articulos-recientes">
      {articulos.map((articulo) => (
        <div key={articulo.id} className="articulo">
            
          <div className="card"><span className="card-title">Artículos Recientes</span>
            <img src={articulo.imagen} alt={`Article by ${articulo.autor}`} className="card-image" />
            <div className="card-content">
              <p> {articulo.autor}</p>
              <p>{articulo.detalles}</p>
              <button className="btn">Saber Más</button>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default ArticulosRecientes;