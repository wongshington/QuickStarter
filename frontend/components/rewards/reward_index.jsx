import React from 'react';
import { Link } from 'react-router-dom';
import RewardIndexItem from './reward_index_item';


class RewardIndex extends React.Component {
  constructor(props) {
    super(props);

  }

  componentDidMount() {
    this.props.getRewards();
  }


render() {

  const rewards = this.props.rewards.map(reward => {
      return (
        <RewardIndexItem
          key={reward.id}
          reward={reward} /> );
    });
    return (
      <div  >
        <ul className="reward-index">
          {rewards}
        </ul>
      </div>
    );

}

}


export default RewardIndex;
