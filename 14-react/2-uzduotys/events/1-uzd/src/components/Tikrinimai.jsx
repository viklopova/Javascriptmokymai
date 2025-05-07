const Tikrinimai = () => {

let skaiciukas = 10;

const patikrintiHandler1 = () => {
    if (skaiciukas  % 2 === 0) {
        console.log('Skaičius yra lyginis');
    } else {
        console.log('Skaičius yra nelyginis');
    }
}

const patikrintiHandler2 = () => {
    if (skaiciukas >30) {
        console.log('daugiau nei 30');
    } else {
        console.log('maziau nei 30');
    }
}

const patikrintiHandler3 = () => {
    for (let i = 2; i < skaicius; i++) {
        if (skaiciukas % i === 0) {
            alert(`Skaicius nėra pirminis.`);
            return;
        }
}
}

return (
    <div>
        <h4>Tikrinimai</h4>
        <button onClick={patikrintiHandler1}>Patikrins ar lyginis</button>
        <button onClick={patikrintiHandler2}>Patikrins ar didesnis nei 30</button>
        <button onClick={patikrintiHandler3}>Patikrins ar pirminis </button>
    </div>
);
}

export default Tikrinimai;