import { connect } from "react-redux";
import { withRouter } from "react-router-dom";

import CustomFund from "./custom_fund_form";
import { fundAmount } from "../../actions/project_actions";

const mapStateToProps = (state, ownProps) => {
  return {
    errors: state.errorsReducer.formErrorsReducer,
    path: ownProps.match.params.path,
    support: {
      supporter_id: state.sessionReducer.currentUser.id,
      project_id: ownProps.match.params.projectId,
      backed_amount: 0,
    },
  };
};

const mapDispatchToProps = (dispatch, ownProps) => ({
  // postReward: (project) => dispatch(postReward(project)),
  // clearErrors: () => dispatch(clearErrors()),
  fundAmount: (support) => dispatch(fundAmount(support)),
});

export default withRouter(
  connect(mapStateToProps, mapDispatchToProps)(CustomFund)
);
