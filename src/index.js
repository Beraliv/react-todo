import React from 'react';
import { render } from 'react-dom';

import registerServiceWorker from './registerServiceWorker';
import configureStore from './configureStore';

import Root from './js/components';
import './index.css';

const store = configureStore();

render(
  <Root store={store}/>,
  document.getElementById('root')
);

registerServiceWorker();
