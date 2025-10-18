"use strict";
// Задача 4. Є продукти: Book (має author), Electronics (має warranty), Clothes (має size). Продукти можуть бути onSale або regularPrice. Створити тип ShopProduct, який об’єднує тип продукту та його статус, використовуючи & і |.
const renderShopInfo = (product, info, price) => {
    document.write(`<p> Тип продукту : ${product}</p> ${info}
      <p>Ціна : ${price}</p>
      `);
};
const getShopInfo = (shopType) => {
    switch (shopType.type) {
        case 'Book':
            renderShopInfo(shopType.type, `<p>Автор книги : ${shopType.author}</p>`, shopType.price);
            break;
        case 'Electronics':
            renderShopInfo(shopType.type, `<p>Гарантія на  : ${shopType.warranty}</p>`, shopType.price);
            break;
        case 'Clothes':
            renderShopInfo(shopType.type, `<p>Розмір : ${shopType.size}</p>`, shopType.price);
            break;
        default:
            const _exhaustiveCheck = shopType;
            throw new Error('Невідомий тип продукту');
    }
};
getShopInfo({
    type: 'Electronics',
    warranty: '2 years',
    price: 'regularPrice',
});
