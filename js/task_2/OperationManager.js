export default class OperationManager {
    operations = [];
    addOperation(operation) {
        this.operations.push(operation);
    }
    executeAll(callback) {
        for (const operation of this.operations) {
            callback(operation);
        }
    }
}
