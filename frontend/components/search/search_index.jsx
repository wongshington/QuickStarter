import React from 'react';

class SearchIndex extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      photo: ""
    };
  }

  componentWillReceiveProps(nextProps) {
    // debugger
    if (nextProps.results[0]){
      this.props.clearErrors();
    }
  }

  unsplash(){ // this is just to test out some unsplash api business(don't forget ti replace the client_id)
    console.log("this is inside the unsplash function");
    let response = fetch("https://api.unsplash.com/photos/random?client_id=CLIENT___ID");
    response.then( el => el.json() ).then( data => {
      console.log(data.urls.full, "sfdfdsf");
      // this.setState({ photo: data.urls.full });
     }).catch( err => console.log("errrrrr", err));
    
  }

  componentDidMount(){
    // this.unsplash();
    // uncomment this when the limit is back up
  }

  render() {
    let results = this.props.results;
    if (results[0] === undefined) {
      return (
        <div>
          <img src={`${this.state.photo}`} />
          Loading....(search_index)
        </div>
      );
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
