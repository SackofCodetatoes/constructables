import React from 'react';
import ProfileContainer from './profile/profile_container';
import { Link } from 'react-router-dom'

class NavBar extends React.Component {


  render() {
    return (
      <nav className="navbar">
        <Link to='/'><img className="logo" src={window.logoUrl} /></Link>
        <Link className= 'a-link project-button' to='/api/projects/'><button className='projects-button'>Projects</button></Link>
        <ProfileContainer />

      </nav>
    );
  }
}

export default NavBar;
