import React from 'react';
import ProfileContainer from './profile/profile_container';


class NavBar extends React.Component {

  render() {
    return (
      <nav className="navbar">
        <h1>Constructables</h1>
        <ProfileContainer />
      </nav>
    );
  }
}

export default NavBar;
