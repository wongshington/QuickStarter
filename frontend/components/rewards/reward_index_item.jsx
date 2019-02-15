import React from 'react';
import { Link, withRouter} from 'react-router-dom';


// might not need getRewards


class RewardIndexItem extends React.Component{
  constructor(props){
    super(props);
    this.reward = this.props.reward;
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
  if (!this.props.currentUser) { 
      this.props.history.push("/login");
  } else if (this.props.reward.paid_users === false ) {
    this.props.postBacking(this.props.currentUser.id, this.reward).then((this.props.getProject(this.props.projectId)));
  }
  // handle if they've already purchased?
  // alreadyFunded function
}


  render() {
    let text = this.reward.paid_users ? "Already Purchased!!!" : "Select this reward!";
    
      return(
        <div className="show--reward-item" onClick={this.handleClick}>
          <div className="show--reward-overlay">
            <div>{text}</div>
          </div>
          <div className="show--reward grid"  >
            <li>Pledge <span>${this.reward.pledge_amount}</span></li>
            <li>{this.reward.gift}</li>
            <li>{this.reward.gift_description}</li>
            <li><span>{this.reward.backers}</span> already purchased!</li>
            {this.alreadyFunded()}
          </div>
        </div>
      );
    }
  }

export default withRouter(RewardIndexItem);
