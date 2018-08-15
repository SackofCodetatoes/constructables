import React from 'react';
import { Link } from 'react-router-dom';


class ProjectShow extends React.Component {
  componentDidMount(){
    this.props.fetchProject(this.props.match.params.projectId);
  }



  render() {
    // console.log('props');
    console.log(this.props);
    const { project } = this.props;
    const { user } = this.props;

    const renderProjectDelete = () => {
      if(this.props.currentUserId === project.user_id ) {
        return (<button className='project-delete-button'>Delete Project</button>)
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
          </ul>
        </div>
        { renderProjectDelete() }
      </div>
    )
  }
}
export default ProjectShow;