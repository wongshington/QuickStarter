import React from 'react';
import { Provider } from 'react-redux';
import {
  Route,
  Redirect,
  Switch,
  HashRouter
} from 'react-router-dom';

import ProjectIndexContainer from './projects/project_index_container';
import ProjectShowContainer from './projects/project_show_container';
import ProjectFormContainer from './projects/project_form_container';
import RewardFormContainer from './rewards/reward_form_container';
import ExploreIndexContainer from './explore/explore_index_container';
import ExploreShowContainer from './explore/explore_show_container';
import { AuthRoute, ProtectedRoute } from '../util/route_util';


const Other = (props) => {

  return (
    <div className="app-body grid">
      <div></div>
      <div>
        <Switch>
          <Route path="/explore" component={ExploreIndexContainer} />
          <ProtectedRoute path="/projects/new" component={ProjectFormContainer} />
          <Route path="/projects/:projectID/rewards/new" component={RewardFormContainer} />
          <Route path="/categories/:categoryId" component={ExploreShowContainer} />
          <Route path="/projects/:projectId" component={ProjectShowContainer} />
          <Route path="/" component={ProjectIndexContainer} />
        </Switch>
      </div>
      <div></div>
    </div>
  );
};

export default Other;