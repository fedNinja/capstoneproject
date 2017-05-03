import React, { Component } from 'react';
import { connect } from 'react-redux';

import AddKidForm from './AddKidForm';
import { addkid } from '../../actions/addkid';

class AddKidPage extends Component {
  render() {
    return (
      <div>
        <AddKidForm addkid={this.props.addkid} />
      </div>
    );
  }
}

export default connect(undefined, { addkid })(AddKidPage);
