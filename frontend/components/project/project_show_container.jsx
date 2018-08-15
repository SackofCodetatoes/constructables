import { connect } from 'react-redux';
import { fetchProject, deleteProject } from '../../actions/project_actions';
import ProjectShow from './project_show';

const mapStateToProps = (state, ownProps) => ({
  project: state.entities.projects[ownProps.match.params.projectId],
  user: state.entities.users,
  currentUserId: state.session.id
});

const mapDispatchToProps = dispatch => ({
  fetchProject: (projectId) => dispatch(fetchProject(projectId)),
  deleteProject: (projectId) => dispatch(deleteProject(projectId))
});

export default connect(mapStateToProps, mapDispatchToProps)(ProjectShow);