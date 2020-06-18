import React, { Component } from "react";
import { MdCopyright } from "react-icons/md";

export default class Footer extends Component {
  render() {
    return (
      <div className="footer">
        <div className="footer-primary">
          <div className="footer-sub">
            <ul>
              <li>
                <a
                  href="#qiucklinks"
                  style={{ textDecoration: "underline", color: "white" }}
                >
                  QUICK LINKS
                </a>
              </li>
              <li>HOME</li>
              <li>ACCESSORIES</li>
              <li>SERVICES</li>
              <li>MAP</li>
            </ul>
          </div>
          <div className="footer-logo">
            <img alt="" src={require("./assets/automotologo.svg")} />
            <img alt="" src={require("./assets/moto365logo.svg")} />
            <img alt="" src={require("./assets/amlogo.svg")} />
          </div>
        </div>
        <div className="footer-secondary">
          <p style={{ color: "rgba(255, 255, 255, 0.87)" }}>
            <MdCopyright /> 2020 AUTOMOTO. ALL RIGHT RECEIVED
          </p>
          <br />
          <a
            href="https://www.techbyheart.in/"
            target="_blank"
            rel="noopener noreferrer"
            style={{
              color: "rgba(255, 255, 255, 0.87)",
              overflow: "visible",
            }}
          >
            POWERED BY TECHBYHEART
          </a>
        </div>
      </div>
    );
  }
}
