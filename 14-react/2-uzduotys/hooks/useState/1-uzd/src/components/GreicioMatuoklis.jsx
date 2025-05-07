import { useState } from "react";

const GreicioMatuoklis = () => {
    let [greitis, setGreitis] = useState(0);
    let [pranesimas, setPranesimas] = useState('Stovite vietoje');


    const onClickButtonAction = (value) => {
            setGreitis(value);
            setPranesimas (
                value <= 25 ? 'Važiuojate kaip klevas' : 
                value <= 50 ? 'Žinau, kad galite greičiau' :
                value <= 75 ? 'Ooo, neblogai' :
                value <= 100 ? 'Va čia jau greitis' : ' '
            )
    }

    return (
        <div>
            <p>Dabartinis greitis: {greitis} km/h <strong>{pranesimas}</strong></p>
            <h3>Pasirinkite greitį: </h3>
            <button onClick={() => onClickButtonAction(25)}>25 km/h</button>
            <button onClick={() => onClickButtonAction(50)}>50 km/h</button>
            <button onClick={() => onClickButtonAction(75)}>75 km/h</button>
            <button onClick={() => onClickButtonAction(100)}>100 km/h</button>
            
            
        </div>
    )
};

export default GreicioMatuoklis;