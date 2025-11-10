// Задача 5. Рендеринг сторінок:
// PageRenderer напряму залежить від HTMLTemplateRenderer, тому не можна підставити інший тип рендерингу (Markdown, PDF).
// class HTMLTemplateRendererBad {
//   render(content: string) {
//     console.log(`<html>${content}</html>`);
//   }
// }

// class PageRendererBad {
//   private renderer = new HTMLTemplateRendererBad(); // ❌ залежність від конкретного класу
//   showPage(text: string) {
//     this.renderer.render(text);
//   }
// }

import HTMLTemplateRenderer from './HTMLTemplateRenderer.js';
import PageRenderer from './PageRenderer.js';
import PDFRenderer from './PDFRenderer.js';


const pageHTML = new PageRenderer(new HTMLTemplateRenderer());
const pagePDF = new PageRenderer(new PDFRenderer());
pageHTML.showPage("Hello")
pagePDF.showPage("Hello")

