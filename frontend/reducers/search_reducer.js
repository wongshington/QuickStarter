import { RECEIVE_SEARCHES } from '../actions/search_actions';

const SearchReducer = (state = [], action) => {
  Object.freeze(state);
  switch (action.type) {
    case RECEIVE_SEARCHES:
      return action.searches;
    default:
      return state;
  }

};

export default SearchReducer;
