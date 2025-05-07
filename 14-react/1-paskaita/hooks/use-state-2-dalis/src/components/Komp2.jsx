import { useState } from "react";

const Komp2 = () => {

    const [pirmas, setPirmas] = useState('');
    const [antras, setAntras] = useState('');

    const pirmasHandler = (e) => {
        setPirmas(e.target.value);
    }
    const antrasHandler = (e) => {
        setAntras(e.target.value);
    }

    const ilgesnis = () => {
        let rezultatas = pirmas.length - antras.length;

        if (rezultatas > 0) {
            return `Pirmas zodis ${pirmas} ilgesnis`;
        } else if (rezultatas < 0) {
            return `Antras zodis ${antras} ilgesnis`;
        } else {
            return `Zodziai ${pirmas} ir ${antras} yra vienodo ilgio`;
    }
}

    return (
        <div>
            <h3>Komponentas numeris du</h3>

            <h4> ILGESNIS TEKSTAS</h4>
            <div>
                <label htmlFor="pirmasInput">Pirmas:</label>
                <input onChange={pirmasHandler} type="text" id="pirmasInput" />
            </div>
            <div>
                <label htmlFor="antrasInput">Antras:</label>
                <input onChange={antrasHandler} type="text" id="antrasInput" />
            </div>

            <p>
                <strong>Rezultatas:</strong>
                {pirmas} ir {antras}
            </p>
            <p> Ilgesnis zodis yra: {ilgesnis()}</p>
        </div>
    )
}

export default Komp2;