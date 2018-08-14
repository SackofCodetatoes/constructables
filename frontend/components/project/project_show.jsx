import React from 'react';
import { Link } from 'react-router-dom';
class ProjectShow extends React.Component {
  componentDidMount(){
    this.props.fetchProject(this.props.match.params.projectId);
  }
  componentWillReceiveProps(nextProps){
    if(this.props.project.id = nextProps.match.params.projectId) {
      this.props.fetchProject(nextProps.match.params.projectId);
    }
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
          <li>{project.title}</li>
          <li>{project.description}</li>
        </ul>
      </div>
    )
  }
}
export default ProjectShow;