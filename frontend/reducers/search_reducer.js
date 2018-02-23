import { RECEIVE_SEARCHES } from '../actions/search_actions';
import { selectSearches } from './selectors';

const SearchReducer = (state = [], action) => {
  Object.freeze(state);
  switch (action.type) {
    case RECEIVE_SEARCHES:
      let searches = selectSearches(action);
      return searches;
    default:
      return state;
  }

};

export default SearchReducer;
