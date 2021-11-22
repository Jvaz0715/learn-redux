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
   const isLogged = useSelector(state => state.logged);

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
            <button onClick={() => dispatch(loggedIn())}>
               {
                  isLogged
                     ? `Click to log in`
                     : `Logout`
               }
            </button>
            <div>
               {
                  isLogged 
                     ? <span>Should only see this if you are logged in</span> 
                     : <span>Log in to see information</span>
               }
            </div>
         </div>
      </div>
   )
};

export default Counter;
