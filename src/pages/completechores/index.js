import React, { Component } from 'react';
import { connect } from 'react-redux';
import './style.css';

import { completeChoresRequest } from '../../actions/completeChoreAction';
import CompleteChoresForm from './CompleteChoresForm';


class CompleteChoresPage extends Component {
  render() {
    return (
      <div>
        <CompleteChoresForm completeChoresRequest={this.props.completeChoresRequest} />
      </div>
    );
  }
}

export default connect(null, { completeChoresRequest })(CompleteChoresPage);
