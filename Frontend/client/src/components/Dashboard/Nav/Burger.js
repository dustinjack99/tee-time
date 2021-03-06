import React, { Component } from "react";
import "./stylesheet.css";

class Burger extends Component {
  render() {
    return (
      <div id="burger" onClick={this.props.animateNav}>
        <div
          className={this.props.navOpen ? "line toggle1" : "line"}
          id="line1"
        ></div>
        <div
          className={this.props.navOpen ? "line toggle2" : "line"}
          id="line2"
        ></div>
        <div
          className={this.props.navOpen ? "line toggle3" : "line"}
          id="line3"
        ></div>
      </div>
    );
  }
}

export default Burger;
