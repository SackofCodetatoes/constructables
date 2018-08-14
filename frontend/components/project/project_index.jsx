import React from 'react';
import ProjectIndexItem from './project_index_item';

class ProjectIndex extends React.Component {
  
  componentDidMount() {
    this.props.fetchAllProjects();
  }
  
  render(){
    console.log('render users');
    console.log(this.props);
    // console.log(this.props.users[''])
    let projects = this.props.projects.map(
      project => (
      <ProjectIndexItem 
        key={project.id}
        id={project.id}
        author={this.props.users[project.user_id].username}
        title={project.title}
        />));
    return (<div>{projects}</div>);
  }

}
export default ProjectIndex;