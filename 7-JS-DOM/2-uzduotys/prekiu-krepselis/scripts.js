function initProductsValue() {
    return [
        {
            id: 'sim-card',
            name: 'Sim kortele',
            price: 2.00,
            quantity: 1,
            imgUrl: 'img/prod1.png'
        },
        {
            id: 'phone',
            name: 'Telefonas',
            price: 1200.00,
            quantity: 1,
            imgUrl: 'img/prod2.png'
        },
        {
            id: 'sd-card',
            name: 'SD kortele',
            price: 35.00,
            quantity: 2,
            imgUrl: 'img/prod3.png'
        }
    ].map(item => {
        return {
            ...item,
            finalPrice: countFinalPrice(item.price, item.quantity)
        }
    });;
}

function countFinalPrice(price, quantity) {
    return price * quantity;
}

function countFinalOrderPrice(items) {
    let sum = 0;
    items.forEach(item => {
        sum += item.finalPrice;
    })

    return sum;
}

function refreshBasket() {
    products = initProductsValue();
    productListHtml.innerHTML = generateProductsHTML(products);
    finalOrderPrice.innerHTML = countFinalOrderPrice(products).toFixed(2) + ' eur';
}

function onDeleteButtonClick(id) {
    // pasalinti produkta is product listo
    products = products.filter(product => product.id !== id)
    // 1 budas - istrinti div dali is html

    // 2 budas - atnaujinti krepseliu sarasa
    productListHtml.innerHTML = generateProductsHTML(products);
    finalOrderPrice.innerHTML = countFinalOrderPrice(products).toFixed(2) + ' eur';
}

function onRemoveButtonClick(id) {
    // atnaujinti - kieki, bendra kaina, viso uzsakymo suma
    // atnaujinti products masyva
    finalOrderPrice.innerHTML = countFinalOrderPrice(products).toFixed(2) + ' eur';
    console.log(id)
}

function onAddButtonClick(id) {
    finalOrderPrice.innerHTML = countFinalOrderPrice(products).toFixed(2) + ' eur';
    console.log(id)
}

function generateProductsHTML(products) {
    let finalHtml = '';

    if (products.length) {
        products.forEach(product => {
            finalHtml += `
                <div class="row ${product.id} product-item">
                    <div class="col-4 product-name">
                        <img src="${product.imgUrl}">
                        <p> ${product.name}</p>
                    </div>
                    <div class="col-3"><p> ${product.price} eur</p></div>
                    <div class="col-3">
                        <p class="quantity-section">
                            <button class="remove-item" onClick="onRemoveButtonClick('${product.id}')">-</button>
                            <span class="quantity">${product.quantity}</span>
                            <button class="add-item" onClick="onAddButtonClick('${product.id}')">+</button>
                        </p>
                    </div>
                    <div class="col-2">
                        <p class="final-price-section">
                            <span class="final-price"> ${product.finalPrice} eur</span>
                            <button class="delete-item" onClick="onDeleteButtonClick('${product.id}')">
                                <i class="bi bi-trash"></i>
                            </button>
                        </p>
                    </div>
                </div>
            `;
        });
    } else {
        finalHtml = '<div class="col-12"> Jusu krepselis yra tuscias</div>';
    }

    return finalHtml;
}

let products = initProductsValue();
let finalOrderPrice = document.querySelector('.basket-price .price');
let productListHtml = document.querySelector('.product-list');

finalOrderPrice.innerHTML = countFinalOrderPrice(products).toFixed(2) + ' eur';
productListHtml.innerHTML = generateProductsHTML(products);