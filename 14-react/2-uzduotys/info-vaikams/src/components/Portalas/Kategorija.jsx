import Naujiena from "./Naujiena";

const Kategorija = () => {
  let naujienos = [
    {
      pavadinimas: "Sportas",
      perziuros: 100,
      santrauka:
        "Lorem ipsum dolor sit amet, Donec nec odio vitae urna aliquam ultrices. Donec nec odio vitae urna aliquam ultrices.",
    },
    {
      pavadinimas: "Mokslas",
      perziuros: 2000,
      santrauka:
        "Donec nec odio vitae urna aliquam ultrices. Donec nec odio vitae urna aliquam ultrices. Donec nec odio vitae urna aliquam ultrices.",
    },
    {
      pavadinimas: "Technologijos",
      perziuros: 300,
      santrauka:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. ltrices. Donec nec odio vitae urna aliquam ultrices.",
    },
  ];

  return (
    <div>
      {naujienos.map((naujiena, i) => (
        <Naujiena
          key={i}
          pavadinimas={naujiena.pavadinimas}
          perziuros={naujiena.perziuros}
          santrauka={naujiena.santrauka}
        />
      ))}
    </div>
  );
};

export default Kategorija;
