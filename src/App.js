import React from 'react';
import {
  Provider
} from 'react-redux';
import store from './redux';
// import Counter from "./components/Counter";
import ProductList from './components/ProductList';

import './App.css';

function App() {
  return (
    <Provider store={store}>
      <div className="App">
        {/* <Counter/> */}
        <ProductList />
      </div>
    </Provider>
  );
}

export default App;
