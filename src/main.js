/* eslint-disable no-undef */

import App from './App';

import registerExtensions from './extentions';
import { ManjuShow } from './version';

// FIXME: Extensions may be loaded when they are needed.
registerExtensions();

window.ManjuShow = ManjuShow;

const app = new App({
  target: document.body,
});

export default app;
