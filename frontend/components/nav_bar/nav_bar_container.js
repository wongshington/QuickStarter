import { connect } from 'react-redux';
import { login, logout, signup } from '../../actions/session_actions';
import { withRouter } from 'react-router-dom';

import navBar from './nav_bar';
import { toggleModal, toggleSearch } from '../../actions/ui_actions';

const mapStateToProps = ({ errorsReducer, sessionReducer }) => ({
  currentUser: sessionReducer.currentUser,
  loggedIn: Boolean(sessionReducer.currentUser),
  errors: errorsReducer.sessionErrReducer,
  modalState: false,
  formType: null
});

const mapDispatchToProps = dispatch => ({
  login: (user) => dispatch(login(user)),
  signup: (user) => dispatch(signup(user)),
  logout: () => dispatch(logout()),
  toggleModal: () => dispatch(toggleModal()),
  toggleSearch: () => dispatch(toggleSearch())

});

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(navBar));
