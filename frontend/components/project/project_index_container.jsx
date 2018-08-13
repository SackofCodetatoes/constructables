import { connect } from 'react-redux';
import ProjectIndex from './project_index';
import { fetchAllProjects } from '../../actions/project_actions';

const mapStateToProps = (state, ownProps) => ({
  projects: Object.values(state.entities.projects)
});

const mapDispatchToProps = dispatch => ({
  fetchAllProjects: () => dispatch(fetchAllProjects())
});

export default connect(mapStateToProps, mapDispatchToProps)(ProjectIndex)