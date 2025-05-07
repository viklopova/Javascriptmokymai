
const Komp2 = () => {
    let pazymiai =[10, 8, 7, 6, 9];

    const pazymiuVidurkis = (masyvas) => {
        let suma =0;
        
        masyvas.forEach(Element => suma += Element);
        

        return suma / masyvas.length;
    }
    
    return (
        <div className="komponentas2">
            <h2>Pažymiai: masyvas</h2>
            <p><strong>Visi pažymiai: </strong> {pazymiai.join(' , ')}</p>

            <p>Trečias pažymys: {pazymiai[2]}</p>

            <p>Pažymių skaičius: {pazymiai.length}</p>

            <p><strong>Pažymių vidurkis: </strong> {pazymiuVidurkis(pazymiai)}</p>
        </div>
    );
    };
    export default Komp2;