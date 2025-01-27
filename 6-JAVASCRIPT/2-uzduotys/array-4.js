let pazymiai = [10,4,6,5,7,8,8,9];
let surikiuotiPazymiai = pazymiai.sort((a,b)=>b-a);
let iskarpa = surikiuotiPazymiai.slice(0,3);
console.log('surikiuoti pazymiai', surikiuotiPazymiai);
console.log(iskarpa);
console.log('-------------------------------------------');
let biologija = ['Mantas', 'Rokas', 'Simona', 'Laura']
let matematika = ['Lina', 'Rimas', 'Vytautas', 'Robertas', 'Julija']
let sujungtas = biologija.concat(matematika);
console.log('Sujungtas: ', sujungtas);
console.log('-------------------------------------------');
let pirmasSemestras = ['Matematika', 'Biologija', 'Geografija'];
let antrasSemestras = ['Anglu', 'Muzika', 'Kuno kultura'];
let abuSemestrai = [...pirmasSemestras, ...antrasSemestras];
console.log('Pirmas semestras', pirmasSemestras);
console.log('Antras semestrai', antrasSemestras);
console.log('Bendras: ', abuSemestrai);
console.log('-------------------------------------------');
let spalvos = ['raudona', 'geltona', 'zalia', 'melyna'];
let spalvuCopy = [...spalvos];

spalvos=[];
console.log(spalvos);
console.log(spalvuCopy);
console.log('----------------------_8_-------------------');
let miestai = ['Vilnius', 'Kaunas', 'Kretinga', 'Palanga'];
console.log('Miestai:', miestai);
let patikrintiMiesta = miestai.indexOf('Palanga');
console.log('Palangos indeksas yra: ', patikrintiMiesta);

let miestas = ['Kretinga'];
if (miestai.indexOf(miestas)===-1) {
    console.log(miestas + ' miesto sarase nera');
} else {
    console.log(miestas + ' miestas yra sarase')
}
//lastindexof isveda paskutini indeksa is masyvo
console.log('----------------------_9_-------------------');

let masyvas = [6,7,5,4,3,3,9,9,8];
let dublikatai = [];

for (let i=0; i<masyvas.length; i++) {
    for (let j=i +1; j<masyvas.length; j++) {
    if (masyvas[i] === masyvas [j]) {
        if (!dublikatai.includes (masyvas[i])) {
            dublikatai.push(masyvas[i]);
        }
    }
}
}
console.log(dublikatai);

console.log('-----------------_9_lektor-------------------');

let masyvas1=[2,4,3,2,2,3,5,7];
let yraDublikatu = false;

for (let skaicius of masyvas1) {
    if (masyvas1.indexOf(skaicius)!== masyvas1.lastIndexOf(skaicius)){
        yraDublikatu=true;
        break;
    }
    if (yraDublikatu) {
        console.log('Masyve yra dublikatu');
    } else {
        console.log('Dublikatu nera')
    }
}


console.log('----------------------_10_-------------------');

let oldArray = [1,2,3,4,5,6];
let newArray = [];
let chunkSize=2;
let kiekis = Math.ceil(oldArray.length/chunkSize);

for (let i=0; i<kiekis; i++) {
    newArray.push([oldArray[i*chunkSize], oldArray[i*chunkSize+1]])
}

console.log(newArray);

console.log('----------------------_11_-------------------');

let array1=[1,2,3,4,5];
let array2=[2,3,4,6];
let array3=[];
let sujungtas1 = [...array1,...array2]

for (let elementas of sujungtas1) {
    if(!array3.includes(elementas)) {
        array3.push(elementas)
    }
}
console.log('Pirmas masyvas: ', array1);
console.log('Antras masyvas: ', array2);
console.log('Sujungtas unikalus masyvas:', array3);

let zmones = ['Tomas', 'Greta', 'Paulius'];
console.log (zmones);
console.log(zmones.find((zmogus)=>{
    return zmogus ==='Tomas';
}))

let skaiciai2=[5,-6,4,3,-4,8];
let teigiami = skaiciai2.filter(function(skaicius) {
    return skaicius>0
})
console.log ('Teigiami skaiciai: ', teigiami)

let lyginiai = skaiciai2.filter(reiksme=>reiksme%2===0);
console.log('Lyginiai skaiciai: ', lyginiai);

let atrinkti = skaiciai2.filter(elementas=> {
    return elementas%2===0 && elementas>0
})
console.log (atrinkti);

let skaiciai3 = [2,4,5,3,1,2,3,5];
let visiskaiciai = skaiciai3.every (skaicius =>{
    return skaicius>0;
});
console.log(visiskaiciai);

let yrateigiamu = skaiciai3.some(function(skaicius) {
    return skaicius ===2;
})

console.log('Yra teigiamu: ', yrateigiamu);

let skaiciai4 = [3,5,4,3,3,4,2,4];

let dvigubi = skaiciai4.map(x=>x*2);
console.log('Dvigubi skaiciai:', dvigubi);

let triguvu = skaiciai4.map(x=>{
    return x*3;
});
console.log('Trigubi skaiciai:', triguvu);

let punktais = skaiciai4.map(x=>'<li>'+x+'</li>')
console.log('Saraso punktai',punktai);
let html = '<ul>' +punktai.join('')+'</ul>';
console.log(html)


let atrinkti1 = cssKlase
.filter(x=>x>0)
.sort()
.map(x=>`<div class='mano-klase-${x}'></div>`);
console.log(atrinkti1);
