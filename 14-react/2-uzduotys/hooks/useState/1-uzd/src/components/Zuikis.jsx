import { useState } from "react";

const Zuikis = () => {
    const [arPersoko, setArPersoko] = useState(false);

    const atsitiktinis = () => {
        const atsitiktinisSkaicius = Math.round(Math.random());
        setArPersoko(atsitiktinisSkaicius === 0); 
    };

    const garantuotas = () => {
        setArPersoko(true);
    };

    return (
        <div>
            <h3>Ar peršoks tas nenaudėlis?</h3>
            <p>Irrrr?? - {arPersoko ? "taip" : "ne"}</p>
            <button onClick={atsitiktinis}>Kas nebandys, tas...</button>
            <button onClick={garantuotas}>Tu gali, tikrai žinau</button>
        </div>
    );
};

export default Zuikis;