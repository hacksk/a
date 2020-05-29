import React, { Component } from "react";
import Breadcrumb from "react-bootstrap/Breadcrumb";

export default class HeaderCustomer extends Component {
  render() {
    return (
      <div className="headerstore">
        <div className="headerstore-content">
          <Breadcrumb separator=">">
            <Breadcrumb.Item>Home</Breadcrumb.Item>
          </Breadcrumb>
          <img alt="logo" src={require("./assets/moto365logo.svg")}></img>
        </div>
      </div>
    );
  }
}
