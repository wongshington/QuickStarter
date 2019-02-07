import React from 'react';

const firstForm = (props) => {
  // debugger
  const categories = props.categories.map( (el, i) => <option value={i + 1} >{el.name}</option> );
  return (
    <div className="form--first grid">
      <label>Project Title
        <input 
          type="text" 
          placeholder="What will you call your QuickStarter?" 
          onChange={props.update('title')}
          value={props.title}></input>
      </label>
      <label>Category
        <select value={props.category} onChange={props.update('category_id')}>
          <option>What kind of QuickStarter is yours?</option>
          {categories}
        </select>
      </label>
    </div>
  );
};

export default firstForm;