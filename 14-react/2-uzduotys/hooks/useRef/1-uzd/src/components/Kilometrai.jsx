import {useState} from 'react';
import {useRef} from 'react';

const Kilometrai = () => {
    const [kilometrai, setKilometrai] = useState();
    const [sanaudos, setSanaudos] = useState();
    const [kaina, setKaina] = useState();
    
    const kmRef = useRef();
    const sanaudosRef = useRef();
    const kainaRef = useRef();

    const onIvedimasClick = () => {
        setKilometrai(kmRef.current.valueAsNumber);
        setSanaudos(sanaudosRef.current.valueAsNumber);
        setKaina(kainaRef.current.valueAsNumber);
        
        kmRef.current.valueAsNumber = '';
        sanaudosRef.current.valueAsNumber = '';
        kainaRef.current.valueAsNumber = '';
    };

    const kuroSanaudos = () => {
        return (kilometrai / 100) * sanaudos;
    };

    const kuroKaina = () => {
        return kuroSanaudos() * kaina;
    };

    return (
        <div>
            <h3>Kelionė į Madagarskarą</h3>
            <input type="number" ref={kmRef} placeholder='Kilometrai'/>
            <input type="number" ref={sanaudosRef} placeholder="Sąnaudos" />
            <input type="number" ref={kainaRef} placeholder="Kuro kaina" />
            <button onClick={onIvedimasClick}>Skaičiuoti</button>

            {kilometrai && sanaudos && kaina && (
            <>
                    <p>Kelionės atstumas: {kilometrai} km </p>
                    <p>Vidutinės kuro sąnaudos: {sanaudos} l/100 km </p>
                    <p>Kuro kaina: {kaina} EUR/l </p>
                    <p>Reikės kuro: <strong>{kuroSanaudos().toFixed(2)} litrų </strong> </p>
                    <p>Kelionės kuro kaina: <strong> {kuroKaina().toFixed(2)} EUR </strong> </p>
            </>
            )}
            
        </div>
    )
}

export default Kilometrai;
