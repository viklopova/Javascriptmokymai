import React, { useRef } from 'react';

const ZodziuIvedimas = ({ onZodisPridetas }) => {
  const inputoRef = useRef();

  const handleSubmit = (e) => {
    e.preventDefault();
    const ivestasZodis = inputoRef.current.value;

    if (ivestasZodis === '') return;

    onZodisPridetas(ivestasZodis);
    inputoRef.current.value = '';
  };

  return (
    <form onSubmit={handleSubmit}>
      <input type="text" ref={inputoRef} placeholder="Įveskite žodį" />
      <button type="submit">Pridėti</button>
    </form>
  );
};

export default ZodziuIvedimas;