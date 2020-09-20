import React from 'react';

const Products = (props) => {
   return(
    <div onClick={() => {props.changeCurrentItem(props.item)}} className='product-list-entry'>
      <img src={props.item.image}></img>
      <h4>{props.item.item}</h4>
      <p>Current Bid: {props.item.curr_bid}</p>
      <p>Ends in {props.item.ends_in} Days.</p>
    </div>
  )
}

export default Products