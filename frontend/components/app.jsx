import React from 'react';
import ProfileContainer from './profile/profile_container';
import NavBar from './navbar';
import { Route } from 'react-router-dom';
import { AuthRoute } from '../util/route_util'
import LoginFormContainer from './session/login_form_container';
import SignupFormContainer from './session/signup_form_container';
import ProjectIndexContainer from './project/project_index_container';
const App = () =>(
  <div>
    <header>
      <NavBar/>
      <div className="spacer"> <span className= 'motto'>Build anything</span> </div>
    </header>
    
    <ProjectIndexContainer />
    <AuthRoute exact path="/login" component={LoginFormContainer} />
    <AuthRoute exact path="/signup" component={SignupFormContainer} />

    <div className="content-spacer"></div>
    <footer className="footer"></footer>
  </div>
);

export default App;
