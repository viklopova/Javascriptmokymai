console.log(document);
//console.dir(document);

//let pElementHtml = document.getElementById('first-paragraph-block');
//console.log(pElementHtml);

//let firtBlock = document.querySelector('.first');
//console.log(firtBlock);

//let allBlocks = document.querySelectorAll('.block');
//console.log(allBlocks);

//let firtParagraph = document.querySelector('.paragraph');
//console.log(firtParagraph);

//let firstParagraphInBlock = firtBlock.querySelector('.paragraph');
//console.log(firstParagraphInBlock);

//console.log(firtBlock.nextElementSibling);
//console.log(firtBlock.previousElementSibling);  
//console.log(firtBlock.parentElement);
//console.log(firtBlock.parentNode);

//let firstBlock = document.querySelector('.first');
//console.log(firstBlock);

//setTimeout(() => {
    //firstBlock.innerHTML = '<h2>Labas rytas!</h2>';
    //firstBlock.innerText = 'Labas rytas!';}//, 1000);

//console.log(firstBlock);

//let div = document.createElement('div');
//div.textContent = 'Naujas elementas';

let button = document.querySelector('button');
button.addEventListener('click', () => {
    alert('Paspaudei mygtuka');
});

button.addEventListener('mouseenter', () => {
    console.log('Ivyko mouse eventas');
});

document.addEventListener('keypress', (event) => {
    console.log(event);
});
console.log(button);

let allBlocks = document.querySelectorAll('.paragraph');
console.log(allBlocks); 


allBlocks.forEach((block) => {
    block.style.csstext = 'color: red';
    blockaddEventListener('mouseenter', () => {
        block.style.cssText = 'color: blue';
    });
    block.addEventListener('mouseleave', () => {
        block.style.cssText = 'color: blue';
    });
});
