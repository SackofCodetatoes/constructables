import React from 'react';
import ReactDOM from 'react-dom';
import * as SessionAPI from './util/session_api_util';


document.addEventListener('DOMContentLoaded', () => {
  const root = document.getElementById('root');

  window.login = SessionAPI.login;
  window.signup = SessionAPI.signup;
  window.logout = SessionAPI.logout;

  ReactDOM.render(<h1>Welcome to Constructables</h1>, root);
});
