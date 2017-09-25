import React from 'react';
import { Link } from 'react-router-dom';


const RewardIndexItem = ({ reward }) => (
  <button className="reward-item" >
    <li>For only ${reward.pledge_amount} you will be eligible for:</li>
    <li>{reward.gift}</li>
    <li >{reward.gift_description}</li>





  </button>
);

export default RewardIndexItem;
