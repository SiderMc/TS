"use strict";
// Задача 3. Вводиться назва продукту, ціна одиниці та кількість для 2-х видів товарів. Вивести чек про купівлю.
let products = [];
for (let i = 1; i <= 2; i++) {
    let name = prompt(`(${i}) Який продукт  ви хочете купити?`) || "Невідомий продукт";
    let price = parseInt(prompt(`(${i}) Яка ціна на продукт?`) || "0");
    let qty = parseInt(prompt(`(${i}) Скільки даного продукту ви хочете купити?`) || "0");
    const product = {
        name,
        price: isNaN(price) ? 0 : price,
        qty: isNaN(qty) ? 0 : qty,
    };
    products.push(product);
}
let total = 0;
let receiptHTML = `
      <div>
        <h3>ТОВ "АТБ-Маркет"</h3>
        <hr>
        <h4>Каса 3</h4>
        <br>
    `;
products.forEach(product => {
    const productTotal = product.price * product.qty;
    total += productTotal;
    receiptHTML += `
        <p>${product.name} — к-сть: ${product.qty}, ціна: ${product.price} грн, сума: ${productTotal} грн</p>
      `;
});
receiptHTML += `
      <hr>
      <h4>Сума: ${total} грн</h4>
      </div>
    `;
document.write(receiptHTML);
