import React from 'react';
import Products from './Products';

const ProductList = (props) => {
  var products = props.items.map((item, index) => {
    return(
      <Products key={index} image={item.image} item={item.item} curr_bid={item.curr_bid} ends_in={item.ends_in}/>
    )
  })
  return(
    <div className='product-list'>
      {products}
    </div>
  )
}

export default ProductList