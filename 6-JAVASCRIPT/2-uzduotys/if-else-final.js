console.log('==========if else final - uzduotys===============');

console.log('****** pirma uzduotis ******')

let skaicius=3;

if (skaicius%2===0) {
    console.log('skaicius yra lyginis');
} else if (skaicius%5===0) {
    console.log('skaicius dalinasi is 5');
} else if (skaicius===3) {
    console.log('skaicius lygus 3');
} else {console.error}


console.log('****** antra uzduotis ******')

let x=4, y=20, z=10;

if (x===z) {
    console.log('pirmi du skaiciai lygus');
} else if (x===z) {
    console.log('pirmas ir trecias yra lygus');
} else if (z>x) {
    console.log('trecias skaicius didesnis uz pirma');
} else if (y===(2*z)) {
    console.log('antras skaicius yra dvibugai didesnis uz trecia');
} else if (x%3===0) {
    console.log('pirmas skaicius dalinasi is 3');
} else {alert('nera tinkamos salygos')}