import React from 'react';
import { Link } from 'react-router-dom';
import { Line } from 'rc-progress';
// import Project

class ProjectShow extends React.Component{
  constructor(props){
    super(props);


  }

 componentWillMount() {

   this.props.getProject(this.props.match.params.projectId);

 }
render() {
  let project = this.props.project;
  debugger;
  return (

    <div>

        <Link to={`/projects/${project.id}`}>
          <img src={project.title_image} />
          </Link>

        <div className="project-info">
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
    </div>
  );
}
}

export default ProjectShow;
