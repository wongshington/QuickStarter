import React from "react";
import { Link, withRouter } from "react-router-dom";
import ReactModal from "react-modal";

const style = {
  overlay: {
    position: "fixed",
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    zIndex: 0,
    overflow: "hidden",
    perspective: 1300,
    backgroundColor: "rgba(0, 0, 0, 0.3)"
  },

  content: {
    position: "relative",
    margin: "15% auto",
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    width: "28%",
    border: "1px solid rgba(0, 0, 0, .2)",
    background: "white",
    overflow: "auto",
    borderRadius: "10px",
    outline: "none",
    paddingBottom: "20px",
    boxShadow: "0 5px 10px rgba(0, 0, 0, .3)"
  }
};

const demo = {
  email: "LookAround@email.com",
  password: "secure"
};

class ModalSessionForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      username: "",
      password: "",
      email: "",
      formType: "LogIn",
      loggedIn: false
    };

    this.handleSubmit = this.handleSubmit.bind(this);
    this.toggleModalState = this.toggleModalState.bind(this);
    this.logOut = this.logOut.bind(this);
    this.logDemo = this.logDemo.bind(this);
    this.form = this.form.bind(this);
    this.switchForm=this.switchForm.bind(this);
  }

  componentWillReceiveProps(nextProps) {

      this.setState({errors: [nextProps.errors] });
  }


  update(field) {
    return e =>
      this.setState({
        [field]: e.currentTarget.value
      });
  }


  handleSubmit(action) {
    return e => {
      e.preventDefault();
      return action(this.state).then(() => this.props.toggleModal());

    };
  }

//this function isnt even being called ever
//jk im not even sure anymore

  logOut(e) {

    this.props.logout();
    this.setState({
        username: "",
        email: "",
        password: "",
        modalState: false,
        formType: "none",
        errors: [],
        loggedIn: false });
  }



  toggleModalState(formType = "LogIn") {
    // if(formType ==='login') {
    // }
    this.props.clearErrors();
    this.setState({
      username: "",
      password: "",
      email: "",
      formType,
      loggedIn: false
    }, () => this.props.toggleModal());
  }

  renderErrors() {

    return (
      <ul>
        {this.props.errors.map((error, i) => (
          <li key={`error-${i}`}>{error}</li>
        ))}
      </ul>
    );
  }

  logDemo(e) {
    e.preventDefault();
    this.props.login(demo);
    this.setState({loggedIn: true });

  }

  rightButtons() {
    // <i className="fa fa-search" aria-hidden="true"></i>

    if (this.props.currentUser) {
      return (
        <div className="">
          <button className="navbar--button button" onClick={()=> this.logOut()} >
            Sign Out
          </button>
        </div>
      );

    } else {
      
      return (
        <div>
          <button className="navbar--button button" onClick={() => this.toggleModalState("LogIn")}>Sign In</button>
          {/* <button className="navbar--button button" onClick={() => this.toggleModalState("Sign Up")}>
            Sign Up
          </button> */}
          <button className="navbar--button button" onClick={this.logDemo}>Guest</button>
        </div>

      );
    }
  }

switchForm(e, formType) {
  e.preventDefault();
  this.setState({formType});
}

form() {

  let userText = "Come get your Quick Start today!";
  let sessionAction = this.props.login;

  if (this.state.formType === "Sign Up") {
    userText = "Come get your Quick Start today!";
    sessionAction = this.props.signup;
  }

  if (this.state.formType === "Sign Up") {
    return (
    <div className="">
        <form onSubmit={this.handleSubmit(sessionAction)}>
          <img src="http://res.cloudinary.com/quickstarter/image/upload/c_scale,q_100,w_214/v1506394239/quickstarter_logo_b6yrvz.png" />
          {this.renderErrors()}
          <div>
            <input
              placeholder="Username"
              value={this.state.username}
              onChange={this.update("username")}
              type="text"
            />
          </div>
          <input
            placeholder="Email"
            value={this.state.email}
            onChange={this.update("email")}
            type="text"
          />
          <input
            placeholder="Password"
            value={this.state.password}
            onChange={this.update("password")}
            type="password"

          />
        <input type="submit" value="Sign Up!" />
          <br></br>
          <span>Alreay have an account? <button onClick={e => this.switchForm(e,"LogIn")}>Log In!</button></span>
        </form>
      </div>
    );
  } else {
    return (
      <div className="">
          <form onSubmit={this.handleSubmit(sessionAction)}>
            <img src="http://res.cloudinary.com/quickstarter/image/upload/c_scale,q_100,w_214/v1506394239/quickstarter_logo_b6yrvz.png" />
            {this.renderErrors()}
            <input
              placeholder="Email"
              value={this.state.email}
              onChange={this.update("email")}
              type="text"
            />
            <input
              placeholder="Password"
              value={this.state.password}
              onChange={this.update("password")}
              type="password"

            />
          <input type="submit" value="Log In!" />
              <br></br>
              <span>Need to create an account? <button onClick={e => this.switchForm(e,"Sign Up")}>Sign Up Now!</button></span>
          </form>
        </div>
    );
  }
}


  render() {

    return (
      <div  className="modal-form-container">
        {this.rightButtons()}

        <ReactModal

          isOpen={this.props.modalState}
          contentLabel="Modal"
          style={style}
          onRequestClose={this.toggleModalState}
        >
        <button onClick={() => this.toggleModalState("LogIn")}>Close</button>

        {this.form()}
        </ReactModal>
      </div>
    );
  }
}

export default withRouter(ModalSessionForm);