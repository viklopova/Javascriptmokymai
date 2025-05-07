import React, { useState } from "react";

const Temperaturos = () => {
    const [input, setInput] = useState("");
    const [temperaturos, setTemperaturos] = useState([]);

    const handleSubmit = (e) => {
        e.preventDefault();
        const skaicius = parseFloat(input);
        if (!isNaN(skaicius)) {
            setTemperaturos([...temperaturos, skaicius]);
            setInput("");
        }
    };

    const vidurkis = () => {
        const suma = temperaturos.reduce((a, b) => a + b, 0);
        return (suma / temperaturos.length).toFixed(2);
    };

    const minTemp = () => Math.min(...temperaturos);
    const maxTemp = () => Math.max(...temperaturos);
    const skirtumas = () => (maxTemp() - minTemp()).toFixed(2);

    const isvalyti = () => {
        setTemperaturos([]);
    };

    return (
        <div>
            <h2>Dienos temperatūrų registracija</h2>
            <form onSubmit={handleSubmit}>
                <input
                    type="number"
                    value={input}
                    onChange={(e) => setInput(e.target.value)}
                    placeholder="Įveskite temperatūrą"
                />
                <button type="submit">Pridėti</button>
            </form>

            <p>Įvestų temperatūrų skaičius: {temperaturos.length || "0"}</p>

            {temperaturos.length > 0 && (
                <div>
                    <p>Temperatūrų sąrašas: {temperaturos.join(", ")}</p>
                    <p>Vidutinė temperatūra: {vidurkis()}°C</p>
                    <p>Žemiausia temperatūra: {minTemp()}°C</p>
                    <p>Aukščiausia temperatūra: {maxTemp()}°C</p>
                    <p>Temperatūrų skirtumas: {skirtumas()}°C</p>
                    <button onClick={isvalyti}>Išvalyti viską</button>
                </div>
            )}
        </div>
    );
};

export default Temperaturos;