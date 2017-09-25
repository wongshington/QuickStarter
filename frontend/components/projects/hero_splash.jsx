import React from 'react';
import Slider from 'react-slick';

class SimpleSlider extends React.Component {
constructor(props){
  super(props);

}

  render() {
debugger;
    const settings = {
      dots: true,
      infinite: true,
      speed: 500,
      slidesToShow: 1,
      slidesToScroll: 1,
      autoplay: true,
      pauseOnHover: true
    };

    if (this.props.SplashItems[0] === undefined) {
      return (
        <div>Loading...</div>
      );
    }
    return (
      <div className="hero-splash">
      <Slider {...settings}>
        <div>
          <img src={this.props.SplashItems[0].title_image}/>
        </div>
        <div><img src={this.props.SplashItems[1].title_image}/></div>
        <div><img src={this.props.SplashItems[2].title_image}/></div>
        <div><img src={this.props.SplashItems[3].title_image}/></div>
      </Slider>
    </div>
    );
  }
}

export default SimpleSlider;
