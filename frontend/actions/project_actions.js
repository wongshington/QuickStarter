import * as APIUtil from '../util/project_api_util';
// consts below to improve error handling
export const RECEIVE_PROJECT = 'RECEIVE_PROJECT';
export const RECEIVE_ALL_PROJECTS = 'RECEIVE_ALL_PROJECTS';


export const receiveProject = project => ({
  type: RECEIVE_PROJECT,
  project
});

export const receiveAllProjects = projects => ({
  type: RECEIVE_ALL_PROJECTS,
  projects
});

export const getProjects = () => dispatch => (
  APIUtil.getProjects().then(projects => (dispatch(receiveAllProjects(projects)) )
));


export const getProject = (id) => dispatch => (
  APIUtil.getProject(id).then(project => (dispatch(receiveProject(project)) )
));

export const patchProject = (project) => dispatch => (
  APIUtil.patchProject(project).then(project => (dispatch(receiveProject(project)) )
));


//
