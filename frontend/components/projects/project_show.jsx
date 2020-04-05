import React from "react";
import { Route } from "react-router-dom";
import { Line } from "rc-progress";

import RewardIndexContainer from "../rewards/reward_index_container";

class ProjectShow extends React.Component {
  constructor(props) {
    super(props);

    this.scrollToRewards = this.scrollToRewards.bind(this);
    this.makeReward = this.makeReward.bind(this);
  }

  componentWillMount() {
    this.props.getProject(this.props.match.params.projectId);
  }

  openRewardForm() {
    this.props.history.push(`/projects/${this.props.project.id}/rewards/new`);
  }

  makeReward() {
    if (this.props.currentUser === null) {
      return null;
    } else if (this.props.currentUser.id === this.props.project.author_id) {
      return (
        <button
          onClick={() => this.openRewardForm()}
          className="new-reward-button"
        >
          Add a new Reward!
        </button>
      );
    }
  }

  scrollToRewards(e) {
    e.preventDefault();
    const ele = document.getElementById("rewards");
    const rect = ele.getBoundingClientRect(); // this returns a DOMRect object with directional properties
    window.scrollTo(0, rect.top - 100);
    // will need to make this scroll speed slower later
  }

  onClick(e) {
    e.preventDefault();
    this.scrollToRewards();
  }

  componentWillReceiveProps(nextProps) {
    if (
      this.props.match.params.projectId !== nextProps.match.params.projectId
    ) {
      this.props.getProject(nextProps.match.params.projectId);
    }
  }

  render() {
    let { project } = this.props;
    if (project === undefined) {
      return <div>Loading...</div>;
    }

    return (
      <div>
        <div className="show--upper">
          <div className="show--main-info grid">
            <div className="show--author-info grid">
              <img src={project.author_pic} />
              By {project.author}
            </div>
            <div className="show--title-container grid">
              <li className="show--title">{project.title}</li>
              <li className="show--title-blurb">{project.blurb}</li>
            </div>
          </div>
          <div className="show--main-details grid">
            <div
              className="show--image img"
              style={{ backgroundImage: `url(${project.title_image})` }}
            ></div>
            <div className="show--info grid">
              <Line
                percent={project.funded_percentage}
                strokeWidth="1"
                strokeLinecap="square"
                trailWidth="1"
                strokeColor="#029469"
                trailColor="#E6E7E8"
                width="100%"
                className="show-line"
              />
              <div className="show--project-notes show--funded">
                <li>${project.total_funded}</li>
                <li>pledged of ${project.funding_goal}</li>
              </div>
              <div className="show--project-notes show--backers">
                <li>{project.backer_count}</li>
                <li>Backers</li>
              </div>
              <div className="show--days show--project-notes">
                <li>{project.days_left}</li>
                <li>Days Left!</li>
              </div>
              <button
                onClick={this.scrollToRewards}
                className="back-me-button btn"
              >
                Back this project!
              </button>
            </div>
          </div>
        </div>
        <div className="show--bottom grid">
          <div className="show--description-column grid">
            <h2>About this project</h2>
            <p className="show--description">
              {project.description}
              <br></br>
              <br></br>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla
              auctor porttitor vestibulum. Morbi eget ligula lorem. Donec
              vehicula vehicula scelerisque. Morbi cursus mauris mollis odio
              finibus placerat. Donec mauris orci, vestibulum sit amet sagittis
              eu, porttitor ullamcorper lectus. Sed maximus vulputate arcu, non
              pellentesque mi fringilla vitae. Nam vestibulum lacus vel erat
              sodales, id dapibus nisi euismod. Nulla a risus tincidunt,
              consectetur urna auctor, sollicitudin leo. Aenean eget vestibulum
              quam. Suspendisse potenti. In elit est, viverra a varius sed,
              elementum quis nisl. In quis nisl facilisis, ultrices lacus ut,
              eleifend nisl. Nam nec lacinia lacus, et laoreet arcu. Maecenas
              blandit.
            </p>
          </div>
          <div className="" id="rewards">
            <Route
              path="/projects/:projectId"
              component={RewardIndexContainer}
            />
          </div>
        </div>
      </div>
    );
  }
}

export default ProjectShow;
