import React, { useState, useRef } from 'react';

const Skaicius = () => {
    const [skaicius, setSkaicius] = useState(null);
    const inputRef = useRef(null);

    const antIvedimo = () => {
        setSkaicius(inputRef.current.valueAsNumber);
        inputRef.current.value = ''; 
    };

    const arLyginis = () => {
        return skaicius % 2 === 0 ? 'Lyginis' : 'Nelyginis';
    };

    return (
        <div>
            <h2>Skaicius</h2>
            <input type="number" ref={inputRef} />
            <button onClick={antIvedimo}>Prideti</button>
            
            {skaicius !== null && (
                <>
                    <p>Įvestas skaičius: {skaicius}</p>
                    <p>{skaicius} yra {arLyginis()}</p>
                </>
            )}
        </div>
    );
};

export default Skaicius;