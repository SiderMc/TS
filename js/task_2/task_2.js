// Задача 2. Менеджер операцій. Створи клас OperationManager<T>, який зберігає список операцій будь-якого типу і має метод executeAll(callback: (item: T) => void) для виконання їх усіх.
import NumberOperations from "./NumberOperations.js";
const numOps = new NumberOperations();
numOps.addNumber(2);
numOps.addNumber(5);
numOps.addNumber(10);
numOps.runAll();
