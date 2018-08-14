import React from 'react';
import NavBar from './navbar';
import { connect } from 'react-redux';
import { clearSessionErrors } from '../actions/session_actions';

const mapStateToProps = (state, ownProps) => ({

});

const mapDispatchToProps = dispatch => ({
  clearSessionErrors: () => dispatch(clearSessionErrors())
});

export default connect(mapStateToProps, mapDispatchToProps)(NavBar);