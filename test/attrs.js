/* eslint-disable no-undef */
import assert from 'assert';
import Md from 'markdown-it';
import attrs from 'markdown-it-attrs';

import fa from '../src/show/parser/fa';
// import attrs from '../src/show/parser/attrs';
import img from '../src/show/parser/img';
import cite from '../src/show/parser/cite';

describe('markdown-it', () => {
  let md, src, expected;

  it('render attrs', () => {
    md = Md().use(attrs);
    src = '# header {.style-me}';
    expected = '<h1 class="style-me">header</h1>\n';
    assert.equal(md.render(src), expected);
  });

  it('render fa', () => {
    md = Md().use(fa);
    src = '## :fa-heart-o: CSS Syntax';
    expected = '<h2><i class="fa fa-heart-o"></i> CSS Syntax</h2>\n';
    assert.equal(md.render(src), expected);
  });

  it('render image', () => {
    md = Md().use(img);
    src = '![](https://source.unsplash.com/ALtNa-uKy3M/)';
    expected = '<p><img src="https://source.unsplash.com/ALtNa-uKy3M/" alt=""></p>\n';
    assert.equal(md.render(src), expected);
  });

  it('render cite', () => {
    md = Md().use(cite);
    src = '==Marked==';
    expected = '<p><cite>Marked</cite></p>\n';
    assert.equal(md.render(src), expected);
  });

});
