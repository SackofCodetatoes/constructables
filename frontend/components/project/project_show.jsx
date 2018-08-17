import React from 'react';
import { Link } from 'react-router-dom';


class ProjectShow extends React.Component {
  componentDidMount(){
    this.props.fetchProject(this.props.match.params.projectId);
  }
  
  renderSteps(steps) {
    let renSteps = [];

    for (let i = 0; i < Object.keys(steps).length; i++) {
      renSteps.push(<li className="project-step-item" key={i}><div className="project-step-container">
      <h3 className='project-step-title'>Step {i+1}: {steps[i].title}</h3><p className='project-step-description'>{steps[i].body}</p></div></li>);
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
            </button><br/>
            <Link to={`/edit/project/${this.props.match.params.projectId}`}>
              <button className='project-option-button'>Edit</button>
            </Link>
          </div>
        )
      } else return null;
    }

    if(!project || !user) {
      return (<div>Something went wrong or page doesnt exist</div>);
    }

    return (
      <div className='project-show-page'>
      { renderProjectOptions() }
        <div className='project-show-container'>
          <div className='project-header'>
              <h2 className='project-title' >{project.title}</h2>
              <label>By {user[project.user_id] ? user[project.user_id].username : 'loading..'}</label><br/>
              <p className='project-description'>Description: {project.description}</p>
          </div>
          <ul className="project-show-steps">
            {this.renderSteps(steps)}
          </ul>
        </div>
      </div>
    )
  }
}
export default ProjectShow;