import { RECEIVE_PROJECT_ERRORS } from '../actions/project_actions';

const projectErrorsReducer = (state = [], action) => {
  Object.freeze(state);

  switch (action.type) {
    case RECEIVE_PROJECT_ERRORS:
      return action.errors;
  
    default:
      return [];
  }
}

export default projectErrorsReducer;