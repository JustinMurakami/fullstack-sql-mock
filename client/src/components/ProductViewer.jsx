import React from 'react';

export default class ProductViewer extends React.Component {
  constructor(props){
    super(props);
    this.state = {
      newBid: ''
    }

    this.handleChange = this.handleChange.bind(this);
  }

  handleChange(value) {
    this.setState({
      newBid: value
    })
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
        <form>
          <label>
            New Bid:
            <input type="number" name="amount" onChange={(e) => {this.handleChange(e.target.value)}} />
          </label>
          <input type="submit" value="Submit" />
        </form>
      </div>
    )
  }
}


//need form for new bid with submit button (newBid value in state, on change handler, submit handler)
//on change, update state for 'bid'
//on submit, if bid greater than currentItem current bid, send update to server, re-render current item (need a get one route, controller and dbhelper)