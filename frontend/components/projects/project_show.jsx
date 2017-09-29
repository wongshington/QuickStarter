import React from 'react';
import { Link, Route } from 'react-router-dom';
import { Line } from 'rc-progress';
import Scroll from 'react-scroll';

import RewardIndex from '../rewards/reward_index';
import RewardIndexContainer from '../rewards/reward_index_container';
// import Project

class ProjectShow extends React.Component{
  constructor(props){
    super(props);

      this.scrollToRewards = this.scrollToRewards.bind(this);
      this.makeReward = this.makeReward.bind(this);
  }

 componentWillMount() {
   this.props.getProject(this.props.match.params.projectId);
 }

 openRewardForm() {
   this.props.history.push("/rewards/new");
 }

makeReward() {
  debugger;
  if (this.props.currentUser === undefined){
  console.log("halooo"); }
  else if (this.props.currentUser.id === this.props.project.author_id) {
    return(<button onClick={()=>this.openRewardForm()} className="new-reward-button">Add a new Reward!</button>);
  }
}

scrollToRewards(e) {
  e.preventDefault();
  const ele = document.getElementById("rewards");
  const rect = ele.getBoundingClientRect();
  window.scrollTo(0, (rect.top-100));
// will need to make this scroll speed slower later
}



onClick(e) {
  e.preventDefault();
  this.scrollToRewards();
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
      <div className="project-show-upper">
        <div className="project-main-info">
          <div className="project-author-info">
            By {project.author}
            <img src={project.author_pic} />
          </div>
            <div className="project-title-info">
              {project.title}
              <br></br>
              <li>and blurb info will go here eventually, but for now enjoy this text</li>
            </div>
        </div>
        <br></br>
        <div className="main-project-details">
          <div className="project-show-details">
            <div className="project-show-image">
                <img src={project.title_image} />
            </div>
            <div className="project-info">
                <Line percent={project.funded_percentage}
                      strokeWidth="1.5"
                      strokeLinecap="round"
                      trailWidth="1.5"
                      strokeColor="#25CB68"
                      trailColor="#E6E7E8"
                      width="100%"
                      className="project-show-line"
                      />
                    <div className="project-show-funded">
                      <span>${project.total_funded}</span><br></br>
                      <span>pledged of ${project.funding_goal}</span>
                    </div>
                    <div className="project-show-backers">
                      <span>{project.backer_count}</span><br></br>
                      <span>Backers</span>
                    </div>
                    <div className="project-show-days">
                      <span>{project.days_left}</span>
                      <br></br>
                      <span>Days Left!</span>
                    </div>
              <button onClick={this.scrollToRewards} className="back-me-button">Back this project!</button>
            </div>
          </div>
        </div>
      </div>
        <div className="project-lower-page">
          <div className="project-description-column">
            <h2>About this project</h2>
            <br></br>
            <p className="project-show-description">{project.description}</p>
          </div>
          <Route path="/project/:projectId" component={RewardIndexContainer} />
          <div className="rewards-column"  id="rewards">
            {this.makeReward()}
            {
              <RewardIndexContainer project={project} />
            }
          </div>
        </div>
    </div>
  );
}
}

export default ProjectShow;
