import React, { useState } from 'react';
import CounterMygtukai from './CounterMygtukas';

const CounterTev = () => {
  const [skaicius, setSkaicius] = useState(0);

  const counterButtons = [
    { id: 1, label: 'Prideti 1', value: 1 },
    { id: 2, label: 'Prideti 2', value: 2 },
    { id: 3, label: 'Prideti 3', value: 3 },
  ];

  const padidintiSkaiciu = (pridejimas) => {
    setSkaicius(pirminisSkaicius => pirminisSkaicius + pridejimas);
  };

  return (
    <div>
      <h3>Paspausta tiek kartu: {skaicius}</h3>
      <CounterMygtukai buttons={counterButtons} onChange={padidintiSkaiciu} />
    </div>
  );
};

export default CounterTev;