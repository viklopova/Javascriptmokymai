console.log('------____----------____---------');
function pasisveikinimas (vardas) {
    console.log('Labas' + vardas);
}

function atsisveikinimas (vardas) {
    console.log('Viso gero' + vardas);
}

let vardas = 'Jonai';
pasisveikinimas(vardas);
atsisveikinimas(vardas);


console.log('------____----------____---------');

function palyginimas (a,b) {
    if (a>b) {console.log("Didesnis yra skaicius: ", a)}
    else if (a<b) {console.log("Didesnis skaicius: ", b)}
    else {console.log("Skaiciai yra lygus")}
}

let a = Math.floor(Math.random() *10)+1;
let b = Math.floor(Math.random() *10)+1;

console.log(a);
console.log(b);

palyginimas(a,b);
palyginimas(4,4)
palyginimas(10,9);

console.log('------____----------____---------');

function auto (marke, modelis, metai, turis) {
    console.log('Automobilio marke yra: ' + marke);
    console.log('Automobilio modelis yra: ' + modelis);
    console.log('Automobilio gamybos metai yra: ' + metai);
    console.log('Automobilio darbinis turis yra: ' + turis + ' litrai');
}

let marke = 'Audi';
let modelis = 'R8';
let metai = 2022;
let turis = 3.0;

auto (marke, modelis, metai, turis);
console.log('_______________________________')
auto ('Ford', 'Mustang', 2011, 5.0 )

console.log('------____----------____---------');

function suma (sk1, sk2) {
    let suma = sk1+sk1;
    console.log(`${sk1} + ${sk2} = ${suma}`);
}

function skirtumas (sk1, sk2) {
    let skirtumas = sk1-sk1;
    console.log(`${sk1} - ${sk2} = ${skirtumas}`);
}

function sandauga (sk1, sk2) {
    let sandauga = sk1*sk1;
    console.log(`${sk1} x ${sk2} = ${sandauga}`);
}


function dalyba (sk1, sk2) {
    let dalyba = sk1/sk1;
    console.log(`${sk1} / ${sk2} = ${dalyba}`);
}

let sk1 = 4;
let sk2 = 8;

suma(sk1, sk2);
skirtumas (sk1, sk2);
sandauga (sk1, sk2);
dalyba (sk1, sk2);

function random () {
    let a = Math.floor(Math.random() *10)+1;
    let b = Math.floor(Math.random() *10)+1;
    console.log (a, b);
}

suma(a,b);
skirtumas(a,b);
sandauga( a,b);
dalyba (a,b);

for (let i=0; i<3; i++ ){
    random();
}
console.log('------____----------____---------');

function masyvoIsvedimas (mas) {
    console.log(mas);
    console.log('Duomenys', mas.join(','));
}

function skaiciuokSumas (masyvas) {
    let suma = 0;
    for(let item of masyvas) {
        suma +=item;
    }
    console.log('Skaiciu suma yra: ', suma);
}

function didziausiasMasyve (mas1) {
    let didziausiasSkaicius = mas1[0];

    for (let elementas of mas1) {
        if (elementas>didziausiasSkaicius) {
            didziausiasSkaicius=elementas
        }
    }
    console.log('didziauias skaicius masyve: ', didziausiasSkaicius)
}


let skaiciai1 = [4,5,4,3,2];
let skaiciai2 = [4,6,5,78,0];

masyvoIsvedimas(skaiciai1);
skaiciuokSumas (skaiciai1);
masyvoIsvedimas (skaiciai2);
skaiciuokSumas(skaiciai2);
didziausiasMasyve(skaiciai1);
didziausiasMasyve(skaiciai2);

console.log('------____----------____---------');

//Susikurkite funkciją, kuri per argumentus priimtų žodžių masyvą. Funkcijoje išveskite visus žodžius iš masyvo atskirose eilutėse, nurodant žodžio ilgį (simbolių kiekį). Už funkcijos ribų susikurkite žodžių masyvą ir užpildykite jį duomenimis. Iškvieskite sukurtą funkciją perduodant turimą masyvą.