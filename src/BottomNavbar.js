import React, { Component } from "react";
import {
  MdLocationOn,
  MdShoppingCart,
  MdAccountCircle,
  MdForum,
} from "react-icons/md";
import { AiTwotoneHome } from "react-icons/ai";
import { IoMdSearch, IoMdMenu } from "react-icons/io";
import { Link } from "react-router-dom";

export default class BottomNavbar extends Component {
  render() {
    return (
      <div className="bottommenu">
        <ul>
          <Link to="/">
            <li>
              <a class="active" href="#home">
                <AiTwotoneHome />
              </a>
            </li>
          </Link>
          <li>
            <a href="#news">
              <IoMdSearch />
            </a>
          </li>
          <Link to="/map">
            <li>
              <a href="#map">
                <MdLocationOn />
              </a>
            </li>
          </Link>
          <Link to="/steamcart">
            <li>
              <a href="#about">
                <MdShoppingCart />
              </a>
            </li>
          </Link>
          <Link to="/forum">
            <li>
              <a>
                <MdForum />
              </a>
            </li>
          </Link>
          <Link to="/account">
            <li>
              <a href="#about">
                <MdAccountCircle />
              </a>
            </li>
          </Link>
        </ul>
      </div>
    );
  }
}
