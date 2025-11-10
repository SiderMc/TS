import { IRenderer } from './Interfaces.js';

export default class PageRenderer {
  constructor(private renderer: IRenderer) {}
  public showPage(text: string) {
    this.renderer.render(text);
  }
}
