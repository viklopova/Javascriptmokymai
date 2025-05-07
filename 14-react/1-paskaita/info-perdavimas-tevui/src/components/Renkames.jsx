import React, { useState } from 'react';
import ProgramavimoKalba from './ProgramavimoKalba';

const Renkames = () => {
   
    const [kalba, setKalba] = useState('Nera pasirinkta');
    const gautaKalba = (kalba) => {
        console.log('tevas: '+ kalba);
        setKalba(kalba);
    }

    const kalbosIvertinimas = ()  => {
        switch (kalba) {
            case 'Javascript':
                return "Tikėtina moki React.js";
            case 'PHP':
                return "Turbūt moki Laravel";
            case 'C++':
                return "Manau mėgsti žaidimus";
            default:
                return "Nieko nepasirinkai, negaliu įvertinti";
        }
    }

    return (
        <div>
        <h2>Pasirinkite kalba:</h2>
        <p>Jus pasirinkote kalbą: <strong>{kalba}</strong></p>
        <ProgramavimoKalba
        kalbosPasirinkimas={gautaKalba}/>
        <p>{kalbosIvertinimas()}</p>
        </div>
        
    );
    }

    export default Renkames;