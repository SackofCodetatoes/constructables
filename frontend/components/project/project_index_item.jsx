import React from 'react';
import { Link } from 'react-router-dom';

class ProjectIndexItem extends React.Component {

  render() {
    return (
      <li>
        {this.props.title} by {this.props.author}
      </li>);
  }
} 
export default ProjectIndexItem;