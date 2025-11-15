import ITransformer from "./ITransformer.js";

export default class StringToNumber implements ITransformer<string, number> {
    transform(value: string): number {
        const result = Number(value);
        if (isNaN(result)) {
            throw new Error(`Неможливо перетворити "${value}" на число`);
        }
        return result;
    }
}