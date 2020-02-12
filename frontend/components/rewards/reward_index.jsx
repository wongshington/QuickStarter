import React from "react";
import { Link } from "react-router-dom";
import RewardIndexItem from "./reward_index_item";

class RewardIndex extends React.Component {
  constructor(props) {
    super(props);
    this.state = { customAmount: 0 };
    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleChange = this.handleChange.bind(this);
  }

  componentDidMount() {
    this.props.getRewards(this.props.projectId);
  }

  handleSubmit(e) {
    e.preventDefault();
    if (this.props.currentUser) {
      let updatedProject = this.props.project;
      updatedProject.total_funded += parseInt(this.state.customAmount);
      this.props
        .patchFundingProject(updatedProject)
        .then(() => window.scrollTo(0, 0));
    } else {
      this.props.history.push("/login");
    }
  }

  handleChange(e) {
    e.preventDefault();
    this.setState({ customAmount: e.target.value });
  }

  render() {
    if (!this.props.rewards.length) {
      return null;
    }

    const rewards = this.props.rewards.slice(0, 5).map(reward => {
      return (
        <RewardIndexItem
          key={reward.id}
          reward={reward}
          projectId={this.props.projectId}
          currentUser={this.props.currentUser}
          postBacking={this.props.postBacking}
          getProject={this.props.getProject}
        />
      );
    });

    return (
      <div>
        <ul className="show--rewards-column grid">
          <h2>Support a Project!</h2>
          {rewards}
        </ul>
      </div>
    );
  }
}

export default RewardIndex;
