import React from 'react';

const thirdForm = (props) => {

  return (
    <div className="form--third grid">
      <label>Funding Deadline
        <input 
          type="date" 
          onChange={props.update('funding_deadline')}
          value={props.deadline} >
          </input>
      </label>
      <label>Funding Goal
        <input 
          type="number" 
          onChange={props.update('funding_goal')} 
          placeholder="How much to get your QuickStart?"
          value={props.goal}>
          </input>
      </label>
      <input className="form-submit btn" type="submit" value="Get Your QuickStart!" />
    </div>
  );
};

export default thirdForm;