import React from 'react';
import { Link } from 'react-router-dom';

const ProjectIndexItem = ({ project }) => (
  <li>
    {project.title}
    {project.author}
    {project.backer_count}
    {project.description}
    {project.category}
    <img src="https://unsplash.com/photos/uSFOwYo1qEw/download?force=true" />
  </li>

);
export default ProjectIndexItem;
