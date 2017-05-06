import React, { Component } from 'react';
import { connect } from 'react-redux';

import './style.css';
import '../../components/flexgrid.css';

class LoginForm extends Component {
  state = {
    userName: '',
    password: '',
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

    return (
      <div className="centerItem">
        {errorMessage ? <p>{errorMessage}</p> : null}
        <form onSubmit={this.onSubmit}>
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
          <div className="row btnAlign">
            <button className="col">Login</button>
          </div>
        </form>
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    errorMessage: state.user.error,
  };
};

export default connect(mapStateToProps)(LoginForm);
