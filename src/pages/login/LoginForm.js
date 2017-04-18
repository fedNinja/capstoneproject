import React, { Component } from 'react';
import { connect } from 'react-redux';

import { userLoginRequest } from '../../actions/user';

class LoginForm extends Component {
  onSubmit = e => {
    e.preventDefault();
    const userName = e.target.userName.value;
    const password = e.target.password.value;
    this.props.dispatch(userLoginRequest(userName, password));
  };

  render() {
    const { errorMessage } = this.props;
    const { userId } = this.props;
    console.log(userId);
    return (
      <div>
        {errorMessage ? <p>{errorMessage}</p> : null}
        <form onSubmit={this.onSubmit}>
          <div className="form-group">
            <label className="control-label">UserName</label>
            <input type="text" name="userName" className="form-control" />
          </div>
          <div className="form-group">
            <label className="control-label">Password</label>
            <input type="password" name="password" className="form-control" />
          </div>
          <div className="form-group">
            <button className="btn btn-primary btn-lg">Login</button>
          </div>
        </form>
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    name: state.logIn.userName,
    password: state.logIn.password,
    errorMessage: state.logIn.errorMessage,
    userId: state.logIn.userId,
  };
};

export default connect(mapStateToProps)(LoginForm);
