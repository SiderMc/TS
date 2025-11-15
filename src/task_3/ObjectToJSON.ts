import ITransformer from "./ITransformer.js";

export default class ObjectToJSON implements ITransformer<object, string> {
    transform(value: object): string {
        return JSON.stringify(value);
    }
}