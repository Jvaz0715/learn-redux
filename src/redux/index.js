import {createStore, applyMiddleware} from 'redux'
import thunk from 'redux-thunk';
import {composeWithDevTools} from 'redux-devtools-extension';

import rootReducer from '../reducers';

const initialState = {};
const middleware = [thunk];

const store = createStore(
   rootReducer,
   initialState, 
   window.__REDUX_DEVTOOLS_EXTENSION__ 
      && window.__REDUX_DEVTOOLS_EXTENSION__() 
      && composeWithDevTools(applyMiddleware(...middleware)),
);

// DISPATCH. Uses the action

export default store;