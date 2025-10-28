import OrderStatus from './EnumOrderStatus.js';
export default class Order {
    order;
    constructor(order) {
        this.order = order;
    }
    getAmountTotal() {
        return this.order.items.reduce((acc, item) => {
            acc.totalAmount += item.quantity;
            acc.totalPrice += item.price * item.quantity;
            return acc;
        }, { totalAmount: 0, totalPrice: 0 });
    }
    getRandomId() {
        return Array.from({ length: 12 }, () => Math.floor(Math.random() * 10)).join('');
    }
    getStatus() {
        const statuses = [
            OrderStatus.PENDING,
            OrderStatus.PROCESSING,
            OrderStatus.SHIPPED,
            OrderStatus.DELIVERED,
            OrderStatus.CANCELLED,
        ];
        const randomIndex = Math.floor(Math.random() * statuses.length);
        return statuses[randomIndex];
    }
    getOrderInfo() {
        const { totalAmount, totalPrice } = this.getAmountTotal();
        const orderInfo = {
            id: this.getRandomId(),
            status: this.getStatus(),
            customer: this.order.customer,
            items: this.order.items,
            totalAmount,
            totalPrice,
        };
        return orderInfo;
    }
    printOrderInfo() {
        const { id, status, customer, totalAmount, totalPrice, items } = this.getOrderInfo();
        const itemsHTML = items
            .map((item) => `<li>${item.item} — Quantity: ${item.quantity} — Price: $${item.price}</li>`)
            .join('');
        const render = `
      <h2>Деталі замовлення</h2>
      <ul>${itemsHTML}</ul>
      <p><strong>Номер замовлення:</strong> ${id}</p>
      <p><strong>Статус:</strong> ${status}</p>
      <p><strong>Клієнт:</strong> ${customer}</p>
      <p><strong>Загальна кількість товарів:</strong> ${totalAmount}</p>
      <p><strong>Загальна сума:</strong> ${totalPrice} $</p>
    `;
        return render;
    }
}
