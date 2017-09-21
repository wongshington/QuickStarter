import React from 'react';
import { Link, withRouter } from 'react-router-dom';
import Modal from 'react-modal';



class SessionForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      username: '',
      password: '',
      email: ''
    };
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  componentWillReceiveProps(nextProps) {
    if (nextProps.loggedIn) {
      this.props.history.push('/');
    }
  }

  update(field) {
    return e => this.setState({
      [field]: e.currentTarget.value
    });
  }

  handleSubmit(e) {
    e.preventDefault();
    const user = this.state;
    this.props.formAction({user});
  }

  navLink() {
    if (this.props.formType === '/login') {
      return <Link to="/login">LogIn!</Link>;
    } else {
      return <Link to="/signup">Sign Up!</Link>;
    }
  }
  usernameInput() {
    if (this.props.formType === '/signup') {
      return (
        <label>Username:
          <input
          type="text"
          value={this.state.username}
          onChange={this.update('username')} />
        </label>
      );
    }
  }

  renderErrors() {
    return(
      <ul>
        {this.props.errors.map((error, i) => (
          <li key={`error-${i}`}>
            {error}
          </li>
        ))}
      </ul>
    );
  }

  render() {
    return (

      <div >
        <form onSubmit={this.handleSubmit} >
          {this.renderErrors()}

          <div>
          <ul>{this.usernameInput()}</ul>
            <label>Email:
              <input type="text"
                value={this.state.email}
                onChange={this.update('email')}
              />
            </label>
            <label>Password:
              <input type="password"
                value={this.state.password}
                onChange={this.update('password')}
              />
            </label>
            <input type="submit" value="Submit" />
          </div>
        </form>
      </div>
    </Modal>
    );
  }
}

  export default withRouter(SessionForm);
