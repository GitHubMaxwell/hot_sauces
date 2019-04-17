import React, { Component } from 'react';
import { Link } from 'react-router-dom';

export default class Menu extends Component {
  render() {
    if (this.props.form) {
      return (
        <header>
          <nav className="menu">
            <ul className="menu-nav">
              <Link to={'/'}>Home</Link>
            </ul>
          </nav>
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
