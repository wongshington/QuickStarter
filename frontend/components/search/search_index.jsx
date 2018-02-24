import React from 'react';

class SearchIndex extends React.Component {

  constructor(props) {
    super(props);
  }

  componentWillReceiveProps(nextProps) {
    // debugger
    if (nextProps.results[0]){
      console.log("I'm going to clear errors here");
    }
  }

  render() {
    let results = this.props.results;
    if (results[0] === undefined) {
      return <div>Loading....</div>;
    } else {
// by including this classname in this else statement it just wont appear before you search

    return (
    <div className="searchIndex">
      {results[0].title}
    </div>
    );
  }
}
}

export default SearchIndex;
