import merge from 'lodash/merge';
import { RECEIVE_REWARD, RECEIVE_ALL_REWARDS } from '../actions/reward_actions';

const RewardsReducer = (state = {}, action) => {
  Object.freeze(state);
  switch(action.type) {
    case RECEIVE_REWARD:
    // i put this debugger here because i changed my default state to an array from an object
    debugger
      const newReward = action.reward;
      return merge({}, state, newReward);
    case RECEIVE_ALL_REWARDS:
      return action.rewards;
    default:
      return state;
  }
};

export default RewardsReducer;
