import React from 'react';
import { 
   useSelector,
   useDispatch 
} from 'react-redux';

import {
   increment, 
   decrement,
   multiplyBy,
   divideBy,
   loggedIn
} from "../actions";

function Counter() {
   const counter = useSelector(state => state.counter)
   const isLogged = useSelector(state => state.isLogged);

   const dispatch = useDispatch();
   return (
      <div>
         <h1>Counter: {counter}</h1>
            <button onClick={() => dispatch(increment())}>+</button>
            <button onClick={() => dispatch(decrement())}>-</button>
            <button onClick={() => dispatch(multiplyBy(3))}>*3</button>
            <button onClick={() => dispatch(divideBy(2))}>/2</button>
            <br />
         <div>
            <button onClick={() => dispatch(loggedIn())}>Click to log in</button>
            <div>
               {
                  isLogged && <h3> valuable information you should not see if not logged in</h3>
               }
            </div>
         </div>
      </div>
   )
};

export default Counter;
