import React from "react";

class Search extends React.Component{

  constructor(props) {
		super(props);
    this.state = {
      search: ""
    };
  }

  render(){
    return (
      <div className="search-component">
        <input type="text" onChange={this.changeSearch.bind(this)} />
        <p><span>You are searching for: {this.state.search}</span></p>
      </div>
    );
  }

  changeSearch(event) {
    var text = event.target.value;
    this.setState({
      search: text
    });
  }
}

export default Search;
