import React from 'react';
import { Link } from 'react-router-dom';

const ProjectIndexItem = ({ project }) => (
  <li className="project-item" >
      <img src={project.title_image} />
    <br></br>
    <li>{project.title}</li>
    <li>{project.author}</li>
    <li>{project.backer_count}</li>
    <li>{project.description}</li>
    <li>{project.category}</li>
    <li>{project.funding_deadline}</li>
    <li>{project.funding_deadline}</li>
    <br></br>

  </li>

);
export default ProjectIndexItem;
