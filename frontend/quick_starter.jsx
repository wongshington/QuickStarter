// react stuff that you have to have for .jsx files
import React from 'react';
import ReactDOM from 'react-dom';
//stuff you need in order for the event listener to work and to tie to to the render function
import Root from './components/root';
import configureStore from './store/store';


document.addEventListener("DOMContentLoaded", () => {
  const root = document.getElementById("root");
  const store = configureStore();
  ReactDOM.render(<Root store={store} />, root);
});
