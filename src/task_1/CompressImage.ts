import { ICompressor } from "./Interfaces.js";

export default class CompressImage implements ICompressor{
compress(path: string): string {
    console.log(`Compressing image: ${path}`);
    return `compressed_${path}`;
}
}
