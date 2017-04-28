import React, { Component } from 'react';

import '../../components/flexgrid.css';
import './style.css';

export default class SignupForm extends Component {
  state = {
    userName: '',
    email: '',
    password: '',
    error: {}
  };

  onChange = e => {
    this.setState({ [e.target.name]: e.target.value });

  };

  onSubmit = e => {
    e.preventDefault();
    if(!this.state.userName){

    }
    else {
      this.props.signup(this.state);
    }

  };

  render() {
    return (
      <div className="centerItem">
      <form onSubmit={this.onSubmit}>
          <h1 className="alignHeader">Sign up for Gullak</h1>
        <div className="row">
          <label className="col formlbl">UserName</label>
          <input
            onChange={this.onChange}
            type="text"
            name="userName"
            className="col inputStyle"
          />
        </div>
        <div className="row">
          <label className="col formlbl">Password</label>
          <input
            onChange={this.onChange}
            type="password"
            name="password"
            className="col inputStyle"
          />
        </div>
        <div className="row">
          <label className="col formlbl">PasswordConfirmation</label>
          <input
            onChange={this.onChange}
            type="password"
            name="passwordConfirmation"
            className="col inputStyle"
          />
        </div>
        <div className="row">
          <label className="col formlbl">Email</label>
          <input
            onChange={this.onChange}
            type="text"
            name="email"
            className="col inputStyle"
          />
        </div>
        <div className="row btnAlign">
          <button className="col">Sign up</button>
        </div>
      </form>
    </div>
    );
  }
}
