let žaidėjai= ['Puolėjas', 'Gynėjas', 'Saugas', 'Įžaidėjas'];
for (let indeksas in žaidėjai) {
    console.log('indeksas: ', indeksas, ' - žaidėjo pozicija:', žaidėjai[indeksas])
}
console.log('.................................................')
let sarasas= ['Pomidorai', 'Agurkai', 'Duona', 'Arbata', 'Kava','Apelsinai'];
for (let indeksas in sarasas) {
    console.log('- ',sarasas[indeksas]);
}
console.log('.................................................')
let pazymiai = [3,5,7,2,3,10,9];
let suma=0;
for (let kiekis of pazymiai) {
    suma+=kiekis;
}
console.log('Pažymiai: ',pazymiai);
console.log('Vidurkis: ',parseFloat(suma/pazymiai.length).toFixed(2));
console.log('.................................................')
let atstumas = [68,54,110,160,180];
for (let km of atstumas) {
    if (km>150) {
        console.log(km+' atstumas didesnis nei 150');
    }
}
console.log('.................................................')
let klaida = ['aa1','aa2','aa3','aa4'];

console.log('Klaida '+klaida[0]+' sistemos klaida');
console.log('Klaida '+klaida[1]+' atminties klaida');
console.log('Klaida '+klaida[2]+' prisijungimo klaida');
console.log('.................................................')

let likuciai = [20,4,23,98,10,3];
let daliklis=5;

for (let likutis of likuciai) {
    console.log(likutis + ' uztenka ' + Math.floor(likutis/daliklis)+' dienom')
}

console.log(daliklis)