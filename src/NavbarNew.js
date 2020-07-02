import React, { Component } from "react";
import { connect } from "react-redux";
import {
  MdLocationOn,
  MdShoppingCart,
  MdAccountCircle,
  MdForum,
} from "react-icons/md";
import { AiTwotoneHome } from "react-icons/ai";
import { Link } from "react-router-dom";
import { Tooltip, Button } from "antd";
import { FiLogOut } from "react-icons/fi";
import { signOut } from "./actions/authActions";
import Ripples from "react-ripples";

// const settings = <span>Settings</span>;
const text = <span>Home</span>;
const text2 = <span>Location</span>;
const text3 = <span>Cart</span>;
const text4 = <span>Forum</span>;
const text5 = <span>Account</span>;

// const buttonWidth = 70;

class NavbarNew extends Component {
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
          <Link to="/">
            <li>
              <Tooltip placement="top" title={text}>
                <Ripples>
                  <Button>
                    <AiTwotoneHome />
                  </Button>
                </Ripples>
              </Tooltip>
            </li>
          </Link>
          <Link to="./map">
            <li>
              <Tooltip placement="top" title={text2}>
                <Ripples>
                  <Button>
                    <MdLocationOn />
                  </Button>
                </Ripples>
              </Tooltip>
            </li>
          </Link>
          <Link to="/steamcart">
            <li>
              <Tooltip placement="top" title={text3}>
                <Ripples>
                  <Button>
                    <MdShoppingCart />
                  </Button>
                </Ripples>
              </Tooltip>
            </li>
          </Link>
          <Link to="/forum">
            <li>
              <Tooltip placement="top" title={text4}>
                <Button>
                  <MdForum />
                </Button>
              </Tooltip>
            </li>
          </Link>

          {this.props.isAuthenticated ? (
            <Link to="/account">
              <li>
                <Tooltip placement="top" title={text5}>
                  <Button>
                    <MdAccountCircle />
                  </Button>
                </Tooltip>
              </li>
            </Link>
          ) : (
            <Link to="/signin">
              <li>
                <Button>
                  <MdAccountCircle />
                </Button>
              </li>
            </Link>
          )}

          {this.props.isAuthenticated ? (
            <li>
              <Button onClick={this.props.signOut}>
                <FiLogOut />
              </Button>
            </li>
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
