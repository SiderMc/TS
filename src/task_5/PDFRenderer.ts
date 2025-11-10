import { IRenderer } from './Interfaces.js';

export default class PDFRenderer implements IRenderer {
  public render(content: string): void {
    console.log(`PDF content: ${content}`);
  }
}
