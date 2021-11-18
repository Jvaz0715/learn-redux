import React from 'react';
import {
  Provider
} from 'react-redux';
import store from './redux';
// import Counter from "./components/Counter";
import Products from './components/Products';

import './App.css';

function App() {
  return (
    <Provider store={store}>
      <div className="App">
        {/* <Counter/> */}
        <Products />
      </div>
    </Provider>
  );
}

export default App;
