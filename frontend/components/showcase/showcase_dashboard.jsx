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
      <div to={`/projects/${project.id}`} className="showcase">
        <Link to={`/projects/${project.id}`} className="showcase--content flex">
          <h3 className="showcase--text showcase--text-header">Featured Project</h3>
          <div className="showcase--image showcase--image-main" style={ {backgroundImage: `url(${project.title_image})`} }></div>
          <span className="showcase--text showcase--text-title" >{project.title}</span>
          <span className="showcase--text showcase--text-author" >By {project.author}</span>
        </Link>
        <div className="">
          <h3>See More!</h3>
          <div className="">
            {items}
          </div>
        </div>
      </div>
    );
  }


}

export default ShowcaseDashboard;
