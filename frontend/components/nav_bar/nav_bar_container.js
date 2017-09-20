import { connect } from 'react-redux';
import { login, logout, signup } from '../../actions/session_actions';

import SessionButtons from './session_buttons';

const mapStateToProps = ({ sessionReducer }) => ({
  currentUser: sessionReducer.currentUser
});

const mapDispatchToProps = dispatch => ({
  login: (user) => dispatch(login(user)),
  signup: (user) => dispatch(signup(user)),
  logout: () => dispatch(logout())
});

export default connect(mapStateToProps, mapDispatchToProps)(SessionButtons);
