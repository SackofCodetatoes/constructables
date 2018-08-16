import React from 'react';
import { Link } from 'react-router-dom';


class ProjectShow extends React.Component {
  componentDidMount(){
    this.props.fetchProject(this.props.match.params.projectId);
  }
  
  renderSteps(steps) {
    console.log('inside');
    console.log(steps);
    let renSteps = [];
    //steps.length
    for (let i = 0; i < steps.length; i++) {
      console.log('IOASJFOID');
      renSteps.push(<div><li>{steps[i].title}</li> <li>{steps[i].body}</li></div>);
      // renSteps.push(<div><li>{steps[i].title}</li> <li>{steps[i].body}</li></div>);
    }
    console.log(renSteps);
    return renSteps;
  }

  render() {
    // console.log('props');
    // console.log(this.props.project);
    const { project } = this.props;
    const { user } = this.props;
    const { steps } = this.props;
    console.log('first test');
    console.log(steps);
    console.log(this.renderSteps(steps));
    const renderProjectOptions = () => {
      if(this.props.currentUserId === project.user_id ) {
        return (
          <div className="project-options">
            <button onClick={() => this.props.deleteProject(project.id)} className='project-option-button project-delete-button'>
              Delete Project
            </button>
            <button className='project-option-button'>
              Edit
            </button>
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
            <div>{ }</div>
          </ul>
        </div>
        { renderProjectOptions() }
      </div>
    )
  }
}
export default ProjectShow;