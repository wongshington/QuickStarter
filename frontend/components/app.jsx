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
import ProjectContainer from './projects/project_index_container';


const App = () =>(
  <div>
      <NavBarContainer />
      <ProjectContainer />

  </div>
);

export default App;
