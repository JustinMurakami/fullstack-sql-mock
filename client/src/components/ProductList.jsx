import React from 'react';
import Products from './Products';

const ProductList = (props) => {
  var products = props.items.map((item, index) => {
    return(
      <Products key={index} item={item} changeCurrentItem={props.changeCurrentItem}/>
    )
  })
  return(
    <div className='product-list'>
      {products}
    </div>
  )
}

export default ProductList