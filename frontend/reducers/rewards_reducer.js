import merge from 'lodash/merge';
import { RECEIVE_REWARD, RECEIVE_ALL_REWARDS } from '../actions/reward_actions';
import { RECEIVE_PROJECT } from '../actions/project_actions';

const RewardsReducer = (state = {}, action) => {
  Object.freeze(state);
  switch(action.type) {
    case RECEIVE_REWARD:
      const newReward = action.reward;
      return merge({}, state, newReward);
    case RECEIVE_ALL_REWARDS:
      return action.rewards;
    case RECEIVE_PROJECT:
      return action.payload.reward;
    default:
      return state;
  }
};

export default RewardsReducer;
