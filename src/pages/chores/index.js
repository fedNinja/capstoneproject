import React, { Component } from 'react';
import { connect } from 'react-redux';

import AddChoresForm from './AddChoresForm';
import { addChoresRequest } from '../../actions/addChoresAction';

class AddChoresPage extends Component {
  render() {
    console.log(this.props.params.childId);
    return (
      <div>
          <AddChoresForm addChoresRequest={addChoresRequest} childId={this.props.params.childId} />

      </div>
    );
  }
}

export default connect(null, { addChoresRequest })(AddChoresPage);
