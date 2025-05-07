import React, { useRef } from 'react';

const Pridejimas = (props) => {

const inputPavadinimasRef = useRef();
const inputKainaRef = useRef();
const inputKiekisRef = useRef();

const handleSubmit = (event) => {
    event.preventDefault();
    const naujaPreke = {
        id: Math.floor(Math.random())*1000,
        pavadinimas: inputPavadinimasRef.current.value || 'Nera pavadinimo',
        kaina: inputKainaRef.current.valueAsNumber || 0,
        kiekis: inputKiekisRef.current.valueAsNumber|| 0,
    }
    props.pridetiPreke(naujaPreke)

    inputPavadinimasRef.current.value = null;
    inputKainaRef.current.value = null;
    inputKiekisRef.current.value = null;
}


  return (
    <div>
      <h3>Prideti preke:</h3>
      <form onSubmit={handleSubmit}>
        <div>
            <label htmlFor="pavadinimas">Pavadinimas</label>
            <input ref={inputPavadinimasRef} type="text" id="pavadinimas" placeholder="Prekės pavadinimas" />
        </div>
        <div>   
            <label htmlFor="kaina">Kaina</label>
            <input ref={inputKainaRef} type="number" id="kaina" placeholder="Prekės kaina" step={2}/>
        </div>
        <div>
            <label htmlFor="kiekis">Kiekis</label>
            <input ref={inputKiekisRef} type="number" id="kiekis" placeholder="Prekės kiekis" />
        </div>
        <div>
            <button type="submit">Pridėti</button>
        </div>
      </form>
    </div>
  );
}

export default Pridejimas;