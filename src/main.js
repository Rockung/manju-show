/* eslint-disable no-undef */

import App from './App';
import { ManjuShow } from './version';

window.ManjuShow = ManjuShow;

const app = new App({
  target: document.body,
});

export default app;
