import { connect } from 'react-redux';
import RewardIndex from './reward_index';
import { getRewards } from '../../actions/reward_actions';

const mapStateToProps = (state, ownProps) =>{
return ({
  project: ownProps.project
});
};

const mapDispatchToProps = (dispatch, ownProps) => ({
  getRewards: () => dispatch(getRewards())
});

export default connect(mapStateToProps, mapDispatchToProps)(RewardIndex);
