"use strict";
// Задача 5.  У localStorage зберігається об’єкт у форматі JSON. Проаналізувати чи є цей об'єкт  типу Product{     title:string,     price:number }
let product = {
    title: 'Phone',
    price: 200,
};
localStorage.setItem('product', JSON.stringify(product));
const isProduct = (data) => {
    return (!!data && typeof data === 'object' && 'title' in data && 'price' in data);
};
const getProduct = () => {
    const dataStorage = localStorage.getItem('product');
    if (!dataStorage)
        return null;
    const parsedData = JSON.parse(dataStorage);
    if (isProduct(parsedData)) {
        return parsedData;
    }
    return null;
};
const renderProduct = (product) => {
    if (product) {
        document.write(`<p>Назва товару : ${product.title}</p>
    <p>Ціна товару : ${product.price}</p>`);
    }
};
renderProduct(getProduct());
