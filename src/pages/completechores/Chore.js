/**
  list of the chore Form
  Map over each list item
**/

import React, { Component } from 'react';

class Chore extends Component {
  state = { isChecked: false };

  _handleCheck = () => {
    this.setState({
      isChecked: !this.state.isChecked
    });
  };

  render() {
    return (
      <div>
        <li className="listCompleteStyle">
          <hr className="partitionStyle" />
          <div className="eleAlign checkAlign">
            <input
              type="checkbox"
              name="test"
              onChange={this._handleCheck}
              checked={this.state.isChecked}
              className="isComplete"
            />
            <img
              className="imgStyle eleAlign"
              alt="choreImage"
              src={this.props.imgurl}
            />
            <p className="eleAlign">
              {this.props.choreName}
            </p>
            <div className="eleAlign">
              <button
                className="appRejButton appBtnStyle"
                disabled={!this.state.isChecked}
              >
                Done
              </button>
            </div>
          </div>
        </li>
      </div>
    );
  }
}

export default Chore;
