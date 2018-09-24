import React from 'react';
import { withRouter } from 'react-router-dom';
import StepContainer from '../step/step_container';
import { merge } from 'lodash';
class ProjectForm extends React.Component {

  constructor(props) {
    super(props);
    this.props.edit
    this.state = { project: this.props.project, steps: this.props.steps } 
    this.handleSubmit = this.handleSubmit.bind(this);
    this.addStep = this.addStep.bind(this);
    this.updateStep = this.updateStep.bind(this);
    this.deleteStep = this.deleteStep.bind(this);
    this.newPhoto = false;
    this.handleStepImages = this.handleStepImages.bind(this);
  } 

  update(field) {
    let nextProject = Object.assign({}, this.state.project);
    return e => {
      if(field === 'photo'){
        this.newPhoto = true;
        nextProject[field] = e.currentTarget.files[0];
      }
      else {
        nextProject[field] = e.currentTarget.value;
      }
      return this.setState({
        project: nextProject
      });
    };
  }

  deleteStep(stepIndex){
    const numUpdates = Object.keys(this.state.steps).length;
    let nextState = merge({}, this.state);
    delete nextState.steps[stepIndex];
    for(let i = stepIndex; i < numUpdates; i++){
      nextState.steps[i] = nextState.steps[i+1];
    }
    delete nextState.steps[numUpdates - 1];
    this.setState({
      steps: nextState.steps
    })
  }

  updateStep(stepIndex, stepField) {
    let nextStep = this.state.steps;
    const that = this;
    return e => {
      if (stepField === 'photo') {
        nextStep[stepIndex].photo = e.currentTarget.files[0];
      } else {
        nextStep[stepIndex][stepField] = e.currentTarget.value;//possible problem with keying in
      }
      
      console.log('updated step: ', nextStep);
      
      return that.setState({
        steps: nextStep
      });
    };
  }

// <StepContainer onChange={this.updateStep(this.state.steps.length)} />
  addStep(e) {
    e.preventDefault();
    let nextSteps = this.state.steps;
    // nextSteps.push({title: '', body: ''});
    nextSteps[Object.keys(nextSteps).length] = { title: '', body: '', photo: null };
    this.setState({
      steps: nextSteps
    });
    // console.log(this.state);
  }


  renderErrors() {
    return (
      <ul className="project-form-errors">
        {this.props.errors.map((error, i) => (
          <li className="simple-error project-error" key={`error-${i}`}>
            {error}
          </li>
        ))}
      </ul>
    );
  }

  handleStepImages(){
    console.log(this.state.projectId);
    this.props.history.push(`/api/projects/${this.state.projectId}`);

  }

  handleSubmit(e) {
    e.preventDefault();
    // debugger
    const projectFormData = new FormData();
    projectFormData.append('project[title]', this.state.project.title);
    projectFormData.append('project[description]', this.state.project.description);
    projectFormData.append('project[user_id]', this.state.project.user_id);
    projectFormData.append('project[id]', this.state.project.id);
    
    if (!(this.state.project.photo === null)){
      projectFormData.append('project[photo]', this.state.project.photo);
    }


      this.props.processForm(projectFormData).
      then(resp => {
        let projectId = this.props.formType === 'new' ? resp.payload.project.id : this.props.project.id;
        this.setState({
          projectId: projectId,
        })
        for(let i = 0; i < Object.keys(this.state.steps).length; i++){
          //if formtype conditiona; 'new' v edit, set project id if new 
          //new : resp payload
          //edit : this.steps[i].project_id
          console.log('whatdo', this.state.steps[0].photo);
          debugger
          
        let stepFormData = new FormData();
        stepFormData.append('step[title]', this.state.steps[i].title);
        stepFormData.append('step[body]', this.state.steps[i].body);
        stepFormData.append('step[step_index]', i);
        stepFormData.append('step[project_id]', projectId);
        
        // debugger
          if (!(this.state.steps[i].photo === null)) {
            debugger
            // this.handleStepImages();
            stepFormData.append('step[photo]', this.state.steps[i].photo);
          }


          if(this.state.steps[i].id === undefined){
            // stepFormData.append('step[id]', this.state.steps[i].id);
            this.props.newStep(stepFormData);
          } 
          else {
            stepFormData.append('step[id]', this.state.steps[i].id);
            this.props.editStep(stepFormData);
          }

        };//end of for loop

      }).then(() => {
        this.handleStepImages();
      });
      //workaround
      // for(let i = 0; i < Object.keys(this.state.steps).length; i++){
      //   let stepFormData = new FormData();
      //   stepFormData.append('step[title]', this.state.steps[i].title);
      //   stepFormData.append('step[body]', this.state.steps[i].body);
      //   stepFormData.append('step[step_index]', i);
      //   stepFormData.append('step[project_id]', this.state.steps[i].project_id);

      //   if (!(this.state.steps[i].photo === null)) {
      //     console.log('photo attached');
      //     stepFormData.append('step[photo]', this.state.steps[i].photo);
      //   }

      //   if (this.state.steps[i].id === undefined) {
      //     // stepFormData.append('step[id]', this.state.steps[i].id);
      //     this.props.newStep(stepFormData);
      //   }
      //   else {
      //     stepFormData.append('step[id]', this.state.steps[i].id);
      //     this.props.editStep(stepFormData);
      //   }
      // }

    //   debugger
    // this.props.history.push(`/api/projects/${this.state.project.id}`);


  }



  render() {

    const renderSteps = () => {
      const steps = this.state.steps;
      return (
         Object.values(this.state.steps).map((step, index) => 
            <div className="step-form-container" key={index}>
            
              <input type="file" className="image-upload-button" accept="image/png, image/jpeg" onChange={this.updateStep(index, 'photo')} />
              <label >Step {index + 1}: </label><input className='project-form-title'type="text" onChange={this.updateStep(index, 'title')} placeholder='Enter a step title!' value={step.title}/><br/>
              <textarea className='project-form-body' rows="4" cols='50' onChange={this.updateStep(index, 'body')} placeholder="What do you do in this step?" value={step.body} ></textarea>
              {/* <input  type='text' className='project-form-body' onChange={this.updateStep(index, 'body')} value={step.body}/>  */}
              <button onClick={() => this.deleteStep(index)} className= "remove-step-button rounded clickable">x</button>
            </div>
          )
      );
    }

    // console.log(this.props);
    return (
      <div className="project-form-page" key='5'>
        <div className="project-form-container">
          <form className="project-form">
            <input type="submit" className="publish-button rounded clickable" onClick={this.handleSubmit} value="Publish" />
            <div className="project-form-project" >
              { this.renderErrors() }
              <input type="file" className="image-upload-button" accept="image/png, image/jpeg" onChange={this.update('photo')}/>
              <input type="textarea" className='project-form-title' onChange={this.update('title')} value={this.state.project.title} placeholder="What's your project called?" /><br/>
              <textarea className='project-form-body' rows="4" cols='50' placeholder="Describe your project!"onChange={this.update('description')}>{this.state.project.description}</textarea>
              {/* <input type="text" onChange={this.update('description')} value={this.state.project.description} placeholder="Project Description"/> */}
            </div>
          </form>

          { renderSteps() }

          <button className='add-step-button rounded clickable' onClick={this.addStep}>Add Step</button>
        </div>
    </div>
    );
  }
}
// { this.state.steps.map((step) => <h1>howdy</h1>) }
export default ProjectForm;