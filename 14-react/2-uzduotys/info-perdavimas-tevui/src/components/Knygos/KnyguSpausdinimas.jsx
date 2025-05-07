const KnyguSpausdinimas = ({ knygos }) => {

    if (knygos.length === 0) {
        return <p> Šiuo metu nėra įvestų knygų.</p>;
    }

    return (
        <div>
            <h2>Knygų sąrašas:</h2>
            <ul>
                {knygos.map((knyga, index) => (
                    <li key={index}>
                        Pavadinimas: {knyga.pavadinimas}, Kaina: {knyga.kaina}€, Metai: {knyga.metai} m.
                    </li>
                ))}
            </ul>
        </div>
    );
}
export default KnyguSpausdinimas;