import { useState } from "react";

const Vistos = () => {
    const uzsakymai = 100;
    const [kiausiniai, setKiausiniai] = useState(0);

    const kiausiniuHandler = (e) => {
        setKiausiniai(e.target.value);
    }

    const arUzteksKiausiniu = () => {
        const skirtumas = kiausiniai - uzsakymai;
        if (skirtumas >= 0) {
            return `Kiaušinių per akis. Liks dar ${skirtumas} kiaušiniai.`;
        } else {
            return `Trūksta kiaušinių. Vištoms reikia išperėti dar: ${Math.abs(skirtumas)} kiaušinius.`;
        }
    };

    return (
        <div>
            <h2>Vyriškas ūkis</h2>
            <div>
                <label htmlFor="kiausiniaiInput">Šiandien vištos išperėjo</label>
                <input onChange={kiausiniuHandler} type="number" id="pirmasInput" />
            </div>

            <p>{arUzteksKiausiniu()}</p>
        </div>
    );
};

export default Vistos;
