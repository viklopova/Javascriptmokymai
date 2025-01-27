console.log("==============================")
console.log("======ciklas for 2 dalis =====")
console.log("      1 uzduotis       ")

let suma=0;

for( let a =0; a<=100; a++) {
    suma+=a;

}
console.log("Skaiciu nuo 1 iki 100 suma yra ",suma)


console.log("      2 uzduotis       ")
let sumaa=0;

for( let i=20; i<=50; i++) {
    if (i%2===0) {
        sumaa+=i;
        console.log(i);
        }
    }
console.log("Skaiciu nuo 20 iki 50 lyginiu skaiciu suma yra ",sumaa);

console.log("      3 uzduotis       ")
let suma1=0;

for( let a=30; a<=60; a++) {
    if (a%2!==0) {
        suma1+=a;
        console.log(a);
        }
    }
console.log("Skaiciu nuo 30 iki 60 nelyginiu skaiciu suma yra ",suma1);

console.log("      4 uzduotis       ")

let suma2=0;

for (let b=1; b<1000; b++) {
    if (b%3===0 || b%5===0) {
        suma2+=b;
    }
}
console.log ("Skaiciu nuo 1 iki 1000, kurie dalinasi is 3 ir 5 skaiciu suma yra ",suma2);

console.log("      4 uzduotis       ")

let suma3=0, suma4=0;

for (let i=1; i<=100; i++) {
    if(i%5===0 && i%3===0) {
        console.log ('FizzBuzz');
    }
    else if ( i%3===0) {
        console.log('Fizz');
    }
    else if (i%5===0) {
        console.log('Buzz');
    }
    else {
        console.log(i);
    }
}

console.log("      4/1 uzduotis       ")

let fizzbuzzTest = new Array(100)
        .fill(0)
        .map((item, index) => index+1)
        .map((item)=> {
            if (item%3===0 && item%5===0) {
                return 'FizzBuzz'
            };
            if (item%3===0) {
                return 'Fizz'
            };
            if (item%5===0) {
                return 'Buzz'
            }
            return item
        })

        .join('-')

console.log(fizzbuzzTest);

console.log("      5 uzduotis       ")

let number1=1;
let number2=1;
let n=20;
let current=0;

console.log(number1);
console.log(number2);

for(let i=2; i<=n; i++) {
    current=number1+number2;
    number1=number2;
    number2=current;
    console.log(current)

}