import React, { useState, useRef } from 'react';

const Prekes = () => {
  const [prekes, setPrekes] = useState([]);

  const pavadinimasRef = useRef();
  const kainaRef = useRef();
  const kiekisRef = useRef();

  const pridetiPreke = (e) => {
    e.preventDefault();

    const naujaPreke = {
      pavadinimas: pavadinimasRef.current.value,
      kaina: kainaRef.current.value,
      kiekis: kiekisRef.current.value,
    };

    if (
      naujaPreke.pavadinimas &&
      !naujaPreke.kaina &&
      !naujaPreke.kiekis
    ) {
      setPrekes([naujaPreke, ...prekes]);

      
      pavadinimasRef.current.value = '';
      kainaRef.current.value = '';
      kiekisRef.current.value = '';
    }
  };

  const isvalytiPrekes = () => {
    setPrekes([]);
  };

  const mazasLikutis = prekes.filter((preke) => preke.kiekis < 5);

  return (
    <div>
      <h3>Prekės</h3>
      <p onSubmit={pridetiPreke}>
        <input type="text" placeholder="Pavadinimas" ref={pavadinimasRef} />
        <input type="number" placeholder="Kaina" ref={kainaRef} />
        <input type="number" placeholder="Kiekis" ref={kiekisRef} />
        <button type="submit">Pridėti prekę</button>
      </p>

      {prekes.length === 0 ? (
        <p>Kol kas nėra įvestų prekių.</p>
      ) : (
        <div>
          <h3>Visos prekės</h3>
          <div>
            {prekes.map((preke, i) => (
              <div key={i} >
                <p>Pavadinimas: {preke.pavadinimas}</p>
                <p>Kaina: {preke.kaina} €</p>
                <p>Kiekis: {preke.kiekis} vnt.</p>
              </div>
            ))}
          </div>
        </div>
      )}

      {prekes.length > 0 && (
        <button onClick={isvalytiPrekes}>Išvalyti</button>
      )}

      {prekes.length > 0 && mazasLikutis.length > 0 && (
        <div>
          <h3>Prekės su mažu likučiu (mažiau nei 5 vnt)</h3>
          {mazasLikutis.map((preke, index) => (
            <div key={index} style={{ border: '1px dashed red', margin: '5px', padding: '5px' }}>
              <p><strong>{preke.pavadinimas}</strong> - {preke.kiekis} vnt.</p>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default Prekes;