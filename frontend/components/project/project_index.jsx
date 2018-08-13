import React from 'react';
import ProjectIndexItem from './project_index_item';

class ProjectIndex extends React.Component {
  
  componentDidMount() {
    this.props.fetchAllProjects();
  }
  
  render(){
    console.log(this.props);
    let projects = this.props.projects.map(
      project => (
      <ProjectIndexItem 
        key={project.id}
        authorId={project.user_id}
        title={project.title}
        />));
    return (<div>{projects}</div>);
  }

}
export default ProjectIndex;