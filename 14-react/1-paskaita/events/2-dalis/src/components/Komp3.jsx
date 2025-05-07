const Komp3 = () => {

    const zodis = 'labas';

    const inputHandler = (event) => {
        let ivestasZodis = event.target.value;

        if (ivestasZodis === zodis) {
            console.log('Labas, atspejai zodi');
        } else {
            console.log('Bandyk dar karta');
        }
    }
    return (
      <div>
        <h2>Komp3</h2>
        <input type="text" onChange={inputHandler}/>
      </div>
    )
  }
  
  export default Komp3;