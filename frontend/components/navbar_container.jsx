import React from 'react';
import NavBar from './navbar';
import { connect } from 'react-redux';
import { clearSessionErrors } from '../actions/session_actions';
import { searchAllProjects } from '../actions/project_actions';

const mapStateToProps = (state, ownProps) => {
  const search = {
    keywords: '',
  }

  return { search }
};

const mapDispatchToProps = dispatch => ({
  clearSessionErrors: () => dispatch(clearSessionErrors()),
  processSearch: (search) => dispatch(searchAllProjects(search))
});

export default connect(mapStateToProps, mapDispatchToProps)(NavBar);