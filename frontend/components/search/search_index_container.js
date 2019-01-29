import { connect } from 'react-redux';
import SearchIndex from './search_index';
import { clearErrors } from '../../actions/session_actions';
import { fetchSearch, clearSearches } from '../../actions/search_actions';
import { toggleSearch } from '../../actions/ui_actions';

const mapStateToProps = state => {
  return ({
      results: state.search,
      searchState: state.uiReducer.searchState,
      errors: !!state.errorsReducer.searchErrorsReducer[0]
    });
};

const mapDispatchToProps = dispatch => ({
  clearErrors: () => dispatch(clearErrors()),
  clearSearches: () => dispatch(clearSearches()),
  fetchSearch: (input) => dispatch(fetchSearch(input)),
  toggleSearch: () => dispatch(toggleSearch())

});

export default connect(mapStateToProps, mapDispatchToProps)(SearchIndex);
