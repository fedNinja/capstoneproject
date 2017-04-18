import React, { Component } from 'react';
import { connect } from 'react-redux';

import SignupForm from './SignupForm';
import { signup } from '../../actions/user';

class SignupPage extends Component {
  render() {
    const { signup } = this.props;
    return (
      <div className="row">
        <div className="col-md-4 col-md-offset-4">
          <SignupForm signup={signup} />
        </div>
      </div>
    );
  }
}

export default connect(undefined, { signup })(SignupPage);
