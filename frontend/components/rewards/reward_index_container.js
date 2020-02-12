import { connect } from "react-redux";
import RewardIndex from "./reward_index";
import { getRewards, postBacking } from "../../actions/reward_actions";
import { patchFundingProject } from "../../actions/project_actions";
import { getProject } from "../../actions/project_actions";
import { selectRewards } from "../../reducers/selectors";

const mapStateToProps = (state, ownProps) => {
  // let stuff = selectRewards(state.entitiesReducer.rewards);
  // console.log(stuff);
  // debugger;
  return {
    projectId: ownProps.match.params.projectId,
    currentUser: state.sessionReducer.currentUser,
    rewards: selectRewards(state.entitiesReducer.rewards)
  };
};

const mapDispatchToProps = (dispatch, ownProps) => ({
  getRewards: id => dispatch(getRewards(id)),
  patchFundingProject: (id, amount) =>
    dispatch(patchFundingProject(id, amount)),
  postBacking: (userId, reward) => dispatch(postBacking(userId, reward)),
  getProject: id => dispatch(getProject(id))
});

export default connect(mapStateToProps, mapDispatchToProps)(RewardIndex);
