import React from 'react';
import { Link } from 'react-router-dom';

const ProjectIndexItem = ({ project }) => (
  <li>
    {project.title}
    {project.author}
    {project.backer_count}
    {project.description}
    {project.category}
    <img src="http://res.cloudinary.com/quickstarter/image/upload/v1506100103/kalen-emsley-99659_higgtt.jpg" />
  </li>

);
export default ProjectIndexItem;
