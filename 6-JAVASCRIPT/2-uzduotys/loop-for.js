console.log ("pirma uzduotis")
console.log("++++++++++++++++++++++++++++++=")
for (let i = 0; i <= 10; i++) {
    console.log("Skaicius: ", i);
  }

console.log ("antra uzduotis")
console.log("++++++++++++++++++++++++++++++=")
for (let i=0; i<=15; i+=2) {
    console.log ("skaicius kas antras:", i)
}

console.log ("penkta uzduotis")
console.log("++++++++++++++++++++++++++++++=")
let start=1;
let end=8;
if (start<end) {
for (let i=start; i<=end; i++) {
    console.log ("skaicius ", i , " skaiciaus kvardatas yra ", Math.pow(i,2));
} 
}
else if (start>end) { 
    console.log ("reziai nevalidus")
}

console.log ("sesta uzduotis")
console.log("++++++++++++++++++++++++++++++=")
let pradzia=0;
let pabaiga= 24;

if (pradzia<pabaiga) {
for (let i=pradzia; i<=pabaiga; i++) {
    if (i % 2 === 0 || i % 8 === 0) {
    console.log ("Skaicius ", i, " yra lyginis arba dalinasi is 8");} 
}
}
else if (pradzia>pabaiga) {
    console.log ("nevalidus reziai")
}

console.log ("septinta uzduotis")
console.log("++++++++++++++++++++++++++++++=")

let number =5; n=4;
let rezultatas = 0;
for (let i=1; i<=n; i++) {
    rezultatas+= number;
    //rezultatas = rezultatas + number
}

let suma=0;

for( let a =0; i<10; i++) {
    suma+=i;
}
    console.log(suma)

let sumaa=0;

for( let a =0; i<10; i++) {
    if (i%2===0) {
        console.log(i);
        sumaa+=i;
        }
    }
        console.log(sumaa)
    