import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router';

import './style.css';

class HomePage extends Component {
  render() {
    const { children } = this.props;
    console.log(localStorage.getItem('username'));
    console.log(children);
    return (
      <div className="homeDiv">
        <div className="avatar" />
        <div className="detailsDiv">
          <p className="dataUser">
            User name: {localStorage.getItem('username')}
          </p>
          <p className="dataUser">Email: {localStorage.getItem('email')}</p>
        </div>
        <ul className="listKids">
          {children.map((child, i) => (
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
    children: state.user.info.children,
  };
};

export default connect(mapStateToProps)(HomePage);
