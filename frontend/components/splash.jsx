import React from 'react';
import { Link } from 'react-router-dom';
import ProjectIndexItem from './project/project_index_item';

class Splash extends React.Component {
  constructor(){
    super();
    this.projectsIndex = this.projectsIndex.bind(this);
  }
  componentDidMount(){
    this.props.fetchAllProjects().then((resp) => {
      this.projectsIndex(resp.payload);
    })

  }

  projectsIndex(resp){
    this.setState({
      projects: resp.projects,
      users: resp.users
    });
  }
  

  selectedProjectsIndex(){
    const inlineStyle = {
      minHeight: '0px',
    }
    if(this.state === null){
      return (<div>well shucks</div>);
    }
    else {
      // return (<div>???</div>)
      return (
        <div className="splash-index">
          <div className='project-index' style={inlineStyle}>
            <div className='project-index-grid'>
              <div className='project-item-box' key={1}>
                <ProjectIndexItem
                  key={1}
                  projectId={5}
                  author={"Michael Scott"}
                  title={this.state.projects["5"].title}
                  authorId={this.state.projects["5"].user_id}
                  image={this.state.projects["5"].image}
                />
              </div>
              <div className='project-item-box' key={2}>
                <ProjectIndexItem
                  key={2}
                  projectId={13}
                  author={"PUBG_Corp"}
                  title={this.state.projects["13"].title}
                  authorId={this.state.projects["13"].user_id}
                  image={this.state.projects["13"].image}
                />
              </div>
              <div className='project-item-box' key={3}>
                <ProjectIndexItem
                  key={3}
                  projectId={10}
                  author={"Not-really-NZXT"}
                  title={this.state.projects["10"].title}
                  authorId={this.state.projects["10"].user_id}
                  image={this.state.projects["10"].image}
                />
              </div>
            </div>
          </div>
        </div>
      )
    }
  }

  render(){
    // let temp = "https://images.pexels.com/photos/395074/pexels-photo-395074.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260"
    let temp = "https://images.pexels.com/photos/301703/pexels-photo-301703.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940"
    // debugger
    
    return (
      <div className='splash-page'>
        <span className="splash-text">Start crafting today!</span>
        <Link onClick={() => window.scrollTo(0, 0)} to='/projects/' className='clickable'><img className="splash" src={temp} alt="Start Constructing Today!"/></Link>
        <div className="splash-divider"> ★ Featured Projects</div>
        {this.selectedProjectsIndex()}
      </div>

    )
  }
}
export default Splash;