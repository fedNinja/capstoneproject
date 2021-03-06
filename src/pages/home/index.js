import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router';

import './style.css';
import '../../components/flexgrid.css';
import { getApprovalInboxRequest } from '../../actions/getApprovalInboxAction';

class HomePage extends Component {

onClick = (e) => {
  this.props.dispatch(getApprovalInboxRequest());
}

render() {
    const { children } = this.props;
    return (
      <div className="homeDiv">
        <div className="avatar" />
        <div className="detailsDiv">
          <p className="dataUser">
            User name: {localStorage.getItem('username')}
          </p>
          <p className="dataUser">Email: {localStorage.getItem('email')}</p>
        </div>
        <div className="approveChores">
          <button onClick={e => this.onClick(e)} className='ApproveBtn'>Approval Inbox</button>
        </div>
        <ul className="listKids">
          {children.data.map((child, i) => (
            <li key={i} className="clearFix">
              <Link to={'/addchores/' + child._id}>
                <div className="avatar imgAlign" />
              </Link>
              <div className="detailsDiv imgAlign textAlign">
                {' '}Child Name: {child.userName}{' '}
              </div>
            </li>
          ))}
        </ul>
        <div className="clearFix">
          <Link to="/addkid"><button className="addBtn" /></Link>
        </div>
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    children: state.children,
  };
};

export default connect(mapStateToProps)(HomePage);
