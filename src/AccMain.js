import React, { Component } from "react";
import AccCarousel from "./AccCarousel";
import Stripe from "./StripeBtn";
import Breadcrumb from "react-bootstrap/Breadcrumb";


class AccMain extends Component {
  render() {
    return (
      <div className="height-define">
        
        <div className="accesories">
          <div className="accesories-carousel">
            <AccCarousel />
          </div>
          <div className="accesories-detail"></div>
        </div>
        <div className="price">
          <div className="rs">
            <h3>Rs 15,000</h3>
            <h5 className="cost">
              incl.20% vat,excl. <span className="shipping">shipping cost</span>
            </h5>
          </div>
          <Stripe className="estimate"/>
        </div>
      </div>
    );
  }
}

export default AccMain;
