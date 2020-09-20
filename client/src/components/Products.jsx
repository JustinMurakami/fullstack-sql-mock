import React from 'react';

const Products = (props) => {
   return(
    <div className='product-list-entry'>
      <img src={props.image}></img>
      <h4>{props.item}</h4>
   <p>Current Bid: {props.curr_bid}</p>
      <p>Ends in {props.ends_in} Days.</p>
    </div>
  )
}

export default Products