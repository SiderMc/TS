"use strict";
// Задача 1. Вводиться перший номер  місяця якоїсь пори року (3,6,9,12). Визначити пору року. Передбачити перевірку і генерувати помилку якщо некоректний місяць (1-12) і генерувати помилку якщо це не перший місяць пори року. Використати never.
var Season;
(function (Season) {
    Season["Spring"] = "\u0412\u0435\u0441\u043D\u0430";
    Season["Summer"] = "\u041B\u0456\u0442\u043E";
    Season["Autumn"] = "\u041E\u0441\u0456\u043D\u044C";
    Season["Winter"] = "\u0417\u0438\u043C\u0430";
})(Season || (Season = {}));
const monthInput = Number(prompt("Ввести перший місяць пори року (3/6/9/12)")) || 3;
const seasonError = (message) => {
    throw new Error(message);
};
const getSeason = (month) => {
    if (month < 1 || month > 12)
        seasonError("Некоректний номер місяця! Має бути від 1 до 12.");
    switch (month) {
        case 3:
            document.write(`<p>${Season.Spring}</p>`);
            break;
        case 6:
            document.write(`<p>${Season.Summer}</p>`);
            break;
        case 9:
            document.write(`<p>${Season.Autumn}</p>`);
            break;
        case 12:
            document.write(`<p>${Season.Winter}</p>`);
            break;
        default:
            seasonError("Це не перший місяць жодної пори року!");
    }
};
getSeason(monthInput);
