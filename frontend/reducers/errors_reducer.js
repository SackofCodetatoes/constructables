import { combineReducers } from 'redux';
import session from './session_errors_reducer';
import project from './project_errors_reducer';
const errorsReducer = combineReducers({
  session,
  project
});

export default errorsReducer;
