import React from 'react';
import { Link } from 'react-router-dom';

class Profile extends React.Component { 
  componentDidMount() {
    this.props.currentUser

  };
  //comment
  render() {
    const { currentUser, logout } = this.props;
    const greetUser = () => (
      <div className="profile-container">
        <button className="profile-icon clickable">
          {/* <img
            src={"https://i.kym-cdn.com/entries/icons/original/000/000/142/feelsgoodman.png"}
          /> */}
        </button>
        <div className="profile-menu">
          <label className="profile-name">{currentUser.username}</label> 
          <button className="logout-button" onClick={() => logout()}>Logout</button>
          <Link to='/new/project/'>
            <button className="profile-new-project">New Constructable »</button>
          </Link>
        </div>
      </div>
    );




    const noUser = () => (
      <div className="profile-container">
        <Link className="session-link" onClick={() => this.props.clearSessionErrors()} to="/login">Login</Link><span>   |   </span><Link className="session-link" onClick={() => this.props.clearSessionErrors()} to="/signup">Sign Up</Link> 
      </div>
    );
    return (currentUser ? greetUser() : noUser());
  }
}
export default Profile;