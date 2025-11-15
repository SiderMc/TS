export default class NumberOperations {
    manager;
    constructor() {
        this.manager = new OperationManager();
    }
    addNumber(n) {
        this.manager.addOperation(n);
    }
    runAll() {
        this.manager.executeAll((num) => {
            console.log(`Виконую операцію з числом: ${num}, квадрат: ${num ** 2}`);
        });
    }
}
