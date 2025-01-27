console.log('------____----------____---------');

//Susikurkite funkciją, kuri per argumentus priimtų žodžių masyvą. Funkcijoje išveskite visus žodžius iš masyvo atskirose eilutėse, nurodant žodžio ilgį (simbolių kiekį). Už funkcijos ribų susikurkite žodžių masyvą ir užpildykite jį duomenimis. Iškvieskite sukurtą funkciją perduodant turimą masyvą.

function isvedimas (masyvas) {
    for ( let elementas of masyvas) {
        console.log(elementas + ' ' + elementas.length);
    }
}

let zodziai = [
    'Lapas',
    'Langas',
    'Lietus',
    'Lapkritis'
];


isvedimas(zodziai);
console.log('-------------------------------------------------')
//Susikurkite funkciją, kuri per argumentus priimtų skaičių masyvą. Funkcija turėtų atspausdinti visus skaičius, šalia jų išvedant to skaičiaus kvadratą ir jį padalintą iš dviejų. Už funkcijos ribų susikurkite du skaičių masyvus ir užpildykite jį duomenimis. Iškvieskite funkciją du kartus, kiekvieną kartą perduodant skirtingą turimą masyvą.

function skaiciuIsvedimas (mas) {
    for (let item of mas) {
        console.log (item + '. ' + 'Skaiciaus kvardatas: '+ Math.pow(item,2) + '; ' +  ' Skaicius padalintas perpus: ' + item/2)
    }
}

let numbers = [2,3,4,6,7,8];
let numbers2 = [4,6,5,3,4,12,34,67]

skaiciuIsvedimas(numbers);
console.log('............................................')
skaiciuIsvedimas(numbers2);
console.log('-------------------------------------------------')
//Susikurkite funkciją, kuri per argumentus priimtų pažymių masyvą, bei studento vardą su pavarde. Funkcija turėtų išvesti studento vardą ir pavardę, jo pažymius. Taip pat, suskaičiuoti vidurkį, bei jį išvesti. Už funkcijos ribų susikurkite reikiamus kintamuosius ir masyvus, arba objektus studentų pažymiams saugoti ir užpildykite juos duomenimis. Iškvieskite šią funkciją perduodant visus reikalingus duomenis.

let studentai = [
    {
        vardas: 'Lukas',
        pavarde: 'Lukaitis',
        pazymiai: [6,5,4,7,5,7,]
    },
    {
        vardas: 'Simas',
        pavarde: 'Simaitis',
        pazymiai: [10,5,10,7,5,10,]
    },
    {
        vardas: 'Tomas',
        pavarde: 'Tomaitis',
        pazymiai: [5,5,4,4,5,2,]
    }
]

function studentoVidurkis (studentas) {
    let suma = 0;
    for (let element1 of studentas.pazymiai) {
        suma +=element1;
    }
    let vidurkis = (suma/studentas.pazymiai.length).toFixed(2);
    console.log('Vidurkis: ' + vidurkis)
}
for (let studentas of studentai) {
    console.log ('Vardas: '+ studentas.vardas+ ' ' + 'Pavarde: '+ studentas.pavarde) + studentoVidurkis(studentas)
}

console.log('-------------------------------------------------')
//Susikurkite funkciją, kuri per argumentus priimtų skaičių masyvą. Funkcija turėtų rasti didžiausią skaičių iš masyvo bei išvesti gautą atsakymus. Taip pat, susikurkite funkciją, kuri per argumentus priimtų masyvą ir į jį sugeneruotų pasirinktą kiekį atsitiktinių skaičių. Susikurkite tris tuščius masyvus. Iškvieskite atsitiktinių skaičių generavimo funkciją tris kartus, kiekvieną kartą perduodant funkcijai vis kitą masyvą. Kai duomenys bus užpildyti, masyvuose esančią informaciją išsiveskite norimu būdu (per console.log arba per dar atskirą funkciją). Tuomet kvieskite didžiausio skaičiaus paieškos funkciją tris kartus, kiekvieną kartą perduodant skirtingą masyvą į ją.

function didziausiasMasyve (masyvas) {
    let didziausiasSkaicius = masyvas[0];

    for (let elementas of masyvas) {
        if (elementas>didziausiasSkaicius) {
            didziausiasSkaicius=elementas
        }
    }
    console.log('Didziausias skaicius masyve: ', didziausiasSkaicius)
}

function random (kiekis, min, max, masyvas) {
    for (let i=0; i<kiekis; i++) {
        masyvas.push(Math.floor(Math.random()*(max-min))+min);
    }
}

function isvedimas (zinute,masyvas) {
    console.log(zinute);
    console.log(masyvas);
}

let skaiciai1=[];
let skaiciai2=[];
let skaiciai3=[];

random(10, 0, 200, skaiciai1);
random(3, 1, 10, skaiciai2);
random(8,2,56, skaiciai3);

isvedimas('Pirmas masyvas',skaiciai1);
didziausiasMasyve(skaiciai1);
console.log('-----------')
isvedimas('Antras masyvas',skaiciai2);
didziausiasMasyve(skaiciai2);
console.log('-----------')
isvedimas('Trecias masyvas',skaiciai3);
didziausiasMasyve(skaiciai3);
console.log('-----------')

function tekstas() {
    return 'Koks nors tekstas'
}

let pvz = tekstas();
console.log(pvz);

if (tekstas() === 'labas') {

}else {
    console.log('tekstas blogas')
}

console.log(tekstas())