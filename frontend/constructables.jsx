import React from 'react';
import ReactDOM from 'react-dom';
import * as SessionAPI from './util/session_api_util';
import configureStore from './store/store';

document.addEventListener('DOMContentLoaded', () => {
  const root = document.getElementById('root');
  const store = configureStore();

  window.getState = store.getState;
  window.dispatch = store.dispatch;
  

  ReactDOM.render(<h1>Welcome to Constructables</h1>, root);
});
