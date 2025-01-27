let studentai = [
    {vardas: 'Lukas', pavarde: 'Bukas', amzius:19, pazymiai:[6,7,7,6,8,10,5], studijuPrograma: 'Ekonomika', kursas: 1 },
    {vardas: 'Petras', pavarde: 'Kletras', amzius:20, pazymiai:[6,3,3,3,8,10,5], studijuPrograma: 'Ekonomika', kursas: 2 },
    {vardas: 'Maryte', pavarde: 'Kulyte', amzius:20, pazymiai:[9,9,8,7,8,10,10], studijuPrograma: 'Ekonomika', kursas: 2 },
    {vardas: 'Ona', pavarde: 'Opapa', amzius:19, pazymiai:[5,7,3,3,8,4,5], studijuPrograma: 'Ekonomika', kursas: 1 },
    {vardas: 'Simas', pavarde: 'Bimas', amzius:19, pazymiai:[7,7,7,7,7,7,7], studijuPrograma: 'Ekonomika', kursas: 1 }
];
let bendraSuma =0; 

for(let stud of studentai) {
    console.log('Studento vardas: ', stud.vardas, ' pavarde: ', stud.pavarde, ' Amzius yra ', stud.amzius, ' Mokosi ', stud.kursas, ' kurse, programa: ', stud.studijuPrograma);
    console.log('Studento pazymiai yra: ', stud.pazymiai);
    let suma = 0;
    for (let paz of stud.pazymiai) {
        suma+=paz;
    }
    let vidurkis = (suma/stud.pazymiai.length);
    bendraSuma+=vidurkis;
    console.log('Studento pazymiu vidurkis: ', vidurkis);
};
console.log('----------------------------------------------------');
console.log('Visu vidurkis: ', bendraSuma/studentai.length);
('---------------------2 uzduotis-------------------------------');

let parduotuves = [
    {
    pavadinimas: 'Parduotuve1', 
    adresas: 'Vilnius',
    darbuotojuSk: 23,
    prekes: [
        {pavadinimas:'preke1', kodas:12345, kaina: 1.0, savikaina:0.8, turimasKiekis:109}, {pavadinimas:'preke11', kodas:12346, kaina: 1.4, savikaina:0.98, turimasKiekis:19}, {pavadinimas:'preke111', kodas:12347, kaina: 2.4, savikaina:1.90, turimasKiekis:190}]
    },
    {
    pavadinimas: 'Parduotuve2', 
    adresas: 'Kaunas',
    darbuotojuSk: 28,
    prekes: [
        {pavadinimas:'preke2', kodas:12345, kaina: 1.0, savikaina:0.8, turimasKiekis:18}, {pavadinimas:'preke22', kodas:12346, kaina: 1.4, savikaina:0.98, turimasKiekis:89}, {pavadinimas:'preke222', kodas:12347, kaina: 2.4, savikaina:1.90, turimasKiekis:120}]
     },
     {
    pavadinimas: 'Parduotuve3', 
    adresas: 'Palanga',
    darbuotojuSk: 18,
    prekes: [
        {pavadinimas:'preke3', kodas:12345, kaina: 1.0, savikaina:0.8, turimasKiekis:18}, {pavadinimas:'preke33', kodas:12346, kaina: 1.4, savikaina:0.98, turimasKiekis:89}, {pavadinimas:'preke333', kodas:12347, kaina: 2.4, savikaina:1.90, turimasKiekis:120}]
     }
]