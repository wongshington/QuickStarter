import React from 'react';
import { Link } from 'react-router-dom';
import { Line } from 'rc-progress';
// import rewardContainer from 'wherever';

const CategoryIndexItem = ({ project }) => {
  return (
  <li className="index--item grid" >
    <Link to={`/projects/${project.id}`}>
        <div style={{ backgroundImage: `url(${project.title_image})` }} className="index--project-img flex img">
          <Line 
            percent={project.funded_percentage}
            strokeWidth="5.5"
            strokeLinecap="square"
            trailWidth="5.5"
            strokeColor="#029469"
            trailColor="#f4f7f9" 
            className="line"/>
        </div>
      </Link>
    <div className="index--item-info grid">
      <li className="index--item-title">{project.title}</li>
      <li>blurb{project.blurb}</li>
      <div className="index--item-listitems grid">
        <li><i className="fa fa-usd" aria-hidden="true"></i>{project.total_funded || 0} already pledged!</li>
        <li><i className="fa fa-users" aria-hidden="true"></i> {project.backer_count} Backers</li>
        <li><i className="fa fa-calendar" aria-hidden="true"></i> {project.days_left} Days Left!</li>
        <li><i className="fa fa-tag" aria-hidden="true"></i> {project.category_name}</li>
      </div>
    </div>
  </li>

);
};
export default CategoryIndexItem;
