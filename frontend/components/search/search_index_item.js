import React from 'react';
import { Link } from 'react-router-dom';

const indexItem = ({item}) =>{
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
                <li>{item.days_left} days to go</li>
                <li>By {item.author}</li>
            </div>
      </Link>
  );
};
export default indexItem;