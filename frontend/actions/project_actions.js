import * as APIUtil from '../util/project_api_util';
// consts below to improve error handling
export const RECEIVE_PROJECT = 'RECEIVE_PROJECT';
export const RECEIVE_RANDOM_PROJECT = 'RECEIVE_RANDOM_PROJECT';
export const RECEIVE_ALL_PROJECTS = 'RECEIVE_ALL_PROJECTS';
export const RECEIVE_FUNDING = 'RECEIVE_FUNDING';



export const receiveProject = payload => ({
  type: RECEIVE_PROJECT,
  payload
});

export const receiveRandomProject = payload => ({
  type: RECEIVE_RANDOM_PROJECT,
  payload,
  randId: payload.project.id
});

export const receiveAllProjects = payload => ({
  type: RECEIVE_ALL_PROJECTS,
  payload
});

export const receiveFunding = (project) => ({
  type: RECEIVE_FUNDING,
  project
});

export const getProjects = () => dispatch => (
  APIUtil.getProjects().then(projects => (dispatch(receiveAllProjects(projects)) )
));


export const getProject = (id) => dispatch => (
  APIUtil.getProject(id).then(project => (dispatch(receiveProject(project)) )
));

export const getRandomProject = (id) => dispatch => (
  APIUtil.getProject(id).then(project => (dispatch(receiveRandomProject(project)) )
));


// export const patchFundingProject = (project) => dispatch => (
//   APIUtil.patchFundingProject(project)
//   .then(project => (dispatch(receiveProject(project)) )
// ));

// export const postFunds = (reward) => dispatch => (
//   APIUtil.postFunds(reward)
//   .then(project => (dispatch(receiveProject(project)) )
// ));

//
