/* eslint-disable no-undef */
import assert from 'assert';
import getMarkdownParser from '../src/show/parser';

describe('show getMarkdownParser', () => {
  let parser, src, expected;

  it('render attrs', () => {
    parser = getMarkdownParser();
    src = '# header {.style-me}';
    expected = '<h1 class="style-me">header</h1>\n';
    assert.equal(parser.render(src), expected);
  });

});
