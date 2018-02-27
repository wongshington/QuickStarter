import { RECEIVE_SEARCHES, CLEAR_SEARCHES } from '../actions/search_actions';
import { selectSearches } from './selectors';

const SearchReducer = (state = [], action) => {
  Object.freeze(state);
  switch (action.type) {
    case RECEIVE_SEARCHES:
      let searches = selectSearches(action);
      return searches;
    case CLEAR_SEARCHES:
      return [];
    default:
      return state;
  }

};

export default SearchReducer;
