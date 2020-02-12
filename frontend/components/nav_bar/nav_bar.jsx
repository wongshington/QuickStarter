import React from "react";
import { Link, withRouter } from "react-router-dom";
import ReactModal from "react-modal";
import ModalContainer from "./modal_container";
import { toggleModal } from "../../actions/ui_actions";

class navBar extends React.Component {
  constructor(props) {
    super(props);

    this.logOut = this.logOut.bind(this);
    this.logDemo = this.logDemo.bind(this);
    this.searchToggle = this.searchToggle.bind(this);
  }

  logDemo(e) {
    e.preventDefault();
    const demo = {
      email: "LookAround@email.com",
      password: "secure"
    };
    this.props.login(demo).then(() => this.setState({ loggedIn: true }));
  }

  logOut(e) {
    e.preventDefault();
    this.props.logout(this.props.currentUser.id);
  }

  searchToggle(e) {
    e.preventDefault();
    this.props.toggleSearch();
  }

  rightNav() {
    let signIn, guest, signOut, space;
    if (this.props.currentUser) {
      space = <div></div>;
      signOut = <div onClick={this.logOut}>Sign Out</div>;
    } else {
      signIn = <Link to="/login">Sign In</Link>;
      guest = <div onClick={this.logDemo}>Guest</div>;
    }

    return (
      <div className="grid navbar--section navbar--section-right">
        {space}
        <button className="navbar--button button" onClick={this.searchToggle}>
          Search
        </button>
        {signIn}
        {guest}
        {signOut}
      </div>
    );
  }

  render() {
    return (
      <nav className="navbar grid">
        <div className="grid navbar--section navbar--section-left">
          <button
            className="navbar--button button"
            onClick={() => this.props.history.push("/explore")}
          >
            Explore
          </button>
          <button
            className="navbar--button button"
            onClick={() => this.props.history.push("/projects/new")}
          >
            Start a Project
          </button>
        </div>
        <Link className="flex navbar--image" to="/">
          <img src="http://res.cloudinary.com/quickstarter/image/upload/c_scale,q_100,w_214/v1506394239/quickstarter_logo_b6yrvz.png" />
        </Link>
        {this.rightNav()}
      </nav>
    );
  }
}

export default navBar;
