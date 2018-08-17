import { connect } from 'react-redux';
import { createProject } from '../../actions/project_actions';
import { createStep } from '../../actions/step_actions';
import ProjectForm from './project_form';


const mapStateToProps = (state, ownProps) => {
  const project = {
    title: '',
    description: '',
    user_id: state.session.id,
  } 
  const steps = {};
  const errors = state.errors.project;
  // const stepErrors = state.errors.step;
  const formType = 'new';
  const currentUserId = state.session.id;
  return { project, steps, errors, formType, currentUserId } ;
};

const mapDispatchToProps = (dispatch, ownProps) => ({
  processForm: (project) => dispatch(createProject(project)),
  newStep: (step) => dispatch(createStep(step)),
  editStep: () => dispatch()
});

export default connect(mapStateToProps, mapDispatchToProps)(ProjectForm);