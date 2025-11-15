import ITransformer from "./ITransformer.js";

export default class NumberToString implements ITransformer<number, string> {
    transform(value: number): string {
        return value.toString();
    }
}