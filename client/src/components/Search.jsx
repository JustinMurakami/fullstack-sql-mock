import React from 'react';

class Search extends React.Component {
  constructor(props) {
    super(props)

    this.state = {
      searchedWord: ''
    }

    this.handleChange = this.handleChange.bind(this)
  }

  handleChange(e) {
    this.setState({
      searchedWord: e.target.value
    })
  }

  render() {
    return(
      <div className="search-bar form-inline" >
        <input className="form-control" type="text" onChange={(e) => {this.handleChange(e)}} />
        <button className="btn hidden-sm-down">
          <span className="glyphicon glyphicon-search">SEARCH</span>
        </button>
      </div>
    )
  };
}


export default Search;