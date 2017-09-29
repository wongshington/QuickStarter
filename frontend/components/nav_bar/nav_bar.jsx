import React from "react";
import { Link, withRouter } from "react-router-dom";
import ReactModal from "react-modal";
import ModalContainer from './modal_container';


class navBar extends React.Component {
  constructor(props){
    super(props);
    this.openCreate = this.openCreate.bind(this);
    this.openExplore = this.openExplore.bind(this);
  }

  openCreate() {
    this.props.history.push("/projects/new");
  }

  openExplore() {
    this.props.history.push("/explore");
  }


  render () {
    return(
      <nav className="theNavBar">
          <div className="nav-button-section">
            <button  onClick={()=> this.openExplore()}><i className="fa fa-compass" aria-hidden="true"></i> Explore</button>
            <button onClick={() => this.openCreate()}>Start a Project</button>
          </div>
          <Link to="/"><img src="http://res.cloudinary.com/quickstarter/image/upload/c_scale,q_100,w_214/v1506394239/quickstarter_logo_b6yrvz.png" /></Link>

          <ModalContainer />
      </nav>
    );
  }
}

export default navBar;
