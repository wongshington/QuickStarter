import React from 'react';
import Search from './search';
import SearchIndexItem from './search_index_item';

class SearchIndex extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      // photo: ""
    };
    this.renderResults = this.renderResults.bind(this);
  }
 
  componentWillReceiveProps(nextProps) {
    // debugger
    if (nextProps.results[0]){
      this.props.clearErrors();
    }
  }

  renderResults(){
    let indexItems = this.props.results.map( el => {
      return <SearchIndexItem item={el}/>;
    });

    // debugger
    return indexItems;
    
  }

  // unsplash(){ // this is just to test out some unsplash api business(don't forget ti replace the client_id)
  //   console.log("this is inside the unsplash function");
  //   let response = fetch("https://api.unsplash.com/photos/random?client_id=CLIENT___ID");
  //   response.then( el => el.json() ).then( data => {
  //     console.log(data.urls.full, "sfdfdsf");
  //     // this.setState({ photo: data.urls.full });
  //    }).catch( err => console.log("errrrrr", err));
  // }

  componentDidMount(){
    // this.unsplash();
    // uncomment this when the limit is back up
  }

  render() {
    let results = this.props.results;

    let show = this.props.searchState; //this will control if the search components should be showing
    // let invisibleClass = "";
    // if (show) invisibleClass = "none";
    // if (show) {
    //   return null;
    // }

    // if (results[0]) {
      return (
        <div>
          <div className="search--input-bar flex">
            <Search 
                clearSearches={this.props.clearSearches} 
                fetchSearch={this.props.fetchSearch}
                />
            <div className="search--input-close" onClick={() => console.log("this should close this")}>X</div>
            {/* Loading....(search_index) */}
          </div>
          <div className="grid search--results">
            {this.renderResults()}
          </div>
        </div>
      );
//     } else {
// // by including this classname in this else statement it just wont appear before you search

//     return (
//     <div className="searchIndex">
//       {results[0].title}
//     </div>
//     );
//   }
}
}

export default SearchIndex;
