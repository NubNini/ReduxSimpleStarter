import React, { Component } from "react";

// Class level components
class SearchBar extends Component {
  // Initialise a state in constructor
  // Create constructor method and argument props
  constructor(props) {
    super(props);

    this.state = { term: "" };
  }
  render() {
    // Functional Component
    return <input placeholder="Search" onChange={this.onInputChange} />;
  }

  // Arrow Function
  onInputChange = e => {
    console.log(e.target.value);
  };
}

export default SearchBar;
