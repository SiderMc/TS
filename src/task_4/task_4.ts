
// Задача 4. Обмеження для типів, що реалізують інтерфейс.  Створи інтерфейс Printable з методом print(): void. Опиши узагальнену функцію printAll<T extends Printable>(items: T[]), яка викликає метод print() для кожного елемента масиву.

import Order from "./Order.js";
import printAll from "./printAll.js";

const orders = [
    new Order(1, 500),
    new Order(2, 1500)
];

printAll(orders);