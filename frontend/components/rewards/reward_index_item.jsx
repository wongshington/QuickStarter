import React from 'react';
import { Link } from 'react-router-dom';


class RewardIndexItem extends React.Component{
  constructor(props){
    super(props);
    this.reward = this.props.reward;
    // this.patchFundingProject = this.props.patchFundingProject.bind(this);
    this.handleClick=this.handleClick.bind(this);
  }

handleClick(e) {
  e.preventDefault();
  debugger;
  if (this.props.currentUser) {
  this.props.postFunds(this.reward);
} else {
  this.props.toggleModal();
}

}

  render() {

      return(
        <div className="reward-item">
          <button onClick={this.handleClick} >
            <div className="overlay">
              <div>Select this reward!</div>
            </div>
            <li>For only ${this.reward.pledge_amount} you will be eligible for:</li>
            <li>{this.reward.gift}</li>
            <li >{this.reward.gift_description}</li>
          </button>
        </div>
      );
    }
  }

export default RewardIndexItem;
