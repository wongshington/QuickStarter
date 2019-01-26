import React from 'react';
import { Link } from 'react-router-dom';

const indexItem = ({item}) =>{
// debugger
  return (
      <Link to={`projects/${item.id}`} className="search--item grid"> 
        {/* <li className="search--item"> */}
            <div className="grid img-container">
              <div className="img search--item-img" 
                    style={{ backgroundImage: `url(${item.title_image})` }}>
              </div>
            </div>
            <div className="search--item-info grid">
                <li>{item.title}</li>
                <li>{item.days_left}</li>
                <li>{item.author}</li>
            </div>
        {/* </li> */}
      </Link>
  );
};
export default indexItem;