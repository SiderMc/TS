// Описати тип квиток (куди, ціна, піб пасажира, дата). Створити функції для перевірки цього типу (Type Guard, Assert)

interface ITicket {
  fullName: string;
  destination: string;
  price: number;
  date: Date;
}

const ticketError = (message: string): never => {
  throw new Error(message);
};

const isTicket = (data: unknown): data is ITicket => {
  return (
    !!data &&
    typeof data === 'object' &&
    'fullName' in data &&
    'destination' in data &&
    'price' in data &&
    'date' in data
  );
};

const checkTicket: (data: unknown) => asserts data is ITicket = (data) => {
  if (!isTicket(data)) {
    ticketError('Неправильний тип або відсутні поля квитка!');
  }
};

const renderTicketInfo = (data: ITicket): void => {
checkTicket(data)
  document.write(`
        <p>Імя пасажира : ${data.fullName}</p>
        <p>Місце призначення : ${data.destination}</p>
        <p>Ціна квитка : ${data.price} $</p>
        <p>Дата : ${data.date.toLocaleDateString()}</p>
        `);
};
const ticket: ITicket = {
  fullName: 'John Smith',
  destination: 'New York',
  price: 150,
  date: new Date(),
};
renderTicketInfo(ticket);
