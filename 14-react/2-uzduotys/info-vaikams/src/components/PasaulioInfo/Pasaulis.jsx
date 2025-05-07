import Salis from "./Salis";

const Pasaulis = () => {

      const salis1 =  { pavadinimas: "Kanada", zemynas: "Šiaurės Amerika" }
      const salis2 =  { pavadinimas: "Brazilija", zemynas: "Pietų Amerika" } 
      const salis3 = { pavadinimas: "Lietuva", zemynas: "Europa" }


    return (
        <div>
            <h2>Pasaulio šalys</h2>
            
            <Salis pavadinimas={salis1.pavadinimas} zemynas={salis1.zemynas} />
            <Salis pavadinimas={salis2.pavadinimas} zemynas={salis2.zemynas} />
            <Salis pavadinimas={salis3.pavadinimas} zemynas={salis3.zemynas} />
        </div>
    );
};

export default Pasaulis;