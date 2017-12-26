import Promise from 'promise-polyfill';
import React from 'react';
import { render } from 'react-dom';

import App from './components/App';

// To add to window
if (!window.Promise) {
  window.Promise = Promise;
}

const Root = () => <App />;

render(<Root />, document.querySelector('#app'));
