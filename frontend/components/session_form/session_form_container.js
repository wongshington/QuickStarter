import { connect } from 'react-redux';

import { login, logout, signup } from '../../actions/session_actions';
import SessionForm from './session_form';

const mapStateToProps = (state, ownProps) => {
  return {
    loggedIn: Boolean(state.sessionReducer.currentUser),
    errors: state.errorsReducer.sessionErrReducer
  };
};

const mapDispatchToProps = (dispatch, ownProps) => {
  const formType = ownProps.location.pathname;
  const formAction= (formType ==='/login') ? login : signup;
  return {
  formAction: (user) => dispatch(formAction(user)),
  formType
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(SessionForm);
