import ModalSessionForm from './modal_session_form';
import { connect } from 'react-redux';
import { toggleModal } from '../../actions/ui_actions';
import { login, logout, signup, clearErrors } from '../../actions/session_actions';

const mapStateToProps = (state) => {
  return ({
  modalState: state.uiReducer.modalState,
  errors: state.errorsReducer.sessionErrReducer
});
};


const mapDispatchToProps= (dispatch) => ({

  toggleModal: () => dispatch(toggleModal()),
  login: (user) => dispatch(login(user)),
  signup: (user) => dispatch(signup(user)),
  logout: () => dispatch(logout()),
  clearErrors: () => dispatch(clearErrors())

});

export default connect(mapStateToProps, mapDispatchToProps)(ModalSessionForm);
