export interface ICompressor {
    compress(path: string): string;
  }
  
  export interface ILogger {
    log(message: string): void;
  }