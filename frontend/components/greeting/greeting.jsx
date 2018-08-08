import React from 'react';
import { Link } from 'react-router-dom';

class Greeting extends React.Component { 
  componentDidMount() {
    this.props.currentUser
  };

  render() {
    const { currentUser, logout } = this.props;
    if(currentUser) {
      return (
        <div>
          <label>{currentUser.username}
          <img width={'64px'}
           src={"https://i.kym-cdn.com/entries/icons/original/000/000/142/feelsgoodman.png"}
           />
           </label>
        </div>
      );
    } else {
      return (
        <div>
          <Link to="/signup">Login</Link>
          <Link to="/login">Sign Up</Link> 
        </div>
      );
    };
  }
}
export default Greeting;