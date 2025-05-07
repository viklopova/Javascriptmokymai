import { useState } from "react";

const Zodis = () => {
    const [zodis, setZodis] = useState(' ');

    return (
        <div>
            <h3>Zodis, kuri pasirinkote:</h3>
            <p>{zodis}</p>
            <button onClick={() => setZodis(() => "pomidoras")}>POMIDORAS</button>
            <button onClick={() => setZodis(() => "agurkas")}>AGURKAS</button>
        </div>
    );
};

export default Zodis;