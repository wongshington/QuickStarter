import React from 'react';
import DashboardItem from './dashboardItem.jsx';
import {Link} from 'react-router-dom';

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
    let items = this.props.projects.map( (el) =>  (<DashboardItem key={el.title} project={el}/> ) );

    return (
      <div to={`/projects/${project.id}`} className="showcase-dashboard">
        <Link to={`/projects/${project.id}`} className={"dashboard-1"}>
          <h3>Featured Project</h3>
          <div className="showcase-photo" style={ {backgroundImage: `url(${project.title_image})`} }>
            <span className="showcase-title" >{project.title}</span>
            <span className="showcase-author" >By {project.author}</span>
          </div>
        </Link>
        <div className={"dashboard-2"}>
          <h3>See More!</h3>
          <div className="showcase-information">
            {items}
          </div>
        </div>
      </div>
    );
  }


}

export default ShowcaseDashboard;
