export default class TicketValidator {
    static error(msg) {
        throw new Error(msg);
    }
    static isTicket(value) {
        return (typeof value === "object" &&
            value !== null &&
            typeof value.fullName === "string" &&
            typeof value.destination === "string" &&
            typeof value.price === "number" &&
            value.date instanceof Date);
    }
    static assertIsTicket(data) {
        if (!this.isTicket(data)) {
            this.error("Неправильний тип або відсутні поля квитка!");
        }
    }
}
