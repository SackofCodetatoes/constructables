import { RECEIVE_STEP_ERRORS } from '../actions/step_actions';

const stepErrorsReducer = (state = [], action) => {
  Object.freeze(state);
  
  switch (action.type) {
    case RECEIVE_STEP_ERRORS:
      return action.errors;
  
    default:
      state;
  }
}
export default stepErrorsReducer;