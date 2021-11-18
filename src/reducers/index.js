import counterReducer from "./counter";
import loggedReducer from "./isLogged";
import productsReducer from "./products";
import { combineReducers } from "redux";

const rootReducer = combineReducers({
   counter: counterReducer,
   logged: loggedReducer,
   products: productsReducer,
});

export default rootReducer;