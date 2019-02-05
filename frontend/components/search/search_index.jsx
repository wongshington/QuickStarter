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
    this.searchToggle = this.searchToggle.bind(this);

  }
 
  componentWillReceiveProps(nextProps) {
    if (nextProps.results[0] && nextProps.errors){ // only clear if there is something to clear
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
  
  searchToggle(e){ //should rename this later
    e.preventDefault(); //might not need
    this.props.toggleSearch();
    this.props.clearSearches();
    this.props.clearErrors();
  }

  render() {
    let results = this.props.results;
    
    let fullSearchWindow = ""; // to show the full screen only when there are search results
    if (this.props.results.length > 0) fullSearchWindow = "search--full-screen";

    let show = this.props.searchState; //this will control if the search components should be showing
    if (!show){
      return null;
    }

    return (
      <div className={`search--overlay ` + fullSearchWindow}>
        <div className="search--input-bar flex">
          <Search 
              clearSearches={this.props.clearSearches} 
              fetchSearch={this.props.fetchSearch}
              />
          <div className="search--input-close" onClick={this.searchToggle}>X</div>
          {/* Loading....(search_index) */}
        </div>
        <div className="grid search--results">
          {this.renderResults()}
        </div>
      </div>
    );

  }
}

export default SearchIndex;
