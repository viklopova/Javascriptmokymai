import React, { useState } from "react";
import KnyguIvedimas from "./KnyguIvedimas";
import KnyguSpausdinimas from "./KnyguSpausdinimas";

const KnyguBendras = () => {

  const [knygos, setKnygos] = useState([]);

  const handleKnygosPridejimas = (knyga) => {
    setKnygos(prevState => [...prevState, knyga]); 
  }

  return (
    <div>
      <h1>Knygynas</h1>
      <KnyguIvedimas pridetiKnyga={handleKnygosPridejimas} /> 
      <KnyguSpausdinimas knygos={knygos} />
      {knygos.length > 0 && (
        <button onClick={() => setKnygos([])}>Išvalyti</button>
      )}
    </div>
  );
}

export default KnyguBendras;