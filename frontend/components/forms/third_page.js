import React from 'react';

const thirdForm = (props) => {

  return (
    <div className="form--section form--third grid">
      <div className="form--section-header">Last Step!</div>
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
      <input className="form--submit btn" onClick={props.handleSubmit} type="submit" value="Get Your QuickStart!" />
    </div>
  );
};

export default thirdForm;