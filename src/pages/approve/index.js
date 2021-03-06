import React, { Component } from 'react';
import { connect } from 'react-redux';
import './style.css';

import ApproveChoresForm from './ApproveChoresForm';
import { approveChoresRequest } from '../../actions/approveChoresAction';

class ApproveRejectPage extends Component {
  render() {
    return (
      <div>
        <ApproveChoresForm approveChoresRequest={this.props.approveChoresRequest} />
      </div>
    );
  }
}

export default connect(null, { approveChoresRequest })(ApproveRejectPage);
