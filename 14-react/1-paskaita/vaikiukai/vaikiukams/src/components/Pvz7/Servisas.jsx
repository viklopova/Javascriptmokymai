import Automobilis from "./Automobilis";

const Servisas = () => {
    let automobiliai = [
        {gamintojas: 'Audi', modelis: 'A4', metai: 2010, kaina: 10000},
        {gamintojas: 'BMW', modelis: '320', metai: 2015, kaina: 15000},
        {gamintojas: 'VW', modelis: 'Passat', metai: 2012, kaina: 12000},
        {gamintojas: 'Toyota', modelis: 'Corolla', metai: 2018, kaina: 18000},
        {gamintojas: 'Nissan', modelis: 'Qashqai', metai: 2017, kaina: 16000},
    ]

    return (
    <div>
        <p>Servisas</p>
        <Automobilis auto={automobiliai[0]}/>
        <Automobilis auto={automobiliai[1]}/>
        <Automobilis auto={automobiliai[2]}/>
        <Automobilis auto={automobiliai[3]}/>
        <Automobilis auto={automobiliai[4]}/>

        {
            automobiliai.map((auto, index) => {
                return <Automobilis key={index} auto={automobilis}/>
            })
        }
    </div>
  );
}

export default Servisas;