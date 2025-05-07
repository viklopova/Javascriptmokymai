const Komp7 = () => {   
    let skaiciukas = 14;

    const patikrintiHandler = () => {
        if (skaiciukas >10) {
            console.log('daugiau nei 10');
        } else {
            console.log('maziau nei 10');
        }
    }

    return (
        <div>
            <h4>Komp7</h4>
            <button onClick={patikrintiHandler}>Patikrins</button>
            
        </div>
    );
}
export default Komp7;