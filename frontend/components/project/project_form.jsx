import React from 'react';
import { withRouter } from 'react-router-dom';

class ProjectForm extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      title: '',
      description: '',
    }
  }

  update(field) {
    return e => this.setState({
      [field]: e.currentTarget.value
    });
  }
  handleSubmit(e) {
    e.preventDefault();
  }

  render() {
    return (
      <div>
        <form>
          <input type="submit" value="Publish" />
          <div>
            <input type="text" onChange={this.update('title')} value={this.state.title}placeholder="Project Title" />
            <input type="text" onChange={this.update('description')} value={this.state.description}placeholder="Project Description"/>
          </div>
        </form>
      <div>
        Add Step??
      </div>
    </div>
    );
  }
}
export default ProjectForm;