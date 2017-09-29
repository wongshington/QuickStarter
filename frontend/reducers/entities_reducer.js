import { combineReducers } from 'redux';

import projects from './projects_reducer';
import rewards from './rewards_reducer';
import categories from './categories_reducer';

export default combineReducers({
  categories,
  projects,
  rewards
});
