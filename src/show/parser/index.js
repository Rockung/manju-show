// import MarkdownIt from 'markdown-it';
// import prism from 'nodeppt-parser/lib/markdown/prism';

// import sup from 'markdown-it-sup';
// import br from 'markdown-it-br';
// import katex from 'markdown-it-katex';

// import jsx from 'nodeppt-parser/lib/markdown/jsx';
// import echarts from 'nodeppt-parser/lib/markdown/echarts';
// import mermaid from 'nodeppt-parser/lib/markdown/mermaid';

// import fa from 'nodeppt-parser/lib/markdown/fa';
// import link from 'nodeppt-parser/lib/markdown/link';

// import attrs from 'nodeppt-parser/lib/markdown/attrs';
// import img from 'nodeppt-parser/lib/markdown/img';
// import cite from 'nodeppt-parser/lib/markdown/cite';
// import span from 'nodeppt-parser/lib/markdown/span';

// import container from 'nodeppt-parser/lib/markdown/container';
// import column from 'nodeppt-parser/lib/markdown/containers/column';
// import shadow from 'nodeppt-parser/lib/markdown/containers/shadow';
// import steps from 'nodeppt-parser/lib/markdown/containers/steps';
// import card from 'nodeppt-parser/lib/markdown/containers/card';
// import flexblock from 'nodeppt-parser/lib/markdown/containers/flexblock';
// import cta from 'nodeppt-parser/lib/markdown/containers/cta';
// import gallery from 'nodeppt-parser/lib/markdown/containers/gallery';
// import div from 'nodeppt-parser/lib/markdown/containers/div';

// export default function getMarkdownParser() {
//   let md = new MarkdownIt();
//   md
//     .use(prism, {defaultLanguageForUnknown: 'textile'})
//     .use(sup)
//     .use(br)
//     .use(katex)
//     .use(jsx)
//     .use(echarts)
//     .use(mermaid)
//     .use(fa)
//     .use(link)
//     .use(attrs)
//     .use(img)
//     .use(cite)
//     .use(span)
//     .use(container, 'column', column)
//     .use(container, 'shadowbox', shadow)
//     .use(container, 'steps', steps)
//     .use(container, 'card', card)
//     .use(container, 'flexblock', flexblock)
//     .use(container, 'cta', cta)
//     .use(container, 'gallery', gallery)
//     .use(container, 'div', div);

//   return md.render.bind(md);
// }

import getMDParser from 'nodeppt-parser/lib/get-markdown-parser';

export default function getMarkdownParser() {
  return getMDParser([]);
}
