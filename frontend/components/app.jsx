import React from 'react';
import ProfileContainer from './profile/profile_container';
import NavBar from './navbar';
import NavBarContainer from './navbar_container';
import { Route } from 'react-router-dom';
import { AuthRoute } from '../util/route_util'
import LoginFormContainer from './session/login_form_container';
import SignupFormContainer from './session/signup_form_container';
import ProjectIndexContainer from './project/project_index_container';
import ProjectShowContainer from './project/project_show_container';
import Switch from '../../node_modules/react-router-dom/Switch';
import ProjectNewFormContainer from './project/project_new_container';
import ProjectEditFormContainer from './project/project_edit_container';
import Splash from "./splash"
import SplashContainer from './splash_container';


const App = () => (
  <div>
    <div className='content'>
      <header>
        <NavBarContainer />
        <div className="spacer"> <span className= 'motto'>A guide to anything!</span> </div>
      </header>

      <Switch>
        <Route exact path="/projects/" component={ProjectIndexContainer} />
        <Route exact path="/api/projects/:projectId" component={ProjectShowContainer}/>
        <Route exact path="/projects/search/" component={ProjectIndexContainer} />
        <Route exact path="/new/project/" component={ProjectNewFormContainer} />
        <Route exact path="/edit/project/:projectId" component={ProjectEditFormContainer} />
        <Route exact path="/" component={SplashContainer} />
        <AuthRoute exact path="/login" component={LoginFormContainer} />
        <AuthRoute exact path="/signup" component={SignupFormContainer} />
      </Switch>

    </div>
    <footer className="footer"></footer>

    
  </div>
);


export default App;
