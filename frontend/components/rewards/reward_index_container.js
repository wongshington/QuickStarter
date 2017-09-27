import { connect } from 'react-redux';
import RewardIndex from './reward_index';
import { getRewards } from '../../actions/reward_actions';
import { patchFundingProject } from '../../actions/project_actions';
import { toggleModal } from '../../actions/ui_actions';

const mapStateToProps = (state, ownProps) =>{
return ({
  project: ownProps.project,
  currentUser: state.sessionReducer.currentUser
});
};

const mapDispatchToProps = (dispatch, ownProps) => ({
  getRewards: () => dispatch(getRewards()),
  patchFundingProject: (id, amount) => dispatch(patchFundingProject(id, amount)),
  toggleModal: ()=> dispatch(toggleModal())

});

export default connect(mapStateToProps, mapDispatchToProps)(RewardIndex);
