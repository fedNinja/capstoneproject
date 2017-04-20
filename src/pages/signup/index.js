import React, { Component } from 'react';
import { connect } from 'react-redux';

import SignupForm from './SignupForm';
import { signup } from '../../actions/user';

class SignupPage extends Component {
  render() {
    const { signup } = this.props;
    return (
      <div>
          <SignupForm signup={signup} />
      </div>
    );
  }
}

export default connect(undefined, { signup })(SignupPage);
