import React from 'react';
import ProfileContainer from './profile/profile_container';
import { Link } from 'react-router-dom'

class NavBar extends React.Component {
  constructor(props) {
    super(props);
    this.state = { search: this.props.search }
    this.handleSubmit = this.handleSubmit.bind(this);
    this.checkSearch = this.checkSearch.bind(this);
  }
  

  checkSearch(event) {
    if(event.key == 'Enter') {
      const search = Object.assign({}, this.state.search);
      this.setState({
        search: { keywords: '' }
      });
      this.props.processSearch(search);
    }

  }

  updateSearch() {
    let nextState = Object.assign({}, this.state.search)
    return e => {
      nextState['keywords'] = e.currentTarget.value;
      return this.setState({
      search: nextState
      });
    };
  }

  handleSubmit(e) {
    e.preventDefault();
    const search = Object.assign({}, this.state.search);
    this.setState({
      search: { keywords: '' }
    });
    this.props.processSearch(search);

    // .then((resp) => this.props.history.push(`/api/projects`))
  }

  render() {
    //console.log(this.props);
    const renderSearchBar = () => (
      <div className='search-bar'><input onChange={this.updateSearch()}
        className='search-bar-field' type='text' onKeyDown={this.checkSearch}
        value={this.state.search.keywords} placeholder="Let's craft a ..." />
        <Link className="on-top" to="/api/projects/"><button onClick={this.handleSubmit} className='search-bar-button clickable'>Q</button></Link>
      </div>
    );
    // debugger
    return (
      <nav className="navbar">
        <Link to='/' onClick={() => this.props.clearSessionErrors()}><img className="logo" src={window.logoUrl} /></Link>
        { renderSearchBar() }
        <Link className='a-link project-button' to='/api/projects/'><button className='projects-button'>Projects</button></Link>
        <ProfileContainer />

      </nav>
    );
  }
}

export default NavBar;
