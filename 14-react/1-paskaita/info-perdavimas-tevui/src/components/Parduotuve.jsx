import React, { useState } from "react";
import Pridejimas from "./Pridejimas";
import VisosPrekes from "./VisosPrekes";

const Parduotuve = () => {

    //const TEST_PREKES = [
    //    {id: 12, pavadinimas: 'Knyga', kiekis: 5, kaina: 10},
    //    {id: 22, pavadinimas: 'Televizorius', kiekis: 2, kaina: 500},
    //     {id: 32, pavadinimas: 'Kompiuteris', kiekis: 1, kaina: 1000},
    //    {id: 42, pavadinimas: 'Telefonas', kiekis: 3, kaina: 300},
    //    {id:52, pavadinimas: 'Stalas', kiekis: 4, kaina: 150},
    //];

    const [prekes, setPrekes] = useState([]);

    const handlePrekesPridejimas = (preke) => {
        console.log('PARUOTUVE GAVO:')
        console.log(preke);
        setPrekes(prevState => [...prevState, preke]);
        //setPrekes([...prekes, preke]);
    }

    
    return (
        <div>
            <h1>Parduotuvė</h1>
            <Pridejimas 
            pridetiPreke={handlePrekesPridejimas}/>
            <VisosPrekes data={prekes}/>
        </div>
    );
}

export default Parduotuve;