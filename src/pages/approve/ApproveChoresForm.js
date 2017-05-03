import React, { Component } from 'react';
import { connect } from 'react-redux';

import { approveChoresRequest } from '../../actions/approveChoresAction';
import '../../components/flexgrid.css';
import './style.css';

class ApproveChoresForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isApproved: false,
    };
    this.handleInputChange = this.handleInputChange.bind(this);
  }

  handleInputChange(event) {
    const target = event.target;
    const value = target.type === 'checkbox' ? target.checked : target.value;
    const name = target.name;

    this.setState({
      [name]: value,
    });
  }

  onChange(e) {
    e.preventDefault();
  }

  onClick(e, j) {}

  render() {
    return (
      <div className="centerAlign">
        <h3>Approval Inbox</h3>
        <hr className="partitionStyle" />
        <div className="eleAlign approveAlign">
          <input
            type="checkbox"
            name="isApproved"
            checked={this.state.isApprove}
            className="isApprove"
            onChange={this.handleInputChange}
          />
        </div>
        <p className="eleAlign">Child1</p>
        <p className="eleAlign">Chore1</p>
        <div className="eleAlign">
          <button className="appRejButton appBtnStyle">Approve</button>
          <button className="appRejButton rejBtnStyle">Reject</button>
        </div>
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    errorMessage: state.chores.errorMessage,
  };
};

export default connect(mapStateToProps)(ApproveChoresForm);
