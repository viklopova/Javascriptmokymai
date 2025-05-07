const Mygtukai = (props) => {

    const onClickButtonHandler = () => {
        console.log('Mygtukas paspaustas' + props.buttonText)
        props.tevoKomponentoFunkcija(props.buttonText);
    }

    return (
        <>
        <h3>Mygtukai</h3>
        <button onClick={onClickButtonHandler}>{props.buttonText}</button> 
        </>
    )
}

export default Mygtukai