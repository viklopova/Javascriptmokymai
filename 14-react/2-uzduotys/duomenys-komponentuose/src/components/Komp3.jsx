// TODO: prijunkite šį komponentą prie App.jsx

const Komp3 = () => {
    let preke = {
        pavadinimas: 'Šokoladas',
        kaina: 2.5,
        kiekis: 10,
    };
    
    return (
        // TODO: į šio komponento div įstatykite
        // prekės pavadinimą, kainą ir kiekį
        <div>
            Pavadinimas: {preke.pavadinimas}, Kaina: {preke.kaina}, Kiekis: {preke.kiekis}
            </div>
    )
}

export default Komp3
