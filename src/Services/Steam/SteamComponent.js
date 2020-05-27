import React, { Component } from "react";
import { Link } from "react-router-dom";
import Home from "./components/Home";
import Cart from "./components/Cart";
import "../../index.css";
import { MdShoppingCart } from "react-icons/md";

class SteamComponent extends Component {
  componentDidMount() {
    window.scrollTo(0, 0);
  }
  render() {
    return (
      <div style={{paddingTop:"8em"}} className="height-define">
        <Home />
      </div>
    );
  }
}

export default SteamComponent;
