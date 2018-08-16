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



const App = () => (
  <div>
    <header>
      <NavBarContainer />
      <div className="spacer"> <span className= 'motto'>Build anything</span> </div>
    </header>
    
   
    <Switch>
      <Route exact path="/api/projects/" component={ProjectIndexContainer} />
      <Route exact path="/api/projects/:projectId" component={ProjectShowContainer}/>
      <Route exact path="/new/project/" component={ProjectNewFormContainer} />
      <Route exact path="/edit/project/:projectId" component={ProjectEditFormContainer} />
      <AuthRoute exact path="/login" component={LoginFormContainer} />
      <AuthRoute exact path="/signup" component={SignupFormContainer} />
    </Switch>

    <footer className="footer"></footer>
  </div>
);


export default App;
