import React, { Component } from "react";
import { connect } from "react-redux";
import { NavLink } from "react-router-dom";
import { signOut } from "./actions/authActions";
import { Button, Popover } from "antd";

const content = (
  <div>
    <p>Content</p>
    <p>Content</p>
  </div>
);

class BottomNavbar extends Component {
  handleClick = (event) => {
    window.location.replace("/forum/create/new");
  };
  render() {
    return (
      <div className="bottommenu">
        <ul
          style={{
            display: "flex",
            flexDirection: "row",
            justifyContent: "space-evenly",
            width: "100%",
          }}
        >
          <NavLink activeClassName="active" to="/home">
            <li>
              <button style={{ border: "none", background: "transparent" }}>
                <img
                  alt=""
                  src={require("./vector-icons/bottomnavbar/Home.svg")}
                ></img>
              </button>
            </li>
          </NavLink>
          {/* <NavLink activeClassName="active" to="/search">
            <li>
              <button
                style={{ border: "none", background: "transparent" }}
                href="#news"
              >
                <img
                  alt=""
                  src={require("./vector-icons/bottomnavbar/Search.svg")}
                ></img>
              </button>
            </li>
          </NavLink> */}
          <NavLink activeClassName="active" to="/map">
            <li>
              <button
                style={{ border: "none", background: "transparent" }}
                href="#map"
              >
                <img
                  alt=""
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
                  alt=""
                  src={require("./vector-icons/bottomnavbar/Cart.svg")}
                ></img>
              </button>
            </li>
          </NavLink>
          {this.props.isAuthenticated ? (
            <NavLink activeClassName="active" to="/forum">
              <li>
                <button
                  className="bottom-nav-forum"
                  style={{ border: "none", background: "transparent" }}
                  href="#icon"
                >
                  <Popover
                    trigger="click"
                    content={
                      <div className="bottom-nav-forum-pop">
                        <NavLink
                          onClick={this.handleClick}
                          to="/forum/create/new"
                        >
                          <div className="forum-navbar-btn-bottom">
                            <img
                              alt="create"
                              src={require("./vector-icons/create.png")}
                            ></img>
                            <p>create thread</p>
                          </div>
                        </NavLink>
                        <NavLink to="/forum">
                          <div className="forum-navbar-btn-bottom">
                            <img
                              alt="view"
                              src={require("./vector-icons/browse.png")}
                            ></img>
                            <p>Browse Forum</p>
                          </div>
                        </NavLink>
                      </div>
                    }
                    title="Title"
                  >
                    <img
                      alt=""
                      src={require("./vector-icons/bottomnavbar/Forum.svg")}
                    ></img>
                  </Popover>
                </button>
              </li>
            </NavLink>
          ) : (
            <NavLink activeClassName="active" to="/forum">
              <li>
                <button
                  style={{ border: "none", background: "transparent" }}
                  href="#cart"
                >
                  <img
                    alt=""
                    src={require("./vector-icons/bottomnavbar/Forum.svg")}
                  ></img>
                </button>
              </li>
            </NavLink>
          )}
          {this.props.isAuthenticated ? (
            <NavLink activeClassName="active" to="/account">
              <li>
                <button
                  style={{ border: "none", background: "transparent" }}
                  href="#icon"
                >
                  <img
                    alt=""
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
                    alt=""
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
