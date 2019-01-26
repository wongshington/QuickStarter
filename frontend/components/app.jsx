import React from 'react';

import NavBarContainer from './nav_bar/nav_bar_container';
import SearchIndexContainer from './search/search_index_container';
import AppBody from './appBody.jsx';
// import Search from './search/search.jsx';

// <SearchContainer />

const App = () =>(
  <div>
      <NavBarContainer />
      <SearchIndexContainer />
      <AppBody />
  </div>
);

export default App;

