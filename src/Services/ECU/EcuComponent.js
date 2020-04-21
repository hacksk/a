import React, { Component } from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import { Link } from "react-router-dom";
import Navbar from './components/Navbar';
import Home from './components/Home';
import Cart from './components/Cart';
import '../../index.css';
import { MdShoppingCart } from 'react-icons/md';

class EcuComponent extends Component {
  render() {
    return (
      <div className="height-define">
        <Home />
        <Link to="/steamcart">
          <div className="shopping-cart">
            <MdShoppingCart className="shopping-cart-icon" />
          </div>
        </Link>
      </div>
    );
  }
}

export default EcuComponent;
