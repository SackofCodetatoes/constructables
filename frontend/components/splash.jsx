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
          <div className="splash-divider">
            <h2>★ Featured Projects</h2>
          </div>
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
    
    return (
      <div className='splash-page'>

        <Link onClick={() => window.scrollTo(0, 0)} to='/projects/' className='clickable splash-banner'>
          <span className="splash-text">
            <hr className="type2" />
          Start crafting today!
          <hr className="type2" />
          </span>
          <img className="splash" src={temp} alt="Start Constructing Today!"/>
        </Link>

        <div className='splash-overview'>
          <div>
            <h2>Step-by-Step Instructions</h2>
            <p>We make it easy to learn how to make anything, one step at a time. From the stovetop to the workshop, you are sure to be inspired by the awesome projects that are shared everyday.</p>
          </div>
          <div>
            <h2>Made By You and me</h2>
            <p>Instructables are created by you and me mostly me. No matter who you are, we all have secret skills to share. Come join our community of curious makers, innovators, teachers, and life long learners who love to share what they make.</p>
          </div>
          <div>
            <h2>For Educational Purposes</h2>
            <p>Non-profit organization aiming to serve you your crafting needs while our heroku hours are up!</p>
          </div>
        </div>
        <hr/>

        {this.selectedProjectsIndex()}
      </div>

    )
  }
}
export default Splash;