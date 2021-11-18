// ACTION. Describes what it is you want to do
// action increment

/*
   if you wanted to add a payload like lets say a product id or user id
   than you would pass the params inside the parenthesis and another object key taht is the payload
*/ 

export const increment = (num = 1) => {
   return {
      type: 'INCREMENT',
      payload: num,
   }
};

// action decrement
export const decrement = (num = 1) => {
   return {
      type: 'DECREMENT',
      payload: num,
   }
};

export const multiplyBy = (num = 1) => {
   return {
      type: "MULTIPLY_BY",
      payload: num,
   }
};

export const divideBy = (num = 1) => {
   return {
      type: "DIVIDE_BY",
      payload: num,
   }
};