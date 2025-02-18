let buttonBack = document.querySelector('.selected-image button#back');
let buttonNext = document.querySelector('.selected-image button#next');

let cardNow = 1;
let cardCount = 5;

buttonBack.addEventListener('click', () => {
    if (cardNow == 1) {
        cardNow = cardCount;
    } else {
        cardNow--;
    }

document.querySelector('.card.active').classList.remove('active');
document.querySelector('.card-item' + imageNow).classList.add('active');

});

buttonNext.addEventListener('click', () => {
    if (cardNow == cardCount) {
        cardNow = 1;
    } else {
        cardNow++;
    }

document.querySelector('.card.active').classList.remove('active');
document.querySelector('.card-item' + imageNow).classList.add('active');
});

let elements = document.querySelectorAll('.image-gallery .card');

elements.forEach(element => {
    element.addEventListener('click', event => {
        let selectedCardNumber = [...element.classList].find(element => element.includes('card-item'));
        document.querySelector('.image-gallery .card.active').classList.remove('active');
        element.classList.add('active');
    } );    
});