import IPrintable from "./IPrintable.js";

export default function printAll<T extends IPrintable>(items: T[]): void {
    for (const item of items) {
        item.print();
    }
}
