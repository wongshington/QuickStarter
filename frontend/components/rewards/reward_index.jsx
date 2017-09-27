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

  componentDidMount() {
  }

  componentWillReceiveProps(nextProps) {
    this.props.getRewards(this.props.project.id);
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
  if (this.props.project.rewards === undefined) {
    return null;
  }
  const rewards = this.props.project.rewards.map(reward => {
      return (
        <RewardIndexItem
          key={reward.id}
          reward={reward}
          project={this.props.project}
          currentUser={this.props.currentUser}
          patchFundingProject={this.props.patchFundingProject}
          toggleModal={this.props.toggleModal}
          postFunds={this.props.postFunds}/> );
    });

    return (
      <div  >
        <ul className="reward-index">
          <button className="reward-item">
            <form onSubmit={this.handleSubmit} >
              <input onChange={this.handleChange} type="number" placeholder="$" />
              <input type="submit" value="Back this project" />
            </form>
          </button>
          {rewards}
        </ul>
      </div>
    );

}

}


export default RewardIndex;
