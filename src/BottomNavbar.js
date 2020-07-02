import React, { Component } from "react";
import { connect } from "react-redux";
import { MdAccountCircle, MdForum } from "react-icons/md";
import { AiTwotoneHome, AiOutlineShoppingCart } from "react-icons/ai";
import { IoMdSearch } from "react-icons/io";
import { Link } from "react-router-dom";
import { GoLocation } from "react-icons/go";
import { signOut } from "./actions/authActions";
import Ripples from "react-ripples";

class BottomNavbar extends Component {
  render() {
    return (
      <div className="bottommenu">
        <ul>
          <Link to="/">
            <li>
              <Ripples>
                <button
                  style={{ border: "none", background: "transparent" }}
                  className="active"
                >
                  <AiTwotoneHome />
                </button>
              </Ripples>
            </li>
          </Link>
          <Link to="/search">
            <li>
              <Ripples>
                <button
                  style={{ border: "none", background: "transparent" }}
                  href="#news"
                >
                  <IoMdSearch />
                </button>
              </Ripples>
            </li>
          </Link>
          <Link to="/map">
            <li>
              <Ripples>
                <button
                  style={{ border: "none", background: "transparent" }}
                  href="#map"
                >
                  <GoLocation />
                </button>
              </Ripples>
            </li>
          </Link>
          <Link to="/steamcart">
            <li>
              <Ripples>
                <button
                  style={{ border: "none", background: "transparent" }}
                  href="#cart"
                >
                  <AiOutlineShoppingCart />
                </button>
              </Ripples>
            </li>
          </Link>
          <Link to="/forum">
            <li>
              <Ripples>
                <button
                  style={{ border: "none", background: "transparent" }}
                  href="#icon"
                >
                  <MdForum />
                </button>
              </Ripples>
            </li>
          </Link>
          {this.props.isAuthenticated ? (
            <Link to="/account">
              <li>
                <Ripples>
                  <button
                    style={{ border: "none", background: "transparent" }}
                    href="#icon"
                  >
                    <MdAccountCircle />
                  </button>
                </Ripples>
              </li>
            </Link>
          ) : (
            <Link to="/signin">
              <li>
                <Ripples>
                  <button
                    style={{ border: "none", background: "transparent" }}
                    href="#icon"
                  >
                    <MdAccountCircle />
                  </button>
                </Ripples>
              </li>
            </Link>
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
