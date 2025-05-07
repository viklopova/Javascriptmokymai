
const Komp6 = () => {
    let skaiciai1 = [16, 2, 93, 48, 5];
    let skaiciai2 = [];
    let antraste = 'Skaiciu masyvas su IF';
    let arPrisijunges = true;

    return (
        <div>
            <h2>{antraste}</h2>
            <h3>Skaičiai 1:</h3>
            {
                skaiciai1.length > 0 ? 
                <ul>{skaiciai1.map((skaicius, i)=> <li key={i}>{skaicius} ({skaicius % 2 === 0 ? 'lyginis' : 'nelyginis'})</li>)}</ul> 
                : 'Nera skaiciu'
            }
            <h3>Skaičiai 2:</h3>
            {
                skaiciai2.length > 0 ? 
                <ul>{skaiciai2.map((skaicius, i)=> <li key={i}>{skaicius}</li>)}</ul> 
                : 'Nera skaiciu'
            }

            <h3> Ar prisijunges? </h3>
            {
                arPrisijunges ? <p>Prisijunges</p> : <p>Neprisijunges</p>
            }


        </div>
    );
    }
    export default Komp6;