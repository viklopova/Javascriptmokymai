// TODO: prijunkite šį komponentą prie App.jsx

const Komp4 = () => {
    let filmas = {
        pavadinimas: 'Pulp Fiction',
        rezisierius: 'Quentin Tarantino',
        metai: 1994,
    };

    return (
        // TODO: į šio komponento div įstatykite
        // filmo pavadinimą, režisierių ir metus
        <div>
            Pavadinimas: {filmas.pavadinimas}, Režisierius: {filmas.rezisierius}, Metai: {filmas.metai}
        </div>
    )
}

export default Komp4
