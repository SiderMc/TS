import OrderStatus from './EnumOrderStatus.js';
import IOrder, { IOrderDetails } from './IOrder.js';

export default class Order {
  private order: IOrder;
  constructor(order: IOrder) {
    this.order = order;
  }
  private getAmountTotal(): { totalAmount: number; totalPrice: number } {
    return this.order.items.reduce(
      (acc, item) => {
        acc.totalAmount += item.quantity;
        acc.totalPrice += item.price * item.quantity;
        return acc;
      },
      { totalAmount: 0, totalPrice: 0 }
    );
  }
  private getRandomId(): string {
    return  Array.from({ length: 12 }, () =>
      Math.floor(Math.random() * 10)
    ).join('');
  }
  private getStatus(): string {
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
  private getOrderInfo() :IOrderDetails {
    const { totalAmount, totalPrice } = this.getAmountTotal();
    const orderInfo :IOrderDetails= {
      id: this.getRandomId(),
      status: this.getStatus(),
      customer: this.order.customer,
      items: this.order.items,
      totalAmount,
      totalPrice,
    };
    return orderInfo;
  }
  public printOrderInfo():string {
    const { id, status, customer, totalAmount, totalPrice, items }: IOrderDetails =
      this.getOrderInfo();
    const itemsHTML = items
      .map(
        (item) =>
          `<li>${item.item} — Quantity: ${item.quantity} — Price: $${item.price}</li>`
      )
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

