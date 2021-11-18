import React from 'react'

function ProductCard(props) {
   console.log(props.product)
   return (
      <li>
         {props.product.title}
         <div>
            <img src={props.product.image} alt={props.product.title} width="100px" height="100px"/>
         </div>
      </li>
   )
};

export default ProductCard
