import { combineReducers } from 'redux';
import session from './session_errors_reducer';
import project from './project_errors_reducer';
import steps from './step_errors_reducer';

const errorsReducer = combineReducers({
  session,
  project,
  // steps
});

export default errorsReducer;
