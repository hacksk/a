import React, { Fragment } from "react";
import StripeCheckout from "react-stripe-checkout";
import axios from "axios";


const stripeBtn = () => {
  const publishableKey = "pk_test_UAHsd0FgK8CJC6PXgoZ6cIeO00y9JJDBn5";
  
   
  const onToken = token => {
    const body = {
      amount: "",
      token: token
  };  axios
      .post("http://localhost:8000/payment", body)
      .then(response => {
        console.log(response);
        alert("Payment Success");
      })
      .catch(error => {
        console.log("Payment Error: ", error);
        alert("Payment Error");
      });
  };  return (
    <StripeCheckout
      label="Buy Now" //Component button text
      name="Auto Moto" //Modal Header
      description="Upgrade to a premium account today."
      panelLabel="Buy " //Submit button in modal
      amount={1500000} //Amount in cents $9.99
      currency={'INR'}
      token={onToken}
      stripeKey={publishableKey}
      shippingAddress={false}
      billingAddress={false}
      livemode={true}
      allowRememberMe={true}
    />
  );
};export default stripeBtn;