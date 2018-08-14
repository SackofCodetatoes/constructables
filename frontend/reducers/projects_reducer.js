import { 
  RECEIVE_ALL_PROJECTS,
  RECEIVE_PROJECT,
  REMOVE_PROJECT
 } from '../actions/project_actions';
import { merge } from 'lodash';

const projectsReducer = (state = {}, action) => {
  Object.freeze(state);
  let newState = {};
  switch (action.type) {
    case RECEIVE_ALL_PROJECTS:
      return merge({}, action.payload.projects);
    case RECEIVE_PROJECT:
      return merge({}, state, {[action.payload.project.id]: action.payload.project});
    case REMOVE_PROJECT: 
      newState = merge({}, state);
      delete newState[action.projectId];
      return newState;
    default:
      return state;
  }
}
export default projectsReducer;