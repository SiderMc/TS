// Задача 6. Описати тип квиток (куди, ціна, піб пасажира, дата). Створити функції для перевірки цього типу (Type Guard, Assert)

import ITicket from './ITicket.js';
import Ticket from './Ticket.js';

const ticketData: ITicket = {
  fullName: 'John Smith',
  destination: 'New York',
  price: 150,
  date: new Date(),
};

const ticket = new Ticket(ticketData);

document.body.insertAdjacentHTML('beforeend', ticket.printTicket());
