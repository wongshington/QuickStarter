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
    width: "20%",
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
    this.handleCick = this.handleClick.bind(this);
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
      if(this.state.loggedIn) {
    this.setState({loggedIn: false });
  } else {
    this.setState({loggedIn: true });
  }
      return action(this.state);
    };
  }

//this function isnt even being called ever
  handleClick() {
    this.props.logout().then(
      this.setState({
        username: "",
        email: "",
        password: "",
        modalState: false,
        formType: "none",
        errors: []
      })
    );
  }

  toggleModalState(formType = null) {
    this.setState({
      username: "",
      email: "",
      password: "",
      modalState: !this.state.modalState,
      formType,
      errors: []
    });
  }

  renderErrors() {
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
        <div className="right-nav">
          <button onClick={this.handleSubmit(this.props.logout)} className="nav-bar-session-buttons">
            Sign Out
          </button>
        </div>
      );
    } else {
      return (
        <div className="nav-bar-session-buttons">
          <button onClick={() => this.toggleModalState("LogIn")}>LogIn</button>
          <button onClick={() => this.toggleModalState("Sign Up")}>
            Sign Up
          </button>
          <button onClick={this.logDemo}>Demo</button>
        </div>

      );
    }
  }

  render() {

    let userText = "Come get your Quick Start today!";
    let sessionAction = this.props.signup;
    let userNameBox = (
      <div>
        <input
          className="username"
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
      <div>
        {this.rightButtons()}
        <br />
        <br />
        <ReactModal

          isOpen={this.state.modalState}
          contentLabel="Modal"
          style={style}
        >
          <button onClick={() => this.toggleModalState(null)}>Close</button>
          <div className="modal-inputs">
            <form onSubmit={this.handleSubmit(sessionAction)}>
              {userText}
              {this.renderErrors()}
              {userNameBox}
              <input
                placeholder="Email"
                value={this.state.email}
                onChange={this.update("email")}
                type="text"
                className="email"
              />

              <input
                placeholder="Password"
                value={this.state.password}
                onChange={this.update("password")}
                type="password"
                className="password"
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
