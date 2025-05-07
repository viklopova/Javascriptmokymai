const GeriausiasMedis = () => {

    const tikrinti = (medis) => {
        if (medis === "uosis") {
            alert("Oho koks rimtas!");
        } else if (medis === "azuolas") {
            alert("Labai mielas rastas!");
        } else if (medis === "klevas") {
            alert("Nu mes ne Kanadoje!");
        } else {
            alert("Povilai, tu ne medis!");
        }
    };

    return (
        <div>
            <h2>Patikrink medi</h2>
            <button onClick={() => tikrinti("uosis")}>Uosis</button>
            <button onClick={() => tikrinti("azuolas")} >Azuolas</button>
            <button onClick={() => tikrinti("klevas")}>Berzas</button>
            <button onClick={() => tikrinti("")}>Spek</button>

        </div>
    );
};

export default GeriausiasMedis;