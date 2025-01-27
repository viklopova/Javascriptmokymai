console.log('=================================')
console.log('==========2 dalis================')
console.log('==========1 uzduotis=============')
let studijuProgramos = ['Matematika', 'Istorija', 'Informatika', 'Biologija', 'Geografija'];
for (let i=0; i<studijuProgramos.length; i++) {
    console.log((i+1)+'-a studiju programa yra '+ studijuProgramos[i]);
}
console.log('==========2 uzduotis=============')
let salis=['Italija', 'Lietuva', 'Latvija', 'Prancuzija', 'Vokietija'];
for (let i=0; i<salis.length; i++) {
    console.log('Salis ' + salis[i])
}
console.log('while');
let salis1=['Italija', 'Lietuva', 'Latvija', 'Prancuzija', 'Vokietija'];
let ind = 0;
while (ind<salis1.length) {
    console.log('Salis '+ salis1[ind])
    ind++
}
console.log('==========3 uzduotis=============')
let projektas = ['Saturnas', 'Neptūnas', 'Marsas', 'Venera', 'Žemė'];
let j=0;
for (let i=0; i<projektas.length; i++) {
    console.log((i+1)+'-as įgyvendintas projektas yra '+ projektas[i]);
}
console.log('WHILE')

while (j<projektas.length) {
    console.log((j+1)+ '-as įgyvendintas projektas yra '+ projektas[j])
    j++
}

console.log('==========4 uzduotis=============')
let masyvas1 = [2,5,6,7,43,11,78,4,2,25,3];
let k=0;

for (let i=0; i<masyvas1.length; i++) {
    if (masyvas1[i]>5) {console.log('Skaičius '+ masyvas1[i]+' didesnis uz 5')}
}

console.log('WHILE')

while (k<masyvas1.length) {
    if (masyvas1[k]>5) {console.log('Skaičius '+ masyvas1[k]+' didesnis uz 5')};
    k++
}

console.log('==========5 uzduotis=============')
let randomMasyvas = [];
let randomSuma = 0;

for (let i=0; i<5; i++) {
    randomMasyvas[i]=Math.floor(Math.random()*100);
    if (randomMasyvas[i]%4===0) {
        randomSuma+=randomMasyvas[i];}
        {console.log('Suma '+ randomMasyvas[i]+' sudaryta iš skaičių, kurie dalinasi iš 4')}
}

console.log('WHILE')

let m=0;

while (m<5) {
    if (randomMasyvas[m]%4===0) {
    randomSuma+=randomMasyvas[m];}
    {console.log('Suma '+ randomMasyvas[m]+' sudaryta iš skaičių, kurie dalinasi iš 4')}
    m++

}

console.log('==========6 uzduotis=============')
let randomPazymiai = [];
let randomVidurkis = 0;
let pazymiuSuma=0

for (let i=0; i<5; i++) {
    randomPazymiai[i]=Math.floor(Math.random()*10+1);
    pazymiuSuma+=randomPazymiai[i];
        {console.log('Pazymiai yra '+ randomPazymiai +',o vidurkis yra ' + pazymiuSuma/randomPazymiai.length)}
}

console.log('WHILE')
 let o=0;

 while (o<5) {
    randomPazymiai[o]=Math.floor(Math.random()*10);
    pazymiuSuma+=randomPazymiai[o];
        {console.log('Pazymiai yra '+ randomPazymiai +',o vidurkis yra ' + pazymiuSuma/randomPazymiai.length)}
    o++
 }

 console.log('==========7 uzduotis=============')
 let randomPazymiai1 = [];
 for (let i=0; i<10; i++) {
    randomPazymiai1.push(Math.floor(Math.random()*10)+1);
 }

 let pazymiuSuma1=0
 for (let i=0; i<10; i++) {
    pazymiuSuma1+=randomPazymiai1[i]
 }
 
 let randomVidurkis1=pazymiuSuma1/randomPazymiai1.length;
 let didesniVidurkio=[];
 for (let i=0; i<10; i++) {
    if (randomPazymiai1[i]> randomVidurkis1)  
     {didesniVidurkio.push(randomPazymiai1[i])}
 }

 console.log("Pazymiai ", randomPazymiai1)
 console.log('Didesni nei vidurkis ', didesniVidurkio)

 console.log('==========8 uzduotis=============')
 
 let masyvas3 = [2,5,6,7,43,11,78,4,2,25,3];
 let l=0;

 for (let i=0; i<8; i++) {
    if (masyvas3[i]%2===0) {
        console.log('Skaicius ', masyvas3, ' lyginis')
    }

 }