console.log('==========if else - uzduotys===============');

console.log('****** pirma uzduotis ******')

let a=2, b=5, c=8;

if(a>b) {
    console.log('pirmas skaicius didesnis uz antra');
} else if (b>c) {
    console.log('antras skaicius didesnis uz trecia');
} else if (c>a) {console.log('trecias skaicius yra didesnis uz pirma');
}

if (a===b) {
    console.log('pirmi du skaiciai yra lygus');
} else if (b===c) {
    console.log ('paskutiniai skaiciai yra lygus');
} else if (a===0) {
    console.log('pirmas skaicius lygus nuliui');
}

if (b<0) {
    console.log ('antras skaicius yra neigiamas');
} else if (c>0) {
    console.log('trecias skaicius yra teigimas');
}

console.log('****** antra uzduotis ******')
let pazymys = 10;

if (pazymys===10) {
    console.log('puiku')
} else if (pazymys>=9) {
    console.log('labai gerai');
} else if (pazymys>=7) {
    console.log('gerai');
} else if (pazymys>=5) {
    console.log('patenkinamai');
} else if (pazymys<5) {
    console.log('egzaminas neislaikytas')
}
