import React from 'react';

export default class ProductViewer extends React.Component {
  constructor(props){
    super(props);
    this.state = {
      bid: ''
    }
  }

  render(){
    return(
      <div className = 'product-viewer'>
        <h2>CURRENT ITEM</h2>
        <img src={this.props.currentItem.image}></img>
        <h4>{this.props.currentItem.item}</h4>
        <p>Current Bid: {this.props.currentItem.curr_bid}</p>
        <p>Original Posting Price: {this.props.currentItem.min_cost}</p>
        <p>Auction Ends In: {this.props.currentItem.ends_in} days!!!</p>
      </div>
    )
  }
}

//need to show image, item (description, current bid: info, original posting price: info, bid ends in: info days)
//need form for new bid with submit button (value in state, on change handler, submit handler)