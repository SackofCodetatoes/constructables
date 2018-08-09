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

  update(field) {
    return e => this.setState({
      [field]: e.currentTarget.value
    });
  }

  handleSubmit(e) {
    e.preventDefault();
    const user = Object.assign({}, this.state);
    this.props.processForm(user);
  }
  render() {
    
    const displayLogin = () => (
      <div>
        <h1>Login</h1>
        <input type="text" onChange={this.update('username')} value={this.state.username} placeholder="Username" />
        <input type="password" onChange={this.update('password')} value={this.state.password} placeholder="Password" />
      </div>
    );
    
    const displaySignup = () => (
      <div>
        <h1>Sign Me Up!</h1>
        <input type="text" onChange={this.update('email')} value={this.state.email} placeholder="Email" />
        <input type="text" onChange={this.update('username')} value={this.state.username} placeholder="Username" />
        <input type="password" onChange={this.update('password')} value={this.state.password} placeholder="Password" />
        <input type="text" onChange={this.update('age')} value={this.state.age} placeholder="Age (dd/mm/yyyy)" />
      </div>
    );

    return (
      <div>
        <form onSubmit={this.handleSubmit }>
          { this.props.formType === 'login' ? displayLogin() : displaySignup() }
          
          <input type="submit" value="Do Something"/>
        </form>
      </div>
    );
  }
}

export default withRouter(SessionForm);
