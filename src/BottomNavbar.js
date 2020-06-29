import React, { Component } from "react";
import { connect } from "react-redux";
import { MdAccountCircle, MdForum } from "react-icons/md";
import { AiTwotoneHome, AiOutlineShoppingCart } from "react-icons/ai";
import { IoMdSearch } from "react-icons/io";
import { Link } from "react-router-dom";
import { GoLocation } from "react-icons/go";
import { signOut } from "./actions/authActions";

class BottomNavbar extends Component {
  render() {
    return (
      <div className="bottommenu">
        <ul>
          <Link to="/">
            <li>
              <button
                style={{ border: "none", background: "transparent" }}
                className="active"
              >
                <AiTwotoneHome />
              </button>
            </li>
          </Link>
          <Link to="/search">
            <li>
              <button
                style={{ border: "none", background: "transparent" }}
                href="#news"
              >
                <IoMdSearch />
              </button>
            </li>
          </Link>
          <Link to="/map">
            <li>
              <button
                style={{ border: "none", background: "transparent" }}
                href="#map"
              >
                <GoLocation />
              </button>
            </li>
          </Link>
          <Link to="/steamcart">
            <li>
              <button
                style={{ border: "none", background: "transparent" }}
                href="#cart"
              >
                <AiOutlineShoppingCart />
              </button>
            </li>
          </Link>
          <Link to="/forum">
            <li>
              <button
                style={{ border: "none", background: "transparent" }}
                href="#icon"
              >
                <MdForum />
              </button>
            </li>
          </Link>
          {this.props.isAuthenticated ? (
            <Link to="/account">
              <li>
                <button
                  style={{ border: "none", background: "transparent" }}
                  href="#icon"
                >
                  <MdAccountCircle />
                </button>
              </li>
            </Link>
          ) : (
            <Link to="/signin">
              <li>
                <button
                  style={{ border: "none", background: "transparent" }}
                  href="#icon"
                >
                  <MdAccountCircle />
                </button>
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
