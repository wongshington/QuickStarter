import React from 'react';
import { Link, withRouter } from "react-router-dom";

class AuthForm extends React.Component{
  constructor(props){
    super(props);
    this.state = {
      username: "",
      password: "",
      email: "",
      formType: this.props.formType,
      loggedIn: false
    };
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
    });
  }

  renderErrors() {
    if (this.props.errors.length > 0){
      return (
        <ul className="auth--errors">
          {this.props.errors.map((error, i) => (
            <li key={`error-${i}`}>{error}</li>
          ))}
        </ul>
      );
    }
  }

  logDemo(e) {
    e.preventDefault();
    this.props.login(demo);
    this.setState({ loggedIn: true });

  }

  switchForm(e, formType) {
    e.preventDefault();
    this.setState({ formType });
  }

  form() {

    let userText = "Come get your Quick Start today!";
    let sessionAction = this.props.login;
    let errorClass = "";

    if (this.state.formType === "Sign Up") {
      userText = "Come get your Quick Start today!";
      sessionAction = this.props.signup;
    }

    if (this.state.formType === "Sign Up") {
      return (
        <div className="">
          <form onSubmit={this.handleSubmit(sessionAction)}>
            {/* <img src="http://res.cloudinary.com/quickstarter/image/upload/c_scale,q_100,w_214/v1506394239/quickstarter_logo_b6yrvz.png" /> */}
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

            <span>Alreay have an account? <button onClick={e => this.switchForm(e, "LogIn")}>Log In!</button></span>
          </form>
        </div>
      );
    } else {
      return (
        <div className="">
          <form onSubmit={this.handleSubmit(sessionAction)}>
            {/* <img src="http://res.cloudinary.com/quickstarter/image/upload/c_scale,q_100,w_214/v1506394239/quickstarter_logo_b6yrvz.png" /> */}
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
            <span>Need to create an account? <button onClick={e => this.switchForm(e, "Sign Up")}>Sign Up Now!</button></span>
          </form>
        </div>
      );
    }
  }


  render(){

    let userText = "Come get your Quick Start today!";
    let sessionAction = this.props.login;
    let errorClass = "";

    if (this.state.formType === "Sign Up") {
      userText = "Come get your Quick Start today!";
      sessionAction = this.props.signup;
    }
    if (this.props.errors.length > 0) {
      errorClass = "auth--error-grid";
    }

    return (
        <div className="auth--main grid">
          <form className="auth--form grid" onSubmit={this.handleSubmit(sessionAction)}>
            {/* {this.renderErrors()} */}
            <div className={`auth--inputs grid ` + errorClass}>
              <h2>{this.props.formType}</h2>
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
              <input className="btn" type="submit" value="Log In!" />
              <span>Need to create an account? <button onClick={e => this.switchForm(e, "Sign Up")}>Sign Up Now!</button></span>
            </div>
          </form>
        </div>

    )
  }
}

export default AuthForm;