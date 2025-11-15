"use strict";
// Задача 1. Отримання випадкового елемента.  Опиши функцію getRandom<T>, яка приймає масив будь-якого типу та повертає випадковий елемент з нього.
function getRandom(items) {
    const index = Math.floor(Math.random() * items.length);
    return items[index];
}
const dataNumber = [44, 96, 65, 86, 273, 977];
const dataString = ["apple", "kiwi", "mango", "banana"];
console.log(getRandom(dataNumber));
console.log(getRandom(dataString));
