import  { RECEIVE_SEARCH_ERRORS } from '../actions/search_actions';
import { CLEAR_ERRORS } from '../actions/form_actions';

const _nullErrors = [];

export default (state = [], action) => {
  Object.freeze(state);
  switch (action.type) {
    case RECEIVE_SEARCH_ERRORS:
      return action.errors;
    case CLEAR_ERRORS:
      return _nullErrors;
    default:
      return state;
  }
};
