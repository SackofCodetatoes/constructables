import * as ProjectAPIUtil from "../util/project_api_util";
import * as SearchAPIUtil from "../util/search_api_util";

export const RECEIVE_ALL_PROJECTS = 'RECEIVE_ALL_PROJECTS';
export const RECEIVE_PROJECT = 'RECEIVE_PROJECT';
export const RECEIVE_PROJECT_ERRORS = 'RECEIVE_PROJECT_ERRORS';
export const REMOVE_PROJECT = 'REMOVE_PROJECT';
export const MODIFY_PROJECT = 'MODIFY_PROJECT';
export const RECEIVE_SEARCH_PROJECTS = 'RECEIVE_SEARCH_PROJECTS';


//thunks
export const fetchAllProjects = () => dispatch => (
  ProjectAPIUtil.fetchAllProjects().then(projects => dispatch(receiveAllProjects(projects)))
);
export const fetchProject = (projectId) => dispatch => {
  return ProjectAPIUtil.fetchProject(projectId).then(project => dispatch(receiveProject(project)))
};
export const deleteProject = (projectId) => dispatch => (
  ProjectAPIUtil.deleteProject(projectId).then(project => dispatch(removeProject(projectId)))
);
export const updateProject = (project) => dispatch => (
  ProjectAPIUtil.updateProject(project).then(project => dispatch(modifiedProject(project)),
    error => dispatch(receiveErrors(error))
  )
);
export const createProject = (project) => dispatch => (
  ProjectAPIUtil.createProject(project).then(project => dispatch(receiveProject(project)), 
    errors => dispatch(receiveErrors(errors))  
  )
);

export const searchAllProjects = (query) => dispatch => (
  SearchAPIUtil.search(query).then(payload => dispatch(receiveAllProjects(payload)))
)


const receiveErrors = (errors) => ({
  type: RECEIVE_PROJECT_ERRORS,
  errors: errors.responseJSON
});
// const receiveSearchProjects(payload)({

// })
const modifiedProject = (project) => ({
  type: MODIFY_PROJECT,
  project
})
const receiveAllProjects = (payload) => ({
  type: RECEIVE_ALL_PROJECTS,
  payload
});

const receiveProject = (payload) => ({
  type: RECEIVE_PROJECT,
  payload
});

const removeProject = (projectId) => ({
  type: REMOVE_PROJECT,
  projectId
});

 


