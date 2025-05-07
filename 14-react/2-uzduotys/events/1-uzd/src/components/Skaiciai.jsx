const Skaiciai = () => {
    // Sukuriamas skaičių masyvas
    const skaiciai = [10, 25, 7, 33, 18];

    // Funkcija rasti sumą
    const rastiSuma = () => {
        const suma = skaiciai.reduce((acc, skaicius) => acc + skaicius, 0);
        alert(`Skaičių suma: ${suma}`);
    };

    // Funkcija rasti didžiausią skaičių
    const rastiDidziausia = () => {
        const didziausias = Math.max(...skaiciai);
        alert(`Didžiausias skaičius: ${didziausias}`);
    };

    return (
        <div>
            <h2>Skaičių operacijos</h2>
            <button onClick={rastiSuma}>Rasti sumą</button>
            <button onClick={rastiDidziausia} style={{ marginLeft: "10px" }}>
                Rasti didžiausią
            </button>
        </div>
    );
};

export default Skaiciai;