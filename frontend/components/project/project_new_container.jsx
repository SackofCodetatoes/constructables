import { connect } from 'react-redux';
import { createProject } from '../../actions/project_actions';
import { createStep } from '../../actions/step_actions';
import ProjectForm from './project_form';


const mapStateToProps = (state, ownProps) => ({
  errors: state.errors.project,
  formType: 'new',
  currentUserId: state.session.id
});

const mapDispatchToProps = (dispatch, ownProps) => ({
  processForm: (project) => dispatch(createProject(project)),
  processStep: (step) => dispatch(createStep(step))
});

export default connect(mapStateToProps, mapDispatchToProps)(ProjectForm);