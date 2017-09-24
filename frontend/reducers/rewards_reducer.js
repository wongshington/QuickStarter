import merge from 'lodash/merge';
import { RECEIVE_REWARD, RECEIVE_ALL_REWARDS } from '../actions/reward_actions';

const RewardsReducer = (state = {}, action) => {
  Object.freeze(state);
  switch(action.type) {
    case RECEIVE_REWARD:
      const newReward = {[action.reward.id]: action.reward};
      return merge({}, state, newReward);
    case RECEIVE_ALL_REWARDS:
      return action.rewards;
    default:
      return state;
  }
};

export default RewardsReducer;
