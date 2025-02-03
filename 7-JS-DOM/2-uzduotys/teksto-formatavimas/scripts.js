let tekstas = document.querySelector('.tekstas p');

document.getElementById('srifto-blokas').addEventListener('input', (ivestis) => {
    if (ivestis.target.value>0) {
        tekstas.style.fontSize = ivestis.target.value;}
    else {ivestis.target.value = 12;}
});

let mygtukai = document.querySelectorAll('.teksto-stilius button');

mygtukai.forEach((mygtukas) => {
    mygtukas.addEventListener('click', (paspaudimas) => {
        document.querySelector('.teksto-stilius button').classList.remove('aktyvus');
        paspaudimas.target.classList.add('aktyvus');

        let stilius = paspaudimas.target.attributes['data-tipas'].value;

        switch (stilius) {
            case 'paprastas':
                tekstas.style.fontStyle = 'normal';
                tekstas.style.fontWeight = 'normal';
                break;
            case 'pastorintas':
                tekstas.style.fontStyle = 'normal';
                tekstas.style.fontWeight = 'bold';
                break;
            case 'pasviras':
                tekstas.style.fontStyle = 'italic';
                tekstas.style.fontWeight = 'normal';
                break;
        }
    });
});