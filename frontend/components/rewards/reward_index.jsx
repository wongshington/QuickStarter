import React from 'react';
import { Link } from 'react-router-dom';
import RewardIndexItem from './reward_index_item';


class RewardIndex extends React.Component {
  constructor(props) {
    super(props);

  }

  componentDidMount() {
  }

  componentWillReceiveProps(nextProps) {
    this.props.getRewards(this.props.project.id);
}


render() {
  if (this.props.project.rewards === undefined) {
    return null;
  }
  const rewards = this.props.project.rewards.map(reward => {
      return (
        <RewardIndexItem
          key={reward.id}
          reward={reward} /> );
    });
    return (
      <div  >
        <ul className="reward-index">
          <button className="reward-item">
          </button>
          {rewards}
        </ul>
      </div>
    );

}

}


export default RewardIndex;
