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
    zIndex: 99999999,
    overflow: "hidden",
    perspective: 1300,
    backgroundColor: "rgba(0, 0, 0, 0.3)"
  },

  content: {
    position: "relative",
    margin: "15% auto",
    width: "30%",
    height: "250px",
    border: "1px solid rgba(0, 0, 0, .2)",
    background: "#fefff2",
    overflow: "auto",
    borderRadius: "10px",
    outline: "none",
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
      modalState: false,
      formType: null,
      errors: [],
      loggedIn: false
    };

    this.handleSubmit = this.handleSubmit.bind(this);
    this.toggleModalState = this.toggleModalState.bind(this);
    this.logOut = this.logOut.bind(this);
    this.logDemo = this.logDemo.bind(this);
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
  //     if(this.state.loggedIn) {
  //   this.setState({loggedIn: false });
  // } else {
  //   this.setState({loggedIn: true });
  // }
      // this.setState({errors: [action.sessionReducer.errorsReducer]});

      return action(this.state);

    };
  }

//this function isnt even being called ever
  logOut(e) {

    this.props.logout();
    this.setState({
        username: "",
        email: "",
        password: "",
        modalState: false,
        formType: "none",
        errors: [],
        loggedIn: false
  }
    );
  }

  toggleModalState(formType = null) {
    this.setState({
      username: "",
      email: "",
      password: "",
      modalState: !this.state.modalState,
      formType,
      errors: [],
      loggedin: false
    });
  }

  renderErrors() {
    console.log(this.props);
    return (
      <ul>
        {this.state.errors.map((error, i) => (
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
    if (this.state.loggedIn) {
      return (
        <div >
          <button onClick={()=> this.logOut()} >
            Sign Out
          </button>
        </div>
      );
    } else {
      return (

        <div className="nav-button-section">
          <button onClick={() => this.toggleModalState("LogIn")}>LogIn</button>
          <button onClick={() => this.toggleModalState("Sign Up")}>
            Sign Up
          </button>
          <button onClick={this.logDemo}>Demo</button>
        </div >

      );
    }
  }

  render() {

    let userText = "Come get your Quick Start today!";
    let sessionAction = this.props.signup;
    let userNameBox = (
      <div>
        <input

          placeholder="Username"
          value={this.state.username}
          onChange={this.update("username")}
          type="text"
        />
      </div>
    );

    if (this.state.formType === "LogIn") {
      userText = "Welcome Back";
      sessionAction = this.props.login;
      userNameBox = "";
    }

    return (
      <div  className="modal-form-container">
        {this.rightButtons()}

        <ReactModal

          isOpen={this.state.modalState}
          contentLabel="Modal"
          style={style}
        >
          <button onClick={() => this.toggleModalState(null)}>Close</button>
          <div className="modal-inputs">
            <form onSubmit={this.handleSubmit(sessionAction)}>
              {userText}
              <br></br>
              {this.renderErrors()}
              {userNameBox}
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
              <input type="submit" value={this.state.formType} />
            </form>
          </div>
        </ReactModal>
      </div>
    );
  }
}

export default withRouter(ModalSessionForm);
