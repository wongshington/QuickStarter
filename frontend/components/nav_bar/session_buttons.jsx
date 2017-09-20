import React from 'react';
import { Link } from 'react-router-dom';

const sessionLinks = () => (
  <li>
  <Link to="/login">Login</Link>
  &nbsp;
  <Link to="/signup">Sign Up!</Link>
  </li>
);

const SignOutButton = (logout) => (
  <li>
    <button onClick={logout}>Log Out</button>
  </li>
);

const SessionButtons = ({ currentUser, logout, }) => (
  currentUser ? SignOutButton(logout) : sessionLinks()
);

export default SessionButtons;
