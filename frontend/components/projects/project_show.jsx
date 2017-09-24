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

 componentWillReceiveProps(nextProps) {
   if (this.props.match.params.projectId !== nextProps.match.params.projectId) {
     this.props.getProject(nextProps.match.params.projectId);
   }
 }

render() {
  if (this.props.project === undefined) {
    return (
      <div>Loading...</div>
    );
  }

  let project = this.props.project;
  return (
    <div>
      <div className="project-title-info">
        <div>author info</div>
        <div>and title info will go here eventually, but for now enjoy this text</div>
      </div>
      <br></br>
      <div className="main-project-details">
        <div className="project-show-details">
          <div className="project-show-image">
              <img src={project.title_image} />
          </div>
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
      </div>
    </div>
  );
}
}

export default ProjectShow;
