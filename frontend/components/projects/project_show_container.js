
import { connect } from 'react-redux';

import ProjectShow from './project_show';
import { getProject, patchFundingProject} from '../../actions/project_actions';
// import { postFunds } from '../../actions/project_actions';



const mapStateToProps = (state, ownProps) => {
  return ({
  project: state.entitiesReducer.projects[ownProps.match.params.projectId],
  currentUser: state.sessionReducer.currentUser
});
};

const mapDispatchToProps = (dispatch, ownProps) => ({
  getProject: (id) => dispatch(getProject(id)),
  patchFundingProject: (id, amount) => dispatch(patchFundingProject(id, amount))
  // postFunds: (reward) => dispatch(postFunds(reward))
});

export default connect(mapStateToProps, mapDispatchToProps)(ProjectShow);
