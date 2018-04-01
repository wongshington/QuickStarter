import { connect } from 'react-redux';
import SearchIndex from './search_index';
import { clearErrors } from '../../actions/session_actions';
import { clearSearches } from '../../actions/search_actions';

const mapStateToProps = state => ({
results: state.search
});

const mapDispatchToProps = dispatch => ({
  clearErrors: () => dispatch(clearErrors()),
  clearSearches: () => dispatch(clearSearches())
});

export default connect(mapStateToProps, mapDispatchToProps)(SearchIndex);
