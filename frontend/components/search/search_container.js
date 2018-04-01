import { connect } from 'react-redux';
import SearchInput from './search_input';
import { selectSearches } from '../../reducers/selectors';
import { fetchSearch, clearSearches } from '../../actions/search_actions';

const mapStateToProps = state => ({
  searches: state.search

});

const mapDispatchToProps = dispatch => ({
  fetchSearch: (input) => dispatch(fetchSearch(input)),
  clearSearches: () => dispatch(clearSearches())
});

export default connect(mapStateToProps, mapDispatchToProps)(SearchInput);
