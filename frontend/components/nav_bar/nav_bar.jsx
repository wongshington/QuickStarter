import React from "react";
import { Link, withRouter } from "react-router-dom";
import ReactModal from "react-modal";
import ModalSessionForm from './modal_session_form';


class navBar extends React.Component {

  render () {
    return(
      <nav className="theNavBar">
          <div className="nav-button-section">
            <button  ><i className="fa fa-compass" aria-hidden="true"></i> Explore</button>
            <button >Start a Project</button>
          </div>
          <Link to="/"><img src="http://res.cloudinary.com/quickstarter/image/upload/c_scale,q_100,w_214/v1506394239/quickstarter_logo_b6yrvz.png" /></Link>

          <ModalSessionForm
            login={this.props.login}
            signup={this.props.signup}
            logout={this.props.logout}
            errors={this.props.errors}
             />


      </nav>
    );
  }
}

export default navBar;
