/* eslint-disable no-unused-vars */
// FIXME: Extensions may be loaded when they are needed.

import { get_json } from '../utils/network';
import registerMathJax from './mathjax';
import registerPrism from './prism';

async function get_packages() {
  let config = await get_json('manju-show-js.json');

  return config['imports'];
}

function get_url(config, key, defaultUrl) {
  if (config && config[key]) {
    return config[key];
  } else {
    return defaultUrl;
  }
}

export default async function registerExtensions() {
  let config = await get_packages();

  // Mathjax
  registerMathJax(get_url(config, 'MathJax', 'https://cdn.jsdelivr.net/npm/mathjax@3/es5/tex-mml-chtml.js'))
    .then((script) => { });

  // Prism.js
  registerPrism(get_url(config, 'Prism-Core', 'https://cdn.jsdelivr.net/npm/prismjs@1.20.0/components/prism-core.min.js'))
    .then((script) => { });
  registerPrism(get_url(config, 'Prism-Autoloader', 'https://cdn.jsdelivr.net/npm/prismjs@1.20.0/plugins/autoloader/prism-autoloader.min.js'))
    .then((script) => { });
}

export { triggerMathJax } from './mathjax';
