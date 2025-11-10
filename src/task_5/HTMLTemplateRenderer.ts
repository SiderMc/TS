import { IRenderer } from './Interfaces.js';

export default class HTMLTemplateRenderer implements IRenderer {
  public render(content: string): void {
    console.log(`<html>${content}</html>`);
  }
}
