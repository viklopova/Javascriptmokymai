let now = new Date();
console.log(now.toLocaleDateString('LT'));

let date= new Date (now.setDate(now.getDate()-5));
console.log(date.toLocaleDateString('LT'));

let date1 = new Date (now.setDate(now.getDate()-9));

if (date-date1>0) {
    console.log (date.toLocaleDateString('LT'), "yra velesne");
} else (date1.toLocaleDateString('LT'), "yra velesne");

console.log ('____________________________');
console.log (date.toLocaleDateString('LT'));
console.log (date1.toLocaleDateString('LT'));

let skirtumas = date-date1;

let skirtumasValandomis = date.getTime()-date1.getTime();
console.log('Skirtumas valandomis: ',skirtumasValandomis/(1000*60*60) );

let skirtumasDienomis = skirtumasValandomis/(1000*3600*24);
console.log('Skirtumas dienomis', skirtumasDienomis);

let skirtumasMenesiais = Math.floor(skirtumas/(1000*60*60*24)/365/12);
console.log('Skirtumas menesiais', skirtumasMenesiais);

let skirtumasMetais = Math.floor(skirtumas/(1000*60*60*24)/365);
console.log('Skirtumas metais', skirtumasMetais);

date.getDay()-date1.getDay()