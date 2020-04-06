import React from "react";
import { Link, withRouter } from "react-router-dom";

// might not need getRewards

class RewardIndexItem extends React.Component {
  constructor(props) {
    super(props);

    this.handleClick = this.handleClick.bind(this);
    this.alreadyFunded = this.alreadyFunded.bind(this);
  }

  alreadyFunded() {
    if (this.props.reward.paid_users) {
      return (
        <div className="alreadyFunded">"You already bought this reward!"</div>
      );
    }
  }

  handleClick(e) {
    e.preventDefault();
    if (!this.props.currentUser) {
      this.props.history.push("/login");
    } else if (this.props.reward.paid_users === false) {
      this.props
        .postBacking(this.props.currentUser.id, this.props.reward)
        .then(this.props.getProject(this.props.projectId));
    }
    // handle if they've already purchased?
    // alreadyFunded function
  }

  render() {
    if (!this.props.reward) return null;
    let text = this.props.reward.paid_users //this needs to be reworked
      ? "Already Purchased!!!"
      : "Select this reward!";
    return (
      <div className="show--reward-item" onClick={this.handleClick}>
        <div className="show--reward-overlay">
          <div>{text}</div>
        </div>
        <div className="show--reward grid">
          <li className="show--reward-pledge">
            Pledge <span>${this.props.reward.pledge_amount}</span>
          </li>
          <li className="show--reward-title">{this.props.reward.gift}</li>
          <li className="show--reward-description">
            {this.props.reward.gift_description}
          </li>
          <li className="show--reward-delivery flex">
            <span className="reward-deliveryHeader flex">
              Estimated Delivery:
            </span>
            <span className="reward-deliveryText">
              {this.props.reward.deliveryDate}
            </span>
          </li>
          <li className="show--reward-backers">
            <span>{this.props.reward.backers}</span> backers already!
          </li>
          {/* {this.alreadyFunded()} */}
        </div>
      </div>
    );
  }
}

export default withRouter(RewardIndexItem);
