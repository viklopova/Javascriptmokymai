console.log('Viktorija');
console.log('Nes noriu suprasti kaip veikia programa su kuria dirbu');
console.log('mano batai \nbuvo du \nvienas dingo, nerandu \nas su vienu batuku \nniekur eiti negaliu');
console.log('***\n* *\n***');
console.log('*\n**\n***');
console.log('Labas rytas\nLaba diena\nLabas vakaras');
alert('Ivyko klaida');
console.log('+--------+--------+\n| Vardas | Amzius |\n+--------+--------+\n| Tomas  | 24     |\n| Jonas  | 26     |\n| Justė  | 25     |\n+--------+--------+')
console.error('pvz')

console.log('=======WHILE==========')

let i=0;
while(i<5) {
    console.log(i);
    i++
}

let text='This text';
let howMuch=10;

while (howMuch>0) {
    console.log(text);
    howMuch--;
}

let prekiu_kiekis=24;

while (prekiu_kiekis>0) {
    console.log('Turimas prekiu kiekis, ',prekiu_kiekis);
    let kiek_nupirko=Math.floor(Math.random()*5)+1;
    console.log('Nupirko: ', kiek_nupirko);
    prekiu_kiekis-=kiek_nupirko;
}
console.log('++++++++++')

let prekiu_kiekis1=24;

while (prekiu_kiekis1>0) {
    console.log('Turimas prekiu kiekis, ',prekiu_kiekis);
    let kiek_nupirko1=Math.floor(Math.random()*5)+1;
    if (kiek_nupirko1>prekiu_kiekis1) {
        kiek_nupirko1=prekiu_kiekis1;
    }
    console.log('Nupirko: ', kiek_nupirko);
    prekiu_kiekis-=kiek_nupirko;
}
console.log('++++++++++++++++++++++')

while(true) {
    let skaicius=Math.floor(Math.random()*100)+1;
    console.log(skaicius);

    if (skaicius%7===0 && skaicius%2===0) {
        console.log('Skaicius daliansi is 7 ir 5 ',skaicius);
        break;
    }
}
console.log('++++++++++++++++++++++')

let skaicius1=1;

while (skaicius1%7!=0 || skaicius%2!=0) {
    skaicius1=Math.floor(math.random()*100)+1;
    console.log(skaicius1);
}

let duomenu_kiekis=130;
let apdorota=60;

while (apdorota<duomenu_kiekis) {
    console.log('kazkas daroma... jau apdorota ', apdorota, 'is', duomenu_kiekis);
    apdorota+=10;
}

console.log('baigta, apdorota', apdorota, 'is ', duomenu_kiekis);

let pirmasMasyvas = [1,2,3]
let antrasMasyvas = ['pvz', 'pvz2', 'pvz3']
let treciasMasyvas = [];
console.log(pirmasMasyvas);
console.log('isvedimas pgl ID', pirmasMasyvas[1]);
console.log('elementu skaicius', pirmasMasyvas.length);
treciasMasyvas.push(8);
treciasMasyvas.push(8,7,9);
console.log('push prideda duomenu', treciasMasyvas);
treciasMasyvas.pop();
console.log('paskutinis elementas', pirmasMasyvas.length-1);

let skaiciai = [8,9,7];
console.log(skaiciai);
skaiciai.unshift(-2);
console.log(skaiciai);
skaiciai.splice(0,0,-10);
console.log(skaiciai);

let pirmas = [1,2,3,4];
let antras = [2,4,5,6,9];

let sujungtas = pirmas.concat(antras);
console.log(sujungtas);

let iskarpa = pirmas.slice(1,3);
console.log