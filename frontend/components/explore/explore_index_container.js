import { connect } from 'react-redux';
import ExploreIndex from './explore_index';
import { getCategories, getCategory } from '../../actions/category_actions';
import { withRouter } from 'react-router-dom';
import { selectAllCategories } from '../../reducers/selectors';


const mapStateToProps = (state) => {

  return ({
    categories: state.entitiesReducer.categories,
  });
};

const mapDispatchToProps = dispatch => ({
    getCategories: () => dispatch(getCategories()),
    getCategory: () => dispatch(getCategory())
});

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(ExploreIndex));
