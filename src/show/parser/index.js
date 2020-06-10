import MarkdownIt from 'markdown-it';

import sup from 'markdown-it-sup';
import br from 'markdown-it-br';

import echarts from './echarts';
import mermaid from './mermaid';

import fa from './fa';
import link from './link';

import attrs from './attrs';
import img from './img';
import cite from './cite';
import span from './span';

import container from './container';
import column from './containers/column';
import shadow from './containers/shadow';
import steps from './containers/steps';
import card from './containers/card';
import flexblock from './containers/flexblock';
import cta from './containers/cta';
import gallery from './containers/gallery';
import div from './containers/div';

export default function getMarkdownParser() {
  let md = new MarkdownIt();
  md
    .use(sup)
    .use(br)
    .use(echarts)
    .use(mermaid)
    .use(fa)
    .use(link)
    .use(attrs)
    .use(img)
    .use(cite)
    .use(span)
    .use(container, 'column', column)
    .use(container, 'shadowbox', shadow)
    .use(container, 'steps', steps)
    .use(container, 'card', card)
    .use(container, 'flexblock', flexblock)
    .use(container, 'cta', cta)
    .use(container, 'gallery', gallery)
    .use(container, 'div', div);

  return md.render.bind(md);
}
