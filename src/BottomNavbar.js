import React, { Component } from "react";
import { MdLocationOn, MdShoppingCart, MdAccountCircle } from "react-icons/md";
import { AiTwotoneHome } from "react-icons/ai";
import { IoMdSearch, IoMdMenu } from "react-icons/io";

export default class BottomNavbar extends Component {
  render() {
    return (
      <div className="bottommenu">
        <ul>
          <li>
            <a class="active" href="#home">
              <AiTwotoneHome />
            </a>
          </li>
          <li>
            <a href="#news">
              <IoMdSearch />
            </a>
          </li>
          <li>
            <a href="#contact">
              <MdLocationOn />
            </a>
          </li>
          <li>
            <a href="#about">
              <MdShoppingCart />
            </a>
          </li>
          <li>
            <a href="#about">
              <MdAccountCircle />
            </a>
          </li>
        </ul>
      </div>
    );
  }
}
