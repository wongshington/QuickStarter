import { connect } from 'react-redux';
import RewardIndex from './reward_index';
import { getRewards, postBacking } from '../../actions/reward_actions';
import { patchFundingProject } from '../../actions/project_actions';
import { toggleModal } from '../../actions/ui_actions';
import { getProject } from '../../actions/project_actions';

const mapStateToProps = (state, ownProps) =>{
  debugger
  return ({
    projectId: ownProps.projectId,
    currentUser: state.sessionReducer.currentUser,
    rewards: state.entitiesReducer.rewards
  });
};

const mapDispatchToProps = (dispatch, ownProps) => ({
  getRewards: () => dispatch(getRewards()),
  patchFundingProject: (id, amount) => dispatch(patchFundingProject(id, amount)),
  toggleModal: ()=> dispatch(toggleModal()),
  postBacking: (userId, reward) => dispatch(postBacking(userId, reward)),
  getProject: (id) => dispatch(getProject(id))
});

export default connect(mapStateToProps, mapDispatchToProps)(RewardIndex);
