import { connect } from 'react-redux';
import SearchIndex from './SearchIndex';
import { selectSearches } from '../reducers/selectors';
import { fetchSearch } from '../actions/search_actions';

const mapStateToProps = state => ({
projects: selectSearches(state)
});

const mapDispatchToProps = dispatch => ({
  fetchSearch: (input) => dispatch(fetchSearch(input))
});

export default connect(mapStateToProps, mapDispatchToProps)(SearchIndex);
