import React, { Component } from "react";
import { Link } from "react-router-dom";

export default class StoreHome extends Component {
  render() {
    return (
      <div className="store-home">
        <h1>Services</h1>
        <div className="store-home-content">
          <div className="store-home-buttons">
            <Link to="./storevendor">
              <button>Vendor Management</button>
            </Link>
            <button>Manage Services</button>
            <Link to="./storeinventory">
              <button>Inventory Management</button>
            </Link>
            <button>Employee Management</button>
            <button>Create Management</button>
            <button>Manage Products</button>
          </div>
        </div>
      </div>
    );
  }
}
