const Automobilis = (props) => {
    //let auto = props.auto;

    let {gamintojas, modelis} = props.auto;
  
    return (
    <div>
        <h2>Automobilis</h2>
        <p>{gamintojas}: {modelis}</p>
    </div>
  );
}

export default Automobilis;