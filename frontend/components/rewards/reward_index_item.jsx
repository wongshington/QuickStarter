import React from 'react';
import { Link } from 'react-router-dom';


// might not need getRewards


class RewardIndexItem extends React.Component{
  constructor(props){
    super(props);
    this.reward = this.props.reward;
    // this.patchFundingProject = this.props.patchFundingProject.bind(this);
    this.handleClick=this.handleClick.bind(this);
    this.alreadyFunded= this.alreadyFunded.bind(this);
  }

  alreadyFunded() {
    if (this.props.reward.paid_users) {
      return(
    <div className="alreadyFunded">"You already bought this reward!"</div>
    );
    }
  }

handleClick(e) {
  e.preventDefault();
  if (this.props.currentUser === null) {
      this.props.toggleModal();
  } else if (this.props.reward.paid_users === false ) {
    this.props.postBacking(this.props.currentUser.id, this.reward).then((this.props.getProject(this.props.projectId)));
  }
}


  render() {

      return(
        <div className="show--reward-item">
          <button className="here" onClick={this.handleClick} >
            <div className="show--reward-overlay">
              <div>Select this reward!</div>
            </div>
            <li>A $<span>{this.reward.pledge_amount}</span> pledge will be eligible for:</li>
            <li>{this.reward.gift}</li>
            <li >{this.reward.gift_description}</li>
            {this.alreadyFunded()}
          </button>
        </div>
      );
    }
  }

export default RewardIndexItem;
