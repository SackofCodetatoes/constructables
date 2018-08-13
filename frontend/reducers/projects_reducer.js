import { 
  RECEIVE_ALL_PROJECTS,
  RECEIVE_PROJECT,
  RREMOVE_PROJECT
 } from '../actions/project_actions';
import { merge } from 'lodash';

const projectsReducer = (state = {}, action) => {
  Object.freeze(state);
  switch (action.type) {
    case RECEIVE_ALL_PROJECTS:
      return action.projects;
    case RECEIVE_PROJECT:
      return action.project;
  
    default:
      return state;
  }
}