import React from 'react';
import { Link } from 'react-router-dom';
class ProjectShow extends React.Component {
  componentDidMount(){
    this.props.fetchPost(this.props.match.params.postId);
  }

  render() {
    console.log('props');
    console.log(this.props);
    return (
      <div>
        <ul>
nothing
        </ul>
        
      </div>
    )
  }
}
export default ProjectShow;