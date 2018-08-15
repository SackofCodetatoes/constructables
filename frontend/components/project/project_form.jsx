import React from 'react';
import { withRouter } from 'react-router-dom';
import StepContainer from '../step/step_container';
class ProjectForm extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      title: '',
      description: '',
      user_id: this.props.currentUserId,
      steps: []
    };
    this.handleSubmit = this.handleSubmit.bind(this);
    this.addStep = this.addStep.bind(this);
    this.updateStep = this.updateStep.bind(this);
  } 

  update(field) {
    return e => this.setState({
      [field]: e.currentTarget.value
    });
  }

  updateStep(stepIndex, stepField) {
    let nextStep = this.state.steps;
    console.log('heres a step');
    // debugger
    return e => {
      nextStep[stepIndex][stepField] = e.currentTarget.value;//possible problem with keying in
      console.log(nextStep);
      return this.setState({
        steps: nextStep
      });
    };
  }
// <StepContainer onChange={this.updateStep(this.state.steps.length)} />
  addStep(e) {
    e.preventDefault();
    let nextSteps = this.state.steps;
    nextSteps.push({title: '', body: ''});
    this.setState({
      steps: nextSteps
    });
    // console.log(this.state);
  }

  handleSubmit(e) {
    e.preventDefault();
    console.log('the state');
    console.log(this.state);
    const project = Object.assign({}, { 
      title: this.state.title, 
      body: this.state.body,
      user_id: this.state.user_id
    });

    //resp has payload.project.id
    this.props.processForm(project).then(resp => {
      // for(let i =0; i< 5; i++){
      //   console.log(resp.payload.project.id)
      // }
    });
    //.then(this.props.history.push('/api/projects'));
  }

  render() {
    const renderSteps = () => {
      const steps = this.state.steps
      // <div>{this.state.steps}</div>
      return (
         this.state.steps.map((step, index) => 
            <div>
              <input type="text" onChange={this.updateStep(index, 'title')} placeholder='Step: Type your title...' value={step.title}/>
              <input type="text" onChange={this.updateStep(index, 'body')} placeholder='Type your step description' value={step.body}/>
            </div>
          )
      );
    }
    console.log(this.props);
    return (
      <div className="project-form-page">
      <div>
        <form>
          <input type="submit" onClick={this.handleSubmit} value="Publish" />
          <div>
            <input type="text" onChange={this.update('title')} value={this.state.title} placeholder="Project Title" />
            <input type="text" onChange={this.update('description')} value={this.state.description} placeholder="Project Description"/>
          </div>
        </form>

        { renderSteps() }

        <button onClick={this.addStep}>Add Step</button>
      </div>
    </div>
    );
  }
}
// { this.state.steps.map((step) => <h1>howdy</h1>) }
export default ProjectForm;