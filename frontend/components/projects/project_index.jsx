import React from 'react';
import { Link } from 'react-router-dom';
import ProjectIndexItem from './project_index_item';
import HeroSplashContainer from './hero_splash_container';
import ShowcaseDashboard from '../showcase/showcase_container';


class ProjectIndex extends React.Component {
  constructor(props){
    super(props);

  }

  componentDidMount() {
    this.props.getProjects();
  }

render() {
  const SplashItems = [this.props.projects[3],this.props.projects[1], this.props.projects[5], this.props.projects[2]];

  const projects = this.props.projects.map(project => {

      return (
        <ProjectIndexItem
          key={project.id}
          project={project} /> );
    });
    return (
      <div>
          <ShowcaseDashboard />
        <div className="line"></div>
          <ul className="project-index">
            {projects}
          </ul>
      </div>
    );
  }


}

// <HeroSplashContainer SplashItems={SplashItems} />
export default ProjectIndex;
