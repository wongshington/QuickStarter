import React from 'react';
import { Link } from 'react-router-dom';
import { Line } from 'rc-progress';
// import rewardContainer from 'wherever';

const ProjectIndexItem = ({ project }) => (
  <li className="project-item" >
    <Link to={`/projects/${project.id}`}>
      <div style={{ backgroundImage: `url(${project.title_image})` }} className="index-title-img"></div>
      </Link>
    <br></br>
    <div >
    <li>{project.title}</li>
    <li className="index-author-info">
      <img src={project.author_pic} />
      {project.author}</li>
    <li>blurb{project.blurb}</li>
    <li><i className="fa fa-tag" aria-hidden="true"></i> {project.category_name}</li>
    <li>
      <Line percent={project.funded_percentage}
            strokeWidth="1.5"
            strokeLinecap="round"
            trailWidth="1.5"
            strokeColor="#25CB68"
            trailColor="#f4f7f9"
            width="260px"/>

      </li>
    <li><i className="fa fa-usd" aria-hidden="true"></i>{project.total_funded} already pledged!</li>
    <li><i className="fa fa-users" aria-hidden="true"></i> {project.backer_count} Backers</li>
    <li><i className="fa fa-calendar" aria-hidden="true"></i> {project.days_left} Days Left!</li>
    </div>
    <br></br>

  </li>

);
export default ProjectIndexItem;
