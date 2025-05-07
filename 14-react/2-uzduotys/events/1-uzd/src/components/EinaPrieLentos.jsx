const EinaPrieLentos = () => {
    // Studentų vardų masyvas
    const studentai = ["Jonas", "Aistė", "Marius", "Lina", "Tadas", "Eglė"];

    // Funkcija, kuri parenka atsitiktinį studentą
    const pasirinktiStudenta = () => {
        const atsitiktinisIndeksas = Math.floor(Math.random() * studentai.length);
        alert(`Prie lentos eina: ${studentai[atsitiktinisIndeksas]}`);
    };

    return (
        <div>
            <h2>Kas eina prie lentos?</h2>
            <button onClick={pasirinktiStudenta}>Parinkti studentą</button>
        </div>
    );
};

export default EinaPrieLentos;