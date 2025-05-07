const Komp9 = () => {   
    
    let slaptasSK = Math.floor(Math.random() * 10) + 1;

    const spetiHandler = (spejimas) => {
        console.log(
            slaptasSK === spejimas? 'Atspejai' : 'Neatspejai'
        )
    }
    return (
        <div>
            <h4>Komp9</h4>
            <button onClick={() => spetiHandler(1)}>Spejimas 1</button>
            <button onClick={() => spetiHandler(2)}>Spejimas 2</button>
            <button onClick={() => spetiHandler(3)}>Spejimas 3</button>
        </div>
    );
}

export default Komp9;