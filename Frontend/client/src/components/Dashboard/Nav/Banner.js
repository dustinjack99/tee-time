import React, { Component } from "react";
import { Link } from "react-router-dom";
import Burger from "./Burger";
import "./stylesheet.css";
class Banner extends Component {
  render() {
    // console.log(this.props.message);
    return (
      <div id="banner">
        <h2>
          <Link to="/dashboard/matchView">Tee Time</Link>
        </h2>
        <Burger
          animate={this.props.action}
          burgerClicked={this.props.clicked}
        />
      </div>
    );
  }
}

export default Banner;
