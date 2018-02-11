import React from 'react';
import { Link } from 'react-router-dom';
import RewardIndexItem from './reward_index_item';


class RewardIndex extends React.Component {
  constructor(props) {
    super(props);
    this.state ={customAmount: 0};
    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleChange = this.handleChange.bind(this);
  }

componentWillMount() {
  this.props.getRewards(this.props.projectId);
  }

componentWillReceiveProps(nextProps) {
  // this.props.getRewards(this.props.projectId);
}

handleSubmit(e) {
  e.preventDefault();
  if (this.props.currentUser) {
  let updatedProject = this.props.project;
  updatedProject.total_funded += parseInt(this.state.customAmount);
  this.props.patchFundingProject(updatedProject).then(()=> window.scrollTo(0,0));
  } else {
    this.props.toggleModal();
  }
}

handleChange(e) {
  e.preventDefault();
  this.setState({customAmount: e.target.value});
}

render() {
  if (!(this.props.rewards.length)) {
    return null;
  }
  const rewards = this.props.rewards.map(reward => {
      return (
        <RewardIndexItem
          key={reward.id}
          reward={reward}
          projectId={this.props.projectId}
          currentUser={this.props.currentUser}
          patchFundingProject={this.props.patchFundingProject}
          toggleModal={this.props.toggleModal}
          postBacking={this.props.postBacking}
          getProject={this.props.getProject}/> );
    });

    return (
      <div  >
        <ul className="reward-index">
            <h2>Fund a Project, Reward Yourself!</h2>
            <br></br>
            {rewards}
        </ul>
      </div>
    );

}

}


export default RewardIndex;
