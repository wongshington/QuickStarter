import { getProjectSearch } from '../util/search_util';

export const RECEIVE_SEARCHES = 'RECEIVE_SEARCHES';
export const RECEIVE_SEARCH_ERRORS = 'RECEIVE_SEARCH_ERRORS';


const receiveSearches = searches => ({
  type: RECEIVE_SEARCHES,
  searches
});

const receiveSearchErrors = errors => ({
  type: RECEIVE_SEARCH_ERRORS,
  errors
});

export const fetchSearch = (input) => dispatch => (
  getProjectSearch(input).then(
    searches => dispatch(receiveSearches(searches)),
     errors => (dispatch(receiveSearchErrors(errors.responseJSON))
      ))
);
// might need to add some error handling if there are not results for that search
