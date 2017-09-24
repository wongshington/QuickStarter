import { connect } from 'react-redux';
import RewardIndex from './reward_index';
import { getRewards } from '../../actions/reward_actions';

const mapStateToProps = (state, ownProps) =>{
  let projectID= ownProps.match.params.projectId;
return ({
    rewards: state.entitiesReducer.projects.projectID.rewards
});
};

const mapDispatchToProps = (dispatch, ownProps) => ({
  getRewards: () => dispatch(getRewards())
});

export default connect(mapStateToProps, mapDispatchToProps)(RewardIndex);
