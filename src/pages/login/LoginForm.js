import React, { Component } from 'react';
import '../../components/flexgrid.css';
import './style.css';

export default class LoginForm extends Component {
  state = {
    userName: '',
    password: ''
  };

  onChange = e => {
    this.setState({ [e.target.name]: e.target.value });
  };

  onSubmit = e => {
    e.preventDefault();
    this.props.login(this.state);
  };

  render() {
    const { errorMessage } = this.props;
    const { userId } = this.props;
    console.log(userId);
    return (
      <div className="centerItem">
        {errorMessage ? <p>{errorMessage}</p> : null}
        <form onSubmit={this.onSubmit} className="centerALign">
          <div className="row">
            <label className="col">UserName</label>
            <input
              onChange={this.onChange}
              type="text"
              name="userName"
              className="col"
            />
          </div>
          <div className="row">
            <label className="control-label col">Password</label>
            <input
              onChange={this.onChange}
              type="password"
              name="password"
              className="form-control col"
            />
          </div>
          <div className="form-group row">
            <button className="btn btn-primary btn-lg col">Login</button>
          </div>
        </form>
      </div>
    );
  }
}
