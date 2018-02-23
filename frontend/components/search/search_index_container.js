import { connect } from 'react-redux';
import SearchIndex from './search_index';

const mapStateToProps = state => ({
results: state.search
});

const mapDispatchToProps = dispatch => ({

});

export default connect(mapStateToProps, null)(SearchIndex);
