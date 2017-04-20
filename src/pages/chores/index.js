import React, { Component } from 'react';
import AddChoresForm from './AddChoresForm';
import { connect } from 'react-redux';
import { addChoresRequest } from '../../actions/addChoresAction';

class AddChoresPage extends Component {
  render() {
    return (
      <div className="row">
        <div className="col-md-6 col-md-offset-3">
          <AddChoresForm addChoresRequest={addChoresRequest} />
        </div>
      </div>
    );
  }
}

export default connect(null, { addChoresRequest })(AddChoresPage);
