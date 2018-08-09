import { connect } from 'recat-redux';
import { signup } from '../../actions/session_actions';
import sessionForm from './session_form';

const mapStateToProps = (state, ownProps) => ({
  errors: [...state.errors],
  formType: 'signup',
});

const mapDispatchToProps = (dispatch, ownProps) => ({
  processForm: (user) => dispatch(signup(user)),
});

export default connect(mapStateToProps, mapDispatchToProps)(sessionForm);

