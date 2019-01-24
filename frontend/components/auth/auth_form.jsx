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

    this.clicker = this.clicker.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);

  }

  update(field) {
    return e =>
      this.setState({
        [field]: e.currentTarget.value
      });
  }

  handleSubmit(e) {
    e.preventDefault();
    let action = this.props.formType == "Login" ? this.props.login : this.props.signup;
    action(this.state);
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
    const demo = {
      email: "LookAround@email.com",
      password: "secure"
    };
    this.props.login(demo)
    .then( ()=> this.setState({ loggedIn: true }) );
  }

  // form() {

  //   let userText = "Come get your Quick Start today!";
  //   let sessionAction = this.props.login;
  //   let errorClass = "";

  //   if (this.state.formType === "Sign Up") {
  //     userText = "Come get your Quick Start today!";
  //     sessionAction = this.props.signup;
  //   }

  //   if (this.state.formType === "Sign Up") {
  //     return (
  //       <div className="">
  //         <form onSubmit={this.handleSubmit(sessionAction)}>
  //           {/* <img src="http://res.cloudinary.com/quickstarter/image/upload/c_scale,q_100,w_214/v1506394239/quickstarter_logo_b6yrvz.png" /> */}
  //           {this.renderErrors()}
  //           <div>
  //             <input
  //               placeholder="Username"
  //               value={this.state.username}
  //               onChange={this.update("username")}
  //               type="text"
  //             />
  //           </div>
  //           <input
  //             placeholder="Email"
  //             value={this.state.email}
  //             onChange={this.update("email")}
  //             type="text"
  //           />
  //           <input
  //             placeholder="Password"
  //             value={this.state.password}
  //             onChange={this.update("password")}
  //             type="password"

  //           />
  //           <input type="submit" value="Sign Up!" />

  //           {/* <span>Alreay have an cowwwwww? <button onClick={e => this.switchForm(e, "LogIn")}>Log In!</button></span> */}
  //         </form>
  //       </div>
  //     );
  //   } else {
  //     return (
  //       <div className="">
  //         <form onSubmit={this.handleSubmit(sessionAction)}>
  //           {/* <img src="http://res.cloudinary.com/quickstarter/image/upload/c_scale,q_100,w_214/v1506394239/quickstarter_logo_b6yrvz.png" /> */}
  //           {this.renderErrors()}
  //           <input
  //             placeholder="Email"
  //             value={this.state.email}
  //             onChange={this.update("email")}
  //             type="text"
  //           />
  //           <input
  //             placeholder="Password"
  //             value={this.state.password}
  //             onChange={this.update("password")}
  //             type="password"

  //           />
  //           <input type="submit" value="Log In!" />
  //           <br></br>
  //           {/* <span>N <button onClick={e => this.switchForm(e, "Sign Up")}>Sign Up Now!</button></span> */}
  //         </form>
  //       </div>
  //     );
  //   }
  // }
  
  // static getDerivedStateFromProps(props, state){
  //   this.setState({formType: props.formType});
  //   console.log("setting?");
  // }

  // componentDidUpdate(nextProps, nextState){
  //   console.log("some stuffs");
  //   if(nextState.formType !== this.state.formType){
  //     let location = nextState.formType == "Login" ? "/signup" : "/login";
  //     this.setState({formType: location});
  //   }
  //   debugger
  // }
  clicker(e){
    e.preventDefault();
    let location = this.props.location.pathname == "/login" ? "/signup" : "/login";
    this.props.history.push(location);
  }

  username(){
    if (this.props.formType == "Sign Up"){
      return (
        <input
          placeholder="Username"
          value={this.state.username}
          onChange={this.update("username")}
          type="text"
        />
      )
    }
  }

  switchText(){
    let text = "Already have an account? ";
    if (this.props.formType == "Login"){
      text = "Need to create an account? ";
    }
    let linkText = this.props.formType == "Sign Up" ? "Login" : "Sign Up";
    return (
      <span>{text}<div onClick={this.clicker}>{`${linkText}!`}</div></span>
    )
  }

  componentDidUpdate(prevProps, prevState){
    // clear erros switching between forms
    if (this.props.location.pathname !== prevProps.location.pathname) this.props.clearErrors();
  }

  render(){

    let errorClass = "";
    let location = this.props.location.pathname == "/login" ? "/signup" : "/login";
    
    if (this.props.errors.length > 0) {
      errorClass = "auth--error-grid";
    }

    return (
        <div className="auth--main grid">
          <form className="auth--form grid" onSubmit={this.handleSubmit}>
            <div className={`auth--inputs grid ` + errorClass}>
              <h2>{this.props.formType}</h2>
              {this.renderErrors()}
              <input
                placeholder="Email"
                value={this.state.email}
                onChange={this.update("email")}
                type="text"
              />
              {this.username()}
              <input
                placeholder="Password"
                value={this.state.password}
                onChange={this.update("password")}
                type="password"
              />
              <input className="btn" type="submit" value={`${this.props.formType}`} />
              {this.switchText()}
            </div>
          </form>
        </div>

    )
  }
}

export default AuthForm;