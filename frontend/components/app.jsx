import React from 'react';
import ProfileContainer from './profile/profile_container';
import NavBar from './navbar';
import { Route } from 'react-router-dom';
import LoginFormContainer from './session/login_form_container';
import SignupFormContainer from './session/signup_form_container';

const App = () =>(
  <div>
    <header>
      <NavBar/>
    </header>
    <Route exact path="/login" component={LoginFormContainer} />
    <Route exact path="/signup" component={SignupFormContainer} />
  </div>
);

export default App;
