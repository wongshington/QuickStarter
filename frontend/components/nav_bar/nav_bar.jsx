import React from "react";
import { Link, withRouter } from "react-router-dom";
import ReactModal from "react-modal";
import ModalSessionForm from './modal_session_form';


class navBar extends React.Component {

  render () {
    return(
      <nav className="theNavBar">
        <div className="flex-nav">
          <button >Discover</button>
          <button >Start a Project</button>
          <h1>QuickStarter</h1>
          <ModalSessionForm
            login={this.props.login}
            signup={this.props.signup}
            logout={this.props.logout}
            />
        </div>

      </nav>
    );
  }
}

export default navBar;
