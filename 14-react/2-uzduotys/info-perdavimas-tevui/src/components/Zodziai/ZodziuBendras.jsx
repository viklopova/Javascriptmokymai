import React, { useState } from 'react';
import ZodziuIvedimas from './ZodziuIvedimas';

const ZodziuBendras = () => {
  const [zodziai, setZodziai] = useState([]);

  const pridetiZodi = (naujasZodis) => {
    setZodziai((ankstesni) => [...ankstesni, naujasZodis]);
  };

  const rastiIlgiausiaZodi = () => {
    if (zodziai.length === 0) return null ;
    return zodziai.reduce((ilgiausias, dabartinis) =>
      dabartinis.length > ilgiausias.length ? dabartinis : ilgiausias
    );
  };

  return (
    <div>
      <h2>Žodžių sąrašas</h2>
      {zodziai.length > 0 ? (
        <ul>
          {zodziai.map((zodis, i) => (
            <li key={i}>{zodis}</li>
          ))}
        </ul>
      ) : (
        <p>Deja, nėra įvestos informacijos</p>
      )}

      <ZodziuIvedimas onZodisPridetas={pridetiZodi} />

      {zodziai.length > 0 && (
        <p>Ilgiausias žodis: <strong>{rastiIlgiausiaZodi()}</strong></p>
      )}
    </div>
  );
};

export default ZodziuBendras;