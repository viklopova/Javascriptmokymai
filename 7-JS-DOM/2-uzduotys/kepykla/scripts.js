let calculationButton = document.getElementById('calculate');

calculationButton.addEventListener('click', function() {
    //console.log('clicked');
    let employeesCount = parseInt(document.getElementById('employees-count').value);
    let employeeMakesPerDay = parseInt(document.getElementById('employee-makes-per-day').value);
    let dayReservations = parseInt(document.getElementById('day-reservations').value);

    let bakeryTotal = employeesCount * employeeMakesPerDay;
    let isBakeryGonnaMakeIt = bakeryTotal >= dayReservations;

    // let logInfo = {
    //     bakeryTotal,
    //     isBakeryGonnaMakeIt
    // };

    // console.log(logInfo);

    let resultsDiv = document.getElementById('results');
    // console.log(resultsDiv);
    resultsDiv.innerHTML = `<p><strong>Kepykla per dieną spės pagaminti: </strong> ${bakeryTotal} kepalų(-us) </p>`;

    resultsDiv.innerHTML += `<p><strong>Užsakymų per dieną: </strong> ${dayReservations} kepalai(-ų) </p>`;

    resultsDiv.innerHTML += `<p><strong>Ar kepykla spės pagaminti visus užsakymus? </strong> ${isBakeryGonnaMakeIt ? 'Taip, spės' : 'Ne, nespės'} </p>`;

});

document.getElementById('employees-count').addEventListener('keyup', function(event) {
    let inputValue = event.target.valueAsNumber;

    if (inputValue<0) {
        event.target.classList.add('error');
        event.target.nextElementSibling.classList.add('show');
    } else {
        event.target.classList.remove('error');
        event.target.nextElementSibling.classList.remove('show');
    }
}); 

document.getElementById('employee-makes-per-day').addEventListener('keyup', function(e) {
    let inputValue2 = e.target.valueAsNumber;
    console.log(inputValue2);
    if (inputValue2<0) {
        e.target.classList.add('error');
        e.target.nextElementSibling.classList.add('show');
    } else {
        e.target.classList.remove('error');
        e.target.nextElementSibling.classList.remove('show');
    }
}); 

document.getElementById('day-reservations').addEventListener('keyup', function(ev) {
    let inputValue1 = ev.target.valueAsNumber;

    if (inputValue1<0) {
        ev.target.classList.add('error');
        ev.target.nextElementSibling.classList.add('show');
    } else {
        event.target.classList.remove('error');
        event.target.nextElementSibling.classList.remove('show');
    }
}); 

document.getElementById('reset').addEventListener('click', function() {
    document.getElementById('employees-count').value = '';
    document.getElementById('employee-makes-per-day').value = '';
    document.getElementById('day-reservations').value = '';
    document.getElementById('results').innerHTML = '<p>Rezultatai bus čia</p>';
});

