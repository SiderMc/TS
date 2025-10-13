"use strict";
// Задача 7. Згенерувати масив нагород (золота, срібна, бронзова медалі та грамота). Підрахувати кількість кожної з нагород. Використати enum. Можете і never якось застосувати
var Rewards;
(function (Rewards) {
    Rewards["Gold"] = "\u0417\u043E\u043B\u043E\u0442\u0430 \u043C\u0435\u0434\u0430\u043B\u044C";
    Rewards["Silver"] = "\u0421\u0440\u0456\u0431\u043D\u0430 \u043C\u0435\u0434\u0430\u043B\u044C";
    Rewards["Bronze"] = "\u0411\u0440\u043E\u043D\u0437\u043E\u0432\u0430 \u043C\u0435\u0434\u0430\u043B\u044C";
    Rewards["Certificate"] = "\u0413\u0440\u0430\u043C\u043E\u0442\u0430";
})(Rewards || (Rewards = {}));
const rewardError = (message) => {
    throw new Error(message);
};
const getRandomNumber = (min, max) => {
    if (typeof min !== 'number' || typeof max !== 'number')
        rewardError('Невірний тип');
    return Math.floor(Math.random() * (max - min + 1)) + min;
};
const generateRewards = () => {
    const allRewards = [];
    let goldMedalsCount = 0;
    let silverMedalsCount = 0;
    let bronzeMedalsCount = 0;
    let certificateCount = 0;
    const value = getRandomNumber(5, 15);
    for (let i = 0; i < value; i++) {
        const randomNumber = Math.floor(Math.random() * 4) + 1;
        switch (randomNumber) {
            case 1:
                allRewards.push(Rewards.Gold);
                goldMedalsCount += 1;
                break;
            case 2:
                allRewards.push(Rewards.Silver);
                silverMedalsCount += 1;
                break;
            case 3:
                allRewards.push(Rewards.Bronze);
                bronzeMedalsCount += 1;
                break;
            case 4:
                allRewards.push(Rewards.Certificate);
                certificateCount += 1;
                break;
            default: rewardError("Інших нагород не знайдено !");
        }
    }
    document.write(`<p>All rewards: <span>${allRewards.join(', ')}</span></p>`);
    document.write(`<p>Золотих медалей: <span>${goldMedalsCount}</span></p>`);
    document.write(`<p>Срібних медалей: <span>${silverMedalsCount}</span></p>`);
    document.write(`<p>Бронзових: <span>${bronzeMedalsCount}</span></p>`);
    document.write(`<p>Грамот: <span>${certificateCount}</span></p>`);
};
generateRewards();
