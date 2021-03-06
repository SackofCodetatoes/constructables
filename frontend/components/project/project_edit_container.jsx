import { connect } from 'react-redux';
import { updateProject } from '../../actions/project_actions';
import ProjectForm from './project_form';
import { updateStep, createStep } from '../../actions/step_actions';


const mapStateToProps = (state, ownProps) => {
  const defaultProject = {
    title: '',
    description: '',
    user_id: state.session.id,
    photo: null,
  } 
  const defaultSteps = {};

  const project = state.entities.projects[ownProps.match.params.projectId] || defaultProject;
  project.photo = null;
  const steps =  state.entities.steps || defaultSteps;
  if(Object.keys(steps).length > 0){
    for(let i = 0; i < Object.keys(steps).length; i++){
      steps[i].photo = null
    }
  }
  const errors = state.errors.project;
  const formType = 'edit';
  const currentUserId = state.session.id;
  return { project, steps, errors, formType, currentUserId } ;
};

const mapDispatchToProps = (dispatch, ownProps) => ({
  processForm: (project) => dispatch(updateProject(project)),
  newStep: (step) => dispatch(createStep(step)),
  editStep: (step) => dispatch(updateStep(step))

});

export default connect(mapStateToProps, mapDispatchToProps)(ProjectForm);