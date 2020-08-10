import React, { Component } from "react";
import Breadcrumb from "react-bootstrap/Breadcrumb";
import { Link } from "react-router-dom";
import { withRouter } from "react-router-dom";

class HeaderCustomer extends Component {
  state = {
    dis: "block",
  };
  componentDidMount = () => {
    const pathname = this.props.location.pathname;
    console.log(pathname, "location");
  };
  render() {
    return (
      <div
        className="headerstore"
        style={
          this.props.location.pathname == "/signin" ? { display: "none" } : {}
        }
      >
        <div className="headerstore-bg">
          <div className="headerstore-content">
            <Link to="/">
              <img
                className="headerstore-firstlogo"
                alt="logo"
                src={require("./assets/automotologo.svg")}
              ></img>
            </Link>
            <Link to="/">
              <img alt="logo" src={require("./assets/moto365logo.svg")}></img>
            </Link>
          </div>
        </div>
      </div>
    );
  }
}
export default withRouter(HeaderCustomer);
