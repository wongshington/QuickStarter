import { connect } from 'react-redux';
import SearchIndex from './search_index';
import { clearErrors } from '../../actions/session_actions';
import { fetchSearch, clearSearches } from '../../actions/search_actions';

const mapStateToProps = state => {
  return ({
      results: state.search,
      searchState: !state.uiReducer.searchState
    });
};

const mapDispatchToProps = dispatch => ({
  clearErrors: () => dispatch(clearErrors()),
  clearSearches: () => dispatch(clearSearches()),
  fetchSearch: (input) => dispatch(fetchSearch(input))

});

export default connect(mapStateToProps, mapDispatchToProps)(SearchIndex);
