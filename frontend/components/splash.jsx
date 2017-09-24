import React from 'react';
import { Link } from 'react-router-dom';

// this file will need to determine when to be show, so isnt shown in the categories index render

class SplashItem extends React.Component {
  constructor(props) {
  super(props);
  }


  componentDidMount() {
    this.props.getSplash();
  }

  render () {
    return (
      "cat"
    );
  }
}

export default SplashItem;
