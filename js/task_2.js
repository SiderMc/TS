"use strict";
// Задача 2. Створити функцію, яка дозволяє знайти або останню цифру числа, або останній символ числа.
const getError = (message) => {
    throw new Error(message);
};
function getLastValue(val) {
    if (typeof val === 'number')
        return Math.abs(val % 10);
    else if (typeof val === 'string')
        return val[val.length - 1];
    else {
        return getError('Невідомий тип');
    }
}
const numberVal = 654577;
const stringVal = "8655455";
document.write(`<p>${getLastValue(numberVal)} : Number</p>`);
document.write(`<p>${getLastValue(stringVal)} : String</p>`);
