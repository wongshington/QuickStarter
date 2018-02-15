import { getProjectSearch } from '../util/search_util';

export const RECEIVE_SEARCHES = 'RECEIVE_SEARCHES';

const receiveSearches = searches => ({
  type: RECEIVE_SEARCHES,
  searches
});

export const fetchSearch = (input) => dispatch => (
  getProjectSearch(input).then( searches => dispatch(receiveSearches(searches)))
);
// might need to add some error handling if there are not results for that search
