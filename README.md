# Constructables

[Live Demo](https://constructables.herokuapp.com/#/)

Constructables is an instructional website with user submitted guides on how to construct or create projects. Constructables is strongly inspired by instructables and was created for learning purposes. Constructables uses Rails and PostgreSQL for backend services followed by React.js and Redux for frontend views. 
This project was constructed in a 10 day deadline with future features and revisions to come. 

## Features
* Secure frontend and backend user authentication using BCrypt
* Users can view user submitted projects
* Users can search for a projects that contain a specfic query phrase
* Logged in users can create, update, or delete their previous works

### Project Creation
Users can create projects with variable number of steps with the option to updating their created projects. Users have the option to edit, remove, or add steps to previously created projects to account for user error. It's not diy without some mistakes!

![Project Form Options](https://github.com/SackofCodetatoes/constructables/blob/master/app/assets/images/steps.png)

This feature was accomplished by allowing the project creator access to edit options while logged in. Constructables backend splits projects up by the project and it's step which allows us to remove any step in the list. The current finds the step the user wishes to update by the remove button and updates all subsquent steps's index. 
```
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
```
While there is a better solution available, through linked lists, for the current purpose of the project, a simple update to subsquent steps was the quickest and simplest to implement for functionality.


### Dynamic Loading
To keep our state simple, Constructables only keeps track of the current relevant data. On the project index page, we gather all the projects that are loaded on the page and the relevant user data. On our show page, we grab only that project's data and related user data. However, React and Redux might render the information before fetching which can cause an error. To combat this, Constructables targets the key areas that relies on fetched data and has conditional checks to ensure the page wont crash. 
```
<div className='project-header'>
    <h2 className='project-title' >{project.title}</h2>
    <label>By {user[project.user_id] ? user[project.user_id].username : 'loading..'}</label><br/>
    <p className='project-description'> {project.description}</p>
</div>
``` 
While the feature appears to be crude and can be fixed by creating loading components, conditional loads allowed for quicker debugging and a stronger understanding of how React and Redux loads information. 

## Project Design
Constructables was intended to be highly functional and user friendly, allowing users a simple interface to create and edit projects. Given the 10-day timespan, the instructional features were the primary focus to create a minimum viable product for a user to create and view project instructions. 

## Technologies
Rails was chosen for the Constructables due to simple to pick up interface and use of RESTful architecture. 
Frontend Redux was chosen to allow for organized states for our web application as each slice of state is handled by corresponding reducers and actions. In our application, Users, Projects, and Steps were each handled seperately and updated based on respective actions. 


## Future Features
* More expansive search feature for criteria in project description and title
* Image uploading to illustrate projects better
* User commenting to project instruction feedback
* UI Loading to allow a better UX