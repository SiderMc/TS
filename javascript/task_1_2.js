"use strict";
// Задача 1. У localStorage зберігається об’єкт у форматі JSON з ключем «data». Проаналізувати значення поля «field2». Якщо рядок – то вивести довжину, якщо число – то визначити чи є парним.
let inputOne = prompt('Write something ');
let inputTwo = prompt('Write number or text ');
const data = {
    field1: inputOne,
    field2: inputTwo,
};
localStorage.setItem('data', JSON.stringify(data));
const parseData = () => {
    const storage = localStorage.getItem('data');
    if (storage) {
        return JSON.parse(storage);
    }
    return null;
};
const printInputInfo = () => {
    const parsedData = parseData();
    if (parsedData && parsedData.field2 != null) {
        const parsedNumber = parseInt(parsedData.field2);
        const isNumber = !isNaN(parsedNumber);
        if (isNumber) {
            parsedNumber % 2 !== 0
                ? document.write('<p>The number is odd</p>')
                : document.write('<p>The number is even<p>');
        }
        else {
            document.write(`<p>The string length is ${parsedData.field2.length}</p>`);
        }
    }
};
printInputInfo();
// Задача 2. У localStorage зберігається об’єкт у форматі JSON з ключем «data». Вивести на екран усі поля та їх значення.
const storageData = () => {
    const parsedData = parseData();
    if (parsedData) {
        document.write(`<p> Field 1: ${parsedData.field1} <br> Field 2: ${parsedData.field2}</p>`);
    }
};
storageData();
