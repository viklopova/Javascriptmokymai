import Diena from './Diena';

const   Savaite = () => {
    let savaitesDienos = [ 
        {diena: 'Pirmadienis', oras: 'lietingas', temperatura: 15},
        {diena: 'Antradienis', oras: 'saulėtas', temperatura: 20},
        {diena: 'Trečiadienis', oras: 'lietingas', temperatura: 15},
        {diena: 'Ketvirtadienis', oras: 'saulėtas', temperatura: 20},
        {diena: 'Penktadienis', oras: 'lietingas', temperatura: 15},
        {diena: 'Šeštadienis', oras: 'saulėtas', temperatura: 20},
        {diena: 'Sekmadienis', oras: 'lietingas', temperatura: 15}
    ];

    return (
        <div>
            Savaite
            {
                savaitesDienos.map((diena, index) => {
                    return <Diena key={index} diena={diena.diena} oras={diena.oras} temperatura={diena.temperatura}/>
            }
            )}
        </div>
    );
}

export default Savaite;