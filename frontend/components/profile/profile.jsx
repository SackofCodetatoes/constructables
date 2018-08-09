import React from 'react';
import { Link } from 'react-router-dom';

class Profile extends React.Component { 
  componentDidMount() {
    this.props.currentUser

  };
  
  render() {
    const { currentUser, logout } = this.props;
    const greetUser = () => (
      <div className="profile-container">
        <label>{currentUser.username}
          <img className="profile-logo" width={'64px'}
            src={"https://i.kym-cdn.com/entries/icons/original/000/000/142/feelsgoodman.png"}
          />
        </label>
        <button onClick={() => logout()}>Logout</button>
      </div>
    );
    const noUser = () => (
      <div className="profile-container">
        <Link className="session-link" to="/login">Login</Link> | <Link className="session-link" to="/signup">Sign Up</Link> 
      </div>
    );

    return currentUser ? greetUser() : noUser();
  }
}
export default Profile;