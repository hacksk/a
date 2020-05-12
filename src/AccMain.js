import React, { Component } from "react";
import AccCarousel from "./AccCarousel";
import Stripe from "./StripeBtn";
import Breadcrumb from "react-bootstrap/Breadcrumb";


class AccMain extends Component {
  render() {
    return (
      <div>
      <div className="height-define">
        
        <div className="accesories-main">
          <div className="accesories-carousel">
            <AccCarousel />
          </div>
          <div className="accesories-detail"></div>
        </div>
        <div style={{width:"30%"}}>
        <h2 style={{color:"white"}}>Steam Exterior</h2>
        <p style={{color:"white"}}>
        Over a period of time ,the emblems or badges on a car get affected by salt deposits which result in decolouration and dirt deposits etc. Steam Logo service ensures your badges are in new condition by washing away all kinds of dirt and salts in minute gaps to give it a refreshed look
        </p>
        </div>
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
