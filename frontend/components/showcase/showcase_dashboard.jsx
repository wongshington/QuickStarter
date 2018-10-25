import React from 'react';

class ShowcaseDashboard extends React.Component {

  constructor(props){
    super(props);
    this.state = this.props.project;
  }

  componentDidMount(){
    this.props.getRandomProject(-1);
  }

  render() {
    if (!this.props.randId) return null;
    let project = this.props.project;
    // debugger
    return (
      <div className="showcase-dashboard">
        <div className={"dashboard-1"}>
          <h3>Featured Project</h3>
          <div className="showcase-photo" style={ {backgroundImage: `url(${project.title_image})`} }>
            <span className="showcase-title" >{project.title}</span>
          </div>
        </div>
        <div className={"dashboard-2"}>
          <h3>See More!</h3>
          <div className="showcase-information">
            <li>"this is item #1"</li>
            <li>"this is item #2"</li>
            <li>"this is item #3"</li>
            <li>"this is item #4"</li>
          </div>
        </div>
      </div>
    );
  }


}

export default ShowcaseDashboard;
