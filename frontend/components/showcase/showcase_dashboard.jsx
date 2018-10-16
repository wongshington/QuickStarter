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
        <div className="showcase-photo" style={ {backgroundImage: `${project.title_image}`} }><span>{project.title}</span></div>
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
