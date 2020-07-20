import React, { Component } from "react";
import { connect } from "react-redux";
import { MdAccountCircle, MdForum } from "react-icons/md";
import { AiTwotoneHome, AiOutlineShoppingCart } from "react-icons/ai";
import { IoMdSearch } from "react-icons/io";
import { NavLink } from "react-router-dom";
import { GoLocation } from "react-icons/go";
import { signOut } from "./actions/authActions";

class BottomNavbar extends Component {
  render() {
    return (
      <div className="bottommenu">
        <ul>
          <NavLink activeClassName="active" to="/">
            <li>
              <button style={{ border: "none", background: "transparent" }}>
                <img
                  src={require("./vector-icons/bottomnavbar/Home.svg")}
                ></img>
              </button>
            </li>
          </NavLink>
          <NavLink activeClassName="active" to="/search">
            <li>
              <button
                style={{ border: "none", background: "transparent" }}
                href="#news"
              >
                <img
                  src={require("./vector-icons/bottomnavbar/Search.svg")}
                ></img>
              </button>
            </li>
          </NavLink>
          <NavLink activeClassName="active" to="/map">
            <li>
              <button
                style={{ border: "none", background: "transparent" }}
                href="#map"
              >
                <img
                  src={require("./vector-icons/bottomnavbar/Location.svg")}
                ></img>
              </button>
            </li>
          </NavLink>
          <NavLink activeClassName="active" to="/steamcart">
            <li>
              <button
                style={{ border: "none", background: "transparent" }}
                href="#cart"
              >
                <img
                  src={require("./vector-icons/bottomnavbar/Cart.svg")}
                ></img>
              </button>
            </li>
          </NavLink>
          <NavLink activeClassName="active" to="/forum">
            <li>
              <button
                style={{ border: "none", background: "transparent" }}
                href="#icon"
              >
                <img
                  src={require("./vector-icons/bottomnavbar/Forum.svg")}
                ></img>
              </button>
            </li>
          </NavLink>
          {this.props.isAuthenticated ? (
            <NavLink activeClassName="active" to="/account">
              <li>
                <button
                  style={{ border: "none", background: "transparent" }}
                  href="#icon"
                >
                  <img
                    src={require("./vector-icons/bottomnavbar/Account.svg")}
                  ></img>{" "}
                </button>
              </li>
            </NavLink>
          ) : (
            <NavLink activeClassName="active" to="/signin">
              <li>
                <button
                  style={{ border: "none", background: "transparent" }}
                  href="#icon"
                >
                  <img
                    src={require("./vector-icons/bottomnavbar/Account.svg")}
                  ></img>{" "}
                </button>
              </li>
            </NavLink>
          )}
        </ul>
      </div>
    );
  }
}
const mapStateToProps = (state) => {
  return {
    isAuthenticated: state.auth.isAuthenticated,
  };
};
const mapDispatchToProps = (dispatch) => {
  return {
    signOut: () => {
      dispatch(signOut());
    },
  };
};
export default connect(mapStateToProps, mapDispatchToProps)(BottomNavbar);
