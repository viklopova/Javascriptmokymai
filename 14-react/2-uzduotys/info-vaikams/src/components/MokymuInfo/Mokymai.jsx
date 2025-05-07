import Modulis from "./Modulis";

const Mokymai = () => {
  let moduliai = [
    { pavadinimas: "JavaScript", trukme: 100 },
    { pavadinimas: "Python", trukme: 200 },
    { pavadinimas: "Java", trukme: 300 },
    { pavadinimas: "Rubi", trukme: 400 },
  ];
  return (
    <div>
      {moduliai.map((modulis, i) => (
        <Modulis
          key={i}
          pavadinimas={modulis.pavadinimas}
          trukme={modulis.trukme}
        />
      ))}
    </div>
  );
};

export default Mokymai;
