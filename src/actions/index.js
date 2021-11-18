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

