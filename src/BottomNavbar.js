import React, { Component } from "react";
import {
  MdAccountCircle,
  MdForum,
} from "react-icons/md";
import { AiTwotoneHome,AiOutlineShoppingCart } from "react-icons/ai";
import { IoMdSearch } from "react-icons/io";
import { Link } from "react-router-dom";
import { GoLocation } from "react-icons/go";


export default class BottomNavbar extends Component {
  render() {
    return (
      <div className="bottommenu">
        <ul>
          <Link to="/">
            <li>
              <a className="active" href="#home">
                <AiTwotoneHome />
              </a>
            </li>
          </Link>
          <Link to="/services">
            <li>
              <a href="#news">
                <IoMdSearch />
              </a>
            </li>
          </Link>
          <Link to="/map">
            <li>
              <a href="#map">
                <GoLocation />
              </a>
            </li>
          </Link>
          <Link to="/steamcart">
            <li>
              <a href="#cart">
                <AiOutlineShoppingCart />
              </a>
            </li>
          </Link>
          <Link to="/forum">
            <li>
              <a href="#icon">
                <MdForum />
              </a>
            </li>
          </Link>
          <Link to="/account">
            <li>
              <a href="#icon">
                <MdAccountCircle />
              </a>
            </li>
          </Link>
        </ul>
      </div>
    );
  }
}
