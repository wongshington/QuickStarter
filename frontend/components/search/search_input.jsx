import React from 'react';

class SearchInput extends React.Component {

  // kickstarter.com just renders this on top of the existing navbar and makes an animation fade in to do it

  constructor(props) {
    super(props);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.state = {
      query: ""
    };
  }

  update(field) {
      return e=> this.setState({
        [field]: e.currentTarget.value
      });
  }

  handleSubmit(e) {
    e.preventDefault();
    if(this.props.searches[0] !== undefined) {
      this.props.clearSearches();
    }
    this.props.fetchSearch(this.state.query);
  }

  render() {
    return (
      <div>
        <i className="fa fa-search" aria-hidden="true"></i>
        <form onSubmit={this.handleSubmit} className="SearchInput">
          <input onChange={this.update("query")} type="text" placeholder="search here?"></input>
        </form>
       </div>
    );
  }

}

export default SearchInput;
