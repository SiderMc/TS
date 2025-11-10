import { ICompressor, ILogger } from "./Interfaces.js";

export default class ImageUploader {
    constructor(
      private compressor: ICompressor,
      private logger: ILogger
    ) {}
  
    uploadImage(filePath: string) {
      const compressed = this.compressor.compress(filePath);
      console.log(`Uploading ${compressed} to server...`);
      this.logger.log(`File ${filePath} uploaded successfully.`);
    }
  }
  