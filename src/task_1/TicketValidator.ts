import ITicket from "./ITicket.js";

export default class TicketValidator {
  static error(msg: string): never {
    throw new Error(msg);
  }

  static isTicket(value: ITicket): value is ITicket {
    return (
      typeof value === "object" &&
      value !== null &&
      typeof value.fullName === "string" &&
      typeof value.destination === "string" &&
      typeof value.price === "number" &&
      value.date instanceof Date 
    );
  }

  static assertIsTicket(data:ITicket): asserts data is ITicket {
    if (!this.isTicket(data)) {
      this.error("Неправильний тип або відсутні поля квитка!");
    }
  }
}
