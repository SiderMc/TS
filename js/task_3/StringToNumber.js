export default class StringToNumber {
    transform(value) {
        const result = Number(value);
        if (isNaN(result)) {
            throw new Error(`Неможливо перетворити "${value}" на число`);
        }
        return result;
    }
}
