import merge from 'lodash/merge';
import { RECEIVE_REWARD, RECEIVE_ALL_REWARDS } from '../actions/reward_actions';
import { RECEIVE_PROJECT, RECEIVE_ALL_PROJECTS } from '../actions/project_actions';
import { parsePayload } from './selectors';


const RewardsReducer = (state = {}, action) => {
  Object.freeze(state);
  switch(action.type) {
    case RECEIVE_REWARD:
      const newReward = action.reward;
      return merge({}, state, newReward);
    case RECEIVE_ALL_REWARDS:
    // let parseResults = parsePayload(action.payload);
      return action.rewards;
    case RECEIVE_ALL_PROJECTS:
    let parseRewards = parsePayload(action.payload).rewards;
      return parseRewards;
    default:
      return state;
  }
};

export default RewardsReducer;
