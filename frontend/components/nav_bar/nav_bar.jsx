import React from "react";
import { Link, withRouter } from "react-router-dom";
import ReactModal from "react-modal";
import ModalSessionForm from './modal_session_form';


class navBar extends React.Component {

  render () {
    return(
      <nav className="theNavBar">
          <div className="nav-button-section">
            <button  >Discover</button>
            <button >Start a Project</button>
          </div>
          <h1>QuickStarter</h1>

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
