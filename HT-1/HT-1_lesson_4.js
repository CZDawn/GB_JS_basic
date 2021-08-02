'use strict';

// ---- Задание № 1 ----
/*
 * Написать функцию, преобразующую число в объект.
 * Передавая на вход число в диапазоне [0, 999],
 * мы должны получить на выходе объект,
 * в котором в соответствующих свойствах описаны разряды числа:
 * - единицы (в свойстве units)
 * - десятки (в свойстве tens)
 * - сотни (в свойстве hundereds)
 * Например, для числа 45 мы должны получить следующий объект:
 * {
 * units: 5, //это единицы
 * tens: 4, //это десятки
 * hundreds: 0, //это сотни
 * }
 * Если число было передано вне [0, 999] диапазона,
 * не целое число или вообще не число,
 * необходимо выдать соответствующее сообщение с помощью console.log
 * и вернуть пустой объект.
*/

// -- Решение --
function NumberToObject(userEnteredNumber) {    
    if (isNaN(userEnteredNumber)) {
        console.log('Вы ввели не число');
        return;
    } else if (!Number.isInteger(parseInt(userEnteredNumber))) {
        console.log('Не целое число');
        return;
    } else if (!(0 <= parseInt(userEnteredNumber) && parseInt(userEnteredNumber) <= 999)) {
        console.log('Число вне диапазона');
        return;
    } else {
        this.units = Math.floor(userEnteredNumber % 10);
        this.tens = Math.floor(userEnteredNumber / 10 % 10);
        this.hundreds = Math.floor(userEnteredNumber / 100 % 10);
    };
}

let obj1 = new NumberToObject(prompt('Введите целое число в диапазоне от 0 до 999'));
console.log(obj1);

