import React from "react";
import { Link } from "react-router-dom";
import { Line } from "rc-progress";
// import rewardContainer from 'wherever';

const ProjectIndexItem = ({ project }) => (
  <li className="project-item grid">
    <Link className="index--photo" to={`/projects/${project.id}`}>
      <div
        style={{ backgroundImage: `url(${project.title_image})` }}
        className="index--project-img flex img"
      >
        <Line
          className="line"
          percent={project.funded_percentage}
          strokeWidth="5.5"
          strokeLinecap="square"
          trailWidth="5.5"
          strokeColor="#029469"
          trailColor="#f4f7f9"
        />
      </div>
    </Link>
    <div className="grid index--project-info">
      <li className="index--project-title">{project.title}</li>
      <li>{project.blurb}</li> {/* will need a character limit for the blurb*/}
      <li className="index--project-author">By {project.author}</li>
    </div>
  </li>
);
export default ProjectIndexItem;
