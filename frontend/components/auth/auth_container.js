import Auth from './auth_form';
import { connect } from 'react-redux';
// import { toggleModal } from '../../actions/ui_actions';
import { login, logout, signup, clearErrors } from '../../actions/session_actions';

const mapStateToProps = (state, ownProps) => {
  let formType = ownProps.location.pathname == "/login" ? "Login" : "Sign Up";
  return ({
    modalState: state.uiReducer.modalState,
    errors: state.errorsReducer.sessionErrReducer,
    currentUser: state.sessionReducer.currentUser,
    formType
  });
};


const mapDispatchToProps = (dispatch) => {
  console.log("clear")
  return ({
    login: (user) => dispatch(login(user)),
    signup: (user) => dispatch(signup(user)),
    logout: () => dispatch(logout()),
    clearErrors: () => dispatch(clearErrors())
  })
};

export default connect(mapStateToProps, mapDispatchToProps)(Auth);
