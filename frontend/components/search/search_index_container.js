import { connect } from 'react-redux';
import SearchIndex from './search_index';
import { clearErrors } from '../../actions/session_actions';

const mapStateToProps = state => ({
results: state.search
});

const mapDispatchToProps = dispatch => ({
  clearErrors: () => dispatch(clearErrors())
});

export default connect(mapStateToProps, mapDispatchToProps)(SearchIndex);
