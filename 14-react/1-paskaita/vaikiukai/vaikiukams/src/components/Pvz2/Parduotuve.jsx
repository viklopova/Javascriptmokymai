import Preke from "./Preke";

const Parduotuve = () => {

    let prekes =[
        {id:1 , pavadinimas: 'Knyga', kaina: 10, kiekis: 100,},
        {id:2 , pavadinimas: 'Zaislas', kaina: 20, kiekis: 50,},
        {id:3 , pavadinimas: 'Kompiuteris', kaina: 1000, kiekis: 10,}
    ]

  return (
    <div>
      <h3>Parduotuvė</h3>

        {prekes.map((preke) => <Preke key={preke.id}
                pavadinimas={preke.pavadinimas}
                kaina={preke.kaina}
                kiekis={preke.kiekis}
                />
                )
                }

    </div>
  );
}
export default Parduotuve;