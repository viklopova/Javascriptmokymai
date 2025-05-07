const Preke = (props) => {
    return (
      <div>
        <h3>{props.pavadinimas}</h3>
        <p> Prekyboje turime: <strong>{props.kiekis}</strong></p>
        <p> Kaina: {props.kaina}</p>

      </div>
    );
  }
  export default Preke;

  // be propsu
  //      <h3>{pavadinimas}</h3>
  //<p>Prekyboje turime: {kiekis} </p>
 // <p>Kaina: {kaina}</p>  tada prie preke, kur props reikia pavadinimas, kiekis, kaina*/