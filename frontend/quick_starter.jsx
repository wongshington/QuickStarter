// react stuff that you have to have for .jsx files
import React from 'react';
import ReactDOM from 'react-dom';
//stuff you need in order for the event listener to work and to tie to to the render function
import Root from './components/root';
import configureStore from './store/store';
// testing

import { login, signup, logout } from './actions/session_actions';



document.addEventListener("DOMContentLoaded", () => {
  const root = document.getElementById("root");
  let store;
  if (window.currentUser) {
    const preloadedState = {sessionReducer: {currentUser: window.currentUser} };
    store = configureStore(preloadedState);
    delete window.currentUser;
  } else {
    store = configureStore();
  }
// Testing Start
  window.getState = store.getState;
  window.dispatch = store.dispatch;

// Testing End

  ReactDOM.render(<Root store={store} />, root);
});
