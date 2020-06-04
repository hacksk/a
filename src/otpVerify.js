import React, { Component } from "react";
import { Link } from "react-router-dom";
import OtpInput from "react-otp-input";

class otpVerify extends Component {
  constructor(props) {
    super(props);
  }
  componentDidMount() {
    const phone = localStorage.getItem( "phone" ) ;
    console.log(phone)
    this.setState(phone);
}

  render() {
    return (
      <div className="signin">
        <div className="signin-logos">
          <img
            alt=""
            style={{ height: "15vh" }}
            src={require("./assets/automotologo.svg")}
          ></img>
          <div className="signin-logos-line">
            <img
              alt=""
              style={{ height: "7vh" }}
              src={require("./assets/moto365logo.svg")}
            ></img>
            <img
              alt=""
              style={{ height: "5.7vh" }}
              src={require("./assets/amlogo.svg")}
            ></img>
          </div>
        </div>
        <form onSubmit={this.handleSubmit}>
          <div className="otp-input">
            <OtpInput
              onChange={(otp) => console.log(otp)}
              numInputs={6}
              separator={<span>-</span>}
            />
          </div>

          <div className="login-btns">
            <button className="signin-btn" type="submit">
              VERIFY OTP
            </button>
            <Link to="/signin">
              <button
                style={{
                  border: "none",
                  background: "transparent",
                  color: "rgba(255, 255, 255, 0.87)",
                }}
              >
                RESEND OTP
              </button>
            </Link>
          </div>
        </form>
      </div>
    );
  }
}

export default otpVerify;
