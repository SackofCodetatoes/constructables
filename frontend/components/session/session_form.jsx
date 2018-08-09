import React from 'react';
import { withRouter } from 'react-router-dom';

class SessionForm extends React.Component {
  
  constructor(props) {
    super(props);
    this.state = {
      username: "",
      password: "",
    };
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleSubmit(e) {
    e.preventDefault();
    const user = Object.assign({}, this.state);
    this.props.processForm(user);
  }
  render() {
    const displayLogin = () => (
      <h1>Login</h1>
    );
    const displaySignup = () => (
      <h1>Sign Me Up!</h1>
    );
    return (
      <div>
        <form onSubmit={ this.handleSumbit }>
          { this.props.formType === 'login' ? displayLogin() : displaySignup() }
          
          <input type="submit" value="Do Something"/>
        </form>
      </div>
    );
  }
}

export default withRouter(SessionForm);
