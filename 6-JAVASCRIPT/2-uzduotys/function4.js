function tekstas() {
    return 'Laba diena, su vistiena'
}

console.log(tekstas());
console.log('-------------------------')
function random (skaicius) {
        return Math.floor(Math.random(skaicius)*10+1);
    }

console.log(random());
console.log(random());
console.log(random());
console.log('-------------------------')

function studentoInfo (vardas, vidurkis) {
    return `Studentas:  ${vardas} kurio vidurkis yra: ${vidurkis}`;
}

console.log(studentoInfo('Laura', 8.5));
console.log(studentoInfo('Laurynas', 9.5));
console.log(studentoInfo('Laurencijus', 6));
console.log('-------------------------')

console.log('-------------------------');

function maziausiasDaliklis (skaicius) {
    let maziausias = skaicius;
    for (let i=2; i<=skaicius; i++) {
        if (skaicius%i===0) {
            maziausias=i;
            break;
        }
    }
    return maziausias
}

for (let i=10; i<= 30; i++) {
    console.log(`${i} Skaičiaus mažiausias daliklis yra: ${maziausiasDaliklis(i)}`);
}

maziausiasDaliklis();
console.log('-------------------------');

function isPrime(num) {
    for (let i = 2; i < num; i++) {
        if (num % i === 0) {
            return false
        }
    }
    return true
}
for (let i=2; i<=15; i++) {
console.log('Skaicius ' + i + isPrime(i))
};

console.log('-------------------------');

function suma (a, b) {
    let suma = a+b;
    console.log(`${a} + ${b} = ${suma}`);
}

function skirtumas (a, b) {
    let skirtumas = a-b;
    console.log(`${a} - ${b} = ${skirtumas}`);
}

function sandauga (a, b) {
    let sandauga = a*b;
    console.log(`${a} x ${b} = ${sandauga}`);
}


function dalyba (a, b) {
    let dalyba = a/b;
    console.log(`${a} : ${b} = ${dalyba}`);
}

suma();
skirtumas();
sandauga();
dalyba ();