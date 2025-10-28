// Задача 6. Описати тип квиток (куди, ціна, піб пасажира, дата). Створити функції для перевірки цього типу (Type Guard, Assert)
import Ticket from './Ticket.js';
const ticketData = {
    fullName: 'John Smith',
    destination: 'New York',
    price: 150,
    date: new Date(),
};
const ticket = new Ticket(ticketData);
document.body.insertAdjacentHTML('beforeend', ticket.printTicket());
