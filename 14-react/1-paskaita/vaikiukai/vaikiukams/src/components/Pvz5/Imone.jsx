import Darbuotojas from "./Darbuotojas";

const Imone = () => {  

    let darbuotojas = {
        vardas: 'Jonas',
        pavarde: 'Jonaitis',
        amzius: 30,
        pareigos: 'direktorius',
        atlyginimas: 3000
    };

    let darbuotojas2 = {
        vardas: 'Petras',
        pavarde: 'Petraitis',
        amzius: 25,
        pareigos: 'vadybininkas',
        atlyginimas: 2000
    };

    return (
        <div>
            Imone:
            <Darbuotojas darbuotojas={darbuotojas}/>
            <Darbuotojas darbuotojas={darbuotojas2}/>
        </div>
    );
    }

    export default Imone;