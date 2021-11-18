import React from 'react';
import { 
  useSelector,
  useDispatch 
} from 'react-redux';

import {
  increment, 
  decrement
} from "./actions";

import './App.css';

function App() {
  const counter = useSelector(state => state.counter)
  const isLogged = useSelector(state => state.isLogged);

  const dispatch = useDispatch();

  return (
    <div className="App">
      <h1>Counter: {counter}</h1>
      <button onClick={() => dispatch(increment())}>+</button>
      <button onClick={() => dispatch(decrement())}>-</button>

      {
        isLogged
          ? <h3> valuable information you should not see if not logged in</h3>
          : ""
      }

    </div>
  );
}

export default App;
