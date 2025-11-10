export default class CompressImage {
    compress(path) {
        console.log(`Compressing image: ${path}`);
        return `compressed_${path}`;
    }
}
