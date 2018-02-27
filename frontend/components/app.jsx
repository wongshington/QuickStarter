import React from 'react';
import { Provider } from 'react-redux';
import {
  Route,
  Redirect,
  Switch,
  Link,
  HashRouter
} from 'react-router-dom';

import NavBarContainer from './nav_bar/nav_bar_container';
import ProjectIndexContainer from './projects/project_index_container';
import ProjectShowContainer from './projects/project_show_container';
import ProjectFormContainer from './projects/project_form_container';
import RewardFormContainer from './rewards/reward_form_container';
import ExploreIndexContainer from './explore/explore_index_container';
import ExploreShowContainer from './explore/explore_show_container';
import SearchIndexContainer from './search/search_index_container';


// <SearchContainer />

const App = () =>(
  <div>
      <NavBarContainer />
      <SearchIndexContainer />
      <Switch>
        <Route path="/explore" component={ExploreIndexContainer}/>
        <Route path="/projects/new" component={ProjectFormContainer} />
        <Route path="/projects/:projectID/rewards/new" component={RewardFormContainer} />
        <Route path="/categories/:categoryId" component={ExploreShowContainer} />
        <Route path="/projects/:projectId" component={ProjectShowContainer} />
        <Route exact path="/" component={ProjectIndexContainer} />
      </Switch>
  </div>
);

export default App;



//
// <NavBarContainer />
// <Splash />
// <ProjectContainer />
