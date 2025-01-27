function skaiciuSuma(masyvas) {
    let suma=0;
    for (let sk of masyvas) {
        suma +=sk;
    }
    return suma;
}

let skaiciai1 = [6,4,3,5,6,5,4,5];
let suma1 = skaiciuSuma(skaiciai1);
let skaiciai2 = [10,3,7,8,9,3];
let suma2 = skaiciuSuma(skaiciai2);

console.log('Pirmas masyvas: '+skaiciai1);
console.log('Suma yra: '+suma1);
console.log('Antras masyvas: '+skaiciai2);
console.log('Suma yra: '+suma2);

if(suma1>suma2) {
    console.log('Pirmojo masyvo suma didesne nei antrojo')
} else {console.log('Antrojo masyvo suma didesne')};

console.log('________________________________________________');

function isvedimas (mas) {
    let zodis = 0;
    for (let i=0; i<mas.length; i++) {
        if (mas[i].length>mas[zodis].length) {
            zodis=i;
        }
    } 
    console.log('Ilgiausias zodis masyve yra: ' + mas[zodis]+ '. Raidziu kiekis -  ' + mas[zodis].length);
}

let zodziai = [
    'Lapas',
    'Langas',
    'Lietus',
    'Lapkritis'
];


isvedimas(zodziai);
console.log('________________________________________________');

function patikrinimas (pazymiai) {;
    return pazymiai.every (paz=>paz>4)
}

let pazymiai1 = [10,5,2,4,7];
let pazymiai2 = [8,6,7,8,9,10];
let rezultatas1 = patikrinimas(pazymiai1);
let rezultatas2 = patikrinimas(pazymiai2);

console.log(pazymiai1+ ' ' +rezultatas1);
console.log(pazymiai2+ ' ' + rezultatas2);

if (rezultatas1) {
    console.log('Visi pirmojo studento pazymiai yra teigiami')
} else {console.log('Tarp pirmojo studento pazymiu yra neigiamu');

}

if (rezultatas2) {
    console.log('Visi antrojo studento pazymiai yra teigiami')
} else {console.log('Tarp antrojo studento pazymiu yra neigiamu');
    
};

console.log('________________________________________________');

function reversWord (word) {
    return word.split('').reverse().join('');
};

let word = 'Kukuliukas';

console.log(reversWord(word));
