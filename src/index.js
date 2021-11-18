import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import { createStore } from 'redux';
import rootReducer from './reducers';
import {Provider} from 'react-redux';

// STORE. Store is the globalized state and holds all the data for the app
// store takes the reducers we created as the first argument
const store = createStore(
  rootReducer,
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()//for use in chrome redux devtools;
  );

// ACTION. Describes what it is you want to do
// action increment
const increment = () => {
  return {
    type: 'INCREMENT',
  }
};

// action decrement
const decrement = () => {
  return {
    type: 'DECREMENT',
  }
};

// DISPATCH. Uses the action

ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
      <App />
    </Provider>
  </React.StrictMode>,
  document.getElementById('root')
);
