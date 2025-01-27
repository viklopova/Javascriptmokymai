let darbuotojas = {
    vardas: 'Lukas',
    pavarde: 'Lukaitis',
    atlyginimas: 1000,
    etatas: 1,
    pakeltasAtlyginimas: function(procentai) {
        let pakeltas = (this.atlyginimas*procentai)/100;
        return this.atlyginimas + pakeltas;
    },
    pakeistasEtatas: function(naujasEtatas) {
        return this.atlyginimas*naujasEtatas / this.etatas;
    }
}

console.log(darbuotojas);

let naujasAtlyginimas = darbuotojas.pakeltasAtlyginimas(40);
console.log('Naujas darbuotojo atlyginimas padidinus 40%: ', naujasAtlyginimas, ' EUR');
let naujasEtatas = darbuotojas.pakeistasEtatas(0.5);
console.log('Naujas atlyginimas dirbant 0.5 etato: ', naujasAtlyginimas, ' EUR')


//Praeitame skyriuje sukurtą darbuotojo objektą pasikopijuokite į naują gamyklos (factory) funkciją, kuri galėtų sukurti daugiau tokių objektų. Pritaikykite objektą, kad duomenis prisiskirtų iš funkcijos argumentų. Už funkcijos ribų sukurkite ir sudėkite keletą tokių darbuotojų į masyvą. Tuomet mėginkite prasukti ciklą pro sukurtą darbuotojų masyvą ir išsiveskite darbuotojų duomenis, taip pat, pakvieskite skaičiavimų funkcijas ir pasižiūrėkite gaunamus rezultatus.

function darbuotojai_factory(vardas, pavarde, atlyginimas, etatas) {
    return {
        vardas,
        pavarde,
        atlyginimas,
        etatas,
        isvedimas: function() {
            console.log('----------');
            console.log('DARBUOTOJO Info');
            console.log('Vardas: ', this.vardas);
            console.log('Pavarde: ', this.pavarde);
            console.log('Atlyginimas: ', this.atlyginimas, ' EUR');
            console.log('Dirba: ', this.etatas, ' etato'
            );
        }
    }
}

let darbuotojai = [
    darbuotojai_factory('Jonas', 'Petraitis', 1200, 1),
    darbuotojai_factory('Lukas', 'Jonaitis', 700, 0.5),
    darbuotojai_factory('Laura', 'Lauraite', 1600, 1),
    darbuotojai_factory('Aiste', 'Pavardaite', 1000, 0.75),
    darbuotojai_factory('Romas', 'Romytis', 900, 0.75),
    darbuotojai_factory('Rytis', 'Rytaitis', 1700, 1)
];

darbuotojai.forEach((darbuotojai)=> {
    console.log('Vardas: '+ darbuotojai.vardas);
    console.log('Pavarde: '+ darbuotojai.pavarde);
    console.log('Atlyginimas: '+ darbuotojai.atlyginimas + ' EUR');
    console.log('Etatas: '+ darbuotojai.etatas);
    console.log('________________________________________')
})



