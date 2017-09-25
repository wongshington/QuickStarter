import { connect } from 'react-redux';
import HeroSplash from './hero_splash';

const mapStateToProps = (state, ownProps) => {

  return ({
  splashItems: ownProps.SplashItems
});
};


export default connect(mapStateToProps, null)(HeroSplash);
