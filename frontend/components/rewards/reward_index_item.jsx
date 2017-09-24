import React from 'react';
import { Link } from 'react-router-dom';

const RewardIndexItem = ({ reward }) => (
  <li className="reward-item" >
    <li>{reward.gift}</li>
    <li>{reward.gift_description}</li>
    <li>{reward.pledge_amount}</li>




  </li>
);

export default RewardIndexItem;
