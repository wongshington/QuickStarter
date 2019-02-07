import React from 'react';

const secondForm = (props) => {

  return (
    <div className="form--second grid">
      <label>Project Blurb/Short Snippet
        <textarea 
          placeholder="If you only had two sentences to describe your project..." 
          onChange={props.update('blurb')} 
          className="form-blurb"
          value={props.blurb}>
        </textarea>
      </label>
      <label>Project Description
        <textarea  
          placeholder="Let's see your story telling skills at work here!" 
          onChange={props.update('description')} 
          className="form-description"
          value={props.description}>
          </textarea>
      </label>
    </div>
  );
};

export default secondForm;