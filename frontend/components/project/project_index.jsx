import React from 'react';
import ProjectIndexItem from './project_index_item';
import { Link } from 'react-router-dom';

class ProjectIndex extends React.Component {
  
  componentDidMount() {
    this.props.fetchAllProjects();
  }
             
  render(){
    const { users } = this.props;
    //               author={this.props.users[project.user_id].username}
    // console.log(this.props);
    console.log(users);
    let projects = this.props.projects.map(
      project => (
          <Link key={project.id} to={`/api/projects/${project.id}`}>
            <ProjectIndexItem
              key={project.id}
              author={users[project.user_id] ? users[project.user_id].username : 'loading..'}
              title={project.title}
            />
          </Link>
       )
    );
    if(!this.props.users){
      return (<div>Loading...</div>)
    }
    return (<div>{projects}</div>);
  }

}
export default ProjectIndex;