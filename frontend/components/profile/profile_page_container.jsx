import ProfilePage from './profile_page';
import { connect } from 'react-redux';
import { searchAllProjects } from '../../actions/project_actions';

const mapStateToProps = (state, ownProps) => {
  //refresh doesnt work, get request for user name
  const search = {
    keywords: parseInt(ownProps.match.params.userId),
    type: 'userProjects',
  }
  let author = state.entities.users[parseInt(ownProps.match.params.userId)];
  return { search: search, author: author }
};

const mapDispatchToProps = dispatch => ({
  searchUserProjects: (searchObj) => dispatch(searchAllProjects(searchObj)),
});

export default connect(mapStateToProps, mapDispatchToProps)(ProfilePage);