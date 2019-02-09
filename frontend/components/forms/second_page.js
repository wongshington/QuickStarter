import React from 'react';

const secondForm = (props) => {

  return (
    <div className="form--section form--second grid">
      <div className="form--section-header">Now to the Good Stuff!</div>
      <label>If you only had two sentences to describe your project...
        <textarea 
          placeholder="Keep it short and sweet!" 
          onChange={props.update('blurb')} 
          className="form-blurb"
          value={props.blurb}>
        </textarea>
      </label>
      <label>Let's see your story telling skills at work here! What drives you and your project?
        <textarea  
          placeholder="Paint the world a word picture!" 
          onChange={props.update('description')} 
          className="form-description"
          value={props.description}>
          </textarea>
      </label>
    </div>
  );
};

export default secondForm;