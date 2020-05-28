import React, { Component } from "react";
import AccCarousel from "./AccCarousel";
import Stripe from "./StripeBtn";
import Breadcrumb from "react-bootstrap/Breadcrumb";
import axios from "axios";
import { message, Button } from "antd";

const info = () => {
  message.info("Added To The Cart");
};

class AccMain extends Component {
  state = {
    persons: [],
  };

  componentDidMount() {
    axios
      .get(`https://automoto.techbyheart.in/api/v1/customer/`, {
        headers: {
          Authorization:
            "Bearer eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJ0b2tlbl90eXBlIjoiYWNjZXNzIiwiZXhwIjoxNTk5MzA5MjcyLCJqdGkiOiI0MjkzZjE3ZGY1OWQ0ZWJhOGFhMmRhNWZlMjBiNTg3YyIsInVzZXJfaWQiOjIsInVzZXIiOnsiaWQiOjIsImxhc3RfbG9naW4iOm51bGwsImVtYWlsIjoidmlzaG51dXJAdGVjaGJ5aGVhcnQuaW4iLCJmaXJzdF9uYW1lIjoiIiwibGFzdF9uYW1lIjoiIiwidXNlcm5hbWUiOiJ2aXNobnU2MjgyIiwicGhvbmUiOiIrOTE2MjgyNDQzNzY0IiwiZGF0ZV9qb2luZWQiOiIyMDIwLTA1LTI2VDA1OjI0OjU0Ljc3MDAwMFoiLCJncm91cHMiOltdLCJ1c2VyX3Blcm1pc3Npb25zIjpbXX19.CzUtlZseJ6iDwvPyaCZ1UqzH_NwVsVN_jy1cVIL5-1Y",
        },
      })
      .then((res) => {
        const persons = res.data;
        this.setState({ persons });
      });
  }
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
          <div style={{ width: "30%" }}>
            <h2 style={{ color: "white" }}>{this.props.item.title}</h2>
            <p style={{ color: "white" }}>
              Over a period of time ,the emblems or badges on a car get affected
              by salt deposits which result in decolouration and dirt deposits
              etc. Steam Logo service ensures your badges are in new condition
              by washing away all kinds of dirt and salts in minute gaps to give
              it a refreshed look
            </p>
          </div>
        </div>

        <div className="price">
          <div className="rs">
            <h3>{this.props.item.price}</h3>
            <h5 className="cost">

              incl.20% vat,excl. <span className="shipping">shipping cost</span>
            </h5>
          </div>

          <button
            onClick={info}
            style={{
              color: "white",
              border: "none",
              background: "transparent",
            }}
          >
            Add to cart
          </button>
        </div>
      </div>
    );
  }
}

export default AccMain;
