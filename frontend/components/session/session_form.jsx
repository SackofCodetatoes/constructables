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
// .then(this.props.history.push("/"))

  renderErrors() {
    return (
      <ul>
        {this.props.errors.map((error, i) => (
          <li className="speech-bubble" key={`error-${i}`}>
            {error}
          </li>
        ))}
      </ul>
    );
  }

  render() {
    
    const displayLogin = () => (
      <div>
        <input className='session-field' type="text" onChange={this.update('username')} value={this.state.username} placeholder="Username" /><br/>
        <input className='session-field' type="password" onChange={this.update('password')} value={this.state.password} placeholder="Password" />
      </div>
    );
    
    const displaySignup = () => (
      <div>
        <input className='session-field form-field' type="email" onChange={this.update('email')} value={this.state.email} placeholder="Email" /><br/>
        <input className='short-session-field form-field' type="text" onChange={this.update('username')} value={this.state.username} placeholder="Username" />
        <input className='short-session-field form-field' type="password" onChange={this.update('password')} value={this.state.password} placeholder="Password" /><br />
        <input className='short-session-field form-field' type="text" onChange={this.update('age')} value={this.state.age} placeholder="Age (dd/mm/yyyy)" />
      </div>
    );

    let displayForm;
    let buttonText;
    if(this.props.formType === 'login') {
      displayForm = displayLogin;
      buttonText = 'Login';
    } else {
      displayForm = displaySignup;
      buttonText = 'Sign Me Up!';
    } 

    return (
      <div className='form-container'>
        <div className="backdrop"></div>
        <form onSubmit={this.handleSubmit }>
          { displayForm() }
          { this.renderErrors() }
          <input className='form-submit-button' type="submit" value={buttonText}/>
        </form>
      </div>
    );
  }
}

export default withRouter(SessionForm);
