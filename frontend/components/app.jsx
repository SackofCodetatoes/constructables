import React from 'react';
import ProfileContainer from './profile/profile_container';
import NavBar from './navbar';
import { Route } from 'react-router-dom';
import { AuthRoute } from '../util/route_util'
import LoginFormContainer from './session/login_form_container';
import SignupFormContainer from './session/signup_form_container';

const App = () =>(
  <div>
    <header>
      <NavBar/>
      <div className="spacer">Build anything</div>
    </header>
    <AuthRoute exact path="/login" component={LoginFormContainer} />
    <AuthRoute exact path="/signup" component={SignupFormContainer} />
  </div>
);

export default App;
