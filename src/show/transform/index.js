import posthtml from 'posthtml';

import slide from 'nodeppt-parser/lib/tags/slide';
import note from 'nodeppt-parser/lib/tags/note';
import headerFooter from 'nodeppt-parser/lib/tags/header-footer';
import attrs from 'nodeppt-parser/lib/tags/attrs';

const buildInPosthtmlPlugins = [
  slide,
  note,
  headerFooter,
  // should placed at the end
  attrs,
];

export default function getTransformer() {
  return posthtml(buildInPosthtmlPlugins);
}
