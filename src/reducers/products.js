const initialState = {
   products: [],
   loading: true,
}
const fetchProducts = (state = initialState, action) => {
   switch(action.type){
      case "GET_PRODUCTS":
         return {
            ...state,
            products: action.payload,
            loading: false,
         }
         default: 
            return state;
      };
};

export default fetchProducts;