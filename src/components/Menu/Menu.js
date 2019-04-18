import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';

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
          <p className={`toast container ${this.props.success ? 'success' : null}`}>
            Success! You have added your custom sauce to the Home page
          </p>
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
  success: state.success
});

export default connect(mapStateToProps)(Menu);
