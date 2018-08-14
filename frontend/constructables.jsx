import React from 'react';
import ReactDOM from 'react-dom';
import * as SessionAPI from './util/session_api_util';
import configureStore from './store/store';
import Root from './components/root';
import { login, signup, logout } from './actions/session_actions';
import {fetchAllProjects, fetchProject, deleteProject } from './actions/project_actions';

document.addEventListener('DOMContentLoaded', () => {
  const root = document.getElementById('root');
  let store;
  if(window.currentUser) {
    const preloadedState = {
      entities: {
        users: { [window.currentUser.id]: window.currentUser }
      }, 
      session: { id: window.currentUser.id }
      };
      store = configureStore(preloadedState);
      delete window.currentUser;
    } else {
      store = configureStore();
    }  
    window.getState = store.getState;
    window.projects = fetchAllProjects;
    window.project = fetchProject;
    window.removeProject = deleteProject;
    window.dispatch = store.dispatch;
  window.login = login;
  window.logout = logout;

  
  ReactDOM.render(<Root store={store} />, root);
});
