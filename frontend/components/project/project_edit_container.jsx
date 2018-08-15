import { connect } from 'react-redux';
import { updateProject } from '../../actions/project_actions';
import ProjectForm from './project_form';

const mapStateToProps = (state, ownProps) => ({
  errors: state.errors.project,
  formType: 'edit',
});

const mapDispatchToProps = (dispatch, ownProps) => ({
  processForm: (project) => dispatch(updateProject(project))
});

export default connect(mapStateToProps, mapDispatchToProps)(ProjectForm);