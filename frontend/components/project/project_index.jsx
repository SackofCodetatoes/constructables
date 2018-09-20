import React from 'react';
import ProjectIndexItem from './project_index_item';
import { Link } from 'react-router-dom';

class ProjectIndex extends React.Component {
  constructor(props){
    super(props);
    this.state = {loading: true};

  }
  componentDidMount() {
    if (this.props.location.pathname == "/projects/" || this.props.location.pathname == "/projects" ){
      this.props.fetchAllProjects().then(() => this.setState({loading: false}));
    }
  }
             
  render(){
    if(this.props.loading){
      return null;
    }
    const { users } = this.props;

    let projects = this.props.projects.map(
      project => (
        <div className='project-item-box' key={project.id}>
          <ProjectIndexItem
            key={project.id}
            projectId={project.id}
            author={users[project.user_id] ? users[project.user_id].username : 'loading..'}
            title={project.title}
            authorId={project.user_id}
            image={project.image}
          />
        </div>
       )
    );
    if(!this.props.users){
      return (<div>Loading...</div>)
    }

    return (
      <div className='project-index'>
        <div className='project-index-grid'>
          {projects}
        </div>
      </div>);

  }

}
export default ProjectIndex;