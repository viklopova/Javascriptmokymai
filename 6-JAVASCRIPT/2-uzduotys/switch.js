console.log('==========switch - uzduotys===============');

console.log('****** pirma uzduotis ******')

let number=2;

switch (number) {
    case 1:
      console.log("Laimėjote vandens");
      break;
    case 2:
      console.log("Laimėjote limonada");
      break;
    case 3:
      console.log("Laimėjote arbatos");
      break;
    case 4:
      console.log("Laimėjote kavos");
      break;     
    default:
      console.log("Bandykite dar kartą");
  }

console.log('****** antra užduotis ******')

let number1=39, number2=20, number3=30;

switch (number1) {
    case 1:
      console.log(number1+number2+number3);
      break;
    case 2:
      console.log(number2*number3);
      break;
    case 3:
      console.log(number1**2);
      break;
    default: 
      console.log('Tokio skaičiaus nėra')    
}

console.log('****** trečia užduotis ******')

let klaida='A5';

switch (klaida) {
    case 'A1':
      console.log('Įvestas neteisingas slaptažodis');
      break;
    case 'A2':
      console.log('Įvestas neteisingas el.paštas');
      break;
    case 'A3':
      console.log('Įvestas senas slaptažodis');
      break;
    default: 
      console.log('Bendrine klaida')    
}
//   || or
//   && and