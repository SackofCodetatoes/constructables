import React from 'react';
import { Link } from 'react-router-dom';

class ProjectIndexItem extends React.Component {

  render() {
    return (
      <li>
        <Link to={`api/projects/${this.props.id}`}>
          {this.props.title} by {this.props.author}
        </Link>
      </li>);
  }
} 
export default ProjectIndexItem;