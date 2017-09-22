import React from 'react';
import { Link } from 'react-router-dom';
import ProjectIndexItem from './project_index_item';

class ProjectIndex extends React.Component {
  constructor(props){
    super(props);

  }

  componentDidMount() {
    this.props.getProjects();
  }

render() {
  const projects = this.props.projects;

  return (
    projects.map(project => {
      return (
        <ProjectIndexItem className="project-item" project={project} />
        );
    })
  );
}



}

export default ProjectIndex;
