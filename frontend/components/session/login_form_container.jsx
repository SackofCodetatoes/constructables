import { connect } from 'recat-redux';
import { login } from '../../actions/session_actions';
import sessionForm from './session_form';

const mapStateToProps = (state, ownProps) => ({
  errors: [...state.errors],
  formType: 'login',
});

const mapDispatchToProps = (dispatch, ownProps) => ({
  processForm: (user) => dispatch(login(user)), 
});

export default connect(mapStateToProps, mapDispatchToProps)(sessionForm);

