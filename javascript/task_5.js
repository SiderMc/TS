"use strict";
// Задача 5. Випадковим чином 10 разів генерується число або рядок «Ок». Пірахувати чого було більше чисел чи рядків і вивести останнє значення
let countNumber = 0;
let countOk = 0;
let value;
for (let i = 0; i <= 10; i += 1) {
    value = Math.random() > 0.5 ? 1 : 'ok';
    typeof value !== 'number' ? (countOk += 1) : (countNumber += 1);
}
document.write(`<div>
    <p>Загальна кількість випадкових чисел : ${countNumber}</p>
    <p>Загальна кількість "ok" : ${countOk}</p>
    <p>Останнє значення : ${value.toString()}</p>
    </div/>
    `);
