import React from 'react';

class ShowcaseDashboard extends React.Component {

  constructor(props){
    super(props);

  }

  render() {

    return (
      <div className="showcase-dashboard">
        <div className="showcase-photo">"this is the photo div"</div>
        <div className="showcase-information">
          <li>"this is item #1"</li>
          <li>"this is item #2"</li>
          <li>"this is item #3"</li>
          <li>"this is item #4"</li>
        </div>
      </div>
    );
  }


}

export default ShowcaseDashboard;
