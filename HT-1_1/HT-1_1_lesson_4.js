'use strict';

// ---- Задание № 1.1 ----
/* Сделайте в стиле es5, а затем в стиле es6
 * (по аналогии из дополнительных видео -> 3 примеры наследования -> типы на es5 и es6),
 * конструктор Product, который принимает параметры name и price,
 * сохраните их как свойства объекта.
 * Также объекты типа Product должны иметь метод make25PercentDiscount,
 * который будет уменьшать цену в объекте на 25%. Имейте в виду,
 * что метод make25PercentDiscount не должен быть внутри функции-конструктора,
 * и также не нужно создавать отдельный объект-прототип (как объект transport в уроке).
*/

// -- Решение в стиле es5 --
function Product1(name, price) {
    this.name = name;
    this.price = price;
}

Product1.prototype.make25PercentDiscount = function() {
    this.price -= this.price * 0.25;
}

let obj1 = new Product1('toster', 100);
obj1.make25PercentDiscount();
console.log(obj1);

// -- Решение в стиле es6 --
class Product2 {
    constructor(name, price) {
        this.name = name;
        this.price = price;
    }

    make25PercentDiscount() {
        this.price -= this.price * 0.25;
    }
}

let obj2 = new Product2('toster', 100);
obj2.make25PercentDiscount();
console.log(obj2);

