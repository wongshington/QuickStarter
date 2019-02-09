import React from 'react';

const firstForm = (props) => {
  // debugger
  const categories = props.categories.map( (el, i) => <option value={i + 1} >{el.name}</option> );
  return (
    <div className="form--section form--first grid">
      <div className="form--section-header">Let's get you set up!</div>
      <label>What will the world call your QuickStarter?
        <input 
          type="text" 
          placeholder="Pick a good title!" 
          onChange={props.update('title')}
          value={props.title}></input>
      </label>
      <label>What kind of QuickStarter is yours?
        <select value={props.category} onChange={props.update('category_id')}>
          <option>Select a Category?</option>
          {categories}
        </select>
      </label>
    </div>
  );
};

export default firstForm;