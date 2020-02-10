import React from 'react';

import NavBarContainer from './nav_bar/nav_bar_container';
import SearchIndexContainer from './search/search_index_container';
import AppBody from './appBody.jsx';

const App = () =>(
  <div>
      <NavBarContainer />
      <SearchIndexContainer />
      <AppBody />
  </div>
);

export default App;

