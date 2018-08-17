import React from 'react';
import ProfileContainer from './profile/profile_container';
import { Link } from 'react-router-dom'

class NavBar extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      search: ""
    };
    // this.handleSubmit = this.handleSubmit.bind(this);
  }
  
  updateSearch() {
    return e => this.setState({
      search: e.currentTarget.value
    })
  }
  render() {
    //console.log(this.props);
    return (
      <nav className="navbar">
        <Link to='/' onClick={() => this.props.clearSessionErrors()}><img className="logo" src={window.logoUrl} /></Link>
        <div className='search-bar'><input onChange={this.updateSearch()} 
          className='search-bar-field'type='text' 
          value={this.state.search} placeholder='Lets craft ...'/><button className='search-bar-button clickable'>Q</button></div>
        <Link className='a-link project-button' to='/api/projects/'><button className='projects-button'>Projects</button></Link>
        <ProfileContainer />

      </nav>
    );
  }
}

export default NavBar;
