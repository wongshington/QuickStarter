import React from 'react';
import { Link } from 'react-router-dom';

const DashboardItem = ({project}) => {

  return (
    <li className="dashboard-item">
      <Link to={`/projects/${project.id}`} className="item-photo" style={{ backgroundImage: `url(${project.title_image})` }}>
      </Link>
      <div className="item-info">
        <Link to={`/projects/${project.id}`}><span>{project.title}</span></Link>
        <span>${project.total_funded} funded!</span>
      </div>
    </li>
  );
};
export default DashboardItem;