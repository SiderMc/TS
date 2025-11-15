import OperationManager from "./OperationManager.js";

export default class NumberOperations {
    private manager: OperationManager<number>;

    constructor() {
        this.manager = new OperationManager<number>();
    }

    public addNumber(n: number) {
        this.manager.addOperation(n);
    }

    public runAll() {
        this.manager.executeAll((num) => {
            console.log(`Виконую операцію з числом: ${num}, квадрат: ${num ** 2}`);
        });
    }
}