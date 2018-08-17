import * as StepAPIUtil from '../util/step_api_util';
export const RECEIVE_PROJECT_STEPS = 'RECEIVE_PROJECT_STEPS';
export const RECEIVE_ALL_STEPS = 'RECEIVE_ALL_STEPS';
export const RECEIVE_STEP_ERRORS = 'RECEIVE_STEP_ERRORS';
export const REMOVE_STEP = 'REMOVE_PROJECT';


//thunks
export const fetchAllSteps = () => dispatch => (
  StepAPIUtil.fetchAllSteps().then(steps => dispatch(receiveAllSteps(steps)))
);
export const createStep = (step) => dispatch => (
  StepAPIUtil.createStep(step).then(steps => dispatch(receiveAllSteps(steps)), 
    errors => dispatch(receiveErrors(errors))
  )
);
export const deleteStep = (stepId) => dispatch => (
  StepAPIUtil.deleteStep(stepId).then(steps => dispatch(receiveAllSteps(steps)))
);
export const updateStep = (step) => dispatch => (
  StepAPIUtil.updateStep(step).then(response => dispatch(modifyStep(response)),
    errors => dispatch(receiveErrors(errors))
  )
);
//actions

const modifyStep = (step) => ({
  type: MODIFY_STEP, 
  step
});

const receiveErrors = (errors) => ({
  type: RECEIVE_STEP_ERRORS,
  errors: errors.responseJSON
});

const receiveAllSteps = (steps) => ({
  type: RECEIVE_ALL_STEPS,
  steps
});