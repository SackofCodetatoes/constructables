import { logout, clearSessionErrors } from '../../actions/session_actions';
import { connect } from 'react-redux';
import Profile from './profile';


const mapStateToProps = ({session, entities:{ users }}) => ({
  currentUser: users[session.id]
});

const mapDispatchToProps = dispatch => ({
  logout: () => dispatch(logout()),
  clearSessionErrors: () => dispatch(clearSessionErrors())
});

export default connect(mapStateToProps, mapDispatchToProps)(Profile);



