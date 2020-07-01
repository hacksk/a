import React, { Component } from "react";
import Breadcrumb from "react-bootstrap/Breadcrumb";
import "bootstrap/dist/css/bootstrap.min.css";
import { Tabs } from "antd";
import Stripe from "../StripeBtn";
import { FaArrowRight } from "react-icons/fa";
import axios from "axios";
import {Link} from "react-router-dom"

const { TabPane } = Tabs;
// const { Option } = Select;

function callback(key) {
  // console.log(key);
}

export default class Payment extends Component {
  handleSubmit = (event) => {
    axios
      .post(`https://automoto.techbyheart.in/api/v1/order/place_orders/`)
      .then((res) => {
        console.log(res);
      });
  };
  render() {
    return (
      <div style={{ maxHeight: "auto" }}>
        <Breadcrumb separator=">">
          <Breadcrumb.Item>Home</Breadcrumb.Item>
          <Breadcrumb.Item href="">Bill</Breadcrumb.Item>
          <Breadcrumb.Item>Payment</Breadcrumb.Item>
        </Breadcrumb>
        <div className="payment-content">
          <div className="payment-method">
            {/* <h5 style={{ color: "white" }}>PAYMENT METHODS </h5> */}
            <Tabs defaultActiveKey="1" onChange={callback}>
              <TabPane tab="CREDIT/DEBIT CARD" key="1">
                <div style={{ display: "flex", flexDirection: "column" }}>
                  <img
                    alt=""
                    style={{ width: "30em" }}
                    src="https://cdn.hsbc.co.in/content/dam/hsbc/in/images/hsbc-premier-mastercard.png/_jcr_content/renditions/cq5dam.web.1280.1280.png"
                  ></img>
                  <div className="payment-estimate">
                    <Stripe />
                  </div>
                  <div
                    style={{
                      display: "flex",
                      justifyContent: "center",
                      paddingTop: "2em",
                    }}
                  >
                    <Link to="/payment/feedback">
                    <button  className="continue">
                      Continue
                      <FaArrowRight />
                    </button>
                    </Link>
                  </div>
                </div>
              </TabPane>
              <TabPane tab="PAYMENT PARTNERS" key="2">
                content of payment PARTNERS
              </TabPane>
              <TabPane tab="ONLINE BANKING" key="3">
                Content of Tab Pane 3
              </TabPane>
            </Tabs>
          </div>
          <div className="payment-objects">
            <h5 style={{ color: "white" }}>PAYMENT SUMMARY </h5>
          </div>
        </div>
      </div>
    );
  }
}
