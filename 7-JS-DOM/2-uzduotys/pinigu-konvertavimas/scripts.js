let currencies = [
    {
        id:'USD',
        name: 'Doleriai',
        shortName: 'USD',
        rates : [
            {
                id: 'EUR',
                rate: 0.85
            },
            {
                id: 'RUB',
                rate: 73.5
            }
        ]
    },
    {
        id:'EUR',
        name: 'Eurai',
        shortName: 'EUR',
        rates: [
            {
                id: 'USD',
                rate: 1.18
            },
            {
                id: 'RUB',
                rate: 86.5
            }
        ]
    },
    {
        id:'RUB',
        name: 'Rubliai',
        shortName: 'RUB',
        rates: [
            {
                id: 'USD',
                rate: 0.014
            },
            {
                id: 'EUR',
                rate: 0.011
            }
        ]
    },
]

function firstDropdown(items) {
    document.querySelector('.currency-from').innerHTML += `
    <select name ="from" id="select-currency-from"> 
    ${items.map(item => {
        return `<option value="${item.id}">${item.shortName}</option>`}).join('')}
    </select>`;
};
function secondDropdown(items) {
    document.querySelector('.currency-to').innerHTML += `
    <select name ="from" id="select-currency-to"> 
    ${items.map(item => {
        return `<option value="${item.id}">${item.name}</option>`}).join('')}
    </select>`;
};

firstDropdown(currencies);
secondDropdown(currencies);


document.querySelector('.calculate').addEventListener('click', () => {
    let amount = document.getElementById('input-from-value').value;
    let from = document.getElementById('select-currency-from').value;
    let to = document.getElementById('select-currency-to').value;

    let currencyRate = currencies.find(currency => currency.id === from).rates.find(rate => rate.id === to).rate;


    let result = amount * currencyRate;
    let description = `${amount} ${from} yra ${result} ${to}`;

    let resultsDiv = document.getElementById('result-area');
    
    resultsDiv.innerHTML = `<p class="rezultatas">${result}</p>`;

    resultsDiv.innerHTML += `<p class="detalizacija">${description}</p>`;

    document.getElementById('reset').addEventListener('click', function() {
        document.getElementById('input-from-value').value = '';
        document.getElementById('select-currency-to').value = '';
        document.getElementById('select-currency-from').value = '';
        document.getElementById('result-area').innerHTML = '';
    });
});

