import React, { Component } from "react";
import { connect } from "react-redux";
import {
  MdLocationOn,
  MdShoppingCart,
  MdAccountCircle,
  MdForum,
} from "react-icons/md";
import { AiTwotoneHome } from "react-icons/ai";
import { NavLink } from "react-router-dom";
import { Tooltip, Button, Popover } from "antd";
import { FiLogOut } from "react-icons/fi";
import { signOut } from "./actions/authActions";
import Ripples from "react-ripples";

// const settings = <span>Settings</span>;
const text = <span>Home</span>;
const text2 = <span>Location</span>;
const text3 = <span>Cart</span>;
const text4 = <span>Forum</span>;
const text5 = <span>Account</span>;
const text6 = <span>Sign Out</span>;

// const buttonWidth = 70;

class NavbarNew extends Component {
  state = {
    visiblepop: true,
  };

  handleVisbile = (visiblepop) => {
    this.setState({ visiblepop: false });
  };
  handleClick = (event) => {
    window.location.replace("/forum/create/new");
  };

  render() {
    return (
      <div className="newnav" style={{ zIndex: "1000" }}>
        <ul>
          {/* <li>
            <button
              className="navmenu"
              style={{ backgroundColor: "transparent", border: "none" }}
            >
              <Tooltip placement="top" title={settings}>
                <IoMdMenu />
              </Tooltip>
            </button>
          </li> */}
          <NavLink activeClassName="navbar-active-now" to="/home">
            <Tooltip placement="top" title={text}>
              <li>
                <Ripples>
                  <Button>
                    <AiTwotoneHome />
                  </Button>
                </Ripples>
              </li>
            </Tooltip>
          </NavLink>

          <NavLink activeClassName="navbar-active-now" to="/map">
            <Tooltip placement="top" title={text2}>
              <li>
                <Ripples>
                  <Button>
                    <MdLocationOn />
                  </Button>
                </Ripples>
              </li>
            </Tooltip>
          </NavLink>
          <NavLink activeClassName="navbar-active-now" to="/steamcart">
            <Tooltip placement="top" title={text3}>
              <li>
                <Ripples>
                  <Button>
                    <MdShoppingCart />
                  </Button>
                </Ripples>
              </li>
            </Tooltip>
          </NavLink>
          {this.props.isAuthenticated ? (
            <Popover
              key=""
              content={
                <div
                  onClick={this.handleVisbile}
                  style={{
                    display: "flex",
                    flexDirection: "column",
                    height: "132px",
                    width: "130px",
                  }}
                >
                  <NavLink onClick={this.handleClick} to="/forum/create/new">
                    <div className="forum-navbar-btn">
                      <img
                        alt="create"
                        src={require("./vector-icons/create.png")}
                      ></img>
                      <p>Create Thread</p>
                    </div>
                  </NavLink>
                  <NavLink to="/forum">
                    <div className="forum-navbar-btntwo">
                      <img
                        alt="view"
                        src={require("./vector-icons/browse.png")}
                      ></img>
                      <p>Browse Forum</p>
                    </div>
                  </NavLink>
                </div>
              }
              title={<div></div>}
              trigger="hover"
              placement="rightTop"
            >
              <Tooltip placement="top" title={text4}>
                <li className="navbar-popover-btn">
                  <Button>
                    <MdForum />
                  </Button>
                </li>
              </Tooltip>
            </Popover>
          ) : (
            <NavLink activeClassName="navbar-active-now" to="/forum">
              <Tooltip placement="top" title={text4}>
                <li className="navbar-popover-btn">
                  <Button>
                    <MdForum />
                  </Button>
                </li>
              </Tooltip>
            </NavLink>
          )}

          {this.props.isAuthenticated ? (
            <NavLink activeClassName="navbar-active-now" to="/account">
              <Tooltip placement="top" title={text5}>
                <li>
                  <Button>
                    <MdAccountCircle />
                  </Button>
                </li>
              </Tooltip>
            </NavLink>
          ) : (
            <NavLink activeClassName="navbar-active-now" to="/signin">
              <Tooltip placement="top" title={text5}>
                <li>
                  <Button>
                    <MdAccountCircle />
                  </Button>
                </li>
              </Tooltip>
            </NavLink>
          )}

          {this.props.isAuthenticated ? (
            <Tooltip placement="top" title={text6}>
              <li>
                <Button onClick={this.props.signOut}>
                  <FiLogOut />
                </Button>
              </li>
            </Tooltip>
          ) : null}
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
export default connect(mapStateToProps, mapDispatchToProps)(NavbarNew);
