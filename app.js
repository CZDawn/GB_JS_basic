'use strict';

let fitlerPopup = document.querySelector('.filterPopup');
let fitlerLabel = document.querySelector('.filterLabel');
let filterIcon = document.querySelector('.filterIcon');

fitlerLabel.addEventListener('click', function() {
    fitlerPopup.classList.toggle('hidden');
    fitlerLabel.classList.toggle('filterLabelPink');
    filterIcon.classList.toggle('filterIconPink');

    if (filterIcon.getAttribute('src') === 'images/filter.svg') {
        filterIcon.setAttribute('src', 'images/filterHover.svg')
    } else {
        filterIcon.setAttribute('src', 'images/filter.svg')
    }
});

let filterHeaders = document.querySelectorAll('.filterCategoryHeader');
filterHeaders.forEach(function(header) {
    header.addEventListener('click', function(event) {
        event.target.nextElementSibling.classList.toggle('hidden');
    })
});

let filterSizes = document.querySelector('.filterSizes');
let filterSizeWrap = document.querySelector('.filterSizeWrap');
filterSizeWrap.addEventListener('click', function() {
    filterSizes.classList.toggle('hidden');
});


// Решение задания

// формирование корзины покупок при добавлении в нее товара
let featuredImgDarkButtons = document.querySelectorAll('.featuredImgDark button');
let cartIconCounter = document.querySelector('.cartIconWrap span');
let cartCount = 0;
featuredImgDarkButtons.forEach(function(button) {
    button.addEventListener('click', function() {
        cartIconCounter.innerHTML = ++cartCount;
        let featuredName = getFeaturedName(button);
        let featuredPrice = getFeaturedPrice(button);
        addProductInCart(featuredName, featuredPrice);
        document.querySelector('.cartTableSum td').textContent = `
            Товаров в корзине на сумму: $${countTotalSum()}
        `;
    });
});

// Появление таблицы корзины покупок при нажатии на кнопку корзины
let cartButton = document.querySelector('.cartIcon');
cartButton.addEventListener('click', function(event) {
    event.target.parentNode.parentNode.style.position = 'relative';
    event.target.parentNode.nextElementSibling.style.display = 'block';
});

function getFeaturedName(button) {
    let cartProductEl = button.parentNode.parentNode.nextElementSibling;
    let featuredName = cartProductEl.querySelector('.featuredName');
    featuredName = featuredName.textContent.trim();
    return featuredName;
};

function getFeaturedPrice(button) {
    let cartProductEl = button.parentNode.parentNode.nextElementSibling;
    let featuredPrice = cartProductEl.querySelector('.featuredPrice');
    featuredPrice = featuredPrice.textContent.trim().slice(1);
    return featuredPrice;
};

function addProductInCart(productName, productPrice) {
    let names = document.querySelectorAll('.productNameInCart');
    let namesArray = [];
    names.forEach(function(name) {
        namesArray.push(name.outerText);
    });
    if  (namesArray.includes(productName)) {
        let productEl = document.getElementById(productName);
        let pCount = parseInt(productEl.querySelector('.productCount').textContent);
        productEl.querySelector('.productCount').textContent = ++pCount;
        productEl.querySelector('.productSum').textContent = `$${(productPrice * pCount).toFixed(2)}`;
        return;
    }
    let cartElMarkup = `
        <tr id="${productName}">
            <td class='productNameInCart'>${productName}</td>
            <td class='productCount'>1</td>
            <td class='productPrice'>$${productPrice}</td>
            <td class='productSum'>$${productPrice}</td>
        </tr>
    `;
    document.querySelector('.cartTableSum').insertAdjacentHTML('beforebegin', cartElMarkup);
};

function countTotalSum() {
    let productsSums = document.querySelectorAll('.productSum');
    let sumsArray = [];
    productsSums.forEach(function(pSum) {
        sumsArray.push(parseInt(pSum.textContent.slice(1)));
    });
    return (sumsArray.reduce(function(a, b) {return a + b})).toFixed(2);
};

let basket = document.getElementById('basket');
document.addEventListener('click', function(event) {
    let elem = event.target;
    if (elem.closest('#basket') == null && basket.style.display == 'block') {
        if (basket.dataset.visible == 'false') {
            basket.dataset.visible = 'true';
        } else {
            basket.dataset.visible = 'false';
            basket.style.display = 'none';
        }
    }
});
