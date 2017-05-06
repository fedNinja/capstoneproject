/**
  list of the chore Form
  Map over each list item
**/

import React, { Component } from 'react';

import './style.css';
import '../../components/flexgrid.css';

class Chore extends Component {
  state = {
    id: localStorage.getItem('userid'),
    choreId: this.props._id,
    isChecked: false
  };

  onClick = (e) => {
    e.preventdefault()
    this.setState({
      isChecked: !this.state.isChecked
    });
    if (this.props.action === 'done') this.props.completeChoresRequest(this.state);
    if (this.props.action === 'approve') this.page.approveChoresRequest(this.state);
  }

  _handleCheck = () => {
    this.setState({
      isChecked: !this.state.isChecked
    });
  };

  render() {
    console.log("props:");
    console.log(this.props);
    return (
      <div>
        <hr className="partitionStyle" />
        <li className="listCompleteStyle">
          <div>
            <input
              type="checkbox"
              name="test"
              onChange={this._handleCheck}
              checked={this.state.isChecked}
              className="checkAlign"
            />
            <img
              className="imgStyle eleAlign"
              alt="choreImage"
              src={this.props.imgurl}
            />
            <p className="eleAlign choreAlign">
              {this.props.choreName}
            </p>
            <div className="eleAlign">
              <button
                className="appRejButton appBtnStyle"
                disabled={!this.state.isChecked}
                onClick={e => this.onClick(e)}
              >
                {this.props.action}
              </button>
            </div>
          </div>
        </li>
      </div>
    );
  }
}

export default Chore;
