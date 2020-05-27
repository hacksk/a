import React, { Component } from "react";
import AccCarousel from "./AccCarousel";
import { connect } from "react-redux";
import { addToCart } from "./actions/cartActions";
import "../../../index.css";
import { message, Button } from "antd";

const info = () => {
  message.info("Added To The Cart");
};

class AccMain extends Component {
  handleClick = (id) => {
    this.props.addToCart(id);
  };

  render() {
    let itemList = this.props.items.map((item) => {
      return (
        <div>
          <div className="height-define">
            <div className="accesories-main">
              <div className="accesories-carousel">
                <AccCarousel />
              </div>
              <div className="accesories-detail"></div>
            </div>
            <div style={{ width: "30%" }}>
              <h2 style={{ color: "white" }}>Steam Exterior</h2>
              <p style={{ color: "white" }}>
                Over a period of time ,the emblems or badges on a car get
                affected by salt deposits which result in decolouration and dirt
                deposits etc. Steam Logo service ensures your badges are in new
                condition by washing away all kinds of dirt and salts in minute
                gaps to give it a refreshed look
              </p>
            </div>
          </div>

          <div className="price">
            <div className="rs">
              <h3>{item.price}</h3>
              <h5 className="cost">
                incl.20% vat,excl.{" "}
                <span className="shipping">shipping cost</span>
              </h5>
            </div>
            {/* <Stripe className="estimate"/> */}
            <button
              onClick={() => {
                this.handleClick(item.id);
              }}
              style={{
                background: "transparent",
                color: "white",
                border: "none",
              }}
            >
              Add to Cart
            </button>
          </div>
        </div>
      );
    });
    return (
      <div className="container">
        <div className="box">{itemList}</div>
      </div>
    );
  }
}
const mapStateToProps = (state) => {
  return {
    items: state.items,
  };
};
const mapDispatchToProps = (dispatch) => {
  return {
    addToCart: (id) => {
      dispatch(addToCart(id));
    },
  };
};
export default connect(mapStateToProps, mapDispatchToProps)(AccMain);
