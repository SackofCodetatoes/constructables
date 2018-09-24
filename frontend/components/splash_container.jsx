import { connect } from 'react-redux';
import Splash from './splash';
import { fetchAllProjects } from '../actions/project_actions';

const mapStateToProps = (state, ownProps) => ({

});

const mapDispatchToProps = dispatch => ({
  fetchAllProjects: () => dispatch(fetchAllProjects())
});

export default connect(mapStateToProps, mapDispatchToProps)(Splash);