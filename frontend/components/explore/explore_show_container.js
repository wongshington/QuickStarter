
import { connect } from 'react-redux';

import ExploreShow from './explore_show';
import { getCategory } from '../../actions/category_actions';
import { withRouter } from 'react-router-dom';




const mapStateToProps = (state, ownProps) => {
  return ({
      category: state.entitiesReducer.categories[ownProps.match.params.categoryId],
      currentUser: state.sessionReducer.currentUser
});
};

const mapDispatchToProps = (dispatch, ownProps) => ({
  getCategory: (id) => dispatch(getCategory(id))
});

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(ExploreShow));
