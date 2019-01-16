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
      <div to={`/projects/${project.id}`} className="showcase grid">
        <div className="showcase--content-left grid">
          <div></div>
          <span className="showcase--text showcase--header">Featured Project</span>
          <Link to={`/projects/${project.id}`} className="showcase--feature grid">
            <div className="showcase--image showcase--image-main" style={{ backgroundImage: `url(${project.title_image})`, backgroundSize: "cover"} }></div>
            <span className="showcase--text showcase--text-title" >{project.title}</span>
            <span className="showcase--text showcase--text-author" >By {project.author}</span>
          </Link>
          <div></div>
        </div>
        <div className="showcase--content-right showcase--list grid">
          <div></div>
          <span className="showcase--header">See More!</span>
          <div className="showcase--list-projects grid">
            {items}
          </div>
          <div></div>
        </div>
      </div>
    );
  }


}

export default ShowcaseDashboard;
