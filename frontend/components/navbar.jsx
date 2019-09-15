import React from 'react';
import ProfileContainer from './profile/profile_container';
import { Link } from 'react-router-dom'
import { withRouter } from 'react-router';

class NavBar extends React.Component {
  constructor(props) {
    super(props);
    this.state = { search: this.props.search }
    this.handleSubmit = this.handleSubmit.bind(this);
    this.checkSearch = this.checkSearch.bind(this);
    this.projectsIndex = this.projectsIndex.bind(this);
  }
  

  checkSearch(event) {
    if(event.key == 'Enter') {
      const search = Object.assign({}, this.state.search);
      this.setState({
        search: { keywords: '', type: 'keyword' }
      });
      this.props.history.push('/projects/search');
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
    this.props.history.push('/projects/search')
    this.props.processSearch(search);
  }
  projectsIndex(){
    this.props.fetchAllProjects();
    this.props.history.push('/projects/');
  }

  render() {
    //console.log(this.props);
    const renderSearchBar = () => (
      <div className='search-bar'><input onChange={this.updateSearch()}
        className='search-bar-field' type='text' onKeyDown={this.checkSearch}
        value={this.state.search.keywords} placeholder="Let's craft a ..." />
        <Link className="on-top" to="/projects/"><button onClick={this.handleSubmit} className='search-bar-button clickable'>Q</button></Link>
        {/* <span className='motto'>A guide for everything!</span> */}
        <div className='a-link project-button' to='/projects/' >
          <button onClick={this.projectsIndex} className='projects-button'>Projects</button>
        </div>
      </div>
    );
    return (
      <div>
        <nav className="navbar">
          <Link to='/' onClick={() => this.props.clearSessionErrors()}><img className="logo" src={window.logoUrl} /></Link>

          <ProfileContainer />
        </nav>
        <div className="spacer">
          <ul className="row-list">
            <li className='row-item'>Classes</li>
            <li className='row-item'>Contests</li>
            <li className='row-item'>Community</li>
            <li className='row-item'>Teachers</li>
          </ul>
          { renderSearchBar() }
        </div>

      </div>
    );
  }
}

export default withRouter(NavBar);
