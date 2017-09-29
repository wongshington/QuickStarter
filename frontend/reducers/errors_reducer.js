import { combineReducers } from 'redux';

import sessionErrReducer from './session_errors_reducer';
import formErrorsReducer from './form_errors_reducer';

export default combineReducers({
  sessionErrReducer,
  formErrorsReducer
});
