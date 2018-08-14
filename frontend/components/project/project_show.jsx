import React from 'react';
import { Link } from 'react-router-dom';
class ProjectShow extends React.Component {
  componentDidMount(){
    this.props.fetchProject(this.props.match.params.projectId);
  }

  render() {
    console.log('props');
    console.log(this.props);
    const { project } = this.props;
    if(!project) {
      return (<div>Uhhh, gimmie a sec...</div>);
    }
    return (
      <div>
        <ul>
          <li>Title: {project.title}</li>
          <li>Description: {project.description}</li>
        </ul>
      </div>
    )
  }
}
export default ProjectShow;