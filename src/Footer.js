import React, { Component } from "react";
import { Link } from "react-router-dom";
import { MdCopyright } from "react-icons/md";

export default class Footer extends Component {
  render() {
    return (
      <div className="footer">
        <div className="footer-bg">
          <div className="footer-primary">
            <div className="footer-primar-quick">
              <p className="quick-link">QUICKLINKS</p>
              <div className="footer-primar-quick-content">
                <Link to="/">
                  <p>Home</p>
                </Link>
                <Link to="/accesories">
                  <p>Accessories</p>
                </Link>
                <Link to="/services">
                  <p>Services</p>
                </Link>
                <Link to="/forum">
                  <p>Forum</p>
                </Link>
              </div>
            </div>
            <div className="footer-primar-logo">
              <img alt="" src={require("./assets/amlogo.svg")}></img>
              <img alt="" src={require("./assets/automotologo.svg")}></img>
              <img alt="" src={require("./assets/moto365logo.svg")}></img>
            </div>
          </div>
        </div>
        <div className="footer-secondary">
          <p>
            <MdCopyright /> 2020 AUTOMOTO VERSION 1.03. ALL RIGHTS RECIEVED |
            POWERED BY TECHBYHEART
          </p>
        </div>
      </div>
    );
  }
}
