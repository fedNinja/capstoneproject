import React, { Component } from 'react';
import { connect } from 'react-redux';

import AddChoresForm from './AddChoresForm';
import { addChoresRequest } from '../../actions/addChoresAction';

class AddChoresPage extends Component {
  render() {
    return (
      <div>
          <AddChoresForm addChoresRequest={addChoresRequest} />
      </div>
    );
  }
}

export default connect(null, { addChoresRequest })(AddChoresPage);
