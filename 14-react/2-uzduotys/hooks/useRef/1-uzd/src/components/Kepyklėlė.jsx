import React, { useState, useRef } from 'react';

const Kepyklele = () => {
  const [darbuotojai, setDarbuotojai] = useState('');
  const [kepiniaiPerVal, setKepiniaiPerVal] = useState('');
  const [valandosPerDiena, setValandosPerDiena] = useState('');
  const [uzsakymai, setUzsakymai] = useState([]);

  const uzsakymasRef = useRef('');


  const handleDarbuotojai = (e) => setDarbuotojai(e.target.value);
  const handleKepiniai = (e) => setKepiniaiPerVal(e.target.value);
  const handleValandos = (e) => setValandosPerDiena(e.target.value);

  
  const pridetiUzsakyma = () => {
    const naujas = parseInt(uzsakymasRef.current.value);
    if (naujas) {
      setUzsakymai((prev) => [...prev, naujas]);
      uzsakymasRef.current.value = '';
    }
  };


  const bendraUzsakymuSuma = () => {
    return uzsakymai.reduce((sum, val) => sum + val, 0);
  };

  
  const kepyklosPajegumas = () => {
    if (
      darbuotojai === '' ||
      kepiniaiPerVal === '' ||
      valandosPerDiena === ''
    ) return '';
  
    return darbuotojai * kepiniaiPerVal * valandosPerDiena;
  };

  const pajegumas = kepyklosPajegumas();
  const uzsakymuSuma = bendraUzsakymuSuma();

  return (
    <div>
      <h2>Kepyklėlės informacija</h2>

      
        <input type="number" value={darbuotojai} onChange={handleDarbuotojai} placeholder='Darbuotojų skaičius: '/>
        <input type="number" value={kepiniaiPerVal} onChange={handleKepiniai} placeholder='Vieno darbuotojo kepinių kiekis per valandą: '/>
        <input type="number" value={valandosPerDiena} onChange={handleValandos} placeholder='Darbo valandų per dieną:'/>

      <h3>Dienos užsakymai</h3>
      <div>
        <input type="number" ref={uzsakymasRef} />
        <button onClick={pridetiUzsakyma}>Pridėti užsakymą</button>
      </div>

      {uzsakymai.length > 0 && (
        <p>Bendra užsakymų suma: {uzsakymuSuma}</p>
      )}

      {pajegumas !== null && (
        <p>Bendras kepyklos pajėgumas: {pajegumas}</p>
      )}

      {pajegumas !== null && uzsakymai.length > 0 && (
        <p>
          {pajegumas >= uzsakymuSuma
            ? 'Kepyklėlė spės įgyvendinti visus dienos užsakymus.'
            : `Kepyklėlė nespės įgyvendinti visų užsakymų. Trūksta ${
                uzsakymuSuma - pajegumas
              } kepinių.`}
        </p>
      )}
    </div>
  );
};

export default Kepyklele;