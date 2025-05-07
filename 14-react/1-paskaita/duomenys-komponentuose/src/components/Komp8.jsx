
const Komp8 = () => {
let antraste = 'Prekiu sarasas';
let prekes = [
    {id: 1, pavadinimas: 'Duona', kaina: 1.5, kiekis: 1},
    {id: 2, pavadinimas: 'Pienas', kaina: 1.2, kiekis: 2},
    {id: 3, pavadinimas: 'Sviestas',kaina: 2.5, kiekis: 14},
    {id: 4, pavadinimas: 'Kiausiniai', kaina: 1.8, kiekis: 1},
    {id: 5, pavadinimas: 'Obuoliai', kaina: 0.7, kiekis: 3},
    {id: 6, pavadinimas: 'Bananai', kaina: 1.2, kiekis: 12},
]
    
return (
    <div>
        <h1>{antraste}</h1>
        {
            prekes.length > 0 
            ? prekes.map((preke) => {
                return (
                    <div key={preke.id}>
                        <h4>{preke.pavadinimas}</h4>
                        <p>Kaina: {preke.kaina}, Kiekis: {preke.kiekis}</p>
                    </div>
                )
            })
            : <p>prekiu nera</p>
        }
    </div>
)
    };
    export default Komp8;