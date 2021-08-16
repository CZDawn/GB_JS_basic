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

let featuredImgDarkButtons = document.querySelectorAll('.featuredImgDark button');
let cartIconCounter = document.querySelector('.cartIconWrap span');
let cartCount = 1;
featuredImgDarkButtons.forEach(function(button) {
    button.addEventListener('click', function() {
        cartIconCounter.innerHTML = cartCount++;

        let productName = button.parentNode.parentNode.parentNode.querySelector('.featuredName').textContent;
        let featuredPrice = button.parentNode.parentNode.parentNode.querySelector('.featuredPrice').textContent;
        let productPrice = parseInt(featuredPrice.replace(/\s/g, '').slice(1));
    })
});


