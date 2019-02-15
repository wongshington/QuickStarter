import * as APIUtil from '../util/reward_api_util';
export const RECEIVE_ALL_REWARDS = 'RECEIVE_ALL_REWARDS';
export const RECEIVE_REWARD = 'RECEIVE_REWARD';
import { receiveProject } from './project_actions';


const receiveAllRewards = (rewards) => ({
  type: RECEIVE_ALL_REWARDS,
  rewards
});

export const receiveReward = (reward) => ({
  type: RECEIVE_REWARD,
  reward
});


export const getRewards = (id) => dispatch => (
  APIUtil.getRewards(id).then(rewards => (dispatch(receiveAllRewards(rewards)) )
));


export const postReward = (reward) => dispatch => (
  APIUtil.postReward(reward).then(reward => (dispatch(receiveReward(reward)) )
));

export const postBacking = (userId, reward) => dispatch => (
  APIUtil.postBacking(userId, reward).then(project => (dispatch(receiveProject(project)) )
));
