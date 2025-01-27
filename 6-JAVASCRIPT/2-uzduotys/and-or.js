console.log('==========and or - uzduotys===============');

console.log('****** pirma uzduotis ******')

let u=3, g=6, k=10;

if (u>g && u>k) {
    console.log('Skaicius U 3 yra didziausias');
}
else if (g>u && g>k) {
    console.log('Skaicius G 6 yra didziausias')
}
else if (k>u && k>g) {
    console.log('Skaicius K 10 yra didziausias')
}

console.log('****** antra uzduotis ******')

let a1=7, b1=10, c1=4;

if (a1<b1 && a1<c1) {
    console.log('Skaicius a1 7 yra maziausias');
}
else if (b1<a1 && b1<c1) {
    console.log('Skaicius b1 10 yra maziausias');
}
else if (c1<a1 && c1<b1) {
    console.log('Skaicius c1 4 yra maziausias');
}

console.log('****** trecia uzduotis ******')

let pazymys1=8, pazymys2=10, pazymys3=4;
let vidurkis=((pazymys1+pazymys2+pazymys3)/3)

if (8<=vidurkis && vidurkis<=10) {
    console.log("Pazymio vidurkis yra tarp 8 ir 10");
}
else if (5<=vidurkis && vidurkis<8)  {
    console.log("Pazymio vidurkis yra mazesnis uz 8, bet nemazesnis negu 5");
}
else if (vidurkis<5) {
    console.log('Pazymiu vidurkis mazesnis uz 5');
}

console.log('****** ketvirta uzduotis ******')

let number10=10, number20=20;

if ((number20<=number10) || (number10===0)) {
    console.log("Pirmas skaičius didesnis už antrą arba lygus 0");
}

if (number10<=number20 || number20===5) {
    console.log("Antras skaičius didesnis už pirma arba lygus 5");
}

if (number20<=number10 && number10===20) {
    console.log("Pirmas skaičius didesnis už antrą ir lygus 20");
}

if (number10<=number20 && number20<100) {
    console.log("Antras skaičius didesnis už pirmą ir mažesnis už 100");
}
