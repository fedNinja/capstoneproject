import React, { Component } from 'react';
import { connect } from 'react-redux';

import LoginForm from './LoginForm';
import { login } from '../../actions/user';

class LoginPage extends Component {
  render() {
    return (
      <div>
          <LoginForm login={login} />
      </div>
    );
  }
}

export default connect(undefined, { login })(LoginPage);
