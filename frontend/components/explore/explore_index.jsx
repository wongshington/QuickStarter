import React from "react";
import { Link } from "react-router-dom";
import { withRouter } from "react-router-dom";

class ExploreIndex extends React.Component {
  componentDidMount() {
    this.props.getCategories();
  }

  render() {
    if (Object.keys(this.props.categories).length === 0) {
      return <div>Loading...</div>;
    }

    const categories = this.props.categories;
    return (
      <div className="explore-index grid">
        <h3>Categories</h3>
        <ul className="category-list grid">
          <Link to="/categories/1">
            <li>
              {categories[1].name}
              <span>{categories[1].project_count}</span>
            </li>
          </Link>

          <Link to="/categories/2">
            <li>
              {categories[2].name}
              <span>{categories[2].project_count}</span>
            </li>
          </Link>

          <Link to="/categories/3">
            <li>
              {categories[3].name}
              <span>{categories[3].project_count}</span>
            </li>
          </Link>

          <Link to="/categories/4">
            <li>
              {categories[4].name}
              <span>{categories[4].project_count}</span>
            </li>
          </Link>

          <Link to="/categories/5">
            <li>
              {categories[5].name}
              <span>{categories[5].project_count}</span>
            </li>
          </Link>

          <Link to="/categories/6">
            <li>
              {categories[6].name}
              <span>{categories[6].project_count}</span>
            </li>
          </Link>
        </ul>
      </div>
    );
  }
}

export default withRouter(ExploreIndex);
