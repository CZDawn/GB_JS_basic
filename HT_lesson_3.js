'use strict';

// ---- Задание № 1 ----
/* С помощью цикла for написать алгоритм для вывода чисел
 * (выводите в консоль, с помощью console.log) от 0 до 10 включительно,
 * чтобы результат выглядел так:
 * 0 – это ноль
 * 1 – нечетное число
 * 2 – четное число
 * 3 – нечетное число
 * ...
 * 10 – четное число
*/
for (let i = 0; i < 11; i++) {
    if (i == 0) {
        console.log(`${i} - это ноль`);
    } else if (i % 2 == 0) {
        console.log(`${i} - четное число`);
    } else {
        console.log(`${i} - нечетное число`);
    }
}



// ---- Задание № 2 ----
// Выведите в консоль значения, указанные рядом с комментариями:  
const post = {
    author: "John", //вывести этот текст
    postId: 23,
    comments: [
        {
            userId: 10,
            userName: "Alex",
            text: "lorem ipsum",
            rating: {
                likes: 10,
                dislikes: 2 //вывести это число
            }
        },
        {
            userId: 5, //вывести это число
            userName: "Jane",
            text: "lorem ipsum 2", //вывести этот текст
            rating: {
                likes: 3,
                dislikes: 1 
            }
        },
    ]
};
// -- Ответ --
console.log(post.author);
for (let comment of post.comments) {
    if (comment.userName == 'Alex') {
        console.log(comment.rating.dislikes);
    }
    if (comment.userName == 'Jane') {
        console.log(comment.userId);
        console.log(comment.text);
    }
};



// ---- Задание № 3 ----
/* Перед вами находится массив с продуктами,
 * сегодня распродажа и вам нужно на каждый товар применить скидку 15%,
 * можете использовать метод forEach
*/
const products = [
    {
        id: 3,
        price: 200,
    },
    {
        id: 4,
        price: 900,
    },
    {
        id: 1,
        price: 1000,
    },
];
// -- Ответ --
products.forEach(function (product) {
    product.price = product.price - (product.price * 15 / 100);
});
console.log(products);



// ---- Задание № 4 ----
/* Перед вами находится массив с продуктами в интернет-магазине. Вам нужно:
 * 1. Получить все товары, у которых есть фотографии, можете использовать метод filter
 * 2. Отсортируйте товары по цене (от низкой цены к высокой), можете использовать метод sort.
*/
const products_2 = [
    {
        id: 3,
        price: 127,
        photos: [
            "1.jpg",
            "2.jpg",
        ]
    },
    {
        id: 5,
        price: 499,
        photos: [] 
    },
    {
        id: 10,
        price: 26,
        photos: [
            "3.jpg"
        ]   
    },
    {
        id: 8,
        price: 78,
    },
];

// -- Ответ по пункту № 1 --
let productsWithPhotos = products_2.filter(function (product) {
    return 'photos' in product && product.photos.length > 0; 
});
console.log(products_2);
console.log(productsWithPhotos);

// -- Ответ по пункту № 2 --
products_2.sort(function (product_1, product_2) {
    if (product_1.price > product_2.price) {
        return 1;
    };
    if (product_2.price > product_1.price) {
        return -1;
    };
    return 0;
});
console.log(products_2);



// ---- Задание № 5 ----
// Вывести с помощью цикла for числа от 0 до 9, НЕ используя тело цикла.
for (let i = 0; i < 9; console.log(i + 1), i++) {};



// ---- Задание № 6 ----
/* Нарисовать горку с помощью console.log (используя цикл for),
 * как показано на рисунке, только у вашей горки должно быть 20 рядов, а не 5:
 * x
 * xx
 * xxx
 * xxxx
 * xxxxx
*/
// -- Ответ --
for (let i = 0; i <20; i++) {
    console.log('x'.repeat(i+1));
};

