import TicketValidator from './TicketValidator.js';
export default class Ticket {
    ticket;
    constructor(ticket) {
        TicketValidator.assertIsTicket(ticket);
        this.ticket = ticket;
    }
    printTicket() {
        const render = `
      <p><strong>Пасажир:</strong> ${this.ticket.fullName}</p>
      <p><strong>Маршрут:</strong> ${this.ticket.destination}</p>
      <p><strong>Ціна:</strong> ${this.ticket.price}₴</p>
      <p><strong>Дата:</strong> ${this.ticket.date.toLocaleDateString()}</p>
    `;
        return render;
    }
}
