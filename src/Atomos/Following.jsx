import React from 'react';

function Following({ number }) {
  return (
    <div className="stat">
      <h3>Siguiendo</h3>
      <p>{number}</p>
    </div>
  );
}

export default Following;