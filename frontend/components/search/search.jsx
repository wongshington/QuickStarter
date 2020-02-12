import React from "react";

// kickstarter.com just renders this on top of the existing navbar and makes an animation fade in to do it

class Search extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      search: "",
      timeout: null
    };
    this.update = this.update.bind(this);
    this.debounced = this.debounced.bind(this);
  }

  debounced() {
    if (this.state.search.length != 0) {
      this.props.fetchSearch(this.state.search);
    }
  }

  clearTimeout() {
    let time = window.setTimeout(this.debounced, 2000);
    if (this.state.timeout) window.clearTimeout(this.state.timeout);
  }
  update(e) {
    // the following two lines act as a debouncing functionality
    let time = window.setTimeout(this.debounced, 2000);
    this.setState({ search: e.target.value, timeout: time });
  }

  render() {
    return (
      <input
        className="search--input-field"
        type="text"
        placeholder="Where's Waldo?"
        value={this.state.search}
        onChange={this.update}
      />
    );
  }
}

export default Search;
