const Salis = ({ pavadinimas, zemynas }) => {
    return (
        <div>
            <h3>Pavadinimas: {pavadinimas}</h3>
            <p>Žemynas: {zemynas}</p>
            {zemynas === "Europa" && <p>Jėga!</p>}
        </div>
    );
};

export default Salis;