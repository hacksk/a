import React, { Component } from 'react';
import { MdLocationOn, MdShoppingCart, MdAccountCircle } from 'react-icons/md';
import { AiTwotoneHome } from 'react-icons/ai';
import { IoMdSearch, IoMdMenu } from 'react-icons/io';
// import { Link } from 'react-router-dom';

export default class NavbarNew extends Component {
  render() {
    return (
      <div className="newnav">
        <ul>
          <li>
            <a className="navmenu">
              <IoMdMenu />
            </a>
          </li>
          <li>
            <a className="active" href="#home">
              <AiTwotoneHome />
            </a>
          </li>
          <li>
            <a href="#home">
              <IoMdSearch />
            </a>
          </li>
          {/* <Link to="/map"> */}
          <li>
            <a href="#map">
              <MdLocationOn />
            </a>
          </li>
          {/* </Link> */}
          <li>
            <a href="#home">
              <MdShoppingCart />
            </a>
          </li>
          <li>
            <a href="#home">
              <MdAccountCircle />
            </a>
          </li>
        </ul>
      </div>
    );
  }
}
