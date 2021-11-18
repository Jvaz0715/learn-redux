import React, {useState, useEffect} from 'react';
import ProductCard from './ProductCard';
import axios from 'axios';

async function getProducts(){
   try{
      let products = await axios.get("https://fakestoreapi.com/products");
      return products.data;
   } catch(e) {
      console.log(e);
   }
};

function Products() {
   const [productsList, setProductsList] = useState([]);

   useEffect(()=> {
      getProducts()
         .then((products) => {
            setProductsList(products)
         })
   }, [])
   return (
      <div>
         <ul style={{listStyleType: "none"}}>
            {productsList.map((product) =>{
               return (
                  <ProductCard 
                     key={product.id} 
                     product={product}
                  />
               )
            })}
         </ul>
      </div>
   )
}

export default Products;
