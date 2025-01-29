let mygtukas = document.querySelector('button.zoom');
let puslapioTekstas = document.querySelector('body');

mygtukas.addEventListener('click', () => {
    if (puslapioTekstas.classList.contains('pritaikymas')) {
        puslapioTekstas.classList.remove('pritaikymas');
        mygtukas.textContent = 'Viską išdidinti';
    } else {
        puslapioTekstas.classList.add('pritaikymas');
        mygtukas.textContent = 'Viską grąžinti atgal';
    }
});
