let receptasVistiena = document.getElementById('vistiena');

receptasVistiena.addEventListener('click', function() {

    let Vistiena = {
        vistiena: 300,
        salotos: 400, 
        pomidorai: 200,
        agurkai: 100,
        padazas: 50  
    };
    console.log(Vistiena);

    let pradinisKiekis = document.getElementById('ingredientuKiekis');
    let porcijuKiekis = document.getElementById('porcijuSkaicius').value;
    let resultsDiv = pradinisKiekis*porcijuKiekis;

    resultsDiv.innerHTML = `<p><strong>Vištienos: </strong>${Vistiena.vistiena} gramų </p> <p><strong>Salotų: </strong>${Vistiena.salotos} gramų</p> <p><strong>Pomidorų: </strong>${Vistiena.pomidorai} gramų</p> <p><strong>Padažo: </strong>${Vistiena.padazas} gramų</p>`;
});

let receptasTortas = document.getElementById('tortas');

receptasTortas.addEventListener('click', function() {

    let Tortas = {
        miltu: 400,
        kiausiniu: 4, 
        sviesto: 200,
        melyniu: 100,
        grietineles: 450  
    };
    console.log(Tortas);

    let resultsDiv = document.getElementById('ingredientuKiekis');

    resultsDiv.innerHTML = `<p><strong>Miltų: </strong>${Tortas.miltu} gramų </p> <p><strong>Kiaušinių: </strong>${Tortas.kiausiniu} vienetų</p> <p><strong>Sviesto: </strong>${Tortas.sviesto} gramų</p> <p><strong>Mėlynių: </strong>${Tortas.melyniu} gramų</p> <p><strong>Grietinėlės: </strong>${Tortas.grietineles} gramų</p>`;
});