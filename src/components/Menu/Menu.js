import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import Toast from './Toast';
class Menu extends Component {
  render() {
    if (this.props.form) {
      return (
        <header>
          <nav className="menu">
            <ul className="menu-nav">
              <Link to={'/'}>Home</Link>
            </ul>
          </nav>
          <Toast message={this.props.success} />
        </header>
      );
    } else {
      return (
        <header>
          <nav className="menu">
            <ul className="menu-nav">
              <Link to={'/addsauce'}>Add Sauce</Link>
            </ul>
          </nav>
        </header>
      );
    }
  }
}

const mapStateToProps = state => ({
  success: state.success,
  failedsubmit: state.failedsubmit
});

export default connect(mapStateToProps)(Menu);
