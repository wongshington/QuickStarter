import { combineReducers } from 'redux';

import entitiesReducer from './entities_reducer';
import uiReducer from './ui_reducer';
import sessionReducer from './session_reducer';
import errorsReducer from './errors_reducer';
import search from './search_reducer';


const RootReducer = combineReducers({
  entitiesReducer,
  search,
  sessionReducer,
  uiReducer,
  errorsReducer,
});

export default RootReducer;
