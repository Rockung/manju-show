import getMarkdownParser from './parser';
import getTransformer from './transform';

export { default as WebSlides } from './slide';

export function parseAndTransform(text) {
  const parser = getMarkdownParser();
  const transformer = getTransformer();

  const slideTag = text.match(/\n<slide\s*(.*)>/mgi) || [];
  const contents = text.split(/\n<slide.*>/mi);
  contents.shift();

  return contents
    .map((c, i) => {
      // 生成 attr
      const html = `
${slideTag[i]}
  <div class="wrap" wrap="true">
    ${parser(c)}
  </div>
</slide>`;

      // 生成 content ast
      return transformer.process(html, { sync: true }).html;
    })
    .join('\n');
}
