import {useState} from 'react';

const Komp3 = () => {

    const [masyvas, setMasyvas]=useState(null);

    const onShowButtonClickHandler = () => {
    }

    const onAddButtonClickHandler = () => {
       // masyvas.push(
        //    Math.round(Math.random()*10)
        //);

        setMasyvas ([
            ...masyvas,
            Math.round(Math.random())
        ]);
    }

    return (
        <div>
            <h3>Komponentas numeris trys</h3>
            <button onClick={onShowButtonClickHandler}>Rodyti masyva</button>
            <div>
                <button onClick={onShowButtonClickHandler}>Prideti i masyva</button>
            </div>
        </div>
    )
}

export default Komp3;