import React from 'react';

class Search extends React.Component {
  constructor(props) {
    super(props)

    this.state = {
      searchedWord: ''
    }

    this.handleChange = this.handleChange.bind(this)
    this.handleClick = this.handleClick.bind(this)
  }

  handleChange(e) {
    this.setState({
      searchedWord: e.target.value
    })
  }

  handleClick() {
    this.props.search(this.state.searchedWord)
  }

  render() {
    return(
      <div className="search-bar form-inline" >
        <input className="form-control" type="text" onChange={(e) => {this.handleChange(e)}} />
        <button className="btn hidden-sm-down" onClick={() => {this.handleClick()}}>
          <span className="glyphicon glyphicon-search">SEARCH</span>
        </button>
      </div>
    )
  };
}


export default Search;