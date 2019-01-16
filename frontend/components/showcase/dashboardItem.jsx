import React from 'react';
import { Link } from 'react-router-dom';

const DashboardItem = ({project}) => {

  return (
    <li className="showcase--project grid">
    {/* <div></div> */}
      <Link to={`/projects/${project.id}`} className="showcase--project-photo" style={{ backgroundImage: `url(${project.title_image})`, backgroundSize:"cover" }}>
      </Link>
      <div className="showcase--project-info flex">
        <Link to={`/projects/${project.id}`}>
          <li>{project.title}</li>
        </Link>
        <li>${project.total_funded} funded!</li>
        <li>By {project.author}</li>
      </div>
    </li>
  );
};
export default DashboardItem;