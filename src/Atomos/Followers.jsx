import React from 'react';

function Followers({ number }) {
  return (
    <div className="stat">
      <h3>Seguidores</h3>
      <p>{number}</p>
    </div>
  );
}

export default Followers;