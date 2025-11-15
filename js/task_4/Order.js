export default class Order {
    id;
    total;
    constructor(id, total) {
        this.id = id;
        this.total = total;
    }
    print() {
        console.log(`Замовлення #${this.id}, сума: ${this.total} грн`);
    }
}
