import React from 'react';
import { Link } from 'react-router-dom';

class ProjectIndexItem extends React.Component {

  render() {
    return (<li>{this.props.authorId}, {this.props.title}</li>);
  }
} 
export default ProjectIndexItem;