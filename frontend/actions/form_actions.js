import * as APIUtil from '../util/project_api_util';

export const RECEIVE_FORM_ERRORS = "RECEIVE_FORM_ERRORS";
export const CLEAR_ERRORS = "CLEAR_ERRORS";
export const RECEIVE_PROJECT = "RECEIVE_PROJECT";
export const RECEIVE_REWARD = "RECEIVE_REWARD";
import { receiveReward } from './reward_actions';
// import { postReward } from '../util/reward_api_util';
import * as APIRewardUtil from '../util/reward_api_util';

export const receiveProject = project => ({
  type: RECEIVE_PROJECT,
  project
});

export const receiveFormErrors = errors => ({
  type: RECEIVE_FORM_ERRORS,
  errors
});

export const clearErrors = () => ({
  type: CLEAR_ERRORS
});



export const createProject = (project) => dispatch => {
  return (
  APIUtil.createProject(project)
  .then(project => (dispatch(receiveProject(project))
), errors => (
    dispatch(receiveFormErrors(errors.responseJSON))
  )));
};

export const postReward = (reward) => dispatch => {
debugger
  return (
    APIRewardUtil.postReward(reward)
    .then(reward => (dispatch(receiveReward(reward))
  ), errors => (dispatch(receiveFormErrors(errors.responseJSON))
)));
};
