"use strict";
// Задача 2. Створіть union-тип для трьох типів : car (модель, власник), bus (компанія, кількість місць), airplane (швидкість, тип палива). Створити функцію, яка приймає параметр цього типу і виводить повну інформацію про об'єкт
const renderTransportInfo = (info, type) => {
    document.write(`
        <p><b>Тип транспорту:</b> ${type}</p>
        <p>${info}</p>
    `);
};
const getTransportInfo = (transport) => {
    switch (transport.type) {
        case 'Car':
            renderTransportInfo(`Модель: ${transport.model}<br>Власник: ${transport.owner}`, transport.type);
            break;
        case 'Bus':
            renderTransportInfo(`Компанія: ${transport.company}<br>Кількість місць: ${transport.seatingCapacity}`, transport.type);
            break;
        case 'Airplane':
            renderTransportInfo(`Швидкість: ${transport.speed} км/год<br>Тип палива: ${transport.fuelType}`, transport.type);
            break;
        default:
            const _exhaustiveCheck = transport;
            throw new Error('Невідомий тип транспорту');
    }
};
getTransportInfo({ type: 'Car', model: 'Toyota', owner: 'John' });
