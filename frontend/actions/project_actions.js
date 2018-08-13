import * as ProjectAPIUtil from "../util/project_api_util";
export const RECEIVE_ALL_PROJECTS = 'RECEIVE_ALL_PROJECTS';
export const RECEIVE_PROJECT = 'RECEIVE_PROJECT';
export const RECEIVE_PROJECT_ERRORS = 'RECEIVE_PROJECT_ERRORS';
export const REMOVE_PROJECT = 'REMOVE_PROJECT';

//thunks
export const fetchAllProjects = () => dispatch => (
  ProjectAPIUtil.fetchAllProjects().then(projects => dispatch(receiveAllProjects(projects)))
);
export const fetchProject = (projectId) => dispatch => (
  ProjectAPIUtil.fetchProject(projectId).then(project => dispatch(receiveProject(project)))
);
export const deleteProject = (projectId) => dispatch => (
  ProjectAPIUtil.deleteProject(projectId).then(project => dispatch(removeProject(projectId)))
);


const receiveAllProjects = (projects) => ({
  type: RECEIVE_ALL_PROJECTS,
  projects
});
const receiveProject = (project) => ({
  type: RECEIVE_PROJECT,
  project
});
const removeProject = (projectId) => ({
  type: REMOVE_PROJECT,
  projectId
});



