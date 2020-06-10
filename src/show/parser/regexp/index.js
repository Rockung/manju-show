/*!
 * markdown-it-regexp
 * Copyright (c) 2014 Alex Kocharin
 * MIT Licensed
 */

/**
 * Module dependencies.
 */

import utils from './utils';

class Plugin {
  static counter = 0;

  constructor(regexp, replacer, id) {
    let flags = (regexp.global ? 'g' : '') + (regexp.multiline ? 'm' : '') + (regexp.ignoreCase ? 'i' : '');
    this.regexp = RegExp('^' + regexp.source, flags);
    this.replacer = replacer;
    this.id = id ? id : 'regexp-' + Plugin.counter;
    Plugin.counter++;
  }

  parse(state, silent) {
    // slowwww... maybe use an advanced regexp engine for this
    let match = this.regexp.exec(state.src.slice(state.pos));
    if (!match) return false;

    // valid match found, now we need to advance cursor
    state.pos += match[0].length;

    // don't insert any tokens in silent mode
    if (silent) return true;

    let token = state.push(this.id, '', 0);
    token.meta = { match: match };

    return true;
  }

  // eslint-disable-next-line no-unused-vars
  render(tokens, id, options, env) {
    return this.replacer(tokens[id].meta.match, utils);
  }
}


export default function (regexp, replacer, id) {
  let plugin = new Plugin(regexp, replacer, id);

  // eslint-disable-next-line no-unused-vars
  return function (md, options) {
    md.inline.ruler.push(plugin.id, plugin.parse.bind(plugin));
    md.renderer.rules[plugin.id] = plugin.render.bind(plugin);
  };
}
