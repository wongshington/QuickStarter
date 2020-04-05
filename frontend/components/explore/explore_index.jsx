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

    const categories = Object.values(this.props.categories);
    let content = categories.map((category, i) => {
      // debugger;
      return (
        <Link key={category.name} to={`/categories/${category.id}`}>
          <li>
            {category.name}
            <span>{category.project_count}</span>
          </li>
        </Link>
      );
    });

    return (
      <div className="explore-index grid">
        <h3>Categories</h3>
        <ul className="category-list grid">{content}</ul>
      </div>
    );
  }
}

export default withRouter(ExploreIndex);
