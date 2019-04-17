// conditionally render 'Home' or '< Back To Hot Sauce List'
// HOC pattern

import React, { Component } from 'react';
import { Link } from 'react-router-dom';

export default class Menu extends Component {
  constructor(props) {
    super(props);
    this.state = {
      show: false,
      current: 'home'
    };
  }

  render() {
    let { match } = this.props;
    console.log('MENU: ', this.props);
    if (Object.keys(this.props).length === 0) {
      return (
        // <header>
        //   <nav className={`menu ${this.state.show ? `show` : ``}`}>
        //     <ul className={`menu-nav ${this.state.show ? `show` : ``}`}>
        //       <Link
        //         to={'/'}
        //         className={`menu-nav-items ${this.state.show ? `show` : ``}`}
        //         onClick={this.menuItemClick}
        //       >
        //         Home
        //       </Link>
        //     </ul>
        //   </nav>
        // </header>
        null
      );
    } else {
      return (
        <header>
          <nav className={`menu`} />
        </header>
      );
    }
  }
}
