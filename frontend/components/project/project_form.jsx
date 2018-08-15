import React from 'react';
import { withRouter } from 'react-router-dom';

class ProjectForm extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      title: '',
      description: '',
      user_id: this.props.currentUserId
    };
    this.handleSubmit = this.handleSubmit.bind(this);

  }

  update(field) {
    return e => this.setState({
      [field]: e.currentTarget.value
    });
  }
  handleSubmit(e) {
    e.preventDefault();
    const project = Object.assign({}, this.state);
    console.log(project);
    this.props.processForm(project).then(this.props.history.push('/api/projects'));
  }

  render() {
    console.log(this.props);
    return (
      <div className="project-form-page">
      <div>
        <form>
          <input type="submit" onClick={this.handleSubmit} value="Publish" />
          <div>
            <input type="text" onChange={this.update('title')} value={this.state.title}placeholder="Project Title" />
            <input type="text" onChange={this.update('description')} value={this.state.description}placeholder="Project Description"/>
          </div>
        </form>
        <button>Add Step</button>
      </div>
    </div>
    );
  }
}
export default ProjectForm;