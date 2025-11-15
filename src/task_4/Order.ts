import IPrintable from "./IPrintable.js";

export default class Order implements IPrintable {
    constructor(private id: number, private total: number) {}
    print(): void {
        console.log(`Замовлення #${this.id}, сума: ${this.total} грн`);
    }
}