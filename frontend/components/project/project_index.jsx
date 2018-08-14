import React from 'react';
import ProjectIndexItem from './project_index_item';
import { Link } from 'react-router-dom';

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
        <Link to={`/api/projects/${project.id}`}>
          <ProjectIndexItem
            key={project.id}
            author={this.props.users[project.user_id].username}
            title={project.title}
          />
        </Link>
     ));
    return (<div>{projects}</div>);
  }

}
export default ProjectIndex;