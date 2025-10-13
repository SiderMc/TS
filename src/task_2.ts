// Задача 2. Створити функцію, яка дозволяє знайти або останню цифру числа, або останній символ числа.

const getError = (message: string): never => {
  throw new Error(message);
};

function getLastValue(val: number): number;
function getLastValue(val: string): string;

function getLastValue(val: number | string): number | string {
  if (typeof val === 'number') return Math.abs(val % 10);
  else if (typeof val === 'string') return val[val.length - 1];
  else {
    return getError('Невідомий тип');
  }
}

const numberVal: number = 654577;
const stringVal: string = "8655455";

document.write(`<p>${getLastValue(numberVal)} : Number</p>`);
document.write(`<p>${getLastValue(stringVal)} : String</p>`);