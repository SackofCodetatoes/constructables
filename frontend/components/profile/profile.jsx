import React from 'react';
import { Link } from 'react-router-dom';

class Profile extends React.Component { 
  componentDidMount() {
    this.props.currentUser

  };

  render() {
    const { currentUser, logout } = this.props;
    const greetUser = () => (
      <div>
        <label>{currentUser.username}
          <img className="profile-logo" width={'64px'}
            src={"https://i.kym-cdn.com/entries/icons/original/000/000/142/feelsgoodman.png"}
          />
          <button onClick={() => logout()}>Logout</button>
         </label>
      </div>
    );
    const noUser = () => (
      <div className="profile-container">
        <Link className="login" to="/login">Login</Link>
        <Link to="/signup">Sign Up</Link> 
      </div>
    );

    return currentUser ? greetUser() : noUser();
  }
}
export default Profile;