export default class PageRenderer {
    renderer;
    constructor(renderer) {
        this.renderer = renderer;
    }
    showPage(text) {
        this.renderer.render(text);
    }
}
