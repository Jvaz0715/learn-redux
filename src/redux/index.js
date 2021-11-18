import { createStore } from 'redux';
import rootReducer from '../reducers';

// STORE. Store is the globalized state and holds all the data for the app
// store takes the reducers we created as the first argument
const store = createStore(
   rootReducer,
   window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()//for use in chrome redux devtools;
);

// DISPATCH. Uses the action

export default store;