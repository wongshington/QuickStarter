import React from "react";
import { Link, withRouter } from "react-router-dom";
import ReactModal from "react-modal";
import ModalContainer from './modal_container';
import SearchContainer from '../search/search_container';
import { toggleModal } from '../../actions/ui_actions';


class navBar extends React.Component {
  constructor(props){
    super(props);

    this.logOut = this.logOut.bind(this);
    this.logDemo = this.logDemo.bind(this);
  }

  logDemo(e) {
    e.preventDefault();
    const demo = {
      email: "LookAround@email.com",
      password: "secure"
    };
    this.props.login(demo)
    .then( ()=> this.setState({ loggedIn: true }));
  }

  logOut(e){
    e.preventDefault();
    this.props.logout(this.props.currentUser.id);
  }

  rightNav(){
    let signIn, guest, signOut;
    if (this.props.currentUser){
      signOut = <div onClick={this.logOut}>Sign Out</div>;
    } else{
      signIn = <Link to="/login" >Sign In</Link>;
      guest = <div onClick={this.logDemo}>Guest</div>;
    }

    return (
      <div className="flex navbar--section navbar--section-right" >
        <button className="navbar--button button" onClick={() => console.log("this is search")}>Search</button>
        {signIn}
        {guest}
        {signOut}
      </div>
    );

  }

  render() {

    return(
      <nav className="navbar grid">
        <div className="navbar--section navbar--section-left">
          <button className="navbar--button button" onClick={() => this.props.history.push("/explore")}>Explore</button>
          <button className="navbar--button button" onClick={() => this.props.history.push("/projects/new")}>Start a Project</button>
        </div>
        <Link className="flex navbar--image"to="/"><img src="http://res.cloudinary.com/quickstarter/image/upload/c_scale,q_100,w_214/v1506394239/quickstarter_logo_b6yrvz.png" /></Link>
        {/* <div className="flex navbar--section navbar--section-right" >
          <button className="navbar--button button" onClick={() => console.log("this is search")}>Search</button>
          <Link to="/login" >Sign In</Link>
          <Link to="/login" >Guest</Link> */}
          {this.rightNav()}
          {/* <SearchContainer />
          <ModalContainer /> */}
        {/* </div> */}
      </nav>
    );
  }
}

export default navBar;
