import React, { Component } from "react";

import Navigation from "../Navigation/Navigation";

import "./Header.css";

class Header extends Component {
  render() {
    return (
      <header id="header" className="header">
        {/* <h1> Woof App </h1> */}
        <Navigation />
      </header>
    );
  }
}

export default Header;
