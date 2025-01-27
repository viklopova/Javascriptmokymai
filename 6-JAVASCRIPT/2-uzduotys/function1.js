function prisistatyti () {
    console.log('Viktorija');
    console.log('Labai "daug" laisvo laiko turejau');
}

prisistatyti();
prisistatyti();
prisistatyti();
console.log('-------------------------')

function eilerastis () {
    console.log('Ulialia tralialia');
    console.log('Tinki vinki');
    console.log('Opapa');
    console.log('Tuzi tuzi karapuzi');
    console.log('Tinki binki marmaluzi');
};
eilerastis ();
eilerastis ();
eilerastis ();
eilerastis ();
eilerastis ();
console.log('-------------------------');
function eilute1() {
    console.log('Labas');
}
function eilute2() {
    console.log('Ka vk?');
}
function eilute3() {
    console.log('Ka vakare?');
}
eilute1();
eilute2();
eilute3();
console.log('-------------------------');

funkcija3()

function funkcija1() {
    console.log('Eilute, kuri nieko nereiskia')
}
function funkcija2() {
    console.log('Eilute, kuri kazka reiskia')
}

function funkcija3() {
    funkcija1();
    funkcija2();
}
console.log('-------------------------');

function getRandom() {
    let skaicius1 =Math.floor(Math.random() * 10) + 1;
    let skaicius2 =Math.floor(Math.random() * 10) + 1;
    let skaicius3=skaicius1+skaicius2;
    console.log(`${skaicius1} + ${skaicius2} = ${skaicius3}`)
  }

  getRandom()
  console.log('-------------------------');

  function cop () {
    let info = [
        {vardas:'Doras', pavarde:'Policininkas', amzius:'Dar negime', alga: 2000, etatas: 1, specializacija: 'Korupcija'}
    ]
    console.log(info)
  }
  cop();
  console.log('-------------------------');