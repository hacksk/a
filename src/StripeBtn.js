import React from "react";
import StripeCheckout from "react-stripe-checkout";
import axios from "axios";
import { connect } from "react-redux";
import {message} from "antd";

const stripeBtn = () => {
  const publishableKey = "pk_test_UAHsd0FgK8CJC6PXgoZ6cIeO00y9JJDBn5";

  const onToken = token => {
    // const body = {
    //   amount: "",
    //   token: token
    // };
    axios
      .post("http://103.194.69.70:8080/api/v1/order/place_orders/")
      .then(response => {
        console.log(response);
        message.success("Payment Success");
      })
      .catch(error => {
        console.log("Payment Error: ", error);
        message.error("Payment failed");
      });
  };
  return (
    <StripeCheckout
      label="Buy Now" //Component button text
      name="Auto Moto" //Modal Header
      description="Upgrade to a premium account today."
      panelLabel="Buy " //Submit button in modal
      amount={12000} //Amount in cents $9.99
      currency={"INR"}
      token={onToken}
      stripeKey={publishableKey}
      shippingAddress={false}
      billingAddress={false}
      livemode={true}
      allowRememberMe={true}
    />
  );
};
const mapStateToProps = state => {
  return {
    addedItems: state.cart.addedItems,
    total: state.total
  };
};

export default connect(mapStateToProps)(stripeBtn);
