import * as StepAPIUtil from '../util/step_api_util';
export const RECEIVE_PROJECT_STEPS = 'RECEIVE_PROJECT_STEPS';
export const RECEIVE_ALL_STEPS = 'RECEIVE_ALL_STEPS';
export const REMOVE_STEP = 'REMOVE_PROJECT';

//thunks
export const fetchAllSteps = () => dispatch => (
  StepAPIUtil.fetchAllSteps().then(steps => dispatch(receiveAllSteps(steps)))
);
export const createStep = (step) => dispatch => (
  StepAPIUtil.createStep(step).then(steps => {
    return dispatch(receiveAllSteps(steps));
    } 
  )
);
export const deleteStep = (stepId) => dispatch => (
  StepAPIUtil.deleteStep(stepId).then(steps => dispatch(receiveAllSteps(steps)))
);
export const updateStep = (step) => dispatch => (
  StepAPIUtil.updateStep(step).then(response => dispatch(modifyStep(response)))
)
//actions

const modifyStep = (step) => ({
  type: MODIFY_STEP, 
  step
})

const receiveAllSteps = (steps) => ({
  type: RECEIVE_ALL_STEPS,
  steps,
});