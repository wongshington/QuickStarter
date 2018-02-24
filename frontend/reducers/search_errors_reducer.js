import  { RECEIVE_SEARCH_ERRORS } from '../actions/search_actions';

const _nullErrors = [];

export default (state = [], action) => {
  Object.freeze(state);
  switch (action.type) {
    case RECEIVE_SEARCH_ERRORS:
      return action.errors;
    default:
      return state;
  }
};
