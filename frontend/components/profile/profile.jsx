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
          <img width={'64px'}
            src={"https://i.kym-cdn.com/entries/icons/original/000/000/142/feelsgoodman.png"}
          />
          <button onClick={() => logout()}>Logout</button>
         </label>
      </div>
    );
    const noUser = () => (
      <div>
        <Link to="/signup">Login</Link>
        <Link to="/login">Sign Up</Link> 
      </div>
    );

    return currentUser ? greetUser() : noUser();
  }
}
export default Profile;