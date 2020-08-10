import React, { Component } from "react";
import Breadcrumb from "react-bootstrap/Breadcrumb";
import { Link } from "react-router-dom";

export default class HeaderCustomer extends Component {
  render() {
    return (
      <div className="headerstore">
        <div className="headerstore-bg">
          <div className="headerstore-content">
            <img className="headerstore-firstlogo" alt="logo" src={require("./assets/automotologo.svg")}></img>
            <Link to="/">
              <img alt="logo" src={require("./assets/moto365logo.svg")}></img>
            </Link>
          </div>
        </div>
      </div>
    );
  }
}
