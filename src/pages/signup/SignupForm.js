import React, { Component } from 'react';

export default class SignupForm extends Component {
  state = {
    userName: '',
    email: '',
    password: '',
  };

  onChange = e => {
    this.setState({ [e.target.name]: e.target.value });
  };

  onSubmit = e => {
    e.preventDefault();
    this.props.signup(this.state);
  };

  render() {
    return (
      <form onSubmit={this.onSubmit}>
        <h1>Join our community!</h1>
        <div className="form-group">
          <label className="control-label">UserName</label>
          <input
            onChange={this.onChange}
            type="text"
            name="userName"
            className="form-control"
          />
        </div>
        <div className="form-group">
          <label className="control-label">Password</label>
          <input
            onChange={this.onChange}
            type="password"
            name="password"
            className="form-control"
          />
        </div>
        <div className="form-group">
          <label className="control-label">passwordConfirmation</label>
          <input
            onChange={this.onChange}
            type="password"
            name="passwordConfirmation"
            className="form-control"
          />
        </div>
        <div className="form-group">
          <label className="control-label">Email</label>
          <input
            onChange={this.onChange}
            type="text"
            name="email"
            className="form-control"
          />
        </div>
        <div className="form-group">
          <button className="btn btn-primary btn-lg">Sign up</button>
        </div>
      </form>
    );
  }
}
