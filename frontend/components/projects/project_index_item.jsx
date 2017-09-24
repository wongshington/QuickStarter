import React from 'react';
import { Link } from 'react-router-dom';
import { Line } from 'rc-progress';
// import rewardContainer from 'wherever';

const ProjectIndexItem = ({ project }) => (
  <li className="project-item" >
    <Link to={`/projects/${project.id}`}>
      <img src={project.title_image} />
      </Link>
    <br></br>
    <div >
    <li>{project.title}</li>
    <li>{project.author}</li>

    <li>{project.description}</li>
    <li>{project.category}</li>
    <li>
      <Line percent="50"
            strokeWidth="1.5"
            strokeLinecap="round"
            trailWidth="1.5"
            strokeColor="#25CB68"
            trailColor="#f4f7f9" />

      </li>
    <li>{project.backer_count}</li>
    <li>{project.funding_deadline}</li>
    <li>{project.funding_deadline}</li>
    </div>
    <br></br>

  </li>

);
export default ProjectIndexItem;
