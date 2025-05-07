const VisosPrekes = (props) => {
    let prekes = props.data;


    return (
        <div>
            <h3>Turimos prekes</h3>
            {
                prekes.length > 0 && (
                    <div>
                        {
                            prekes.map(preke => {
                                return(
                                    <div key={preke.id}>
                                        <h4>{preke.pavadinimas}</h4>
                                        <p>Kiekis: {preke.kiekis}</p>
                                        <p>Kaina: {preke.kaina} €</p>
                                        <hr/>
                                    </div>
                                )
                            })
                        }
                    </div>
                )
            }
            {
                prekes.length ===0 && (
                    <p>Prekių nėra</p>
                )
            }
        </div>
    )
}

export default VisosPrekes