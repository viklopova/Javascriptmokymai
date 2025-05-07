const Komp8 = () => {   
    
    let slaptasSkaitmuo = Math.floor(Math.random() * 10) + 1;
    
    const spejimasHandler = () => {
        console.log (
            slaptasSkaitmuo === 1? 'Atspejai' : 'Neatspejai'
        );
    }
    return (
        <div>
            <h4>Komp8</h4>
            <button onClick={spejimasHandler}>Spejimas 1</button>
            <button>Spejimas 2</button>
            <button>Spejimas 3</button>
        </div>
    );
}

export default Komp8;