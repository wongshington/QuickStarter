
import { connect } from 'react-redux';

import ExploreShow from './explore_show';
import { getCategory } from '../../actions/category_actions';
import { withRouter } from 'react-router-dom';
import { categoryProjects } from '../../reducers/selectors';

const mapStateToProps = (state, ownProps) => {
  const categoryIdx = ownProps.match.params.categoryId;

  return ({
    category: state.entitiesReducer.categories[categoryIdx],
    currentUser: state.sessionReducer.currentUser,
    projects: categoryProjects(categoryIdx, state.entitiesReducer.projects)
  });
};

const mapDispatchToProps = (dispatch, ownProps) => ({
  getCategory: (id) => dispatch(getCategory(id))
});

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(ExploreShow));
