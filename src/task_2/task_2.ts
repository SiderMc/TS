// 1. Система управління замовленнями в Інтернет-магазині
// Клас: Order (Замовлення). Має поля: orderId, customer, items, totalAmount. Містить методи для обчислення загальної суми та зміни статусу.
// Enum: OrderStatus (СтатусЗамовлення). Визначає можливі стани замовлення: PENDING (Очікує), PROCESSING (Обробляється), SHIPPED (Відправлено), DELIVERED (Доставлено), CANCELLED (Скасовано).

import IOrder from './IOrder.js';
import Order from './Order.js';
const mockOrder: IOrder = {
  customer: 'Emily Johnson',
  items: [
    { item: 'Samsung Smartphone', quantity: 1 ,price:300 },
    { item: 'Phone Case', quantity: 1 ,price:20 },
    { item: 'Screen Protector', quantity: 1  ,price:10},
  ],
};

const order = new Order(mockOrder);
document.body.insertAdjacentHTML("beforeend",order.printOrderInfo())
