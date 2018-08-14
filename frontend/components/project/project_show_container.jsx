import { connect } from 'react-redux';
import { fetchProject } from '../../actions/project_actions';
import ProjectShow from './project_show';

const mapStateToProps = (state, ownProps) => ({
  project: state.entities.projects[ownProps.match.params.projectId],
  user: state.entities.users
});

const mapDispatchToProps = dispatch => ({
  fetchProject: (projectId) => dispatch(fetchProject(projectId))
});

export default connect(mapStateToProps, mapDispatchToProps)(ProjectShow);