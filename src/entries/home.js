import React from 'react';
import { render } from 'react-dom';
import { createStore } from 'redux';
import { Provider } from 'react-redux';
import csrf from 'csrf';

import Home from '../pages/containers/home';
import reducer from '../reducers/data';

const Tokens = new csrf();

const initialState = {
  appName: 'Start Bootstrap',
  thereIsResult: false,
  results: [],
  job: {},
  secret: Tokens.secretSync(),
}

const store = createStore(
  reducer, // reducer
  initialState,
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
)

console.log(store.getState());

const homeContainer = document.getElementById('home-container')

render(
  <Provider store={store}>
    <Home />
  </Provider>,
  homeContainer
)