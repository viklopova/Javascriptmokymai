
import {suma} from '../utils/calculator';

const Komp1 = () => {
    let skaicius = 5;
    let pirmas = 10;
    let antras = 4;

    const patikrintiSkaiciu = (skaiciukas) => {
        if (skaiciukas === 5) {
            return 'skaicius yra 5';
        } else {
            return 'skaicius nera 5';
        }
    }
    
    return (

        <div>
            <h1> Skaiciai ir skaiciavimai</h1>
            <p> {skaicius} </p>
            <p> {skaicius + 5} </p> 
            <p> {skaicius - 5} </p>
            <p> {skaicius * 5} </p>
            <p> {skaicius / 5} </p>
            <p> {patikrintiSkaiciu(skaicius) }</p>
            <p>{ suma(pirmas, antras)}</p>
        </div>

        
    )
};

export default Komp1;