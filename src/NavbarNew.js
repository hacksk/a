import React, { Component } from "react";
import {
  MdLocationOn,
  MdShoppingCart,
  MdAccountCircle,
  MdForum
} from "react-icons/md";
import { AiTwotoneHome } from "react-icons/ai";
import { IoMdSearch, IoMdMenu } from "react-icons/io";
import { Link } from "react-router-dom";
import { Tooltip, Button } from "antd";

const settings = <span>Settings</span>;
const text = <span>Home</span>;
const text1 = <span>Search</span>;
const text2 = <span>Location</span>;
const text3 = <span>Cart</span>;
const text4 = <span>Forum</span>;

// const buttonWidth = 70;

export default class NavbarNew extends Component {
  render() {
    return (
      <div className="newnav" style={{ zIndex: "1000" }}>
        <ul>
          <li>
            <button
              className="navmenu"
              style={{ backgroundColor: "transparent", border: "none" }}
            >
              <Tooltip placement="top" title={settings}>
                <IoMdMenu />
              </Tooltip>
            </button>
          </li>
          <Link to="/">
            <li>
              <Tooltip placement="top" title={text}>
                <Button>
                  <AiTwotoneHome />
                </Button>
              </Tooltip>
            </li>
          </Link>
          <Link to="/services">
            <li>
              <Tooltip placement="top" title={text1}>
                <Button>
                  <IoMdSearch />
                </Button>
              </Tooltip>
            </li>
          </Link>
          <Link to="./map">
            <li>
              <Tooltip placement="top" title={text2}>
                <Button>
                  <MdLocationOn />
                </Button>
              </Tooltip>
            </li>
          </Link>
          <Link to="/steamcart">
            <li>
              <Tooltip placement="top" title={text3}>
                <Button>
                  <MdShoppingCart />{" "}
                </Button>
              </Tooltip>
            </li>
          </Link>
          <Link to="/forum">
            <li>
              <Tooltip placement="top" title={text4}>
                <Button>
                  <MdForum />{" "}
                </Button>
              </Tooltip>
            </li>
          </Link>
          <Link to="/signin">
            <li>
              <a href="#home">
                <MdAccountCircle />
              </a>
            </li>
          </Link>
        </ul>
      </div>
    );
  }
}
