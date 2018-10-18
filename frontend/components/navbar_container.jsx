import React from 'react';
import NavBar from './navbar';
import { connect } from 'react-redux';
import { clearSessionErrors } from '../actions/session_actions';
import { searchAllProjects, fetchAllProjects } from '../actions/project_actions';


const mapStateToProps = (state, ownProps) => {
  const search = {
    keywords: '',
    type: ''
  }

  return { search }
};

const mapDispatchToProps = dispatch => ({
  fetchAllProjects: () => dispatch(fetchAllProjects()),
  clearSessionErrors: () => dispatch(clearSessionErrors()),
  processSearch: (search) => dispatch(searchAllProjects(search))
});

export default connect(mapStateToProps, mapDispatchToProps)(NavBar);