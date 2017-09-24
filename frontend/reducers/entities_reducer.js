import { combineReducers } from 'redux';

import projects from './projects_reducer';
import rewards from './rewards_reducer';

export default combineReducers({
  projects,
  rewards
});
