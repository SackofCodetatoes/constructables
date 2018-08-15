import { combineReducers } from 'redux';
import usersReducer from './users_reducer';
import projectsReducer from './projects_reducer';
import stepsReducer from './steps_reducer';

const entitiesReducer = combineReducers({
  users: usersReducer,
  projects: projectsReducer,
  steps: stepsReducer,
});

export default entitiesReducer;
