console.log('================================');
console.log('====   ciklas while uzduotys      ====');
console.log('====   1 uzduotis:          ====');

let skaicius = 0;

while (skaicius < 20) {
    skaicius++;
    console.log(skaicius);
}

console.log('====   2 uzduotis:          ====');

skaicius = 0;
while (skaicius < 50) {
    skaicius++;
    if (skaicius % 2 === 0) {
        console.log(skaicius, '- lyginis');
    } else {
        console.log(skaicius, '- nelyginis');
    }
}

console.log('====   3 uzduotis:          ====');

skaicius = 25;
while (skaicius <= 50) {
    if (skaicius % 3 === 0) {
        console.log('skaičius', skaicius, 'dalinasi iš 3');
    } else {
        console.log(skaicius);
    }
    skaicius++;
}


console.log('====   4 uzduotis:          ====');

skaicius = 1;

while (!(skaicius % 3 === 0 && skaicius % 5 === 0)) {
    console.log(skaicius);
    skaicius++;
}
console.log(skaicius, 'dalinasi iš 3 ir 5');

console.log('====   5 uzduotis:          ====');

skaicius = 1;
let rezultatas = 0;

while (skaicius <= 100) {
    if (skaicius % 2 === 0) {
        rezultatas += skaicius;
    }
    skaicius++;
}
console.log(rezultatas);

console.log('====   6 uzduotis:          ====');

skaicius = 1;

while (skaicius < 5) {
	console.log(skaicius, Math.pow(skaicius, 2));
	skaicius++;
}

console.log('====   7 uzduotis:          ====');

let randomSkaiciuKiekis = Math.floor(Math.random() * 10) + 1;
let count = 0; 

while (count < randomSkaiciuKiekis) {
    console.log(Math.floor(Math.random() * 10) + 1); 
    count++; 
}

console.log('====   8 uzduotis:          ====');

randomSkaiciuKiekis = Math.floor(Math.random() * 10) + 30;
count = 0;
let randomSkaiciuSuma=0;

while (count < randomSkaiciuKiekis) {
    let randomNumber = Math.floor(Math.random() * 10) + 5;
    console.log(randomNumber);
    count++
    randomSkaiciuSuma += randomNumber;
}
console.log(count);

console.log('====   9 uzduotis:          ====');

let voveraites = 20;
let baravykai = 15;
let musmires = 10;

console.log(`Pradinis kiekis voveraičių: ${voveraites}`);
console.log(`Pradinis kiekis baravykų: ${baravykai}`);
console.log(`Pradinis kiekis musmirių: ${musmires}`);

console.log('-------------');

while (voveraites > 0 || baravykai > 0 || musmires > 0) {
    // Generuojame atsitiktinį kiekį parduodamų prekių
    let pirkinys1 = Math.floor(Math.random() * 10);
    let pirkinys2 = Math.floor(Math.random() * 10);
    let pirkinys3 = Math.floor(Math.random() * 10);

    // Parduodame prekes, jei jų yra pakankamai
    if (voveraites > 0) {
        if (pirkinys1 > voveraites) {
            console.log(`Voveraičių nėra pakankamai.`);
        } else if (voveraites >= pirkinys1) {
            voveraites -= pirkinys1;
            console.log(`Nupirkta voveraičių: ${pirkinys1}, liko voveraičių: ${voveraites}`);
        } else {
            voveraites = 0; // Jei parduodame daugiau nei turime, nustatome kiekį į 0
            console.log(`Nupirkta voveraičių: ${pirkinys1}, liko voveraičių: ${voveraites}. Voveraitės išparduotos`);
        }
    } 
    
    if (baravykai > 0) {
        if (pirkinys2 > baravykai) {
            console.log(`Baravykų nėra pakankamai.`);
        } else if (baravykai >= pirkinys2) {
            baravykai -= pirkinys2;
            console.log(`Nupirkta baravykų: ${pirkinys2}, liko baravykų: ${baravykai}`);
        } else {
            baravykai = 0;
            console.log(`Nupirkta baravykų: ${pirkinys2}, liko baravykų: ${baravykai}. Baravykai išparduoti`);
        }
    } 
    
    if (musmires > 0) {
        if (pirkinys3 > musmires) {
            console.log(`Musmirių nėra pakankamai.`);
        } else if (musmires >= pirkinys3) {
            musmires -= pirkinys3;
            console.log(`Nupirkta musmirių: ${pirkinys3}, liko musmirių: ${musmires}`);
        } else {
            musmires = 0;
            console.log(`Nupirkta musmirių: ${pirkinys3}, liko musmirių: ${musmires}. Musmirės išparduotos.`);
        }
    } 
    console.log('------')
}
console.log('Visos prekės išparduotos.');

console.log('====   10 uzduotis:  ar skaicius pirminnis       ====');

skaicius = 6;
daliklis = skaicius;
let dalikliuSkaicius = 1;

while (daliklis > 1) {
    if (skaicius % daliklis === 0 ) {
        dalikliuSkaicius++;
    }
    daliklis--;
}

if (dalikliuSkaicius === 2) {
    console.log('pirminis')
} else {
    console.log('ne pirminis');
}

console.log('====   11 uzduotis:  faktorialas       ====');
let faktorialas = 1;
skaicius = 5;

while (skaicius > 1) {
    faktorialas *= skaicius;
    skaicius--;
}

console.log('skaiciaus:' + skaicius + ' faktorialas yra: ' + faktorialas);

console.log('================================');
console.log('====   12 uzduotis:  skaiciu reversalas      ====');

number=1234;
newNumber=0;

while (number>0) {
    newNumber=newNumber*10+number%10;
    number=Math.floor(number/10);
}

console.log(newNumber)

console.log('====   13 uzduotis:  kava      ====');

let clientAmount=2.45;
let coffeePrice=0.6;
let back=0;
let back50=0;
let back20=0;
let back10=0;
let back1=0;

if(clientAmount>coffeePrice) {
    back=clientAmount-coffeePrice;
}
    console.log('Graza ',back);

if (back>0) {
        let coin50=0;
        let coin20=0;
        let coin10=0;
        let coin1=0;
    
        coin50=Math.floor(back/0.50);
        console.log('50: ',coin50);
        coin20=Math.floor((back-coin50*0.5)/0.2);
        console.log('20: ',coin20);
        coin10=Math.floor((back-coin50*0.5-coin20*0.2)/0.1);
        console.log('10: ',coin10);
        coin1=Math.floor((back-coin50*0.5-coin20*0.2-coin10*0.1)/0.01);
        console.log('1: ',coin1);

coin50=0;
coin20=0;
coin10=0;
coin1=0;

    while (back>0) {
        if(back>=0.50) {
            coin50++;
            back-=0.50;
        }
        else if (back>=0.20) {
            coin20++;
            back-=0.20;
        }

        else if (back>=0.10) {
            coin10++;
            back-=0.10;
        }
        else if (back>0.1) {
            coin1++;
            parseFloat(back-=0.01);
        }
        }
        console.log('50: ',coin50);
        console.log('20: ',coin20);
        console.log('10: ',coin10);
        console.log('1: ',coin1);
    }

    
    

