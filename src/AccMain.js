import React, { Component } from "react";
import AccCarousel from "./AccCarousel";
import Stripe from "./StripeBtn";
import Breadcrumb from "react-bootstrap/Breadcrumb";
import axios from "axios";

class AccMain extends Component {
  state = {
    persons: [],
  };

  componentDidMount() {
    axios
      .get(`https://automoto.techbyheart.in/api/v1/customer/`, {
        headers: {
          Authorization:
            "Bearer eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJ0b2tlbl90eXBlIjoiYWNjZXNzIiwiZXhwIjoxNTk5MTEwNzI5LCJqdGkiOiJjYjc3MjBiZDUzZDQ0ZWQwYTFmNzNjYTRlNzMwNzg3ZCIsInVzZXJfaWQiOjIsInVzZXIiOnsiaWQiOjIsImxhc3RfbG9naW4iOm51bGwsImVtYWlsIjoidmlzaG51dXJAdGVjaGJ5aGVhcnQuaW4iLCJmaXJzdF9uYW1lIjoiIiwibGFzdF9uYW1lIjoiIiwidXNlcm5hbWUiOiJ2aXNobnU2MjgyIiwicGhvbmUiOiIrOTE2MjgyNDQzNzY0IiwiZGF0ZV9qb2luZWQiOiIyMDIwLTA1LTI2VDA1OjI0OjU0Ljc3MDIyNVoiLCJncm91cHMiOltdLCJ1c2VyX3Blcm1pc3Npb25zIjpbXX19.60Xb8T8_p6TXvtF13oJU8kD3l8gYUVHyYkFm-WxCH8w",
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
            <h2 style={{ color: "white" }}>Steam Exterior</h2>
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
            <h3>Rs 15,000</h3>
            <h5 className="cost">
              <ul>
                {this.state.persons.map((person) => (
                  <li>{person.name}</li>
                ))}
              </ul>
              incl.20% vat,excl. <span className="shipping">shipping cost</span>
            </h5>
          </div>
          <Stripe className="estimate" />
        </div>
      </div>
    );
  }
}

export default AccMain;
