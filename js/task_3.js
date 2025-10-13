"use strict";
// Задача 3. Вводиться номер місяця або назва місяця. Створити функцію, яка повинна повертати номер пори року (1-4) якщо передаємо число, або назву пори року, якщо було введено назву місяця. Використати перевантаження функцій.
const monthList = [
    'january',
    'february',
    'march',
    'april',
    'may',
    'june',
    'july',
    'august',
    'september',
    'october',
    'november',
    'december',
];
var Seasons;
(function (Seasons) {
    Seasons[Seasons["Winter"] = 0] = "Winter";
    Seasons[Seasons["Spring"] = 1] = "Spring";
    Seasons[Seasons["Summer"] = 2] = "Summer";
    Seasons[Seasons["Autumn"] = 3] = "Autumn";
})(Seasons || (Seasons = {}));
function getMonth(month) {
    if (typeof month === 'number') {
        if (month >= 3 && month <= 5)
            return Seasons.Spring + 1;
        else if (month >= 6 && month <= 8)
            return Seasons.Summer + 1;
        else if (month >= 9 && month <= 11)
            return Seasons.Autumn + 1;
        else if ((month >= 1 && month <= 2) || month === 12)
            return Seasons.Winter + 1;
    }
    if (typeof month === 'string') {
        const normalizeMonth = monthList.indexOf(month.toLowerCase()) + 1;
        if (normalizeMonth >= 3 && normalizeMonth <= 5)
            return Seasons[Seasons.Spring];
        else if (normalizeMonth >= 6 && normalizeMonth <= 8)
            return Seasons[Seasons.Summer];
        else if (normalizeMonth >= 9 && normalizeMonth <= 11)
            return Seasons[Seasons.Autumn];
        else if ((normalizeMonth >= 1 && normalizeMonth <= 2) || normalizeMonth === 12)
            return Seasons[Seasons.Winter];
    }
    throw new Error('Invalid month ');
}
document.write(`<p>The season number is ${getMonth(6)}</p>`);
document.write(`<p>The season is ${getMonth("august")}</p>`);
