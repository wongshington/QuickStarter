import React from 'react';
import { Link, Route } from 'react-router-dom';
import CategoryIndexItem from './category_index_item';

class ExploreShow extends React.Component{
  constructor(props){
    super(props);
}

componentWillMount() {
  this.props.getCategory(this.props.match.params.categoryId);
}

componentWillReceiveProps(nextProps) {
  if (this.props.match.params.categoryId !== nextProps.match.params.categoryId) {
    this.props.getCategory(nextProps.match.params.categoryId);
  }
}

render() {
  if (this.props.category === undefined) {
    return (
      <div>Loading...</div>
    );
  }

  const projects = this.props.category.projects.map(project => {
      return (
        <CategoryIndexItem
          key={project.id}
          project={project}/> );
    });

  return(
    <div className="category grid">
      <h1 className="category--title">
        Check out these amazing <span>{this.props.category.name}</span> QuickStarter Projects!
      </h1>
      <div className="category--index-container" >
        <ul className="category--index-list grid">
          {projects}
        </ul>
      </div>
    </div>
  );
}
}

export default ExploreShow;
