console.log('_________________1 užduotis________________________');
let studentas = {
    vardas:'Lukas',
    pavarde:'Lukutis',
    amzius:21,
    studijuPrograma: 'Ekonomika',
    kreditai: 15,
    pazymiai: [6,7,5,8,10,10],
    ugis: 182,
    kelintasKursas: 'antras',
    aukstojiMokyklas: 'VU'
}

console.log(studentas);
console.log('Studento vardas: '+ studentas.vardas);
console.log('Studento pavarde: '+ studentas.pavarde);
console.log('Studiju programa: '+ studentas.studijuPrograma);

console.log('_________________2 užduotis_______________________');
let filmas = {
    pavadinimas: 'The Shawshank Redemption',
    rezisierius: 'Frank Darabont',
    biudzetas: 25000000,
    uzdarbis: 41000000,
    zanras: 'Drama',
    trukme: 142,
    isleidimoMetai: 1995,
    aktoriai: [
        'Tim Robbins',
        'Morgan Freeman',
        'Bob Gunton',
        'Wiliam Sadler'
    ]
}

console.log(filmas);
console.log('Pelnas:', filmas.uzdarbis-filmas.biudzetas, 'USD');
console.log('Filme vaidino '+filmas.aktoriai.length+ ' aktoriai');
console.log('Filmui yra ',new Date(Date.now()).getFullYear()-filmas.isleidimoMetai,' metai');

console.log('_________________3 užduotis_______________________');

let knyga_vienas = {
    pavadinimas: 'Mes dedame taska',
    autorius: 'Colen Hoover',
    zanras: 'Romanas',
    kaina: 12.50,
    puslapiai: 239,
    skyriai: [
        'Pirmas skyrius',
        'Antras skyrius',
        'Trecias skyrius'
    ],
    isleidimoMetai: 2010,
    arYraKnygynuose: true,
}

let knyga_du = {
    pavadinimas: 'Mes pradedam is naujo',
    autorius: 'Colen Hoover',
    zanras: 'Romanas',
    kaina: 10.50,
    puslapiai: 269,
    skyriai: [
        'Pradzia',
        'Kulminacija',
        'Pabaiga',
        'Epilogas'
    ],
    isleidimoMetai: 2013,
    arYraKnygynuose: false,
}

console.log(knyga_vienas);
console.log(knyga_du);


if(knyga_vienas.puslapiai>knyga_du.puslapiai) {
    console.log('Knyga '+ knyga_du.pavadinimas+ ' yra plonesne')
} else {
    console.log('Knyga ', knyga_vienas.pavadinimas, ' yra plonesne')
}

if(knyga_vienas.skyriai.length>knyga_du.skyriai.length) {
    console.log('Knygoje '+ knyga_vienas.pavadinimas+ ' yra daugiau skyriu')
} else {
    console.log('Knygoje ', knyga_du.pavadinimas, ' yra daugiau skyriu')
}

if(knyga_du.kaina*2>knyga_vienas.kaina) {
    console.log('Knyga '+ knyga_du.pavadinimas+ ' yra brangesne padvigubinus kaina')
} else {
    console.log('Knyga ', knyga_vienas.pavadinimas, ' yra brangesne net padvigubinus '+ knyga_vienas.pavadinimas +'kaina')
}
console.log('_________________4 užduotis_______________________');

let objektas1 = {
    pavadinimas: 'Geltona',
    kaina: 2.50,
    savikaina: 1.23,
    kodas: 1293,
    turimasKiekis: 123,
    siuntimoDeze: {
        a: 2,
        b: 4,
        h: 0.5
    }
}

let objektas2 = {
    pavadinimas: 'Zalia',
    kaina: 1.50,
    savikaina: 0.23,
    kodas: 1223,
    turimasKiekis: 13,
    siuntimoDeze: {
        a: 4,
        b: 2,
        h: 5
    }
}

let objektas3 = {
    pavadinimas: 'Raudona',
    kaina: 9.50,
    savikaina: 8.30,
    kodas: 1003,
    turimasKiekis: 120,
    siuntimoDeze: {
        a: 12,
        b: 8,
        h: 9
    }
}

console.log(objektas1);
console.log(objektas2);
console.log(objektas3);
console.log('Pirma preke kainuoja: '+objektas1.kaina, ',Antra preke kainuoja: '+objektas2.kaina, ', Trecia preke kainuoja: '+objektas3.kaina)

if(objektas1.kaina>objektas2.kaina>objektas3.kaina) {
    console.log('Pirma preke brangiausia '+objektas1.kaina)
} else if (objektas2.kaina>objektas1.kaina>objektas3.kaina) {
    console.log('Antra preke brangiausia '+objektas2.kaina)
} else {
    console.log('Trecia preke brangiausia '+objektas3.kaina)
}

console.log('Pirmos dezes turis yra: ',objektas1.siuntimoDeze.a*objektas1.siuntimoDeze.b*objektas1.siuntimoDeze.h, ' kubiniai cm');

console.log('Antros dezes turis yra: ',objektas2.siuntimoDeze.a*objektas2.siuntimoDeze.b*objektas2.siuntimoDeze.h, ' kubiniai cm');

console.log('Trecios` dezes turis yra: ',objektas3.siuntimoDeze.a*objektas3.siuntimoDeze.b*objektas3.siuntimoDeze.h, ' kubiniai cm')

console.log('Pirmos prekes pelningumas: ', (Math.floor(objektas1.kaina-objektas1.savikaina)*objektas1.turimasKiekis));

console.log('Antros prekes pelningumas: ', (objektas2.kaina-objektas2.savikaina)*objektas2.turimasKiekis);

console.log('Trecios prekes pelningumas: ', ((objektas3.kaina-objektas3.savikaina)*objektas3.turimasKiekis).toFixed(2));
