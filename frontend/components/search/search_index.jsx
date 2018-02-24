import React from 'react';

class SearchIndex extends React.Component {

  constructor(props) {
    super(props);
  }

  componentWillReceiveProps(nextProps) {
    debugger
  }


  render() {
    let results = this.props.results;
    if (results[0] === undefined) {
      return <div>Loading....</div>;
    } else {


    return (
    <div className="searchIndex">
      {results[0].title}
    </div>
    );
  }
}
}

export default SearchIndex;
