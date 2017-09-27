import merge from 'lodash/merge';
import { TOGGLE_MODAL } from  '../actions/ui_actions';


const defaultState = {modalState: false};

const UiReducer = (state= defaultState, action) => {

  Object.freeze(state);
  switch (action.type) {
    case TOGGLE_MODAL:
      return {modalState: !state.modalState};
    default:
      return state;
  }
};

export default UiReducer;
