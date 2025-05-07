import React, { useRef } from 'react';

const KnyguIvedimas = (props) => {

const inputPavadinimasRef = useRef();
const inputKainaRef = useRef();
const inputMetaiRef = useRef();

const handleSubmit = (event) => {
    event.preventDefault();
    const naujaKnyga = {
        //id: Math.floor(Math.random())*1000,
        pavadinimas: inputPavadinimasRef.current.value || 'Nera pavadinimo',
        kaina: inputKainaRef.current.valueAsNumber || 0,
        metai: inputMetaiRef.current.valueAsNumber|| 0,
    }
    props.pridetiKnyga(naujaKnyga)

    inputPavadinimasRef.current.value = null;
    inputKainaRef.current.value = null;
    inputMetaiRef.current.value = null;
}


  return (
    <div>
      <h3>Prideti knyga:</h3>
      <form onSubmit={handleSubmit}>
        <div>
            <label htmlFor="pavadinimas">Pavadinimas</label>
            <input ref={inputPavadinimasRef} type="text" id="pavadinimas" placeholder="Knygos pavadinimas pavadinimas" />
        </div>
        <div>   
            <label htmlFor="kaina">Kaina</label>
            <input ref={inputKainaRef} type="number" id="kaina" placeholder="Knygos kaina"/>
        </div>
        <div>
            <label htmlFor="metai">Metai</label>
            <input ref={inputMetaiRef} type="number" id="metai" placeholder="Isleidimo metai" />
        </div>
        <div>
            <button type="submit">Pridėti</button>
        </div>
      </form>
    </div>
  );
}

export default KnyguIvedimas;