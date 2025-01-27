console.log('_______________1__________________');
function convertCurrency(amount, fromCurrency, toCurrency) { 
    let exchangeRate = getExchangeRate(fromCurrency, toCurrency); 
    let convertCurrency = exchangeRate * amount; 
    return convertCurrency; 
  };

  function getExchangeRate(fromCurrency, toCurrency) { 
    let exchangeRates = { 
      USD: 1.04, 
      EUR: 1, 
    }; 
    return exchangeRates[toCurrency] / exchangeRates[fromCurrency]; 
  };

  let amount = Math.floor(Math.random() *100)+1;
  let fromCurrency = 'EUR';
  let toCurrency = 'USD';
  let convertAmount = convertCurrency(amount, fromCurrency, toCurrency);
  console.log(amount.toFixed(2), 'EUR');
  console.log(convertAmount.toFixed(2), 'USD');

console.log('_______________2__________________');
function convertCurrency1(amount1, fromCurrency1, toCurrency1) { 
    let exchangeRate1 = getExchangeRate1(fromCurrency1, toCurrency1); 
    let convertCurrency1 = exchangeRate1 * amount1; 
    return convertCurrency1; 
  };

function getExchangeRate1(fromCurrency1, toCurrency1) { 
    let exchangeRates1 = { 
      USD: 1, 
      EUR: 0.96, 
    }; 
    return exchangeRates1[toCurrency1] / exchangeRates1[fromCurrency1]; 
  };

  let amount1 = Math.floor(Math.random() *100)+1;
  let fromCurrency1 = 'USD';
  let toCurrency1 = 'EUR';
  let convertAmount1 = convertCurrency(amount1, fromCurrency1, toCurrency1);
  console.log(amount1.toFixed(2), 'USD');
  console.log(convertAmount1.toFixed(2), 'EUR');

console.log('_______________3__________________');

function BMI (height, weight) {
    let BMI = (weight/Math.pow(height,2)).toFixed(2);
    console.log('BMI, when weight is: ' + weight + ' kg and height is: ' + height + ' m., is: '+ BMI)
}

let height = 1.79;
let weight = 78;

BMI(height, weight);

console.log('_______________4__________________');

function ageInSeconds (age) {
    let seconds = (age*365*24*60*60);
    console.log('Age in seconds: '+seconds+ ' s')
};
function ageInMinutes (age) {
    let minutes = (age*365*24*60);
    console.log('Age in minutes: '+minutes+ ' min')
};
function ageInHours (age) {
    let hours = (age*365*24);
    console.log('Age in hours: '+hours+ ' h')
}

let age = 35
console.log ('Age is: '+age+ ' years');
ageInSeconds(age);
ageInMinutes(age);
ageInHours(age);

console.log('_______________5__________________');

function celToFahr (temperatureCEL) {
    let celtoFahr = ((temperatureCEL * 9/5)+32);
    console.log('Celcius to Fahreinheit: '+ temperatureCEL + ' celsius is '+celtoFahr+ ' F');
}

function fahToCel (temperatureFAH) {
    let fahToCel= (((temperatureFAH -32)*5/9)).toFixed();
    console.log('Fahreinheit to Celsius : '+ temperatureFAH + ' F is '+ fahToCel+ ' celsius');
}
let temperatureCEL = 25;
celToFahr(temperatureCEL);

let temperatureFAH = 66;
fahToCel(temperatureFAH);

console.log('______________6__________________');

let array = [1,2,3,5,6,7,8,9,10];

console.log(array.join('-'));


console.log('______________7__________________');

for (i = 0; i < 5; i++) {
    let row = ' ';
    for (n = 0; n <= i; n++) {
      row+='* ';
    }
    console.log(row);
  };

  console.log('______________8__________________');

  let now = new Date();
  let chritmasDate = new Date(2025, 11, 25,0)

  console.log(now.toLocaleDateString('LT'));
  console.log(chritmasDate.toLocaleDateString('LT'));

  let oneDay = 1000*60*60*24
  let remainingDays = ((chritmasDate.getTime() - now.getTime())/oneDay).toFixed();
  console.log(remainingDays);

  console.log('______________9__________________');

  let names = ['Tomas', 'Dainius', 'Paulius', 'Jonas'];

  console.log(names.join(','));
  console.log(names.join('+'));

  console.log('______________10__________________');

function generatepassword (upper, lower, number, special) {
    let characters = ' ';

    if(number) {
        characters += '0123456789'
    }

    if (upper) {
        characters += 'ABCDEFGHIJKLMNOPRSTUVZWQ'
    }

    if(lower) {
        characters += 'abcdefghijklmnoprstuvzqw'
    }

    if(special) {
        characters += '!@#$%^&*()['
    }

    let passwordCharacters = [];
    let length = 12;

    while(passwordCharacters.length < length) {
        let character = characters[Math.floor(Math.random()*characters.length)];
        passwordCharacters.push(character);
        
    }
}



