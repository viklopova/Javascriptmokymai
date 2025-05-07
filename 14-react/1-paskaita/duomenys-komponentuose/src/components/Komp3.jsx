
const Komp3 = () => {
    let studentas = {
        vardas: 'Bitutė',
        amzius: 25,
        miestas: 'Vilnius',
        adresas: {
            gatve: 'Avilio gatvė',
            numeris: 5
        } ,
        bedarbis: true, 
        pazymiai: [10, 8, 7, 6, 9]
    }
    
    return (
        <div className="komponentas3">
            <h2>Masyvas su objektais</h2>
            <p>Vardas: <strong>{studentas.vardas}</strong>, {studentas.amzius}</p>
            <p>Miestas: {studentas.miestas}</p>
            <p>Adresas: {studentas.adresas.gatve} - {studentas.adresas.numeris}</p>
            <p>Ar bedarbis(-ė)? {studentas.bedarbis ? 'Taip' : 'Ne'}</p>
            <p>Pažymiai: {studentas.pazymiai.join(' , ')}</p>
        </div>
    );
    };
    export default Komp3;