export default class ImageUploader {
    compressor;
    logger;
    constructor(compressor, logger) {
        this.compressor = compressor;
        this.logger = logger;
    }
    uploadImage(filePath) {
        const compressed = this.compressor.compress(filePath);
        console.log(`Uploading ${compressed} to server...`);
        this.logger.log(`File ${filePath} uploaded successfully.`);
    }
}
