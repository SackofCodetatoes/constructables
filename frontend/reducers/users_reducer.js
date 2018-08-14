import { RECEIVE_CURRENT_USER } from '../actions/session_actions';
import { merge } from 'lodash';
import { RECEIVE_ALL_PROJECTS, RECEIVE_PROJECT } from '../actions/project_actions';
const usersReducer = (state = {}, action) => {
  Object.freeze(state);

  switch (action.type) {
    case RECEIVE_CURRENT_USER:
      return merge({}, state, {[action.currentUser.id]: action.currentUser});
    case RECEIVE_ALL_PROJECTS:
      return merge({}, state, action.payload.users);
    case RECEIVE_PROJECT: 
      return merge({}, {[action.payload.user.id]: action.payload.user});
    // go through related files to add payload for receive_project action
    default:
      return state;
  }
}

export default usersReducer;