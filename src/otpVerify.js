import React, { Component } from "react";
import { Link } from "react-router-dom";
import OtpInput from "react-otp-input";
import { connect } from "react-redux";
import { verifyOtp } from "./actions/authActions";

class otpVerify extends Component {
  constructor(props) {
    super(props);

    this.state = {
      otp: "",
    };
  }

  static getDerivedStateFromProps(nextProps) {
    if (nextProps.userData === null) {
      nextProps.history.push("/signin/");
    }
  }

  onOtpChange = (otp) => {
    this.setState({
      otp: otp,
    });
  };

  handleFormSubmit = (event) => {
    event.preventDefault();
    const { otp } = this.state;
    this.props.verifyOtp(otp);
  };

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
        <form onSubmit={this.handleFormSubmit}>
          <div className="otp-input">
            <OtpInput
              onChange={this.onOtpChange}
              value={this.state.otp}
              numInputs={6}
              separator={<span>-</span>}
            />
          </div>

          <div className="login-btns">
            <Link to="/account">
              <button className="signin-btn" type="submit">
                VERIFY OTP
              </button>
            </Link>
            {/* <Link to="/signin">
              <button
                style={{
                  border: "none",
                  background: "transparent",
                  color: "rgba(255, 255, 255, 0.87)"
                }}
              >
                RESEND OTP
              </button>
            </Link> */}
          </div>
        </form>
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    userData: state.auth.userData,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    verifyOtp: (otp) => {
      dispatch(verifyOtp(otp));
    },
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(otpVerify);
