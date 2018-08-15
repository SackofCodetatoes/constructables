import { 
  RECEIVE_PROJECT_STEPS,
  RECEIVE_ALL_STEPS, 
  REMOVE_STEP 
} from '../actions/step_actions';
import {
  RECEIVE_PROJECT
} from '../actions/project_actions';

import { merge } from 'lodash';

const stepsReducer = (state = {}, action) => {
  Object.freeze(state);
  let newState = {};
  switch (action.type) {
    case RECEIVE_PROJECT:
      return merge({}, state, action.payload.steps);
    default:
      return state;
  }
}
export default stepsReducer;