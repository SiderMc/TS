export default class OperationManager<T> {
    private operations: T[] = [];

    public addOperation(operation: T): void {
        this.operations.push(operation);
    }

    public executeAll(callback: (item: T) => void): void {
        for (const operation of this.operations) {
            callback(operation);
        }
    }
  }