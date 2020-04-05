import React from "react";
import { Provider } from "react-redux";
import { connect } from "react-redux";
import { Route, Redirect, Switch, withRouter } from "react-router-dom";

import ProjectIndexContainer from "./projects/project_index_container";
import ProjectShowContainer from "./projects/project_show_container";
import ProjectFormContainer from "./projects/project_form_container";
import RewardFormContainer from "./rewards/reward_form_container";
import ExploreIndexContainer from "./explore/explore_index_container";
import ExploreShowContainer from "./explore/explore_show_container";
import AuthContainer from "./auth/auth_container";
import { AuthRoute, ProtectedRoute } from "../util/route_util";
import { strictEqual } from "assert";

const Other = (props) => {
  let hideClass = "";
  if (props.displayNone && props.results.length > 0) {
    //need to also check if there are responses
    hideClass = " none";
  }

  return (
    <div className={`grid ${hideClass}`}>
      <Switch>
        <AuthRoute path="/login" component={AuthContainer} />
        <AuthRoute path="/signup" component={AuthContainer} />
        <Route path="/explore" component={ExploreIndexContainer} />
        <ProtectedRoute path="/projects/new" component={ProjectFormContainer} />
        <Route
          path="/projects/:projectId/rewards/new"
          component={RewardFormContainer}
        />
        <Route
          path="/categories/:categoryId"
          component={ExploreShowContainer}
        />
        <Route path="/projects/:projectId" component={ProjectShowContainer} />
        <Route path="/" component={ProjectIndexContainer} />
      </Switch>
    </div>
  );
};

const mSTP = (state, ownProps) => {
  return {
    displayNone: state.uiReducer.searchState,
    results: state.search,
    route: ownProps.location.pathname, // need this so that props change and triggers a rerender
  };
};

export default withRouter(connect(mSTP, null)(Other));
