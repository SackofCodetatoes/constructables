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
    this.demoLogin = this.demoLogin.bind(this);
  }

  update(field) {
    return e => this.setState({
      [field]: e.currentTarget.value
    });
  }

  demoLogin(e) {
    e.preventDefault();
    const user = {username: "demo", password: "password"};
    this.props.processForm(user);
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
          <li className="simple-error" key={`error-${i}`}>
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
        <select className='short-session-field form-field drop-down-select'>
          <option disabled selected value="">About you</option>
          <option value="">Constructor</option>
          <option value="">Dinosaur</option>
          <option value="">Good Question</option>
        </select>
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
    const renderDemoLogin = () => {
      if(this.props.formType === 'login') {
        return (<input className='form-submit-button' type="submit" onClick={this.demoLogin} value="Demo Login" /> )
      } else return null;
     
    }

    
    return (
      <div className='form-page'>

        <div className='form-container'>
          <div className="blur-area"></div>
          <div className="backdrop"></div>
          <form >
            { displayForm() }
            { this.renderErrors() }
            <input className='form-submit-button' type="submit" onClick={this.handleSubmit} value={buttonText}/>
            { renderDemoLogin() }
          </form>
        </div>
      </div>
    );
  }
}

export default withRouter(SessionForm);
