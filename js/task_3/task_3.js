// Задача 3. Інтерфейс для перетворювача. Створи інтерфейс Transformer<T, U> з методом transform(value: T): U. Реалізуй кілька прикладів трансформацій: — рядок у число, — число у рядок, — об’єкт у JSON.
import NumberToString from "./NumberToString.js";
import ObjectToJSON from "./ObjectToJSON.js";
import StringToNumber from "./StringToNumber.js";
const strToNum = new StringToNumber();
console.log(strToNum.transform("75568"));
const numToStr = new NumberToString();
console.log(numToStr.transform(356));
const objToJson = new ObjectToJSON();
console.log(objToJson.transform({ name: "Max", age: 33, email: "max@gmail.com" }));
