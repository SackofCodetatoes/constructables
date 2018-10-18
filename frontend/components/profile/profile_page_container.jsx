import ProfilePage from './profile_page';
import { connect } from 'react-redux';
import { searchAllProjects } from '../actions/project_actions';

const mapStateToProps = (state, ownProps) => {
  const search = {
    keywords: '',
    type: 'userProjects',
  }

  return { search }
};

const mapDispatchToProps = dispatch => ({
  searchUserProjects: (searchObj) => dispatch(searchAllProjects(searchObj)),
});

export default connect(mapStateToProps, mapDispatchToProps)(ProfilePage);