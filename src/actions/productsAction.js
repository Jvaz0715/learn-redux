import axios from 'axios';

export const getProducts = () => async dispatch => {
   try{
      const products = await axios.get(`https://fakestoreapi.com/products`)
      dispatch( {
         type: "GET_PRODUCTS",
         payload: products.data
      })
   }
   catch(e){
      dispatch( {
         type: "USERS_ERROR",
         payload: console.log(e),
      })
   }
};