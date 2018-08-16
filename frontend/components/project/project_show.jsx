import React from 'react';
import { Link } from 'react-router-dom';


class ProjectShow extends React.Component {
  componentDidMount(){
    this.props.fetchProject(this.props.match.params.projectId);
  }
  
  renderSteps(steps) {
    let renSteps = [];

    for (let i = 0; i < Object.keys(steps).length; i++) {
      renSteps.push(<div><h3>{steps[i].title}</h3> <li>{steps[i].body}</li></div>);
    }

    return renSteps;
  }

  render() {
    const { project } = this.props;
    const { user } = this.props;
    const { steps } = this.props;
    // console.log(this.props);
    const renderProjectOptions = () => {
      if(this.props.currentUserId === project.user_id ) {
        return (
          <div className="project-options">
            <button onClick={() => this.props.deleteProject(project.id)} className='project-option-button project-delete-button'>
              Delete Project
            </button>
            <Link to={`/edit/project/${this.props.match.params.projectId}`}>
              <button className='project-option-button'>Edit</button>
            </Link>
          </div>
        )
      } else return null;
    }

    if(!project || !user) {
      return (<div>Uhhh, gimmie a sec...</div>);
    }

    return (
      <div className='project-show-page'>
        <div className='project-header'>
          <ul>
            <li className='project-title' >Title: {project.title}</li>
            <li>By {user[project.user_id] ? user[project.user_id].username : 'loading..'}</li>
            <li className='project-descripton'>Description: {project.description}</li>
            <div>{this.renderSteps(steps) }</div>
          </ul>
        </div>
        { renderProjectOptions() }
      </div>
    )
  }
}
export default ProjectShow;