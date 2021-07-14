import React from 'react';
import ReactDOM from 'react-dom';

import { Provider } from 'react-redux';

import Market from './containers/Market';

//Store
import { store } from 'redux/store';

//!!! https://github.com/typicode/json-server/issues/813

ReactDOM.render(
  <Provider store={store}>
    <Market />
  </Provider>,
  document.getElementById('root')
);
