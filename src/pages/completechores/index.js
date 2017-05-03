import React, { Component } from 'react';
import { connect } from 'react-redux';
import './style.css';

import { completeChoresRequest } from '../../actions/completeChoreAction';
import CommpleteChoresForm from './CompleteChoresForm';

class CompleteChoresPage extends Component {
  render() {
    return (
      <div>
        <CommpleteChoresForm completeChoresRequest={completeChoresRequest} />
      </div>
    );
  }
}

export default connect(null, { completeChoresRequest })(CompleteChoresPage);
