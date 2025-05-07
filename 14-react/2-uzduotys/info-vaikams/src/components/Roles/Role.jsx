const Role = ({ pavadinimas, vartotojuSk }) => {

    const vartotojuKiekis = (kiekis) => {
        return kiekis >= 20 ? "Kažkaip perdaug čia jų!" : "Mums jūsų trūksta.";
    };

    return (
        <div>
            <h3>Rolė: {pavadinimas}</h3>
            <p>Vartotojų kiekis: {vartotojuSk}</p>
            <p>{vartotojuKiekis(vartotojuSk)}</p>
        </div>
    );
};

export default Role;