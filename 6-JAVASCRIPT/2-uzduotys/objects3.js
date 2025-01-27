let automobiliai = [
    {
        pavadinimas: 'Audi',
        metai: 2017
    },
    {
        pavadinimas: 'BMW',
        metai: 2017
    },
    {
        pavadinimas: 'Honda',
        metai: 2017
    },
    {
        pavadinimas: 'Volvo',
        metai: 2017
    }
]
let dabartiniai = new Date(Date.now()).getFullYear();
let amzius = dabartiniai - automobiliai.metai;

for (let auto of automobiliai) {
    console.log(` Pavadinimas ${auto.pavadinimas} pavadinimas, ${auto.metai} metai, ${amzius}`);

};


console.log('_________________1 užduotis_______________________');

let imones = [
    {pavadinimas: 'Labas', pelnas: 127893, darbuotojuSkaicius: 23, juridineForma: 'UAB', metai:1992},
    {pavadinimas: 'Krabas', pelnas: 1222293, darbuotojuSkaicius: 3, juridineForma: 'UAB', metai:2002},
    {pavadinimas: 'Stabas', pelnas: 1293, darbuotojuSkaicius: 43, juridineForma: 'AB', metai:1999},
    {pavadinimas: 'Klubas', pelnas: 120001, darbuotojuSkaicius: 15, juridineForma: 'MB', metai:2013}
];

let darbuojuBendrasSkaicius = 0;
let bendrasSektoriausPelnas = 0;
let dabartiniaiMetai = new Date(Date.now()).getFullYear();

console.log(dabartiniaiMetai)

let imonesAmzius = 0;

console.log(imonesAmzius)

console.log('Visos imones:');

for(let imone of imones) {
    darbuojuBendrasSkaicius+= imone.darbuotojuSkaicius;
    imonesAmzius=dabartiniaiMetai-imone.metai;
    console.log('-', imone.juridineForma, ' ',imone.pavadinimas, ' veikia nuo ', imone.metai, ' metu. Imones amzius yra ', imonesAmzius, 'metai.');
}

for(let pelnas1 of imones) {
    bendrasSektoriausPelnas+=pelnas1.pelnas
};

console.log('Bendras darbuotoju skaicius yra: ', darbuojuBendrasSkaicius);
console.log('Bendras sektoriaus pelnas: ', bendrasSektoriausPelnas);

console.log('_________________2 užduotis_______________________');

let ligonines = [
    {pavadinimas: 'Santaros klinika', adresas: [{miestas: 'Vilnius', gatve: 'Santariskiu', pastoKodas:12345}], vidlankytojusSkaicius: 2831, personaloSkaicius: 1290, biudzetas: 8765317},
    {pavadinimas: 'Lazdynu ligonine', adresas: [{miestas: 'Vilnius', gatve: 'Lazdynu', pastoKodas:12345}], vidlankytojusSkaicius: 1622, personaloSkaicius: 592, biudzetas: 1765317},
    {pavadinimas: 'Kauno klinikos', adresas: [{miestas: 'Kaunas', gatve: 'Lauko', pastoKodas:12345}], vidlankytojusSkaicius: 2276, personaloSkaicius: 1003, biudzetas: 6765111},
    {pavadinimas: 'Siauliu ligonine', adresas: [{miestas: 'Siauliai', gatve: 'Hipopotamo', pastoKodas:12345}], vidlankytojusSkaicius: 431, personaloSkaicius: 663, biudzetas: 2762782},
]

let bendrasVidLankSkaic = 0;
let bendrasBiudzetas = 0;


console.log('Pagrindines ligonines:');
