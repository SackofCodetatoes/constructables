import React from 'react';
import ProfileContainer from './profile/profile_container';


class NavBar extends React.Component {

  render() {
    return (
      <nav className="navbar">
        <img className="logo" src={window.logoUrl} />
        <ProfileContainer />

      </nav>
    );
  }
}

export default NavBar;
