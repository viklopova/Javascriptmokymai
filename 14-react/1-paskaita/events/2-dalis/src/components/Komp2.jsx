const Komp2 = () => {
    const inputHandler = (event) => {
        let value = event.target.value;

        if (value >100) {
            console.log('Daugiau nei 100');
        } else {
            console.log('Maziau nei 100');
        }
    }

  return (
    <div>
      <h2>Komp2 Skaiciai</h2>
      <input type="number" onInput={inputHandler}/>
      
    </div>
  )
}

export default Komp2;