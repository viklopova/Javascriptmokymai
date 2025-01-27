let array = [1,3,5,6,3,4];

let lyginiai = array.filter(reiksme=>reiksme%2===0);
console.log('Lyginiai skaičiai: ', lyginiai);
console.log('Pirmas lyginis sekoje: ', lyginiai[0]);

//kitas budas

let lyginis=array.find(skaicius=>{
    return skaicius%2===0
})
console.log(lyginis);
console.log('_________________2 užduotis________________________');
let array1 = [-2,-8,0,1,2,3,6,8]

let teigiamas=array1.find(elementas=>elementas>0);
console.log(teigiamas)

console.log('_________________3 užduotis________________________');
let array3=[2,3,-4,8,3,2,2];


let neigiamas = array3.findIndex(neigiamasskaicius=>neigiamasskaicius<0);

if(neigiamas>=0) {
    console.log('Neigiamos skaičiaus indekas: ', neigiamas)}
    else {
        console.log('Neigiamos skaičiaus sekoje nėra')
    }

console.log('_________________4 užduotis________________________');
let array4=[2,3,-4,80,3,2,2];


let daugiauUz10 = array4.findIndex(didesnis=>didesnis>=10);

if(daugiauUz10>=0) {
    console.log('Pirmas skaičius didesnis ar lygus 10 yra : ', daugiauUz10)}
    else {
        console.log('Didesnių už 10 skaičių sekoje nėra')
    }

console.log('_________________5 užduotis________________________');
let array5 = [-2,-8,12,1,2,3,6,8]

let reikiamasSkaicius=array5.find(elementas5=>elementas5%3===0 && elementas5>10);
console.log('Skaičius, kuris dalinasi iš trijų ir didesnis nei dešimt:',reikiamasSkaicius);


console.log('_________________6 užduotis________________________');

let array6=[5, 18, -3, -16, 4, 7, 9];
let reikiamasSkaicius1=array6.find(elementas6=>elementas6%2===0 && elementas6<0);
console.log('Neigiamas, lyginis skaičius sekoje yra: :',reikiamasSkaicius1);

console.log('_________________7 užduotis________________________');
let array7=[1,2,3,4,5];
let visi = array7.every (elementas =>{
    return elementas>0;
});
console.log(visi);

console.log('_________________8 užduotis________________________');
let array8=[12,2,32,4,52];
let visi1 = array8.every (elementas1 =>{
    return elementas1%2===0;
});
console.log(visi1);

console.log('_________________9 užduotis________________________');
let array9=[12,2,32,4,52];
let mazesnis = array9.some (elementas2 =>{
    return elementas2<5;
});
console.log(mazesnis); 

console.log('_________________10 užduotis________________________');
let array10=[-12,-2,32,-4,-52];
let vienasTeigiamas = array10.some (elementas3 =>{
    return elementas3>0;
});
console.log(vienasTeigiamas);

console.log('_________________11 užduotis________________________');
let array11=[-12,-2,32,-4,-52];

let stebuklas = array11.every(elementas4=>elementas4>0);
let stebuklas2= array11.some(elementas4=>elementas4%2===0);

console.log(stebuklas&&stebuklas2);


console.log('_________________12 užduotis________________________');
let array12=[-12,-2,32,-4,-52];
let radinys = array12.filter(skaicius2=> skaicius2>0)
console.log(radinys); 

console.log('_________________13 užduotis________________________');
let array13=[1,2,1,2,3,5,4,3,2];
let radinys1 = array13.filter(skaicius3=> skaicius3<=2)
console.log(radinys1); 

console.log('_________________14 užduotis________________________');
let array14=[1,2,1,2,3,5,4,3,2];
let radinys2 = array14.filter(skaicius4=> skaicius4>0 && skaicius4%2===0)
console.log(radinys2); 

console.log('_________________15 užduotis________________________');
let array15=[1,2,1,2,3,5,4,3,2];
let radinys3 = array15.filter(skaicius5=> skaicius5%2===0)
console.log('Lyginiai skaiciai:' + radinys3); 
let dvigubi = radinys3.map(x=>x*2);
console.log('Lyginiai padvigubinti skaiciai: '+dvigubi);


console.log('_________________16 užduotis________________________');
let array16=[10,7,4,9,10,8,3,4];
let geriPazymiai = array16.filter(pazimys=>pazimys>=8);
console.log("Geri pazymiai: "+geriPazymiai);
console.log('Geru pazymiu yra: '+ geriPazymiai.length);


console.log('_________________17 užduotis________________________');
let fib = [];
let n = 5;
for (let i=0; i<n; i++) {
    if (i>1) {
        fib.push(
            fib[i-1]+fib[i-2]
        );
    } else {
        fib[i] = i;
    }
}
console.log(fib)