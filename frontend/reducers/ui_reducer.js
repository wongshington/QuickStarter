import merge from 'lodash/merge';
import { TOGGLE_MODAL } from  '../actions/ui_actions';
import { RECEIVE_RANDOM_PROJECT } from  '../actions/project_actions';


const defaultState = {modalState: false,
                      randProject: false};

const UiReducer = (state = defaultState, action) => {

  Object.freeze(state);
  switch (action.type) {
    case TOGGLE_MODAL:
      return Object.assign({}, state, { modalState: !state.modalState });
    case RECEIVE_RANDOM_PROJECT:
      return Object.assign({}, state, {randProject: action.randId});
    default:
      return state;
  }
};

export default UiReducer;
