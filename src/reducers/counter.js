// REDUCER. Describes how your actions transform your state
const counterReducer = (state = 0, action) => {
   switch(action.type) {
      case "INCREMENT":
         return state + action.payload;
      case "DECREMENT":
         return state - action.payload;
      case "MULTIPLY_BY":
         return state * action.payload;
      case "DIVIDE_BY":
         return state / action.payload;
      default:
         return state;
   }
};

export default counterReducer;